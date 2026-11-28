enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch33",
    titre: "Chapitre 33 : Variables aléatoires et loi binomiale",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch33-l1",
        titre: "Leçon 1 : Variable aléatoire et loi de probabilité",
        blocs: [
          {
            type: "introduction",
            titre: "Associer un nombre à une expérience",
            texte: "Une variable aléatoire associe une valeur numérique à chaque résultat d’une expérience aléatoire. Elle permet par exemple de compter des succès ou de calculer un gain.\n\nDans ce chapitre, les variables étudiées prennent un nombre fini de valeurs."
          },
          {
            type: "definition",
            titre: "Loi de probabilité",
            texte: "La loi de probabilité d’une variable aléatoire X indique chaque valeur possible xᵢ et la probabilité P(X = xᵢ) correspondante.\n\nChaque probabilité est comprise entre 0 et 1, et leur somme vaut 1."
          },
          {
            type: "tableau",
            titre: "Nombre de faces en deux lancers",
            entetes: ["Valeur xᵢ", "0", "1", "2", "Total"],
            lignes: [
              ["P(X = xᵢ)", "1/4", "1/2", "1/4", "1"]
            ]
          },
          {
            type: "exemple",
            titre: "Construire la loi",
            texte: "On lance deux fois une pièce équilibrée et on note X le nombre de faces obtenues. Les quatre couples ordonnés sont équiprobables : pile-pile, pile-face, face-pile et face-face.\n\nUn seul couple donne X = 0, deux donnent X = 1 et un donne X = 2. On obtient donc les probabilités 1/4, 2/4 et 1/4."
          },
          {
            type: "methode",
            titre: "Établir une loi",
            texte: "1. Définir précisément X et ses valeurs possibles.\n2. Pour chaque valeur, identifier les résultats correspondants.\n3. Calculer leur probabilité en justifiant la méthode.\n4. Présenter les résultats dans un tableau et vérifier que leur somme vaut 1."
          }
        ]
      },

      {
        id: "tle-maths-ch33-l2",
        titre: "Leçon 2 : Espérance, variance et écart-type",
        blocs: [
          {
            type: "definition",
            titre: "Espérance",
            texte: "Si X prend les valeurs xᵢ avec les probabilités pᵢ, son espérance est :\n\nE(X) = Σxᵢpᵢ.\n\nElle représente la moyenne théorique des valeurs obtenues sur un grand nombre de répétitions indépendantes dans les mêmes conditions. Elle n’est pas nécessairement une valeur que X peut prendre."
          },
          {
            type: "exemple",
            titre: "Calculer une espérance",
            texte: "Pour le nombre X de faces en deux lancers d’une pièce équilibrée :\n\nE(X) = 0 × 1/4 + 1 × 1/2 + 2 × 1/4 = 1.\n\nSur un grand nombre de répétitions de l’expérience, le nombre moyen de faces par série de deux lancers tend vers 1."
          },
          {
            type: "definition",
            titre: "Variance et écart-type",
            texte: "La variance mesure la dispersion autour de l’espérance :\n\nV(X) = Σ(xᵢ − E(X))²pᵢ.\n\nOn peut aussi utiliser V(X) = E(X²) − [E(X)]², où E(X²) = Σxᵢ²pᵢ.\n\nL’écart-type est σ(X) = √V(X)."
          },
          {
            type: "exemple",
            titre: "Variance du nombre de faces",
            texte: "Avec la loi précédente :\nE(X²) = 0² × 1/4 + 1² × 1/2 + 2² × 1/4 = 3/2.\n\nComme E(X) = 1, V(X) = 3/2 − 1² = 1/2. L’écart-type vaut √(1/2), soit environ 0,71."
          },
          {
            type: "texte",
            titre: "Transformation affine",
            texte: "Pour une variable Y = aX + b, avec a et b réels :\n\nE(Y) = aE(X) + b ;\nV(Y) = a²V(X) ;\nσ(Y) = |a|σ(X).\n\nAjouter une constante déplace toutes les valeurs sans changer leur dispersion."
          }
        ]
      },

      {
        id: "tle-maths-ch33-l3",
        titre: "Leçon 3 : Épreuve de Bernoulli et loi binomiale",
        blocs: [
          {
            type: "definition",
            titre: "Épreuve de Bernoulli",
            texte: "Une épreuve de Bernoulli possède deux issues : succès, de probabilité p, et échec, de probabilité 1 − p, avec 0 ≤ p ≤ 1.\n\nOn choisit librement ce que l’on appelle « succès », mais il faut le préciser. Par exemple, lors d’un lancer de dé équilibré, on peut appeler succès l’obtention d’un 6 ; alors p = 1/6."
          },
          {
            type: "definition",
            titre: "Schéma et loi binomiale",
            texte: "On répète n fois une même épreuve de Bernoulli, de façon indépendante et avec une probabilité de succès p constante. Si X compte le nombre de succès, alors X suit la loi binomiale de paramètres n et p, notée X ~ B(n, p).\n\nPour chaque entier k de 0 à n :\n\nP(X = k) = C(n, k)pᵏ(1 − p)ⁿ⁻ᵏ."
          },
          {
            type: "methode",
            titre: "Pourquoi cette formule ?",
            texte: "Une suite particulière de k succès et n − k échecs a pour probabilité pᵏ(1 − p)ⁿ⁻ᵏ, grâce à l’indépendance.\n\nIl existe C(n, k) façons de choisir les positions des k succès. Ces suites sont incompatibles : on additionne donc leurs probabilités, ce qui donne la formule."
          },
          {
            type: "exemple",
            titre: "Exactement deux succès",
            texte: "On lance 3 fois une pièce équilibrée, de façon indépendante, et X compte les faces. Alors X ~ B(3, 1/2).\n\nP(X = 2) = C(3, 2)(1/2)²(1/2)¹ = 3/8."
          },
          {
            type: "remarque",
            titre: "Vérifier les hypothèses",
            texte: "Une répétition n’est pas automatiquement binomiale. Il faut une probabilité p constante et des épreuves indépendantes.\n\nPar exemple, des tirages sans remise dans une urne ne vérifient généralement pas ces conditions : la composition de l’urne change."
          }
        ]
      },

      {
        id: "tle-maths-ch33-l4",
        titre: "Leçon 4 : Calculs et interprétation avec la loi binomiale",
        blocs: [
          {
            type: "texte",
            titre: "Espérance et variance binomiales",
            texte: "Si X ~ B(n, p), alors :\n\nE(X) = np ;\nV(X) = np(1 − p) ;\nσ(X) = √(np(1 − p)).\n\nL’espérance np est le nombre moyen théorique de succès sur n épreuves, et non une garantie pour une série particulière."
          },
          {
            type: "methode",
            titre: "Exactement, au plus, au moins",
            texte: "• « Exactement k » : calculer P(X = k).\n• « Au plus k » : calculer P(X ≤ k) = P(X = 0) + … + P(X = k).\n• « Au moins k » : calculer P(X ≥ k) = 1 − P(X ≤ k − 1).\n• « Au moins un » : P(X ≥ 1) = 1 − P(X = 0) = 1 − (1 − p)ⁿ."
          },
          {
            type: "exemple",
            titre: "Au moins un succès",
            texte: "On répète 4 fois, indépendamment, une épreuve dont la probabilité de succès est 0,2. Si X compte les succès, X ~ B(4, 0,2).\n\nP(X ≥ 1) = 1 − P(X = 0) = 1 − 0,8⁴ = 1 − 0,4096 = 0,5904."
          },
          {
            type: "exemple",
            titre: "Au plus un succès",
            texte: "Avec X ~ B(3, 0,2) :\n\nP(X ≤ 1) = P(X = 0) + P(X = 1)\n= 0,8³ + C(3, 1) × 0,2 × 0,8²\n= 0,512 + 0,384 = 0,896."
          },
          {
            type: "methode",
            titre: "Rédiger une solution binomiale",
            texte: "1. Définir le succès et la variable X.\n2. Justifier la répétition d’épreuves indépendantes ayant la même probabilité p.\n3. Donner la loi X ~ B(n, p).\n4. Traduire la question par un événement comme X = k ou X ≥ k.\n5. Calculer et interpréter le résultat dans le contexte."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une variable X prend les valeurs 0 et 1 avec les probabilités 0,7 et 0,3. Vérifier que cette loi est valide.",
        correction: "Les deux probabilités sont comprises entre 0 et 1 et leur somme vaut 0,7 + 0,3 = 1. La loi est donc valide."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une variable X vaut 0 avec probabilité 0,7 et 1 avec probabilité 0,3. Calculer E(X).",
        correction: "E(X) = 0 × 0,7 + 1 × 0,3 = 0,3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une épreuve a une probabilité de succès p = 0,4. Quelle est la probabilité de l’échec ?",
        correction: "La probabilité de l’échec est 1 − p = 1 − 0,4 = 0,6."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une pièce équilibrée est lancée deux fois indépendamment. X compte le nombre de faces. Donner la loi de X.",
        correction: "X peut valoir 0, 1 ou 2. Les quatre couples ordonnés sont équiprobables : un donne 0 face, deux donnent 1 face et un donne 2 faces. Ainsi P(X = 0) = 1/4, P(X = 1) = 1/2 et P(X = 2) = 1/4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Si X ~ B(10, 0,3), calculer E(X).",
        correction: "E(X) = np = 10 × 0,3 = 3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "X prend les valeurs 1, 2 et 4 avec les probabilités respectives 0,2, 0,5 et 0,3. Calculer E(X).",
        correction: "E(X) = 1 × 0,2 + 2 × 0,5 + 4 × 0,3 = 0,2 + 1 + 1,2 = 2,4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour la variable de l’exercice précédent, calculer V(X) et σ(X). Les valeurs sont 1, 2, 4 et les probabilités 0,2, 0,5, 0,3.",
        correction: "E(X) = 2,4. E(X²) = 1² × 0,2 + 2² × 0,5 + 4² × 0,3 = 0,2 + 2 + 4,8 = 7.\nDonc V(X) = 7 − 2,4² = 1,24 et σ(X) = √1,24 ≈ 1,11."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Si X ~ B(4, 0,5), calculer P(X = 2).",
        correction: "P(X = 2) = C(4, 2) × 0,5² × 0,5² = 6/16 = 3/8."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Si X ~ B(5, 0,2), calculer P(X = 0).",
        correction: "P(X = 0) = (1 − 0,2)⁵ = 0,8⁵ = 0,32768."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Si X ~ B(5, 0,2), calculer P(X ≥ 1).",
        correction: "P(X ≥ 1) = 1 − P(X = 0) = 1 − 0,8⁵ = 1 − 0,32768 = 0,67232."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Si X ~ B(8, 0,25), calculer son espérance et sa variance.",
        correction: "E(X) = 8 × 0,25 = 2. V(X) = 8 × 0,25 × 0,75 = 1,5."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une urne contient 2 boules rouges et 3 bleues. On effectue 3 tirages avec remise, au hasard et indépendamment. X compte les boules rouges tirées. Donner la loi de X et calculer P(X = 2).",
        correction: "À chaque tirage, le succès « obtenir rouge » a pour probabilité p = 2/5. Les 3 tirages sont indépendants et p reste constant : X ~ B(3, 2/5).\nP(X = 2) = C(3, 2)(2/5)²(3/5) = 3 × 4/25 × 3/5 = 36/125 = 0,288."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Si X ~ B(3, 0,2), calculer P(X ≤ 1), puis P(X ≥ 2).",
        correction: "P(X = 0) = 0,8³ = 0,512.\nP(X = 1) = C(3, 1) × 0,2 × 0,8² = 0,384.\nDonc P(X ≤ 1) = 0,896. Par complémentarité, P(X ≥ 2) = 1 − 0,896 = 0,104."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Un jeu comporte 5 parties indépendantes. À chaque partie, la probabilité de gagner est 0,4. X désigne le nombre de parties gagnées. 1. Justifier la loi de X. 2. Calculer P(X = 2). 3. Calculer la probabilité de gagner au moins une partie. 4. Donner E(X) et V(X).",
        correction: "1. Il y a 5 épreuves de Bernoulli indépendantes, chacune de probabilité de succès 0,4. Donc X ~ B(5, 0,4).\n2. P(X = 2) = C(5, 2) × 0,4² × 0,6³ = 10 × 0,16 × 0,216 = 0,3456.\n3. P(X ≥ 1) = 1 − P(X = 0) = 1 − 0,6⁵ = 1 − 0,07776 = 0,92224.\n4. E(X) = 5 × 0,4 = 2 et V(X) = 5 × 0,4 × 0,6 = 1,2."
      }
    ]
  }
]);
