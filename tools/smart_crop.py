#!/usr/bin/env python3
"""
Подготовка портретов миниатюр для карточек операторов: вырезание фона
(любого цвета, не только белого — через ML-модель rembg из общего venv
Warhammer/.venv-tools/, тот же инструмент, что использует Spearhead) +
обрезка по альфе с отступом + вписывание в квадрат нужного размера.
Результат — всегда PNG с альфа-каналом.

Использование:
    # одиночный файл — фон снимается автоматически, кроп по альфе
    python3 tools/smart_crop.py "input/Night Lord Warrior.jpg" docs/img/portraits/nemesis-claw/warrior.png

    # ручной кроп координатами перед снятием фона — если на фото несколько
    # миниатюр или лишние предметы рядом (штандарт, база другого юнита)
    python3 tools/smart_crop.py input.jpg output.png --manual-box 350,260,660,570

    # без снятия фона — просто ресайз в квадрат (если фон уже прозрачный/не нужен)
    python3 tools/smart_crop.py input.png output.png --no-alpha

    # пакетная обработка целой папки (все *.jpg/*.jpeg/*.png/*.webp -> output dir)
    python3 tools/smart_crop.py --batch "input_dir/" docs/img/portraits/<team-slug>/
"""
import argparse
import pathlib
import subprocess
import sys

from PIL import Image

SCRIPT_DIR = pathlib.Path(__file__).resolve().parent
# Общее окружение для всех проектов Warhammer/ — см. Spearhead/source_portraits/README.md
VENV_TOOLS = SCRIPT_DIR.parent.parent / ".venv-tools"
REMBG = VENV_TOOLS / "bin" / "rembg"

PAD_PCT = 0.04   # отступ вокруг фигурки после обрезки по альфе, доля от размера бокса
EXTS = {".jpg", ".jpeg", ".png", ".webp"}


def remove_bg(src: pathlib.Path, dest_tmp: pathlib.Path) -> None:
    if not REMBG.exists():
        sys.exit(
            f"rembg не найден по пути {REMBG}\n"
            "Ожидается общее окружение Warhammer/.venv-tools/ (см. Spearhead/source_portraits/README.md)."
        )
    subprocess.run([str(REMBG), "i", str(src), str(dest_tmp)], check=True)


def crop_alpha(im: Image.Image, pad_pct: float = PAD_PCT) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    w, h = im.size
    l, t, r, b = bbox
    padx, pady = int((r - l) * pad_pct), int((b - t) * pad_pct)
    l2, t2 = max(0, l - padx), max(0, t - pady)
    r2, b2 = min(w, r + padx), min(h, b + pady)
    return im.crop((l2, t2, r2, b2))


def pad_to_square(im: Image.Image) -> Image.Image:
    w, h = im.size
    side = max(w, h)
    if w == h:
        return im
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(im, ((side - w) // 2, (side - h) // 2), im)
    return canvas


def process(src: pathlib.Path, dest: pathlib.Path, size: int, manual_box, no_alpha: bool):
    dest = dest.with_suffix(".png")
    dest.parent.mkdir(parents=True, exist_ok=True)

    work_src = src
    manual_tmp = None
    if manual_box:
        cropped = Image.open(src).convert("RGB").crop(manual_box)
        manual_tmp = dest.with_name(dest.stem + ".tmp_manual.png")
        cropped.save(manual_tmp)
        work_src = manual_tmp

    if no_alpha:
        out = Image.open(work_src).convert("RGB")
        out = out.resize((size, size), Image.LANCZOS)
        out.save(dest)
    else:
        nobg_tmp = dest.with_name(dest.stem + ".tmp_nobg.png")
        remove_bg(work_src, nobg_tmp)
        out = Image.open(nobg_tmp).convert("RGBA")
        out = crop_alpha(out)
        out = pad_to_square(out)
        out = out.resize((size, size), Image.LANCZOS)
        out.save(dest)
        nobg_tmp.unlink(missing_ok=True)

    if manual_tmp:
        manual_tmp.unlink(missing_ok=True)

    print(f"{src.name} -> {dest} ({size}x{size}{', без альфы' if no_alpha else ', фон снят'})")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("input", help="файл или (с --batch) папка с исходниками")
    ap.add_argument("output", help="файл или (с --batch) папка для результатов (всегда сохраняется как .png)")
    ap.add_argument("--size", type=int, default=600, help="сторона квадрата на выходе, px (по умолчанию 600)")
    ap.add_argument("--no-alpha", action="store_true", help="не вырезать фон, только ресайз в квадрат")
    ap.add_argument("--manual-box", default=None,
                     help="ручной кроп LEFT,TOP,RIGHT,BOTTOM в пикселях исходника перед снятием фона "
                          "(если на фото несколько миниатюр/лишние предметы рядом)")
    ap.add_argument("--batch", action="store_true", help="обработать все файлы в папке input")
    args = ap.parse_args()

    manual_box = None
    if args.manual_box:
        manual_box = tuple(int(x) for x in args.manual_box.split(","))
        if len(manual_box) != 4:
            sys.exit("--manual-box должен быть вида LEFT,TOP,RIGHT,BOTTOM")

    if args.batch:
        in_dir = pathlib.Path(args.input)
        out_dir = pathlib.Path(args.output)
        files = sorted([p for p in in_dir.iterdir() if p.suffix.lower() in EXTS])
        if not files:
            sys.exit(f"В {in_dir} не найдено файлов ({', '.join(sorted(EXTS))})")
        for f in files:
            process(f, out_dir / f.stem.lower().replace(" ", "_"), args.size, manual_box, args.no_alpha)
    else:
        process(pathlib.Path(args.input), pathlib.Path(args.output), args.size, manual_box, args.no_alpha)


if __name__ == "__main__":
    main()
