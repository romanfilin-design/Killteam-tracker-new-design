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
        "desc": "Когда враг стреляет, дерётся или отвечает против дружественного оператора Nemesis Claw в пределах 2\" от него — оппонент не может перебрасывать кубики атаки с результатом 1."
      },
      {
        "id": "chain_snare",
        "name": "Chain Snare",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Если враг в зоне контроля дружественного оператора Nemesis Claw (и не в зоне контроля других врагов) пытается выполнить Fall Back — бросьте два К6 (один К6, если WOUNDS врага выше, чем у оператора). При результате 4+ действие не выполняется (ОД не расходуются); повторно за этот turning point правило не использовать."
      },
      {
        "id": "grisly_trophy",
        "name": "Grisly Trophy",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Один раз за партию: когда дружественный оператор выводит из строя врага в пределах 2\" от себя, он получает токен Grisly Trophy (если ещё не имеет). Пока оператор с этим токеном виден и в пределах 2\" от врага — у оружия этого врага −1 к Atk."
      },
      {
        "id": "comms_jammers",
        "name": "Comms Jammers",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Пока враг в пределах 3\" от дружественного оператора Nemesis Claw — его APL нельзя увеличивать (уже изменённые значения APL это не затрагивает)."
      }
    ],
    "Hearthkyn Salvagers": [
      {
        "id": "plasma_knives",
        "name": "Plasma Knives",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Дружественные операторы HEARTHKYN SALVAGER получают следующее оружие ближнего боя. У FIELD MEDIC уже есть это оружие, но с лучшими характеристиками — в этом случае используется лучшая версия. Plasma knife: Atk 3, Hit 4+, Dmg 3/5, WR Lethal 5+."
      },
      {
        "id": "climbing_rigs",
        "name": "Climbing Rigs",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Во время каждой активации дружественного оператора HEARTHKYN SALVAGER можно применить одно из следующего: когда этот оператор поднимается (climbing up), можно считать вертикальную дистанцию как 2\" (независимо от реальной высоты подъёма); когда он спускается (dropping), вертикальная дистанция игнорируется."
      },
      {
        "id": "excavation_tools",
        "name": "Excavation Tools",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Дружественные операторы HEARTHKYN SALVAGER выполняют действие Pick Up Marker за 1 AP меньше и не обязаны контролировать маркер, чтобы это сделать (это имеет приоритет над обычными условиями действия — достаточно его контестить)."
      },
      {
        "id": "writ_of_claim",
        "name": "Writ of Claim",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Один раз за битву, если дружественные операторы HEARTHKYN SALVAGER контестят два или более маркера цели, после броска на инициативу можно применить это правило — если применяешь, можно перебросить свои кубики."
      }
    ],
    "Angels of Death": [
      {
        "id": "purity_seals",
        "name": "Purity Seals",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Один раз за turning point, когда дружественный оператор ANGEL OF DEATH стреляет, дерётся или отвечает (retaliating), если ты выбросил два или более fail, можно отбросить один из них, чтобы удержать другой как normal success."
      },
      {
        "id": "chapter_reliquaries",
        "name": "Chapter Reliquaries",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Можно использовать firefight ploy Wrath of Vengeance за 0CP, если указанный дружественный оператор имеет Engage order."
      },
      {
        "id": "tilting_shields",
        "name": "Tilting Shields",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Один раз за turning point, когда дружественный оператор ANGEL OF DEATH дерётся или отвечает (retaliating), после того как противник бросил свои attack dice, но до re-roll, можно применить это правило. Если применяешь, противник не может удерживать результаты attack dice меньше 6 как critical success в этой последовательности (например, в результате weapon rules Lethal, Rending или Severe)."
      },
      {
        "id": "auspex",
        "name": "Auspex",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Один раз за turning point, когда дружественный оператор ANGEL OF DEATH выполняет действие Shoot и ты выбираешь допустимую цель, можно применить это правило. Если применяешь, до конца этой активации/counteract вражеские операторы в пределах 8\" от этого дружественного оператора не могут быть obscured."
      }
    ],
    "Exaction Squad": [
      {
        "id": "reinforced_mirror_visor",
        "name": "Reinforced Mirror-Visor",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Можно игнорировать любые изменения APL stat дружественных операторов EXACTION SQUAD, и на них не действует weapon rule Shock вражеских операторов."
      },
      {
        "id": "manacles",
        "name": "Manacles",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Каждый раз, когда вражеский оператор должен выполнить действие Fall Back, находясь в пределах control range дружественного оператора EXACTION SQUAD, если в пределах control range того дружественного оператора нет других вражеских операторов, можно применить это правило. Если применяешь — брось два К6, или один К6, если у того вражеского оператора Wounds stat выше, чем у того дружественного оператора. Если хотя бы один результат 4+, тот вражеский оператор не может выполнить это действие во время этой активации/counteraction (AP на него не тратятся), и нельзя применить это правило снова в этот turning point."
      },
      {
        "id": "strobing_phosphor_lumen",
        "name": "Strobing Phosphor-Lumen",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Каждый раз, когда вражеский оператор стреляет по дружественному оператору EXACTION SQUAD, дерётся против него или отвечает (retaliating) против него в пределах 2\" от него, твой противник не может перебрасывать результаты своих кубиков атаки, показавшие 1."
      },
      {
        "id": "special_issue_shells",
        "name": "Special Issue Shells",
        "uses": 2,
        "usesLabel": "до 2× за turning point",
        "desc": "До двух раз за turning point, когда дружественный оператор EXACTION SQUAD выполняет действие Shoot и ты выбираешь combat shotgun, executioner shotgun, scoped shotpistol или shotpistol, можно применить это правило. Если применяешь — выбери одно из следующих weapon rules для этого оружия на время до конца этого действия: Saturate; Piercing 1, но только если у цели Save stat 3+ или лучше; Torrent 1\", но нельзя выбрать более одной secondary цели."
      }
    ],
    "Farstalker Kinband": [
      {
        "id": "piercing_shot",
        "name": "Piercing Shot",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор FARSTALKER KINBAND выполняет действие Shoot и ты выбираешь Kroot rifle, Kroot scattergun или dual Kroot pistols (focused), можно применить это правило. Если применяешь, до конца этого действия то оружие получает weapon rule Piercing 1. Нельзя применить Piercing Shot и Toxin Shot в одном и том же действии."
      },
      {
        "id": "toxin_shot",
        "name": "Toxin Shot",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор FARSTALKER KINBAND выполняет действие Shoot и ты выбираешь Kroot rifle, Kroot scattergun или dual Kroot pistols (focused), можно применить это правило. Если применяешь, до конца этого действия то оружие получает weapon rules Lethal 5+ и Stun. Нельзя применить Piercing Shot и Toxin Shot в одном и том же действии."
      },
      {
        "id": "meat",
        "name": "Meat",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда активируется дружественный оператор FARSTALKER KINBAND (кроме HOUND), если он не в пределах control range вражеских операторов, можно применить это правило. Если применяешь, этот дружественный оператор восстанавливает до D3+1 потерянных wounds."
      },
      {
        "id": "trophy",
        "name": "Trophy",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Once per battle, во время активации дружественного оператора FARSTALKER KINBAND (кроме HOUND), до или после выполнения им действия, если он не в пределах control range вражеских операторов, можно применить это правило. Если применяешь, добавь 1 к APL stat этого оператора до конца его активации."
      }
    ],
    "Fellgor Ravagers": [
      {
        "id": "brass_adornments",
        "name": "Brass Adornments",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Один раз за битву можешь использовать firefight ploy Animalistic Fury и firefight ploy Wild Rage за 0CP каждый."
      },
      {
        "id": "gore_marks",
        "name": "Gore Marks",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Один раз за turning point, когда дружественный оператор FELLGOR RAVAGER дерётся или отвечает (retaliating), можно применить это правило. Если применяешь: нанеси 1 урона этому дружественному оператору и перебрось один из своих кубиков атаки. Если результат — fail, нанеси этому дружественному оператору ещё 1 урона."
      },
      {
        "id": "chaos_sigil",
        "name": "Chaos Sigil",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Один раз за turning point, когда оператор стреляет по дружественному оператору FELLGOR RAVAGER, на этапе Roll Defence Dice можно применить это правило. Если применяешь: ухудши значение X правила Piercing на 1 (если оно есть) до конца этой последовательности. Piercing 1 в таком случае игнорируется полностью."
      },
      {
        "id": "war_paint",
        "name": "War Paint",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Можно игнорировать любые изменения Move stat дружественных операторов FELLGOR RAVAGER, вызванные состоянием injured."
      }
    ],
    "Kommandos": [
      {
        "id": "choppas",
        "name": "Choppas",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Дружественные операторы KOMMANDO (кроме BOMB SQUIG и GROT) получают следующее оружие ближнего боя (если оно лучше того, что уже есть у оператора — используй лучший вариант): Choppa — Atk 3, Hit 3+, Dmg 4/5."
      },
      {
        "id": "dynamite",
        "name": "Dynamite",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Once per battle, дружественный оператор KOMMANDO (кроме BOMB SQUIG и GROT) может использовать следующее ranged-оружие: Dynamite — Atk 5, Hit 4+, Dmg 4/5, WR Range 4\", Blast 1\", Heavy (Reposition only), Saturate."
      },
      {
        "id": "harpoon",
        "name": "Harpoon",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, дружественный оператор KOMMANDO (кроме BOMB SQUIG и GROT) может использовать следующее ranged-оружие: Harpoon — Atk 4, Hit 4+, Dmg 4/5, WR Range 8\", Lethal 5+, Stun."
      },
      {
        "id": "collapsible_stocks",
        "name": "Collapsible Stocks",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Убери weapon rule Range со следующего ranged-оружия дружественных операторов KOMMANDO: Shokka pistol; Slugga."
      }
    ],
    "Murderwing": [
      {
        "id": "bladefins",
        "name": "Bladefins",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Дружественные операторы MURDERWING могут выполнить следующее уникальное действие:\n\nSlice from Above (1AP), BOOST action. Нанеси D3+1 урона одному вражескому оператору в пределах BOOST ZONE этого оператора.\n\nОператор не может выполнять это действие обычным образом. Вместо этого он выполняет это действие во время действия Fall Back или Reposition после установки из BOOST."
      },
      {
        "id": "clawed_armour",
        "name": "Clawed Armour",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Дружественные операторы MURDERWING могут выполнить следующее уникальное действие:\n\nClawed Charge (0AP), BOOST action. Нанеси 1 урон одному вражескому оператору в пределах control range этого оператора, затем действие Charge заканчивается.\n\nОператор не может выполнять это действие обычным образом. Вместо этого он выполняет это действие во время действия Charge после установки из BOOST."
      },
      {
        "id": "warp_fuel",
        "name": "Warp Fuel",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда вражеский оператор заканчивает действие Fall Back во время своей активации, если хотя бы один дружественный оператор MURDERWING был в пределах его control range в начале того действия, можно применить это правило. Один из тех дружественных операторов может сразу выполнить свободное действие Reposition или Charge, но не может использовать более 3\" дистанции движения."
      },
      {
        "id": "vox_casters",
        "name": "Vox-casters",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, один дружественный оператор MURDERWING может выполнить следующее уникальное действие:\n\nVox-Cry (1AP). Каждый вражеский оператор в пределах 2\" от этого оператора проходит stun test. Для прохождения, брось один D6: при результате 3+, вычти 1 из его APL stat до конца его следующей активации.\n\nОператор не может выполнять это действие, имея Conceal order."
      }
    ],
    "Pathfinders": [
      {
        "id": "target_analysis_optic",
        "name": "Target Analysis Optic",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор PATHFINDER (кроме DRONE) выполняет действие Shoot и ты выбираешь допустимую цель, можно применить это правило. Если применяешь, до конца этого действия, если у цели есть хотя бы один твой Markerlight token, считай, что у неё на один больше. Если ranged-оружие имеет weapon rule Blast или Torrent, затрагивается только первичная цель."
      },
      {
        "id": "high_intensity_markerlight",
        "name": "High-Intensity Markerlight",
        "uses": 2,
        "usesLabel": "до 2× за turning point",
        "desc": "Up to twice per turning point, когда дружественный оператор PATHFINDER (кроме MV7 MARKER DRONE) выполняет действие Markerlight, можно применить это правило. Если применяешь, выбранный вражеский оператор получает два твоих Markerlight token (вместо одного)."
      },
      {
        "id": "photon_grenade",
        "name": "Photon Grenade",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point дружественный оператор PATHFINDER, у которого есть действие Markerlight на его datacard, может выполнить следующее уникальное действие:\n\nPhoton Grenade (1AP). Выбери одного вражеского оператора, видимого этому оператору, и брось один D6: при 3+, до конца следующей активации того оператора, отними 2\" от его Move stat.\n\nОператор не может выполнять это действие, находясь в пределах control range вражеского оператора."
      },
      {
        "id": "orbital_survey_uplink",
        "name": "Orbital Survey Uplink",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор PATHFINDER выполняет действие Markerlight, можно применить это правило. Если применяешь, можно выбрать одного вражеского оператора в killzone целью вместо этого (ему не нужно быть видимым). Не суммируется с High-Intensity Markerlight или Analyse."
      }
    ],
    "Tempestus Aquilons": [
      {
        "id": "tempestus_daggers",
        "name": "Tempestus Daggers",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Дружественные операторы TEMPESTUS AQUILON (кроме SERVO-SENTRY) получают следующее оружие ближнего боя: Tempestus dagger — Atk 3, Hit 4+, Dmg 3/4."
      },
      {
        "id": "combat_stimms",
        "name": "Combat Stimms",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Можно игнорировать любые изменения Move stat дружественных операторов TEMPESTUS AQUILON от получения ранений (injured)."
      },
      {
        "id": "drop_augury",
        "name": "Drop Augury",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Once per battle, когда активируется дружественный оператор TEMPESTUS AQUILON, установленный above, до того как он expend или lands, можно снова передвинуть один из своих Drop markers. Однако его нельзя передвигать ближе к drop zone оппонента."
      },
      {
        "id": "remote_overseer",
        "name": "Remote Overseer",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Once per battle, после броска на определение initiative можно перебросить свои кубики."
      }
    ],
    "Vespid Stingwings": [
      {
        "id": "neurostimulant",
        "name": "Neurostimulant",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "В Ready step каждой Strategy phase, при определении, сколько Communion points получить, можно бросить два D3 и выбрать один D3 для использования."
      },
      {
        "id": "convergence_stimulant",
        "name": "Convergence Stimulant",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point дружественный оператор VESPID STINGWING может выполнить действие Pick Up Marker или mission-действие, не тратя Communion point."
      },
      {
        "id": "accelerant_stimulant",
        "name": "Accelerant Stimulant",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Когда дружественный оператор VESPID STINGWING (кроме OVERSIGHT DRONE) выполняет действие Charge или Dash, он может переместиться на дополнительный 1\". Если использует FLY для этого действия, можно разместить его на дополнительный 1\" дальше."
      },
      {
        "id": "aggression_stimulant",
        "name": "Aggression Stimulant",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Когда дружественный оператор VESPID STINGWING (кроме OVERSIGHT DRONE) дерётся, его оружие ближнего боя получает weapon rule Ceaseless."
      }
    ],
    "Void-Dancer Troupe": [
      {
        "id": "wraithbone_talisman",
        "name": "Wraithbone Talisman",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор VOID-DANCER TROUPE стреляет, дерётся или отвечает (retaliating), если выпало два или более fail, можно один из них сохранить как обычный success вместо этого."
      },
      {
        "id": "shrieker_toxin_rounds",
        "name": "Shrieker Toxin Rounds",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор VOID-DANCER TROUPE выполняет действие Shoot и ты выбираешь shuriken pistol или shrieker cannon (focused), можно применить это правило. Если применяешь, до конца этого действия то оружие получает weapon rule Devastating 1."
      },
      {
        "id": "death_mask",
        "name": "Death Mask",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Ведётся Tragedy tally. Каждый раз, когда дружественный оператор VOID-DANCER TROUPE, имеющий правило ACCOLADE, выведен из строя, добавь 1 к своему Tragedy tally. Когда Tragedy tally достигает 3, получи 1CP и обнули tally."
      },
      {
        "id": "understudys_mask",
        "name": "Understudy's Mask",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Once per battle, когда активируется дружественный оператор VOID-DANCER TROUPE, если дружественный оператор, имеющий PIVOTAL ROLE, выведен из строя, можно применить это правило. Если применяешь, активированный оператор получает PIVOTAL ROLE на битву."
      }
    ],
    "Wrecka Krew": [
      {
        "id": "drill_rokkits",
        "name": "Drill Rokkits",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор WRECKA KREW выполняет действие Shoot и ты выбираешь rokkit launcha или 'eavy rokkit launcha, можно использовать это правило. Если используешь, до конца этого действия то оружие теряет weapon rule Blast, но получает weapon rule Piercing 1."
      },
      {
        "id": "extra_armour",
        "name": "Extra Armour",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Вычти 1\" из Move stat дружественных операторов WRECKA KREW и улучши их Save stat на 1. Это исключает операторов BOMB SQUIG и не суммируется с правилом Protective от Portable Barricade из universal equipment."
      },
      {
        "id": "engine_oil",
        "name": "Engine Oil",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда активируется дружественный оператор WRECKA KREW (кроме BOMB SQUIG), можно использовать это правило. Если используешь, до конца этой активации можно игнорировать любые изменения статов этого оператора от being injured (включая статы его оружия)."
      },
      {
        "id": "glyphs",
        "name": "Glyphs",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Когда выбирается этот предмет снаряжения, также выбери strategy ploy Waaagh! или Destruction. Первый раз, когда используешь тот ploy в этой битве, он стоит 0CP; каждый следующий раз, когда используешь его, он стоит 0CP, если у тебя есть хотя бы один Wrecka point."
      }
    ],
    "Wolf Scout": [
      {
        "id": "frost_weapons",
        "name": "Frost Weapons",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Когда дружественный оператор WOLF SCOUT полностью в пределах твоего STORM, его combat blade (если есть) получает weapon rule Lethal 5+."
      },
      {
        "id": "runic_charms",
        "name": "Runic Charms",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда оператор стреляет по дружественному оператору WOLF SCOUT (кроме FENRISIAN WOLF), полностью находящемуся в пределах твоего STORM, в начале этапа Roll Defence Dice можно применить это правило. Если применяешь, ухудши x у weapon rule Piercing на 1 (если есть) до конца этой последовательности. Учти, что Piercing 1 в этом случае будет проигнорирован."
      },
      {
        "id": "wolfteeth_necklaces",
        "name": "Wolfteeth Necklaces",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор WOLF SCOUT (кроме FENRISIAN WOLF) стреляет, дерётся или отвечает (retaliating), если ты выбросил два или более fail, можно отбросить один из них, чтобы удержать другой как normal success вместо этого."
      },
      {
        "id": "talismanic_trophies",
        "name": "Talismanic Trophies",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Когда дружественный оператор WOLF SCOUT (кроме FENRISIAN WOLF), полностью находящийся в пределах своего STORM, дерётся или отвечает (retaliating), на этапе Resolve Attack Dice можно вычесть 1 из урона, наносимого ему одним normal success."
      }
    ],
    "Inquisitorial Agents": [
      {
        "id": "inquisitorial_rosette",
        "name": "Inquisitorial Rosette",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Once per battle, когда дружественный оператор INQUISITORIAL AGENTS активируется, если в этом turning point уже использовался ploy Quarry, можно выбрать нового вражеского оператора своей Quarry до конца turning point."
      },
      {
        "id": "combat_daggers",
        "name": "Combat Daggers",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Дружественные операторы INQUISITORIAL AGENTS экипированы Combat dagger (Atk3 Hit4+ Dmg3/4). Когда дружественный оператор SISTER OF SILENCE использует его, добавь 1 к его Atk stat."
      },
      {
        "id": "armoured_bodysuits",
        "name": "Armoured Bodysuits",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Когда по дружественному оператору INQUISITORIAL AGENTS (кроме TOME-SKULL) с Save stat 5+ стреляют, можно удержать один из своих результатов defence dice 4 как normal success."
      },
      {
        "id": "servo_skull",
        "name": "Servo-Skull",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Once per battle, дружественный оператор INQUISITORIAL AGENTS может выполнить mission-действие на 1 AP меньше."
      }
    ],
    "Hierotek Circle": [
      {
        "id": "magnification_conduits",
        "name": "Magnification Conduits",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный APPRENTEK или CRYPTEK выполняет действие Shoot, выбери другого дружественного оператора (кроме PLASMACYTE) с приказом Engage, видимого ему — до конца этого действия он может быть \"активным оператором\" для правила Magnify."
      },
      {
        "id": "phase_shifter",
        "name": "Phase Shifter",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Once per turning point, когда оператор стреляет по дружественному CRYPTEK, в начале этапа Roll Defence Dice ухудши weapon rule Piercing x на 1 (Piercing 1 в этом случае игнорируется)."
      },
      {
        "id": "tesseract_cube",
        "name": "Tesseract Cube",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "В Ready step, когда получаешь CP, если дружественный CRYPTEK не incapacitated, не в control range врага и не был REANIMATED в этом turning point, брось один D6: на результате 1 отключи это правило до конца битвы; на результате 4+ получи 1CP. Как только суммарно получишь 2CP этим способом, отключи это правило до конца битвы."
      },
      {
        "id": "tesla_weave",
        "name": "Tesla Weave",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда вражеский оператор заканчивает действие Charge в пределах control range дружественных операторов, нанеси тому вражескому оператору D3+1 урона."
      }
    ],
    "Spectre Squad": [
      {
        "id": "sniper_overwatch",
        "name": "Sniper Overwatch",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point дружественный оператор SPECTRE SQUAD может использовать дальнобойное оружие Sniper overwatch: Atk4 Hit3+ Dmg3/3, wr Devastating 2, Heavy (Dash only), Saturate, Silent."
      },
      {
        "id": "tvid_feed_triangulation",
        "name": "Tvid-feed Triangulation",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор SPECTRE SQUAD выполняет Shoot и ты выбираешь допустимую цель, можно использовать это правило. Цель не может быть obscured, если она также допустимая цель для другого дружественного оператора SPECTRE SQUAD, либо в пределах 6\" от дружественного оператора VOX-RELAY BEACON."
      },
      {
        "id": "starshell_flare",
        "name": "Starshell Flare",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "STRATEGIC GAMBIT. Один дружественный оператор SPECTRE SQUAD может немедленно выполнить бесплатное действие Stun Grenade (universal equipment); это не считается в лимит действий (даже если ты также выбрал другие гранаты из снаряжения). Когда APL stat вражеского оператора изменяется в результате этого Strategic Gambit, нельзя использовать это снаряжение до конца битвы."
      },
      {
        "id": "advanced_camouflage_equip",
        "name": "Advanced Camouflage",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Дружественные операторы SPECTRE SQUAD (кроме VOX-RELAY BEACON) могут выполнить уникальное действие Advanced Camouflage (1AP): до начала следующей активации этого оператора, пока у него приказ Conceal и он в cover, его нельзя выбрать допустимой целью — это имеет приоритет над всеми остальными правилами (например, Seek, Vantage terrain), кроме случаев, когда вражеский оператор в пределах 2\" от него. Отметь этого оператора статус-токеном Advanced Camouflage. Нельзя выполнять это действие, будучи видимым вражескому оператору в пределах 3\" от него."
      }
    ],
    "XV26 Stealth Battlesuits": [
      {
        "id": "xv26_multitrackers",
        "name": "XV26 Multitrackers",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор XV26 STEALTH BATTLESUIT выполняет Shoot из burst cannon (sweeping), то оружие получает weapon rule Torrent 2\" до конца действия."
      },
      {
        "id": "counter_network_jammers",
        "name": "Counter-Network Jammers",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "STRATEGIC GAMBIT. Выбери один objective/mission marker. До конца turning point, при определении контроля того маркера, считай суммарный APL вражеских операторов, оспаривающих его, на 1 ниже, если хотя бы один из них в пределах 3\" от дружественных операторов XV26 STEALTH BATTLESUIT (это не изменение APL stat, суммируется с другими изменениями)."
      },
      {
        "id": "advanced_blacksun_filters",
        "name": "Advanced Blacksun Filters",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Каждый раз, когда дружественный оператор XV26 STEALTH BATTLESUIT стреляет по obscured оператору, не нужно отбрасывать один success за это правило; остальные эффекты obscured применяются как обычно."
      },
      {
        "id": "hardwired_target_locks",
        "name": "Hardwired Target Locks",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Каждый раз, когда ты хотел бы counteract-ить, можно сделать это дружественным оператором XV26 STEALTH BATTLESUIT с приказом Conceal, находящимся дальше 3\" от вражеских операторов, но перед counteraction он должен сменить приказ на Engage и может выполнить только действие Shoot во время этого counteraction."
      }
    ],
    "Blades of Khaine": [
      {
        "id": "rune_of_prophecy",
        "name": "Rune of Prophecy",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Когда это снаряжение раскрыто, брось один D3. В Strategy phase turning point, равного результату, получи 1 дополнительный CP."
      },
      {
        "id": "rune_of_shielding",
        "name": "Rune of Shielding",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Once per battle, когда кубик атаки наносит Normal Dmg дружественному оператору BLADES OF KHAINE, можно проигнорировать этот нанесённый урон."
      },
      {
        "id": "rune_of_foresight",
        "name": "Rune of Foresight",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Once per battle, после броска за инициативу (roll-off), можно прибавить D3 к своему результату или вычесть D3 из него."
      },
      {
        "id": "wraithbone_talisman",
        "name": "Wraithbone Talisman",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор BLADES OF KHAINE стреляет, дерётся или отвечает (retaliating), если ты выбросил два или более fail, можно отбросить один из них, чтобы удержать другой как normal success вместо этого."
      }
    ],
    "Battleclade": [
      {
        "id": "covert_guises",
        "name": "Covert Guises",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "STRATEGIC GAMBIT в первом turning point. Брось один D3. Число дружественных операторов BATTLECLADE, равное результату, полностью находящихся в пределах твоей drop zone, может немедленно выполнить бесплатное действие Reposition, но должно закончить движение полностью в пределах 3\" от твоей drop zone. Твой оператор TECHNOARCHEOLOGIST не может выполнить больше одного действия Reposition в Strategy phase первого turning point (то есть с учётом действия по правилу Seeker of Divine Arcana)."
      },
      {
        "id": "electromantic_capacitors",
        "name": "Electromantic Capacitors",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Оружие ближнего боя дружественных операторов BATTLECLADE получает weapon rule Shock. Каждый раз, когда дружественный оператор BATTLECLADE отвечает (retaliating), его оружие ближнего боя также получает weapon rule Severe."
      },
      {
        "id": "concealed_apparatus",
        "name": "Concealed Apparatus",
        "uses": 1,
        "usesLabel": "1× за битву",
        "desc": "Один раз за битву один оператор COMBAT SERVITOR или GUN SERVITOR может использовать другой вариант вооружения со своего датакарты, который не был выбран для этой битвы."
      },
      {
        "id": "neurocyclic_reserve_cells",
        "name": "Neurocyclic Reserve Cells",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Один раз за turning point, каждый раз когда ты выполняешь TRANSFER POWER, ты можешь использовать это правило. Если делаешь так, ты можешь выполнить TRANSFER POWER за 0AP (это имеет приоритет над обычными правилами Noospheric Network)."
      }
    ],
    "Novitiates": [
      {
        "id": "icon_of_faith",
        "name": "Icon of Faith",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Священные иконы Ecclesiarchy имеют огромное значение для Sisters, которые их несут, укрепляя их веру в самое сердце битвы.\n\nОдин раз за turning point ты можешь использовать до двух ACTS OF FAITH в одной последовательности (sequence), но каждый из них должен быть разным. Это имеет приоритет над обычными правилами ACTS OF FAITH."
      },
      {
        "id": "sanctified_rounds",
        "name": "Sanctified Rounds",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Освящённая кровью и слезами святых и благословлённая высшими иерархами клира, эта амуниция — анафема для нечестивых.\n\nКаждый раз, когда дружественный оператор NOVITIATE стреляет из autogun, autopistol, relic bolt pistol или relic boltgun, если ты тратишь Faith point, то оружие получает weapon rule Piercing Crits 1 до конца этой последовательности."
      },
      {
        "id": "auto_chastisers",
        "name": "Auto-Chastisers",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Эти орудия самобичевания причиняют благословенные страдания, разжигая пыл их носителя.\n\nОдин раз за turning point, когда дружественный оператор NOVITIATE стреляет, дерётся или отвечает (retaliating), на этапе Roll Attack Dice ты можешь нанести 1-3 урона тому дружественному оператору (но не выводя его из строя). Если ты это делаешь, ты можешь использовать один ACT OF FAITH бесплатно в этой последовательности со стоимостью Faith points не выше нанесённого этим правилом урона."
      },
      {
        "id": "holy_embrocations",
        "name": "Holy Embrocations",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Святые масла и бальзамы притупляют боль и обостряют разум, позволяя Novitiate игнорировать раны, которые иначе сковали бы её движения.\n\nТы можешь игнорировать любые изменения Move stat дружественных операторов NOVITIATE от полученных ранений."
      }
    ],
    "Kasrkin": [
      {
        "id": "foregrip",
        "name": "Foregrip",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Каждый раз, когда дружественный оператор KASRKIN стреляет по оператору в пределах 3\" от него, дальнобойное оружие на его датакарте (кроме оружия, в названии которого есть 'pistol' — например, hot-shot laspistol, все профили plasma pistol и т.д.) получает weapon rule Accurate 1."
      },
      {
        "id": "long_range_scope",
        "name": "Long-Range Scope",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Каждый раз, когда дружественный оператор KASRKIN стреляет по оператору дальше 6\" от него, hot-shot weapons того дружественного оператора получают weapon rule Saturate."
      },
      {
        "id": "relics_of_cadia",
        "name": "Relics of Cadia",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор KASRKIN стреляет, дерётся или отвечает (retaliating), если ты бросил два или более fails, можно сбросить один из них, чтобы удержать другой как normal success вместо этого."
      },
      {
        "id": "combat_daggers",
        "name": "Combat Daggers",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Дружественные операторы KASRKIN получают следующее оружие ближнего боя: Combat dagger — Atk3 Hit4+ Dmg3/4."
      }
    ],
    "Exodite Dragon Masters": [
      {
        "id": "dragonscale_mesh",
        "name": "Dragonscale Mesh",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда оператор стреляет по дружественному оператору EXODITE DRAGON MASTER MOUNTED, на шаге Roll Defence Dice можно удержать один normal success как critical success вместо этого."
      },
      {
        "id": "clan_talismans",
        "name": "Clan Talismans",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор EXODITE DRAGON MASTER MOUNTED стреляет, дерётся или отвечает (retaliating), если выпало два или более fail, можно отбросить один из них, чтобы удержать другой как normal success вместо этого."
      },
      {
        "id": "lileathan_crystal_matrices",
        "name": "Lileathan Crystal Matrices",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Once per turning point, когда дружественный оператор EXODITE DRAGON MASTER выполняет действие Shoot и ты выбираешь solar carbine или профиль его long rifle, можно использовать это правило. До конца той активации это оружие получает weapon rule Piercing 1."
      },
      {
        "id": "spirit_stones",
        "name": "Spirit Stones",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Каждый раз, когда дружественный оператор EXODITE DRAGON MASTER MOUNTED выведен из строя, получи 1CP."
      }
    ],
    "Scout Squad": [
      {
        "id": "camo_cloak",
        "name": "Camo Cloak",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Изготовленные из светопреломляющих материалов вроде cameleoline, camo cloaks помогают носителю сливаться с окружающей местностью. Каждый раз, когда оператор стреляет по дружественному оператору SCOUT SQUAD (кроме SNIPER), если можно удержать любые cover save, можно удержать один дополнительный cover save, либо удержать один cover save как critical success вместо этого. Не суммируется с улучшенными cover save от Vantage terrain."
      },
      {
        "id": "targeting_oculars",
        "name": "Targeting Oculars",
        "uses": 2,
        "usesLabel": "2× за turning point",
        "desc": "Высокочувствительные мультиспектральные прицельные визоры, повышающие точность и летальность оружия носителя. До двух раз за turning point, когда дружественный оператор SCOUT SQUAD выполняет действие Shoot и ты выбираешь допустимую цель, можно использовать это правило. Если используешь, до конца этого действия дальнобойное оружие того дружественного оператора получает weapon rules Lethal 5+ и Saturate."
      },
      {
        "id": "combat_blades",
        "name": "Combat Blades",
        "uses": null,
        "usesLabel": "Пассив",
        "desc": "Неофиты Space Marine владеют разнообразным короткоклинковым оружием и демонстрируют смертоносное мастерство в его применении. Дружественные операторы SCOUT SQUAD получают следующее оружие ближнего боя: Combat blade (Atk3 Hit3+ Dmg4/5). Обрати внимание, что у некоторых операторов уже есть это оружие с лучшими характеристиками; в этом случае используй более выгодный вариант."
      },
      {
        "id": "tactical_vox_link",
        "name": "Tactical Vox-Link",
        "uses": 1,
        "usesLabel": "1× за turning point",
        "desc": "Scout Sergeant поддерживает постоянную вокс-связь со своими подопечными, направляя их натиск с смертоносной точностью. Один раз за turning point можно использовать firefight ploy Astartes Training или Emboldened Aspirant за 0CP, если в killzone есть дружественный оператор SERGEANT."
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
          "text": "Во время активации каждого дружественного оператора PLAGUE MARINE он может выполнить либо два действия Shoot, либо два действия Fight. Если это два Shoot, то хотя бы для одного должны быть выбраны bolt pistol, boltgun или PSYCHIC оружие. Нельзя выбрать одно и то же PSYCHIC ranged-оружие более одного раза за активацию. Каждый дружественный оператор PLAGUE MARINE может выполнять counteract независимо от своего приказа."
        },
        {
          "name": "Poison",
          "text": "Некоторое оружие в правилах этой команды обладает правилом Poison. * Poison: на этапе Resolve Attack Dice, если ты наносишь урон любыми успехами, оператор, против которого используется это оружие (исключая дружественных операторов PLAGUE MARINE), получает один из твоих Poison tokens (если у него ещё нет). Когда оператор с одним из твоих Poison tokens активируется, нанеси ему 1 урон."
        },
        {
          "name": "Disgustingly Resilient",
          "text": "Когда кубик атаки наносит урон 3 или больше дружественному оператору PLAGUE MARINE, брось один D6: на 4+ вычти 1 из того нанесённого урона."
        }
      ],
      "statusTokens": [
        {
          "id": "poison",
          "name": "Poison",
          "target": "enemy",
          "text": "Некоторое оружие в правилах этой команды обладает правилом Poison. * Poison: на этапе Resolve Attack Dice, если ты наносишь урон любыми успехами, оператор, против которого используется это оружие (исключая дружественных операторов PLAGUE MARINE), получает один из твоих Poison tokens (если у него ещё нет). Когда оператор с одним из твоих Poison tokens активируется, нанеси ему 1 урон."
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
      ],
      "statusTokens": [
        {
          "id": "inspiring",
          "name": "INSPIRING",
          "target": "friendly",
          "text": "Когда дружественный оператор CELESTIAN INSIDIANT выводит из строя (incapacitate) вражеского оператора с характеристикой Wounds 6 или больше — этот дружественный оператор становится INSPIRING. Когда он выполняет действие Charge — перед перемещением он становится INSPIRING. Когда дружественный оператор CELESTIAN INSIDIANT является INSPIRING, оружие на его datacard получает правило Severe. (Faction rule Inspiration)"
        },
        {
          "id": "ardour",
          "name": "Ardour",
          "target": "friendly",
          "text": "BENEDICTION (Martyrdom). Когда INSPIRING оператор выведен из строя, другой оператор в пределах 6\" от него получает одно BENEDICTION. Ardour — до конца битвы +1 к APL того оператора (нельзя выбрать для SUPERIOR).",
          "statMod": {
            "stat": "apl",
            "delta": 1
          }
        },
        {
          "id": "wrath",
          "name": "Wrath",
          "target": "friendly",
          "text": "BENEDICTION (Martyrdom). Когда INSPIRING оператор выведен из строя, другой оператор в пределах 6\" от него получает одно BENEDICTION. Wrath — до конца битвы оружие на datacard того оператора получает правило Ceaseless."
        },
        {
          "id": "restoration",
          "name": "Restoration",
          "target": "friendly",
          "text": "BENEDICTION (Martyrdom). Когда INSPIRING оператор выведен из строя, другой оператор в пределах 6\" от него получает одно BENEDICTION. Restoration — тот оператор восстанавливает D3+2 потерянных wounds."
        },
        {
          "id": "exigence",
          "name": "Exigence",
          "target": "friendly",
          "text": "BENEDICTION (Martyrdom). Когда INSPIRING оператор выведен из строя, другой оператор в пределах 6\" от него получает одно BENEDICTION. Exigence — тот оператор может немедленно выполнить бесплатное действие Charge или Dash (для Charge — не более 3\"), но должен закончить это перемещение ближе к выведенному из строя INSPIRING оператору."
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
          "text": "Во время активации каждого дружественного оператора NEMESIS CLAW он может выполнить либо два действия Shoot, либо два действия Fight. Если это два Shoot, то хотя бы для одного из них должен быть выбран bolt pistol, boltgun или scoped bolt pistol. Каждый дружественный оператор NEMESIS CLAW может выполнять counteract независимо от своего приказа."
        },
        {
          "name": "In Midnight Clad",
          "text": "Когда вражеский оператор стреляет по дружественному оператору NEMESIS CLAW, тот дружественный оператор считается obscured, если верны оба условия: он более чем в 8\" от вражеских операторов, которым он виден; он в пределах 1\" от Heavy terrain, не ниже него, либо хотя бы часть его базы находится под Vantage terrain."
        }
      ],
      "statusTokens": []
    },
    "Hearthkyn Salvagers": {
      "archetypes": [
        "Recon",
        "Security"
      ],
      "required": [
        {
          "name": "Hearthkyn Theyn",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 9,
          "count": 1,
          "portrait": "img/portraits/hearthkyn-salvagers/theyn.png",
          "weapons": [
            {
              "name": "Autoch-pattern bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Accurate 1"
            },
            {
              "name": "Autoch-pattern bolter",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Accurate 1"
            },
            {
              "name": "Bolt revolver",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Range 8\""
            },
            {
              "name": "EtaCarn plasma pistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/5",
              "wr": "Range 8\", Piercing 1"
            },
            {
              "name": "Ion blaster",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Ion pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Piercing Crits 1"
            },
            {
              "name": "Concussion gauntlet",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/7",
              "wr": "Brutal, Shock"
            },
            {
              "name": "Plasma weapon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Eye of the Ancestors",
              "text": "Выбери одного вражеского оператора, или до двух вражеских операторов, если три или более дружественных операторов HEARTHKYN SALVAGER выведены из строя (incapacitated). Каждый из этих вражеских операторов получает один из твоих Grudge tokens.",
              "cost": "Strategic Gambit"
            },
            {
              "name": "Weavefield Crest",
              "text": "Один раз за битву, когда кубик атаки наносит Normal Dmg этому оператору, можешь проигнорировать этот урон."
            }
          ]
        }
      ],
      "pool": [
        {
          "name": "Hearthkyn Dôzr",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/dozr.png",
          "weapons": [
            {
              "name": "Autoch-pattern bolt pistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 8\", Accurate 1"
            },
            {
              "name": "Concussion knux",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Ceaseless, Lethal 5+, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Brawler",
              "text": "Когда этот оператор дерётся или отвечает (retaliating), вражеские операторы не могут assist. Если он выведен из строя (incapacitated), можешь ударить одного вражеского оператора в этой последовательности одним из своих неиспользованных successes до того, как он будет убран из killzone. Normal Dmg 4 или больше наносит ему на 1 меньше урона."
            },
            {
              "name": "Knux Smash",
              "text": "Выбери одного вражеского оператора в пределах control range этого оператора — можешь переместить его до 3\" в место, где он может быть размещён. Затем нанеси ему D3+1 урона (даже если не перемещаешь); если результат D3 равен 3, вычти 1 из APL этого вражеского оператора до конца действия. После этого оператор может немедленно выполнить бесплатное действие Charge (даже если уже выполнял Charge в эту активацию), но не может переместиться больше чем на 3\" в этом действии. Нельзя выполнять это действие, если враг не в пределах control range этого оператора.",
              "cost": "1AP"
            }
          ]
        },
        {
          "name": "Hearthkyn Field Medic",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/field_medic.png",
          "weapons": [
            {
              "name": "Bolt revolver",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/5",
              "wr": "Range 8\""
            },
            {
              "name": "Plasma knife",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/5",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Medic!",
              "text": "Первый раз за каждый turning point, когда другой дружественный оператор HEARTHKYN SALVAGER должен быть выведен из строя (incapacitated), будучи видимым и в пределах 3\" от этого оператора, можешь применить это правило — если применяешь, тот дружественный оператор не выводится из строя, у него остаётся 1 wound и до конца действия его нельзя вывести из строя. После этого дружественный оператор должен немедленно выполнить бесплатное действие Dash, но обязан закончить перемещение в пределах control range этого оператора. Вычти 1 из APL обоих операторов до конца их следующих активаций; если правило применено во время активации того дружественного оператора, эта активация заканчивается. Нельзя применять это правило, если этот оператор выведен из строя, либо если это действие Shoot и этот оператор был бы основной или вторичной целью."
            },
            {
              "name": "Medikit",
              "text": "Выбери одного дружественного оператора HEARTHKYN SALVAGER в пределах control range этого оператора — он восстанавливает до 2D3 потерянных wounds. Не может быть оператором, на котором в этот turning point уже применялось правило Medic!. Нельзя выполнять это действие в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ]
        },
        {
          "name": "Hearthkyn Grenadier",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/grenadier.png",
          "weapons": [
            {
              "name": "Autoch-pattern bolt pistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 8\", Accurate 1"
            },
            {
              "name": "C8 HX charge",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Range 4\", Blast 1\", Heavy (Reposition only), Limited 1, Piercing 1, Saturate"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Grenadier",
              "text": "Этот оператор может использовать frag, krak и stun grenades (см. universal equipment). Это не учитывается в лимите использований, даже если ты также выбрал эти гранаты для других операторов. Когда этот оператор использует frag или krak grenade, улучши его Hit на 1."
            },
            {
              "name": "Vayr-3 Utility Grenade",
              "text": "Размести один свой маркер Utility Grenade в пределах 6\" от этого оператора — он должен быть видим этому оператору, либо находиться на Vantage terrain, видимой этому оператору. Пока вражеский оператор в пределах 3\" от этого маркера, его контролирующий игрок должен потратить дополнительный 1 AP, чтобы этот оператор выполнил действие Pick Up Marker или миссийное действие. В шаге Ready следующей фазы Strategy брось D3 — убери маркер после того как пройдёт столько активаций, либо в конце turning point (что наступит раньше). Нельзя выполнять это действие в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ]
        },
        {
          "name": "Hearthkyn Gunner",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/gunner.png",
          "weapons": [
            {
              "name": "EtaCarn plasma beamer",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/6",
              "wr": "Piercing 1, Beam*"
            },
            {
              "name": "HYLas auto rifle",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Ceaseless, Rending"
            },
            {
              "name": "HYLas rotary cannon (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Ceaseless, Heavy (Reposition only), Saturate"
            },
            {
              "name": "HYLas rotary cannon (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Ceaseless, Saturate, Torrent 1\""
            },
            {
              "name": "L7 missile launcher (blast)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/5",
              "wr": "Blast 2\""
            },
            {
              "name": "L7 missile launcher (focused)",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/6",
              "wr": "Piercing 1"
            },
            {
              "name": "Magna rail rifle",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/2",
              "wr": "Devastating 3, Heavy (Dash only), Piercing 2"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Beam",
              "text": "Когда этот оператор стреляет этим оружием, каждый сохранённый critical success немедленно наносит D3 урона каждому другому оператору вдоль одной (и только одной) линии луча (бросай отдельно за каждого), но исходная цель не затрагивается. Оператор считается на линии луча, если targeting line можно провести от этого оператора к его базе так, что она пересекает базу исходной цели, но не пересекает Heavy terrain."
            }
          ]
        },
        {
          "name": "Hearthkyn Jump Pack Warrior",
          "apl": 2,
          "move": "8\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/jump_pack_warrior.png",
          "weapons": [
            {
              "name": "Autoch-pattern bolt pistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 8\", Accurate 1"
            },
            {
              "name": "Plasma weapon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+, Force Impact*"
            }
          ],
          "abilities": [
            {
              "name": "Jump Pack",
              "text": "Когда этот оператор выполняет действие с перемещением, он может FLY. Если так, он не двигается пешком — вместо этого убери его с исходного места и размести в пределах дистанции, равной его Move (или 3\", если это было действие Dash), по горизонтали. Обрати внимание, что он не получает дополнительной дистанции при действии Charge. Он должен быть размещён там, где это разрешено правилами, и, если это не Charge, не может быть размещён в пределах control range вражеского оператора."
            },
            {
              "name": "* Force Impact",
              "text": "Когда этот оператор дерётся этим оружием, если в эту активацию было выполнено действие Charge, оружие получает правило Brutal."
            }
          ]
        },
        {
          "name": "Hearthkyn Kinlynk",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/kinlynk.png",
          "weapons": [
            {
              "name": "Autoch-pattern bolter",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Accurate 1"
            },
            {
              "name": "Ion blaster",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Signal",
              "text": "Выбери другого дружественного оператора HEARTHKYN SALVAGER в killzone. До конца его следующей активации добавь 1 к его APL. Нельзя выполнять это действие в пределах control range вражеского оператора.",
              "cost": "1AP",
              "tag": "SUPPORT"
            },
            {
              "name": "System Jam",
              "text": "Выбери вражеского оператора, являющегося допустимой целью для этого оператора и не имеющего одного из твоих токенов System Jam, — он получает такой токен. До конца битвы вражеский оператор с этим токеном не может активироваться, пока не активируются все вражеские операторы без токена. Когда такой оператор активируется, убери с него токен. Нельзя выполнять это действие в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ]
        },
        {
          "name": "Hearthkyn Kognitâar",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/kognitaar.png",
          "weapons": [
            {
              "name": "Autoch-pattern bolter",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Accurate 1"
            },
            {
              "name": "Ion blaster",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Tactician",
              "text": "Размести либо свой маркер Attack, либо маркер Defence в killzone. Когда дружественный оператор HEARTHKYN SALVAGER стреляет, дерётся или отвечает (retaliating) против вражеского оператора в пределах 3\" от твоего маркера Attack, его оружие получает правило Balanced. Когда враг стреляет по дружественному оператору HEARTHKYN SALVAGER в пределах 3\" от твоего маркера Defence, можешь перебросить один свой кубик защиты. В шаге Ready следующей фазы Strategy убери этот маркер.",
              "cost": "Strategic Gambit"
            },
            {
              "name": "Accelerated Appraisal",
              "text": "Если твой маркер Attack или Defence в killzone, убери его. Размести маркер Attack или Defence в killzone. Нельзя выполнять это действие в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ]
        },
        {
          "name": "Hearthkyn Lokâtr",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/lokatr.png",
          "weapons": [
            {
              "name": "Autoch-pattern bolter",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Accurate 1"
            },
            {
              "name": "Ion blaster",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Spot",
              "text": "Выбери вражеского оператора, видимого этому оператору. До конца turning point, когда дружественный оператор HEARTHKYN SALVAGER в пределах 3\" от этого оператора, можешь применить эффект: его дальнобойное оружие получает правило Seek Light; этот вражеский оператор не может быть obscured. Нельзя выполнять это действие в пределах control range вражеского оператора.",
              "cost": "1AP",
              "tag": "SUPPORT"
            },
            {
              "name": "Pan Spectral Scan",
              "text": "Размести свой маркер Pan Spectral Scan в killzone. Когда дружественный оператор HEARTHKYN SALVAGER стреляет по врагу в пределах 3\" от этого маркера, его дальнобойное оружие получает правила Accurate 1 и Saturate. Убери маркер, когда этот оператор активируется снова и не выполняет это действие (что наступит раньше). Нельзя выполнять это действие в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ]
        },
        {
          "name": "Hearthkyn Lugger",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/lugger.png",
          "weapons": [
            {
              "name": "Autoch-pattern bolter",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Accurate 1"
            },
            {
              "name": "Ion blaster",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Well Supplied",
              "text": "Можешь выбрать один дополнительный вариант снаряжения, а в шаге Ready первой фазы Strategy получаешь 1 дополнительный CP."
            },
            {
              "name": "I've Got It",
              "text": "Один раз за каждую активацию этого оператора он может выполнить миссийное действие за 1 AP меньше."
            }
          ]
        },
        {
          "name": "Hearthkyn Warrior",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 8,
          "portrait": "img/portraits/hearthkyn-salvagers/warrior.png",
          "weapons": [
            {
              "name": "Autoch-pattern bolter",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Accurate 1"
            },
            {
              "name": "Ion blaster",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Secure Salvage",
              "text": "Когда враг стреляет, дерётся или отвечает (retaliating) против этого оператора, если этот оператор контестит маркер цели или один из твоих mission-маркеров, в шаге Resolve Attack Dice можешь вычесть 1 урон у одного success из нанесённого им урона."
            }
          ]
        }
      ],
      "poolPick": 9,
      "equipment": "Hearthkyn Salvagers",
      "lore": {
        "intro": "Высоко искусные воины и исследователи разбитых кораблей и заброшенных космических станций, Hearthkyn Salvagers получают задание находить ценные материалы и помечать их для последующей эвакуации. Тяжело вооружённые и предельно решительные, отряды Hearthkyn Salvager захватывают и обороняют такие находки со стойкой решимостью, типичной для Kin.",
        "operatives": [
          {
            "name": "Hearthkyn Theyn",
            "text": "Те Hearthkyn Salvagers, что проявляют особые способности к лидерству, назначаются своими начальниками или товарищами на звание Theyn. Командуя собственным отрядом, Theyns — высокоопытные исследователи разбитых кораблей с бесчисленными абордажными операциями на счету."
          },
          {
            "name": "Hearthkyn Field Medic",
            "text": "Эти Hearthkyn Salvagers проходят изнурительную подготовку по оказанию первой помощи под огнём, а также ограниченное инженерное обучение, позволяющее им заботиться о повреждённых Ironkin. В абордажной операции их навыки жизненно важны, поскольку их отряд будет далеко от полноценного медицинского центра Kin."
          },
          {
            "name": "Hearthkyn Dôzr",
            "text": "Тонкость и нюансы — это концепции, на которые у этих крепких Kin мало времени. Они способны выломать запечатанные люки или даже сплошные стены своим концуссионным knux, пробивая путь своим соратникам. В бою их оружие ещё более разрушительно для незадачливых врагов."
          },
          {
            "name": "Hearthkyn Grenadier",
            "text": "Вооружённые бандольерами гранат и взрывчатки, Grenadiers выполняют жизненно важную функцию для отрядов Hearthkyn Salvager. Они могут расчистить коридор от врагов в мгновение ока, взорвать запертые двери и оказать тактическую поддержку своим Kin в разгаре перестрелки."
          },
          {
            "name": "Hearthkyn Gunner",
            "text": "Поскольку в обломках часто обитают всевозможные твари, монстры и враги, Hearthkyn Salvagers имеют доступ к широкому спектру специального и тяжёлого оружия. Gunners выбирают инструменты, наилучшим образом подходящие для задачи, и их шквал тяжёлого огня спас многие отряды."
          },
          {
            "name": "Hearthkyn Jump Pack Warrior",
            "text": "Hearthkyn Salvagers приходится преодолевать бесчисленные препятствия на своих миссиях. Те, кто использует реактивные ранцы, способны легко преодолевать труднопроходимую местность, а в бою могут использовать мощь своего снаряжения, чтобы усилить удар своего charge."
          },
          {
            "name": "Hearthkyn Kinlynk",
            "text": "Эмпирейные энергии, обшивка корпуса корабля и толстая порода — всё это способно помешать связи отряда, и Kinlynks вынуждены неустанно трудиться, чтобы обеспечить связь всем своим Kin. Они спокойно передают тактическую информацию в разгаре боя и даже способны нарушить связь врага."
          },
          {
            "name": "Hearthkyn Kognitâar",
            "text": "Эти Ironkin обладают чрезвычайно сложным искусственным интеллектом и используют эту огромную вычислительную мощь для поддержки своего отряда. Постоянно получая, организуя и анализируя данные, Kognitâar предоставляют своим Kin невероятную тактическую информацию в реальном времени, когда бы она ни понадобилась."
          },
          {
            "name": "Hearthkyn Lokâtr",
            "text": "Когда опасность подстерегает за каждым углом, в каждой вентиляционной шахте и даже внутри стен обломков, панспектральные сканеры Lokâtrs жизненно важны для того, чтобы Kin могли предвидеть угрозы и реагировать наиболее эффективным способом."
          },
          {
            "name": "Hearthkyn Lugger",
            "text": "В обломках, куда трудно доставить технику, эти стойкие Kin несут огромные грузы необходимого снаряжения и припасов, не жалуясь. Вкладывая всю свою силу в общее дело, они высоко ценятся своими Kin."
          },
          {
            "name": "Hearthkyn Warrior",
            "text": "Hearthkyn Warriors — крепкие, закалённые бойцы, гордящиеся своей ролью в опасных абордажных операциях. Warriors оказывают жизненно важную поддержку специалистам своего отряда, отстреливая врагов, пока их товарищи выполняют важные для миссии действия."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Grudge",
          "text": "Когда вражеский оператор выводит из строя (incapacitate) дружественного оператора HEARTHKYN SALVAGER, тот вражеский оператор получает один из твоих токенов Grudge на всю битву. Когда дружественный оператор HEARTHKYN SALVAGER стреляет, дерётся или отвечает (retaliating) против вражеского оператора, за каждый токен Grudge у этого врага можно сохранить один свой обычный success как critical success (включая обычные successes, уже сохранённые за счёт правила Accurate). Токены Grudge при этом не убираются."
        }
      ],
      "statusTokens": [
        {
          "id": "grudge",
          "name": "Grudge",
          "target": "enemy",
          "text": "Когда вражеский оператор выводит из строя (incapacitate) дружественного оператора HEARTHKYN SALVAGER, тот вражеский оператор получает один из твоих токенов Grudge на всю битву. Когда дружественный оператор HEARTHKYN SALVAGER стреляет, дерётся или отвечает (retaliating) против вражеского оператора, за каждый токен Grudge у этого врага можно сохранить один свой обычный success как critical success (включая обычные successes, уже сохранённые за счёт правила Accurate). Токены Grudge при этом не убираются."
        }
      ]
    },
    "Angels of Death": {
      "archetypes": [
        "Security",
        "Seek & Destroy"
      ],
      "required": [],
      "pool": [
        {
          "name": "Space Marine Captain",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 15,
          "portrait": "img/portraits/angels-of-death/space_marine_captain.png",
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
              "name": "Power fist",
              "atk": 5,
              "hit": "3+",
              "dmg": "5/7",
              "wr": "Brutal"
            }
          ],
          "abilities": [
            {
              "name": "Heroic Leader",
              "text": "Один раз за turning point можешь сделать одно из следующего: использовать firefight ploy за 0CP, если это именно этот оператор ANGEL OF DEATH (кроме Command Re-roll); использовать strategy ploy Combat Doctrine при активации дружественного оператора ANGEL OF DEATH, если этот оператор находится в killzone и вне control range вражеских операторов (оплачивая его CP как обычно) — нельзя, если этот ploy уже использовался в этот turning point; использовать firefight ploy Adjust Doctrine за 0CP, если этот оператор находится в killzone и вне control range вражеских операторов."
            },
            {
              "name": "Iron Halo",
              "text": "Один раз за битву, когда кубик атаки наносит Normal Dmg этому оператору, можно проигнорировать этот нанесённый урон."
            }
          ]
        },
        {
          "name": "Assault Intercessor Sergeant",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 15,
          "portrait": "img/portraits/angels-of-death/assault_intercessor_sergeant.png",
          "weapons": [
            {
              "name": "Hand flamer",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 6\", Saturate, Torrent 1\""
            },
            {
              "name": "Heavy bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Piercing Crits 1"
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
              "name": "Chainsword",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Power fist",
              "atk": 5,
              "hit": "4+",
              "dmg": "5/7",
              "wr": "Brutal"
            },
            {
              "name": "Power weapon",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            },
            {
              "name": "Thunder hammer",
              "atk": 5,
              "hit": "4+",
              "dmg": "5/6",
              "wr": "Shock, Stun"
            }
          ],
          "abilities": [
            {
              "name": "Doctrine Warfare",
              "text": "Можно делать каждое из следующего один раз за битву: когда ты используешь strategy ploy Combat Doctrine и выбираешь Assault, если этот оператор находится в killzone, это стоит 0CP; когда ты используешь strategy ploy Combat Doctrine и выбираешь Tactical, если этот оператор находится в killzone, это стоит 0CP."
            },
            {
              "name": "Chapter Veteran",
              "text": "В конце Select Operatives step, если этот оператор выбран для развёртывания, выбери один дополнительный CHAPTER TACTIC для него на эту битву. В отличие от primary и secondary CHAPTER TACTICS, для него не обязательно выбирать тот же самый в каждой битве кампании или турнира."
            }
          ]
        },
        {
          "name": "Intercessor Sergeant",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 15,
          "portrait": "img/portraits/angels-of-death/intercessor_sergeant.png",
          "weapons": [
            {
              "name": "Auto bolt rifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Torrent 1\""
            },
            {
              "name": "Bolt rifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Stalker bolt rifle (heavy)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Heavy (Dash only), Lethal 5+, Piercing Crits 1"
            },
            {
              "name": "Stalker bolt rifle (mobile)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Chainsword",
              "atk": 4,
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
            },
            {
              "name": "Power fist",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/7",
              "wr": "Brutal"
            },
            {
              "name": "Power weapon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            },
            {
              "name": "Thunder hammer",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/6",
              "wr": "Shock, Stun"
            }
          ],
          "abilities": [
            {
              "name": "Doctrine Warfare",
              "text": "Можно делать каждое из следующего один раз за битву: когда ты используешь strategy ploy Combat Doctrine и выбираешь Devastator, если этот оператор находится в killzone, это стоит 0CP; когда ты используешь strategy ploy Combat Doctrine и выбираешь Tactical, если этот оператор находится в killzone, это стоит 0CP."
            },
            {
              "name": "Chapter Veteran",
              "text": "В конце Select Operatives step, если этот оператор выбран для развёртывания, выбери один дополнительный CHAPTER TACTIC для него на эту битву. В отличие от primary и secondary CHAPTER TACTICS, для него не обязательно выбирать тот же самый в каждой битве кампании или турнира."
            }
          ]
        },
        {
          "name": "Assault Intercessor Grenadier",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/angels-of-death/assault_inercessor_grenadier.png",
          "weapons": [
            {
              "name": "Heavy bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Piercing Crits 1"
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
              "name": "Grenadier",
              "text": "Этот оператор может использовать frag и krak grenades (см. universal equipment). Их использование не расходует лимит применений, если ты также выбрал эти гранаты из equipment для других операторов. Когда он их использует, улучшай Hit stat этого оружия на 1."
            }
          ]
        },
        {
          "name": "Assault Intercessor Warrior",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "maxCopies": 5,
          "portrait": "img/portraits/angels-of-death/assault_intercessor_warrior.png",
          "weapons": [
            {
              "name": "Heavy bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Piercing Crits 1"
            },
            {
              "name": "Chainsword",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": []
        },
        {
          "name": "Heavy Intercessor Gunner",
          "apl": 3,
          "move": "5\"",
          "save": "3+",
          "wounds": 18,
          "portrait": "img/portraits/angels-of-death/heavy_intercessor_gunner.png",
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
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Heavy bolter (sweeping)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Piercing Crits 1, Torrent 1\""
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
          "name": "Intercessor Gunner",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "portrait": "img/portraits/angels-of-death/intercessor_gunner.png",
          "weapons": [
            {
              "name": "Auto bolt rifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Torrent 1\""
            },
            {
              "name": "Auxiliary grenade launcher (frag)",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/4",
              "wr": "Blast 2\""
            },
            {
              "name": "Auxiliary grenade launcher (krak)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Piercing 1"
            },
            {
              "name": "Bolt rifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Stalker bolt rifle (heavy)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Heavy (Dash only), Lethal 5+, Piercing Crits 1"
            },
            {
              "name": "Stalker bolt rifle (mobile)",
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
          "abilities": []
        },
        {
          "name": "Intercessor Warrior",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "maxCopies": 5,
          "portrait": "img/portraits/angels-of-death/intercessor_warrior.png",
          "weapons": [
            {
              "name": "Auto bolt rifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Torrent 1\""
            },
            {
              "name": "Bolt rifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Stalker bolt rifle (heavy)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Heavy (Dash only), Lethal 5+, Piercing Crits 1"
            },
            {
              "name": "Stalker bolt rifle (mobile)",
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
          "abilities": []
        },
        {
          "name": "Eliminator Sniper",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 12,
          "portrait": "img/portraits/angels-of-death/eliminator_sniper.png",
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Bolt sniper rifle (executioner)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/4",
              "wr": "Heavy (Dash only), Saturate, Seek Light, Silent"
            },
            {
              "name": "Bolt sniper rifle (hyperfrag)",
              "atk": 4,
              "hit": "2+",
              "dmg": "2/4",
              "wr": "Blast 1\", Heavy (Dash only), Silent"
            },
            {
              "name": "Bolt sniper rifle (mortis)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Devastating 3, Heavy (Dash only), Piercing 1, Silent"
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
              "name": "Camo Cloak",
              "text": "Когда оператор стреляет по этому оператору, игнорируй weapon rule Saturate. Этот оператор имеет CHAPTER TACTIC Stealthy. Если ты выбрал этот CHAPTER TACTIC, можешь применить оба его варианта (то есть удержать два cover save — один normal и один critical success)."
            },
            {
              "name": "Optics",
              "text": "До начала следующей активации этого оператора, когда он стреляет, вражеские операторы не могут быть obscured. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ]
        }
      ],
      "poolPick": 6,
      "equipment": "Angels of Death",
      "lore": {
        "intro": "Генетически модифицированные трансчеловеческие воины, Space Marines — одни из самых элитных боевых сил Человечества. Отряды Angels of Death составлены из элитных специалистов, обученных бесчисленным формам боя и способных одолеть практически любого врага.",
        "operatives": [
          {
            "name": "Space Marine Captain",
            "text": "Чтобы достичь звания Captain, Space Marine должен в совершенстве овладеть войной. Они одинаково искусны как в проведении военных кампаний планетарного масштаба, так и в поединках с отдельными врагами."
          },
          {
            "name": "Assault Intercessor Sergeant",
            "text": "Эти командиры миссии знают оптимальный момент для начала атаки. Они — образцовые бойцы ближнего боя, рассекающие врагов своим смертоносным оружием."
          },
          {
            "name": "Intercessor Sergeant",
            "text": "Intercessor Sergeants ведут свои отряды, обрушивая шквалы огня на цели в постоянно меняющихся killzone. Они часто берут в бой специализированное оружие для поддержки своих братьев по оружию."
          },
          {
            "name": "Assault Intercessor Grenadier",
            "text": "Вооружённые набором смертоносных гранат, эти специалисты обеспечивают поддержку ближнего боя против роёв слабых противников или тяжело бронированных целей."
          },
          {
            "name": "Assault Intercessor Warrior",
            "text": "Защищённые доспехами Mk X Tacticus, Assault Intercessor Warriors врываются в бой с крупными chainsword наперевес, ведя огонь из пистолетов зарядами mass-reactive."
          },
          {
            "name": "Intercessor Gunner",
            "text": "Эти специалисты обеспечивают дальнюю поддерживающую стрельбу из подствольного auxiliary grenade launcher своей винтовки. Они способны доставлять взрывные заряды, наносящие максимальные разрушения самым укреплённым или защищённым позициям."
          },
          {
            "name": "Intercessor Warrior",
            "text": "Intercessor Warriors ведут сокрушительные залпы огня из своих bolt rifle. Их тактика и снаряжение адаптируются к бесчисленным ситуациям, что делает их основой любого Intercession Squad."
          },
          {
            "name": "Eliminator Sniper",
            "text": "Eliminators владеют специализированными снайперскими винтовками с боеприпасами на любого врага — от тяжёлых бронебойных Mortis-патронов до осколочных зарядов, опустошающих скопления целей."
          },
          {
            "name": "Heavy Intercessor Gunner",
            "text": "Heavy Intercessors подобны ходячим огневым точкам. Их heavy bolter позволяют им сокрушать врагов губительными шквалами взрывного огня — как сметающими массы пехоты, так и сфокусированными залпами."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Astartes",
          "text": "Во время активации каждого дружественного оператора ANGEL OF DEATH он может выполнить либо два действия Shoot, либо два действия Fight. Если это два Shoot, то хотя бы для одного из них должно быть выбрано bolt-оружие, а если это bolt sniper rifle или heavy bolter, то на второе действие тем же оружием нужно потратить 1 дополнительный AP. Каждый дружественный оператор ANGEL OF DEATH может выполнять counteract независимо от своего order."
        },
        {
          "name": "Chapter Tactics",
          "text": "При выборе kill team выбери primary и secondary CHAPTER TACTIC, которые получат дружественные операторы ANGEL OF DEATH на битву. Несколько экземпляров одного и того же CHAPTER TACTIC не суммируются.\n\n1. AGGRESSIVE: оружие ближнего боя этого оператора получает weapon rule Rending.\n2. DUELLER: когда этот оператор дерётся или отвечает (retaliating), каждый его normal success может заблокировать один неразрешённый critical success (если оружие вражеского оператора не имеет weapon rule Brutal).\n3. RESOLUTE: можно игнорировать любые изменения APL stat этого оператора, и на него не действует weapon rule Shock вражеских операторов.\n4. STEALTHY: когда оператор стреляет по этому оператору, если можно удержать любые cover save, можно удержать один дополнительный cover save, либо удержать один cover save как critical success. Не суммируется с улучшенными cover save от Vantage terrain.\n5. MOBILE: этот оператор может выполнить действие Fall Back за 1 AP меньше; этот оператор может выполнить действие Charge, находясь в пределах control range вражеского оператора, и может покинуть его control range для этого (но затем действуют обычные требования для этого движения).\n6. HARDY: когда оператор стреляет по этому оператору, результаты defence dice 5+ являются critical success. Когда этот оператор отвечает (retaliating), первый раз, когда кубик атаки наносит Normal Dmg 3 или больше этому оператору в этой последовательности, этот кубик наносит на 1 урона меньше.\n7. SHARPSHOOTER: когда этот оператор стреляет во время активации, в которой он не выполнял действие Charge, Fall Back или Reposition, его bolt-оружие получает weapon rules Accurate 1 и Severe.\n8. SIEGE SPECIALIST: ranged-оружие этого оператора получает weapon rule Saturate. Когда этот оператор дерётся или отвечает (retaliating), вражеские операторы не могут assist."
        },
        {
          "name": "Combat Doctrine",
          "text": "Выбери один COMBAT DOCTRINE из представленных ниже. Когда дружественный оператор ANGEL OF DEATH делает X, его оружие получает weapon rule Balanced, где X — выбранный тобой COMBAT DOCTRINE.\n\n- Devastator Doctrine: стреляет по оператору дальше чем 6\" от него.\n- Tactical Doctrine: стреляет по оператору в пределах 6\" от него.\n- Assault Doctrine: дерётся или отвечает (retaliating).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "And They Shall Know No Fear",
          "text": "Можно игнорировать любые изменения статов дружественных операторов ANGEL OF DEATH, вызванные ранениями (включая статы их оружия).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Adaptive Tactics",
          "text": "Смени свой secondary CHAPTER TACTIC. Этот ploy действует только до конца turning point, после чего возвращается исходный secondary CHAPTER TACTIC.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Indomitus",
          "text": "Когда оператор стреляет по дружественному оператору ANGEL OF DEATH, если ты выбросил два или более fail, можно отбросить один из них, чтобы удержать другой как normal success.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Adjust Doctrine",
          "text": "Используй во время активации дружественного оператора ANGEL OF DEATH, до или после выполнения им действия. Если в этот turning point ты уже использовал strategy ploy Combat Doctrine, смени выбранный COMBAT DOCTRINE.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Transhuman Physiology",
          "text": "Используй, когда оператор стреляет по дружественному оператору ANGEL OF DEATH, на этапе Roll Defence Dice. Можно удержать один из своих normal success как critical success.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Shock Assault",
          "text": "Используй, когда дружественный оператор ANGEL OF DEATH выполняет действие Fight во время активации, в которой он выполнял действие Charge, в начале этапа Resolve Attack Dice. До конца этого действия: его оружие ближнего боя получает weapon rule Shock; первый раз, когда ты наносишь удар в этой последовательности, нанеси на 1 урона больше (максимум до 7).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Wrath of Vengeance",
          "text": "Используй, когда дружественный оператор ANGEL OF DEATH выполняет counteract. Он может выполнить дополнительное 1AP действие бесплатно во время этого counteract, но оба действия должны быть разными.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [],
      "factionChoices": [
        {
          "id": "chapter_tactics",
          "label": "Chapter Tactics",
          "scope": "setup",
          "pick": 2,
          "pickLabels": [
            "Primary",
            "Secondary"
          ],
          "options": [
            {
              "id": "aggressive",
              "name": "Aggressive",
              "text": "Оружие ближнего боя этого оператора получает weapon rule Rending."
            },
            {
              "id": "dueller",
              "name": "Dueller",
              "text": "Когда этот оператор дерётся или отвечает (retaliating), каждый его normal success может заблокировать один неразрешённый critical success (если оружие вражеского оператора не имеет weapon rule Brutal)."
            },
            {
              "id": "resolute",
              "name": "Resolute",
              "text": "Можно игнорировать любые изменения APL stat этого оператора, и на него не действует weapon rule Shock вражеских операторов."
            },
            {
              "id": "stealthy",
              "name": "Stealthy",
              "text": "Когда оператор стреляет по этому оператору, если можно удержать любые cover save, можно удержать один дополнительный cover save, либо удержать один cover save как critical success. Не суммируется с улучшенными cover save от Vantage terrain."
            },
            {
              "id": "mobile",
              "name": "Mobile",
              "text": "Этот оператор может выполнить действие Fall Back за 1 AP меньше; может выполнить действие Charge в пределах control range вражеского оператора и покинуть его control range для этого."
            },
            {
              "id": "hardy",
              "name": "Hardy",
              "text": "Когда оператор стреляет по этому оператору, результаты defence dice 5+ — critical success. Когда этот оператор отвечает (retaliating), первый кубик атаки с Normal Dmg 3+ в этой последовательности наносит на 1 урона меньше."
            },
            {
              "id": "sharpshooter",
              "name": "Sharpshooter",
              "text": "Когда этот оператор стреляет во время активации, в которой не выполнял Charge, Fall Back или Reposition, его bolt-оружие получает weapon rules Accurate 1 и Severe."
            },
            {
              "id": "siege_specialist",
              "name": "Siege Specialist",
              "text": "Ranged-оружие этого оператора получает weapon rule Saturate. Когда этот оператор дерётся или отвечает (retaliating), вражеские операторы не могут assist."
            }
          ]
        },
        {
          "id": "combat_doctrine",
          "label": "Combat Doctrine",
          "scope": "game",
          "pick": 1,
          "options": [
            {
              "id": "devastator",
              "name": "Devastator",
              "text": "Стреляет по оператору дальше чем 6\" от него — оружие получает weapon rule Balanced."
            },
            {
              "id": "tactical",
              "name": "Tactical",
              "text": "Стреляет по оператору в пределах 6\" от него — оружие получает weapon rule Balanced."
            },
            {
              "id": "assault",
              "name": "Assault",
              "text": "Дерётся или отвечает (retaliating) — оружие получает weapon rule Balanced."
            }
          ]
        }
      ]
    },
    "Exaction Squad": {
      "archetypes": [
        "Security",
        "Seek & Destroy"
      ],
      "required": [
        {
          "name": "Arbites Proctor-Exactant",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Combat shotgun (close range)",
              "atk": 4,
              "hit": "2+",
              "dmg": "4/4",
              "wr": "Range 6\""
            },
            {
              "name": "Combat shotgun (long range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/2",
              "wr": "-"
            },
            {
              "name": "Shotpistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Range 8\""
            },
            {
              "name": "Dominator maul & assault shield",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Lethal 5+, Shock, Repress*"
            },
            {
              "name": "Repression baton",
              "atk": 3,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Assault Shield",
              "text": "Если у этого оператора есть dominator maul & assault shield, у него Save stat 3+."
            },
            {
              "name": "Nuncio-aquila",
              "text": "Когда вражеский оператор находится в пределах 3\" от твоего маркера Nuncio-aquila (или от этого оператора, если маркер Nuncio-aquila не в killzone), противник должен потратить 1 дополнительный AP, чтобы этот вражеский оператор выполнил действие Pick Up Marker или mission-действие. При определении контроля над маркером считай суммарный APL stat вражеских операторов, оспаривающих его, на 1 ниже, если хотя бы один из этих вражеских операторов находится в пределах 3\" от твоего маркера Nuncio-aquila (или от этого оператора, если маркер Nuncio-aquila не в killzone). Это не изменение самого APL stat, поэтому суммируется с другими изменениями."
            },
            {
              "name": "Deploy Nuncio-aquila",
              "text": "Если твой маркер Nuncio-aquila не в killzone, размести его в пределах 6\" по горизонтали от этого оператора; в противном случае можно передвинуть маркер Nuncio-aquila до 6\" по горизонтали. Если этот оператор убран из killzone, убери и маркер Nuncio-aquila из killzone. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "0AP"
            }
          ],
          "portrait": "img/portraits/exaction-squad/proctor-exactant.png"
        }
      ],
      "poolPick": 10,
      "pool": [
        {
          "name": "Arbites Castigator",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Combat shotgun (close range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Range 6\""
            },
            {
              "name": "Combat shotgun (long range)",
              "atk": 4,
              "hit": "5+",
              "dmg": "2/2",
              "wr": "-"
            },
            {
              "name": "Excruciator maul",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/5",
              "wr": "Rending, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Engendered Focus",
              "text": "Можно игнорировать любые изменения stats этого оператора (включая stats его оружия, но не Save stat)."
            },
            {
              "name": "Zealous Dedication",
              "text": "Каждый раз, когда кубик атаки наносит этому оператору Dmg 3 или более, брось один К6: на результате 5+ вычти 1 из этого нанесённого урона."
            },
            {
              "name": "Castigator's Arrest",
              "text": "Каждый раз, когда вражеский оператор находится в пределах control range этого оператора, если в пределах control range этого оператора нет других вражеских операторов, этот вражеский оператор не может выполнить действие Fall Back."
            }
          ],
          "portrait": "img/portraits/exaction-squad/castigatorarbites.png"
        },
        {
          "name": "Arbites Chirurgant",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Combat shotgun (close range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Range 6\""
            },
            {
              "name": "Combat shotgun (long range)",
              "atk": 4,
              "hit": "5+",
              "dmg": "2/2",
              "wr": "-"
            },
            {
              "name": "Repression baton",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Medic!",
              "text": "Первый раз за каждый turning point, когда другой дружественный оператор EXACTION SQUAD должен быть incapacitated, находясь в видимости и в пределах 3\" от этого оператора, можно применить это правило, при условии что ни этот, ни тот оператор не находятся в пределах control range вражеского оператора. Если применяешь — тот дружественный оператор не incapacitated, у него остаётся 1 wound, и он не может быть incapacitated до конца этого действия. После этого действия тот дружественный оператор может немедленно выполнить бесплатное действие Dash, но должен закончить это перемещение в пределах control range этого оператора. Вычти 1 из APL stat этого и того оператора до конца их следующих активаций соответственно, и если это правило было применено во время активации того дружественного оператора, эта активация заканчивается. Нельзя применять это правило, если этот оператор incapacitated, или если это действие Shoot и этот оператор был бы primary или secondary целью."
            },
            {
              "name": "Medikit",
              "text": "Выбери одного дружественного оператора EXACTION SQUAD в пределах control range этого оператора, чтобы он восстановил до 2К3 потерянных wounds. Это не может быть оператор, на котором в этот turning point уже было применено правило Medic!. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/exaction-squad/chirurgant.png"
        },
        {
          "name": "Arbites Leashmaster",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Combat shotgun (close range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Range 6\""
            },
            {
              "name": "Combat shotgun (long range)",
              "atk": 4,
              "hit": "5+",
              "dmg": "2/2",
              "wr": "-"
            },
            {
              "name": "Shotpistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/3",
              "wr": "Range 8\""
            },
            {
              "name": "Repression baton",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Handler",
              "text": "Каждый раз, когда этот оператор активируется, можно активировать готового дружественного оператора EXACTION SQUAD R-VR CYBER-MASTIFF одновременно. Заверши их активации действие за действием в любом порядке."
            },
            {
              "name": "Attack Pattern",
              "text": "STRATEGIC GAMBIT в первый turning point. Выбери два из следующих attack patterns, которые получит дружественный оператор EXACTION SQUAD R-VR CYBER-MASTIFF на всю битву: Aggressive — оружие ближнего боя этого оператора получает weapon rule Relentless; Swift — добавь 2\" к Move stat этого оператора; Defensive — улучши Save stat этого оператора на 1."
            },
            {
              "name": "R-VR Command",
              "text": "Выбери одного дружественного оператора EXACTION SQUAD R-VR CYBER-MASTIFF и смени один из его attack patterns.",
              "cost": "0AP"
            }
          ],
          "portrait": "img/portraits/exaction-squad/leashmaster.png"
        },
        {
          "name": "R-VR Cyber-Mastiff",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Mechanical bite",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/5",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Beast",
              "text": "Этот оператор не может выполнять никакие действия, кроме Apprehend, Charge, Dash, Fall Back, Fight, Guard, Reposition, Pick Up Marker и Place Marker. Он не может использовать оружие, которого нет на его датакарте."
            },
            {
              "name": "Apprehend",
              "text": "Выбери одного вражеского оператора в пределах control range этого оператора. Пока тот вражеский оператор не покинет пределы control range этого оператора, или пока этот оператор не выполнит это действие снова (что наступит раньше) — ухудши Hit stat оружия того вражеского оператора на 1 (это не суммируется с состоянием injured); кроме того, тот вражеский оператор не может выполнить действие Fall Back. Нельзя выполнять это действие, если в пределах control range этого оператора нет вражеского оператора.",
              "cost": "0AP"
            }
          ],
          "portrait": "img/portraits/exaction-squad/new_mastiff.png"
        },
        {
          "name": "Arbites Gunner",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 2,
          "weapons": [
            {
              "name": "Grenade launcher",
              "atk": 5,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Piercing 1"
            },
            {
              "name": "Heavy stubber (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Heavy (Dash Only)"
            },
            {
              "name": "Heavy stubber (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Heavy (Dash Only), Torrent 1\""
            },
            {
              "name": "Webber",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 12\", Severe, Stun"
            },
            {
              "name": "Repression baton",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [],
          "portrait": "img/portraits/exaction-squad/gunner.png"
        },
        {
          "name": "Arbites Malocator",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Combat shotgun (close range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Range 6\""
            },
            {
              "name": "Combat shotgun (long range)",
              "atk": 4,
              "hit": "5+",
              "dmg": "2/2",
              "wr": "-"
            },
            {
              "name": "Repression baton",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Acute Focus",
              "text": "Один раз за каждую активацию этого оператора он может выполнить действие Pick Up Marker, Place Marker, Veriscant или mission-действие за 1 AP меньше."
            },
            {
              "name": "Veriscant",
              "text": "Выбери одного вражеского оператора, видимого этому оператору. До начала следующей активации этого оператора, пока тот вражеский оператор не incapacitated, или пока это действие не выполнено снова (что наступит раньше) — каждый раз, когда дружественный оператор EXACTION SQUAD стреляет по этому вражескому оператору, дерётся против него или отвечает (retaliating) против него, оружие того дружественного оператора получает weapon rules Lethal 5+ и Severe; если у оружия уже есть это правило, оно также получает Lethal 5+. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/exaction-squad/malocator.png"
        },
        {
          "name": "Arbites Marksman",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Executioner shotgun (concealed)",
              "atk": 4,
              "hit": "2+",
              "dmg": "4/0",
              "wr": "Devastating 4, Heavy, Silent, Concealed Position*"
            },
            {
              "name": "Executioner shotgun (mobile)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "-"
            },
            {
              "name": "Executioner shotgun (stationary)",
              "atk": 4,
              "hit": "2+",
              "dmg": "4/0",
              "wr": "Devastating 4, Heavy"
            },
            {
              "name": "Repression baton",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Concealed Position",
              "text": "Этот оператор может использовать это оружие только первый раз, когда он выполняет действие Shoot за битву."
            },
            {
              "name": "Optics",
              "text": "До начала следующей активации этого оператора: concealed- и stationary-профили его executioner shotgun получают weapon rule Lethal 5+; каждый раз, когда он стреляет из executioner shotgun, вражеские операторы не могут быть obscured. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/exaction-squad/agunner_sniper.png"
        },
        {
          "name": "Arbites Revelatum",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Scoped shotpistol (short range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Range 8\", Lethal 5+"
            },
            {
              "name": "Scoped shotpistol (long range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "-"
            },
            {
              "name": "Repression baton",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "First in the Field",
              "text": "STRATEGIC GAMBIT в первый turning point. Если этот оператор целиком находится в пределах твоей drop zone, он может немедленно выполнить бесплатное действие Reposition."
            },
            {
              "name": "Spot",
              "text": "SUPPORT. Выбери одного вражеского оператора, видимого этому оператору и находящегося в пределах 8\" от него. До конца turning point, каждый раз, когда дружественный оператор EXACTION SQUAD в пределах 3\" от этого оператора стреляет по тому вражескому оператору, можно применить этот эффект. Если применяешь: оружие того дружественного оператора получает weapon rule Seek Light; тот вражеский оператор не может быть obscured. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/exaction-squad/relevatum.png"
        },
        {
          "name": "Arbites Subductor",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 8,
          "maxCopies": 4,
          "weapons": [
            {
              "name": "Shotpistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/3",
              "wr": "Range 8\""
            },
            {
              "name": "Shock maul & assault shield",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/4",
              "wr": "Shock, Repress*"
            }
          ],
          "abilities": [
            {
              "name": "Stubborn Subjugator",
              "text": "Можно игнорировать любые изменения Hit stat оружия ближнего боя этого оператора."
            }
          ],
          "portrait": "img/portraits/exaction-squad/subdugator.png"
        },
        {
          "name": "Arbites Vigilant",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 10,
          "weapons": [
            {
              "name": "Combat shotgun (close range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Range 6\""
            },
            {
              "name": "Combat shotgun (long range)",
              "atk": 4,
              "hit": "5+",
              "dmg": "2/2",
              "wr": "-"
            },
            {
              "name": "Repression baton",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Close Quarters Vigilance",
              "text": "Этот оператор может выполнить действие Shoot (кроме Guard), находясь в пределах control range вражеского оператора, но только если он не выполнял действие Charge во время этой активации, или если это counteraction. Обрати внимание: это не запрещает этому оператору выполнить действие Charge после действия Shoot."
            }
          ],
          "portrait": "img/portraits/exaction-squad/vigilant.png"
        },
        {
          "name": "Arbites Vox-Signifier",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Combat shotgun (close range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Range 6\""
            },
            {
              "name": "Combat shotgun (long range)",
              "atk": 4,
              "hit": "5+",
              "dmg": "2/2",
              "wr": "-"
            },
            {
              "name": "Repression baton",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Signal",
              "text": "SUPPORT. Выбери другого дружественного оператора EXACTION SQUAD, видимого этому оператору. До конца следующей активации того оператора добавь 1 к его APL stat. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/exaction-squad/vox_signifier.png"
        }
      ],
      "equipment": "Exaction Squad",
      "lore": {
        "intro": "Обязанность Adeptus Arbites — следить за исполнением имперского закона. Exaction Squad формируются из наиболее опытных и умелых Арбитраторов. Им поручено выслеживать и захватывать самых отвратительных преступников, возвращая их живыми, чтобы они предстали перед судом во всей полноте правосудия Императора.",
        "operatives": [
          {
            "name": "Arbites Proctor-Exactant",
            "text": "Exaction Squad отбираются и возглавляются Proctor-exactant'ами. Эти опытные Арбитраторы — беспощадные тактики и умелые бойцы. Они также являются устрашающим воплощением имперского правосудия и используют nuncio-aquila, чтобы транслировать оглушительные проповеди, подавляющие волю виновных."
          },
          {
            "name": "Arbites Chirurgant",
            "text": "Эти Арбитраторы — высококвалифицированные медицинские специалисты, привыкшие лечить тяжёлые ранения, нанесённые сопротивляющимися задержанию. Они также искусны в тактическом допросе заключённых и изучили пределы, до которых можно довести тело, чтобы получить ответы."
          },
          {
            "name": "Arbites Castigator",
            "text": "Роль Castigator — обеспечить, чтобы виновные понесли должное наказание, их капюшоны-шлемы укрепляют решимость против проклятий и мольб. Как только цель обнаружена, Castigator отвечает за её усмирение любыми средствами — задачу, которую он выполняет с ревностным усердием."
          },
          {
            "name": "Arbites Gunner",
            "text": "Gunner'ы обеспечивают значительную огневую мощь операций Exaction Squad, используя такое оружие, как heavy stubber — скорострельные пушки, чей сплошной снаряд способен выкашивать толпы. Более специализированное оружие может стрелять парализующими химикатами или гранатами, вскрывающими двери и броню."
          },
          {
            "name": "Arbites Leashmaster",
            "text": "Leashmaster'ы — специалисты, командующие сервиторами-псовидными, известными как Cyber-mastiff. Они напрямую переопределяют базовые протоколы конструкта продвинутыми командами и транслируют выкрикнутые приказы своей замученной чувством вины добыче через эмиттеры Cyber-mastiff'а."
          },
          {
            "name": "R-VR Cyber-Mastiff",
            "text": "Арбитраторы используют множество серво-конструктов для устрашения, охраны и преследования. Rantal-класс Venatus Reclamator — продвинутый Cyber-mastiff, используемый Exaction Squad. Детекторы R-VR позволяют им выслеживать добычу, а их железные челюсти способны ломать кости или убивать по команде."
          },
          {
            "name": "Arbites Malocator",
            "text": "Технически одарённые, Malocator'ы носят био-экстракторы образцов для сбора улик на след их команды. Они действуют с ледяным спокойствием под огнём, изучая улики через свой veriscant мульти-линзовый массив и сообщая команде о слабостях врага."
          },
          {
            "name": "Arbites Marksman",
            "text": "Смутьян, скрывающийся за теми, кого он подстрекает, тяжеловооружённый телохранитель или сбегающий преступник — вот цели Marksman'а. Их длинноствольные дробовики стреляют зарядами такой мощи, что оставляют раны, больше похожие на кровавые кратеры, чем на пулевые отверстия."
          },
          {
            "name": "Arbites Revelatum",
            "text": "Revelatum'ы разведывают перемещения цели заранее, исследуя укрытия и устанавливая преступные связи. Затем они ведут остальных Арбитраторов прямо к виновным, используя свои сканеры soulguilt для выявления угроз своим товарищам по оружию."
          },
          {
            "name": "Arbites Subductor",
            "text": "Subductor'ы обладают одним из самых узнаваемых — и внушающих страх — силуэтов для преступных слоёв Империума. Неся штурмовые щиты паттерна Subjugation и потрескивающие shock-дубины, они — жестокие бойцы передней линии, способные сломить самое упрямое сопротивление."
          },
          {
            "name": "Arbites Vigilant",
            "text": "Vigilant'ы безжалостно сметают виновных с лица земли фирменным combat shotgun Adeptus Arbites. Эти суровые мужчины и женщины всегда начеку в отношении злодеяний и неумолимы в их наказании, обрушивая сокрушительные залпы на близкой дистанции."
          },
          {
            "name": "Arbites Vox-Signifier",
            "text": "Vox-signifier команды прослушивает закодированные послания от командования миссии на своём мощном участковом vox-реле. Он передаёт остальной части Exaction Squad обновления, связанные с изменениями приоритетов миссии и новой информацией — зачастую болезненно извлечённой из заключённых."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Ruthless Efficiency",
          "text": "Каждый раз, когда дружественный оператор EXACTION SQUAD стреляет (кроме случаев с frag- или krak-гранатами) и ты выбираешь допустимую цель, можно применить это правило. Если применяешь — присутствие других дружественных операторов EXACTION SQUAD в пределах control range вражеского оператора не мешает выбрать того вражеского оператора целью."
        },
        {
          "name": "Marked for Justice",
          "text": "STRATEGIC GAMBIT. Выбери одного вражеского оператора — он становится твоей меткой (mark) на этот turning point. Каждый раз, когда дружественный оператор EXACTION SQUAD стреляет по твоей метке, дерётся против неё или отвечает (retaliating) против неё, оружие того дружественного оператора получает weapon rule Punishing. Каждый раз, когда твоя метка incapacitated, можно выбрать нового вражеского оператора меткой на этот turning point (и можно продолжать делать это в течение этого turning point)."
        },
        {
          "name": "Repress",
          "text": "У некоторых видов оружия этой команды есть weapon rule Repress (см. ниже). *Repress: каждый раз, когда этот оператор использует это оружие: каждый твой блок можно направить на блокирование двух неразрешённых успехов (вместо одного); если этот оператор отвечает (retaliating), первым разрешается кубик атаки защищающегося (то есть этого оператора, а не атакующего)."
        },
        {
          "name": "Guilt Reveals Itself",
          "text": "Каждый раз, когда ты выбираешь допустимую цель для дружественного оператора EXACTION SQUAD, вражеские операторы в пределах 4\" от него не могут быть в укрытии (cover) (вместо 2\"). Хотя это может позволить выбрать таких операторов целью (если они видимы), это не убирает их cover save (если есть), если только дружественный оператор EXACTION SQUAD не находится в пределах 2\" как обычно.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Inviolate Jurisdiction",
          "text": "Каждый раз, когда оператор стреляет по дружественному оператору EXACTION SQUAD, находящемуся в пределах 2\" от objective-маркера или вражеского оператора, можно перебросить один из своих кубиков защиты.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Dispense Justice",
          "text": "Каждый раз, когда дружественный оператор EXACTION SQUAD дерётся или отвечает (retaliating), если он не перемещался больше своего Move stat во время этой активации, или если это counteraction, его оружие ближнего боя получает weapon rule Ceaseless.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Terminal Decree",
          "text": "Каждый раз, когда дружественный оператор EXACTION SQUAD стреляет по вражескому оператору в пределах 6\" от него, или каждый раз, когда дружественный оператор EXACTION SQUAD GUNNER стреляет, ranged-оружие этого дружественного оператора получает weapon rule Balanced.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Long Arm of the Emperor's Law",
          "text": "Используй этот firefight ploy, когда дружественный оператор EXACTION SQUAD выполняет действие Shoot и ты выбираешь оружие с weapon rule Range x (кроме frag или krak grenade). До конца этого действия добавь 3\" к x.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Exact Punishment",
          "text": "Используй этот firefight ploy после того, как вражеский оператор выстрелил против или подрался против дружественного оператора EXACTION SQUAD в пределах 6\" от него, и тот дружественный оператор не incapacitated в результате. Тот дружественный оператор может немедленно выполнить бесплатное действие Shoot или Fight, но нельзя выбирать другого вражеского оператора допустимой целью или тем, против кого драться, во время этого действия (вторичные цели от weapon rule Blast по-прежнему можно выбирать).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Brutal Backup",
          "text": "Используй этот firefight ploy во время активации дружественного оператора EXACTION SQUAD, до или после выполнения им действия. Выбери одного вражеского оператора в пределах его control range. Один другой дружественный оператор EXACTION SQUAD может немедленно выполнить бесплатное действие Fight, но нельзя выбирать другого вражеского оператора тем, против кого драться, во время этого действия.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Execution Order",
          "text": "Используй этот firefight ploy, когда вражеский оператор выполняет mission-действие (кроме Operate Hatch). Либо используй его в конце Firefight phase и выбери одного вражеского оператора, контролирующего objective-маркер. В любом случае, в следующий раз, когда твой противник активирует того вражеского оператора, можно прервать эту активацию и активировать готового дружественного оператора EXACTION SQUAD. Если делаешь так — во время этой активации тот дружественный оператор должен стрелять против или драться против того вражеского оператора и не может делать это против других вражеских операторов, пока не сделает этого (если это невозможно — активация того дружественного оператора отменяется). После завершения активации того дружественного оператора продолжи активацию того вражеского оператора (если возможно). Нельзя использовать этот ploy снова, пока тот вражеский оператор не активируется или не будет incapacitated.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "apprehend",
          "name": "Apprehend",
          "target": "enemy",
          "text": "Выбери одного вражеского оператора в пределах control range этого оператора. Пока тот вражеский оператор не покинет пределы control range этого оператора, или пока этот оператор не выполнит это действие снова (что наступит раньше) — ухудши Hit stat оружия того вражеского оператора на 1 (это не суммируется с состоянием injured); кроме того, тот вражеский оператор не может выполнить действие Fall Back. Нельзя выполнять это действие, если в пределах control range этого оператора нет вражеского оператора."
        },
        {
          "id": "veriscant",
          "name": "Veriscant",
          "target": "enemy",
          "text": "Выбери одного вражеского оператора, видимого этому оператору. До начала следующей активации этого оператора, пока тот вражеский оператор не incapacitated, или пока это действие не выполнено снова (что наступит раньше) — каждый раз, когда дружественный оператор EXACTION SQUAD стреляет по этому вражескому оператору, дерётся против него или отвечает (retaliating) против него, оружие того дружественного оператора получает weapon rules Lethal 5+ и Severe; если у оружия уже есть это правило, оно также получает Lethal 5+. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора."
        },
        {
          "id": "spot",
          "name": "Spot",
          "target": "enemy",
          "text": "SUPPORT. Выбери одного вражеского оператора, видимого этому оператору и находящегося в пределах 8\" от него. До конца turning point, каждый раз, когда дружественный оператор EXACTION SQUAD в пределах 3\" от этого оператора стреляет по тому вражескому оператору, можно применить этот эффект. Если применяешь: оружие того дружественного оператора получает weapon rule Seek Light; тот вражеский оператор не может быть obscured. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора."
        },
        {
          "id": "aggressive_pattern",
          "name": "Aggressive",
          "target": "friendly",
          "restrictToOperator": "R-VR Cyber-Mastiff",
          "text": "Attack Pattern (R-VR CYBER-MASTIFF, выбирается дважды из трёх на всю битву). Aggressive — оружие ближнего боя этого оператора получает weapon rule Relentless."
        },
        {
          "id": "swift_pattern",
          "name": "Swift",
          "target": "friendly",
          "restrictToOperator": "R-VR Cyber-Mastiff",
          "text": "Attack Pattern (R-VR CYBER-MASTIFF, выбирается дважды из трёх на всю битву). Swift — добавь 2\" к Move stat этого оператора.",
          "statMod": {
            "stat": "move",
            "delta": 2
          }
        },
        {
          "id": "defensive_pattern",
          "name": "Defensive",
          "target": "friendly",
          "restrictToOperator": "R-VR Cyber-Mastiff",
          "text": "Attack Pattern (R-VR CYBER-MASTIFF, выбирается дважды из трёх на всю битву). Defensive — улучши Save stat этого оператора на 1.",
          "statMod": {
            "stat": "save",
            "delta": 1
          }
        },
        {
          "id": "medic_used",
          "name": "Medic!",
          "target": "friendly",
          "text": "Первый раз за каждый turning point, когда другой дружественный оператор EXACTION SQUAD должен быть incapacitated, находясь в видимости и в пределах 3\" от этого оператора, можно применить это правило, при условии что ни этот, ни тот оператор не находятся в пределах control range вражеского оператора. Если применяешь — тот дружественный оператор не incapacitated, у него остаётся 1 wound, и он не может быть incapacitated до конца этого действия. После этого действия тот дружественный оператор может немедленно выполнить бесплатное действие Dash, но должен закончить это перемещение в пределах control range этого оператора. Вычти 1 из APL stat этого и того оператора до конца их следующих активаций соответственно, и если это правило было применено во время активации того дружественного оператора, эта активация заканчивается. Нельзя применять это правило, если этот оператор incapacitated, или если это действие Shoot и этот оператор был бы primary или secondary целью."
        }
      ]
    },
    "Farstalker Kinband": {
      "archetypes": [
        "Infiltration",
        "Recon"
      ],
      "required": [
        {
          "name": "Kroot Kill-Broker",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Kroot rifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Pulse weapon",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Ritual blade",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Call The Kill",
              "text": "Strategic Gambit, если этот оператор в killzone. Выбери одного вражеского оператора своей mark на этот turning point. Когда дружественный оператор FARSTALKER KINBAND стреляет против, дерётся против или отвечает (retaliating) против твоей mark, оружие этого дружественного оператора получает weapon rule Balanced. Когда твоя mark выведена из строя, можно выбрать нового вражеского оператора своей mark на этот turning point (и можно продолжать делать это в течение этого turning point)."
            },
            {
              "name": "Victory Shriek",
              "text": "Когда твоя mark выведена из строя, можно выбрать одного дружественного оператора FARSTALKER KINBAND в пределах 6\" от этого оператора. До конца битвы оружие этого оператора получает weapon rule Balanced. Каждый дружественный оператор может быть выбран для этого правила только один раз за битву."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/killbroker.png"
        }
      ],
      "pool": [
        {
          "name": "Kroot Bow-Hunter",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Accelerator bow (fused arrow)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Piercing 1"
            },
            {
              "name": "Accelerator bow (glide arrow)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Silent"
            },
            {
              "name": "Accelerator bow (voltaic arrow)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Blast 1\""
            },
            {
              "name": "Blade",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Energise",
              "text": "1AP. До конца turning point или пока этот оператор не выстрелил из своего accelerator bow (смотря что наступит раньше), все профили его accelerator bow получают weapon rule Lethal 5+.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/bowhunter.png"
        },
        {
          "name": "Kroot Cold-Blood",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Kroot rifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Blade",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Hardy",
              "text": "Когда кубик атаки должен нанести Critical Dmg этому оператору, можно выбрать, чтобы этот кубик атаки нанёс Normal Dmg вместо этого."
            },
            {
              "name": "Cold-blooded",
              "text": "Когда этот оператор стреляет против, дерётся против или отвечает (retaliating) против раненого (wounded) вражеского оператора, оружие этого оператора получает weapon rule Lethal 5+; если этот вражеский оператор также injured, оружие этого оператора также получает weapon rule Rending."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/coldblood.png"
        },
        {
          "name": "Kroot Cut-Skin",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Cut-skin's blades",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Ceaseless, Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Vicious Duellist",
              "text": "Когда этот оператор дерётся или отвечает (retaliating), за каждый кубик атаки, который твой оппонент отбрасывает как fail, нанеси 1 урон вражескому оператору в этой последовательности."
            },
            {
              "name": "Savage Assault",
              "text": "Первый раз, когда этот оператор выполняет действие Fight во время каждой своей активации, если ни он, ни вражеский оператор в этой последовательности не выведены из строя, этот оператор может сразу выполнить свободное действие Fight после этого, но нельзя выбрать другого вражеского оператора для этого действия (и только если всё ещё допустимо драться против него). Это имеет приоритет над ограничениями действий."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/cutskin.png"
        },
        {
          "name": "Kroot Heavy Gunner",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Dvorgite skinner",
              "atk": 5,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 6\", Heavy (Reposition only), Piercing 2, Torrent 2\""
            },
            {
              "name": "Londaxi tribalest",
              "atk": 5,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Heavy (Reposition only), Piercing 1, Rending"
            },
            {
              "name": "Blade",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "-"
            }
          ],
          "abilities": [],
          "portrait": "img/portraits/farstalker-kinband/heavy_gunner.png"
        },
        {
          "name": "Kroot Hound",
          "apl": 2,
          "move": "8\"",
          "save": "5+",
          "wounds": 7,
          "maxCopies": 2,
          "weapons": [
            {
              "name": "Ripping fangs",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Beast",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight, Gather, Guard, Reposition, Pick Up Marker и Place Marker. Он не может использовать оружие, которого нет на его карточке."
            },
            {
              "name": "Bad-tempered",
              "text": "Когда вражеский оператор выполняет действие Fight, если этот оператор — допустимый оператор для драки против него, можно заставить оппонента выбрать этого оператора для драки вместо другого. Когда вражеский оператор заканчивает действие Charge в пределах control range другого дружественного оператора FARSTALKER KINBAND в пределах 3\" от этого оператора, если этот оператор не в пределах control range вражеских операторов, этот оператор может сразу выполнить свободное действие Charge (можно сменить его order на Engage для этого), но должен закончить это движение в пределах control range того вражеского оператора."
            },
            {
              "name": "Gather",
              "text": "1AP. Выполни свободное действие Dash или Reposition этим оператором. Во время этого движения он может выполнить свободное действие Pick Up Marker или Place Marker (можно определять контроль во время этого действия, чтобы сделать это), и оставшуюся дистанцию движения от действия Dash или Reposition можно использовать после этого."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/hound.png"
        },
        {
          "name": "Kroot Long-Sight",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Kroot hunting rifle (concealed)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Heavy, Devastating 3, Silent, Concealed Position*"
            },
            {
              "name": "Kroot hunting rifle (mobile)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Kroot hunting rifle (stationary)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Heavy, Devastating 3"
            },
            {
              "name": "Blade",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Concealed Position",
              "text": "Этот оператор может использовать это оружие только в первый раз, когда он выполняет действие Shoot за битву."
            },
            {
              "name": "Long-Sight",
              "text": "1AP. До начала следующей активации этого оператора: concealed и stationary профили его Kroot hunting rifle получают weapon rule Lethal 5+; когда он стреляет из своего Kroot hunting rifle, вражеские операторы не могут быть obscured.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/longsight.png"
        },
        {
          "name": "Kroot Pistolier",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Dual Kroot pistols (focused)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Range 8\", Ceaseless, Lethal 5+"
            },
            {
              "name": "Dual Kroot pistols (salvo)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Range 8\", Salvo*"
            },
            {
              "name": "Blade",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Quick Draw",
              "text": "Once per turning point, когда вражеский оператор выполняет действие Shoot и этот оператор выбран допустимой целью (или станет вторичной целью благодаря weapon rule Blast), если этот оператор ready, можно прервать это действие, чтобы применить это правило. Если применяешь, этот оператор может сразу выполнить свободное действие Shoot своими dual Kroot pistols (focused) против того вражеского оператора (можно сменить его order на Engage для этого), но тот вражеский оператор должен оставаться допустимой целью."
            },
            {
              "name": "* Salvo",
              "text": "Выбери до двух разных допустимых целей, которые не в пределах control range дружественных операторов. Стреляй этим оружием по обеим в выбранном порядке (разрешай каждую последовательность отдельно)."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/pistoler.png"
        },
        {
          "name": "Kroot Stalker",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Kroot scattergun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Range 6\""
            },
            {
              "name": "Stalker's blade",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Balanced, Rending"
            }
          ],
          "abilities": [
            {
              "name": "Stalker",
              "text": "Этот оператор может выполнять действие Charge, имея Conceal order."
            },
            {
              "name": "Stealth Attack",
              "text": "2AP. Выполни свободное действие Charge этим оператором, но не превышай его Move stat (т.е. не добавляй 2\"). Затем сразу выполни свободное действие Fight этим оператором. В первый раз, когда ты наносишь удар (strike) во время этого действия, можно сразу разрешить ещё один свой success как strike (прежде оппонента).\n\nЭтот оператор не может выполнять это действие, имея Engage order, находясь в пределах control range вражеского оператора, или если он не в пределах 1\" от Light или Heavy terrain."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/stalker.png"
        },
        {
          "name": "Kroot Tracker",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Kroot rifle",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Blade",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Marked For The Hunt",
              "text": "1AP. Убери свой Pech'ra marker из killzone (если есть). Затем размести свой Pech'ra marker в зоне видимости этого оператора либо на Vantage terrain элемента террейна, видимого этому оператору. Когда дружественный оператор FARSTALKER KINBAND стреляет по вражескому оператору, у которого этот marker в пределах его control range, ranged-оружие этого дружественного оператора получает weapon rule Seek Light.\n\nВ начале следующей активации этого оператора или если он убран из killzone (смотря что раньше), убери свой Pech'ra marker из killzone.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора."
            },
            {
              "name": "From The Eye Above",
              "text": "1AP. SUPPORT. Выбери одного другого дружественного оператора FARSTALKER KINBAND, видимого этому оператору и в пределах 6\" от него. До конца следующей активации того оператора добавь 1 к его APL stat.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/tracker.png"
        },
        {
          "name": "Kroot Warrior",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "maxCopies": 11,
          "weapons": [
            {
              "name": "Kroot rifle",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Kroot scattergun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Range 6\""
            },
            {
              "name": "Blade",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Ready for Anything",
              "text": "Once per turning point, во время активации дружественного оператора WARRIOR, можно применить правило Meat, Piercing Shot или Toxin Shot (см. faction equipment) для этого оператора. Это не считается за его лимит once per turning point."
            }
          ],
          "portrait": "img/portraits/farstalker-kinband/warrior.png"
        }
      ],
      "poolPick": 11,
      "equipment": "Farstalker Kinband",
      "lore": {
        "intro": "Farstalker Kinbands действуют как разведчики вида Kroot. Они странствуют по галактике в поисках нового и ценного генетического материала для своих Shaper'ов. В составе Farstalker Kinband — опытные следопыты, охотники и партизанские бойцы, способные тягаться даже с куда более технологически развитыми противниками.",
        "operatives": [
          {
            "name": "Kroot Kill-Broker",
            "text": "Farstalker Kinbands возглавляют Kill-broker'ы. Эти Kroot не только опытные тактики и умелые бойцы, но и способные переговорщики, следящие за тем, чтобы их сородичи получали заслуженную награду за службу."
          },
          {
            "name": "Kroot Bow-Hunter",
            "text": "Accelerator bow, которым владеют эти Kroot — характерное оружие с Kroot rifle в основе. При выстреле изгибы лука потрескивают энергией, заряжая наконечник стрелы. Эффект на поражённых врагах зависит от материала наконечника."
          },
          {
            "name": "Kroot Cold-Blood",
            "text": "Cold-blood-ы годами сражались как наёмники. Они многое повидали и испытали, и мало что внушает им страх. Приобретённый опыт делает их искусными в использовании разных типов боеприпасов — они выбирают оптимальный выстрел для каждого убийства."
          },
          {
            "name": "Kroot Cut-Skin",
            "text": "Эти Kroot полностью посвятили себя ближнему бою. Быстрые и свирепые, Cut-skin-ы обрушивают шквал безжалостных ударов на врагов, не давая им шанса ответить, прежде чем те будут срублены."
          },
          {
            "name": "Kroot Heavy Gunner",
            "text": "Kroot готовы сражаться за или против почти любой расы галактики. В процессе им платят — или они похищают — экзотическим оружием вроде Dvorgite skinner, заряжающего биологический материал для создания обжигающего потока энергии, либо Londaxi tribalest — противоброневого оружия, стреляющего твёрдыми снарядами на высоких скоростях."
          },
          {
            "name": "Kroot Hound",
            "text": "Быстрые, ловкие, свирепые и невероятно преданные своим хозяевам-Kroot, Kroot Hound-ы — естественные спутники Farstalker Kinband. Эти звери способны пробираться в узкие проходы, забирать предметы и рвать врагов своими клювообразными челюстями."
          },
          {
            "name": "Kroot Long-Sight",
            "text": "Лучшие стрелки Farstalker Kinband, Long-sight-ы носят длинноствольные Kroot hunting rifle. Они с готовностью затаиваются в укрытии на дни напролёт ради идеального выстрела. Немногие, попавшие им на прицел, доживают, чтобы рассказать об этом."
          },
          {
            "name": "Kroot Pistolier",
            "text": "Хладнокровные под давлением и уверенно чувствующие себя рядом с врагом, Kroot Pistolier-ы — ловкие и быстро соображающие бойцы. Оказавшись в оптимальной дистанции, они обрушивают шквал огня из своих пистолетов, почти невозможный для уклонения."
          },
          {
            "name": "Kroot Stalker",
            "text": "Даже среди Kroot эти воины — особенно умелые инфильтраторы и охотники. Они обладают почти сверхъестественным пониманием террейна и искусства маскировки, способные подобраться вплотную к врагу перед решающим ударом."
          },
          {
            "name": "Kroot Tracker",
            "text": "Эти Kroot разделяют очень крепкую личную связь со своим Pech'ra — птицей родом с самого Pech. Они действуют слаженно, помогая своему Kinband. Pech'ra способна не только отвлекать врагов, но и предупреждать Kroot о присутствии противника."
          },
          {
            "name": "Kroot Warrior",
            "text": "Kroot Warrior-ы — свирепые бойцы, опытные охотники и неутомимые следопыты. Те, что из Farstalker Kindred, провели немало лет наёмниками, накопив немалый боевой опыт, а также поглощая генетический материал ради будущего своего вида."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Farstalker",
          "text": "В Ready step каждой Strategy phase можно сменить order до трёх дружественных операторов FARSTALKER KINBAND, которые не находятся в пределах control range вражеских операторов.\n\nКогда наступает твоя очередь на counteract, можно вместо этого сменить order одного дружественного оператора FARSTALKER KINBAND, который не в пределах control range вражеских операторов. Это всё ещё считается твоим counteract (то есть активация после этого переходит к оппоненту), но не считается counteract-ом этого оператора за этот turning point."
        },
        {
          "name": "Cut-Throats",
          "text": "Добавь 1 к Atk stat оружия ближнего боя дружественных операторов FARSTALKER KINBAND (максимум до 5).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Rogue",
          "text": "Когда оператор стреляет по дружественному оператору FARSTALKER KINBAND:\n- Игнорируй weapon rule Saturate.\n- Если можно удержать любые cover save, можно удержать один дополнительный cover save, либо удержать один cover save как critical success. Не суммируется с улучшенными cover save от Vantage terrain.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Prey",
          "text": "Когда дружественный оператор FARSTALKER KINBAND стреляет во время активации, в которой он не выполнял действие Charge, Fall Back или Reposition, его ranged-оружие получает weapon rules Balanced и Severe; если оружие уже имеет weapon rule Balanced, оно получает weapon rules Ceaseless и Severe вместо этого. Учти, что это не запрещает этому оператору выполнять указанные действия уже после стрельбы.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Bound",
          "text": "Во время каждой активации дружественного оператора FARSTALKER KINBAND можно игнорировать первые 2\" вертикальной дистанции, которую он преодолевает во время одного climb up.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Savage Ambush",
          "text": "Примени этот firefight ploy во время действия Fight, когда ready дружественный оператор FARSTALKER KINBAND, имеющий Light или Heavy terrain в пределах своего control range, выбран для драки против. На этапе Resolve Attack Dice этой последовательности разрешай первым свой кубик атаки (т.е. как защищающийся вместо атакующего).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Slip Away",
          "text": "Примени этот firefight ploy во время активации дружественного оператора FARSTALKER KINBAND, до или после выполнения им действия. Во время этой активации этот оператор может выполнить действие Fall Back за 1 AP меньше.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Poach",
          "text": "Примени этот firefight ploy во время активации дружественного оператора FARSTALKER KINBAND. До конца этой активации этому оператору не нужно контролировать маркер, чтобы выполнить действие Pick Up Marker или mission-действие, обычно это требующее (это имеет приоритет над условиями такого действия — требуется лишь оспорить маркер).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Vengeance for the Kinband",
          "text": "Примени этот firefight ploy, когда дружественный оператор FARSTALKER KINBAND выведен из строя вражеским оператором. До конца битвы, когда другой дружественный оператор FARSTALKER KINBAND стреляет против, дерётся против или отвечает (retaliating) против этого вражеского оператора, оружие того дружественного оператора получает weapon rule Relentless. Нельзя применить этот ploy снова в этой битве, пока тот вражеский оператор не будет выведен из строя.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "mark",
          "name": "Mark (Call the Kill)",
          "target": "enemy",
          "text": "Strategic Gambit, если этот оператор в killzone. Выбери одного вражеского оператора своей mark на этот turning point. Когда дружественный оператор FARSTALKER KINBAND стреляет против, дерётся против или отвечает (retaliating) против твоей mark, оружие этого дружественного оператора получает weapon rule Balanced. Когда твоя mark выведена из строя, можно выбрать нового вражеского оператора своей mark на этот turning point (и можно продолжать делать это в течение этого turning point)."
        },
        {
          "id": "victory_shriek",
          "name": "Victory Shriek",
          "target": "friendly",
          "text": "Когда твоя mark выведена из строя, можно выбрать одного дружественного оператора FARSTALKER KINBAND в пределах 6\" от этого оператора. До конца битвы оружие этого оператора получает weapon rule Balanced. Каждый дружественный оператор может быть выбран для этого правила только один раз за битву."
        },
        {
          "id": "vengeance_mark",
          "name": "Vengeance for the Kinband",
          "target": "enemy",
          "text": "Примени этот firefight ploy, когда дружественный оператор FARSTALKER KINBAND выведен из строя вражеским оператором. До конца битвы, когда другой дружественный оператор FARSTALKER KINBAND стреляет против, дерётся против или отвечает (retaliating) против этого вражеского оператора, оружие того дружественного оператора получает weapon rule Relentless. Нельзя применить этот ploy снова в этой битве, пока тот вражеский оператор не будет выведен из строя."
        }
      ]
    },
    "Fellgor Ravagers": {
      "archetypes": [
        "Recon",
        "Seek & Destroy"
      ],
      "equipment": "Fellgor Ravagers",
      "required": [
        {
          "name": "Fellgor Ironhorn",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 11,
          "count": 1,
          "weapons": [
            {
              "name": "Corrupted pistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/5",
              "wr": "Range 8\", Rending"
            },
            {
              "name": "Plasma pistol (standard)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/5",
              "wr": "Range 8\", Piercing 1"
            },
            {
              "name": "Plasma pistol (supercharge)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Range 8\", Hot, Lethal 5+, Piercing 1"
            },
            {
              "name": "Bludgeon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Brutal"
            },
            {
              "name": "Corrupted chainsword",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Call the Attack",
              "text": "STRATEGIC GAMBIT, если у этого оператора нет одного из твоих Frenzy tokens. Выбери одного дружественного оператора FELLGOR RAVAGER, видимого и в пределах 6\" от этого оператора. Выбранный оператор и каждый другой дружественный оператор FELLGOR RAVAGER, видимый и в пределах 2\" от него, может немедленно выполнить бесплатное действие Dash в порядке по твоему выбору."
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/ironhorn.png"
        }
      ],
      "poolPick": 9,
      "pool": [
        {
          "name": "Fellgor Deathknell",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 10,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Bludgeon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Brutal"
            }
          ],
          "abilities": [
            {
              "name": "Icon Bearer",
              "text": "На этого оператора не действует пункт про контроль маркеров faction rule Frenzy. При определении контроля маркера считай APL stat этого оператора на 1 выше. Это не изменение самого APL stat, поэтому суммируется с другими изменениями."
            },
            {
              "name": "War Gong",
              "text": "Когда кубик атаки должен нанести Critical Dmg дружественному оператору FELLGOR RAVAGER в пределах 3\" от этого оператора, если у этого оператора нет одного из твоих Frenzy tokens, можно сделать так, чтобы этот кубик атаки нанёс Normal Dmg вместо этого."
            },
            {
              "name": "Gong Knell",
              "text": "До начала следующей активации этого оператора или пока он не incapacitated (что наступит раньше): когда оператор стреляет по этому оператору, улучши Save stat этого оператора на 1 и игнорируй weapon rule Piercing.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/deathknell.png"
        },
        {
          "name": "Fellgor Fluxbray",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Triple cleavers",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Ceaseless"
            }
          ],
          "abilities": [
            {
              "name": "Blade Whirl",
              "text": "Когда этот оператор дерётся или отвечает (retaliating), если у него нет одного из твоих Frenzy tokens, можно разрешить один из своих успехов до обычного порядка. Если применяешь это, этот успех должен быть использован как блок."
            },
            {
              "name": "Cleaver Flurry",
              "text": "Выполни бесплатное действие Reposition этим оператором. Во время этого действия он может переместиться на дополнительные 2\" и может заходить в пределы control range вражеских операторов (но не может начинать или заканчивать движение там). Нанеси D3+1 урона каждому вражескому оператору, в пределы control range которого он зашёл (бросай отдельно за каждого, в порядке, в котором он заходил в их control range).\n\nЭтот оператор не может выполнять это действие, пока у него приказ Conceal.",
              "cost": "2AP"
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/fluxbray.png"
        },
        {
          "name": "Fellgor Gnarlscar",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Bionic fist",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Brutal"
            }
          ],
          "abilities": [
            {
              "name": "Sagacious",
              "text": "В конце активации этого оператора можно сменить его order."
            },
            {
              "name": "Uncompromising Attack",
              "text": "Выполни бесплатное действие Fight этим оператором, затем бесплатное действие Shoot этим оператором (или наоборот). Этот оператор может выполнить это действие Shoot, находясь в пределах control range вражеского оператора, но если делает так — должен выбрать целью вражеского оператора в пределах своего control range (даже если другие дружественные операторы находятся в пределах control range того вражеского оператора). Для этого действия Shoot можно выбрать только autopistol.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/gnarlscar.png"
        },
        {
          "name": "Fellgor Gorehorn",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Skullcleaver",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Lethal 5+, Headtaker*"
            }
          ],
          "abilities": [
            {
              "name": "Champion",
              "text": "Этот оператор может выполнить два действия Fight во время своей активации."
            },
            {
              "name": "* Headtaker",
              "text": "Когда этот оператор incapacitates оператора этим оружием, брось один D3:\n- Этот оператор восстанавливает число потерянных wounds, равное результату (если у него нет Frenzy token).\n- До конца битвы добавь результат к Critical Dmg stat skullcleaver этого оператора (максимум до 8)."
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/gorehorn.png"
        },
        {
          "name": "Fellgor Herd-Goad",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Crackthorn whip (ranged)",
              "atk": 4,
              "hit": "2+",
              "dmg": "2/3",
              "wr": "Range 3\", Lethal 4+, Stun"
            },
            {
              "name": "Crackthorn whip (melee)",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Lethal 4+, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Whip Control",
              "text": "Когда вражеский оператор виден и в пределах 3\" от этого оператора, если этот оператор не в пределах control range других вражеских операторов: вычти 1 из Atk stat оружия ближнего боя того вражеского оператора (минимум 1). Твой противник должен потратить 1 дополнительный AP, чтобы этот вражеский оператор выполнил действие Fall Back."
            },
            {
              "name": "Incite Fury",
              "text": "SUPPORT. Выбери другого дружественного оператора FELLGOR RAVAGER (кроме SHAMAN или IRONHORN), видимого и в пределах 3\" от этого оператора. До конца следующей активации того оператора добавь 1 к его APL stat.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/herd-goad.png"
        },
        {
          "name": "Fellgor Mangler",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Vicious claws",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Ceaseless, Tactual Hunter*"
            }
          ],
          "abilities": [
            {
              "name": "* Tactual Hunter",
              "text": "Когда этот оператор дерётся этим оружием против expended оператора, первый раз, когда в этой последовательности ты бьёшь с critical success, можно немедленно разрешить ещё один свой успех как удар (до противника)."
            },
            {
              "name": "Berserker",
              "text": "Этот оператор не может выполнять действие Shoot (кроме Guard, но в таком случае не может затем выполнить бесплатное действие Shoot во время interruption). Нужно потратить 1 дополнительный AP, чтобы этот оператор выполнил действие Pick Up Marker и mission actions (кроме Operate Hatch)."
            },
            {
              "name": "Savage",
              "text": "Первый раз, когда этот оператор выполняет действие Fight во время каждой своей активации, если он не incapacitated, он может немедленно выполнить бесплатное действие Fight после этого (не обязательно против того же вражеского оператора). Это имеет приоритет над ограничениями действий, и firefight ploy Ruthless Rampage нельзя использовать между этими двумя действиями Fight."
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/mangler.png"
        },
        {
          "name": "Fellgor Shaman",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Tech-curse",
              "atk": 4,
              "hit": "3+",
              "dmg": "1/3",
              "wr": "PSYCHIC, Rending, Saturate, Seek Light"
            },
            {
              "name": "Braystave",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Shock"
            }
          ],
          "abilities": [
            {
              "name": "Apoplectic Rejuvenation",
              "text": "Выбери дружественного оператора FELLGOR RAVAGER без одного из твоих Frenzy tokens, видимого и в пределах 6\" от этого оператора. Тот дружественный оператор восстанавливает до 2D3 потерянных wounds; если этот оператор incapacitated вражеского оператора, сражаясь или отвечая (retaliating) во время битвы, он восстанавливает до 6 потерянных wounds вместо этого.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Mantle of Darkness",
              "text": "PSYCHIC. До начала следующей активации этого оператора или пока он не incapacitated (что наступит раньше): когда дружественный оператор FELLGOR RAVAGER виден и в пределах 3\" от этого оператора, имеет приказ Conceal и находится в укрытии (cover), тот дружественный оператор не может быть выбран как допустимая цель — это имеет приоритет над всеми остальными правилами (например, Seek, Vantage terrain), кроме нахождения в пределах 2\".\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/fellgor_shaman.png"
        },
        {
          "name": "Fellgor Toxhorn",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Cleaver",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Toxic Blessings",
              "text": "Можно игнорировать любые изменения APL stat этого оператора, и на него не действует weapon rule Shock вражеских операторов. Когда кубик атаки наносит Normal Dmg 3 или больше этому оператору, брось один D6: на результате 5+ вычти 1 из нанесённого урона."
            },
            {
              "name": "Pox Bomb",
              "text": "Этот оператор может использовать stun grenades (см. universal equipment). Их использование не расходует лимит применений (то есть если ты также выбрал эту гранату из equipment для других операторов). Когда вражеский оператор проходит проверку stun в результате действия Stun Grenade этого оператора, если результат 3+, дополнительно нанеси этому вражескому оператору урон, равный результату кубика, делённому на 2 (округляя вверх)."
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/toxhorn.png"
        },
        {
          "name": "Fellgor Vandal",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Mancrusher",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/5",
              "wr": "Brutal, Vicious Blows*"
            }
          ],
          "abilities": [
            {
              "name": "* Vicious Blows",
              "text": "Когда этот оператор дерётся, это оружие получает weapon rule Ceaseless."
            },
            {
              "name": "Sweeping Blow",
              "text": "Нанеси D3+1 урона каждому другому оператору, видимому и в пределах 2\" от этого оператора.\n\nЭтот оператор не может выполнять это действие, пока у него приказ Conceal.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/fellgor-ravagers/vandal.png"
        },
        {
          "name": "Fellgor Warrior",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Bludgeon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Brutal"
            },
            {
              "name": "Cleaver",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Warrior Frenzy",
              "text": "Когда у этого оператора есть один из твоих Frenzy tokens, он не может быть injured. Это правило имеет приоритет над обычными правилами Frenzy."
            }
          ],
          "maxCopies": 9,
          "portrait": "img/portraits/fellgor-ravagers/fellgor.png"
        }
      ],
      "lore": {
        "intro": "Из всех мутантов-Beastmen, находящихся во власти Тёмных Богов, Fellgor Ravagers считают себя величайшими и самыми могущественными. Они рыщут по space hulk'ам, ульям и осквернённым Варпом руинам, используя свои острые чувства, чтобы выследить ничего не подозревающую добычу во тьме, прежде чем наброситься на врагов и с диким восторгом их растерзать.",
        "operatives": [
          {
            "name": "Fellgor Ironhorn",
            "text": "Вожаки Fellgor Ravagers — воины, пробившиеся на вершину своей стаи. Все они — жестокие убийцы, обладающие нечеловеческой хитростью, которую безжалостно применяют на практике."
          },
          {
            "name": "Fellgor Deathknell",
            "text": "Beastmen — охотники, а Fellgor Ravagers превосходят в этом остальных представителей своего вида. Deathknells несут в бой громадные боевые гонги, которыми отбивают ритм охоты, подают сигналы соратникам по стае и возвещают гибель врага."
          },
          {
            "name": "Fellgor Fluxbray",
            "text": "Многие Fellgor Ravager жаждут благословения богов. Fluxbray получили в дар лишнюю конечность, что особенно удобно для переноски дополнительного оружия в бой. Добравшись до схватки, они обрушивают град ударов, уклониться от которых практически невозможно."
          },
          {
            "name": "Fellgor Gnarlscar",
            "text": "Fellgor Ravagers никогда не прекращают сражаться — ни ради добычи, ни ради места в иерархии стаи. Немногие продерживаются долго, но те, кто выживает, покрыты шрамами от множества ранений. Некоторым, потерявшим конечность или глаз, ставят грубые бионические протезы, отчего их облик становится ещё более пугающим."
          },
          {
            "name": "Fellgor Gorehorn",
            "text": "У некоторых Fellgor Ravager жажда крови сильнее, чем у собратьев, и они бросаются в бой с диким неистовством. За ними быстро следует резня — они отрубают руки и головы врагов в яростных фонтанах крови."
          },
          {
            "name": "Fellgor Herd-Goad",
            "text": "Fellgor Ravagers обладают мощными чувствами, подобающими столь способным охотникам. Некоторые из них наслаждаются болью и причинением мучительных ощущений другим. Такие Herd-goad благословлены богами хлыстами, пропитанными эмпирической силой, которыми Beastmen подгоняют своих собратьев к ярости, а также ранят врага."
          },
          {
            "name": "Fellgor Mangler",
            "text": "Manglers наделены дарованной Варпом яростью и силой, позволяющей им проламывать переборки и наносить череподробительные удары головой. Хотя они носят маски, их чувства обострены — некоторые Beastmen утверждают, что Manglers способны видеть сами души своих жертв, пока разрывают их на части."
          },
          {
            "name": "Fellgor Shaman",
            "text": "Служа мерзкими проповедниками своим сородичам, а также злокозненными советниками Ironhorn'ам, Shaman способны повелевать необузданной мощью Хаоса. Именно Shaman возглавляют кровавые ритуальные жертвоприношения Fellgor Ravagers перед herdstone стаи."
          },
          {
            "name": "Fellgor Toxhorn",
            "text": "Даже больше, чем остальные представители своего вида, Toxhorn находят особую радость в уничтожении техники врагов. Они упиваются разложением и высвобождением химикатов и токсинов, ускоряющих его, будь то против машины или живого существа."
          },
          {
            "name": "Fellgor Vandal",
            "text": "Владея огромными двуручными mancrusher'ами, Vandal выполняют простую задачу среди Fellgor Ravagers — крушить всё и всех, кого пожелают они сами или их Ironhorn. Каждым сокрушительным ударом они превращают в крошево броню, кости и плоть."
          },
          {
            "name": "Fellgor Warrior",
            "text": "Костяк стай Fellgor Ravagers, Warrior несут одну обязанность — убивать врага. Они делают это с радостью, зная, что чем больше разрушений причинят, тем больше благосклонности заслужат от своей стаи и от самих богов."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Frenzy",
          "text": "Когда дружественный оператор FELLGOR RAVAGER, у которого нет одного из твоих Frenzy tokens, должен быть incapacitated во время битвы, вместо этого он не incapacitated и получает один из твоих Frenzy tokens. Все оставшиеся кубики атаки отбрасываются (включая твои, если этот оператор дерётся или отвечает (retaliating)). Если у него был приказ Conceal, смени его на Engage.\n\nПока у дружественного оператора FELLGOR RAVAGER есть один из твоих Frenzy tokens:\n- Он incapacitated только так, как описано ниже.\n- Он не может иметь приказ Conceal.\n- Он считается injured.\n- Он не может выполнять действие Pick Up Marker, unique actions (кроме Sweeping Blow, см. VANDAL) или mission actions (кроме Operate Hatch).\n- Для целей определения контроля маркеров и зон killzone считай его APL stat равным 1. Это имеет приоритет над любыми другими изменениями стата.\n\nДружественный оператор FELLGOR RAVAGER с одним из твоих Frenzy tokens incapacitated, когда выполняется одно из следующего:\n- Заканчивается его активация или counteraction.\n- Вражеский оператор дерётся против него или отвечает (retaliating), и твой противник бьёт с critical success.\n- Вражеский оператор дерётся против него или отвечает (retaliating), и твой противник бьёт по нему во второй раз с normal success (в том числе ударами из двух разных действий Fight).\n- Вражеский оператор стреляет по нему, и ему наносится Critical Dmg.\n- Битва заканчивается (разреши это до любых victory conditions, разрешаемых в конце битвы).\n\nТвой противник считает оператора FELLGOR RAVAGER incapacitated (вместо момента его фактического incapacitated) в момент, когда тот получает один из твоих Frenzy tokens — для целей начисления VP (например, kill op) и faction rules, требующих incapacitated (например, HAND OF THE ARCHON Power From Pain, CHAOS CULT Mutation и т.п.)."
        },
        {
          "name": "Violent Temperament",
          "text": "Когда дружественный оператор FELLGOR RAVAGER дерётся или отвечает (retaliating), после броска своих attack dice можно применить это правило. Если применяешь — нужно перебросить все свои attack dice (нельзя перебросить только часть).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Ambush",
          "text": "Когда дружественный оператор FELLGOR RAVAGER активируется, если его приказ меняется с Conceal на Engage, он ambushing на время этой активации. Когда дружественный оператор FELLGOR RAVAGER, который ambushing, дерётся, можно удержать один из своих fail как normal success вместо того, чтобы его отбросить, либо удержать один из своих normal success как critical success. Обрати внимание: оператор с одним из твоих Frenzy tokens не может ambush.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Pelting Firepower",
          "text": "Когда дружественный оператор FELLGOR RAVAGER стреляет по вражескому оператору, по которому в этот turning point уже стрелял другой дружественный оператор FELLGOR RAVAGER, ranged-оружие этого первого дружественного оператора получает weapon rule Ceaseless; если по вражескому оператору в этот turning point стреляли более одного другого дружественного оператора, его ranged-оружие получает weapon rule Relentless вместо этого.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Reckless Determination",
          "text": "Когда вражеский оператор стреляет по expended дружественному оператору FELLGOR RAVAGER, если не удаётся удержать ни один cover save, можно удержать один из своих defence dice как normal success без броска (в дополнение к cover save, если он есть).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Ruthless Rampage",
          "text": "Используй этот firefight ploy после того, как дружественный оператор FELLGOR RAVAGER выполнил действие Fight, если он больше не в пределах control range вражеских операторов. Тот дружественный оператор может немедленно выполнить бесплатное действие Charge (даже если уже выполнял действие Charge во время этой активации), но не может переместиться больше чем на 3\" во время этого действия.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Wild Rage",
          "text": "Используй этот firefight ploy, когда активируется дружественный оператор FELLGOR RAVAGER. До конца активации того оператора добавь 1\" к его Move stat.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Animalistic Fury",
          "text": "Используй этот firefight ploy, когда дружественный оператор FELLGOR RAVAGER дерётся или отвечает (retaliating), и ты бьёшь с critical success. Нанеси этим ударом на 1 урона больше.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Bloodsense",
          "text": "Используй этот firefight ploy во время активации дружественного оператора FELLGOR RAVAGER, когда он incapacitates вражеского оператора в пределах своего control range. Выбери другого готового (ready) дружественного оператора FELLGOR RAVAGER, видимого и в пределах 3\" от incapacitated вражеского оператора. Когда первый дружественный оператор станет expended, можно активировать того другого дружественного оператора до того, как активируется противник. Когда тот другой оператор станет expended, противник активируется как обычно.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "frenzy",
          "name": "Frenzy",
          "target": "friendly",
          "text": "Когда дружественный оператор FELLGOR RAVAGER, у которого нет одного из твоих Frenzy tokens, должен быть incapacitated во время битвы, вместо этого он не incapacitated и получает один из твоих Frenzy tokens. Все оставшиеся кубики атаки отбрасываются (включая твои, если этот оператор дерётся или отвечает (retaliating)). Если у него был приказ Conceal, смени его на Engage.\n\nПока у дружественного оператора FELLGOR RAVAGER есть один из твоих Frenzy tokens:\n- Он incapacitated только так, как описано ниже.\n- Он не может иметь приказ Conceal.\n- Он считается injured.\n- Он не может выполнять действие Pick Up Marker, unique actions (кроме Sweeping Blow, см. VANDAL) или mission actions (кроме Operate Hatch).\n- Для целей определения контроля маркеров и зон killzone считай его APL stat равным 1. Это имеет приоритет над любыми другими изменениями стата.\n\nДружественный оператор FELLGOR RAVAGER с одним из твоих Frenzy tokens incapacitated, когда выполняется одно из следующего:\n- Заканчивается его активация или counteraction.\n- Вражеский оператор дерётся против него или отвечает (retaliating), и твой противник бьёт с critical success.\n- Вражеский оператор дерётся против него или отвечает (retaliating), и твой противник бьёт по нему во второй раз с normal success (в том числе ударами из двух разных действий Fight).\n- Вражеский оператор стреляет по нему, и ему наносится Critical Dmg.\n- Битва заканчивается (разреши это до любых victory conditions, разрешаемых в конце битвы).\n\nТвой противник считает оператора FELLGOR RAVAGER incapacitated (вместо момента его фактического incapacitated) в момент, когда тот получает один из твоих Frenzy tokens — для целей начисления VP (например, kill op) и faction rules, требующих incapacitated (например, HAND OF THE ARCHON Power From Pain, CHAOS CULT Mutation и т.п.)."
        },
        {
          "id": "gong_knell",
          "name": "Gong Knell",
          "target": "friendly",
          "text": "До начала следующей активации этого оператора или пока он не incapacitated (что наступит раньше): когда оператор стреляет по этому оператору, улучши Save stat этого оператора на 1 и игнорируй weapon rule Piercing.",
          "statMod": {
            "stat": "save",
            "delta": 1
          }
        },
        {
          "id": "mantle_of_darkness",
          "name": "Mantle of Darkness",
          "target": "friendly",
          "text": "PSYCHIC. До начала следующей активации этого оператора или пока он не incapacitated (что наступит раньше): когда дружественный оператор FELLGOR RAVAGER виден и в пределах 3\" от этого оператора, имеет приказ Conceal и находится в укрытии (cover), тот дружественный оператор не может быть выбран как допустимая цель — это имеет приоритет над всеми остальными правилами (например, Seek, Vantage terrain), кроме нахождения в пределах 2\".\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора."
        },
        {
          "id": "pelting_firepower",
          "name": "Pelting Firepower",
          "target": "enemy",
          "text": "Когда дружественный оператор FELLGOR RAVAGER стреляет по вражескому оператору, по которому в этот turning point уже стрелял другой дружественный оператор FELLGOR RAVAGER, ranged-оружие этого первого дружественного оператора получает weapon rule Ceaseless; если по вражескому оператору в этот turning point стреляли более одного другого дружественного оператора, его ranged-оружие получает weapon rule Relentless вместо этого."
        }
      ]
    },
    "Kommandos": {
      "archetypes": [
        "Infiltration",
        "Seek & Destroy"
      ],
      "required": [
        {
          "name": "Kommando Boss Nob",
          "apl": 3,
          "move": "6\"",
          "save": "5+",
          "wounds": 14,
          "count": 1,
          "weapons": [
            {
              "name": "Slugga",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Big choppa",
              "atk": 5,
              "hit": "3+",
              "dmg": "5/6",
              "wr": "-"
            },
            {
              "name": "Power klaw",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/7",
              "wr": "Brutal, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Krumpin' Time",
              "text": "Этот оператор может выполнить два действия Fight во время своей активации."
            },
            {
              "name": "Get It Done!",
              "text": "SUPPORT. Выбери одного другого дружественного оператора KOMMANDO (кроме BOMB SQUIG), видимого этому оператору и в пределах 6\" от него. До конца следующей активации того оператора добавь 1 к его APL stat.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или во время counteract.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/kommandos/kommandonob.png"
        }
      ],
      "pool": [
        {
          "name": "Kommando Bomb Squig",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 5,
          "weapons": [
            {
              "name": "Explosives",
              "atk": 6,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Blast 1\", Limited 1, Explosive*"
            },
            {
              "name": "Bite",
              "atk": 3,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Explosive",
              "text": "Этот оператор может выполнить действие Shoot этим оружием, находясь в пределах control range вражеского оператора. Не выбирай допустимую цель — этот оператор всегда является первичной целью и не может быть in cover или obscured."
            },
            {
              "name": "Boom!",
              "text": "Если этот оператор incapacitated в битве, в которой он ещё не использовал свои explosives, брось D6, либо D6 дважды и выбери результат, если хочешь, если любой результат 4+. Если так, этот оператор выполняет свободное действие Shoot своими explosives, прежде чем будет убран из killzone."
            },
            {
              "name": "Stoopid",
              "text": "В Firefight phase, когда определяешь order этого оператора, нельзя выбрать Conceal. Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fight, Reposition и Shoot. Он не может использовать никакое оружие, отсутствующее на его карточке."
            },
            {
              "name": "Expendable",
              "text": "Этот оператор игнорируется для kill op твоего оппонента (когда он incapacitated), а также при определении твоего starting number of operatives. Он также игнорируется для victory conditions или scoring VPs, если они требуют, чтобы операторы escape, survive или были incapacitated вражескими операторами."
            }
          ],
          "portrait": "img/portraits/kommandos/bombsquigkommando.png"
        },
        {
          "name": "Kommando Boy",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Slugga",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Choppa",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Taktikal Wot-notz",
              "text": "Once per turning point можно выполнить каждое из следующих действий: одним дружественным оператором KOMMANDO BOY выполнить действие Smoke Grenade; одним дружественным оператором KOMMANDO BOY выполнить действие Stun Grenade.\n\nПравила для этих действий находятся в universal equipment. Выполнение этих действий с помощью этого правила не учитывается в лимитах действий (т.е. если также выбираешь эти гранаты из equipment)."
            }
          ],
          "portrait": "img/portraits/kommandos/kommandoboy.png"
        },
        {
          "name": "Kommando Breacha Boy",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Slugga",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Breacha ram",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/5",
              "wr": "Brutal, Severe, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Breach",
              "text": "1AP. Размести один свой Breach marker в пределах control range этого оператора как можно ближе к элементу террейна в пределах его control range. Пока оператор в пределах 1\" от этого маркера, части того элемента террейна толщиной не более 1\" считаются Accessible terrain.\n\nЭтот оператор может выполнить это действие во время действия Charge или Reposition, и в этом случае оно стоит на 1 AP меньше; оставшуюся дистанцию движения можно использовать после этого.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или если элемент террейна не в пределах его control range."
            }
          ],
          "portrait": "img/portraits/kommandos/breacha_boy.png"
        },
        {
          "name": "Kommando Burna Boy",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Burna (standard)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 8\", Saturate, Torrent 2\""
            },
            {
              "name": "Burna (deluge)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 4\", Saturate, Seek, Torrent 0\"*"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Torrent 0\"",
              "text": "Torrent 0\" означает, что нельзя выбирать дополнительные вторичные цели, но это оружие всё равно имеет weapon rule Torrent для всех прочих игровых целей (например, правило Condensed Stronghold)."
            }
          ],
          "portrait": "img/portraits/kommandos/burnaboy.png"
        },
        {
          "name": "Kommando Comms Boy",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Shokka pistol",
              "atk": 6,
              "hit": "4+",
              "dmg": "1/0",
              "wr": "Range 8\", Devastating 2, Severe, Stun"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "I Got a Plan, Ladz",
              "text": "Once во время каждой активации этого оператора он может выполнить действие Pick Up Marker, Place Marker или mission-действие за 1 AP меньше."
            },
            {
              "name": "Listen In",
              "text": "SUPPORT. Выбери одного другого дружественного оператора KOMMANDO (кроме BOMB SQUIG), видимого этому оператору и в пределах 6\" от него. До конца следующей активации того оператора добавь 1 к его APL stat.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/kommandos/comms_boy.png"
        },
        {
          "name": "Kommando Dakka Boy",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Dakka shoota (short range)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 9\", Ceaseless"
            },
            {
              "name": "Dakka shoota (long range)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Dakka Dash",
              "text": "Выполни свободное действие Dash и свободное действие Shoot этим оператором в любом порядке. Для этого действия Shoot можно выбрать только dakka shoota.\n\nЭтот оператор не может выполнять это действие, имея Conceal order, или находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/kommandos/dakka_boy.png"
        },
        {
          "name": "Kommando Grot",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 5,
          "weapons": [
            {
              "name": "Grot choppa",
              "atk": 3,
              "hit": "5+",
              "dmg": "1/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Sneaky Zogger",
              "text": "Этот оператор не может иметь Engage order. Пока этот оператор in cover, его нельзя выбрать в качестве допустимой цели, что имеет приоритет над всеми прочими правилами (например, Seek, Vantage terrain), кроме нахождения в пределах 2\"."
            },
            {
              "name": "Grappling Hook",
              "text": "Выбери видимую точку на элементе террейна для этого оператора. Убери этого оператора из killzone и размести его заново в пределах 1\" по горизонтали от той точки, в месте, куда его можно разместить, не в пределах control range вражеских операторов, и с той точкой, видимой ему.\n\nЭто действие считается действием Reposition. Этот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или во время активации, в которой он выполнил действие Charge или Fall Back (и наоборот).",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/kommandos/kommando_grot.png"
        },
        {
          "name": "Kommando Rokkit Boy",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Rokkit launcha (aimed)",
              "atk": 6,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Blast 1\", Ceaseless, Heavy (Dash only)"
            },
            {
              "name": "Rokkit launcha (mobile)",
              "atk": 6,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Blast 1\""
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [],
          "portrait": "img/portraits/kommandos/rokkitboy.png"
        },
        {
          "name": "Kommando Slasha Boy",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Throwing knives",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/5",
              "wr": "Range 6\", Silent"
            },
            {
              "name": "Twin choppas",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Ceaseless, Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Dat All You Got?",
              "text": "После того как этот оператор дерётся или отвечает (retaliating), если он не incapacitated, можно нанести D3 урона вражескому оператору в этой последовательности."
            }
          ],
          "portrait": "img/portraits/kommandos/slasha_boy.png"
        },
        {
          "name": "Kommando Snipa Boy",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Scoped big shoota (concealed)",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Devastating 2, Heavy, Silent, Concealed Position*"
            },
            {
              "name": "Scoped big shoota (stationary)",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Devastating 2, Heavy"
            },
            {
              "name": "Scoped big shoota (sweeping)",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Heavy (Dash only), Torrent 1\""
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Concealed Position",
              "text": "Этот оператор может использовать это оружие только в первый раз, когда он выполняет действие Shoot за битву."
            }
          ],
          "portrait": "img/portraits/kommandos/snipa_boy.png"
        }
      ],
      "poolPick": 9,
      "equipment": "Kommandos",
      "lore": {
        "intro": "Kommandos — необычные для Ork'ов мастера скрытности. Они используют любые нечестные и хитрые приёмы, какие только могут придумать, чтобы достичь своих целей. Но стоит начаться бою, как их природная любовь к насилию берёт верх.",
        "operatives": [
          {
            "name": "Kommando Boss Nob",
            "text": "Самые хитрые из хитрых гитов, Kommando Nob-ы одновременно жестоки и достаточно хитроумны, чтобы командовать самыми коварными представителями своего вида."
          },
          {
            "name": "Kommando Bomb Squig",
            "text": "Bomb squig-и — одни из самых опасных представителей своего вида. Помимо того, что они прожорливые хищники, как следует из названия, они несут на себе всевозможную взрывчатку. В бою они мчатся к врагу, подрывая вражеские войска и уничтожая их укрепления."
          },
          {
            "name": "Kommando Boy",
            "text": "Kommando-ы воплощают орочью добродетель хитрости. Мало что делает их счастливее, чем подкрасться к ничего не подозревающему врагу и изрубить, изрешетить и расстрелять его прежде, чем тот успеет дать отпор."
          },
          {
            "name": "Kommando Breacha Boy",
            "text": "Kommando Breacha Boy-ям поручено вламываться в помещения и врагов, круша их своими Breacha ram-ами. Это занятие им по душе, а те, кто видел их в деле и выжил, вскоре начинают особенно бояться этих жестоких зеленокожих."
          },
          {
            "name": "Kommando Burna Boy",
            "text": "Burna Boy-и все как один — пироманьяки, одержимые полыхающими инферно — чем больше и жарче, тем лучше. Те из Kommando-ов, что исполняют эту роль, проявляют исключительное терпение, зная, что ожидание делает опустошение, которое они сеют своими burna, ещё более удовлетворяющим."
          },
          {
            "name": "Kommando Comms Boy",
            "text": "Нет оправдания тому, чтобы не следовать плану босса, каким бы сомнительно разумным он ни казался. Kommando Comms Boy-и следят за тем, чтобы ни один Ork не «забыл» свои приказы на поле боя, передавая указания босса."
          },
          {
            "name": "Kommando Dakka Boy",
            "text": "Звук ревущей dakka — музыка для ушей многих Ork'ов, и не в последнюю очередь для Kommando Dakka Boy-ев. Они с превеликим удовольствием обрушивают на врага огромные объёмы пуль, уничтожая лёгкое укрытие, обращая врагов в бегство и сея панику."
          },
          {
            "name": "Kommando Grot",
            "text": "Чтобы продержаться в жестоких реалиях орочьего общества, Grot-ам приходится учиться лгать, обманывать, воровать, подлизываться и строить планы — все эти качества ценны для Kommando kill team."
          },
          {
            "name": "Kommando Rokkit Boy",
            "text": "Поднимаясь из укрытых позиций, Kommando Rokkit Boy-и обстреливают ракетами бункеры, топливные хранилища, склады боеприпасов или прямо гущу ничего не подозревающего врага — и всё это с широкой ухмылкой при виде причинённого хаоса."
          },
          {
            "name": "Kommando Slasha Boy",
            "text": "Slasha Boy-и любят оказываться в самой гуще боя, даже по орочьим меркам. Увешанные всевозможными клинками, они прорубаются сквозь врага за врагом."
          },
          {
            "name": "Kommando Snipa Boy",
            "text": "Хотя немногим Ork'ам хватает терпения быть Kommando Snipa Boy, те, кто исполняет эту роль, — настоящие эксперты в поиске лучших позиций для стрельбы по врагу, убийстве цели и наблюдении за тем, как выжившие мечутся и паникуют в замешательстве."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Throat Slittas",
          "text": "Каждый дружественный оператор KOMMANDO (кроме BOMB SQUIG) может выполнить действие Charge, имея Conceal order."
        },
        {
          "name": "Dakka! Dakka! Dakka!",
          "text": "Ranged-оружие дружественных операторов KOMMANDO получает weapon rule Punishing.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Waaagh!",
          "text": "Оружие ближнего боя дружественных операторов KOMMANDO получает weapon rule Balanced.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Skulk About",
          "text": "Когда вражеский оператор стреляет по дружественному оператору KOMMANDO, имеющему Conceal order, можно удержать один свой defence dice как normal success, не бросая его (в дополнение к cover save, если есть).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Ssssshhhh!",
          "text": "Каждый дружественный оператор KOMMANDO, который не является допустимой целью для вражеских операторов, либо имеет Conceal order и находится более чем в 6\" от вражеских операторов, может сразу выполнить свободное действие Dash. Нельзя использовать этот ploy в течение первого turning point.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Just a Scratch",
          "text": "Используй этот firefight ploy, когда кубик атаки должен нанести Normal Dmg дружественному оператору KOMMANDO (кроме BOMB SQUIG и GROT). Проигнорируй этот нанесённый урон.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Krump 'Em!",
          "text": "Используй этот firefight ploy в конце Firefight phase. Выбери одного дружественного оператора KOMMANDO. Он может сразу выполнить свободное действие Fight.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Kunnin' But Brutal",
          "text": "Используй этот firefight ploy, когда дружественный оператор KOMMANDO, имеющий Conceal order, дерётся во время активации, в которой он выполнил действие Charge, ты разрешаешь первый кубик атаки, и это strike с normal success. Считай тот normal success critical success вместо этого.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Shake It Off",
          "text": "Используй этот firefight ploy, когда дружественный оператор KOMMANDO активируется, или когда изменяется его APL stat. До начала следующего turning point можно игнорировать любые изменения его APL stat.",
          "cost": "Firefight Ploy"
        }
      ]
    },
    "Murderwing": {
      "archetypes": [
        "Recon",
        "Seek & Destroy"
      ],
      "required": [
        {
          "name": "Murderwing Chaos Lord",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 15,
          "count": 1,
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
              "name": "Lightning claw",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Lethal 5+, Rending"
            },
            {
              "name": "Power fist",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/7",
              "wr": "Brutal, Shock"
            },
            {
              "name": "Power weapon",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            },
            {
              "name": "Relic lightning claws",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Ceaseless, Lethal 5+, Rending"
            }
          ],
          "abilities": [
            {
              "name": "Path to Damnation",
              "text": "Этот оператор начинает битву с 1 Damnation point. Once per action, можно попытаться применить один Boon of Damnation, когда это указано. Если применяешь, брось один D6 и сравни результат с числом Damnation points у этого оператора; если результат:\n- Higher: разреши правило, затем этот оператор получает 1 Damnation point.\n- Equal: не разрешай правило.\n- Less: нанеси этому оператору урон, равный его числу Damnation points, и не разрешай правило.\n\nЕсли у этого оператора 6 Damnation points, разреши правило без броска. Нельзя предпринимать попытку больше одного раза за действие, вне зависимости от результата D6."
            },
            {
              "name": "Boons of Damnation",
              "text": "Boons of Damnation разрешаются броском D6, см. выше:\n- Когда кубик атаки должен нанести этому оператору урон 3 или более, можно игнорировать количество урона, равное числу Damnation points этого оператора.\n- Когда этот оператор дерётся или отвечает (retaliating) и наносит удар (strike) кубиком атаки, можно нанести дополнительный урон, равный числу Damnation points этого оператора."
            }
          ],
          "portrait": "img/portraits/murderwing/chaos_lord_with_jump_pack.png"
        }
      ],
      "pool": [
        {
          "name": "Murderwing Champion",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
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
              "name": "Power fist",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/7",
              "wr": "Brutal, Shock"
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
              "name": "Chaos Champion",
              "text": "STRATEGIC GAMBIT. Убери свой Challenge token с вражеского оператора, у которого он есть (если есть), затем выбери одного вражеского оператора, чтобы получить твой Challenge token. Когда этот оператор дерётся против или отвечает (retaliating) против оператора, у которого есть его Challenge token, на этапе Select Weapons можно выбрать одно из следующих weapon rules для оружия ближнего боя этого оператора до конца последовательности: Balanced, Brutal, Punishing, Severe, Shock."
            },
            {
              "name": "Path to Glory",
              "text": "Каждый раз, когда этот оператор выводит из строя вражеского оператора, у которого есть его Challenge token, ты получаешь 1CP."
            }
          ],
          "portrait": "img/portraits/murderwing/murderwing_champion.png"
        },
        {
          "name": "Murderwing Curseclaw",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Mutated claws",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Frenzied Attack",
              "text": "Если этот оператор выведен из строя во время действия Fight, можно нанести удар (strike) вражескому оператору в этой последовательности одним из своих неразрешённых successes, прежде чем этот оператор будет убран из killzone."
            },
            {
              "name": "Snatch",
              "text": "1AP. BOOST action. Выбери одного вражеского оператора в пределах BOOST ZONE этого оператора. Оба игрока бросают по одному D6 и добавляют результат к Wounds stat своего оператора. Если твой результат выше, убери того вражеского оператора из killzone и поставь его обратно в пределах BOOST ZONE этого оператора или его control range. Он должен быть размещён в месте, где может быть размещён, и не может быть размещён дальше от этого оператора, чем был при уборке.\n\nЭтот оператор не может выполнять это действие обычным образом. Вместо этого он выполняет это действие во время действия Fall Back или Reposition после установки из BOOST."
            }
          ],
          "portrait": "img/portraits/murderwing/curseclaw.png"
        },
        {
          "name": "Murderwing Depredator",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Great chainaxe",
              "atk": 5,
              "hit": "4+",
              "dmg": "5/7",
              "wr": "Brutal"
            }
          ],
          "abilities": [
            {
              "name": "Horrifying Dismemberment",
              "text": "Каждый раз, когда этот оператор выводит из строя вражеского оператора, деясь или отвечая (retaliating), выбери одного другого вражеского оператора, видимого этому или выведенному из строя вражескому оператору и в пределах 3\" от одного из них. Вычти 1 из APL stat того вражеского оператора до конца его следующей активации."
            },
            {
              "name": "Carving Blow",
              "text": "1AP. Нанеси 2D3 урона каждому оператору, видимому этому оператору и в пределах 2\" от него, в выбранном тобой порядке (разрешай каждый отдельно).\n\nЭтот оператор не может выполнять это действие, имея Conceal order, или во время той же активации, в которой он выполнил действие Slice from Above (см. Bladefins faction equipment), действие Clawed Charge (см. Clawed Armour faction equipment) или два действия Fight (и наоборот)."
            }
          ],
          "portrait": "img/portraits/murderwing/depredator.png"
        },
        {
          "name": "Murderwing Huntmaster",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
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
              "name": "Pinned Prey",
              "text": "Каждый раз, когда вражеский оператор будет выполнять действие Fall Back в пределах control range этого оператора, если нет других дружественных операторов в пределах control range этого вражеского оператора, можно применить это правило. Если применяешь, брось два D6, либо один D6, если у того вражеского оператора Wounds stat выше, чем у этого оператора. Если любой результат — 4+, тот вражеский оператор не может выполнить это действие во время этой активации/counteract-а (AP за него не тратится)."
            },
            {
              "name": "Strike from Above",
              "text": "1AP. BOOST action. Нанеси 2D3+1 урона одному вражескому оператору в пределах BOOST ZONE этого оператора.\n\nЭтот оператор не может выполнять это действие обычным образом. Вместо этого он выполняет это действие во время действия Fall Back или Reposition после установки из BOOST."
            }
          ],
          "portrait": "img/portraits/murderwing/huntmaster.png"
        },
        {
          "name": "Murderwing Raptor",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "maxCopies": 5,
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
              "name": "Chainsword",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Thrill of Flight",
              "text": "Каждый раз, когда этот оператор выполняет BOOST во время своей активации:\n- Можно убрать любые изменения его APL stat.\n- Можно игнорировать любые изменения его stats от ранения (including его weapons' stats) до конца активации."
            }
          ],
          "portrait": "img/portraits/murderwing/murderwing_raptor.png"
        },
        {
          "name": "Murderwing Shrieker",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
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
              "name": "Modified Vox-casters",
              "text": "Каждый раз, когда вражеский оператор в пределах 3\" от этого оператора, твой оппонент должен потратить 1 дополнительный AP, чтобы тот вражеский оператор выполнил действие Pick Up Marker и mission-действия.\n\nПри определении контроля маркера, считай общий APL stat вражеских операторов, оспаривающих его, на 1 меньше, если хотя бы один из тех операторов в пределах 3\" от этого оператора. Это не изменение APL stat, поэтому такие изменения суммируются с этим."
            },
            {
              "name": "Shriek",
              "text": "1AP. Выбери одного вражеского оператора, видимого этому оператору и в пределах 6\" от него. Как альтернатива, выбери одного вражеского оператора в пределах BOOST ZONE этого оператора (в этот момент он становится BOOST). Если вражеские операторы в пределах control range этого оператора, нельзя выбрать вражеского оператора, который не в их числе. Нанеси D3 урона выбранному оператору и вычти 1 из его APL stat до конца его следующей активации.\n\nЭтот оператор не может выполнять это действие, имея Conceal order. Если выбираешь вражеского оператора в пределах BOOST ZONE этого оператора, этот оператор не может выполнять это действие обычным образом. Вместо этого он выполняет это действие во время действия Fall Back или Reposition после установки из BOOST."
            }
          ],
          "portrait": "img/portraits/murderwing/shrieker.png"
        },
        {
          "name": "Murderwing Skysear",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
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
          "abilities": [],
          "portrait": "img/portraits/murderwing/murderwing_skysear.png"
        },
        {
          "name": "Murderwing Warp Talon",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "weapons": [
            {
              "name": "Lightning claws",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Ceaseless, Lethal 5+, Rending"
            }
          ],
          "abilities": [
            {
              "name": "Slice the Veil",
              "text": "При установке этого оператора перед битвой, можно вместо этого установить его в warp: помести его в сторону от killzone. В первую Firefight phase, когда этот оператор активируется, помести один свой Warp marker полностью в пределах своей территории, затем разверни этого оператора им.\n\nВо вторую Firefight phase, когда этот оператор активируется, установи его полностью в пределах своей drop zone либо полностью в пределах своей территории, оспаривая свой Warp marker. Продолжай его активацию как обычно, но во время неё нельзя потратить более 2AP на него, и нельзя использовать более 4\" дистанции движения. До Ready step следующей Strategy phase, этот оператор obscured для операторов на расстоянии более 3\" от него.\n\nПока этот оператор в warp, он считается ready дружественным оператором MURDERWING для firefight ploy Malicious Narcissism."
            }
          ],
          "portrait": "img/portraits/murderwing/warp_talon.png"
        }
      ],
      "poolPick": 5,
      "equipment": "Murderwing",
      "lore": {
        "intro": "Murderwing — банда Chaos Space Marine Raptors и Warp Talons, обрушивающихся на врагов сверху на реактивных ранцах, среди столбов пламени. Их операторы — садистские убийцы, чьи одержимости отражены в мутациях, доспехах и оружии, которое они несут в бой. Все они — безжалостные охотники, объединяющие свои умения, чтобы избранная добыча не смогла ускользнуть.",
        "operatives": [
          {
            "name": "Murderwing Chaos Lord",
            "text": "Многие Chaos Lord-ы наслаждаются трепетом воздушного боя, упиваясь ужасом, который они внушают своей добыче. Возглавляющие Murderwing делают это личным примером, обрушиваясь во главе атаки, чтобы избивать врагов power weapons, lightning claws и power fists и рвать своих жертв на части."
          },
          {
            "name": "Murderwing Champion",
            "text": "Murderwing Champion-ы добиваются главенства над союзниками через запугивание и кровопролитие. Это грозные воины, демонстрирующие своё мастерство, выискивая, вступая в бой и убивая вражеских лидеров и героев, тем самым укрепляя собственный авторитет."
          },
          {
            "name": "Murderwing Huntmaster",
            "text": "Huntmaster — прецизионный убийца, выбирающий цели перед тем, как обрушиться с небес, чтобы пронзить их своим power glaive. Часто жертвы оставляются корчиться на острие его копья, наблюдая, как их союзников разрывают на части."
          },
          {
            "name": "Murderwing Depredator",
            "text": "Беспорядочный убийца, Depredator обрушивается в самую гущу схватки, скашивая множество врагов каждым жестоким взмахом своего гигантского двуручного оружия."
          },
          {
            "name": "Murderwing Shrieker",
            "text": "Одержимые желанием вселять леденящий душу ужас, Shrieker-ы украшают свои варварские доспехи громкоговорителями и vox-casters, усиливающими их леденящие кровь вопли, когда они обрушиваются в самую гущу врагов."
          },
          {
            "name": "Murderwing Curseclaw",
            "text": "Полностью приняв свою звериную природу, Curseclaw-ы — жутко мутировавшие создания, движимые инстинктом. Они сражаются и убивают в исступлении, используя когтистые руки и ноги."
          },
          {
            "name": "Murderwing Skysear",
            "text": "Предпочитая уничтожать врагов вспышками пламени или лучами тепловой энергии, Skysear-ы используют свою мобильность, чтобы занять идеальные позиции для убийства."
          },
          {
            "name": "Murderwing Warp Talon",
            "text": "Дикие до крайности, Warp Talon-ы спускаются с цепи, как охотничьи псы. Их чувства, настроенные эмпирически, позволяют им выслеживать и устраивать засады на добычу с безошибочной точностью и свирепостью."
          },
          {
            "name": "Murderwing Raptor",
            "text": "Презираемые союзниками за своё чванливое высокомерие, Raptor-ы тем не менее ценятся многими Chaos Lord-ами за боевые навыки. Они заслуженно известны своим садизмом, стремясь не только разорвать врагов на части, но и вселить в них полный ужас перед тем, как нанести смертельный удар."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Jump Pack",
          "text": "Каждый раз, когда дружественный оператор MURDERWING выполняет действие Charge, Fall Back или Reposition во время своей активации, в начале любого straight-line increment, если ни одна часть его базы не находится под Vantage terrain, он может выполнить BOOST на этот increment. Если делает это, он не двигается на этот increment; вместо этого уберите его из killzone и установите его обратно полностью в пределах x\" по горизонтали от его исходного местоположения. X — дистанция по твоему выбору (округлённая до целого дюйма), но она добавляется к общей дистанции движения, использованной для этого действия. Если это BOOST во время действия Charge, не добавляй дополнительные 2\" к его move allowance.\n\nЭтот оператор должен быть установлен в месте, где он может быть размещён, и не может быть установлен в пределах control range вражеского оператора, если это не действие Charge."
        },
        {
          "name": "Astartes",
          "text": "Во время каждой активации дружественного оператора MURDERWING он может выполнить либо два действия Shoot, либо два действия Fight. Если это два действия Shoot, для хотя бы одного из них должен быть выбран bolt pistol.\n\nКаждый дружественный оператор MURDERWING может выполнить counteract вне зависимости от своего order."
        },
        {
          "name": "Predators Above",
          "text": "Каждый раз, когда дружественный оператор MURDERWING находится как минимум на 2\" выше пола killzone, его оружие получает weapon rule Balanced. Каждый раз, когда дружественный оператор MURDERWING выполняет BOOST, его оружие получает weapon rule Balanced до конца этой активации.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Cull the Weak",
          "text": "Каждый раз, когда дружественный оператор MURDERWING стреляет или дерётся, его оружие получает weapon rule Punishing, если верно любое из следующего для оператора, против которого стреляет или дерётся дружественный оператор:\n- Он как минимум на 2\" ниже того дружественного оператора.\n- Его APL stat меньше нормального.\n- Он был wounded в начале активации/counteract-а.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Nightmare on High",
          "text": "Каждый раз, когда оператор стреляет по дружественному оператору MURDERWING, который как минимум на 2\" выше пола killzone или выполнил BOOST в этот turning point, можно перебросить один свой кубик защиты.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Instil Fear",
          "text": "Каждый раз, когда дружественный оператор MURDERWING дерётся, Normal Dmg 3 или более наносит на 1 меньше урона.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Malicious Narcissism",
          "text": "Используй этот firefight ploy, когда наступает твоя очередь активироваться с дружественным оператором, если только один дружественный оператор MURDERWING ready. До конца turning point, каждый раз, когда у тебя меньше ready дружественных операторов, чем у оппонента, можно пропустить свою активацию. Нельзя выполнять counteract, пока тот дружественный оператор MURDERWING не будет активирован.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Murderous Descent",
          "text": "Используй этот firefight ploy, когда вражеский оператор заканчивает действие Charge, Dash, Fall Back или Reposition в пределах 3\" по горизонтали и более чем на 2\" ниже дружественного оператора MURDERWING. Прерви активацию/counteract того вражеского оператора и сразу выполни свободное действие Charge тем дружественным оператором. Он должен закончить это действие в пределах control range того вражеского оператора. Если это невозможно, прерывание отменяется, и это правило не считается использованным.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Long Forgotten Honour",
          "text": "Используй этот firefight ploy, когда дружественный оператор MURDERWING дерётся или отвечает (retaliating), когда ты разрешаешь critical success. Вместо нанесения удара (strike) или блока, заверши последовательность (оставшиеся кубики атаки отбрасываются) и сразу выполни свободное действие Fall Back на расстояние до 3\" тем оператором (затем действие Fight заканчивается). Этот оператор может сделать это, даже если он выполнил действие, запрещающее ему выполнять действие Fall Back.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Wings of Darkness",
          "text": "Используй этот firefight ploy, когда дружественный оператор MURDERWING выполняет действие Fall Back или Reposition, когда он выполняет BOOST. Этот оператор может быть установлен на дополнительные 3\" дальше от этого BOOST, но не может выполнить действие Shoot, Fight или Carving Blow (см. оператор DEPREDATOR) до следующего turning point. Нельзя использовать этот ploy в первый turning point.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "damnation_points",
          "name": "Damnation Points",
          "target": "friendly",
          "counter": true,
          "max": 6,
          "restrictToOperator": "Murderwing Chaos Lord",
          "text": "Path to Damnation (MURDERWING CHAOS LORD). Этот оператор начинает битву с 1 Damnation point. Once per action, можно попытаться применить один Boon of Damnation: брось D6 и сравни с числом Damnation points — Higher: разреши правило, получи +1 Damnation point; Equal: не разрешай; Less: нанеси этому оператору урон, равный числу Damnation points, и не разрешай. При 6 points правило разрешается без броска."
        },
        {
          "id": "challenge_token",
          "name": "Challenge Token",
          "target": "enemy",
          "text": "Chaos Champion (MURDERWING CHAMPION). STRATEGIC GAMBIT. Убери свой Challenge token с вражеского оператора (если есть), затем выбери одного вражеского оператора, чтобы он получил твой Challenge token. Когда этот оператор дерётся против/отвечает против того оператора — на этапе Select Weapons доступны дополнительные weapon rules. Path to Glory: вывод из строя оператора с этим token даёт 1CP."
        }
      ]
    },
    "Pathfinders": {
      "archetypes": [
        "Infiltration",
        "Recon"
      ],
      "required": [
        {
          "name": "Shas'ui Pathfinder",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "count": 1,
          "weapons": [
            {
              "name": "Pulse carbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/pathfinders/shasuipathfinder.png"
        }
      ],
      "pool": [
        {
          "name": "Assault Grenadier Pathfinder",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Fusion grenade",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/3",
              "wr": "Range 6\", Devastating 2, Limited 1, Piercing 2, Saturate"
            },
            {
              "name": "Pulse carbine",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            },
            {
              "name": "Grenadier Specialist",
              "text": "Этот оператор может использовать frag и krak grenades (см. universal equipment). Это не считается за лимит limited uses, даже если ты также выбрал эти grenades для других операторов. Каждый раз, когда он это делает, улучши Hit stat того оружия на 1."
            }
          ],
          "portrait": "img/portraits/pathfinders/grenadierpathfinder.png"
        },
        {
          "name": "Blooded Pathfinder",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Suppressed pulse carbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Silent"
            },
            {
              "name": "Bionic arm",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            },
            {
              "name": "Veteran",
              "text": "Во время turning point, в котором дружественный оператор SHAS'UI использовал свой Strategic Gambit Art of War и был выбран Mont'ka, этот оператор может использовать Kauyon вместо этого во время своей активации (и наоборот)."
            }
          ],
          "portrait": "img/portraits/pathfinders/bloodedpc.png"
        },
        {
          "name": "Comms Specialist Pathfinder",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Pulse carbine",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            },
            {
              "name": "Signal",
              "text": "SUPPORT. Выбери одного другого дружественного оператора PATHFINDER, видимого этому оператору и в пределах 6\" от него. До конца следующей активации того оператора добавь 1 к его APL stat.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/pathfinders/communicationsspecialistpathfinder.png"
        },
        {
          "name": "Drone Controller Pathfinder",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Pulse carbine",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            },
            {
              "name": "Drone Controller",
              "text": "Пока этот оператор в killzone: добавь 2\" к Move stat дружественных операторов PATHFINDER DRONE; firefight ploy Saviour Protocols стоит для тебя 0CP."
            },
            {
              "name": "Remote Pilot",
              "text": "Один дружественный оператор PATHFINDER DRONE может сразу выполнить одно свободное действие, но не может переместиться более чем на 2\" во время этого действия.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/pathfinders/dronecontrollerpathfinder.png"
        },
        {
          "name": "Marksman Pathfinder",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Marksman rail rifle (standard)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Devastating 2, Lethal 5+, Piercing 1"
            },
            {
              "name": "Marksman rail rifle (dart round)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Piercing 1, Silent"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Inertial Dampener",
              "text": "Можно игнорировать любые изменения Hit stat этого оператора marksman rail rifle."
            }
          ],
          "portrait": "img/portraits/pathfinders/marksmanpathfinder.png"
        },
        {
          "name": "Medical Technician Pathfinder",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Pulse carbine",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            },
            {
              "name": "Medic!",
              "text": "Первый раз в течение каждого turning point, когда другой дружественный оператор PATHFINDER (кроме DRONE) должен быть выведен из строя, будучи видимым этому оператору и в пределах 3\" от него, можно использовать это правило, если ни этот, ни тот оператор не в пределах control range вражеского оператора. Если используешь, тот дружественный оператор не выводится из строя, имеет 1 оставшийся wound и не может быть выведен из строя до конца этого действия. После этого действия тот дружественный оператор может сразу выполнить свободное действие Dash, но должен закончить это движение в пределах control range этого оператора. Отними 1 от APL stat того оператора до конца его следующей активации."
            },
            {
              "name": "Medikit",
              "text": "Выбери одного дружественного оператора PATHFINDER (кроме DRONE) в пределах control range этого оператора, чтобы он восстановил до 2D3 потерянных wounds. Он не может быть оператором, для которого было использовано правило Medic! в течение этого turning point.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/pathfinders/medicaltechnicianpathfinder.png"
        },
        {
          "name": "Shas'la Pathfinder",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Pulse carbine",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Group Activation",
              "text": "Каждый раз, когда этот оператор становится expended, ты должен затем активировать другого ready дружественного оператора SHAS'LA (если возможно) прежде, чем активируется твой оппонент."
            },
            {
              "name": "Fearless on the Frontline",
              "text": "Этот оператор может выполнять действие Markerlight, находясь в пределах control range вражеского оператора. Кроме того, этот оператор может выполнять действие Fall Back за 1 AP меньше."
            },
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/pathfinders/shaslapathfinder.png"
        },
        {
          "name": "Transpectral Interference Pathfinder",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Pulse carbine",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            },
            {
              "name": "System Jam",
              "text": "Выбери одного вражеского оператора, видимого этому оператору. До конца следующей активации того оператора отними 1 от его APL stat.\n\nЭтот оператор не может выполнять это действие, имея Conceal order, или находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Multi-Dimensional Vision",
              "text": "Когда этот оператор стреляет, вражеские операторы не могут быть obscured."
            }
          ],
          "portrait": "img/portraits/pathfinders/transpectralinterferencepathfinder.png"
        },
        {
          "name": "Weapons Expert Pathfinder",
          "maxCopies": 2,
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Ion rifle (standard)",
              "atk": 5,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Ion rifle (overcharge)",
              "atk": 5,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Hot, Lethal 5+, Piercing 1"
            },
            {
              "name": "Rail rifle",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/4",
              "wr": "Devastating 2, Lethal 5+, Piercing 1"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [],
          "portrait": "img/portraits/pathfinders/weaponsexpertpathfinder.png"
        },
        {
          "name": "MB3 Recon Drone",
          "apl": 3,
          "move": "6\"",
          "save": "4+",
          "wounds": 12,
          "weapons": [
            {
              "name": "Burst cannon (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless, Heavy (Reposition only), Piercing 1"
            },
            {
              "name": "Burst cannon (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless, Heavy (Reposition only), Punishing, Torrent 1\""
            },
            {
              "name": "Ram",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Analyse",
              "text": "Каждый раз, когда этот оператор выполняет действие Markerlight, каждый другой вражеский оператор, видимый этому оператору и в пределах 3\" от вражеского оператора, выбранного для этого действия, также получает один твой Markerlight token."
            },
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            },
            {
              "name": "Drone",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight, Markerlight, Reposition и Shoot. Он не может использовать оружие, которого нет на его datacard. При определении контроля над маркером цели этот APL stat считается на 1 меньше — это не изменение самого APL stat, поэтому изменения APL суммируются с этим."
            }
          ],
          "portrait": "img/portraits/pathfinders/recon_drone.png"
        },
        {
          "name": "MV1 Gun Drone",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Twin pulse carbine",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Ceaseless"
            },
            {
              "name": "Ram",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Drone",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight, Reposition и Shoot. Он не может использовать оружие, которого нет на его datacard. При определении контроля над маркером цели этот APL stat считается на 1 меньше — это не изменение самого APL stat, поэтому изменения APL суммируются с этим."
            }
          ],
          "portrait": "img/portraits/pathfinders/gun_drone.png"
        },
        {
          "name": "MV4 Shield Drone",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Ram",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Drone",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight и Reposition. Он не может использовать оружие, которого нет на его datacard. При определении контроля над маркером цели этот APL stat считается на 1 меньше — это не изменение самого APL stat, поэтому изменения APL суммируются с этим."
            },
            {
              "name": "Shield Generator",
              "text": "Этот оператор игнорирует weapon rule Piercing. Once per turning point, когда кубик атаки должен нанести Normal Dmg этому оператору, можно проигнорировать этот нанесённый урон. Можно использовать firefight ploy Saviour Protocols за 0CP, если этот оператор — указанный DRONE."
            }
          ],
          "portrait": "img/portraits/pathfinders/shield_drone.png"
        },
        {
          "name": "MV7 Marker Drone",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Ram",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "High-intensity Markerlight",
              "text": "Каждый раз, когда этот оператор выполняет действие Markerlight, выбранный вражеский оператор получает два твоих Markerlight token (вместо одного)."
            },
            {
              "name": "Markerlight",
              "text": "См. faction rule Markerlights.",
              "cost": "1AP"
            },
            {
              "name": "Drone",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight, Markerlight и Reposition. Он не может использовать оружие, которого нет на его datacard. При определении контроля над маркером цели этот APL stat считается на 1 меньше — это не изменение самого APL stat, поэтому изменения APL суммируются с этим."
            }
          ],
          "portrait": "img/portraits/pathfinders/marker_drone.png"
        },
        {
          "name": "MV31 Pulse Accelerator Drone",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Ram",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Drone",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight, Pulse Accelerator и Reposition. Он не может использовать оружие, которого нет на его datacard. При определении контроля над маркером цели этот APL stat считается на 1 меньше — это не изменение самого APL stat, поэтому изменения APL суммируются с этим."
            },
            {
              "name": "Pulse Accelerator",
              "text": "До начала следующей активации этого оператора или пока он не выведен из строя (смотря что раньше): каждый раз, когда другой дружественный оператор PATHFINDER стреляет из pulse weapon в пределах 3\" от этого оператора, то оружие получает weapon rules Lethal 5+ и Severe.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/pathfinders/pulse_accel_drone.png"
        },
        {
          "name": "MV33 Grav-inhibitor Drone",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Ram",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Drone",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight и Reposition. Он не может использовать оружие, которого нет на его datacard. При определении контроля над маркером цели этот APL stat считается на 1 меньше — это не изменение самого APL stat, поэтому изменения APL суммируются с этим."
            },
            {
              "name": "Grav-inhibitor",
              "text": "Каждый раз, когда вражеский оператор выполняет действие, в котором он перемещается (кроме Dash), если он переместился бы так, чтобы быть видимым и в пределах 6\" от этого оператора, считай эту дистанцию как дополнительные 2\" и игнорируй дополнительные дистанции от Obstructing и Accessible terrain rules. Каждый раз, когда вражеский оператор дерётся или отвечает (retaliating), будучи видимым и в пределах 6\" от этого оператора, ухудшай Hit stat оружия ближнего боя того вражеского оператора на 1. Это суммируется с injured."
            }
          ],
          "portrait": "img/portraits/pathfinders/grav_drone.png"
        }
      ],
      "poolPick": 11,
      "equipment": "Pathfinders",
      "lore": {
        "intro": "Специализированная разведывательная пехота, T'au Pathfinders продвигаются далеко впереди своих союзников. Kill team Pathfinder способна действовать независимо от основных сил T'au и оснащена почти для любой ситуации. Их продвинутое снаряжение и мощное вооружение позволяют им нарушать коммуникации, проводить диверсии и уничтожать цели.",
        "operatives": [
          {
            "name": "Shas'ui Pathfinder",
            "text": "Shas'ui Pathfinder-ы — ветераны, прошедшие множество кампаний. Они прошли через опасные испытания огнём, чтобы достичь этого звания, и являются динамичными и опытными тактиками, вполне способными вести команду к победе."
          },
          {
            "name": "Assault Grenadier Pathfinder",
            "text": "Самые горячие головы среди Pathfinder-ов обучены проводить крайне опасные атаки на вражеские позиции, используя свои гранаты для оглушения вражеских войск и уничтожения бункеров. Они также оснащены продвинутыми шлемами, делающими их невосприимчивыми к попыткам оглушить их самих."
          },
          {
            "name": "Blooded Pathfinder",
            "text": "Многие опытные и уважаемые Pathfinder-ы заслуживают личное имя Mont'yr, что переводится как «Blooded». Многие носят продвинутую бионику вместо утраченных конечностей и им доверяют специализированные технологии, такие как suppressed pulse carbine."
          },
          {
            "name": "Comms Specialist Pathfinder",
            "text": "Comms Specialist-ы встречаются в большинстве Pathfinder kill team, обеспечивая связь с Commander-ами команды, другими kill team и жизненно важными вспомогательными ресурсами."
          },
          {
            "name": "Drone Controller Pathfinder",
            "text": "Drone Controller Pathfinder-ы проходят дополнительную подготовку по дистанционному управлению дронами, которые часто сопровождают их команды. Тщательной работой и терпением они способны заставить дрона выполнять сложные задачи, недоступные ему при самостоятельном программировании."
          },
          {
            "name": "Marksman Pathfinder",
            "text": "Marksman Pathfinder-ы носят кастомизированные rail rifle с продвинутой оптикой и сложными демпферами инерции, обеспечивающими невероятную точность. Этим Pathfinder-ам также выдаются экспериментальные dart-боеприпасы, практически бесшумные при выстреле."
          },
          {
            "name": "Medical Technician Pathfinder",
            "text": "В Pathfinder kill team жизни T'au часто находятся в руках Medical Technician-а. Эти самоотверженные целители идут под шквал вражеского огня, чтобы добраться до раненых."
          },
          {
            "name": "Shas'la Pathfinder",
            "text": "Даже рядовой состав Pathfinder team — самоотверженные приверженцы Greater Good, охотно вызывающиеся на самые опасные миссии. Они действуют вблизи от противника, чтобы узнать о нём всё, а также вступают с ним в бой при необходимости."
          },
          {
            "name": "Transpectral Interference Pathfinder",
            "text": "Transpectral Interference Pathfinder-ам поручено глушить вражеские коммуникации с помощью сложных сигнальных скремблеров, способных выводить из строя электронные системы."
          },
          {
            "name": "Weapons Expert Pathfinder",
            "text": "Weapons Expert Pathfinder-ы владеют тяжёлым вооружением своей kill team. Их задача относительно проста — убить или уничтожить то, что им прикажет их Shas'ui, или что они сочтут важной целью."
          },
          {
            "name": "MB3 Recon Drone",
            "text": "Эти крупные дроны способны собирать массивы жизненно важных полевых данных, которые могут решить исход битвы. Благодаря большим размерам их также можно оснащать более тяжёлым вооружением — их burst cannon способен эффективно подавлять или выкашивать вражескую пехоту."
          },
          {
            "name": "MV1 Gun Drone",
            "text": "Используя антигравитационные двигатели и реактивные ускорители, Gun Drone-ы парят над местностью, быстро перемещаясь, чтобы вступить в бой с врагом и фиксировать полевые данные."
          },
          {
            "name": "MV4 Shield Drone",
            "text": "Shield Drone-ы оснащены генераторами щитов вместо оружия. Их задача — защищать Pathfinder-ов, которых они сопровождают."
          },
          {
            "name": "MV7 Marker Drone",
            "text": "Высокоинтенсивные markerlight, используемые Marker Drone-ами, жизненно важны для синергии сил T'au. Они указывают приоритетные цели как для Pathfinder-ов, рядом с которыми действуют, так и для других мощных активов T'au."
          },
          {
            "name": "MV31 Pulse Accelerator Drone",
            "text": "Pulse Accelerator Drone-ы усиливают pulse-оружие, которое несут Pathfinder-ы, делая эту технологию гораздо мощнее и давая жизненно важное преимущество перед врагом."
          },
          {
            "name": "MV33 Grav-inhibitor Drone",
            "text": "Grav-inhibitor Drone-ы способны манипулировать гравитацией вокруг себя и значительно замедлять продвижение вражеских войск."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Markerlights",
          "text": "Markerlight — 1AP. Выбери одного вражеского оператора, видимого этому оператору. Тот вражеский оператор получает один твой Markerlight token (максимум до четырёх).\n\nОператор не может выполнять это действие, находясь в пределах control range вражеского оператора.\n\nХотя действие Markerlight могут выполнять только некоторые операторы PATHFINDER, все операторы PATHFINDER могут получать выгоду от его эффектов. Каждый раз, когда дружественный оператор PATHFINDER стреляет оружием со своего datacard (кроме fusion grenade у ASSAULT GRENADIER), если у цели есть твои Markerlight token, то оружие получает дополнительные правила в зависимости от числа token на цели. Эти правила суммируются.\n\nТаблица дополнительных правил по числу Markerlight token:\n1 — Weapon rules Saturate и Balanced.\n2 — Улучши Hit stat того оружия дружественного оператора на 1 (максимум до 3+).\n3 — Цель не может быть obscured.\n4 — Weapon rule Seek Light.\n\nOnce per activation каждого вражеского оператора, каждый раз, когда вражеский оператор, у которого есть твои Markerlight token, выполняет действие Dash, Charge, Fall Back или Reposition, убери один из этих token."
        },
        {
          "name": "Recon Sweep",
          "text": "Выбери один killzone edge (кроме своего). Каждый дружественный оператор PATHFINDER, полностью находящийся в пределах 6\" от того края, может сразу выполнить свободное действие Dash в выбранном тобой порядке, но каждый, кто это делает, должен закончить это движение полностью в пределах 6\" от killzone edge (кроме своего). Нельзя использовать этот ploy в течение первого turning point.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Suppressing Fire",
          "text": "Каждый раз, когда вражеский оператор выполняет действие Shoot, если цель (или первичная цель, если оружие имеет weapon rules Blast или Torrent) — не ближайшая допустимая цель, твой оппонент не может перебрасывать (re-roll) свои кубики атаки. Игнорируй дружественных операторов PATHFINDER, имеющих Conceal order, или obscured, при определении этого.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Bonded",
          "text": "Каждый раз, когда дружественный оператор PATHFINDER (кроме DRONE) стреляет или отвечает (retaliating) ranged-оружием, если он в пределах 3\" от другого дружественного оператора PATHFINDER (кроме DRONE), ranged-оружие того первого дружественного оператора получает weapon rule Accurate 1.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Take Cover",
          "text": "Каждый раз, когда оператор стреляет по дружественному оператору PATHFINDER, если можно удержать любые cover save, улучши Save stat того дружественного оператора на 1.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "A Worthy Cause",
          "text": "Используй этот firefight ploy в начале Firefight phase. Один дружественный оператор PATHFINDER (кроме DRONE) может сразу выполнить свободное mission-действие.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Supporting Fire",
          "text": "Используй этот firefight ploy, когда дружественный оператор PATHFINDER выполняет действие Shoot и ты выбираешь допустимую цель в пределах 6\" от него. Наличие других дружественных операторов PATHFINDER в пределах control range вражеского оператора не мешает выбрать того оператора целью.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Saviour Protocols",
          "text": "Используй этот firefight ploy, когда дружественный оператор PATHFINDER (кроме DRONE) выбран допустимой целью действия Shoot. Выбери одного дружественного оператора PATHFINDER DRONE, видимого и в пределах 3\" от того первого дружественного оператора, чтобы он стал допустимой целью вместо него. Тот дружественный оператор DRONE считается в cover или obscured только если исходная цель была в cover или obscured. Этот ploy не имеет эффекта, если ranged-оружие имеет weapon rule Blast или Torrent.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Point-Blank Fusillade",
          "text": "Используй этот firefight ploy, когда дружественный оператор PATHFINDER (кроме DRONE) отвечает (retaliating), если он не был в пределах control range вражеских операторов в начале той активации/counteract. Можно использовать одно из его ranged-оружий как оружие ближнего боя в этой последовательности (кроме оружия со словом «grenade» в названии). Если делаешь это, нельзя блокировать (block) в этой последовательности, и следующие weapon rules не имеют эффекта на его оружии до конца этой последовательности: Devastating, Piercing, Torrent.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "markerlight",
          "name": "Markerlight",
          "target": "enemy",
          "counter": true,
          "max": 4,
          "text": "См. faction rule Markerlights."
        },
        {
          "id": "photon_grenade",
          "name": "Photon Grenade",
          "target": "enemy",
          "text": "Faction equipment. Once per turning point дружественный оператор PATHFINDER, у которого есть действие Markerlight на датакарте, может выполнить: Photon Grenade (1AP). Выбери одного вражеского оператора, видимого этому оператору, и брось D6: при 3+, до конца следующей активации того оператора, отними 2\" от его Move stat.",
          "statMod": {
            "stat": "move",
            "delta": -2
          }
        },
        {
          "id": "pulse_accelerator",
          "name": "Pulse Accelerator",
          "target": "friendly",
          "restrictToOperator": "MV31 Pulse Accelerator Drone",
          "text": "До начала следующей активации этого оператора или пока он не выведен из строя (смотря что раньше): каждый раз, когда другой дружественный оператор PATHFINDER стреляет из pulse weapon в пределах 3\" от этого оператора, то оружие получает weapon rules Lethal 5+ и Severe."
        },
        {
          "id": "medic_used",
          "name": "Medic",
          "target": "friendly",
          "text": "Первый раз в течение каждого turning point, когда другой дружественный оператор PATHFINDER (кроме DRONE) должен быть выведен из строя, будучи видимым этому оператору и в пределах 3\" от него, можно использовать это правило, если ни этот, ни тот оператор не в пределах control range вражеского оператора. Если используешь, тот дружественный оператор не выводится из строя, имеет 1 оставшийся wound и не может быть выведен из строя до конца этого действия. После этого действия тот дружественный оператор может сразу выполнить свободное действие Dash, но должен закончить это движение в пределах control range этого оператора. Отними 1 от APL stat того оператора до конца его следующей активации."
        }
      ],
      "factionChoices": [
        {
          "id": "art_of_war",
          "label": "Art of War",
          "scope": "game",
          "pick": 1,
          "oncePerBattle": true,
          "options": [
            {
              "id": "montka",
              "name": "Mont'ka",
              "text": "Добавь 1\" к Move stat дружественных операторов PATHFINDER."
            },
            {
              "id": "kauyon",
              "name": "Kauyon",
              "text": "Дружественные операторы PATHFINDER могут выполнить свободное действие Markerlight во время своей активации, если у них Conceal order."
            }
          ]
        }
      ]
    },
    "Tempestus Aquilons": {
      "archetypes": [
        "Recon",
        "Seek & Destroy"
      ],
      "required": [
        {
          "name": "Aquilon Tempestor",
          "apl": 3,
          "move": "6\"",
          "save": "4+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Hot-shot lascarbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Hot-shot laspistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Relic bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Range 8\", Lethal 5+"
            },
            {
              "name": "Chainsword",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "-"
            },
            {
              "name": "Power weapon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Tempestus Veteran",
              "text": "Once per battle, можно либо использовать firefight ploy за 0CP, если это указанный оператор TEMPESTUS AQUILON, либо использовать firefight ploy Command Re-roll, если это оператор, за которого кидались кубики атаки или защиты."
            },
            {
              "name": "Command",
              "text": "SUPPORT. Выбери одного другого дружественного оператора TEMPESTUS AQUILON (кроме SERVO-SENTRY), видимого этому оператору и в пределах 6\" от него. До конца следующей активации того оператора добавь 1 к его APL stat.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/tempestus-aquilons/aquilon_tempestor.png"
        },
        {
          "name": "Aquilon Servo-Sentry",
          "apl": 2,
          "move": "4\"",
          "save": "3+",
          "wounds": 10,
          "count": 1,
          "weapons": [
            {
              "name": "Flamer",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 8\", Saturate, Torrent 2\""
            },
            {
              "name": "Grenade launcher (frag)",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/4",
              "wr": "Blast 2\""
            },
            {
              "name": "Grenade launcher (krak)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Piercing 1"
            },
            {
              "name": "Hot-shot volley gun (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Hot-shot volley gun (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1, Torrent 1\""
            }
          ],
          "abilities": [
            {
              "name": "Machine",
              "text": "Этот оператор не может выполнять никакие действия, кроме Dash, Fall Back, Reposition и Shoot. Он не может отвечать (retaliate), помогать в драке или использовать оружие, которого нет на его карточке."
            },
            {
              "name": "Turret",
              "text": "Этот оператор может выполнить действие Shoot дважды во время своей активации."
            }
          ],
          "portrait": "img/portraits/tempestus-aquilons/servo_sentry.png"
        }
      ],
      "pool": [
        {
          "name": "Aquilon Grenadier",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Hot-shot laspistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Melta bomb",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/3",
              "wr": "Range 3\", Devastating 3, Heavy (Reposition only), Limited 1, Piercing 2"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Grenadier",
              "text": "Этот оператор может использовать frag, krak, smoke и stun grenades (см. universal equipment). Это не учитывается в лимите limited use, если у тебя также выбраны эти гранаты в снаряжении для других операторов. Всякий раз, когда этот оператор использует frag или krak grenade, улучши Hit stat этого оружия на 1."
            }
          ],
          "portrait": "img/portraits/tempestus-aquilons/aquilon_grenadier.png"
        },
        {
          "name": "Aquilon Gunfighter",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Hot-shot laspistols (focused)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Ceaseless, Rending"
            },
            {
              "name": "Hot-shot laspistols (salvo)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 8\", Salvo*"
            },
            {
              "name": "Hot-shot laspistols (point-blank)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Ceaseless"
            }
          ],
          "abilities": [
            {
              "name": "* Salvo",
              "text": "Выбери до двух разных допустимых целей, которые не в пределах control range дружественных операторов. Стреляй этим оружием по обеим в выбранном порядке (разрешай каждую последовательность отдельно)."
            },
            {
              "name": "Gunfight",
              "text": "Всякий раз, когда вражеский оператор в пределах 8\" от этого оператора стреляет по этому оператору, отслеживай каждый кубик атаки, отброшенный как fail. После этого, до того как выведенные из строя операторы будут убраны (включая этого, если применимо), этот оператор может выполнить свободное действие Shoot (можно сменить его order на Engage для этого), но может выбрать целью только того вражеского оператора, используя свои hot-shot laspistols (focused), и бросает количество кубиков атаки, равное числу отброшенных кубиков атаки оппонента плюс один (максимум четыре)."
            }
          ],
          "portrait": "img/portraits/tempestus-aquilons/aquilon_gunfighter.png"
        },
        {
          "name": "Aquilon Gunner (Melta)",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Melta carbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "6/3",
              "wr": "Range 6\", Devastating 4, Piercing 2"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [],
          "portrait": "img/portraits/tempestus-aquilons/aquilon_gunner.png"
        },
        {
          "name": "Aquilon Gunner (Plasma)",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Plasma carbine (standard)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Piercing 1"
            },
            {
              "name": "Plasma carbine (supercharge)",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/6",
              "wr": "Hot, Lethal 5+, Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [],
          "portrait": "img/portraits/tempestus-aquilons/aquilon_gunner.png"
        },
        {
          "name": "Aquilon Marksman",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Hot-shot long-las (concealed)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Devastating 3, Heavy, Silent, Concealed Position*"
            },
            {
              "name": "Hot-shot long-las (mobile)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Hot-shot long-las (stationary)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Devastating 3, Heavy"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Sniper's Vantage",
              "text": "Всякий раз, когда этот оператор на Vantage terrain и стреляет по оператору с Engage order, находящемуся как минимум на 2\" ниже него, все профили его hot-shot long-las получают weapon rule Severe."
            },
            {
              "name": "* Concealed Position",
              "text": "Этот оператор может использовать это оружие только в первый раз, когда он выполняет действие Shoot за битву."
            }
          ],
          "portrait": "img/portraits/tempestus-aquilons/aquilon_marksman.png"
        },
        {
          "name": "Aquilon Precursor",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Hot-shot laspistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Tempestus dagger",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Ceaseless, Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Vicious Knife Fighter",
              "text": "Всякий раз, когда этот оператор дерётся, после разрешения своего первого кубика атаки в этой последовательности, можно сразу разрешить ещё один (прежде оппонента)."
            },
            {
              "name": "Dynamic",
              "text": "Всякий раз, когда этот оператор выполняет действие Shoot или Fight, он может сразу выполнить свободное действие Dash после этого. Он может сделать это, даже если выполнял действие Charge во время этой активации, но может использовать только оставшуюся дистанцию движения от того действия Charge (максимум 3\")."
            }
          ],
          "portrait": "img/portraits/tempestus-aquilons/aquilon_precursor.png"
        },
        {
          "name": "Aquilon Trooper",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 9,
          "weapons": [
            {
              "name": "Hot-shot lascarbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Rapid Insertion",
              "text": "Strategic Gambit в первый turning point. Каждый дружественный оператор TEMPESTUS AQUILON TROOPER, находящийся полностью в пределах твоей drop zone, может сразу выполнить свободное действие Reposition, но должен закончить это движение полностью в пределах 3\" от твоей drop zone."
            },
            {
              "name": "Swift Landing",
              "text": "Когда этот оператор приземляется (lands), можно установить его в пределах 4\" по горизонтали от одного из твоих Drop markers, что имеет приоритет над обычным требованием дистанции."
            }
          ],
          "portrait": "img/portraits/tempestus-aquilons/aquilon_trooper.png"
        }
      ],
      "poolPick": 9,
      "equipment": "Tempestus Aquilons",
      "lore": {
        "intro": "Tempestus Aquilons — элитные штурмовые отряды Militarum Tempestus, специализирующиеся на десантировании прямо в гущу боя. Облачённые в прочную carapace armour и вооружённые мощными hot-shot lascarbine, эти бойцы отличаются дисциплиной, точностью и стойкостью, а десантирование через гудящие grav-chute делает их появление особенно грозным.",
        "operatives": [
          {
            "name": "Aquilon Tempestor",
            "text": "Tempestor ведёт свою kill team в самую гущу боя. Помимо боевых навыков, он обладает тактическим чутьём и способностью к импровизации, что жизненно важно во время долгих операций в тылу врага."
          },
          {
            "name": "Aquilon Grenadier",
            "text": "Пройдя дополнительную подготовку по молитвам и ритуалам активации боеприпасов, Grenadier — специалист по взрывчатке в составе своей kill team. Способен как вывести из строя вражеский генераторум точным melta bomb, так и разить врагов krak-зарядами."
          },
          {
            "name": "Aquilon Gunfighter",
            "text": "Некоторые Aquilon-ы отличаются точностью, агрессией и реакцией, необходимыми, чтобы стать Gunfighter-ом. Вооружённые hot-shot laspistol, они обрушивают шквал огня на близкой дистанции, особенно опасные в перестрелках среди укреплений или коридоров voidship."
          },
          {
            "name": "Aquilon Gunner (Melta)",
            "text": "Tempestus Aquilons нередко сталкиваются с мощными вражескими целями без поддержки — бронетехникой или элитными воинами. В таких случаях melta carbine оказывается незаменимым: одного заряда достаточно, чтобы свалить неистового Genestealer Patriarch или Heretic Astartes Legionary."
          },
          {
            "name": "Aquilon Gunner (Plasma)",
            "text": "Tempestus Aquilons нередко сталкиваются с мощными вражескими целями без поддержки — бронетехникой или элитными воинами. В таких случаях plasma carbine оказывается незаменимым: одного заряда достаточно, чтобы свалить неистового Genestealer Patriarch или Heretic Astartes Legionary."
          },
          {
            "name": "Aquilon Marksman",
            "text": "Готовит ли он смертельный выстрел для завершения покушения или выбивает элитных вражеских операторов ради поддержки товарищей, Marksman оказывает бесценную поддержку своей kill team. Его hot-shot long-las — крайне мощное оружие, чей характерный свист и треск становится последним звуком для бесчисленных врагов Империума."
          },
          {
            "name": "Aquilon Precursor",
            "text": "Десантирование на территорию врага рискует попасть под шквал вражеского огня ещё в воздухе. Precursor специализируется на том, чтобы приземлиться первым, максимально быстро и скрытно, а затем вывести из строя или отвлечь самые опасные наземные средства обороны, помогая товарищам десантироваться невредимыми."
          },
          {
            "name": "Aquilon Servo-Sentry",
            "text": "Servo-sentry — боевой мехалоид, десантирующийся с помощью grav-impeller моторов и обеспечивающий kill team Aquilon огневой поддержкой. Медлительный, но способный перемещаться во время боя, он подчиняется защитным подпрограммам, прикрывая фланги своей команды или ведя арьергардные бои, пока товарищи отступают."
          },
          {
            "name": "Aquilon Trooper",
            "text": "Trooper-ы Tempestus Aquilon — далеко не рядовые пехотинцы. Облачённые в прочную carapace armour и вооружённые мощными hot-shot lascarbine, эти строго обученные бойцы сочетают дисциплину, точность и стойкость с шоковым эффектом десантирования через гудящие grav-chute."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Drop Insertion",
          "text": "При расстановке kill team TEMPESTUS AQUILON перед битвой первая треть твоей kill team должна быть расставлена как обычно. Каждую следующую треть можно вместо этого установить above (над killzone) сбоку от неё. За каждую треть, установленную above, нужно установить above всю эту треть целиком (не часть), затем разместить один из своих Drop markers полностью в пределах своей drop zone.\n\nВ качестве Strategic Gambit в первый и второй turning point можно передвинуть свои Drop markers до 4\" по горизонтали.\n\nВ Firefight phase дружественные операторы TEMPESTUS AQUILON, установленные above, активируются как обычно. При этом можно либо израсходовать (expend), либо приземлить (land) этого оператора. Если он приземляется, установи его в killzone в месте, где это разрешено, следующим образом (он больше не считается above):\n- В пределах 3\" по горизонтали от одного из своих Drop markers, либо полностью в пределах своей drop zone.\n- Не в пределах control range вражеских операторов (если только не устанавливается оператор PRECURSOR, который можно установить в пределах control range вражеского оператора).\n- Ни одна часть его базы не под Vantage terrain.\n- С любым order по своему выбору.\n\nОператор считается выполняющим действие Reposition (трать AP соответственно), затем продолжает свою активацию как обычно. Он obscured до конца следующей активации или конца turning point (смотря что наступит раньше).\n\nМенее половины твоих операторов может быть установлено above к концу первого turning point.\n\nПри readying своих операторов во время второго и третьего turning point убери один из своих Drop markers. Это значит, что операторы, всё ещё установленные above, выводятся из строя в конце второго turning point."
        },
        {
          "name": "Grav-Chute",
          "text": "Всякий раз, когда дружественный оператор TEMPESTUS AQUILON dropping (десантируется), игнорируй вертикальную дистанцию."
        },
        {
          "name": "Sudden Offensive",
          "text": "Посчитай количество дружественных операторов TEMPESTUS AQUILON, которые не выведены из строя, затем раздели результат пополам (округляя вверх), чтобы получить x. До конца своей активации оружие операторов TEMPESTUS AQUILON получает weapon rule Balanced, если они являются первыми x дружественными операторами, активированными в этот turning point.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Maintain Momentum",
          "text": "Всякий раз, когда дружественный оператор TEMPESTUS AQUILON стреляет против или дерётся против ready вражеского оператора, оружие этого дружественного оператора получает weapon rule Severe.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Eye Above",
          "text": "Выбери одного вражеского оператора. Этот оператор и каждый другой вражеский оператор в пределах 3\" от него получает один из твоих Detected токенов до конца turning point. Всякий раз, когда вражеский оператор, имеющий этот токен:\n- Стреляет по дружественному оператору TEMPESTUS AQUILON, можно перебросить один из своих кубиков защиты.\n- Дерётся или отвечает (retaliating) против дружественного оператора TEMPESTUS AQUILON, один из твоих blocks можно назначить, чтобы заблокировать два неразрешённых success (вместо одного).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Drop and Secure",
          "text": "Выбери один маркер.\n- До Ready step следующей Strategy phase, при определении контроля этого маркера, считай суммарный APL stat дружественных операторов TEMPESTUS AQUILON, оспаривающих его, на 1 выше, если хотя бы один дружественный оператор TEMPESTUS AQUILON оспаривает этот маркер.\n- Всякий раз, когда дружественный оператор TEMPESTUS AQUILON находится в пределах 3\" от этого маркера, добавь 1 к Atk stat его оружия ближнего боя (максимум до 4).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Hot Drop",
          "text": "Используй этот firefight ploy после броска кубиков атаки за дружественного оператора TEMPESTUS AQUILON, полностью находящегося на территории оппонента, либо приземлившегося (landed) или десантировавшегося (dropped) с Vantage terrain как минимум на 2\" выше пола killzone во время этой активации. Если цель в пределах 6\" от него, можно перебросить любые свои кубики атаки.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Adjust Coordinates",
          "text": "Используй этот firefight ploy, когда дружественный оператор TEMPESTUS AQUILON приземляется (lands). Можно установить его в пределах 5\" по горизонтали от одного из своих Drop markers, что имеет приоритет над обычным требованием дистанции. Он не может выполнять действия Dash, Shoot или Fight в этот turning point.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Tempestus Exemplars",
          "text": "Используй этот firefight ploy во время активации дружественного оператора TEMPESTUS AQUILON (кроме SERVO-SENTRY и любого оператора с APL stat выше 2). Во время этой активации тот оператор может выполнить действие Pick Up Marker, Place Marker или mission-действие за 1 AP меньше.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Progena",
          "text": "Используй этот firefight ploy, когда активируется дружественный оператор TEMPESTUS AQUILON (кроме SERVO-SENTRY). Он восстанавливает до 2D3 потерянных wounds, и во время этой активации можно игнорировать любые изменения его APL stat.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "detected",
          "name": "Detected",
          "target": "enemy",
          "text": "Eye Above. Выбранный оператор и каждый другой вражеский оператор в пределах 3\" от него получает Detected token до конца turning point. Оператор с этим token: стреляя по TEMPESTUS AQUILON — оппонент может перебросить кубик защиты; деря́сь/отвечая против TEMPESTUS AQUILON — один block оппонента блокирует два неразрешённых success вместо одного."
        }
      ]
    },
    "Vespid Stingwings": {
      "archetypes": [
        "Recon",
        "Seek & Destroy"
      ],
      "required": [
        {
          "name": "Vespid Strain Leader",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 10,
          "count": 1,
          "weapons": [
            {
              "name": "Neutron blaster",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Devastating 2"
            },
            {
              "name": "Claws",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Communion Helm",
              "text": "Один раз за каждую активацию этого оператора можно бесплатно применить один из эффектов, обычно требующих траты Communion point (сам Communion point при этом не тратится)."
            },
            {
              "name": "Commune",
              "text": "При выборе операторов на битву также выбери один strategy ploy VESPID STINGWING. Когда этот оператор в killzone и не в пределах control range вражеских операторов, тот ploy стоит тебе 0CP."
            }
          ],
          "portrait": "img/portraits/vespid-stingwings/vespid_strain_leader.png"
        },
        {
          "name": "Vespid Oversight Drone",
          "apl": 2,
          "move": "8\"",
          "save": "2+",
          "wounds": 5,
          "count": 1,
          "weapons": [
            {
              "name": "Ram",
              "atk": 3,
              "hit": "5+",
              "dmg": "1/2",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Evasive Drone",
              "text": "Этот оператор не может выполнять никакие действия, кроме Aerial Guidance, Charge, Dash, Fall Back, Fight и Reposition.\nПри определении контроля над objective marker считай его APL stat на 1 меньше. Это не является изменением APL stat, поэтому прочие изменения суммируются с этим.\nПри определении того, что видно этому оператору, круглый диск в верхней части модели считается его головой.\nПока у этого оператора Conceal order и он in cover, он не может быть выбран допустимой целью — это имеет приоритет над всеми прочими правилами (например, Seek, Vantage terrain), кроме нахождения в пределах 2\".\nКогда оператор стреляет по этому оператору, игнорируй weapon rule Piercing."
            },
            {
              "name": "Aerial Guidance",
              "text": "SUPPORT. До начала следующей активации этого оператора, когда другой дружественный оператор VESPID STINGWING, видимый этому оператору и в пределах 6\" от него, стреляет по вражескому оператору, видимому этому оператору, ranged-оружие того дружественного оператора получает weapon rules Lethal 5+ и Saturate.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/vespid-stingwings/oversight-drone.png"
        }
      ],
      "pool": [
        {
          "name": "Vespid Longsting",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Neutron rail rifle (standard)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/4",
              "wr": "Devastating 2, Neutron Fragment*"
            },
            {
              "name": "Neutron rail rifle (aimed)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Devastating 2, Heavy (Dash only), Lethal 5+, Neutron Fragment*"
            },
            {
              "name": "Claws",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Neutron Fragment",
              "text": "Если цель этого оружия не выведена из строя, но ты разрешил любые кубики атаки, цель получает один из твоих Neutron Fragment tokens. Когда активируется оператор, у которого есть один из твоих Neutron Fragment tokens, нанеси ему D3 урона за каждый Neutron Fragment token, который у него есть (бросай отдельно за каждый)."
            }
          ],
          "portrait": "img/portraits/vespid-stingwings/vespid_longsting.png"
        },
        {
          "name": "Vespid Shadestrain",
          "apl": 2,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Neutron sting",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/3",
              "wr": "Range 8\", Devastating 2"
            },
            {
              "name": "Neutron grenade",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/3",
              "wr": "Range 6\", Blast 2\", Devastating 2, Limited 1, Saturate"
            },
            {
              "name": "Claws",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Ghost Rig",
              "text": "Пока у этого оператора Conceal order, оппонент не может выбрать его допустимой целью, если он не в пределах 6\" от оператора, пытающегося его выбрать."
            },
            {
              "name": "Camouflaged",
              "text": "Когда оператор стреляет по этому оператору, игнорируй weapon rule Piercing, и все cover save удерживаются как critical success."
            }
          ],
          "portrait": "img/portraits/vespid-stingwings/vespid_shadestrain.png"
        },
        {
          "name": "Vespid Skyblast",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Neutron grenade launcher",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/3",
              "wr": "Blast 2\", Devastating 2, Neutron Bombardment*"
            },
            {
              "name": "Claws",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Neutron Bombardment",
              "text": "Размести один из своих Neutron Fallout markers в пределах control range первичной цели."
            },
            {
              "name": "Neutron Fallout",
              "text": "Once за каждую активацию вражеского оператора, как только он окажется в пределах 2\" от одного из твоих Neutron Fallout markers, нанеси ему D3 урона (несколько маркеров не суммируются)."
            }
          ],
          "portrait": "img/portraits/vespid-stingwings/vespid_skyblast.png"
        },
        {
          "name": "Vespid Swarmguard",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Flamer (standard)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 8\", Saturate, Torrent 2\""
            },
            {
              "name": "Flamer (skytorch)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Saturate, Torrent 0\", Skytorch*"
            },
            {
              "name": "Claws",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Skytorch",
              "text": "Оператор может использовать это оружие только во время действия Skytorch Assault. Если использует, не выбирай допустимую цель. Вместо этого стреляй по каждому оператору в пределах его torch zone (кроме операторов, полностью находящихся под Vantage terrain); они не считаются in cover или obscured. Разрешай каждую последовательность отдельно, начиная с самого дальнего оператора к ближайшему. Torch zone — это горизонтальная область между текущим и предыдущим местоположением оператора. \"Torrent 0\"\" означает, что нельзя выбирать вторичные цели за пределами его torch zone, но это оружие всё ещё имеет weapon rule Torrent для всех прочих целей."
            },
            {
              "name": "Skytorch Assault",
              "text": "Выполни свободное действие Reposition этим оператором. Во время этого действия он должен использовать FLY и может переместиться на дополнительные 2\". Затем выполни свободное действие Shoot. Для этого действия Shoot можно выбрать только flamer (skytorch).\n\nЭтот оператор не может выполнять это действие, имея Conceal order, или находясь в пределах control range вражеского оператора.",
              "cost": "2AP"
            }
          ],
          "portrait": "img/portraits/vespid-stingwings/vespid_swarmguard.png"
        },
        {
          "name": "Vespid Warrior",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 9,
          "maxCopies": 9,
          "weapons": [
            {
              "name": "Neutron blaster",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/3",
              "wr": "Devastating 2"
            },
            {
              "name": "Claws",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Warrior Instincts",
              "text": "Когда этот оператор стреляет, если ты не тратишь Communion points во время этой последовательности, его neutron blaster получает weapon rule Accurate 1 до конца этой последовательности."
            }
          ],
          "portrait": "img/portraits/vespid-stingwings/vespid_warrior.png"
        }
      ],
      "poolPick": 9,
      "equipment": "Vespid Stingwings",
      "lore": {
        "intro": "Vespid Stingwings — стремительные летающие ксеносы, интегрированные в состав T'au Empire. Их сплочённые отряды называются Mal'kor. T'au управляют инстинктами Vespid через технологические средства связи — прежде всего через communion helms, помогающие поддерживать тактическую сосредоточенность этих хищных летунов в бою.",
        "operatives": [
          {
            "name": "Vespid Strain Leader",
            "text": "Задача Strain Leader — трактовать приказы куратора kill team и следить за тем, чтобы операторы им подчинялись. Какую именно роль этот грозный летающий воин занимает в загадочной иерархии своего народа, неясно, но подчинённые ему Vespid в большинстве случаев повинуются беспрекословно."
          },
          {
            "name": "Vespid Oversight Drone",
            "text": "MV44 Oversight Drone — адаптация разведывательных дронов, изначально применявшихся кастой Air для разведки потенциально враждебных миров перед вторжением. Связанный напрямую с куратором kill team, он служит бесценным источником актуальных тактических данных."
          },
          {
            "name": "Vespid Longsting",
            "text": "Хотя большинство Mal'kor склонны к агрессивным ближним перестрелкам, некоторые направляют свои хищные инстинкты на то, чтобы выцеливать врагов издалека. Самые талантливые из них становятся Longsting."
          },
          {
            "name": "Vespid Shadestrain",
            "text": "Хотя Shadestrain всё ещё редкость на полях сражений 41-го тысячелетия, он — грозный актив для любой kill team Vespid. Его ghost rig скрывает его за маскирующим полем, гасящим звук, свет и даже энергетические сигнатуры."
          },
          {
            "name": "Vespid Skyblast",
            "text": "Vespid Skyblast с большим успехом использует недавно разработанный neutron grenade launcher. Неизбирательные разрывы этого оружия снижают потребность в точности, поэтому этот оператор часто остаётся в движении, забрасывая плотные группы врагов залпами огня."
          },
          {
            "name": "Vespid Swarmguard",
            "text": "Хотя у Vespid есть естественные преимущества в ближнем бою, их отряды рискуют быть смяты особенно многочисленным или свирепым противником. Отражать такие атаки — задача Swarmguard, чей T'au flamer испускает бушующие струи химического огня."
          },
          {
            "name": "Vespid Warrior",
            "text": "Основу большинства kill team Mal'kor составляют Warrior. Выносливые, быстрые и сильные, они прирождённые бойцы."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Communion",
          "text": "В Ready step каждой Strategy phase ты получаешь D3 Communion points, плюс 1, если дружественный оператор OVERSIGHT DRONE в killzone. Communion points используются следующим образом (операторы OVERSIGHT DRONE не подвержены следующему):\n\n1. Когда дружественный оператор VESPID STINGWING выполняет действие Shoot, он может выбрать целью только ближайшего вражеского оператора в пределах 8\" от него (кроме вражеских операторов в пределах control range других дружественных операторов VESPID STINGWING), если не потратишь 1 свой Communion point. Для оружия с weapon rules Blast и Torrent так нужно выбирать только первую цель.\n2. Когда дружественный оператор VESPID STINGWING (кроме DRONE) выполняет действие Charge, он должен закончить действие в пределах control range ближайшего вражеского оператора, до которого может дотянуться, если не потратишь 1 свой Communion point.\n3. Когда ты выполняешь действие Pick Up Marker или mission-действие (кроме Operate Hatch) дружественным оператором VESPID STINGWING, ты также должен потратить 1 свой Communion point, чтобы сделать это.\n4. Когда дружественный оператор VESPID STINGWING стреляет, можно потратить 1 (и только 1) свой Communion point, чтобы перебросить один из своих кубиков атаки."
        },
        {
          "name": "Neutron Charge",
          "text": "Neutron-оружие — это любое оружие, в названии которого есть слово \"neutron\". Когда дружественный оператор VESPID STINGWING перемещается или использует FLY, его neutron-оружие получает weapon rule Piercing 1 до конца turning point."
        },
        {
          "name": "Fly",
          "text": "Когда дружественный оператор VESPID STINGWING выполняет действие, во время которого он перемещается, он может использовать FLY. Если использует, не перемещай его обычным образом — вместо этого убери его из killzone и размести целиком в пределах дистанции, равной его Move stat (или 3\", если это было действие Dash), по горизонтали от исходного местоположения. Он не получает дополнительной дистанции при выполнении действия Charge. Он должен быть размещён в месте, где может быть размещён, и, если это не действие Charge, не может быть размещён в пределах control range вражеского оператора."
        },
        {
          "name": "Hardened Exoskeleton",
          "text": "Когда дружественный оператор VESPID STINGWING (кроме OVERSIGHT DRONE) дерётся или отвечает (retaliating), Normal Dmg 4 или больше наносит ему на 1 урона меньше.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Aerial Agility",
          "text": "Когда оператор стреляет по дружественному оператору VESPID STINGWING во время counteract-а, или во время активации, в которой этот стреляющий оператор двигался или был размещён, бросай один D6 каждый раз, когда кубик атаки должен нанести Normal Dmg: при результате 5+ игнорируй этот нанесённый урон. Нельзя игнорировать больше одного кубика атаки за последовательность действия Shoot этим способом.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Airborne Predators",
          "text": "Когда дружественный оператор VESPID STINGWING перемещается или использует FLY во время своей активации, его оружие получает weapon rule Balanced до конца этой активации.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Sting",
          "text": "Улучши Hit stat claws дружественных операторов VESPID STINGWING на 1, и это оружие получает weapon rules Lethal 5+ и Shock.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Ocelli",
          "text": "Используй этот firefight ploy, когда дружественный оператор VESPID STINGWING выполняет действие Shoot во время активации, в которой он использовал FLY. До конца этого действия он получает все преимущества первой и второй основных особенностей Vantage terrain. При определении разницы высот между операторами для правил Vantage terrain считай, что этот дружественный оператор на 3\" выше, чем есть на самом деле (но не при определении дистанции для Communion).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Darting Flight",
          "text": "Используй этот firefight ploy, когда дружественный оператор VESPID STINGWING выполняет действие Reposition. До конца этого действия он может переместиться на дополнительные D3\", либо, если использует FLY, быть размещён на дополнительные D3\" дальше. В любом случае он не может выполнять действия Shoot или Fight до конца этого turning point.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Neutron Overload",
          "text": "Используй этот firefight ploy, когда ты разрешаешь critical success для дружественного оператора VESPID STINGWING, стреляющего neutron-оружием во время активации, в которой он двигался или использовал FLY. Если цель в пределах 4\" от него, нанеси ей D3 дополнительного урона.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Vicious Venom",
          "text": "Используй этот firefight ploy, когда дружественный оператор VESPID STINGWING (кроме OVERSIGHT DRONE) дерётся и ты наносишь удар с critical success. Нанеси D3 дополнительного урона.",
          "cost": "Firefight Ploy"
        }
      ],
      "factionChoices": [
        {
          "id": "commune",
          "label": "Commune",
          "scope": "setup",
          "pick": 1,
          "options": [
            {
              "id": "hardened_exoskeleton",
              "name": "Hardened Exoskeleton",
              "text": "Когда дружественный оператор VESPID STINGWING (кроме OVERSIGHT DRONE) дерётся или отвечает (retaliating), Normal Dmg 4 или больше наносит ему на 1 урона меньше."
            },
            {
              "id": "aerial_agility",
              "name": "Aerial Agility",
              "text": "Когда оператор стреляет по дружественному оператору VESPID STINGWING во время counteract-а, или во время активации, в которой этот стреляющий оператор двигался или был размещён, бросай один D6 каждый раз, когда кубик атаки должен нанести Normal Dmg: при результате 5+ игнорируй этот нанесённый урон."
            },
            {
              "id": "airborne_predators",
              "name": "Airborne Predators",
              "text": "Когда дружественный оператор VESPID STINGWING перемещается или использует FLY во время своей активации, его оружие получает weapon rule Balanced до конца этой активации."
            },
            {
              "id": "sting",
              "name": "Sting",
              "text": "Улучши Hit stat claws дружественных операторов VESPID STINGWING на 1, и это оружие получает weapon rules Lethal 5+ и Shock."
            }
          ]
        }
      ],
      "statusTokens": [
        {
          "id": "communion_points",
          "name": "Communion Points",
          "target": "friendly",
          "counter": true,
          "max": 6,
          "text": "В Ready step каждой Strategy phase ты получаешь D3 Communion points, плюс 1, если дружественный оператор OVERSIGHT DRONE в killzone. Communion points используются следующим образом (операторы OVERSIGHT DRONE не подвержены следующему):\n\n1. Когда дружественный оператор VESPID STINGWING выполняет действие Shoot, он может выбрать целью только ближайшего вражеского оператора в пределах 8\" от него (кроме вражеских операторов в пределах control range других дружественных операторов VESPID STINGWING), если не потратишь 1 свой Communion point. Для оружия с weapon rules Blast и Torrent так нужно выбирать только первую цель.\n2. Когда дружественный оператор VESPID STINGWING (кроме DRONE) выполняет действие Charge, он должен закончить действие в пределах control range ближайшего вражеского оператора, до которого может дотянуться, если не потратишь 1 свой Communion point.\n3. Когда ты выполняешь действие Pick Up Marker или mission-действие (кроме Operate Hatch) дружественным оператором VESPID STINGWING, ты также должен потратить 1 свой Communion point, чтобы сделать это.\n4. Когда дружественный оператор VESPID STINGWING стреляет, можно потратить 1 (и только 1) свой Communion point, чтобы перебросить один из своих кубиков атаки."
        },
        {
          "id": "neutron_fragment",
          "name": "Neutron Fragment",
          "target": "enemy",
          "counter": true,
          "max": 6,
          "text": "Если цель этого оружия не выведена из строя, но ты разрешил любые кубики атаки, цель получает один из твоих Neutron Fragment tokens. Когда активируется оператор, у которого есть один из твоих Neutron Fragment tokens, нанеси ему D3 урона за каждый Neutron Fragment token, который у него есть (бросай отдельно за каждый)."
        }
      ]
    },
    "Void-Dancer Troupe": {
      "archetypes": [
        "Infiltration",
        "Recon"
      ],
      "required": [
        {
          "name": "Lead Player",
          "apl": 3,
          "move": "7\"",
          "save": "4+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Fusion pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/3",
              "wr": "Range 3\", Devastating 3, Piercing 2"
            },
            {
              "name": "Neuro disruptor",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 8\", Piercing 1, Stun"
            },
            {
              "name": "Shuriken pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Rending"
            },
            {
              "name": "Blade",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "-"
            },
            {
              "name": "Caress",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending"
            },
            {
              "name": "Embrace",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Brutal"
            },
            {
              "name": "Kiss",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/7",
              "wr": "-"
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
              "name": "Lead the Performance",
              "text": "Once per battle Strategic Gambit. Если этот оператор в killzone, можно сменить Allegory, выбранный для своей kill team на битву. Правило ACCOLADE у дружественных операторов, имеющих его, тоже изменится."
            }
          ],
          "portrait": "img/portraits/void-dancer-troupe/lead_player.png"
        }
      ],
      "pool": [
        {
          "name": "Death Jester",
          "apl": 3,
          "move": "7\"",
          "save": "4+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Shrieker cannon (focused)",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending, Heavy (Reposition only), Humbling Cruelty*"
            },
            {
              "name": "Shrieker cannon (sweeping)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending, Heavy (Dash only), Torrent 2\", Humbling Cruelty*"
            },
            {
              "name": "Shrieker blade",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "* Humbling Cruelty",
              "text": "Если цель этого оружия не выведена из строя, но хотя бы одна из твоих костей атаки нанесла урон, цель получает один твой Humbling Cruelty token (если у неё его ещё нет). Пока вражеский оператор имеет один из твоих Humbling Cruelty token, отними 2\" от его Move stat и ухудши Hit stat его оружия на 1. Это не суммируется с being injured. В конце следующей активации этого вражеского оператора убери его Humbling Cruelty token."
            }
          ],
          "portrait": "img/portraits/void-dancer-troupe/death_jester.png"
        },
        {
          "name": "Player",
          "apl": 3,
          "move": "7\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 7,
          "weapons": [
            {
              "name": "Fusion pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/3",
              "wr": "Range 3\", Devastating 3, Piercing 2"
            },
            {
              "name": "Neuro disruptor",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 8\", Piercing 1, Stun"
            },
            {
              "name": "Shuriken pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Rending"
            },
            {
              "name": "Blade",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "-"
            },
            {
              "name": "Caress",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending"
            },
            {
              "name": "Embrace",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Brutal"
            },
            {
              "name": "Kiss",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/7",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Luck of the Laughing God",
              "text": "Once per turning point можно применить это правило. Если применяешь, можно использовать firefight ploy за 0CP, если он указан для этого оператора VOID-DANCER TROUPE (включая Command Re-roll, если для этого оператора бросаются кубики атаки или защиты). Нельзя выбрать один и тот же firefight ploy для этого правила больше одного раза за битву."
            }
          ],
          "portrait": "img/portraits/void-dancer-troupe/player.png"
        },
        {
          "name": "Shadowseer",
          "apl": 3,
          "move": "7\"",
          "save": "4+",
          "wounds": 9,
          "weapons": [
            {
              "name": "Hallucinogen grenade",
              "atk": 4,
              "hit": "3+",
              "dmg": "1/1",
              "wr": "Range 6\", Blast 2\", Lethal 5+, Seek Light, Silent, Stun"
            },
            {
              "name": "Neuro disruptor",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 8\", Piercing 1, Stun"
            },
            {
              "name": "Shuriken pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Rending"
            },
            {
              "name": "Miststave",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/4",
              "wr": "Shock"
            }
          ],
          "abilities": [
            {
              "name": "Mirror of Minds",
              "text": "PSYCHIC. Выбери одного вражеского оператора, являющегося допустимой целью, в пределах 8\" от этого оператора. Оба игрока бросают по пять D6. Разрешай кубики попарно по совпадающим результатам. За каждую совпавшую пару нанеси D3 урона (максимум до 8) тому вражескому оператору.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Fog of Dreams",
              "text": "PSYCHIC. Выбери одного готового (ready) вражеского оператора, видимого этому оператору, и брось один D6. До конца turning point тот вражеский оператор не может быть активирован или выполнять действия, пока не наступит очередь последнего оператора быть активированным, либо пока твой оппонент не активировал количество вражеских операторов, равное результату этого D6 (смотря что наступит раньше), после выполнения этого действия.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/void-dancer-troupe/shadowseer.png"
        }
      ],
      "poolPick": 7,
      "equipment": "Void-Dancer Troupe",
      "lore": {
        "intro": "Даже среди подвижных Aeldari, Harlequin-ы Void-Dancer Troupe демонстрируют почти неестественный уровень ловкости и мастерства. Представление и война сливаются воедино в их действиях, точно направленных, чтобы определить судьбу их расы.",
        "operatives": [
          {
            "name": "Lead Player",
            "text": "Хореографы конфликта, Lead Player-ы — опытные Harlequin-ы, облачённые в экстравагантные одеяния. Они направляют реакции своих товарищей на превратности битвы и следят, чтобы представление их труппы в театре войны было как можно более совершенным."
          },
          {
            "name": "Death Jester",
            "text": "Появление Death Jester в killzone возвещается шипящим шквалом огня shrieker cannon. Вражеская пехота разрывается на части, пока генные токсины оружия заставляют их гореть изнутри."
          },
          {
            "name": "Player",
            "text": "Harlequin Player-ы выступают с захватывающим мастерством, будь их сценой амфитеатр из wraithbone и стекла, залитый кристальным светом, или адское пекло поля боя. Они кувыркаются, бегут и прыгают, и каждое нажатие на спусковой крючок и взмах клинка несёт срежиссированную смерть врагу."
          },
          {
            "name": "Shadowseer",
            "text": "Shadowseer-ы способны ослеплять врагов и сводить их с ума своими психическими силами. Пока они окутывают иллюзиями своих союзников, они обстреливают противника галлюциногенными гранатами, вызывающими дезориентацию или смерть."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Saedath",
          "text": "Strategic Gambit в первый turning point: нужно выбрать Allegory (Epic или Melodrama) для своей kill team на битву и одного дружественного оператора VOID-DANCER TROUPE, который получает PIVOTAL ROLE на битву. Пока дружественный оператор имеет PIVOTAL ROLE, он имеет правило ACCOLADE твоего Allegory на битву.\n\nStrategic Gambit в каждый последующий turning point: можно выбрать одного дружественного оператора VOID-DANCER TROUPE, который получает правило ACCOLADE твоего Allegory на битву.\n\nOnce per turning point, когда дружественный оператор, имеющий PIVOTAL ROLE, завершает Performance своего Allegory, можно выбрать одного дружественного оператора VOID-DANCER TROUPE, который получает правило ACCOLADE твоего Allegory на битву."
        },
        {
          "name": "Harlequin's Panoply",
          "text": "Когда оператор стреляет по дружественному оператору VOID-DANCER TROUPE, и любые его кубики атаки сохранены как critical success, ухудши x правила Piercing этого оружия на 1 (если есть). Piercing 1 в этом случае игнорируется.\n\nКогда дружественный оператор VOID-DANCER TROUPE выполняет climb up, вертикальную дистанцию можно считать за 2\" (независимо от того, насколько далеко оператор реально движется по вертикали).\n\nДружественные операторы VOID-DANCER TROUPE могут двигаться в пределах control range вражеских операторов (они всё ещё должны начинать и заканчивать движение, соблюдая все требования для этого движения)."
        },
        {
          "name": "Darting Salvo",
          "text": "Когда дружественный оператор VOID-DANCER TROUPE выполняет действие Reposition во время своей активации, он может выполнить действие Shoot во время этого действия (это нужно сделать в месте, где его можно разместить, а любую оставшуюся дистанцию движения от действия Reposition можно использовать после этого).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Rising Crescendo",
          "text": "Дружественные операторы VOID-DANCER TROUPE могут выполнить действие Dash во время той же активации, в которой они выполнили действие Charge, но не наоборот.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Prismatic Blur",
          "text": "Когда оператор стреляет по дружественному оператору VOID-DANCER TROUPE, который выполнил действие, включающее движение в этот turning point, можно перебросить одну свою защитную кость.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Cegorach's Jest",
          "text": "Когда дружественный оператор VOID-DANCER TROUPE дерётся или отвечает (retaliating), и твой оппонент наносит удар (strike) обычным success, можно бросить один D6: если результат меньше Hit stat выбранного оружия оппонента, этот удар засчитывается как блокирующий одну из твоих костей вместо этого, и нельзя использовать это правило снова до конца этой последовательности.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Murderous Entrance",
          "text": "Примени этот firefight ploy, когда дружественный оператор VOID-DANCER TROUPE дерётся во время активации, в которой он выполнил действие Charge, после того как ты нанёс удар (strike). Можно сразу разрешить ещё один свой обычный success как strike (прежде оппонента), либо один critical success, если обычных success не осталось.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "The Curtain Falls",
          "text": "Примени этот firefight ploy, когда дружественный оператор VOID-DANCER TROUPE дерётся, после того как ты нанёс удар (strike) с critical success, если вражеский оператор не выведен из строя. Заверши эту последовательность (оставшиеся кубики атаки отбрасываются) и сразу выполни этим оператором свободное действие Fall Back на расстояние до 3\" (затем действие Fight заканчивается).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Elusive Target",
          "text": "Примени этот firefight ploy во время активации дружественного оператора VOID-DANCER TROUPE. До начала его следующей активации, пока у этого оператора Conceal order и он находится в cover, его нельзя выбрать допустимой целью — это имеет приоритет над всеми остальными правилами (например, Seek, Vantage terrain), кроме нахождения в пределах 2\".",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Domino Field",
          "text": "Примени этот firefight ploy, когда оператор стреляет по дружественному оператору VOID-DANCER TROUPE, во время этапа Resolve Defence Dice. Можно назначить одну свою удачно брошенную (successful) кость так, чтобы заблокировать все кости атаки оппонента с совпадающим результатом.",
          "cost": "Firefight Ploy"
        }
      ],
      "factionChoices": [
        {
          "id": "allegory",
          "label": "Allegory",
          "scope": "game",
          "pick": 1,
          "oncePerBattle": true,
          "options": [
            {
              "id": "epic",
              "name": "Epic",
              "text": "Performance: этот оператор выводит из строя вражеского оператора, деря́сь с ним (fighting).\n\nAccolade: пока этот оператор дерётся, его оружие ближнего боя получает weapon rule Balanced."
            },
            {
              "id": "melodrama",
              "name": "Melodrama",
              "text": "Performance: этот оператор выводит из строя вражеского оператора, стреляя (shooting) в него.\n\nAccolade: ranged-оружие этого оператора получает weapon rule Balanced."
            }
          ]
        }
      ],
      "statusTokens": [
        {
          "id": "humbling_cruelty",
          "name": "Humbling Cruelty",
          "target": "enemy",
          "text": "Если цель этого оружия не выведена из строя, но хотя бы одна из твоих костей атаки нанесла урон, цель получает один твой Humbling Cruelty token (если у неё его ещё нет). Пока вражеский оператор имеет один из твоих Humbling Cruelty token, отними 2\" от его Move stat и ухудши Hit stat его оружия на 1. Это не суммируется с being injured. В конце следующей активации этого вражеского оператора убери его Humbling Cruelty token.",
          "statMod": {
            "stat": "move",
            "delta": -2
          }
        }
      ]
    },
    "Wrecka Krew": {
      "archetypes": [
        "Security",
        "Seek & Destroy"
      ],
      "required": [
        {
          "name": "Wrecka Boss Nob",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 14,
          "count": 1,
          "weapons": [
            {
              "name": "Rokkit pistol",
              "atk": 6,
              "hit": "5+",
              "dmg": "4/5",
              "wr": "Range 8\", Blast 1\""
            },
            {
              "name": "Two rokkit pistols (focused)",
              "atk": 6,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Range 8\", Blast 1\", Ceaseless"
            },
            {
              "name": "Two rokkit pistols (salvo)",
              "atk": 6,
              "hit": "5+",
              "dmg": "4/5",
              "wr": "Range 8\", Blast 1\", Salvo*"
            },
            {
              "name": "Choppa",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Smash hammer",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/6",
              "wr": "Brutal"
            }
          ],
          "abilities": [
            {
              "name": "Wrecka Boss",
              "text": "Каждый раз, когда этот оператор выполняет действие Shoot или Fight (кроме Guard), получи 1 Wrecka point."
            },
            {
              "name": "* Salvo",
              "text": "Выбери до двух разных допустимых целей, не находящихся в пределах control range дружественных операторов. Выстрели этим оружием по обеим primary целям в выбранном порядке, затем по всем оставшимся secondary целям таким же образом (разрешай каждую последовательность отдельно). Каждая цель не может быть обстреляна из этого оружия более одного раза за это действие."
            }
          ],
          "portrait": "img/portraits/wrecka-krew/wrecka_boss_nob.png"
        },
        {
          "name": "Wrecka Bomb Squig",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 5,
          "count": 2,
          "weapons": [
            {
              "name": "Explosives",
              "atk": 6,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Blast 1\", Limited 1, Explosive*"
            },
            {
              "name": "Bite",
              "atk": 3,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Explosive",
              "text": "Этот оператор может выполнять действие Shoot этим оружием, находясь в пределах control range вражеского оператора. Не выбирай допустимую цель — вместо этого этот оператор всегда является primary target и не может быть in cover или obscured."
            },
            {
              "name": "Stoopid",
              "text": "В Firefight phase, когда определяешь order этого оператора, можно выбрать только Conceal. Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fight, Reposition и Shoot. Он не может использовать оружие, которого нет на его датакарте."
            },
            {
              "name": "Boom!",
              "text": "Если этот оператор выведен из строя в битве, в которой он не использовал свои explosives, брось D6, либо два D6 по желанию. Если любой результат 4+, этот оператор выполняет действие Shoot своими explosives перед тем, как быть убранным из killzone."
            },
            {
              "name": "Expendable",
              "text": "Этот оператор игнорируется для kill/elimination op твоего оппонента (при его incapacitation), а также при определении твоего стартового числа операторов. Он также игнорируется для victory conditions и подсчёта VP, если они требуют, чтобы операторы 'escape', 'survive' или были incapacitated вражескими операторами."
            }
          ],
          "portrait": "img/portraits/wrecka-krew/wrecka_bomb_squig.png"
        }
      ],
      "pool": [
        {
          "name": "Breaka Boy Fighter",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 12,
          "maxCopies": 4,
          "weapons": [
            {
              "name": "Smash hammer",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/6",
              "wr": "Brutal"
            }
          ],
          "abilities": [
            {
              "name": "Break Stuff",
              "text": "Выбери элемент террейна в пределах control range этого оператора. Если это equipment terrain feature, убери его. Иначе размести один из своих Breach markers в пределах control range этого оператора как можно ближе к этому элементу террейна. Когда оператор находится в пределах 1\" от этого маркера, он считает части того элемента террейна толщиной не более 1\" Accessible terrain.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или если элемент террейна не в пределах его control range.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/wrecka-krew/fighter.png"
        },
        {
          "name": "Tankbusta Gunner",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 12,
          "maxCopies": 4,
          "weapons": [
            {
              "name": "'Eavy rokkit launcha",
              "atk": 6,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Blast 1\", Heavy (Dash only)"
            },
            {
              "name": "Rokkit launcha",
              "atk": 6,
              "hit": "5+",
              "dmg": "4/5",
              "wr": "Blast 1\""
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Kompetitive Streak",
              "text": "Once per Shoot action, если этот оператор стреляет по вражескому оператору, по которому уже стрелял другой дружественный оператор в этом turning point, ты получаешь 1 Wrecka point. Определяй это при выборе допустимой цели, но можно учитывать любые secondary targets при этом (например, от weapon rule Blast)."
            }
          ],
          "portrait": "img/portraits/wrecka-krew/tankbustagunner.png"
        },
        {
          "name": "Breaka Boy Demolisha",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 12,
          "weapons": [
            {
              "name": "Tankhammer (bash)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Tankhammer (detonate)",
              "atk": 4,
              "hit": "3+",
              "dmg": "-",
              "wr": "Lethal 5+, Limited 1, Detonate*"
            }
          ],
          "abilities": [
            {
              "name": "Reckless Temperament",
              "text": "Normal Dmg значением 4 или более наносит этому оператору на 1 меньше урона; если у этого оператора Engage order, Critical Dmg значением 4 или более также наносит на 1 меньше урона этому оператору."
            },
            {
              "name": "* Detonate",
              "text": "Первый раз, когда этот weapon profile должен нанести урон вражескому оператору за битву, нанеси D6+6 урона тому вражескому оператору и каждому другому оператору в пределах его control range, если это normal success, либо 2D6+6 урона, если это critical success (разрешай отдельно для каждого). Затем действие заканчивается, и ты получаешь 1 Wrecka point, плюс 1 за каждого оператора, выведенного из строя во время этого действия. Урон от этого weapon rule нельзя игнорировать или уменьшать."
            }
          ],
          "portrait": "img/portraits/wrecka-krew/demolisha.png"
        },
        {
          "name": "Breaka Boy Krusha",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 12,
          "weapons": [
            {
              "name": "Knucklebustas",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/6",
              "wr": "Brutal, Shock, Smash*"
            }
          ],
          "abilities": [
            {
              "name": "* Smash",
              "text": "Каждый раз, когда ты наносишь strike, можно передвинуть вражеского оператора по прямой на расстояние до 1\". Если делаешь это, он должен закончить движение дальше от этого оператора и в месте, где он может быть размещён. Затем передвинь этого оператора по прямой на расстояние до 1\", но он должен закончить это движение в пределах control range того вражеского оператора (если то или другое невозможно, нельзя передвигать их)."
            },
            {
              "name": "Armoured Up",
              "text": "Когда вражеский оператор стреляет по этому оператору, либо этот оператор дерётся или отвечает (retaliating), твой оппонент не может retain результаты кубиков атаки менее 6 как critical successes."
            }
          ],
          "portrait": "img/portraits/wrecka-krew/breaka_boy_krusha.png"
        },
        {
          "name": "Tankbusta Rokkiteer",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 12,
          "weapons": [
            {
              "name": "Pulsa rokkit",
              "atk": 6,
              "hit": "5+",
              "dmg": "-",
              "wr": "Heavy (Reposition only), Limited 1, Pulsa*"
            },
            {
              "name": "Rokkit launcha",
              "atk": 6,
              "hit": "5+",
              "dmg": "4/5",
              "wr": "Blast 1\""
            },
            {
              "name": "Rokkit rack",
              "atk": 6,
              "hit": "5+",
              "dmg": "4/5",
              "wr": "Blast 2\", Heavy (Reposition only), Limited 1, Relentless"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "* Pulsa",
              "text": "Не выбирай допустимую цель. Вместо этого размести свой Pulsa marker в зоне видимости этого оператора, либо на Vantage terrain элемента террейна, видимого этому оператору. Этот маркер получает 1 Pulsa point, затем брось кубики атаки: он получает 1 дополнительный Pulsa point за каждый success (максимум 3 дополнительных point). Отдельно нанеси D3 урона каждому оператору, полностью находящемуся в пределах x\" от этого маркера, где x — количество Pulsa points этого маркера. Затем действие заканчивается."
            },
            {
              "name": "Shokkwave",
              "text": "Когда оператор находится в пределах x\" от твоего Pulsa marker (см. Pulsa), вычти 2\" из его Move stat и ухудши Hit stat его оружия на 1. Это суммируется с being injured. В Ready step каждой Strategy phase вычитай 1 из points твоего Pulsa marker. Если у Pulsa marker когда-либо становится 0 points, убери его."
            }
          ],
          "portrait": "img/portraits/wrecka-krew/180px-tankbustarokiteer.png"
        }
      ],
      "poolPick": 5,
      "equipment": "Wrecka Krew",
      "lore": {
        "intro": "Звуки взрывов, едкий запах дыма и крики битвы гонят Wrecka Krew вперёд, к ещё более разрушительным поступкам.",
        "operatives": [
          {
            "name": "Wrecka Boss Nob",
            "text": "Самый большой, сильный и злобный Tankbusta или Breaka Boy обычно становится во главе Wrecka Krew как его Boss Nob."
          },
          {
            "name": "Wrecka Bomb Squig",
            "text": "Орки выводят всевозможных squig'ов. Самые узнаваемые среди них — шарообразные двуногие существа с множеством зубов и невероятно скверным характером. Wrecka Krew берут многих из этих созданий в бой, приматывая к ним взрывчатку и направляя прямо на врага."
          },
          {
            "name": "Breaka Boy Demolisha",
            "text": "Demolisha не довольствуются простым замахом молотом по выбранной цели. Вместо этого они приматывают взрывные ракеты к головкам своего оружия перед тем, как замахнуться им в ярости."
          },
          {
            "name": "Breaka Boy Fighter",
            "text": "Wrecka, набранные из Breaka Boy mob, предпочитают ближний бой. Их оружие — попросту именуемое smash hammer — незамысловато по конструкции, но от этого не менее эффективно."
          },
          {
            "name": "Breaka Boy Krusha",
            "text": "Облачённые в громоздкую броню из металлолома, Breaka Boy Krusha часто возглавляют наступление Wrecka Krew. Их пневматические knucklebustas делают их отличными взломщиками укреплений."
          },
          {
            "name": "Tankbusta Gunner",
            "text": "Вооружённые различными видами rokkit launcha, Tankbusta Gunner отличаются невероятно чесоточным пальцем на спусковом крючке."
          },
          {
            "name": "Tankbusta Rokkiteer",
            "text": "Не удовлетворившись огневой мощью обычного rokkit launcha, Tankbusta Rokkiteer потратили все свои teef на дополнительные взрывоопасные gubbinz в виде rokkit rack и pulsa rokkit."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Wrecka Rampage",
          "text": "Когда дружественный оператор WRECKA KREW стреляет, дерётся или отвечает (retaliating), на этапе Roll Attack Dice:\n- За каждый результат кубика атаки 6, который ты retain, получи 1 Wrecka point.\n- Можно потратить до 2 своих Wrecka points (если это BOMB SQUIG, тратить нельзя вообще). За каждый потраченный таким образом point retain один из своих fails как обычный success вместо того, чтобы отбросить его.\n\nНельзя иметь более 6 Wrecka points одновременно."
        },
        {
          "name": "Tanked Up",
          "text": "Первый раз, когда дружественный оператор WRECKA KREW (кроме BOMB SQUIG), имеющий Engage order, выполняет действие Charge, Shoot или Fight (кроме Guard) во время каждой своей активации/counteraction, добавь 1 к его APL stat до начала его следующей активации."
        },
        {
          "name": "Waaagh!",
          "text": "Оружие ближнего боя дружественных операторов WRECKA KREW получает weapon rule Balanced.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Tuff Gitz",
          "text": "Когда оператор стреляет по дружественному оператору WRECKA KREW, имеющему Engage order, можно перебросить один свой defence dice.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Destruction",
          "text": "Дальнобойное (ranged) оружие дружественных операторов WRECKA KREW получает weapon rule Saturate.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Amped Up",
          "text": "Каждый дружественный оператор WRECKA KREW, имеющий Engage order, сразу восстанавливает до D3+1 потерянных wounds (бросай отдельно для каждого).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Just a Scratch",
          "text": "Примени этот firefight ploy, когда кубик атаки наносит Normal Dmg дружественному оператору WRECKA KREW (кроме BOMB SQUIG). Игнорируй этот нанесённый урон.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Demolition Job",
          "text": "Примени этот firefight ploy после того, как дружественный оператор WRECKA KREW выполнил действие Shoot или Fight, непосредственно перед тем, как выведенные из строя операторы убираются (если есть). Размести один из своих Demolition markers в пределах control range цели. Когда дружественный оператор WRECKA KREW (кроме BOMB SQUIG) стреляет против, дерётся против или отвечает (retaliating) против оператора, находящегося в пределах 3\" от этого маркера, можно потратить 1 Wrecka point бесплатно (даже если у тебя их нет). В Ready step следующей Strategy phase убери этот маркер.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Proppa Scrap",
          "text": "Примени этот firefight ploy во время активации дружественного оператора WRECKA KREW BREAKA BOY или WRECKA KREW BOSS NOB. Во время этой активации тот оператор может выполнить действие Fight дважды.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Kaboom!",
          "text": "Примени этот firefight ploy, когда дружественный оператор WRECKA KREW выполняет действие Shoot и выбрано оружие с weapon rule Blast. До конца этого действия добавь 1\" к Blast этого оружия, и оно получает weapon rule Severe при стрельбе по primary target. Нельзя использовать этот ploy и правило Drill Rokkits (см. faction equipment) в одном и том же действии.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "wrecka_points",
          "name": "Wrecka Points",
          "target": "friendly",
          "counter": true,
          "max": 6,
          "text": "Wrecka Rampage. Когда WRECKA KREW стреляет/дерётся/отвечает: за каждый retained результат кубика атаки 6 получи 1 Wrecka point (максимум 6 одновременно). Можно потратить до 2 points (кроме BOMB SQUIG), чтобы retain fail как success вместо отбрасывания."
        },
        {
          "id": "tanked_up",
          "name": "Tanked Up",
          "target": "friendly",
          "text": "Первый раз, когда дружественный оператор WRECKA KREW (кроме BOMB SQUIG), имеющий Engage order, выполняет действие Charge, Shoot или Fight (кроме Guard) во время каждой своей активации/counteraction, добавь 1 к его APL stat до начала его следующей активации.",
          "statMod": {
            "stat": "apl",
            "delta": 1
          }
        }
      ]
    },
    "Wolf Scout": {
      "archetypes": [
        "Recon",
        "Seek & Destroy"
      ],
      "required": [
        {
          "name": "Wolf Scout Pack Leader",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 13,
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
              "name": "Power weapon",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Lupine Guile",
              "text": "Once per battle, после броска за инициативу (roll-off), если этот оператор в killzone, можно перебросить свой кубик."
            },
            {
              "name": "Grizzled Veteran",
              "text": "В первый раз, когда этот оператор должен быть выведен из строя в этой битве, он не выводится из строя, у него остаётся 1 wound, и его нельзя вывести из строя до конца этого действия. Все оставшиеся кубики атаки отбрасываются (включая твои, если этот оператор дерётся или отвечает). Нельзя использовать firefight ploy Counterattack или наносить урон в результате strategy ploy Savage Fighters в конце этого действия."
            }
          ],
          "portrait": "img/portraits/wolf-scout/ws_pack_leader.png",
          "count": 1
        },
        {
          "name": "Fenrisian Wolf",
          "apl": 2,
          "move": "8\"",
          "save": "5+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Fangs",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Instinctive Predator",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight, Guard и Reposition. Он не может использовать оружие, которого нет на его карточке. Этот оператор может выполнять действие Charge, имея Conceal order."
            },
            {
              "name": "Pounce",
              "text": "Once per battle. Если APL stat этого оператора 2 или больше, этот оператор может выполнить свободное действие Charge, Fall Back или Reposition. Если он это делает, до конца его следующей активации вычти 1 из его APL stat, и он не может выполнять ни одно из вышеперечисленных действий.",
              "cost": "Strategic Gambit"
            }
          ],
          "portrait": "img/portraits/wolf-scout/wolf.png"
        }
      ],
      "pool": [
        {
          "name": "Wolf Scout Fangbearer",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 13,
          "weapons": [
            {
              "name": "Absolvor bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 9\", Piercing Crits 1"
            },
            {
              "name": "Combat blade",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Spiritual Chirurgy",
              "text": "Можно игнорировать любые изменения характеристик дружественных операторов WOLF SCOUT (кроме FENRISIAN WOLF) от ранения (injured), включая характеристики их оружия."
            },
            {
              "name": "Healing Balms",
              "text": "Выбери одного дружественного оператора WOLF SCOUT в пределах control range этого оператора, чтобы он восстановил до D3+3 потерянных wounds.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/wolf-scout/wolf_scout_fangbearer.png"
        },
        {
          "name": "Wolf Scout Frosteye",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 13,
          "weapons": [
            {
              "name": "Instigator bolt carbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1, Silent"
            },
            {
              "name": "Combat blade",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Storm-veiled Execution",
              "text": "Пока этот оператор в пределах своего STORM: он может выполнять действие Guard независимо от типа killzone; он может выполнять действие Guard, имея Conceal order."
            },
            {
              "name": "Hunter's Senses",
              "text": "Выбери одно из следующих правил, которое instigator bolt carbine этого оператора получит до начала его следующей активации:\n- Severe.\n- Saturate, и когда этот оператор стреляет из этого оружия, вражеские операторы не могут быть obscured.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/wolf-scout/wolf_scout_frosteye.png"
        },
        {
          "name": "Wolf Scout Gunner",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 13,
          "weapons": [
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
              "name": "Combat blade",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Tempest's Fury",
              "text": "Пока этот оператор в пределах своего STORM: все профили его plasma gun получают weapon rule Punishing; его plasma gun (supercharge) не имеет weapon rule Hot."
            }
          ],
          "portrait": "img/portraits/wolf-scout/ws_gunner.png"
        },
        {
          "name": "Wolf Scout Trapmaster",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 13,
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
              "name": "Combat blade",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Haywire Mine",
              "text": "Этот оператор несёт свой маркер Haywire Mine. Он может выполнять действие Pick Up Marker на этом маркере, но этот маркер нельзя разместить в пределах control range другого оператора."
            },
            {
              "name": "Proximity Mine",
              "text": "Первый раз, когда маркер Haywire Mine оказывается в пределах control range другого оператора, убери этот маркер, вычти 1 из APL stat того оператора до конца его следующей активации и нанеси ему 2D3+3 урона (или D3+6, если этот маркер в пределах 6\" по горизонтали от твоего Storm marker); если он не выведен из строя, закончи его действие (если есть)."
            }
          ],
          "portrait": "img/portraits/wolf-scout/wolf_scout_trapmaster.png"
        },
        {
          "name": "Wolf Scout Rune Priest Skjald",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 13,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Jaws of the World Wolf",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "PSYCHIC, Blast 2\", Severe"
            },
            {
              "name": "Thunderclap",
              "atk": 5,
              "hit": "2+",
              "dmg": "2/2",
              "wr": "PSYCHIC, Range 6\", Saturate, Seek Light, Stun, Torrent 2\""
            },
            {
              "name": "Runic stave",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "PSYCHIC, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Cast the Runes",
              "text": "После выбора этого оператора, перед битвой, брось три D6 и отложи их. За каждый результат 1-4 можно один раз использовать firefight ploy Command Re-roll за 0CP во время turning point, соответствующего этому результату. За каждый результат 5-6 получи 1CP."
            },
            {
              "name": "Call the Storm",
              "text": "PSYCHIC. Убери свой Storm marker из killzone (если есть), затем размести его в killzone.\n\nPSYCHIC. Вместо этого можно разрешить следующий эффект: выбери одного дружественного оператора WOLF SCOUT. До начала следующей активации этого оператора, пока он не выведен из строя или пока это действие не выполнено снова (смотря что раньше), когда этот дружественный оператор в пределах своего STORM и более чем в 3\" от активного оператора, он obscured.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/wolf-scout/wolf_scout_rune_priest.png"
        },
        {
          "name": "Wolf Scout Hunter",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 13,
          "maxCopies": 5,
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
              "name": "Combat blade",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Fierce Temperament",
              "text": "Пока этот оператор в пределах своего STORM, его оружие получает weapon rule Severe."
            }
          ],
          "portrait": "img/portraits/wolf-scout/ws_hunter.png"
        }
      ],
      "poolPick": 5,
      "equipment": "Wolf Scout",
      "lore": {
        "intro": "Kill team Wolf Scouts — самые опасные и результативные охотники своей Great Company, действующие далеко впереди штурмовых сил Space Wolves в одиночных операциях без поддержки. Они сеют смерть и хаос в тылу врага через убийства, диверсии и не только, зачастую скрываясь в странных туманах или свирепых штормах.",
        "operatives": [
          {
            "name": "Fenrisian Wolf",
            "text": "Множество волчьих зверей родом с родного мира Space Wolves. Те, что связаны узами со стаями Wolf Scout, — чуткие охотники и безжалостные убийцы."
          },
          {
            "name": "Wolf Scout Pack Leader",
            "text": "Pack Leader-ы — непревзойдённые охотники, способные в одиночку выслеживать величайшие ужасы галактики и возвращаться с окровавленными трофеями."
          },
          {
            "name": "Wolf Scout Fangbearer",
            "text": "Fangbearer-ы — знатоки многих уникальных генетических особенностей своего Ордена. Перед битвой они проводят шаманские ритуалы, укрепляя тело и дух своего kill team перед грядущими опасностями."
          },
          {
            "name": "Wolf Scout Frosteye",
            "text": "В сагах некоторым Frosteye приписывают способность видеть сердце врага и замораживать его одним взглядом. Непревзойдённые стрелки, они разят с дальней дистанции из instigator bolt carbine."
          },
          {
            "name": "Wolf Scout Gunner",
            "text": "Gunner-ы — специалисты по вооружению, использующие мощные plasma gun. Это опасное оружие позволяет охотничьей стае Wolf Scout уничтожать самых стойких врагов на большей дистанции."
          },
          {
            "name": "Wolf Scout Trapmaster",
            "text": "Trapmaster-ы — диверсанты и специалисты по взрывчатке, мастерски устанавливающие свои эзотерические haywire mines, способные выжечь как чувствительную механику, так и нервную систему цели."
          },
          {
            "name": "Wolf Scout Rune Priest Skjald",
            "text": "Подобно Librarian-ам других Орденов, Rune Priest Skjald — боевые псайкеры, черпающие силу Варпа для уничтожения врагов."
          },
          {
            "name": "Wolf Scout Hunter",
            "text": "Hunter-ы из стай Wolf Scout — суровые и опытные воины, редко довольные, если не выслеживают добычу."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Elemental Storm",
          "text": "Убери свой Storm marker из killzone (если есть), затем размести его в killzone. Когда оператор в пределах 6\" по горизонтали от твоего Storm marker, он в пределах твоего STORM.\n\nКаждый дружественный оператор WOLF SCOUT может выполнять действие Charge, имея Conceal order, если заканчивает это действие в пределах твоего STORM.",
          "cost": "Strategic Gambit"
        },
        {
          "name": "Hunting Astartes",
          "text": "Во время активации каждого дружественного оператора WOLF SCOUT он может выполнить либо два действия Shoot, либо два действия Fight. Если это два действия Shoot:\n- Если оба действия используют plasma gun или plasma pistol, за второе действие нужно заплатить на 1 AP больше.\n- Нельзя выбрать два PSYCHIC ranged-оружия.\n\nКаждый дружественный оператор WOLF SCOUT может выполнять counteract независимо от своего order."
        },
        {
          "name": "Cloaked by the Storm",
          "text": "Когда оператор стреляет по дружественному оператору WOLF SCOUT, который в пределах твоего STORM, можно перебросить один из своих кубиков защиты.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Tempestuous Wrath",
          "text": "Когда дружественный оператор WOLF SCOUT дерётся или отвечает (retaliating), если он в пределах твоего STORM или был в пределах твоего STORM в начале активации, его оружие ближнего боя получает weapon rule Balanced.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Storm's Bite",
          "text": "Когда дружественный оператор WOLF SCOUT дерётся против вражеского оператора, который в пределах твоего STORM, вычти 1 из Atk stat оружия ближнего боя этого вражеского оператора (минимум до 3).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Savage Fighters",
          "text": "Когда дружественный оператор WOLF SCOUT заканчивает отвечать (retaliating), если он не был выведен из строя, можно нанести D3+1 урона вражескому оператору в этой последовательности.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Acute Senses",
          "text": "Примени этот firefight ploy, когда дружественный оператор WOLF SCOUT выполняет действие Shoot и ты выбираешь допустимую цель. До конца этого действия ranged-оружие этого дружественного оператора получает weapon rules Range 6\" и Seek Light, и вражеские операторы не могут быть obscured.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Counterattack",
          "text": "Примени этот firefight ploy в конце активации вражеского оператора, либо после того как вражеский оператор выполнил действие Fight. Один дружественный оператор WOLF SCOUT может сразу выполнить свободное действие Fight, но нельзя выбрать другого вражеского оператора для драки во время этого действия.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Touched by Lokyar",
          "text": "Примени этот firefight ploy после броска кубиков атаки для дружественного оператора WOLF SCOUT (кроме FENRISIAN WOLF), если он дерётся дальше 5\" от других дружественных операторов. Можно перебросить любые свои кубики атаки.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Transhuman Physiology",
          "text": "Примени этот firefight ploy, когда оператор стреляет по дружественному оператору WOLF SCOUT (кроме FENRISIAN WOLF), на этапе Roll Defence Dice. Можно удержать один из своих normal success как critical success вместо этого.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "hunters_senses",
          "name": "Hunter's Senses",
          "target": "friendly",
          "text": "Выбери одно из следующих правил, которое instigator bolt carbine этого оператора получит до начала его следующей активации:\n- Severe.\n- Saturate, и когда этот оператор стреляет из этого оружия, вражеские операторы не могут быть obscured.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора."
        },
        {
          "id": "call_the_storm",
          "name": "Call the Storm",
          "target": "friendly",
          "text": "PSYCHIC. Убери свой Storm marker из killzone (если есть), затем размести его в killzone.\n\nPSYCHIC. Вместо этого можно разрешить следующий эффект: выбери одного дружественного оператора WOLF SCOUT. До начала следующей активации этого оператора, пока он не выведен из строя или пока это действие не выполнено снова (смотря что раньше), когда этот дружественный оператор в пределах своего STORM и более чем в 3\" от активного оператора, он obscured.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора."
        },
        {
          "id": "pounce",
          "name": "Pounce",
          "target": "friendly",
          "text": "Once per battle. Если APL stat этого оператора 2 или больше, этот оператор может выполнить свободное действие Charge, Fall Back или Reposition. Если он это делает, до конца его следующей активации вычти 1 из его APL stat, и он не может выполнять ни одно из вышеперечисленных действий.",
          "statMod": {
            "stat": "apl",
            "delta": -1
          }
        }
      ]
    },
    "Inquisitorial Agents": {
      "archetypes": [
        "Recon",
        "Infiltration",
        "Security",
        "Seek & Destroy"
      ],
      "equipment": "Inquisitorial Agents",
      "required": [
        {
          "name": "Interrogator Agent",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "count": 1,
          "weapons": [
            {
              "name": "Extended stock relic autopistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/4",
              "wr": "Range 12\", Lethal 5+"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Inquisitorial Tomes",
              "text": "Пока этот оператор в killzone и/или когда этот оператор активируется, выбери одно из правил INQUISITORIAL TOME (см. статус-токен Inquisitorial Tome), которое получит этот оператор, и одно (можно то же самое) для дружественного Tome-Skull. Это можно выбирать заново при каждой активации.",
              "cost": "Strategic Gambit"
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/interrogator_agent.png"
        },
        {
          "name": "Tome-Skull",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 5,
          "count": 1,
          "weapons": [],
          "abilities": [
            {
              "name": "Consecrated Tome",
              "text": "Этот оператор может иметь правило INQUISITORIAL TOME (см. Interrogator Agent). Учти, что он сохраняет это правило, даже если дружественный Interrogator Agent убран из killzone."
            },
            {
              "name": "Machine",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back и Reposition. Он не может отвечать (retaliating) или assist в драке. При определении контроля маркера считай его APL stat на 1 ниже (это не изменение самого APL stat, поэтому суммируется с другими изменениями). Пока у этого оператора приказ Conceal и он в cover, он не может быть выбран допустимой целью — это имеет приоритет над всеми другими правилами (например, Seek, Vantage terrain), кроме случаев, когда он в пределах 2\"."
            },
            {
              "name": "Expendable",
              "text": "Этот оператор игнорируется для kill/elimination op твоего противника (когда он incapacitated), а также при определении victory conditions и scoring VP, если они требуют 'escape', 'survive' или incapacitate операторов (если он escapes/survives/incapacitated, при подсчёте сколько операторов должны escape/survive/be incapacitated он не учитывается)."
            },
            {
              "name": "Group Activation",
              "text": "Когда этот оператор expended, ты должен затем активировать готового дружественного оператора INTERROGATOR (если можешь) прежде чем противник активируется. То же самое верно и в обратную сторону (INTERROGATOR, затем TOME-SKULL). Когда тот другой оператор expended, твой противник активируется как обычно."
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/tome_skull.png"
        }
      ],
      "poolPick": 10,
      "pool": [
        {
          "name": "Autosavant Agent",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Mechanical appendages",
              "atk": 3,
              "hit": "5+",
              "dmg": "1/2",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Scrivener",
              "text": "Каждый следующий раз (кроме первого) за битву, когда противник использует ploy (кроме Command Re-roll), пока этот оператор в killzone, получи 1CP (максимум 2CP за turning point)."
            },
            {
              "name": "Irrefutable Report",
              "text": "Каждый раз, когда этот оператор оспаривает objective marker или один из твоих mission marker'ов, он всегда контролирует его. Это имеет приоритет над всеми другими правилами."
            },
            {
              "name": "Lightly Armed",
              "text": "Этот оператор не может использовать оружие, которого нет на его карточке, или выполнять unique actions."
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/autosavant_agent.png"
        },
        {
          "name": "Questkeeper Agent",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Eviscerator",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/6",
              "wr": "Brutal"
            }
          ],
          "abilities": [
            {
              "name": "Irrepressible Purpose",
              "text": "Если этот оператор incapacitated во время действия Fight, можно ударить вражеского оператора в этой последовательности одним из своих unresolved successes, прежде чем этот оператор будет убран из killzone."
            },
            {
              "name": "Zealot",
              "text": "Каждый раз, когда кубики атаки наносят этому оператору урон 3 или больше, брось один D6: на результате 5+ вычти 1 из этого урона."
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/questkeeper_agent.png"
        },
        {
          "name": "Death World Veteran Agent",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Knife",
              "atk": 1,
              "hit": "2+",
              "dmg": "5/7",
              "wr": "Lethal 5+"
            },
            {
              "name": "Polearm",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Hunter",
              "text": "Этот оператор может выполнить действие Charge, имея приказ Conceal."
            },
            {
              "name": "Weathered",
              "text": "Once per turning point, пока этот оператор дерётся или отвечает (retaliating), на этапе Resolve Attack Dice можно проигнорировать урон, наносимый ему одним normal success."
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/death_world_veteran_agent.png"
        },
        {
          "name": "Enlightener Agent",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Paired blades",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Balanced, Rending"
            }
          ],
          "abilities": [
            {
              "name": "No Escape",
              "text": "Каждый раз, когда вражеский оператор в пределах control range этого оператора должен выполнить действие Fall Back, можно применить это правило: брось D6, вычти 1, если у того вражеского оператора Wounds stat выше, чем у этого, и добавь 1, если тот вражеский оператор injured. На результате 4+ тот вражеский оператор не может выполнить это действие во время этой активации/counteraction (потраченный на него AP не возвращается)."
            },
            {
              "name": "Extract Information",
              "text": "Каждый раз, когда вражеский оператор incapacitated в пределах control range этого оператора, получи 1CP."
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/enlightener_agent.png"
        },
        {
          "name": "Hexorcist Agent",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Shotgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Range 6\""
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Hexorcise",
              "text": "Каждый раз, когда вражеский оператор видим этому оператору или в пределах 6\" от него, твой противник не может перебрасывать свои кубики атаки или защиты за этого вражеского оператора."
            },
            {
              "name": "Chasten",
              "text": "Выбери одного вражеского оператора, допустимую цель для этого действия и в пределах 6\" от этого оператора, затем выбери одно дополнительное правило (включая weapon rule, кроме правил, которые игнорируются для kill/elimination op), которое есть на его карточке. До конца следующей активации того вражеского оператора считай, что у него нет этого правила. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/hexorcist_agent.png"
        },
        {
          "name": "Mystic Agent",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "2+",
              "dmg": "2/3",
              "wr": "Range 8\", Seek"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Icon Bearer",
              "text": "При определении контроля маркера считай этого оператора с APL stat на 1 больше (это не изменение самого APL stat, поэтому суммируется с другими изменениями)."
            },
            {
              "name": "Lightly Armed",
              "text": "Этот оператор не может использовать оружие, которого нет на его карточке."
            },
            {
              "name": "Scry",
              "text": "PSYCHIC. Выбери одного дружественного оператора INQUISITORIAL AGENTS в пределах 6\" от этого оператора, затем выбери один из следующих эффектов, который будет действовать до начала следующей активации того оператора, пока он не incapacitated, или пока это действие не выполнено снова (что наступит раньше): Guidance (PSYCHIC) — этот оператор получает статус-токен Guidance; или Protection (PSYCHIC) — этот оператор получает статус-токен Protection. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/mystic_agent.png"
        },
        {
          "name": "Penal Legionnaire Agent",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Hand flamer",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 6\", Saturate, Torrent 1\""
            },
            {
              "name": "Chainsword",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Chem-mask",
              "text": "Можно игнорировать любые изменения APL stat этого оператора, а также любые изменения его статов от being injured. На этого оператора не действуют weapon rules Shock и Stun противника."
            },
            {
              "name": "Cruel",
              "text": "Каждый раз, когда этот оператор стреляет, дерётся или отвечает (retaliating) против injured вражеского оператора, оружие этого оператора получает weapon rule Relentless."
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/penal_legionnaire_agent.png"
        },
        {
          "name": "Pistolier Agent",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Scoped plasma pistol (standard)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Range 12\", Piercing 1"
            },
            {
              "name": "Scoped plasma pistol (supercharge)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 12\", Hot, Lethal 5+, Piercing 1"
            },
            {
              "name": "Suppressed autopistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Range 8\", Silent"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Pistolier",
              "text": "Можно игнорировать любые изменения Hit stat ranged-оружия этого оператора."
            },
            {
              "name": "Pistol Barrage",
              "text": "Выполни два бесплатных действия Shoot этим оператором (это имеет приоритет над ограничениями на действия). Нужно выбрать профиль scoped plasma pistol для одного действия и suppressed autopistol для другого (в любом порядке). Нельзя выполнять это действие, если у этого оператора приказ Conceal, или во время активации, в которой он выполнил действие Shoot (и наоборот).",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/pistolier_agent.png"
        },
        {
          "name": "Requisitioned Gun Servitor",
          "apl": 1,
          "move": "5\"",
          "save": "4+",
          "wounds": 11,
          "maxCopies": 2,
          "weapons": [
            {
              "name": "Heavy bolter (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Heavy (Dash only), Piercing Crits 1"
            },
            {
              "name": "Heavy bolter (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Heavy (Dash only), Piercing Crits 1, Torrent 1\""
            },
            {
              "name": "Multi-melta",
              "atk": 4,
              "hit": "4+",
              "dmg": "6/3",
              "wr": "Devastating 4, Heavy (Dash only), Piercing 2"
            },
            {
              "name": "Plasma cannon (standard)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/6",
              "wr": "Blast 2\", Heavy (Dash only), Piercing 1"
            },
            {
              "name": "Plasma cannon (supercharge)",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/6",
              "wr": "Blast 2\", Heavy (Dash only), Hot, Lethal 5+, Piercing 1"
            },
            {
              "name": "Servo claw",
              "atk": 3,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Lobotomised",
              "text": "Каждый раз, когда этот оператор активируется, если он видим или в пределах 3\" от другого дружественного оператора INQUISITORIAL AGENTS (кроме GUN SERVITOR) или наоборот, добавь 1 к APL stat этого оператора до конца этой активации."
            },
            {
              "name": "Weapon Loadout",
              "text": "Этот оператор экипирован одним из вариантов: Heavy bolter + servo claw, Multi-melta + servo claw или Plasma cannon + servo claw (выбирается при добавлении в ростер). В ростер можно включить до двух Gun Servitor, но у них должны быть разные варианты дальнобойного оружия."
            }
          ],
          "portrait": "img/portraits/inquisitorial-agents/requisitioned_gun_servitor.png"
        }
      ],
      "lore": {
        "intro": "Инквизиция действует в тени, и её агенты выполняют самую грязную и опасную работу от имени Инквизитора. Interrogator ведёт допросы и собирает досье на предателей и еретиков, а верный Tome-Skull хранит секреты, которые нельзя доверить бумаге. Вокруг них собирается пёстрая свита завербованных специалистов — от закалённых ветеранов диких миров до безумных мистиков и лоботомированных сервиторов — каждый инструмент в руках тех, кто охотится на врагов Императора там, где официальные силы бессильны.",
        "operatives": [
          {
            "name": "Interrogator Agent",
            "text": "Правая рука Инквизитора, ведущий допросы и расследования там, куда не дотягивается официальное правосудие."
          },
          {
            "name": "Tome-Skull",
            "text": "Парящий череп-хранитель, несущий в себе тайные архивы Инквизиции — и, если потребуется, приговор."
          },
          {
            "name": "Autosavant Agent",
            "text": "Ходячий архив данных, чья лояльность Инквизиции превосходит его человечность."
          },
          {
            "name": "Questkeeper Agent",
            "text": "Фанатик, для которого завершение порученного расследования важнее собственной жизни."
          },
          {
            "name": "Death World Veteran Agent",
            "text": "Выживший на мире, который убивает большинство своих обитателей ещё до рождения — теперь его выживание служит Инквизиции."
          },
          {
            "name": "Enlightener Agent",
            "text": "Мастер клинка, чья задача — не дать врагу сбежать от правосудия Инквизиции."
          },
          {
            "name": "Hexorcist Agent",
            "text": "Охотник за ересью варпа, чьё присутствие само по себе рушит нечестивые чары."
          },
          {
            "name": "Mystic Agent",
            "text": "Слабый псайкер, чей дар предчувствия делает его бесценным проводником для отряда."
          },
          {
            "name": "Penal Legionnaire Agent",
            "text": "Осуждённый преступник, которому дали шанс искупить вину кровью — своей или чужой."
          },
          {
            "name": "Pistolier Agent",
            "text": "Виртуоз стрельбы с двух рук, несущий смерть на расстоянии, прежде чем цель успеет понять, что её выследили."
          },
          {
            "name": "Requisitioned Gun Servitor",
            "text": "Лоботомированный сервитор с тяжёлым вооружением — безмолвный, безжалостный и абсолютно послушный."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Inquisitorial Requisition",
          "text": "Вместо второй пятёрки pool-операторов можно реквизировать специалистов из другой имперской силы (Death Korps of Krieg, Arbites Exaction Squad, Imperial Navy Breachers, Kasrkin, Sisters of Silence или Tempestus Scions) как тематический альтернативный набор. Эта опция не реализована для сборки в этом приложении — справочно, для настольной игры."
        },
        {
          "name": "Denounce",
          "text": "Выбери вражеского оператора и брось один D3; тот оператор не может активироваться или выполнять действия, пока он не станет последним оператором противника, который активируется в этом turning point, или пока противник не активирует количество операторов, равное результату D3 (что наступит раньше). Отметь цель статус-токеном Denounce. Каждый следующий раз, когда этот ploy используется снова в этой битве, он стоит на 1CP больше, чем в прошлый раз (1CP, затем 2CP, затем 3CP и т.д.).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Intense Scrutiny",
          "text": "Когда выбираешь допустимую цель для дружественного оператора INQUISITORIAL AGENTS, вражеские операторы в пределах 4\" от другого оператора (вместо обычных 2\") не могут находиться в cover. Это не убирает реальный cover save, если обычное условие в 2\" тоже выполнено.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Quarry",
          "text": "Выбери одного вражеского оператора своей Quarry на этот turning point (отметь его статус-токеном Quarry). Каждый раз, когда дружественный оператор INQUISITORIAL AGENTS стреляет, дерётся или отвечает (retaliating) против твоей Quarry, его оружие получает weapon rule Ceaseless. Когда твоя Quarry incapacitated, можно выбрать нового вражеского оператора своей Quarry (и можно продолжать делать это в течение этого turning point).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Irrefutable Jurisdiction",
          "text": "Каждый раз, когда по дружественному оператору INQUISITORIAL AGENTS в пределах 3\" от objective marker стреляют, можно перебросить один из своих кубиков защиты. Если этот оператор оспаривает тот marker, вместо этого можно перебросить любое количество своих кубиков защиты с одним выбранным результатом (например, все результаты 2).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Absolute Authority",
          "text": "Примени этот firefight ploy во время битвы, когда противник использует strategy ploy или firefight ploy (кроме Command Re-roll или ploy стоимостью 0CP). Тот ploy не срабатывает, а потраченный на него CP возвращается противнику. Противник не может использовать тот же ploy снова в этом turning point. Нельзя использовать это правило, чтобы остановить один и тот же ploy более одного раза за битву.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Relentless in Pursuit",
          "text": "Примени этот firefight ploy, когда вражеский оператор в пределах 2\" от готового дружественного оператора INQUISITORIAL AGENTS выполняет действие, перемещающее его. После того как он переместился, этот дружественный оператор может выполнить либо бесплатное действие Reposition, но должен закончить его в пределах 2\" от того вражеского оператора, либо бесплатное действие Charge, но должен закончить его в control range того вражеского оператора. Если ни одно из этого невозможно, этот ploy не срабатывает, и потраченный CP возвращается.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "The Emperor's Will",
          "text": "Примени этот firefight ploy, когда дружественный оператор INQUISITORIAL AGENTS активируется. До конца активации этого оператора можно игнорировать любые изменения его статов (включая статы его оружия).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Intimidating Presence",
          "text": "Примени этот firefight ploy, когда вражеский оператор, видимый дружественному оператору INQUISITORIAL AGENTS и в пределах 3\" от него (или видимый дружественному Mystic Agent и в пределах 6\" от него), выполняет действие Pick Up Marker или mission-действие (кроме Operate Hatch). Противник должен заплатить 1 дополнительный AP за то действие тем вражеским оператором (если не может или не хочет, потраченный на действие AP возвращается).",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "inquisitorial_tome",
          "name": "Inquisitorial Tome",
          "target": "friendly",
          "text": "Этот токен отражает одно из двух правил, которое сейчас есть у оператора (выбирается способностью Inquisitorial Tomes оператора Interrogator Agent):\n- Denunciation: каждый раз, когда дружественный оператор с этим правилом стреляет, дерётся или отвечает (retaliating) против вражеского оператора в пределах 2\" от дружественного оператора с этим правилом, добавь 1 к Atk stat оружия этого дружественного оператора.\n- Sanctification: каждый раз, когда вражеский оператор стреляет, дерётся или отвечает (retaliating) против дружественного оператора с этим правилом, находящегося в пределах 2\" от дружественного оператора с этим правилом, вычти 1 из Atk stat оружия того вражеского оператора."
        },
        {
          "id": "quarry",
          "name": "Quarry",
          "target": "enemy",
          "text": "Отмечает текущую цель strategy ploy Quarry. Единственная цель за раз."
        },
        {
          "id": "guidance",
          "name": "Guidance",
          "target": "friendly",
          "text": "PSYCHIC. Пока у этого оператора этот токен, каждый раз, когда он стреляет, дерётся или отвечает (retaliating), на этапе Roll Attack Dice можно удержать один свой fail как normal success вместо того, чтобы отбросить его, либо удержать один свой normal success как critical success вместо этого."
        },
        {
          "id": "protection",
          "name": "Protection",
          "target": "friendly",
          "text": "PSYCHIC. Пока у этого оператора этот токен, каждый раз, когда оператор стреляет по этому оператору, на этапе Roll Defence Dice можно удержать один свой fail как normal success вместо того, чтобы отбросить его, либо удержать один свой normal success как critical success вместо этого."
        },
        {
          "id": "chasten",
          "name": "Chasten",
          "target": "enemy",
          "text": "До конца следующей активации этого оператора считай, что у него нет одного выбранного правила (см. способность Chasten оператора Hexorcist Agent); затем этот токен убирается."
        },
        {
          "id": "denounce",
          "name": "Denounce",
          "target": "enemy",
          "text": "Этот оператор не может активироваться или выполнять действия, пока он не станет последним оператором своего контролирующего игрока в этом turning point, или пока тот игрок не активирует количество операторов, равное результату D3 броска ploy Denounce (что наступит раньше); затем этот токен убирается."
        }
      ]
    },
    "Hierotek Circle": {
      "archetypes": [
        "Recon",
        "Security"
      ],
      "equipment": "Hierotek Circle",
      "required": [
        {
          "name": "Chronomancer",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "count": 1,
          "weapons": [
            {
              "name": "Aeonstave (ranged)",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Blast 2\", Lethal 5+, Stun, Magnify"
            },
            {
              "name": "Entropic lance (ranged)",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/3",
              "wr": "Devastating 3, Piercing 1, Magnify"
            },
            {
              "name": "Aeonstave (melee)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Lethal 5+, Shock"
            },
            {
              "name": "Entropic lance (melee)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/6",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается один вариант оружия — Aeonstave или Entropic lance — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный."
            },
            {
              "name": "Interstitial Command",
              "text": "SUPPORT. Выбери другого дружественного оператора HIEROTEK CIRCLE (кроме APPRENTEK и CRYPTEK), видимого этому оператору и в пределах 6\" от него, либо видимого дружественному DESPOTEK, видимому этому оператору, и в пределах 6\" от того DESPOTEK. Тот оператор может немедленно выполнить бесплатное действие за 1AP, но не может переместиться больше чем на 2\" или быть убран/размещён больше чем на 2\" во время этого действия, не может выполнить действие, которое он уже выполнял в этом turning point, и не может выполнить это же действие снова в этом turning point.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или во время counteraction.",
              "cost": "1AP"
            },
            {
              "name": "Timesplinter",
              "text": "SUPPORT. Выбери другого expended дружественного оператора HIEROTEK CIRCLE, видимого этому оператору и в пределах 5\" от него. Убери его из killzone и размести обратно, видимым этому оператору и в пределах 5\" по горизонтали от него, в месте, где его можно разместить.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, в первый turning point, или если дружественный оператор уже выполнял это действие в этом turning point.",
              "cost": "1AP"
            },
            {
              "name": "Countertemporal Nanomine",
              "text": "Размести маркер Countertemporal Nanomine, видимый этому оператору, либо на Vantage terrain, видимом этому оператору. Каждый раз, когда вражеский оператор в пределах 4\" от маркера, вычти 2\" из его Move stat. Маркер убирается, когда этот оператор в следующий раз активируется, выведен из строя, или это действие выполняется снова дружественным оператором (что наступит раньше).\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Chronometron",
              "text": "SUPPORT. Выбери дружественного оператора HIEROTEK CIRCLE, видимого этому оператору и в пределах 6\" от него; он получает твой статус-токен Chronometron до начала следующей активации этого оператора, до вывода этого оператора из строя, или до тех пор, пока это действие не будет выполнено снова дружественным оператором (что наступит раньше).\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/hierotek-circle/chronomancer.png"
        },
        {
          "name": "Psychomancer",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "count": 1,
          "weapons": [
            {
              "name": "Abyssal lance (ranged)",
              "atk": 5,
              "hit": "3+",
              "dmg": "2/2",
              "wr": "Blast 2\", 2\" Devastating 1, Piercing 2, Magnify"
            },
            {
              "name": "Abyssal lance (melee)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/4",
              "wr": "Devastating 1"
            }
          ],
          "abilities": [
            {
              "name": "Interstitial Command",
              "text": "SUPPORT. Выбери другого дружественного оператора HIEROTEK CIRCLE (кроме APPRENTEK и CRYPTEK), видимого этому оператору и в пределах 6\" от него, либо видимого дружественному DESPOTEK, видимому этому оператору, и в пределах 6\" от того DESPOTEK. Тот оператор может немедленно выполнить бесплатное действие за 1AP, но не может переместиться больше чем на 2\" или быть убран/размещён больше чем на 2\" во время этого действия, не может выполнить действие, которое он уже выполнял в этом turning point, и не может выполнить это же действие снова в этом turning point.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или во время counteraction.",
              "cost": "1AP"
            },
            {
              "name": "Harbinger of Despair",
              "text": "Размести маркер Despair, видимый этому оператору, либо на Vantage terrain, видимом этому оператору; он убирается, когда этот оператор в следующий раз активируется, выведен из строя, или это действие выполняется снова (что наступит раньше). Каждый раз, когда вражеский оператор в пределах 2\" от маркера, противник должен заплатить 1 дополнительное AP за действие Pick Up Marker или mission action с ним. При определении контроля оспариваемого маркера, если хотя бы один вражеский оператор, оспаривающий его, в пределах 2\" от маркера Despair, считай суммарный APL вражеских операторов, оспаривающих его, на 1 ниже (это не изменение самого APL stat, поэтому суммируется с другими модификаторами).\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Nightmare Shroud",
              "text": "До начала следующей активации этого оператора, до его вывода из строя, или до тех пор, пока это действие не будет выполнено снова дружественным оператором (что наступит раньше): каждый раз, когда вражеский оператор в пределах 4\" от этого оператора стреляет, дерётся или отвечает, противник не может перебросить свои кубики атаки и не может удержать результат меньше 6 как critical success (то есть это отменяет удержание crit от правил вроде Lethal, Rending, Severe).\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Vision of Madness",
              "text": "Выбери видимого вражеского оператора; он получает твой статус-токен Madness до начала следующей активации этого оператора, до его вывода из строя, или до тех пор, пока это действие не будет выполнено снова (что наступит раньше). Каждый раз, когда противник хотел бы активировать оператора с твоим токеном Madness, можно бросить один D6: если результат равен или больше APL stat того оператора, противник должен активировать того оператора во время этой активации вместо запланированного. Если активация состоялась этим способом (или нет другого допустимого вражеского оператора), убери токен Madness с него.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/hierotek-circle/psychomancer.png"
        },
        {
          "name": "Technomancer",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 14,
          "count": 1,
          "weapons": [
            {
              "name": "Staff of light (ranged)",
              "atk": 6,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Rending, Magnify"
            },
            {
              "name": "Staff of light (melee)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/5",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Interstitial Command",
              "text": "SUPPORT. Выбери другого дружественного оператора HIEROTEK CIRCLE (кроме APPRENTEK и CRYPTEK), видимого этому оператору и в пределах 6\" от него, либо видимого дружественному DESPOTEK, видимому этому оператору, и в пределах 6\" от того DESPOTEK. Тот оператор может немедленно выполнить бесплатное действие за 1AP, но не может переместиться больше чем на 2\" или быть убран/размещён больше чем на 2\" во время этого действия, не может выполнить действие, которое он уже выполнял в этом turning point, и не может выполнить это же действие снова в этом turning point.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или во время counteraction.",
              "cost": "1AP"
            },
            {
              "name": "Canoptek Repair",
              "text": "SUPPORT. Выбери дружественного оператора HIEROTEK CIRCLE, видимого этому оператору и в пределах 6\" от него; он восстанавливает до 2D3 потерянных wounds.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или если дружественный оператор уже выполнял это действие в этом turning point.",
              "cost": "1AP"
            },
            {
              "name": "Augment Weapon",
              "text": "SUPPORT. Выбери дружественного оператора HIEROTEK CIRCLE, видимого этому оператору и в пределах 6\" от него. До начала его следующей активации, до его вывода из строя, или до тех пор, пока это действие не будет выполнено снова (что наступит раньше), выбери два из следующих правил, чтобы добавить их одному оружию на карточке того оператора: Lethal 5+, Rending, Saturate, Severe. Если выбрано оружие с профилями и дальнобойного, и ближнего боя (например, staff of light, arcane conduit), два правила применяются только к одному из этих профилей (на твой выбор), не к обоим.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Reinforce Metal",
              "text": "SUPPORT. Выбери дружественного оператора HIEROTEK CIRCLE, видимого этому оператору и в пределах 6\" от него; он получает твой статус-токен Reinforce Metal до начала его следующей активации, до его вывода из строя, или до тех пор, пока это действие не будет выполнено снова (что наступит раньше).\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/hierotek-circle/technomancer.png"
        },
        {
          "name": "Plasmacyte Accelerator",
          "apl": 2,
          "move": "7\"",
          "save": "5+",
          "wounds": 5,
          "count": 1,
          "weapons": [
            {
              "name": "Spark",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 4\", Piercing 1"
            },
            {
              "name": "Claws",
              "atk": 3,
              "hit": "5+",
              "dmg": "1/2",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Scuttler",
              "text": "Пока у этого оператора Conceal order и он в cover, его нельзя выбрать допустимой целью — это имеет приоритет над всеми остальными правилами (например, Seek, Vantage terrain), кроме случаев, когда вражеский оператор в пределах 2\" от него. Этот оператор может выполнять действие Fall Back за 1AP меньше. Этот оператор не может использовать оружие, которого нет на его карточке, или выполнять любое уникальное действие, кроме Accelerate."
            },
            {
              "name": "Accelerate",
              "text": "Выбери дружественного оператора DEATHMARK или IMMORTAL, видимого этому оператору и в пределах 6\" от него. До конца следующей активации того оператора прибавь 1 к его APL stat.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/hierotek-circle/plasmacyte_accelerator.png"
        },
        {
          "name": "Plasmacyte Reanimator",
          "apl": 2,
          "move": "7\"",
          "save": "5+",
          "wounds": 5,
          "count": 1,
          "weapons": [
            {
              "name": "Atomiser beam",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 6\", Lethal 5+"
            },
            {
              "name": "Claws",
              "atk": 3,
              "hit": "5+",
              "dmg": "1/2",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Scuttler",
              "text": "Пока у этого оператора Conceal order и он в cover, его нельзя выбрать допустимой целью — это имеет приоритет над всеми остальными правилами (например, Seek, Vantage terrain), кроме случаев, когда вражеский оператор в пределах 2\" от него. Этот оператор может выполнять действие Fall Back за 1AP меньше. Этот оператор не может использовать оружие, которого нет на его карточке, или выполнять любое уникальное действие, кроме Reanimate."
            },
            {
              "name": "Reanimate",
              "text": "Выбери один свой Reanimation marker, видимый этому оператору и в пределах 6\" от него. Брось один D6: на результате 3+ дружественный оператор, которому принадлежит тот маркер, REANIMATED (см. faction rule Reanimation Protocols). Если заплатить 1 дополнительное AP (2AP всего за это действие вместо 1AP), тот оператор REANIMATED автоматически, без броска. Оператор, REANIMATED этим способом, размещается expended, если он уже был expended ранее в этом turning point.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP или 2AP"
            }
          ],
          "portrait": "img/portraits/hierotek-circle/plasmacyte_reanimator.png"
        }
      ],
      "poolPick": 5,
      "pool": [
        {
          "name": "Apprentek",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 11,
          "weapons": [
            {
              "name": "Arcane conduit (ranged)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Piercing 1, Magnify"
            },
            {
              "name": "Arcane conduit (melee)",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Apprentek Assistance",
              "text": "Этот оператор имеет те же уникальные действия, что и оператор CRYPTEK (Chronomancer, Psychomancer или Technomancer), находящийся в твоём ростере, но может выполнять только одно уникальное действие CRYPTEK за turning point."
            }
          ],
          "portrait": "img/portraits/hierotek-circle/apprentek.png"
        },
        {
          "name": "Deathmark",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 10,
          "maxCopies": 5,
          "weapons": [
            {
              "name": "Synaptic disintegrator",
              "atk": 4,
              "hit": "2+",
              "dmg": "4/3",
              "wr": "Devastating 2, Heavy (Dash only), Piercing 1, Severe"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Deathmarked",
              "text": "Каждый раз, когда этот оператор заканчивает действие Shoot, цель этого действия (основная цель, если применимо) получает твой статус-токен Deathmarked. Каждый раз, когда дружественный оператор HIEROTEK CIRCLE DEATHMARK стреляет по вражескому оператору с твоим токеном Deathmarked, дальнобойное оружие того дружественного оператора получает weapon rule Seek."
            },
            {
              "name": "Multi-Dimensional Vision",
              "text": "До начала следующей активации этого оператора он получает твой статус-токен Multi-Dimensional Vision — каждый раз, когда он стреляет, вражеские операторы не могут быть obscured.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/hierotek-circle/deathmark.png"
        },
        {
          "name": "Immortal Despotek",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 11,
          "weapons": [
            {
              "name": "Gauss blaster",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Piercing 1"
            },
            {
              "name": "Tesla carbine",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "2\" Devastating 1"
            },
            {
              "name": "Bayonet",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Gauss blaster или Tesla carbine (плюс bayonet в любом случае) — при сборке ростера. В этом приложении представлены оба варианта дальнобойного оружия; используй только выбранный."
            },
            {
              "name": "Steadfast",
              "text": "При определении контроля маркера можно считать APL stat этого оператора равным 3; если применить это, оно имеет приоритет над всеми остальными правилами, то есть любые изменения его APL stat игнорируются для этой цели."
            },
            {
              "name": "Interstitial Command",
              "text": "SUPPORT. Выбери другого дружественного оператора HIEROTEK CIRCLE (кроме APPRENTEK и CRYPTEK), видимого этому оператору и в пределах 6\" от него. Тот оператор может немедленно выполнить бесплатное действие за 1AP (кроме действия Accelerate), но не может переместиться больше чем на 2\" или быть убран/размещён больше чем на 2\" во время этого действия, не может выполнить действие, которое он уже выполнял в этом turning point, и не может выполнить это же действие снова в этом turning point.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или во время counteraction.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/hierotek-circle/immortal_despotek.png"
        },
        {
          "name": "Immortal Guardian",
          "apl": 2,
          "move": "5\"",
          "save": "3+",
          "wounds": 10,
          "maxCopies": 5,
          "weapons": [
            {
              "name": "Gauss blaster",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Piercing 1"
            },
            {
              "name": "Tesla carbine",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "2\" Devastating 1"
            },
            {
              "name": "Bayonet",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Gauss blaster или Tesla carbine (плюс bayonet в любом случае) — при сборке ростера. В этом приложении представлены оба варианта дальнобойного оружия; используй только выбранный."
            },
            {
              "name": "Steadfast",
              "text": "При определении контроля маркера можно считать APL stat этого оператора равным 3; если применить это, оно имеет приоритет над всеми остальными правилами, то есть любые изменения его APL stat игнорируются для этой цели."
            }
          ],
          "portrait": "img/portraits/hierotek-circle/immortal_guardian.png"
        }
      ],
      "lore": {
        "intro": "Hierotek Circle — древние некронские советники и их конструкты, служащие интересам своей династии через холодный расчёт и безграничное терпение. Cryptek-и повелевают временем, разумом и материей, а их Plasmacyte и Immortal свита обеспечивает бесконечное возвращение павших к жизни.",
        "operatives": [
          {
            "name": "Chronomancer",
            "text": "Повелевая потоками времени, Chronomancer способен замедлять врагов и перемещать своих союзников сквозь мгновения битвы, будто их и не было."
          },
          {
            "name": "Psychomancer",
            "text": "Psychomancer выворачивает разум противника наизнанку, насаждая отчаяние и безумие там, где раньше была воля к сопротивлению."
          },
          {
            "name": "Technomancer",
            "text": "Technomancer поддерживает механизмы Circle в рабочем состоянии, восстанавливая повреждённых союзников и усиливая их оружие древними формулами."
          },
          {
            "name": "Plasmacyte Accelerator",
            "text": "Небольшой конструкт, снующий среди рядов Circle и наделяющий избранных воинов вспышкой дополнительной скорости в решающий момент."
          },
          {
            "name": "Plasmacyte Reanimator",
            "text": "Этот Plasmacyte несёт в себе энергию, способную вырвать павшего некрона из небытия и вернуть его в строй."
          },
          {
            "name": "Apprentek",
            "text": "Apprentek изучает искусство своего наставника-Cryptek, повторяя его ритуалы хоть и с меньшим мастерством, но с той же беспощадной точностью."
          },
          {
            "name": "Deathmark",
            "text": "Deathmark-и выслеживают цель издалека и поражают её единственным точным выстрелом synaptic disintegrator, прежде чем раствориться в тенях."
          },
          {
            "name": "Immortal Despotek",
            "text": "Despotek командует своими собратьями-Immortal с непоколебимой стойкостью, воплощая несокрушимую волю династии."
          },
          {
            "name": "Immortal Guardian",
            "text": "Immortal-ы — костяк любой некронской армии: неутомимые, безжалостные и практически неуничтожимые солдаты."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Reanimation Protocols",
          "text": "Первый раз, когда дружественный оператор HIEROTEK CIRCLE incapacitated, прежде чем он будет убран из killzone, размести один свой Reanimation marker в пределах его control range (и отметь этого оператора своим статус-токеном Reanimation Marker, чтобы отслеживать, что у него уже был использован единственный шанс на возрождение). Затем убери его как incapacitated, также убрав любые токены и эффекты правил, которые у него были.\n\nВ Ready step каждой Strategy phase: выбери один свой Reanimation marker и брось один D6: на результате 1-2 оставь тот marker в killzone и повтори этот процесс с другим Reanimation marker (если есть); на результате 3+ оператор REANIMATED. Можно выбрать каждый Reanimation marker только один раз за turning point, и как только выпадет 3+, выбор Reanimation marker'ов на этот turning point прекращается.\n\nКаждый раз, когда оператор REANIMATED: собери того оператора, для которого был размещён этот Reanimation marker (он больше не expended). Он должен быть размещён в пределах 3\" от этого marker и не в пределах control range вражеских операторов (если невозможно, считай результат броска как 1-2 вместо этого). У него 1 wound, приказ на твой выбор, и он ready. Убери тот Reanimation marker.\n\nТак как REANIMATED операторы больше не incapacitated, для целей kill op kill grade противника может уменьшиться во время битвы (они теряют VP соответственно). Однако это не меняет задним числом другие VP, уже начисленные противнику (например, от tac ops)."
        },
        {
          "name": "Magnify",
          "text": "Каждый раз, когда этот оператор выполняет действие Shoot этим оружием, если цель ему видима, и другой дружественный оператор HIEROTEK CIRCLE APPRENTEK или CRYPTEK с приказом Engage, не находящийся в пределах control range вражеских операторов, видим этому оператору — можно применить это правило. Если применяешь, считай того другого оператора активным оператором для целей определения допустимой цели, cover и obscured. Если применяешь, это оружие получает weapon rule Ceaseless до конца этого действия."
        },
        {
          "name": "Living Metal",
          "text": "В Ready step каждой Strategy phase, после разрешения всех остальных правил на этом этапе (например, faction rule Reanimation Protocols), каждый дружественный оператор HIEROTEK CIRCLE восстанавливает до D3+1 потерянных wounds (бросай отдельно для каждого)."
        },
        {
          "name": "Relentless Onslaught",
          "text": "Каждый раз, когда дружественный оператор HIEROTEK CIRCLE стреляет по оператору в пределах 8\" от него, дальнобойное оружие этого дружественного оператора получает weapon rule Balanced.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Undying Androids",
          "text": "Каждый раз, когда оператор стреляет по дружественному оператору HIEROTEK CIRCLE, если нельзя удержать cover save, можно удержать один кубик защиты как normal success без броска.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Methodical Elimination",
          "text": "Оружие ближнего боя дружественных операторов получает weapon rule Accurate 1. Если дерущийся оператор не перемещался больше своего Move stat в этой активации, или отвечает (retaliating), его оружие ближнего боя получает Accurate 2 вместо этого.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Command Underlings",
          "text": "Выбери одно из следующего: SUPPORT — каждый другой дружественный оператор, видимый дружественному CRYPTEK и в пределах 6\" от него, может немедленно выполнить бесплатное действие Dash (приказ на твой выбор); ИЛИ SUPPORT — каждый другой дружественный оператор (кроме CRYPTEK), видимый дружественному APPRENTEK и в пределах 3\" от него, может немедленно выполнить бесплатное действие Dash (приказ на твой выбор).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Cortical Control",
          "text": "Примени, когда дружественный APPRENTEK или CRYPTEK выполняет SUPPORT unique action — до конца этого действия игнорируй требование по дистанции при выборе другого дружественного оператора (требование видимости остаётся).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Reanimated Function",
          "text": "Примени при определении контроля маркера. Выбери один свой Reanimation marker; до начала следующего turning point считай тот marker дружественным оператором с APL 1 для целей контроля маркеров. Не действует для tac op Martyrs (Approved Ops 2025).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Living Lightning",
          "text": "Примени, когда дружественный IMMORTAL стреляет из tesla carbine — до конца этого действия это оружие теряет ограничение дистанции 2\" от Devastating, но получает Blast 2\" вместо этого.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Dimensional Ambush",
          "text": "Примени во время активации дружественного DEATHMARK, если у него приказ Conceal — он может выполнить действие Guard независимо от ограничений killzone, оставаясь Concealed, но должен сменить приказ на Engage, когда во время этого прерывания срабатывает бесплатное действие Shoot или Fight.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "reanimation_marker",
          "name": "Reanimation Marker",
          "target": "friendly",
          "text": "Отмечает, что этот оператор уже был incapacitated один раз в этой битве и использовал свой единственный Reanimation marker (см. faction rule Reanimation Protocols). Второй раз он уже не возрождается."
        },
        {
          "id": "deathmarked",
          "name": "Deathmarked",
          "target": "enemy",
          "text": "Дружественные операторы HIEROTEK CIRCLE DEATHMARK получают weapon rule Seek на дальнобойное оружие, стреляя по этому оператору."
        },
        {
          "id": "madness",
          "name": "Madness",
          "target": "enemy",
          "text": "Каждый раз, когда противник хотел бы активировать этого оператора, можно бросить один D6: если результат равен или больше его APL stat, противник должен активировать этого оператора во время этой активации вместо запланированной. Если активация состоялась этим способом (или нет другого допустимого вражеского оператора), убери этот токен."
        },
        {
          "id": "multi_dimensional_vision",
          "name": "Multi-Dimensional Vision",
          "target": "friendly",
          "text": "До начала следующей активации этого оператора, пока у него этот токен, каждый раз, когда он стреляет, вражеские операторы не могут быть obscured."
        },
        {
          "id": "reinforce_metal",
          "name": "Reinforce Metal",
          "target": "friendly",
          "text": "Пока у этого оператора этот токен, каждый раз, когда кубики атаки наносят ему урон 3 или больше, вычти 1 из этого урона."
        },
        {
          "id": "chronometron",
          "name": "Chronometron",
          "target": "friendly",
          "text": "Пока у этого оператора этот токен, каждый раз, когда оператор стреляет по нему, вычти 1 из Atk stat того оружия."
        }
      ]
    },
    "Spectre Squad": {
      "archetypes": [
        "Infiltration",
        "Recon"
      ],
      "required": [
        {
          "name": "Spectre Veteran Sergeant",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Scoped lascarbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Lethal 5+, Rending"
            },
            {
              "name": "Bionic arm",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Issue Mission",
              "text": "Выбери одного expended дружественного оператора SPECTRE SQUAD (кроме VOX-RELAY BEACON), видимого этому оператору, который ещё не прерывал активацию вражеского оператора через faction rule Elite Fieldcraft в этом turning point. До конца turning point тот дружественный оператор может делать это, даже будучи expended (это имеет приоритет над обычными правилами); однако, если он это делает, он не может counteract в этом turning point, а также не может выполнить действие Reposition, если уже выполнял его в этом turning point. Отметь того оператора своим статус-токеном Issue Mission.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "0AP"
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_veteran_sergeant.png"
        },
        {
          "name": "Spectre Vox-Relay Beacon",
          "apl": 1,
          "move": "0\"",
          "save": "5+",
          "wounds": 3,
          "count": 1,
          "weapons": [],
          "abilities": [
            {
              "name": "Expendable",
              "text": "Этот оператор может выполнять только действие Signal (см. ниже) — он не может counteract, отвечать (retaliating) или assist в драке. Он не может оспаривать маркеры или зоны killzone. Он игнорируется для kill/elimination op (стартовое количество операторов) и для любых victory conditions или начисления VP, требующих, чтобы операторы escape, survive или были incapacitated (в любом направлении). Операторы могут проходить сквозь него; противник может игнорировать его control range в любой момент, а дружественные операторы SPECTRE SQUAD при выборе допустимой цели для действия Shoot также могут игнорировать его control range."
            },
            {
              "name": "Signal",
              "text": "SUPPORT. Выбери другого дружественного оператора SPECTRE SQUAD в пределах 6\" от этого оператора. До конца следующей активации того оператора прибавь 1 к его APL stat.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_vox-relay_beacon.png"
        }
      ],
      "poolPick": 9,
      "pool": [
        {
          "name": "Field Medicae",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Lascarbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Rending"
            },
            {
              "name": "Lasrifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Heavy (Reposition only), Lethal 5+"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Lasrifle или Lascarbine (плюс gun butt в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный."
            },
            {
              "name": "Medic!",
              "text": "В первый раз за turning point, когда другой дружественный оператор SPECTRE SQUAD (кроме VOX-RELAY BEACON) должен быть выведен из строя, будучи видимым этому оператору и в пределах 3\" от него, можно использовать это правило при условии, что ни этот, ни тот другой оператор не в пределах control range вражеского оператора. Если используешь: тот дружественный оператор не выводится из строя, у него остаётся 1 wound, и до конца этого действия его нельзя вывести из строя; после этого действия он может немедленно выполнить бесплатное действие Dash, но должен закончить это движение в пределах control range этого оператора; вычти 1 из APL stat этого оператора и того оператора соответственно, и если это правило было использовано во время активации того дружественного оператора, та активация заканчивается. Отметь того дружественного оператора своим статус-токеном Medic! (нельзя использовать это правило снова на операторе, у которого уже есть этот токен в этом turning point).\n\nНельзя использовать это правило, если этот оператор выведен из строя, или если это действие Shoot, заканчивающееся с этим оператором как primary или secondary целью."
            },
            {
              "name": "Medikit",
              "text": "Выбери дружественного оператора SPECTRE SQUAD (кроме VOX-RELAY BEACON) в пределах control range этого оператора, чтобы он восстановил до 2D3 потерянных wounds. Нельзя выбрать оператора, у которого есть твой статус-токен Medic! с этого turning point.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "0AP"
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_field_medicae.png"
        },
        {
          "name": "Grenadier",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Lascarbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Rending"
            },
            {
              "name": "Lasrifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Heavy (Reposition only), Lethal 5+"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Lasrifle или Lascarbine (плюс gun butt в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный."
            },
            {
              "name": "Grenadier",
              "text": "Может использовать frag, krak и smoke гранаты (universal equipment); их использование не учитывается в лимит применений. Каждый раз, когда используется frag или krak граната, улучши Hit stat этого оружия на 1."
            },
            {
              "name": "Melta Mine",
              "text": "Этот оператор несёт маркер Melta Mine. Он может выполнить действие Pick Up Marker с ним; каждый раз, когда он выполняет действие Place Marker с этим маркером, он может немедленно выполнить бесплатное действие Dash. Маркер нельзя разместить в пределах control range вражеского оператора (если этот оператор выведен из строя, неся маркер, и его нельзя разместить, маркер убирается вместе с этим оператором)."
            },
            {
              "name": "Proximity Mine",
              "text": "В первый раз, когда твой маркер Melta Mine оказывается в пределах control range другого оператора, убери этот маркер и нанеси 2D6+3 урона тому оператору; если он не выведен из строя, заверши его текущее действие (если есть), даже если другие эффекты этого действия не выполнены. Если маркер нельзя разместить, передвинь его на минимальное расстояние, необходимое для размещения. Этот оператор игнорируется для этих эффектов (он не может сработать от маркера или получить от него урон)."
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_grenadier.png"
        },
        {
          "name": "Guide",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Lascarbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Rending"
            },
            {
              "name": "Lasrifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Heavy (Reposition only), Lethal 5+"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Lasrifle или Lascarbine (плюс gun butt в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный."
            },
            {
              "name": "Prepared Killzone",
              "text": "Можно выбрать один дополнительный вариант снаряжения, но это должен быть Ammo Cache или снаряжение-terrain feature (universal equipment)."
            },
            {
              "name": "Scout Terrain",
              "text": "Terrain features в пределах твоей территории, или в пределах 3\" от этого оператора, считаются scouted для дружественных операторов SPECTRE SQUAD. Один раз за каждую свою активацию дружественные операторы SPECTRE SQUAD могут сделать одно из: игнорировать первые 2\" вертикальной дистанции climb-up движения на scouted terrain feature; или выполнить действие Operate Hatch за 1 AP меньше, если точка доступа scouted."
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_guide.png"
        },
        {
          "name": "Gunner",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
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
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [],
          "portrait": "img/portraits/spectre-squad/spectre_gunner.png"
        },
        {
          "name": "Heavy Gunner",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Laspistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Missile launcher (frag)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Blast 2\", Heavy"
            },
            {
              "name": "Missile launcher (krak)",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/7",
              "wr": "Heavy, Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapons Team",
              "text": "Каждый раз, когда этот оператор активируется, если дружественный оператор Loader в пределах его control range, все профили его missile launcher получают weapon rule Heavy (Dash only) вместо weapon rule Heavy до конца этой активации."
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_heavy_gunner.png"
        },
        {
          "name": "Loader",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Laspistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Assist",
              "text": "Каждый раз, когда другой дружественный оператор SPECTRE SQUAD в пределах control range этого оператора стреляет, можно перебросить один из своих кубиков атаки."
            },
            {
              "name": "Load Weapon",
              "text": "Выбери дружественного оператора SPECTRE SQUAD в пределах control range этого оператора и не в пределах 3\" от вражеских операторов. Тот дружественный оператор может немедленно выполнить бесплатное действие Shoot (кроме Guard), и можно сменить его order для этого. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора, во время counteract, а также во время активации, в которой этот или тот оператор выполнял действие Charge, Dash или Shoot (или наоборот).",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_loader.png"
        },
        {
          "name": "Sharpshooter",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Long-las (concealed)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Devastating 3, Heavy, Silent, Concealed Position"
            },
            {
              "name": "Long-las (mobile)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Long-las (stationary)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Devastating 3, Heavy"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Rule: Concealed Position",
              "text": "Concealed Position: этот оператор может использовать этот профиль оружия только первый раз, когда он выполняет действие Shoot за битву."
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_sharpshooter.png"
        },
        {
          "name": "Stub-Gunner",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Autostubber (focused)",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Heavy (Dash only)"
            },
            {
              "name": "Autostubber (suppressive)",
              "atk": 5,
              "hit": "5+",
              "dmg": "0/0",
              "wr": "Heavy, Lethal 5+, Seek Light, Stun, Torrent 1\""
            },
            {
              "name": "Autostubber (sweeping)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Heavy (Dash only), Torrent 1\""
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Suppressive Fire",
              "text": "Каждый раз, когда вражеский оператор видим этому оператору и в пределах 3\" от него, если у того вражеского оператора Engage order и он не в пределах control range другого оператора, вычти 1 из Atk stat оружия того вражеского оператора (минимум 1). Нет эффекта, если этот оператор выполнял действие Charge в этом turning point."
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_stub-gunner.png"
        },
        {
          "name": "Trooper",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "maxCopies": 6,
          "weapons": [
            {
              "name": "Lascarbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Rending"
            },
            {
              "name": "Lasrifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Heavy (Reposition only), Lethal 5+"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Lasrifle или Lascarbine (плюс gun butt в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный."
            },
            {
              "name": "Cool-Headed",
              "text": "Once per turning point дружественный оператор SPECTRE SQUAD с этим правилом может прервать активацию вражеского оператора через faction rule Elite Fieldcraft за 0 Fieldcraft points (это имеет приоритет над обычными правилами). Отметь того оператора своим статус-токеном Cool-Headed после использования в этом turning point."
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_trooper.png"
        },
        {
          "name": "Vox-Operator",
          "apl": 2,
          "move": "6\"",
          "save": "5+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Lascarbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Rending"
            },
            {
              "name": "Lasrifle",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Heavy (Reposition only), Lethal 5+"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Lasrifle или Lascarbine (плюс gun butt в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный."
            },
            {
              "name": "Signal",
              "text": "SUPPORT. Выбери другого дружественного оператора SPECTRE SQUAD (кроме VOX-RELAY BEACON), видимого этому оператору. До конца следующей активации того оператора прибавь 1 к его APL stat.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/spectre-squad/spectre_vox-operator.png"
        }
      ],
      "equipment": "Spectre Squad",
      "lore": {
        "intro": "Kill team Spectre Squad — элитная разведывательно-диверсионная группа Astra Militarum, выдвигаемая далеко за линию фронта для скрытной разведки, целеуказания и точечных ударов. Действуя малыми группами, операторы Spectre Squad полагаются на камуфляж, дисциплину и слаженную связь, позволяющую всей команде реагировать на угрозы быстрее противника.",
        "operatives": [
          {
            "name": "Spectre Veteran Sergeant",
            "text": "Опытный командир отряда, координирующий действия своих бойцов даже тогда, когда те, казалось бы, уже исчерпали свой запал."
          },
          {
            "name": "Spectre Vox-Relay Beacon",
            "text": "Стационарный ретранслятор, усиливающий сигнал команд по всей зоне действия отряда."
          },
          {
            "name": "Field Medicae",
            "text": "Полевой медик, вытаскивающий бойцов Spectre Squad с края гибели прямо посреди боя."
          },
          {
            "name": "Grenadier",
            "text": "Специалист по взрывчатке, несущий смертоносный заряд melta mine на самый опасный участок killzone."
          },
          {
            "name": "Guide",
            "text": "Проводник, знающий местность лучше противника и превращающий рельеф killzone в союзника отряда."
          },
          {
            "name": "Gunner",
            "text": "Тяжёлое вооружение отряда — meltagun или plasma gun — способное пробить самую прочную броню."
          },
          {
            "name": "Heavy Gunner",
            "text": "Расчёт missile launcher, обеспечивающий подавляющую огневую мощь на средних и дальних дистанциях."
          },
          {
            "name": "Loader",
            "text": "Второй номер расчёта, ускоряющий перезарядку и подающий оружие товарищам в разгар боя."
          },
          {
            "name": "Sharpshooter",
            "text": "Снайпер отряда, работающий из засады с long-las и способный вскрыть цель первым же выстрелом."
          },
          {
            "name": "Stub-Gunner",
            "text": "Оператор autostubber, прижимающий врага к земле шквальным огнём."
          },
          {
            "name": "Trooper",
            "text": "Рядовой боец Spectre Squad, надёжный и хладнокровный в любой ситуации."
          },
          {
            "name": "Vox-Operator",
            "text": "Связист отряда, обеспечивающий координацию и ускоряющий реакцию товарищей по рации."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Elite Fieldcraft",
          "text": "В Ready step каждой Strategy phase получи 1 Fieldcraft point (отметь свой счётчик статус-токеном Fieldcraft Points), или 2, если дружественный оператор VOX-OPERATOR в killzone и не в пределах control range вражеских операторов. Сбрасывай Fieldcraft points в конце каждого turning point.\n\nПосле того как вражеский оператор с приказом Engage выполнил действие во время своей активации, можно потратить 1 Fieldcraft point, чтобы прервать эту активацию: готовый дружественный оператор SPECTRE SQUAD, не находящийся в пределах control range других вражеских операторов, может выполнить бесплатное действие Shoot (кроме Guard), Dash или Reposition. Нельзя прерывать активацию одного вражеского оператора этим способом больше одного раза (включая Guard), и каждый дружественный оператор не может выполнить больше одного бесплатного действия этим способом за turning point.\n\nЕсли это действие Shoot: можно сменить приказ дружественного оператора для его выполнения; нельзя выбрать другого вражеского оператора допустимой целью во время этого действия; нахождение в пределах control range того (но не другого) вражеского оператора не мешает выполнить это действие — в этом случае действуют правила point-blank выстрела из Guard (Core Book).\n\nЕсли это действие Reposition: тот дружественный оператор не может выполнить это действие снова в этом turning point. Если Dash или Reposition: тот оператор не может закончить движение ближе к тому вражескому оператору или drop zone противника (если не заканчивает движение полностью в своей drop zone). В killzone с close quarters правилами (например, Tomb World) игнорируй Wall terrain при определении «ближе» и нельзя телепортироваться."
        },
        {
          "name": "Camo Cloaks",
          "text": "Каждый раз, когда оператор стреляет по дружественному оператору SPECTRE SQUAD (кроме VOX-RELAY BEACON), если можно удержать любые cover save, можно удержать один дополнительный cover save, либо удержать один cover save как critical success вместо этого. Не суммируется с улучшенными cover save от Vantage terrain."
        },
        {
          "name": "Disappear",
          "text": "Один дружественный оператор SPECTRE SQUAD может немедленно выполнить бесплатное действие Reposition. Нельзя закончить движение ближе к вражеским операторам или drop zone противника (если не заканчивает движение полностью в своей drop zone), и нельзя выполнить это действие снова в этом turning point. В killzone с close quarters правилами игнорируй Wall terrain при определении «ближе».",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Hidden Engagement",
          "text": "Каждый раз, когда дружественный оператор SPECTRE SQUAD стреляет, если он в cover с точки зрения цели, его оружие получает weapon rule Balanced. Противник всё равно определяет линии обзора для допустимости цели как обычно.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Ambushing Volley",
          "text": "Каждый раз, когда дружественный оператор SPECTRE SQUAD активируется, если он дальше 3\" от вражеских операторов и не является допустимой целью для вражеских операторов до определения его приказа, его дальнобойное оружие (кроме suppressive-профиля autostubber) получает weapon rule Devastating 1 до конца этой активации; если у оружия уже есть Devastating x, добавь 1 к x вместо этого.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Patience",
          "text": "В Firefight phase этого turning point сделай одно из: когда наступает твоя очередь активировать дружественного оператора, можно пропустить эту активацию (нельзя делать это, пока противник не активировал хотя бы одного оператора первым); или когда дружественный оператор SPECTRE SQUAD выполняет Shoot или Fight во время своей активации, если он последний дружественный оператор, активированный в этом turning point, его оружие получает weapon rule Relentless для этого действия.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Dodge",
          "text": "Примени во время активации дружественного оператора SPECTRE SQUAD, до или после выполнения им действия; тот оператор может выполнить действие Fall Back за 1 AP меньше.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Silent Killers",
          "text": "Примени во время активации дружественного оператора, до или после действия, если у него приказ Conceal и он не является допустимой целью для вражеских операторов. До конца активации он может выполнить действие Charge, имея приказ Conceal, и первый раз, когда он наносит удар, наносит 3 дополнительных урона, но не может разрешить никакие другие successes в этой последовательности.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Sharp Reactions",
          "text": "Примени после того, как вражеский оператор с приказом Conceal выполнил действие, если он в пределах 8\" от дружественного оператора SPECTRE SQUAD — можно использовать faction rule Elite Fieldcraft, чтобы прервать ту активацию тем дружественным оператором вне зависимости от приказа (имеет приоритет над обычными правилами).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Prepared Defence",
          "text": "Примени, когда дружественный оператор SPECTRE SQUAD с приказом Conceal или готовый отвечает (retaliating). Сделай одно из: в начале этапа Resolve Attack Dice разреши один свой success раньше обычного порядка — тот success должен быть использован для блока; или когда ты блокируешь, тот блок может заблокировать два неразрешённых success вместо одного. Нельзя использовать во время активации, которую ты прервал через Elite Fieldcraft.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "fieldcraft_points",
          "name": "Fieldcraft Points",
          "target": "friendly",
          "counter": true,
          "max": 3,
          "text": "Командный ресурс faction rule Elite Fieldcraft. Получаешь 1 (или 2, если дружественный VOX-OPERATOR в killzone вне control range врагов) в Ready step каждой Strategy phase; тратится на прерывание вражеской активации; сбрасывается в конце каждого turning point."
        },
        {
          "id": "advanced_camouflage",
          "name": "Advanced Camouflage",
          "target": "friendly",
          "text": "До начала следующей активации этого оператора, пока у него приказ Conceal и он в cover, его нельзя выбрать допустимой целью (кроме случаев, когда вражеский оператор в пределах 2\" от него)."
        },
        {
          "id": "medic_used",
          "name": "Medic!",
          "target": "friendly",
          "text": "Отмечает, что этот оператор уже был спасён правилом Medic! в этом turning point — нельзя применить Medic! или Medikit повторно на нём в этом же turning point."
        },
        {
          "id": "cool_headed_used",
          "name": "Cool-Headed",
          "target": "friendly",
          "text": "Отмечает, что этот оператор уже использовал способность Cool-Headed (0-cost прерывание через Elite Fieldcraft) в этом turning point."
        },
        {
          "id": "issue_mission_used",
          "name": "Issue Mission",
          "target": "friendly",
          "text": "Отмечает, что этот оператор уже прервал вражескую активацию через Elite Fieldcraft, будучи expended, благодаря способности Issue Mission оператора Veteran Sergeant, в этом turning point."
        }
      ]
    },
    "XV26 Stealth Battlesuits": {
      "archetypes": [
        "Infiltration",
        "Recon"
      ],
      "required": [
        {
          "name": "XV26 Shas'vre",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 13,
          "count": 1,
          "weapons": [
            {
              "name": "Burst cannon (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless"
            },
            {
              "name": "Burst cannon (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless, Torrent 1\""
            },
            {
              "name": "Fusion blaster (short range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "6/3",
              "wr": "Range 6\", Devastating 4, Piercing 2"
            },
            {
              "name": "Fusion blaster (long range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Range 12\", Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Pulse pistol (ranged)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Range 8\""
            },
            {
              "name": "Pulse pistol (point-blank)",
              "atk": 3,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Accurate 1"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Burst cannon или Fusion blaster (плюс Fists в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный. Суммарно в ростере не может быть больше двух Fusion blaster."
            },
            {
              "name": "XV26 Drone Controller",
              "text": "Выбери одного дружественного оператора XV26 STEALTH BATTLESUIT DRONE в killzone; до конца следующей активации того оператора игнорируй первые два пункта его правила Drone (это имеет приоритет над тем правилом). Пометь его своим статус-токеном XV26 Drone Controller.",
              "cost": "Strategic Gambit"
            },
            {
              "name": "For the Greater Good",
              "text": "Каждый раз, когда определяется X для weapon rule Accurate X от faction rule Kayuon, если этот оператор в killzone, добавь 1 к результату, если 2 или больше дружественных операторов XV26 STEALTH BATTLESUIT (кроме DRONE) выведены из строя (максимум Accurate 3). Для использования этого правила требуется минимум Accurate 1."
            }
          ],
          "portrait": "img/portraits/xv26-stealth-battlesuits/xv26_shas.png"
        },
        {
          "name": "MV75 Marker Drone",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "count": 1,
          "weapons": [
            {
              "name": "Ram",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Drone",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight и Reposition. Каждый раз, когда определяется контроль objective marker, считай APL stat этого оператора на 1 ниже (это не изменение самого APL stat, поэтому суммируется с другими изменениями). Этот оператор не может использовать оружие, которого нет на его карточке. При определении того, что видимо этому оператору, круглый диск в верхней части миниатюры считается его головой. Он игнорируется для целей kill/elimination op твоего противника и подсчёта стартового числа операторов, а также для victory conditions, требующих, чтобы операторы \"сбежали\"/\"выжили\"/были выведены из строя (в любом направлении)."
            },
            {
              "name": "Markerlight",
              "text": "Каждый раз, когда вражеский оператор является допустимой целью для этого оператора, или видим ему и в пределах 2\" от твоего Ambush marker (см. strategy ploy Prepare Ambush), он получает твой статус-токен Marked. Каждый раз, когда дружественный оператор XV26 STEALTH BATTLESUIT стреляет по вражескому оператору с твоим статус-токеном Marked, дальнобойное оружие того дружественного оператора получает weapon rule Severe. Это может применяться, даже если этот оператор не является активным оператором."
            }
          ],
          "portrait": "img/portraits/xv26-stealth-battlesuits/mv75_marker_drone.png"
        },
        {
          "name": "MV15 Gun Drone",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "count": 1,
          "weapons": [
            {
              "name": "Twin pulse carbine",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Ceaseless"
            },
            {
              "name": "Ram",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Drone",
              "text": "Этот оператор не может выполнять никакие действия, кроме Charge, Dash, Fall Back, Fight, Photon Grenade Launcher и Reposition. Каждый раз, когда определяется контроль objective marker, считай APL stat этого оператора на 1 ниже (это не изменение самого APL stat, поэтому суммируется с другими изменениями). Этот оператор не может использовать оружие, которого нет на его карточке. При определении того, что видимо этому оператору, круглый диск в верхней части миниатюры считается его головой. Он игнорируется для целей kill/elimination op твоего противника и подсчёта стартового числа операторов, а также для victory conditions, требующих, чтобы операторы \"сбежали\"/\"выжили\"/были выведены из строя (в любом направлении)."
            },
            {
              "name": "Photon Grenade Launcher",
              "text": "Выбери одного вражеского оператора, видимого этому оператору, и брось 1D6: при результате 3+ тот оператор получает твой статус-токен Photon Grenade (вычти 2\" из его Move stat до конца его следующей активации). Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/xv26-stealth-battlesuits/mv15_gun_drone.png"
        }
      ],
      "poolPick": 4,
      "pool": [
        {
          "name": "XV26 Designator",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 12,
          "weapons": [
            {
              "name": "Burst cannon (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless"
            },
            {
              "name": "Burst cannon (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless, Torrent 1\""
            },
            {
              "name": "Fusion blaster (short range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "6/3",
              "wr": "Range 6\", Devastating 4, Piercing 2"
            },
            {
              "name": "Fusion blaster (long range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Range 12\", Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Burst cannon или Fusion blaster (плюс Fists в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный. Суммарно в ростере не может быть больше двух Fusion blaster."
            },
            {
              "name": "Markerlight",
              "text": "Каждый раз, когда вражеский оператор является допустимой целью для этого оператора, или видим ему и в пределах 2\" от твоего Ambush marker (см. strategy ploy Prepare Ambush), он получает твой статус-токен Marked. Каждый раз, когда дружественный оператор XV26 STEALTH BATTLESUIT стреляет по вражескому оператору с твоим статус-токеном Marked, дальнобойное оружие того дружественного оператора получает weapon rule Severe. Это может применяться, даже если этот оператор не является активным оператором."
            },
            {
              "name": "Focused Markerlight",
              "text": "Выбери одного вражеского оператора, видимого этому оператору. Один раз за этот turning point, когда дружественный оператор XV26 STEALTH BATTLESUIT стреляет по тому вражескому оператору, можно использовать этот эффект: улучши на 1 Hit stat дальнобойного оружия того дружественного оператора до конца того действия. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/xv26-stealth-battlesuits/xv26_designator.png"
        },
        {
          "name": "XV26 Infiltrator",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 12,
          "maxCopies": 4,
          "weapons": [
            {
              "name": "Burst cannon (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless"
            },
            {
              "name": "Burst cannon (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless, Torrent 1\""
            },
            {
              "name": "Fusion blaster (short range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "6/3",
              "wr": "Range 6\", Devastating 4, Piercing 2"
            },
            {
              "name": "Fusion blaster (long range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Range 12\", Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Burst cannon или Fusion blaster (плюс Fists в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный. Суммарно в ростере не может быть больше двух Fusion blaster."
            },
            {
              "name": "Covert Protocols",
              "text": "Этот оператор может counteract-ить независимо от своего приказа, но если во время той counteraction у него приказ Conceal, он не может выполнять никакие действия, кроме Pick Up Marker, Place Marker или mission actions."
            }
          ],
          "portrait": "img/portraits/xv26-stealth-battlesuits/xv26_infiltrator.png"
        },
        {
          "name": "XV26 Liberator",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 12,
          "weapons": [
            {
              "name": "Burst cannon (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless"
            },
            {
              "name": "Burst cannon (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless, Torrent 1\""
            },
            {
              "name": "Fusion blaster (short range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "6/3",
              "wr": "Range 6\", Devastating 4, Piercing 2"
            },
            {
              "name": "Fusion blaster (long range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Range 12\", Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "EMP bomb",
              "atk": 5,
              "hit": "3+",
              "dmg": "2/2",
              "wr": "Range 4\", Blast 2\", Devastating 1, Heavy (Reposition only), Lethal 4+, Limited 1, Saturate"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Burst cannon или Fusion blaster (плюс Fists в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный. Суммарно в ростере не может быть больше двух Fusion blaster."
            },
            {
              "name": "Grenadier",
              "text": "Может использовать frag, krak и stun grenades (universal equipment) без учёта их в лимите использований (например, если также выбраны из equipment для других операторов). Каждый раз, когда используется frag или krak grenade, улучши Hit stat того оружия на 1."
            }
          ],
          "portrait": "img/portraits/xv26-stealth-battlesuits/xv26_liberator.png"
        },
        {
          "name": "XV26 Lodestar",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 12,
          "weapons": [
            {
              "name": "Burst cannon (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless"
            },
            {
              "name": "Burst cannon (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless, Torrent 1\""
            },
            {
              "name": "Fusion blaster (short range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "6/3",
              "wr": "Range 6\", Devastating 4, Piercing 2"
            },
            {
              "name": "Fusion blaster (long range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Range 12\", Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Burst cannon или Fusion blaster (плюс Fists в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный. Суммарно в ростере не может быть больше двух Fusion blaster."
            },
            {
              "name": "Electrochaff Launcher",
              "text": "Один раз за turning point, когда вражеский оператор выполняет действие Shoot и твой противник выбирает допустимую цель (кроме DRONE), можно использовать это правило, при условии что этот оператор не в пределах control range вражеских операторов. Если это сделано, до конца того действия: каждый раз, когда вражеский оператор стреляет по дружественному оператору XV26 STEALTH BATTLESUIT, видимому и в пределах 3\" от этого оператора и дальше 2\" от того вражеского оператора — игнорируй weapon rule Piercing, и тот дружественный оператор считается obscured."
            },
            {
              "name": "Homing Beacon",
              "text": "Этот оператор несёт твой Homing Beacon marker (если это не DRONE) и может выполнять действие Pick Up Marker на нём. В первый раз, когда оператор выполняет Pick Up Marker на твоём Homing Beacon marker, убери тот маркер. На Ready step каждой Strategy phase, если ты получаешь CP, брось 1D6, если этот маркер дальше 6\" от твоей drop zone; брось 2D6 вместо этого, если он на территории противника; брось 3D6 вместо этого, если он в пределах 6\" от drop zone противника. Если хотя бы один результат 4+, получи один дополнительный CP."
            }
          ],
          "portrait": "img/portraits/xv26-stealth-battlesuits/xv26_lodestar.png"
        },
        {
          "name": "XV26 Neutraliser",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 12,
          "weapons": [
            {
              "name": "Burst cannon (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless"
            },
            {
              "name": "Burst cannon (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Ceaseless, Torrent 1\""
            },
            {
              "name": "Fusion blaster (short range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "6/3",
              "wr": "Range 6\", Devastating 4, Piercing 2"
            },
            {
              "name": "Fusion blaster (long range)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Range 12\", Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения — Burst cannon или Fusion blaster (плюс Fists в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный. Суммарно в ростере не может быть больше двух Fusion blaster."
            },
            {
              "name": "Multispectrum Sensor Package",
              "text": "SUPPORT. Один раз за turning point, когда вражеский оператор активируется, если у тебя есть дружественный оператор XV26 STEALTH BATTLESUIT в пределах 3\" от этого оператора, можно использовать это правило: каждый дружественный оператор, выполняющий действие Dash, не может закончить то движение в пределах 3\" от вражеского оператора."
            },
            {
              "name": "System Jam",
              "text": "Выбери одного вражеского оператора, видимого этому оператору; он получает твой статус-токен System Jam (вычти 1 из его APL stat до конца его следующей активации). Каждый раз, когда у него приказ Conceal, нужно потратить 1 дополнительный AP для выполнения этого действия. Нельзя выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP или 2AP"
            }
          ],
          "portrait": "img/portraits/xv26-stealth-battlesuits/xv26_neutraliser.png"
        }
      ],
      "equipment": "XV26 Stealth Battlesuits",
      "lore": {
        "intro": "Экипажи XV26 Stealth Battlesuits — элитные пилоты Империума Т'ау, чьи скафандры оснащены гравитационными двигателями и системами подавления сигнатур. Они действуют на грани видимости, просачиваясь во вражеские построения раньше, чем противник успевает опомниться, и обрушивая огонь burst cannon и fusion blaster из тени.",
        "operatives": [
          {
            "name": "XV26 Shas'vre",
            "text": "Ведёт группу, координируя дронов и направляя огонь товарищей во имя Greater Good."
          },
          {
            "name": "MV75 Marker Drone",
            "text": "Подсвечивает цели своим маркерлайтом, делая их уязвимыми для точного огня battlesuits."
          },
          {
            "name": "MV15 Gun Drone",
            "text": "Дополняет отряд огневой мощью twin pulse carbine, оставаясь простым в управлении спутником."
          },
          {
            "name": "XV26 Designator",
            "text": "Специализируется на целеуказании, усиливая точность союзников фокусированным маркерлайтом."
          },
          {
            "name": "XV26 Infiltrator",
            "text": "Проникает глубоко во вражеский тыл, оставаясь готовым к контрдействию в любой момент."
          },
          {
            "name": "XV26 Liberator",
            "text": "Несёт EMP bomb и арсенал гранат, взрывая укрепления противника точным ударом."
          },
          {
            "name": "XV26 Lodestar",
            "text": "Прикрывает союзников electrochaff-помехами и несёт homing beacon для быстрой переброски сил."
          },
          {
            "name": "XV26 Neutraliser",
            "text": "Подавляет системы вражеских операторов, замедляя их реакцию с помощью system jam."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Kayuon",
          "text": "Каждый раз, когда дружественный оператор XV26 STEALTH BATTLESUIT стреляет по вражескому оператору, его дальнобойное оружие получает weapon rule Accurate X, где X определяется по расположению вражеского оператора: в пределах 3\" от твоей территории — Accurate 1; на твоей территории — Accurate 2; в пределах 3\" от твоей drop zone — Accurate 3."
        },
        {
          "name": "Stealth Fields",
          "text": "Пока у дружественного оператора XV26 STEALTH BATTLESUIT приказ Conceal, он не может быть видим вражеским операторам дальше 3\" от него (имеет приоритет над всеми остальными правилами). Пока у него приказ Conceal, он может выполнять действие Fall Back за 1 AP меньше."
        },
        {
          "name": "Patient Hunters",
          "text": "Каждый раз, когда дружественный оператор XV26 STEALTH BATTLESUIT стреляет по expended вражескому оператору или дерётся против него, его оружие получает weapon rule Balanced, а дальнобойное оружие также получает weapon rule Saturate.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Bonds of Unity",
          "text": "Каждый раз, когда дружественный оператор XV26 STEALTH BATTLESUIT (кроме DRONE) активируется, если он видим другому дружественному оператору XV26 STEALTH BATTLESUIT (кроме DRONE) и в пределах 6\" от него, можно игнорировать любые изменения его APL stat и выбрать одно из: игнорировать изменения его Move stat от being injured до конца активации; игнорировать изменения Hit stat его оружия от being injured до конца активации.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Prepare Ambush",
          "text": "Размести один свой Ambush marker полностью на своей территории и дальше 2\" от вражеских операторов. Каждый раз, когда дружественный оператор XV26 STEALTH BATTLESUIT стреляет по вражескому оператору в пределах 2\" от того маркера, его дальнобойное оружие получает weapon rule Seek до конца этого действия. Убери Ambush marker в конце того действия или в Ready step следующего turning point (что наступит раньше).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Holowave Countermeasures",
          "text": "Каждый раз, когда оператор стреляет по дружественному оператору XV26 STEALTH BATTLESUIT дальше 6\" от него, на этапе Roll Attack Dice противник должен отбросить один неразрешённый normal success (или critical success, если normal success нет). Не суммируется с obscured.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Vectored Retro-Thrusters",
          "text": "Когда вражеский оператор заканчивает действие Charge в пределах control range дружественного оператора XV26 STEALTH BATTLESUIT (кроме DRONE), прервись, чтобы применить это правило. Тот дружественный оператор выполняет бесплатное действие Fall Back (максимум 3\" движения), затем вражеский оператор выполняет бесплатное действие Reposition, используя оставшуюся дистанцию от Charge, даже если он выполнил действие, которое обычно запрещает Reposition.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Ghostshroud",
          "text": "Примени в конце активации дружественного оператора XV26 STEALTH BATTLESUIT. Если у него приказ Engage, смени на Conceal. Максимум один раз за битву на одного дружественного оператора.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Engage Jet Pack",
          "text": "Примени, когда дружественный оператор XV26 STEALTH BATTLESUIT (кроме DRONE) активируется или counteract-ит. До конца этой активации/counteraction игнорируй вертикальную дистанцию, пройденную во время одного climb и одного drop.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Saviour Protocols",
          "text": "Примени, когда дружественный оператор XV26 STEALTH BATTLESUIT выбран допустимой целью действия Shoot. Выбери одного дружественного оператора XV26 STEALTH BATTLESUIT DRONE, видимого и в пределах 3\" от первого оператора, чтобы он стал допустимой целью вместо него (даже если он обычно не был бы допустимой целью). Тот DRONE считается в cover/obscured, только если исходная цель была таковой. Не действует, если у дальнобойного оружия есть weapon rule Blast или Torrent.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "marked",
          "name": "Marked",
          "target": "enemy",
          "text": "Дружественные операторы XV26 STEALTH BATTLESUIT получают weapon rule Severe на дальнобойное оружие, стреляя по этому оператору."
        },
        {
          "id": "system_jam",
          "name": "System Jam",
          "target": "enemy",
          "text": "Вычти 1 из APL stat этого оператора до конца его следующей активации."
        },
        {
          "id": "photon_grenade",
          "name": "Photon Grenade",
          "target": "enemy",
          "text": "Вычти 2\" из Move stat этого оператора до конца его следующей активации."
        },
        {
          "id": "drone_controller",
          "name": "XV26 Drone Controller",
          "target": "friendly",
          "text": "До конца следующей активации этого оператора игнорируй первые два пункта его правила Drone (это имеет приоритет над тем правилом)."
        }
      ]
    },
    "Blades of Khaine": {
      "archetypes": [
        "Recon",
        "Infiltration",
        "Security",
        "Seek & Destroy"
      ],
      "required": [
        {
          "name": "Dire Avenger Exarch",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Shuriken catapult",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Rending"
            },
            {
              "name": "Shuriken pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Rending"
            },
            {
              "name": "Twin shuriken catapult",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Ceaseless, Rending"
            },
            {
              "name": "Diresword",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Lethal 5+, Rending"
            },
            {
              "name": "Fists",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/4",
              "wr": "-"
            },
            {
              "name": "Gun butts",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
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
              "name": "Weapon Choice",
              "text": "В официальных правилах у этого оператора выбирается вариант вооружения при сборке ростера: Shuriken catapult+fists ИЛИ Twin shuriken catapult+gun butts, а также один из {Diresword, Power weapon} и один из {Shuriken pistol, Shimmershield}. В этом приложении представлены все варианты оружия; используй только выбранные."
            },
            {
              "name": "Defence Tactics",
              "text": "Каждый раз, когда этот оператор contests objective marker или один из твоих mission markers, или когда он стреляет по вражескому оператору, который это делает, оружие этого оператора получает weapon rule Balanced."
            },
            {
              "name": "Shimmershield",
              "text": "Каждый раз, когда оператор стреляет по дружественному оператору BLADES OF KHAINE, видимому и в пределах 2\" от этого оператора, игнорируй weapon rule Piercing. Это правило есть у этого оператора, только если выбран wargear-вариант shimmershield."
            },
            {
              "name": "Exarch",
              "text": "Этот оператор может выполнить два действия Shoot или два действия Fight во время своей активации."
            }
          ],
          "portrait": "img/portraits/blades-of-khaine/dire_avenger_exarch.png"
        },
        {
          "name": "Howling Banshee Exarch",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Shuriken pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Rending"
            },
            {
              "name": "Triskele (throw)",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Range 8\", Rending, Torrent 2\""
            },
            {
              "name": "Executioner",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/7",
              "wr": "Lethal 5+"
            },
            {
              "name": "Mirrorswords",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Ceaseless, Lethal 5+"
            },
            {
              "name": "Power weapon",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            },
            {
              "name": "Triskele (slice)",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах у этого оператора выбирается один вариант вооружения при сборке ростера: Mirrorswords, ИЛИ Shuriken pistol+Executioner, ИЛИ Shuriken pistol+Power weapon, ИЛИ Shuriken pistol+Triskele, ИЛИ Triskele+Power weapon. В этом приложении представлены все варианты; используй только выбранный."
            },
            {
              "name": "Banshee Mask",
              "text": "Каждый раз, когда этот оператор дерётся, ухудши Hit stat оружия ближнего боя вражеского оператора на 1. Это не суммируется с being injured."
            },
            {
              "name": "Exarch",
              "text": "Этот оператор может выполнить два действия Shoot или два действия Fight во время своей активации."
            }
          ],
          "portrait": "img/portraits/blades-of-khaine/howling_banshee_exarch.png"
        },
        {
          "name": "Striking Scorpion Exarch",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Shuriken pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Rending"
            },
            {
              "name": "Twin shuriken pistols",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Range 8\", Ceaseless, Rending"
            },
            {
              "name": "Biting blade",
              "atk": 5,
              "hit": "3+",
              "dmg": "5/6",
              "wr": "-"
            },
            {
              "name": "Scorpion's claw and chainsword",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Brutal, Lethal 5+"
            },
            {
              "name": "Twin chainswords",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Ceaseless, Rending"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах у этого оператора выбирается один вариант вооружения при сборке ростера: Shuriken pistol+Biting blade, ИЛИ Shuriken pistol+Scorpion's claw and chainsword, ИЛИ Twin shuriken pistols+Twin chainswords. В этом приложении представлены все варианты; используй только выбранный."
            },
            {
              "name": "Mandiblasters",
              "text": "Каждый раз, когда этот оператор выполняет действие Fight, в начале этапа Roll Attack Dice можно применить это правило. Если применяешь, нанеси 2 урона вражескому оператору в этой последовательности."
            },
            {
              "name": "Exarch",
              "text": "Этот оператор может выполнить два действия Shoot или два действия Fight во время своей активации."
            }
          ],
          "portrait": "img/portraits/blades-of-khaine/striking_scorpion_exarch.png"
        }
      ],
      "poolPick": 7,
      "pool": [
        {
          "name": "Dire Avenger Warrior",
          "apl": 3,
          "move": "7\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 7,
          "weapons": [
            {
              "name": "Shuriken catapult",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Rending"
            },
            {
              "name": "Fists",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Defence Tactics",
              "text": "Каждый раз, когда этот оператор contests objective marker или один из твоих mission markers, или когда он стреляет по вражескому оператору, который это делает, оружие этого оператора получает weapon rule Balanced."
            }
          ],
          "portrait": "img/portraits/blades-of-khaine/dire_avenger_warrior.png"
        },
        {
          "name": "Howling Banshee Warrior",
          "apl": 3,
          "move": "7\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 7,
          "weapons": [
            {
              "name": "Shuriken pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Rending"
            },
            {
              "name": "Power weapon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Banshee Mask",
              "text": "Каждый раз, когда этот оператор дерётся, ухудши Hit stat оружия ближнего боя вражеского оператора на 1. Это не суммируется с being injured."
            }
          ],
          "portrait": "img/portraits/blades-of-khaine/howling_banshee_warrior.png"
        },
        {
          "name": "Striking Scorpion Warrior",
          "apl": 3,
          "move": "7\"",
          "save": "3+",
          "wounds": 8,
          "maxCopies": 7,
          "weapons": [
            {
              "name": "Shuriken pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Rending"
            },
            {
              "name": "Chainsword",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Mandiblasters",
              "text": "Каждый раз, когда этот оператор выполняет действие Fight, в начале этапа Roll Attack Dice можно применить это правило. Если применяешь, нанеси 2 урона вражескому оператору в этой последовательности."
            }
          ],
          "portrait": "img/portraits/blades-of-khaine/striking_scorpion_warrior.png"
        }
      ],
      "equipment": "Blades of Khaine",
      "lore": {
        "intro": "Blades of Khaine — воины аспектных святилищ Асурьяни, каждый из которых посвятил себя одному из ликов Khaine, Бога Войны эльдар. Dire Avenger, Howling Banshee и Striking Scorpion сражаются бок о бок, объединённые ритуалом и дисциплиной, но каждый несёт в бою свой собственный, отточенный веками стиль убийства.",
        "operatives": [
          {
            "name": "Dire Avenger Exarch",
            "text": "Aspect мести — Dire Avenger удерживают позиции и обрушивают на врага несмолкающий шквал shuriken-огня, отказываясь отступать."
          },
          {
            "name": "Howling Banshee Exarch",
            "text": "Banshee-маски исторгают вопль, леденящий душу и замедляющий руку противника — Howling Banshee врываются в ближний бой быстрее, чем враг успевает опомниться."
          },
          {
            "name": "Striking Scorpion Exarch",
            "text": "Striking Scorpion выжидают в тени, полагаясь на терпение хищника, чтобы нанести один-единственный смертельный удар и снова раствориться во мраке."
          },
          {
            "name": "Dire Avenger Warrior",
            "text": "Рядовые бойцы святилища Мести, обученные держать строй и поддерживать шквальный огонь shuriken-оружия."
          },
          {
            "name": "Howling Banshee Warrior",
            "text": "Стремительные клинки святилища Вопля, специализирующиеся на молниеносном сближении и безжалостном ближнем бое."
          },
          {
            "name": "Striking Scorpion Warrior",
            "text": "Скрытные охотники святилища Скорпиона, наносящие удар из засады и исчезающие прежде, чем враг успевает ответить."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Aspect Techniques",
          "text": "Каждый ASPECT TECHNIQUE относится к одной из категорий: Dire Avenger, Howling Banshee или Striking Scorpion. Каждый ASPECT TECHNIQUE можно использовать только дружественным оператором с соответствующим Aspect-ключевым словом. Нельзя использовать больше одного ASPECT TECHNIQUE за активацию или counteraction. Нельзя использовать один и тот же ASPECT TECHNIQUE больше одного раза за turning point — если только все дружественные операторы BLADES OF KHAINE, выбранные для этой битвы, не имеют одно и то же Aspect-ключевое слово (например, все STRIKING SCORPION) — в этом случае каждый ASPECT TECHNIQUE можно использовать до двух раз за turning point вместо одного."
        },
        {
          "name": "The Woe",
          "text": "Используй во время активации дружественного оператора Howling Banshee, после того как он выполнил действие Charge и вывел из строя вражеского оператора действием Fight, и больше не находится в пределах control range вражеских операторов. Этот дружественный оператор может немедленно выполнить свободное действие Charge, используя оставшуюся дистанцию движения от первого действия Charge (он может выполнить два действия Charge за свою активацию для этого). Оператор не может выполнять никакие другие действия во время этой активации до этого (но может делать это после разрешения этого ASPECT TECHNIQUE)."
        },
        {
          "name": "Rain of Tears",
          "text": "Используй, когда дружественный оператор Howling Banshee дерётся, после того как ты нанёс удар critical success, если вражеский оператор не выведен из строя. Заверши эту последовательность (отбрось оставшиеся кубики атаки) и немедленно выполни свободное действие Fall Back до 3\" этим оператором (после чего действие Fight завершается). Этот оператор может сделать это, даже если он выполнил действие, которое обычно не позволяет ему выполнить действие Fall Back."
        },
        {
          "name": "Acrobatic",
          "text": "Используй, когда дружественный оператор Howling Banshee выполняет действие, в котором он двигается. До конца действия этот оператор: может игнорировать все вертикальные дистанции при спуске или подъёме; может двигаться сквозь вражеских операторов, входить в их control range, и во время действия Charge покидать их control range (он всё равно должен завершить движение, соблюдая все прочие требования к этому движению); не может двигаться дальше своего Move stat, если это действие Charge."
        },
        {
          "name": "Scream-that-steals",
          "text": "Используй, когда дружественный оператор Howling Banshee дерётся или отвечает (retaliating), в начале этапа Resolve Attack Dice. Можно разрешить один из своих success вне обычного порядка; если делаешь это, тот success должен быть использован для блока."
        },
        {
          "name": "Shriek-that-kills",
          "text": "Используй, когда дружественный оператор Howling Banshee выполняет действие Shoot. До конца этого действия этот оператор может использовать следующее дальнобойное оружие: \"Shriek-that-kills\" — Atk5 Hit3+ Dmg1/2, wr Range 6\", Saturate, Seek Light, Stun, Torrent 1\"."
        },
        {
          "name": "The Slicing Hurricane",
          "text": "Используй, когда дружественный оператор Dire Avenger выполняет действие Reposition. Этот оператор может выполнить действие Shoot во время этого действия (он должен сделать это в локации, где может быть размещён, и оставшаяся дистанция движения от того действия Reposition может быть использована после этого). Нужно выбрать shuriken catapult, shuriken pistol или twin shuriken catapult для этого действия Shoot."
        },
        {
          "name": "Death of a Thousand Blades",
          "text": "Используй, когда дружественный оператор Dire Avenger выполняет действие Shoot и ты выбираешь shuriken catapult или twin shuriken catapult. До конца этого действия это оружие получает weapon rule Torrent 2\", но нельзя выбрать больше одной secondary target."
        },
        {
          "name": "Vigilance of the Avenger",
          "text": "Используй, когда дружественный оператор Dire Avenger выполняет действие Shoot и ты выбираешь shuriken catapult или twin shuriken catapult. До конца этого действия это оружие получает weapon rule Lethal 5+."
        },
        {
          "name": "Unstinting, Immovable",
          "text": "Используй, когда оператор стреляет по дружественному оператору Dire Avenger, и ты выбросил два или более fail. Можно отбросить один из них, чтобы удержать другой как normal success вместо этого."
        },
        {
          "name": "Raging Heat of the Dying Flame",
          "text": "Используй во время активации дружественного оператора Dire Avenger. До начала следующей активации этого оператора можно игнорировать любые изменения его статов от being injured, включая статы его оружия."
        },
        {
          "name": "Patient Stalk, Sudden Blow",
          "text": "Используй, когда дружественный оператор Striking Scorpion с приказом Conceal выполняет действие Reposition. Во время этого действия этот оператор может двигаться в пределах control range вражеских операторов (он не может завершить движение там), и можно нанести D3+2 урона одному вражескому оператору, в пределах control range которого он оказался после движения."
        },
        {
          "name": "Strike and Fade",
          "text": "Используй, когда дружественный оператор Striking Scorpion выводит из строя вражеского оператора, дерясь или отвечая (retaliating), и больше не находится в пределах 3\" от вражеских операторов. Смени приказ этого дружественного оператора на Conceal, и он может немедленно выполнить свободное действие Dash, даже если он выполнил действие, которое обычно не позволяет ему выполнить действие Dash."
        },
        {
          "name": "Scorpion's Eye",
          "text": "Используй, когда дружественный оператор Striking Scorpion выполняет действие Shoot и ты выбираешь shuriken pistol. До конца этого действия это оружие получает weapon rule Seek Light."
        },
        {
          "name": "Merciless Strikes",
          "text": "Используй, когда дружественный оператор Striking Scorpion дерётся, в первый раз, когда ты наносишь удар critical success во время этой последовательности. До конца последовательности оружие ближнего боя этого оператора получает weapon rule Shock."
        },
        {
          "name": "One with the Gloom",
          "text": "Используй во время активации дружественного оператора Striking Scorpion. До начала его следующей активации, пока у этого оператора приказ Conceal и он в cover, его нельзя выбрать допустимой целью — это имеет приоритет над всеми остальными правилами (например, Seek, Vantage terrain), кроме случаев, когда вражеский оператор в пределах 2\" от него."
        },
        {
          "name": "Forewarned",
          "text": "Каждый раз, когда оператор стреляет по ready дружественному оператору BLADES OF KHAINE, можно перебросить любые свои кубики защиты с одним результатом (например, результаты 2).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Ruthless Poise",
          "text": "Каждый раз, когда дружественный оператор BLADES OF KHAINE дерётся с ready вражеским оператором, оружие ближнего боя этого дружественного оператора получает weapon rule Ceaseless.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Khaine's Vengeance",
          "text": "Каждый раз, когда дружественный оператор BLADES OF KHAINE стреляет по expended вражескому оператору, дальнобойное оружие этого дружественного оператора получает weapon rule Ceaseless.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Dance of Death",
          "text": "Выбери двух дружественных операторов BLADES OF KHAINE, видимых друг другу и в пределах 6\" друг от друга. Убери их обоих из killzone и размести обратно на местах друг друга (то есть поменяй их местами).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Bladewind",
          "text": "Используй во время активации дружественного оператора BLADES OF KHAINE. Во время этой активации этот оператор может выполнить два действия Fight.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Starfall",
          "text": "Используй во время активации дружественного оператора BLADES OF KHAINE. Во время этой активации этот оператор может выполнить два действия Shoot.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Fading Light",
          "text": "Используй во время активации дружественного оператора BLADES OF KHAINE, до или после выполнения им действия. Во время этой активации этот оператор может выполнить действие Fall Back за 1 AP меньше.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Contempt",
          "text": "Используй, когда дружественный оператор BLADES OF KHAINE отвечает (retaliating), или вражеский оператор стреляет по нему, после того как противник бросил свои кубики атаки, но до переброса. До конца последовательности противник не может перебрасывать свои кубики атаки (если противник объявил использование firefight ploy во время этой последовательности, позволяющего перебросить, тот ploy отменяется, и потраченный CP возвращается).",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "rune_of_shielding_used",
          "name": "Rune of Shielding",
          "target": "friendly",
          "text": "Отмечает, что снаряжение Rune of Shielding уже использовано в этой битве."
        },
        {
          "id": "wraithbone_talisman_used",
          "name": "Wraithbone Talisman",
          "target": "friendly",
          "text": "Отмечает, что снаряжение Wraithbone Talisman уже использовано в этом turning point."
        },
        {
          "id": "rune_of_foresight_used",
          "name": "Rune of Foresight",
          "target": "friendly",
          "text": "Отмечает, что снаряжение Rune of Foresight уже использовано в этой битве."
        }
      ]
    },
    "Battleclade": {
      "archetypes": [
        "Infiltration",
        "Recon"
      ],
      "required": [
        {
          "name": "Battleclade Technoarcheologist",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Eradication pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/2",
              "wr": "Range 8\", Devastating 3, Lethal 5+"
            },
            {
              "name": "Servo-arc claw",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Severe, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Seeker of Divine Arcana",
              "text": "Ты можешь немедленно сменить приказ этого оператора и/или он может немедленно выполнить бесплатное действие Omniscanner, Fall Back, Place Marker, Pick Up Marker, Reposition или mission-действие. Если это действие Fall Back или Reposition и этот оператор не несёт маркер, он должен закончить движение либо в пределах своей drop zone (если она не в пределах его control range), либо как можно ближе к ней, либо в пределах control range объектного маркера или одного из твоих mission-маркеров.",
              "cost": "Strategic Gambit"
            },
            {
              "name": "Omniscanner",
              "text": "Выбери одного вражеского оператора, видимого этому оператору, в пределах 8\" от него, чтобы дать ему один из своих токенов Omniscanner. Каждый раз, когда дружественный оператор BATTLECLADE стреляет, дерётся или отвечает (retaliating) против вражеского оператора с одним из твоих токенов Omniscanner, оружие того дружественного оператора получает weapon rule Ceaseless.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/battleclade/technoarcheologist.png"
        },
        {
          "name": "Battleclade Servitor Underseer",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Master-crafted radium pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/4",
              "wr": "Range 8\", Balanced, Rending"
            },
            {
              "name": "Dataspikes",
              "atk": 3,
              "hit": "5+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Datacoronal Accumulator",
              "text": "SUPPORT. Определи дружественных операторов BATTLECLADE в пределах 6\" от этого оператора и/или от дружественного оператора BATTLECLADE AUTO-PROXY, затем брось один D3. Если результат равен или меньше числа объектных маркеров, которые оспаривают эти дружественные операторы, ты получаешь 1CP. Для целей universal equipment Comms Device оператор, от которого определяется дистанция, должен контролировать твой маркер Comms Device, чтобы добавить 3\" к требуемой дистанции для этого правила.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Network Override",
              "text": "SUPPORT. Выбери одного дружественного оператора BATTLECLADE SERVITOR в пределах 6\" от этого оператора либо от дружественного оператора BATTLECLADE AUTO-PROXY, чтобы он немедленно выполнил NETWORK COUNTERACT (для этого не обязательно выполнять TRANSFER POWER) или действие Dash. После этого продолжи активацию этого оператора. Для целей universal equipment Comms Device оператор, от которого определяется дистанция, должен контролировать этот маркер.\n\nЭтот оператор может выполнить это действие дважды за свою активацию, но не может выполнять его, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/battleclade/servitor_underseer.png"
        }
      ],
      "poolPick": 8,
      "pool": [
        {
          "name": "Battleclade Auto-Proxy Servitor",
          "apl": 2,
          "move": "5\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Taser goad",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Lethal 5+, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Achilian Eye",
              "text": "Каждый раз, когда дружественный оператор BATTLECLADE стреляет по вражескому оператору, видимому этому оператору, дальнобойное оружие того дружественного оператора получает weapon rule Saturate. Это правило не действует, если этот оператор находится в пределах control range вражеского оператора."
            },
            {
              "name": "Gaze of the Omnissiah",
              "text": "Выбери одного вражеского оператора, видимого этому оператору. До конца turning point, каждый раз, когда дружественный оператор BATTLECLADE стреляет по тому вражескому оператору, ты можешь использовать этот эффект. Если делаешь так: дальнобойное оружие того дружественного оператора получает weapon rule Seek Light; тот вражеский оператор не может быть obscured.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/battleclade/auto-proxy_servitor.png"
        },
        {
          "name": "Battleclade Breacher Servitor",
          "apl": 2,
          "move": "5\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Lascutter (close range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 2\", Lethal 5+, Piercing 2"
            },
            {
              "name": "Lascutter (short range)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Range 6\", Lethal 5+"
            },
            {
              "name": "Hydraulic pincer & lascutter",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Breach",
              "text": "Размести один свой маркер Breach в пределах control range этого оператора, как можно ближе к элементу террейна в пределах его control range. Каждый раз, когда оператор находится в пределах 1\" от этого маркера, части того элемента террейна толщиной не более 1\" считаются Accessible terrain.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или если в его control range нет элемента террейна.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/battleclade/breacher_servitor.png"
        },
        {
          "name": "Battleclade Combat Servitor",
          "apl": 2,
          "move": "5\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 3,
          "weapons": [
            {
              "name": "Incendine igniter",
              "atk": 4,
              "hit": "2+",
              "dmg": "4/4",
              "wr": "Range 6\", Saturate, Torrent 1\""
            },
            {
              "name": "Meltagun",
              "atk": 4,
              "hit": "4+",
              "dmg": "6/3",
              "wr": "Range 6\", Devastating 4, Piercing 2"
            },
            {
              "name": "Phosphor blaster",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Blast 1\", Severe"
            },
            {
              "name": "Servo-claw",
              "atk": 3,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается один из трёх вариантов дальнобойного оружия — Incendine igniter, Meltagun или Phosphor blaster (плюс Servo-claw в любом случае) — при сборке ростера. В отряде можно включить до трёх операторов Combat Servitor, но лишь один из них может нести Meltagun (несущих Incendine igniter — до трёх). В этом приложении представлены все варианты; используй только выбранный для каждой копии этого оператора."
            }
          ],
          "portrait": "img/portraits/battleclade/combat_servitor.png"
        },
        {
          "name": "Battleclade Gun Servitor",
          "apl": 2,
          "move": "5\"",
          "save": "4+",
          "wounds": 11,
          "weapons": [
            {
              "name": "Heavy arc rifle",
              "atk": 5,
              "hit": "4+",
              "dmg": "4/6",
              "wr": "Heavy (Dash only), Piercing 1, Stun"
            },
            {
              "name": "Heavy bolter (focused)",
              "atk": 5,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Heavy (Dash only), Piercing Crits 1"
            },
            {
              "name": "Heavy bolter (sweeping)",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Heavy (Dash only), Piercing Crits 1, Torrent 1\""
            },
            {
              "name": "Augmetic claw",
              "atk": 3,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "Brutal"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант тяжёлого вооружения — Heavy arc rifle или Heavy bolter (с профилями focused и sweeping; плюс Augmetic claw в любом случае) — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный для каждой копии этого оператора."
            }
          ],
          "portrait": "img/portraits/battleclade/gun_servitor.png"
        },
        {
          "name": "Battleclade Technomedic Servitor",
          "apl": 2,
          "move": "5\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Servo-chirurgic claw",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/4",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Mechanosuture Array",
              "text": "Один раз за turning point, когда другой дружественный оператор BATTLECLADE, видимый этому оператору и находящийся в пределах 3\" от него, должен быть выведен из строя, ты можешь использовать это правило, при условии что ни этот, ни тот оператор не находятся в пределах control range вражеского оператора. Если используешь: тот дружественный оператор не выводится из строя, у него остаётся 1 wound, и его нельзя вывести из строя до конца этого действия. После этого действия тот дружественный оператор может немедленно выполнить бесплатное действие Dash, но должен закончить это движение в пределах control range этого оператора. Если это правило было использовано во время активации того дружественного оператора, та активация заканчивается.\n\nНельзя использовать это правило, если этот оператор выведен из строя, либо если это действие Shoot, в котором этот оператор был бы primary или secondary целью. Отметь того дружественного оператора своим статус-токеном Mechanosuture Array (нельзя использовать это правило снова на операторе, у которого уже есть этот токен в этом turning point)."
            },
            {
              "name": "Expedient Repair",
              "text": "Выбери одного дружественного оператора BATTLECLADE в пределах control range этого оператора, чтобы он восстановил до D3+3 потерянных wounds. Нельзя выбрать оператора, на котором в этом turning point уже было использовано правило Mechanosuture Array.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/battleclade/technomedic_servitor.png"
        }
      ],
      "equipment": "Battleclade",
      "lore": {
        "intro": "Battleclade — сборная боевая группа Adeptus Mechanicus, объединяющая сервиторов различного назначения под управлением Technoarcheologist и Servitor Underseer через невидимую ноосферную сеть. Каждый сервитор — лишь придаток единой воли Омниссиаха, чья обработка и приоритеты могут быть мгновенно перераспределены между членами клады через передачу мощности (Transfer Power) и перехват контроля (Network Counteract), позволяя отряду действовать с почти механической слаженностью.",
        "operatives": [
          {
            "name": "Battleclade Technoarcheologist",
            "text": "Одержимый жаждой утраченных знаний тех-жрец, возглавляющий кладу и направляющий Omniscanner на самые ценные вражеские цели."
          },
          {
            "name": "Battleclade Servitor Underseer",
            "text": "Надсмотрщик над сервиторами клады, чьё присутствие в ноосферной сети позволяет мгновенно перенастраивать и перехватывать управление подчинёнными машинами."
          },
          {
            "name": "Battleclade Auto-Proxy Servitor",
            "text": "Сервитор-ретранслятор, чьё Achilian Eye усиливает прицельные системы клады и метит цели для беспощадного огня."
          },
          {
            "name": "Battleclade Breacher Servitor",
            "text": "Тяжело бронированный проходчик, вскрывающий укрепления лазерным резаком и прокладывающий клады путь сквозь любые преграды."
          },
          {
            "name": "Battleclade Combat Servitor",
            "text": "Боевой автомат, несущий один из смертоносных стволов — от испепеляющего Incendine igniter до пробивающего броню Meltagun."
          },
          {
            "name": "Battleclade Gun Servitor",
            "text": "Массивная огневая платформа клады, обрушивающая на противника шквал тяжёлого вооружения."
          },
          {
            "name": "Battleclade Technomedic Servitor",
            "text": "Хирург-автомат, чей Mechanosuture Array вырывает соратников из объятий смерти в последний момент."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Noospheric Network",
          "text": "Сервиторы связаны со своими тех-жрецами невидимой сетью контроля. Эта ноосферная сеть позволяет быстро перераспределять обрабатывающие мощности между сервиторами, чтобы те лучше выполняли текущую волю тех-жрецов. Одни остаются верны базовым программам, другие получают ключевые задачи во славу Машинного Бога.\n\nОдин раз во время активации каждого дружественного оператора BATTLECLADE SERVITOR, до или после выполнения им действия, ты можешь потратить 1AP, чтобы выполнить TRANSFER POWER.\n\nПосле этой активации ты можешь выполнить NETWORK COUNTERACT одним другим дружественным оператором BATTLECLADE SERVITOR до того, как активируется оппонент. Каждый раз, когда ты выполняешь NETWORK COUNTERACT дружественным оператором, сначала выбери его приказ. Затем он может бесплатно выполнить одно действие за 1AP, но не может переместиться больше чем на 2\" во время этого действия. После этого твой оппонент активируется как обычно.\n\nОператор не может выполнить TRANSFER POWER или NETWORK COUNTERACT, если у него APL stat меньше 2 (например, если эта характеристика была изменена до значения меньше 2 каким-либо правилом). NETWORK COUNTERACT — это контрдействие (counteraction), но оператору не обязательно быть expended с приказом Engage, чтобы его выполнить. Это значит, что если он готов (ready), когда выполняет NETWORK COUNTERACT, он всё равно может быть активирован позже как обычно. Оператор, выполнивший NETWORK COUNTERACT, не может сделать это снова или counteract в этом же turning point."
        },
        {
          "name": "Noospheric Possession",
          "text": "SUPPORT. Каждый раз, когда дружественный оператор BATTLECLADE SERVITOR находится в пределах 6\" от дружественного оператора BATTLECLADE AUTO-PROXY или BATTLECLADE SERVITOR UNDERSEER, оружие того дружественного оператора SERVITOR получает weapon rule Accurate 1.\n\nДля целей universal equipment Comms Device оператор, от которого определяется дистанция, должен контролировать твой маркер Comms Device, чтобы добавить 3\" к требуемой дистанции для этого правила.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Duty of Reclamation",
          "text": "Один раз за действие ты можешь использовать firefight ploy Command Re-roll для перебрасывания attack- или defence-кубика, если он был брошен для дружественного оператора BATTLECLADE, который оспаривает объектный маркер или один из твоих mission-маркеров.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Incantation of the Iron Soul",
          "text": "Каждый раз, когда attack dice наносит 3 или больше урона дружественному оператору BATTLECLADE, брось один D6: на 4+ вычти 1 из этого нанесённого урона.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Prioritised Acquisition",
          "text": "Выбери один объектный маркер или один из своих mission-маркеров.\n\n- При определении контроля над этим маркером считай суммарный APL stat дружественных операторов BATTLECLADE, оспаривающих его, на 1 выше, если этот маркер оспаривает хотя бы один дружественный оператор BATTLECLADE. Учти, что это не изменение самого APL stat, поэтому не суммируется с другими подобными изменениями.\n- Каждый раз, когда дружественный оператор BATTLECLADE находится в пределах 3\" от этого маркера, добавь 1 к характеристике Atk его оружия ближнего боя (максимум до 4).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "System Exorcism",
          "text": "Используй этот firefight ploy, когда активируешь дружественного оператора BATTLECLADE. Убери один эффект правила или изменение характеристики, применённые к нему твоим оппонентом (например, токен Poison, -1APL, запрет активироваться или выполнять действия и т.п.), затем активируй его. Этот ploy не позволяет восстановить потерянные wounds, убрать эффекты ранения или mission pack rules.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Remote Access",
          "text": "Используй этот firefight ploy во время активации дружественного оператора BATTLECLADE TECH-PRIEST. Один раз за эту активацию ты можешь использовать одно из следующих правил:\n\n- Этому оператору не требуется маркер в пределах его control range для выполнения mission-действия, которое обычно этого требует (это имеет приоритет над условиями того действия); вместо этого маркер должен быть в пределах 4\" от него, и ни один вражеский оператор не должен оспаривать этот маркер. Однако при этом можно игнорировать вражеских операторов в пределах control range других дружественных операторов BATTLECLADE.\n- Этому оператору не требуется точка доступа hatchway в пределах его control range для выполнения действия Operate Hatch. Вместо этого точка доступа должна быть в пределах 4\" от него.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Auto-Ferric Supplication",
          "text": "Используй этот firefight ploy, когда по дружественному оператору BATTLECLADE TECH-PRIEST стреляют, в начале этапа Roll Attack Dice. До конца последовательности игнорируй weapon rule Piercing.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Servile Surrogacy",
          "text": "Используй этот firefight ploy, когда дружественный оператор BATTLECLADE TECH-PRIEST выбран допустимой целью действия Shoot или для боя в действии Fight. Выбери одного дружественного оператора BATTLECLADE SERVITOR, видимого и в пределах 3\" от того первого дружественного оператора, чтобы он стал допустимой целью (вместо него), даже если обычно не подходил бы для этого. Если это действие Fight — для целей этого действия считай, что тот SERVITOR находится в пределах control range сражающегося оператора на всё время этого действия. Если это действие Shoot — тот SERVITOR считается in cover или obscured, только если изначальная цель была in cover или obscured.\n\nЭтот ploy не действует, если это действие Shoot и дальнобойное оружие имеет weapon rule Blast или Torrent.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "omniscanner",
          "name": "Omniscanner",
          "target": "enemy",
          "text": "Размещён действием Omniscanner оператора Technoarcheologist. Каждый раз, когда дружественный оператор BATTLECLADE стреляет, дерётся или отвечает (retaliating) против отмеченного вражеского оператора, оружие того дружественного оператора получает weapon rule Ceaseless."
        },
        {
          "id": "gaze_of_omnissiah",
          "name": "Gaze of the Omnissiah",
          "target": "enemy",
          "text": "Размещён действием Gaze of the Omnissiah оператора Auto-Proxy Servitor. До конца turning point, каждый раз, когда дружественный оператор BATTLECLADE стреляет по отмеченному вражескому оператору, ты можешь дать дальнобойному оружию того дружественного оператора weapon rule Seek Light и не позволить отмеченному оператору быть obscured."
        },
        {
          "id": "network_counteract",
          "name": "Network Counteract",
          "target": "friendly",
          "text": "Отмечает, что этот дружественный оператор BATTLECLADE SERVITOR уже выполнил NETWORK COUNTERACT в этом turning point — он не может сделать это снова или counteract в этом же turning point."
        },
        {
          "id": "mechanosuture_array",
          "name": "Mechanosuture Array",
          "target": "friendly",
          "text": "Отмечает, что этот дружественный оператор BATTLECLADE уже был спасён правилом Mechanosuture Array оператора Technomedic Servitor в этом turning point — нельзя использовать это правило снова на нём в этом же turning point."
        }
      ]
    },
    "Novitiates": {
      "archetypes": [
        "Recon",
        "Security"
      ],
      "equipment": "Novitiates",
      "required": [
        {
          "name": "Novitiate Superior",
          "apl": 3,
          "move": "6\"",
          "save": "3+",
          "wounds": 9,
          "count": 1,
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
              "name": "Relic bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Range 8\", Lethal 5+"
            },
            {
              "name": "Relic boltgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Lethal 5+"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "-"
            },
            {
              "name": "Power weapon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается один из трёх вариантов вооружения — Plasma pistol + power weapon, Relic boltgun + gun butt, или Relic bolt pistol + power weapon — при сборке ростера. В этом приложении представлены все варианты; используй только выбранный."
            },
            {
              "name": "Inspirational Example",
              "text": "Каждый раз, когда этот оператор выводит из строя (incapacitate) вражеского оператора, ты получаешь 1 Faith point, или 2 Faith points, если у того вражеского оператора был Wounds stat 12 или больше. Это правило не действует при использовании firefight ploy Glorious Martyrdom."
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_superior.png"
        }
      ],
      "poolPick": 9,
      "pool": [
        {
          "name": "Novitiate Condemnor",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Condemnor stakethrower",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Anti-PSYKER*, Devastating 2, Piercing Crits 1, Silent"
            },
            {
              "name": "Null rod",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/3",
              "wr": "Anti-PSYKER*, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Null Rod",
              "text": "PSYCHIC ranged-оружие не может наносить урон этому оператору. Для эффектов PSYCHIC-действий этого оператора нельзя выбирать, и он никогда не считается находящимся в пределах требуемых дистанций этих действий. Когда оператор находится в пределах 6\" от этого оператора: тот оператор не может выполнять PSYCHIC-действия или использовать PSYCHIC additional rules; тот оператор не может использовать PSYCHIC ranged-оружие; PSYCHIC melee-оружие не имеет никаких weapon rules и не может иметь характеристики Dmg выше 3/4."
            },
            {
              "name": "Anti-PSYKER",
              "text": "*Anti-PSYKER: каждый раз, когда это оружие используется против оператора с ключевым словом PSYKER, прибавь 1 к обоим Dmg stats этого оружия, и оно получает weapon rule Lethal 5+."
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_condemnor.png"
        },
        {
          "name": "Novitiate Dialogus",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Dialogus stave",
              "atk": 4,
              "hit": "4+",
              "dmg": "3/3",
              "wr": "Shock"
            }
          ],
          "abilities": [
            {
              "name": "Stirring Rhetoric",
              "text": "SUPPORT. Выбери другого дружественного оператора NOVITIATE, видимого этому оператору и находящегося в пределах 6\" от него, либо в пределах 6\" от твоего маркера Auto-broadcaster. До конца следующей активации того оператора прибавь 1 к его APL stat (максимум до 3 после суммирования всех изменений APL stat).\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Auto-Broadcaster",
              "text": "Если твой маркер Auto-broadcaster ещё не в killzone, размести его в пределах 8\" по горизонтали от этого оператора; в противном случае передвинь маркер Auto-broadcaster на расстояние до 8\" по горизонтали. Если этот оператор убирается из killzone, убери и маркер Auto-broadcaster.\n\nКаждый раз, когда вражеский оператор в пределах 3\" от твоего маркера Auto-broadcaster стреляет, дерётся или отвечает (retaliating), твой противник не может перебрасывать (re-roll) свои кубики атаки.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "0AP"
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_dialogus.png"
        },
        {
          "name": "Novitiate Duellist",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Duelling blades",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Ceaseless, Riposte*"
            }
          ],
          "abilities": [
            {
              "name": "Riposte",
              "text": "*Riposte: каждый раз, когда ты блокируешь (block) с critical success, ты также можешь нанести урон, равный Critical Dmg stat этого оружия, вражескому оператору в этой последовательности (sequence)."
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_duellist.png"
        },
        {
          "name": "Novitiate Exactor",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Neural whips (ranged)",
              "atk": 5,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Range 3\", Lethal 5+, Stun"
            },
            {
              "name": "Neural whips (melee)",
              "atk": 5,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "Lethal 5+, Shock"
            }
          ],
          "abilities": [
            {
              "name": "Whip Into Frenzy",
              "text": "Выбери другого дружественного оператора NOVITIATE (кроме SUPERIOR), видимого этому оператору и находящегося в пределах 3\" от него, который в данный момент не находится под действием этого действия. До конца следующей активации того оператора прибавь 1\" к его Move stat, он может выполнить два действия Fight во время своей следующей активации, и одно из них может быть бесплатным. Отметь того оператора своим статус-токеном Whip Into Frenzy.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_exactor.png"
        },
        {
          "name": "Novitiate Hospitaller",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Surgical saw",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Lethal 5+, Rending"
            }
          ],
          "abilities": [
            {
              "name": "Medic!",
              "text": "В первый раз за каждый turning point, когда другой дружественный оператор NOVITIATE должен быть выведен из строя (incapacitated), будучи видимым этому оператору и в пределах 3\" от него, можно использовать это правило при условии, что ни этот, ни тот оператор не находятся в пределах control range вражеского оператора. Если используешь: тот дружественный оператор не выводится из строя, у него остаётся 1 wound, и до конца этого действия его нельзя вывести из строя. После этого действия тот дружественный оператор может немедленно выполнить бесплатное действие Dash, но должен закончить это перемещение в пределах control range этого оператора. Вычти 1 из APL stat этого оператора и того оператора соответственно до конца их следующих активаций, и если это правило было использовано во время активации того дружественного оператора, та активация заканчивается. Отметь того дружественного оператора своим статус-токеном Medic! (нельзя использовать это правило снова на операторе, у которого уже есть этот токен в этом turning point).\n\nНельзя использовать это правило, если этот оператор выведен из строя, или если это действие Shoot, в котором этот оператор является primary или secondary целью."
            },
            {
              "name": "Chirurgeon's Tools",
              "text": "Выбери одного дружественного оператора NOVITIATE в пределах control range этого оператора, чтобы он восстановил до 2D3 потерянных wounds. Нельзя выбрать оператора, на котором в этом turning point уже было использовано правило Medic!.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_hospitaller.png"
        },
        {
          "name": "Novitiate Militant",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "weapons": [
            {
              "name": "Autogun",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            },
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            },
            {
              "name": "Novitiate blade",
              "atk": 4,
              "hit": "4+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается один из двух вариантов вооружения — Autopistol + Novitiate blade, или Autogun + gun butt — при сборке ростера. В этом приложении представлены оба варианта; используй только выбранный."
            },
            {
              "name": "Militant Faith",
              "text": "Каждый раз, когда этот оператор стреляет, дерётся или отвечает (retaliating), если ты используешь ACT OF FAITH в этой последовательности и вражеский оператор выводится из строя, Faith points, потраченные на тот ACT OF FAITH, возвращаются. Если ты используешь снаряжение Icon of Faith, Faith points возвращаются только за один из этих ACTS OF FAITH (на твой выбор)."
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_militant.png"
        },
        {
          "name": "Novitiate Penitent",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Penitent eviscerator",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/6",
              "wr": "Brutal, Zealous Rage*"
            }
          ],
          "abilities": [
            {
              "name": "Zealous Rage",
              "text": "*Zealous Rage: каждый раз, когда этот оператор дерётся этим оружием, оно получает weapon rule Ceaseless."
            },
            {
              "name": "Absolution Through Destruction",
              "text": "Каждый раз, когда этот оператор выполняет действие Fight, если он не выведен из строя, он может немедленно выполнить бесплатное действие Fight после этого. Это имеет приоритет над ограничениями на действия, и нельзя выполнить более двух действий Fight подряд в результате этого правила. Если этот оператор находится под действием Whip Into Frenzy (см. EXACTOR), это применяется к каждому из действий Fight от того эффекта."
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_penitent.png"
        },
        {
          "name": "Novitiate Preceptor",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Mace of the Righteous",
              "atk": 4,
              "hit": "4+",
              "dmg": "5/5",
              "wr": "Brutal, Severe"
            }
          ],
          "abilities": [
            {
              "name": "Unflinching Example",
              "text": "Каждый раз, когда этот оператор выводит из строя (incapacitate) ready вражеского оператора в пределах своего control range, ты получаешь 1 Faith point, или 2 Faith points, если у того вражеского оператора был Wounds stat 12 или больше."
            },
            {
              "name": "Glorious Hymnal",
              "text": "SUPPORT. Каждый раз, когда дружественный оператор NOVITIATE находится в пределах 3\" от этого оператора, оружие того дружественного оператора получает weapon rule Severe."
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_preceptor.png"
        },
        {
          "name": "Novitiate Pronatus",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Relic Seeker",
              "text": "Один раз во время каждой своей активации этот оператор может выполнить действие Pick Up Marker, Place Marker или mission-действие за 1 AP меньше."
            },
            {
              "name": "Divine Acquisition",
              "text": "Один раз за turning point, когда этот оператор выполняет mission-действие, требующее контроля над objective или mission-маркером, ты получаешь количество Faith points, равное номеру turning point. Отметь этого оператора своим статус-токеном Divine Acquisition."
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_pronatus.png"
        },
        {
          "name": "Novitiate Purgatus",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 2,
          "weapons": [
            {
              "name": "Ministorum flamer",
              "atk": 4,
              "hit": "2+",
              "dmg": "4/4",
              "wr": "Range 8\", Saturate, Torrent 2\""
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Purge with Flame",
              "text": "Один раз за turning point ты можешь использовать firefight ploy Blazing Inferno за 0CP, если это указанный дружественный оператор NOVITIATE."
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_purgatus.png"
        },
        {
          "name": "Novitiate Reliquarius",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 7,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Autopistol",
              "atk": 4,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "Range 8\""
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Icon Bearer",
              "text": "Каждый раз, когда определяется контроль над маркером, считай APL stat этого оператора на 1 выше. Учти, что это не изменение его APL stat, поэтому изменения не суммируются с этим правилом."
            },
            {
              "name": "Raise Icon",
              "text": "Ты получаешь 1 Faith point. Если этот оператор контролирует objective-маркер, ты также получаешь количество Faith points, равное номеру turning point.\n\nНельзя выполнять это действие более одного раза за turning point, и нельзя выполнять его, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/novitiates/novitiate_reliquarius.png"
        }
      ],
      "lore": {
        "intro": "Kill team Novitiates — молодые сёстры Adepta Sororitas, ещё не принесшие финальных обетов, но уже брошенные в бой, чтобы закалить веру огнём и клинком. Ведомые Novitiate Superior, они действуют слаженно и жертвенно: каждая проверка боем приближает их к посвящению в полноправные Battle Sisters, а каждая смерть на поле боя становится актом высшего служения Императору.",
        "operatives": [
          {
            "name": "Novitiate Superior",
            "text": "Старшая среди послушниц, ведущая отряд личным примером и неколебимой верой даже под самым плотным огнём."
          },
          {
            "name": "Novitiate Condemnor",
            "text": "Охотница на псайкеров, несущая stakethrower и null rod, гасящие саму возможность колдовства в её присутствии."
          },
          {
            "name": "Novitiate Dialogus",
            "text": "Хранительница священных текстов, чьи проповеди через auto-broadcaster вдохновляют сестёр на подвиг посреди хаоса боя."
          },
          {
            "name": "Novitiate Duellist",
            "text": "Мастер клинка, оттачивающая смертоносное изящество duelling blades в стремительных поединках."
          },
          {
            "name": "Novitiate Exactor",
            "text": "Надзирательница, чьи neural whips подстёгивают сестёр к исступлённой, почти безрассудной ярости в бою."
          },
          {
            "name": "Novitiate Hospitaller",
            "text": "Полевая целительница, вырывающая раненых сестёр из объятий смерти прямо посреди сражения."
          },
          {
            "name": "Novitiate Militant",
            "text": "Рядовая послушница отряда, чья простая, но твёрдая вера возвращает потраченную ею силу духа в момент триумфа."
          },
          {
            "name": "Novitiate Penitent",
            "text": "Кающаяся грешница, обрушивающая penitent eviscerator на врага с необузданной, самоотречённой яростью."
          },
          {
            "name": "Novitiate Preceptor",
            "text": "Наставница послушниц, чей боевой гимн и mace of the Righteous освящают удары сестёр рядом с ней."
          },
          {
            "name": "Novitiate Pronatus",
            "text": "Хранительница реликвий, быстрее прочих завладевающая ключевыми точками killzone во имя веры."
          },
          {
            "name": "Novitiate Purgatus",
            "text": "Носительница Ministorum flamer, очищающая позиции противника священным пламенем."
          },
          {
            "name": "Novitiate Reliquarius",
            "text": "Знаменосица отряда, чей поднятый icon укрепляет решимость сестёр и притягивает благословение Императора к захваченным рубежам."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Acts of Faith",
          "text": "Таков пыл Adepta Sororitas, что в их присутствии становится явлена божественная воля Императора.\n\nНа этапе Ready каждой Strategy phase ты получаешь количество Faith points, равное половине числа дружественных операторов NOVITIATE, которые не были выведены из строя (округляя вверх).\n\nКаждый раз, когда дружественный оператор NOVITIATE стреляет, дерётся или отвечает (retaliating), либо оператор стреляет по нему (на этапе Roll Attack Dice, или Roll Defence Dice, если по нему стреляют), ты можешь потратить свои Faith points, чтобы использовать один ACT OF FAITH. Нельзя использовать более одного ACT OF FAITH за последовательность (sequence), а их стоимость и эффекты таковы:\n\n- Guidance — 1 Faith point: ты можешь перебросить один свой кубик.\n- Blessing — 2 Faith points: ты можешь удержать один свой normal success как critical success.\n- Intervention — 3 Faith points: ты можешь удержать один свой fail как normal success вместо того, чтобы отбросить его."
        },
        {
          "name": "Ardent Vengeance",
          "text": "Каждый раз, когда дружественный оператор NOVITIATE стреляет по, дерётся против или отвечает (retaliating) против expended вражеского оператора, оружие того дружественного оператора получает weapon rule Punishing.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Defenders of the Faith",
          "text": "Каждый раз, когда оператор стреляет по, дерётся против или отвечает (retaliating) против дружественного оператора NOVITIATE, который оспаривает (contest) objective-маркер, на этапе Resolve Attack Dice той последовательности ты можешь уменьшить вдвое урон, нанесённый (округляя вверх и минимум до 2) тому дружественному оператору от одного успеха.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Blessed Rejuvenation",
          "text": "Каждый раз, когда ты тратишь Faith points, в конце того действия дружественный оператор, на которого ты их потратил, может восстановить до D3 потерянных wounds. Учти, что этот ploy не действует, если тот дружественный оператор был выведен из строя во время того действия, или если ACT OF FAITH не стоил Faith points (например, снаряжение Auto-chastisers).",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Righteous Advance",
          "text": "До одной трети дружественных операторов NOVITIATE в killzone (округляя вниз, минимум 1) могут немедленно выполнить бесплатное действие Dash в выбранном тобой порядке, но каждый из них, сделавший это, должен закончить то перемещение ближе к своему ближайшему вражескому оператору, ближайшему objective-маркеру или к drop zone противника (можешь выбирать отдельно для каждого). Нельзя использовать этот ploy в течение первого turning point.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Glorious Martyrdom",
          "text": "Используй этот firefight ploy, когда дружественный оператор NOVITIATE выводится из строя (incapacitated), перед тем как он убирается из killzone. За каждого вражеского оператора, видимого ему и находящегося в пределах 2\" от него, ты получаешь 1 Faith point и наносишь D3 урона тому вражескому оператору (бросай отдельно для каждого).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Blazing Inferno",
          "text": "Используй этот firefight ploy, когда дружественный оператор NOVITIATE стреляет с Ministorum flamer и ты наносишь урон любыми critical successes. Цель получает один из твоих Blaze tokens (если у неё его ещё нет). Каждый раз, когда активируется оператор с одним из твоих Blaze tokens:\n\n- Нанеси ему D3 урона.\n- Игрок, контролирующий его, может вычесть 1 из APL stat того оператора до конца этой активации, чтобы убрать этот токен. Учти, что это нужно сделать до того, как тот оператор выполнит любые действия в этой активации.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Blinding Aura",
          "text": "Используй этот firefight ploy, когда вражеский оператор выполняет действие Shoot и выбирает дружественного оператора NOVITIATE допустимой целью. До конца этой активации/counteraction, пока тот дружественный оператор находится дальше 2\" от вражеского оператора, твой противник не может выбрать его допустимой целью. Если нет других допустимых целей, которые может выбрать твой противник, то действие заканчивается (оно не отменяется, так что тот оператор всё равно его выполнил). Учти, что этот ploy не действует, если выбранный оператор — не тот дружественный оператор, например, если он secondary цель от weapon rule Blast.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Guided by Faith",
          "text": "Используй этот firefight ploy, когда дружественный оператор NOVITIATE выполняет действие Shoot и выбирает дальнобойное оружие. До конца этого действия, каждый раз, когда тот оператор стреляет по оператору в пределах 6\" от него, то оружие получает weapon rule Seek Light.",
          "cost": "Firefight Ploy"
        }
      ],
      "statusTokens": [
        {
          "id": "blaze",
          "name": "Blaze",
          "target": "enemy",
          "text": "Этот токен даётся от firefight ploy Blazing Inferno. Каждый раз, когда активируется оператор с одним из этих токенов: нанеси ему D3 урона; контролирующий его игрок может вычесть 1 из APL stat того оператора до конца этой активации, чтобы убрать этот токен (это нужно сделать до того, как тот оператор выполнит любые действия в этой активации)."
        },
        {
          "id": "whip_into_frenzy",
          "name": "Whip Into Frenzy",
          "target": "friendly",
          "text": "Этот токен ставится действием EXACTOR Whip Into Frenzy. До конца следующей активации помеченного оператора: прибавь 1\" к его Move stat, он может выполнить два действия Fight во время этой активации, и одно из них может быть бесплатным."
        },
        {
          "id": "medic",
          "name": "Medic!",
          "target": "friendly",
          "text": "Этот токен отмечает, что в этом turning point на этом операторе уже было использовано правило HOSPITALLER Medic!. Нельзя снова использовать это правило на операторе, у которого уже есть этот токен в этом turning point, а также нельзя выбрать его для действия Chirurgeon's Tools в этом turning point."
        },
        {
          "id": "divine_acquisition",
          "name": "Divine Acquisition",
          "target": "friendly",
          "text": "Этот токен отмечает, что в этом turning point уже было использовано правило PRONATUS Divine Acquisition. Divine Acquisition можно использовать только один раз за turning point."
        },
        {
          "id": "icon_of_faith",
          "name": "Icon of Faith",
          "target": "friendly",
          "text": "Этот токен отмечает, что в этом turning point уже было использовано двойное применение ACTS OF FAITH от снаряжения Icon of Faith (до двух разных ACTS OF FAITH за одну последовательность). Это допускается только один раз за turning point."
        },
        {
          "id": "auto_chastisers",
          "name": "Auto-Chastisers",
          "target": "friendly",
          "text": "Этот токен отмечает, что в этом turning point уже было использовано снаряжение Auto-Chastisers. Оно позволяет один раз за turning point, когда дружественный оператор NOVITIATE стреляет, дерётся или отвечает (retaliating), на этапе Roll Attack Dice нанести 1-3 урона тому дружественному оператору (но не выводя его из строя) и в этом случае использовать один ACT OF FAITH бесплатно в этой последовательности со стоимостью Faith points не выше нанесённого этим правилом урона."
        }
      ]
    },
    "Kasrkin": {
      "archetypes": [
        "Security",
        "Seek & Destroy"
      ],
      "equipment": "Kasrkin",
      "required": [
        {
          "name": "Kasrkin Sergeant",
          "apl": 3,
          "move": "6\"",
          "save": "4+",
          "wounds": 9,
          "count": 1,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Hot-shot lasgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Hot-shot laspistol",
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
              "name": "Chainsword",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "3+",
              "dmg": "2/3",
              "wr": "-"
            },
            {
              "name": "Power weapon",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается один из четырёх вариантов вооружения при сборке ростера — Bolt pistol и Power weapon; Hot-shot lasgun и Gun butt; Hot-shot laspistol и Power weapon; либо Plasma pistol и Chainsword. В этом приложении представлены все варианты; используй только выбранный."
            },
            {
              "name": "Tactical Command",
              "text": "Выбери одного дружественного оператора KASRKIN, затем выбери один SKILL AT ARMS, который этот оператор будет иметь до Ready step следующей Strategy phase. Это может быть в дополнение к любому SKILL AT ARMS, который у него уже есть, но они не могут совпадать.\n\nВместо разрешения указанного выше эффекта, если твой маркер Clearance Sweep в killzone, можно вместо этого убрать его и разместить заново.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "0AP"
            },
            {
              "name": "Veteran Leadership",
              "text": "Пока этот оператор в killzone и ты используешь Strategic Gambit SKILL AT ARMS, можно выбрать один дополнительный SKILL AT ARMS для этого оператора, но они не могут совпадать."
            }
          ],
          "portrait": "img/portraits/kasrkin/kasrkin_sergeant.png"
        }
      ],
      "poolPick": 9,
      "pool": [
        {
          "name": "Combat Medic",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Hot-shot lasgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Medic!",
              "text": "В первый раз за каждый turning point, когда другой дружественный оператор KASRKIN должен быть выведен из строя, будучи видимым этому оператору и в пределах 3\" от него, можно использовать это правило, при условии что ни этот, ни тот другой оператор не в пределах control range вражеского оператора. Если используешь: тот дружественный оператор не выводится из строя и не может быть выведен из строя до конца этого действия; после этого действия тот дружественный оператор может немедленно выполнить бесплатное действие Dash, но должен закончить это движение в пределах control range этого оператора; вычти 1 из APL stat этого и того оператора соответственно до конца их следующих активаций, и если это правило было использовано во время активации того дружественного оператора, та активация заканчивается. Нельзя использовать это правило, если этот оператор выведен из строя, или если это действие Shoot, в котором этот оператор был бы primary или secondary целью."
            },
            {
              "name": "Medikit",
              "text": "Выбери одного дружественного оператора KASRKIN в пределах control range этого оператора, чтобы он восстановил до 2D3 потерянных wounds. Нельзя выбрать оператора, на котором в этом turning point уже было использовано правило Medic!.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "0AP"
            }
          ],
          "portrait": "img/portraits/kasrkin/kasrkin_combat_medic.png"
        },
        {
          "name": "Demo-Trooper",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Hot-shot laspistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Melta Mine",
              "text": "Этот оператор несёт маркер Melta Mine. Он может выполнить действие Pick Up Marker с этим маркером, а каждый раз, когда он выполняет действие Place Marker с этим маркером, он может немедленно выполнить бесплатное действие Dash. Этот маркер нельзя разместить в пределах control range вражеского оператора (если этот оператор выведен из строя, неся этот маркер, и его нельзя разместить, маркер убирается вместе с этим оператором)."
            },
            {
              "name": "Proximity Mine",
              "text": "В первый раз, когда твой маркер Melta Mine оказывается в пределах control range другого оператора, убери этот маркер и нанеси 2D6+3 урона тому оператору; если он не выведен из строя, заверши его текущее действие (если есть), даже если другие эффекты того действия не выполнены. Если маркер нельзя разместить, передвинь его на минимальное расстояние, необходимое для размещения. Этот оператор игнорируется для этих эффектов (он не может сработать от маркера или получить от него урон)."
            },
            {
              "name": "Blast Padding",
              "text": "Каждый раз, когда оператор стреляет по этому оператору оружием с weapon rule Blast или Torrent (кроме оружия со sweeping-профилем), можно перебросить один свой кубик защиты. Кроме того, на этого оператора не действует weapon rule Devastating x\" (то есть Devastating с указанием дистанции), если только он не является целью в этой последовательности."
            }
          ],
          "portrait": "img/portraits/kasrkin/kasrkin_demo-trooper.png"
        },
        {
          "name": "Gunner",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Flamer",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Range 8\", Saturate, Torrent 2\""
            },
            {
              "name": "Grenade launcher (frag)",
              "atk": 4,
              "hit": "3+",
              "dmg": "2/4",
              "wr": "Blast 2\""
            },
            {
              "name": "Grenade launcher (krak)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Piercing 1"
            },
            {
              "name": "Hot-shot volley gun (focused)",
              "atk": 5,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1"
            },
            {
              "name": "Hot-shot volley gun (sweeping)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Piercing Crits 1, Torrent 1\""
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
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается один из пяти вариантов вооружения при сборке ростера — Flamer, Grenade launcher, Hot-shot volley gun, Meltagun или Plasma gun (плюс Gun butt в любом случае). В этом приложении представлены все варианты; используй только выбранный."
            },
            {
              "name": "Selection Limit",
              "text": "ВНИМАНИЕ (правило отбора ростера): суммарно операторов GUNNER (в любых вариантах вооружения) и SHARPSHOOTER в ростере не может быть больше 4."
            }
          ],
          "portrait": "img/portraits/kasrkin/kasrkin_gunner.png"
        },
        {
          "name": "Recon-Trooper",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Hot-shot lasgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Reconnoitre Killzone",
              "text": "Strategy ploy Relocate стоит 0CP, если этот оператор — выбранный дружественный оператор KASRKIN."
            },
            {
              "name": "Auspex Scan",
              "text": "До начала следующей активации этого оператора или до его вывода из строя (что наступит раньше) — каждый раз, когда вражеский оператор оказывается в пределах 8\" от этого оператора, тот вражеский оператор считается being scanned. Каждый раз, когда дружественный оператор KASRKIN стреляет по вражескому оператору, который being scanned, тот вражеский оператор не может быть obscured.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/kasrkin/kasrkin_recon-trooper.png"
        },
        {
          "name": "Sharpshooter",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Hot-shot marksman rifle (concealed)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Devastating 3, Heavy, Silent, Concealed Position"
            },
            {
              "name": "Hot-shot marksman rifle (mobile)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Hot-shot marksman rifle (stationary)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Devastating 3, Heavy"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Camo Cloak",
              "text": "Каждый раз, когда оператор стреляет по этому оператору: игнорируй weapon rule Saturate. Если можно удержать любые cover save, можно удержать один дополнительный cover save, либо удержать один cover save как critical success вместо этого. Не суммируется с улучшенными cover save от Vantage terrain."
            },
            {
              "name": "Weapon Rule: Concealed Position",
              "text": "Concealed Position: этот оператор может использовать этот профиль оружия только первый раз, когда он выполняет действие Shoot за битву."
            },
            {
              "name": "Selection Limit",
              "text": "ВНИМАНИЕ (правило отбора ростера): суммарно операторов SHARPSHOOTER и GUNNER (в любых вариантах вооружения) в ростере не может быть больше 4."
            }
          ],
          "portrait": "img/portraits/kasrkin/kasrkin_sharpshooter.png"
        },
        {
          "name": "Trooper",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "weapons": [
            {
              "name": "Hot-shot lasgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Adaptive Equipment",
              "text": "Можно один раз за turning point сделать каждое из следующего: один дружественный оператор KASRKIN TROOPER может выполнить действие Smoke Grenade; один дружественный оператор KASRKIN TROOPER может выполнить действие Stun Grenade.\n\nПравила для этих действий находятся в universal equipment. Выполнение этих действий через это правило не учитывается в их лимитах действий (то есть даже если ты также выбрал эти гранаты как снаряжение)."
            }
          ],
          "portrait": "img/portraits/kasrkin/kasrkin_trooper.png"
        },
        {
          "name": "Vox-Trooper",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 8,
          "maxCopies": 1,
          "weapons": [
            {
              "name": "Hot-shot lasgun",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Gun butt",
              "atk": 3,
              "hit": "4+",
              "dmg": "2/3",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Battle Comms",
              "text": "Выбери другого дружественного оператора KASRKIN. До конца следующей активации того оператора прибавь 1 к его APL stat (максимум 3 после суммирования всех изменений APL stat).\n\nЭтот оператор может выполнить это действие дважды за свою активацию, но не может выполнять его, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/kasrkin/kasrkin_vox-trooper.png"
        }
      ],
      "lore": {
        "intro": "Kill team Kasrkin — элитные штурмовые войска Astra Militarum, набранные из самых стойких и опытных бойцов Кадии. Вооружённые hot-shot оружием и облачённые в улучшенную броню, Kasrkin выполняют опаснейшие миссии: скрытные рейды, зачистку укреплённых позиций и охоту за высокоценными целями там, где обычные Guardsmen обречены на поражение.",
        "operatives": [
          {
            "name": "Kasrkin Sergeant",
            "text": "Командир отряда, координирующий действия своих бойцов и способный в разгар боя перераспределить их боевые навыки SKILL AT ARMS."
          },
          {
            "name": "Combat Medic",
            "text": "Полевой медик, вытаскивающий товарищей с края гибели прямо посреди перестрелки."
          },
          {
            "name": "Demo-Trooper",
            "text": "Специалист по подрывному делу, несущий melta mine на самый опасный участок killzone."
          },
          {
            "name": "Gunner",
            "text": "Тяжёлое вооружение отряда — flamer, grenade launcher, hot-shot volley gun, meltagun или plasma gun — способное переломить исход боя одним залпом."
          },
          {
            "name": "Recon-Trooper",
            "text": "Разведчик, вскрывающий позиции противника сканером auspex и наводящий на цель остальной отряд."
          },
          {
            "name": "Sharpshooter",
            "text": "Снайпер, работающий из укрытия с hot-shot marksman rifle и способный поразить цель первым же точным выстрелом."
          },
          {
            "name": "Trooper",
            "text": "Рядовой боец Kasrkin, надёжный в бою и готовый применить дымовые или шоковые гранаты по приказу командира."
          },
          {
            "name": "Vox-Trooper",
            "text": "Связист отряда, ускоряющий реакцию товарищей за счёт слаженной радиосвязи Battle Comms."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Skill at Arms",
          "text": "Касркин отправляются туда, где они нужнее всего. Закалённые в боях, бескомпромиссные и вооружённые лучшим доступным оружием, эти элитные бойцы преследуют свои цели профессионально, с закалённым опытом и железной решимостью.\n\nSTRATEGIC GAMBIT. Выбери один SKILL AT ARMS, который дружественные операторы KASRKIN будут иметь до Ready step следующей Strategy phase."
        },
        {
          "name": "Hot-Shot Weapon",
          "text": "Некоторые правила KASRKIN ссылаются на 'hot-shot weapon'. Это дальнобойное оружие, в названии которого есть 'hot-shot' — например, hot-shot lasgun, все профили hot-shot marksman rifle и т.д."
        },
        {
          "name": "Elimination Pattern",
          "text": "Каждый раз, когда дружественный оператор KASRKIN стреляет hot-shot weapon по оператору, который не может удержать никакие cover save, или по being scanned оператору, это оружие получает weapon rule Piercing Crits 1, либо Piercing 1 вместо этого, если это hot-shot volley gun.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Engage from Cover",
          "text": "Каждый раз, когда оператор стреляет по дружественному оператору KASRKIN, который в cover, можно перебросить один свой кубик защиты.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Clearance Sweep",
          "text": "Размести свой маркер Clearance Sweep в killzone. Каждый раз, когда дружественный оператор KASRKIN в пределах 5\" по горизонтали от этого маркера стреляет по оператору, тоже находящемуся в пределах 5\" по горизонтали от этого маркера, оружие того дружественного оператора получает weapon rule Ceaseless. В Ready step следующей Strategy phase убери этот маркер.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Relocate",
          "text": "Выбери одного дружественного оператора KASRKIN, который дальше 3\" от вражеских операторов. Тот оператор и каждый другой дружественный оператор KASRKIN, находящийся в пределах 3\" от него и дальше 3\" от вражеских операторов, может немедленно выполнить бесплатное действие Dash в выбранном тобой порядке. Нельзя использовать этот ploy в первый turning point.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Seize the Initiative",
          "text": "Используй этот firefight ploy в начале Firefight phase. Один дружественный оператор KASRKIN может немедленно выполнить бесплатное действие за 1AP, но не может двигаться во время этого действия. Нельзя использовать этот ploy, если ты игрок с initiative.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Cover Retreat",
          "text": "Используй этот firefight ploy, когда дружественный оператор KASRKIN выполняет действие Fall Back, будучи видимым и в пределах 6\" от другого дружественного оператора KASRKIN, который не в пределах control range вражеских операторов. После того как тот оператор закончил движение, но до завершения действия Fall Back, тот другой дружественный оператор может немедленно выполнить бесплатное действие Shoot (можно сменить его приказ на Engage для этого).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Neutralise Target",
          "text": "Используй этот firefight ploy после броска атакующих кубиков за дружественного оператора KASRKIN, если он стреляет по оператору, который не может удержать никакие cover save, или который being scanned. Можно перебросить любые свои кубики атаки.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Give No Ground",
          "text": "Используй этот firefight ploy во время активации дружественного оператора KASRKIN, либо в конце Firefight phase. Выбери один из своих mission markers или objective marker. До конца той активации или до начала следующего turning point соответственно — если суммарный APL дружественных операторов KASRKIN, оспаривающих этот маркер, равен 2, и суммарный APL вражеских операторов, оспаривающих его, такой же, дружественные операторы KASRKIN контролируют этот маркер.",
          "cost": "Firefight Ploy"
        }
      ],
      "factionChoices": [
        {
          "id": "skill_at_arms",
          "label": "Skill at Arms",
          "scope": "game",
          "pick": 1,
          "options": [
            {
              "id": "light_em_up",
              "name": "Light 'Em Up",
              "text": "Дружественные операторы KASRKIN получают weapon rule Severe на дальнобойное оружие."
            },
            {
              "id": "strike_fast",
              "name": "Strike Fast",
              "text": "Каждый раз, когда дружественный оператор KASRKIN выполняет действие Reposition, добавь 1\" к его Move stat."
            },
            {
              "id": "ice_in_your_veins",
              "name": "Ice in Your Veins",
              "text": "Каждый раз, когда дружественный оператор KASRKIN дерётся или отвечает (retaliating), либо когда оператор стреляет по нему — первый раз за эту последовательность, когда attack dice наносит Normal Dmg 3 или больше этому оператору, тот dice наносит на 1 урона меньше."
            },
            {
              "id": "for_cadia",
              "name": "For Cadia!",
              "text": "Добавь 1 к Atk stat оружия ближнего боя дружественных операторов KASRKIN (максимум 4). Каждый раз, когда дружественный оператор KASRKIN дерётся, первый раз, когда он наносит удар в этой последовательности, нанеси 1 дополнительный урон."
            },
            {
              "id": "rapid_fire",
              "name": "Rapid Fire",
              "text": "Каждый дружественный оператор KASRKIN, который не выполняет действие с движением во время своей активации, может выполнить два действия Shoot (кроме Guard) во время этой активации, но для обоих этих действий нужно выбрать bolt pistol, hot-shot lasgun или hot-shot laspistol."
            }
          ]
        }
      ],
      "statusTokens": [
        {
          "id": "scanned",
          "name": "Being Scanned",
          "target": "enemy",
          "text": "Оператор помечен этим токеном оператором RECON-TROOPER через действие Auspex Scan. Действует до начала следующей активации того RECON-TROOPER или до его вывода из строя (что наступит раньше). Каждый раз, когда дружественный оператор KASRKIN стреляет по оператору с этим токеном, тот оператор не может быть obscured."
        }
      ]
    },
    "Exodite Dragon Masters": {
      "archetypes": [
        "Recon",
        "Seek & Destroy"
      ],
      "equipment": "Exodite Dragon Masters",
      "required": [
        {
          "name": "Dragon Master Clanblade",
          "apl": 4,
          "move": "12\"",
          "save": "3+",
          "wounds": 24,
          "count": 1,
          "weapons": [
            {
              "name": "Solar carbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Devastating 1"
            },
            {
              "name": "Drakesteed fangs & talons",
              "atk": 6,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Brutal"
            },
            {
              "name": "Moonblades",
              "atk": 5,
              "hit": "3+",
              "dmg": "4/6",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "Scaleshield",
              "text": "Каждый раз, когда оператор стреляет по этому оператору, и ни один атакующий кубик не удержан как critical success, ухудши x weapon rule Piercing на 1 (если есть). Piercing 1 в этом случае игнорируется."
            },
            {
              "name": "Clanblade Upgrades",
              "text": "Когда этот оператор выбирается для битвы, выбери 2 разных правила Clanblade Upgrade (см. faction choices), которые добавляются на его карточку до конца битвы."
            }
          ],
          "portrait": "img/portraits/exodite-dragon-masters/dragon_master_clanblade.png"
        },
        {
          "name": "Dragon Master Leystalker",
          "apl": 4,
          "move": "12\"",
          "save": "3+",
          "wounds": 24,
          "count": 1,
          "weapons": [
            {
              "name": "Long rifle (в движении)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Devastating 1"
            },
            {
              "name": "Long rifle (стационарно)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Devastating 3, *Aimed"
            },
            {
              "name": "Drakesteed fangs & talons",
              "atk": 6,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Brutal"
            },
            {
              "name": "Hunting blade",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Lethal 5+"
            }
          ],
          "abilities": [
            {
              "name": "*Aimed",
              "text": "Этот оператор не может использовать это оружие во время активации, в которой он передвинулся более чем на 3\", и не может передвинуться более чем на 3\" во время активации, в которой использовал это оружие. Этот weapon rule не мешает выполнению действия Guard."
            },
            {
              "name": "Implacable Darkscale",
              "text": "Можно игнорировать любые изменения Hit stat оружия Drakesteed fangs & talons этого оператора от ранений."
            },
            {
              "name": "Leystalker Upgrades",
              "text": "Когда этот оператор выбирается для битвы, выбери 2 разных правила Leystalker Upgrade (см. faction choices), которые добавляются на его карточку до конца битвы."
            }
          ],
          "portrait": "img/portraits/exodite-dragon-masters/dragon_master_leystalker.png"
        },
        {
          "name": "Dragon Master Stonesinger",
          "apl": 4,
          "move": "12\"",
          "save": "3+",
          "wounds": 24,
          "count": 1,
          "weapons": [
            {
              "name": "Solar carbine",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/3",
              "wr": "Devastating 1"
            },
            {
              "name": "Venomcrest spit",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\", Severe, Torrent 2\""
            },
            {
              "name": "Drakesteed fangs & talons",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Brutal"
            },
            {
              "name": "Stone stave",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "PSYCHIC, Lethal 5+, Shock, Stun"
            }
          ],
          "abilities": [
            {
              "name": "Stonesinger Upgrades",
              "text": "Когда этот оператор выбирается для битвы, выбери 2 разных правила Stonesinger Upgrade (см. faction choices), которые добавляются на его карточку до конца битвы."
            },
            {
              "name": "Song of Renewal",
              "text": "PSYCHIC. Выбери одного дружественного оператора EXODITE DRAGON MASTER, видимого этому оператору. Тот оператор восстанавливает до 2D3 потерянных wounds.\n\nЛибо же: PSYCHIC. Каждый дружественный оператор EXODITE DRAGON MASTER может восстановить до D3 потерянных wounds.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или более одного раза за turning point.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/exodite-dragon-masters/dragon_master_stonesinger.png"
        },
        {
          "name": "Drakolithe",
          "apl": 2,
          "move": "8\"",
          "save": "5+",
          "wounds": 7,
          "count": 2,
          "weapons": [
            {
              "name": "Fangs & talons",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Rending"
            }
          ],
          "abilities": [
            {
              "name": "Preternatural Evasion",
              "text": "Каждый раз, когда этот оператор выполняет действие Charge, Fall Back или Reposition, если он заканчивает это действие более чем в 2\" от своего предыдущего местоположения, у него SPEED 4+; если более чем в 5\" — SPEED 7+ вместо этого. Каждый раз, когда этот оператор заканчивает свою активацию, если он не получил SPEED 4+ или SPEED 7+ во время этой активации, у него SPEED 3-. Учитывается расстояние от предыдущего местоположения, а не пройденное расстояние (то есть нельзя вернуться к предыдущему местоположению по кругу и получить высокий SPEED)."
            },
            {
              "name": "Beast",
              "text": "Этот оператор может выполнять только действия Charge, Dash, Fall Back, Reposition, Guard, Pick Up Marker, Place Marker и mission actions. Он не может выполнять действия Pick Up Marker, Place Marker или mission actions, если нет дружественного оператора LEYSTALKER, который не выведен из строя. Этот оператор может использовать любое оружие, даже отсутствующее на его карточке."
            }
          ],
          "portrait": "img/portraits/exodite-dragon-masters/drakolithe.png"
        }
      ],
      "poolPick": 0,
      "pool": [],
      "lore": {
        "intro": "«У всего живого есть защита от чужеродной материи. Наш мир не исключение. Болотные топи поглощают, споры отравляют, драконы топчут и рвут. Мы, кланы, убиваем с древним изяществом и мастерством. Вы — чужеродная материя, отравляющий загрязнитель, и вас вырежут из этого мира, пока не останется и следа заразы». — последнее сообщение, полученное гарнизоном Brantakh's Landing перед тем, как колония была стёрта с лица земли.\n\nЦеремониальные роли в сердце kill team Dragon Masters связаны гармонией воинского, духовного и стратегического мастерства. Вместе эти клановые чемпионы образуют смертоносную триаду. Усиленные силой и скоростью своих свирепых дракестидов, а также острыми чувствами своих Drakolithe, ни одна добыча не может долго ускользать от них.",
        "operatives": [
          {
            "name": "Dragon Master Clanblade",
            "text": "В одной из ритуальных вершин триады Dragon Master находятся Clanblade. Сражаясь верхом на свирепых redmaw-дракестидах, они мастера ближнего боя, владеющие силовыми мечами и топорами в церемониальной паре, известной как moonblades. Clanblade возглавляют финальную и самую физически опасную стадию охоты, когда добыча загнана в угол и каждое её смертоносное движение должно быть предугадано, парировано и использовано."
          },
          {
            "name": "Dragon Master Leystalker",
            "text": "Leystalker зорки и неусыпно бдительны. Они прочерчивают сложные маршруты, ведущие их собратьев по триаде к добыче через скрытые тропы и хитрые стратегии. Они также мастерские снайперы: стоит незнающей жертве попасть в прицел их искусно изготовленного long rifle, как смертельный выстрел Leystalker находит цель с неестественной точностью."
          },
          {
            "name": "Dragon Master Stonesinger",
            "text": "Stonesinger — могущественные псайкеры Exodite, разъезжающие на плюющихся ядом дракестидах. Они обладают потусторонней связью с энергией, пронизывающей их окружение, и высвобождают её в стихийных проявлениях, вызывая воющие бури и геомантические всплески, либо разрывая броню, плоть и кость гудящими песнями гнева и разрушения."
          },
          {
            "name": "Drakolithe",
            "text": "Этих чешуйчатых, быстроногих зверей Dragon Master используют для помощи в охоте на неуловимые цели. Они также защищают Exodite от врагов, пытающихся окружить их, перехватывая и контратакуя с дикой яростью."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Draconic Cavalry Tactics",
          "text": "Клановые триады Dragon Master высылают вперёд своих Drakolithe, чтобы выгнать добычу перед тем, как обрушиться из засады. Верховые дракестиды обладают острым охотничьим инстинктом, а с возвышенных позиций Exodite могут разить добычу, пытающуюся держаться вне досягаемости.\n\nПри расстановке kill team EXODITE DRAGON MASTER перед битвой первая треть твоей kill team должна состоять из дружественных операторов DRAKOLITHE, расставленных как обычно. Каждый дружественный оператор EXODITE DRAGON MASTER MOUNTED после этого должен быть выставлен в резерв: помести его в сторону, а не в killzone.\n\nВ первую Firefight phase каждый дружественный оператор EXODITE DRAGON MASTER MOUNTED, выставленный в резерв, активируется как обычно. При этом его размещают в месте, где его можно поставить на пол killzone так, чтобы основание касалось края твоей killzone (он больше не в резерве). Считается, что этот оператор выполняет действие Turn (трать AP соответственно), после чего продолжает свою активацию как обычно."
        },
        {
          "name": "Drakesteed Agility",
          "text": "Операторы EXODITE DRAGON MASTER MOUNTED не могут выполнять действия Charge, Dash, Fall Back или Reposition; вместо этого они могут выполнять уникальные действия Sprint и Turn.\n\nSPRINT (0AP). Передвинь активного оператора в место, где его можно разместить. Движение должно быть строго прямо вперёд или назад одним или несколькими прямолинейными отрезками, каждый отрезок всегда округляется вверх до целого дюйма. Нельзя передвинуться более чем на 9\" вперёд или 3\" назад за активацию, и не более чем на 12\" за turning point. До или после одного из отрезков можно повернуть активного оператора до 45° — это не расходует его movement allowance, и он может продолжить движение оставшейся дистанцией.\n\nАктивный оператор не может забираться или заканчивать движение на Vantage terrain выше 2\" от пола killzone. Он может двигаться сквозь других операторов и считает участки terrain ниже 2\" Accessible terrain. Каждый раз, когда он проходит сквозь equipment terrain feature, убери этот terrain feature из игры.\n\nОператор не может выполнять это действие во время counteract. Для правил противника, mission rules и killzone rules это действие считается действием Reposition, либо действием Charge, если активный оператор заканчивает действие в пределах control range вражеского оператора.\n\nTURN (1AP). Поверни активного оператора до 45° — это не расходует movement allowance.\n\nОператор не может выполнять это действие во время counteract. Для правил противника, mission rules и killzone rules это действие считается действием Dash, либо действием Charge, если активный оператор заканчивает действие в пределах control range вражеского оператора.\n\nКаждый дружественный оператор EXODITE DRAGON MASTER MOUNTED активируется дважды за turning point (он считается expended только после второй активации). Нельзя тратить на него более 3AP за активацию, или более его APL stat за turning point.\n\nДружественный оператор EXODITE DRAGON MASTER MOUNTED не может быть в cover от или obscured Light terrain, участками terrain ниже 2\" или terrain, не полностью перекрывающим линию обзора. Каждый раз, когда дружественный оператор EXODITE DRAGON MASTER MOUNTED выполняет действие Fight, требования дистанции его control range можно изменить на 1\" по горизонтали и 4\" по вертикали до конца этого действия."
        },
        {
          "name": "Mercurial Speed",
          "text": "Контролируемое разведение и суровые условия среды наделили дракестидов мощными мышцами. По команде хозяина они могут переключаться от неподвижности до головокружительных рывков, слишком быстрых для глаза.\n\nУ каждого дружественного оператора EXODITE DRAGON MASTER есть SPEED с тремя уровнями: SPEED 3-, SPEED 4+ и SPEED 7+. Оператор может иметь только один уровень SPEED одновременно и начинает битву с SPEED 3-.\n\nОператор EXODITE DRAGON MASTER MOUNTED имеет SPEED 3-, если верно любое из следующего: он закончил действие Sprint, двигаясь назад или менее чем на 4\" вперёд; либо закончил активацию, не выполнив действие Sprint.\n\nОператор EXODITE DRAGON MASTER MOUNTED имеет SPEED 4+, если закончил действие Sprint, передвинувшись на 4\" или более за это действие, либо SPEED 7+ вместо этого, если передвинулся на 7\" или более.\n\nКаждый раз, когда оператор стреляет по дружественному оператору EXODITE DRAGON MASTER, если у того SPEED 4+, можно удержать один defence die как normal success без броска; если у него SPEED 7+, можно удержать один как critical success вместо этого.\n\nSPEED операторов EXODITE DRAGON MASTER DRAKOLITHE изменяется согласно правилам на их карточке (Preternatural Evasion), а не через Sprint."
        },
        {
          "name": "Wind-Swift Precision",
          "text": "Dragon Master — превосходные стрелки верхом. На высокой скорости они инстинктивно используют мгновения затишья в галопе своих дракестидов, чтобы вогнать точные выстрелы в ошеломлённых врагов.\n\nКаждый раз, когда дружественный оператор EXODITE DRAGON MASTER стреляет, если у него SPEED 4+, его дальнобойное оружие получает weapon rule Balanced.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Draconic Fury",
          "text": "В стремительных наскоках или дерзких выпадах сквозь вражеские линии равновесие и грация Exodite и их драконов на скорости легендарны.\n\nКаждый раз, когда дружественный оператор EXODITE DRAGON MASTER дерётся:\n• Если у него SPEED 4+, его оружие ближнего боя получает weapon rule Balanced.\n• Если у него SPEED 7+, его оружие ближнего боя получает weapon rule Ceaseless.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Sinuous Flux",
          "text": "Dragon Master на охоте — пугающе неуловимые хищники. Опытные наездники, как и их рептильные скакуны и охотничьи звери, извиваются и уклоняются, избегая вражеских атак.\n\nКаждый раз, когда вражеский оператор стреляет по дружественному оператору EXODITE DRAGON MASTER на расстоянии более 6\" от него, если у того SPEED 4+ или SPEED 7+, противник не может делать re-roll своих attack dice.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Ride Them Down",
          "text": "Дракестиды — крупные и свирепые звери, чрезвычайно смертоносные, когда их режущие когти и рвущие клыки усилены сокрушающим ударом.\n\nОдин раз за каждую активацию дружественного оператора EXODITE DRAGON MASTER MOUNTED, каждый раз, когда он заканчивает движение действием Sprint:\n• Если он передвинулся на 4\" или более за это действие, можно нанести 1 урон одному вражескому оператору в пределах его control range.\n• Если он передвинулся на 7\" или более за это действие, или это оператор CLANBLADE, можно вместо этого нанести D3 урона одному вражескому оператору в пределах его control range.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Survivalist Spirit",
          "text": "Dragon Master пережили долгие жизни, полные суровых испытаний, которые закалили их против множества ран.\n\nИспользуй этот firefight ploy во время активации или counteract дружественного оператора EXODITE DRAGON MASTER MOUNTED, до или после выполнения им действия. До начала его следующей активации можно игнорировать любые изменения его weapon stats от ранений.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Leap",
          "text": "Сверхъестественная ловкость и мощные мышцы дракестидов позволяют им мгновенно перемещаться одним гибким движением.\n\nИспользуй этот firefight ploy, когда дружественный оператор EXODITE DRAGON MASTER MOUNTED выполняет действие Sprint. Вместо перемещения этого оператора убери его из killzone и поставь заново в месте, где его можно разместить, в пределах 1\" по горизонтали от исходного местоположения. Это расстояние нельзя измерять сквозь terrain features выше 2\", и оператора нельзя поставить на Vantage terrain выше 2\" от пола killzone. Считается, что этот оператор передвинулся на 3\" для целей movement allowance и имеет SPEED 3-.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Feral Hunger",
          "text": "Учуяв запах крови и страха, Exodite охотно спускают с цепи самые кровожадные и звериные инстинкты своих драконов.\n\nИспользуй этот firefight ploy после броска attack dice дружественного оператора EXODITE DRAGON MASTER, если он дерётся против раненого вражеского оператора оружием Drakesteed fangs & talons или fangs & talons. Можно сделать re-roll любых своих attack dice.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Riding Mastery",
          "text": "Владение дракестидами у Dragon Master сочетается с исключительной ловкостью и атлетизмом их собственного вида. Защищая будущее своего клана, Dragon Master способны на невероятные манёвры, стремительно продвигаясь через враждебную территорию.\n\nИспользуй этот firefight ploy, когда дружественный оператор EXODITE DRAGON MASTER MOUNTED выполняет действие Sprint во время своей активации. Во время этого действия тот оператор может выполнить Pick Up Marker, Place Marker или mission action (можно определить контроль во время этого действия для этого), а оставшуюся дистанцию движения от Sprint можно использовать после этого.",
          "cost": "Firefight Ploy"
        }
      ],
      "factionChoices": [
        {
          "id": "clanblade_upgrades",
          "label": "Clanblade Upgrades",
          "scope": "setup",
          "pick": 2,
          "options": [
            {
              "id": "moonsong_cull",
              "name": "Moonsong Cull",
              "text": "Мифическое оружие, в честь которого названы moonblades, по легенде, поёт всё громче с каждой оборванной нитью души. Некоторые Clanblade вторят этому жуткому напеву, перелетая от жертвы к жертве под крики и кровавые брызги павших врагов.\n\nОдин раз за каждую активацию этого оператора, после того как он выполнил действие Sprint вперёд и вывел из строя вражеского оператора действием Fight, если он больше не в пределах control range вражеских операторов, можно использовать это правило. Если используешь: он может немедленно выполнить бесплатное действие Sprint вперёд, используя оставшуюся дистанцию движения от первого действия Sprint, но не может повернуться во время этого бесплатного действия. Этот оператор может выполнить два действия Sprint за свою активацию таким образом, и его SPEED определяется суммарной дистанцией, пройденной за оба действия Sprint. Между этими действиями оператор не может выполнять никаких других действий."
            },
            {
              "id": "spectral_nimbus",
              "name": "Spectral Nimbus",
              "text": "Те Clanblade, кому суждено пройти сквозь самые смертоносные испытания, в совершенстве овладевают контролем над энергиями scaleshield. Они учатся вплетать собственные псайкерские дары через его хаптические controls, проецируя защитный нимб эмпиреической энергии, способный отвести даже самые тяжкие раны.\n\nОдин раз за turning point, когда этот оператор дерётся или отвечает (retaliating), после того как противник бросил свои attack dice, но до re-rolls, можно использовать это правило. Если используешь: противник не может удерживать результаты attack dice меньше 6 как critical success в этой последовательности (например, из-за weapon rules Lethal, Rending или Severe)."
            },
            {
              "id": "focused_reflection",
              "name": "Focused Reflection",
              "text": "Благодаря сверхъестественной реакции и точной настройке scaleshield, Clanblade способен отразить энергию выстрелов бесчестного врага прямо в него.\n\nКаждый раз, когда вражеский оператор стреляет по этому оператору, находясь в пределах 6\" от него, если ты выделяешь один или более critical success для блока attack dice противника, можно использовать это правило. Если используешь: после действия, до того как выведенные из строя операторы будут убраны (включая этого, если применимо), нанеси 1 урон тому вражескому оператору за каждый выделенный таким образом critical success."
            },
            {
              "id": "speartip_of_the_clan",
              "name": "Speartip of the Clan",
              "text": "Именно Clanblade выпадает ритуальная роль возглавлять атаку триады на добычу. Самые прославленные из них поражают цели подобно небесному копью, оттачивая скорость не меньше, чем любое другое оружие в своём арсенале.\n\nКаждый раз, когда этот оператор дерётся:\n• Если у него SPEED 4+, первый раз, когда он наносит удар normal success в этой последовательности, нанеси 1 дополнительный урон.\n• Если у него SPEED 7+, добавь 1 к Normal Dmg stat оружия ближнего боя на его карточке."
            },
            {
              "id": "bladed_stance",
              "name": "Bladed Stance",
              "text": "Clanblade оттачивают воинское мастерство, охотясь на самых опасных драконов — созданий такой скорости и силы, что выжить может только тот, чья реакция достаточно быстра, чтобы отбить и отразить их первый удар.\n\nКаждый раз, когда этот оператор дерётся или отвечает (retaliating) с moonblades, можно разрешить один из своих успехов вне обычного порядка. Если используешь: этот успех должен быть использован для блока."
            }
          ]
        },
        {
          "id": "leystalker_upgrades",
          "label": "Leystalker Upgrades",
          "scope": "setup",
          "pick": 2,
          "options": [
            {
              "id": "nomad_executioner",
              "name": "Nomad Executioner",
              "text": "Тех, кто задумал перехитрить охотничьи группы Dragon Master, быстро выслеживают исключительно ловкие стрелки триады. Leystalker разворачивают, заряжают, прицеливаются и стреляют из своих long rifle одним изящным движением на ходу, уже выискивая следующую цель до того, как падёт первая жертва.\n\nКаждый раз, когда этот оператор выполняет действие Sprint, он может выполнить действие Shoot во время этого действия (это нужно сделать в месте, где его можно разместить, а оставшуюся дистанцию движения от Sprint можно использовать после этого). Поскольку действие Shoot происходит до завершения действия Sprint, для этого Shoot SPEED этого оператора считается таким, каким он был до начала действия Sprint."
            },
            {
              "id": "elusive_phantasm",
              "name": "Elusive Phantasm",
              "text": "Leystalker постоянно в движении. Они разведывают охотничьи угодья триады, определяют позицию и силы врага, при этом снова и снова ускользая из его хватки. Их мастерство заставило многих врагов Exodite поверить, что перед ними некий бесплотный дух. Пока паранойя врага растёт, Leystalker уже целится в него с очередного неожиданного угла.\n\nВ конце каждой Firefight phase, если этот оператор не в пределах control range вражеских операторов, он может выполнить бесплатное действие Sprint или Turn, но не может передвинуться более чем на 3\" за это действие, а его SPEED остаётся прежним. У него по-прежнему должно оставаться необходимое movement allowance в этот turning point."
            },
            {
              "id": "fated_shot",
              "name": "Fated Shot",
              "text": "Некоторые Leystalker читают скрытые пути в ley lines мира больше, чем сами себя. Они прочерчивают траекторию точного выстрела так, чтобы он прошёл сквозь клубы дыма и хлещущую растительность, безопасно минуя союзников и находя самое уязвимое место в защите врага.\n\nОдин раз за turning point, когда этот оператор выполняет действие Shoot и ты выбираешь профиль его long rifle, можно использовать это правило. Если используешь: выбери одно из следующих правил, которое действует до конца этой последовательности:\n• Вражеские операторы не могут быть obscured.\n• Наличие других дружественных операторов EXODITE DRAGON MASTER в пределах control range вражеского оператора не мешает выбрать того оператора допустимой целью."
            },
            {
              "id": "nexus_sentinel",
              "name": "Nexus Sentinel",
              "text": "Там, где сходятся линии силы — будь то яркие ley worlds Exodite или приглушённые естественные потоки — Leystalker способны улавливать восприятия невероятной широты и остроты. Немногие враги могут приблизиться к такому месту, охраняемому Leystalker, оставшись незамеченными.\n\nОдин раз за turning point этот оператор может выполнить действие Guard во время своей активации независимо от типа killzone, если у него SPEED 3- (см. правила close quarters, Kill Team Core Book).\n\nКаждый раз, когда этот оператор совершает point-blank выстрел в результате действия Guard, не ухудшай Hit stat его оружия из-за point-blank выстрела."
            },
            {
              "id": "gloaming_mantle",
              "name": "Gloaming Mantle",
              "text": "Мастера слияния со средой и использования маскирующих энергий скрытых ley lines, Leystalker способны ускользать от внимания охотящихся на них, словно окутывая себя сверхъестественным сумраком.\n\nКаждый раз, когда оператор стреляет по этому оператору с расстояния более 8\", если нельзя удержать ни один cover save, можно удержать один defence die как normal success без броска; если можно удержать cover save, можно удержать его как critical success вместо этого."
            }
          ]
        },
        {
          "id": "stonesinger_upgrades",
          "label": "Stonesinger Upgrades",
          "scope": "setup",
          "pick": 2,
          "options": [
            {
              "id": "wails_of_the_world",
              "name": "Wails of the World",
              "text": "Пронзительный плач, издаваемый Stonesinger, сигнализирует об их неприятии врага. Он нарастает до содрогающего воя, от которого дрожит воздух вокруг врага и земля под ним. Те, кому не хватает ловкости удержаться на ногах, рискуют быть поглощёнными внезапными расщелинами, побиты падающими камнями или увязнуть в вязких потоках некогда твёрдой материи.\n\nWAILS OF THE WORLD (1AP). PSYCHIC. Выбери одного вражеского оператора, видимого этому оператору. Вычти 2\" из Move stat того оператора и каждого другого вражеского оператора в пределах 2\" от него до конца их соответствующих следующих активаций (это не суммируется с ранением). Операторы MOUNTED не затрагиваются.\n\nБрось 2D3 отдельно для каждого из этих операторов: нанеси урон тому оператору, равный разнице между результатом броска и его новым Move stat (это имеет приоритет над правилом «stat не меняется во время действия»). Операторы MOUNTED не затрагиваются.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или более одного раза за turning point."
            },
            {
              "id": "cleansing_of_the_pale_moon",
              "name": "Cleansing of the Pale Moon",
              "text": "Stonesinger сплетает псайкерский вихрь очищения. Токсины изгоняются, а страдания унимаются, словно призывается давно утраченная Бледная Луна.\n\nCLEANSING OF THE PALE MOON (1AP). PSYCHIC. Выбери одного дружественного оператора EXODITE DRAGON MASTER, видимого этому оператору. Убери один эффект правила или изменение stat, применённое к нему противником (например, токен Poison, -1APL, невозможность активироваться или выполнять действия и т.п.). Это не позволяет восстановить потерянные wounds, отменить mission pack rules или проигнорировать эффекты ранения.\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора. В отличие от других уникальных действий-апгрейдов этого оператора, это действие можно выполнять более одного раза за turning point."
            },
            {
              "id": "sow_the_seeds",
              "name": "Sow the Seeds",
              "text": "Ускоряя медленные ритмы растительной жизни, неестественно подвижные лозы и корни прорываются наружу, отмечая места как подвластные Stonesinger.\n\nОдин раз за turning point, во время активации этого оператора, до или после выполнения им действия, можно использовать это правило. Если используешь: выбери один маркер объектива, который он контролирует. Пока этот оператор не выведен из строя, пока ты не используешь это правило снова или пока вражеский оператор не станет контролировать этот маркер (что наступит раньше), этот оператор считается оспаривающим тот маркер с APL 1 и контролирующим его для целей mission actions и victory conditions (даже если маркер не в пределах его control range). Это может позволить этому оператору выполнить mission action, требующее контроля над тем маркером."
            },
            {
              "id": "winds_grace",
              "name": "Wind's Grace",
              "text": "Закручивая зефиры, псайкер размывает силуэты союзников, чтобы защитить их.\n\nWIND'S GRACE (1AP). PSYCHIC. Выбери одного дружественного оператора EXODITE DRAGON MASTER, видимого этому оператору. До начала первой активации этого оператора в следующем turning point, пока тот не выведен из строя или пока он не выполнит это действие снова (что наступит раньше), SPEED выбранного оператора на один уровень выше (т.е. если был бы SPEED 3-, становится SPEED 4+; если был бы SPEED 4+, становится SPEED 7+).\n\nЭтот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора, или более одного раза за turning point."
            },
            {
              "id": "earthen_wrath",
              "name": "Earthen Wrath",
              "text": "Эльдритчский жест Stonesinger способен вызвать извержение каменных осколков или превратить твёрдую землю в жижу, поглощающую врага.\n\nЭтот оператор получает следующее дальнобойное оружие:\nEarthen Wrath: Atk 4, Hit 3+, Dmg 4/3, WR Devastating 2, Saturate, *Earthen Wrath.\n*Earthen Wrath: если цель в cover, это оружие получает weapon rule Lethal 5+."
            }
          ]
        }
      ],
      "statusTokens": [
        {
          "id": "speed",
          "name": "Speed",
          "target": "friendly",
          "counter": true,
          "max": 2,
          "text": "Отслеживает уровень SPEED оператора MOUNTED (faction rule Mercurial Speed): 0 = SPEED 3-, 1 = SPEED 4+, 2 = SPEED 7+. Определяется по дистанции действия Sprint: 4\"+ вперёд даёт SPEED 4+ (уровень 1), 7\"+ вперёд даёт SPEED 7+ (уровень 2); движение назад, менее 4\" вперёд, или отсутствие действия Sprint за активацию сбрасывает SPEED до 3- (уровень 0). Эффект: когда по этому оператору стреляют, при SPEED 4+ можно удержать один defence die как normal success без броска, при SPEED 7+ — как critical success вместо этого. У операторов DRAKOLITHE SPEED меняется отдельным правилом Preternatural Evasion на их карточке, а не через Sprint."
        }
      ]
    },
    "Scout Squad": {
      "archetypes": [
        "Infiltration",
        "Recon"
      ],
      "required": [
        {
          "name": "Scout Sergeant",
          "apl": 3,
          "move": "6\"",
          "save": "4+",
          "wounds": 11,
          "count": 1,
          "weapons": [
            {
              "name": "Astartes shotgun",
              "atk": 4,
              "hit": "2+",
              "dmg": "4/4",
              "wr": "Range 6\""
            },
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
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения при сборке ростера: Astartes shotgun+Fists, ИЛИ Boltgun+Fists, ИЛИ Bolt pistol+Chainsword. В этом приложении представлены все варианты оружия; используй только выбранные."
            },
            {
              "name": "Guidance and Experience",
              "text": "Один раз за каждую активацию этого оператора можно выбрать одного другого дружественного оператора SCOUT SQUAD в killzone. До конца следующей активации того оператора добавь 1 к его APL stat."
            },
            {
              "name": "Astartes",
              "text": "Во время своей активации этот оператор может выполнить либо два действия Shoot, либо два действия Fight. Если это два действия Shoot, хотя бы для одного из них должен быть выбран Astartes shotgun, bolt pistol или boltgun. Этот оператор может выполнять counteract вне зависимости от своего приказа (order)."
            }
          ],
          "portrait": "img/portraits/scout-squad/scout-sergeant.png"
        }
      ],
      "poolPick": 8,
      "pool": [
        {
          "name": "Heavy Gunner (Heavy Bolter)",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 10,
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
              "wr": "Heavy (Dash only), Piercing Crits 1"
            },
            {
              "name": "Heavy bolter (sweeping)",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "Heavy (Dash only), Piercing Crits 1, Torrent 1\""
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Heavy Weapon Bipod",
              "text": "Каждый раз, когда этот оператор стреляет оружием со своего datacard, если он не двигался во время этой активации, или если это counteract, то оружие получает weapon rule Ceaseless; если оружие уже имеет это weapon rule (например, от strategy ploy Ambush), вместо этого оно получает weapon rule Relentless. Обрати внимание, что этому оператору не запрещено двигаться после стрельбы."
            }
          ],
          "portrait": "img/portraits/scout-squad/heavy-gunner-heavy-bolter.png"
        },
        {
          "name": "Heavy Gunner (Missile Launcher)",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Missile launcher (frag)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/5",
              "wr": "Blast 2\", Heavy (Dash only)"
            },
            {
              "name": "Missile launcher (krak)",
              "atk": 4,
              "hit": "3+",
              "dmg": "5/7",
              "wr": "Heavy (Dash only), Piercing 1"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Heavy Weapon Bipod",
              "text": "Каждый раз, когда этот оператор стреляет оружием со своего datacard, если он не двигался во время этой активации, или если это counteract, то оружие получает weapon rule Ceaseless; если оружие уже имеет это weapon rule (например, от strategy ploy Ambush), вместо этого оно получает weapon rule Relentless. Обрати внимание, что этому оператору не запрещено двигаться после стрельбы."
            }
          ],
          "portrait": "img/portraits/scout-squad/heavy-gunner-missile-launcher.png"
        },
        {
          "name": "Hunter",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Combat blade",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Grapnel Launcher",
              "text": "Каждый раз, когда этот оператор взбирается (climbing up), вертикальную дистанцию можно считать равной 2\", независимо от того, насколько далеко оператор реально переместился по вертикали."
            },
            {
              "name": "Grapnel Assault",
              "text": "Каждый раз, когда этот оператор выполняет действие Charge во время своей активации, если во время этого действия он взбирается, спускается (drops), прыгает (jumps), либо его база проходит движением под Vantage terrain, его оружие ближнего боя получает weapon rule Lethal 3+ до конца этой активации."
            }
          ],
          "portrait": "img/portraits/scout-squad/hunter.png"
        },
        {
          "name": "Sniper",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 10,
          "weapons": [
            {
              "name": "Bolt pistol",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "Range 8\""
            },
            {
              "name": "Sniper rifle (mobile)",
              "atk": 4,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            },
            {
              "name": "Sniper rifle (stationary)",
              "atk": 4,
              "hit": "2+",
              "dmg": "3/3",
              "wr": "Devastating 3, Heavy (Dash only), Silent"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Camo Cloak",
              "text": "Каждый раз, когда оператор стреляет по этому оператору:\n• Игнорируется weapon rule Saturate.\n• Если можно удержать любые cover save, можно удержать один дополнительный cover save, либо удержать один cover save как critical success вместо этого. Не суммируется с улучшенными cover save от Vantage terrain."
            },
            {
              "name": "Optics",
              "text": "До начала следующей активации этого оператора, каждый раз когда он стреляет, вражеские операторы, по которым он стреляет, не могут быть obscured. Этот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/scout-squad/sniper.png"
        },
        {
          "name": "Tracker",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 10,
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
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Track Enemy",
              "text": "Выбери одного вражеского оператора в пределах 8\" от этого оператора. До конца turning point, каждый раз когда дружественный оператор SCOUT SQUAD стреляет по тому вражескому оператору, дальнобойное оружие того дружественного оператора получает weapon rule Seek Light. Этот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            },
            {
              "name": "Auspex Scan",
              "text": "До начала следующей активации этого оператора либо до его выведения из строя (incapacitated) — что наступит раньше, — каждый раз когда дружественный оператор SCOUT SQUAD стреляет по вражескому оператору в пределах 8\" от этого оператора, тот вражеский оператор не может быть obscured; если тот дружественный оператор — SNIPER, находящийся под эффектом своего действия Optics, его дальнобойное оружие также получает weapon rule Seek Light. Этот оператор не может выполнять это действие, находясь в пределах control range вражеского оператора.",
              "cost": "1AP"
            }
          ],
          "portrait": "img/portraits/scout-squad/tracker.png"
        },
        {
          "name": "Warrior",
          "apl": 2,
          "move": "6\"",
          "save": "4+",
          "wounds": 10,
          "maxCopies": 8,
          "weapons": [
            {
              "name": "Astartes shotgun",
              "atk": 4,
              "hit": "2+",
              "dmg": "4/4",
              "wr": "Range 6\""
            },
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
              "name": "Combat blade",
              "atk": 4,
              "hit": "3+",
              "dmg": "4/5",
              "wr": "-"
            },
            {
              "name": "Fists",
              "atk": 3,
              "hit": "3+",
              "dmg": "3/4",
              "wr": "-"
            }
          ],
          "abilities": [
            {
              "name": "Weapon Choice",
              "text": "В официальных правилах для этого оператора выбирается вариант вооружения при сборке ростера: Astartes shotgun+Fists, ИЛИ Boltgun+Fists, ИЛИ Bolt pistol+Combat blade. В этом приложении представлены все варианты оружия; используй только выбранные."
            },
            {
              "name": "Adaptive Equipment",
              "text": "Каждое из следующего можно сделать один раз за turning point:\n• Один дружественный оператор SCOUT SQUAD WARRIOR может выполнить действие Smoke Grenade.\n• Один дружественный оператор SCOUT SQUAD WARRIOR может выполнить действие Stun Grenade.\nПравила этих действий находятся в universal equipment. Выполнение этих действий по этому правилу не учитывается в лимите действий (то есть, даже если ты также выбрал эти гранаты как equipment)."
            }
          ],
          "portrait": "img/portraits/scout-squad/warrior.png"
        }
      ],
      "equipment": "Scout Squad",
      "lore": {
        "intro": "Kill team Scout Squad — разведывательное подразделение Space Marines, формируемое из неофитов Ордена, ещё не удостоенных полного статуса брата-битвы. Действуя далеко впереди основных сил, скауты закладывают ловушки, ведут наблюдение за противником и прокладывают путь для последующего штурма, полагаясь на скрытность, выносливость и суровую выучку.",
        "operatives": [
          {
            "name": "Scout Sergeant",
            "text": "Опытный ветеран Ордена, обучающий следующее поколение братьев-битвы личным примером и командующий их уважением благодаря отваге и тактическому чутью."
          },
          {
            "name": "Heavy Gunner (Heavy Bolter)",
            "text": "Расчёт тяжёлого вооружения, обрушивающий на противника шквал огня из heavy bolter, чтобы уничтожать даже самые опасные вражеские цели."
          },
          {
            "name": "Heavy Gunner (Missile Launcher)",
            "text": "Оператор missile launcher, способный поразить как одиночную цель бронебойным krak-снарядом, так и группу противников осколочным frag-зарядом."
          },
          {
            "name": "Hunter",
            "text": "Скаут, вооружённый grapnel launcher, способный стремительно преодолевать труднопроходимую местность, устраивать засады или уходить от преследования."
          },
          {
            "name": "Sniper",
            "text": "Мастер засады и меткого выстрела, часами выжидающий в укрытии идеальный момент для смертельного удара."
          },
          {
            "name": "Tracker",
            "text": "Носитель мощного auspex-сканера, позволяющего отряду выявлять цели и планировать сокрушительные удары ещё до начала боя."
          },
          {
            "name": "Warrior",
            "text": "Опытный боец отряда, стремящийся заслужить полный статус брата-битвы и готовый сражаться яростно и решительно при любых обстоятельствах."
          }
        ]
      },
      "factionRules": [
        {
          "name": "Forward Scouting",
          "text": "Центральная роль Space Marine Scouts в ударной группе — выдвигаться далеко впереди основных сил: закладывать ловушки для врага, изматывать вражеские патрули, собирать разведданные и разведывать местность в преддверии штурма Ордена.\n\nВ конце шага Set Up Operatives можно выбрать и разрешить до шести опций Forward Scouting (см. faction choices). У каждой опции есть число в скобках — максимум, сколько раз её можно выбрать и разрешить за битву. Например, шесть твоих выборов могут быть: Reposition (2 раза), Trip Alarm (1 раз), Booby Trap (1 раз) и Diversion (1 раз). Если это правило есть у обоих игроков, разрешайте выборы по очереди, начиная с игрока, обладающего initiative."
        },
        {
          "name": "Guerrilla Engagement",
          "text": "Каждый раз, когда вражеский оператор стреляет по дружественному оператору SCOUT SQUAD, если тот дружественный оператор в cover и дальше 6\" от вражеских операторов, которым он виден, можно перебросить один из своих defence dice.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Ambush",
          "text": "Каждый раз, когда дружественный оператор SCOUT SQUAD стреляет или дерётся во время своей активации, если его приказ был изменён с Conceal на Engage в начале этой активации, или он не был виден вражеским операторам в начале этой активации:\n• Оружие того дружественного оператора получает weapon rule Balanced.\n• Если цель expended, вместо этого оружие того дружественного оператора получает weapon rule Ceaseless.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Adaptable Training",
          "text": "Можно изменить порядок активации до D3 дружественных операторов SCOUT SQUAD, находящихся дальше 4\" от вражеских операторов.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Stealth Relocation",
          "text": "До D3 дружественных операторов SCOUT SQUAD с приказом Conceal, находящихся дальше 4\" от вражеских операторов, могут немедленно выполнить бесплатное действие Dash. Нельзя использовать этот ploy в первый turning point.",
          "cost": "Strategy Ploy"
        },
        {
          "name": "Astartes Training",
          "text": "Примени во время активации дружественного оператора SCOUT SQUAD. До конца этой активации тот оператор может сделать одно из следующего:\n• Выполнить два действия Fight.\n• Выполнить два действия Shoot, если хотя бы для одного из них выбран Astartes shotgun, bolt pistol или boltgun.\n• Выполнить два действия Shoot оружием heavy bolter, missile launcher или sniper rifle, но за второе действие нужно потратить на 1 AP больше.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Raw Physiology",
          "text": "Примени во время активации дружественного оператора SCOUT SQUAD, до или после выполнения им действия. До начала его следующей активации добавь 1\" к его Move stat, и можно игнорировать любые изменения его характеристик от ранений (включая характеристики его оружия).",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Emboldened Aspirant",
          "text": "Примени, когда дружественный оператор SCOUT SQUAD выполняет действие Shoot или Fight, после любых переигровок (re-rolls). Если это первое действие Shoot или Fight, выполняемое дружественным оператором в этом turning point, либо если вражеский оператор — цель этого действия (primary target, если применимо) — имеет Wounds stat выше, чем у того дружественного оператора SCOUT SQUAD, можно удержать один свой normal success как critical success вместо этого.",
          "cost": "Firefight Ploy"
        },
        {
          "name": "Covert Position",
          "text": "Примени во время активации дружественного оператора SCOUT SQUAD. До начала его следующей активации, пока у того оператора приказ Conceal и он в cover, его нельзя выбрать допустимой целью — это имеет приоритет над всеми остальными правилами (например, Seek, Vantage terrain), кроме случаев, когда вражеский оператор в пределах 2\" от него.",
          "cost": "Firefight Ploy"
        }
      ],
      "factionChoices": [
        {
          "id": "forward_scouting",
          "label": "Forward Scouting",
          "scope": "setup",
          "pick": 6,
          "options": [
            {
              "id": "redeploy",
              "name": "Redeploy",
              "text": "Измени расстановку (set up) одной трети своих операторов (округляя вверх)."
            },
            {
              "id": "reposition_1",
              "name": "Reposition",
              "text": "Выполни бесплатное действие Reposition одним дружественным оператором, находящимся в пределах своей drop zone. Он должен закончить это движение полностью в пределах 3\" от своей drop zone."
            },
            {
              "id": "reposition_2",
              "name": "Reposition",
              "text": "Выполни бесплатное действие Reposition одним дружественным оператором, находящимся в пределах своей drop zone. Он должен закончить это движение полностью в пределах 3\" от своей drop zone."
            },
            {
              "id": "trip_alarm_1",
              "name": "Trip Alarm",
              "text": "Размести один из своих маркеров Trip Alarm дальше 6\" от drop zone противника. В первый и второй turning point, каждый раз когда дружественный оператор SCOUT SQUAD стреляет по вражескому оператору в пределах 2\" от этого маркера, дальнобойное оружие того дружественного оператора получает weapon rule Seek. В Ready step третьей Strategy phase убери этот маркер."
            },
            {
              "id": "trip_alarm_2",
              "name": "Trip Alarm",
              "text": "Размести один из своих маркеров Trip Alarm дальше 6\" от drop zone противника. В первый и второй turning point, каждый раз когда дружественный оператор SCOUT SQUAD стреляет по вражескому оператору в пределах 2\" от этого маркера, дальнобойное оружие того дружественного оператора получает weapon rule Seek. В Ready step третьей Strategy phase убери этот маркер."
            },
            {
              "id": "booby_trap",
              "name": "Booby Trap",
              "text": "Размести один из своих маркеров Booby Trap дальше 6\" от drop zone противника и дальше 2\" от других маркеров, access points и Accessible terrain. Первый раз, когда твой маркер Booby Trap оказывается в пределах control range вражеского оператора, убери этот маркер и нанеси 2D3 урона тому оператору; если он не выведен из строя, заверши его действие (если оно выполнялось), даже если эффекты того действия не были полностью разрешены. Если маркер невозможно разместить по правилам, сдвинь его на минимально необходимое расстояние, чтобы разместить."
            },
            {
              "id": "tactical_manoeuvre",
              "name": "Tactical Manoeuvre",
              "text": "Дважды за битву STRATEGIC GAMBIT. Выбери одного дружественного оператора. До конца его следующей активации добавь 1 к его APL stat. Выбор этой опции открывает Strategic Gambit, доступный дважды за битву."
            },
            {
              "id": "diversion",
              "name": "Diversion",
              "text": "Один раз за битву STRATEGIC GAMBIT. Выбери одного вражеского оператора в пределах 6\" от края killzone. До конца его следующей активации вычти 1 из его APL stat. Выбор этой опции открывает Strategic Gambit, доступный один раз за битву."
            },
            {
              "id": "devise_plan",
              "name": "Devise Plan",
              "text": "Получи 1CP."
            },
            {
              "id": "designate_target",
              "name": "Designate Target",
              "text": "Выбери одного вражеского оператора, чтобы он получил один из твоих Target token. Каждый раз, когда дружественный оператор SCOUT SQUAD стреляет по вражескому оператору с одним из твоих Target token, дерётся против него или отвечает (retaliating) против него, можно перебросить один из своих attack dice."
            },
            {
              "id": "spy",
              "name": "Spy",
              "text": "Только Approved Ops. Твой противник должен раскрыть выбранный им tac op."
            }
          ]
        }
      ],
      "statusTokens": [
        {
          "id": "designate_target",
          "name": "Designate Target",
          "target": "enemy",
          "text": "Пока вражеский оператор отмечен этим токеном, каждый раз когда дружественный оператор SCOUT SQUAD стреляет по нему, дерётся против него или отвечает (retaliating) против него, можно перебросить один из своих attack dice."
        },
        {
          "id": "track_enemy",
          "name": "Track Enemy",
          "target": "enemy",
          "text": "Пока вражеский оператор отмечен этим токеном (до конца этого turning point), каждый раз когда дружественный оператор SCOUT SQUAD стреляет по нему, его дальнобойное оружие получает weapon rule Seek Light."
        },
        {
          "id": "auspex_scan",
          "name": "Auspex Scan",
          "target": "friendly",
          "text": "Пока этот оператор отмечен этим токеном (до начала его следующей активации либо до его выведения из строя — что наступит раньше), каждый раз когда дружественный оператор SCOUT SQUAD стреляет по вражескому оператору в пределах 8\" от этого оператора, тот вражеский оператор не может быть obscured; если тот дружественный оператор — SNIPER, находящийся под эффектом действия Optics, его дальнобойное оружие также получает weapon rule Seek Light."
        },
        {
          "id": "optics",
          "name": "Optics",
          "target": "friendly",
          "text": "Пока этот оператор отмечен этим токеном (до начала его следующей активации), каждый раз когда он стреляет, вражеские операторы, по которым он стреляет, не могут быть obscured."
        }
      ]
    }
  }
};
