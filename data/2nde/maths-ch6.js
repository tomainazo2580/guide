// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 6 : systèmes de deux équations à deux inconnues.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-systemes-equations",
    titre: "Chapitre 6 : Systèmes d'équations à deux inconnues",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch6-notion",
        titre: "Comprendre un système",
        blocs: [
          {
            type: "introduction",
            titre: "Deux conditions à satisfaire",
            texte: "Dans certains problèmes, deux quantités inconnues sont liées par plusieurs conditions.\n\nPar exemple, si x et y sont deux nombres dont la somme vaut 10 et la différence x - y vaut 2, ils doivent vérifier simultanément :\n\nx + y = 10\nx - y = 2\n\nCes deux équations forment un système."
          },
          {
            type: "definition",
            titre: "Solution d'un système",
            texte: "Une solution est un couple ordonné (x ; y) qui rend vraies toutes les équations du système.\n\nPour le système x + y = 10 et x - y = 2, le couple (6 ; 4) est une solution :\n\n6 + 4 = 10 et 6 - 4 = 2.\n\nL'ordre compte : dans (6 ; 4), x = 6 et y = 4. Le couple (4 ; 6) ne vérifie pas la deuxième équation."
          },
          {
            type: "definition",
            titre: "Système linéaire",
            texte: "Dans ce chapitre, nous étudions notamment les systèmes de la forme :\n\na x + b y = c\na' x + b' y = c'\n\nLes coefficients sont des réels et x et y sont les inconnues.\n\nUne équation comme x² + y = 3 n'est pas linéaire, car elle contient x²."
          },
          {
            type: "methode",
            titre: "Vérifier un couple",
            texte: "Pour savoir si un couple est solution :\n\n1. Remplace x et y par les valeurs du couple dans la première équation.\n2. Fais de même dans la seconde.\n3. Le couple est solution seulement si les deux égalités sont vraies.\n\nExemple : pour x + y = 5 et 2x - y = 1, le couple (2 ; 3) convient : 2 + 3 = 5 et 2 × 2 - 3 = 1."
          }
        ]
      },

      {
        id: "m2-ch6-substitution",
        titre: "Résoudre par substitution",
        blocs: [
          {
            type: "methode",
            titre: "Principe",
            texte: "La substitution consiste à exprimer une inconnue en fonction de l'autre dans une équation, puis à remplacer cette expression dans l'autre équation.\n\nOn obtient alors une équation à une seule inconnue."
          },
          {
            type: "exemple",
            titre: "Exemple détaillé",
            texte: "Résolvons :\n\nx + y = 7\n2x - y = 2\n\nDans la première équation, on isole y :\ny = 7 - x.\n\nOn remplace y dans la deuxième :\n2x - (7 - x) = 2.\n\nAttention aux parenthèses :\n2x - 7 + x = 2,\ndonc 3x = 9 et x = 3.\n\nPuis y = 7 - 3 = 4.\n\nVérification : 3 + 4 = 7 et 2 × 3 - 4 = 2.\n\nL'unique solution est (3 ; 4). On écrit S = {(3 ; 4)}."
          },
          {
            type: "methode",
            titre: "Choisir une inconnue",
            texte: "Quand c'est possible, isole une inconnue dont le coefficient est 1 ou -1 : cela évite souvent les fractions.\n\nPar exemple, dans 3x + y = 8, on obtient facilement y = 8 - 3x.\n\nSi l'on divise par un coefficient, il faut vérifier qu'il est non nul."
          },
          {
            type: "remarque",
            titre: "Après avoir trouvé x",
            texte: "Trouver x ne suffit pas : il faut calculer y, puis écrire le couple dans l'ordre (x ; y).\n\nLa vérification dans les deux équations permet de repérer les erreurs de signe."
          }
        ]
      },

      {
        id: "m2-ch6-elimination",
        titre: "Résoudre par élimination",
        blocs: [
          {
            type: "methode",
            titre: "Principe",
            texte: "La méthode par élimination consiste à additionner ou soustraire des équations pour faire disparaître une inconnue.\n\nOn peut d'abord multiplier une équation entière par un même nombre non nul afin d'obtenir des coefficients opposés."
          },
          {
            type: "exemple",
            titre: "Éliminer une inconnue",
            texte: "Résolvons :\n\n2x + y = 8\n3x - y = 7\n\nEn additionnant membre à membre, y disparaît :\n\n5x = 15, donc x = 3.\n\nDans la première équation :\n2 × 3 + y = 8, donc y = 2.\n\nVérification : 2 × 3 + 2 = 8 et 3 × 3 - 2 = 7.\n\nL'unique solution est (3 ; 2)."
          },
          {
            type: "exemple",
            titre: "Multiplier avant d'additionner",
            texte: "Résolvons :\n\nx + 2y = 8\n3x + y = 9\n\nOn multiplie la première équation par -3 :\n-3x - 6y = -24.\n\nOn l'additionne à la deuxième :\n-5y = -15, donc y = 3.\n\nDans x + 2y = 8 : x + 6 = 8, donc x = 2.\n\nVérification : 2 + 2 × 3 = 8 et 3 × 2 + 3 = 9.\n\nS = {(2 ; 3)}."
          },
          {
            type: "remarque",
            titre: "Conserver une équation",
            texte: "Après l'élimination, utilise une des équations de départ pour calculer l'autre inconnue.\n\nQuand tu multiplies une équation, multiplie tous ses termes, y compris le membre de droite."
          }
        ]
      },

      {
        id: "m2-ch6-cas",
        titre: "Nombre de solutions",
        blocs: [
          {
            type: "definition",
            titre: "Trois possibilités",
            texte: "Un système linéaire de deux équations à deux inconnues peut avoir :\n\n• une unique solution ;\n• aucune solution ;\n• une infinité de solutions.\n\nIl faut donc lire attentivement le résultat obtenu après élimination."
          },
          {
            type: "exemple",
            titre: "Aucune solution",
            texte: "Considérons :\n\nx + y = 3\n2x + 2y = 8\n\nEn doublant la première équation, on obtient 2x + 2y = 6. La deuxième exige 2x + 2y = 8.\n\nCela conduirait à 6 = 8, ce qui est impossible. Le système n'a aucune solution : S = ∅."
          },
          {
            type: "exemple",
            titre: "Une infinité de solutions",
            texte: "Considérons :\n\nx + y = 3\n2x + 2y = 6\n\nLa deuxième équation est le double de la première : elle n'ajoute aucune condition.\n\nTous les couples vérifiant x + y = 3 sont solutions. On peut écrire :\n\nS = {(t ; 3 - t) ; t ∈ ℝ}.\n\nPar exemple, (0 ; 3), (1 ; 2) et (4 ; -1) sont solutions."
          },
          {
            type: "remarque",
            titre: "Interpréter 0 = 0",
            texte: "Si une élimination conduit à 0 = 0, cela signifie que l'équation obtenue est toujours vraie. Il faut encore tenir compte de l'équation conservée.\n\nDans les exemples précédents, cette équation donne une infinité de couples. À l'inverse, une égalité impossible comme 0 = 2 indique qu'il n'y a aucune solution."
          }
        ]
      },

      {
        id: "m2-ch6-graphique",
        titre: "Interprétation graphique",
        blocs: [
          {
            type: "definition",
            titre: "Une équation et sa droite",
            texte: "Dans un repère, une équation ax + by = c, avec a et b non tous deux nuls, représente une droite.\n\nUn point M(x ; y) appartient à cette droite si et seulement si ses coordonnées vérifient l'équation.\n\nUne solution d'un système correspond donc à un point commun aux deux droites."
          },
          {
            type: "schema",
            titre: "Deux droites sécantes",
            svg: "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Deux droites se coupent au point de coordonnées deux et un'><rect x='5' y='5' width='330' height='210' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='35' y1='175' x2='310' y2='175' stroke='#334155' stroke-width='2'/><line x1='70' y1='200' x2='70' y2='20' stroke='#334155' stroke-width='2'/><path d='M310 175 l-8 -4 M310 175 l-8 4 M70 20 l-4 8 M70 20 l4 8' fill='none' stroke='#334155' stroke-width='2'/><line x1='70' y1='75' x2='270' y2='175' stroke='#2563eb' stroke-width='3'/><line x1='70' y1='175' x2='270' y2='75' stroke='#dc2626' stroke-width='3'/><circle cx='170' cy='125' r='5' fill='#7c3aed'/><line x1='170' y1='125' x2='170' y2='175' stroke='#64748b' stroke-dasharray='4 4'/><line x1='70' y1='125' x2='170' y2='125' stroke='#64748b' stroke-dasharray='4 4'/><text x='58' y='193' font-size='13' fill='#334155'>0</text><text x='166' y='194' font-size='13' fill='#334155'>2</text><text x='53' y='130' font-size='13' fill='#334155'>1</text><text x='180' y='119' font-size='14' fill='#6d28d9'>M(2 ; 1)</text><text x='280' y='193' font-size='14' fill='#334155'>x</text><text x='80' y='30' font-size='14' fill='#334155'>y</text></svg>",
            legende: "Les deux droites se coupent en M(2 ; 1). Pour le système représenté, le couple (2 ; 1) est l'unique solution."
          },
          {
            type: "regle",
            titre: "Positions des droites",
            texte: "Lorsque chaque équation représente une droite :\n\n• deux droites sécantes ont un seul point commun : le système a une solution unique ;\n• deux droites parallèles distinctes n'ont aucun point commun : le système n'a aucune solution ;\n• deux droites confondues ont tous leurs points en commun : le système a une infinité de solutions."
          },
          {
            type: "methode",
            titre: "Tracer une droite à partir de son équation",
            texte: "Pour tracer x + y = 3 :\n\n• si x = 0, alors y = 3 : on obtient A(0 ; 3) ;\n• si y = 0, alors x = 3 : on obtient B(3 ; 0).\n\nPlace A et B dans le repère, puis trace la droite passant par ces deux points distincts.\n\nTrace de la même façon la seconde droite. Lis ensuite les coordonnées de leur point d'intersection, s'il existe."
          },
          {
            type: "remarque",
            titre: "Précision de la lecture graphique",
            texte: "Un dessin peut donner une valeur approchée, surtout si le point d'intersection ne tombe pas exactement sur une graduation.\n\nUne résolution algébrique permet de trouver des valeurs exactes et de vérifier la lecture graphique."
          }
        ]
      },

      {
        id: "m2-ch6-problemes",
        titre: "Mettre un problème en équations",
        blocs: [
          {
            type: "methode",
            titre: "Les étapes",
            texte: "1. Choisis les inconnues et précise ce qu'elles représentent, avec leurs unités.\n2. Traduis chaque condition par une équation.\n3. Résous le système.\n4. Vérifie les résultats dans les conditions de départ.\n5. Rédige une réponse adaptée au contexte.\n\nUne solution algébrique négative ou non entière peut être à rejeter si le contexte exige des quantités positives ou entières."
          },
          {
            type: "exemple",
            titre: "Cahiers et stylos",
            texte: "Deux cahiers et trois stylos coûtent 7 500 Ar. Un cahier et un stylo coûtent 3 000 Ar. Quels sont les prix ?\n\nSoit x le prix d'un cahier et y celui d'un stylo, en ariary.\n\n2x + 3y = 7 500\nx + y = 3 000\n\nDans la seconde équation : x = 3 000 - y.\n\nEn remplaçant :\n2(3 000 - y) + 3y = 7 500,\ndonc 6 000 + y = 7 500 et y = 1 500.\n\nPuis x = 3 000 - 1 500 = 1 500.\n\nVérification : 2 × 1 500 + 3 × 1 500 = 7 500.\n\nUn cahier coûte 1 500 Ar et un stylo coûte 1 500 Ar."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Le couple (2 ; 3) est-il solution de chacun des systèmes suivants ? Justifie.\n\n1. x + y = 5 et x - y = -1.\n2. x + y = 5 et 2x + y = 8.",
        correction: "1. Avec x = 2 et y = 3 : 2 + 3 = 5 et 2 - 3 = -1. Les deux équations sont vérifiées : le couple est solution.\n\n2. La première équation est vérifiée, mais 2 × 2 + 3 = 7 ≠ 8. Le couple n'est donc pas solution."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On considère la droite d'équation x + y = 4.\n\n1. Le point A(1 ; 3) appartient-il à la droite ?\n2. Le point B(2 ; 1) appartient-il à la droite ?\n3. Donne un autre point de cette droite.",
        correction: "1. Oui, car 1 + 3 = 4.\n\n2. Non, car 2 + 1 = 3 ≠ 4.\n\n3. Par exemple C(0 ; 4), car 0 + 4 = 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous par substitution :\n\nx + y = 9\nx - y = 3",
        correction: "La première équation donne y = 9 - x.\n\nOn remplace dans la seconde : x - (9 - x) = 3, donc 2x - 9 = 3, puis 2x = 12 et x = 6.\n\nAlors y = 9 - 6 = 3.\n\nVérification : 6 + 3 = 9 et 6 - 3 = 3.\n\nS = {(6 ; 3)}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous par élimination :\n\n2x + y = 7\nx - y = 2",
        correction: "En additionnant les deux équations, on obtient 3x = 9, donc x = 3.\n\nDans x - y = 2 : 3 - y = 2, d'où y = 1.\n\nVérification : 2 × 3 + 1 = 7 et 3 - 1 = 2.\n\nS = {(3 ; 1)}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous le système :\n\n2x + 3y = 13\n3x - 2y = 0",
        correction: "On multiplie la première équation par 2 :\n4x + 6y = 26.\n\nOn multiplie la seconde par 3 :\n9x - 6y = 0.\n\nEn additionnant : 13x = 26, donc x = 2.\n\nDans 3x - 2y = 0 : 6 - 2y = 0, donc y = 3.\n\nVérification : 2 × 2 + 3 × 3 = 13 et 3 × 2 - 2 × 3 = 0.\n\nS = {(2 ; 3)}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Détermine le nombre de solutions de chaque système. Donne les solutions lorsqu'elles existent.\n\n1. x + y = 4 et 2x + 2y = 10.\n2. x - y = 2 et 3x - 3y = 6.",
        correction: "1. La première équation donne 2x + 2y = 8, alors que la seconde impose 2x + 2y = 10. C'est impossible. Il n'y a aucune solution : S = ∅.\n\n2. La deuxième équation est le triple de la première. Tous les couples vérifiant x - y = 2 sont solutions. En posant y = t, on obtient x = t + 2.\n\nAinsi S = {(t + 2 ; t) ; t ∈ ℝ}. Il y a une infinité de solutions."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère les droites d'équations x + y = 5 et x - y = 1.\n\n1. Résous le système correspondant.\n2. Donne les coordonnées de leur point d'intersection.\n3. Donne deux points distincts permettant de tracer chacune des droites.",
        correction: "1. En additionnant les équations : 2x = 6, donc x = 3. Puis 3 + y = 5, d'où y = 2. S = {(3 ; 2)}.\n\n2. Les droites se coupent au point M(3 ; 2).\n\n3. Pour x + y = 5, on peut utiliser (0 ; 5) et (5 ; 0).\n\nPour x - y = 1, on peut utiliser (1 ; 0) et (0 ; -1). Chaque paire contient deux points distincts."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous dans ℝ² :\n\n3x + 2y = 4\nx - y = 3",
        correction: "La seconde équation donne y = x - 3.\n\nOn remplace dans la première : 3x + 2(x - 3) = 4, donc 5x - 6 = 4, puis 5x = 10 et x = 2.\n\nAlors y = 2 - 3 = -1.\n\nVérification : 3 × 2 + 2 × (-1) = 4 et 2 - (-1) = 3.\n\nS = {(2 ; -1)}."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans une papeterie, 2 cahiers et 3 stylos coûtent 8 500 Ar. Trois cahiers et 2 stylos coûtent 9 000 Ar.\n\n1. Choisis les inconnues et traduis les données par un système.\n2. Détermine le prix d'un cahier et celui d'un stylo.\n3. Vérifie les deux montants.",
        correction: "1. Soit x le prix d'un cahier et y celui d'un stylo, en ariary.\n\nLe système est :\n2x + 3y = 8 500\n3x + 2y = 9 000.\n\n2. On multiplie la première équation par 3 et la seconde par 2 :\n6x + 9y = 25 500\n6x + 4y = 18 000.\n\nEn soustrayant la seconde de la première : 5y = 7 500, donc y = 1 500.\n\nPuis 3x + 2 × 1 500 = 9 000, donc 3x = 6 000 et x = 2 000.\n\n3. Vérification : 2 × 2 000 + 3 × 1 500 = 8 500 ; 3 × 2 000 + 2 × 1 500 = 9 000.\n\nUn cahier coûte 2 000 Ar et un stylo 1 500 Ar."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une association vend deux types de billets. Le billet adulte coûte 5 000 Ar et le billet enfant coûte 3 000 Ar. Elle vend 80 billets pour une recette totale de 328 000 Ar.\n\n1. Note x le nombre de billets adultes et y le nombre de billets enfants. Écris un système.\n2. Résous-le.\n3. Vérifie que les résultats conviennent au contexte et calcule la recette obtenue avec chaque type de billet.",
        correction: "1. Le nombre total de billets donne x + y = 80. La recette donne 5 000x + 3 000y = 328 000.\n\n2. De x + y = 80, on tire y = 80 - x.\n\n5 000x + 3 000(80 - x) = 328 000.\n\nDonc 2 000x + 240 000 = 328 000, puis 2 000x = 88 000 et x = 44.\n\nAlors y = 80 - 44 = 36.\n\n3. 44 et 36 sont des entiers positifs et leur somme est 80.\n\nLa recette des billets adultes est 44 × 5 000 = 220 000 Ar. Celle des billets enfants est 36 × 3 000 = 108 000 Ar. Leur somme est bien 328 000 Ar.\n\nL'association a vendu 44 billets adultes et 36 billets enfants."
      }
    ]
  }
]);
