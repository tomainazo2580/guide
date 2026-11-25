// ===== GUIDE - Mathématiques Première =====
// Chapitre 14 : étude des fonctions polynômes jusqu'au troisième degré.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-etude-polynomes",
    titre: "Chapitre 14 : Étude des fonctions polynômes jusqu'au troisième degré",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-polynomes-reconnaitre",
        titre: "Reconnaître une fonction polynôme",
        blocs: [
          {
            type: "introduction",
            titre: "Assembler les outils",
            texte: "Nous savons déterminer des racines, calculer une dérivée et étudier son signe. Dans ce chapitre, nous réunissons ces outils pour étudier des fonctions et comprendre l'allure de leurs courbes."
          },
          {
            type: "definition",
            titre: "Degré d'un polynôme",
            texte: "Une fonction polynôme de degré au plus 3 peut s'écrire :\n\nf(x) = ax³ + bx² + cx + d,\n\noù a, b, c et d sont des réels.\n\nSon degré est le plus grand exposant dont le coefficient est non nul :\n\n• degré 3 si a ≠ 0 ;\n• degré 2 si a = 0 et b ≠ 0 ;\n• degré 1 si a = b = 0 et c ≠ 0 ;\n• degré 0 si seuls les termes constants restent, avec d ≠ 0.\n\nUne fonction polynôme est définie et dérivable sur ℝ."
          },
          {
            type: "methode",
            titre: "Plan d'étude",
            texte: "Pour étudier une fonction polynôme :\n\n1. Précise son domaine et calcule sa dérivée.\n2. Étudie le signe de la dérivée et déduis les variations.\n3. Calcule les valeurs aux points importants : extrema et intersections avec les axes.\n4. Étudie les limites à l'infini si nécessaire.\n5. Rassemble ces informations dans un tableau puis trace une courbe cohérente.\n\nSelon la question, on peut aussi étudier le signe de f ou chercher ses intersections avec une autre courbe."
          }
        ]
      },

      {
        id: "m1-polynome-second-degre",
        titre: "Étudier une fonction du second degré",
        blocs: [
          {
            type: "definition",
            titre: "Sommet d'une parabole",
            texte: "La courbe de f(x) = ax² + bx + c, avec a ≠ 0, est une parabole.\n\nSon sommet a pour abscisse :\n\nα = -b/(2a).\n\nSon ordonnée est β = f(α). On peut écrire :\n\nf(x) = a(x - α)² + β.\n\nCette écriture est appelée forme canonique."
          },
          {
            type: "regle",
            titre: "Variations",
            texte: "Pour f(x) = a(x - α)² + β :\n\n• si a > 0, f décroît jusqu'à α puis croît ; elle admet le minimum β en α ;\n• si a < 0, f croît jusqu'à α puis décroît ; elle admet le maximum β en α.\n\nLa droite verticale x = α est un axe de symétrie de la parabole."
          },
          {
            type: "exemple",
            titre: "Étude complète d'une parabole",
            texte: "Étudions f(x) = x² - 4x + 3.\n\nSon domaine est ℝ. Sa dérivée est f'(x) = 2x - 4 = 2(x - 2).\n\nElle est négative si x < 2 et positive si x > 2. Donc f décroît sur ]-∞ ; 2] puis croît sur [2 ; +∞[.\n\nLe sommet est S(2 ; -1), car f(2) = -1. La forme canonique est :\n\nf(x) = (x - 2)² - 1.\n\nPour les intersections avec l'axe des abscisses :\n\nf(x) = (x - 1)(x - 3).\n\nLes points sont (1 ; 0) et (3 ; 0). Avec l'axe des ordonnées, on obtient (0 ; 3)."
          },
          {
            type: "remarque",
            titre: "Racines et sommet",
            texte: "Quand une parabole possède deux racines distinctes r₁ et r₂, l'axe de symétrie passe au milieu : son abscisse est (r₁ + r₂)/2.\n\nDans l'exemple précédent, (1 + 3)/2 = 2, ce qui correspond bien à l'abscisse du sommet."
          }
        ]
      },

      {
        id: "m1-limites-polynomes",
        titre: "Étudier les limites à l'infini",
        blocs: [
          {
            type: "regle",
            titre: "Le terme de plus haut degré",
            texte: "À l'infini, le terme de plus haut degré détermine la limite d'un polynôme non constant.\n\nPour ax² + bx + c, avec a ≠ 0 :\n• si a > 0, la limite est +∞ aux deux extrémités ;\n• si a < 0, elle est -∞ aux deux extrémités.\n\nPour ax³ + bx² + cx + d, avec a ≠ 0 :\n• si a > 0, la limite est -∞ en -∞ et +∞ en +∞ ;\n• si a < 0, la limite est +∞ en -∞ et -∞ en +∞."
          },
          {
            type: "exemple",
            titre: "Mettre le terme dominant en évidence",
            texte: "Pour f(x) = -2x³ + x² + 1, on écrit, pour x ≠ 0 :\n\nf(x) = x³(-2 + 1/x + 1/x³).\n\nLorsque x tend vers +∞ ou -∞, le facteur entre parenthèses tend vers -2.\n\nAinsi f(x) tend vers -∞ quand x → +∞ et vers +∞ quand x → -∞."
          },
          {
            type: "remarque",
            titre: "À ne pas confondre",
            texte: "Les limites décrivent les extrémités de la courbe. Elles ne suffisent pas à déterminer ce qui se passe entre les deux : pour cela, on étudie notamment la dérivée."
          }
        ]
      },

      {
        id: "m1-polynome-troisieme-degre",
        titre: "Étudier un polynôme du troisième degré",
        blocs: [
          {
            type: "exemple",
            titre: "Fonction, dérivée et signe",
            texte: "Étudions f(x) = x³ - 3x sur ℝ.\n\nSa dérivée est :\n\nf'(x) = 3x² - 3 = 3(x - 1)(x + 1).\n\nElle s'annule en -1 et 1. Son coefficient dominant est positif, donc :\n\n• f'(x) > 0 si x < -1 ou x > 1 ;\n• f'(x) < 0 si -1 < x < 1.\n\nLa fonction croît, puis décroît, puis croît."
          },
          {
            type: "tableau",
            titre: "Variations de f(x) = x³ - 3x",
            entetes: ["Valeurs de x", "]-∞ ; -1[", "-1", "]-1 ; 1[", "1", "]1 ; +∞["],
            lignes: [
              ["Signe de f'(x)", "+", "0", "−", "0", "+"],
              ["Variation de f", "croît", "f(-1) = 2", "décroît", "f(1) = -2", "croît"]
            ]
          },
          {
            type: "exemple",
            titre: "Points et limites",
            texte: "Dans l'exemple précédent :\n\nf(-1) = 2 et f(1) = -2. Le point (-1 ; 2) correspond à un maximum local, et (1 ; -2) à un minimum local.\n\nEn factorisant :\n\nf(x) = x(x² - 3) = x(x - √3)(x + √3).\n\nLa courbe coupe l'axe des abscisses en (-√3 ; 0), (0 ; 0) et (√3 ; 0).\n\nEnfin, f(x) → -∞ quand x → -∞ et f(x) → +∞ quand x → +∞. Les extrema trouvés sont locaux : la fonction n'a pas de maximum ni de minimum sur ℝ."
          },
          {
            type: "schema",
            titre: "Courbe de f(x) = x³ - 3x",
            svg: "<svg viewBox='0 0 320 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Courbe du polynôme x cube moins trois x : elle croît jusqu’au maximum local moins un deux, décroît jusqu’au minimum local un moins deux, puis croît'><rect width='320' height='250' fill='white'/><g stroke='#e2e8f0' stroke-width='1'><path d='M80 25 V215 M120 25 V215 M160 25 V215 M200 25 V215 M240 25 V215'/><path d='M45 90 H275 M45 130 H275 M45 170 H275'/></g><g stroke='#475569' stroke-width='2'><line x1='45' y1='130' x2='280' y2='130'/><line x1='160' y1='220' x2='160' y2='20'/></g><path d='M80 170 C133.333 -70 186.667 330 240 90' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='120' cy='90' r='4' fill='#dc2626'/><circle cx='200' cy='170' r='4' fill='#dc2626'/><text x='48' y='78' font-size='13' fill='#b91c1c'>(-1 ; 2)</text><text x='207' y='188' font-size='13' fill='#b91c1c'>(1 ; -2)</text><text x='165' y='146' font-size='13'>0</text><text x='270' y='123' font-size='13'>x</text><text x='167' y='28' font-size='13'>y</text></svg>",
            legende: "Le graphique montre la courbe entre x = -2 et x = 2. Les points rouges sont les extrema locaux. L'unité verticale est représentée par 20 pixels et l'unité horizontale par 40 pixels."
          },
          {
            type: "remarque",
            titre: "Les situations varient",
            texte: "Un polynôme de degré 3 n'a pas toujours deux extrema locaux. Il faut étudier le signe de sa dérivée dans chaque cas.\n\nPar exemple, pour f(x) = x³, la dérivée 3x² est positive ou nulle et ne change pas de signe en 0 : la fonction est strictement croissante sur ℝ."
          }
        ]
      },

      {
        id: "m1-polynomes-signe-courbe",
        titre: "Relier les calculs à la courbe",
        blocs: [
          {
            type: "methode",
            titre: "Tracer sans confondre f et f'",
            texte: "Pour dessiner une courbe à partir d'une étude :\n\n• utilise le signe de f' pour savoir où la courbe monte ou descend ;\n• place les points obtenus avec f : intersections, sommets ou extrema ;\n• utilise le signe de f pour savoir si la courbe est au-dessus ou au-dessous de l'axe des abscisses ;\n• tiens compte des limites aux extrémités.\n\nLe signe de f' et le signe de f répondent à deux questions différentes."
          },
          {
            type: "exemple",
            titre: "Signe et variations",
            texte: "Pour f(x) = x² - 4x + 3 :\n\n• f'(x) est négative avant 2 : la courbe descend avant 2 ;\n• f(x) est négative entre 1 et 3 : la courbe est sous l'axe des abscisses sur cet intervalle.\n\nAinsi, entre 1 et 2, la fonction est négative et décroissante. Entre 2 et 3, elle est toujours négative, mais croissante."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Donne le degré et la dérivée de chacune des fonctions suivantes :\n\n1. f(x) = 2x² - 3x + 1\n2. g(x) = -x³ + 4x",
        correction: "1. f est de degré 2 et f'(x) = 4x - 3.\n\n2. g est de degré 3 et g'(x) = -3x² + 4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = (x - 2)² + 3.\n\n1. Donne les coordonnées du sommet de sa parabole.\n2. Quel est son minimum sur ℝ ?",
        correction: "1. La forme canonique donne le sommet S(2 ; 3).\n\n2. Comme (x - 2)² ≥ 0, f(x) ≥ 3. Le minimum est 3, atteint en x = 2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = x² - 6x + 8.\n\n1. Calcule f'(x) et étudie son signe.\n2. Déduis les variations et le minimum de f.",
        correction: "1. f'(x) = 2x - 6 = 2(x - 3). Elle est négative avant 3, nulle en 3 et positive après 3.\n\n2. f décroît sur ]-∞ ; 3] puis croît sur [3 ; +∞[. Son minimum est f(3) = 9 - 18 + 8 = -1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Détermine les limites de f(x) = -3x² + 2x + 1 lorsque x tend vers +∞ puis vers -∞.",
        correction: "Le terme de plus haut degré est -3x². Il tend vers -∞ aux deux extrémités.\n\nDonc f(x) tend vers -∞ lorsque x → +∞ et lorsque x → -∞."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = -x² + 4x sur ℝ.\n\n1. Étudie ses variations.\n2. Détermine son maximum.\n3. Calcule les points d'intersection de sa courbe avec l'axe des abscisses.",
        correction: "1. f'(x) = -2x + 4 = -2(x - 2). Elle est positive avant 2 et négative après 2. Donc f croît sur ]-∞ ; 2] puis décroît sur [2 ; +∞[.\n\n2. Le maximum vaut f(2) = -4 + 8 = 4.\n\n3. f(x) = x(4 - x). Les racines sont 0 et 4. Les intersections sont (0 ; 0) et (4 ; 0)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x³ - 3x².\n\n1. Calcule et factorise f'(x).\n2. Étudie les variations de f sur ℝ.\n3. Donne ses extrema locaux.",
        correction: "1. f'(x) = 3x² - 6x = 3x(x - 2).\n\n2. La dérivée est positive pour x < 0 ou x > 2, et négative pour 0 < x < 2. Donc f croît sur ]-∞ ; 0], décroît sur [0 ; 2], puis croît sur [2 ; +∞[.\n\n3. f(0) = 0 : c'est un maximum local. f(2) = 8 - 12 = -4 : c'est un minimum local."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f(x) = x³ - 3x sur [-2 ; 2].\n\n1. Détermine ses variations sur cet intervalle.\n2. Calcule f(-2), f(-1), f(1) et f(2).\n3. Détermine son maximum et son minimum sur [-2 ; 2], avec les abscisses où ils sont atteints.\n4. Détermine les intersections avec l'axe des abscisses.",
        correction: "1. f'(x) = 3(x - 1)(x + 1). La fonction croît sur [-2 ; -1], décroît sur [-1 ; 1], puis croît sur [1 ; 2].\n\n2. f(-2) = -2 ; f(-1) = 2 ; f(1) = -2 ; f(2) = 2.\n\n3. En utilisant les variations et ces valeurs, le maximum est 2, atteint en -1 et 2. Le minimum est -2, atteint en -2 et 1.\n\n4. f(x) = x(x² - 3). Ses racines sont -√3, 0 et √3, toutes dans [-2 ; 2]. Les points sont (-√3 ; 0), (0 ; 0) et (√3 ; 0)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère f(x) = x³ - 4x sur ℝ.\n\n1. Factorise f et détermine ses racines.\n2. Calcule f'(x) et résous f'(x) = 0.\n3. Étudie les variations de f.\n4. Calcule les valeurs des extrema locaux et détermine les limites de f en -∞ et en +∞.",
        correction: "1. f(x) = x(x² - 4) = x(x - 2)(x + 2). Les racines sont -2, 0 et 2.\n\n2. f'(x) = 3x² - 4. L'équation f'(x) = 0 donne x² = 4/3, donc x = -2/√3 ou x = 2/√3.\n\n3. La dérivée est positive à l'extérieur de ces deux valeurs et négative entre elles. Ainsi f croît sur ]-∞ ; -2/√3], décroît sur [-2/√3 ; 2/√3], puis croît sur [2/√3 ; +∞[.\n\n4. Si a = 2/√3, alors a² = 4/3 et f(a) = a(a² - 4) = -8a/3 = -16/(3√3). Par conséquent f(-a) = 16/(3√3).\n\nLe maximum local vaut 16/(3√3), atteint en -2/√3. Le minimum local vaut -16/(3√3), atteint en 2/√3.\n\nLe terme dominant est x³ : f(x) → -∞ quand x → -∞ et f(x) → +∞ quand x → +∞."
      }
    ]
  }
]);
