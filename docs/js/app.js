/**
 * KILL TEAM SOLO TRACKER — слой рендера и связывания UI с tracker_logic.js.
 * Здесь нет игровых правил — вся логика приходит из tracker_logic.js,
 * данные — из game_data.json (или встроенного фолбэка). Этот файл только
 * строит HTML по текущему appState и обрабатывает события пользователя.
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'kt_solo_tracker_state_v1';

  // Заглушка-силуэт оператора — показывается, когда у оператора нет портрета.
  var PORTRAIT_PLACEHOLDER_SVG =
    '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="22" cy="15" r="7.5" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<path d="M8 37 C8 26 14 22 22 22 C30 22 36 26 36 37" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<path d="M4 4 L4 11 M4 4 L11 4 M40 4 L40 11 M40 4 L33 4 M4 40 L4 33 M4 40 L11 40 M40 40 L40 33 M40 40 L33 40" ' +
        'stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.6"/>' +
    '</svg>';

  // Иконки состояния оператора — активация/приказ читаются по форме, а не только по цвету.
  var ICON_ACTIVATED_SVG =
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 13 L9 18 L20 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ICON_CONCEAL_SVG =
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M2 12 C5 6 9 4 12 4 C15 4 19 6 22 12 C19 18 15 20 12 20 C9 20 5 18 2 12 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
      '<circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
      '<line x1="3" y1="21" x2="21" y2="3" stroke="currentColor" stroke-width="1.8"/>' +
    '</svg>';
  var ICON_ENGAGE_SVG =
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
      '<circle cx="12" cy="12" r="2" fill="currentColor"/>' +
      '<line x1="12" y1="1" x2="12" y2="5" stroke="currentColor" stroke-width="1.8"/>' +
      '<line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="1.8"/>' +
      '<line x1="1" y1="12" x2="5" y2="12" stroke="currentColor" stroke-width="1.8"/>' +
      '<line x1="19" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="1.8"/>' +
    '</svg>';
  var ICON_ORDER_NEUTRAL_SVG =
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';

  // Краткие описания архетипов — показываются на выбранной кнопке, как у Tac Op.
  var ARCHETYPE_DESCRIPTIONS = {
    'Seek & Destroy': {
      goals: 'Наносить максимальный урон противнику, устранять лидеров и бойцов поддержки, прореживая ряды неприятеля.'
    },
    'Infiltration': {
      goals: 'Пробираться в тыл, блокировать маршруты противника и активировать точки взаимодействия, оставаясь незамеченными или недосягаемыми.'
    },
    'Recon': {
      goals: 'Быстрый захват целей в начале партии, перемещение по всей доске и использование механик беспрепятственного или бесплатного рывка.'
    },
    'Security': {
      goals: 'Сохранять контроль над своими целями, блокировать продвижение противника и минимизировать потери среди собственных бойцов.'
    }
  };

  // Памятка по параметрам датакарты оператора — по клику на термин в таблице оружия.
  // Ключи ниже покрывают ровно те термины, что реально встречаются в game_data.json
  // (см. tools/ — список составлялся по фактическим данным, не "с потолка").
  var TERM_GLOSSARY = {
    'ATK': 'Atk — сколько кубиков атаки бросается при использовании этого оружия.',
    'HIT': 'Hit — минимальный результат кубика, чтобы бросок засчитался как обычный успех (Normal Success).',
    'DMG': 'Dmg — урон оружия: первое число — при обычном успехе (Normal Dmg), второе — при критическом (Critical Dmg).',
    'WR': 'WR — Weapon Rules, особые правила этого оружия. Нажми на конкретный термин в столбце, чтобы узнать, что он значит.',
    'Accurate': 'Accurate X — перед броском можно сразу засчитать до X кубиков атаки как обычные успехи, не бросая их.',
    'Balanced': 'Balanced — один раз за эту атаку можно перебросить один из своих кубиков атаки.',
    'Blast': 'Blast X" — оружие поражает не только основную цель, но и других операторов в пределах X" от неё (они автоматически становятся дополнительными целями).',
    'Brutal': 'Brutal — защищающийся не может сохранять обычные успехи защиты как блок, заблокировать атаку может только критический успех защиты.',
    'Ceaseless': 'Ceaseless — можно перебросить кубики атаки, показавшие результат 1.',
    'Devastating': 'Devastating X — каждый несохранённый критический успех сразу наносит X урона, минуя обычное разрешение защиты.',
    'Heavy': 'Heavy (Reposition only / Dash only) — с этим оружием нельзя в одной активации и стрелять, и свободно перемещаться: разрешено только движение указанного в скобках типа (Reposition или Dash).',
    'Hot': 'Hot — после разрешения стрельбы бросается К6: на результате 1 оружие ранит собственного стрелка.',
    'Lethal': 'Lethal X+ — кубики атаки с результатом X и выше (а не только 6) можно сохранять как критические успехи.',
    'Limited': 'Limited X — эту позицию оружия можно использовать не более X раз за всю партию.',
    'Piercing': 'Piercing X — ухудшает защиту цели: сохранить обычный успех защиты (блок) ей становится сложнее на X.',
    'Piercing Crits': 'Piercing Crits X — как Piercing, но действует только против критических успехов защиты цели.',
    'PSYCHIC': 'PSYCHIC — псайкерское действие или оружие; на него распространяются особые правила, направленные против операторов с ключевым словом PSYKER.',
    'Range': 'Range X" — максимальная дальность стрельбы этим оружием, в дюймах.',
    'Rending': 'Rending — часть обычных успехов атаки может быть пересчитана как критические, увеличивая шанс нанести Critical Dmg.',
    'Saturate': 'Saturate — игнорирует укрытие (cover) цели при стрельбе.',
    'Seek': 'Seek — можно стрелять по оператору, который не виден напрямую, если он виден другому дружественному оператору поблизости.',
    'Seek Light': 'Seek Light — как Seek, но не требует, чтобы цель была видна другому дружественному оператору.',
    'Severe': 'Severe — усиливает урон при критическом успехе (обычно даёт +1 к Critical Dmg этого оружия — уже учтено в значении Dmg на карточке).',
    'Shock': 'Shock — цель не может использовать переброс защиты (например, Command Re-roll) в ответ на эту атаку.',
    'Silent': 'Silent — оружие не выдаёт положение стрелка, как обычное дальнобойное оружие (не даёт врагу типичных подсказок для обнаружения).',
    'Stun': 'Stun — цель, получившая урон этим оружием, проходит проверку Stun и может получить штраф к следующим действиям.',
    'Torrent': 'Torrent X" — автоматически поражает всех операторов в пределах X" по шаблону, без броска Hit.',
    'Anti-PSYKER': 'Anti-PSYKER — против оператора с ключевым словом PSYKER это оружие получает правило Lethal 5+ (точная формулировка — в способностях этого оператора).',
    'Beam': 'Beam — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Beam»).',
    'Force Impact': 'Force Impact — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Force Impact»).',
    'Poison': 'Poison — особое правило фракции про яд/токены Poison; полное описание — в правиле фракции этой команды.',
    'Shield': 'Shield — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Shield»).',
    'Terrorchem': 'Terrorchem — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Terrorchem»).',
    'Toxic': 'Toxic — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Toxic»).',
  };

  function normalizeWrTerm(raw) {
    return raw.replace(/[\d"+]+/g, '').replace(/\s+\(.*?\)/g, '').replace(/\*$/, '').trim();
  }

  var gameData = null;
  var appState = null;
  var pendingConfirm = null; // { message, onConfirm }
  var pendingInfo = null; // { term, text } — памятка по параметру оружия
  var toastEl = null;

  // ------------------------------------------------------------------
  // Загрузка данных / состояния
  // ------------------------------------------------------------------

  function loadGameData() {
    return fetch('./game_data.json', { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('bad response');
        return res.json();
      })
      .catch(function () {
        console.warn('[KillTeamTracker] game_data.json недоступен, использую встроенный фолбэк.');
        return window.GAME_DATA_FALLBACK;
      });
  }

  function loadSavedState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return importState(parsed);
    } catch (e) {
      console.warn('[KillTeamTracker] не удалось прочитать сохранённое состояние', e);
      return null;
    }
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.warn('[KillTeamTracker] не удалось сохранить состояние', e);
    }
  }

  function boot() {
    loadGameData().then(function (data) {
      gameData = data;
      appState = loadSavedState() || createInitialAppState();
      backfillOperatorStatsFromKillTeam(gameData, appState);
      persist();
      render();
    });
  }

  // ------------------------------------------------------------------
  // Утилиты
  // ------------------------------------------------------------------

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function showToast(message) {
    var root = document.getElementById('toast-root');
    root.innerHTML = '<div class="toast">' + esc(message) + '</div>';
    window.clearTimeout(toastEl);
    toastEl = window.setTimeout(function () { root.innerHTML = ''; }, 2400);
  }

  function downloadJSON(obj, filename) {
    var blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function readFileAsJSON(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        try { resolve(JSON.parse(reader.result)); }
        catch (e) { reject(e); }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  // ------------------------------------------------------------------
  // Фокус: сохраняем/восстанавливаем позицию курсора между ре-рендерами
  // ------------------------------------------------------------------

  function captureFocus() {
    var el = document.activeElement;
    if (!el || !el.dataset || !el.dataset.focusKey) return null;
    return {
      key: el.dataset.focusKey,
      start: typeof el.selectionStart === 'number' ? el.selectionStart : null,
      end: typeof el.selectionEnd === 'number' ? el.selectionEnd : null,
    };
  }

  function restoreFocus(info) {
    if (!info) return;
    var el = document.querySelector('[data-focus-key="' + info.key + '"]');
    if (!el) return;
    el.focus();
    if (info.start !== null && el.setSelectionRange) {
      try { el.setSelectionRange(info.start, info.end); } catch (e) { /* noop */ }
    }
  }

  // ------------------------------------------------------------------
  // Render — точка входа
  // ------------------------------------------------------------------

  function render() {
    var focusInfo = captureFocus();
    var app = document.getElementById('app');
    app.innerHTML = renderHeader() + '<main id="screen">' +
      (appState.phase === 'game' ? renderGameScreen() : renderSetupScreen()) +
      '</main>';
    renderModal();
    restoreFocus(focusInfo);
  }

  function renderModal() {
    var root = document.getElementById('modal-root');
    if (pendingInfo) {
      root.innerHTML =
        '<div class="modal-overlay" data-action="closeInfo">' +
          '<div class="modal-box">' +
            '<h2>' + esc(pendingInfo.term) + '</h2>' +
            '<p>' + esc(pendingInfo.text) + '</p>' +
            '<div class="btn-row">' +
              '<button class="btn btn--ghost" data-action="closeInfo">Закрыть</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      return;
    }
    if (!pendingConfirm) { root.innerHTML = ''; return; }
    root.innerHTML =
      '<div class="modal-overlay" data-action="cancelConfirm">' +
        '<div class="modal-box">' +
          '<h2>Подтверждение</h2>' +
          '<p>' + esc(pendingConfirm.message) + '</p>' +
          '<div class="btn-row">' +
            '<button class="btn btn--ghost" data-action="cancelConfirm">Отмена</button>' +
            '<button class="btn btn--danger" data-action="confirmYes">Подтвердить</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function askConfirm(message, onConfirm) {
    pendingConfirm = { message: message, onConfirm: onConfirm };
    renderModal();
  }

  function showTermInfo(term) {
    var text = TERM_GLOSSARY[term];
    if (!text) return;
    pendingInfo = { term: term, text: text };
    renderModal();
  }

  // ------------------------------------------------------------------
  // Заголовок / переключатель режима
  // ------------------------------------------------------------------

  function renderHeader() {
    var team = appState.team;
    return (
      '<header class="terminal-header">' +
        '<div class="terminal-header__row">' +
          '<div class="terminal-title"><span class="terminal-title__dot"></span>' + esc(team.name || 'ОПЕРАТОР') + '</div>' +
          '<div class="mode-tabs">' +
            '<button class="' + (appState.phase === 'setup' ? 'active' : '') + '" data-action="goSetup">Подготовка</button>' +
            '<button class="' + (appState.phase === 'game' ? 'active' : '') + '" data-action="goGame">Игра</button>' +
          '</div>' +
        '</div>' +
      '</header>'
    );
  }

  // ==================================================================
  // ЭКРАН ПОДГОТОВКИ
  // ==================================================================

  function renderSetupScreen() {
    var t = appState.team;
    var ready = isReadyToStart(appState);
    return (
      renderPartyToolsPanel() +
      renderKillTeamPickPanel() +
      (t.killTeamName ? renderTeamLorePanel() : '') +
      (t.killTeamName ? renderPoolPanel() : '') +
      renderRosterToolsPanel() +
      renderCritOpPanel() +
      renderArchetypePanel() +
      (appState.team.archetype ? renderTacOpPanel() : '') +
      renderEquipmentSetupPanel() +
      '<button class="btn btn--accent btn--block" style="min-height:56px;font-size:16px;" data-action="startGame" ' +
        (ready ? '' : 'disabled') + '>Начать партию</button>' +
      (!ready ? '<p class="empty-state">Нужно: выбрать Crit Op, набрать хотя бы одного оператора, выбрать архетип и Tac Op.</p>' : '')
    );
  }

  function renderPartyToolsPanel() {
    return (
      '<section class="panel">' +
        '<div class="btn-row">' +
          '<label class="btn btn--ghost">Импорт партии' +
            '<input type="file" accept="application/json" class="visually-hidden-input" data-action="importStateFile" /></label>' +
          '<button class="btn btn--ghost" data-action="exportState">Экспорт партии</button>' +
          '<button class="btn btn--danger" data-action="resetSetup">Новая партия</button>' +
        '</div>' +
      '</section>'
    );
  }

  function commanderIcon(portrait) {
    return portrait
      ? '<img class="pick-card__commander-img" src="' + esc(portrait) + '" alt="">'
      : '<span class="pick-card__commander-img pick-card__commander-img--placeholder" aria-hidden="true">' + PORTRAIT_PLACEHOLDER_SVG + '</span>';
  }

  function renderKillTeamPickPanel() {
    var names = Object.keys(gameData.killTeams || {});
    var cards = names.map(function (name) {
      var isSel = appState.team.killTeamName === name;
      var def = gameData.killTeams[name];
      var leaderPortrait = def.required && def.required[0] ? def.required[0].portrait : null;
      return '<button class="pick-card pick-card--team' + (isSel ? ' is-selected' : '') + '" data-action="selectKillTeam" data-value="' + esc(name) + '">' +
        '<span class="pick-card__commander">' + commanderIcon(leaderPortrait) + '</span>' +
        '<span class="pick-card__text">' +
          '<span class="pick-card__name">' + esc(name) + '</span>' +
          '<span class="pick-card__meta">' + (def.archetypes || []).join(' · ') + '</span>' +
        '</span>' +
      '</button>';
    }).join('');
    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Kill Team</span></div>' +
        '<div class="pick-list">' + cards + '</div>' +
      '</section>'
    );
  }

  function renderTeamLorePanel() {
    var def = findKillTeamDef(gameData, appState.team.killTeamName);
    var lore = def ? def.lore : null;
    if (!lore) return '';

    var operativesHtml = (lore.operatives || []).map(function (o) {
      return '<p><b>' + esc(o.name) + '</b> — ' + esc(o.text) + '</p>';
    }).join('');

    var quoteHtml = lore.quote
      ? '<blockquote class="lore-quote">«' + esc(lore.quote.text) + '»<cite>— ' + esc(lore.quote.author) + '</cite></blockquote>'
      : '';

    return (
      '<details class="panel">' +
        '<summary>Лор: ' + esc(appState.team.killTeamName) + '</summary>' +
        '<div class="cheat-body">' +
          '<p>' + esc(lore.intro) + '</p>' +
          quoteHtml +
          operativesHtml +
        '</div>' +
      '</details>'
    );
  }

  function poolCardPortrait(portrait) {
    return portrait
      ? '<img class="pool-card__portrait-img" src="' + esc(portrait) + '" alt="">'
      : '<span class="pool-card__portrait-img pool-card__portrait-img--placeholder" aria-hidden="true">' + PORTRAIT_PLACEHOLDER_SVG + '</span>';
  }

  function renderPoolPanel() {
    var t = appState.team;
    var def = findKillTeamDef(gameData, t.killTeamName);
    if (!def) return '';

    var requiredCards = (def.required || []).map(function (r) {
      return '<article class="pool-card is-required">' +
        '<div class="pool-card__portrait">' + poolCardPortrait(r.portrait) + '</div>' +
        '<div class="pool-card__body">' +
          '<div class="pool-card__name">' + esc(r.name) + '</div>' +
          '<div class="pool-card__stats">APL ' + esc(r.apl) + ' · MOVE ' + esc(r.move) + ' · SAVE ' + esc(r.save) + ' · W' + esc(r.wounds) + '</div>' +
          '<span class="pool-card__tag">Обязательный ×' + r.count + '</span>' +
        '</div>' +
      '</article>';
    }).join('');

    var totalPicked = Object.values(t.poolCounts || {}).reduce(function (a, b) { return a + b; }, 0);

    var poolCards = (def.pool || []).map(function (p) {
      var count = t.poolCounts[p.name] || 0;
      var maxCopies = p.maxCopies || 1;
      return '<article class="pool-card' + (count > 0 ? ' is-selected' : '') + '">' +
        '<div class="pool-card__portrait">' + poolCardPortrait(p.portrait) + '</div>' +
        '<div class="pool-card__body">' +
          '<div class="pool-card__name">' + esc(p.name) + '</div>' +
          '<div class="pool-card__stats">APL ' + esc(p.apl) + ' · MOVE ' + esc(p.move) + ' · SAVE ' + esc(p.save) + ' · W' + esc(p.wounds) +
            (maxCopies > 1 ? ' · лимит ' + maxCopies : '') + '</div>' +
          '<div class="pool-card__stepper">' +
            '<button class="btn btn--icon btn--sm" data-action="adjustPool" data-value="' + esc(p.name) + '" data-delta="-1" ' + (count <= 0 ? 'disabled' : '') + '>−</button>' +
            '<span class="pool-card__count">' + count + '</span>' +
            '<button class="btn btn--icon btn--sm" data-action="adjustPool" data-value="' + esc(p.name) + '" data-delta="1" ' +
              (count >= maxCopies || totalPicked >= def.poolPick ? 'disabled' : '') + '>+</button>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');

    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Состав отряда</span></div>' +
        '<div class="pool-carousel">' + requiredCards + poolCards + '</div>' +
        '<div class="limit-line"><span>Выбрано из пула</span><strong>' + totalPicked + ' / ' + def.poolPick + '</strong></div>' +
      '</section>'
    );
  }

  function renderRosterToolsPanel() {
    var t = appState.team;
    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Ростер · операторов: ' + t.operators.length + '</span></div>' +
        '<div class="btn-row">' +
          '<label class="btn btn--ghost">Импорт ростера' +
            '<input type="file" accept="application/json" class="visually-hidden-input" data-action="importRosterFile" />' +
          '</label>' +
          '<button class="btn btn--danger" data-action="clearRoster">Очистить состав</button>' +
        '</div>' +
      '</section>'
    );
  }

  // Выбранный вариант — первым в списке, остальные под ним. Используется для
  // Crit Op / архетипа / Tac Op, где узкие вертикальные кнопки читаются лучше,
  // чем решётка колонок.
  function selectedFirst(list, isSelFn) {
    var copy = list.slice();
    copy.sort(function (a, b) {
      var aSel = isSelFn(a), bSel = isSelFn(b);
      if (aSel === bSel) return 0;
      return aSel ? -1 : 1;
    });
    return copy;
  }

  function renderCritOpPanel() {
    var list = selectedFirst(gameData.critOps || [], function (op) { return appState.critOpId === op.id; });
    var cards = list.map(function (op) {
      var isSel = appState.critOpId === op.id;
      return '<button class="pick-card' + (isSel ? ' is-selected' : '') + '" data-action="selectCritOp" data-value="' + esc(op.id) + '">' +
        '<span class="pick-card__name">' + esc(op.name) + '</span>' +
        (isSel ? '<span class="pick-card__detail"><div><b>Действие:</b> ' + esc(op.action) + '</div><div><b>VP:</b> ' + esc(op.vp) + '</div></span>' : '') +
      '</button>';
    }).join('');
    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Crit Op</span>' +
          '<button class="btn btn--sm btn--ghost" data-action="randomCritOp">Случайно</button>' +
        '</div>' +
        '<div class="pick-stack">' + cards + '</div>' +
      '</section>'
    );
  }

  function renderArchetypePanel() {
    var t = appState.team;
    var def = findKillTeamDef(gameData, t.killTeamName);
    var archetypes = selectedFirst(
      def ? (def.archetypes || []) : Object.keys(gameData.tacOpsByArchetype || {}),
      function (a) { return t.archetype === a; }
    );

    var archBtns = archetypes.map(function (a) {
      var isSel = t.archetype === a;
      var desc = ARCHETYPE_DESCRIPTIONS[a];
      return '<button class="pick-card' + (isSel ? ' is-selected' : '') + '" data-action="toggleArchetype" data-value="' + esc(a) + '">' +
        '<span class="pick-card__name">' + esc(a) + '</span>' +
        (isSel && desc ? '<span class="pick-card__detail">' +
          '<div><b>Цель:</b> ' + esc(desc.goals) + '</div>' +
        '</span>' : '') +
      '</button>';
    }).join('');

    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Архетип</span></div>' +
        '<div class="pick-stack">' + archBtns + '</div>' +
      '</section>'
    );
  }

  function renderTacOpPanel() {
    var t = appState.team;
    var list = selectedFirst((gameData.tacOpsByArchetype || {})[t.archetype] || [], function (op) { return t.tacOpId === op.id; });
    var tacOpsHtml = list.map(function (op) {
      var isSel = t.tacOpId === op.id;
      return '<button class="pick-card' + (isSel ? ' is-selected' : '') + '" data-action="selectTacOp" data-value="' + esc(op.id) + '">' +
        '<span class="pick-card__name">' + esc(op.name) + '</span>' +
        (isSel ? '<span class="pick-card__detail">' +
          '<div><b>Reveal:</b> ' + esc(op.reveal) + '</div>' +
          '<div><b>Правила:</b> ' + esc(op.rules) + '</div>' +
          '<div><b>VP:</b> ' + esc(op.vp) + '</div>' +
        '</span>' : '') +
      '</button>';
    }).join('');

    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Tac Op' +
          ' <small style="text-transform:none;letter-spacing:0;color:var(--ink-faint);font-weight:600;">— ' + esc(t.archetype) + '</small></span></div>' +
        '<div class="pick-stack">' + tacOpsHtml + '</div>' +
      '</section>'
    );
  }

  function equipmentUniqueList() {
    var t = appState.team;
    var universal = (gameData.universalEquipment || []).map(function (e) { return { uid: 'u:' + e.id, item: e }; });
    var def = findKillTeamDef(gameData, t.killTeamName);
    var factionKey = def ? def.equipment : null;
    var faction = factionKey ? (gameData.factionEquipmentByTeam[factionKey] || []).map(function (e) { return { uid: 'f:' + e.id, item: e }; }) : [];
    return { universal: universal, faction: faction };
  }

  function renderEquipmentSetupPanel() {
    var t = appState.team;
    var lists = equipmentUniqueList();
    var limit = gameData.equipmentSelectionLimit || 4;

    function chip(entry) {
      var isSel = t.equipmentIds.indexOf(entry.uid) >= 0;
      var atLimit = !isSel && t.equipmentIds.length >= limit;
      return '<button class="equip-toggle' + (isSel ? ' is-selected' : '') + '" data-action="toggleEquipment" data-value="' + esc(entry.uid) + '" ' + (atLimit ? 'disabled' : '') + '>' +
        '<span class="equip-toggle__box"></span>' +
        '<span><span class="equip-item__name">' + esc(entry.item.name) + '</span> ' +
        '<span class="equip-item__qty">' + esc(entry.item.qty || '') + ' · ' + esc(entry.item.usesLabel || '') + '</span></span>' +
      '</button>';
    }

    var factionHtml = lists.faction.length ? '<div class="panel__title" style="margin:0 0 6px;">Снаряжение фракции</div>' + lists.faction.map(chip).join('') : '';
    var universalHtml = '<div class="panel__title" style="margin:' + (lists.faction.length ? '16px' : '0') + ' 0 6px;">Универсальное</div>' + lists.universal.map(chip).join('');

    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Снаряжение</span><span class="panel__badge">' + t.equipmentIds.length + ' / ' + limit + '</span></div>' +
        factionHtml + universalHtml +
      '</section>'
    );
  }

  // ==================================================================
  // ЭКРАН ИГРЫ
  // ==================================================================

  function renderGameScreen() {
    var t = appState.team;
    var activatedCount = t.operators.filter(function (o) { return o.activated; }).length;
    var downCount = t.operators.filter(isIncapacitated).length;

    return (
      renderTurningPointPanel() +
      renderCountersPanel() +
      renderSummaryStrip(activatedCount, downCount, t.operators.length) +
      renderFactionRulePanel() +
      renderOperatorsList() +
      '<button class="btn btn--ghost btn--block" data-action="addOperator" style="margin-bottom:12px;">+ Добавить оператора</button>' +
      renderEquipmentGamePanel() +
      renderCheatSheet()
    );
  }

  function renderFactionRulePanel() {
    var def = findKillTeamDef(gameData, appState.team.killTeamName);
    var rules = def ? def.factionRules : null;
    if (!rules || !rules.length) return '';

    var rulesHtml = rules.map(function (r) {
      return '<div class="cheat-section"><h3>' + esc(r.name) + '</h3><p>' + esc(r.text) + '</p></div>';
    }).join('');

    return (
      '<details class="panel" open>' +
        '<summary>Правило фракции: ' + esc(appState.team.killTeamName) + '</summary>' +
        '<div class="cheat-body">' + rulesHtml + '</div>' +
      '</details>'
    );
  }

  function renderTurningPointPanel() {
    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Turning Point</span></div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">' +
          '<div class="counter-block">' +
            '<div class="counter">' +
              '<button data-action="changeTurningPoint" data-delta="-1">−</button>' +
              '<span class="counter__value">' + appState.turningPoint + '</span>' +
              '<button data-action="changeTurningPoint" data-delta="1">+</button>' +
            '</div>' +
          '</div>' +
          '<button class="btn btn--accent" data-action="resetTurningPointMarks">Сброс отметок раунда</button>' +
        '</div>' +
      '</section>'
    );
  }

  function renderCountersPanel() {
    var t = appState.team;
    return (
      '<section class="panel">' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:space-around;">' +
          counterBlock('CP', t.cp, 'changeCP') +
          counterBlock('VP', t.vp, 'changeVP') +
          counterBlock('KILL GRADE', t.killGrade, 'changeKillGrade') +
        '</div>' +
        '<div class="field" style="margin-top:14px;margin-bottom:0;">' +
          '<label class="field__label">Операторов противника на старте</label>' +
          '<input type="number" min="1" max="20" data-focus-key="enemyCount" data-field="enemyCount" value="' + appState.enemyOperativeCount + '" />' +
        '</div>' +
      '</section>'
    );
  }

  function counterBlock(label, value, action) {
    return (
      '<div class="counter-block">' +
        '<span class="counter-block__label">' + label + '</span>' +
        '<div class="counter">' +
          '<button data-action="' + action + '" data-delta="-1">−</button>' +
          '<span class="counter__value">' + value + '</span>' +
          '<button data-action="' + action + '" data-delta="1">+</button>' +
        '</div>' +
      '</div>'
    );
  }

  function renderSummaryStrip(activated, down, total) {
    return (
      '<div class="summary-strip">' +
        '<div class="summary-tile"><div class="summary-tile__label">Активировались</div><div class="summary-tile__value">' + activated + ' / ' + total + '</div></div>' +
        '<div class="summary-tile"><div class="summary-tile__label">Выведено из строя</div><div class="summary-tile__value">' + down + ' / ' + total + '</div></div>' +
      '</div>'
    );
  }

  function renderOperatorsList() {
    var t = appState.team;
    if (!t.operators.length) return '<p class="empty-state">В команде нет операторов. Добавьте вручную или вернитесь в подготовку.</p>';
    return t.operators.map(renderOperatorCard).join('');
  }

  function renderOperatorCard(op) {
    var down = isIncapacitated(op);
    var injured = isInjured(op);
    var hpPct = op.maxWounds > 0 ? (op.wounds / op.maxWounds) * 100 : 0;
    var hpClass = hpPct >= 60 ? 'hp-green' : (hpPct >= 30 ? 'hp-yellow' : 'hp-red');
    var segCount = Math.max(1, op.maxWounds);
    var segs = '';
    for (var i = 0; i < segCount; i++) {
      var filled = op.wounds > i;
      segs += '<button class="wound-seg' + (filled ? ' is-filled ' + hpClass : '') +
        '" data-action="setWoundSegment" data-op="' + op.id + '" data-segment="' + i + '" aria-label="Здоровье ' + (i + 1) + '"></button>';
    }

    var quickChips = QUICK_STATUS_TOKENS.map(function (tok) {
      var on = op.tokens.indexOf(tok) >= 0;
      return '<button class="status-chip' + (on ? ' is-on' : '') + '" data-action="toggleToken" data-op="' + op.id + '" data-value="' + esc(tok) + '">' + esc(tok) + '</button>';
    }).join('');

    var otherTokens = op.tokens.filter(function (tok) { return QUICK_STATUS_TOKENS.indexOf(tok) === -1; });
    var tokenPills = otherTokens.map(function (tok) {
      return '<span class="token-pill">' + esc(tok) + '<button data-action="removeToken" data-op="' + op.id + '" data-value="' + esc(tok) + '">×</button></span>';
    }).join('');

    var statLine = (op.apl || op.move || op.save)
      ? '<div class="operator__stats"><span>APL <b>' + esc(op.apl || '—') + '</b></span><span>MOVE <b>' + esc(op.move || '—') + '</b></span><span>SAVE <b>' + esc(op.save || '—') + '</b></span></div>'
      : '';

    var orderIcon = op.order === 'conceal' ? ICON_CONCEAL_SVG : (op.order === 'engage' ? ICON_ENGAGE_SVG : ICON_ORDER_NEUTRAL_SVG);
    var orderLabel = op.order === 'conceal' ? 'Conceal' : (op.order === 'engage' ? 'Engage' : '—');

    return (
      '<article class="operator' + (down ? ' is-down' : (injured ? ' is-injured' : '')) + '">' +
        '<div class="operator__top">' +
          (op.portrait
            ? '<img class="operator__portrait" src="' + esc(op.portrait) + '" alt="">'
            : '<span class="operator__portrait operator__portrait--placeholder" aria-hidden="true">' + PORTRAIT_PLACEHOLDER_SVG + '</span>') +
          '<div class="operator__id">' +
            '<input class="operator__name-input" type="text" data-focus-key="opname-' + op.id + '" data-field="operatorName" data-op="' + op.id + '" value="' + esc(op.name) + '" />' +
            statLine +
          '</div>' +
        '</div>' +

        '<div class="operator__status-row">' +
          '<button class="activate-toggle' + (op.activated ? ' is-on' : '') + '" data-action="toggleActivated" data-op="' + op.id + '" ' +
            'aria-pressed="' + (op.activated ? 'true' : 'false') + '" aria-label="' + (op.activated ? 'Активирован' : 'Не активирован') + '" title="' + (op.activated ? 'Активирован' : 'Не активирован') + '">' + ICON_ACTIVATED_SVG + '<span>' + (op.activated ? 'Активирован' : 'Активация') + '</span></button>' +
          '<button class="order-cycle-btn order-cycle-btn--' + (op.order || 'neutral') + '" data-action="cycleOrder" data-op="' + op.id + '" title="Приказ: ' + orderLabel + '">' + orderIcon + '<span>Приказ: ' + orderLabel + '</span></button>' +
        '</div>' +

        '<div class="wound-row">' +
          '<div class="wound-track">' + segs + '</div>' +
          '<span class="wound-readout__num ' + hpClass + (String(op.wounds).length >= 2 ? ' wound-readout__num--wide' : '') + '">' + op.wounds + '</span>' +
        '</div>' +
        '<div class="operator__hp-buttons">' +
          '<button class="btn" data-action="healOperator" data-op="' + op.id + '" data-amount="1">+1</button>' +
          '<button class="btn" data-action="healOperator" data-op="' + op.id + '" data-amount="3">+3</button>' +
          '<button class="btn btn--danger" data-action="damageOperator" data-op="' + op.id + '" data-amount="1">−1</button>' +
          '<button class="btn btn--danger" data-action="damageOperator" data-op="' + op.id + '" data-amount="3">−3</button>' +
          '<button class="btn btn--danger" data-action="damageOperator" data-op="' + op.id + '" data-amount="6">−6</button>' +
        '</div>' +

        '<div class="operator__controls">' + quickChips + '</div>' +
        '<div class="token-row">' + tokenPills + '</div>' +
        '<form class="token-add" data-action-submit="addCustomToken" data-op="' + op.id + '">' +
          '<input type="text" placeholder="Свой статус-токен…" data-op="' + op.id + '" />' +
          '<button class="btn btn--sm" type="submit">+ Токен</button>' +
        '</form>' +
        renderOperatorDatacard(op) +
      '</article>'
    );
  }

  function termHeaderCell(label) {
    return '<th class="term-clickable" data-action="showTermInfo" data-term="' + esc(label) + '" tabindex="0">' + esc(label) + '</th>';
  }

  function renderWrCell(wr) {
    if (!wr || wr === '-') return esc(wr || '-');
    return wr.split(',').map(function (part) {
      var trimmed = part.trim();
      if (!trimmed) return '';
      var key = normalizeWrTerm(trimmed);
      if (TERM_GLOSSARY[key]) {
        return '<span class="term-clickable" data-action="showTermInfo" data-term="' + esc(key) + '" tabindex="0">' + esc(trimmed) + '</span>';
      }
      return esc(trimmed);
    }).join(', ');
  }

  function renderOperatorDatacard(op) {
    var weapons = op.weapons || [];
    var abilities = op.abilities || [];
    if (!weapons.length && !abilities.length) return '';

    var weaponRows = weapons.map(function (wp) {
      return '<tr><td class="weapon-table__name">' + esc(wp.name) + '</td><td>' + esc(wp.atk) + '</td><td>' + esc(wp.hit) + '</td><td>' + esc(wp.dmg) + '</td><td>' + renderWrCell(wp.wr) + '</td></tr>';
    }).join('');

    var weaponTable = weapons.length
      ? '<table class="weapon-table"><thead><tr><th>NAME</th>' + termHeaderCell('ATK') + termHeaderCell('HIT') + termHeaderCell('DMG') + termHeaderCell('WR') + '</tr></thead><tbody>' + weaponRows + '</tbody></table>'
      : '';

    var abilityList = abilities.length
      ? '<div class="ability-list">' + abilities.map(function (ab) {
          var badges = (ab.cost ? '<span class="ability__badge ability__badge--cost">' + esc(ab.cost) + '</span>' : '') +
            (ab.tag ? '<span class="ability__badge ability__badge--tag">' + esc(ab.tag) + '</span>' : '');
          return '<div class="ability"><div class="ability__head"><span class="ability__name">' + esc(ab.name) + '</span>' + badges + '</div>' +
            '<p class="ability__text">' + esc(ab.text) + '</p></div>';
        }).join('') + '</div>'
      : '';

    return (
      '<details class="operator-datacard">' +
        '<summary>Оружие и способности</summary>' +
        '<div class="operator-datacard__body">' + weaponTable + abilityList + '</div>' +
      '</details>'
    );
  }

  function renderEquipmentGamePanel() {
    var t = appState.team;
    if (!t.equipmentIds.length) return '';
    var rows = t.equipmentIds.map(function (uid) {
      var item = resolveEquipmentItem(gameData, t, uid);
      if (!item) return '';
      var max = getEquipmentMaxUses(item);
      var remaining = getEquipmentRemainingUses(t, item, uid);
      var usesHtml = max === null
        ? '<span class="equip-item__qty">Пассив</span>'
        : '<div class="equip-item__uses"><span>Осталось <strong>' + remaining + '</strong> / ' + max + '</span>' +
            '<button class="btn btn--sm' + (remaining > 0 ? ' btn--accent' : '') + '" data-action="useEquipment" data-value="' + esc(uid) + '" ' + (remaining <= 0 ? 'disabled' : '') + '>Использовать</button></div>';
      return '<div class="equip-item">' +
        '<div class="equip-item__head"><span class="equip-item__name">' + esc(item.name) + '</span>' + (max === null ? usesHtml : '') + '</div>' +
        '<div class="equip-item__desc">' + esc(item.desc) + '</div>' +
        (max !== null ? usesHtml : '') +
      '</div>';
    }).join('');
    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Снаряжение в бою</span></div>' +
        rows +
      '</section>'
    );
  }

  function renderCheatSheet() {
    var t = appState.team;
    var critOp = findCritOp(gameData, appState.critOpId);
    var tacOp = t.archetype ? findTacOp(gameData, t.archetype, t.tacOpId) : null;
    var killOp = gameData.killOp;
    var row = getKillGradeRow(gameData, appState.enemyOperativeCount);
    var headHtml = '<tr><th>Против.</th>' + killOp.table.headers.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr>';
    var bodyHtml = killOp.table.rows.map(function (r) {
      var isActiveRow = r === row;
      return '<tr>' + '<td' + (isActiveRow ? ' class="is-active-row"' : '') + '>' + r.start + '+</td>' +
        r.grades.map(function (g, idx) {
          var isTarget = isActiveRow && (idx + 1) === (t.killGrade + 1) && t.killGrade < 5;
          return '<td class="' + (isActiveRow ? 'is-active-row ' : '') + (isTarget ? 'is-target' : '') + '">' + g + '</td>';
        }).join('') +
      '</tr>';
    }).join('');

    return (
      '<details class="panel" open>' +
        '<summary>Карточки этой партии</summary>' +
        '<div class="cheat-body">' +
          '<div class="cheat-section">' +
            '<h3>Crit Op</h3>' +
            (critOp ? '<p><b>' + esc(critOp.name) + '</b></p><p>' + esc(critOp.action) + '</p><p>' + esc(critOp.vp) + '</p>' : '<p>Не выбран.</p>') +
          '</div>' +
          '<div class="cheat-section">' +
            '<h3>Tac Op</h3>' +
            (tacOp ? '<p><b>' + esc(tacOp.name) + '</b></p><p>Reveal: ' + esc(tacOp.reveal) + '</p><p>' + esc(tacOp.rules) + '</p><p>VP: ' + esc(tacOp.vp) + '</p>' : '<p>Не выбрана.</p>') +
          '</div>' +
          '<div class="cheat-section">' +
            '<h3>Kill Op — ' + esc(killOp.desc) + '</h3>' +
            '<table class="killop-table"><thead>' + headHtml + '</thead><tbody>' + bodyHtml + '</tbody></table>' +
            '<p>Текущий kill grade: <b>' + t.killGrade + '</b></p>' +
          '</div>' +
        '</div>' +
      '</details>'
    );
  }

  // ==================================================================
  // Диспетчер событий
  // ==================================================================

  function findOp(opId) { return findOperator(appState.team, opId); }

  var ACTIONS = {
    goSetup: function () { backToSetup(appState); persist(); render(); },
    goGame: function () {
      if (appState.phase === 'game') return;
      if (!isReadyToStart(appState)) {
        showToast('Нужно: Crit Op, оператор в составе, архетип и Tac Op.');
        return;
      }
      startGame(appState); persist(); render();
    },
    startGame: function () {
      if (startGame(appState)) { persist(); render(); }
    },

    selectKillTeam: function (ds) {
      selectKillTeam(gameData, appState.team, ds.value);
      appState.team.name = ds.value;
      persist(); render();
    },
    adjustPool: function (ds) {
      var delta = parseInt(ds.delta, 10);
      if (adjustPoolCount(gameData, appState.team, ds.value, delta)) {
        rebuildOperatorsFromKillTeam(gameData, appState.team);
        persist(); render();
      }
    },
    clearRoster: function () {
      askConfirm('Полностью очистить состав команды?', function () {
        clearRoster(appState.team); persist(); render();
      });
    },
    selectCritOp: function (ds) { selectCritOp(appState, ds.value); persist(); render(); },
    randomCritOp: function () {
      var picked = selectRandomCritOp(gameData, appState);
      persist(); render();
      showToast('Выбрано: ' + picked.name);
    },
    toggleArchetype: function (ds) { toggleArchetype(appState.team, ds.value); persist(); render(); },
    selectTacOp: function (ds) { selectTacOp(appState.team, ds.value); persist(); render(); },
    toggleEquipment: function (ds) {
      toggleEquipment(gameData, appState.team, ds.value);
      persist(); render();
    },

    changeTurningPoint: function (ds) { changeTurningPoint(appState, parseInt(ds.delta, 10)); persist(); render(); },
    resetTurningPointMarks: function () { resetTurningPointMarks(appState.team); persist(); render(); showToast('Отметки раунда сброшены'); },
    changeCP: function (ds) { changeCP(appState.team, parseInt(ds.delta, 10)); persist(); render(); },
    changeVP: function (ds) { changeVP(appState.team, parseInt(ds.delta, 10)); persist(); render(); },
    changeKillGrade: function (ds) { changeKillGrade(appState.team, parseInt(ds.delta, 10)); persist(); render(); },

    addOperator: function () { addOperator(appState.team); persist(); render(); },
    toggleActivated: function (ds) { var op = findOp(ds.op); if (op) { toggleActivated(op); persist(); render(); } },
    cycleOrder: function (ds) { var op = findOp(ds.op); if (op) { cycleOrder(op); persist(); render(); } },
    healOperator: function (ds) { var op = findOp(ds.op); if (op) { healOperator(op, parseInt(ds.amount, 10)); persist(); render(); } },
    damageOperator: function (ds) { var op = findOp(ds.op); if (op) { damageOperator(op, parseInt(ds.amount, 10)); persist(); render(); } },
    setWoundSegment: function (ds) { var op = findOp(ds.op); if (op) { setWoundsFromTrackSegment(op, parseInt(ds.segment, 10)); persist(); render(); } },
    toggleToken: function (ds) { var op = findOp(ds.op); if (op) { toggleToken(op, ds.value); persist(); render(); } },
    removeToken: function (ds) { var op = findOp(ds.op); if (op) { removeToken(op, ds.value); persist(); render(); } },

    useEquipment: function (ds) { if (useEquipment(gameData, appState.team, ds.value)) { persist(); render(); } },

    exportState: function () {
      downloadJSON(exportState(appState), 'killteam-tracker-save.json');
      showToast('Состояние экспортировано');
    },
    resetSetup: function () {
      askConfirm('Обнулить все выборы и начать подготовку заново? Отменить нельзя.', function () {
        appState = createInitialAppState();
        persist(); render();
      });
    },

    cancelConfirm: function () { pendingConfirm = null; renderModal(); },
    confirmYes: function () {
      var fn = pendingConfirm && pendingConfirm.onConfirm;
      pendingConfirm = null;
      renderModal();
      if (fn) fn();
    },

    closeInfo: function () { pendingInfo = null; renderModal(); },
    showTermInfo: function (ds) { showTermInfo(ds.term); },
  };

  function onClick(e) {
    var target = e.target.closest('[data-action]');
    if (!target) return;
    var action = target.dataset.action;

    if (action === 'importRosterFile' || action === 'importStateFile') return; // обрабатывается через change

    if (ACTIONS[action]) {
      e.preventDefault();
      ACTIONS[action](target.dataset);
    }
  }

  function onChange(e) {
    var target = e.target;
    if (target.matches('[data-action="importRosterFile"]')) {
      var f1 = target.files && target.files[0];
      if (!f1) return;
      readFileAsJSON(f1).then(function (data) {
        askConfirm('Импортировать состав из файла? Текущий автоматический состав будет заменён.', function () {
          var list = Array.isArray(data) ? data : (data.operators || []);
          importRoster(appState.team, list, data.teamName);
          persist(); render();
          showToast('Ростер импортирован');
        });
      }).catch(function () { showToast('Не удалось прочитать файл'); });
      target.value = '';
      return;
    }
    if (target.matches('[data-action="importStateFile"]')) {
      var f2 = target.files && target.files[0];
      if (!f2) return;
      readFileAsJSON(f2).then(function (data) {
        askConfirm('Импортировать состояние партии? Текущее состояние будет полностью заменено.', function () {
          appState = importState(data);
          backfillOperatorStatsFromKillTeam(gameData, appState);
          persist(); render();
          showToast('Состояние импортировано');
        });
      }).catch(function () { showToast('Не удалось прочитать файл'); });
      target.value = '';
      return;
    }

    if (target.dataset.field === 'enemyCount') {
      setEnemyOperativeCount(appState, parseFloat(target.value)); persist(); render();
    }
    if (target.dataset.field === 'operatorName') {
      var op = findOp(target.dataset.op);
      if (op) { renameOperator(op, target.value); persist(); }
    }
  }

  function onInput(e) {
    var target = e.target;
    // Живое обновление текстовых полей без потери фокуса — без полного ре-рендера.
    if (target.dataset.field === 'operatorName') {
      var op = findOp(target.dataset.op);
      if (op) { renameOperator(op, target.value); persist(); }
    }
  }

  function onSubmit(e) {
    var form = e.target.closest('[data-action-submit="addCustomToken"]');
    if (!form) return;
    e.preventDefault();
    var input = form.querySelector('input');
    var op = findOp(form.dataset.op);
    if (op && input.value.trim()) {
      addCustomToken(op, input.value.trim());
      persist();
      render();
    }
  }

  function onKeydown(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var target = e.target.closest('.term-clickable[data-action]');
    if (!target) return;
    e.preventDefault();
    target.click();
  }

  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onKeydown);
  document.addEventListener('change', onChange);
  document.addEventListener('input', onInput);
  document.addEventListener('submit', onSubmit);
  document.addEventListener('DOMContentLoaded', boot);
})();
