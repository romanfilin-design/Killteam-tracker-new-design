// Встроенный запасной набор данных — используется, если fetch('./game_data.json') недоступен (см. FUNCTIONAL_SPEC.md §2).
// Файл сгенерирован автоматически: tools/sync_release.py. Не редактировать вручную.
window.GAME_DATA_FALLBACK = {
  "critOps": [
    {
      "id": "secure",
      "name": "Secure",
      "action": "SECURE (1AP) — маркер, контролируемый активным оператором, становится secured твоей командой, пока враг его не secure-ит. Нельзя в 1-й turning point или в control range врага.",
      "vp": "В конце каждого turning point после первого: 1VP если хотя бы один маркер secured твоей командой; ещё 1VP если твоя команда secure-ит больше маркеров, чем оппонент."
    },
    {
      "id": "loot",
      "name": "Loot",
      "action": "LOOT (1AP) — маркер, контролируемый активным оператором, разграблен. Нельзя в 1-й turning point, в control range врага, или если маркер уже разграблен в этот turning point.",
      "vp": "Каждый раз при выполнении Loot — 1VP (максимум 2VP за turning point)."
    },
    {
      "id": "transmission",
      "name": "Transmission",
      "action": "INITIATE TRANSMISSION (1AP) — маркер, контролируемый активным оператором, транслирует до начала следующего turning point. Нельзя в 1-й turning point или в control range врага.",
      "vp": "В конце каждого turning point после первого: 1VP если контролируешь любые транслирующие маркеры; ещё 1VP если их у тебя больше, чем у оппонента."
    },
    {
      "id": "orb",
      "name": "Orb",
      "action": "Центральный маркер несёт Orb token. MOVE ORB (1AP) — переместить токен между центральным и маркером игрока (на выбор). Нельзя в 1-й turning point, в control range врага, без контроля маркера с токеном.",
      "vp": "В конце каждого turning point после первого: 1VP за каждый контролируемый маркер без Orb token."
    },
    {
      "id": "stake_claim",
      "name": "Stake Claim",
      "action": "На Gambit-шаге каждой Strategy phase после первой каждый игрок выбирает маркер и заявление на этот turning point: «будем контролировать в конце TP» или «враг не будет оспаривать маркер в конце TP». Маркер нельзя выбрать дважды за бой.",
      "vp": "В конце каждого turning point: 1VP если контролируешь больше маркеров, чем оппонент; 1VP если заявление сбылось."
    },
    {
      "id": "energy_cells",
      "name": "Energy Cells",
      "action": "Pick Up Marker на каждом маркере: на маркере 2 — доп. 2AP, на маркере 3 — доп. 1AP (нельзя сделать бесплатным/уменьшить), на маркере 4 — как обычно. Несомый маркер можно сдвинуть не более чем на 6\" за раз.",
      "vp": "В конце каждого turning point: 1VP если контролируешь больше маркеров, чем враг. В конце боя: 1VP за каждый маркер, который несут твои операторы."
    },
    {
      "id": "download",
      "name": "Download",
      "action": "DOWNLOAD (1AP) — центральный маркер или маркер оппонента, контролируемый активным оператором, скачивается. Нельзя в 1–3 turning point, в control range врага, или если маркер уже скачан.",
      "vp": "В конце TP после первого: 1VP если контролируешь больше маркеров, чем враг (скачанные не считаются). Download в 3-й TP — 1VP. Download в 4-й TP — 2VP."
    },
    {
      "id": "data",
      "name": "Data",
      "action": "COMPILE DATA (1AP) — маркер получает 1 Data point. Нельзя в 1-й TP, в control range врага, если уже набран point в этот TP. SEND DATA (1AP) — убрать все Data points с маркера. Нельзя в 1–3 TP, в control range врага, без points на маркере.",
      "vp": "В конце 2-го и 3-го TP: 1VP если выполнил Compile Data больше, чем враг. Каждый Send Data — VP равный числу удалённых points."
    },
    {
      "id": "reboot",
      "name": "Reboot",
      "action": "Маркеры пронумерованы 1–3. В начале Gambit-шага каждый игрок втайне выбирает маркер. Совпадение выбора или невыбранный маркер — становится inert на этот TP. REBOOT (2AP) — снять inert с контролируемого маркера. Нельзя в 1-й TP или в control range врага.",
      "vp": "В конце TP после первого: 1VP за каждый контролируемый маркер (неактивные не считаются)."
    }
  ],
  "killOp": {
    "name": "Kill Op",
    "desc": "Стартуешь без kill grade. По мере вывода из строя вражеских операторов grade растёт (макс. 5). Каждый переход на новый grade — 1VP. В конце 4-го TP, если твой grade выше вражеского — 1VP.",
    "table": {
      "headers": [
        1,
        2,
        3,
        4,
        5
      ],
      "rows": [
        {
          "start": 5,
          "grades": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        {
          "start": 6,
          "grades": [
            1,
            2,
            4,
            5,
            6
          ]
        },
        {
          "start": 7,
          "grades": [
            1,
            3,
            4,
            6,
            7
          ]
        },
        {
          "start": 8,
          "grades": [
            2,
            3,
            5,
            6,
            8
          ]
        },
        {
          "start": 9,
          "grades": [
            2,
            4,
            5,
            7,
            9
          ]
        },
        {
          "start": 10,
          "grades": [
            2,
            4,
            6,
            8,
            10
          ]
        },
        {
          "start": 11,
          "grades": [
            2,
            4,
            7,
            9,
            11
          ]
        },
        {
          "start": 12,
          "grades": [
            2,
            5,
            7,
            10,
            12
          ]
        },
        {
          "start": 13,
          "grades": [
            3,
            5,
            8,
            10,
            13
          ]
        },
        {
          "start": 14,
          "grades": [
            3,
            6,
            8,
            11,
            14
          ]
        }
      ]
    }
  },
  "tacOpsByArchetype": {
    "Recon": [
      {
        "id": "flank",
        "name": "Flank",
        "reveal": "Как STRATEGIC GAMBIT.",
        "rules": "Killzone делится на два фланга. Оператор оспаривает фланг, если целиком внутри него и территории оппонента. Контролируешь фланг, если суммарный APL твоих контролирующих операторов больше вражеского.",
        "vp": "В конце каждого TP после первого: 1VP за контролируемый фланг (2VP, если контролировал его и в прошлом TP). Максимум 2VP за TP."
      },
      {
        "id": "scout_enemy_movement",
        "name": "Scout Enemy Movement",
        "reveal": "В первый раз, когда оператор выполняет действие Scout.",
        "rules": "SCOUT (1AP): выбери готового вражеского оператора, видимого и далее 6\". Он monitored до Ready следующей Strategy phase. Нельзя с приказом Engage, в 1-й TP, в control range врага.",
        "vp": "В конце TP после первого: 1VP за каждого monitored врага, видимого твоим операторам. Максимум 2VP за TP."
      },
      {
        "id": "retrieval",
        "name": "Retrieval",
        "reveal": "В первый раз, когда набираешь VP с этого op.",
        "rules": "RETRIEVE: если активный оператор контролирует ещё не обысканный маркер — маркер несётся им как Retrieval marker. Можно Pick Up Marker на маркерах Retrieval. Нельзя в 1-й TP или в control range врага.",
        "vp": "1VP в первый раз, когда каждый маркер обыскан. В конце боя: 1VP за каждый Retrieval-маркер, который несут твои операторы."
      }
    ],
    "Infiltration": [
      {
        "id": "track_enemy",
        "name": "Track Enemy",
        "reveal": "В первый раз, когда набираешь VP с этого op.",
        "rules": "Враг tracked, если valid target для твоего оператора в пределах 6\", имеет приказ Conceal, не valid target для самого себя относительно отслеживающего, и не в control range твоих операторов.",
        "vp": "В конце TP после первого: 1 отслеживаемый — 1VP (2VP на 4-м TP); 2+ — 2VP. Максимум 2VP за TP."
      },
      {
        "id": "steal_intelligence",
        "name": "Steal Intelligence",
        "reveal": "В первый раз, когда вражеский оператор выводится из строя.",
        "rules": "Каждый раз при выводе врага из строя — размести Intelligence-маркер в его control range перед удалением. Можно Pick Up Marker на них; первый несомый маркер игнорируется условиями этого действия (т.е. можно нести 2 маркера).",
        "vp": "В конце TP после первого: 1VP если несёшь любые Intelligence-маркеры. В конце боя: 1VP за каждый несомый маркер."
      },
      {
        "id": "plant_devices",
        "name": "Plant Devices",
        "reveal": "В первый раз, когда выполняешь Plant Device.",
        "rules": "PLANT DEVICE (1AP): контролируемый маркер получает твой Device token. Нельзя в 1-й TP, в control range врага, если token уже есть.",
        "vp": "В конце TP после первого: 1VP если маркер оппонента несёт твой token; ещё 1VP за каждый другой оспариваемый врагом маркер с токеном. Максимум 2VP за TP."
      }
    ],
    "Security": [
      {
        "id": "plant_banner",
        "name": "Plant Banner",
        "reveal": "Когда выполняешь Plant Banner.",
        "rules": "PLANT BANNER (1AP): размести Banner marker в control range, целиком на территории оппонента, более 5\" от нейтрального края. Можно Pick Up Marker на нём. Нельзя в 1-й TP, в control range врага, повторно за бой.",
        "vp": "В конце TP после первого: 1VP если Banner на территории оппонента и контролируется тобой; 2VP вместо этого, если враг его не оспаривает."
      },
      {
        "id": "martyrs",
        "name": "Martyrs",
        "reveal": "В первый раз, когда твой оператор выводится из строя, оспаривая маркер.",
        "rules": "Каждый раз когда твой оператор выводится из строя, оспаривая маркер — маркер получает Martyr token.",
        "vp": "В конце TP после первого: можно убрать токены с оспариваемого маркера — 1VP за токен (2VP, если ты также контролируешь маркер). Максимум 2VP за TP."
      },
      {
        "id": "envoy",
        "name": "Envoy",
        "reveal": "В первый раз, когда выбираешь envoy.",
        "rules": "Как STRATEGIC GAMBIT в каждом TP после первого выбери дружественного оператора своим envoy до следующего Ready. Нельзя выбирать повторно того, кто уже был envoy.",
        "vp": "В конце TP после первого: 1VP если envoy целиком на вражеской территории вне control range врага; 2VP вместо этого, если он не потерял wounds в этот TP."
      }
    ],
    "Seek & Destroy": [
      {
        "id": "sweep_clear",
        "name": "Sweep & Clear",
        "reveal": "В первый раз, когда враг выводится из строя на маркере, либо твой оператор выполняет Clear (что раньше).",
        "rules": "Когда враг, оспаривающий маркер, выводится из строя — маркер получает Swept token (если ещё нет) до следующего Ready. CLEAR (1AP): маркер считается cleared на этот TP. Нельзя в 1-й TP или в control range врага.",
        "vp": "В конце TP после первого: 1VP если контролируешь маркер со Swept token; 2VP вместо этого, если он также cleared."
      },
      {
        "id": "route",
        "name": "Route",
        "reveal": "В первый раз, когда набираешь VP с этого op.",
        "rules": "Без доп. правил — оценивается по выводу врагов из строя рядом с их drop zone.",
        "vp": "Каждый вывод врага из строя оператором в пределах 6\" от drop zone оппонента — 1VP (2VP, если Wounds врага 12+). Максимум 2VP за TP."
      },
      {
        "id": "dominate",
        "name": "Dominate",
        "reveal": "В первый раз, когда враг выводится из строя твоим оператором.",
        "rules": "Каждый раз когда твой оператор выводит врага из строя — этот оператор получает Dominate token.",
        "vp": "В конце 3-го и 4-го TP: можно убрать токены с не выведенных из строя операторов — 1VP за токен. Максимум 3VP за TP."
      }
    ]
  },
  "universalEquipment": [
    {
      "id": "ammo_cache",
      "name": "Ammo Cache",
      "qty": "1×",
      "uses": null,
      "usesLabel": "Пассив/маркер",
      "desc": "Маркер на своей территории. AMMO RESUPPLY (0AP): используй маркер в этот TP — до следующего TP при стрельбе оружием с datacard можно перебросить один кубик атаки. Нельзя в control range чужого/уже использованного маркера."
    },
    {
      "id": "razor_wire",
      "name": "Razor Wire",
      "qty": "1×",
      "uses": null,
      "usesLabel": "Пассив",
      "desc": "Exposed + Obstructing terrain на своей территории, на полу, >2\" от прочего. Пересечение в пределах 1\" — дистанция +1\"."
    },
    {
      "id": "comms_device",
      "name": "Comms Device",
      "qty": "1×",
      "uses": null,
      "usesLabel": "Пассив",
      "desc": "Маркер на своей территории. Пока его контролирует дружественный оператор — +3\" к дистанциям его правил SUPPORT для дружественных операторов."
    },
    {
      "id": "mines",
      "name": "Mines",
      "qty": "1×",
      "uses": 1,
      "usesLabel": "1× за битву",
      "desc": "Маркер на своей территории, >2\" от прочего. Когда впервые попадает в control range любого оператора — убери маркер, нанеси D3+3 урона."
    },
    {
      "id": "light_barricades",
      "name": "Light Barricades",
      "qty": "2×",
      "uses": null,
      "usesLabel": "Пассив",
      "desc": "Light terrain (кроме основания — Insignificant+Exposed). На своей территории, на полу, >2\" от прочего."
    },
    {
      "id": "heavy_barricade",
      "name": "Heavy Barricade",
      "qty": "1×",
      "uses": null,
      "usesLabel": "Пассив",
      "desc": "Heavy terrain. В пределах 4\" от своей drop zone, на полу, >2\" от прочего."
    },
    {
      "id": "ladders",
      "name": "Ladders",
      "qty": "2×",
      "uses": null,
      "usesLabel": "Пассив",
      "desc": "Insignificant+Exposed terrain. На своей территории, вертикально к террейну ≥2\", >2\" от прочего, >1\" от дверей/access points. Раз за действие при climb по приставленному террейну вертикальная дистанция = 1\" (если лестница в control range весь подъём)."
    },
    {
      "id": "portable_barricade",
      "name": "Portable Barricade",
      "qty": "1×",
      "uses": null,
      "usesLabel": "Пассив",
      "desc": "Light+Protective+Portable terrain (кроме основания). На своей территории, на полу, >2\" от прочего. Protective: +1 к Save в укрытии (макс. 2+). Даёт уникальное действие MOVE WITH BARRICADE (1AP)."
    },
    {
      "id": "utility_grenades",
      "name": "Utility Grenades",
      "qty": "выбери 2",
      "uses": "perChoice",
      "usesLabel": "1× за каждый выбранный",
      "desc": "Выбери 2 из: Smoke, Stun (любая комбинация). Stun Grenade (1AP): враг в 6\" проходит stun test (D6, 3+ → −1 APL до конца след. активации), задевает и соседей в 1\". Smoke Grenade (1AP): маркер дыма в 6\", зона обскурации, ослабляет Piercing 2/Piercing Crits 2 до 1 на дистанции."
    },
    {
      "id": "explosive_grenades",
      "name": "Explosive Grenades",
      "qty": "выбери 2",
      "uses": "perChoice",
      "usesLabel": "1× за каждый выбранный",
      "desc": "Выбери 2 из: Frag (Atk4 Hit4+ Dmg2/4, Range6\", Blast2\", Saturate), Krak (Atk4 Hit4+ Dmg4/5, Range6\", Piercing1, Saturate). Даёт ranged-оружие, число использований = число выбранных."
    },
    {
      "id": "breaching_charge",
      "name": "Breaching Charge",
      "qty": "1×",
      "uses": 1,
      "usesLabel": "1× за битву",
      "desc": "Раз за бой, при действии Breach — это действие стоит на 1AP меньше (мин. 1AP), как будто на datacard есть «breach marker»."
    }
  ],
  "equipmentSelectionLimit": 4,
  "factionEquipmentByTeam": {
    "Plague Marines": [
      {
        "id": "plague_bells",
        "name": "Plague Bells",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Можно игнорировать любые изменения характеристик дружественных Plague Marines от ранения (injured), включая характеристики оружия."
      },
      {
        "id": "blight_grenades",
        "name": "Blight Grenades",
        "uses": 2,
        "usesLabel": "2× за битву",
        "desc": "Даёт ranged-оружие Blight grenade (Atk4 Hit4+ Dmg2/4, Range6\", Blast2\", Saturate, Severe, Poison) — нельзя использовать более двух раз за битву суммарно по команде."
      },
      {
        "id": "plague_rounds",
        "name": "Plague Rounds",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Boltguns и bolt pistols дружественных Plague Marines получают правила Poison и Severe."
      },
      {
        "id": "poison_vents",
        "name": "Poison Vents",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Когда враг активируется в пределах 3\" от дружественного Plague Marine: без Poison token — D3, на 3 получает token; с token — наносится D3 урона (вместо 1)."
      }
    ],
    "Celestian Insidiants": [
      {
        "id": "saintly_relics",
        "name": "Saintly Relics",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Когда кубик атаки наносит урон дружественному Celestian Insidiant — брось D6 (2D6, если он INSPIRING): любая 6 игнорирует урон от этого кубика. Не более 1 кубика за действие и 2 за битву."
      },
      {
        "id": "auto_flagellator",
        "name": "Auto-Flagellator",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "При активации дружественного Celestian Insidiant — брось D6, нанеси урон равный половине результата (округляя вверх); на 4+ оператор также становится INSPIRING. Не более одного INSPIRING этим правилом за turning point."
      },
      {
        "id": "psyk_out_grenades",
        "name": "Psyk-Out Grenades",
        "uses": 2,
        "usesLabel": "2× за битву",
        "desc": "Даёт 2 stun grenades (обе из utility grenades, обязательно stun). Если враг проходит stun test с результатом 3+ от действия Celestian Insidiant — также наносится урон, равный половине результата (округляя вверх); PSYKER — урон равен полному результату."
      },
      {
        "id": "vocifera_mortis",
        "name": "Vocifera Mortis",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Раз за битву, когда INSPIRING Celestian Insidiant выводится из строя — для faction rule Martyrdom можно выбрать другого оператора, даже если он не видим и не в пределах 6\"."
      }
    ],
    "Nemesis Claw": [
      {
        "id": "flayed_skin",
        "name": "Flayed Skin",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Одеты в кровавые шкуры убитых жертв, внушающие врагам ужас и отвращение. Когда враг стреляет, дерётся или отвечает против дружественного оператора Nemesis Claw в пределах 2\" от него — оппонент не может перебрасывать кубики атаки с результатом 1."
      },
      {
        "id": "chain_snare",
        "name": "Chain Snare",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Цепь с крюками-лезвиями впивается в плоть или доспех цели, не давая ей отступить. Если враг в зоне контроля дружественного оператора Nemesis Claw (и не в зоне контроля других врагов) пытается выполнить Fall Back — бросьте два К6 (один К6, если WOUNDS врага выше, чем у оператора). При результате 4+ действие не выполняется (ОД не расходуются); повторно за этот turning point правило не использовать."
      },
      {
        "id": "grisly_trophy",
        "name": "Grisly Trophy",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Отрубленные конечности и вырванные глаза жертв заставляют врагов Night Lords колебаться. Один раз за партию: когда дружественный оператор выводит из строя врага в пределах 2\" от себя, он получает токен Grisly Trophy (если ещё не имеет). Пока оператор с этим токеном виден и в пределах 2\" от врага — у оружия этого врага −1 к Atk."
      },
      {
        "id": "comms_jammers",
        "name": "Comms Jammers",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Глушилки Night Lords сеют хаос и не дают перепуганным врагам координироваться. Пока враг в пределах 3\" от дружественного оператора Nemesis Claw — его APL нельзя увеличивать (уже изменённые значения APL это не затрагивает)."
      }
    ]
  },
  "killTeams": {
    "Plague Marines": {
      "archetypes": [
        "Security",
        "Seek & Destroy"
      ],
      "equipment": "Plague Marines",
      "required": [
        {
          "name": "Champion",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 15,
          "count": 1,
          "portrait": "img/portraits/plague-marines/champion.png",
          "weapons": [
            {
              "name": "Plasma pistol (standard)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Range 8\", Piercing 1"
            },
            {
              "name": "Plasma pistol (supercharge)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 8\", Hot, Lethal 5+, Piercing 1"
            },
            {
              "name": "Plague sword",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Severe, Poison*, Toxic*"
            }
          ],
          "abilities": [
            {
              "name": "Grandfather's Blessing",
              "text": "Когда вражеский оператор, у которого есть один из твоих Poison tokens, теряет один или более wounds в пределах 7\" от этого оператора, этот оператор восстанавливает до равного числа потерянных wounds (максимум 3 за turning point, и только если он не incapacitated)."
            },
            {
              "name": "* Toxic",
              "text": "Когда этот оператор использует это оружие против вражеского оператора, у которого есть один из твоих Poison tokens, добавь 1 к обеим характеристикам Dmg этого оружия."
            }
          ]
        }
      ],
      "poolPick": 5,
      "pool": [
        {
          "name": "Bombardier",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/bombardier.png",
          "weapons": [
            {
              "name": "Boltgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Fists",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Grenadier",
              "text": "Этот оператор может использовать blight и krak grenades (см. faction и universal equipment). Не засчитывается в лимит использований (т.е. если ты также выбираешь эти гранаты для других операторов). Когда он это делает, улучши Hit того оружия на 1, а blight grenades получают правило Toxic."
            },
            {
              "name": "* Toxic",
              "text": "Когда этот оператор использует это оружие против вражеского оператора, у которого есть один из твоих Poison tokens, добавь 1 к обеим характеристикам Dmg этого оружия."
            }
          ]
        },
        {
          "name": "Fighter",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/fighter.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Flail of Corruption",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Brutal, Severe, Shock, Poison*"
            }
          ],
          "abilities": [
            {
              "name": "Flail",
              "text": "Нанеси D3+2 урона каждому другому оператору, который и видим этому оператору, и в пределах 2\" от него. Бросай отдельно за каждого: если это вражеский оператор и результат D3 равен 3, тот вражеский оператор также получает один из твоих Poison tokens (если у него ещё нет). Для целей ограничений действий и faction rule Astartes это действие считается действием Fight. Этот оператор не может выполнять это действие, пока у него приказ Conceal.",
              "cost": "1AP"
            }
          ]
        },
        {
          "name": "Heavy Gunner",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/heavy_gunner.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Plague spewer",
              "atk": 5,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 7\", Saturate, Severe, Torrent 2\", Poison*"
            },
            {
              "name": "Fists",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": []
        },
        {
          "name": "Icon Bearer",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/icon_bearer.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Plague knife",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Severe, Poison*"
            }
          ],
          "abilities": [
            {
              "name": "Icon Bearer",
              "text": "При определении контроля над маркером считай APL этого оператора на 1 выше. Это не изменение его APL, поэтому любые изменения суммируются с этим."
            },
            {
              "name": "Icon of Contagion",
              "text": "Когда этот оператор на территории твоего оппонента, strategy ploy Contagion стоит тебе 0CP."
            }
          ]
        },
        {
          "name": "Malignant Plaguecaster",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/malignant_plaguecaster.png",
          "weapons": [
            {
              "name": "Entropy",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/7",
              "wr": "PSYCHIC, Range 7\", Saturate, Severe, Poison*"
            },
            {
              "name": "Plague wind",
              "atk": 6,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "PSYCHIC, Saturate, Severe, Torrent 1\", Poison*"
            },
            {
              "name": "Corrupted staff",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "PSYCHIC, Severe, Shock, Stun, Poison*"
            }
          ],
          "abilities": [
            {
              "name": "Poisonous Miasma",
              "text": "Выбери одного вражеского оператора, видимого этому оператору и в пределах 7\" от него, или одного вражеского оператора, являющегося допустимой целью для этого оператора. Тот вражеский оператор получает один из твоих Poison tokens (если у него ещё нет). Если уже есть — вместо этого нанеси ему 3 урона. Этот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP",
              "tag": "PSYCHIC"
            },
            {
              "name": "Putrescent Vitality",
              "text": "Выбери одного дружественного оператора, видимого этому оператору и в пределах 3\" от него, затем брось 2D6: если результат 7, выбранный оператор восстанавливает 1 из потерянных wounds; иначе — восстанавливает потерянные wounds, равные наибольшему D6. Этот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, либо более одного раза за turning point.",
              "cost": "1AP",
              "tag": "PSYCHIC"
            }
          ]
        },
        {
          "name": "Warrior",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/warrior.png",
          "weapons": [
            {
              "name": "Boltgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Toxic*"
            },
            {
              "name": "Plague knife",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Severe, Poison*"
            }
          ],
          "abilities": [
            {
              "name": "Repulsive Fortitude",
              "text": "Когда оператор стреляет в этого оператора, результаты кубиков защиты 5+ являются критическими успехами."
            },
            {
              "name": "* Toxic",
              "text": "Когда этот оператор использует это оружие против вражеского оператора, у которого есть один из твоих Poison tokens, добавь 1 к обеим характеристикам Dmg этого оружия."
            }
          ]
        }
      ],
      "lore": {
        "intro": "Порождённые порчей сыны Мортариона, Plague Marines пропитаны и раздуты гнилью и болезнью. Хоть и приземистые и медлительные, Plague Marines ужасающе живучи — они неотступно бредут к своим целям, оставляя за собой заразу.",
        "operatives": [
          {
            "name": "Champion",
            "text": "Вооружённые веками опыта и осквернённым варп-оружием, Champions — гнилое ядро банд Plague Marine. Они ведут с передовой, подавая кровавый пример своим войскам."
          },
          {
            "name": "Bombardier",
            "text": "Death Guard издавна были устрашающими бойцами окопной войны. Bombardiers специализируются на взломе укреплённых позиций градом гранат — от пробивающих броню krak grenades до гипертоксичных blight grenades."
          },
          {
            "name": "Fighter",
            "text": "Многие Plague Marines предпочитают сражаться вблизи. Они бредут сквозь вражеские ряды, и каждый взмах их благословлённого чумой оружия распространяет новые заражения."
          },
          {
            "name": "Heavy Gunner",
            "text": "Арсеналы Death Guard полны смертоносного оружия — от губительной арканы до запретных хим-агентов минувших эпох. Heavy Gunners применяют эти орудия войны с чудовищным эффектом."
          },
          {
            "name": "Icon Bearer",
            "text": "Icon Bearers удостоены чести нести проклятые штандарты Death Guard. Каждый — очаг разложения, иссушающий волю ближних врагов и усиливающий живучесть собратьев Plague Marines."
          },
          {
            "name": "Malignant Plaguecaster",
            "text": "Malignant Plaguecasters направляют зловонные энергии царства Нургла. Мерзкий цикл разложения и возрождения подвластен им — будь то высвобождение облаков убийственного ветра или оживление собратьев."
          },
          {
            "name": "Warrior",
            "text": "Почти ничто не остановит Plague Marine на марше. Защищённые силовой бронёй и мерзкими благословениями Нургла, эти воины идут сквозь штормы вражеского огня в погоне за своей целью."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Astartes",
          "text": "Space Marines — генетически улучшенные транслюди, выкованные лишь для одной цели: войны. Во время активации каждого дружественного оператора PLAGUE MARINE он может выполнить либо два действия Shoot, либо два действия Fight. Если это два Shoot, то хотя бы для одного должны быть выбраны bolt pistol, boltgun или PSYCHIC оружие. Нельзя выбрать одно и то же PSYCHIC ranged-оружие более одного раза за активацию. Каждый дружественный оператор PLAGUE MARINE может выполнять counteract независимо от своего приказа."
        },
        {
          "name": "Poison",
          "text": "Нургл торгует осквернёнными ядами, токсинами, вирусными чумами и болезнями души, что противятся и природной стойкости, и врачеванию. Некоторое оружие в правилах этой команды обладает правилом Poison. * Poison: на этапе Resolve Attack Dice, если ты наносишь урон любыми успехами, оператор, против которого используется это оружие (исключая дружественных операторов PLAGUE MARINE), получает один из твоих Poison tokens (если у него ещё нет). Когда оператор с одним из твоих Poison tokens активируется, нанеси ему 1 урон."
        },
        {
          "name": "Disgustingly Resilient",
          "text": "Последователи Нургла обладают чрезвычайной стойкостью к пуле и клинку, ибо их отвратительные тела раздуты смертью, тленом и болезнью. Когда кубик атаки наносит урон 3 или больше дружественному оператору PLAGUE MARINE, брось один D6: на 4+ вычти 1 из того нанесённого урона."
        }
      ]
    },
    "Celestian Insidiants": {
      "archetypes": [
        "Security",
        "Seek & Destroy"
      ],
      "equipment": "Celestian Insidiants",
      "required": [
        {
          "name": "Insidiant Superior",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 10,
          "count": 1,
          "weapons": [
            {
              "name": "Inferno pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/2",
              "wr": "Range 3\", Devastating 3, Piercing 2"
            },
            {
              "name": "Relic bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Range 8\", Lethal 5+"
            },
            {
              "name": "Relic condemnor stakethrower",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/2",
              "wr": "Devastating 2, Lethal 5+, Piercing Crits 1, Silent, Anti-PSYKER*"
            },
            {
              "name": "Null mace",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Shock, Anti-PSYKER*"
            }
          ],
          "abilities": [
            {
              "name": "Spiritual Mentor",
              "text": "Выбери одного дружественного оператора CELESTIAN INSIDIANT, видимого этому оператору и находящегося в пределах 6\" от него. Этот оператор становится INSPIRING. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора, либо более одного раза за turning point.",
              "cost": "1AP",
              "tag": "SUPPORT"
            },
            {
              "name": "Holy Defender",
              "text": "Один раз за turning point, когда дружественный оператор CELESTIAN INSIDIANT, видимый этому оператору и находящийся в пределах 2\" от него, выбирается как допустимая цель действия Shoot или как тот, против кого ведётся бой в действии Fight, можешь применить это правило. Если применяешь — этот оператор становится допустимой целью или тем, против кого ведётся бой, вместо первоначального (даже если в обычной ситуации он не был бы допустимой целью). Если это действие Fight, считай этого оператора находящимся в control range сражающегося оператора на всё время этого действия. Если это действие Shoot, этот оператор находится в укрытии (cover) или скрыт (obscured) только если в таком положении была первоначальная цель. Это правило не действует, если это действие Shoot и у ranged-оружия есть правило Blast или Torrent."
            },
            {
              "name": "Holy Example",
              "text": "Один раз за turning point, если этот оператор INSPIRING, можешь использовать firefight ploy за 0CP, если это указанный оператор CELESTIAN INSIDIANT (включая Command Re-roll, если кубик атаки или защиты был брошен за этого оператора)."
            },
            {
              "name": "* Anti-PSYKER",
              "text": "Когда это оружие используется против оператора с ключевым словом PSYKER, оно получает правило Lethal 5+."
            }
          ],
          "portrait": "img/portraits/celestian-insidiants/superior.png"
        }
      ],
      "poolPick": 8,
      "pool": [
        {
          "name": "Insidiant Abjuror",
          "apl": 2,
          "move": "6\"",
          "save": "2+",
          "wounds": 11,
          "weapons": [
            {
              "name": "Blessed sword & praesidium protectiva (defensive)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Shield*"
            },
            {
              "name": "Blessed sword & praesidium protectiva (offensive)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "* Shield",
              "text": "Когда этот оператор сражается или отвечает (retaliating) с этим профилем оружия, каждый твой block может быть распределён, чтобы блокировать два неразрешённых успеха (вместо одного)."
            }
          ],
          "portrait": "img/portraits/celestian-insidiants/abjuror.png"
        },
        {
          "name": "Insidiant Censor",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Virge of admonition",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/5",
              "wr": "Brutal, Shock, Anti-PSYKER*"
            }
          ],
          "abilities": [
            {
              "name": "Virge of Admonition Icon Bearer",
              "text": "При определении контроля над маркером считай характеристику APL этого оператора на 1 выше. Учти, что это не изменение его характеристики APL, поэтому любые изменения суммируются с этим."
            },
            {
              "name": "Null Field",
              "text": "Этот оператор начинает битву с null range, равным 1\". Когда вражеский оператор находится в пределах null range этого оператора, вычти 2\" из характеристики Move того вражеского оператора и ухудши характеристику Hit его оружия на 1 (это не суммируется с эффектом ранения, injured)."
            },
            {
              "name": "Nullifying Ritual",
              "text": "Добавь 1 к null range этого оператора (максимум до 5\"). Nullification-токены в marker/token guide пронумерованы, поэтому используй пронумерованный токен, равный null range этого оператора. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора, либо более одного раза за turning point.",
              "cost": "1AP"
            },
            {
              "name": "* Anti-PSYKER",
              "text": "Когда это оружие используется против оператора с ключевым словом PSYKER, оно получает правило Lethal 5+."
            }
          ],
          "portrait": "img/portraits/celestian-insidiants/censor.png"
        },
        {
          "name": "Insidiant Cremator",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "maxCopies": 2,
          "weapons": [
            {
              "name": "Hand flamer (standard)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 6\", Saturate, Torrent 1\""
            },
            {
              "name": "Hand flamer (deluge)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 4\", Saturate, Seek Light, Torrent 0\"*"
            },
            {
              "name": "Null mace",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Shock, Anti-PSYKER*"
            }
          ],
          "abilities": [
            {
              "name": "Inspirational Pyre",
              "text": "Один раз за turning point, когда этот оператор наносит урон вражескому оператору любым профилем своего hand flamer, но не выводит его из строя (incapacitate), можешь применить это правило. Если применяешь — можешь выбрать одного дружественного оператора CELESTIAN INSIDIANT в пределах 6\" от этого оператора, чтобы он стал INSPIRING."
            },
            {
              "name": "* Torrent 0\" (deluge)",
              "text": "Torrent 0\" означает, что нельзя выбирать вторичные цели, но оружие всё равно обладает правилом Torrent для прочих игровых целей (например Condensed Stronghold)."
            },
            {
              "name": "* Anti-PSYKER",
              "text": "Когда это оружие используется против оператора с ключевым словом PSYKER, оно получает правило Lethal 5+."
            }
          ],
          "portrait": "img/portraits/celestian-insidiants/cremator.png"
        },
        {
          "name": "Insidiant Denuncia",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Voice of condemnation",
              "atk": 5,
              "hit": "3+",
              "dmg": "1/1",
              "wr": "Range 6\", Seek, Stun"
            },
            {
              "name": "Staff of declamation",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Shock"
            }
          ],
          "abilities": [
            {
              "name": "Accusing Exorcist",
              "text": "Когда этот оператор INSPIRING, strategy ploy Suspect & Eliminate стоит тебе 0CP, если выбранный тобой вражеский оператор или маркер видим этому оператору или находится в пределах 6\" от него."
            },
            {
              "name": "Speak of Her Deeds",
              "text": "Выбери INSPIRING дружественного оператора CELESTIAN INSIDIANT, видимого этому оператору и находящегося в пределах 6\" от него. Тот оператор перестаёт быть INSPIRING. Затем выбери другого дружественного оператора CELESTIAN INSIDIANT, видимого этому оператору и находящегося в пределах 6\" от него. Разреши на нём одно BENEDICTION из faction rule Martyrdom (исключая Exigence). Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP",
              "tag": "SUPPORT"
            }
          ],
          "portrait": "img/portraits/celestian-insidiants/denuncia.png"
        },
        {
          "name": "Insidiant Mortisanctus",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Blessed broadsword",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+, Brutal"
            }
          ],
          "abilities": [
            {
              "name": "Zealous Ultimatum",
              "text": "Один раз за битву. Выбери одного вражеского оператора в пределах 8\" от этого оператора и предъяви ему ультиматум. Твой оппонент должен принять или отклонить этот ультиматум (если это non-player оператор, брось один D6: на 4+ ультиматум принят, иначе отклонён). Если ультиматум принят, то когда этот оператор сражается против того вражеского оператора или отвечает ему, добавь 1 к характеристике Atk у blessed broadsword этого оператора. Когда этот оператор впервые за битву выводит из строя того вражеского оператора в бою или при ответе, добавь 1 к характеристике Atk у blessed broadsword этого оператора до конца битвы. В обоих случаях — максимум до 5. Если ультиматум отклонён, то когда тот вражеский оператор сражается против дружественного оператора CELESTIAN INSIDIANT или отвечает ему, вычти 1 из характеристики Atk у оружия того вражеского оператора.",
              "cost": "Strategic Gambit"
            },
            {
              "name": "Bladed Stance",
              "text": "Когда этот оператор сражается или отвечает (retaliating), можешь разрешить один из своих успехов до обычного порядка. Если делаешь так — этот успех должен быть использован для блока (block)."
            }
          ],
          "portrait": "img/portraits/celestian-insidiants/mortisanctus.png"
        },
        {
          "name": "Insidiant Reliquarius",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Condemnor stakethrower",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/2",
              "wr": "Devastating 1, Piercing Crits 1, Silent, Anti-PSYKER*"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Simulacrum Nullificatus Icon Bearer",
              "text": "При определении контроля над маркером считай суммарную характеристику APL вражеских операторов, оспаривающих его, на 1 ниже, если хотя бы один из этих вражеских операторов находится в пределах 3\" от него. Учти, что это не изменение характеристики APL, поэтому любые изменения суммируются с этим."
            },
            {
              "name": "Devotion",
              "text": "В конце каждой активации этого оператора, если он INSPIRING и контролирует objective-маркер или один из твоих mission-маркеров, один дружественный оператор CELESTIAN INSIDIANT, видимый этому оператору и находящийся в пределах 6\" от него, становится INSPIRING."
            },
            {
              "name": "* Anti-PSYKER",
              "text": "Когда это оружие используется против оператора с ключевым словом PSYKER, оно получает правило Lethal 5+."
            }
          ],
          "portrait": "img/portraits/celestian-insidiants/reliquarius.png"
        },
        {
          "name": "Insidiant Warrior",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "maxCopies": 2,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Condemnor stakethrower",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/2",
              "wr": "Devastating 1, Piercing Crits 1, Silent, Anti-PSYKER*"
            },
            {
              "name": "Null mace",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Shock, Anti-PSYKER*"
            }
          ],
          "abilities": [
            {
              "name": "Inspired Strikes",
              "text": "Когда этот оператор INSPIRING, добавь 1 к характеристике Critical Dmg оружия на его datacard."
            },
            {
              "name": "* Anti-PSYKER",
              "text": "Когда это оружие используется против оператора с ключевым словом PSYKER, оно получает правило Lethal 5+."
            }
          ],
          "portrait": "img/portraits/celestian-insidiants/warrior.png"
        }
      ],
      "lore": {
        "intro": "Команды CELESTIAN INSIDIANT состоят из ряда специалистов, каждый из которых обучен и снаряжён для выполнения определённой роли в преследовании и уничтожении колдовских врагов. Некоторые используют эзотерическое реликвийное оружие и снаряжение, взятое из обширных арсеналов их Orders Militant, носить которое — великая честь.",
        "quote": {
          "text": "Гнушайтесь колдовства, сёстры мои, ибо нет ереси большей или более мерзкой. Выискивайте его и уничтожайте, где бы оно ни нашлось. Да не отвратят вас от долга ни милосердие, ни сострадание. Вашего подозрения достаточно, чтобы вынести приговор и привести в исполнение единственное наказание, подобающее такому преступлению: смерть.",
          "author": "Canoness Preceptor Vehemence Crane"
        },
        "operatives": [
          {
            "name": "Insidiant Superior",
            "text": "Зачастую самая опытная в своём отряде, Insidiant Superior ведёт своих сестёр в церемонии и в битве со строгой точностью. Она носит изысканный гребень на шлеме и несёт богато украшенный null mace, обозначающий её старшинство, а также более мощное дальнобойное оружие, чтобы обращать его против врага."
          },
          {
            "name": "Insidiant Censor",
            "text": "Insidiant Censor несёт virge of admonition. Это священное устройство содержит большой проектор null-поля короткого действия, который при активации испускает импульс null-силы, воодушевляющий сестёр отряда и ослабляющий волю их врагов."
          },
          {
            "name": "Insidiant Abjuror",
            "text": "Insidiant Abjuror отвечает за защиту своего отряда от клинков, пуль и нечистивых сил ведьм. Она встаёт между врагом и своими сёстрами, обременёнными священными реликвиями, отражая удары и сражая еретиков своим blessed sword."
          },
          {
            "name": "Insidiant Cremator",
            "text": "Battle Sisters из Adepta Sororitas всем сердцем верят в очищающую силу жидкого пламени. Insidiant Cremator поручено выжигать пятно колдовства своим hand flamer. Её задача — испепелять любой след мерзости, обращая псайкеров и их прислужников в груды тлеющего пепла и почерневших костей."
          },
          {
            "name": "Insidiant Denuncia",
            "text": "Обучавшаяся у Orders Dialogus, Insidiant Denuncia — искусный оратор, чей сам голос является оружием. В битве её пламенные стихи изгнания и экзорцизма гремят в умах её врагов, терзая их болью и нарушая их концентрацию."
          },
          {
            "name": "Insidiant Reliquarius",
            "text": "Insidiant Reliquarius несёт над собой simulacrum nullificatus. В его механизмы вживлён череп Pariah — мутанта, чей разум проецирует поле негативной психической энергии. При активации оно создаёт ауру null-энергии, которая иссушает волю врага и снижает его боевую эффективность."
          },
          {
            "name": "Insidiant Mortisanctus",
            "text": "Мрачная, суровая и совершенно непреклонная, Insidiant Mortisanctus — искусная фехтовальщица. Избранная владеть древним силовым оружием, освящённым в крови мучеников и выгравированным священным писанием, её задача — вступать в бой с опаснейшими из врагов и наносить смертельный удар по ведьме. Каждый её взмах одновременно выверен и смертоносен."
          },
          {
            "name": "Insidiant Warrior",
            "text": "Insidiant Warrior — мощный боец-антипсайкер, вооружённый null mace и condemnor bolt pistol. Она агрессивно преследует тех, в ком, по её мнению, проявился какой-либо след колдовства, а также предателей, которые стремятся помочь подобным еретикам избежать суда Императора."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Martyrdom",
          "text": "Когда INSPIRING дружественный оператор CELESTIAN INSIDIANT выводится из строя (incapacitated), перед тем как он убирается из killzone, выбери одного другого дружественного оператора CELESTIAN INSIDIANT, которому тот оператор видим или который находится в пределах 6\" от него. Выбранный оператор получает одно BENEDICTION (операторов, выведенных из строя, нельзя выбрать для BENEDICTION): Ardour — до конца битвы +1 к APL того оператора (нельзя выбрать для SUPERIOR); Wrath — до конца битвы оружие на datacard того оператора получает правило Ceaseless; Restoration — тот оператор восстанавливает D3+2 потерянных wounds; Exigence — тот оператор может немедленно выполнить бесплатное действие Charge или Dash (для Charge — не более 3\"), но должен закончить это перемещение ближе к выведенному из строя INSPIRING оператору."
        },
        {
          "name": "Weapons of the Witch Hunters",
          "text": "PSYCHIC ranged-оружие не может наносить урон дружественным операторам CELESTIAN INSIDIANT. Для эффектов PSYCHIC-действий дружественных операторов CELESTIAN INSIDIANT нельзя выбирать, и они никогда не считаются находящимися в пределах требуемых дистанций этих действий. Когда оператор находится в пределах 3\" от дружественного оператора CELESTIAN INSIDIANT: тот оператор не может выполнять PSYCHIC-действия или использовать PSYCHIC additional rules; тот оператор не может использовать PSYCHIC ranged-оружие; PSYCHIC melee-оружие не имеет никаких правил оружия и не может иметь характеристики Dmg выше 3/4. * Anti-PSYKER: когда это оружие используется против оператора с ключевым словом PSYKER, оно получает правило Lethal 5+."
        },
        {
          "name": "Inspiration",
          "text": "Когда дружественный оператор CELESTIAN INSIDIANT выводит из строя (incapacitate) вражеского оператора с характеристикой Wounds 6 или больше — этот дружественный оператор становится INSPIRING. Когда он выполняет действие Charge — перед перемещением он становится INSPIRING. Когда дружественный оператор CELESTIAN INSIDIANT является INSPIRING, оружие на его datacard получает правило Severe."
        }
      ]
    },
    "Nemesis Claw": {
      "archetypes": [
        "Infiltration",
        "Seek & Destroy"
      ],
      "required": [
        {
          "name": "Night Lord Visionary",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 15,
          "count": 1,
          "portrait": "img/portraits/nemesis-claw/visionary.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Plasma pistol (standard)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Range 8\", Piercing 1"
            },
            {
              "name": "Plasma pistol (supercharge)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 8\", Hot, Lethal 5+, Piercing 1"
            },
            {
              "name": "Nostraman chainblade",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending"
            },
            {
              "name": "Power fist",
              "atk": 5,
              "hit": "4+",
              "dmg": "5/7",
              "wr": "Brutal"
            },
            {
              "name": "Power maul",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Shock"
            },
            {
              "name": "Power weapon",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Prescience",
              "text": "В шаге Ready каждой фазы Strategy получаешь 1 очко Prescience, в конце каждого turning point очки Prescience сбрасываются. В фазу Firefight можно тратить очки Prescience (каждое правило — не чаще раза за turning point): • Foreboding: когда наступает твой черёд активировать дружественного оператора, потрать 1 очко Prescience, чтобы пропустить эту активацию. • Portent: когда кубик атаки наносит Normal Dmg этому оператору, потрать 1 очко Prescience, чтобы игнорировать этот урон. Нельзя получать или тратить очки Prescience, если этот оператор выведен из строя.",
              "tag": "PSYCHIC"
            },
            {
              "name": "Premonition",
              "text": "Потрать 1 очко Prescience, чтобы получить 1CP. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора, либо более одного раза за turning point.",
              "cost": "1AP",
              "tag": "PSYCHIC"
            }
          ]
        }
      ],
      "pool": [
        {
          "name": "Night Lord Fearmonger",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/fearmonger.png",
          "weapons": [
            {
              "name": "Scoped bolt pistol (short range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Lethal 5+"
            },
            {
              "name": "Scoped bolt pistol (long range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Terrorchem vial",
              "atk": 5,
              "hit": "3+",
              "dmg": "2/0",
              "wr": "Range 6\", Blast 2\", Devastating 3, Limited 1, Saturate, Terrorchem*"
            },
            {
              "name": "Tainted blade",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Terrorchem*"
            }
          ],
          "abilities": [
            {
              "name": "* Terrorchem",
              "text": "В шаге Resolve Attack Dice, если ты наносишь урон любыми критическими успехами (включая за счёт правила Devastating), оператор, против которого применено это оружие, получает один из твоих токенов Terrorchem (если у него ещё нет)."
            },
            {
              "name": "Terrorchem Poison",
              "text": "Когда активируется оператор с токеном Terrorchem — нанеси ему D3 урона."
            },
            {
              "name": "Poison Objective",
              "text": "Выбери маркер цели, который контролирует этот оператор — на него ставится токен Terrorchem. Маркер не может быть в зоне контроля врага или уже иметь токен Terrorchem. В первый раз, когда вражеский оператор без токена Terrorchem начинает контестить этот маркер, он получает токен Terrorchem и получает 2D3 урона (если это происходит во время действия — в конце действия). Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ]
        },
        {
          "name": "Night Lord Gunner",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/gunner.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Flamer",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 8\", Saturate, Torrent 2\""
            },
            {
              "name": "Meltagun",
              "atk": 4,
              "hit": "3+",
              "dmg": "6/3",
              "wr": "Range 6\", Devastating 4, Piercing 2"
            },
            {
              "name": "Plasma gun (standard)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Piercing 1"
            },
            {
              "name": "Plasma gun (supercharge)",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/6",
              "wr": "Hot, Lethal 5+, Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": []
        },
        {
          "name": "Night Lord Heavy Gunner",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/heavy_gunner.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Heavy bolter (focused)",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Heavy (Reposition only), Piercing Crits 1"
            },
            {
              "name": "Heavy bolter (sweeping)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Heavy (Reposition only), Piercing Crits 1, Torrent 1\""
            },
            {
              "name": "Missile launcher (frag)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Blast 2\", Heavy (Reposition only)"
            },
            {
              "name": "Missile launcher (krak)",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/7",
              "wr": "Heavy (Reposition only), Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": []
        },
        {
          "name": "Night Lord Screecher",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/screecher.png",
          "weapons": [
            {
              "name": "Lightning claws",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Ceaseless, Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Screecher",
              "text": "Когда враг в пределах 3\" от этого оператора стреляет, дерётся или отвечает — оппонент не может перебрасывать кубики атаки."
            },
            {
              "name": "Appetite for Cruelty",
              "text": "Когда этот оператор дерётся против раненого врага — его lightning claws получают правило Lethal 4+."
            }
          ]
        },
        {
          "name": "Night Lord Skinthief",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/skinthief.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Nostraman chainglaive",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Flay Them Alive",
              "text": "Раз за turning point, когда этот оператор выводит из строя врага в своей зоне контроля, выбери другого вражеского оператора, видимого этому оператору или выведенному из строя врагу и находящегося в пределах 6\" от любого из них. До начала следующего turning point тот вражеский оператор не может контролировать маркеры и не может выполнять действия Pick Up Marker и миссийные действия."
            },
            {
              "name": "Tyrant of the Skinning Pits",
              "text": "Когда этот оператор дерётся или отвечает, Normal и Critical Dmg 3 и больше наносят ему на 1 меньше урона."
            }
          ]
        },
        {
          "name": "Night Lord Ventrilokar",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/ventrilokar.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Chainsword",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Icon Bearer",
              "text": "При определении контроля маркера считай APL этого оператора на 1 выше. Это не меняет сам стат APL, поэтому эффект накопительный."
            },
            {
              "name": "Disconcerting Mimicry",
              "text": "Выбери вражеского оператора в пределах 6\", затем выбери один вариант для него (каждый вариант — не чаще раза за партию): до конца его следующей активации −1 к APL; или смени его приказ; или он выполняет бесплатное действие Dash (место для перемещения указываешь ты). Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP",
              "tag": "PSYCHIC"
            }
          ]
        },
        {
          "name": "Night Lord Warrior",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "maxCopies": 5,
          "portrait": "img/portraits/nemesis-claw/warrior.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Boltgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Chainsword",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Fists",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Cruel Tormenter",
              "text": "Когда этот оператор стреляет, дерётся или отвечает против врага, либо против врага со статом Wounds 7 или меньше — его оружие получает правило Lethal 5+."
            }
          ]
        }
      ],
      "poolPick": 5,
      "equipment": "Nemesis Claw",
      "lore": {
        "intro": "Дикие и в высшей степени садистские, Night Lords используют сам страх как своё самое мощное оружие. Самые жестокие из этих закоренелых убийц формируют килл-команды, известные как Nemesis Claw, достигающие своих целей через акты чудовищного насилия и распространение абсолютного ужаса.",
        "quote": {
          "text": "Много лет назад я в последний раз получал удовольствие от чего-либо, кроме мучений других. Но в этом единственном оставшемся развлечении можно найти такие наслаждения...",
          "author": "Vaal K'Shand, Fearmonger"
        },
        "operatives": [
          {
            "name": "Night Lord Visionary",
            "text": "Чтобы вести такую банду монстров в бой, нужно быть по-настоящему пугающим существом — и Visionary справляется с этой задачей. Одарённый инстинктивными вспышками предвидения, он предугадывает угрозы — как в собственном Nemesis Claw, так и снаружи — и встречает их шокирующим насилием."
          },
          {
            "name": "Night Lord Fearmonger",
            "text": "Fearmonger не просто мастер токсинов и ядов — он наслаждается медленной жестокостью их действия. Распыляя свои мерзкие составы в бою или проникая во вражеские лагеря, чтобы отравить рационы, он несёт ужас, страдания и смерть повсюду, куда бы ни пришёл."
          },
          {
            "name": "Night Lord Gunner",
            "text": "Действие горящего прометия, шипящих мелта-лучей и раскалённых зарядов плазмы на живых существ — зрелище крайне жестокое. Gunners охватывают силу этого оружия ужаса и применяют его, чтобы сеять чудовищный хаос среди врагов."
          },
          {
            "name": "Night Lord Heavy Gunner",
            "text": "В любой охоте есть время для скрытности, но есть и время отбросить всю утончённость ради того, чтобы выкосить кричащую жертву. Heavy Gunners делают это шквалом болтерных снарядов или разносят врага в кровавые лохмотья противотанковыми ракетами."
          },
          {
            "name": "Night Lord Screecher",
            "text": "Издавна охотясь на тех, кто слабее их самих, Screechers деградировали до жестоких, почти зверских существ. Усиленные злокозненными технологиями Vox Noctis, вопли Screecher парализуют жертв ужасом — эффектом, которым их собратья Night Lords не упускают случая воспользоваться."
          },
          {
            "name": "Night Lord Skinthief",
            "text": "Жестокие надзиратели чудовищных скарификационных ям Night Lords, эти бессердечные убийцы используют свою власть, выступая палачами и лейтенантами при Visionary. Горе тому врагу, что задержится слишком долго в радиусе действия их воющих Nostraman chainglaives."
          },
          {
            "name": "Night Lord Ventrilokar",
            "text": "«Похититель голосов», который несёт с собой Ventrilokar, сделан из мёртвой плоти убитого космического десантника, чья омофагея была осквернена тёмным колдовством. Эта мёртво-живая марионетка способна имитировать голоса тех, чью плоть она поглощает, а также похищать — и бормотать вслух — их самые сокровенные секреты."
          },
          {
            "name": "Night Lord Warrior",
            "text": "Night Lords, сражающиеся в составе Nemesis Claw, — одни из самых психотичных и диких среди всего своего испорченного рода. Расстреливая жертв издалека или вспарывая и обдирая их в ближнем бою, они — поистине дьявольские противники."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Astartes",
          "text": "Эти генетически модифицированные супергуманоиды созданы для одной цели: войны. Во время активации каждого дружественного оператора NEMESIS CLAW он может выполнить либо два действия Shoot, либо два действия Fight. Если это два Shoot, то хотя бы для одного из них должен быть выбран bolt pistol, boltgun или scoped bolt pistol. Каждый дружественный оператор NEMESIS CLAW может выполнять counteract независимо от своего приказа."
        },
        {
          "name": "In Midnight Clad",
          "text": "Night Lords едины с тьмой, используя её как союзника и оружие. Когда вражеский оператор стреляет по дружественному оператору NEMESIS CLAW, тот дружественный оператор считается obscured, если верны оба условия: он более чем в 8\" от вражеских операторов, которым он виден; он в пределах 1\" от Heavy terrain, не ниже него, либо хотя бы часть его базы находится под Vantage terrain."
        }
      ]
    }
  }
};
