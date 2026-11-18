// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch14",
    titre: "Chapitre 14 : La poussée d'Archimède et la flottabilité",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch14-lecon1",
        titre: "Une force exercée par le liquide",
        blocs: [
          {
            type: "texte",
            titre: "Une observation",
            texte: "Un objet plongé dans l'eau peut sembler plus léger lorsqu'on le tient. L'eau exerce sur lui une force dirigée vers le haut : la poussée d'Archimède."
          },
          {
            type: "definition",
            titre: "Poussée d'Archimède",
            texte: "La poussée d'Archimède est une force exercée par un fluide sur un objet partiellement ou totalement immergé. Elle est verticale et dirigée vers le haut."
          },
          {
            type: "remarque",
            titre: "Qu'est-ce qu'un fluide ?",
            texte: "Un fluide est une substance qui peut s'écouler. Les liquides et les gaz sont des fluides. Dans ce chapitre, nous étudions surtout les objets plongés dans un liquide au repos."
          },
          {
            type: "schema",
            titre: "Deux forces sur un objet immergé",
            svg: "<svg viewBox='0 0 320 210' xmlns='http://www.w3.org/2000/svg'><rect width='320' height='210' fill='#f8fafc'/><rect x='45' y='65' width='230' height='115' fill='#bfdbfe' stroke='#2563eb' stroke-width='2'/><line x1='45' y1='65' x2='275' y2='65' stroke='#2563eb' stroke-width='2'/><rect x='130' y='95' width='60' height='45' fill='#fbbf24' stroke='#92400e' stroke-width='2'/><line x1='160' y1='117' x2='160' y2='150' stroke='#dc2626' stroke-width='3'/><polygon points='160,160 153,148 167,148' fill='#dc2626'/><line x1='180' y1='117' x2='180' y2='85' stroke='#16a34a' stroke-width='3'/><polygon points='180,75 173,87 187,87' fill='#16a34a'/><text x='115' y='168' font-size='13' fill='#dc2626'>Poids P</text><text x='190' y='88' font-size='13' fill='#15803d'>Poussée Fₐ</text></svg>",
            legende: "L'objet est immergé dans l'eau : son poids est dirigé vers le bas et la poussée d'Archimède vers le haut."
          }
        ]
      },
      {
        id: "sp4-ch14-lecon2",
        titre: "Le principe d'Archimède",
        blocs: [
          {
            type: "regle",
            titre: "Le liquide déplacé",
            texte: "La valeur de la poussée d'Archimède est égale au poids du volume de fluide déplacé par l'objet immergé."
          },
          {
            type: "definition",
            titre: "Volume immergé",
            texte: "Le volume immergé est le volume de la partie de l'objet située dans le fluide. Pour un objet entièrement plongé, il est égal au volume total de l'objet."
          },
          {
            type: "regle",
            titre: "Calculer la poussée",
            texte: "Fₐ = ρ × Vimmergé × g\navec Fₐ en newtons (N), ρ la masse volumique du fluide en kg/m³, Vimmergé en m³ et g en N/kg."
          },
          {
            type: "exemple",
            titre: "Un objet dans l'eau",
            texte: "Un objet déplace 0,002 m³ d'eau. On utilise ρ(eau) = 1 000 kg/m³ et g = 10 N/kg.\nFₐ = 1 000 × 0,002 × 10 = 20 N.\nLa poussée vaut 20 N."
          },
          {
            type: "methode",
            titre: "Calculer la poussée d'Archimède",
            texte: "1. Repère la masse volumique du fluide, le volume immergé et g.\n2. Vérifie les unités : kg/m³, m³ et N/kg.\n3. Calcule Fₐ = ρ × Vimmergé × g.\n4. Donne le résultat en newtons."
          },
          {
            type: "remarque",
            titre: "Attention aux unités de volume",
            texte: "1 m³ = 1 000 L. Donc 1 L = 0,001 m³. Si le volume est donné en litres, convertis-le en m³ avant d'utiliser la formule avec ρ en kg/m³."
          }
        ]
      },
      {
        id: "sp4-ch14-lecon3",
        titre: "Poids apparent",
        blocs: [
          {
            type: "definition",
            titre: "Poids apparent dans cette situation",
            texte: "Pour un objet immobile suspendu à un dynamomètre et plongé dans un liquide, le poids apparent est la valeur indiquée par le dynamomètre."
          },
          {
            type: "regle",
            titre: "Une relation à utiliser sous conditions",
            texte: "Si l'objet est immobile, entièrement plongé, suspendu au dynamomètre et ne touche ni le fond ni les parois, l'équilibre donne : poids apparent = P − Fₐ."
          },
          {
            type: "exemple",
            titre: "Lecture du dynamomètre",
            texte: "Un objet a un poids de 12 N. Immergé et immobile dans les conditions de la leçon, il subit une poussée de 4 N.\nPoids apparent = 12 − 4 = 8 N.\nLe dynamomètre indique 8 N."
          },
          {
            type: "remarque",
            titre: "Le poids ne disparaît pas",
            texte: "Le poids réel reste la force exercée par la Terre sur l'objet. L'indication du dynamomètre diminue parce que le liquide exerce aussi une force vers le haut."
          }
        ]
      },
      {
        id: "sp4-ch14-lecon4",
        titre: "Couler, remonter ou flotter",
        blocs: [
          {
            type: "texte",
            titre: "Comparer les forces",
            texte: "Pour comprendre le mouvement d'un objet dans un liquide, on compare notamment son poids P, dirigé vers le bas, et la poussée d'Archimède Fₐ, dirigée vers le haut."
          },
          {
            type: "tableau",
            titre: "Objet lâché dans un liquide au repos",
            entetes: ["Comparaison initiale", "Effet initial"],
            lignes: [
              ["P supérieur à Fₐ", "L'objet tend à descendre."],
              ["Fₐ supérieure à P", "L'objet tend à remonter."],
              ["Fₐ égale à P", "Les deux forces se compensent."]
            ]
          },
          {
            type: "remarque",
            titre: "Une situation simplifiée",
            texte: "Le tableau suppose que le poids et la poussée sont les seules forces importantes au moment considéré. Pendant le mouvement, des frottements exercés par le liquide peuvent aussi intervenir."
          },
          {
            type: "regle",
            titre: "Un objet qui flotte au repos",
            texte: "Un objet qui flotte immobile à la surface, sans autre force verticale significative, est en équilibre : la poussée d'Archimède est égale à son poids."
          },
          {
            type: "exemple",
            titre: "Un morceau de bois",
            texte: "Un morceau de bois flotte au repos. Son poids vaut 5 N. Les forces verticales se compensent : la poussée d'Archimède vaut aussi 5 N. Seule une partie du bois est immergée."
          },
          {
            type: "remarque",
            titre: "Remonter n'est pas flotter au repos",
            texte: "Si la poussée est supérieure au poids au moment où l'objet est immergé et lâché, l'objet tend à remonter. Lorsqu'il flotte ensuite immobile à la surface, la poussée et le poids sont égaux."
          }
        ]
      },
      {
        id: "sp4-ch14-lecon5",
        titre: "Masse volumique et flottabilité",
        blocs: [
          {
            type: "texte",
            titre: "Comparer les masses volumiques",
            texte: "Pour un objet homogène entièrement immergé dans un liquide, on peut comparer sa masse volumique à celle du liquide pour prévoir s'il tend à descendre ou à remonter lorsqu'il est lâché."
          },
          {
            type: "tableau",
            titre: "Objet homogène entièrement immergé",
            entetes: ["Masse volumique de l'objet", "Comportement attendu"],
            lignes: [
              ["Supérieure à celle du liquide", "L'objet tend à descendre."],
              ["Inférieure à celle du liquide", "L'objet tend à remonter."],
              ["Égale à celle du liquide", "Poids et poussée se compensent."]
            ]
          },
          {
            type: "exemple",
            titre: "Dans l'eau",
            texte: "La masse volumique de l'eau est environ 1 000 kg/m³. Un objet homogène de masse volumique 800 kg/m³, entièrement immergé puis lâché, tend à remonter. Il peut ensuite flotter partiellement immergé."
          },
          {
            type: "remarque",
            titre: "Et les bateaux ?",
            texte: "Un bateau peut flotter même s'il contient du métal. Pour comprendre sa flottabilité, il faut considérer le bateau entier et le volume qu'il déplace, pas seulement la masse volumique du métal."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est la direction et quel est le sens de la poussée d'Archimède ?",
        correction: "La poussée d'Archimède est verticale et dirigée vers le haut."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet flotte immobile sur l'eau. Son poids vaut 8 N. Quelle est la valeur de la poussée d'Archimède si aucune autre force verticale significative n'agit sur lui ?",
        correction: "L'objet flotte au repos : les forces se compensent. La poussée d'Archimède vaut donc 8 N, comme son poids."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet déplace 0,003 m³ d'eau. Calcule la poussée d'Archimède. Données : ρ(eau) = 1 000 kg/m³ et g = 10 N/kg.",
        correction: "Fₐ = ρ × Vimmergé × g.\nFₐ = 1 000 × 0,003 × 10 = 30 N.\nLa poussée vaut 30 N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet immergé subit une poussée de 6 N. Son poids vaut 10 N. Il est lâché sans autre force importante au moment initial. Tend-il à descendre ou à remonter ?",
        correction: "Le poids de 10 N est supérieur à la poussée de 6 N. La force résultante est dirigée vers le bas : l'objet tend initialement à descendre."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet de poids 15 N est suspendu immobile à un dynamomètre, entièrement plongé dans l'eau et ne touche pas le récipient. La poussée vaut 5 N. Quelle est l'indication du dynamomètre ?",
        correction: "Dans les conditions indiquées : poids apparent = P − Fₐ.\nPoids apparent = 15 − 5 = 10 N.\nLe dynamomètre indique 10 N."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet déplace 2 L d'eau. Calcule la poussée qu'il subit. Données : ρ(eau) = 1 000 kg/m³ et g = 10 N/kg.",
        correction: "On convertit : 2 L = 0,002 m³.\nFₐ = ρ × Vimmergé × g = 1 000 × 0,002 × 10 = 20 N."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet homogène de masse 1,5 kg et de volume 0,002 m³ est entièrement plongé dans l'eau puis lâché. Données : ρ(eau) = 1 000 kg/m³ et g = 10 N/kg.\n1. Calcule son poids.\n2. Calcule la poussée d'Archimède.\n3. Que tend-il à faire juste après le lâcher ?",
        correction: "1. P = m × g = 1,5 × 10 = 15 N.\n2. Fₐ = ρ × Vimmergé × g = 1 000 × 0,002 × 10 = 20 N.\n3. La poussée de 20 N est supérieure au poids de 15 N : l'objet tend initialement à remonter."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un morceau de bois flotte immobile sur l'eau. Un élève affirme : « Il flotte parce que la poussée est supérieure à son poids. » Corrige son affirmation. Si son poids est de 12 N, quelle est la poussée ?",
        correction: "Lorsqu'il flotte immobile, le bois est en équilibre : la poussée est égale au poids, et non supérieure. La poussée vaut donc 12 N.\nUne poussée supérieure au poids peut expliquer la remontée d'un objet immergé, avant qu'il atteigne sa position de flottement."
      }
    ]
  }
]);
