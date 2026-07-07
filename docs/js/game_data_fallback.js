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
          "target": "enemy"
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
          "target": "friendly"
        },
        {
          "id": "ardour",
          "name": "Ardour",
          "target": "friendly"
        },
        {
          "id": "wrath",
          "name": "Wrath",
          "target": "friendly"
        },
        {
          "id": "restoration",
          "name": "Restoration",
          "target": "friendly"
        },
        {
          "id": "exigence",
          "name": "Exigence",
          "target": "friendly"
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
          "target": "enemy"
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
          ]
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
          ]
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
          "target": "enemy"
        },
        {
          "id": "veriscant",
          "name": "Veriscant",
          "target": "enemy"
        },
        {
          "id": "spot",
          "name": "Spot",
          "target": "enemy"
        },
        {
          "id": "aggressive_pattern",
          "name": "Aggressive",
          "target": "friendly"
        },
        {
          "id": "swift_pattern",
          "name": "Swift",
          "target": "friendly"
        },
        {
          "id": "defensive_pattern",
          "name": "Defensive",
          "target": "friendly"
        },
        {
          "id": "medic_used",
          "name": "Medic!",
          "target": "friendly"
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
          "target": "enemy"
        },
        {
          "id": "victory_shriek",
          "name": "Victory Shriek",
          "target": "friendly"
        },
        {
          "id": "vengeance_mark",
          "name": "Vengeance for the Kinband",
          "target": "enemy"
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
          ]
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
          ]
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
          ]
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
          "target": "friendly"
        },
        {
          "id": "gong_knell",
          "name": "Gong Knell",
          "target": "friendly"
        },
        {
          "id": "mantle_of_darkness",
          "name": "Mantle of Darkness",
          "target": "friendly"
        },
        {
          "id": "pelting_firepower",
          "name": "Pelting Firepower",
          "target": "enemy"
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
          "max": 6
        },
        {
          "id": "challenge_token",
          "name": "Challenge Token",
          "target": "enemy"
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          "max": 4
        },
        {
          "id": "photon_grenade",
          "name": "Photon Grenade",
          "target": "enemy"
        },
        {
          "id": "pulse_accelerator",
          "name": "Pulse Accelerator",
          "target": "friendly"
        },
        {
          "id": "medic_used",
          "name": "Medic",
          "target": "friendly"
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
    }
  }
};
