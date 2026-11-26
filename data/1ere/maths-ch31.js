enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-moyenne-mediane-variance-ecart-type",
    titre: "Chapitre 31 : Moyenne, médiane, variance et écart-type",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch31-moyenne",
        titre: "1. Moyenne d'une série statistique",
        blocs: [
          {
            type: "introduction",
            titre: "Résumer et comparer",
            texte: "Une moyenne donne une indication sur le niveau général d'une série. Elle ne décrit toutefois pas à elle seule la répartition des valeurs : deux séries de même moyenne peuvent être plus ou moins dispersées."
          },
          {
            type: "definition",
            titre: "Moyenne pondérée",
            texte: "Si les valeurs x₁, x₂, … ont pour effectifs respectifs n₁, n₂, … et si N est l'effectif total, la moyenne est x̄ = (n₁x₁ + n₂x₂ + …)/N. Avec les fréquences fᵢ = nᵢ/N, elle s'écrit aussi x̄ = f₁x₁ + f₂x₂ + … ."
          },
          {
            type: "exemple",
            titre: "Calculer une moyenne",
            texte: "Une série comporte 2 fois la valeur 4, 3 fois la valeur 6 et 1 fois la valeur 10. L'effectif total est 6 et la moyenne vaut (2 × 4 + 3 × 6 + 1 × 10)/6 = 36/6 = 6."
          },
          {
            type: "regle",
            titre: "Série regroupée en classes",
            texte: "Pour estimer la moyenne d'une série regroupée en classes, on remplace les valeurs de chaque classe par son centre cᵢ. On calcule alors x̄ ≈ (n₁c₁ + n₂c₂ + …)/N. Le résultat est en général une estimation, car les valeurs individuelles ne sont pas connues."
          },
          {
            type: "tableau",
            titre: "Exemple de série en classes",
            entetes: ["Classe", "[0 ; 10[", "[10 ; 20[", "[20 ; 30[", "Total"],
            lignes: [
              ["Effectif", "2", "5", "3", "10"],
              ["Centre", "5", "15", "25", "—"],
              ["Effectif × centre", "10", "75", "75", "160"]
            ]
          },
          {
            type: "exemple",
            titre: "Estimation par les centres",
            texte: "Pour la série du tableau, la moyenne estimée est (2 × 5 + 5 × 15 + 3 × 25)/10 = 160/10 = 16. La moyenne exacte ne peut pas être retrouvée à partir des seuls effectifs par classe."
          }
        ]
      },
      {
        id: "m1-ch31-mediane",
        titre: "2. Médiane et classe médiane",
        blocs: [
          {
            type: "definition",
            titre: "Médiane d'une série ordonnée",
            texte: "Une médiane partage une série ordonnée en deux groupes : au moins la moitié des valeurs sont inférieures ou égales à elle et au moins la moitié sont supérieures ou égales à elle."
          },
          {
            type: "methode",
            titre: "Calcul à partir des données individuelles",
            texte: "Ranger les N valeurs dans l'ordre croissant. Si N est impair, la valeur de rang (N + 1)/2 est la médiane. Si N est pair, on prend habituellement la moyenne des valeurs de rang N/2 et N/2 + 1."
          },
          {
            type: "exemple",
            titre: "Effectif pair",
            texte: "Pour les valeurs ordonnées 2 ; 4 ; 5 ; 7 ; 8 ; 10, les deux valeurs centrales sont 5 et 7. La médiane usuelle est (5 + 7)/2 = 6."
          },
          {
            type: "regle",
            titre: "Repérer une classe médiane",
            texte: "Pour une série en classes, les effectifs cumulés permettent de repérer où se situe la moitié de l'effectif. Si le cumul avant une classe est strictement inférieur à N/2 et que le cumul à sa fin est strictement supérieur à N/2, les deux valeurs centrales d'une série paire sont dans cette classe. Un cumul égal à N/2 sur une frontière demande un examen particulier."
          },
          {
            type: "methode",
            titre: "Estimation par interpolation linéaire",
            texte: "Si le niveau N/2 se trouve à l'intérieur d'une classe [L ; U[ d'effectif n, avec un cumul C avant cette classe, on peut estimer la médiane par L + ((N/2 − C)/n) × (U − L). Cette estimation suppose une répartition uniforme dans la classe ; elle n'est pas la médiane exacte garantie par le tableau."
          },
          {
            type: "exemple",
            titre: "Médiane estimée d'une série en classes",
            texte: "Pour les classes [0 ; 10[, [10 ; 20[, [20 ; 30[ d'effectifs 2, 5 et 3, N = 10. Les cumuls sont 2, 7 et 10. Le niveau N/2 = 5 se trouve dans [10 ; 20[. Avec L = 10, C = 2 et n = 5, la médiane estimée est 10 + ((5 − 2)/5) × 10 = 16."
          },
          {
            type: "schema",
            titre: "Lecture d'une médiane estimée sur une courbe cumulative",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 280' role='img' aria-label='Courbe cumulative passant par les points zéro zéro, dix deux, vingt sept et trente dix. Le niveau cinq coupe le segment entre dix et vingt à l’abscisse seize.'><rect width='460' height='280' fill='white'/><line x1='60' y1='220' x2='420' y2='220' stroke='#333' stroke-width='2'/><line x1='60' y1='220' x2='60' y2='25' stroke='#333' stroke-width='2'/><polyline points='60,220 160,184 260,94 360,40' fill='none' stroke='#1769aa' stroke-width='3'/><line x1='60' y1='130' x2='220' y2='130' stroke='#c43b35' stroke-dasharray='5 4'/><line x1='220' y1='130' x2='220' y2='220' stroke='#c43b35' stroke-dasharray='5 4'/><circle cx='220' cy='130' r='4' fill='#c43b35'/><text x='42' y='224' font-size='12'>0</text><text x='42' y='188' font-size='12'>2</text><text x='42' y='134' font-size='12'>5</text><text x='42' y='98' font-size='12'>7</text><text x='34' y='44' font-size='12'>10</text><text x='56' y='239' font-size='12'>0</text><text x='153' y='239' font-size='12'>10</text><text x='213' y='239' font-size='12' fill='#c43b35'>16</text><text x='253' y='239' font-size='12'>20</text><text x='353' y='239' font-size='12'>30</text><text x='65' y='20' font-size='13'>Effectif cumulé</text><text x='292' y='262' font-size='13'>Valeur</text></svg>",
            legende: "On lit le niveau N/2 = 5 sur la courbe reliée par segments : l'abscisse obtenue est 16. Cette lecture est une estimation."
          },
          {
            type: "remarque",
            titre: "À la frontière entre deux classes",
            texte: "Si un cumul vaut exactement N/2 à une borne, les données groupées peuvent placer les deux valeurs centrales de part et d'autre de cette borne. La médiane usuelle exacte dépend alors des valeurs individuelles ; il ne faut pas affirmer qu'elle est exactement égale à la borne."
          }
        ]
      },
      {
        id: "m1-ch31-dispersion",
        titre: "3. Variance et écart-type",
        blocs: [
          {
            type: "definition",
            titre: "Variance",
            texte: "La variance mesure la dispersion autour de la moyenne. Pour une série de valeurs xᵢ d'effectifs nᵢ et de moyenne x̄, elle est V = (Σ nᵢ(xᵢ − x̄)²)/N. Elle est toujours positive ou nulle."
          },
          {
            type: "definition",
            titre: "Écart-type",
            texte: "L'écart-type est σ = √V. Il est exprimé dans la même unité que les données, tandis que la variance est exprimée dans l'unité au carré."
          },
          {
            type: "regle",
            titre: "Formule de calcul",
            texte: "On peut aussi calculer V = (Σ nᵢxᵢ²)/N − x̄². Cette formule et celle utilisant les écarts à la moyenne donnent la même variance."
          },
          {
            type: "exemple",
            titre: "Calcul détaillé",
            texte: "Pour la série 2 ; 4 ; 6, la moyenne est 4. La variance vaut ((2 − 4)² + (4 − 4)² + (6 − 4)²)/3 = 8/3. L'écart-type vaut √(8/3), soit environ 1,63."
          },
          {
            type: "regle",
            titre: "Estimation à partir de classes",
            texte: "Lorsque seules les classes et leurs effectifs sont connus, on peut remplacer chaque valeur par le centre de sa classe. On calcule alors la variance et l'écart-type de cette série de centres pondérés : ce sont des estimations de ceux de la série initiale."
          },
          {
            type: "exemple",
            titre: "Variance estimée avec les centres",
            texte: "Pour les classes [0 ; 10[, [10 ; 20[, [20 ; 30[ d'effectifs 2, 5 et 3, les centres sont 5, 15 et 25 et la moyenne estimée vaut 16. La variance de la série de centres est (2 × 5² + 5 × 15² + 3 × 25²)/10 − 16² = 305 − 256 = 49. L'écart-type estimé est √49 = 7."
          },
          {
            type: "remarque",
            titre: "Interpréter",
            texte: "Plus l'écart-type est grand, plus les valeurs sont dispersées autour de leur moyenne. Une variance nulle signifie que toutes les valeurs de la série sont égales. Pour comparer des séries très différentes, il faut aussi tenir compte de leurs unités et de leurs niveaux moyens."
          }
        ]
      },
      {
        id: "m1-ch31-methode",
        titre: "4. Méthode de synthèse",
        blocs: [
          {
            type: "methode",
            titre: "Étudier une série en classes",
            texte: "1. Calculer l'effectif total. 2. Déterminer les centres et les effectifs cumulés. 3. Estimer la moyenne avec les centres. 4. Repérer la classe contenant le niveau N/2 et, si demandé, estimer la médiane par interpolation. 5. Calculer la variance des centres pondérés puis son écart-type. Indiquer clairement que les mesures obtenues à partir des classes sont des estimations."
          },
          {
            type: "remarque",
            titre: "Arrondis",
            texte: "Conserver les valeurs exactes pendant les calculs lorsque c'est possible. Arrondir à la fin selon la précision demandée."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer la moyenne et la médiane de la série ordonnée : 3 ; 5 ; 7.",
        correction: "La moyenne vaut (3 + 5 + 7)/3 = 5. L'effectif est impair et la valeur centrale est 5 : la médiane est 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer les centres des classes [0 ; 10[, [10 ; 20[ et [20 ; 30[.",
        correction: "Les centres sont respectivement (0 + 10)/2 = 5, (10 + 20)/2 = 15 et (20 + 30)/2 = 25."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une série prend la valeur 2 avec un effectif de 3 et la valeur 8 avec un effectif de 2. Calculer sa moyenne.",
        correction: "L'effectif total est 5. La moyenne vaut (3 × 2 + 2 × 8)/5 = 22/5 = 4,4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les classes [0 ; 10[, [10 ; 20[ et [20 ; 30[ ont pour effectifs respectifs 4, 8 et 8. Estimer la moyenne à l'aide des centres.",
        correction: "Les centres sont 5, 15 et 25 ; l'effectif total vaut 20. La moyenne estimée est (4 × 5 + 8 × 15 + 8 × 25)/20 = 340/20 = 17."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une série de 20 valeurs est répartie ainsi : [0 ; 10[ : 4 ; [10 ; 20[ : 8 ; [20 ; 30[ : 8. Repérer la classe dans laquelle se trouvent les valeurs de rangs 10 et 11, puis estimer la médiane par interpolation linéaire.",
        correction: "Les effectifs cumulés sont 4, 12 et 20. Les rangs 10 et 11 sont donc dans [10 ; 20[. Pour le niveau N/2 = 10, avec L = 10, C = 4 et n = 8, l'interpolation donne 10 + ((10 − 4)/8) × 10 = 17,5. Cette valeur est une estimation, pas la médiane exacte nécessairement."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer la moyenne, la variance et l'écart-type de la série 1 ; 3 ; 5. Donner l'écart-type arrondi au centième.",
        correction: "La moyenne vaut (1 + 3 + 5)/3 = 3. La variance vaut ((1 − 3)² + (3 − 3)² + (5 − 3)²)/3 = 8/3. L'écart-type est √(8/3) ≈ 1,63."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une série de 10 valeurs est regroupée ainsi : [0 ; 10[ : 2 ; [10 ; 20[ : 5 ; [20 ; 30[ : 3. Estimer sa moyenne, sa variance et son écart-type à l'aide des centres de classes.",
        correction: "Les centres sont 5, 15 et 25. La moyenne estimée vaut (2 × 5 + 5 × 15 + 3 × 25)/10 = 16. La moyenne des carrés des centres pondérés est (2 × 25 + 5 × 225 + 3 × 625)/10 = 305. La variance estimée vaut 305 − 16² = 49 et l'écart-type estimé vaut √49 = 7. Ces résultats utilisent les centres : ils ne sont pas nécessairement les mesures exactes de la série initiale."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux séries de quatre valeurs sont A : 4 ; 4 ; 6 ; 6 et B : 1 ; 1 ; 9 ; 9. Calculer leurs moyennes et leurs écarts-types. Comparer leurs dispersions.",
        correction: "Les deux moyennes valent 5. Pour A, les écarts à 5 sont −1, −1, 1 et 1 : VA = 1 et σA = 1. Pour B, les écarts sont −4, −4, 4 et 4 : VB = 16 et σB = 4. La série B est plus dispersée autour de la même moyenne."
      }
    ]
  }
]);
