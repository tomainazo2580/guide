enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch10",
    titre: "Chapitre 10 : Fonction exponentielle",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch10-l1",
        titre: "Leçon 1 : Définition et propriétés",
        blocs: [
          {
            type: "introduction",
            titre: "La fonction réciproque du logarithme",
            texte: "La fonction exponentielle permet notamment de résoudre des équations contenant un logarithme et de modéliser certaines croissances ou décroissances."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "La fonction exponentielle, notée exp, est la fonction réciproque du logarithme népérien.\n\nPour tout réel x, exp(x) est l’unique nombre strictement positif y tel que ln(y) = x.\n\nOn écrit aussi exp(x) = eˣ."
          },
          {
            type: "tableau",
            titre: "Relations entre ln et exp",
            entetes: ["Condition", "Relation"],
            lignes: [
              ["Pour tout réel x", "ln(exp(x)) = x"],
              ["Pour tout réel x > 0", "exp(ln(x)) = x"],
              ["Pour tout réel x", "exp(x) > 0"]
            ]
          },
          {
            type: "tableau",
            titre: "Propriétés de l’exponentielle",
            entetes: ["Pour tous réels a et b", "Propriété"],
            lignes: [
              ["Somme", "exp(a + b) = exp(a)exp(b)"],
              ["Opposé", "exp(−a) = 1/exp(a)"],
              ["Différence", "exp(a − b) = exp(a)/exp(b)"],
              ["Valeurs particulières", "exp(0) = 1 et exp(1) = e"]
            ]
          },
          {
            type: "exemple",
            titre: "Simplifier une expression",
            texte: "exp(2) × exp(−1) = exp(2 − 1) = exp(1) = e.\n\nexp(ln(5)) = 5 et ln(exp(−3)) = −3."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre somme et produit",
            texte: "En général, exp(a + b) n’est pas égal à exp(a) + exp(b). La propriété correcte est exp(a + b) = exp(a) × exp(b)."
          }
        ]
      },

      {
        id: "tle-maths-ch10-l2",
        titre: "Leçon 2 : Variations et limites",
        blocs: [
          {
            type: "definition",
            titre: "Dérivée et variations",
            texte: "La fonction exponentielle est dérivable sur ℝ et sa dérivée est elle-même :\n\nexp'(x) = exp(x).\n\nComme exp(x) > 0 pour tout réel x, la fonction exponentielle est strictement croissante sur ℝ."
          },
          {
            type: "definition",
            titre: "Limites",
            texte: "Lorsque x tend vers +∞, exp(x) tend vers +∞.\n\nLorsque x tend vers −∞, exp(x) tend vers 0. La droite y = 0 est donc une asymptote horizontale à la courbe en −∞."
          },
          {
            type: "schema",
            titre: "Courbe de la fonction exponentielle",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='20' y1='180' x2='300' y2='180' stroke='black' stroke-width='2'/><line x1='140' y1='200' x2='140' y2='20' stroke='black' stroke-width='2'/><path d='M25 178 C75 176 110 171 140 155 C175 136 198 96 220 25' fill='none' stroke='#1769aa' stroke-width='3'/><circle cx='140' cy='155' r='4' fill='#c62828'/><text x='106' y='157' font-size='13'>1</text><text x='126' y='195' font-size='13'>0</text><text x='225' y='55' font-size='13' fill='#1769aa'>y = exp(x)</text><text x='290' y='197' font-size='13'>x</text></svg>",
            legende: "Schéma qualitatif : la courbe est positive, croissante, passe par (0 ; 1) et se rapproche de l’axe des abscisses en −∞."
          },
          {
            type: "methode",
            titre: "Comparer des exponentielles",
            texte: "Comme exp est strictement croissante, pour tous réels a et b :\n\nexp(a) < exp(b) si et seulement si a < b.\n\nDe même, exp(a) = exp(b) si et seulement si a = b."
          },
          {
            type: "exemple",
            titre: "Comparer",
            texte: "Comme −2 < 1, on a exp(−2) < exp(1).\n\nComme 0 < 3, on a 1 = exp(0) < exp(3)."
          },
          {
            type: "remarque",
            titre: "Croissances comparées",
            texte: "Quand x tend vers +∞, l’exponentielle croît plus vite que toute puissance positive de x. Par exemple, exp(x)/x tend vers +∞ et x/exp(x) tend vers 0."
          }
        ]
      },

      {
        id: "tle-maths-ch10-l3",
        titre: "Leçon 3 : Dérivées et primitives",
        blocs: [
          {
            type: "methode",
            titre: "Dériver une exponentielle composée",
            texte: "Si u est dérivable, alors :\n\n[exp(u(x))]' = u'(x)exp(u(x)).\n\nEn particulier, [exp(ax + b)]' = a exp(ax + b)."
          },
          {
            type: "exemple",
            titre: "Dérivée d’une composée",
            texte: "Pour f(x) = exp(3x − 2), la dérivée de 3x − 2 est 3. Donc :\nf'(x) = 3 exp(3x − 2)."
          },
          {
            type: "methode",
            titre: "Primitives usuelles",
            texte: "Une primitive de exp(x) est exp(x).\n\nSi a ≠ 0, une primitive de exp(ax + b) est exp(ax + b)/a.\n\nPlus généralement, une primitive de u'(x)exp(u(x)) est exp(u(x))."
          },
          {
            type: "exemple",
            titre: "Calcul d’une intégrale",
            texte: "Calculons ∫₀¹ exp(2x) dx.\n\nUne primitive est exp(2x)/2. Donc :\n∫₀¹ exp(2x) dx = [exp(2x)/2]₀¹ = (e² − 1)/2."
          },
          {
            type: "exemple",
            titre: "Dériver un produit",
            texte: "Soit f(x) = x exp(x). En utilisant la formule du produit :\n\nf'(x) = exp(x) + x exp(x) = (x + 1)exp(x)."
          }
        ]
      },

      {
        id: "tle-maths-ch10-l4",
        titre: "Leçon 4 : Équations et premiers modèles",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre une équation",
            texte: "• exp(u) = exp(v) équivaut à u = v.\n• exp(u) = k, avec k > 0, équivaut à u = ln(k).\n• Si k ≤ 0, l’équation exp(u) = k n’a aucune solution, car exp(u) est toujours strictement positive."
          },
          {
            type: "exemple",
            titre: "Une équation exponentielle",
            texte: "Résolvons exp(2x − 1) = 5.\n\nComme 5 > 0, l’équation équivaut à 2x − 1 = ln(5). Ainsi x = [1 + ln(5)]/2."
          },
          {
            type: "methode",
            titre: "Résoudre une inéquation",
            texte: "La fonction exp étant strictement croissante, exp(u) < exp(v) équivaut à u < v. On conserve le sens de l’inégalité."
          },
          {
            type: "exemple",
            titre: "Une inéquation",
            texte: "Résolvons exp(2x + 1) ≥ exp(5).\n\nPar croissance de exp : 2x + 1 ≥ 5, soit x ≥ 2. Donc S = [2 ; +∞[."
          },
          {
            type: "exemple",
            titre: "Un modèle de croissance",
            texte: "Une quantité suit le modèle N(t) = 100 exp(0,2t), pour t ≥ 0.\n\nAu départ, N(0) = 100. Après 5 unités de temps : N(5) = 100e ≈ 271,8.\n\nCe résultat décrit le modèle choisi ; si N représente un nombre d’objets, l’interprétation doit tenir compte du contexte."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer exp(0), exp(1) et ln(exp(4)).",
        correction: "exp(0) = 1, exp(1) = e et ln(exp(4)) = 4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Simplifier exp(3) × exp(−2).",
        correction: "exp(3) × exp(−2) = exp(3 − 2) = exp(1) = e."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre exp(x) = 1.",
        correction: "Comme 1 = exp(0) et que exp est strictement croissante, x = 0. Donc S = {0}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dériver f(x) = exp(4x + 1).",
        correction: "La dérivée de 4x + 1 est 4. Donc f'(x) = 4 exp(4x + 1)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer une primitive de f(x) = exp(−2x).",
        correction: "Une primitive est F(x) = −exp(−2x)/2. En effet, F'(x) = −(−2)exp(−2x)/2 = exp(−2x)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre exp(3x) = exp(6).",
        correction: "Par stricte croissance de exp, 3x = 6. Donc x = 2 et S = {2}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre exp(x) = 7.",
        correction: "Comme 7 > 0, l’équation équivaut à x = ln(7). Donc S = {ln(7)}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre exp(x) = −2.",
        correction: "Pour tout réel x, exp(x) > 0. Elle ne peut donc pas être égale à −2. L’ensemble des solutions est vide."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer ∫₀¹ exp(x) dx.",
        correction: "Une primitive est exp(x). Donc ∫₀¹ exp(x) dx = exp(1) − exp(0) = e − 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dériver f(x) = (2x − 1)exp(x).",
        correction: "Par la formule du produit :\nf'(x) = 2 exp(x) + (2x − 1)exp(x) = (2x + 1)exp(x)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Étudier les variations de f(x) = (x − 1)exp(x) sur ℝ.",
        correction: "Par la formule du produit :\nf'(x) = exp(x) + (x − 1)exp(x) = x exp(x).\n\nComme exp(x) > 0, le signe de f' est celui de x. La fonction décroît sur ]−∞ ; 0], puis croît sur [0 ; +∞[.\nSon minimum est f(0) = −1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre exp(2x − 3) < exp(x + 1).",
        correction: "Par croissance de exp, l’inéquation équivaut à 2x − 3 < x + 1, soit x < 4.\nDonc S = ]−∞ ; 4[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer ∫₀² 3 exp(3x) dx.",
        correction: "Une primitive de 3 exp(3x) est exp(3x).\nDonc ∫₀² 3 exp(3x) dx = exp(6) − exp(0) = e⁶ − 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une quantité suit N(t) = 50 exp(0,1t), pour t ≥ 0. Déterminer à quel instant elle atteint 100.",
        correction: "On résout 50 exp(0,1t) = 100, soit exp(0,1t) = 2.\nDonc 0,1t = ln(2), puis t = 10 ln(2) ≈ 6,93 unités de temps."
      }
    ]
  }
]);
