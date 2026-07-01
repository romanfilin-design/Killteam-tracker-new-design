#!/usr/bin/env python3
"""
Умный кроп портретов миниатюр: убирает белое поле вокруг фигурки и
кадрирует квадрат по голове/плечам, а не по всей фигуре.

Алгоритм:
  1. Находит баунд-бокс не-белых пикселей (сама миниатюра + база).
  2. Берёт квадрат размером с ширину баунд-бокса, начиная от его верхней
     кромки (с небольшим отступом).
  3. Центрирует этот квадрат по горизонтали на центре масс верхней полосы
     баунд-бокса (голова/плечи), а не по центру всего бокса — иначе
     поднятое оружие или штандарт в сторону утягивают кадр.

Использование:
    python3 tools/smart_crop.py input.jpg output.jpg
    python3 tools/smart_crop.py input.jpg output.jpg --size 360
    python3 tools/smart_crop.py input.jpg output.jpg --manual-box LEFT,TOP,RIGHT,BOTTOM

Если авто-кроп утягивает кадр (случай знамени/штандарта рядом с головой,
как было с Ventrilokar) — открой исходник, прикинь координаты на глаз и
передай --manual-box вместо авто-алгоритма.

Пакетная обработка целой папки (все *.jpg/*.png -> output dir):
    python3 tools/smart_crop.py --batch input_dir/ output_dir/
"""
import argparse
import pathlib
import sys

import numpy as np
from PIL import Image

BG_THRESHOLD = 235      # пиксель считается фоном, если min(R,G,B) > этого значения
TOP_BAND_FRAC = 0.30    # доля высоты баунд-бокса, используемая для поиска горизонтального центра головы
TOP_PAD_FRAC = 0.04     # небольшой отступ над самой верхней точкой фигурки
WIDTH_SLACK = 1.05      # запас по ширине, чтобы не срезать рога/шлем/наплечники


def smart_crop(img: Image.Image) -> Image.Image:
    arr = np.asarray(img.convert("RGB"))
    fg = arr.min(axis=2) < BG_THRESHOLD
    rows = np.where(fg.any(axis=1))[0]
    cols = np.where(fg.any(axis=0))[0]
    if rows.size == 0 or cols.size == 0:
        raise ValueError("не нашёл фигурку на фоне — изображение почти полностью белое/пустое")

    top, bottom = rows.min(), rows.max()
    left, right = cols.min(), cols.max()
    bbox_h = bottom - top + 1
    bbox_w = right - left + 1

    pad = int(TOP_PAD_FRAC * bbox_h)
    crop_top = max(0, top - pad)

    band_bottom = top + int(TOP_BAND_FRAC * bbox_h)
    band_mask = fg[top:band_bottom, left:right + 1]
    col_counts = band_mask.sum(axis=0)
    if col_counts.sum() > 0:
        cx = int(np.average(np.arange(band_mask.shape[1]), weights=col_counts)) + left
    else:
        cx = (left + right) // 2

    square = int(min(bbox_w, bbox_h) * WIDTH_SLACK)
    half = square // 2
    crop_left = cx - half
    crop_right = cx + half
    if crop_left < 0:
        crop_right -= crop_left
        crop_left = 0
    if crop_right > arr.shape[1]:
        crop_left -= (crop_right - arr.shape[1])
        crop_right = arr.shape[1]
    crop_left = max(0, crop_left)

    crop_bottom = min(crop_top + (crop_right - crop_left), arr.shape[0])
    return img.crop((crop_left, crop_top, crop_right, crop_bottom))


def process(src: pathlib.Path, dest: pathlib.Path, size: int, manual_box):
    img = Image.open(src).convert("RGB")
    if manual_box:
        out = img.crop(manual_box)
    else:
        out = smart_crop(img)
    out = out.resize((size, size), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest, quality=90)
    print(f"{src.name} -> {dest} ({size}x{size})")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("input", help="файл или (с --batch) папка с исходниками")
    ap.add_argument("output", help="файл или (с --batch) папка для результатов")
    ap.add_argument("--size", type=int, default=360, help="сторона квадрата на выходе, px (по умолчанию 360)")
    ap.add_argument("--manual-box", default=None,
                     help="ручной кроп LEFT,TOP,RIGHT,BOTTOM в пикселях исходника вместо авто-алгоритма")
    ap.add_argument("--batch", action="store_true", help="обработать все *.jpg/*.jpeg/*.png в папке input")
    args = ap.parse_args()

    manual_box = None
    if args.manual_box:
        manual_box = tuple(int(x) for x in args.manual_box.split(","))
        if len(manual_box) != 4:
            sys.exit("--manual-box должен быть вида LEFT,TOP,RIGHT,BOTTOM")

    if args.batch:
        in_dir = pathlib.Path(args.input)
        out_dir = pathlib.Path(args.output)
        files = sorted([p for p in in_dir.iterdir() if p.suffix.lower() in (".jpg", ".jpeg", ".png")])
        if not files:
            sys.exit(f"В {in_dir} не найдено *.jpg/*.jpeg/*.png")
        for f in files:
            process(f, out_dir / (f.stem.lower().replace(" ", "_") + ".jpg"), args.size, manual_box)
    else:
        process(pathlib.Path(args.input), pathlib.Path(args.output), args.size, manual_box)


if __name__ == "__main__":
    main()
