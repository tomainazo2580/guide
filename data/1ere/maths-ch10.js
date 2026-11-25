// ===== GUIDE - Mathématiques Première =====
// Chapitre 10 : transformations graphiques et intersections.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-transformations-graphiques",
    titre: "Chapitre 10 : Transformations graphiques et intersections",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-courbe-coordonnees",
        titre: "Lire les coordonnées sur une courbe",
        blocs: [
          {
            type: "introduction",
            titre: "Une courbe raconte des calculs",
            texte: "La courbe d'une fonction permet de visualiser les valeurs qu'elle prend.\n\nSi f(2) = 3, le point de coordonnées (2 ; 3) appartient à sa courbe. Nous allons utiliser cette idée pour transformer des courbes et chercher leurs intersections."
          },
          {
            type: "definition",
            titre: "Courbe représentative",
            texte: "Dans un repère, la courbe représentative de f est l'ensemble des points M(x ; f(x)), où x appartient au domaine de définition de f.\n\nPour un point de la courbe :\n• x est son abscisse ;\n• f(x) est son ordonnée."
          },
          {
            type: "exemple",
            titre: "Vérifier l'appartenance",
            texte: "Soit f(x) = x² - 1.\n\nPour x = 2, f(2) = 2² - 1 = 3. Le point A(2 ; 3) appartient donc à la courbe.\n\nEn revanche, B(2 ; 4) ne lui appartient pas, car f(2) ≠ 4."
          },
          {
            type: "remarque",
            titre: "Lire avec précision",
            texte: "Un graphique permet souvent d'estimer une valeur, mais il ne garantit pas sa valeur exacte. Pour confirmer une lecture, on peut remplacer les coordonnées dans l'expression de la fonction."
          }
        ]
      },

      {
        id: "m1-translations-courbes",
        titre: "Déplacer une courbe",
        blocs: [
          {
            type: "regle",
            titre: "Ajouter un nombre : f(x) + b",
            texte: "La courbe de g(x) = f(x) + b s'obtient en déplaçant verticalement celle de f :\n\n• vers le haut si b > 0 ;\n• vers le bas si b < 0.\n\nChaque point (x ; y) de la courbe de f devient (x ; y + b). Le domaine ne change pas."
          },
          {
            type: "exemple",
            titre: "Déplacement vertical",
            texte: "Si f(x) = x² et g(x) = x² + 2, la courbe de g est celle de f déplacée de 2 unités vers le haut.\n\nLe point (0 ; 0) devient (0 ; 2), et le point (1 ; 1) devient (1 ; 3)."
          },
          {
            type: "regle",
            titre: "Remplacer x par x - a : f(x - a)",
            texte: "La courbe de h(x) = f(x - a) s'obtient en déplaçant horizontalement celle de f :\n\n• vers la droite si a > 0 ;\n• vers la gauche si a < 0.\n\nChaque point (u ; f(u)) devient (u + a ; f(u)).\n\nLe domaine de h est l'ensemble des x tels que x - a appartient au domaine de f."
          },
          {
            type: "exemple",
            titre: "Déplacement horizontal",
            texte: "Si f(x) = x² et h(x) = (x - 3)², la courbe de h est celle de f déplacée de 3 unités vers la droite.\n\nSon sommet passe de (0 ; 0) à (3 ; 0).\n\nAttention : malgré le signe « - » dans x - 3, le déplacement est vers la droite."
          },
          {
            type: "schema",
            titre: "Déplacer la courbe de la valeur absolue",
            svg: "<svg viewBox='0 0 380 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='La courbe bleue y égale valeur absolue de x a son sommet à l’origine. La courbe rouge y égale valeur absolue de x moins 2 a son sommet en 2 zéro : elle est déplacée de deux unités vers la droite'><rect width='380' height='260' fill='white'/><g stroke='#e2e8f0' stroke-width='1'><path d='M 50 30 V 220 M 90 30 V 220 M 130 30 V 220 M 170 30 V 220 M 210 30 V 220 M 250 30 V 220 M 290 30 V 220 M 330 30 V 220'/><path d='M 30 60 H 350 M 30 100 H 350 M 30 140 H 350 M 30 180 H 350'/></g><g stroke='#475569' stroke-width='2'><line x1='30' y1='180' x2='350' y2='180'/><line x1='130' y1='230' x2='130' y2='20'/></g><path d='M 30 80 L 130 180 L 290 20' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M 70 20 L 210 180 L 350 40' fill='none' stroke='#dc2626' stroke-width='3'/><circle cx='130' cy='180' r='4' fill='#2563eb'/><circle cx='210' cy='180' r='4' fill='#dc2626'/><text x='123' y='200' font-size='13'>0</text><text x='205' y='200' font-size='13'>2</text><text x='145' y='232' font-size='13' fill='#1d4ed8'>Bleu : y = |x|</text><text x='145' y='250' font-size='13' fill='#b91c1c'>Rouge : y = |x - 2|</text><text x='337' y='173' font-size='13'>x</text><text x='137' y='27' font-size='13'>y</text></svg>",
            legende: "La courbe rouge est la courbe bleue déplacée de 2 unités vers la droite. Les deux axes utilisent la même unité."
          },
          {
            type: "remarque",
            titre: "Combiner les déplacements",
            texte: "La courbe de y = f(x - a) + b s'obtient en déplaçant celle de f de a unités horizontalement et de b unités verticalement.\n\nChaque point (u ; f(u)) devient (u + a ; f(u) + b)."
          }
        ]
      },

      {
        id: "m1-symetries-courbes",
        titre: "Construire des courbes par symétrie",
        blocs: [
          {
            type: "regle",
            titre: "La courbe de -f(x)",
            texte: "La courbe de g(x) = -f(x) est l'image de la courbe de f par symétrie par rapport à l'axe des abscisses.\n\nChaque point (x ; y) devient (x ; -y). Le domaine reste le même."
          },
          {
            type: "regle",
            titre: "La courbe de f(-x)",
            texte: "La courbe de h(x) = f(-x) est l'image de la courbe de f par symétrie par rapport à l'axe des ordonnées.\n\nChaque point (x ; y) devient (-x ; y).\n\nLe domaine de h est l'ensemble des x tels que -x appartient au domaine de f."
          },
          {
            type: "exemple",
            titre: "Suivre un point",
            texte: "Supposons que (2 ; 3) appartienne à la courbe de f.\n\n• Le point (2 ; -3) appartient à la courbe de -f.\n• Le point (-2 ; 3) appartient à la courbe de x ↦ f(-x).\n\nOn transforme toujours l'ensemble des points, pas seulement un point."
          },
          {
            type: "remarque",
            titre: "Lien avec la parité",
            texte: "Si f est paire, f(-x) = f(x) : sa courbe est inchangée par la symétrie par rapport à l'axe des ordonnées.\n\nSi f est impaire, f(-x) = -f(x) : sa courbe est symétrique par rapport à l'origine."
          }
        ]
      },

      {
        id: "m1-valeur-absolue-courbe",
        titre: "Tracer la courbe de |f(x)|",
        blocs: [
          {
            type: "definition",
            titre: "Valeur absolue",
            texte: "Pour tout réel u :\n\n• |u| = u si u ≥ 0 ;\n• |u| = -u si u < 0.\n\nLa valeur absolue représente la distance entre u et 0 sur une droite graduée."
          },
          {
            type: "regle",
            titre: "Transformer la courbe",
            texte: "Pour obtenir la courbe de g(x) = |f(x)| :\n\n• on conserve les parties de la courbe de f situées sur ou au-dessus de l'axe des abscisses ;\n• on réfléchit par rapport à cet axe les parties situées en dessous.\n\nLe domaine reste le même. La courbe obtenue est entièrement sur ou au-dessus de l'axe des abscisses."
          },
          {
            type: "exemple",
            titre: "Une droite transformée",
            texte: "Soit f(x) = x - 1. Alors :\n\n|x - 1| = 1 - x si x < 1 ;\n|x - 1| = x - 1 si x ≥ 1.\n\nLa droite y = x - 1 est conservée pour x ≥ 1. Sa partie située sous l'axe est réfléchie vers le haut pour x < 1. La nouvelle courbe a un sommet en (1 ; 0)."
          },
          {
            type: "schema",
            titre: "De y = x - 1 à y = |x - 1|",
            svg: "<svg viewBox='0 0 360 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='La droite y égale x moins 1 est en pointillés. La courbe de sa valeur absolue est en V : la partie située sous l’axe des abscisses est réfléchie vers le haut'><rect width='360' height='250' fill='white'/><g stroke='#475569' stroke-width='2'><line x1='25' y1='150' x2='335' y2='150'/><line x1='110' y1='225' x2='110' y2='20'/></g><line x1='45' y1='255' x2='240' y2='60' stroke='#94a3b8' stroke-width='3' stroke-dasharray='6 5'/><path d='M 45 45 L 150 150 L 240 60' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='150' cy='150' r='4' fill='#1d4ed8'/><text x='153' y='170' font-size='13'>1</text><text x='100' y='170' font-size='13'>0</text><text x='25' y='235' font-size='13' fill='#475569'>Pointillés : y = x - 1</text><text x='190' y='235' font-size='13' fill='#1d4ed8'>Bleu : y = |x - 1|</text><text x='325' y='143' font-size='13'>x</text><text x='117' y='28' font-size='13'>y</text></svg>",
            legende: "Les deux courbes coïncident pour x ≥ 1. Pour x < 1, la partie négative de la droite est réfléchie au-dessus de l'axe."
          }
        ]
      },

      {
        id: "m1-intersections",
        titre: "Déterminer les intersections",
        blocs: [
          {
            type: "definition",
            titre: "Intersection de deux courbes",
            texte: "Un point commun aux courbes de f et de g a la même abscisse x et la même ordonnée pour les deux fonctions.\n\nSon abscisse vérifie donc f(x) = g(x), avec x appartenant aux deux domaines."
          },
          {
            type: "methode",
            titre: "Calculer les points d'intersection",
            texte: "1. Détermine les valeurs de x pour lesquelles les deux fonctions sont définies.\n2. Résous f(x) = g(x) sur ce domaine commun.\n3. Pour chaque solution, calcule l'ordonnée en utilisant f ou g.\n4. Donne les coordonnées des points et vérifie si nécessaire."
          },
          {
            type: "exemple",
            titre: "Une parabole et une droite",
            texte: "Cherchons les intersections des courbes de f(x) = x² et g(x) = x + 2.\n\nLes deux fonctions sont définies sur ℝ. On résout :\n\nx² = x + 2\nx² - x - 2 = 0\n(x - 2)(x + 1) = 0.\n\nLes abscisses sont x = 2 et x = -1.\n\nPour x = 2, l'ordonnée vaut 4. Pour x = -1, elle vaut 1.\n\nLes points d'intersection sont donc (2 ; 4) et (-1 ; 1)."
          },
          {
            type: "remarque",
            titre: "Intersections avec les axes",
            texte: "Pour trouver les intersections avec l'axe des abscisses, on résout f(x) = 0.\n\nPour trouver l'intersection avec l'axe des ordonnées, on calcule f(0), à condition que 0 appartienne au domaine. Le point est alors (0 ; f(0))."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "La courbe d'une fonction f contient le point A(2 ; 3).\n\n1. Quel point obtient-on sur la courbe de f(x) + 4 ?\n2. Quel point obtient-on sur la courbe de -f(x) ?",
        correction: "1. On ajoute 4 à l'ordonnée : le point obtenu est (2 ; 7).\n\n2. On change le signe de l'ordonnée : le point obtenu est (2 ; -3)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La courbe de f contient le point B(-1 ; 5).\n\n1. Quel point correspondant appartient à la courbe de f(x - 3) ?\n2. Quel point correspondant appartient à la courbe de f(-x) ?",
        correction: "1. La courbe de f(x - 3) est déplacée de 3 unités vers la droite : B devient (2 ; 5).\n\n2. Par symétrie par rapport à l'axe des ordonnées, B devient (1 ; 5)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f(x) = x² sur ℝ.\n\n1. Décris la transformation qui donne g(x) = x² - 4.\n2. Décris celle qui donne h(x) = (x + 2)².\n3. Donne le sommet de chaque nouvelle parabole.",
        correction: "1. g(x) = f(x) - 4 : on déplace la courbe de f de 4 unités vers le bas. Son sommet est (0 ; -4).\n\n2. h(x) = f(x + 2) = f(x - (-2)) : on déplace la courbe de f de 2 unités vers la gauche. Son sommet est (-2 ; 0).\n\n3. Les sommets sont donc (0 ; -4) pour g et (-2 ; 0) pour h."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écris sans valeur absolue l'expression |x + 2| selon les valeurs de x. Donne ensuite les coordonnées du sommet de sa courbe.",
        correction: "Si x + 2 ≥ 0, soit x ≥ -2, alors |x + 2| = x + 2.\n\nSi x < -2, alors |x + 2| = -(x + 2) = -x - 2.\n\nLa valeur minimale est 0, atteinte en x = -2. Le sommet est (-2 ; 0)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Détermine les points d'intersection des courbes de f(x) = x² et g(x) = 2x + 3.",
        correction: "Les fonctions sont définies sur ℝ. On résout :\n\nx² = 2x + 3\nx² - 2x - 3 = 0\n(x - 3)(x + 1) = 0.\n\nDonc x = 3 ou x = -1.\n\nPour x = 3, l'ordonnée est 9. Pour x = -1, elle est 1.\n\nLes points sont (3 ; 9) et (-1 ; 1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = √x, définie sur [0 ; +∞[. On définit g(x) = f(x - 2) + 1.\n\n1. Détermine le domaine de g.\n2. Décris la transformation de la courbe.\n3. Quel point de la courbe de g correspond au point (4 ; 2) de la courbe de f ?",
        correction: "1. Il faut x - 2 ≥ 0, donc x ≥ 2. Le domaine de g est [2 ; +∞[.\n\n2. La courbe est déplacée de 2 unités vers la droite et de 1 unité vers le haut.\n\n3. Le point (4 ; 2) devient (4 + 2 ; 2 + 1), soit (6 ; 3). Vérification : g(6) = √4 + 1 = 3."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f(x) = x² - 4.\n\n1. Détermine les valeurs de x pour lesquelles f(x) est négative.\n2. Écris |f(x)| sans valeur absolue selon les valeurs de x.\n3. Détermine les intersections de la courbe de |f(x)| avec les axes.",
        correction: "1. f(x) = (x - 2)(x + 2). Ce trinôme est négatif entre ses racines : f(x) < 0 sur ]-2 ; 2[. Il est nul en -2 et 2.\n\n2. Pour -2 ≤ x ≤ 2, |f(x)| = -(x² - 4) = 4 - x². Pour x ≤ -2 ou x ≥ 2, |f(x)| = x² - 4. Aux bornes, les deux expressions valent 0.\n\n3. Avec l'axe des abscisses : |f(x)| = 0 équivaut à f(x) = 0. Les points sont (-2 ; 0) et (2 ; 0).\n\nAvec l'axe des ordonnées : |f(0)| = |-4| = 4. Le point est (0 ; 4)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère f(x) = x² et g(x) = (x - 1)² + 2, définies sur ℝ.\n\n1. Décris comment obtenir la courbe de g à partir de celle de f.\n2. Détermine leur point d'intersection.\n3. Précise pour quelles valeurs de x la courbe de g est au-dessus de celle de f.",
        correction: "1. On déplace la courbe de f de 1 unité vers la droite et de 2 unités vers le haut.\n\n2. On résout :\n\nx² = (x - 1)² + 2\nx² = x² - 2x + 3\n2x = 3, donc x = 3/2.\n\nL'ordonnée vaut f(3/2) = 9/4. L'unique point d'intersection est (3/2 ; 9/4).\n\n3. On cherche g(x) > f(x). Or :\n\ng(x) - f(x) = -2x + 3.\n\nCette différence est positive si x < 3/2. La courbe de g est donc strictement au-dessus de celle de f sur ]-∞ ; 3/2[."
      }
    ]
  }
]);
