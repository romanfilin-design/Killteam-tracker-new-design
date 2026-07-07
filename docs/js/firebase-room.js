// Модуль синхронизации "комнаты" для двух игроков через Firestore.
// Не содержит игровых правил — только транспорт: создать/войти в комнату,
// опубликовать своё состояние, подписаться на состояние оппонента.
// Общается с остальным (не-модульным) app.js через window.KTRoom.

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import {
  getAuth, signInAnonymously, onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {
  getFirestore, doc, setDoc, updateDoc, onSnapshot, collection,
  serverTimestamp, getDoc, deleteField
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

var firebaseConfig = {
  apiKey: 'AIzaSyCZGNlKZbsLRqCt2mlRSTGo19DimP5l1-w',
  authDomain: 'kt-tracker-46786.firebaseapp.com',
  projectId: 'kt-tracker-46786',
  storageBucket: 'kt-tracker-46786.firebasestorage.app',
  messagingSenderId: '892726418499',
  appId: '1:892726418499:web:e93a47af7deae5ebf608f6'
};

var app = initializeApp(firebaseConfig);
var auth = getAuth(app);
var db = getFirestore(app);

var authReady = new Promise(function (resolve) {
  onAuthStateChanged(auth, function (user) {
    if (user) resolve(user.uid);
  });
  signInAnonymously(auth).catch(function (err) {
    console.error('[KTRoom] anon auth failed', err);
  });
});

function makeRoomCode() {
  var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // без похожих символов
  var out = '';
  for (var i = 0; i < 5; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function createRoom() {
  return authReady.then(function (uid) {
    var code = makeRoomCode();
    var roomRef = doc(db, 'rooms', code);
    return setDoc(roomRef, {
      createdAt: serverTimestamp(),
      hostUid: uid,
      critOpId: null,
      critOpLocked: false
    }).then(function () {
      return { code: code, uid: uid };
    });
  });
}

function joinRoom(code) {
  code = String(code || '').trim().toUpperCase();
  return authReady.then(function (uid) {
    var roomRef = doc(db, 'rooms', code);
    return getDoc(roomRef).then(function (snap) {
      if (!snap.exists()) throw new Error('room-not-found');
      return { code: code, uid: uid };
    });
  });
}

function publishSelf(code, uid, payload) {
  if (!code || !uid) return Promise.resolve();
  var playerRef = doc(db, 'rooms', code, 'players', uid);
  return setDoc(playerRef, Object.assign({ updatedAt: serverTimestamp() }, payload), { merge: true });
}

function subscribeRoom(code, cb) {
  var roomRef = doc(db, 'rooms', code);
  return onSnapshot(roomRef, function (snap) {
    cb(snap.exists() ? snap.data() : null);
  });
}

function subscribeOthers(code, myUid, cb) {
  var playersRef = collection(db, 'rooms', code, 'players');
  return onSnapshot(playersRef, function (snap) {
    var others = [];
    snap.forEach(function (d) {
      if (d.id !== myUid) others.push(Object.assign({ uid: d.id }, d.data()));
    });
    cb(others);
  });
}

function setRoomCritOp(code, critOpId) {
  var roomRef = doc(db, 'rooms', code);
  return updateDoc(roomRef, { critOpId: critOpId, critOpLocked: false });
}

function lockRoomCritOp(code) {
  var roomRef = doc(db, 'rooms', code);
  return updateDoc(roomRef, { critOpLocked: true });
}

// Enemy-target статус-токены (Poison, Grudge и т.п.) живут не в поле
// оператора владельца (его собственные публикации перезаписывали бы их
// целиком при любом локальном действии), а отдельной картой на документе
// комнаты — так оба игрока читают одно и то же состояние, а пишет его
// именно тот, кто накладывает эффект на чужого оператора.
function enemyTokenKey(uid, opId, tokenId) {
  return uid + '__' + opId + '__' + tokenId;
}

function toggleEnemyTokenMark(code, opponentUid, opId, tokenId, isOn) {
  var roomRef = doc(db, 'rooms', code);
  var update = {};
  update['enemyTokenMarks.' + enemyTokenKey(opponentUid, opId, tokenId)] = isOn ? true : deleteField();
  return updateDoc(roomRef, update);
}

// Счётные enemy-токены (Markerlight и т.п., max > 1) — значение хранится
// числом по тому же ключу; клиент сам передаёт уже посчитанное значение
// (он знает текущее из живой подписки на комнату), здесь только пишем.
function setEnemyTokenMarkCount(code, opponentUid, opId, tokenId, value) {
  var roomRef = doc(db, 'rooms', code);
  var update = {};
  update['enemyTokenMarks.' + enemyTokenKey(opponentUid, opId, tokenId)] = value > 0 ? value : deleteField();
  return updateDoc(roomRef, update);
}

window.KTRoom = {
  ready: authReady,
  createRoom: createRoom,
  joinRoom: joinRoom,
  publishSelf: publishSelf,
  subscribeRoom: subscribeRoom,
  subscribeOthers: subscribeOthers,
  setRoomCritOp: setRoomCritOp,
  lockRoomCritOp: lockRoomCritOp,
  toggleEnemyTokenMark: toggleEnemyTokenMark,
  setEnemyTokenMarkCount: setEnemyTokenMarkCount,
  enemyTokenKey: enemyTokenKey
};
window.dispatchEvent(new CustomEvent('ktroom-ready'));
