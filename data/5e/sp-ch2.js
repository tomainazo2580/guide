enregistrerChapitres("5e", "sp", [
  {
    id: 2,
    titre: "Chapitre 2 : Le volume et sa mesure",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Qu’est-ce que le volume ?",
        blocs: [
          {
            type: "definition",
            texte: "Le volume est la grandeur qui indique l’espace occupé par un objet ou une substance."
          },
          {
            type: "exemple",
            texte: "Une bouteille peut contenir un volume d’eau de 1 litre. Un morceau de bois occupe lui aussi un certain volume."
          },
          {
            type: "remarque",
            texte: "La masse et le volume sont deux grandeurs différentes : la masse se mesure avec une balance, tandis que le volume peut se mesurer avec un récipient gradué ou se calculer à partir de dimensions."
          }
        ]
      },
      {
        id: 2,
        titre: "Les unités de volume et de capacité",
        blocs: [
          {
            type: "texte",
            texte: "L’unité de volume du Système international est le mètre cube, de symbole m³. Pour les liquides, on utilise souvent le litre, de symbole L, et ses sous-multiples."
          },
          {
            type: "tableau",
            entetes: ["Unité", "Symbole", "Relation utile"],
            lignes: [
              ["Mètre cube", "m³", "1 m³ = 1 000 L"],
              ["Décimètre cube", "dm³", "1 dm³ = 1 L"],
              ["Centimètre cube", "cm³", "1 cm³ = 1 mL"],
              ["Litre", "L", "1 L = 1 000 mL"],
              ["Centilitre", "cL", "1 cL = 10 mL"],
              ["Millilitre", "mL", "1 mL = 1 cm³"]
            ]
          },
          {
            type: "remarque",
            texte: "Le litre sert souvent à exprimer la capacité d’un récipient, c’est-à-dire le volume qu’il peut contenir. Il permet aussi d’exprimer le volume d’un liquide."
          }
        ]
      },
      {
        id: 3,
        titre: "Convertir des volumes",
        blocs: [
          {
            type: "texte",
            texte: "Pour les unités de capacité, chaque déplacement d’une colonne vers la droite multiplie le nombre par 10 ; chaque déplacement vers la gauche le divise par 10."
          },
          {
            type: "tableau",
            entetes: ["kL", "hL", "daL", "L", "dL", "cL", "mL"],
            lignes: [
              ["kilolitre", "hectolitre", "décalitre", "litre", "décilitre", "centilitre", "millilitre"]
            ]
          },
          {
            type: "exemple",
            texte: "De L à mL, on avance de trois colonnes : 2,5 L = 2,5 × 1 000 = 2 500 mL."
          },
          {
            type: "exemple",
            texte: "De mL à L, on recule de trois colonnes : 750 mL = 750 ÷ 1 000 = 0,75 L."
          },
          {
            type: "regle",
            texte: "Pour les unités cubiques, le passage d’une unité à la suivante multiplie ou divise par 1 000 : 1 m³ = 1 000 dm³ et 1 dm³ = 1 000 cm³."
          },
          {
            type: "exemple",
            texte: "3 dm³ = 3 L = 3 000 mL = 3 000 cm³."
          },
          {
            type: "remarque",
            texte: "Attention : 1 dm = 10 cm, mais 1 dm³ = 1 000 cm³. Le volume tient compte de trois dimensions."
          }
        ]
      },
      {
        id: 4,
        titre: "Mesurer le volume d’un liquide",
        blocs: [
          {
            type: "texte",
            texte: "On peut mesurer le volume d’un liquide avec une éprouvette graduée. Ses graduations permettent de lire le volume du liquide qu’elle contient."
          },
          {
            type: "methode",
            texte: "1. Choisir une éprouvette adaptée au volume à mesurer.\n2. La poser verticalement sur une surface plane.\n3. Verser le liquide.\n4. Repérer la valeur des graduations.\n5. Placer l’œil à la hauteur de la surface du liquide et lire le volume."
          },
          {
            type: "texte",
            texte: "Dans une éprouvette en verre, la surface de l’eau est généralement courbée : cette surface est appelée ménisque. Pour l’eau, on lit la graduation au niveau du bas du ménisque."
          },
          {
            type: "schema",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 250" role="img" aria-label="Lecture du volume d'eau dans une éprouvette graduée">
              <rect x="105" y="20" width="105" height="195" rx="5" fill="#ffffff" stroke="#334155" stroke-width="3"/>
              <path d="M108 110 Q157 124 207 110 L207 212 L108 212 Z" fill="#93c5fd"/>
              <path d="M108 110 Q157 124 207 110" fill="none" stroke="#2563eb" stroke-width="3"/>
              <line x1="105" y1="117" x2="90" y2="117" stroke="#334155" stroke-width="2"/>
              <line x1="105" y1="157" x2="90" y2="157" stroke="#334155" stroke-width="2"/>
              <line x1="105" y1="197" x2="90" y2="197" stroke="#334155" stroke-width="2"/>
              <text x="48" y="121" font-size="15" fill="#334155">60 mL</text>
              <text x="48" y="161" font-size="15" fill="#334155">40 mL</text>
              <text x="48" y="201" font-size="15" fill="#334155">20 mL</text>
              <line x1="158" y1="117" x2="285" y2="117" stroke="#ef4444" stroke-width="2" stroke-dasharray="5 4"/>
              <ellipse cx="305" cy="117" rx="19" ry="10" fill="none" stroke="#334155" stroke-width="2"/>
              <circle cx="305" cy="117" r="4" fill="#334155"/>
              <text x="230" y="148" font-size="14" fill="#334155">Œil à hauteur</text>
              <text x="230" y="166" font-size="14" fill="#334155">du ménisque</text>
              <line x1="85" y1="218" x2="230" y2="218" stroke="#334155" stroke-width="3"/>
            </svg>`,
            legende: "Pour lire le volume d’eau, placer l’œil à la hauteur du bas du ménisque. Ici, le volume est de 60 mL."
          },
          {
            type: "remarque",
            texte: "Lire au-dessus ou en dessous du niveau du liquide peut provoquer une erreur de lecture."
          }
        ]
      },
      {
        id: 5,
        titre: "Mesurer le volume d’un solide",
        blocs: [
          {
            type: "texte",
            texte: "La méthode dépend de la forme du solide. Pour certains solides de forme régulière, on peut mesurer leurs dimensions et calculer leur volume."
          },
          {
            type: "regle",
            texte: "Pour un pavé droit : volume = longueur × largeur × hauteur. Les trois dimensions doivent être exprimées dans la même unité."
          },
          {
            type: "exemple",
            texte: "Un pavé droit mesure 5 cm de longueur, 3 cm de largeur et 2 cm de hauteur. Son volume est : 5 × 3 × 2 = 30 cm³."
          },
          {
            type: "regle",
            texte: "Pour un cube : volume = côté × côté × côté."
          },
          {
            type: "exemple",
            texte: "Un cube de 4 cm de côté a un volume de 4 × 4 × 4 = 64 cm³."
          },
          {
            type: "texte",
            texte: "Pour un petit solide de forme irrégulière qui coule, ne se dissout pas et ne réagit pas avec l’eau, on peut mesurer le volume d’eau déplacée."
          },
          {
            type: "methode",
            texte: "1. Verser de l’eau dans une éprouvette et lire le volume initial V₁.\n2. Immerger complètement et doucement le solide, sans faire déborder l’eau et sans emprisonner de bulles d’air.\n3. Lire le nouveau volume V₂.\n4. Calculer le volume du solide : V = V₂ − V₁."
          },
          {
            type: "exemple",
            texte: "Avant immersion, l’éprouvette contient 40 mL d’eau. Après immersion complète du solide, elle indique 55 mL. Le volume du solide est : 55 − 40 = 15 mL, soit 15 cm³."
          },
          {
            type: "remarque",
            texte: "Le volume indiqué après immersion correspond à l’eau et au solide immergé. La différence entre les deux lectures donne le volume d’eau déplacée, égal au volume du solide entièrement immergé."
          }
        ]
      },
      {
        id: 6,
        titre: "Bien distinguer masse et volume",
        blocs: [
          {
            type: "tableau",
            entetes: ["Grandeur", "Ce qu’elle indique", "Exemples d’unités", "Instrument"],
            lignes: [
              ["Masse", "Une propriété liée à la quantité de matière", "kg, g", "Balance"],
              ["Volume", "L’espace occupé", "L, mL, m³, cm³", "Éprouvette graduée pour un liquide"]
            ]
          },
          {
            type: "remarque",
            texte: "Deux objets de même volume peuvent avoir des masses différentes. Au chapitre suivant, nous verrons comment relier la masse et le volume grâce à la masse volumique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 1,
        enonce: "Que représente le volume d’un objet ?",
        correction: "Le volume indique l’espace occupé par l’objet."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Complète : a) 1 L = … mL ; b) 1 mL = … cm³.",
        correction: "a) 1 L = 1 000 mL.\nb) 1 mL = 1 cm³."
      },
      {
        niveau: 1,
        points: 1,
        enonce: "Quel instrument gradué peut-on utiliser pour mesurer le volume d’un liquide ?",
        correction: "On peut utiliser une éprouvette graduée."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Convertis en millilitres : a) 2 L ; b) 0,5 L.",
        correction: "On multiplie le nombre de litres par 1 000.\na) 2 L = 2 000 mL.\nb) 0,5 L = 500 mL."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Convertis en litres : a) 1 500 mL ; b) 250 mL.",
        correction: "On divise le nombre de millilitres par 1 000.\na) 1 500 mL = 1,5 L.\nb) 250 mL = 0,25 L."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Une éprouvette contient de l’eau. À quelle hauteur faut-il placer l’œil pour lire le volume ?",
        correction: "Il faut placer l’œil à la hauteur du bas du ménisque de l’eau."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Un pavé droit mesure 6 cm de longueur, 2 cm de largeur et 3 cm de hauteur. Calcule son volume.",
        correction: "V = longueur × largeur × hauteur = 6 × 2 × 3 = 36 cm³."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Un cube a un côté de 5 cm. Quel est son volume ?",
        correction: "V = côté × côté × côté = 5 × 5 × 5 = 125 cm³."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Une éprouvette contient 35 mL d’eau. Après immersion complète d’un caillou, le niveau indique 52 mL. Quel est le volume du caillou ?",
        correction: "V = volume final − volume initial = 52 − 35 = 17 mL.\nComme 1 mL = 1 cm³, le volume du caillou est aussi de 17 cm³."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Une bouteille contient 1,5 L d’eau. On verse 400 mL dans un verre. Quel volume reste-t-il dans la bouteille, en mL ?",
        correction: "1,5 L = 1 500 mL.\nIl reste donc 1 500 − 400 = 1 100 mL."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Une boîte en forme de pavé droit mesure 10 cm de longueur, 5 cm de largeur et 4 cm de hauteur. Calcule son volume en cm³, puis en mL.",
        correction: "V = 10 × 5 × 4 = 200 cm³.\nComme 1 cm³ = 1 mL, le volume est aussi de 200 mL."
      },
      {
        niveau: 4,
        points: 2,
        enonce: "Pourquoi ne convient-il pas de mesurer par immersion dans l’eau le volume d’un morceau de sucre ?",
        correction: "Le sucre se dissout dans l’eau : le morceau ne conserverait donc pas son volume pendant la mesure. La méthode présentée convient à un solide qui ne se dissout pas et ne réagit pas avec l’eau."
      }
    ]
  }
]);
