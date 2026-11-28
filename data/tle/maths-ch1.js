enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch1",
    titre: "Chapitre 1 : Rappels sur les fonctions et les équations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch1-l1",
        titre: "Leçon 1 : Fonctions et ensembles de définition",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi commencer par ces rappels ?",
            texte: "Une fonction associe à chaque nombre d’un ensemble de départ un unique nombre appelé son image. Les fonctions seront utilisées toute l’année pour étudier les limites, les variations et les courbes."
          },
          {
            type: "definition",
            titre: "Image, antécédent et ensemble de définition",
            texte: "Si f est une fonction et si x appartient à son ensemble de définition Df, l’image de x est le nombre noté f(x).\n\nUn antécédent d’un nombre y est un nombre x de Df tel que f(x) = y. Un nombre peut avoir plusieurs antécédents, un seul ou aucun.\n\nL’ensemble de définition Df contient tous les nombres pour lesquels l’expression de f a un sens."
          },
          {
            type: "methode",
            titre: "Trouver l’ensemble de définition",
            texte: "On part des nombres réels, puis on applique les restrictions nécessaires :\n• Un dénominateur doit être différent de zéro.\n• L’expression sous une racine carrée doit être positive ou nulle.\n• Si plusieurs restrictions apparaissent, elles doivent être satisfaites en même temps.\n\nLes restrictions liées au logarithme seront étudiées dans un chapitre ultérieur."
          },
          {
            type: "exemple",
            titre: "Trois ensembles de définition",
            texte: "1. f(x) = 3x² − 2x + 1 : aucun dénominateur ni racine carrée. Donc Df = ℝ.\n\n2. g(x) = 1/(x − 3) : il faut x − 3 ≠ 0, donc Dg = ℝ privé de 3.\n\n3. h(x) = √(2x − 4) : il faut 2x − 4 ≥ 0, soit x ≥ 2. Donc Dh = [2 ; +∞[."
          },
          {
            type: "exemple",
            titre: "Image et antécédents",
            texte: "Soit f(x) = x² − 1, définie sur ℝ.\n\nL’image de 3 est f(3) = 3² − 1 = 8.\n\nPour chercher les antécédents de 8, on résout x² − 1 = 8, soit x² = 9. Les solutions sont x = −3 et x = 3. Le nombre 8 possède donc deux antécédents."
          }
        ]
      },

      {
        id: "tle-maths-ch1-l2",
        titre: "Leçon 2 : Courbes et lecture graphique",
        blocs: [
          {
            type: "definition",
            titre: "Courbe représentative",
            texte: "Dans un repère, la courbe représentative de f est l’ensemble des points de coordonnées (x ; f(x)), pour x appartenant à Df.\n\nSur cette courbe, l’abscisse d’un point est un nombre x et son ordonnée est son image f(x)."
          },
          {
            type: "methode",
            titre: "Lire une image ou un antécédent",
            texte: "Pour lire l’image de x : partir de x sur l’axe horizontal, rejoindre la courbe verticalement, puis lire l’ordonnée.\n\nPour chercher les antécédents de y : tracer mentalement la droite horizontale d’ordonnée y. Les abscisses de ses points d’intersection avec la courbe sont les antécédents de y.\n\nUne lecture graphique donne souvent une valeur approchée."
          },
          {
            type: "schema",
            titre: "Exemple : la droite d’équation y = x + 1",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='30' y1='170' x2='300' y2='170' stroke='black' stroke-width='2'/><line x1='100' y1='205' x2='100' y2='20' stroke='black' stroke-width='2'/><path d='M40 200 L280 40' stroke='#1769aa' stroke-width='3' fill='none'/><circle cx='160' cy='130' r='4' fill='#c62828'/><line x1='160' y1='130' x2='160' y2='170' stroke='#c62828' stroke-dasharray='4 4'/><line x1='100' y1='130' x2='160' y2='130' stroke='#c62828' stroke-dasharray='4 4'/><text x='290' y='188' font-size='14'>x</text><text x='108' y='30' font-size='14'>y</text><text x='85' y='187' font-size='13'>0</text><text x='155' y='187' font-size='13'>3</text><text x='80' y='135' font-size='13'>4</text><text x='170' y='120' font-size='14' fill='#c62828'>(3 ; 4)</text><text x='200' y='65' font-size='14' fill='#1769aa'>y = x + 1</text></svg>",
            legende: "Le point (3 ; 4) appartient à la droite : l’image de 3 est 4. Les échelles des deux axes sont différentes."
          },
          {
            type: "methode",
            titre: "Résoudre graphiquement",
            texte: "• Résoudre f(x) = 0 revient à chercher les abscisses des points où la courbe rencontre l’axe horizontal.\n• Résoudre f(x) = k revient à chercher les intersections avec la droite horizontale y = k.\n• Résoudre f(x) = g(x) revient à chercher les abscisses des points d’intersection des deux courbes.\n• Pour f(x) > 0, on cherche les abscisses où la courbe est au-dessus de l’axe horizontal."
          },
          {
            type: "remarque",
            titre: "Lecture et preuve",
            texte: "Un graphique aide à conjecturer un résultat. Pour obtenir une valeur exacte ou démontrer une propriété, un calcul ou un raisonnement peut être nécessaire."
          }
        ]
      },

      {
        id: "tle-maths-ch1-l3",
        titre: "Leçon 3 : Équations et inéquations",
        blocs: [
          {
            type: "definition",
            titre: "Équation et inéquation",
            texte: "Résoudre une équation, c’est trouver toutes les valeurs de l’inconnue qui rendent l’égalité vraie. Résoudre une inéquation, c’est trouver toutes les valeurs qui rendent l’inégalité vraie.\n\nIl faut d’abord tenir compte des valeurs interdites par l’expression."
          },
          {
            type: "methode",
            titre: "Règles utiles",
            texte: "On peut ajouter ou soustraire un même nombre aux deux membres. On peut multiplier ou diviser les deux membres par un même nombre non nul.\n\nPour une inéquation, multiplier ou diviser par un nombre négatif inverse le sens de l’inégalité. Par exemple, −2x > 6 équivaut à x < −3.\n\nUn produit est nul si et seulement si au moins l’un de ses facteurs est nul."
          },
          {
            type: "exemple",
            titre: "Équation avec produit nul",
            texte: "Résolvons (x − 2)(3x + 6) = 0.\n\nUn facteur au moins est nul :\nx − 2 = 0, donc x = 2 ;\nou 3x + 6 = 0, donc x = −2.\n\nL’ensemble des solutions est S = {−2 ; 2}."
          },
          {
            type: "methode",
            titre: "Équation du second degré",
            texte: "Pour ax² + bx + c = 0 avec a ≠ 0, on calcule le discriminant Δ = b² − 4ac.\n\n• Si Δ > 0, il y a deux solutions : x₁ = (−b − √Δ)/(2a) et x₂ = (−b + √Δ)/(2a).\n• Si Δ = 0, il y a une solution : x₀ = −b/(2a).\n• Si Δ < 0, il n’y a aucune solution réelle."
          },
          {
            type: "exemple",
            titre: "Résolution d’une équation du second degré",
            texte: "Résolvons x² − 5x + 6 = 0.\n\nIci a = 1, b = −5 et c = 6. Donc Δ = (−5)² − 4 × 1 × 6 = 1.\n\nLes solutions sont (5 − 1)/2 = 2 et (5 + 1)/2 = 3. Ainsi S = {2 ; 3}."
          },
          {
            type: "methode",
            titre: "Résoudre une inéquation par les signes",
            texte: "1. Ramener tous les termes dans un même membre.\n2. Factoriser si possible.\n3. Déterminer les valeurs qui annulent les facteurs et les valeurs interdites.\n4. Étudier le signe sur les intervalles obtenus.\n5. Retenir les intervalles correspondant à l’inégalité, en vérifiant si les bornes sont incluses."
          },
          {
            type: "exemple",
            titre: "Signe d’un produit",
            texte: "Résolvons (x − 2)(x + 1) ≤ 0.\n\nLes facteurs s’annulent en −1 et 2. Leur produit est positif avant −1, négatif entre −1 et 2, puis positif après 2. Il est nul aux deux bornes.\n\nOn cherche un produit négatif ou nul : S = [−1 ; 2]."
          }
        ]
      },

      {
        id: "tle-maths-ch1-l4",
        titre: "Leçon 4 : Variations et fonctions usuelles",
        blocs: [
          {
            type: "definition",
            titre: "Fonction croissante ou décroissante",
            texte: "Une fonction f est croissante sur un intervalle I si, pour tous nombres a et b de I tels que a < b, on a f(a) ≤ f(b).\n\nElle est décroissante sur I si, pour tous a et b de I tels que a < b, on a f(a) ≥ f(b)."
          },
          {
            type: "tableau",
            titre: "Quelques fonctions de référence",
            entetes: ["Fonction", "Ensemble de définition", "Variations"],
            lignes: [
              ["x ↦ x", "ℝ", "Croissante sur ℝ"],
              ["x ↦ x²", "ℝ", "Décroissante sur ]−∞ ; 0], puis croissante sur [0 ; +∞["],
              ["x ↦ 1/x", "ℝ privé de 0", "Décroissante sur ]−∞ ; 0[ et sur ]0 ; +∞["],
              ["x ↦ √x", "[0 ; +∞[", "Croissante sur [0 ; +∞["]
            ]
          },
          {
            type: "remarque",
            titre: "Attention aux intervalles",
            texte: "Pour la fonction inverse, on étudie séparément les deux intervalles ]−∞ ; 0[ et ]0 ; +∞[, car la fonction n’est pas définie en 0. Dire qu’elle est décroissante sur chacun de ces intervalles ne signifie pas qu’elle est décroissante sur tout son ensemble de définition."
          },
          {
            type: "methode",
            titre: "Étudier une fonction affine",
            texte: "Une fonction affine s’écrit f(x) = ax + b.\n• Si a > 0, elle est croissante sur ℝ.\n• Si a < 0, elle est décroissante sur ℝ.\n• Si a = 0, elle est constante.\n\nSa courbe est une droite. Pour la tracer, deux points distincts suffisent."
          },
          {
            type: "exemple",
            titre: "Étude et tracé d’une fonction affine",
            texte: "Soit f(x) = −2x + 3. Comme son coefficient directeur −2 est négatif, f est décroissante sur ℝ.\n\nPour tracer sa droite, calculons f(0) = 3 et f(1) = 1. On place les points (0 ; 3) et (1 ; 1), puis on trace la droite qui les relie."
          },
          {
            type: "methode",
            titre: "Chercher le signe d’une fonction affine",
            texte: "Pour f(x) = ax + b avec a ≠ 0, on commence par résoudre ax + b = 0. La solution est x₀ = −b/a.\n\nSi a > 0, f est négative avant x₀ et positive après x₀. Si a < 0, les signes sont inversés. Dans les deux cas, f(x₀) = 0."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = 2x² − 3. Calculer f(0), f(−2) et f(3).",
        correction: "f(0) = 2 × 0² − 3 = −3.\nf(−2) = 2 × 4 − 3 = 5.\nf(3) = 2 × 9 − 3 = 15."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer l’ensemble de définition de g(x) = 5/(x + 4).",
        correction: "Le dénominateur doit être non nul : x + 4 ≠ 0, donc x ≠ −4.\nL’ensemble de définition est ℝ privé de −4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer l’ensemble de définition de h(x) = √(3 − x).",
        correction: "Il faut 3 − x ≥ 0, soit x ≤ 3.\nDonc Dh = ]−∞ ; 3]."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre dans ℝ : 4x − 7 = 9.",
        correction: "On ajoute 7 : 4x = 16. En divisant par 4, on obtient x = 4.\nAinsi S = {4}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre dans ℝ : (x + 3)(2x − 1) = 0.",
        correction: "Un produit est nul si l’un de ses facteurs est nul.\nx + 3 = 0 donne x = −3.\n2x − 1 = 0 donne x = 1/2.\nDonc S = {−3 ; 1/2}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre dans ℝ : x² + x − 6 = 0.",
        correction: "On peut factoriser : x² + x − 6 = (x + 3)(x − 2).\nLe produit est nul si x + 3 = 0 ou x − 2 = 0.\nDonc S = {−3 ; 2}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre dans ℝ : −3x + 6 > 0.",
        correction: "On écrit −3x > −6. En divisant par −3, on inverse le sens de l’inégalité : x < 2.\nAinsi S = ]−∞ ; 2[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre dans ℝ : (x − 1)(x + 2) ≥ 0.",
        correction: "Les facteurs s’annulent en −2 et 1.\nPour x < −2, les deux facteurs sont négatifs : leur produit est positif.\nPour −2 < x < 1, leurs signes sont opposés : le produit est négatif.\nPour x > 1, les deux facteurs sont positifs.\nLe produit est nul en −2 et 1, qui sont inclus car l’inégalité est large.\nDonc S = ]−∞ ; −2] ∪ [1 ; +∞[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = −2x + 4. Donner son sens de variation et résoudre f(x) = 0.",
        correction: "Le coefficient directeur −2 est négatif : f est décroissante sur ℝ.\nPour trouver son zéro : −2x + 4 = 0, donc −2x = −4 et x = 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre dans ℝ : (x + 1)/(x − 2) ≥ 0.",
        correction: "La valeur x = 2 est interdite. Le numérateur s’annule en −1.\nSur ]−∞ ; −1[, le numérateur et le dénominateur sont négatifs : le quotient est positif.\nEn −1, le quotient vaut 0.\nSur ]−1 ; 2[, le numérateur est positif et le dénominateur négatif : le quotient est négatif.\nSur ]2 ; +∞[, les deux sont positifs : le quotient est positif.\nDonc S = ]−∞ ; −1] ∪ ]2 ; +∞[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer l’ensemble de définition de f(x) = √(x + 1)/(x − 3).",
        correction: "Il faut simultanément x + 1 ≥ 0 et x − 3 ≠ 0.\nLa première condition donne x ≥ −1 ; la seconde donne x ≠ 3.\nDonc Df = [−1 ; 3[ ∪ ]3 ; +∞[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère f(x) = x² − 4 et g(x) = x − 2. Déterminer les abscisses des points d’intersection de leurs courbes.",
        correction: "Les intersections vérifient f(x) = g(x), soit x² − 4 = x − 2.\nOn obtient x² − x − 2 = 0, puis (x − 2)(x + 1) = 0.\nLes abscisses cherchées sont x = 2 et x = −1.\nPour x = 2, y = g(2) = 0 ; pour x = −1, y = g(−1) = −3. Les points sont donc (2 ; 0) et (−1 ; −3)."
      }
    ]
  }
]);
