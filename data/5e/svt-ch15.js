// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 15 : Les plaques terrestres
// et la formation des montagnes

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-plaques-montagnes",
    titre: "Chapitre 15 : Les plaques terrestres et la formation des montagnes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-plaques-introduction",
        titre: "La surface de la Terre est découpée",
        blocs: [
          {
            type: "texte",
            titre: "Une surface qui bouge lentement",
            texte: "La surface solide de la Terre n'est pas formée d'un seul morceau. Sa partie externe rigide est découpée en grands morceaux appelés plaques terrestres."
          },
          {
            type: "definition",
            titre: "Une plaque terrestre",
            texte: "Une plaque terrestre, ou plaque tectonique, est une grande portion rigide de la partie externe de la Terre. Elle se déplace très lentement par rapport aux autres plaques."
          },
          {
            type: "texte",
            titre: "Un mouvement très lent",
            texte: "Les plaques se déplacent généralement de quelques centimètres par an. Ce mouvement est trop lent pour être observé directement, mais il peut être mesuré avec des instruments."
          },
          {
            type: "remarque",
            titre: "Continents et océans",
            texte: "Une plaque peut porter une partie d'un continent, une partie d'un océan ou les deux. Les limites des plaques ne correspondent donc pas toujours aux bords des continents."
          }
        ]
      },

      {
        id: "svt5-plaques-limites",
        titre: "Que se passe-t-il aux limites des plaques ?",
        blocs: [
          {
            type: "texte",
            titre: "Des plaques en mouvement",
            texte: "Les plaques peuvent s'écarter, se rapprocher ou glisser l'une contre l'autre. Ces mouvements sont liés à des séismes et, dans certaines régions, à du volcanisme."
          },
          {
            type: "tableau",
            titre: "Trois types de mouvements",
            entetes: ["Mouvement", "Description simple", "Conséquence possible"],
            lignes: [
              [
                "Écartement",
                "Deux plaques s'éloignent l'une de l'autre.",
                "Du magma peut remonter et former de nouvelles roches."
              ],
              [
                "Rapprochement",
                "Deux plaques se dirigent l'une vers l'autre.",
                "Des montagnes peuvent se former et des séismes peuvent se produire."
              ],
              [
                "Glissement",
                "Deux plaques glissent l'une contre l'autre.",
                "Des secousses peuvent se produire lorsque le mouvement se fait brusquement."
              ]
            ]
          },
          {
            type: "schema",
            titre: "Les mouvements des plaques",
            svg: "<svg viewBox='0 0 340 245' xmlns='http://www.w3.org/2000/svg'><text x='170' y='22' font-size='13' font-weight='bold' fill='#374151' text-anchor='middle'>ÉCARTEMENT</text><rect x='35' y='34' width='105' height='22' fill='#bfdbfe' stroke='#2563eb'/><rect x='200' y='34' width='105' height='22' fill='#bfdbfe' stroke='#2563eb'/><line x1='135' y1='67' x2='80' y2='67' stroke='#1d4ed8' stroke-width='2'/><polygon points='85,62 75,67 85,72' fill='#1d4ed8'/><line x1='205' y1='67' x2='260' y2='67' stroke='#1d4ed8' stroke-width='2'/><polygon points='255,62 265,67 255,72' fill='#1d4ed8'/><text x='170' y='106' font-size='13' font-weight='bold' fill='#374151' text-anchor='middle'>RAPPROCHEMENT</text><rect x='35' y='118' width='105' height='22' fill='#fecaca' stroke='#b91c1c'/><rect x='200' y='118' width='105' height='22' fill='#fecaca' stroke='#b91c1c'/><line x1='75' y1='151' x2='130' y2='151' stroke='#b91c1c' stroke-width='2'/><polygon points='125,146 135,151 125,156' fill='#b91c1c'/><line x1='265' y1='151' x2='210' y2='151' stroke='#b91c1c' stroke-width='2'/><polygon points='215,146 205,151 215,156' fill='#b91c1c'/><text x='170' y='192' font-size='13' font-weight='bold' fill='#374151' text-anchor='middle'>GLISSEMENT</text><rect x='65' y='205' width='210' height='12' fill='#d1fae5' stroke='#15803d'/><rect x='65' y='219' width='210' height='12' fill='#bbf7d0' stroke='#15803d'/><line x1='115' y1='211' x2='220' y2='211' stroke='#166534' stroke-width='2'/><polygon points='215,207 225,211 215,215' fill='#166534'/><line x1='225' y1='225' x2='120' y2='225' stroke='#166534' stroke-width='2'/><polygon points='125,221 115,225 125,229' fill='#166534'/></svg>",
            legende: "Les flèches montrent trois mouvements possibles des plaques les unes par rapport aux autres. Schéma simplifié."
          },
          {
            type: "remarque",
            titre: "Aux limites, mais pas seulement",
            texte: "Beaucoup de séismes et de volcans se trouvent près des limites des plaques. Il peut cependant aussi y en avoir à l'intérieur d'une plaque."
          }
        ]
      },

      {
        id: "svt5-plaques-ecartement",
        titre: "Quand les plaques s'écartent",
        blocs: [
          {
            type: "texte",
            titre: "Dans les océans",
            texte: "Au fond de certains océans se trouvent de longues chaînes de reliefs appelées dorsales océaniques. À ces endroits, deux plaques s'écartent lentement."
          },
          {
            type: "definition",
            titre: "Une dorsale océanique",
            texte: "Une dorsale océanique est une longue chaîne de reliefs sous-marins située là où des plaques s'écartent. Du magma peut y remonter et former de nouvelles roches en refroidissant."
          },
          {
            type: "exemple",
            titre: "L'océan Atlantique",
            texte: "La dorsale médio-atlantique traverse une partie de l'océan Atlantique. De nouvelles roches se forment le long de cette dorsale tandis que les plaques s'écartent."
          },
          {
            type: "remarque",
            titre: "Sur les continents aussi",
            texte: "Un écartement peut aussi commencer dans un continent. Il peut alors former une longue zone de fractures et d'affaissement appelée rift."
          }
        ]
      },

      {
        id: "svt5-plaques-rapprochement",
        titre: "Quand les plaques se rapprochent",
        blocs: [
          {
            type: "texte",
            titre: "Deux situations possibles",
            texte: "Lorsque deux plaques se rapprochent, leurs bords peuvent se déformer. Selon les plaques en présence, l'une peut plonger sous l'autre ou deux régions continentales peuvent entrer en collision."
          },
          {
            type: "definition",
            titre: "La subduction",
            texte: "La subduction est le plongement d'une plaque sous une autre. Elle peut être accompagnée de séismes et de volcanisme."
          },
          {
            type: "definition",
            titre: "La collision continentale",
            texte: "Une collision continentale se produit lorsque deux régions continentales portées par des plaques qui se rapprochent entrent en contact. Les roches se déforment et peuvent former des montagnes."
          },
          {
            type: "exemple",
            titre: "L'Himalaya",
            texte: "L'Himalaya est une grande chaîne de montagnes liée à la collision entre la plaque indienne et la plaque eurasienne. Leur rapprochement se poursuit très lentement."
          },
          {
            type: "remarque",
            titre: "Un relief se forme lentement",
            texte: "Une chaîne de montagnes se forme et se transforme sur de très longues durées. L'érosion par l'eau, le vent et d'autres phénomènes modifie aussi ses reliefs."
          }
        ]
      },

      {
        id: "svt5-plaques-montagnes-formation",
        titre: "Comment des montagnes peuvent-elles se former ?",
        blocs: [
          {
            type: "texte",
            titre: "Des roches comprimées",
            texte: "Lors d'un rapprochement de plaques, des roches peuvent être comprimées. Elles se plissent, se cassent ou se déplacent. La région peut alors s'épaissir et se soulever progressivement."
          },
          {
            type: "schema",
            titre: "Une collision simplifiée",
            svg: "<svg viewBox='0 0 340 210' xmlns='http://www.w3.org/2000/svg'><text x='170' y='22' font-size='12' fill='#374151' text-anchor='middle'>Deux régions continentales se rapprochent</text><rect x='20' y='45' width='110' height='30' fill='#fde68a' stroke='#a16207' stroke-width='2'/><rect x='210' y='45' width='110' height='30' fill='#fde68a' stroke='#a16207' stroke-width='2'/><line x1='75' y1='90' x2='125' y2='90' stroke='#b45309' stroke-width='2'/><polygon points='120,85 130,90 120,95' fill='#b45309'/><line x1='265' y1='90' x2='215' y2='90' stroke='#b45309' stroke-width='2'/><polygon points='220,85 210,90 220,95' fill='#b45309'/><text x='170' y='121' font-size='11' fill='#6b7280' text-anchor='middle'>Compression et déformation des roches</text><path d='M20 180 L95 180 L120 155 L140 168 L170 135 L198 165 L220 150 L245 180 L320 180 L320 195 L20 195 Z' fill='#fde68a' stroke='#a16207' stroke-width='2'/><text x='170' y='205' font-size='10' fill='#6b7280' text-anchor='middle'>Soulèvement possible : schéma non à l'échelle</text></svg>",
            legende: "Le rapprochement peut comprimer et déformer les roches. Une chaîne de montagnes peut se former progressivement."
          },
          {
            type: "remarque",
            titre: "Toutes les montagnes ne se forment pas ainsi",
            texte: "Certaines montagnes sont des volcans construits par l'accumulation de matériaux volcaniques. Une collision n'est donc pas la seule façon de former un relief montagneux."
          }
        ]
      },

      {
        id: "svt5-plaques-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. La partie externe rigide de la Terre est découpée en plaques.\n2. Les plaques se déplacent très lentement.\n3. Elles peuvent s'écarter, se rapprocher ou glisser l'une contre l'autre.\n4. Ces mouvements sont liés à de nombreux séismes et volcans.\n5. Le rapprochement de plaques peut déformer et soulever des roches, contribuant à former des montagnes."
          },
          {
            type: "methode",
            titre: "Pour reconnaître le mouvement",
            texte: "Observe le sens des flèches :\n- si elles s'éloignent, les plaques s'écartent ;\n- si elles se dirigent l'une vers l'autre, elles se rapprochent ;\n- si elles sont parallèles et de sens opposés le long d'une limite, les plaques glissent l'une contre l'autre."
          },
          {
            type: "remarque",
            titre: "Dans le prochain chapitre",
            texte: "Nous découvrirons les grandes parties de l'intérieur de la Terre."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'une plaque terrestre ?",
        correction: "C'est une grande portion rigide de la partie externe de la Terre qui se déplace très lentement par rapport aux autres plaques."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Les plaques terrestres se déplacent-elles rapidement ?",
        correction: "Non. Elles se déplacent très lentement, généralement de quelques centimètres par an."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite les trois mouvements possibles des plaques les unes par rapport aux autres.",
        correction: "Elles peuvent s'écarter, se rapprocher ou glisser l'une contre l'autre."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce qu'une dorsale océanique ?",
        correction: "C'est une longue chaîne de reliefs sous-marins située là où des plaques s'écartent. Du magma peut y remonter et former de nouvelles roches en refroidissant."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce que la subduction ?",
        correction: "C'est le plongement d'une plaque sous une autre."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite une chaîne de montagnes liée à une collision continentale.",
        correction: "L'Himalaya est lié à la collision entre la plaque indienne et la plaque eurasienne."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Que peut-il se passer lorsque deux plaques s'écartent au niveau d'une dorsale océanique ?",
        correction: "Du magma peut remonter. En refroidissant, il forme de nouvelles roches au fond de l'océan."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Les plaques se déplacent de plusieurs kilomètres par jour.\n2. Beaucoup de séismes se produisent près des limites des plaques.\n3. Toutes les montagnes sont des volcans.",
        correction: "1. Faux : les plaques se déplacent très lentement, généralement de quelques centimètres par an.\n2. Vrai.\n3. Faux : certaines montagnes sont liées à la déformation et au soulèvement de roches lors d'une collision."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pourquoi les limites des plaques ne correspondent-elles pas toujours aux bords des continents ?",
        correction: "Une plaque peut porter une partie d'un continent, une partie d'un océan ou les deux. Les bords des continents ne sont donc pas nécessairement des limites de plaques."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique comment le rapprochement de deux régions continentales peut contribuer à former une chaîne de montagnes.",
        correction: "Le rapprochement comprime les roches. Elles peuvent se plisser, se casser et se déplacer. La région s'épaissit et se soulève progressivement, ce qui peut former une chaîne de montagnes."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une élève dit : « Tous les volcans et tous les séismes se trouvent exactement aux limites des plaques. » Sa phrase est-elle correcte ?",
        correction: "Non. Beaucoup de volcans et de séismes se trouvent près des limites des plaques, mais certains peuvent aussi se produire à l'intérieur d'une plaque."
      }
    ]
  }
]);
