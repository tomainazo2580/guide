// ===== GUIDE - Mathématiques Première =====
// Chapitre 9 : domaine, variations, parité et périodicité.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-fonctions-domaine-variations",
    titre: "Chapitre 9 : Fonctions : domaine, variations, parité et périodicité",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-fonctions-domaine",
        titre: "Déterminer un domaine de définition",
        blocs: [
          {
            type: "introduction",
            titre: "Quelles valeurs peut-on utiliser ?",
            texte: "Pour calculer f(x) = 1/(x - 2), on peut choisir x = 3 : on obtient f(3) = 1.\n\nMais x = 2 est impossible, car le dénominateur serait nul. Avant d'étudier une fonction, il faut donc préciser les valeurs de x pour lesquelles elle est définie."
          },
          {
            type: "definition",
            titre: "Domaine de définition",
            texte: "Le domaine de définition Df d'une fonction f est l'ensemble des valeurs de x pour lesquelles f(x) est définie.\n\nPour une expression donnée, on cherche les valeurs qui respectent toutes les conditions de calcul."
          },
          {
            type: "regle",
            titre: "Conditions usuelles",
            texte: "Dans ℝ :\n\n• Un polynôme, comme x² - 3x + 1, est défini pour tout réel.\n• Un quotient A(x)/B(x) exige B(x) ≠ 0.\n• Une racine √A(x) exige A(x) ≥ 0.\n• Une racine au dénominateur 1/√A(x) exige A(x) > 0.\n\nSi plusieurs conditions apparaissent, elles doivent être vérifiées simultanément."
          },
          {
            type: "exemple",
            titre: "Un quotient",
            texte: "Pour f(x) = (x + 1)/(x - 2), il faut x - 2 ≠ 0, donc x ≠ 2.\n\nAinsi Df = ℝ privé de {2}, que l'on peut aussi écrire :\n\nDf = ]-∞ ; 2[ ∪ ]2 ; +∞[."
          },
          {
            type: "exemple",
            titre: "Une racine au dénominateur",
            texte: "Pour g(x) = 1/√(x - 3), la racine doit exister et le dénominateur ne doit pas être nul.\n\nIl faut donc x - 3 > 0, soit x > 3.\n\nAinsi Dg = ]3 ; +∞[."
          },
          {
            type: "remarque",
            titre: "Une simplification ne modifie pas le domaine initial",
            texte: "Pour f(x) = (x² - 1)/(x - 1), on doit d'abord imposer x ≠ 1.\n\nSur ce domaine, f(x) = x + 1. Mais l'expression initiale reste non définie en 1 : son domaine est ℝ privé de {1}."
          }
        ]
      },

      {
        id: "m1-fonctions-variations",
        titre: "Comprendre les variations",
        blocs: [
          {
            type: "definition",
            titre: "Fonction croissante ou décroissante",
            texte: "Une fonction f est croissante sur un intervalle I si, pour tous x₁ et x₂ de I :\n\nx₁ < x₂ entraîne f(x₁) ≤ f(x₂).\n\nElle est décroissante sur I si :\n\nx₁ < x₂ entraîne f(x₁) ≥ f(x₂).\n\nElle est strictement croissante ou strictement décroissante si les inégalités entre images sont toujours strictes."
          },
          {
            type: "exemple",
            titre: "La fonction carré",
            texte: "La fonction f(x) = x² est décroissante sur ]-∞ ; 0] et croissante sur [0 ; +∞[.\n\nPar exemple, de -3 à -1, x augmente mais son carré passe de 9 à 1. De 1 à 3, x augmente et son carré passe de 1 à 9.\n\nLe minimum de f sur ℝ est 0, atteint pour x = 0."
          },
          {
            type: "schema",
            titre: "Variations de la fonction carré",
            svg: "<svg viewBox='0 0 380 270' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Parabole de la fonction carré, décroissante jusqu’à zéro puis croissante, avec minimum au point zéro zéro'><rect width='380' height='270' fill='white'/><g stroke='#e2e8f0' stroke-width='1'><path d='M 70 20 V 240 M 110 20 V 240 M 150 20 V 240 M 190 20 V 240 M 230 20 V 240 M 270 20 V 240 M 310 20 V 240'/><path d='M 30 40 H 350 M 30 80 H 350 M 30 120 H 350 M 30 160 H 350 M 30 200 H 350'/></g><g stroke='#475569' stroke-width='2'><line x1='30' y1='200' x2='350' y2='200'/><line x1='190' y1='245' x2='190' y2='15'/></g><path d='M 110 40 Q 150 200 190 200 Q 230 200 270 40' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='190' cy='200' r='4' fill='#dc2626'/><text x='198' y='220' font-size='14' fill='#b91c1c'>O(0 ; 0)</text><text x='245' y='55' font-size='14' fill='#1d4ed8'>y = x²</text><text x='322' y='194' font-size='14' fill='#334155'>x</text><text x='198' y='25' font-size='14' fill='#334155'>y</text><text x='95' y='255' font-size='14' fill='#334155'>décroît</text><text x='230' y='255' font-size='14' fill='#334155'>croît</text></svg>",
            legende: "La courbe descend jusqu'au minimum O, puis remonte. Elle est symétrique par rapport à l'axe des ordonnées."
          },
          {
            type: "methode",
            titre: "Lire les variations sur une courbe",
            texte: "Lis la courbe de gauche à droite :\n\n• si elle monte, la fonction est croissante sur l'intervalle correspondant ;\n• si elle descend, la fonction est décroissante.\n\nRepère les abscisses où le sens de variation change, puis indique les intervalles et les valeurs importantes.\n\nUn dessin permet de conjecturer les variations. Une démonstration peut demander un calcul ; la dérivation fournira une méthode plus tard."
          },
          {
            type: "definition",
            titre: "Maximum et minimum",
            texte: "f admet un minimum sur un ensemble I en un point a ∈ I si f(a) ≤ f(x) pour tout x ∈ I.\n\nDe même, f admet un maximum en a si f(a) ≥ f(x) pour tout x ∈ I.\n\nLa valeur minimale est f(a), tandis que a est une valeur de x où ce minimum est atteint."
          }
        ]
      },

      {
        id: "m1-fonctions-parite",
        titre: "Étudier la parité",
        blocs: [
          {
            type: "definition",
            titre: "Fonction paire",
            texte: "Une fonction f est paire si :\n\n• son domaine est symétrique par rapport à 0 : dès que x appartient au domaine, -x y appartient aussi ;\n• pour tout x du domaine, f(-x) = f(x).\n\nSa courbe est alors symétrique par rapport à l'axe des ordonnées."
          },
          {
            type: "definition",
            titre: "Fonction impaire",
            texte: "Une fonction f est impaire si :\n\n• son domaine est symétrique par rapport à 0 ;\n• pour tout x du domaine, f(-x) = -f(x).\n\nSa courbe est alors symétrique par rapport à l'origine du repère."
          },
          {
            type: "methode",
            titre: "Étudier la parité",
            texte: "1. Vérifie d'abord que le domaine est symétrique par rapport à 0.\n2. Calcule f(-x).\n3. Compare f(-x) avec f(x) et avec -f(x).\n4. Conclus : paire, impaire, ou ni l'une ni l'autre."
          },
          {
            type: "exemple",
            titre: "Trois cas",
            texte: "• f(x) = x² sur ℝ : f(-x) = (-x)² = x² = f(x). Elle est paire.\n\n• g(x) = x³ sur ℝ : g(-x) = (-x)³ = -x³ = -g(x). Elle est impaire.\n\n• h(x) = x + 1 sur ℝ : h(-x) = -x + 1. Cette expression n'est égale ni à h(x) pour tout x, ni à -h(x) pour tout x. h n'est ni paire ni impaire."
          },
          {
            type: "remarque",
            titre: "Un cas particulier",
            texte: "La fonction nulle f(x) = 0, définie sur un domaine symétrique, est à la fois paire et impaire : f(-x) = f(x) = -f(x) = 0."
          }
        ]
      },

      {
        id: "m1-fonctions-periodicite",
        titre: "Reconnaître une fonction périodique",
        blocs: [
          {
            type: "definition",
            titre: "Période",
            texte: "Une fonction f définie sur ℝ est périodique si un réel T > 0 existe tel que, pour tout réel x :\n\nf(x + T) = f(x).\n\nLe nombre T est une période. Les valeurs de la fonction se répètent après un déplacement horizontal de T."
          },
          {
            type: "exemple",
            titre: "Une fonction connue",
            texte: "La fonction sinus vérifie pour tout réel x :\n\nsin(x + 2π) = sin(x).\n\nElle est donc périodique et 2π est une période. Les fonctions trigonométriques seront étudiées plus loin."
          },
          {
            type: "remarque",
            titre: "Une période n'est pas forcément unique",
            texte: "Si T est une période, 2T, 3T et tous ses multiples entiers positifs sont aussi des périodes.\n\nDire que 2π est une période ne signifie donc pas que c'est la seule."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Détermine le domaine de définition dans ℝ :\n\n1. f(x) = 1/(x + 3)\n2. g(x) = √(x - 2)",
        correction: "1. Il faut x + 3 ≠ 0, donc x ≠ -3. Ainsi Df = ℝ privé de {-3}.\n\n2. Il faut x - 2 ≥ 0, donc x ≥ 2. Ainsi Dg = [2 ; +∞[."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On considère f(x) = x² sur ℝ.\n\n1. Calcule f(-2) et f(2).\n2. La fonction est-elle paire ? Justifie.",
        correction: "1. f(-2) = (-2)² = 4 et f(2) = 2² = 4.\n\n2. Pour tout réel x, f(-x) = (-x)² = x² = f(x). Le domaine ℝ est symétrique par rapport à 0. Donc f est paire."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Détermine le domaine de définition de f(x) = √(5 - x)/(x + 1).",
        correction: "La racine exige 5 - x ≥ 0, soit x ≤ 5. Le dénominateur exige x + 1 ≠ 0, soit x ≠ -1.\n\nLes deux conditions doivent être vérifiées :\n\nDf = ]-∞ ; -1[ ∪ ]-1 ; 5]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Étudie la parité des fonctions suivantes, définies sur ℝ :\n\n1. f(x) = x⁴ + 2\n2. g(x) = 3x³ - x",
        correction: "Le domaine ℝ est symétrique.\n\n1. f(-x) = (-x)⁴ + 2 = x⁴ + 2 = f(x). Donc f est paire.\n\n2. g(-x) = 3(-x)³ - (-x) = -3x³ + x = -g(x). Donc g est impaire."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = (x² - 4)/(x - 2).\n\n1. Détermine son domaine.\n2. Simplifie son expression sur ce domaine.\n3. Explique pourquoi on ne peut pas calculer f(2) avec l'expression initiale.",
        correction: "1. Il faut x - 2 ≠ 0, donc Df = ℝ privé de {2}.\n\n2. x² - 4 = (x - 2)(x + 2). Pour x ≠ 2, f(x) = x + 2.\n\n3. En x = 2, le dénominateur initial est nul. Même si l'expression simplifiée x + 2 vaut 4 en 2, la fonction initiale n'est pas définie en ce point."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une fonction f est définie sur [-3 ; 4]. Elle est décroissante sur [-3 ; 1], puis croissante sur [1 ; 4]. On sait que f(-3) = 5, f(1) = -2 et f(4) = 3.\n\n1. Quel est son minimum sur [-3 ; 4] ? Où est-il atteint ?\n2. Quel est son maximum sur cet intervalle ? Justifie.",
        correction: "1. Sur [-3 ; 1], f descend jusqu'à -2 ; sur [1 ; 4], elle remonte à partir de -2. Son minimum est donc -2, atteint en x = 1.\n\n2. Sur [-3 ; 1], la plus grande valeur est f(-3) = 5. Sur [1 ; 4], la plus grande est f(4) = 3. En comparant 5 et 3, le maximum sur [-3 ; 4] est 5, atteint en x = -3."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f(x) = √(9 - x²).\n\n1. Détermine son domaine.\n2. Étudie sa parité.\n3. Calcule f(0), f(3) et f(-3).\n4. Montre que f admet un maximum sur son domaine et donne sa valeur.",
        correction: "1. Il faut 9 - x² ≥ 0, soit x² ≤ 9. Donc Df = [-3 ; 3].\n\n2. Le domaine est symétrique. Pour tout x ∈ [-3 ; 3] :\n\nf(-x) = √(9 - (-x)²) = √(9 - x²) = f(x).\n\nf est paire.\n\n3. f(0) = √9 = 3 ; f(3) = 0 ; f(-3) = 0.\n\n4. Pour tout x du domaine, x² ≥ 0, donc 9 - x² ≤ 9. Les deux membres étant positifs ou nuls, f(x) ≤ 3. Comme f(0) = 3, le maximum est 3, atteint en 0."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f : ℝ → ℝ une fonction telle que f(x + 4) = f(x) pour tout réel x. On sait que f(1) = 3 et f(2) = -1.\n\n1. Explique pourquoi 4 est une période de f.\n2. Calcule f(5), f(-3) et f(10).\n3. Montre que 8 est aussi une période.",
        correction: "1. 4 > 0 et, pour tout x, f(x + 4) = f(x). Par définition, 4 est une période.\n\n2. f(5) = f(1 + 4) = f(1) = 3.\n\nComme -3 + 4 = 1, f(-3) = f(1) = 3.\n\nComme 10 = 2 + 2 × 4, f(10) = f(2) = -1.\n\n3. Pour tout x : f(x + 8) = f((x + 4) + 4) = f(x + 4) = f(x). Comme 8 > 0, c'est aussi une période."
      }
    ]
  }
]);
