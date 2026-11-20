enregistrerChapitres("3e", "sp", [
  {
    id: 9,
    titre: "Chapitre 9 : Calculs chimiques et volume molaire des gaz",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "La quantité de matière",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi calculer en moles ?",
            texte: "Une équation chimique équilibrée indique les proportions dans lesquelles les réactifs sont consommés et les produits sont formés. Pour exploiter ces proportions, on utilise souvent la quantité de matière, exprimée en moles."
          },
          {
            type: "definition",
            titre: "La mole",
            texte: "La quantité de matière se note n et s’exprime en mole, de symbole mol.\n\nUne mole contient environ 6,02 × 10²³ entités chimiques : atomes, molécules ou ions selon l’espèce considérée."
          },
          {
            type: "regle",
            titre: "Relation entre masse et quantité de matière",
            texte: "n = m / M\n\nm = n × M\n\n• n : quantité de matière en mol.\n• m : masse en g.\n• M : masse molaire en g/mol."
          },
          {
            type: "exemple",
            titre: "Exemple",
            texte: "On dispose de 9 g d’eau. La masse molaire de l’eau est M(H₂O) = 18 g/mol.\n\nn(H₂O) = m / M = 9 / 18 = 0,50 mol."
          }
        ]
      },

      {
        id: 2,
        titre: "Calculer une masse molaire",
        blocs: [
          {
            type: "definition",
            titre: "Masse molaire",
            texte: "La masse molaire d’une espèce chimique est la masse d’une mole de cette espèce. Elle s’exprime généralement en grammes par mole, notés g/mol."
          },
          {
            type: "methode",
            titre: "Calculer la masse molaire d’une molécule",
            texte: "1. Écrire la formule de la molécule.\n2. Repérer le nombre d’atomes de chaque élément.\n3. Multiplier chaque masse molaire atomique par le nombre d’atomes correspondant.\n4. Additionner les résultats."
          },
          {
            type: "exemple",
            titre: "Masse molaire du dioxyde de carbone",
            texte: "Données : M(C) = 12 g/mol et M(O) = 16 g/mol.\n\nUne molécule de CO₂ contient 1 atome de carbone et 2 atomes d’oxygène.\n\nM(CO₂) = 12 + 2 × 16 = 44 g/mol."
          },
          {
            type: "exemple",
            titre: "Masse molaire du butane",
            texte: "Données : M(C) = 12 g/mol et M(H) = 1 g/mol.\n\nM(C₄H₁₀) = 4 × 12 + 10 × 1\nM(C₄H₁₀) = 48 + 10 = 58 g/mol."
          }
        ]
      },

      {
        id: 3,
        titre: "Le volume molaire d’un gaz",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "Le volume molaire d’un gaz, noté Vₘ, est le volume occupé par une mole de gaz dans des conditions données de température et de pression.\n\nIl s’exprime par exemple en litres par mole : L/mol."
          },
          {
            type: "regle",
            titre: "Relations utiles",
            texte: "V = n × Vₘ\n\nn = V / Vₘ\n\n• V : volume du gaz en L.\n• n : quantité de matière en mol.\n• Vₘ : volume molaire en L/mol.\n\nLes unités de volume utilisées pour V et Vₘ doivent être cohérentes."
          },
          {
            type: "remarque",
            titre: "La valeur dépend des conditions",
            texte: "Le volume molaire dépend de la température et de la pression. Dans un exercice, utilise la valeur donnée dans l’énoncé.\n\nPar exemple, on peut prendre environ 24 L/mol vers 20 °C et à pression atmosphérique. Dans d’autres conditions, l’énoncé peut donner une autre valeur : il ne faut pas utiliser 24 L/mol automatiquement."
          },
          {
            type: "exemple",
            titre: "Calculer un volume",
            texte: "Un gaz a une quantité de matière n = 0,50 mol. Dans les conditions de l’expérience, Vₘ = 24 L/mol.\n\nV = n × Vₘ = 0,50 × 24 = 12 L.\n\nLe volume du gaz est 12 L."
          },
          {
            type: "exemple",
            titre: "Calculer une quantité de matière",
            texte: "Un gaz occupe 2,4 L dans des conditions où Vₘ = 24 L/mol.\n\nn = V / Vₘ = 2,4 / 24 = 0,10 mol."
          }
        ]
      },

      {
        id: 4,
        titre: "Utiliser une équation équilibrée",
        blocs: [
          {
            type: "regle",
            titre: "Les coefficients donnent les proportions",
            texte: "Dans l’équation :\n\nCH₄ + 2 O₂ → CO₂ + 2 H₂O,\n\n1 mol de méthane réagit avec 2 mol de dioxygène. Elle forme 1 mol de dioxyde de carbone et 2 mol d’eau.\n\nCes proportions s’appliquent aux quantités consommées et formées par la réaction."
          },
          {
            type: "methode",
            titre: "Méthode générale",
            texte: "1. Écrire l’équation équilibrée.\n2. Convertir la donnée initiale en mol : utiliser n = m / M pour une masse ou n = V / Vₘ pour un gaz.\n3. Lire les coefficients de l’équation et calculer la quantité de matière recherchée.\n4. Convertir le résultat en masse ou en volume si nécessaire.\n5. Vérifier les unités et les conditions de l’énoncé."
          },
          {
            type: "remarque",
            titre: "Attention au réactif limitant",
            texte: "Si l’énoncé précise qu’un réactif est en excès et que l’autre réagit complètement, on peut calculer les produits à partir de ce dernier.\n\nSi les quantités des deux réactifs sont données, il faut vérifier lequel est limitant avant de calculer les quantités formées."
          },
          {
            type: "exemple",
            titre: "Du méthane au dioxyde de carbone",
            texte: "On brûle complètement 0,20 mol de méthane avec suffisamment de dioxygène. On donne Vₘ = 24 L/mol pour le CO₂ dans les conditions de mesure.\n\nCH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\n1 mol de CH₄ forme 1 mol de CO₂. Donc :\nn(CO₂) = 0,20 mol.\n\nV(CO₂) = n × Vₘ = 0,20 × 24 = 4,8 L."
          }
        ]
      },

      {
        id: 5,
        titre: "Comparer les volumes de gaz",
        blocs: [
          {
            type: "regle",
            titre: "Même température et même pression",
            texte: "À la même température et à la même pression, les volumes des gaz sont proportionnels à leurs quantités de matière.\n\nOn peut donc utiliser les coefficients d’une équation équilibrée pour comparer les volumes des espèces gazeuses, si tous ces volumes sont mesurés dans les mêmes conditions."
          },
          {
            type: "exemple",
            titre: "Combustion du méthane",
            texte: "CH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\nÀ température et pression identiques, 1 L de méthane gazeux réagit avec 2 L de dioxygène gazeux et forme 1 L de dioxyde de carbone gazeux, si la combustion est complète.\n\nOn ne compare pas ici le volume de l’eau : elle peut être liquide ou gazeuse selon les conditions."
          },
          {
            type: "remarque",
            titre: "Ne pas appliquer cette règle aux liquides",
            texte: "Les proportions entre volumes déduites directement des coefficients concernent ici les gaz comparés à la même température et à la même pression. On ne les applique pas de cette façon aux volumes des liquides ou des solides."
          }
        ]
      },

      {
        id: 6,
        titre: "Bilan pour l’examen",
        blocs: [
          {
            type: "tableau",
            titre: "Formules à retenir",
            entetes: ["Grandeur recherchée", "Formule"],
            lignes: [
              ["Quantité de matière à partir d’une masse", "n = m / M"],
              ["Masse à partir d’une quantité de matière", "m = n × M"],
              ["Quantité de matière d’un gaz", "n = V / Vₘ"],
              ["Volume d’un gaz", "V = n × Vₘ"]
            ]
          },
          {
            type: "methode",
            titre: "Présenter ses calculs",
            texte: "Pour chaque question :\n\n• écrire la formule ou la proportion utilisée ;\n• remplacer par les valeurs avec des unités cohérentes ;\n• calculer ;\n• donner une phrase de conclusion avec l’unité.\n\nVérifier aussi que l’équation est équilibrée avant d’utiliser ses coefficients."
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "• Confondre masse molaire M et volume molaire Vₘ.\n• Utiliser des mL avec un volume molaire en L/mol sans convertir.\n• Employer une valeur de Vₘ différente de celle donnée dans l’énoncé.\n• Utiliser les coefficients d’une équation non équilibrée.\n• Oublier de vérifier si un réactif est en excès."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer M(H₂O). Données : M(H) = 1 g/mol et M(O) = 16 g/mol.",
        correction: "M(H₂O) = 2 × M(H) + M(O)\n= 2 × 1 + 16 = 18 g/mol."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer la quantité de matière correspondant à 22 g de CO₂. Donnée : M(CO₂) = 44 g/mol.",
        correction: "n = m / M = 22 / 44 = 0,50 mol.\n\nLa quantité de matière de CO₂ est 0,50 mol."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer la masse correspondant à 0,25 mol de dioxygène. Donnée : M(O₂) = 32 g/mol.",
        correction: "m = n × M = 0,25 × 32 = 8,0 g.\n\nLa masse de dioxygène est 8,0 g."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un gaz a une quantité de matière de 0,30 mol. Calculer son volume si Vₘ = 24 L/mol.",
        correction: "V = n × Vₘ = 0,30 × 24 = 7,2 L.\n\nLe gaz occupe 7,2 L."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un gaz occupe 600 mL. Calculer sa quantité de matière si Vₘ = 24 L/mol.",
        correction: "On convertit le volume : 600 mL = 0,600 L.\n\nn = V / Vₘ = 0,600 / 24 = 0,025 mol."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans les mêmes conditions de température et de pression, 10 L de méthane brûlent complètement. Quel volume de dioxygène est consommé ? Équation : CH₄ + 2 O₂ → CO₂ + 2 H₂O.",
        correction: "Les coefficients indiquent qu’un volume de méthane réagit avec deux volumes de dioxygène, les deux gaz étant mesurés dans les mêmes conditions.\n\nV(O₂) = 2 × 10 = 20 L."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On brûle complètement 0,40 mol de méthane avec suffisamment de dioxygène. Calculer la quantité de CO₂ formée, puis son volume pour Vₘ = 24 L/mol.",
        correction: "CH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\n1 mol de méthane forme 1 mol de CO₂. Donc n(CO₂) = 0,40 mol.\n\nV(CO₂) = n × Vₘ = 0,40 × 24 = 9,6 L."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Du fer réagit complètement avec un excès d’acide : Fe + 2 H⁺ → Fe²⁺ + H₂. On utilise 5,6 g de fer. Calculer le volume de H₂ formé. Données : M(Fe) = 56 g/mol et Vₘ = 24 L/mol.",
        correction: "n(Fe) = m / M = 5,6 / 56 = 0,10 mol.\n\nL’équation indique que 1 mol de Fe forme 1 mol de H₂. Donc n(H₂) = 0,10 mol.\n\nV(H₂) = n × Vₘ = 0,10 × 24 = 2,4 L."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice de type examen. On brûle complètement 8 g de méthane avec suffisamment de dioxygène. Données : M(CH₄) = 16 g/mol ; M(CO₂) = 44 g/mol ; Vₘ = 24 L/mol pour les gaz dans les conditions de mesure.\n\n1. Écrire l’équation équilibrée.\n2. Calculer la quantité de matière de méthane brûlé.\n3. Calculer la quantité puis le volume de dioxygène consommé.\n4. Calculer la quantité, la masse et le volume de CO₂ formé.",
        correction: "1. CH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\n2. n(CH₄) = m / M = 8 / 16 = 0,50 mol.\n\n3. Pour 1 mol de CH₄, il faut 2 mol de O₂.\nn(O₂) = 2 × 0,50 = 1,0 mol.\nV(O₂) = n × Vₘ = 1,0 × 24 = 24 L.\n\n4. Pour 1 mol de CH₄, il se forme 1 mol de CO₂.\nn(CO₂) = 0,50 mol.\nm(CO₂) = n × M = 0,50 × 44 = 22 g.\nV(CO₂) = n × Vₘ = 0,50 × 24 = 12 L."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On dispose de 1 mol de méthane et de 1 mol de dioxygène. La réaction est : CH₄ + 2 O₂ → CO₂ + 2 H₂O. Quel réactif est limitant ? Quelle quantité de CO₂ se forme si la réaction est complète ?",
        correction: "Pour consommer 1 mol de CH₄, il faudrait 2 mol de O₂. Or on ne dispose que de 1 mol de O₂ : le dioxygène est donc limitant.\n\nD’après l’équation, 2 mol de O₂ permettent de former 1 mol de CO₂.\n\nAvec 1 mol de O₂, on forme :\nn(CO₂) = 1 / 2 = 0,50 mol.\n\nIl reste du méthane : 0,50 mol a réagi et 0,50 mol n’a pas réagi."
      }
    ]
  }
]);
