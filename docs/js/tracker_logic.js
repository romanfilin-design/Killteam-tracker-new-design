/**
 * Kill Team Solo Tracker — чистая логика состояния.
 *
 * В этом файле НЕТ ни одной строки, отвечающей за внешний вид: ни HTML,
 * ни CSS-классов, ни разметки, ни рендеринга. Только структуры данных и
 * функции, которые их создают/проверяют/изменяют. Это функциональное ядро,
 * вокруг которого можно построить любой UI с нуля.
 *
 * Ожидается, что game_data.json (см. рядом) загружен отдельно и содержит:
 *   { critOps, killOp, tacOpsByArchetype, universalEquipment,
 *     equipmentSelectionLimit, factionEquipmentByTeam, killTeams }
 *
 * Все функции ниже принимают эти данные как явные аргументы — здесь нет
 * скрытых глобальных зависимостей от конкретного формата данных, кроме
 * самой структуры, описанной в FUNCTIONAL_SPEC.md.
 */

// ============================================================
// Идентификаторы
// ============================================================

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

// ============================================================
// Создание сущностей
// ============================================================

/**
 * @param {string} name
 * @param {number} wounds - максимальное и стартовое здоровье
 * @param {{apl?:number, move?:string, save?:string, portrait?:string}} [stats]
 */
function createOperator(name, wounds, stats = {}) {
  return {
    id: generateId(),
    name,
    maxWounds: wounds,
    wounds,
    activated: false,
    order: null, // null | 'conceal' | 'engage'
    tokens: [],  // произвольные текстовые статусы, включая "Poison"/"INSPIRING"/"Suspicion"
    apl: stats.apl ?? null,
    move: stats.move ?? null,
    save: stats.save ?? null,
    portrait: stats.portrait ?? null,
  };
}

function createTeam(id, name) {
  return {
    id,
    name,
    cp: 2,
    vp: 0,
    killGrade: 0,
    killTeamName: null,   // ссылка на ключ в killTeams, либо null (ручной ростер)
    poolCounts: {},        // { operatorName: numberOfCopiesSelected }
    archetype: null,
    tacOpId: null,
    equipmentIds: [],       // массив уникальных id вида "u:<id>" | "f:<id>"
    equipmentUsed: {},      // { uniqueEquipmentId: timesUsed }
    operators: [],
  };
}

function createInitialAppState() {
  return {
    phase: 'setup', // 'setup' | 'game'
    turningPoint: 1,
    critOpId: null,
    enemyOperativeCount: 10,
    team: createTeam('A', 'Моя команда'),
  };
}

// ============================================================
// Поиск
// ============================================================

function findOperator(team, operatorId) {
  return team.operators.find(o => o.id === operatorId) || null;
}

function findCritOp(gameData, critOpId) {
  return gameData.critOps.find(op => op.id === critOpId) || null;
}

function findTacOp(gameData, archetype, tacOpId) {
  const list = gameData.tacOpsByArchetype[archetype] || [];
  return list.find(op => op.id === tacOpId) || null;
}

function findKillTeamDef(gameData, killTeamName) {
  return gameData.killTeams[killTeamName] || null;
}

/**
 * Находит определение оператора (со статами) внутри выбранного Kill Team
 * по имени — ищет и среди обязательных, и среди пула.
 */
function findOperatorDefInKillTeam(killTeamDef, operatorName) {
  if (!killTeamDef) return null;
  const inRequired = (killTeamDef.required || []).find(r => r.name === operatorName);
  if (inRequired) return inRequired;
  return (killTeamDef.pool || []).find(p => p.name === operatorName) || null;
}

/**
 * Резолвит выбранную позицию снаряжения (universal или faction) по
 * уникальному id вида "u:<id>" или "f:<id>".
 */
function resolveEquipmentItem(gameData, team, uniqueId) {
  const [kind, id] = uniqueId.split(':');
  if (kind === 'u') {
    return gameData.universalEquipment.find(e => e.id === id) || null;
  }
  if (kind === 'f') {
    const killTeamDef = findKillTeamDef(gameData, team.killTeamName);
    const factionKey = killTeamDef ? killTeamDef.equipment : null;
    const list = factionKey ? (gameData.factionEquipmentByTeam[factionKey] || []) : [];
    return list.find(e => e.id === id) || null;
  }
  return null;
}

// ============================================================
// Подготовка: выбор Kill Team и состава
// ============================================================

/**
 * Пересобирает team.operators на основе team.killTeamName и team.poolCounts.
 * Сохраняет существующих операторов с тем же именем (переиспользует их
 * id/wounds/tokens/etc), лишние по количеству — отбрасывает, недостающие —
 * создаёт заново. Мутирует team.operators на месте (возвращает team для
 * удобства чейнинга).
 */
function rebuildOperatorsFromKillTeam(gameData, team) {
  const killTeamDef = findKillTeamDef(gameData, team.killTeamName);
  if (!killTeamDef) return team;

  const statsOf = (def) => ({ apl: def.apl, move: def.move, save: def.save, portrait: def.portrait });

  const wanted = [];
  (killTeamDef.required || []).forEach(r => {
    for (let i = 0; i < r.count; i++) wanted.push({ name: r.name, wounds: r.wounds, stats: statsOf(r) });
  });
  Object.entries(team.poolCounts || {}).forEach(([name, count]) => {
    const def = (killTeamDef.pool || []).find(p => p.name === name);
    if (!def) return;
    for (let i = 0; i < count; i++) wanted.push({ name, wounds: def.wounds, stats: statsOf(def) });
  });

  const existingByName = {};
  team.operators.forEach(op => {
    (existingByName[op.name] = existingByName[op.name] || []).push(op);
  });

  team.operators = wanted.map(w => {
    const bucket = existingByName[w.name];
    if (bucket && bucket.length) {
      const existing = bucket.shift();
      existing.apl = w.stats.apl ?? existing.apl ?? null;
      existing.move = w.stats.move ?? existing.move ?? null;
      existing.save = w.stats.save ?? existing.save ?? null;
      existing.portrait = w.stats.portrait ?? existing.portrait ?? null;
      return existing;
    }
    return createOperator(w.name, w.wounds, w.stats);
  });

  return team;
}

/**
 * Выбрать Kill Team для команды. Сбрасывает поверх текущего pool-выбора,
 * архетип/tacOp НЕ сбрасывает (сохраняются, если применимы к новой команде —
 * решение о валидации архетипа оставлено вызывающей стороне при желании).
 * Фракционное снаряжение прежней команды остаётся в equipmentIds, но при
 * резолве через resolveEquipmentItem для новой команды вернёт null —
 * вызывающая сторона должна отфильтровать невалидные id при смене команды,
 * см. filterEquipmentAfterTeamChange().
 */
function selectKillTeam(gameData, team, killTeamName) {
  team.killTeamName = killTeamName || null;
  team.poolCounts = {};
  if (killTeamName) {
    rebuildOperatorsFromKillTeam(gameData, team);
  } else {
    team.operators = [];
  }
  return team;
}

/** Убирает из equipmentIds все фракционные позиции (используется после смены/сброса Kill Team). */
function filterEquipmentAfterTeamChange(team) {
  team.equipmentIds = team.equipmentIds.filter(uid => uid.startsWith('u:'));
  return team;
}

/**
 * Пытается увеличить/уменьшить число выбранных копий оператора из пула.
 * Уважает индивидуальный лимит копий (maxCopies, по умолчанию 1) и общий
 * лимит выбора пула (poolPick). Возвращает true, если изменение применено.
 *
 * ВАЖНО: эта функция только меняет team.poolCounts. Она НЕ пересобирает
 * team.operators автоматически — после каждого вызова, который вернул
 * true, вызывающая сторона обязана самостоятельно вызвать
 * rebuildOperatorsFromKillTeam(gameData, team), чтобы список операторов
 * синхронизировался с новым poolCounts. Это сделано намеренно раздельно,
 * чтобы можно было батчить несколько изменений перед одной пересборкой.
 */
function adjustPoolCount(gameData, team, operatorName, delta) {
  const killTeamDef = findKillTeamDef(gameData, team.killTeamName);
  if (!killTeamDef) return false;
  const def = (killTeamDef.pool || []).find(p => p.name === operatorName);
  if (!def) return false;

  const maxCopies = def.maxCopies || 1;
  const current = team.poolCounts[operatorName] || 0;
  const totalPicked = Object.values(team.poolCounts).reduce((a, b) => a + b, 0);

  if (delta > 0) {
    if (current >= maxCopies) return false;
    if (totalPicked >= killTeamDef.poolPick) return false;
    team.poolCounts[operatorName] = current + 1;
  } else {
    if (current <= 0) return false;
    team.poolCounts[operatorName] = current - 1;
  }
  return true;
}

/** Заменяет ростер команды вручную заданным списком (импорт). Переводит в "ручной" режим. */
function importRoster(team, operatorsList, teamName) {
  team.operators = operatorsList.map(o => createOperator(o.name || 'Оператор', o.wounds || o.maxWounds || 10));
  team.killTeamName = null;
  team.poolCounts = {};
  filterEquipmentAfterTeamChange(team);
  if (teamName) team.name = teamName;
  return team;
}

function clearRoster(team) {
  team.operators = [];
  team.killTeamName = null;
  team.poolCounts = {};
  filterEquipmentAfterTeamChange(team);
  return team;
}

// ============================================================
// Подготовка: Crit Op
// ============================================================

function selectCritOp(appState, critOpId) {
  appState.critOpId = critOpId;
  return appState;
}

function selectRandomCritOp(gameData, appState) {
  const pick = gameData.critOps[Math.floor(Math.random() * gameData.critOps.length)];
  appState.critOpId = pick.id;
  return pick;
}

// ============================================================
// Подготовка: архетип / Tac Op
// ============================================================

/** Переключает архетип (повторный выбор того же архетипа снимает его). Сбрасывает tacOpId. */
function toggleArchetype(team, archetype) {
  team.archetype = (team.archetype === archetype) ? null : archetype;
  team.tacOpId = null;
  return team;
}

function selectTacOp(team, tacOpId) {
  team.tacOpId = tacOpId;
  return team;
}

// ============================================================
// Подготовка: снаряжение
// ============================================================

/**
 * Переключает выбор позиции снаряжения (universal или faction).
 * Уважает общий лимит gameData.equipmentSelectionLimit (по умолчанию 4)
 * суммарно по всем категориям. Возвращает true, если изменение применено.
 */
function toggleEquipment(gameData, team, uniqueId) {
  const idx = team.equipmentIds.indexOf(uniqueId);
  if (idx >= 0) {
    team.equipmentIds.splice(idx, 1);
    return true;
  }
  if (team.equipmentIds.length >= gameData.equipmentSelectionLimit) return false;
  team.equipmentIds.push(uniqueId);
  return true;
}

/** Готовность начать партию: см. FUNCTIONAL_SPEC §4.1. */
function isReadyToStart(appState) {
  const t = appState.team;
  return Boolean(appState.critOpId) && t.operators.length > 0 && Boolean(t.archetype) && Boolean(t.tacOpId);
}

function startGame(appState) {
  if (!isReadyToStart(appState)) return false;
  appState.phase = 'game';
  return true;
}

function backToSetup(appState) {
  appState.phase = 'setup';
  return appState;
}

// ============================================================
// Игра: turning point / сброс раунда
// ============================================================

function changeTurningPoint(appState, delta, { min = 1, max = 6 } = {}) {
  appState.turningPoint = Math.max(min, Math.min(max, appState.turningPoint + delta));
  return appState.turningPoint;
}

/** Сбрасывает флаг активации и приказ (Conceal/Engage) у всех операторов команды. */
function resetTurningPointMarks(team) {
  team.operators.forEach(o => { o.activated = false; o.order = null; });
  return team;
}

// ============================================================
// Игра: счётчики команды
// ============================================================

function changeCP(team, delta) { team.cp = Math.max(0, team.cp + delta); return team.cp; }
function changeVP(team, delta) { team.vp = Math.max(0, team.vp + delta); return team.vp; }
function changeKillGrade(team, delta) { team.killGrade = Math.max(0, Math.min(5, team.killGrade + delta)); return team.killGrade; }

function setEnemyOperativeCount(appState, value) {
  const v = Math.max(1, Math.min(20, Math.round(value) || 1));
  appState.enemyOperativeCount = v;
  return v;
}

/** Возвращает строку таблицы Kill Op, соответствующую числу операторов противника. */
function getKillGradeRow(gameData, enemyOperativeCount) {
  const rows = gameData.killOp.table.rows;
  return rows.find(r => r.start === enemyOperativeCount) || rows[rows.length - 1];
}

// ============================================================
// Игра: операторы
// ============================================================

function addOperator(team, name = 'Новый оператор', wounds = 10) {
  const op = createOperator(name, wounds);
  team.operators.push(op);
  return op;
}

function removeOperator(team, operatorId) {
  team.operators = team.operators.filter(o => o.id !== operatorId);
  return team;
}

function renameOperator(op, newName) {
  op.name = newName || op.name;
  return op;
}

function toggleActivated(op) {
  op.activated = !op.activated;
  return op.activated;
}

/** Циклическое переключение приказа: null → conceal → engage → conceal → ... */
function cycleOrder(op) {
  if (op.order === 'conceal') op.order = 'engage';
  else if (op.order === 'engage') op.order = 'conceal';
  else op.order = 'conceal';
  return op.order;
}

function healOperator(op, amount) {
  op.wounds = Math.min(op.maxWounds, op.wounds + amount);
  return op.wounds;
}

function damageOperator(op, amount) {
  op.wounds = Math.max(0, op.wounds - amount);
  return op.wounds;
}

/**
 * Клик по делению N (0-based) на треке здоровья: если текущее здоровье уже
 * равно N+1 (то есть это деление — текущий "край" заполненности), убирает
 * одно деление (health = N). Иначе выставляет здоровье в N+1.
 * Это реализует поведение "повторный клик по краю снимает деление".
 */
function setWoundsFromTrackSegment(op, segmentIndex) {
  const newValue = (op.wounds === segmentIndex + 1) ? segmentIndex : segmentIndex + 1;
  op.wounds = Math.max(0, Math.min(op.maxWounds, newValue));
  return op.wounds;
}

function setMaxWounds(op, newMax) {
  const v = Math.max(1, Math.round(newMax) || 1);
  op.maxWounds = v;
  op.wounds = Math.min(op.wounds, v);
  return op;
}

function isIncapacitated(op) { return op.wounds <= 0; }
function isInjured(op) { return !isIncapacitated(op) && op.wounds <= op.maxWounds / 2; }

// ---- токены/статусы ----

const QUICK_STATUS_TOKENS = ['Poison', 'INSPIRING', 'Suspicion'];

function toggleToken(op, tokenText) {
  const idx = op.tokens.indexOf(tokenText);
  if (idx >= 0) op.tokens.splice(idx, 1);
  else op.tokens.push(tokenText);
  return op.tokens;
}

function addCustomToken(op, tokenText) {
  const t = (tokenText || '').trim();
  if (t && !op.tokens.includes(t)) op.tokens.push(t);
  return op.tokens;
}

function removeToken(op, tokenText) {
  op.tokens = op.tokens.filter(t => t !== tokenText);
  return op.tokens;
}

// ============================================================
// Игра: снаряжение — использование
// ============================================================

/**
 * Определяет максимальное число использований позиции снаряжения.
 * uses === null  -> пассив, использований не отслеживаем (возвращает null).
 * uses === 'perChoice' -> условный случай "по числу выбранных вариантов";
 *   в базовой реализации трактуется как 2 (см. FUNCTIONAL_SPEC §2.3).
 * uses === <число> -> ровно это число.
 */
function getEquipmentMaxUses(equipmentItem) {
  if (equipmentItem.uses === null || equipmentItem.uses === undefined) return null;
  if (equipmentItem.uses === 'perChoice') return 2;
  return equipmentItem.uses;
}

function getEquipmentRemainingUses(team, equipmentItem, uniqueId) {
  const max = getEquipmentMaxUses(equipmentItem);
  if (max === null) return null; // пассив
  const used = team.equipmentUsed[uniqueId] || 0;
  return Math.max(0, max - used);
}

/** Отмечает одно использование позиции снаряжения, если остались использования. Возвращает true при успехе. */
function useEquipment(gameData, team, uniqueId) {
  const item = resolveEquipmentItem(gameData, team, uniqueId);
  if (!item) return false;
  const max = getEquipmentMaxUses(item);
  if (max === null) return false; // пассив нельзя "использовать"
  const used = team.equipmentUsed[uniqueId] || 0;
  if (used >= max) return false;
  team.equipmentUsed[uniqueId] = used + 1;
  return true;
}

// ============================================================
// Новая партия / полный сброс игровых счётчиков
// ============================================================

/**
 * Возвращает игровые счётчики к стартовым значениям, СОХРАНЯЯ состав
 * команды, выбранный Kill Team/архетип/Tac Op/снаряжение (см. §4.2).
 */
function startNewGameKeepingRoster(appState) {
  appState.turningPoint = 1;
  const t = appState.team;
  t.cp = 2;
  t.vp = 0;
  t.killGrade = 0;
  t.equipmentUsed = {};
  t.operators.forEach(o => {
    o.wounds = o.maxWounds;
    o.activated = false;
    o.tokens = [];
    o.order = null;
  });
  return appState;
}

// ============================================================
// Персистентность (сериализация)
// ============================================================

/** Состояние уже является простым сериализуемым объектом — экспорт это просто его копия. */
function exportState(appState) {
  return JSON.parse(JSON.stringify(appState));
}

/**
 * Импортирует ранее экспортированное состояние. Выполняет минимальную
 * миграцию отсутствующих полей, чтобы старые сохранения не ломали новую
 * версию логики (см. FUNCTIONAL_SPEC §6, последний пункт).
 */
function importState(rawState) {
  const s = rawState;
  if (!s || typeof s !== 'object' || !s.team) throw new Error('Некорректный формат состояния');

  if (s.enemyOperativeCount === undefined) s.enemyOperativeCount = 10;
  const t = s.team;
  if (t.killTeamName === undefined) t.killTeamName = null;
  if (!t.poolCounts) t.poolCounts = {};
  if (!t.equipmentIds) t.equipmentIds = [];
  if (!t.equipmentUsed) t.equipmentUsed = {};
  (t.operators || []).forEach(o => {
    if (o.order === undefined) o.order = null;
    if (o.apl === undefined) o.apl = null;
    if (o.move === undefined) o.move = null;
    if (o.save === undefined) o.save = null;
    if (o.portrait === undefined) o.portrait = null;
  });

  return s;
}

/**
 * Дотягивает apl/move/save/portrait к операторам, у которых их ещё нет,
 * из определения выбранного Kill Team — полезно при импорте состояния,
 * сохранённого до того, как в данных появились характеристики оператора.
 */
function backfillOperatorStatsFromKillTeam(gameData, appState) {
  const t = appState.team;
  const killTeamDef = findKillTeamDef(gameData, t.killTeamName);
  if (!killTeamDef) return appState;

  t.operators.forEach(o => {
    const def = findOperatorDefInKillTeam(killTeamDef, o.name);
    if (!def) return;
    if (o.apl === null || o.apl === undefined) o.apl = def.apl ?? null;
    if (o.move === null || o.move === undefined) o.move = def.move ?? null;
    if (o.save === null || o.save === undefined) o.save = def.save ?? null;
    if (o.portrait === null || o.portrait === undefined) o.portrait = def.portrait ?? null;
  });
  return appState;
}

// ============================================================
// Экспорт (пример для модульной системы; при желании можно убрать)
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateId,
    createOperator,
    createTeam,
    createInitialAppState,
    findOperator,
    findCritOp,
    findTacOp,
    findKillTeamDef,
    findOperatorDefInKillTeam,
    resolveEquipmentItem,
    rebuildOperatorsFromKillTeam,
    selectKillTeam,
    filterEquipmentAfterTeamChange,
    adjustPoolCount,
    importRoster,
    clearRoster,
    selectCritOp,
    selectRandomCritOp,
    toggleArchetype,
    selectTacOp,
    toggleEquipment,
    isReadyToStart,
    startGame,
    backToSetup,
    changeTurningPoint,
    resetTurningPointMarks,
    changeCP,
    changeVP,
    changeKillGrade,
    setEnemyOperativeCount,
    getKillGradeRow,
    addOperator,
    removeOperator,
    renameOperator,
    toggleActivated,
    cycleOrder,
    healOperator,
    damageOperator,
    setWoundsFromTrackSegment,
    setMaxWounds,
    isIncapacitated,
    isInjured,
    QUICK_STATUS_TOKENS,
    toggleToken,
    addCustomToken,
    removeToken,
    getEquipmentMaxUses,
    getEquipmentRemainingUses,
    useEquipment,
    startNewGameKeepingRoster,
    exportState,
    importState,
    backfillOperatorStatsFromKillTeam,
  };
}
