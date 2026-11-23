// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 11 : fonctions racine carrée et inverse.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-fonctions-racine-inverse",
    titre: "Chapitre 11 : Fonctions racine carrée et inverse",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch11-racine-definition",
        titre: "La fonction racine carrée",
        blocs: [
          {
            type: "introduction",
            titre: "Retrouver le côté d'un carré",
            texte: "Un carré a une aire de 25 cm². La longueur positive de son côté est √25 = 5 cm.\n\nLa fonction racine carrée permet d'associer à une aire positive ou nulle la longueur correspondante."
          },
          {
            type: "definition",
            titre: "Définition et domaine",
            texte: "La fonction racine carrée associe à un réel x le nombre √x.\n\nDans ℝ, √x est défini seulement pour x ≥ 0. Son ensemble de définition est donc [0 ; +∞[.\n\nPour tout x ≥ 0, √x est positif ou nul et (√x)² = x."
          },
          {
            type: "tableau",
            titre: "Quelques valeurs exactes",
            entetes: ["x", "0", "1", "4", "9", "16", "25"],
            lignes: [
              ["√x", "0", "1", "2", "3", "4", "5"]
            ]
          },
          {
            type: "remarque",
            titre: "La racine carrée est positive ou nulle",
            texte: "√9 = 3 et non -3.\n\nL'équation x² = 9 possède deux solutions, -3 et 3, mais le symbole √9 désigne uniquement 3.\n\nDe plus, pour tout réel x, √(x²) = |x|. Par exemple, √((-4)²) = √16 = 4."
          },
          {
            type: "regle",
            titre: "Signe et zéro",
            texte: "Pour tout x ≥ 0, √x ≥ 0.\n\nLa fonction prend la valeur 0 uniquement pour x = 0. Son minimum sur [0 ; +∞[ est donc 0, atteint en 0.\n\nElle n'a pas de maximum sur son domaine : ses valeurs peuvent dépasser tout nombre donné."
          }
        ]
      },

      {
        id: "m2-ch11-racine-variations",
        titre: "Variations et courbe de la fonction racine",
        blocs: [
          {
            type: "regle",
            titre: "Une fonction strictement croissante",
            texte: "La fonction x ↦ √x est strictement croissante sur [0 ; +∞[.\n\nPour 0 ≤ u < v, on a √u < √v.\n\nPar exemple, 4 < 9 implique √4 < √9, soit 2 < 3."
          },
          {
            type: "methode",
            titre: "Comprendre la croissance",
            texte: "Soient 0 ≤ u < v. Les nombres √u et √v sont positifs ou nuls.\n\nSi l'on avait √u ≥ √v, leurs carrés vérifieraient u ≥ v, ce qui contredirait u < v.\n\nDonc √u < √v."
          },
          {
            type: "schema",
            titre: "Une portion de la courbe de y = √x",
            svg: "<svg viewBox='0 0 360 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Courbe de la racine carrée passant par zéro zéro, un un et quatre deux'><rect x='5' y='5' width='350' height='210' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='50' y1='180' x2='330' y2='180' stroke='#334155' stroke-width='2'/><line x1='50' y1='200' x2='50' y2='20' stroke='#334155' stroke-width='2'/><path d='M330 180 l-8 -4 M330 180 l-8 4 M50 20 l-4 8 M50 20 l4 8' fill='none' stroke='#334155' stroke-width='2'/><path d='M50 180 Q50 120 110 120 Q170 90 290 60' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='50' cy='180' r='4' fill='#dc2626'/><circle cx='110' cy='120' r='4' fill='#dc2626'/><circle cx='290' cy='60' r='4' fill='#dc2626'/><text x='38' y='198' font-size='13' fill='#334155'>0</text><text x='105' y='198' font-size='13' fill='#334155'>1</text><text x='285' y='198' font-size='13' fill='#334155'>4</text><text x='32' y='125' font-size='13' fill='#334155'>1</text><text x='32' y='65' font-size='13' fill='#334155'>2</text><text x='185' y='42' font-size='14' fill='#1d4ed8'>y = √x</text><text x='315' y='200' font-size='14' fill='#334155'>x</text><text x='60' y='30' font-size='14' fill='#334155'>y</text></svg>",
            legende: "La courbe commence à l'origine et monte lorsque x augmente. Les points (0 ; 0), (1 ; 1) et (4 ; 2) sont indiqués. Le tracé est une illustration."
          },
          {
            type: "methode",
            titre: "Encadrer une racine",
            texte: "Comme la fonction racine est croissante, on peut prendre la racine de chaque membre d'un encadrement positif.\n\nPar exemple : 9 < 10 < 16 donne 3 < √10 < 4.\n\nDe même, si 4 ≤ x ≤ 25, alors 2 ≤ √x ≤ 5."
          },
          {
            type: "remarque",
            titre: "Exact ou approché ?",
            texte: "√10 est une valeur exacte. Une calculatrice donne √10 ≈ 3,162 au millième.\n\nOn utilise ≈ pour une approximation, et non =."
          }
        ]
      },

      {
        id: "m2-ch11-racine-equations",
        titre: "Équations et inéquations avec une racine",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre √x = k",
            texte: "On cherche x dans le domaine x ≥ 0.\n\n• Si k < 0, il n'y a aucune solution : une racine carrée n'est jamais négative.\n• Si k ≥ 0, √x = k équivaut à x = k².\n\nExemple : √x = 5 donne x = 25. Vérification : √25 = 5."
          },
          {
            type: "methode",
            titre: "Résoudre une inéquation",
            texte: "Résolvons √x < 3.\n\nOn impose d'abord x ≥ 0. Comme la fonction racine est strictement croissante et que 3 = √9 :\n\n√x < √9 équivaut à x < 9.\n\nAvec la condition de domaine, les solutions sont [0 ; 9[."
          },
          {
            type: "methode",
            titre: "Une expression sous la racine",
            texte: "Résolvons √(x + 1) = 3.\n\nLa racine impose x + 1 ≥ 0.\n\nSi √(x + 1) = 3, alors x + 1 = 9, donc x = 8.\n\nOn vérifie dans l'équation initiale : √(8 + 1) = √9 = 3. La solution est x = 8."
          },
          {
            type: "remarque",
            titre: "Vérifier après avoir élevé au carré",
            texte: "Élever les deux membres au carré peut faire apparaître une valeur qui ne vérifie pas l'équation initiale.\n\nPar exemple, √x = -2 n'a aucune solution. Pourtant, si l'on élève au carré sans tenir compte du signe, on obtient x = 4 ; or √4 = 2 et non -2.\n\nVérifie donc toujours les conditions et les solutions obtenues."
          }
        ]
      },

      {
        id: "m2-ch11-inverse-definition",
        titre: "La fonction inverse",
        blocs: [
          {
            type: "definition",
            titre: "Définition et domaine",
            texte: "La fonction inverse associe à x le nombre 1/x.\n\nLa division par 0 n'étant pas définie, son domaine est ℝ privé de 0 :\n\n]-∞ ; 0[ ∪ ]0 ; +∞[.\n\nAttention : l'inverse de x est 1/x ; son opposé est -x. Ce sont deux notions différentes."
          },
          {
            type: "tableau",
            titre: "Quelques valeurs",
            entetes: ["x", "-4", "-2", "-1", "1", "2", "4"],
            lignes: [
              ["1/x", "-1/4", "-1/2", "-1", "1", "1/2", "1/4"]
            ]
          },
          {
            type: "regle",
            titre: "Signe et zéro",
            texte: "1/x a le même signe que x :\n\n• si x > 0, alors 1/x > 0 ;\n• si x < 0, alors 1/x < 0.\n\nLa fonction inverse ne prend jamais la valeur 0 : le numérateur 1 n'est pas nul."
          },
          {
            type: "definition",
            titre: "Une fonction impaire",
            texte: "Le domaine de la fonction inverse est symétrique par rapport à 0. Pour tout x ≠ 0 :\n\n1/(-x) = -1/x.\n\nLa fonction inverse est donc impaire. Sa courbe est symétrique par rapport à l'origine du repère."
          }
        ]
      },

      {
        id: "m2-ch11-inverse-variations",
        titre: "Variations et courbe de la fonction inverse",
        blocs: [
          {
            type: "regle",
            titre: "Deux intervalles distincts",
            texte: "La fonction inverse est strictement décroissante sur chacun des intervalles ]-∞ ; 0[ et ]0 ; +∞[.\n\nSur les positifs : 1 < 2 entraîne 1 > 1/2.\n\nSur les négatifs : -2 < -1 entraîne -1/2 > -1."
          },
          {
            type: "remarque",
            titre: "Ne pas traverser zéro",
            texte: "La fonction inverse n'est pas décroissante sur tout son domaine pris d'un seul bloc.\n\nEn effet, -1 < 1 mais 1/(-1) = -1 < 1 = 1/1. La conclusion attendue pour une fonction décroissante ne s'applique pas entre ces deux nombres.\n\nIl faut étudier séparément les intervalles négatif et positif."
          },
          {
            type: "methode",
            titre: "Justifier sur un même intervalle",
            texte: "Soient u et v non nuls, de même signe, avec u < v.\n\n1/u - 1/v = (v - u)/(uv).\n\nComme v - u > 0 et uv > 0, la différence est positive. Donc 1/u > 1/v.\n\nLa fonction inverse est ainsi strictement décroissante sur chacun des deux intervalles."
          },
          {
            type: "schema",
            titre: "Les deux branches de la fonction inverse",
            svg: "<svg viewBox='0 0 360 240' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Deux branches de la courbe de la fonction inverse, situées dans les quadrants positif positif et négatif négatif'><rect x='5' y='5' width='350' height='230' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='20' y1='120' x2='340' y2='120' stroke='#334155' stroke-width='2'/><line x1='180' y1='220' x2='180' y2='20' stroke='#334155' stroke-width='2'/><path d='M340 120 l-8 -4 M340 120 l-8 4 M180 20 l-4 8 M180 20 l4 8' fill='none' stroke='#334155' stroke-width='2'/><path d='M190 25 C195 75 215 103 330 110' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M170 215 C165 165 145 137 30 130' fill='none' stroke='#2563eb' stroke-width='3'/><text x='187' y='138' font-size='13' fill='#334155'>0</text><text x='255' y='70' font-size='14' fill='#1d4ed8'>y = 1/x</text><text x='325' y='140' font-size='14' fill='#334155'>x</text><text x='190' y='30' font-size='14' fill='#334155'>y</text></svg>",
            legende: "Illustration qualitative : la courbe possède deux branches symétriques par rapport à l'origine. Elle ne coupe aucun des deux axes."
          },
          {
            type: "remarque",
            titre: "Au voisinage des axes",
            texte: "Quand x positif se rapproche de 0, 1/x devient très grand. Quand x négatif se rapproche de 0, 1/x devient très petit, c'est-à-dire très négatif.\n\nQuand x s'éloigne de 0 en valeur absolue, 1/x se rapproche de 0 sans jamais lui être égal.\n\nLes axes sont des asymptotes de la courbe : elle s'en approche dans les situations décrites."
          }
        ]
      },

      {
        id: "m2-ch11-inverse-calculs",
        titre: "Équations et inéquations avec l'inverse",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre 1/x = k",
            texte: "On impose x ≠ 0.\n\n• Si k = 0, il n'y a aucune solution : 1/x n'est jamais nul.\n• Si k ≠ 0, l'unique solution est x = 1/k.\n\nExemple : 1/x = -2 donne x = -1/2. Vérification : 1/(-1/2) = -2."
          },
          {
            type: "methode",
            titre: "Résoudre en étudiant le signe",
            texte: "Résolvons 1/x ≥ 1.\n\nOn impose x ≠ 0, puis on regroupe :\n\n1/x - 1 ≥ 0,\nsoit (1 - x)/x ≥ 0.\n\nLes valeurs importantes sont 0, interdit, et 1, qui annule le numérateur.\n\n• Si x < 0, le numérateur est positif et le dénominateur négatif : le quotient est négatif.\n• Si 0 < x < 1, les deux sont positifs : le quotient est positif.\n• Pour x = 1, le quotient vaut 0.\n• Si x > 1, le quotient est négatif.\n\nL'ensemble des solutions est ]0 ; 1]."
          },
          {
            type: "remarque",
            titre: "Ne pas multiplier par x sans connaître son signe",
            texte: "Dans une inégalité, multiplier par x conserve le sens si x > 0 mais l'inverse si x < 0.\n\nLorsque le signe de x n'est pas connu, il faut distinguer les cas ou étudier le signe d'un quotient. La valeur x = 0 reste toujours interdite pour 1/x."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule les valeurs exactes lorsqu'elles existent dans ℝ :\n\n1. √0\n2. √16\n3. √(-9)\n4. 1/(-2)\n5. 1/0",
        correction: "1. √0 = 0.\n\n2. √16 = 4.\n\n3. √(-9) n'est pas défini dans ℝ : le nombre sous la racine est négatif.\n\n4. 1/(-2) = -1/2.\n\n5. 1/0 n'est pas défini : la division par zéro est impossible."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = √x sur son domaine naturel.\n\n1. Donne son domaine.\n2. Calcule f(1), f(9) et f(25).\n3. Quel est son minimum ?",
        correction: "1. Le domaine est [0 ; +∞[.\n\n2. f(1) = 1 ; f(9) = 3 ; f(25) = 5.\n\n3. √x ≥ 0 pour tout x du domaine et f(0) = 0. Le minimum est donc 0, atteint en 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Compare sans calculatrice :\n\n1. √7 et √10.\n2. 1/3 et 1/5.\n3. 1/(-4) et 1/(-2).",
        correction: "1. La fonction racine est croissante sur les positifs. Comme 7 < 10, √7 < √10.\n\n2. La fonction inverse est décroissante sur ]0 ; +∞[. Comme 3 < 5, 1/3 > 1/5.\n\n3. La fonction inverse est décroissante sur ]-∞ ; 0[. Comme -4 < -2, 1/(-4) > 1/(-2). En effet, -1/4 > -1/2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous dans ℝ :\n\n1. √x = 4\n2. √x = -1\n3. 1/x = 5\n4. 1/x = 0",
        correction: "1. √x = 4 donne x = 16. Vérification : √16 = 4. S = {16}.\n\n2. Une racine carrée est positive ou nulle. S = ∅.\n\n3. Pour x ≠ 0, 1/x = 5 donne x = 1/5. S = {1/5}.\n\n4. La fonction inverse ne prend jamais la valeur 0. S = ∅."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Détermine l'ensemble de définition de chaque fonction, sans restriction supplémentaire :\n\n1. f(x) = √(x - 5)\n2. g(x) = 1/(x + 3)\n3. h(x) = 1/√(x - 2)",
        correction: "1. Il faut x - 5 ≥ 0, donc x ≥ 5. Df = [5 ; +∞[.\n\n2. Il faut x + 3 ≠ 0, donc x ≠ -3. Dg = ]-∞ ; -3[ ∪ ]-3 ; +∞[.\n\n3. La racine doit exister et être non nulle car elle est au dénominateur. Il faut donc x - 2 > 0, soit x > 2. Dh = ]2 ; +∞[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ et écris les solutions sous forme d'intervalle :\n\n1. √x ≤ 4\n2. √x > 2\n3. √(x + 1) = 3",
        correction: "1. Il faut x ≥ 0. Comme 4 = √16 et que la racine est croissante, √x ≤ 4 équivaut à x ≤ 16. Avec le domaine : S = [0 ; 16].\n\n2. Il faut x ≥ 0. Comme 2 = √4, √x > 2 équivaut à x > 4. S = ]4 ; +∞[.\n\n3. On obtient x + 1 = 9, donc x = 8. Vérification : √(8 + 1) = 3. S = {8}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère f(x) = 1/x.\n\n1. Justifie que f est impaire.\n2. Compare f(-5) et f(-2).\n3. Compare f(2) et f(5).\n4. Le point A(2 ; 1/2) est sur la courbe. Donne son symétrique par rapport à l'origine.",
        correction: "1. Le domaine ℝ privé de 0 est symétrique par rapport à 0 et f(-x) = 1/(-x) = -f(x). Donc f est impaire.\n\n2. -5 < -2 et f est décroissante sur les négatifs : f(-5) > f(-2).\n\n3. 2 < 5 et f est décroissante sur les positifs : f(2) > f(5).\n\n4. Le symétrique est A'(-2 ; -1/2). Il est sur la courbe car f(-2) = -1/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ :\n\n1. 1/x > 0\n2. 1/x ≥ 1",
        correction: "1. On impose x ≠ 0. L'inverse a le même signe que x, donc 1/x > 0 équivaut à x > 0. S = ]0 ; +∞[.\n\n2. Pour x ≠ 0, 1/x ≥ 1 équivaut à (1 - x)/x ≥ 0.\n\nPour x < 0, le quotient est négatif. Pour 0 < x < 1, il est positif. Il est nul en 1, puis négatif pour x > 1.\n\nDonc S = ]0 ; 1]. Zéro est exclu car l'expression n'y est pas définie."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une surface carrée a une aire A comprise entre 36 m² et 64 m², bornes incluses. On note c la longueur de son côté en mètres.\n\n1. Exprime c en fonction de A.\n2. Encadre c et justifie.\n3. L'aire est exactement 50 m². Donne une valeur exacte de c, puis un encadrement entre deux entiers consécutifs.\n4. Une longueur de 7 m convient-elle pour une aire de 50 m² ?",
        correction: "1. Une longueur est positive ou nulle et A = c². Donc c = √A.\n\n2. La fonction racine est croissante sur [0 ; +∞[. De 36 ≤ A ≤ 64, on déduit 6 ≤ √A ≤ 8. Donc 6 ≤ c ≤ 8 m.\n\n3. Pour A = 50, c = √50 = 5√2 m. Comme 49 < 50 < 64, on a 7 < √50 < 8. Ainsi 7 < c < 8 m.\n\n4. Non. Un carré de côté 7 m a une aire de 7² = 49 m², et non 50 m²."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère f(x) = 1/x, définie sur ℝ privé de 0.\n\n1. Résous f(x) = -1/2.\n2. Résous f(x) ≤ -1.\n3. Détermine les solutions de la question 2 qui appartiennent aussi à [-3 ; 3].\n4. Vérifie si -1 et -1/2 sont solutions.",
        correction: "1. 1/x = -1/2 donne x = -2, qui est autorisé. Vérification : 1/(-2) = -1/2.\n\n2. Pour x ≠ 0, 1/x ≤ -1 équivaut à (1 + x)/x ≤ 0. Les valeurs importantes sont -1 et 0.\n\nSi x < -1, le numérateur et le dénominateur sont négatifs : le quotient est positif. En -1, il vaut 0. Si -1 < x < 0, le numérateur est positif et le dénominateur négatif : le quotient est négatif. Si x > 0, le quotient est positif.\n\nDonc S = [-1 ; 0[. Zéro est interdit.\n\n3. L'intervalle [-1 ; 0[ est entièrement inclus dans [-3 ; 3]. Les solutions demandées restent [-1 ; 0[.\n\n4. Pour x = -1, f(-1) = -1 ≤ -1 : oui. Pour x = -1/2, f(-1/2) = -2 ≤ -1 : oui."
      }
    ]
  }
]);
