#!/usr/bin/env python3
"""
Синхронизирует docs/ с мастер-файлом game_data.json в корне проекта:
  1. Валидирует game_data.json (в корне).
  2. Копирует его в docs/game_data.json.
  3. Пересобирает docs/js/game_data_fallback.js (встроенный фолбэк).

Запускать из корня проекта (или откуда угодно — пути ниже посчитаны
относительно расположения самого скрипта):

    python3 tools/sync_release.py
"""
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "game_data.json"
DEST_JSON = ROOT / "docs" / "game_data.json"
DEST_FALLBACK = ROOT / "docs" / "js" / "game_data_fallback.js"


def main():
    if not SRC.exists():
        sys.exit(f"Не найден мастер-файл: {SRC}")

    try:
        with SRC.open(encoding="utf-8") as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        sys.exit(f"game_data.json содержит невалидный JSON: {e}")

    # базовые проверки целостности, чтобы не улить в release что-то битое
    required_top = ["critOps", "killOp", "tacOpsByArchetype", "universalEquipment",
                     "equipmentSelectionLimit", "factionEquipmentByTeam", "killTeams"]
    missing = [k for k in required_top if k not in data]
    if missing:
        sys.exit(f"В game_data.json отсутствуют обязательные ключи: {missing}")

    for team_name, team in data["killTeams"].items():
        for field in ("archetypes", "required", "pool", "poolPick"):
            if field not in team:
                sys.exit(f"Команда «{team_name}» не содержит поле «{field}»")
        for arch in team["archetypes"]:
            if arch not in data["tacOpsByArchetype"]:
                sys.exit(f"Команда «{team_name}» ссылается на архетип «{arch}», "
                          f"которого нет в tacOpsByArchetype")
        equip_key = team.get("equipment")
        if equip_key and equip_key not in data["factionEquipmentByTeam"]:
            sys.exit(f"Команда «{team_name}» ссылается на снаряжение «{equip_key}», "
                      f"которого нет в factionEquipmentByTeam")

    DEST_JSON.parent.mkdir(parents=True, exist_ok=True)
    with DEST_JSON.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    DEST_FALLBACK.parent.mkdir(parents=True, exist_ok=True)
    with DEST_FALLBACK.open("w", encoding="utf-8") as f:
        f.write("// Встроенный запасной набор данных — используется, если "
                "fetch('./game_data.json') недоступен (см. FUNCTIONAL_SPEC.md §2).\n")
        f.write("// Файл сгенерирован автоматически: tools/sync_release.py. Не редактировать вручную.\n")
        f.write("window.GAME_DATA_FALLBACK = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"OK: {SRC} -> {DEST_JSON}")
    print(f"OK: fallback пересобран -> {DEST_FALLBACK}")
    print(f"Команды: {list(data['killTeams'].keys())}")


if __name__ == "__main__":
    main()
