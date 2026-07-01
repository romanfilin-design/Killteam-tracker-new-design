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
          "portrait": "img/portraits/plague-marines/champion.png"
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
          "portrait": "img/portraits/plague-marines/bombardier.png"
        },
        {
          "name": "Fighter",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/fighter.png"
        },
        {
          "name": "Heavy Gunner",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/heavy_gunner.png"
        },
        {
          "name": "Icon Bearer",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/icon_bearer.png"
        },
        {
          "name": "Malignant Plaguecaster",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/malignant_plaguecaster.png"
        },
        {
          "name": "Warrior",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/plague-marines/warrior.png"
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
          "count": 1
        }
      ],
      "poolPick": 8,
      "pool": [
        {
          "name": "Insidiant Abjuror",
          "apl": 2,
          "move": "6\"",
          "save": "2+",
          "wounds": 11
        },
        {
          "name": "Insidiant Censor",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9
        },
        {
          "name": "Insidiant Cremator",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "maxCopies": 2
        },
        {
          "name": "Insidiant Denuncia",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9
        },
        {
          "name": "Insidiant Mortisanctus",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9
        },
        {
          "name": "Insidiant Reliquarius",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9
        },
        {
          "name": "Insidiant Warrior",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "maxCopies": 2
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
          "portrait": "img/portraits/nemesis-claw/visionary.png"
        }
      ],
      "pool": [
        {
          "name": "Night Lord Fearmonger",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/fearmonger.png"
        },
        {
          "name": "Night Lord Gunner",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/gunner.png"
        },
        {
          "name": "Night Lord Heavy Gunner",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/heavy_gunner.png"
        },
        {
          "name": "Night Lord Screecher",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/screecher.png"
        },
        {
          "name": "Night Lord Skinthief",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/skinthief.png"
        },
        {
          "name": "Night Lord Ventrilokar",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/nemesis-claw/ventrilokar.png"
        },
        {
          "name": "Night Lord Warrior",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "maxCopies": 5,
          "portrait": "img/portraits/nemesis-claw/warrior.png"
        }
      ],
      "poolPick": 5,
      "equipment": "Nemesis Claw"
    }
  }
};
