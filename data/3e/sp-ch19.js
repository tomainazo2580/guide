enregistrerChapitres("3e", "sp", [
  {
    id: 19,
    titre: "Chapitre 19 : Énergie mécanique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "L’énergie et ses transformations",
        blocs: [
          {
            type: "introduction",
            titre: "Du mouvement et de la hauteur",
            texte: "Un ballon en mouvement peut déplacer un autre objet lors d’un choc. Un objet placé en hauteur peut tomber et acquérir de la vitesse.\n\nPour étudier ces situations, on utilise la notion d’énergie mécanique."
          },
          {
            type: "definition",
            titre: "Énergie",
            texte: "L’énergie permet de décrire la capacité d’un système à produire des changements : mettre un objet en mouvement, le chauffer ou le déformer, par exemple.\n\nL’unité d’énergie dans le système international est le joule, de symbole J."
          },
          {
            type: "remarque",
            titre: "L’énergie peut changer de forme",
            texte: "L’énergie peut être transférée d’un objet à un autre ou transformée d’une forme en une autre. Par exemple, lors d’une chute, une partie de l’énergie liée à la hauteur peut devenir de l’énergie liée au mouvement."
          }
        ]
      },

      {
        id: 2,
        titre: "L’énergie cinétique",
        blocs: [
          {
            type: "definition",
            titre: "Énergie liée au mouvement",
            texte: "L’énergie cinétique est l’énergie qu’un objet possède du fait de son mouvement. On la note E꜀.\n\nElle dépend de la masse de l’objet et de sa vitesse dans le référentiel choisi."
          },
          {
            type: "regle",
            titre: "Formule de l’énergie cinétique",
            texte: "Pour un objet de masse m se déplaçant à la vitesse v :\n\nE꜀ = ½ × m × v².\n\nAvec m en kilogrammes (kg) et v en mètres par seconde (m/s), E꜀ est exprimée en joules (J)."
          },
          {
            type: "exemple",
            titre: "Calculer une énergie cinétique",
            texte: "Un objet de masse 2 kg se déplace à 3 m/s.\n\nE꜀ = ½ × m × v²\nE꜀ = ½ × 2 × 3²\nE꜀ = 1 × 9 = 9 J."
          },
          {
            type: "remarque",
            titre: "Attention au carré de la vitesse",
            texte: "La vitesse est élevée au carré. Si la masse reste la même et que la vitesse double, l’énergie cinétique est multipliée par 2², donc par 4.\n\nPour utiliser la formule, une vitesse en km/h doit d’abord être convertie en m/s : on la divise par 3,6."
          },
          {
            type: "exemple",
            titre: "Vitesse doublée",
            texte: "Pour une masse de 2 kg à 3 m/s, E꜀ = 9 J.\n\nSi la vitesse devient 6 m/s :\nE꜀ = ½ × 2 × 6² = 36 J.\n\nLa vitesse a doublé et l’énergie cinétique a été multipliée par 4."
          }
        ]
      },

      {
        id: 3,
        titre: "L’énergie potentielle de pesanteur",
        blocs: [
          {
            type: "definition",
            titre: "Énergie liée à la position",
            texte: "Près de la surface terrestre, l’énergie potentielle de pesanteur est une énergie liée à la position d’un objet en hauteur. On la note Eₚ.\n\nSa valeur dépend du niveau choisi comme référence : il faut donc toujours préciser ce niveau."
          },
          {
            type: "regle",
            titre: "Formule près de la surface terrestre",
            texte: "Si l’on choisit Eₚ = 0 au niveau de référence et si l’objet est à une hauteur h au-dessus de ce niveau :\n\nEₚ = m × g × h.\n\nm est en kg, g en N/kg et h en m. L’énergie Eₚ est alors en J.\n\nDans les exercices, on prend souvent g = 10 N/kg lorsque l’énoncé le précise."
          },
          {
            type: "exemple",
            titre: "Un objet en hauteur",
            texte: "Un objet de masse 2 kg se trouve à 3 m au-dessus du niveau choisi comme référence. On prend g = 10 N/kg.\n\nEₚ = m × g × h\nEₚ = 2 × 10 × 3 = 60 J."
          },
          {
            type: "remarque",
            titre: "Choix de la référence",
            texte: "Le sol peut servir de niveau de référence, mais ce n’est pas obligatoire. Une même position peut correspondre à des valeurs d’énergie potentielle différentes selon le niveau choisi.\n\nPour comparer deux positions, il faut conserver la même référence."
          }
        ]
      },

      {
        id: 4,
        titre: "L’énergie mécanique",
        blocs: [
          {
            type: "definition",
            titre: "Somme de deux énergies",
            texte: "Dans les situations étudiées ici, l’énergie mécanique d’un objet est la somme de son énergie cinétique et de son énergie potentielle de pesanteur :\n\nEₘ = E꜀ + Eₚ.\n\nCes trois énergies s’expriment en joules."
          },
          {
            type: "schema",
            titre: "Chute sans frottements : un modèle",
            svg: "<svg viewBox='0 0 360 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Objet à deux hauteurs pendant une chute : l’énergie potentielle diminue tandis que l’énergie cinétique augmente'><rect x='0' y='0' width='360' height='250' fill='#f8fafc'/><line x1='25' y1='210' x2='335' y2='210' stroke='#475569' stroke-width='3'/><text x='210' y='232' font-size='13' fill='#334155'>Niveau de référence</text><circle cx='75' cy='48' r='14' fill='#2563eb'/><text x='105' y='43' font-size='14' fill='#1e3a8a'>Position haute</text><text x='105' y='63' font-size='13' fill='#334155'>Eₚ grande ; E꜀ faible</text><line x1='75' y1='75' x2='75' y2='130' stroke='#dc2626' stroke-width='3'/><polygon points='68,125 82,125 75,138' fill='#dc2626'/><circle cx='75' cy='168' r='14' fill='#2563eb'/><text x='105' y='163' font-size='14' fill='#1e3a8a'>Position basse</text><text x='105' y='183' font-size='13' fill='#334155'>Eₚ plus petite ; E꜀ plus grande</text></svg>",
            legende: "Dans ce modèle sans frottements, l’énergie potentielle diminue pendant la chute tandis que l’énergie cinétique augmente. Leur somme reste constante."
          },
          {
            type: "regle",
            titre: "Conservation dans un cas idéal",
            texte: "Si seul le poids travaille sur l’objet, ou si les autres forces ont un travail total nul, l’énergie mécanique se conserve :\n\nEₘ au départ = Eₘ à l’arrivée.\n\nOn utilise souvent ce modèle lorsque les frottements sont négligés."
          },
          {
            type: "exemple",
            titre: "Une chute sans frottements",
            texte: "Au départ, un objet possède 100 J d’énergie potentielle et 0 J d’énergie cinétique. Son énergie mécanique vaut donc 100 J.\n\nPlus bas, son énergie potentielle vaut 40 J. Si l’énergie mécanique se conserve :\nE꜀ = Eₘ − Eₚ = 100 − 40 = 60 J."
          },
          {
            type: "remarque",
            titre: "Avec des frottements",
            texte: "Lorsque des frottements s’opposent au mouvement, l’énergie mécanique de l’objet ne se conserve généralement pas : une partie est transférée ou transformée, notamment en énergie thermique.\n\nCela ne signifie pas que l’énergie totale disparaît."
          }
        ]
      },

      {
        id: 5,
        titre: "Méthode de résolution",
        blocs: [
          {
            type: "methode",
            titre: "Calculer une énergie",
            texte: "1. Relever la masse, la vitesse, la hauteur et les autres données utiles.\n2. Convertir la masse en kg, la vitesse en m/s et la hauteur en m.\n3. Choisir la formule : E꜀ = ½ × m × v² ou Eₚ = m × g × h.\n4. Remplacer les valeurs et calculer.\n5. Donner le résultat en joules."
          },
          {
            type: "methode",
            titre: "Utiliser la conservation de l’énergie mécanique",
            texte: "1. Vérifier que les conditions permettent de négliger les frottements et que l’énergie mécanique se conserve dans la situation étudiée.\n2. Choisir un même niveau de référence pour l’énergie potentielle.\n3. Calculer Eₘ au départ : Eₘ = E꜀ + Eₚ.\n4. Écrire Eₘ départ = Eₘ arrivée.\n5. Déterminer l’énergie ou la grandeur recherchée."
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "• Oublier le carré de la vitesse dans E꜀.\n• Utiliser une vitesse en km/h directement dans la formule.\n• Confondre énergie cinétique et énergie potentielle.\n• Changer de niveau de référence en cours de calcul.\n• Supposer que l’énergie mécanique se conserve alors que des frottements importants agissent."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle énergie un objet possède-t-il du fait de son mouvement ? Quelle est l’unité de cette énergie ?",
        correction: "L’énergie liée au mouvement est l’énergie cinétique. Elle s’exprime en joules, de symbole J."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris la relation entre énergie mécanique, énergie cinétique et énergie potentielle de pesanteur.",
        correction: "Dans les situations étudiées : Eₘ = E꜀ + Eₚ. Les trois énergies sont exprimées en joules."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 4 kg se déplace à 2 m/s. Calcule son énergie cinétique.",
        correction: "E꜀ = ½ × m × v².\n\nE꜀ = ½ × 4 × 2² = 2 × 4 = 8 J.\n\nSon énergie cinétique est 8 J."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 3 kg est placé à 2 m au-dessus du niveau de référence. On prend g = 10 N/kg. Calcule son énergie potentielle de pesanteur.",
        correction: "Eₚ = m × g × h = 3 × 10 × 2 = 60 J.\n\nSon énergie potentielle vaut 60 J par rapport au niveau choisi."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet possède une énergie cinétique de 25 J et une énergie potentielle de 75 J. Calcule son énergie mécanique.",
        correction: "Eₘ = E꜀ + Eₚ = 25 + 75 = 100 J.\n\nSon énergie mécanique est 100 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet de masse 500 g se déplace à 36 km/h. Calcule son énergie cinétique.",
        correction: "On convertit la masse : 500 g = 0,5 kg.\n\nOn convertit la vitesse : 36 km/h = 36 / 3,6 = 10 m/s.\n\nE꜀ = ½ × m × v² = ½ × 0,5 × 10² = 25 J."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "La vitesse d’un objet double, tandis que sa masse reste constante. Par combien son énergie cinétique est-elle multipliée ?",
        correction: "L’énergie cinétique est proportionnelle au carré de la vitesse. Si la vitesse est multipliée par 2, son carré est multiplié par 2² = 4.\n\nL’énergie cinétique est donc multipliée par 4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet tombe dans un modèle où les frottements sont négligés et où seul son poids travaille. Son énergie mécanique vaut 120 J. À un certain instant, son énergie potentielle vaut 50 J. Calcule son énergie cinétique.",
        correction: "L’énergie mécanique se conserve dans les conditions indiquées.\n\nEₘ = E꜀ + Eₚ, donc E꜀ = Eₘ − Eₚ.\n\nE꜀ = 120 − 50 = 70 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Lorsqu’un objet glisse sur une surface rugueuse et ralentit, son énergie mécanique peut diminuer. L’énergie a-t-elle disparu ? Explique.",
        correction: "Non. Les frottements peuvent entraîner une diminution de l’énergie mécanique, mais l’énergie n’a pas disparu : une partie est notamment transformée en énergie thermique et transférée à l’objet et à la surface."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice type BEPC. Un objet de masse 2 kg est lâché sans vitesse initiale à 5 m au-dessus du sol. On prend le sol comme niveau de référence, g = 10 N/kg et on néglige les frottements. Seul le poids travaille.\n\n1. Calcule son énergie potentielle au départ.\n2. Calcule son énergie cinétique et son énergie mécanique au départ.\n3. À 2 m du sol, calcule son énergie potentielle puis son énergie cinétique.\n4. Juste avant de toucher le sol, quelle est son énergie cinétique ?",
        correction: "1. Au départ : Eₚ = m × g × h = 2 × 10 × 5 = 100 J.\n\n2. L’objet est lâché sans vitesse initiale : E꜀ = 0 J. Donc Eₘ = E꜀ + Eₚ = 0 + 100 = 100 J.\n\n3. À 2 m du sol : Eₚ = 2 × 10 × 2 = 40 J. L’énergie mécanique se conserve, donc E꜀ = 100 − 40 = 60 J.\n\n4. Juste avant le sol, la hauteur est proche de 0 : l’énergie potentielle est proche de 0 J. L’énergie cinétique est donc proche de 100 J."
      }
    ]
  }
]);
