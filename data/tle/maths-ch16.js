enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch16",
    titre: "Chapitre 16 : Matrices et opérations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch16-l1",
        titre: "Leçon 1 : Découvrir les matrices",
        blocs: [
          {
            type: "introduction",
            titre: "Un tableau de nombres",
            texte: "Une matrice permet d’organiser des nombres en lignes et en colonnes. Elle peut représenter des données ou les coefficients d’un système d’équations."
          },
          {
            type: "definition",
            titre: "Dimensions et coefficients",
            texte: "Une matrice à m lignes et n colonnes est dite de dimension m × n. Son coefficient situé à la ligne i et à la colonne j est noté aᵢⱼ.\n\nUne matrice carrée possède autant de lignes que de colonnes. Une matrice carrée d’ordre n est de dimension n × n."
          },
          {
            type: "exemple",
            titre: "Lire une matrice",
            texte: "Soit A = [[2, 5, −1], [3, 0, 4]].\n\nCette matrice possède 2 lignes et 3 colonnes : elle est de dimension 2 × 3.\nSon coefficient a₁₂ vaut 5 et son coefficient a₂₃ vaut 4."
          },
          {
            type: "definition",
            titre: "Égalité de matrices",
            texte: "Deux matrices sont égales si elles ont les mêmes dimensions et si leurs coefficients placés aux mêmes positions sont égaux."
          },
          {
            type: "exemple",
            titre: "Déterminer des coefficients",
            texte: "Si [[x, 2], [3, y]] = [[1, 2], [3, −4]], alors les coefficients correspondants sont égaux : x = 1 et y = −4."
          },
          {
            type: "remarque",
            titre: "Une notation pratique",
            texte: "Dans ce cours, [[a, b], [c, d]] désigne la matrice dont la première ligne est (a, b) et la seconde est (c, d)."
          }
        ]
      },

      {
        id: "tle-maths-ch16-l2",
        titre: "Leçon 2 : Addition et multiplication par un nombre",
        blocs: [
          {
            type: "definition",
            titre: "Addition",
            texte: "On peut additionner deux matrices de mêmes dimensions. On additionne les coefficients situés à la même place."
          },
          {
            type: "exemple",
            titre: "Additionner deux matrices",
            texte: "Soient A = [[1, 2], [3, 4]] et B = [[5, −1], [0, 2]].\n\nA + B = [[1 + 5, 2 − 1], [3 + 0, 4 + 2]] = [[6, 1], [3, 6]]."
          },
          {
            type: "definition",
            titre: "Multiplication par un réel",
            texte: "Pour multiplier une matrice A par un réel k, on multiplie chacun de ses coefficients par k."
          },
          {
            type: "exemple",
            titre: "Multiplier par un nombre",
            texte: "Si A = [[1, −2], [3, 0]], alors :\n\n3A = [[3, −6], [9, 0]]."
          },
          {
            type: "remarque",
            titre: "Dimensions",
            texte: "On ne peut pas additionner une matrice 2 × 3 et une matrice 3 × 2 : leurs dimensions sont différentes."
          }
        ]
      },

      {
        id: "tle-maths-ch16-l3",
        titre: "Leçon 3 : Produit de deux matrices",
        blocs: [
          {
            type: "definition",
            titre: "Condition de multiplication",
            texte: "Le produit AB est défini si le nombre de colonnes de A est égal au nombre de lignes de B.\n\nSi A est de dimension m × n et B de dimension n × p, alors AB est de dimension m × p."
          },
          {
            type: "methode",
            titre: "Ligne par colonne",
            texte: "Pour calculer le coefficient situé à la ligne i et à la colonne j de AB, on multiplie les coefficients de la ligne i de A par les coefficients correspondants de la colonne j de B, puis on additionne les résultats."
          },
          {
            type: "exemple",
            titre: "Produit de deux matrices 2 × 2",
            texte: "Soient A = [[1, 2], [3, 4]] et B = [[2, 0], [1, 5]].\n\nLe coefficient en haut à gauche de AB vaut 1 × 2 + 2 × 1 = 4.\nCelui en haut à droite vaut 1 × 0 + 2 × 5 = 10.\nCelui en bas à gauche vaut 3 × 2 + 4 × 1 = 10.\nCelui en bas à droite vaut 3 × 0 + 4 × 5 = 20.\n\nDonc AB = [[4, 10], [10, 20]]."
          },
          {
            type: "exemple",
            titre: "Le produit dépend de l’ordre",
            texte: "Avec les mêmes matrices :\nBA = [[2, 4], [16, 22]].\n\nAinsi AB ≠ BA. En général, la multiplication des matrices n’est pas commutative. Il arrive même que AB soit défini alors que BA ne l’est pas."
          },
          {
            type: "definition",
            titre: "Matrice identité",
            texte: "La matrice identité Iₙ d’ordre n est la matrice carrée dont les coefficients diagonaux valent 1 et les autres valent 0.\n\nPar exemple, I₂ = [[1, 0], [0, 1]]. Pour une matrice A de dimension m × n : IₘA = A et AIₙ = A."
          }
        ]
      },

      {
        id: "tle-maths-ch16-l4",
        titre: "Leçon 4 : Puissances et transposée",
        blocs: [
          {
            type: "definition",
            titre: "Puissances d’une matrice carrée",
            texte: "Pour une matrice carrée A, on définit A² = AA, A³ = AAA et, plus généralement, Aⁿ comme le produit de n facteurs égaux à A pour n ≥ 1.\n\nPar convention, A⁰ = I, la matrice identité de même ordre."
          },
          {
            type: "exemple",
            titre: "Calculer un carré",
            texte: "Soit A = [[1, 1], [0, 1]].\n\nA² = [[1 × 1 + 1 × 0, 1 × 1 + 1 × 1], [0 × 1 + 1 × 0, 0 × 1 + 1 × 1]]\n= [[1, 2], [0, 1]]."
          },
          {
            type: "definition",
            titre: "Matrice transposée",
            texte: "La transposée de A, notée Aᵀ, s’obtient en échangeant les lignes et les colonnes. Si A est de dimension m × n, alors Aᵀ est de dimension n × m."
          },
          {
            type: "exemple",
            titre: "Calculer une transposée",
            texte: "Si A = [[1, 2, 3], [4, 5, 6]], alors Aᵀ = [[1, 4], [2, 5], [3, 6]].\n\nLa première ligne de A devient la première colonne de Aᵀ."
          },
          {
            type: "remarque",
            titre: "Vérifier les dimensions",
            texte: "Avant chaque opération, vérifier les dimensions : elles indiquent si l’opération est possible et la taille du résultat."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Donner les dimensions de A = [[1, 2, 3], [4, 5, 6]].",
        correction: "A possède 2 lignes et 3 colonnes. Elle est de dimension 2 × 3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans A = [[2, −1], [5, 3]], donner a₁₂ et a₂₁.",
        correction: "a₁₂ est le coefficient de la première ligne et de la deuxième colonne : −1. a₂₁ vaut 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer 2A si A = [[1, 3], [−2, 4]].",
        correction: "On multiplie chaque coefficient par 2 : 2A = [[2, 6], [−4, 8]]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer A + B pour A = [[1, 2], [3, 4]] et B = [[2, 0], [−1, 5]].",
        correction: "On additionne les coefficients correspondants : A + B = [[3, 2], [2, 9]]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer A − B pour A = [[4, 1], [2, 3]] et B = [[1, 2], [0, 5]].",
        correction: "On soustrait les coefficients correspondants : A − B = [[3, −1], [2, −2]]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Si A est de dimension 2 × 3 et B de dimension 3 × 4, quelles sont les dimensions de AB ?",
        correction: "Les dimensions intérieures sont égales à 3, donc AB existe. Le résultat possède 2 lignes et 4 colonnes : il est de dimension 2 × 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Si A est de dimension 2 × 3 et B de dimension 2 × 3, le produit AB est-il défini ?",
        correction: "Non : A possède 3 colonnes, tandis que B possède 2 lignes. Comme 3 ≠ 2, AB n’est pas défini."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer AB avec A = [[1, 2], [0, 1]] et B = [[2, 1], [3, 4]].",
        correction: "Par produits ligne par colonne :\nAB = [[1 × 2 + 2 × 3, 1 × 1 + 2 × 4], [0 × 2 + 1 × 3, 0 × 1 + 1 × 4]] = [[8, 9], [3, 4]]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Donner la transposée de A = [[1, 2, 3], [4, 5, 6]].",
        correction: "On échange lignes et colonnes : Aᵀ = [[1, 4], [2, 5], [3, 6]]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer BA pour A = [[1, 2], [0, 1]] et B = [[2, 1], [3, 4]]. Comparer à AB = [[8, 9], [3, 4]].",
        correction: "BA = [[2 × 1 + 1 × 0, 2 × 2 + 1 × 1], [3 × 1 + 4 × 0, 3 × 2 + 4 × 1]] = [[2, 5], [3, 10]].\n\nCette matrice est différente de AB : l’ordre du produit compte."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer A² pour A = [[2, 1], [0, 3]].",
        correction: "A² = AA = [[2 × 2 + 1 × 0, 2 × 1 + 1 × 3], [0 × 2 + 3 × 0, 0 × 1 + 3 × 3]] = [[4, 5], [0, 9]]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer AB si A = [[1, 2, 0], [−1, 1, 3]] et B = [[1], [2], [1]].",
        correction: "A est de dimension 2 × 3 et B de dimension 3 × 1 : AB est de dimension 2 × 1.\n\nAB = [[1 × 1 + 2 × 2 + 0 × 1], [−1 × 1 + 1 × 2 + 3 × 1]] = [[5], [4]]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer x et y si [[x + 1, 2], [3, 2y]] = [[4, 2], [3, −6]].",
        correction: "L’égalité des coefficients donne x + 1 = 4 et 2y = −6. Donc x = 3 et y = −3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit A = [[1, 1], [0, 1]]. Calculer A³.",
        correction: "On calcule d’abord A² = [[1, 2], [0, 1]]. Puis :\nA³ = A²A = [[1, 2], [0, 1]][[1, 1], [0, 1]] = [[1, 3], [0, 1]]."
      }
    ]
  }
]);
