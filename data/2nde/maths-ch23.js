enregistrerChapitres("2nde", "maths", [{
  id: "m2-revision-generale",
  titre: "Chapitre 23 : Révision générale",
  premium: true,
  guide: true,
  lecons: [
    {
      id: "m2-ch23-nombres",
      titre: "1. Nombres réels et calculs",
      blocs: [
        {
          type: "rappel",
          titre: "Ensembles de nombres",
          texte: "On a les inclusions ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ. Un nombre rationnel peut s'écrire comme quotient de deux entiers, avec un dénominateur non nul. Un nombre irrationnel, comme √2, appartient à ℝ mais pas à ℚ."
        },
        {
          type: "rappel",
          titre: "Intervalles et valeur absolue",
          texte: "Pour a < b, x ∈ [a ; b[ signifie a ≤ x < b. La valeur absolue |x − a| représente la distance entre x et a. Pour r > 0 : |x − a| < r équivaut à a − r < x < a + r."
        },
        {
          type: "methode",
          titre: "Encadrement et arrondi",
          texte: "Un encadrement indique deux bornes entre lesquelles se trouve un nombre. Pour arrondir à un rang donné, on observe le chiffre suivant. Une valeur approchée n'est pas une valeur exacte : on utilise le signe ≈."
        },
        {
          type: "remarque",
          titre: "Bornes et extrema",
          texte: "Un majorant est supérieur ou égal à tous les éléments de l'ensemble. Un maximum est un majorant qui appartient à l'ensemble. Par exemple, 1 majore ]0 ; 1[, mais cet intervalle n'a pas de maximum."
        }
      ]
    },
    {
      id: "m2-ch23-algebre",
      titre: "2. Second degré et systèmes",
      blocs: [
        {
          type: "rappel",
          titre: "Équation du second degré",
          texte: "Pour ax² + bx + c = 0 avec a ≠ 0, on calcule Δ = b² − 4ac. Si Δ < 0, il n'y a pas de solution réelle. Si Δ = 0, il y a une solution −b/(2a). Si Δ > 0, les solutions sont (−b − √Δ)/(2a) et (−b + √Δ)/(2a)."
        },
        {
          type: "rappel",
          titre: "Forme canonique et signe",
          texte: "On peut écrire ax² + bx + c = a(x − α)² + β, avec α = −b/(2a). Si le trinôme a deux racines distinctes, il est du signe de a à l'extérieur des racines et du signe opposé entre elles ; il est nul aux racines."
        },
        {
          type: "methode",
          titre: "Résoudre un système",
          texte: "On peut utiliser la substitution ou l'élimination. Après avoir trouvé une solution, on la vérifie dans les deux équations. Graphiquement, les solutions correspondent aux points communs des droites représentant les équations."
        }
      ]
    },
    {
      id: "m2-ch23-fonctions",
      titre: "3. Fonctions",
      blocs: [
        {
          type: "rappel",
          titre: "Domaine et lecture",
          texte: "Le domaine de définition contient les valeurs de x pour lesquelles f(x) existe. L'image de x est f(x). Un antécédent de y est une solution de f(x) = y. Un nombre peut avoir plusieurs antécédents ou n'en avoir aucun."
        },
        {
          type: "rappel",
          titre: "Fonctions de référence",
          texte: "La fonction x ↦ x² est définie sur ℝ ; x ↦ √x est définie sur [0 ; +∞[ ; x ↦ 1/x est définie sur ℝ privé de 0. La fonction valeur absolue vérifie |x| = x si x ≥ 0 et |x| = −x si x < 0."
        },
        {
          type: "rappel",
          titre: "Variations et signe",
          texte: "Une fonction croissante conserve l'ordre des images ; une fonction décroissante l'inverse. Les zéros d'une fonction sont les solutions de f(x) = 0. Pour une fonction rationnelle, on exclut d'abord les valeurs qui annulent le dénominateur."
        },
        {
          type: "rappel",
          titre: "Partie entière et composition",
          texte: "La partie entière E(x) est le plus grand entier inférieur ou égal à x : E(x) ≤ x < E(x) + 1. Pour composer g et f, on calcule g(f(x)), à condition que x appartienne au domaine de f et que f(x) appartienne à celui de g."
        }
      ]
    },
    {
      id: "m2-ch23-trigonometrie",
      titre: "4. Trigonométrie et Thalès",
      blocs: [
        {
          type: "rappel",
          titre: "Triangle rectangle",
          texte: "Pour un angle aigu d'un triangle rectangle : sinus = côté opposé/hypoténuse ; cosinus = côté adjacent/hypoténuse ; tangente = côté opposé/côté adjacent."
        },
        {
          type: "rappel",
          titre: "Cercle trigonométrique",
          texte: "Un tour complet vaut 360° ou 2π radians. Sur le cercle trigonométrique, le point associé à un angle x a pour coordonnées (cos x ; sin x). On a cos²x + sin²x = 1 et, lorsque cos x ≠ 0, tan x = sin x/cos x."
        },
        {
          type: "rappel",
          titre: "Théorème de Thalès",
          texte: "Soient A, B et C trois points non alignés. Si M appartient à la droite (AB), N appartient à la droite (AC), avec M ≠ A et N ≠ A, et si (MN) est parallèle à (BC), alors :\n\nAM/AB = AN/AC = MN/BC.\n\nPour utiliser la réciproque, il faut vérifier les alignements, l'ordre correspondant des points et l'égalité de deux rapports."
        }
      ]
    },
    {
      id: "m2-ch23-geometrie",
      titre: "5. Vecteurs, produit scalaire et transformations",
      blocs: [
        {
          type: "rappel",
          titre: "Coordonnées et colinéarité",
          texte: "Dans un repère, →AB = (xB − xA ; yB − yA). Pour →u = (x ; y) et →v = (x' ; y'), det(→u ; →v) = xy' − yx'. Les vecteurs sont colinéaires si et seulement si ce déterminant est nul."
        },
        {
          type: "rappel",
          titre: "Produit scalaire",
          texte: "Dans une base orthonormée, →u · →v = xx' + yy'. Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul. Pour deux vecteurs non nuls, →u · →v = ||→u|| × ||→v|| × cos θ."
        },
        {
          type: "rappel",
          titre: "Cercle et distances",
          texte: "Dans un repère orthonormé, le cercle de centre Ω(a ; b) et de rayon R > 0 a pour équation (x − a)² + (y − b)² = R². Une droite est sécante, tangente ou extérieure au cercle selon que sa distance au centre est inférieure, égale ou supérieure au rayon."
        },
        {
          type: "rappel",
          titre: "Transformations",
          texte: "Les symétries, les translations et les rotations conservent les longueurs. Une homothétie de rapport k multiplie les longueurs par |k| et les aires par k². Une symétrie centrale est une homothétie de rapport −1."
        }
      ]
    },
    {
      id: "m2-ch23-statistiques",
      titre: "6. Statistiques et méthode de révision",
      blocs: [
        {
          type: "rappel",
          titre: "Effectifs et paramètres",
          texte: "La fréquence est l'effectif divisé par l'effectif total. L'effectif cumulé croissant compte les valeurs inférieures ou égales à une valeur donnée. La moyenne est pondérée par les effectifs ; le mode est une valeur d'effectif maximal."
        },
        {
          type: "rappel",
          titre: "Médiane et dispersion",
          texte: "On ordonne la série pour trouver la médiane. Pour un effectif pair, on prend ici la moyenne des deux valeurs centrales. L'étendue est maximum − minimum. La variance est la moyenne des carrés des écarts à la moyenne ; l'écart-type est sa racine carrée."
        },
        {
          type: "methode",
          titre: "Devant un exercice",
          texte: "1. Lire tout l'énoncé et relever les données. 2. Identifier la notion utile et vérifier ses conditions d'application. 3. Écrire la formule avant de remplacer les valeurs. 4. Détailler les calculs et conclure avec les unités. 5. Vérifier la cohérence du résultat."
        },
        {
          type: "remarque",
          titre: "S'entraîner",
          texte: "Commence par les exercices accessibles, puis reprends ceux qui te résistent. Pour chaque erreur, retourne à la leçon concernée et refais le calcul sans regarder la correction."
        }
      ]
    }
  ],
  exercices: [
    {
      niveau: 1,
      points: 2,
      enonce: "Résous dans ℝ : |x − 2| < 3.",
      correction: "|x − 2| < 3 équivaut à −3 < x − 2 < 3. En ajoutant 2, on obtient −1 < x < 5. L'ensemble des solutions est ]−1 ; 5[."
    },
    {
      niveau: 1,
      points: 2,
      enonce: "Une série contient les valeurs 3, 3, 5 et 9. Calcule sa moyenne et donne son mode.",
      correction: "La moyenne vaut (3 + 3 + 5 + 9)/4 = 20/4 = 5. La valeur 3 apparaît deux fois, plus souvent que les autres : c'est le mode."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Résous dans ℝ l'équation x² − 5x + 6 = 0.",
      correction: "On factorise : x² − 5x + 6 = (x − 2)(x − 3). Un produit est nul si l'un de ses facteurs est nul. Les solutions sont donc 2 et 3."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère orthonormé, A(1 ; 2) et B(4 ; 6). Calcule les coordonnées de →AB et la distance AB.",
      correction: "→AB = (4 − 1 ; 6 − 2) = (3 ; 4). Comme le repère est orthonormé, AB = √(3² + 4²) = 5."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un triangle ABC rectangle en A, AB = 3 cm et AC = 4 cm. Calcule BC, puis sin(ABC), où ABC désigne l'angle de sommet B.",
      correction: "Par Pythagore, BC² = 3² + 4² = 25, donc BC = 5 cm. Le côté opposé à l'angle de sommet B est [AC] et l'hypoténuse est [BC]. Ainsi sin(ABC) = AC/BC = 4/5."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "On donne P(x) = x² − 5x + 6. 1. Factorise P(x). 2. Résous P(x) ≤ 0. 3. Donne le minimum de la fonction P sur ℝ.",
      correction: "1. P(x) = (x − 2)(x − 3). 2. Le coefficient de x² est positif : P est négatif entre ses racines et nul aux racines. Les solutions sont [2 ; 3]. 3. P(x) = (x − 5/2)² − 1/4. Son minimum sur ℝ est −1/4, atteint pour x = 5/2."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Résous le système : 2x + y = 7 et x − y = 2. Vérifie la solution.",
      correction: "En additionnant les deux équations, on obtient 3x = 9, donc x = 3. Puis 3 − y = 2, d'où y = 1. Vérification : 2 × 3 + 1 = 7 et 3 − 1 = 2. La solution est le couple (3 ; 1)."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Soit f(x) = (x + 1)/(x − 2). 1. Donne son domaine de définition. 2. Calcule f(0). 3. Résous f(x) = 0.",
      correction: "1. Le dénominateur doit être non nul : x ≠ 2. Le domaine est ℝ privé de 2. 2. f(0) = 1/(−2) = −1/2. 3. Une fraction de dénominateur non nul est nulle si son numérateur est nul : x + 1 = 0, donc x = −1. Cette valeur est admise."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans le triangle ABC, M est sur [AB], N est sur [AC], et (MN) est parallèle à (BC). On donne AM = 4 cm, MB = 6 cm, AC = 15 cm et BC = 8 cm. Calcule AN et MN.",
      correction: "AB = AM + MB = 10 cm. Par Thalès, AM/AB = AN/AC = MN/BC = 4/10. Donc AN = 15 × 4/10 = 6 cm et MN = 8 × 4/10 = 3,2 cm."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère orthonormé, A(1 ; 1), B(4 ; 2) et C(0 ; 4). Démontre que le triangle ABC est rectangle en A.",
      correction: "→AB = (3 ; 1) et →AC = (−1 ; 3). Leur produit scalaire vaut 3 × (−1) + 1 × 3 = 0. Ces vecteurs sont non nuls : les droites (AB) et (AC) sont perpendiculaires. Le triangle est rectangle en A."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère orthonormé, un cercle a pour centre Ω(1 ; −2) et pour rayon 5. 1. Écris son équation. 2. Le point M(4 ; 2) appartient-il au cercle ?",
      correction: "1. L'équation est (x − 1)² + (y + 2)² = 25. 2. Pour M(4 ; 2), le membre de gauche vaut (4 − 1)² + (2 + 2)² = 9 + 16 = 25. M appartient donc au cercle."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Une série fictive prend les valeurs 2, 4 et 6 avec les effectifs respectifs 2, 3 et 1. Calcule l'effectif total, la moyenne et la médiane.",
      correction: "L'effectif total est N = 2 + 3 + 1 = 6. La moyenne vaut (2 × 2 + 3 × 4 + 1 × 6)/6 = 22/6 = 11/3. La série ordonnée est 2, 2, 4, 4, 4, 6. Les valeurs de rangs 3 et 4 sont toutes deux égales à 4 : la médiane est 4."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "On considère f(x) = (x² − 4)/(x − 1). 1. Détermine son domaine. 2. Factorise le numérateur. 3. Résous f(x) ≥ 0.",
      correction: "1. Le dénominateur s'annule en 1 : le domaine est ℝ privé de 1. 2. x² − 4 = (x − 2)(x + 2). 3. Les valeurs importantes sont −2, 1 et 2. Sur ]−∞ ; −2[, le quotient est négatif ; sur ]−2 ; 1[, il est positif ; sur ]1 ; 2[, il est négatif ; sur ]2 ; +∞[, il est positif. Il est nul en −2 et en 2, mais n'est pas défini en 1. Les solutions sont donc [−2 ; 1[ ∪ [2 ; +∞[."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère, A(1 ; 2), B(3 ; 5) et C(5 ; 8). 1. Montre que A, B et C sont alignés. 2. Détermine les coordonnées de D tel que →AD = →BC. 3. D est-il le milieu de [AC] ?",
      correction: "1. →AB = (2 ; 3) et →AC = (4 ; 6). Leur déterminant vaut 2 × 6 − 3 × 4 = 0 : A, B et C sont alignés. 2. →BC = (2 ; 3). Donc D = (1 + 2 ; 2 + 3) = (3 ; 5). 3. Le milieu de [AC] a pour coordonnées ((1 + 5)/2 ; (2 + 8)/2) = (3 ; 5). Il s'agit donc de D ; ici D est aussi confondu avec B."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un triangle ABC, AB = 5 cm, AC = 7 cm et l'angle BÂC vaut 60°. 1. Calcule →AB · →AC. 2. Calcule BC. 3. I est le milieu de [BC]. Calcule AI.",
      correction: "1. →AB · →AC = 5 × 7 × cos 60° = 35/2 cm². 2. Par Al-Kashi, BC² = 25 + 49 − 2 × 5 × 7 × 1/2 = 39. Donc BC = √39 cm. 3. La formule de la médiane donne AI² = (25 + 49)/2 − 39/4 = 109/4. Ainsi AI = √109/2 cm."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère orthonormé direct d'origine O, A(2 ; 1) et B(4 ; 3). Une homothétie de centre O et de rapport −2 donne A' et B'. 1. Calcule leurs coordonnées. 2. Calcule AB et A'B'. 3. Une figure d'aire 6 unités d'aire subit la même homothétie. Quelle est l'aire de son image ?",
      correction: "1. On multiplie chaque coordonnée par −2 : A'(−4 ; −2) et B'(−8 ; −6). 2. AB = √(2² + 2²) = 2√2. L'homothétie multiplie les longueurs par |−2| = 2, donc A'B' = 4√2. 3. Les aires sont multipliées par (−2)² = 4 : l'aire image vaut 24 unités d'aire."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Une série fictive est 2, 2, 4, 4, 8. 1. Calcule la moyenne et la médiane. 2. Calcule la variance et l'écart-type. 3. On ajoute une sixième valeur égale à 16. Calcule la nouvelle moyenne et la nouvelle médiane.",
      correction: "1. La moyenne vaut (2 + 2 + 4 + 4 + 8)/5 = 4. La valeur centrale est 4 : la médiane est 4. 2. La variance vaut [2(2 − 4)² + 2(4 − 4)² + (8 − 4)²]/5 = (8 + 0 + 16)/5 = 24/5. L'écart-type est √(24/5), soit environ 2,19. 3. La nouvelle moyenne vaut (20 + 16)/6 = 6. La série ordonnée est 2, 2, 4, 4, 8, 16 : la médiane est (4 + 4)/2 = 4. La valeur ajoutée augmente la moyenne, mais ne change pas la médiane."
    }
  ]
}]);
