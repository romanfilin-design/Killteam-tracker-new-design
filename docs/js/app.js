/**
 * KILL TEAM SOLO TRACKER — слой рендера и связывания UI с tracker_logic.js.
 * Здесь нет игровых правил — вся логика приходит из tracker_logic.js,
 * данные — из game_data.json (или встроенного фолбэка). Этот файл только
 * строит HTML по текущему appState и обрабатывает события пользователя.
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'kt_solo_tracker_state_v1';

  // Общее число официальных Kill Team в игре (не все ещё добавлены в трекер) —
  // используется только для счётчика "x / N" в шапке выбора команды на
  // экране подготовки. Обновляй вручную, если официальный список пополнится.
  var TOTAL_KILL_TEAMS_PLANNED = 33;

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
  var ICON_ROOM_SVG =
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M3 11 L12 4 L21 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M5 10 V20 H19 V10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';

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
    'Repress': 'Repress — свои блоки можно засчитывать против двух неразрешённых успехов вместо одного; если этот оператор отвечает (retaliating), первым разрешается кубик атаки защищающегося (а не атакующего).',
    'Punishing': 'Punishing — если сохранён хотя бы один критический успех, можно сохранить один из своих провалов как обычный успех вместо того, чтобы его отбросить.',
    'Concealed Position': 'Concealed Position — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Concealed Position»).',
    'Salvo': 'Salvo — выбери до двух разных допустимых целей вне control range дружественных операторов и стреляй по обеим этим оружием в выбранном порядке (каждую последовательность разрешай отдельно).',
    'Relentless': 'Relentless — можно перебрасывать любые свои кубики атаки.',
    'Vicious Blows': 'Vicious Blows — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Vicious Blows»).',
    'Headtaker': 'Headtaker — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Headtaker»).',
    'Tactual Hunter': 'Tactual Hunter — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Tactual Hunter»).',
    'Explosive': 'Explosive — особое правило конкретного оружия; полное описание — в способностях этого оператора (ищи запись «* Explosive»).',
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
  // Комната синхронизации (Firebase) — see docs/js/firebase-room.js
  // ------------------------------------------------------------------
  var ROOM_STORAGE_KEY = 'kt_room_code_v1';
  var roomState = { code: null, others: [], enemyTokenMarks: {}, critOpId: null, critOpLocked: false };
  var pendingRoom = null; // { mode: 'menu' | 'join', input }
  var publishTimer = null;
  var roomUnsubscribers = [];

  function loadRoomCode() {
    try { return localStorage.getItem(ROOM_STORAGE_KEY) || null; } catch (e) { return null; }
  }
  function persistRoomCode(code) {
    try {
      if (code) localStorage.setItem(ROOM_STORAGE_KEY, code);
      else localStorage.removeItem(ROOM_STORAGE_KEY);
    } catch (e) { /* noop */ }
  }

  function stopRoomSubscriptions() {
    roomUnsubscribers.forEach(function (unsub) { try { unsub(); } catch (e) { /* noop */ } });
    roomUnsubscribers = [];
  }

  function attachRoomSubscriptions(code) {
    stopRoomSubscriptions();
    roomUnsubscribers.push(window.KTRoom.subscribeRoom(code, function (data) {
      roomState.enemyTokenMarks = (data && data.enemyTokenMarks) || {};
      roomState.critOpId = (data && data.critOpId) || null;
      roomState.critOpLocked = !!(data && data.critOpLocked);
      // Общий Crit Op комнаты — источник истины, пока мы в комнате: зеркалим
      // его в локальное состояние, чтобы существующая логика готовности к
      // партии (isReadyToStart) и панель Crit Op работали без переделки.
      if (appState && roomState.critOpId && appState.critOpId !== roomState.critOpId) {
        appState.critOpId = roomState.critOpId;
        persist();
      }
      render();
    }));
    roomUnsubscribers.push(window.KTRoom.subscribeOthers(code, roomState.uid, function (others) {
      roomState.others = others;
      render();
    }));
  }

  function enterRoom(code, uid) {
    roomState.code = code;
    roomState.uid = uid;
    persistRoomCode(code);
    attachRoomSubscriptions(code);
    publishOwnState();
    render();
  }

  function leaveRoomState() {
    stopRoomSubscriptions();
    roomState = { code: null, others: [], enemyTokenMarks: {}, critOpId: null, critOpLocked: false };
    persistRoomCode(null);
    if (appState && appState.phase === 'opponent') { appState.phase = 'setup'; }
    render();
  }

  function publishOwnState() {
    if (!roomState.code || !roomState.uid || !window.KTRoom) return;
    window.clearTimeout(publishTimer);
    publishTimer = window.setTimeout(function () {
      var t = appState.team;
      window.KTRoom.publishSelf(roomState.code, roomState.uid, {
        teamName: t.killTeamName || t.name,
        operators: t.operators.map(function (op) {
          return {
            id: op.id, name: op.name, portrait: op.portrait || null,
            wounds: op.wounds, maxWounds: op.maxWounds,
            order: op.order || null, activated: !!op.activated,
            tokens: op.tokens || [], tokenCounts: op.tokenCounts || {}
          };
        })
      });
    }, 400);
  }

  function initRoomIfSaved() {
    var savedCode = loadRoomCode();
    if (!savedCode || !window.KTRoom) return;
    window.KTRoom.ready.then(function (uid) {
      roomState.uid = uid;
      window.KTRoom.joinRoom(savedCode).then(function () {
        enterRoom(savedCode, uid);
      }).catch(function () {
        persistRoomCode(null);
      });
    });
  }

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
    publishOwnState();
  }

  function boot() {
    loadGameData().then(function (data) {
      gameData = data;
      appState = loadSavedState() || createInitialAppState();
      backfillOperatorStatsFromKillTeam(gameData, appState);
      persist();
      render();
      initRoomIfSaved();
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

  // Скролл горизонтальных каруселей (пул операторов, выбор Kill Team) иначе
  // сбрасывается в начало при каждом ре-рендере, потому что innerHTML
  // полностью пересоздаёт элемент — браузер не помнит scrollLeft для нового DOM-узла.
  var SCROLL_PRESERVE_SELECTORS = ['.pool-carousel', '.pick-list'];

  function captureScrollPositions() {
    return SCROLL_PRESERVE_SELECTORS.map(function (sel) {
      var el = document.querySelector(sel);
      return el ? { sel: sel, left: el.scrollLeft, top: el.scrollTop } : null;
    }).filter(Boolean);
  }

  function restoreScrollPositions(positions) {
    positions.forEach(function (pos) {
      var el = document.querySelector(pos.sel);
      if (el) { el.scrollLeft = pos.left; el.scrollTop = pos.top; }
    });
  }

  // ------------------------------------------------------------------
  // Render — точка входа
  // ------------------------------------------------------------------

  function render() {
    var focusInfo = captureFocus();
    var scrollPositions = captureScrollPositions();
    var app = document.getElementById('app');
    app.innerHTML = renderHeader() + '<main id="screen">' +
      (appState.phase === 'game' ? renderGameScreen() :
        (appState.phase === 'opponent' ? renderOpponentScreen() : renderSetupScreen())) +
      '</main>';
    renderModal();
    restoreFocus(focusInfo);
    restoreScrollPositions(scrollPositions);
  }

  function renderModal() {
    var root = document.getElementById('modal-root');
    if (pendingRoom) {
      root.innerHTML = renderRoomModal();
      return;
    }
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

  function renderRoomModal() {
    if (roomState.code) {
      return (
        '<div class="modal-overlay" data-action="closeRoomModal">' +
          '<div class="modal-box" data-action="noop">' +
            '<h2>Комната синхронизации</h2>' +
            '<p>Код комнаты: <b>' + esc(roomState.code) + '</b><br>Сообщите его сопернику, чтобы он подключился.</p>' +
            '<div class="btn-row">' +
              '<button class="btn btn--danger" data-action="leaveRoom">Покинуть комнату</button>' +
              '<button class="btn btn--ghost" data-action="closeRoomModal">Закрыть</button>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }
    if (pendingRoom.mode === 'join') {
      return (
        '<div class="modal-overlay" data-action="closeRoomModal">' +
          '<div class="modal-box" data-action="noop">' +
            '<h2>Войти в комнату</h2>' +
            '<div class="field">' +
              '<label class="field__label">Код комнаты</label>' +
              '<input type="text" data-focus-key="roomCodeInput" data-field="roomCodeInput" value="' + esc(pendingRoom.input || '') + '" maxlength="8" style="text-transform:uppercase;" />' +
            '</div>' +
            '<div class="btn-row">' +
              '<button class="btn btn--ghost" data-action="backToRoomMenu">Назад</button>' +
              '<button class="btn btn--accent" data-action="submitJoinRoom">Войти</button>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }
    return (
      '<div class="modal-overlay" data-action="closeRoomModal">' +
        '<div class="modal-box" data-action="noop">' +
          '<h2>Комната синхронизации</h2>' +
          '<p>Создайте комнату для игры вдвоём с общим Crit Op и вкладкой «Противник», или войдите по коду соперника.</p>' +
          '<div class="btn-row">' +
            '<button class="btn btn--accent" data-action="createRoom">Создать комнату</button>' +
            '<button class="btn btn--ghost" data-action="showJoinForm">Войти по коду</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
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
    var roomTitle = roomState.code ? ('Комната: ' + roomState.code) : 'Комната синхронизации';
    return (
      '<header class="terminal-header">' +
        '<div class="terminal-header__row">' +
          '<div class="terminal-title"><span class="terminal-title__dot"></span><span class="terminal-title__text">' + esc(team.name || 'ОПЕРАТОР') + '</span></div>' +
          '<div class="mode-tabs">' +
            '<button class="' + (appState.phase === 'setup' ? 'active' : '') + '" data-action="goSetup" title="Подготовка">Prep</button>' +
            '<button class="' + (appState.phase === 'game' ? 'active' : '') + '" data-action="goGame" title="Игра">Game</button>' +
            (roomState.code ? '<button class="' + (appState.phase === 'opponent' ? 'active' : '') + '" data-action="goOpponent" title="Противник">Enemy</button>' : '') +
            '<button class="mode-tabs__icon-btn' + (roomState.code ? ' is-active-room' : '') + '" data-action="openRoomModal" title="' + esc(roomTitle) + '" aria-label="' + esc(roomTitle) + '">' + ICON_ROOM_SVG + '</button>' +
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
    var ready = isReadyToStart(gameData, appState);
    return (
      renderPartyToolsPanel() +
      renderKillTeamPickPanel() +
      (t.killTeamName ? renderTeamLorePanel() : '') +
      (t.killTeamName ? renderPoolPanel() : '') +
      renderRosterToolsPanel() +
      renderCritOpPanel() +
      renderArchetypePanel() +
      (appState.team.archetype ? renderTacOpPanel() : '') +
      renderFactionChoicesSetupPanel() +
      renderEquipmentSetupPanel() +
      '<button class="btn btn--accent btn--block" style="min-height:56px;font-size:16px;" data-action="startGame" ' +
        (ready ? '' : 'disabled') + '>Начать партию</button>' +
      (!ready ? renderStartRequirementsHint(t) : '')
    );
  }

  function renderStartRequirementsHint(t) {
    var missing = [];
    if (!appState.critOpId) missing.push('Crit Op');
    if (!t.operators.length) missing.push('оператора в составе');
    if (!t.archetype) missing.push('архетип');
    else if (!t.tacOpId) missing.push('Tac Op');
    var killTeamDef = findKillTeamDef(gameData, t.killTeamName);
    (killTeamDef && killTeamDef.factionChoices || []).filter(function (c) { return c.scope === 'setup'; }).forEach(function (c) {
      var value = (t.factionChoices || {})[c.id];
      var incomplete = !value || value.length !== c.pick || value.some(function (v) { return !v; });
      if (incomplete) missing.push(c.label);
    });
    if (!missing.length) return '';
    return '<p class="empty-state">Нужно выбрать: ' + missing.join(', ') + '.</p>';
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
    var names = Object.keys(gameData.killTeams || {}).sort(function (a, b) { return a.localeCompare(b); });
    var cards = names.map(function (name) {
      var isSel = appState.team.killTeamName === name;
      var def = gameData.killTeams[name];
      var leaderSource = (def.required && def.required[0]) || (def.pool && def.pool[0]);
      var leaderPortrait = leaderSource ? leaderSource.portrait : null;
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
        '<div class="panel__head"><span class="panel__title">Kill Team</span><span class="panel__badge">' + names.length + ' / ' + TOTAL_KILL_TEAMS_PLANNED + '</span></div>' +
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
    var inRoom = !!roomState.code;
    var locked = inRoom && roomState.critOpLocked;
    var list = selectedFirst(gameData.critOps || [], function (op) { return appState.critOpId === op.id; });
    var cards = list.map(function (op) {
      var isSel = appState.critOpId === op.id;
      return '<button class="pick-card' + (isSel ? ' is-selected' : '') + '" data-action="selectCritOp" data-value="' + esc(op.id) + '" ' +
        (locked ? 'disabled' : '') + '>' +
        '<span class="pick-card__name">' + esc(op.name) + '</span>' +
        (isSel ? '<span class="pick-card__detail"><div><b>Действие:</b> ' + esc(op.action) + '</div><div><b>VP:</b> ' + esc(op.vp) + '</div></span>' : '') +
      '</button>';
    }).join('');
    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Crit Op' + (inRoom ? ' (общий)' : '') + '</span>' +
          '<button class="btn btn--sm btn--ghost" data-action="randomCritOp" ' + (locked ? 'disabled' : '') + '>Случайно</button>' +
        '</div>' +
        (locked ? '<p class="empty-state">Crit Op зафиксирован — партия уже начата.</p>' : '') +
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

  // Faction-choices сеттапа (Chapter Tactics и т.п. — "выбери N из списка" на
  // уровне команды, а не оператора). Один под-блок на слот (Primary/Secondary),
  // уже занятый в другом слоте вариант дизейблится, чтобы не дублировать зря.
  function renderFactionChoicesSetupPanel() {
    var t = appState.team;
    var killTeamDef = findKillTeamDef(gameData, t.killTeamName);
    var choices = (killTeamDef && killTeamDef.factionChoices || []).filter(function (c) { return c.scope === 'setup'; });
    if (!choices.length) return '';

    return choices.map(function (choice) {
      var current = (t.factionChoices || {})[choice.id] || [];
      var slotsHtml = '';
      for (var slot = 0; slot < choice.pick; slot++) {
        var selectedId = current[slot] || null;
        var slotLabel = (choice.pickLabels && choice.pickLabels[slot]) || ('Вариант ' + (slot + 1));
        var options = selectedFirst(choice.options, function (o) { return o.id === selectedId; });
        var optionsHtml = options.map(function (o) {
          var isSel = o.id === selectedId;
          var usedElsewhere = !isSel && current.indexOf(o.id) >= 0;
          return '<button class="pick-card' + (isSel ? ' is-selected' : '') + '" ' +
            'data-action="setFactionChoiceSlot" data-choice="' + esc(choice.id) + '" data-slot="' + slot + '" data-value="' + esc(o.id) + '" ' +
            (usedElsewhere ? 'disabled' : '') + '>' +
            '<span class="pick-card__name">' + esc(o.name) + '</span>' +
            (isSel && o.text ? '<span class="pick-card__detail"><div>' + esc(o.text) + '</div></span>' : '') +
          '</button>';
        }).join('');
        slotsHtml += '<div class="panel__title" style="margin:' + (slot ? '14px' : '0') + ' 0 6px;">' + esc(slotLabel) + '</div>' +
          '<div class="pick-stack">' + optionsHtml + '</div>';
      }
      return (
        '<section class="panel">' +
          '<div class="panel__head"><span class="panel__title">' + esc(choice.label) + '</span></div>' +
          slotsHtml +
        '</section>'
      );
    }).join('');
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
      renderFactionChoicesGamePanel() +
      renderFactionRulePanel() +
      renderOperatorsList() +
      '<button class="btn btn--ghost btn--block" data-action="addOperator" style="margin-bottom:12px;">+ Добавить оператора</button>' +
      renderEquipmentGamePanel() +
      renderCheatSheet()
    );
  }

  // ==================================================================
  // ЭКРАН ПРОТИВНИКА (комната синхронизации, см. docs/js/firebase-room.js)
  // ==================================================================

  function renderOpponentScreen() {
    if (!roomState.code) {
      return '<p class="empty-state">Вы не в комнате. Нажмите «Комната» вверху, чтобы создать её или войти по коду.</p>';
    }
    var others = roomState.others || [];
    if (!others.length) {
      return '<p class="empty-state">Комната «' + esc(roomState.code) + '» открыта. Ждём подключения соперника…</p>';
    }
    var tokenDefs = enemyStatusTokenDefs(gameData, appState.team.killTeamName);
    return others.map(function (player) {
      var ops = player.operators || [];
      var friendlyDefs = friendlyStatusTokenDefs(gameData, player.teamName);
      var opsHtml = ops.length
        ? ops.map(function (op) { return renderOpponentOperatorCard(op, player.uid, tokenDefs, friendlyDefs); }).join('')
        : '<p class="empty-state">У соперника пока нет операторов в составе.</p>';
      return (
        '<section class="panel">' +
          '<div class="panel__head"><span class="panel__title">Противник: ' + esc(player.teamName || 'Команда соперника') + '</span></div>' +
        '</section>' + opsHtml
      );
    }).join('');
  }

  function renderOpponentOperatorCard(op, opponentUid, tokenDefs, friendlyDefs) {
    var down = op.wounds <= 0;
    var maxWounds = op.maxWounds || 0;
    var hpPct = maxWounds > 0 ? (op.wounds / maxWounds) * 100 : 0;
    var hpClass = hpPct >= 60 ? 'hp-green' : (hpPct >= 30 ? 'hp-yellow' : 'hp-red');
    var segCount = Math.max(1, maxWounds);
    var segs = '';
    for (var i = 0; i < segCount; i++) {
      var filled = op.wounds > i;
      segs += '<span class="wound-seg' + (filled ? ' is-filled ' + hpClass : '') + '" aria-hidden="true"></span>';
    }
    var orderIcon = op.order === 'conceal' ? ICON_CONCEAL_SVG : (op.order === 'engage' ? ICON_ENGAGE_SVG : ICON_ORDER_NEUTRAL_SVG);
    var orderLabel = op.order === 'conceal' ? 'Conceal' : (op.order === 'engage' ? 'Engage' : '—');
    var marks = roomState.enemyTokenMarks || {};
    var chipsHtml = tokenDefs.map(function (tok) {
      var key = window.KTRoom.enemyTokenKey(opponentUid, op.id, tok.id);
      if (tok.counter) {
        var count = Number(marks[key]) || 0;
        return '<div class="counter counter--sm">' +
          '<button data-action="decrementEnemyTokenMark" data-uid="' + esc(opponentUid) + '" data-op="' + esc(op.id) + '" data-token="' + esc(tok.id) + '" data-value="' + count + '">−</button>' +
          '<span class="counter__value">' + esc(tok.name) + ' ' + count + '</span>' +
          '<button data-action="incrementEnemyTokenMark" data-uid="' + esc(opponentUid) + '" data-op="' + esc(op.id) + '" data-token="' + esc(tok.id) + '" data-value="' + count + '" data-max="' + tok.max + '">+</button>' +
        '</div>';
      }
      var on = !!marks[key];
      return '<button class="status-chip status-chip--enemy' + (on ? ' is-on' : '') + '" data-action="toggleEnemyTokenMark" data-uid="' + esc(opponentUid) +
        '" data-op="' + esc(op.id) + '" data-token="' + esc(tok.id) + '" data-on="' + (on ? '0' : '1') + '">' + esc(tok.name) + '</button>';
    }).join('');

    // Свои статус-токены соперника (его же friendly-токены — Inspiring,
    // Conceal-related и т.п.) — только для просмотра, зелёным, наравне со
    // своими токенами на карточке "Игра".
    var opTokens = op.tokens || [];
    var opTokenCounts = op.tokenCounts || {};
    var friendlyChipsHtml = (friendlyDefs || []).map(function (tok) {
      if (tok.counter) {
        var count = Number(opTokenCounts[tok.id]) || 0;
        return '<span class="status-chip status-chip--friendly' + (count > 0 ? ' is-on' : '') + '">' + esc(tok.name) + ' ' + count + '</span>';
      }
      var on = opTokens.indexOf(tok.name) >= 0;
      return '<span class="status-chip status-chip--friendly' + (on ? ' is-on' : '') + '">' + esc(tok.name) + '</span>';
    }).join('');

    return (
      '<article class="operator' + (down ? ' is-down' : '') + '">' +
        '<div class="operator__top">' +
          (op.portrait
            ? '<img class="operator__portrait" src="' + esc(op.portrait) + '" alt="">'
            : '<span class="operator__portrait operator__portrait--placeholder" aria-hidden="true">' + PORTRAIT_PLACEHOLDER_SVG + '</span>') +
          '<div class="operator__id"><span class="operator__name-input" style="display:inline-block;">' + esc(op.name) + '</span></div>' +
        '</div>' +
        '<div class="operator__status-row">' +
          '<span class="activate-toggle' + (op.activated ? ' is-on' : '') + '" aria-hidden="true">' + ICON_ACTIVATED_SVG +
            '<span>' + (op.activated ? 'Активирован' : 'Не активирован') + '</span></span>' +
          '<span class="order-cycle-btn order-cycle-btn--' + (op.order || 'neutral') + '" aria-hidden="true">' + orderIcon +
            '<span>Приказ: ' + orderLabel + '</span></span>' +
        '</div>' +
        '<div class="wound-row">' +
          '<div class="wound-track">' + segs + '</div>' +
          '<span class="wound-readout__num ' + hpClass + (String(op.wounds).length >= 2 ? ' wound-readout__num--wide' : '') + '">' + op.wounds + '</span>' +
        '</div>' +
        ((friendlyChipsHtml || chipsHtml) ? '<div class="operator__controls">' + friendlyChipsHtml + chipsHtml + '</div>' : '') +
      '</article>'
    );
  }

  function renderFactionRulePanel() {
    var def = findKillTeamDef(gameData, appState.team.killTeamName);
    var allRules = def ? def.factionRules : null;
    if (!allRules || !allRules.length) return '';

    // Правила, уже вынесенные в интерактивный выбор (factionChoices) выше по
    // экрану — не дублируем их полным текстом здесь, вариант и так виден
    // игроку в живом виде (см. renderFactionChoicesGamePanel).
    var choiceLabels = (def.factionChoices || []).map(function (c) { return c.label; });
    var rules = allRules.filter(function (r) { return choiceLabels.indexOf(r.name) === -1; });
    if (!rules.length) return '';

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

  // Игровой экран: напоминание setup-выборов фракции (Chapter Tactics и т.п.,
  // выбраны один раз при сборке, тут только для справки) + живой переключатель
  // scope:'game' choices (Combat Doctrine — можно менять по ходу партии).
  function renderFactionChoicesGamePanel() {
    var t = appState.team;
    var killTeamDef = findKillTeamDef(gameData, t.killTeamName);
    var allChoices = (killTeamDef && killTeamDef.factionChoices) || [];
    if (!allChoices.length) return '';

    var setupReminder = allChoices.filter(function (c) { return c.scope === 'setup'; }).map(function (c) {
      var value = (t.factionChoices || {})[c.id] || [];
      var names = value.map(function (optId) {
        var opt = c.options.find(function (o) { return o.id === optId; });
        return opt ? opt.name : '—';
      });
      return '<div><b>' + esc(c.label) + ':</b> ' + names.map(esc).join(' / ') + '</div>';
    }).join('');

    var gameChoicesHtml = allChoices.filter(function (c) { return c.scope === 'game'; }).map(function (c) {
      var selectedId = ((t.factionChoices || {})[c.id] || [])[0] || null;
      var usedOptions = (t.factionChoiceUsedOptions || {})[c.id] || [];
      var btnsHtml = c.options.map(function (o) {
        var isSel = o.id === selectedId;
        var isLocked = c.oncePerBattle && !isSel && usedOptions.indexOf(o.id) >= 0;
        return '<button class="btn btn--sm' + (isSel ? ' btn--pressed' : '') + '" ' +
          'data-action="setFactionChoiceSlot" data-choice="' + esc(c.id) + '" data-slot="0" data-value="' + esc(o.id) + '" ' +
          (isLocked ? 'disabled' : '') + '>' +
          esc(o.name) + (isLocked ? ' (использовано)' : '') + '</button>';
      }).join('');
      // Подсказка-описание — по выбранному варианту, если есть, иначе по всем
      // сразу (чтобы можно было прочитать доктрины до выбора, не только после).
      var selectedOpt = c.options.find(function (o) { return o.id === selectedId; });
      var hintHtml = selectedOpt && selectedOpt.text
        ? '<div class="pick-card__detail"><div>' + esc(selectedOpt.text) + '</div></div>'
        : '<div class="pick-card__detail">' + c.options.map(function (o) {
            return o.text ? '<div><b>' + esc(o.name) + ':</b> ' + esc(o.text) + '</div>' : '';
          }).join('') + '</div>';
      return '<div class="field"><span class="field__label">' + esc(c.label) + '</span><div class="btn-row">' + btnsHtml + '</div>' + hintHtml + '</div>';
    }).join('');

    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Правила фракции: выборы</span></div>' +
        (setupReminder ? '<div class="cheat-section" style="margin-top:0;padding-top:0;border-top:none;">' + setupReminder + '</div>' : '') +
        gameChoicesHtml +
      '</section>'
    );
  }

  function renderTurningPointPanel() {
    return (
      '<section class="panel">' +
        '<div class="panel__head"><span class="panel__title">Turning Point</span></div>' +
        '<div class="turning-point-row">' +
          '<div class="counter-block">' +
            '<div class="counter">' +
              '<button data-action="changeTurningPoint" data-delta="-1">−</button>' +
              '<span class="counter__value">' + appState.turningPoint + '</span>' +
              '<button data-action="changeTurningPoint" data-delta="1">+</button>' +
            '</div>' +
          '</div>' +
          '<button class="btn btn--accent turning-point-row__reset" data-action="resetTurningPointMarks">Сброс отметок раунда</button>' +
        '</div>' +
      '</section>'
    );
  }

  function renderCountersPanel() {
    var t = appState.team;
    var auto = computeAutoKillGrade();
    return (
      '<section class="panel">' +
        '<div class="counters-row">' +
          counterBlock('CP', t.cp, 'changeCP') +
          counterBlock('VP', t.vp, 'changeVP') +
          (auto ? counterBlock('KILL GRADE', auto.grade, null) : counterBlock('KILL GRADE', t.killGrade, 'changeKillGrade')) +
        '</div>' +
        (auto ? '<p class="empty-state">Kill Grade считается автоматически: выведено из строя ' + auto.downCount + ' операторов соперника.</p>' : '') +
        '<div class="field" style="margin-top:14px;margin-bottom:0;">' +
          '<label class="field__label">Операторов противника на старте</label>' +
          '<input type="number" min="1" max="20" data-focus-key="enemyCount" data-field="enemyCount" value="' + appState.enemyOperativeCount + '" />' +
        '</div>' +
      '</section>'
    );
  }

  function counterBlock(label, value, action) {
    if (!action) {
      return (
        '<div class="counter-block">' +
          '<span class="counter-block__label">' + label + '</span>' +
          '<div class="counter"><span class="counter__value">' + value + '</span></div>' +
        '</div>'
      );
    }
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

  // Kill Grade можно считать автоматически, когда мы в комнате синхронизации:
  // данные о выведенных из строя операторах соперника уже приходят вживую
  // через вкладку «Противник» (op.wounds), не нужно вести их вручную.
  function computeAutoKillGrade() {
    var others = roomState.others || [];
    if (!roomState.code || !others.length) return null;
    var downCount = 0;
    others.forEach(function (p) {
      (p.operators || []).forEach(function (op) { if ((op.wounds || 0) <= 0) downCount++; });
    });
    var row = getKillGradeRow(gameData, appState.enemyOperativeCount);
    var grade = 0;
    for (var i = row.grades.length - 1; i >= 0; i--) {
      if (downCount >= row.grades[i]) { grade = i + 1; break; }
    }
    return { grade: grade, downCount: downCount };
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

  // Метки, которые соперник наложил на МОЕГО оператора (target:'enemy'
  // статус-токены его фракции — например Markerlight/Photon Grenade у
  // Pathfinders). Читаются из общей комнаты, только для просмотра —
  // назначать их может только сам соперник со своей вкладки «Противник».
  function renderMyEnemyMarksChips(op) {
    if (!roomState.code || !roomState.uid) return '';
    var opponent = (roomState.others || [])[0];
    if (!opponent) return '';
    var tokenDefs = enemyStatusTokenDefs(gameData, opponent.teamName);
    if (!tokenDefs.length) return '';
    var marks = roomState.enemyTokenMarks || {};
    return tokenDefs.map(function (tok) {
      var key = window.KTRoom ? window.KTRoom.enemyTokenKey(roomState.uid, op.id, tok.id) : '';
      if (tok.counter) {
        var count = Number(marks[key]) || 0;
        return '<span class="status-chip status-chip--enemy' + (count > 0 ? ' is-on' : '') + '">' + esc(tok.name) + ' ' + count + '</span>';
      }
      var on = !!marks[key];
      return '<span class="status-chip status-chip--enemy' + (on ? ' is-on' : '') + '">' + esc(tok.name) + '</span>';
    }).join('');
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

    var quickTokenDefs = friendlyStatusTokenDefs(gameData, appState.team.killTeamName);
    var quickTokens = quickTokenDefs.map(function (tok) { return tok.name; });
    var quickChips = quickTokenDefs.map(function (tok) {
      if (tok.counter) {
        var count = op.tokenCounts[tok.id] || 0;
        return '<div class="counter counter--sm" data-token-label="' + esc(tok.name) + '">' +
          '<button data-action="decrementOpToken" data-op="' + op.id + '" data-token="' + esc(tok.id) + '" data-max="' + tok.max + '">−</button>' +
          '<span class="counter__value">' + esc(tok.name) + ' ' + count + '</span>' +
          '<button data-action="incrementOpToken" data-op="' + op.id + '" data-token="' + esc(tok.id) + '" data-max="' + tok.max + '">+</button>' +
        '</div>';
      }
      var on = op.tokens.indexOf(tok.name) >= 0;
      return '<button class="status-chip status-chip--friendly' + (on ? ' is-on' : '') + '" data-action="toggleToken" data-op="' + op.id + '" data-value="' + esc(tok.name) + '">' + esc(tok.name) + '</button>';
    }).join('');

    var otherTokens = op.tokens.filter(function (tok) { return quickTokens.indexOf(tok) === -1; });
    var tokenPills = otherTokens.map(function (tok) {
      return '<span class="token-pill">' + esc(tok) + '<button data-action="removeToken" data-op="' + op.id + '" data-value="' + esc(tok) + '">×</button></span>';
    }).join('');

    var enemyMarksChips = renderMyEnemyMarksChips(op);

    var statLine = (op.apl || op.move || op.save)
      ? '<div class="operator__stats">' +
          '<div class="operator__stat"><span class="operator__stat-label">APL</span><span class="operator__stat-value">' + esc(op.apl || '—') + '</span></div>' +
          '<div class="operator__stat"><span class="operator__stat-label">Move</span><span class="operator__stat-value">' + esc(op.move || '—') + '</span></div>' +
          '<div class="operator__stat"><span class="operator__stat-label">Save</span><span class="operator__stat-value">' + esc(op.save || '—') + '</span></div>' +
        '</div>'
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

        '<div class="operator__controls">' + quickChips + enemyMarksChips + '</div>' +
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

    var killTeamDef = findKillTeamDef(gameData, t.killTeamName);
    var factionChoicesHtml = ((killTeamDef && killTeamDef.factionChoices) || []).map(function (c) {
      var value = (t.factionChoices || {})[c.id] || [];
      var chosen = value.map(function (optId) { return c.options.find(function (o) { return o.id === optId; }); }).filter(Boolean);
      var body = chosen.length
        ? chosen.map(function (o) { return '<p><b>' + esc(o.name) + '</b>' + (o.text ? ' — ' + esc(o.text) : '') + '</p>'; }).join('')
        : '<p>Не выбрано.</p>';
      return '<div class="cheat-section"><h3>' + esc(c.label) + '</h3>' + body + '</div>';
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
          factionChoicesHtml +
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
      if (!isReadyToStart(gameData, appState)) {
        showToast('Нужно: Crit Op, оператор в составе, архетип, Tac Op и правила фракции.');
        return;
      }
      startGame(gameData, appState); persist(); render();
      if (roomState.code && window.KTRoom) window.KTRoom.lockRoomCritOp(roomState.code);
    },
    startGame: function () {
      if (startGame(gameData, appState)) {
        persist(); render();
        if (roomState.code && window.KTRoom) window.KTRoom.lockRoomCritOp(roomState.code);
      }
    },

    goOpponent: function () { appState.phase = 'opponent'; render(); },

    openRoomModal: function () { pendingRoom = { mode: 'menu', input: '' }; renderModal(); },
    closeRoomModal: function () { pendingRoom = null; renderModal(); },
    showJoinForm: function () { pendingRoom = { mode: 'join', input: '' }; renderModal(); },
    backToRoomMenu: function () { pendingRoom = { mode: 'menu', input: '' }; renderModal(); },
    createRoom: function () {
      if (!window.KTRoom) { showToast('Firebase ещё не загрузился, попробуйте через секунду'); return; }
      window.KTRoom.createRoom().then(function (res) {
        roomState.uid = res.uid;
        enterRoom(res.code, res.uid);
        pendingRoom = { mode: 'menu', input: '' };
        renderModal(); render();
        showToast('Комната создана: ' + res.code);
      }).catch(function () { showToast('Не удалось создать комнату'); });
    },
    submitJoinRoom: function () {
      var code = (pendingRoom && pendingRoom.input || '').trim().toUpperCase();
      if (!code) { showToast('Введите код комнаты'); return; }
      if (!window.KTRoom) { showToast('Firebase ещё не загрузился, попробуйте через секунду'); return; }
      window.KTRoom.ready.then(function (uid) {
        roomState.uid = uid;
        return window.KTRoom.joinRoom(code);
      }).then(function (res) {
        enterRoom(res.code, res.uid);
        pendingRoom = null;
        renderModal(); render();
        showToast('Вы вошли в комнату ' + res.code);
      }).catch(function () { showToast('Комната не найдена'); });
    },
    leaveRoom: function () {
      pendingRoom = null;
      askConfirm('Покинуть комнату синхронизации?', function () {
        leaveRoomState();
      });
    },
    toggleEnemyTokenMark: function (ds) {
      if (!window.KTRoom || !roomState.code) return;
      window.KTRoom.toggleEnemyTokenMark(roomState.code, ds.uid, ds.op, ds.token, ds.on === '1');
    },
    incrementEnemyTokenMark: function (ds) {
      if (!window.KTRoom || !roomState.code) return;
      var current = parseInt(ds.value, 10) || 0;
      var next = Math.min(current + 1, parseInt(ds.max, 10));
      window.KTRoom.setEnemyTokenMarkCount(roomState.code, ds.uid, ds.op, ds.token, next);
    },
    decrementEnemyTokenMark: function (ds) {
      if (!window.KTRoom || !roomState.code) return;
      var current = parseInt(ds.value, 10) || 0;
      var next = Math.max(current - 1, 0);
      window.KTRoom.setEnemyTokenMarkCount(roomState.code, ds.uid, ds.op, ds.token, next);
    },

    selectKillTeam: function (ds) {
      selectKillTeam(gameData, appState.team, ds.value);
      appState.team.name = ds.value;
      appState.critOpId = null;
      if (roomState.code && window.KTRoom) window.KTRoom.setRoomCritOp(roomState.code, null);
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
    selectCritOp: function (ds) {
      if (roomState.code && roomState.critOpLocked) { showToast('Crit Op зафиксирован — партия уже начата'); return; }
      selectCritOp(appState, ds.value);
      if (roomState.code && window.KTRoom) window.KTRoom.setRoomCritOp(roomState.code, ds.value);
      persist(); render();
    },
    randomCritOp: function () {
      if (roomState.code && roomState.critOpLocked) { showToast('Crit Op зафиксирован — партия уже начата'); return; }
      var picked = selectRandomCritOp(gameData, appState);
      if (roomState.code && window.KTRoom) window.KTRoom.setRoomCritOp(roomState.code, picked.id);
      persist(); render();
      showToast('Выбрано: ' + picked.name);
    },
    toggleArchetype: function (ds) { toggleArchetype(appState.team, ds.value); persist(); render(); },
    selectTacOp: function (ds) { selectTacOp(appState.team, ds.value); persist(); render(); },
    setFactionChoiceSlot: function (ds) {
      if (setFactionChoiceSlot(gameData, appState.team, ds.choice, parseInt(ds.slot, 10), ds.value)) {
        persist(); render();
      }
    },
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
    incrementOpToken: function (ds) { var op = findOp(ds.op); if (op) { incrementOpTokenCount(op, ds.token, parseInt(ds.max, 10)); persist(); render(); } },
    decrementOpToken: function (ds) { var op = findOp(ds.op); if (op) { decrementOpTokenCount(op, ds.token, parseInt(ds.max, 10)); persist(); render(); } },

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
    if (target.dataset.field === 'roomCodeInput' && pendingRoom) {
      pendingRoom.input = target.value;
    }
  }

  function onInput(e) {
    var target = e.target;
    // Живое обновление текстовых полей без потери фокуса — без полного ре-рендера.
    if (target.dataset.field === 'operatorName') {
      var op = findOp(target.dataset.op);
      if (op) { renameOperator(op, target.value); persist(); }
    }
    if (target.dataset.field === 'roomCodeInput' && pendingRoom) {
      pendingRoom.input = target.value;
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
