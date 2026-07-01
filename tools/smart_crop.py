#!/usr/bin/env python3
"""
Подготовка портретов миниатюр для карточек операторов: опциональный кроп
по голове/плечам + вырезание белого фона в прозрачность. Результат —
всегда PNG с альфа-каналом.

Два режима входа:
  1. Уже готовый квадрат (подготовлен вручную, например в Photoshop по
     шаблону 600x600, белый фон) — используй --no-crop, скрипт только
     срежет фон в прозрачность и подгонит размер.
  2. Исходное фото миниатюры без кропа (белый фон, фигурка не отцентрована
     как надо) — без --no-crop скрипт сам найдёт баунд-бокс фигурки и
     кадрирует квадрат по голове/плечам:
       a. Находит баунд-бокс не-белых пикселей (сама миниатюра + база).
       b. Берёт квадрат размером с ширину баунд-бокса, начиная от его
          верхней кромки (с небольшим отступом).
       c. Центрирует этот квадрат по горизонтали на центре масс верхней
          полосы баунд-бокса (голова/плечи), а не по центру всего бокса —
          иначе поднятое оружие или штандарт в сторону утягивают кадр.

Вырезание фона (включено по умолчанию, отключается --no-alpha):
  Пиксели ближе к белому, чем BG_UPPER, становятся полностью прозрачными;
  пиксели темнее BG_LOWER — полностью непрозрачными; между ними — плавный
  переход (мягкое перо по краю миниатюры, без зазубрин).

Использование:
    # готовый квадрат из Photoshop — только вырезать фон
    python3 tools/smart_crop.py "input/Night Lord Warrior.jpg" docs/img/portraits/nemesis-claw/warrior.png --no-crop

    # исходное неотцентрованное фото — кроп + вырезание фона
    python3 tools/smart_crop.py input.jpg output.png

    # ручной кроп координатами, если авто-кроп утянул кадр в сторону
    # (так было с Ventrilokar — рядом со шлемом стоял штандарт)
    python3 tools/smart_crop.py input.jpg output.png --manual-box 350,260,660,570

    # пакетная обработка целой папки (все *.jpg/*.jpeg/*.png -> output dir)
    python3 tools/smart_crop.py --batch "input_dir/" docs/img/portraits/<team-slug>/ --no-crop
"""
import argparse
import pathlib
import sys

import numpy as np
from PIL import Image

BG_THRESHOLD = 235      # порог для поиска баунд-бокса фигурки (шаг кропа)
TOP_BAND_FRAC = 0.30    # доля высоты баунд-бокса для поиска горизонтального центра головы
TOP_PAD_FRAC = 0.04     # небольшой отступ над самой верхней точкой фигурки
WIDTH_SLACK = 1.05      # запас по ширине, чтобы не срезать рога/шлем/наплечники

BG_UPPER = 235          # выше этого (ближе к белому) — полностью прозрачно
BG_LOWER = 205          # ниже этого — полностью непрозрачно; между — плавный переход


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


def remove_white_bg(img: Image.Image) -> Image.Image:
    arr = np.asarray(img.convert("RGB")).astype(np.float32)
    min_ch = arr.min(axis=2)
    alpha = np.clip((BG_UPPER - min_ch) / (BG_UPPER - BG_LOWER) * 255, 0, 255).astype(np.uint8)
    rgba = np.dstack([arr.astype(np.uint8), alpha])
    return Image.fromarray(rgba, mode="RGBA")


def process(src: pathlib.Path, dest: pathlib.Path, size: int, manual_box, no_crop: bool, no_alpha: bool):
    img = Image.open(src).convert("RGB")
    if no_crop:
        out = img
    elif manual_box:
        out = img.crop(manual_box)
    else:
        out = smart_crop(img)
    out = out.resize((size, size), Image.LANCZOS)
    if not no_alpha:
        out = remove_white_bg(out)
    dest = dest.with_suffix(".png")
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest)
    print(f"{src.name} -> {dest} ({size}x{size}{', без альфы' if no_alpha else ''})")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("input", help="файл или (с --batch) папка с исходниками")
    ap.add_argument("output", help="файл или (с --batch) папка для результатов (всегда сохраняется как .png)")
    ap.add_argument("--size", type=int, default=600, help="сторона квадрата на выходе, px (по умолчанию 600)")
    ap.add_argument("--no-crop", action="store_true",
                     help="не кадрировать — вход уже квадратный (подготовлен вручную), только вырезать фон и подогнать размер")
    ap.add_argument("--no-alpha", action="store_true", help="не вырезать белый фон в прозрачность")
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
            process(f, out_dir / f.stem.lower().replace(" ", "_"), args.size, manual_box, args.no_crop, args.no_alpha)
    else:
        process(pathlib.Path(args.input), pathlib.Path(args.output), args.size, manual_box, args.no_crop, args.no_alpha)


if __name__ == "__main__":
    main()
