// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch8",
    titre: "Chapitre 8 : Les générateurs et les tensions électriques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch8-lecon1",
        titre: "Le rôle d'un générateur",
        blocs: [
          {
            type: "texte",
            titre: "Rappel : le circuit électrique",
            texte: "Un circuit électrique peut comprendre un générateur, des fils de connexion, un interrupteur et un récepteur comme une lampe. Pour qu'un courant circule dans un circuit simple, celui-ci doit former une boucle fermée."
          },
          {
            type: "definition",
            titre: "Générateur électrique",
            texte: "Un générateur est un dispositif capable de fournir de l'énergie électrique à un circuit. Une pile, une batterie et un alternateur sont des exemples de générateurs."
          },
          {
            type: "definition",
            titre: "Récepteur électrique",
            texte: "Un récepteur est un appareil qui reçoit de l'énergie électrique et la transforme en d'autres formes d'énergie. Par exemple, une lampe transforme une partie de l'énergie électrique reçue en lumière et en chaleur."
          },
          {
            type: "exemple",
            titre: "Une lampe alimentée par une pile",
            texte: "Dans un circuit fermé, la pile fournit de l'énergie électrique à la lampe. La lampe reçoit cette énergie et produit notamment de la lumière."
          },
          {
            type: "remarque",
            titre: "Une source d'énergie",
            texte: "Un générateur ne crée pas l'énergie : il transforme une autre forme d'énergie en énergie électrique. Par exemple, une pile transforme de l'énergie chimique en énergie électrique."
          }
        ]
      },
      {
        id: "sp4-ch8-lecon2",
        titre: "La tension électrique",
        blocs: [
          {
            type: "definition",
            titre: "Tension entre deux points",
            texte: "La tension électrique est une grandeur mesurée entre deux points d'un circuit. Elle se note souvent U et son unité est le volt, de symbole V."
          },
          {
            type: "exemple",
            titre: "La tension d'une pile",
            texte: "Une pile peut porter l'indication 1,5 V. Cette valeur indique sa tension nominale, c'est-à-dire une valeur de référence donnée pour son utilisation."
          },
          {
            type: "remarque",
            titre: "Tension et intensité",
            texte: "La tension U se mesure en volts. L'intensité du courant I se mesure en ampères. Ce sont deux grandeurs différentes : il ne faut pas les confondre."
          },
          {
            type: "definition",
            titre: "Mesurer une tension",
            texte: "On mesure une tension avec un voltmètre. Il se branche en dérivation, c'est-à-dire entre les deux points aux bornes desquels on veut mesurer la tension."
          },
          {
            type: "methode",
            titre: "Lire une mesure",
            texte: "Pour étudier une tension à partir d'un document :\n1. Repère les deux points entre lesquels elle est mesurée.\n2. Lis la valeur et son unité.\n3. Vérifie si la tension est continue ou alternative lorsque cette information est donnée.\n4. Respecte l'ordre des points si l'énoncé indique une tension orientée."
          },
          {
            type: "remarque",
            titre: "Prudence avec les mesures",
            texte: "Les mesures électriques doivent être réalisées avec du matériel adapté et sous supervision. Ne branche jamais un appareil de mesure sur une prise électrique à la maison."
          }
        ]
      },
      {
        id: "sp4-ch8-lecon3",
        titre: "La tension continue",
        blocs: [
          {
            type: "definition",
            titre: "Une tension de signe constant",
            texte: "Une tension continue garde le même signe au cours du temps. Dans de nombreux exercices, on étudie une tension continue constante : sa valeur et son signe ne changent pas."
          },
          {
            type: "exemple",
            titre: "La pile",
            texte: "Une pile fournit une tension continue. Dans un modèle simplifié, on considère souvent que sa tension reste constante pendant la durée de l'étude."
          },
          {
            type: "schema",
            titre: "Une tension continue constante",
            svg: "<svg viewBox='0 0 340 175' xmlns='http://www.w3.org/2000/svg'><rect width='340' height='175' fill='#f8fafc'/><line x1='45' y1='135' x2='315' y2='135' stroke='#334155' stroke-width='2'/><polygon points='315,135 306,130 306,140' fill='#334155'/><line x1='45' y1='135' x2='45' y2='15' stroke='#334155' stroke-width='2'/><polygon points='45,15 40,24 50,24' fill='#334155'/><line x1='45' y1='65' x2='300' y2='65' stroke='#2563eb' stroke-width='3'/><text x='12' y='23' font-size='13' fill='#0f172a'>U (V)</text><text x='300' y='157' font-size='13' fill='#0f172a'>t</text><text x='30' y='139' font-size='12' fill='#0f172a'>0</text><text x='54' y='58' font-size='12' fill='#2563eb'>U constante</text></svg>",
            legende: "La courbe est horizontale : dans cet exemple, la tension garde la même valeur au cours du temps."
          },
          {
            type: "remarque",
            titre: "Une tension continue peut varier",
            texte: "Une tension qui reste toujours positive peut varier sans être constante. Dans ce chapitre, les exemples de piles sont simplifiés en supposant leur tension constante."
          }
        ]
      },
      {
        id: "sp4-ch8-lecon4",
        titre: "La tension alternative",
        blocs: [
          {
            type: "definition",
            titre: "Une tension qui change de signe",
            texte: "Une tension alternative prend successivement des valeurs positives et négatives au cours du temps. Elle change donc de signe."
          },
          {
            type: "exemple",
            titre: "L'alternateur",
            texte: "Un alternateur peut produire une tension alternative. Nous étudierons son fonctionnement dans un prochain chapitre."
          },
          {
            type: "schema",
            titre: "Exemple de tension alternative",
            svg: "<svg viewBox='0 0 340 190' xmlns='http://www.w3.org/2000/svg'><rect width='340' height='190' fill='#f8fafc'/><line x1='40' y1='95' x2='320' y2='95' stroke='#334155' stroke-width='2'/><polygon points='320,95 311,90 311,100' fill='#334155'/><line x1='40' y1='165' x2='40' y2='15' stroke='#334155' stroke-width='2'/><polygon points='40,15 35,24 45,24' fill='#334155'/><path d='M 40 95 C 60 35, 90 35, 110 95 S 160 155, 180 95 S 230 35, 250 95 S 300 155, 320 95' fill='none' stroke='#dc2626' stroke-width='3'/><text x='8' y='22' font-size='13' fill='#0f172a'>U (V)</text><text x='307' y='115' font-size='13' fill='#0f172a'>t</text><text x='25' y='100' font-size='12' fill='#0f172a'>0</text><text x='50' y='29' font-size='12' fill='#dc2626'>Positive</text><text x='180' y='165' font-size='12' fill='#dc2626'>Négative</text></svg>",
            legende: "Dans cet exemple, la tension passe au-dessus puis au-dessous de zéro : elle change de signe."
          },
          {
            type: "remarque",
            titre: "Alternatif ne veut pas dire toujours sinusoïdal",
            texte: "Une tension alternative peut avoir différentes formes. La tension sinusoïdale est un cas particulier, que nous étudierons avec les tensions périodiques."
          }
        ]
      },
      {
        id: "sp4-ch8-lecon5",
        titre: "Lire et comparer les tensions",
        blocs: [
          {
            type: "tableau",
            titre: "Comparer les deux types",
            entetes: ["Type de tension", "Signe au cours du temps", "Exemple"],
            lignes: [
              ["Continue constante", "Reste le même et la valeur ne change pas", "Modèle simplifié d'une pile"],
              ["Continue variable", "Reste le même, mais la valeur peut varier", "Certaines tensions redressées"],
              ["Alternative", "Prend des valeurs positives et négatives", "Tension produite par un alternateur"]
            ]
          },
          {
            type: "methode",
            titre: "Identifier une tension sur un graphique",
            texte: "1. Repère l'axe du temps et la ligne correspondant à U = 0.\n2. Observe les valeurs de la courbe.\n3. Si elle prend des valeurs positives et négatives, la tension est alternative.\n4. Si elle garde le même signe, elle est continue au sens utilisé dans ce chapitre. Si sa valeur ne change pas, elle est constante."
          },
          {
            type: "remarque",
            titre: "Sécurité électrique",
            texte: "La tension du réseau électrique peut être dangereuse, voire mortelle. Ne touche jamais un fil dénudé et ne réalise aucun montage sur une prise. Les graphiques du cours s'étudient sur papier."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est le rôle d'un générateur dans un circuit ? Donne un exemple.",
        correction: "Un générateur fournit de l'énergie électrique au circuit en transformant une autre forme d'énergie. Une pile est un exemple de générateur."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est l'unité de la tension électrique ? Quel appareil permet de la mesurer ?",
        correction: "L'unité de la tension est le volt, de symbole V. On mesure une tension avec un voltmètre."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une tension reste égale à 1,5 V pendant toute la durée d'une observation. Est-elle continue, alternative ou constante ?",
        correction: "Elle garde le même signe et la même valeur : c'est une tension continue constante. Elle n'est pas alternative."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une tension prend successivement les valeurs +3 V, +1 V, −2 V puis +3 V. Est-elle alternative ? Pourquoi ?",
        correction: "Oui. Elle prend des valeurs positives et négatives : elle change de signe. Elle est donc alternative."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une tension varie entre +2 V et +5 V sans devenir négative.\n1. Est-elle constante ?\n2. Est-elle alternative au sens de la leçon ?",
        correction: "1. Non : sa valeur varie entre +2 V et +5 V.\n2. Non : elle reste positive et ne change pas de signe. Elle est continue au sens utilisé dans ce chapitre, mais elle n'est pas constante."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève dit : « Une tension et une intensité sont la même grandeur, puisque toutes deux concernent l'électricité. » Corrige son affirmation et donne leurs unités.",
        correction: "La tension et l'intensité sont deux grandeurs différentes. La tension U se mesure en volts (V), tandis que l'intensité I du courant se mesure en ampères (A)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On étudie trois tensions :\nA reste égale à +4 V ;\nB varie entre +1 V et +6 V ;\nC prend des valeurs entre −3 V et +3 V.\nClasse-les et justifie chaque réponse.",
        correction: "A est continue constante : sa valeur reste égale à +4 V.\nB est continue variable au sens de la leçon : elle reste positive mais sa valeur change.\nC est alternative : elle prend des valeurs négatives et positives."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une pile de tension nominale 1,5 V alimente une lampe dans un circuit fermé.\n1. Quel appareil est le générateur ?\n2. Quel appareil est le récepteur ?\n3. Quelle transformation d'énergie se produit dans chacun ?",
        correction: "1. La pile est le générateur.\n2. La lampe est le récepteur.\n3. La pile transforme de l'énergie chimique en énergie électrique. La lampe transforme l'énergie électrique reçue notamment en lumière et en chaleur."
      }
    ]
  }
]);
