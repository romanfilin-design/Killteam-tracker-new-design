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

  var gameData = null;
  var appState = null;
  var pendingConfirm = null; // { message, onConfirm }
  var toastEl = null;

  // ------------------------------------------------------------------
  // Загрузка данных / состояния
  // ------------------------------------------------------------------

  function loadGameData() {
    return fetch('./game_data.json')
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
      '</main>' + (appState.phase === 'game' ? renderActionBar() : '');
    renderModal();
    restoreFocus(focusInfo);
  }

  function renderModal() {
    var root = document.getElementById('modal-root');
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
      renderTeamNamePanel() +
      renderKillTeamPickPanel() +
      (t.killTeamName ? renderPoolPanel() : '') +
      renderRosterToolsPanel() +
      renderCritOpPanel() +
      renderArchetypePanel() +
      renderEquipmentSetupPanel() +
      '<button class="btn btn--accent btn--block" style="min-height:56px;font-size:16px;" data-action="startGame" ' +
        (ready ? '' : 'disabled') + '>Начать партию</button>' +
      (!ready ? '<p class="empty-state">Нужно: выбрать Crit Op, набрать хотя бы одного оператора, выбрать архетип и Tac Op.</p>' : '')
    );
  }

  function renderTeamNamePanel() {
    return (
      '<section class="panel">' +
        '<div class="field" style="margin-bottom:0;">' +
          '<label class="field__label">Название команды</label>' +
          '<input type="text" data-focus-key="teamName" data-field="teamName" value="' + esc(appState.team.name) + '" />' +
        '</div>' +
      '</section>'
    );
  }

  function renderKillTeamPickPanel() {
    var names = Object.keys(gameData.killTeams || {});
    var cards = names.map(function (name) {
      var isSel = appState.team.killTeamName === name;
      return '<button class="pick-card' + (isSel ? ' is-selected' : '') + '" data-action="selectKillTeam" data-value="' + esc(name) + '">' +
        '<span class="pick-card__name">' + esc(name) + '</span>' +
        '<span class="pick-card__meta">' + (gameData.killTeams[name].archetypes || []).join(' · ') + '</span>' +
      '</button>';
    }).join('');
    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Kill Team</span></div>' +
        '<div class="pick-grid">' + cards + '</div>' +
      '</section>'
    );
  }

  function renderPoolPanel() {
    var t = appState.team;
    var def = findKillTeamDef(gameData, t.killTeamName);
    if (!def) return '';
    var requiredRows = (def.required || []).map(function (r) {
      return '<div class="pool-row">' +
        '<div class="pool-row__info">' +
          '<div class="pool-row__name">' + esc(r.name) + '</div>' +
          '<div class="pool-row__stats">APL ' + esc(r.apl) + ' · MOVE ' + esc(r.move) + ' · SAVE ' + esc(r.save) + ' · W' + esc(r.wounds) + '</div>' +
        '</div>' +
        '<span class="required-tag">Обязательный ×' + r.count + '</span>' +
      '</div>';
    }).join('');

    var totalPicked = Object.values(t.poolCounts || {}).reduce(function (a, b) { return a + b; }, 0);

    var poolRows = (def.pool || []).map(function (p) {
      var count = t.poolCounts[p.name] || 0;
      var maxCopies = p.maxCopies || 1;
      return '<div class="pool-row">' +
        '<div class="pool-row__info">' +
          '<div class="pool-row__name">' + esc(p.name) + '</div>' +
          '<div class="pool-row__stats">APL ' + esc(p.apl) + ' · MOVE ' + esc(p.move) + ' · SAVE ' + esc(p.save) + ' · W' + esc(p.wounds) +
            (maxCopies > 1 ? ' · лимит ' + maxCopies : '') + '</div>' +
        '</div>' +
        '<div class="pool-row__stepper">' +
          '<button class="btn btn--icon btn--sm" data-action="adjustPool" data-value="' + esc(p.name) + '" data-delta="-1" ' + (count <= 0 ? 'disabled' : '') + '>−</button>' +
          '<span class="pool-row__count">' + count + '</span>' +
          '<button class="btn btn--icon btn--sm" data-action="adjustPool" data-value="' + esc(p.name) + '" data-delta="1" ' +
            (count >= maxCopies || totalPicked >= def.poolPick ? 'disabled' : '') + '>+</button>' +
        '</div>' +
      '</div>';
    }).join('');

    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Состав отряда</span></div>' +
        requiredRows + poolRows +
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

  function renderCritOpPanel() {
    var cards = (gameData.critOps || []).map(function (op) {
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
        '<div class="pick-grid">' + cards + '</div>' +
      '</section>'
    );
  }

  function renderArchetypePanel() {
    var t = appState.team;
    var def = findKillTeamDef(gameData, t.killTeamName);
    var archetypes = def ? (def.archetypes || []) : Object.keys(gameData.tacOpsByArchetype || {});

    var archBtns = archetypes.map(function (a) {
      var isSel = t.archetype === a;
      return '<button class="pick-card' + (isSel ? ' is-selected' : '') + '" data-action="toggleArchetype" data-value="' + esc(a) + '">' +
        '<span class="pick-card__name">' + esc(a) + '</span>' +
      '</button>';
    }).join('');

    var tacOpsHtml = '';
    if (t.archetype) {
      var list = (gameData.tacOpsByArchetype || {})[t.archetype] || [];
      tacOpsHtml = '<div class="pick-grid" style="margin-top:10px;">' + list.map(function (op) {
        var isSel = t.tacOpId === op.id;
        return '<button class="pick-card' + (isSel ? ' is-selected' : '') + '" data-action="selectTacOp" data-value="' + esc(op.id) + '">' +
          '<span class="pick-card__name">' + esc(op.name) + '</span>' +
          (isSel ? '<span class="pick-card__detail">' +
            '<div><b>Reveal:</b> ' + esc(op.reveal) + '</div>' +
            '<div><b>Правила:</b> ' + esc(op.rules) + '</div>' +
            '<div><b>VP:</b> ' + esc(op.vp) + '</div>' +
          '</span>' : '') +
        '</button>';
      }).join('') + '</div>';
    }

    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Архетип &amp; Tac Op</span></div>' +
        '<div class="pick-grid">' + archBtns + '</div>' +
        tacOpsHtml +
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

    var universalHtml = lists.universal.map(chip).join('');
    var factionHtml = lists.faction.length ? '<div class="panel__title" style="margin:12px 0 6px;">Снаряжение фракции</div>' + lists.faction.map(chip).join('') : '';

    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Снаряжение</span><span class="panel__badge">' + t.equipmentIds.length + ' / ' + limit + '</span></div>' +
        universalHtml + factionHtml +
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
      renderOperatorsList() +
      '<button class="btn btn--ghost btn--block" data-action="addOperator" style="margin-bottom:12px;">+ Добавить оператора</button>' +
      renderEquipmentGamePanel() +
      renderCheatSheet()
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
    var segCount = Math.max(1, op.maxWounds);
    var segs = '';
    for (var i = 0; i < segCount; i++) {
      var filled = op.wounds > i;
      var critical = (i + 1) <= Math.ceil(op.maxWounds / 2);
      segs += '<button class="wound-seg' + (filled ? ' is-filled' : '') + (critical ? ' is-critical' : '') +
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
          '<button class="operator__remove" data-action="removeOperator" data-op="' + op.id + '" aria-label="Удалить оператора">✕</button>' +
        '</div>' +

        '<div class="wound-track">' + segs + '</div>' +
        '<div class="wound-readout">' +
          '<span class="wound-readout__num' + (down ? ' is-critical' : '') + '">' + op.wounds + '</span>' +
          '<span class="wound-readout__max">из <input class="wound-readout__maxedit" type="number" min="1" data-focus-key="opmax-' + op.id + '" data-field="operatorMaxWounds" data-op="' + op.id + '" value="' + op.maxWounds + '" /></span>' +
        '</div>' +
        '<div class="operator__hp-buttons">' +
          '<button class="btn btn--sm" data-action="healOperator" data-op="' + op.id + '" data-amount="1">+1</button>' +
          '<button class="btn btn--sm" data-action="healOperator" data-op="' + op.id + '" data-amount="3">+3</button>' +
          '<button class="btn btn--sm btn--danger" data-action="damageOperator" data-op="' + op.id + '" data-amount="1">−1</button>' +
          '<button class="btn btn--sm btn--danger" data-action="damageOperator" data-op="' + op.id + '" data-amount="3">−3</button>' +
          '<button class="btn btn--sm btn--danger" data-action="damageOperator" data-op="' + op.id + '" data-amount="6">−6</button>' +
        '</div>' +

        '<div class="operator__controls">' +
          '<button class="order-btn activated-btn' + (op.activated ? ' is-on' : '') + '" data-action="toggleActivated" data-op="' + op.id + '">' + (op.activated ? 'Активирован' : 'Не активирован') + '</button>' +
          '<button class="order-btn ' + (op.order ? 'order-' + op.order : '') + '" data-action="cycleOrder" data-op="' + op.id + '">' + (op.order ? op.order.toUpperCase() : 'Приказ: —') + '</button>' +
        '</div>' +
        '<div class="operator__controls">' + quickChips + '</div>' +
        '<div class="token-row">' + tokenPills + '</div>' +
        '<form class="token-add" data-action-submit="addCustomToken" data-op="' + op.id + '">' +
          '<input type="text" placeholder="Свой статус-токен…" data-op="' + op.id + '" />' +
          '<button class="btn btn--sm" type="submit">+ Токен</button>' +
        '</form>' +
      '</article>'
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
    var lists = equipmentUniqueList();
    var selectedEquip = t.equipmentIds.map(function (uid) { return resolveEquipmentItem(gameData, t, uid); }).filter(Boolean);

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
            '<h3>Снаряжение</h3>' +
            (selectedEquip.length ? selectedEquip.map(function (e) { return '<p><b>' + esc(e.name) + '</b> — ' + esc(e.desc) + '</p>'; }).join('') : '<p>Не выбрано.</p>') +
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

  function renderActionBar() {
    return (
      '<div class="action-bar">' +
        '<button class="btn btn--ghost" data-action="goSetup">Подготовка</button>' +
        '<label class="btn btn--ghost">Импорт<input type="file" accept="application/json" class="visually-hidden-input" data-action="importStateFile" /></label>' +
        '<button class="btn btn--ghost" data-action="exportState">Экспорт</button>' +
        '<button class="btn btn--accent" data-action="newGameKeepingRoster">Новая партия</button>' +
      '</div>'
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
    removeOperator: function (ds) {
      var op = findOp(ds.op);
      askConfirm('Удалить оператора «' + (op ? op.name : '') + '»? Действие необратимо.', function () {
        removeOperator(appState.team, ds.op); persist(); render();
      });
    },
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
    newGameKeepingRoster: function () {
      askConfirm('Начать новую партию с тем же составом? Счётчики и здоровье будут сброшены.', function () {
        startNewGameKeepingRoster(appState); persist(); render();
      });
    },

    cancelConfirm: function () { pendingConfirm = null; renderModal(); },
    confirmYes: function () {
      var fn = pendingConfirm && pendingConfirm.onConfirm;
      pendingConfirm = null;
      renderModal();
      if (fn) fn();
    },
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

    if (target.dataset.field === 'teamName') {
      appState.team.name = target.value; persist();
    }
    if (target.dataset.field === 'enemyCount') {
      setEnemyOperativeCount(appState, parseFloat(target.value)); persist(); render();
    }
    if (target.dataset.field === 'operatorName') {
      var op = findOp(target.dataset.op);
      if (op) { renameOperator(op, target.value); persist(); }
    }
    if (target.dataset.field === 'operatorMaxWounds') {
      var op2 = findOp(target.dataset.op);
      if (op2) { setMaxWounds(op2, parseFloat(target.value)); persist(); render(); }
    }
  }

  function onInput(e) {
    var target = e.target;
    // Живое обновление текстовых полей без потери фокуса — без полного ре-рендера.
    if (target.dataset.field === 'teamName') {
      appState.team.name = target.value; persist();
    }
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

  document.addEventListener('click', onClick);
  document.addEventListener('change', onChange);
  document.addEventListener('input', onInput);
  document.addEventListener('submit', onSubmit);
  document.addEventListener('DOMContentLoaded', boot);
})();
