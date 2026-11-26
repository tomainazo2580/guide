enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch32",
    titre: "Chapitre 32 : Engrais et éléments nutritifs",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch32-besoins",
        titre: "1. Les besoins nutritifs des plantes",
        blocs: [
          {
            type: "introduction",
            titre: "Nourrir une plante",
            texte: "Pour grandir, une plante a besoin de lumière, d’eau, de dioxyde de carbone et d’éléments minéraux. Les engrais apportent certains de ces éléments lorsque le sol ne les fournit pas en quantité suffisante."
          },
          {
            type: "definition",
            titre: "Élément nutritif",
            texte: "Un élément nutritif est un élément chimique nécessaire au développement de la plante. Les besoins ne sont pas identiques pour tous les éléments : certains sont nécessaires en grandes quantités, d’autres en très petites quantités."
          },
          {
            type: "tableau",
            titre: "Quelques éléments nutritifs",
            entetes: ["Élément", "Symbole", "Rôle simplifié"],
            lignes: [
              ["Azote", "N", "Participe notamment à la formation des protéines et à la croissance végétative."],
              ["Phosphore", "P", "Intervient notamment dans les transferts d’énergie et le développement des racines."],
              ["Potassium", "K", "Participe à la régulation de l’eau et au fonctionnement de nombreuses enzymes."],
              ["Magnésium", "Mg", "Entre dans la composition de la chlorophylle."],
              ["Fer", "Fe", "Intervient notamment dans des processus enzymatiques et la formation de chlorophylle."]
            ]
          },
          {
            type: "schema",
            titre: "Origine des ressources d’une plante",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300' role='img' aria-label='Une plante reçoit de la lumière et du dioxyde de carbone au niveau des feuilles. Ses racines absorbent de l’eau et des ions minéraux du sol.'><line x1='30' y1='210' x2='620' y2='210' stroke='#795548' stroke-width='4'/><path d='M325 210 V95 M325 150 Q275 120 245 130 Q275 155 325 150 M325 125 Q375 90 410 105 Q380 135 325 125' fill='#87c98a' stroke='#397a3d' stroke-width='4'/><path d='M325 210 Q300 235 275 265 M325 210 Q350 240 380 265 M325 210 V270' fill='none' stroke='#795548' stroke-width='3'/><line x1='90' y1='60' x2='230' y2='115' stroke='#d39a00' stroke-width='3'/><polygon points='230,115 216,104 212,116' fill='#d39a00'/><text x='80' y='50' font-size='16'>lumière</text><line x1='545' y1='70' x2='420' y2='110' stroke='#267' stroke-width='3'/><polygon points='420,110 434,100 437,112' fill='#267'/><text x='500' y='55' font-size='16'>CO₂</text><line x1='135' y1='255' x2='260' y2='245' stroke='#267' stroke-width='3'/><polygon points='260,245 248,239 249,251' fill='#267'/><text x='50' y='280' font-size='16'>eau et ions minéraux</text></svg>",
            legende: "La plante absorbe principalement l’eau et les ions minéraux par les racines et le CO₂ par les feuilles. La lumière fournit l’énergie nécessaire à la photosynthèse."
          },
          {
            type: "remarque",
            titre: "Des besoins complémentaires",
            texte: "Un engrais ne remplace pas l’eau, la lumière ou le dioxyde de carbone. Un manque ou un excès d’un élément peut perturber la croissance."
          }
        ]
      },

      {
        id: "sp1-ch32-engrais",
        titre: "2. Composition des engrais",
        blocs: [
          {
            type: "definition",
            titre: "Engrais",
            texte: "Un engrais est une matière apportée pour fournir un ou plusieurs éléments nutritifs aux plantes. Il peut être d’origine minérale ou organique. Les éléments deviennent disponibles pour la plante sous des formes assimilables, notamment des ions dans la solution du sol."
          },
          {
            type: "definition",
            titre: "Engrais simples et composés",
            texte: "Un engrais simple apporte principalement un des éléments fertilisants majeurs N, P ou K. Un engrais composé en apporte au moins deux."
          },
          {
            type: "tableau",
            titre: "Exemples de formes apportées",
            entetes: ["Élément", "Exemple d’espèce", "Remarque"],
            lignes: [
              ["Azote", "NO₃⁻ : ion nitrate", "Une forme d’azote absorbable par de nombreuses plantes."],
              ["Azote", "NH₄⁺ : ion ammonium", "Une autre forme d’azote utilisable par les plantes."],
              ["Phosphore", "H₂PO₄⁻ : ion dihydrogénophosphate", "Une forme de phosphate présente selon les conditions du sol."],
              ["Potassium", "K⁺ : ion potassium", "Forme ionique absorbée par les plantes."]
            ]
          },
          {
            type: "remarque",
            titre: "Origine organique",
            texte: "Les éléments d’un engrais organique peuvent devoir être transformés par les organismes du sol avant de devenir facilement assimilables. La vitesse de cette transformation dépend notamment des conditions du milieu."
          }
        ]
      },

      {
        id: "sp1-ch32-npk",
        titre: "3. Lire une indication NPK",
        blocs: [
          {
            type: "definition",
            titre: "Les trois nombres",
            texte: "Une indication NPK comporte trois nombres, par exemple 15-10-20. Ils indiquent conventionnellement des pourcentages massiques : le premier en azote N, le deuxième en équivalent P₂O₅ et le troisième en équivalent K₂O."
          },
          {
            type: "remarque",
            titre: "Des équivalents",
            texte: "Les valeurs exprimées en P₂O₅ et K₂O sont des conventions de déclaration. Elles ne signifient pas nécessairement que l’engrais contient ces oxydes sous forme pure."
          },
          {
            type: "exemple",
            titre: "Lecture d’une étiquette",
            texte: "Pour 10 kg d’un engrais 15-10-20, les valeurs déclarées correspondent à 1,5 kg de N, à une quantité de phosphore équivalente à 1,0 kg de P₂O₅ et à une quantité de potassium équivalente à 2,0 kg de K₂O."
          },
          {
            type: "methode",
            titre: "Calculer une masse déclarée",
            texte: "Pour chaque nombre, multiplier la masse d’engrais par le pourcentage correspondant, puis diviser par 100. Vérifier si la valeur obtenue est une masse d’élément N ou une masse exprimée en équivalent P₂O₅ ou K₂O."
          },
          {
            type: "exemple",
            titre: "Convertir un équivalent en masse d’élément",
            texte: "Pour P₂O₅, avec M(P) = 31 et M(O) = 16 g·mol⁻¹, M(P₂O₅) = 142 g·mol⁻¹. La fraction massique de P dans P₂O₅ vaut 62/142 ≈ 0,437. Une quantité de phosphore déclarée comme équivalente à 1,0 kg de P₂O₅ représente donc environ 0,437 kg de P."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Dans un engrais 15-10-20, les 10 % ne sont pas directement 10 % de phosphore élémentaire : ils sont exprimés en équivalent P₂O₅."
          }
        ]
      },

      {
        id: "sp1-ch32-environnement",
        titre: "4. Utilisation raisonnée et environnement",
        blocs: [
          {
            type: "definition",
            titre: "Utilisation raisonnée",
            texte: "Une utilisation raisonnée cherche à adapter les apports aux besoins de la culture, aux caractéristiques du sol et aux conditions locales. Une dose plus élevée n’entraîne pas nécessairement une meilleure croissance."
          },
          {
            type: "definition",
            titre: "Lessivage",
            texte: "Le lessivage est l’entraînement de certaines substances dissoutes par l’eau à travers le sol. Des nitrates apportés en excès peuvent ainsi atteindre les eaux souterraines ou de surface."
          },
          {
            type: "definition",
            titre: "Eutrophisation",
            texte: "Un apport excessif de nutriments dans un milieu aquatique peut favoriser une prolifération d’algues. Leur décomposition peut ensuite diminuer la quantité de dioxygène dissous et perturber les organismes aquatiques."
          },
          {
            type: "schema",
            titre: "De l’excès d’engrais à la perturbation d’un milieu aquatique",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 220' role='img' aria-label='Un excès de nutriments peut être entraîné par l’eau vers un milieu aquatique, favoriser la prolifération d’algues puis, lors de leur décomposition, réduire le dioxygène dissous.'><rect x='20' y='50' width='145' height='70' rx='6' fill='#f3dfbc' stroke='#795548'/><text x='92' y='80' text-anchor='middle' font-size='15'>excès de</text><text x='92' y='103' text-anchor='middle' font-size='15'>nutriments</text><line x1='170' y1='85' x2='220' y2='85' stroke='#222' stroke-width='2'/><polygon points='220,85 208,78 208,92' fill='#222'/><rect x='225' y='50' width='145' height='70' rx='6' fill='#dcefff' stroke='#267'/><text x='297' y='80' text-anchor='middle' font-size='15'>transfert vers</text><text x='297' y='103' text-anchor='middle' font-size='15'>les eaux</text><line x1='375' y1='85' x2='425' y2='85' stroke='#222' stroke-width='2'/><polygon points='425,85 413,78 413,92' fill='#222'/><rect x='430' y='50' width='145' height='70' rx='6' fill='#d8efcf' stroke='#397a3d'/><text x='502' y='80' text-anchor='middle' font-size='15'>prolifération</text><text x='502' y='103' text-anchor='middle' font-size='15'>d’algues</text><text x='360' y='165' text-anchor='middle' font-size='16'>Décomposition des algues → diminution possible du dioxygène dissous</text></svg>",
            legende: "Cette chaîne décrit un risque possible, pas une conséquence automatique de tout apport d’engrais."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les engrais ne sont pas des produits alimentaires. Ne les goûte pas, ne les mélange pas avec des produits inconnus et respecte les consignes locales de stockage et d’utilisation."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Que représentent les lettres N, P et K dans l’indication d’un engrais ?",
        correction: "N représente l’azote, P le phosphore et K le potassium."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux ressources dont une plante a besoin mais qu’un engrais ne remplace pas.",
        correction: "Par exemple : l’eau et la lumière. Le dioxyde de carbone est une autre réponse possible."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un sac contient 20 kg d’engrais portant l’indication 10-5-15. Calcule la masse d’azote N déclarée.",
        correction: "Le premier nombre indique 10 % de N. La masse déclarée est 20 × 10/100 = 2,0 kg de N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un engrais porte l’indication 12-8-16. Que signifie le nombre 8 ? Signifie-t-il nécessairement que l’engrais contient 8 % de P₂O₅ pur ?",
        correction: "Il indique une teneur en phosphore exprimée par convention comme 8 % en équivalent P₂O₅. Cela ne signifie pas nécessairement que l’engrais contient cet oxyde sous forme pure."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On dispose de 25 kg d’engrais 12-8-16. Calcule les masses déclarées de N, d’équivalent P₂O₅ et d’équivalent K₂O.",
        correction: "N : 25 × 0,12 = 3,0 kg. Équivalent P₂O₅ : 25 × 0,08 = 2,0 kg. Équivalent K₂O : 25 × 0,16 = 4,0 kg."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique comment un apport excessif de nutriments peut perturber un lac. Utilise les notions de transfert vers l’eau, d’algues et de dioxygène.",
        correction: "Une partie des nutriments peut être entraînée vers le lac. Elle peut favoriser une prolifération d’algues. Leur décomposition consomme du dioxygène dissous, ce qui peut perturber les organismes aquatiques."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un engrais est déclaré à 10 % en équivalent P₂O₅. On dispose de 20 kg de cet engrais. Données : M(P) = 31 g·mol⁻¹ et M(O) = 16 g·mol⁻¹. Calcule la masse d’équivalent P₂O₅ déclarée puis la masse correspondante de phosphore P.",
        correction: "La masse d’équivalent P₂O₅ est 20 × 0,10 = 2,0 kg. M(P₂O₅) = 2 × 31 + 5 × 16 = 142 g·mol⁻¹. La fraction massique de P vaut 62/142 ≈ 0,437. La masse correspondante de P est 2,0 × 62/142 ≈ 0,87 kg."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux engrais sont proposés : A porte l’indication 15-10-10 et B l’indication 10-10-20. Pour une même masse de 40 kg de chaque engrais, compare les masses déclarées d’azote N et d’équivalent K₂O.",
        correction: "Pour A : N = 40 × 0,15 = 6,0 kg et équivalent K₂O = 40 × 0,10 = 4,0 kg. Pour B : N = 40 × 0,10 = 4,0 kg et équivalent K₂O = 40 × 0,20 = 8,0 kg. À masse égale, A apporte davantage de N déclaré et B davantage de potassium exprimé en équivalent K₂O."
      }
    ]
  }
]);
