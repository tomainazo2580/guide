// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 5 : signe et inéquations du second degré.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-signe-inequations-second-degre",
    titre: "Chapitre 5 : Signe et inéquations du second degré",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch5-signe",
        titre: "Comprendre le signe d'une expression",
        blocs: [
          {
            type: "introduction",
            titre: "Au-delà des équations",
            texte: "Dans le chapitre précédent, nous avons résolu des équations comme x² - 5x + 6 = 0.\n\nNous allons maintenant chercher pour quelles valeurs de x une expression est positive, négative ou nulle. Cela permettra de résoudre des inéquations comme x² - 5x + 6 ≤ 0."
          },
          {
            type: "definition",
            titre: "Étudier un signe",
            texte: "Étudier le signe d'une expression P(x), c'est déterminer les valeurs de x pour lesquelles :\n\n• P(x) > 0 : l'expression est strictement positive ;\n• P(x) = 0 : l'expression est nulle ;\n• P(x) < 0 : l'expression est strictement négative.\n\nLes valeurs de x pour lesquelles P(x) = 0 sont les racines de P."
          },
          {
            type: "rappel",
            titre: "Signe d'un produit",
            texte: "Pour un produit de deux nombres non nuls :\n\n• deux facteurs de même signe donnent un produit positif ;\n• deux facteurs de signes contraires donnent un produit négatif.\n\nSi au moins un facteur est nul, le produit est nul.\n\nExemples : (-2) × (-3) = 6 et (-2) × 3 = -6."
          },
          {
            type: "methode",
            titre: "Signe d'un facteur x - r",
            texte: "Pour un réel r :\n\n• si x < r, alors x - r < 0 ;\n• si x = r, alors x - r = 0 ;\n• si x > r, alors x - r > 0.\n\nExemple : x - 3 est négatif pour x < 3, nul pour x = 3 et positif pour x > 3."
          },
          {
            type: "remarque",
            titre: "Attention au coefficient négatif",
            texte: "Le signe de 2 - x est l'opposé de celui de x - 2, car 2 - x = -(x - 2).\n\nAinsi, 2 - x est positif si x < 2, nul si x = 2 et négatif si x > 2."
          }
        ]
      },

      {
        id: "m2-ch5-deux-racines",
        titre: "Le cas de deux racines distinctes",
        blocs: [
          {
            type: "regle",
            titre: "Règle générale",
            texte: "Soit P(x) = ax² + bx + c, avec a ≠ 0. Si son discriminant Δ est strictement positif, P possède deux racines distinctes.\n\nAprès les avoir rangées dans l'ordre r₁ < r₂ :\n\n• P(x) est du signe de a à l'extérieur des racines : pour x < r₁ ou x > r₂ ;\n• P(x) est du signe contraire de a entre les racines : pour r₁ < x < r₂ ;\n• P(x) = 0 en r₁ et en r₂."
          },
          {
            type: "methode",
            titre: "Pourquoi cette règle ?",
            texte: "Quand P possède deux racines r₁ < r₂ :\n\nP(x) = a(x - r₁)(x - r₂).\n\n• Si x < r₁, les deux facteurs x - r₁ et x - r₂ sont négatifs : leur produit est positif. P est donc du signe de a.\n• Si r₁ < x < r₂, le premier facteur est positif et le second négatif : leur produit est négatif. P est donc du signe contraire de a.\n• Si x > r₂, les deux facteurs sont positifs : leur produit est positif. P est donc du signe de a."
          },
          {
            type: "tableau",
            titre: "Exemple : P(x) = (x - 2)(x - 3)",
            entetes: ["Valeurs de x", "x < 2", "x = 2", "2 < x < 3", "x = 3", "x > 3"],
            lignes: [
              ["Signe de x - 2", "−", "0", "+", "+", "+"],
              ["Signe de x - 3", "−", "−", "−", "0", "+"],
              ["Signe de P(x)", "+", "0", "−", "0", "+"]
            ]
          },
          {
            type: "exemple",
            titre: "Lire le résultat",
            texte: "Pour P(x) = x² - 5x + 6 = (x - 2)(x - 3) :\n\n• P(x) > 0 sur ]-∞ ; 2[ ∪ ]3 ; +∞[ ;\n• P(x) = 0 pour x = 2 ou x = 3 ;\n• P(x) < 0 sur ]2 ; 3[."
          },
          {
            type: "schema",
            titre: "Signe et parabole : deux racines",
            svg: "<svg viewBox='0 0 360 190' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Parabole ouverte vers le haut, au-dessus de l’axe hors de deux racines et en dessous entre les racines'><rect x='5' y='5' width='350' height='180' rx='10' fill='#f8fafc' stroke='#cbd5e1'/><line x1='20' y1='95' x2='340' y2='95' stroke='#334155' stroke-width='2'/><path d='M340 95 l-8 -4 M340 95 l-8 4' fill='none' stroke='#334155' stroke-width='2'/><path d='M40 20 Q180 230 320 20' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='99' cy='95' r='4' fill='#dc2626'/><circle cx='261' cy='95' r='4' fill='#dc2626'/><text x='99' y='119' text-anchor='middle' font-size='14' fill='#334155'>r₁</text><text x='261' y='119' text-anchor='middle' font-size='14' fill='#334155'>r₂</text><text x='50' y='80' text-anchor='middle' font-size='16' fill='#166534'>+</text><text x='180' y='80' text-anchor='middle' font-size='16' fill='#b91c1c'>−</text><text x='310' y='80' text-anchor='middle' font-size='16' fill='#166534'>+</text><text x='180' y='175' text-anchor='middle' font-size='13' fill='#334155'>Exemple avec a &gt; 0</text></svg>",
            legende: "Illustration qualitative : pour a > 0, la parabole est au-dessus de l'axe à l'extérieur des racines et en dessous entre elles. Les points où elle coupe l'axe correspondent aux racines."
          },
          {
            type: "remarque",
            titre: "Ranger les racines",
            texte: "Avant d'appliquer la règle, range les racines de la plus petite à la plus grande.\n\nLes résultats donnés par les formules du discriminant ne sont pas nécessairement dans l'ordre lorsque a < 0."
          }
        ]
      },

      {
        id: "m2-ch5-autres-cas",
        titre: "Racine double ou absence de racine",
        blocs: [
          {
            type: "regle",
            titre: "Quand Δ = 0",
            texte: "Si Δ = 0, P possède une racine double r = -b/(2a) et s'écrit :\n\nP(x) = a(x - r)².\n\nUn carré est positif ou nul. Donc P est du signe de a partout, sauf en r où P(r) = 0.\n\nLe signe ne change pas lorsqu'on traverse la racine double."
          },
          {
            type: "exemple",
            titre: "Exemple avec une racine double",
            texte: "P(x) = -2x² + 4x - 2 = -2(x - 1)².\n\nComme (x - 1)² ≥ 0 :\n\n• P(x) < 0 pour x ≠ 1 ;\n• P(1) = 0.\n\nP n'est jamais strictement positif."
          },
          {
            type: "regle",
            titre: "Quand Δ < 0",
            texte: "Si Δ < 0, P n'a aucune racine réelle et P(x) est strictement du signe de a pour tout réel x.\n\n• Si a > 0, P(x) > 0 pour tout x ∈ ℝ.\n• Si a < 0, P(x) < 0 pour tout x ∈ ℝ."
          },
          {
            type: "exemple",
            titre: "Exemple sans racine réelle",
            texte: "Pour P(x) = x² + 2x + 5 :\n\nΔ = 2² - 4 × 1 × 5 = -16 < 0.\n\nComme a = 1 > 0, P(x) > 0 pour tout réel x.\n\nOn peut aussi le voir avec la forme canonique : P(x) = (x + 1)² + 4 ≥ 4."
          },
          {
            type: "tableau",
            titre: "Résumé des trois cas",
            entetes: ["Discriminant", "Racines réelles", "Signe de P"],
            lignes: [
              ["Δ > 0", "Deux racines r₁ < r₂", "Signe de a à l'extérieur ; signe contraire entre les racines"],
              ["Δ = 0", "Une racine double r", "Signe de a sauf en r, où P est nul"],
              ["Δ < 0", "Aucune", "Strictement du signe de a sur ℝ"]
            ]
          }
        ]
      },

      {
        id: "m2-ch5-resoudre",
        titre: "Résoudre une inéquation du second degré",
        blocs: [
          {
            type: "methode",
            titre: "Les étapes",
            texte: "1. Ramène tous les termes dans un même membre pour obtenir P(x) comparé à 0.\n2. Identifie a, b et c, puis calcule Δ, sauf si une factorisation simple est déjà disponible.\n3. Détermine les racines et range-les dans l'ordre.\n4. Étudie le signe de P.\n5. Choisis les intervalles correspondant à l'inégalité demandée.\n6. Inclus les racines avec ≤ ou ≥ ; exclus-les avec < ou >."
          },
          {
            type: "methode",
            titre: "Exemple avec deux racines",
            texte: "Résolvons x² - 5x + 6 ≤ 0.\n\nP(x) = (x - 2)(x - 3). Ses racines sont 2 et 3, et a = 1 > 0.\n\nP est négatif entre les racines et nul aux racines.\n\nComme on cherche P(x) ≤ 0, on prend l'intervalle entre les racines et on inclut les bornes :\n\nS = [2 ; 3]."
          },
          {
            type: "exemple",
            titre: "Exemple avec a négatif",
            texte: "Résolvons -x² + x + 6 > 0.\n\nOn factorise : -x² + x + 6 = -(x + 2)(x - 3).\n\nLes racines sont -2 et 3 ; le coefficient a vaut -1.\n\nP est du signe contraire de a entre les racines, donc positif sur ]-2 ; 3[.\n\nL'inégalité est stricte : les racines sont exclues. Ainsi S = ]-2 ; 3[."
          },
          {
            type: "exemple",
            titre: "Exemple sans racine",
            texte: "Résolvons x² + 1 ≤ 0.\n\nPour tout réel x, x² ≥ 0, donc x² + 1 ≥ 1 > 0.\n\nL'expression n'est jamais négative ou nulle. L'ensemble des solutions est vide : S = ∅."
          },
          {
            type: "remarque",
            titre: "Changer le sens si on multiplie par -1",
            texte: "Pour transformer -x² + 5x - 6 > 0, on peut multiplier les deux membres par -1. Il faut alors inverser le sens :\n\nx² - 5x + 6 < 0.\n\nOn obtient ]2 ; 3[. Oublier l'inversion donnerait une réponse incorrecte."
          }
        ]
      },

      {
        id: "m2-ch5-applications",
        titre: "Appliquer et vérifier",
        blocs: [
          {
            type: "methode",
            titre: "Vérifier avec des valeurs tests",
            texte: "Une fois les racines trouvées et rangées, on peut tester une valeur dans chaque intervalle pour contrôler le signe.\n\nPour P(x) = (x - 2)(x - 3) :\n\n• x = 0 donne P(0) = 6 > 0 ;\n• x = 2,5 donne P(2,5) = 0,5 × (-0,5) < 0 ;\n• x = 4 donne P(4) = 2 > 0.\n\nCes tests aident à vérifier le tableau. La règle sur le signe justifie le résultat sur chaque intervalle entier."
          },
          {
            type: "methode",
            titre: "Tenir compte du contexte",
            texte: "Dans un problème, x peut être soumis à une condition supplémentaire : une longueur doit être positive, une quantité peut être limitée, etc.\n\nAprès avoir résolu l'inéquation, on conserve seulement les solutions qui respectent aussi les conditions du problème."
          },
          {
            type: "exemple",
            titre: "Un rectangle",
            texte: "Un rectangle a pour côtés x et 10 - x, en mètres, avec 0 < x < 10. Son aire est A(x) = x(10 - x).\n\nPour que son aire soit au moins 21 m² :\n\nx(10 - x) ≥ 21,\nsoit -x² + 10x - 21 ≥ 0.\n\nOn factorise : -x² + 10x - 21 = -(x - 3)(x - 7).\n\nCette expression est positive entre ses racines et nulle aux racines. Donc x ∈ [3 ; 7].\n\nCet intervalle respecte la condition 0 < x < 10."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour chaque valeur de x, indique le signe de x - 3 :\n\n1. x = 1\n2. x = 3\n3. x = 5",
        correction: "1. Pour x = 1, x - 3 = -2 : le signe est négatif.\n\n2. Pour x = 3, x - 3 = 0 : l'expression est nulle.\n\n3. Pour x = 5, x - 3 = 2 : le signe est positif."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On considère P(x) = (x - 1)(x - 4).\n\n1. Quelles sont ses racines ?\n2. Calcule P(0), P(2) et P(5), puis indique leurs signes.",
        correction: "1. Un produit est nul si l'un de ses facteurs est nul. Les racines sont donc 1 et 4.\n\n2. P(0) = (-1)(-4) = 4 > 0.\nP(2) = 1 × (-2) = -2 < 0.\nP(5) = 4 × 1 = 4 > 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit P(x) = (x + 2)(x - 3).\n\n1. Détermine les racines de P.\n2. Étudie son signe sur ℝ.\n3. Résous P(x) < 0.",
        correction: "1. Les racines sont -2 et 3.\n\n2. Le coefficient de x² est positif. P est donc positif à l'extérieur des racines, négatif entre elles et nul aux racines.\n\nP(x) > 0 sur ]-∞ ; -2[ ∪ ]3 ; +∞[ ; P(x) = 0 pour x = -2 ou x = 3 ; P(x) < 0 sur ]-2 ; 3[.\n\n3. L'ensemble des solutions est S = ]-2 ; 3[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ :\n\n1. (x - 2)² ≤ 0\n2. (x + 1)² > 0\n3. x² + 4 < 0",
        correction: "1. Un carré est toujours positif ou nul. Il est inférieur ou égal à 0 seulement s'il est nul. Donc x - 2 = 0 et S = {2}.\n\n2. Le carré est strictement positif sauf lorsque x + 1 = 0. Donc S = ]-∞ ; -1[ ∪ ]-1 ; +∞[.\n\n3. Pour tout x réel, x² + 4 ≥ 4 > 0. Il n'y a pas de solution : S = ∅."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ :\n\n1. x² - 5x + 6 ≥ 0\n2. x² - 5x + 6 < 0",
        correction: "On factorise : x² - 5x + 6 = (x - 2)(x - 3). Les racines sont 2 et 3 et a = 1 > 0.\n\nLe trinôme est positif à l'extérieur des racines, négatif entre elles et nul en 2 et 3.\n\n1. Pour ≥ 0, on prend l'extérieur et les racines : S = ]-∞ ; 2] ∪ [3 ; +∞[.\n\n2. Pour < 0, on prend l'intérieur sans les racines : S = ]2 ; 3[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Étudie le signe de P(x) = -x² + x + 6, puis résous P(x) ≥ 0.",
        correction: "On factorise : P(x) = -(x² - x - 6) = -(x + 2)(x - 3).\n\nLes racines sont -2 et 3. Comme a = -1 < 0, P est négatif à l'extérieur des racines et positif entre elles.\n\nP(x) < 0 sur ]-∞ ; -2[ ∪ ]3 ; +∞[ ; P(x) = 0 en -2 et 3 ; P(x) > 0 sur ]-2 ; 3[.\n\nPour P(x) ≥ 0, on inclut les racines : S = [-2 ; 3]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour chacune des expressions suivantes, calcule le discriminant puis étudie le signe sur ℝ :\n\n1. A(x) = x² - 6x + 9\n2. B(x) = -x² - 2x - 5",
        correction: "1. Pour A, Δ = (-6)² - 4 × 1 × 9 = 0. La racine double est 3. Comme a = 1 > 0, A(x) > 0 pour x ≠ 3 et A(3) = 0. En effet, A(x) = (x - 3)².\n\n2. Pour B, a = -1, b = -2, c = -5. Δ = (-2)² - 4 × (-1) × (-5) = 4 - 20 = -16 < 0. Comme a < 0, B(x) < 0 pour tout réel x."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ :\n\n2x² + x - 3 ≤ 0.",
        correction: "On pose P(x) = 2x² + x - 3. Ici a = 2, b = 1 et c = -3.\n\nΔ = 1² - 4 × 2 × (-3) = 25.\n\nLes racines sont (-1 - 5)/4 = -3/2 et (-1 + 5)/4 = 1.\n\nComme a > 0, P est négatif entre les racines et nul aux racines. L'inégalité est large, donc les bornes sont incluses :\n\nS = [-3/2 ; 1]."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un rectangle a un périmètre de 24 m. Un côté mesure x mètres, avec 0 < x < 12.\n\n1. Exprime l'autre côté puis l'aire A(x).\n2. Détermine les valeurs de x pour lesquelles l'aire est au moins 32 m².\n3. Vérifie que tes solutions respectent les conditions du problème.",
        correction: "1. Si l'autre côté mesure L, alors 2(x + L) = 24, donc L = 12 - x.\n\nL'aire vaut A(x) = x(12 - x) = -x² + 12x.\n\n2. On cherche -x² + 12x ≥ 32, soit -x² + 12x - 32 ≥ 0.\n\nOr -x² + 12x - 32 = -(x² - 12x + 32) = -(x - 4)(x - 8).\n\nLes racines sont 4 et 8. Le coefficient de x² est négatif : le trinôme est positif entre les racines et nul aux racines.\n\nDonc x ∈ [4 ; 8].\n\n3. Tout x de [4 ; 8] vérifie 0 < x < 12. Les deux longueurs sont donc positives. Les valeurs possibles sont bien x ∈ [4 ; 8] mètres."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère P(x) = 2x² - 8x + 6.\n\n1. Mets P sous forme canonique et détermine son minimum sur ℝ.\n2. Calcule son discriminant et ses racines.\n3. Résous P(x) < 0.\n4. Résous simultanément P(x) < 0 et x ≥ 2.",
        correction: "1. P(x) = 2(x² - 4x) + 6 = 2[(x - 2)² - 4] + 6 = 2(x - 2)² - 2.\n\nComme le carré est positif ou nul, P(x) ≥ -2. Le minimum est -2, atteint pour x = 2.\n\n2. Δ = (-8)² - 4 × 2 × 6 = 64 - 48 = 16.\n\nLes racines sont (8 - 4)/4 = 1 et (8 + 4)/4 = 3.\n\n3. Comme a = 2 > 0, P est strictement négatif entre ses racines. Donc S = ]1 ; 3[.\n\n4. Il faut prendre l'intersection de ]1 ; 3[ avec [2 ; +∞[. L'ensemble des solutions communes est [2 ; 3[."
      }
    ]
  }
]);
