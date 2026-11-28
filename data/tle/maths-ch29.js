enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch29",
    titre: "Chapitre 29 : Statistiques à une variable",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch29-l1",
        titre: "Leçon 1 : Organiser une série statistique",
        blocs: [
          {
            type: "introduction",
            titre: "Décrire des données",
            texte: "La statistique descriptive permet de résumer et de représenter des données observées. Une population est l’ensemble des individus étudiés ; le caractère est la propriété observée sur chaque individu.\n\nUne variable quantitative prend des valeurs numériques : une note ou une taille, par exemple. Elle est discrète si ses valeurs sont isolées, et continue si elle peut prendre toutes les valeurs d’un intervalle."
          },
          {
            type: "definition",
            titre: "Effectifs et fréquences",
            texte: "L’effectif nᵢ d’une valeur xᵢ est le nombre d’individus ayant cette valeur. L’effectif total est N = Σnᵢ.\n\nLa fréquence de xᵢ est fᵢ = nᵢ/N. La somme des fréquences vaut 1. Pour obtenir un pourcentage, on multiplie la fréquence par 100."
          },
          {
            type: "tableau",
            titre: "Exemple : notes de 10 élèves",
            entetes: ["Note xᵢ", "8", "10", "12", "14", "Total"],
            lignes: [
              ["Effectif nᵢ", "2", "3", "4", "1", "10"],
              ["Fréquence", "0,2", "0,3", "0,4", "0,1", "1"],
              ["Effectif cumulé croissant", "2", "5", "9", "10", "—"]
            ]
          },
          {
            type: "texte",
            titre: "Effectifs cumulés",
            texte: "L’effectif cumulé croissant associé à une valeur x est le nombre de données inférieures ou égales à x. La fréquence cumulée correspondante est cet effectif divisé par N.\n\nLes cumuls aident à repérer la médiane et les quartiles sans réécrire toutes les données."
          },
          {
            type: "schema",
            titre: "Diagramme en bâtons des notes",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 200'><line x1='45' y1='160' x2='330' y2='160' stroke='#334155' stroke-width='2'/><line x1='45' y1='160' x2='45' y2='20' stroke='#334155' stroke-width='2'/><line x1='90' y1='160' x2='90' y2='100' stroke='#2563eb' stroke-width='5'/><line x1='150' y1='160' x2='150' y2='70' stroke='#2563eb' stroke-width='5'/><line x1='210' y1='160' x2='210' y2='40' stroke='#2563eb' stroke-width='5'/><line x1='270' y1='160' x2='270' y2='130' stroke='#2563eb' stroke-width='5'/><text x='86' y='180' font-size='13'>8</text><text x='143' y='180' font-size='13'>10</text><text x='203' y='180' font-size='13'>12</text><text x='263' y='180' font-size='13'>14</text><text x='15' y='104' font-size='12'>2</text><text x='15' y='74' font-size='12'>3</text><text x='15' y='44' font-size='12'>4</text><text x='12' y='134' font-size='12'>1</text><text x='130' y='197' font-size='12'>Notes</text></svg>",
            legende: "La hauteur de chaque bâton représente l’effectif de la note correspondante."
          }
        ]
      },

      {
        id: "tle-maths-ch29-l2",
        titre: "Leçon 2 : Moyenne et médiane",
        blocs: [
          {
            type: "definition",
            titre: "Moyenne pondérée",
            texte: "Pour les valeurs xᵢ d’effectifs nᵢ, la moyenne est :\n\nx̄ = (Σnᵢxᵢ)/N = Σfᵢxᵢ.\n\nChaque valeur est pondérée par son effectif ou sa fréquence. La moyenne tient compte de toutes les valeurs, mais peut être sensible aux valeurs extrêmes."
          },
          {
            type: "exemple",
            titre: "Calcul d’une moyenne",
            texte: "Pour les notes 8, 10, 12 et 14 d’effectifs respectifs 2, 3, 4 et 1 :\n\nx̄ = (2 × 8 + 3 × 10 + 4 × 12 + 1 × 14)/10 = 108/10 = 10,8."
          },
          {
            type: "definition",
            titre: "Médiane",
            texte: "On range les N données dans l’ordre croissant.\n\n• Si N est impair, la médiane est la valeur de rang (N + 1)/2.\n• Si N est pair, on prend ici la moyenne des valeurs de rangs N/2 et N/2 + 1.\n\nAu moins la moitié des données sont inférieures ou égales à cette médiane et au moins la moitié lui sont supérieures ou égales."
          },
          {
            type: "exemple",
            titre: "Médiane avec des effectifs",
            texte: "Dans la série du tableau, N = 10. Les données de rang 5 et 6 sont respectivement 10 et 12 : l’effectif cumulé atteint 5 à la note 10, puis 9 à la note 12.\n\nLa médiane choisie est donc (10 + 12)/2 = 11."
          },
          {
            type: "remarque",
            titre: "Valeurs extrêmes",
            texte: "Pour 2, 3, 4, 5, 100, la médiane est 4, tandis que la moyenne vaut 22,8. La grande valeur 100 influence fortement la moyenne ; la médiane résiste davantage à cette valeur extrême."
          }
        ]
      },

      {
        id: "tle-maths-ch29-l3",
        titre: "Leçon 3 : Quartiles et dispersion",
        blocs: [
          {
            type: "definition",
            titre: "Quartiles : convention utilisée",
            texte: "Dans ce chapitre, après classement des N données, Q1 est la valeur de rang ⌈N/4⌉ et Q3 celle de rang ⌈3N/4⌉. Le symbole ⌈ ⌉ signifie que l’on arrondit à l’entier supérieur.\n\nAinsi, au moins 25 % des données sont inférieures ou égales à Q1 et au moins 75 % sont inférieures ou égales à Q3. D’autres conventions existent : en examen, suivre celle indiquée dans l’énoncé."
          },
          {
            type: "definition",
            titre: "Étendue et écart interquartile",
            texte: "L’étendue est la différence entre la plus grande et la plus petite valeur. L’écart interquartile est Q3 − Q1.\n\nL’étendue utilise les valeurs extrêmes ; l’écart interquartile résume la dispersion entre les deux quartiles."
          },
          {
            type: "exemple",
            titre: "Lire les quartiles",
            texte: "Pour les notes de l’exemple, N = 10. Le rang de Q1 est ⌈10/4⌉ = 3 ; celui de Q3 est ⌈30/4⌉ = 8.\n\nLa valeur de rang 3 est 10, et celle de rang 8 est 12. Donc Q1 = 10, Q3 = 12 et l’écart interquartile vaut 2. L’étendue est 14 − 8 = 6."
          },
          {
            type: "definition",
            titre: "Variance et écart-type",
            texte: "La variance d’une série d’effectif N est :\n\nV = (Σnᵢ(xᵢ − x̄)²)/N.\n\nOn peut aussi calculer V = (Σnᵢxᵢ²)/N − x̄². L’écart-type est σ = √V.\n\nLa variance utilise le carré de l’unité des données ; l’écart-type s’exprime dans la même unité que les données."
          },
          {
            type: "methode",
            titre: "Calculer la variance",
            texte: "1. Calculer N et la moyenne x̄.\n2. Calculer Σnᵢxᵢ², puis diviser par N.\n3. Soustraire x̄² pour obtenir V.\n4. Prendre la racine carrée pour obtenir σ. Pour limiter les erreurs, conserver les valeurs exactes jusqu’au calcul final."
          }
        ]
      },

      {
        id: "tle-maths-ch29-l4",
        titre: "Leçon 4 : Données regroupées et interprétation",
        blocs: [
          {
            type: "texte",
            titre: "Regroupement en classes",
            texte: "Pour des données nombreuses ou continues, on peut regrouper les valeurs dans des intervalles appelés classes, par exemple [0 ; 10[, [10 ; 20[, [20 ; 30[.\n\nLa notation [0 ; 10[ inclut 0 mais exclut 10. Il faut choisir des classes qui ne se chevauchent pas et couvrir toutes les données étudiées."
          },
          {
            type: "methode",
            titre: "Estimer une moyenne par les centres de classes",
            texte: "Si seules les classes et leurs effectifs sont connus, on peut remplacer les valeurs de chaque classe par son centre. On calcule ensuite la moyenne pondérée de ces centres.\n\nLe résultat est une estimation, pas nécessairement la moyenne exacte des données initiales : les valeurs à l’intérieur des classes ne sont pas connues."
          },
          {
            type: "exemple",
            titre: "Estimation",
            texte: "Les classes [0 ; 10[, [10 ; 20[ et [20 ; 30[ ont pour effectifs respectifs 2, 5 et 3. Leurs centres sont 5, 15 et 25.\n\nLa moyenne estimée vaut (2 × 5 + 5 × 15 + 3 × 25)/10 = 160/10 = 16."
          },
          {
            type: "texte",
            titre: "Histogramme",
            texte: "Dans un histogramme, chaque classe est représentée par un rectangle. L’aire de chaque rectangle est proportionnelle à l’effectif de la classe.\n\nSi toutes les classes ont la même amplitude, les hauteurs peuvent être proportionnelles aux effectifs. Si les amplitudes diffèrent, on utilise une hauteur proportionnelle à la densité : effectif divisé par amplitude."
          },
          {
            type: "methode",
            titre: "Comparer deux séries",
            texte: "Comparer d’abord un indicateur de position, comme la moyenne ou la médiane, puis un indicateur de dispersion, comme l’écart-type ou l’écart interquartile.\n\nUne moyenne plus élevée ne signifie pas nécessairement que toutes les valeurs sont plus élevées. Préciser les unités et le contexte avant de conclure."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une valeur apparaît 6 fois dans une série de 30 données. Donner sa fréquence et son pourcentage.",
        correction: "Sa fréquence est 6/30 = 0,2, soit 20 %."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer la moyenne de 4, 6, 8 et 10.",
        correction: "La moyenne vaut (4 + 6 + 8 + 10)/4 = 28/4 = 7."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer la médiane de 3, 7, 2, 9, 5.",
        correction: "On range les données : 2, 3, 5, 7, 9. Il y a 5 valeurs ; celle de rang 3 est 5. La médiane est donc 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer l’étendue de la série 12, 7, 15, 10, 8.",
        correction: "La plus petite valeur est 7 et la plus grande est 15. L’étendue vaut 15 − 7 = 8."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une série contient les valeurs 1, 2 et 3 avec les effectifs respectifs 2, 4 et 4. Donner l’effectif total et l’effectif cumulé jusqu’à 2.",
        correction: "L’effectif total est 2 + 4 + 4 = 10. L’effectif cumulé jusqu’à 2 est 2 + 4 = 6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les notes 5, 10 et 15 ont pour effectifs respectifs 2, 3 et 1. Calculer la moyenne.",
        correction: "L’effectif total est 6. La moyenne vaut (2 × 5 + 3 × 10 + 1 × 15)/6 = 55/6, soit environ 9,17."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer la médiane de la série 2, 4, 4, 6, 8, 10.",
        correction: "La série est déjà rangée et contient 6 valeurs. Les valeurs centrales, de rangs 3 et 4, sont 4 et 6. La médiane choisie est (4 + 6)/2 = 5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Avec la convention du cours, déterminer Q1 et Q3 pour la série ordonnée 1, 2, 3, 4, 5, 6, 7, 8.",
        correction: "N = 8. Le rang de Q1 est ⌈8/4⌉ = 2 et celui de Q3 est ⌈24/4⌉ = 6. Donc Q1 = 2 et Q3 = 6. L’écart interquartile vaut 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer la variance et l’écart-type de la série 1, 2, 3.",
        correction: "La moyenne est 2. La variance vaut ((1 − 2)² + (2 − 2)² + (3 − 2)²)/3 = 2/3. L’écart-type est √(2/3), soit environ 0,82."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les classes [0 ; 10[ et [10 ; 20[ ont pour effectifs 3 et 7. Estimer la moyenne à partir des centres de classes.",
        correction: "Les centres sont 5 et 15. La moyenne estimée est (3 × 5 + 7 × 15)/10 = 120/10 = 12. Il s’agit d’une estimation."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un histogramme représente une classe d’amplitude 5 et d’effectif 20. Quelle hauteur utiliser si l’aire du rectangle doit être égale à l’effectif ?",
        correction: "Aire = amplitude × hauteur. On choisit donc une hauteur égale à 20/5 = 4. L’aire du rectangle vaut alors 5 × 4 = 20."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une série prend les valeurs 0, 2 et 4 avec les effectifs 1, 2 et 1. Calculer sa moyenne, sa variance et son écart-type.",
        correction: "N = 4 et x̄ = (0 + 2 × 2 + 4)/4 = 2.\nLa moyenne des carrés est (0² + 2 × 2² + 4²)/4 = 24/4 = 6.\nDonc V = 6 − 2² = 2 et σ = √2, soit environ 1,41."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux classes ont les mêmes moyennes de notes : 12. L’écart-type de la classe A est 2 et celui de la classe B est 5. Que peut-on dire de la dispersion ? Peut-on affirmer que chaque note de A est plus proche de 12 que chaque note de B ?",
        correction: "Les notes de B sont globalement plus dispersées autour de leur moyenne, puisque 5 > 2. Cependant, ces deux indicateurs ne permettent pas de comparer chaque note individuellement : on ne peut pas affirmer que chaque note de A est plus proche de 12 que chaque note de B."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Les notes 8, 10, 12 et 14 ont pour effectifs 2, 3, 4 et 1. 1. Calculer la moyenne. 2. Déterminer la médiane, Q1 et Q3 avec les conventions du cours. 3. Calculer la variance et l’écart-type.",
        correction: "1. N = 10 et x̄ = (2 × 8 + 3 × 10 + 4 × 12 + 14)/10 = 10,8.\n2. Les valeurs de rangs 5 et 6 sont 10 et 12, donc la médiane est 11. Les rangs de Q1 et Q3 sont 3 et 8 : Q1 = 10 et Q3 = 12.\n3. La moyenne des carrés est (2 × 64 + 3 × 100 + 4 × 144 + 196)/10 = 120. Donc V = 120 − 10,8² = 3,36 et σ = √3,36 ≈ 1,83."
      }
    ]
  }
]);
