// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 12 : La biodiversite et sa protection

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-biodiversite",
    titre: "Chapitre 12 : La biodiversité et sa protection",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-biodiversite-definition",
        titre: "Qu'est-ce que la biodiversité ?",
        blocs: [
          {
            type: "texte",
            titre: "Une grande variété de vie",
            texte: "Dans une forêt, on peut observer des arbres, des fougères, des insectes, des oiseaux et des lémuriens. Dans une mare vivent d'autres êtres vivants.\nCette variété fait partie de la biodiversité."
          },
          {
            type: "definition",
            titre: "La biodiversité",
            texte: "La biodiversité est la diversité du vivant. Elle comprend notamment la diversité des milieux de vie, des espèces et des individus au sein d'une même espèce."
          },
          {
            type: "exemple",
            titre: "À plusieurs niveaux",
            texte: "Une forêt et une mare sont deux milieux différents. Les oiseaux et les lémuriens appartiennent à des espèces différentes. Des individus d'une même espèce peuvent aussi présenter des différences."
          },
          {
            type: "remarque",
            titre: "Une espèce",
            texte: "Pour simplifier, une espèce regroupe des êtres vivants qui se ressemblent et peuvent généralement se reproduire entre eux en donnant des descendants capables de se reproduire."
          }
        ]
      },

      {
        id: "svt5-biodiversite-madagascar",
        titre: "La biodiversité à Madagascar",
        blocs: [
          {
            type: "texte",
            titre: "Des milieux variés",
            texte: "À Madagascar, on trouve différents milieux de vie : forêts humides, forêts sèches, zones humides, mangroves et milieux marins.\nCes milieux abritent de nombreuses espèces animales et végétales."
          },
          {
            type: "definition",
            titre: "Une espèce endémique",
            texte: "Une espèce est dite endémique d'une région lorsqu'elle vit naturellement dans cette région et nulle part ailleurs dans le monde."
          },
          {
            type: "exemple",
            titre: "Des exemples",
            texte: "L'indri est une espèce de lémurien endémique de Madagascar. Le baobab de Grandidier est également une espèce endémique de Madagascar."
          },
          {
            type: "remarque",
            titre: "Endémique ne veut pas dire unique",
            texte: "Une espèce endémique peut compter de nombreux individus. Le mot « endémique » indique sa répartition naturelle, pas le nombre d'individus."
          }
        ]
      },

      {
        id: "svt5-biodiversite-importance",
        titre: "Pourquoi la biodiversité est-elle importante ?",
        blocs: [
          {
            type: "texte",
            titre: "Des êtres vivants liés",
            texte: "Les êtres vivants ont des relations entre eux et avec leur milieu. Les plantes, les animaux, les champignons et les micro-organismes participent ainsi au fonctionnement des écosystèmes."
          },
          {
            type: "tableau",
            titre: "Quelques rôles",
            entetes: ["Élément du vivant", "Exemple de rôle"],
            lignes: [
              [
                "Plantes",
                "Elles fournissent de la nourriture et des abris à de nombreux êtres vivants."
              ],
              [
                "Insectes pollinisateurs",
                "Ils transportent le pollen et aident certaines plantes à se reproduire."
              ],
              [
                "Champignons et bactéries",
                "Certains décomposent les restes d'êtres vivants."
              ],
              [
                "Mangroves",
                "Elles servent d'abri à de nombreuses espèces et contribuent à protéger les côtes."
              ]
            ]
          },
          {
            type: "texte",
            titre: "Pour les êtres humains aussi",
            texte: "La biodiversité fournit notamment des aliments, du bois et des substances utilisées pour fabriquer certains médicaments. Elle a aussi une valeur culturelle et scientifique."
          }
        ]
      },

      {
        id: "svt5-biodiversite-menaces",
        titre: "Les menaces sur la biodiversité",
        blocs: [
          {
            type: "texte",
            titre: "Des milieux transformés",
            texte: "Lorsqu'un milieu de vie est détruit ou fortement modifié, les êtres vivants peuvent perdre leur nourriture, leurs abris ou les conditions nécessaires à leur reproduction."
          },
          {
            type: "tableau",
            titre: "Quelques menaces",
            entetes: ["Menace", "Exemple de conséquence"],
            lignes: [
              [
                "Destruction des habitats",
                "La disparition d'une forêt prive certaines espèces de leur lieu de vie."
              ],
              [
                "Pollution",
                "Des déchets ou des produits toxiques peuvent contaminer l'eau et nuire aux organismes."
              ],
              [
                "Prélèvements excessifs",
                "Une pêche ou une chasse trop importante peut faire diminuer certaines populations."
              ],
              [
                "Espèces introduites envahissantes",
                "Certaines espèces introduites peuvent prendre des ressources ou des habitats à des espèces locales."
              ],
              [
                "Changement climatique",
                "Les changements de température et de pluies peuvent modifier les milieux de vie."
              ]
            ]
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Une espèce introduite n'est pas automatiquement envahissante. On parle d'espèce envahissante lorsqu'elle se répand et provoque des effets nuisibles dans le milieu."
          },
          {
            type: "schema",
            titre: "Un exemple de conséquences",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='10' width='270' height='44' rx='9' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='170' y='37' font-size='13' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>Destruction d'une partie de la forêt</text><line x1='170' y1='54' x2='170' y2='70' stroke='#6b7280' stroke-width='2'/><polygon points='165,66 170,75 175,66' fill='#6b7280'/><rect x='35' y='76' width='270' height='44' rx='9' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='170' y='103' font-size='12' fill='#78350f' text-anchor='middle'>Perte d'abris et de nourriture</text><line x1='170' y1='120' x2='170' y2='136' stroke='#6b7280' stroke-width='2'/><polygon points='165,132 170,141 175,132' fill='#6b7280'/><rect x='35' y='142' width='270' height='48' rx='9' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='170' y='162' font-size='12' fill='#1e3a8a' text-anchor='middle'>Certaines populations peuvent diminuer</text><text x='170' y='180' font-size='11' fill='#1e3a8a' text-anchor='middle'>ou quitter le milieu si elles le peuvent</text><text x='170' y='213' font-size='10' fill='#6b7280' text-anchor='middle'>Schéma simplifié d'une conséquence possible</text></svg>",
            legende: "La destruction d'un habitat peut modifier les conditions de vie et menacer certaines populations."
          }
        ]
      },

      {
        id: "svt5-biodiversite-protection",
        titre: "Comment protéger la biodiversité ?",
        blocs: [
          {
            type: "tableau",
            titre: "Des actions possibles",
            entetes: ["Action", "But"],
            lignes: [
              [
                "Protéger les habitats",
                "Préserver les lieux où vivent les espèces."
              ],
              [
                "Restaurer les milieux dégradés",
                "Aider un milieu abîmé à retrouver progressivement ses fonctions."
              ],
              [
                "Limiter les déchets et la pollution",
                "Réduire les substances et objets nuisibles dans les milieux."
              ],
              [
                "Utiliser les ressources de façon responsable",
                "Éviter les prélèvements excessifs de plantes et d'animaux."
              ],
              [
                "Créer et gérer des aires protégées",
                "Préserver des milieux et des espèces avec la participation des personnes concernées."
              ]
            ]
          },
          {
            type: "exemple",
            titre: "Planter des arbres",
            texte: "Dans une zone dégradée, planter et entretenir des espèces locales adaptées peut contribuer à restaurer le milieu. Il faut aussi protéger les jeunes plants et tenir compte des besoins des habitants."
          },
          {
            type: "remarque",
            titre: "Une action collective",
            texte: "La protection de la biodiversité concerne les habitants, les écoles, les communautés, les associations et les autorités. Elle est plus efficace lorsque les personnes concernées travaillent ensemble."
          }
        ]
      },

      {
        id: "svt5-biodiversite-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. La biodiversité est la diversité du vivant.\n2. Une espèce endémique d'une région ne vit naturellement que dans cette région.\n3. Les êtres vivants participent au fonctionnement des écosystèmes.\n4. La destruction des habitats, la pollution et les prélèvements excessifs sont des menaces.\n5. Protéger les milieux et utiliser les ressources de façon responsable aide à préserver la biodiversité."
          },
          {
            type: "methode",
            titre: "Pour étudier une menace",
            texte: "Pose-toi trois questions :\n1. Quel milieu ou quelle espèce est touché ?\n2. Quelle conséquence peut-on observer ?\n3. Quelle action pourrait réduire cette menace ?"
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que la biodiversité ?",
        correction: "C'est la diversité du vivant. Elle comprend notamment la diversité des milieux, des espèces et des individus d'une même espèce."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'une espèce endémique d'une région ?",
        correction: "C'est une espèce qui vit naturellement dans cette région et nulle part ailleurs dans le monde."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux milieux de vie présents à Madagascar.",
        correction: "Par exemple : les forêts humides et les mangroves. On peut aussi citer les forêts sèches, les zones humides ou les milieux marins."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite une espèce endémique de Madagascar.",
        correction: "Par exemple : l'indri ou le baobab de Grandidier."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite deux menaces pour la biodiversité.",
        correction: "Par exemple : la destruction des habitats et la pollution. Les prélèvements excessifs, certaines espèces introduites envahissantes et le changement climatique sont aussi des menaces."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel rôle certains insectes jouent-ils auprès des plantes à fleurs ?",
        correction: "Certains insectes transportent le pollen entre les fleurs et aident ainsi certaines plantes à se reproduire."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pourquoi la disparition d'une forêt peut-elle menacer les animaux qui y vivent ?",
        correction: "Elle peut détruire leur habitat et les priver d'abris, de nourriture ou de lieux nécessaires à leur reproduction."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Une espèce endémique n'a qu'un seul individu.\n2. La pollution peut nuire aux êtres vivants.\n3. Toutes les espèces introduites sont envahissantes.",
        correction: "1. Faux : une espèce endémique peut compter de nombreux individus. Elle ne vit naturellement que dans une région donnée.\n2. Vrai.\n3. Faux : seules certaines espèces introduites se répandent et provoquent des effets nuisibles."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Cite deux actions qui peuvent aider à protéger la biodiversité.",
        correction: "Par exemple : protéger les habitats et limiter la pollution. On peut aussi utiliser les ressources de façon responsable ou restaurer les milieux dégradés."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une rivière reçoit beaucoup de déchets. Explique une conséquence possible pour les êtres vivants et propose une action.",
        correction: "Les déchets peuvent polluer l'eau et nuire aux organismes qui y vivent. On peut réduire les déchets jetés dans la rivière, organiser leur collecte et sensibiliser les habitants."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Des habitants souhaitent restaurer une zone dégradée près de leur village. Pourquoi est-il utile de choisir des espèces locales adaptées et de protéger les jeunes plants ?",
        correction: "Des espèces locales adaptées peuvent contribuer à restaurer le milieu. Protéger et entretenir les jeunes plants augmente leurs chances de survivre. Il faut aussi tenir compte des besoins des habitants."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique pourquoi protéger une espèce ne consiste pas seulement à protéger quelques individus.",
        correction: "Une espèce a aussi besoin d'un milieu de vie où elle peut trouver de la nourriture, des abris et se reproduire. Protéger son habitat et les relations avec les autres êtres vivants contribue donc à sa protection."
      }
    ]
  }
]);
