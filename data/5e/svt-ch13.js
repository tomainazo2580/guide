// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 13 : Les volcans

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-volcans",
    titre: "Chapitre 13 : Les volcans",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-volcans-definition",
        titre: "Qu'est-ce qu'un volcan ?",
        blocs: [
          {
            type: "texte",
            titre: "Une ouverture vers l'intérieur de la Terre",
            texte: "Dans certaines régions, on observe des montagnes ou des reliefs formés par des activités volcaniques. Lors d'une éruption, des matières provenant de l'intérieur de la Terre peuvent sortir à la surface."
          },
          {
            type: "definition",
            titre: "Un volcan",
            texte: "Un volcan est un lieu où du magma et des gaz peuvent atteindre la surface de la Terre. Les matériaux accumulés au cours des éruptions peuvent former un relief volcanique."
          },
          {
            type: "definition",
            titre: "Une éruption volcanique",
            texte: "Une éruption volcanique est la sortie à la surface de matériaux volcaniques, comme de la lave, des gaz et parfois des fragments de roches ou des cendres."
          },
          {
            type: "remarque",
            titre: "Tous les volcans ne se ressemblent pas",
            texte: "Les volcans ont des formes et des comportements variés. Certains forment des montagnes élevées ; d'autres ont des pentes plus douces."
          }
        ]
      },

      {
        id: "svt5-volcans-magma-lave",
        titre: "Magma et lave",
        blocs: [
          {
            type: "definition",
            titre: "Le magma",
            texte: "Le magma est une matière très chaude située en profondeur. Il est constitué de roches fondues, de gaz et parfois de cristaux."
          },
          {
            type: "definition",
            titre: "La lave",
            texte: "La lave est du magma arrivé à la surface de la Terre. En se refroidissant, elle se solidifie et forme une roche volcanique."
          },
          {
            type: "regle",
            titre: "La différence à retenir",
            texte: "En profondeur, on parle de magma. Lorsqu'il arrive à la surface, on parle de lave."
          },
          {
            type: "exemple",
            titre: "Une coulée de lave",
            texte: "Lors de certaines éruptions, la lave s'écoule sur les pentes du volcan. En refroidissant, elle devient solide et peut former une nouvelle couche de roche."
          }
        ]
      },

      {
        id: "svt5-volcans-structure",
        titre: "Les parties d'un volcan",
        blocs: [
          {
            type: "tableau",
            titre: "Les principaux éléments",
            entetes: ["Élément", "Description"],
            lignes: [
              [
                "Réservoir magmatique",
                "Zone en profondeur où du magma peut s'accumuler."
              ],
              [
                "Cheminée volcanique",
                "Passage par lequel le magma peut remonter."
              ],
              [
                "Cratère",
                "Dépression située autour d'une ouverture volcanique."
              ],
              [
                "Cône volcanique",
                "Relief formé par l'accumulation de matériaux volcaniques."
              ]
            ]
          },
          {
            type: "schema",
            titre: "Coupe simplifiée d'un volcan",
            svg: "<svg viewBox='0 0 340 270' xmlns='http://www.w3.org/2000/svg'><path d='M20 205 L125 72 L155 82 L185 82 L215 72 L320 205 Z' fill='#d6d3d1' stroke='#57534e' stroke-width='2'/><path d='M125 72 Q170 96 215 72' fill='none' stroke='#57534e' stroke-width='2'/><path d='M162 205 L162 87 L178 87 L178 205' fill='#fb923c' stroke='#c2410c' stroke-width='2'/><path d='M178 87 Q205 105 231 137' fill='none' stroke='#ef4444' stroke-width='5'/><ellipse cx='170' cy='231' rx='45' ry='19' fill='#fb923c' stroke='#c2410c' stroke-width='2'/><line x1='162' y1='205' x2='162' y2='215' stroke='#c2410c' stroke-width='2'/><line x1='178' y1='205' x2='178' y2='215' stroke='#c2410c' stroke-width='2'/><circle cx='151' cy='49' r='5' fill='#9ca3af'/><circle cx='169' cy='37' r='7' fill='#9ca3af'/><circle cx='189' cy='50' r='5' fill='#9ca3af'/><line x1='190' y1='75' x2='270' y2='43' stroke='#6b7280' stroke-width='1'/><text x='272' y='42' font-size='11' fill='#374151'>Cratère</text><line x1='177' y1='145' x2='248' y2='145' stroke='#6b7280' stroke-width='1'/><text x='250' y='149' font-size='11' fill='#374151'>Cheminée</text><line x1='204' y1='231' x2='247' y2='231' stroke='#6b7280' stroke-width='1'/><text x='249' y='227' font-size='10' fill='#374151'>Réservoir</text><text x='249' y='241' font-size='10' fill='#374151'>magmatique</text><line x1='85' y1='145' x2='34' y2='125' stroke='#6b7280' stroke-width='1'/><text x='5' y='121' font-size='10' fill='#374151'>Cône</text><text x='170' y='264' font-size='10' fill='#6b7280' text-anchor='middle'>Coupe simplifiée, non à l'échelle</text></svg>",
            legende: "Le magma peut remonter depuis un réservoir par une cheminée. Les matériaux émis peuvent s'accumuler et former un cône."
          },
          {
            type: "remarque",
            titre: "Un modèle simplifié",
            texte: "Ce schéma aide à comprendre le trajet du magma. Dans la nature, les volcans n'ont pas tous un seul réservoir ou une seule cheminée."
          }
        ]
      },

      {
        id: "svt5-volcans-eruptions",
        titre: "Différentes éruptions",
        blocs: [
          {
            type: "texte",
            titre: "Des manifestations variées",
            texte: "Une éruption peut produire des coulées de lave, des projections de fragments de roches, des cendres et des gaz. La quantité et la manière dont ces matériaux sortent varient d'une éruption à l'autre."
          },
          {
            type: "tableau",
            titre: "Deux comportements simplifiés",
            entetes: ["Éruption surtout effusive", "Éruption surtout explosive"],
            lignes: [
              [
                "La lave s'écoule relativement facilement en coulées.",
                "Des explosions projettent des cendres et des fragments de roches."
              ],
              [
                "La lave est généralement plus fluide.",
                "Le magma est généralement plus visqueux et les gaz s'échappent plus difficilement."
              ]
            ]
          },
          {
            type: "remarque",
            titre: "Dans la réalité",
            texte: "Une même éruption peut présenter des phases effusives et des phases explosives. Il ne faut donc pas ranger tous les volcans dans deux catégories fixes."
          }
        ]
      },

      {
        id: "svt5-volcans-risques",
        titre: "Les risques volcaniques",
        blocs: [
          {
            type: "texte",
            titre: "Des dangers possibles",
            texte: "Les coulées de lave, les chutes de cendres, les gaz et certaines coulées très chaudes de gaz et de fragments peuvent être dangereux pour les personnes, les animaux, les cultures et les habitations."
          },
          {
            type: "definition",
            titre: "Le risque volcanique",
            texte: "Le risque volcanique dépend des dangers liés à l'activité du volcan et de la présence de personnes ou de biens qui peuvent être touchés."
          },
          {
            type: "methode",
            titre: "En cas d'alerte",
            texte: "Il faut suivre les consignes des autorités et des services de protection civile, s'éloigner des zones interdites et évacuer si cela est demandé. Ne retourne pas dans une zone dangereuse sans autorisation."
          },
          {
            type: "remarque",
            titre: "La surveillance",
            texte: "Les scientifiques surveillent notamment les petits séismes, les déformations du sol et les gaz de certains volcans. Cela aide à repérer des signes d'activité, même si la date exacte d'une éruption reste difficile à prévoir."
          }
        ]
      },

      {
        id: "svt5-volcans-madagascar",
        titre: "Le volcanisme à Madagascar",
        blocs: [
          {
            type: "texte",
            titre: "Des traces d'anciennes activités",
            texte: "Madagascar possède des régions où l'on observe des roches et des reliefs volcaniques. La région de l'Itasy et le massif de l'Ankaratra présentent notamment des traces d'activités volcaniques passées."
          },
          {
            type: "remarque",
            titre: "Observer le passé",
            texte: "Les roches et les reliefs volcaniques permettent aux scientifiques d'étudier des éruptions anciennes. Leur présence ne signifie pas qu'une éruption est en cours."
          }
        ]
      },

      {
        id: "svt5-volcans-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. Un volcan est un lieu où du magma et des gaz peuvent atteindre la surface.\n2. Le magma est en profondeur ; la lave est du magma arrivé à la surface.\n3. Une éruption peut produire de la lave, des gaz, des cendres et des fragments de roches.\n4. Les éruptions peuvent avoir des phases effusives ou explosives.\n5. Il faut respecter les consignes des autorités en cas d'alerte."
          },
          {
            type: "methode",
            titre: "Pour décrire une éruption",
            texte: "Précise ce qui sort du volcan : lave, gaz, cendres ou fragments. Décris ensuite la manière dont ces matériaux sont émis : coulées, projections ou explosions."
          },
          {
            type: "remarque",
            titre: "Dans le prochain chapitre",
            texte: "Nous étudierons les séismes, une autre manifestation de l'activité de la Terre."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'une éruption volcanique ?",
        correction: "C'est la sortie à la surface de matériaux volcaniques, comme de la lave, des gaz et parfois des cendres ou des fragments de roches."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est la différence entre magma et lave ?",
        correction: "Le magma se trouve en profondeur. La lave est du magma arrivé à la surface de la Terre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Que devient la lave lorsqu'elle refroidit ?",
        correction: "Elle se solidifie et forme une roche volcanique."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'appelle-t-on une cheminée volcanique ?",
        correction: "C'est un passage par lequel le magma peut remonter vers la surface."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite trois matériaux qui peuvent être émis pendant une éruption.",
        correction: "Par exemple : de la lave, des gaz et des cendres. Des fragments de roches peuvent aussi être projetés."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce qu'un cône volcanique ?",
        correction: "C'est un relief formé par l'accumulation de matériaux volcaniques autour d'une ouverture."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Quelle différence simple peut-on faire entre une éruption surtout effusive et une éruption surtout explosive ?",
        correction: "Une éruption surtout effusive produit notamment des coulées de lave qui s'écoule relativement facilement. Une éruption surtout explosive projette notamment des cendres et des fragments de roches lors d'explosions."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Le magma est situé en profondeur.\n2. Tous les volcans ont exactement la même forme.\n3. La lave refroidie peut former une roche.",
        correction: "1. Vrai.\n2. Faux : les volcans ont des formes variées.\n3. Vrai."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Cite deux éléments que les scientifiques peuvent surveiller pour étudier l'activité d'un volcan.",
        correction: "Par exemple : les petits séismes et les déformations du sol. Ils peuvent aussi surveiller les gaz."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une éruption produit une coulée de lave et des cendres. Cite deux dangers possibles et indique ce qu'il faut faire en cas d'ordre d'évacuation.",
        correction: "La coulée de lave peut endommager les habitations et les cultures. Les cendres peuvent gêner la respiration et perturber les activités. En cas d'ordre d'évacuation, il faut suivre les consignes des autorités et quitter la zone indiquée."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique comment un cône volcanique peut se former au cours de plusieurs éruptions.",
        correction: "Au cours des éruptions, la lave, les cendres et les fragments de roches peuvent s'accumuler autour de l'ouverture. La lave se solidifie en refroidissant. L'accumulation progressive de ces matériaux peut former un cône volcanique."
      }
    ]
  }
]);
