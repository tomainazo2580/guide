// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 4 : Les appareils reproducteurs
// et les cellules reproductrices

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-appareils-reproducteurs",
    titre: "Chapitre 4 : Les appareils reproducteurs et les cellules reproductrices",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-reproduction-introduction",
        titre: "Les organes de la reproduction",
        blocs: [
          {
            type: "texte",
            titre: "La reproduction humaine",
            texte: "La reproduction humaine permet la naissance d'un nouvel être humain.\nElle fait intervenir deux types de cellules reproductrices : le spermatozoïde et l'ovule."
          },
          {
            type: "definition",
            titre: "L'appareil reproducteur",
            texte: "L'appareil reproducteur est l'ensemble des organes qui interviennent dans la reproduction."
          },
          {
            type: "remarque",
            titre: "Un vocabulaire scientifique",
            texte: "Les organes reproducteurs sont des parties du corps humain. Il est important de connaître leur nom et leur rôle, tout comme pour les organes digestifs."
          }
        ]
      },

      {
        id: "svt5-reproduction-masculin",
        titre: "L'appareil reproducteur masculin",
        blocs: [
          {
            type: "texte",
            titre: "Les principaux organes",
            texte: "L'appareil reproducteur masculin comprend notamment les testicules, les canaux déférents, la prostate, les vésicules séminales et le pénis."
          },
          {
            type: "tableau",
            titre: "Quelques organes et leurs rôles",
            entetes: ["Organe", "Rôle"],
            lignes: [
              [
                "Testicules",
                "Ils produisent les spermatozoïdes à partir de la puberté."
              ],
              [
                "Canaux déférents",
                "Ils transportent les spermatozoïdes."
              ],
              [
                "Vésicules séminales et prostate",
                "Elles produisent des liquides qui entrent dans la composition du sperme."
              ],
              [
                "Urètre",
                "Ce canal permet la sortie du sperme ou de l'urine, mais pas en même temps."
              ],
              [
                "Pénis",
                "Il contient l'urètre, par lequel le sperme peut être évacué."
              ]
            ]
          },
          {
            type: "definition",
            titre: "Le sperme",
            texte: "Le sperme est un liquide qui contient notamment des spermatozoïdes et des liquides produits par différentes glandes."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Le spermatozoïde est une cellule reproductrice.\nLe sperme est le liquide qui transporte notamment les spermatozoïdes."
          }
        ]
      },

      {
        id: "svt5-reproduction-feminin",
        titre: "L'appareil reproducteur féminin",
        blocs: [
          {
            type: "texte",
            titre: "Les principaux organes",
            texte: "L'appareil reproducteur féminin comprend notamment les ovaires, les trompes, l'utérus, le vagin et la vulve."
          },
          {
            type: "tableau",
            titre: "Quelques organes et leurs rôles",
            entetes: ["Organe", "Rôle"],
            lignes: [
              [
                "Ovaires",
                "Ils contiennent des cellules reproductrices qui peuvent mûrir à partir de la puberté."
              ],
              [
                "Trompes",
                "Elles relient la région des ovaires à l'utérus. La fécondation a généralement lieu dans une trompe."
              ],
              [
                "Utérus",
                "C'est un organe dans lequel un embryon peut se développer pendant une grossesse."
              ],
              [
                "Vagin",
                "C'est un canal qui relie l'utérus à l'extérieur du corps."
              ],
              [
                "Vulve",
                "C'est l'ensemble des parties externes de l'appareil reproducteur féminin."
              ]
            ]
          },
          {
            type: "definition",
            titre: "L'ovulation",
            texte: "L'ovulation est la libération d'une cellule reproductrice par un ovaire.\nElle se produit généralement au cours du cycle menstruel, à partir de la puberté."
          },
          {
            type: "remarque",
            titre: "Des mots différents",
            texte: "La vulve désigne les parties externes. Le vagin est un canal situé à l'intérieur du corps.\nCe ne sont donc pas deux mots pour désigner la même chose."
          }
        ]
      },

      {
        id: "svt5-reproduction-cellules",
        titre: "Les cellules reproductrices",
        blocs: [
          {
            type: "definition",
            titre: "Les gamètes",
            texte: "Les cellules reproductrices sont aussi appelées gamètes.\nChez l'être humain, les deux types de gamètes sont le spermatozoïde et la cellule reproductrice féminine, souvent appelée ovule."
          },
          {
            type: "tableau",
            titre: "Spermatozoïde et ovule",
            entetes: ["Caractéristique", "Spermatozoïde", "Ovule"],
            lignes: [
              [
                "Organe associé",
                "Produit par les testicules",
                "Libéré par un ovaire"
              ],
              [
                "Déplacement",
                "Il peut se déplacer grâce à son flagelle.",
                "Il ne possède pas de flagelle. Il est entraîné dans la trompe."
              ],
              [
                "Taille",
                "Très petit",
                "Plus grand que le spermatozoïde, mais très petit lui aussi"
              ]
            ]
          },
          {
            type: "definition",
            titre: "Le flagelle",
            texte: "Le flagelle est la partie allongée du spermatozoïde. Ses mouvements permettent au spermatozoïde de se déplacer."
          },
          {
            type: "schema",
            titre: "Deux cellules reproductrices",
            svg: "<svg viewBox='0 0 340 190' xmlns='http://www.w3.org/2000/svg'><circle cx='83' cy='79' r='37' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><circle cx='83' cy='79' r='13' fill='#f9a8d4' stroke='#be185d' stroke-width='1'/><text x='83' y='143' font-size='13' fill='#831843' text-anchor='middle'>Ovule</text><ellipse cx='208' cy='78' rx='17' ry='11' fill='#bfdbfe' stroke='#1d4ed8' stroke-width='2'/><path d='M225 78 C245 62, 260 96, 281 78 C293 68, 304 72, 315 78' fill='none' stroke='#1d4ed8' stroke-width='3'/><text x='252' y='143' font-size='13' fill='#1e3a8a' text-anchor='middle'>Spermatozoïde</text><line x1='270' y1='88' x2='270' y2='109' stroke='#6b7280' stroke-width='1'/><text x='270' y='123' font-size='11' fill='#374151' text-anchor='middle'>Flagelle</text><text x='170' y='174' font-size='11' fill='#6b7280' text-anchor='middle'>Schéma simplifié, cellules non à la même échelle</text></svg>",
            legende: "Le spermatozoïde possède un flagelle. Les deux cellules ne sont pas représentées à la même échelle."
          },
          {
            type: "remarque",
            titre: "Une précision de vocabulaire",
            texte: "Pour simplifier, on parle souvent d'« ovule » dans les leçons. Au moment de l'ovulation chez l'être humain, la cellule libérée par l'ovaire est plus précisément appelée ovocyte."
          }
        ]
      },

      {
        id: "svt5-reproduction-rencontre",
        titre: "La rencontre des cellules reproductrices",
        blocs: [
          {
            type: "definition",
            titre: "La fécondation",
            texte: "La fécondation est la rencontre et la fusion d'un spermatozoïde et d'une cellule reproductrice féminine.\nElle forme une cellule à l'origine d'un nouvel être humain."
          },
          {
            type: "texte",
            titre: "Où a-t-elle généralement lieu ?",
            texte: "Chez l'être humain, la fécondation a généralement lieu dans une trompe.\nLa suite du développement et la grossesse seront étudiées dans un prochain chapitre."
          },
          {
            type: "remarque",
            titre: "Le respect du corps",
            texte: "Chaque personne a droit au respect de son corps et de son intimité.\nSi une situation te met mal à l'aise ou si tu as une question, tu peux en parler à un adulte de confiance ou à un professionnel de santé."
          }
        ]
      },

      {
        id: "svt5-reproduction-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. Les testicules produisent les spermatozoïdes à partir de la puberté.\n2. Un ovaire peut libérer une cellule reproductrice lors de l'ovulation.\n3. Le spermatozoïde et la cellule reproductrice féminine sont des gamètes.\n4. La fécondation est leur fusion. Elle a généralement lieu dans une trompe."
          },
          {
            type: "methode",
            titre: "Pour apprendre les rôles",
            texte: "Associe chaque mot à son rôle :\n- testicule → production des spermatozoïdes ;\n- ovaire → libération d'une cellule reproductrice ;\n- trompe → lieu habituel de la fécondation ;\n- utérus → lieu possible du développement d'un embryon."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Comment appelle-t-on les cellules reproductrices ?",
        correction: "On les appelle aussi des gamètes."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quels organes produisent les spermatozoïdes ?",
        correction: "Ce sont les testicules."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel organe peut libérer une cellule reproductrice féminine ?",
        correction: "Un ovaire peut libérer une cellule reproductrice féminine lors de l'ovulation."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce que l'ovulation ?",
        correction: "L'ovulation est la libération d'une cellule reproductrice par un ovaire."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "À quoi sert le flagelle du spermatozoïde ?",
        correction: "Les mouvements du flagelle permettent au spermatozoïde de se déplacer."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quelle est la différence entre le sperme et le spermatozoïde ?",
        correction: "Le spermatozoïde est une cellule reproductrice. Le sperme est un liquide qui contient notamment des spermatozoïdes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Associe chaque organe à son rôle :\n1. Testicule\n2. Trompe\n3. Utérus\n\nA. Lieu où un embryon peut se développer\nB. Produit des spermatozoïdes\nC. Lieu habituel de la fécondation",
        correction: "1 → B : le testicule produit des spermatozoïdes.\n2 → C : la fécondation a généralement lieu dans une trompe.\n3 → A : un embryon peut se développer dans l'utérus."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. La vulve et le vagin désignent exactement la même chose.\n2. Le spermatozoïde possède un flagelle.\n3. La fécondation a généralement lieu dans une trompe.",
        correction: "1. Faux : la vulve désigne les parties externes, tandis que le vagin est un canal situé à l'intérieur du corps.\n2. Vrai.\n3. Vrai."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Qu'est-ce que la fécondation ?",
        correction: "C'est la rencontre et la fusion d'un spermatozoïde et d'une cellule reproductrice féminine. Elle forme une cellule à l'origine d'un nouvel être humain."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Liva dit : « Un spermatozoïde et un ovule sont deux organes. » Explique son erreur.",
        correction: "Le spermatozoïde et l'ovule sont des cellules reproductrices, ou gamètes, et non des organes. Les testicules et les ovaires sont des organes de l'appareil reproducteur."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique le rôle des testicules, des ovaires et des trompes dans la reproduction.",
        correction: "Les testicules produisent les spermatozoïdes. Un ovaire peut libérer une cellule reproductrice lors de l'ovulation. La fécondation, c'est-à-dire la fusion des deux cellules reproductrices, a généralement lieu dans une trompe."
      }
    ]
  }
]);
