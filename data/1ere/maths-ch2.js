// ===== GUIDE - Mathématiques Première =====
// Chapitre 2 : signe du trinôme et inéquations du second degré.
// Conçu à partir des répartitions annuelles 2024 de Première C et D.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-signe-trinome-inequations",
    titre: "Chapitre 2 : Signe du trinôme et inéquations du second degré",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-signe-rappels",
        titre: "Comprendre le signe d'une expression",
        blocs: [
          {
            type: "introduction",
            titre: "Une nouvelle question",
            texte: "Au chapitre précédent, nous avons appris à résoudre des équations comme x² - 5x + 6 = 0.\n\nNous allons maintenant chercher pour quelles valeurs de x l'expression est positive ou négative.\n\nPar exemple, résoudre x² - 5x + 6 ≤ 0 consiste à trouver tous les réels x pour lesquels x² - 5x + 6 est négatif ou nul."
          },
          {
            type: "definition",
            titre: "Étudier un signe",
            texte: "Étudier le signe d'une expression P(x), c'est déterminer les valeurs de x pour lesquelles :\n\n• P(x) > 0 : l'expression est strictement positive ;\n• P(x) = 0 : elle est nulle ;\n• P(x) < 0 : elle est strictement négative.\n\nCes informations permettent ensuite de résoudre des inéquations comme P(x) ≥ 0 ou P(x) < 0."
          },
          {
            type: "methode",
            titre: "Rappel : signe d'un produit",
            texte: "Pour deux nombres non nuls :\n\n• même signe : leur produit est positif ;\n• signes contraires : leur produit est négatif.\n\nSi au moins l'un des facteurs est nul, le produit est nul.\n\nPar exemple, (-2) × (-3) = 6 et (-2) × 3 = -6."
          },
          {
            type: "remarque",
            titre: "Attention aux symboles",
            texte: "• P(x) > 0 exclut les valeurs pour lesquelles P(x) = 0.\n• P(x) ≥ 0 inclut les valeurs pour lesquelles P(x) = 0.\n\nDe même, < exclut l'égalité, tandis que ≤ l'inclut."
          }
        ]
      },

      {
        id: "m1-signe-deux-racines",
        titre: "Étudier le signe lorsque Δ > 0",
        blocs: [
          {
            type: "regle",
            titre: "Deux racines distinctes",
            texte: "Soit P(x) = ax² + bx + c, avec a ≠ 0 et Δ > 0. Notons r₁ et r₂ ses racines, rangées dans l'ordre r₁ < r₂.\n\n• À l'extérieur des racines, sur ]-∞ ; r₁[ et ]r₂ ; +∞[, P(x) a le signe de a.\n• Entre les racines, sur ]r₁ ; r₂[, P(x) a le signe contraire de a.\n• Pour x = r₁ ou x = r₂, P(x) = 0."
          },
          {
            type: "methode",
            titre: "Pourquoi cette règle ?",
            texte: "On utilise la factorisation P(x) = a(x - r₁)(x - r₂), avec r₁ < r₂.\n\n• Si x < r₁, les deux facteurs x - r₁ et x - r₂ sont négatifs : leur produit est positif. P(x) a donc le signe de a.\n\n• Si r₁ < x < r₂, le premier facteur est positif et le second négatif : leur produit est négatif. P(x) a donc le signe contraire de a.\n\n• Si x > r₂, les deux facteurs sont positifs : leur produit est positif. P(x) a donc le signe de a.\n\nAux racines, l'un des facteurs est nul."
          },
          {
            type: "schema",
            titre: "Signe avec deux racines : deux exemples",
            svg: "<svg viewBox='0 0 560 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Deux paraboles coupent chacune l’axe des abscisses en deux points. La première est au-dessus de l’axe à l’extérieur des racines et en dessous entre elles ; la seconde est en dessous à l’extérieur et au-dessus entre elles'><rect width='560' height='250' fill='white'/><g stroke='#64748b' stroke-width='1.5'><line x1='20' y1='120' x2='250' y2='120'/><line x1='135' y1='25' x2='135' y2='200'/><line x1='310' y1='120' x2='540' y2='120'/><line x1='425' y1='25' x2='425' y2='200'/></g><path d='M 35 25 Q 135 265 235 25' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M 325 215 Q 425 -25 525 215' fill='none' stroke='#dc2626' stroke-width='3'/><circle cx='85' cy='120' r='4' fill='#2563eb'/><circle cx='185' cy='120' r='4' fill='#2563eb'/><circle cx='375' cy='120' r='4' fill='#dc2626'/><circle cx='475' cy='120' r='4' fill='#dc2626'/><text x='85' y='140' text-anchor='middle' font-size='14' fill='#334155'>r₁</text><text x='185' y='140' text-anchor='middle' font-size='14' fill='#334155'>r₂</text><text x='375' y='140' text-anchor='middle' font-size='14' fill='#334155'>r₁</text><text x='475' y='140' text-anchor='middle' font-size='14' fill='#334155'>r₂</text><text x='135' y='230' text-anchor='middle' font-size='14' fill='#1e40af'>a &gt; 0 : + puis − puis +</text><text x='425' y='230' text-anchor='middle' font-size='14' fill='#991b1b'>a &lt; 0 : − puis + puis −</text></svg>",
            legende: "Au-dessus de l'axe des abscisses, P(x) est positif ; en dessous, il est négatif. Aux points marqués, P(x) = 0. Les courbes sont des illustrations et ne sont pas graduées."
          },
          {
            type: "exemple",
            titre: "Exemple avec a positif",
            texte: "Étudions le signe de P(x) = x² - 5x + 6.\n\nOn factorise : P(x) = (x - 2)(x - 3). Les racines sont 2 et 3, et a = 1 > 0.\n\n• P(x) > 0 sur ]-∞ ; 2[ et sur ]3 ; +∞[.\n• P(x) = 0 pour x = 2 ou x = 3.\n• P(x) < 0 sur ]2 ; 3[.\n\nPar exemple, P(0) = 6 > 0 et P(2,5) = -0,25 < 0."
          },
          {
            type: "tableau",
            titre: "Tableau de signe de x² - 5x + 6",
            entetes: ["Valeurs de x", "]-∞ ; 2[", "2", "]2 ; 3[", "3", "]3 ; +∞["],
            lignes: [
              ["Signe de P(x)", "+", "0", "−", "0", "+"]
            ]
          },
          {
            type: "exemple",
            titre: "Exemple avec a négatif",
            texte: "Étudions le signe de Q(x) = -x² + 2x + 3.\n\nSes racines sont -1 et 3, et a = -1 < 0. On peut écrire :\n\nQ(x) = -(x + 1)(x - 3).\n\nQ(x) est donc négatif à l'extérieur des racines et positif entre elles :\n\n• Q(x) < 0 sur ]-∞ ; -1[ et sur ]3 ; +∞[ ;\n• Q(x) = 0 pour x = -1 ou x = 3 ;\n• Q(x) > 0 sur ]-1 ; 3[."
          }
        ]
      },

      {
        id: "m1-signe-autres-cas",
        titre: "Étudier le signe lorsque Δ ≤ 0",
        blocs: [
          {
            type: "regle",
            titre: "Une racine double : Δ = 0",
            texte: "Si P(x) = ax² + bx + c possède une racine double r, alors :\n\nP(x) = a(x - r)².\n\nUn carré est toujours positif ou nul. Par conséquent :\n\n• P(r) = 0 ;\n• pour tout x différent de r, P(x) a le signe de a.\n\nLe signe ne change pas lorsque x traverse la racine double."
          },
          {
            type: "exemple",
            titre: "Exemple avec une racine double",
            texte: "P(x) = -2x² + 8x - 8 = -2(x - 2)².\n\nPour x = 2, P(x) = 0.\n\nPour x ≠ 2, (x - 2)² > 0, donc P(x) < 0.\n\nAinsi, P(x) est toujours négatif ou nul, et il n'est nul qu'en 2."
          },
          {
            type: "regle",
            titre: "Aucune racine réelle : Δ < 0",
            texte: "Si Δ < 0, le trinôme P(x) = ax² + bx + c n'a aucune racine réelle et il a toujours le signe de a :\n\n• si a > 0, P(x) > 0 pour tout réel x ;\n• si a < 0, P(x) < 0 pour tout réel x.\n\nIl ne s'annule jamais dans ℝ."
          },
          {
            type: "exemple",
            titre: "Exemple sans racine réelle",
            texte: "Pour P(x) = x² + 2x + 5 :\n\nΔ = 2² - 4 × 1 × 5 = -16 < 0 et a = 1 > 0.\n\nDonc P(x) > 0 pour tout réel x.\n\nOn peut le vérifier en écrivant P(x) = (x + 1)² + 4. Un carré étant positif ou nul, cette expression est au moins égale à 4."
          },
          {
            type: "tableau",
            titre: "Bilan des trois cas",
            entetes: ["Discriminant", "Signe du trinôme"],
            lignes: [
              ["Δ > 0", "Signe de a à l'extérieur des deux racines ; signe contraire entre elles ; nul aux racines."],
              ["Δ = 0", "Signe de a partout, sauf à la racine double où le trinôme est nul."],
              ["Δ < 0", "Signe de a pour tout réel x ; le trinôme ne s'annule pas."]
            ]
          }
        ]
      },

      {
        id: "m1-signe-inequations",
        titre: "Résoudre une inéquation du second degré",
        blocs: [
          {
            type: "methode",
            titre: "Méthode complète",
            texte: "Pour résoudre une inéquation du second degré :\n\n1. Ramène tous les termes d'un même côté pour obtenir P(x) < 0, P(x) ≤ 0, P(x) > 0 ou P(x) ≥ 0.\n2. Identifie a, b et c, puis calcule Δ.\n3. Détermine les racines réelles si elles existent et range-les dans l'ordre croissant.\n4. Étudie le signe de P(x).\n5. Choisis les intervalles correspondant au signe demandé.\n6. Inclus les racines si l'inégalité est large : ≤ ou ≥. Exclue-les si elle est stricte : < ou >."
          },
          {
            type: "exemple",
            titre: "Inégalité large",
            texte: "Résolvons x² - 5x + 6 ≤ 0.\n\nP(x) = (x - 2)(x - 3). Ses racines sont 2 et 3, et a = 1 > 0.\n\nP(x) est négatif entre les racines et nul aux racines. Comme on cherche P(x) ≤ 0, on inclut 2 et 3.\n\nDonc S = [2 ; 3]."
          },
          {
            type: "exemple",
            titre: "Inégalité stricte et coefficient négatif",
            texte: "Résolvons -x² + 2x + 3 < 0.\n\nLes racines sont -1 et 3. Le coefficient de x² vaut -1 : le trinôme est donc négatif à l'extérieur des racines.\n\nL'inégalité étant stricte, les racines sont exclues :\n\nS = ]-∞ ; -1[ ∪ ]3 ; +∞[.\n\nLe symbole ∪ signifie que l'on réunit les deux intervalles."
          },
          {
            type: "exemple",
            titre: "Sans racine",
            texte: "Résolvons x² + 2x + 5 ≤ 0.\n\nLe discriminant vaut -16 et a = 1 > 0. Le trinôme est donc strictement positif pour tout réel.\n\nIl n'est jamais négatif ou nul : S = ∅."
          },
          {
            type: "remarque",
            titre: "Multiplier par un nombre négatif",
            texte: "Si tu multiplies ou divises les deux membres d'une inégalité par un nombre strictement négatif, tu dois inverser le sens de l'inégalité.\n\nPar exemple : -x² + 2x + 3 < 0 équivaut à x² - 2x - 3 > 0 après multiplication par -1.\n\nTu peux aussi garder le trinôme initial et étudier directement son signe."
          },
          {
            type: "remarque",
            titre: "Les infinis ne sont pas des nombres",
            texte: "Dans les intervalles, -∞ et +∞ ne sont jamais inclus. On écrit par exemple ]-∞ ; 2] et non [-∞ ; 2].\n\nL'intervalle ]-∞ ; 2] contient tous les réels inférieurs ou égaux à 2."
          }
        ]
      },

      {
        id: "m1-signe-application",
        titre: "Modéliser une situation",
        blocs: [
          {
            type: "exemple",
            titre: "Une aire à atteindre",
            texte: "Un rectangle a pour largeur x mètres et pour longueur x + 3 mètres. On cherche les dimensions possibles pour que son aire soit au moins 10 m².\n\nComme x est une longueur, on impose d'abord x > 0.\n\nL'aire vaut x(x + 3). La condition demandée est :\n\nx(x + 3) ≥ 10,\nsoit x² + 3x - 10 ≥ 0.\n\nOn factorise : x² + 3x - 10 = (x + 5)(x - 2).\n\nLes racines sont -5 et 2, et a = 1 > 0. Le trinôme est positif ou nul à l'extérieur des racines :\n\nx ∈ ]-∞ ; -5] ∪ [2 ; +∞[.\n\nMais la situation impose x > 0. On conserve donc seulement x ∈ [2 ; +∞[.\n\nLa largeur doit être au moins égale à 2 m ; la longueur correspondante est x + 3 m."
          },
          {
            type: "methode",
            titre: "Ne pas oublier les contraintes",
            texte: "Dans un problème concret :\n\n1. Définis la variable et son unité.\n2. Note les contraintes du contexte : longueur positive, quantité entière, durée limitée, etc.\n3. Traduis la condition par une inéquation.\n4. Résous l'inéquation dans ℝ.\n5. Ne garde que les solutions compatibles avec les contraintes.\n6. Réponds par une phrase adaptée à la question."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On considère P(x) = (x - 1)(x - 4).\n\n1. Quelles sont les racines de P ?\n2. Calcule P(0), P(2) et P(5).\n3. Donne le signe de chacun de ces trois résultats.",
        correction: "1. Un produit est nul si l'un de ses facteurs est nul. Les racines sont donc 1 et 4.\n\n2. P(0) = (-1)(-4) = 4.\nP(2) = 1 × (-2) = -2.\nP(5) = 4 × 1 = 4.\n\n3. P(0) et P(5) sont positifs ; P(2) est négatif."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Pour chaque inéquation, indique si les valeurs qui annulent P doivent être incluses ou exclues de l'ensemble des solutions.\n\n1. P(x) > 0\n2. P(x) ≤ 0\n3. P(x) < 0\n4. P(x) ≥ 0",
        correction: "1. Exclues : l'inégalité > est stricte.\n2. Incluses : ≤ accepte l'égalité à 0.\n3. Exclues : l'inégalité < est stricte.\n4. Incluses : ≥ accepte l'égalité à 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Étudie le signe de P(x) = x² - 7x + 12 pour tout réel x.",
        correction: "On factorise :\n\nP(x) = (x - 3)(x - 4).\n\nLes racines sont 3 et 4, et a = 1 > 0.\n\nP(x) > 0 sur ]-∞ ; 3[ ∪ ]4 ; +∞[.\nP(x) = 0 pour x = 3 ou x = 4.\nP(x) < 0 sur ]3 ; 4[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ :\n\n1. (x - 2)(x + 1) ≥ 0\n2. (x - 2)(x + 1) < 0",
        correction: "Les racines sont -1 et 2. Le coefficient de x² après développement vaut 1 > 0. Le produit est positif à l'extérieur des racines et négatif entre elles.\n\n1. Avec ≥, on inclut les racines :\nS = ]-∞ ; -1] ∪ [2 ; +∞[.\n\n2. Avec <, on les exclut :\nS = ]-1 ; 2[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ l'inéquation :\n\n-2x² + 2x + 12 ≥ 0.",
        correction: "Posons P(x) = -2x² + 2x + 12.\n\nIci a = -2, b = 2 et c = 12.\n\nΔ = 2² - 4 × (-2) × 12 = 4 + 96 = 100.\n\nLes racines sont :\n\n(-2 - 10)/(-4) = 3 ;\n(-2 + 10)/(-4) = -2.\n\nRangées dans l'ordre : -2 < 3. Comme a < 0, P(x) est positif entre les racines et nul aux racines.\n\nDonc S = [-2 ; 3]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ :\n\n1. x² - 6x + 9 > 0\n2. -x² - 1 ≥ 0\n3. x² + 2x + 2 > 0",
        correction: "1. x² - 6x + 9 = (x - 3)². Ce carré est strictement positif pour tout x sauf x = 3.\n\nS = ]-∞ ; 3[ ∪ ]3 ; +∞[.\n\n2. Pour tout x réel, x² ≥ 0, donc -x² - 1 ≤ -1 < 0. L'expression n'est jamais positive ou nulle.\n\nS = ∅.\n\n3. x² + 2x + 2 = (x + 1)² + 1. Cette expression est strictement positive pour tout réel.\n\nS = ℝ."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un rectangle a une largeur x mètres et une longueur x + 5 mètres. Son aire doit être strictement inférieure à 24 m².\n\n1. Indique la contrainte sur x.\n2. Traduis la condition sur l'aire par une inéquation.\n3. Résous l'inéquation dans ℝ.\n4. Détermine les largeurs possibles dans la situation.",
        correction: "1. Une largeur est strictement positive : x > 0. Alors x + 5 > 0 également.\n\n2. L'aire vaut x(x + 5), donc :\n\nx(x + 5) < 24,\nsoit x² + 5x - 24 < 0.\n\n3. On factorise : x² + 5x - 24 = (x + 8)(x - 3).\n\nLes racines sont -8 et 3. Le coefficient de x² est positif : le trinôme est strictement négatif entre les racines.\n\nDans ℝ, S = ]-8 ; 3[.\n\n4. Avec la contrainte x > 0, les largeurs possibles sont x ∈ ]0 ; 3[ mètres. Par exemple, x = 2 convient : l'aire vaut 2 × 7 = 14 m²."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère P(x) = 2x² - 3x - 2 et Q(x) = -x² + 4.\n\n1. Résous P(x) ≤ 0 dans ℝ.\n2. Résous Q(x) > 0 dans ℝ.\n3. Détermine les réels x qui vérifient simultanément les deux inéquations.",
        correction: "1. Pour P, a = 2, b = -3 et c = -2.\n\nΔ = (-3)² - 4 × 2 × (-2) = 9 + 16 = 25.\n\nLes racines sont (3 - 5)/4 = -1/2 et (3 + 5)/4 = 2. Comme a > 0, P(x) ≤ 0 entre les racines, incluses :\n\nS₁ = [-1/2 ; 2].\n\n2. Q(x) = -x² + 4 = -(x - 2)(x + 2). Ses racines sont -2 et 2. Son coefficient dominant est négatif, donc Q(x) > 0 entre les racines :\n\nS₂ = ]-2 ; 2[.\n\n3. Les deux conditions doivent être vérifiées en même temps : on prend l'intersection de S₁ et S₂.\n\nS = [-1/2 ; 2[.\n\nLa valeur -1/2 est incluse : elle appartient aux deux ensembles. La valeur 2 est exclue car Q(2) = 0 et la deuxième inégalité est stricte."
      }
    ]
  }
]);
