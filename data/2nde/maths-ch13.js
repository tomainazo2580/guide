// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 13 : fonctions polynômes et rationnelles.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-fonctions-polynomes-rationnelles",
    titre: "Chapitre 13 : Fonctions polynômes et rationnelles",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch13-polynomes",
        titre: "Les fonctions polynômes",
        blocs: [
          {
            type: "introduction",
            titre: "Des expressions déjà rencontrées",
            texte: "Les fonctions x ↦ 3x + 1, x ↦ x² - 4 et x ↦ x³ sont des exemples de fonctions polynômes.\n\nDans ce chapitre, nous apprenons à reconnaître ces fonctions et à étudier leurs zéros et leurs signes."
          },
          {
            type: "definition",
            titre: "Expression polynomiale",
            texte: "Une expression polynomiale est une somme finie de termes de la forme axⁿ, où a est un réel et n un entier naturel.\n\nExemples :\nP(x) = 2x³ - 5x² + x - 7 ;\nQ(x) = 3x² - 4 ;\nR(x) = -2x + 6.\n\nLorsque aucune restriction n'est imposée, une fonction polynôme est définie sur ℝ."
          },
          {
            type: "definition",
            titre: "Degré d'un polynôme",
            texte: "Après simplification, le degré d'un polynôme non nul est le plus grand exposant de x dont le coefficient est non nul.\n\n• 2x³ - 5x + 1 est de degré 3.\n• -4x² + 7 est de degré 2.\n• 3x - 1 est de degré 1.\n• La constante 5 est de degré 0.\n\nLe polynôme nul est un cas particulier : nous ne lui attribuons pas de degré dans ce cours."
          },
          {
            type: "remarque",
            titre: "Simplifier avant de chercher le degré",
            texte: "P(x) = x³ - x³ + 2x² - 1 se simplifie en 2x² - 1. Son degré est donc 2 et non 3.\n\nEn revanche, 1/x et √x ne sont pas des expressions polynomiales en x : 1/x comporte une division par x et √x ne correspond pas à une puissance entière naturelle."
          },
          {
            type: "methode",
            titre: "Calculer une image",
            texte: "Pour P(x) = 2x³ - x + 1, calculons P(-2).\n\nP(-2) = 2(-2)³ - (-2) + 1\n= 2 × (-8) + 2 + 1\n= -13.\n\nLes parenthèses évitent les erreurs de signe lorsque la valeur remplacée est négative."
          }
        ]
      },

      {
        id: "m2-ch13-zeros",
        titre: "Zéros et factorisation",
        blocs: [
          {
            type: "definition",
            titre: "Zéro d'un polynôme",
            texte: "Un réel r est un zéro, ou une racine, de P si P(r) = 0.\n\nChercher les zéros de P revient à résoudre l'équation P(x) = 0."
          },
          {
            type: "methode",
            titre: "Utiliser un facteur commun",
            texte: "Cherchons les zéros de P(x) = x³ - 4x.\n\nOn met x en facteur :\nP(x) = x(x² - 4).\n\nPuis on utilise une différence de deux carrés :\nP(x) = x(x - 2)(x + 2).\n\nLe produit est nul si l'un de ses facteurs est nul. Les zéros sont donc -2, 0 et 2."
          },
          {
            type: "regle",
            titre: "Racine et facteur",
            texte: "Si un polynôme P admet r comme racine, alors P(x) peut se factoriser par x - r : il existe un polynôme Q tel que P(x) = (x - r)Q(x).\n\nRéciproquement, si P(x) = (x - r)Q(x), alors P(r) = 0.\n\nConnaître une racine peut donc aider à factoriser, mais il faut encore déterminer les autres facteurs et leurs éventuelles racines."
          },
          {
            type: "remarque",
            titre: "Une racine double",
            texte: "Pour P(x) = (x - 1)²(x + 2), les zéros sont 1 et -2.\n\nLe facteur x - 1 apparaît deux fois : 1 est une racine double. La fonction s'annule en 1, mais son signe ne change pas en traversant 1, car (x - 1)² reste positif ou nul."
          }
        ]
      },

      {
        id: "m2-ch13-signe-produit",
        titre: "Étudier le signe d'un produit",
        blocs: [
          {
            type: "methode",
            titre: "Organiser l'étude",
            texte: "Pour étudier le signe d'un produit de facteurs :\n\n1. Factorise l'expression si possible.\n2. Trouve les valeurs qui annulent chaque facteur.\n3. Range ces valeurs dans l'ordre.\n4. Étudie le signe de chaque facteur sur les intervalles obtenus.\n5. Multiplie les signes et indique les zéros du produit."
          },
          {
            type: "tableau",
            titre: "Exemple : P(x) = x(x - 2)",
            entetes: ["x", "x < 0", "x = 0", "0 < x < 2", "x = 2", "x > 2"],
            lignes: [
              ["Signe de x", "−", "0", "+", "+", "+"],
              ["Signe de x - 2", "−", "−", "−", "0", "+"],
              ["Signe de P(x)", "+", "0", "−", "0", "+"]
            ]
          },
          {
            type: "exemple",
            titre: "Lire le tableau",
            texte: "Pour P(x) = x(x - 2) :\n\n• P(x) > 0 sur ]-∞ ; 0[ ∪ ]2 ; +∞[ ;\n• P(x) = 0 pour x = 0 ou x = 2 ;\n• P(x) < 0 sur ]0 ; 2[.\n\nAinsi, P(x) ≤ 0 a pour solutions [0 ; 2]."
          },
          {
            type: "methode",
            titre: "Prendre en compte un facteur au carré",
            texte: "Soit P(x) = (x - 1)²(x + 2).\n\nLe facteur carré est positif pour x ≠ 1 et nul en 1. Le signe de P, hors de 1, est donc celui de x + 2.\n\nAinsi :\n• P(x) < 0 pour x < -2 ;\n• P(x) = 0 en -2 et en 1 ;\n• P(x) > 0 sur ]-2 ; 1[ ∪ ]1 ; +∞[.\n\nLe signe ne change pas à la racine double 1."
          }
        ]
      },

      {
        id: "m2-ch13-rationnelles",
        titre: "Les fonctions rationnelles",
        blocs: [
          {
            type: "definition",
            titre: "Quotient de polynômes",
            texte: "Une fonction rationnelle est donnée par un quotient de deux expressions polynomiales :\n\nf(x) = P(x)/Q(x),\n\navec Q non identiquement nul.\n\nLa fonction est définie pour les valeurs de x qui n'annulent pas le dénominateur Q(x), sauf restriction supplémentaire de l'énoncé."
          },
          {
            type: "exemple",
            titre: "Déterminer le domaine",
            texte: "Soit f(x) = (2x + 1)/(x - 3).\n\nIl faut x - 3 ≠ 0, donc x ≠ 3.\n\nLe domaine est Df = ]-∞ ; 3[ ∪ ]3 ; +∞[.\n\nOn dit que 3 est une valeur interdite."
          },
          {
            type: "methode",
            titre: "Plusieurs valeurs interdites",
            texte: "Pour g(x) = 1/(x² - 4), on résout d'abord :\n\nx² - 4 = 0.\n\nComme x² - 4 = (x - 2)(x + 2), le dénominateur s'annule en -2 et en 2.\n\nLe domaine est donc ℝ privé de -2 et de 2."
          },
          {
            type: "remarque",
            titre: "Une simplification ne rétablit pas une valeur interdite",
            texte: "Soit h(x) = (x² - 1)/(x - 1).\n\nL'expression de départ impose x ≠ 1. Pour ces valeurs autorisées seulement :\n\nh(x) = (x - 1)(x + 1)/(x - 1) = x + 1.\n\nOn peut utiliser la formule simplifiée pour calculer h(x), mais h reste non définie en 1."
          },
          {
            type: "schema",
            titre: "La valeur exclue subsiste",
            svg: "<svg viewBox='0 0 340 170' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Droite y égal x plus un avec un point exclu en un deux'><rect x='5' y='5' width='330' height='160' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='20' y1='130' x2='320' y2='130' stroke='#334155' stroke-width='2'/><line x1='80' y1='155' x2='80' y2='15' stroke='#334155' stroke-width='2'/><line x1='30' y1='155' x2='170' y2='15' stroke='#2563eb' stroke-width='3'/><circle cx='110' cy='70' r='6' fill='white' stroke='#dc2626' stroke-width='3'/><line x1='110' y1='70' x2='110' y2='130' stroke='#64748b' stroke-dasharray='4 4'/><text x='105' y='148' font-size='13' fill='#334155'>1</text><text x='120' y='65' font-size='13' fill='#b91c1c'>(1 ; 2) exclu</text><text x='180' y='35' font-size='13' fill='#1d4ed8'>y = x + 1, sauf en x = 1</text></svg>",
            legende: "La courbe de h suit la droite y = x + 1, mais le point d'abscisse 1 est exclu : l'expression initiale de h n'est pas définie en 1."
          }
        ]
      },

      {
        id: "m2-ch13-signe-quotient",
        titre: "Zéros et signe d'un quotient",
        blocs: [
          {
            type: "regle",
            titre: "Quand un quotient est-il nul ?",
            texte: "Une fraction P(x)/Q(x) est nulle si et seulement si :\n\n• son numérateur P(x) est nul ;\n• son dénominateur Q(x) n'est pas nul.\n\nUne valeur interdite ne peut donc jamais être un zéro de la fonction."
          },
          {
            type: "methode",
            titre: "Étudier le signe",
            texte: "Pour étudier le signe d'un quotient :\n\n1. Détermine son domaine et ses valeurs interdites.\n2. Factorise si possible le numérateur et le dénominateur.\n3. Repère les zéros de chaque facteur et range-les.\n4. Étudie le signe du numérateur et celui du dénominateur.\n5. Déduis le signe du quotient.\n\nLe quotient de deux nombres non nuls est positif s'ils ont le même signe et négatif s'ils ont des signes contraires."
          },
          {
            type: "tableau",
            titre: "Exemple : f(x) = (x - 1)/(x + 2)",
            entetes: ["x", "x < -2", "x = -2", "-2 < x < 1", "x = 1", "x > 1"],
            lignes: [
              ["x - 1", "−", "−", "−", "0", "+"],
              ["x + 2", "−", "0", "+", "+", "+"],
              ["f(x)", "+", "Non défini", "−", "0", "+"]
            ]
          },
          {
            type: "exemple",
            titre: "Résoudre une inéquation",
            texte: "Résolvons (x - 1)/(x + 2) ≤ 0.\n\nLe tableau donne un quotient négatif sur ]-2 ; 1[ et nul en 1.\n\nLa solution est donc ]-2 ; 1].\n\nOn inclut 1 parce que l'inégalité est large. On exclut toujours -2 : le quotient n'y est pas défini."
          },
          {
            type: "remarque",
            titre: "Ne pas multiplier sans connaître le signe",
            texte: "Dans une inégalité contenant un quotient, multiplier les deux membres par le dénominateur peut changer le sens de l'inégalité si ce dénominateur est négatif.\n\nÉtudier le signe du quotient permet d'éviter cette erreur."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Indique le degré de chaque polynôme :\n\n1. P(x) = 3x² - x + 4\n2. Q(x) = -2x + 7\n3. R(x) = x³ + 2x\n4. T(x) = 5",
        correction: "1. Le plus grand exposant est 2 : P est de degré 2.\n\n2. Q est de degré 1.\n\n3. R est de degré 3.\n\n4. La constante non nulle T est de degré 0."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit P(x) = x² - 4.\n\n1. Calcule P(0), P(2) et P(-2).\n2. Parmi ces trois nombres, lesquels sont des racines de P ?",
        correction: "1. P(0) = -4 ; P(2) = 4 - 4 = 0 ; P(-2) = 4 - 4 = 0.\n\n2. Les nombres 2 et -2 sont des racines, car leurs images sont nulles. Zéro n'est pas une racine."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Détermine le domaine naturel de chaque fonction :\n\n1. f(x) = (x + 1)/(x - 4)\n2. g(x) = 3/(x² - 9)\n3. h(x) = 2x² - 5x + 1",
        correction: "1. Il faut x - 4 ≠ 0. Le domaine est ℝ privé de 4.\n\n2. x² - 9 = (x - 3)(x + 3) s'annule en -3 et 3. Le domaine est ℝ privé de -3 et de 3.\n\n3. h est une fonction polynôme : son domaine naturel est ℝ."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Factorise P(x) = x³ - 9x, puis détermine ses zéros.",
        correction: "On met x en facteur : P(x) = x(x² - 9).\n\nPuis x² - 9 = (x - 3)(x + 3). Donc P(x) = x(x - 3)(x + 3).\n\nLe produit est nul lorsque x = 0, x = 3 ou x = -3. Les zéros sont -3, 0 et 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit P(x) = (x - 2)(x + 1).\n\n1. Détermine ses zéros.\n2. Étudie son signe sur ℝ.\n3. Résous P(x) ≤ 0.",
        correction: "1. Les zéros sont -1 et 2.\n\n2. Pour x < -1, les deux facteurs sont négatifs : P est positif. Pour -1 < x < 2, les facteurs sont de signes contraires : P est négatif. Pour x > 2, ils sont positifs : P est positif. P est nul en -1 et 2.\n\n3. On conserve la partie négative et les zéros : S = [-1 ; 2]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère f(x) = (x + 3)/(x - 1).\n\n1. Détermine son domaine et son zéro.\n2. Étudie son signe.\n3. Résous f(x) < 0.",
        correction: "1. Le dénominateur s'annule en 1, donc Df = ℝ privé de 1. Le numérateur s'annule en -3, qui est autorisé : le zéro est -3.\n\n2. Pour x < -3, les deux facteurs sont négatifs : f est positif. Entre -3 et 1, le numérateur est positif et le dénominateur négatif : f est négatif. Pour x > 1, ils sont positifs : f est positif. En -3, f vaut 0 ; en 1, f n'est pas défini.\n\n3. L'ensemble des solutions est ]-3 ; 1[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit h(x) = (x² - 4)/(x - 2).\n\n1. Donne son domaine.\n2. Simplifie son expression pour les valeurs autorisées.\n3. Calcule h(-2) et détermine ses zéros.\n4. Peut-on calculer h(2) avec la formule simplifiée ?",
        correction: "1. Le dénominateur impose x ≠ 2. Le domaine est ℝ privé de 2.\n\n2. Pour x ≠ 2 : h(x) = (x - 2)(x + 2)/(x - 2) = x + 2.\n\n3. h(-2) = -2 + 2 = 0. L'unique zéro est -2.\n\n4. Non. Bien que x + 2 existe en 2, la fonction h de départ n'y est pas définie. La restriction x ≠ 2 demeure."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Étudie le signe de P(x) = (x - 1)²(x + 2), puis résous P(x) ≥ 0.",
        correction: "Le facteur (x - 1)² est positif sauf en 1, où il est nul. Le facteur x + 2 est négatif pour x < -2, nul en -2 et positif pour x > -2.\n\nAinsi P est négatif sur ]-∞ ; -2[, nul en -2 et en 1, et positif sur ]-2 ; 1[ ∪ ]1 ; +∞[.\n\nPour P(x) ≥ 0, on inclut les deux zéros et toutes les valeurs positives : S = [-2 ; +∞[."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère f(x) = (x² - 4)/(x - 1).\n\n1. Détermine son domaine et ses zéros.\n2. Factorise le numérateur.\n3. Étudie le signe de f sur son domaine.\n4. Résous f(x) ≥ 0.",
        correction: "1. Le dénominateur impose x ≠ 1. Les zéros du numérateur sont -2 et 2 ; ils sont tous deux autorisés. Le domaine est ℝ privé de 1 et les zéros sont -2 et 2.\n\n2. x² - 4 = (x - 2)(x + 2).\n\n3. Les valeurs importantes sont -2, 1 et 2.\n\n• Sur ]-∞ ; -2[, le numérateur est positif et le dénominateur négatif : f est négatif.\n• Sur ]-2 ; 1[, le numérateur est négatif et le dénominateur négatif : f est positif.\n• Sur ]1 ; 2[, le numérateur est négatif et le dénominateur positif : f est négatif.\n• Sur ]2 ; +∞[, les deux sont positifs : f est positif.\n\nEn -2 et 2, f vaut 0. En 1, f n'est pas défini.\n\n4. On conserve les intervalles positifs et les zéros, sans inclure 1 : S = [-2 ; 1[ ∪ [2 ; +∞[."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère P(x) = x³ - 3x² - 4x.\n\n1. Factorise P(x) complètement en facteurs du premier degré.\n2. Détermine ses zéros.\n3. Étudie son signe sur ℝ.\n4. Résous P(x) ≤ 0.",
        correction: "1. On met x en facteur : P(x) = x(x² - 3x - 4).\n\nOr x² - 3x - 4 = (x + 1)(x - 4). Donc P(x) = x(x + 1)(x - 4).\n\n2. Les zéros sont -1, 0 et 4.\n\n3. On étudie les trois facteurs sur chaque intervalle :\n\n• Si x < -1, les trois facteurs sont négatifs : P est négatif.\n• Si -1 < x < 0, deux facteurs sont négatifs et un positif : P est positif.\n• Si 0 < x < 4, seul x - 4 est négatif : P est négatif.\n• Si x > 4, les trois facteurs sont positifs : P est positif.\n\nP est nul en -1, 0 et 4.\n\n4. On conserve les parties négatives et les zéros : S = ]-∞ ; -1] ∪ [0 ; 4]."
      }
    ]
  }
]);
