// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 9 : La prevention et la lutte contre les infections

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-prevention-infections",
    titre: "Chapitre 9 : La prévention et la lutte contre les infections",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-prevention-interet",
        titre: "Pourquoi prévenir les infections ?",
        blocs: [
          {
            type: "texte",
            titre: "Un rappel",
            texte: "Certains agents infectieux peuvent entrer dans le corps et s'y multiplier. Ils peuvent alors provoquer une maladie.\nPour réduire ce risque, on peut agir avant la contamination et, si nécessaire, se faire soigner."
          },
          {
            type: "definition",
            titre: "La prévention",
            texte: "La prévention est l'ensemble des actions qui permettent de réduire le risque d'apparition ou de transmission d'une maladie."
          },
          {
            type: "exemple",
            titre: "Des gestes de prévention",
            texte: "Se laver les mains avec de l'eau et du savon, boire de l'eau potable, utiliser une moustiquaire imprégnée et se faire vacciner sont des exemples de prévention."
          }
        ]
      },

      {
        id: "svt5-prevention-hygiene",
        titre: "L'hygiène au quotidien",
        blocs: [
          {
            type: "tableau",
            titre: "Des gestes utiles",
            entetes: ["Geste", "Pourquoi ?"],
            lignes: [
              [
                "Se laver les mains avec de l'eau et du savon",
                "Cela aide à enlever les saletés et de nombreux microbes."
              ],
              [
                "Boire de l'eau potable",
                "Cela réduit le risque d'avaler des agents infectieux présents dans l'eau."
              ],
              [
                "Laver et bien préparer les aliments",
                "Cela aide à réduire les risques liés à certains microbes."
              ],
              [
                "Utiliser des latrines et garder les alentours propres",
                "Cela limite la contamination de l'environnement."
              ],
              [
                "Aérer les pièces",
                "Cela aide à réduire l'accumulation de particules infectieuses dans l'air."
              ]
            ]
          },
          {
            type: "methode",
            titre: "Quand se laver les mains ?",
            texte: "Il est particulièrement important de se laver les mains :\n- après être allé aux toilettes ;\n- avant de préparer ou de manger un repas ;\n- après avoir nettoyé une personne ou un objet souillé ;\n- après avoir toussé ou éternué dans ses mains."
          },
          {
            type: "exemple",
            titre: "Toux et éternuements",
            texte: "Pour réduire la transmission de certains microbes, on peut tousser ou éternuer dans son coude ou dans un mouchoir, puis se laver les mains."
          },
          {
            type: "remarque",
            titre: "Si l'eau n'est pas potable",
            texte: "Il faut la traiter avant de la boire. Par exemple, on peut la porter à ébullition puis la laisser refroidir dans un récipient propre et couvert. Un professionnel de santé peut aussi conseiller une méthode de traitement adaptée."
          }
        ]
      },

      {
        id: "svt5-prevention-asepsie",
        titre: "L'asepsie et l'antisepsie",
        blocs: [
          {
            type: "definition",
            titre: "L'asepsie",
            texte: "L'asepsie est l'ensemble des mesures prises pour éviter qu'un milieu ou une plaie soit contaminé par des microbes."
          },
          {
            type: "exemple",
            titre: "Un exemple d'asepsie",
            texte: "Un soignant se lave les mains et utilise du matériel stérile avant certains soins. Cela aide à éviter l'entrée de microbes."
          },
          {
            type: "definition",
            titre: "L'antisepsie",
            texte: "L'antisepsie consiste à utiliser un produit adapté, appelé antiseptique, pour détruire ou réduire les microbes présents sur la peau ou sur certains tissus vivants."
          },
          {
            type: "exemple",
            titre: "Une petite plaie",
            texte: "Pour une petite plaie, on se lave d'abord les mains, puis on nettoie la plaie à l'eau potable et au savon, avant de la rincer. Un professionnel de santé peut conseiller un antiseptique adapté si nécessaire."
          },
          {
            type: "remarque",
            titre: "Attention aux produits",
            texte: "Il ne faut pas mettre d'acide, d'eau de Javel ou d'autres produits ménagers sur une plaie. Pour une plaie profonde, très sale, due à une morsure ou qui semble infectée, il faut consulter un professionnel de santé."
          }
        ]
      },

      {
        id: "svt5-prevention-vaccination",
        titre: "La vaccination",
        blocs: [
          {
            type: "texte",
            titre: "Les défenses du corps",
            texte: "Notre organisme possède des défenses contre les agents infectieux. Après certaines rencontres avec un microbe ou avec un vaccin, il peut garder une mémoire qui l'aide à réagir plus rapidement plus tard."
          },
          {
            type: "definition",
            titre: "Un vaccin",
            texte: "Un vaccin prépare les défenses de l'organisme à reconnaître un agent infectieux. Si la personne rencontre ensuite cet agent, son corps peut réagir plus efficacement."
          },
          {
            type: "texte",
            titre: "Une protection individuelle et collective",
            texte: "La vaccination réduit le risque de certaines maladies graves. Pour certaines infections, vacciner une grande partie de la population limite aussi leur circulation et aide à protéger les personnes les plus fragiles."
          },
          {
            type: "remarque",
            titre: "Les rappels",
            texte: "Certains vaccins nécessitent plusieurs doses ou des rappels. Un professionnel de santé peut vérifier le carnet de vaccination et conseiller les vaccins adaptés."
          },
          {
            type: "schema",
            titre: "Le principe de la vaccination",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='10' width='270' height='46' rx='9' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='170' y='29' font-size='13' font-weight='bold' fill='#1e3a8a' text-anchor='middle'>VACCINATION</text><text x='170' y='47' font-size='11' fill='#1e3a8a' text-anchor='middle'>Les défenses apprennent à reconnaître l'agent</text><line x1='170' y1='56' x2='170' y2='73' stroke='#6b7280' stroke-width='2'/><polygon points='165,69 170,78 175,69' fill='#6b7280'/><rect x='35' y='79' width='270' height='46' rx='9' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><text x='170' y='98' font-size='13' font-weight='bold' fill='#14532d' text-anchor='middle'>MÉMOIRE IMMUNITAIRE</text><text x='170' y='116' font-size='11' fill='#14532d' text-anchor='middle'>Le corps garde une mémoire de la rencontre</text><line x1='170' y1='125' x2='170' y2='142' stroke='#6b7280' stroke-width='2'/><polygon points='165,138 170,147 175,138' fill='#6b7280'/><rect x='35' y='148' width='270' height='50' rx='9' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='170' y='168' font-size='12' fill='#78350f' text-anchor='middle'>Lors d'une rencontre avec le microbe :</text><text x='170' y='186' font-size='12' fill='#78350f' text-anchor='middle'>les défenses peuvent réagir plus efficacement</text><text x='170' y='215' font-size='10' fill='#6b7280' text-anchor='middle'>Schéma simplifié</text></svg>",
            legende: "Le vaccin prépare les défenses du corps avant une rencontre avec l'agent infectieux."
          }
        ]
      },

      {
        id: "svt5-prevention-serum",
        titre: "Le sérum et les traitements",
        blocs: [
          {
            type: "definition",
            titre: "Un sérum contenant des anticorps",
            texte: "Certains sérums apportent à l'organisme des anticorps déjà formés. Ces anticorps peuvent agir rapidement contre un agent infectieux ou sa toxine."
          },
          {
            type: "tableau",
            titre: "Vaccin et sérum : quelle différence ?",
            entetes: ["", "Vaccin", "Sérum contenant des anticorps"],
            lignes: [
              [
                "Action",
                "Il prépare les défenses du corps.",
                "Il apporte des anticorps déjà formés."
              ],
              [
                "Délai",
                "La protection met du temps à se mettre en place.",
                "L'action peut être rapide."
              ],
              [
                "Durée",
                "La protection peut durer longtemps, parfois avec des rappels.",
                "La protection est généralement temporaire."
              ]
            ]
          },
          {
            type: "definition",
            titre: "Les antibiotiques",
            texte: "Les antibiotiques sont des médicaments utilisés contre certaines infections causées par des bactéries.\nIls ne sont pas efficaces contre les virus, comme celui de la grippe."
          },
          {
            type: "regle",
            titre: "Bien utiliser les médicaments",
            texte: "Il ne faut pas prendre d'antibiotiques sans conseil médical. Lorsqu'un professionnel de santé en prescrit, il faut suivre ses instructions et ne pas partager le traitement avec une autre personne."
          },
          {
            type: "remarque",
            titre: "Des traitements différents",
            texte: "Le traitement dépend de la maladie et de sa cause. Par exemple, le paludisme nécessite des médicaments adaptés contre le parasite : les antibiotiques ne remplacent pas ce traitement."
          }
        ]
      },

      {
        id: "svt5-prevention-collective",
        titre: "Se protéger et protéger les autres",
        blocs: [
          {
            type: "texte",
            titre: "Des actions individuelles et collectives",
            texte: "Certaines actions peuvent être faites par chacun : se laver les mains ou dormir sous une moustiquaire.\nD'autres demandent l'action de la communauté : rendre l'eau potable, gérer les déchets et faciliter l'accès aux soins et aux vaccins."
          },
          {
            type: "exemple",
            titre: "Dans une école",
            texte: "Dans une école, disposer d'eau et de savon près des latrines aide les élèves à se laver les mains. Garder les lieux propres et aérés aide aussi à réduire certains risques."
          },
          {
            type: "remarque",
            titre: "Si l'on est malade",
            texte: "En cas de signes inquiétants ou persistants, il faut demander conseil à un professionnel de santé. Suivre ses recommandations aide à se soigner et à limiter la transmission."
          }
        ]
      },

      {
        id: "svt5-prevention-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. L'hygiène aide à réduire la transmission des agents infectieux.\n2. L'asepsie évite la contamination ; l'antisepsie réduit ou détruit des microbes sur des tissus vivants.\n3. Le vaccin prépare les défenses du corps.\n4. Certains sérums apportent des anticorps déjà formés et agissent rapidement, mais temporairement.\n5. Les antibiotiques agissent contre certaines bactéries, pas contre les virus."
          },
          {
            type: "methode",
            titre: "Comment choisir une action ?",
            texte: "Cherche d'abord le risque : eau contaminée, piqûre de moustique, microbes dans l'air ou plaie souillée.\nPuis choisis une action adaptée : eau potable, moustiquaire, aération, lavage des mains ou soin approprié de la plaie."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que la prévention ?",
        correction: "C'est l'ensemble des actions qui réduisent le risque d'apparition ou de transmission d'une maladie."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux moments où il est important de se laver les mains.",
        correction: "Par exemple : après être allé aux toilettes et avant de manger ou de préparer un repas."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel geste aide à réduire les piqûres de moustiques pendant la nuit ?",
        correction: "Dormir sous une moustiquaire imprégnée d'insecticide."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce que l'asepsie ?",
        correction: "C'est l'ensemble des mesures prises pour éviter qu'un milieu ou une plaie soit contaminé par des microbes."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce qu'un antiseptique ?",
        correction: "C'est un produit adapté utilisé pour détruire ou réduire les microbes présents sur la peau ou sur certains tissus vivants."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "À quoi sert un vaccin ?",
        correction: "Il prépare les défenses de l'organisme à reconnaître un agent infectieux et à réagir plus efficacement lors d'une rencontre future."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Quelle est la différence principale entre un vaccin et un sérum contenant des anticorps ?",
        correction: "Le vaccin prépare les défenses du corps et peut donner une protection durable. Le sérum apporte des anticorps déjà formés : son action peut être rapide, mais elle est généralement temporaire."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les antibiotiques guérissent-ils la grippe ? Explique.",
        correction: "Non. La grippe est causée par un virus. Les antibiotiques agissent contre certaines bactéries, pas contre les virus."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. L'asepsie cherche à éviter la contamination.\n2. On peut appliquer de l'eau de Javel sur une plaie.\n3. Certains vaccins nécessitent des rappels.",
        correction: "1. Vrai.\n2. Faux : il ne faut pas appliquer d'eau de Javel sur une plaie.\n3. Vrai."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans une école, plusieurs élèves boivent une eau dont la qualité est douteuse. Propose deux actions pour réduire le risque de maladie.",
        correction: "On peut rendre l'eau potable, par exemple en la portant à ébullition, puis la conserver dans un récipient propre et couvert. On peut aussi demander conseil aux services de santé sur une méthode de traitement adaptée et mettre de l'eau potable à disposition des élèves."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Mamy a une petite plaie. Explique comment elle peut la nettoyer et cite un produit à ne pas utiliser.",
        correction: "Elle peut d'abord se laver les mains, puis nettoyer la plaie avec de l'eau potable et du savon et la rincer. Elle ne doit pas y mettre d'eau de Javel ni d'acide. Si la plaie est profonde, très sale ou semble infectée, elle doit consulter."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique comment une action individuelle et une action collective peuvent aider à prévenir les infections.",
        correction: "Une action individuelle est de se laver les mains avec de l'eau et du savon pour enlever de nombreux microbes. Une action collective est de rendre l'eau potable dans une communauté pour réduire le risque de maladies transmises par l'eau."
      }
    ]
  }
]);
