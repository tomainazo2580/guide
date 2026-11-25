// ===== GUIDE - Mathématiques Première =====
// Chapitre 3 : équations irrationnelles, bicarrées et exemples du troisième degré.
// Les inéquations irrationnelles sont explicitement mentionnées
// dans la répartition de Première C.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-equations-irrationnelles-bicarrees",
    titre: "Chapitre 3 : Équations irrationnelles, bicarrées et troisième degré",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-racines-conditions",
        titre: "Préparer les calculs avec les racines carrées",
        blocs: [
          {
            type: "introduction",
            titre: "Une nouvelle difficulté",
            texte: "Considérons l'équation √(x + 1) = x - 1.\n\nLa variable apparaît sous une racine carrée. Avant de calculer, il faut s'assurer que les expressions ont un sens. Ensuite, il faut faire attention : élever au carré peut faire apparaître une solution qui ne vérifie pas l'équation de départ."
          },
          {
            type: "definition",
            titre: "Condition d'existence",
            texte: "Dans ℝ, √A est définie seulement si A ≥ 0. De plus, √A est toujours positive ou nulle.\n\nPar exemple, √(x + 1) existe si x + 1 ≥ 0, c'est-à-dire si x ≥ -1."
          },
          {
            type: "regle",
            titre: "Comparer deux racines",
            texte: "Si A ≥ 0 et B ≥ 0, alors :\n\n• √A = √B équivaut à A = B ;\n• √A < √B équivaut à A < B ;\n• √A ≤ √B équivaut à A ≤ B.\n\nCes propriétés restent vraies avec > et ≥. Elles reposent sur le fait que la fonction racine carrée est croissante sur [0 ; +∞[."
          },
          {
            type: "remarque",
            titre: "Un carré ne conserve pas toujours l'égalité en sens inverse",
            texte: "Si deux nombres sont égaux, leurs carrés sont égaux. Mais l'inverse est faux sans condition de signe : 3² = (-3)², alors que 3 ≠ -3.\n\nAinsi, pour transformer √A = B en A = B², il faut aussi imposer B ≥ 0."
          }
        ]
      },

      {
        id: "m1-equations-irrationnelles",
        titre: "Résoudre une équation avec une racine",
        blocs: [
          {
            type: "methode",
            titre: "Méthode pour √A(x) = B(x)",
            texte: "L'équation √A(x) = B(x) équivaut au système :\n\n• B(x) ≥ 0 ;\n• A(x) = B(x)².\n\nEn effet, la seconde condition donne A(x) ≥ 0. La racine existe donc, et sa valeur est bien B(x), puisque B(x) est positif ou nul.\n\nEn pratique :\n1. Écris les conditions nécessaires.\n2. Élève les deux membres au carré.\n3. Résous l'équation obtenue.\n4. Vérifie les candidats dans l'équation initiale et annonce les solutions."
          },
          {
            type: "exemple",
            titre: "Un candidat à éliminer",
            texte: "Résolvons √(x + 1) = x - 1.\n\nLe membre de droite doit être positif ou nul : x - 1 ≥ 0, donc x ≥ 1.\n\nEn élevant au carré :\n\nx + 1 = (x - 1)²\nx + 1 = x² - 2x + 1\n0 = x² - 3x = x(x - 3).\n\nLes candidats sont 0 et 3. La condition x ≥ 1 élimine 0.\n\nVérification de 3 : √(3 + 1) = 2 et 3 - 1 = 2.\n\nAinsi S = {3}."
          },
          {
            type: "exemple",
            titre: "Deux racines carrées",
            texte: "Résolvons √(2x + 3) = √(x + 5).\n\nLes deux racines doivent exister : 2x + 3 ≥ 0 et x + 5 ≥ 0. Ensemble, ces conditions donnent x ≥ -3/2.\n\nSur ce domaine, l'égalité des racines équivaut à :\n\n2x + 3 = x + 5, donc x = 2.\n\nComme 2 ≥ -3/2 et que √7 = √7, la solution est S = {2}."
          },
          {
            type: "remarque",
            titre: "La vérification est importante",
            texte: "Si tu élèves les deux membres au carré sans imposer le signe du membre de droite, tu peux obtenir de fausses solutions.\n\nPar exemple, √x = -2 conduirait après passage au carré à x = 4. Mais √4 = 2 et non -2. L'équation initiale n'a donc aucune solution réelle."
          }
        ]
      },

      {
        id: "m1-inequations-irrationnelles",
        titre: "Résoudre une inéquation avec une racine",
        blocs: [
          {
            type: "introduction",
            titre: "Toujours regarder le signe",
            texte: "Pour comparer √A(x) à une expression B(x), il faut tenir compte du fait que la racine est positive ou nulle. On ne peut pas élever une inégalité au carré sans précaution lorsque l'un des membres peut être négatif."
          },
          {
            type: "methode",
            titre: "Cas √A(x) ≤ B(x)",
            texte: "L'inéquation √A(x) ≤ B(x) équivaut aux trois conditions simultanées :\n\n• A(x) ≥ 0 ;\n• B(x) ≥ 0 ;\n• A(x) ≤ B(x)².\n\nLes deux membres sont alors positifs ou nuls : on peut les comparer en comparant leurs carrés.\n\nPour √A(x) < B(x), on impose A(x) ≥ 0, B(x) > 0 et A(x) < B(x)²."
          },
          {
            type: "exemple",
            titre: "Une inégalité large",
            texte: "Résolvons √(x + 1) ≤ x - 1.\n\nConditions :\n\nx + 1 ≥ 0 et x - 1 ≥ 0, donc x ≥ 1.\n\nSur ce domaine, les deux membres sont positifs ou nuls. On peut écrire :\n\nx + 1 ≤ (x - 1)²\n0 ≤ x² - 3x\n0 ≤ x(x - 3).\n\nCe produit est positif ou nul pour x ≤ 0 ou x ≥ 3.\n\nEn tenant compte de x ≥ 1, il reste :\n\nS = [3 ; +∞[.\n\nPour x = 3, les deux membres valent 2 : l'égalité est bien acceptée."
          },
          {
            type: "methode",
            titre: "Cas √A(x) ≥ B(x)",
            texte: "On commence par imposer A(x) ≥ 0, puis on distingue deux cas.\n\n• Si B(x) ≤ 0, l'inégalité √A(x) ≥ B(x) est automatiquement vraie puisque la racine est positive ou nulle.\n\n• Si B(x) > 0, les deux membres sont positifs ou nuls ; on compare leurs carrés : A(x) ≥ B(x)².\n\nPour une inégalité stricte √A(x) > B(x) : elle est automatique si B(x) < 0 ; si B(x) ≥ 0, on compare les carrés avec A(x) > B(x)²."
          },
          {
            type: "exemple",
            titre: "Une inégalité avec deux cas",
            texte: "Résolvons √(x + 1) ≥ x - 1.\n\nDomaine : x ≥ -1.\n\n• Si x - 1 ≤ 0, soit x ≤ 1, l'inégalité est automatique. Avec le domaine, on obtient [-1 ; 1].\n\n• Si x > 1, on compare les carrés :\n\nx + 1 ≥ (x - 1)²,\nsoit x² - 3x ≤ 0.\n\nCela donne x ∈ [0 ; 3]. Avec x > 1, on garde ]1 ; 3].\n\nEn réunissant les deux cas : S = [-1 ; 3]."
          },
          {
            type: "remarque",
            titre: "Une erreur classique",
            texte: "Il est faux de déduire de 2 ≥ -3 que 2² ≥ (-3)² : on aurait 4 ≥ 9, ce qui est faux.\n\nAvant d'élever une inégalité au carré, vérifie que les deux membres sont positifs ou nuls, ou sépare les cas selon leur signe."
          }
        ]
      },

      {
        id: "m1-equations-bicarrees",
        titre: "Résoudre une équation bicarrée",
        blocs: [
          {
            type: "definition",
            titre: "Forme d'une équation bicarrée",
            texte: "Une équation bicarrée s'écrit :\n\nax⁴ + bx² + c = 0, avec a ≠ 0.\n\nOn peut la transformer en une équation du second degré en posant X = x². Comme x est réel, on doit avoir X ≥ 0."
          },
          {
            type: "methode",
            titre: "Changement de variable",
            texte: "1. Pose X = x², avec X ≥ 0.\n2. Résous aX² + bX + c = 0.\n3. Écarte les valeurs négatives de X.\n4. Pour chaque valeur retenue, résous x² = X :\n\n• si X > 0, x = -√X ou x = √X ;\n• si X = 0, x = 0.\n\n5. Réunis les solutions."
          },
          {
            type: "exemple",
            titre: "Deux valeurs positives de X",
            texte: "Résolvons x⁴ - 5x² + 4 = 0.\n\nPosons X = x². Alors :\n\nX² - 5X + 4 = 0,\nsoit (X - 1)(X - 4) = 0.\n\nOn obtient X = 1 ou X = 4. Ces deux valeurs sont positives.\n\n• x² = 1 donne x = -1 ou x = 1.\n• x² = 4 donne x = -2 ou x = 2.\n\nAinsi S = {-2 ; -1 ; 1 ; 2}."
          },
          {
            type: "exemple",
            titre: "Une valeur négative à écarter",
            texte: "Résolvons x⁴ + x² - 6 = 0.\n\nAvec X = x², on obtient :\n\nX² + X - 6 = (X + 3)(X - 2) = 0.\n\nDonc X = -3 ou X = 2. Mais X = x² ≥ 0 : on écarte -3.\n\nIl reste x² = 2, d'où :\n\nS = {-√2 ; √2}."
          }
        ]
      },

      {
        id: "m1-equations-troisieme-degre",
        titre: "Résoudre certains exemples du troisième degré",
        blocs: [
          {
            type: "definition",
            titre: "Une équation de degré 3",
            texte: "Une équation polynomiale du troisième degré peut s'écrire :\n\nax³ + bx² + cx + d = 0, avec a ≠ 0.\n\nIl n'existe pas de méthode de factorisation immédiate valable de la même façon pour toutes ces équations. Ici, nous étudions des exemples où un facteur peut être repéré."
          },
          {
            type: "methode",
            titre: "Utiliser une racine connue",
            texte: "Si un nombre r vérifie P(r) = 0, alors P(x) peut se factoriser par x - r.\n\nPour résoudre un exemple :\n\n1. Vérifie que la racine proposée ou devinée annule P.\n2. Trouve une écriture P(x) = (x - r)Q(x), où Q est du second degré.\n3. Vérifie la factorisation en développant.\n4. Résous séparément x - r = 0 et Q(x) = 0."
          },
          {
            type: "exemple",
            titre: "Une racine évidente",
            texte: "Résolvons x³ - 6x² + 11x - 6 = 0, sachant que 1 est une racine.\n\nVérification : 1 - 6 + 11 - 6 = 0.\n\nOn peut écrire :\n\nx³ - 6x² + 11x - 6 = (x - 1)(x² - 5x + 6).\n\nLe développement confirme l'égalité. Or :\n\nx² - 5x + 6 = (x - 2)(x - 3).\n\nL'équation devient :\n\n(x - 1)(x - 2)(x - 3) = 0.\n\nDonc S = {1 ; 2 ; 3}."
          },
          {
            type: "remarque",
            titre: "Une racine ne suffit pas toujours",
            texte: "Trouver une racine permet de commencer la résolution, mais il faut encore étudier le facteur restant pour trouver toutes les solutions réelles."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans ℝ, détermine les valeurs de x pour lesquelles chaque expression est définie :\n\n1. √(x - 4)\n2. √(2x + 6)\n3. √(5 - x)",
        correction: "1. Il faut x - 4 ≥ 0, donc x ≥ 4.\n\n2. Il faut 2x + 6 ≥ 0, donc x ≥ -3.\n\n3. Il faut 5 - x ≥ 0, donc x ≤ 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résous dans ℝ :\n\n1. √x = 3\n2. √x = -3\n3. x² = 9",
        correction: "1. En élevant au carré, x = 9. Vérification : √9 = 3. Donc S = {9}.\n\n2. Une racine carrée est positive ou nulle : elle ne peut pas valoir -3. Donc S = ∅.\n\n3. Les deux nombres dont le carré vaut 9 sont -3 et 3. Donc S = {-3 ; 3}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ l'équation √(x + 5) = x - 1. Vérifie les solutions dans l'équation initiale.",
        correction: "Il faut x - 1 ≥ 0, donc x ≥ 1.\n\nEn élevant au carré :\n\nx + 5 = (x - 1)²\nx + 5 = x² - 2x + 1\nx² - 3x - 4 = 0.\n\nOn factorise : (x - 4)(x + 1) = 0. Les candidats sont 4 et -1.\n\nLa condition x ≥ 1 élimine -1. Pour x = 4 : √(4 + 5) = 3 et 4 - 1 = 3.\n\nDonc S = {4}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ l'équation x⁴ - 9x² = 0.",
        correction: "Posons X = x², avec X ≥ 0.\n\nL'équation devient X² - 9X = 0, soit X(X - 9) = 0.\n\nAinsi X = 0 ou X = 9.\n\n• x² = 0 donne x = 0.\n• x² = 9 donne x = -3 ou x = 3.\n\nDonc S = {-3 ; 0 ; 3}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ l'inéquation √(x + 2) ≤ 2.",
        correction: "La racine existe si x + 2 ≥ 0, donc x ≥ -2.\n\nLes deux membres sont positifs ou nuls. On peut comparer leurs carrés :\n\nx + 2 ≤ 4, donc x ≤ 2.\n\nEn réunissant les deux conditions : S = [-2 ; 2].\n\nLes bornes conviennent : √0 = 0 ≤ 2 et √4 = 2 ≤ 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ l'équation x⁴ - x² - 12 = 0.",
        correction: "Posons X = x², avec X ≥ 0.\n\nOn obtient X² - X - 12 = 0, soit :\n\n(X - 4)(X + 3) = 0.\n\nDonc X = 4 ou X = -3. On écarte -3 car x² ne peut pas être négatif.\n\nIl reste x² = 4, donc x = -2 ou x = 2.\n\nS = {-2 ; 2}."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Résous dans ℝ l'inéquation √(x + 4) > x.\n\nIndication : distingue les cas x < 0 et x ≥ 0.",
        correction: "La racine existe si x + 4 ≥ 0, soit x ≥ -4.\n\n• Si x < 0, la racine est positive ou nulle et donc strictement supérieure à x. Avec le domaine, on obtient [-4 ; 0[.\n\n• Si x ≥ 0, les deux membres sont positifs ou nuls. L'inégalité équivaut à :\n\nx + 4 > x²,\nsoit x² - x - 4 < 0.\n\nLe discriminant vaut Δ = 1 + 16 = 17. Les racines sont :\n\nr₁ = (1 - √17)/2 et r₂ = (1 + √17)/2.\n\nLe coefficient de x² est positif : le trinôme est négatif entre ses racines. Comme r₁ < 0, avec x ≥ 0 on garde [0 ; (1 + √17)/2[.\n\nEn réunissant les deux cas :\n\nS = [-4 ; (1 + √17)/2[.\n\nLa borne -4 est incluse car √0 > -4. L'autre borne est exclue car l'inégalité y devient une égalité."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère P(x) = x³ - 4x² + x + 6.\n\n1. Vérifie que -1 est une racine de P.\n2. Vérifie par développement que P(x) = (x + 1)(x² - 5x + 6).\n3. Résous P(x) = 0 dans ℝ.\n4. Vérifie les relations de somme et de produit pour les racines du facteur x² - 5x + 6.",
        correction: "1. P(-1) = (-1)³ - 4(-1)² + (-1) + 6 = -1 - 4 - 1 + 6 = 0. Donc -1 est une racine.\n\n2. En développant :\n\n(x + 1)(x² - 5x + 6)\n= x³ - 5x² + 6x + x² - 5x + 6\n= x³ - 4x² + x + 6 = P(x).\n\n3. Le facteur du second degré se factorise :\n\nx² - 5x + 6 = (x - 2)(x - 3).\n\nAinsi P(x) = (x + 1)(x - 2)(x - 3). Un produit est nul si au moins un facteur est nul.\n\nS = {-1 ; 2 ; 3}.\n\n4. Pour le facteur du second degré, les racines sont 2 et 3. Leur somme vaut 5 = -(-5)/1 et leur produit vaut 6 = 6/1."
      }
    ]
  }
]);
