# Kill Team Solo Tracker — текущее состояние (2026-07-31)

Вставь этот файл целиком первым сообщением в новую сессию Claude Code
в этой папке, чтобы продолжить работу без потери контекста.

Прод: https://romanfilin-design.github.io/Killteam-tracker-new-design/

## Что это

Статический сайт (без бэкенда, без build-шага) для соло/дуо-игры в
Warhammer 40,000: Kill Team. Ванильный JS (IIFE), состояние партии — в
`localStorage`, хостинг — GitHub Pages из `docs/` через собственный
GitHub Actions workflow (`.github/workflows/pages.yml`).

## Архитектура

- `game_data.json` (корень) — канонические игровые данные: команды,
  архетипы, снаряжение, faction rules, `factionChoices`, `statusTokens`.
  Правь только здесь, никогда в `docs/game_data.json` напрямую.
- `tracker_logic.js` (корень) — чистая игровая логика, без DOM.
- `python3 tools/sync_release.py` — копирует оба файла из корня в
  `docs/`, пересобирает встроенный fallback, валидирует схему. Запускай
  после любого изменения `game_data.json`/`tracker_logic.js`.
- `docs/js/app.js` — единственный слой рендера/UI, правится напрямую
  (отдельного "исходника" нет).
- `docs/js/firebase-room.js` — модуль синхронизации через Firestore
  (см. ниже), подключается как `<script type="module">`.
- `docs/css/style.css` — дизайн: industrial brutalism.
- `docs/index.html` — три `?v=YYYYMMDDx` кэш-бастера, **поднимай версию
  на любое изменение CSS/JS**, иначе браузер закэширует старую версию.
- `tools/README.md` — актуальная пошаговая инструкция добавления новой
  команды (PDF → JSON), конвенции перевода/лора/схемы. Читай его первым,
  если задача — добавить команду.

## 16 команд в трекере

Plague Marines, Celestian Insidiants, Nemesis Claw, Hearthkyn Salvagers,
Angels of Death, Exaction Squad, Farstalker Kinband, Fellgor Ravagers,
Kommandos, Murderwing, Pathfinders, Tempestus Aquilons, Vespid Stingwings,
Void-Dancer Troupe, Wrecka Krew, Wolf Scout.

## Комната синхронизации (Firebase/Firestore)

Проект Firebase: `kt-tracker-46786` (конфиг захардкожен в
`firebase-room.js` — это публичный apiKey, не секрет; доступ ограничен
Security Rules). Анонимная авторизация, комната — документ
`rooms/{roomCode}` (5 символов), игроки — подколлекция
`rooms/{roomCode}/players/{uid}`.

Что уже реализовано:
- Создание/вход в комнату по коду, автоподключение при перезагрузке
  (код хранится в `localStorage`, uid — в анонимной Firebase-сессии).
- Вкладка **Enemy** (3-я вкладка в шапке, иконка-домик — кнопка
  открытия/статуса комнаты): реалтайм-карточка оператора соперника —
  HP-бар с цветовым кодированием, APL/Move/Save, приказ, активация.
- Общий **Crit Op**: выбор/переброс синхронны для обоих игроков
  (`roomState.critOpId`/`critOpLocked` на документе комнаты),
  блокируется автоматически при старте партии.
- **Статус-токены**: свои — зелёным (read-only на карточке соперника,
  видны на вкладке Enemy), вражеские (`target:'enemy'`) — красным,
  назначаются **только** со стороны того, кто их накладывает, через
  вкладку Enemy (`enemyTokenMarks` карта на документе комнаты, ключ
  `uid__opId__tokenId`). Поддержаны счётчики (Markerlight и т.п.).
- **Kill Grade считается автоматически** в комнате: по числу
  incapacitated операторов соперника (wounds<=0) и таблице Kill Op
  (`computeAutoKillGrade` в `app.js`). Без комнаты — ручной счётчик.
- `restrictToOperator` — поле в `statusTokens` (game_data.json),
  привязывает токен к конкретному профилю оператора (например
  Damnation Points — только Murderwing Chaos Lord). Без этого поля
  токен виден у всех операторов команды. См. `tools/README.md`.

Не реализовано / бэклог:
- Портреты операторов соперника на вкладке Enemy (сейчас только
  имя/стата/HP, без картинки).
- Полноценный лог событий/чат в комнате.

## Конвенции и грабли (не наступай снова)

- **Git push только по явному "деплой"/"залей"/"заливай"** от
  пользователя в том же сообщении — твёрдое правило, не пуш по инерции.
- После каждого изменения UI/логики — **бампай кэш-версию** в
  `docs/index.html` (все 4 тега разом, один и тот же суффикс).
- Проверяй в браузере через `preview_start` (`docs-static`,
  `.claude/launch.json`, порт 8420) реальным вводом (клик/eval), не
  только код-ревью — особенно адаптивность (375px мобильный вьюпорт) и
  Firebase-функциональность (можно симулировать "противника" через
  `window.KTRoom.publishSelf(code, 'fake-uid', {...})` в консоли).
- **Не выжимай текст кнопок шрифтом до предела** (было дважды: clamp()
  на грани — переполнялось на реальных телефонах). Если текст не
  помещается — сокращай текст (title-атрибут для полной подписи),
  а не уменьшай font-size до полутора пикселей запаса.
- Горизонтальные карусели (`.pool-carousel`, `.pick-list`) теряют
  scroll position при каждом `render()` (полная замена `innerHTML`) —
  уже пофикшено через `captureScrollPositions`/`restoreScrollPositions`
  в `app.js`; если добавляешь новую скроллируемую панель — добавь её
  селектор в `SCROLL_PRESERVE_SELECTORS`.
- `.status-chip` и `.counter--sm` должны совпадать по высоте (38px /
  30px мобильный) — если меняешь одно, меняй оба.
- Портреты: `python3 tools/smart_crop.py --batch "incoming_portraits/<Команда>/" docs/img/portraits/<team-slug>/`.
- `.playwright-mcp/` и одиночные тестовые скриншоты в корне — мусор от
  ручных браузерных проверок, не коммить (уже в `.gitignore`).

## Дашборд

После значимых изменений обновляй `../Dashboard/data.js` (проект
`killteam`, `PROJECTS`) — `done`/`inProgress`/`backlog`. Конвенция в
`../CLAUDE.md` (уровень `Warhammer/`).

## Деплой

```bash
git add -A
git commit -m "..."
git push origin main
```
GitHub Actions задеплоит `docs/` на Pages за ~20 секунд. Проверка:
```bash
gh run list --limit 1
curl -s "https://romanfilin-design.github.io/Killteam-tracker-new-design/index.html" | grep "v=2026"
```
