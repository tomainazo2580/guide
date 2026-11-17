// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 11 : Les relations entre les etres vivants

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-relations-etres-vivants",
    titre: "Chapitre 11 : Les relations entre les êtres vivants",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-relations-introduction",
        titre: "Les êtres vivants sont liés",
        blocs: [
          {
            type: "texte",
            titre: "Dans une rizière",
            texte: "Dans une rizière, des insectes peuvent se nourrir de plantes et des grenouilles peuvent manger des insectes.\nLes êtres vivants d'un milieu ne vivent donc pas isolés les uns des autres."
          },
          {
            type: "texte",
            titre: "Différentes relations",
            texte: "Les êtres vivants peuvent avoir des relations pour se nourrir, se protéger ou se reproduire. Certaines relations sont favorables aux deux êtres vivants ; d'autres profitent à l'un et nuisent à l'autre."
          },
          {
            type: "remarque",
            titre: "Des relations changeantes",
            texte: "Un même être vivant peut avoir plusieurs relations avec d'autres espèces au cours de sa vie."
          }
        ]
      },

      {
        id: "svt5-relations-alimentation",
        titre: "Qui mange quoi ?",
        blocs: [
          {
            type: "definition",
            titre: "Le régime alimentaire",
            texte: "Le régime alimentaire d'un animal correspond à l'ensemble des aliments qu'il consomme habituellement."
          },
          {
            type: "tableau",
            titre: "Quelques régimes alimentaires",
            entetes: ["Régime", "Aliments consommés", "Exemple"],
            lignes: [
              [
                "Herbivore",
                "Principalement des végétaux",
                "Le zébu mange de l'herbe."
              ],
              [
                "Carnivore",
                "D'autres animaux",
                "Une grenouille peut manger des insectes."
              ],
              [
                "Omnivore",
                "Des aliments d'origine végétale et animale",
                "La poule peut manger des graines et de petits animaux."
              ]
            ]
          },
          {
            type: "definition",
            titre: "Prédateur et proie",
            texte: "Un prédateur est un animal qui capture et mange un autre animal. L'animal capturé est appelé la proie."
          },
          {
            type: "exemple",
            titre: "La grenouille et l'insecte",
            texte: "Lorsqu'une grenouille capture et mange un insecte, la grenouille est le prédateur et l'insecte est la proie."
          }
        ]
      },

      {
        id: "svt5-relations-chaine",
        titre: "La chaîne alimentaire",
        blocs: [
          {
            type: "definition",
            titre: "Une chaîne alimentaire",
            texte: "Une chaîne alimentaire est une suite d'êtres vivants dans laquelle chacun est mangé par le suivant."
          },
          {
            type: "regle",
            titre: "Le sens de la flèche",
            texte: "Dans une chaîne alimentaire, la flèche signifie « est mangé par ».\nElle va de l'être vivant mangé vers celui qui le mange."
          },
          {
            type: "exemple",
            titre: "Un exemple dans une rizière",
            texte: "Plant de riz → criquet → grenouille → serpent.\nLe plant de riz est mangé par le criquet ; le criquet peut être mangé par la grenouille ; la grenouille peut être mangée par le serpent."
          },
          {
            type: "schema",
            titre: "Une chaîne alimentaire simplifiée",
            svg: "<svg viewBox='0 0 340 195' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='28' width='70' height='48' rx='8' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><text x='45' y='48' font-size='11' fill='#14532d' text-anchor='middle'>Plant</text><text x='45' y='64' font-size='11' fill='#14532d' text-anchor='middle'>de riz</text><line x1='80' y1='52' x2='93' y2='52' stroke='#6b7280' stroke-width='2'/><polygon points='90,47 98,52 90,57' fill='#6b7280'/><rect x='99' y='28' width='65' height='48' rx='8' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='131' y='57' font-size='11' fill='#78350f' text-anchor='middle'>Criquet</text><line x1='164' y1='52' x2='176' y2='52' stroke='#6b7280' stroke-width='2'/><polygon points='173,47 181,52 173,57' fill='#6b7280'/><rect x='182' y='28' width='70' height='48' rx='8' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='217' y='57' font-size='11' fill='#1e3a8a' text-anchor='middle'>Grenouille</text><line x1='252' y1='52' x2='264' y2='52' stroke='#6b7280' stroke-width='2'/><polygon points='261,47 269,52 261,57' fill='#6b7280'/><rect x='270' y='28' width='60' height='48' rx='8' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='300' y='57' font-size='11' fill='#7f1d1d' text-anchor='middle'>Serpent</text><text x='170' y='108' font-size='12' fill='#374151' text-anchor='middle'>La flèche signifie « est mangé par »</text><text x='170' y='134' font-size='11' fill='#6b7280' text-anchor='middle'>Exemple simplifié : les espèces et leurs</text><text x='170' y='151' font-size='11' fill='#6b7280' text-anchor='middle'>relations dépendent du milieu observé.</text><text x='170' y='180' font-size='10' fill='#6b7280' text-anchor='middle'>Schéma non à l'échelle</text></svg>",
            legende: "Le plant de riz est mangé par le criquet, qui peut être mangé par la grenouille, elle-même pouvant être mangée par le serpent."
          },
          {
            type: "remarque",
            titre: "Des chaînes différentes",
            texte: "Cette chaîne est un exemple. Pour construire une chaîne alimentaire, il faut vérifier que chaque être vivant peut réellement manger celui qui le précède."
          }
        ]
      },

      {
        id: "svt5-relations-producteurs",
        titre: "Producteurs, consommateurs et décomposeurs",
        blocs: [
          {
            type: "definition",
            titre: "Les producteurs",
            texte: "Les plantes vertes fabriquent leur matière à partir d'eau, de sels minéraux et de dioxyde de carbone, grâce à la lumière. On les appelle des producteurs."
          },
          {
            type: "definition",
            titre: "Les consommateurs",
            texte: "Les consommateurs sont des êtres vivants qui se nourrissent d'autres êtres vivants ou de leur matière. Les animaux d'une chaîne alimentaire sont des consommateurs."
          },
          {
            type: "definition",
            titre: "Les décomposeurs",
            texte: "Les décomposeurs, comme certains champignons et bactéries, transforment les restes d'êtres vivants. Ils participent au retour de substances minérales dans le milieu."
          },
          {
            type: "exemple",
            titre: "Dans la rizière",
            texte: "Le plant de riz est un producteur. Le criquet et la grenouille sont des consommateurs. Des champignons et des bactéries du sol participent à la décomposition des restes."
          },
          {
            type: "remarque",
            titre: "Le rôle des décomposeurs",
            texte: "Les décomposeurs agissent sur les restes provenant de différents êtres vivants. Ils ne sont donc pas simplement placés à la fin de toutes les chaînes alimentaires."
          }
        ]
      },

      {
        id: "svt5-relations-reseau",
        titre: "Plusieurs chaînes forment un réseau",
        blocs: [
          {
            type: "texte",
            titre: "Dans la nature",
            texte: "Un animal peut manger plusieurs sortes d'aliments et peut aussi être mangé par plusieurs prédateurs. Les chaînes alimentaires d'un milieu sont donc souvent reliées entre elles."
          },
          {
            type: "definition",
            titre: "Un réseau alimentaire",
            texte: "Un réseau alimentaire est un ensemble de chaînes alimentaires reliées entre elles dans un même milieu."
          },
          {
            type: "exemple",
            titre: "Deux chaînes liées",
            texte: "Plant de riz → criquet → grenouille.\nPlant de riz → criquet → oiseau insectivore.\nLe criquet relie ici les deux chaînes : il peut être mangé par la grenouille ou par un oiseau insectivore."
          },
          {
            type: "remarque",
            titre: "Un changement peut avoir des conséquences",
            texte: "Si le nombre d'une espèce change fortement, d'autres espèces du réseau peuvent être touchées. Les conséquences dépendent de l'ensemble du milieu."
          }
        ]
      },

      {
        id: "svt5-relations-autres",
        titre: "D'autres relations entre êtres vivants",
        blocs: [
          {
            type: "tableau",
            titre: "Quelques exemples",
            entetes: ["Relation", "Explication", "Exemple"],
            lignes: [
              [
                "Prédation",
                "Un animal capture et mange une proie.",
                "Une grenouille mange un insecte."
              ],
              [
                "Compétition",
                "Des êtres vivants utilisent une même ressource disponible en quantité limitée.",
                "Deux plantes voisines peuvent manquer de lumière ou d'eau."
              ],
              [
                "Parasitisme",
                "Un parasite vit aux dépens d'un autre être vivant, appelé hôte, et peut lui nuire.",
                "Une tique se nourrit du sang d'un animal."
              ],
              [
                "Relation bénéfique aux deux",
                "Les deux êtres vivants tirent un avantage de leur relation.",
                "Une abeille recueille du nectar et peut transporter du pollen entre les fleurs."
              ]
            ]
          },
          {
            type: "remarque",
            titre: "Une fleur et une abeille",
            texte: "En visitant les fleurs, l'abeille peut transporter du pollen. Cela aide certaines plantes à se reproduire. L'abeille, elle, peut trouver de la nourriture."
          }
        ]
      },

      {
        id: "svt5-relations-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. Les êtres vivants d'un milieu ont des relations entre eux.\n2. Dans une chaîne alimentaire, la flèche va de l'être vivant mangé vers celui qui le mange.\n3. Les plantes vertes sont des producteurs ; les animaux sont des consommateurs.\n4. Des champignons et des bactéries participent à la décomposition des restes.\n5. Plusieurs chaînes reliées forment un réseau alimentaire."
          },
          {
            type: "methode",
            titre: "Pour construire une chaîne alimentaire",
            texte: "1. Choisis des êtres vivants d'un même milieu.\n2. Vérifie qui peut manger qui.\n3. Place les êtres vivants dans l'ordre.\n4. Trace chaque flèche de l'être vivant mangé vers celui qui le mange.\n5. Lis chaque flèche : « est mangé par »."
          },
          {
            type: "remarque",
            titre: "Dans le prochain chapitre",
            texte: "Nous découvrirons la biodiversité et les moyens de la protéger."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'une chaîne alimentaire ?",
        correction: "C'est une suite d'êtres vivants dans laquelle chacun est mangé par le suivant."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans une chaîne alimentaire, que signifie la flèche ?",
        correction: "Elle signifie « est mangé par ». Elle va de l'être vivant mangé vers celui qui le mange."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est le régime alimentaire d'un animal qui mange principalement des végétaux ?",
        correction: "Il est herbivore."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans la chaîne plant de riz → criquet → grenouille, qui mange le criquet ?",
        correction: "La grenouille mange le criquet."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce qu'un prédateur ? Qu'est-ce qu'une proie ?",
        correction: "Un prédateur est un animal qui capture et mange un autre animal. L'animal capturé est la proie."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite deux groupes d'êtres vivants qui peuvent participer à la décomposition des restes.",
        correction: "Certains champignons et certaines bactéries participent à la décomposition des restes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Remets dans l'ordre et ajoute des flèches : grenouille, plant de riz, criquet. La grenouille mange le criquet et le criquet mange le plant de riz.",
        correction: "Plant de riz → criquet → grenouille. Chaque flèche signifie « est mangé par »."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Qu'est-ce qu'un réseau alimentaire ?",
        correction: "C'est un ensemble de chaînes alimentaires reliées entre elles dans un même milieu."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Le plant de riz est un producteur.\n2. La flèche d'une chaîne va de l'animal qui mange vers l'aliment mangé.\n3. Les décomposeurs peuvent agir sur des restes de différents êtres vivants.",
        correction: "1. Vrai.\n2. Faux : la flèche va de l'être vivant mangé vers celui qui le mange.\n3. Vrai."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une abeille visite une fleur pour recueillir du nectar et transporte du pollen vers d'autres fleurs. Explique comment cette relation peut être utile aux deux.",
        correction: "L'abeille trouve de la nourriture grâce au nectar. En transportant du pollen entre les fleurs, elle peut aider la plante à se reproduire."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un milieu, des criquets mangent du riz. Des grenouilles et certains oiseaux mangent les criquets. Écris deux chaînes alimentaires et indique ce qui les relie.",
        correction: "Plant de riz → criquet → grenouille.\nPlant de riz → criquet → oiseau insectivore.\nLe plant de riz et le criquet appartiennent aux deux chaînes. Le criquet peut être mangé par la grenouille ou par l'oiseau."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique pourquoi la disparition d'un grand nombre de criquets pourrait avoir des conséquences sur les grenouilles d'une rizière.",
        correction: "Les criquets peuvent servir de nourriture aux grenouilles. S'ils deviennent beaucoup moins nombreux, les grenouilles peuvent avoir moins de nourriture. La conséquence dépend aussi des autres aliments disponibles et des conditions du milieu."
      }
    ]
  }
]);
