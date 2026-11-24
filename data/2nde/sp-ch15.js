enregistrerChapitres("2nde", "sp", [
  {
    id: 15,
    titre: "Chapitre 15 : Le courant électrique et les circuits",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Le circuit électrique",
        blocs: [
          {
            type: "introduction",
            titre: "Faire fonctionner un appareil",
            texte: "Une lampe reliée à un générateur peut briller si le circuit permet au courant de circuler. Pour comprendre son fonctionnement, on étudie les éléments du circuit et leurs connexions."
          },
          {
            type: "definition",
            titre: "Dipôle électrique",
            texte: "Un dipôle est un composant électrique qui possède deux bornes. Une lampe, une résistance, un générateur et un interrupteur sont des exemples de dipôles."
          },
          {
            type: "definition",
            titre: "Circuit fermé et circuit ouvert",
            texte: "Un circuit fermé comporte un chemin conducteur continu permettant la circulation du courant. Si ce chemin est interrompu, par exemple par un interrupteur ouvert, le circuit est ouvert et le courant ne circule pas dans la branche interrompue."
          },
          {
            type: "schema",
            titre: "Circuit simple",
            texte: "       interrupteur fermé    lampe\n   ┌────────o──o────────────( L )───┐\n   │                                │\n   └────────── générateur ──────────┘\n\nLe schéma représente une boucle fermée."
          },
          {
            type: "remarque",
            titre: "Condition nécessaire",
            texte: "Un circuit fermé ne garantit pas que le courant soit important : son intensité dépend notamment du générateur et des composants du circuit."
          },
          {
            type: "definition",
            titre: "Générateur et récepteur",
            texte: "Un générateur fournit de l’énergie électrique au circuit dans les conditions étudiées. Un récepteur reçoit de l’énergie électrique et la convertit en d’autres formes d’énergie. Une lampe allumée est un exemple de récepteur."
          }
        ]
      },

      {
        id: 2,
        titre: "Intensité du courant électrique",
        blocs: [
          {
            type: "definition",
            titre: "Courant électrique",
            texte: "Le courant électrique est associé à un déplacement ordonné de charges électriques. Dans un fil métallique, les porteurs de charge mobiles sont les électrons. Dans une solution ionique, ce sont notamment les ions."
          },
          {
            type: "definition",
            titre: "Intensité",
            texte: "L’intensité du courant, notée I, mesure le débit de charge électrique. Son unité est l’ampère, de symbole A. Un milliampère vaut 0,001 A : 1 A = 1 000 mA."
          },
          {
            type: "regle",
            titre: "Charge et intensité constante",
            texte: "Pour une intensité constante : Q = I × Δt.\n\nQ est la charge transférée en coulombs (C), I l’intensité en ampères (A) et Δt la durée en secondes (s). On peut aussi écrire I = Q / Δt."
          },
          {
            type: "exemple",
            titre: "Charge transférée",
            texte: "Un courant constant de 0,20 A circule pendant 30 s.\n\nQ = 0,20 × 30 = 6,0 C."
          },
          {
            type: "regle",
            titre: "Sens conventionnel",
            texte: "Par convention, à l’extérieur du générateur, le courant est orienté de sa borne positive vers sa borne négative. Dans les fils métalliques, les électrons se déplacent dans le sens opposé."
          },
          {
            type: "definition",
            titre: "Mesure avec un ampèremètre",
            texte: "Un ampèremètre mesure l’intensité du courant qui le traverse. Il se branche en série dans la branche étudiée. On choisit le calibre et les bornes adaptés, selon les indications de l’appareil."
          },
          {
            type: "remarque",
            titre: "Attention au branchement",
            texte: "Un ampèremètre ne doit pas être branché directement aux bornes d’un générateur : sa très faible résistance pourrait provoquer un court-circuit. Les manipulations sont réservées à un cadre pédagogique encadré."
          }
        ]
      },

      {
        id: 3,
        titre: "Tension électrique",
        blocs: [
          {
            type: "definition",
            titre: "Tension entre deux points",
            texte: "La tension électrique entre deux points A et B est une différence de potentiel. Elle se note U_AB et s’exprime en volts, de symbole V. Inverser l’ordre des points inverse son signe : U_BA = −U_AB."
          },
          {
            type: "definition",
            titre: "Mesure avec un voltmètre",
            texte: "Un voltmètre mesure la tension entre deux points. Il se branche en dérivation, c’est-à-dire aux bornes du dipôle ou entre les deux points étudiés. Le branchement des bornes de l’appareil détermine le signe affiché."
          },
          {
            type: "exemple",
            titre: "Signe d’une tension",
            texte: "Si U_AB = +6 V, alors U_BA = −6 V. Il s’agit de la même différence de potentiel, décrite dans deux ordres opposés."
          },
          {
            type: "remarque",
            titre: "Tension et courant",
            texte: "La tension et l’intensité sont deux grandeurs différentes. Une tension peut exister aux bornes d’un interrupteur ouvert alors que l’intensité dans sa branche est nulle."
          },
          {
            type: "schema",
            titre: "Branchement d’un voltmètre",
            texte: "A •────────[ dipôle ]────────• B\n  │                          │\n  └──────────( V )───────────┘\n\nLe voltmètre est branché entre A et B."
          }
        ]
      },

      {
        id: 4,
        titre: "Circuits en série et en dérivation",
        blocs: [
          {
            type: "definition",
            titre: "Montage en série",
            texte: "Des dipôles sont montés en série lorsqu’ils sont traversés successivement par le même courant, sans dérivation entre eux."
          },
          {
            type: "regle",
            titre: "Intensité en série",
            texte: "Dans une même branche d’un circuit, l’intensité est la même en tout point. Des dipôles montés en série sont donc traversés par un courant de même intensité."
          },
          {
            type: "definition",
            titre: "Montage en dérivation",
            texte: "Des dipôles sont montés en dérivation lorsque leurs bornes sont reliées aux mêmes deux nœuds du circuit. Ils sont alors soumis à la même tension, prise dans le même ordre entre ces nœuds."
          },
          {
            type: "definition",
            titre: "Nœud et branche",
            texte: "Un nœud est un point du circuit où se rejoignent au moins trois conducteurs. Une branche est une portion du circuit comprise entre deux nœuds."
          },
          {
            type: "regle",
            titre: "Loi des nœuds",
            texte: "À un nœud, la somme des intensités des courants entrants est égale à la somme des intensités des courants sortants."
          },
          {
            type: "exemple",
            titre: "Deux branches",
            texte: "Un courant de 0,50 A arrive à un nœud et se partage en deux courants sortants. Si le premier vaut 0,20 A, le second vaut : 0,50 − 0,20 = 0,30 A."
          },
          {
            type: "schema",
            titre: "Deux lampes en dérivation",
            texte: "              ┌────( L1 )────┐\n   générateur │              │\n              └────( L2 )────┘\n\nLes deux lampes sont reliées aux mêmes deux nœuds : elles ont la même tension."
          },
          {
            type: "regle",
            titre: "Additivité des tensions",
            texte: "Pour trois points A, B et C : U_AC = U_AB + U_BC. On respecte l’ordre des points et les signes des tensions. Cette relation permet notamment d’étudier des dipôles en série."
          }
        ]
      },

      {
        id: 5,
        titre: "Résistance et loi d’Ohm",
        blocs: [
          {
            type: "definition",
            titre: "Conducteur ohmique",
            texte: "Un conducteur ohmique est un dipôle pour lequel la tension et l’intensité sont proportionnelles dans les conditions étudiées. Sa résistance se note R et s’exprime en ohms, de symbole Ω."
          },
          {
            type: "regle",
            titre: "Loi d’Ohm",
            texte: "Pour un conducteur ohmique, en convention récepteur :\n\nU = R × I.\n\nU est la tension en volts, R la résistance en ohms et I l’intensité en ampères. On peut aussi écrire I = U / R ou R = U / I lorsque la division est possible."
          },
          {
            type: "exemple",
            titre: "Calcul de l’intensité",
            texte: "Une résistance de 100 Ω est soumise à une tension de 6,0 V.\n\nI = U / R = 6,0 / 100 = 0,060 A = 60 mA."
          },
          {
            type: "remarque",
            titre: "Une loi à appliquer au bon dipôle",
            texte: "La relation U = R × I ne doit pas être appliquée automatiquement à tous les composants. Par exemple, une lampe à filament n’est pas généralement un conducteur ohmique de résistance constante."
          },
          {
            type: "regle",
            titre: "Résistances en série",
            texte: "Pour des conducteurs ohmiques de résistances R₁ et R₂ montés en série, la résistance équivalente vaut R_eq = R₁ + R₂."
          },
          {
            type: "remarque",
            titre: "Influence de la résistance",
            texte: "À tension fixée, pour un conducteur ohmique, plus la résistance est grande, plus l’intensité est faible."
          }
        ]
      },

      {
        id: 6,
        titre: "Puissance et énergie électriques",
        blocs: [
          {
            type: "definition",
            titre: "Puissance électrique",
            texte: "La puissance électrique correspond à l’énergie transférée par unité de temps. Elle se note P et s’exprime en watts, de symbole W."
          },
          {
            type: "regle",
            titre: "Puissance d’un récepteur",
            texte: "Pour un récepteur en courant continu, avec U et I pris positifs en convention récepteur :\n\nP = U × I.\n\nU est en V, I en A et P en W."
          },
          {
            type: "regle",
            titre: "Énergie transférée",
            texte: "Si la puissance est constante : E = P × Δt.\n\nAvec P en W et Δt en s, l’énergie E est en joules (J). On utilise aussi le wattheure : 1 Wh = 3 600 J."
          },
          {
            type: "exemple",
            titre: "Une lampe",
            texte: "Une lampe reçoit une tension de 6,0 V et un courant de 0,50 A.\n\nP = 6,0 × 0,50 = 3,0 W.\n\nPendant 10 s à puissance constante : E = 3,0 × 10 = 30 J."
          },
          {
            type: "remarque",
            titre: "Effet thermique",
            texte: "Un conducteur ohmique convertit de l’énergie électrique en énergie thermique : c’est l’effet Joule. Pour lui, avec la loi d’Ohm, on peut écrire P = R × I²."
          }
        ]
      },

      {
        id: 7,
        titre: "Sécurité et méthode",
        blocs: [
          {
            type: "definition",
            titre: "Court-circuit",
            texte: "Un court-circuit peut se produire lorsque deux points de tensions différentes sont reliés par un chemin de très faible résistance. Le courant peut alors devenir très intense, provoquer un échauffement et endommager le matériel."
          },
          {
            type: "remarque",
            titre: "Sécurité électrique",
            texte: "Ne jamais expérimenter avec une prise secteur, un fil dénudé ou un appareil endommagé. Ne pas toucher une installation électrique avec les mains mouillées. Les montages sont réservés à un cadre pédagogique encadré, avec un matériel adapté."
          },
          {
            type: "methode",
            titre: "Résoudre un exercice de circuit",
            texte: "1. Repérer les dipôles en série et en dérivation.\n2. Identifier les nœuds et le sens des courants indiqués.\n3. Utiliser l’égalité des intensités en série, la loi des nœuds et l’égalité des tensions en dérivation.\n4. Appliquer la loi d’Ohm uniquement aux conducteurs ohmiques.\n5. Convertir les unités et vérifier le résultat."
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : brancher un ampèremètre en dérivation aux bornes d’un générateur.\nÀ retenir : l’ampèremètre se branche en série.\n\nErreur : brancher un voltmètre en série.\nÀ retenir : le voltmètre se branche en dérivation.\n\nErreur : utiliser 200 mA comme 200 A.\nÀ faire : 200 mA = 0,200 A.\n\nErreur : additionner les tensions de deux dipôles reliés aux mêmes deux nœuds.\nÀ faire : leurs tensions sont égales si elles sont prises dans le même ordre.\n\nErreur : confondre puissance et énergie.\nÀ faire : P s’exprime en W et E en J ou en Wh."
          },
          {
            type: "schema",
            titre: "Formules essentielles",
            texte: "Q = I × Δt\n\nU = R × I\n\nP = U × I\nE = P × Δt\n\nÀ un nœud : somme des courants entrants = somme des courants sortants."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quel appareil mesure l’intensité du courant ? Se branche-t-il en série ou en dérivation dans la branche étudiée ?",
        correction: "L’ampèremètre mesure l’intensité. Il se branche en série dans la branche étudiée."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis 250 mA en ampères et 0,040 A en milliampères. On donne 1 A = 1 000 mA.",
        correction: "250 mA = 0,250 A. 0,040 A = 40 mA."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Deux lampes sont reliées aux mêmes deux nœuds A et B. La tension U_AB vaut 6 V. Quelle est la tension aux bornes de chaque lampe, prise de A vers B ?",
        correction: "Les lampes sont en dérivation entre A et B. La tension prise de A vers B vaut 6 V pour chacune."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "À un nœud, un courant de 0,80 A arrive et se partage en deux courants sortants. Le premier vaut 0,35 A. Calcule le second.",
        correction: "D’après la loi des nœuds : 0,80 = 0,35 + I₂. Donc I₂ = 0,45 A."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un conducteur ohmique de résistance 20 Ω est soumis à une tension de 4,0 V. Calcule l’intensité qui le traverse. On donne U = R × I.",
        correction: "I = U / R = 4,0 / 20 = 0,20 A, soit 200 mA."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une lampe reçoit en courant continu une tension de 12 V et un courant de 0,25 A. Calcule sa puissance électrique reçue avec P = U × I.",
        correction: "P = 12 × 0,25 = 3,0 W."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux résistances ohmiques R₁ = 10 Ω et R₂ = 20 Ω sont montées en série aux bornes d’un générateur idéal de tension 6,0 V. On donne R_eq = R₁ + R₂ et U = R × I. Calcule la résistance équivalente, l’intensité du courant et la tension aux bornes de chaque résistance.",
        correction: "R_eq = 10 + 20 = 30 Ω.\n\nI = 6,0 / 30 = 0,20 A. Cette intensité traverse les deux résistances.\n\nU₁ = 10 × 0,20 = 2,0 V.\nU₂ = 20 × 0,20 = 4,0 V.\n\nVérification : U₁ + U₂ = 6,0 V."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux conducteurs ohmiques sont montés en dérivation aux bornes d’un générateur idéal de 12 V. Leurs résistances sont R₁ = 60 Ω et R₂ = 40 Ω. Calcule le courant dans chaque branche, puis le courant fourni par le générateur. On donne U = R × I.",
        correction: "Chaque conducteur a une tension de 12 V à ses bornes.\n\nI₁ = 12 / 60 = 0,20 A.\nI₂ = 12 / 40 = 0,30 A.\n\nD’après la loi des nœuds, le courant fourni est I = I₁ + I₂ = 0,50 A."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une lampe reçoit une tension constante de 6,0 V et un courant constant de 0,40 A pendant 5,0 min. Calcule sa puissance électrique reçue, puis l’énergie reçue en joules. On donne P = U × I, E = P × t et 1 min = 60 s.",
        correction: "P = 6,0 × 0,40 = 2,4 W.\n\nDurée : t = 5,0 × 60 = 300 s.\n\nE = 2,4 × 300 = 720 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un courant constant de 150 mA traverse une branche pendant 2,0 min. Calcule la charge électrique transférée. On donne Q = I × t, 1 A = 1 000 mA et 1 min = 60 s.",
        correction: "I = 150 mA = 0,150 A. La durée vaut t = 2,0 × 60 = 120 s.\n\nQ = I × t = 0,150 × 120 = 18 C."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un générateur idéal de tension 12 V alimente deux branches en dérivation. La première contient une résistance ohmique R₁ = 30 Ω. La seconde contient deux résistances ohmiques en série, R₂ = 10 Ω et R₃ = 20 Ω. On donne U = R × I et la résistance équivalente en série R_eq = R₂ + R₃. 1. Calcule l’intensité dans chaque branche. 2. Calcule l’intensité fournie par le générateur. 3. Calcule la tension aux bornes de R₂ et de R₃. 4. Vérifie la tension de la seconde branche.",
        correction: "1. Chaque branche est soumise à 12 V.\n\nPremière branche : I₁ = 12 / 30 = 0,40 A.\n\nSeconde branche : R_eq = 10 + 20 = 30 Ω, donc I₂ = 12 / 30 = 0,40 A.\n\n2. Loi des nœuds : I = I₁ + I₂ = 0,80 A.\n\n3. Le même courant I₂ traverse R₂ et R₃ :\nU₂ = 10 × 0,40 = 4,0 V.\nU₃ = 20 × 0,40 = 8,0 V.\n\n4. U₂ + U₃ = 4,0 + 8,0 = 12 V, ce qui correspond à la tension de la branche."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un conducteur ohmique de résistance 24 Ω est soumis à une tension continue constante de 12 V pendant 10 min. On donne U = R × I, P = U × I, E = P × t et Q = I × t. 1. Calcule l’intensité. 2. Calcule la puissance reçue. 3. Calcule l’énergie reçue en joules et la charge transférée. 4. Vérifie la puissance avec P = R × I².",
        correction: "1. I = U / R = 12 / 24 = 0,50 A.\n\n2. P = U × I = 12 × 0,50 = 6,0 W.\n\n3. t = 10 × 60 = 600 s.\nE = P × t = 6,0 × 600 = 3 600 J.\nQ = I × t = 0,50 × 600 = 300 C.\n\n4. P = R × I² = 24 × 0,50² = 24 × 0,25 = 6,0 W."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un circuit en courant continu, deux conducteurs ohmiques R₁ et R₂ sont montés en série. Le générateur idéal délivre 9,0 V et le courant vaut 0,30 A. La résistance R₁ vaut 10 Ω. On donne U = R × I et l’additivité des tensions en série. 1. Calcule la tension aux bornes de R₁. 2. Déduis la tension aux bornes de R₂ et sa résistance. 3. Calcule la puissance reçue par chaque conducteur avec P = U × I. 4. Compare leur somme à la puissance fournie au circuit par le générateur.",
        correction: "1. U₁ = R₁ × I = 10 × 0,30 = 3,0 V.\n\n2. U₂ = 9,0 − 3,0 = 6,0 V. Donc R₂ = U₂ / I = 6,0 / 0,30 = 20 Ω.\n\n3. P₁ = U₁ × I = 3,0 × 0,30 = 0,90 W.\nP₂ = U₂ × I = 6,0 × 0,30 = 1,8 W.\n\n4. P₁ + P₂ = 0,90 + 1,8 = 2,7 W. La puissance fournie au circuit vaut 9,0 × 0,30 = 2,7 W : les deux valeurs sont égales dans ce modèle idéal."
      }
    ]
  }
]);
