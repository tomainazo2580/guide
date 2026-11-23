// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 12 : partie entière et composition de fonctions.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-partie-entiere-composition",
    titre: "Chapitre 12 : Partie entière et composition de fonctions",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch12-partie-entiere",
        titre: "La fonction partie entière",
        blocs: [
          {
            type: "introduction",
            titre: "Chercher l'entier situé en dessous",
            texte: "Le nombre 3,7 est compris entre les deux entiers consécutifs 3 et 4. L'entier immédiatement inférieur ou égal à 3,7 est 3.\n\nLa fonction partie entière permet de trouver cet entier pour chaque nombre réel."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "La partie entière d'un réel x est le plus grand entier relatif inférieur ou égal à x. On la note ici E(x).\n\nSi n = E(x), alors :\n\nn ≤ x < n + 1.\n\nRéciproquement, si n est un entier et si n ≤ x < n + 1, alors E(x) = n.\n\nLa fonction E est définie sur ℝ."
          },
          {
            type: "exemple",
            titre: "Quelques exemples",
            texte: "• E(3,7) = 3, car 3 ≤ 3,7 < 4.\n• E(5) = 5, car 5 ≤ 5 < 6.\n• E(-2,3) = -3, car -3 ≤ -2,3 < -2.\n• E(-4) = -4."
          },
          {
            type: "remarque",
            titre: "Attention aux nombres négatifs",
            texte: "E(-2,3) n'est pas -2 : en effet, -2 est supérieur à -2,3.\n\nIl faut chercher l'entier inférieur ou égal au nombre, donc E(-2,3) = -3.\n\nLa partie entière n'est pas toujours obtenue en supprimant les chiffres après la virgule."
          },
          {
            type: "tableau",
            titre: "Valeurs de la partie entière",
            entetes: ["x", "-2,5", "-1", "-0,2", "0", "1,8", "3"],
            lignes: [
              ["E(x)", "-3", "-1", "-1", "0", "1", "3"]
            ]
          },
          {
            type: "regle",
            titre: "Encadrement fondamental",
            texte: "Pour tout réel x :\n\nE(x) ≤ x < E(x) + 1.\n\nEn soustrayant E(x), on obtient :\n\n0 ≤ x - E(x) < 1.\n\nLe nombre x - E(x) est parfois appelé la partie fractionnaire de x.\n\nPar exemple, si x = -2,3, alors E(x) = -3 et x - E(x) = 0,7."
          }
        ]
      },

      {
        id: "m2-ch12-graphe",
        titre: "Représenter et utiliser la partie entière",
        blocs: [
          {
            type: "regle",
            titre: "Des paliers",
            texte: "Pour tout entier relatif n :\n\nsi n ≤ x < n + 1, alors E(x) = n.\n\nLa fonction est donc constante sur chaque intervalle [n ; n + 1[.\n\nEn passant un entier, la valeur de E augmente d'une unité : sa courbe présente des paliers."
          },
          {
            type: "schema",
            titre: "Quelques paliers de la courbe",
            svg: "<svg viewBox='0 0 360 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Paliers de la fonction partie entière entre moins deux et trois'><rect x='5' y='5' width='350' height='220' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='20' y1='140' x2='335' y2='140' stroke='#334155' stroke-width='2'/><line x1='140' y1='210' x2='140' y2='20' stroke='#334155' stroke-width='2'/><g stroke='#2563eb' stroke-width='3'><line x1='60' y1='200' x2='100' y2='200'/><line x1='100' y1='170' x2='140' y2='170'/><line x1='140' y1='140' x2='180' y2='140'/><line x1='180' y1='110' x2='220' y2='110'/><line x1='220' y1='80' x2='260' y2='80'/></g><g fill='#2563eb'><circle cx='60' cy='200' r='4'/><circle cx='100' cy='170' r='4'/><circle cx='140' cy='140' r='4'/><circle cx='180' cy='110' r='4'/><circle cx='220' cy='80' r='4'/></g><g fill='white' stroke='#2563eb' stroke-width='2'><circle cx='100' cy='200' r='4'/><circle cx='140' cy='170' r='4'/><circle cx='180' cy='140' r='4'/><circle cx='220' cy='110' r='4'/><circle cx='260' cy='80' r='4'/></g><g font-size='12' fill='#334155' text-anchor='middle'><text x='60' y='157'>-2</text><text x='100' y='157'>-1</text><text x='145' y='155'>0</text><text x='180' y='157'>1</text><text x='220' y='157'>2</text><text x='260' y='157'>3</text></g><text x='125' y='174' font-size='12' fill='#334155'>-1</text><text x='125' y='204' font-size='12' fill='#334155'>-2</text><text x='125' y='114' font-size='12' fill='#334155'>1</text><text x='125' y='84' font-size='12' fill='#334155'>2</text><text x='275' y='45' font-size='14' fill='#1d4ed8'>y = E(x)</text><text x='325' y='158' font-size='13' fill='#334155'>x</text><text x='148' y='27' font-size='13' fill='#334155'>y</text></svg>",
            legende: "Chaque palier commence par un point plein et se termine par un point creux : par exemple, E(x) = 1 pour x ∈ [1 ; 2[."
          },
          {
            type: "regle",
            titre: "Variations",
            texte: "La fonction partie entière est croissante sur ℝ : si u < v, alors E(u) ≤ E(v).\n\nElle n'est pas strictement croissante, car elle est constante sur chaque palier. Par exemple, 1,2 < 1,8 mais E(1,2) = E(1,8) = 1."
          },
          {
            type: "methode",
            titre: "Résoudre E(x) = n",
            texte: "Si n est un entier relatif, la définition donne directement :\n\nE(x) = n équivaut à n ≤ x < n + 1.\n\nExemple : E(x) = -2 équivaut à -2 ≤ x < -1.\n\nL'ensemble des solutions est [-2 ; -1[."
          },
          {
            type: "methode",
            titre: "Résoudre une inégalité simple",
            texte: "Résolvons E(x) ≥ 2.\n\nSi x ≥ 2, sa partie entière est au moins 2.\n\nSi x < 2, sa partie entière est strictement inférieure à 2, donc ne peut pas vérifier la condition.\n\nAinsi, les solutions sont [2 ; +∞[.\n\nDe même, E(x) < 2 équivaut à x < 2."
          },
          {
            type: "remarque",
            titre: "Les images sont des entiers",
            texte: "Pour tout réel x, E(x) est un entier relatif.\n\nL'équation E(x) = 2,5 n'a donc aucune solution.\n\nEn revanche, un entier possède une infinité d'antécédents : les antécédents de 2 sont tous les réels de [2 ; 3[."
          }
        ]
      },

      {
        id: "m2-ch12-composition",
        titre: "Composer deux fonctions",
        blocs: [
          {
            type: "introduction",
            titre: "Deux étapes successives",
            texte: "Supposons qu'on ajoute d'abord 1 à un nombre, puis qu'on calcule le carré du résultat.\n\nEn partant de 2 : 2 + 1 = 3, puis 3² = 9.\n\nOn a effectué successivement deux opérations : c'est l'idée de la composition de fonctions."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "Soient f et g deux fonctions. La composée de f par g, notée g ∘ f, est définie par :\n\n(g ∘ f)(x) = g(f(x)).\n\nOn applique d'abord f à x, puis g au résultat.\n\nLa notation g ∘ f se lit « g rond f »."
          },
          {
            type: "schema",
            titre: "L'ordre des opérations",
            svg: "<svg viewBox='0 0 360 110' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Le nombre x passe par f puis par g pour donner g de f de x'><rect x='8' y='12' width='344' height='86' rx='10' fill='#f8fafc' stroke='#cbd5e1'/><text x='40' y='62' text-anchor='middle' font-size='17' fill='#334155'>x</text><text x='175' y='62' text-anchor='middle' font-size='17' fill='#1d4ed8'>f(x)</text><text x='305' y='62' text-anchor='middle' font-size='17' fill='#b91c1c'>g(f(x))</text><path d='M60 55 L135 55 M215 55 L260 55' fill='none' stroke='#475569' stroke-width='2'/><path d='M135 55 l-8 -4 M135 55 l-8 4 M260 55 l-8 -4 M260 55 l-8 4' fill='none' stroke='#475569' stroke-width='2'/><text x='98' y='43' text-anchor='middle' font-size='13' fill='#334155'>f</text><text x='238' y='43' text-anchor='middle' font-size='13' fill='#334155'>g</text></svg>",
            legende: "Pour calculer (g ∘ f)(x), on applique d'abord f, puis g."
          },
          {
            type: "exemple",
            titre: "Calculer une composée",
            texte: "Soit f(x) = x + 1 et g(x) = x², définies sur ℝ.\n\nAlors :\n\n(g ∘ f)(x) = g(f(x)) = g(x + 1) = (x + 1)².\n\nPour x = 2 : f(2) = 3, puis g(3) = 9. Donc (g ∘ f)(2) = 9."
          },
          {
            type: "remarque",
            titre: "L'ordre compte",
            texte: "Avec les mêmes fonctions, on peut aussi calculer :\n\n(f ∘ g)(x) = f(g(x)) = f(x²) = x² + 1.\n\nEn général, g ∘ f et f ∘ g sont différentes.\n\nPar exemple, pour x = 2 :\n(g ∘ f)(2) = 9, tandis que (f ∘ g)(2) = 5."
          }
        ]
      },

      {
        id: "m2-ch12-domaine-composition",
        titre: "Domaine d'une composée",
        blocs: [
          {
            type: "regle",
            titre: "Deux conditions",
            texte: "Pour calculer (g ∘ f)(x) = g(f(x)), il faut :\n\n• que x appartienne au domaine de f ;\n• que f(x) appartienne au domaine de g.\n\nLes deux conditions doivent être vérifiées en même temps."
          },
          {
            type: "exemple",
            titre: "Une racine après une fonction affine",
            texte: "Soit f(x) = x - 3 sur ℝ et g(t) = √t sur [0 ; +∞[.\n\nAlors (g ∘ f)(x) = √(x - 3).\n\nIl faut x - 3 ≥ 0, donc x ≥ 3.\n\nLe domaine de g ∘ f est [3 ; +∞[."
          },
          {
            type: "exemple",
            titre: "Un inverse après une fonction affine",
            texte: "Soit f(x) = 2x + 1 sur ℝ et g(t) = 1/t pour t ≠ 0.\n\nAlors (g ∘ f)(x) = 1/(2x + 1).\n\nIl faut 2x + 1 ≠ 0, donc x ≠ -1/2.\n\nLe domaine est ]-∞ ; -1/2[ ∪ ]-1/2 ; +∞[."
          },
          {
            type: "remarque",
            titre: "Une simplification ne change pas le domaine initial",
            texte: "Soit f(x) = x² - 1 définie sur ℝ et g(t) = 1/t définie pour t ≠ 0.\n\nLa composée g ∘ f est donnée par 1/(x² - 1). Il faut exclure x = -1 et x = 1.\n\nDe manière générale, même si une expression se simplifie, il faut conserver les restrictions provenant des fonctions de départ."
          },
          {
            type: "methode",
            titre: "Identifier les deux fonctions",
            texte: "Pour reconnaître une composée, lis la formule de l'intérieur vers l'extérieur.\n\nExemple : h(x) = √(2x + 3).\n\n• D'abord f(x) = 2x + 3.\n• Ensuite g(t) = √t.\n\nAinsi h = g ∘ f. Pour son domaine, on résout 2x + 3 ≥ 0 : x ≥ -3/2."
          }
        ]
      },

      {
        id: "m2-ch12-composition-variations",
        titre: "Composition et variations",
        blocs: [
          {
            type: "regle",
            titre: "Sens de variation",
            texte: "Sur un intervalle I, supposons que f soit monotone et que g soit monotone sur un intervalle contenant toutes les valeurs de f sur I.\n\n• Si f et g ont le même sens de variation, g ∘ f est croissante sur I.\n• Si elles ont des sens de variation opposés, g ∘ f est décroissante sur I.\n\nCes conclusions s'entendent ici au sens large : croissante signifie « ne diminue pas » et décroissante signifie « n'augmente pas »."
          },
          {
            type: "exemple",
            titre: "Deux fonctions croissantes",
            texte: "Soit h(x) = √(2x + 3), définie sur [-3/2 ; +∞[.\n\nLa fonction f(x) = 2x + 3 est croissante sur ce domaine. Ses valeurs sont dans [0 ; +∞[, où la fonction racine est croissante.\n\nDonc h = g ∘ f est croissante sur [-3/2 ; +∞[."
          },
          {
            type: "exemple",
            titre: "Une fonction décroissante puis une croissante",
            texte: "Soit h(x) = √(5 - x), définie sur ]-∞ ; 5].\n\nLa fonction f(x) = 5 - x est décroissante. Ses valeurs sont positives ou nulles et la fonction racine est croissante sur [0 ; +∞[.\n\nLa composée h est donc décroissante sur ]-∞ ; 5]."
          },
          {
            type: "remarque",
            titre: "Vérifier où l'on utilise la fonction extérieure",
            texte: "Pour h(x) = (x - 1)², on applique d'abord f(x) = x - 1, puis la fonction carré.\n\nLa fonction carré n'a pas le même sens de variation sur tout ℝ. Il faut distinguer les valeurs de x pour lesquelles x - 1 ≤ 0 et celles pour lesquelles x - 1 ≥ 0.\n\nAinsi, h décroît sur ]-∞ ; 1] puis croît sur [1 ; +∞[."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule les parties entières :\n\n1. E(4,8)\n2. E(3)\n3. E(-0,5)\n4. E(-2,1)",
        correction: "1. E(4,8) = 4, car 4 ≤ 4,8 < 5.\n\n2. E(3) = 3.\n\n3. E(-0,5) = -1, car -1 ≤ -0,5 < 0.\n\n4. E(-2,1) = -3, car -3 ≤ -2,1 < -2."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = x + 2 et g(x) = x², définies sur ℝ.\n\nCalcule f(1), g(f(1)) et f(g(1)).",
        correction: "f(1) = 1 + 2 = 3.\n\nDonc g(f(1)) = g(3) = 3² = 9.\n\nD'autre part, g(1) = 1 et f(g(1)) = f(1) = 3.\n\nL'ordre des deux opérations donne ici des résultats différents."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ :\n\n1. E(x) = 3\n2. E(x) = -2\n3. E(x) = 1,5",
        correction: "1. E(x) = 3 équivaut à 3 ≤ x < 4. S = [3 ; 4[.\n\n2. E(x) = -2 équivaut à -2 ≤ x < -1. S = [-2 ; -1[.\n\n3. E(x) est toujours un entier. Elle ne peut pas valoir 1,5 : S = ∅."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = 2x - 1 et g(x) = x² sur ℝ.\n\n1. Exprime g ∘ f.\n2. Exprime f ∘ g.\n3. Calcule chacune de ces composées en 2.",
        correction: "1. (g ∘ f)(x) = g(2x - 1) = (2x - 1)².\n\n2. (f ∘ g)(x) = f(x²) = 2x² - 1.\n\n3. (g ∘ f)(2) = 3² = 9. En revanche, (f ∘ g)(2) = 2 × 4 - 1 = 7."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ :\n\n1. E(x) ≥ 3\n2. E(x) < -1\n3. E(x) ≤ 2",
        correction: "1. E(x) ≥ 3 équivaut à x ≥ 3. S = [3 ; +∞[.\n\n2. E(x) < -1 signifie que la partie entière est au plus -2. Cela équivaut à x < -1. S = ]-∞ ; -1[.\n\n3. E(x) ≤ 2 signifie que la partie entière est strictement inférieure à 3. Cela équivaut à x < 3. S = ]-∞ ; 3[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = 3x - 2 sur ℝ et g(t) = √t sur [0 ; +∞[.\n\n1. Exprime g ∘ f.\n2. Détermine son domaine.\n3. Calcule (g ∘ f)(2).\n4. Le nombre 0 appartient-il au domaine ?",
        correction: "1. (g ∘ f)(x) = √(3x - 2).\n\n2. Il faut 3x - 2 ≥ 0, donc x ≥ 2/3. Le domaine est [2/3 ; +∞[.\n\n3. (g ∘ f)(2) = √(6 - 2) = √4 = 2.\n\n4. Non : 0 < 2/3. En effet, 3 × 0 - 2 = -2 et √(-2) n'est pas défini dans ℝ."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x - 1 sur ℝ et g(t) = 1/t pour t ≠ 0.\n\n1. Exprime g ∘ f et donne son domaine.\n2. Exprime f ∘ g et donne son domaine.\n3. Calcule les deux composées en 2.",
        correction: "1. (g ∘ f)(x) = 1/(x - 1). Il faut x ≠ 1. Son domaine est ℝ privé de 1.\n\n2. (f ∘ g)(x) = 1/x - 1. Il faut x ≠ 0. Son domaine est ℝ privé de 0.\n\n3. (g ∘ f)(2) = 1/(2 - 1) = 1. De plus, (f ∘ g)(2) = 1/2 - 1 = -1/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère h(x) = √(7 - 2x).\n\n1. Détermine son domaine.\n2. Décompose h en deux fonctions simples.\n3. Étudie son sens de variation sur son domaine.\n4. Calcule h(3).",
        correction: "1. Il faut 7 - 2x ≥ 0, soit x ≤ 7/2. Le domaine est ]-∞ ; 7/2].\n\n2. On peut poser f(x) = 7 - 2x et g(t) = √t. Alors h = g ∘ f.\n\n3. f est décroissante et ses valeurs sur le domaine sont positives ou nulles. La fonction racine est croissante sur [0 ; +∞[. Donc h est décroissante sur ]-∞ ; 7/2].\n\n4. h(3) = √(7 - 6) = 1."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère la fonction h définie par h(x) = E(2x + 1).\n\n1. Calcule h(-1), h(0,4) et h(1).\n2. Résous h(x) = 2.\n3. Résous h(x) ≥ 3.\n4. Explique pourquoi h est croissante sur ℝ sans être strictement croissante.",
        correction: "1. h(-1) = E(-1) = -1. h(0,4) = E(1,8) = 1. h(1) = E(3) = 3.\n\n2. E(2x + 1) = 2 équivaut à 2 ≤ 2x + 1 < 3. Donc 1 ≤ 2x < 2, puis 1/2 ≤ x < 1. S = [1/2 ; 1[.\n\n3. E(2x + 1) ≥ 3 équivaut à 2x + 1 ≥ 3, donc x ≥ 1. S = [1 ; +∞[.\n\n4. x ↦ 2x + 1 est croissante et E est croissante : leur composée est croissante. Elle n'est pas strictement croissante car elle est constante sur des intervalles. Par exemple, h(0) = E(1) = 1 et h(0,4) = 1, alors que 0 < 0,4."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère h(x) = √(x² - 4).\n\n1. Détermine son domaine.\n2. Calcule h(-3) et h(3).\n3. Résous h(x) = 0.\n4. Résous h(x) = 3 en vérifiant les solutions.",
        correction: "1. Il faut x² - 4 ≥ 0. Or x² - 4 = (x - 2)(x + 2). Cette expression est positive ou nulle pour x ≤ -2 ou x ≥ 2.\n\nLe domaine est ]-∞ ; -2] ∪ [2 ; +∞[.\n\n2. h(-3) = √(9 - 4) = √5. De même, h(3) = √5.\n\n3. √(x² - 4) = 0 équivaut à x² - 4 = 0. Les solutions sont -2 et 2 ; elles appartiennent au domaine.\n\n4. Si h(x) = 3, alors x² - 4 = 9, donc x² = 13. Les solutions possibles sont -√13 et √13.\n\nVérification : pour chacune, x² - 4 = 13 - 4 = 9, donc h(x) = 3. Les deux solutions sont admises."
      }
    ]
  }
]);
