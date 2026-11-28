enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch9",
    titre: "Chapitre 9 : Fonction logarithme népérien",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch9-l1",
        titre: "Leçon 1 : Définition et propriétés",
        blocs: [
          {
            type: "introduction",
            titre: "Une nouvelle fonction",
            texte: "La fonction logarithme népérien, notée ln, intervient dans les calculs de limites, les équations, les intégrales et de nombreuses situations de croissance."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "La fonction logarithme népérien est l’unique primitive de la fonction x ↦ 1/x sur ]0 ; +∞[ qui s’annule en 1.\n\nAinsi, pour tout x > 0 : ln'(x) = 1/x et ln(1) = 0."
          },
          {
            type: "definition",
            titre: "Le nombre e",
            texte: "Le nombre e est l’unique réel positif tel que ln(e) = 1. Sa valeur approchée est e ≈ 2,718."
          },
          {
            type: "tableau",
            titre: "Propriétés algébriques",
            entetes: ["Conditions", "Propriété"],
            lignes: [
              ["a > 0 et b > 0", "ln(ab) = ln(a) + ln(b)"],
              ["a > 0 et b > 0", "ln(a/b) = ln(a) − ln(b)"],
              ["a > 0 et n entier", "ln(aⁿ) = n ln(a)"],
              ["a > 0", "ln(√a) = ln(a)/2"]
            ]
          },
          {
            type: "exemple",
            titre: "Simplifier",
            texte: "ln(12) − ln(3) = ln(12/3) = ln(4).\n\nln(5²) = 2 ln(5).\n\nln(1/e) = ln(1) − ln(e) = −1."
          },
          {
            type: "remarque",
            titre: "Attention à la somme",
            texte: "En général, ln(a + b) n’est pas égal à ln(a) + ln(b). Par exemple, ln(1 × 1) = 0, alors que ln(1 + 1) = ln(2) ≠ 0."
          }
        ]
      },

      {
        id: "tle-maths-ch9-l2",
        titre: "Leçon 2 : Variations, signe et limites",
        blocs: [
          {
            type: "texte",
            titre: "Sens de variation",
            texte: "Pour tout x > 0, ln'(x) = 1/x > 0. La fonction ln est donc strictement croissante sur ]0 ; +∞[."
          },
          {
            type: "tableau",
            titre: "Signe du logarithme",
            entetes: ["Valeur de x", "Signe de ln(x)"],
            lignes: [
              ["0 < x < 1", "ln(x) < 0"],
              ["x = 1", "ln(x) = 0"],
              ["x > 1", "ln(x) > 0"]
            ]
          },
          {
            type: "definition",
            titre: "Limites de référence",
            texte: "Lorsque x tend vers 0 par valeurs positives, ln(x) tend vers −∞.\n\nLorsque x tend vers +∞, ln(x) tend vers +∞.\n\nL’axe des ordonnées, d’équation x = 0, est donc une asymptote verticale à la courbe de ln."
          },
          {
            type: "schema",
            titre: "Courbe du logarithme népérien",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='35' y1='130' x2='300' y2='130' stroke='black' stroke-width='2'/><line x1='60' y1='205' x2='60' y2='15' stroke='black' stroke-width='2'/><path d='M64 205 C68 170 80 145 110 130 C145 112 195 98 285 82' fill='none' stroke='#1769aa' stroke-width='3'/><circle cx='110' cy='130' r='4' fill='#c62828'/><text x='105' y='148' font-size='13'>1</text><text x='43' y='148' font-size='13'>0</text><text x='220' y='75' font-size='13' fill='#1769aa'>y = ln(x)</text><text x='290' y='147' font-size='13'>x</text></svg>",
            legende: "Schéma qualitatif : la courbe est croissante, passe par (1 ; 0) et se rapproche de l’axe x = 0 lorsque x tend vers 0 par valeurs positives."
          },
          {
            type: "methode",
            titre: "Comparer deux logarithmes",
            texte: "Comme ln est strictement croissante, pour a > 0 et b > 0 :\n\nln(a) < ln(b) si et seulement si a < b.\n\nDe même, ln(a) = ln(b) si et seulement si a = b."
          },
          {
            type: "exemple",
            titre: "Comparer",
            texte: "Comme 2 < 5 et que ces deux nombres sont positifs, ln(2) < ln(5).\n\nComme 0 < 1/3 < 1, on a ln(1/3) < ln(1) = 0."
          }
        ]
      },

      {
        id: "tle-maths-ch9-l3",
        titre: "Leçon 3 : Dérivées et primitives",
        blocs: [
          {
            type: "methode",
            titre: "Dériver ln(u)",
            texte: "Si u est dérivable et strictement positive sur un intervalle, alors :\n\n[ln(u(x))]' = u'(x)/u(x).\n\nIl faut d’abord déterminer où u(x) > 0."
          },
          {
            type: "exemple",
            titre: "Dérivée d’une composée",
            texte: "Soit f(x) = ln(2x + 1). Elle est définie lorsque 2x + 1 > 0, soit x > −1/2.\n\nSur cet intervalle : f'(x) = 2/(2x + 1)."
          },
          {
            type: "definition",
            titre: "Primitive de 1/x",
            texte: "Sur ]0 ; +∞[, les primitives de 1/x sont ln(x) + C.\n\nSur ]−∞ ; 0[, les primitives sont ln(−x) + C. On peut donc écrire ln|x| + C sur chacun de ces deux intervalles."
          },
          {
            type: "methode",
            titre: "Primitive de u'/u",
            texte: "Si u est dérivable et ne s’annule pas sur un intervalle I, une primitive de u'(x)/u(x) sur I est ln|u(x)|.\n\nPour l’utiliser, on cherche d’abord l’intervalle sur lequel u ne s’annule pas."
          },
          {
            type: "exemple",
            titre: "Calcul d’une intégrale",
            texte: "Calculons ∫₀¹ 2/(2x + 1) dx.\n\nSur [0 ; 1], 2x + 1 est positif. Une primitive est ln(2x + 1).\n\nL’intégrale vaut [ln(2x + 1)]₀¹ = ln(3) − ln(1) = ln(3)."
          },
          {
            type: "exemple",
            titre: "Sur un intervalle négatif",
            texte: "Sur ]−∞ ; 0[, une primitive de 1/x est ln(−x). En effet, sa dérivée vaut (−1)/(−x) = 1/x."
          }
        ]
      },

      {
        id: "tle-maths-ch9-l4",
        titre: "Leçon 4 : Équations et inéquations",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre ln(u) = ln(v)",
            texte: "1. Imposer u > 0 et v > 0.\n2. Utiliser la stricte croissance de ln : ln(u) = ln(v) équivaut à u = v.\n3. Résoudre et conserver seulement les solutions qui satisfont les conditions de départ."
          },
          {
            type: "exemple",
            titre: "Une équation",
            texte: "Résolvons ln(x + 1) = ln(3 − x).\n\nConditions : x + 1 > 0 et 3 − x > 0, donc −1 < x < 3.\n\nL’égalité équivaut à x + 1 = 3 − x, soit x = 1. Cette valeur est autorisée : S = {1}."
          },
          {
            type: "methode",
            titre: "Résoudre une inéquation",
            texte: "Après avoir imposé la positivité des arguments, on utilise la croissance de ln : ln(u) < ln(v) équivaut à u < v. Le sens de l’inégalité est conservé."
          },
          {
            type: "exemple",
            titre: "Une inéquation",
            texte: "Résolvons ln(x − 1) ≤ 0.\n\nCondition : x > 1. Comme 0 = ln(1), l’inéquation équivaut à x − 1 ≤ 1, soit x ≤ 2.\n\nEn combinant avec la condition : S = ]1 ; 2]."
          },
          {
            type: "remarque",
            titre: "Une équation à second membre constant",
            texte: "Certaines équations, comme ln(x) = 2, se résolvent à l’aide de la fonction exponentielle. Cette fonction sera étudiée dans le chapitre suivant."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Donner ln(1) et ln(e).",
        correction: "Par définition, ln(1) = 0 et ln(e) = 1."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Simplifier ln(18) − ln(3).",
        correction: "Les arguments sont positifs. Donc ln(18) − ln(3) = ln(18/3) = ln(6)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer le signe de ln(1/4) et celui de ln(4).",
        correction: "Comme 0 < 1/4 < 1, ln(1/4) < 0. Comme 4 > 1, ln(4) > 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer l’ensemble de définition de f(x) = ln(3x − 6).",
        correction: "Il faut 3x − 6 > 0, donc x > 2. Ainsi Df = ]2 ; +∞[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dériver f(x) = ln(3x − 6) sur son domaine.",
        correction: "Sur ]2 ; +∞[, l’argument est positif. Sa dérivée est 3, donc f'(x) = 3/(3x − 6) = 1/(x − 2)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre ln(x) = ln(7).",
        correction: "La condition est x > 0. La fonction ln étant strictement croissante, l’égalité équivaut à x = 7, valeur autorisée. Donc S = {7}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre ln(x + 2) > 0.",
        correction: "Il faut x + 2 > 0, soit x > −2. Comme 0 = ln(1), l’inéquation équivaut à x + 2 > 1, soit x > −1.\nCette condition respecte le domaine : S = ]−1 ; +∞[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer ∫₁⁴ (1/x) dx.",
        correction: "Sur [1 ; 4], une primitive de 1/x est ln(x).\nL’intégrale vaut ln(4) − ln(1) = ln(4)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre ln(x − 1) = ln(5 − x).",
        correction: "Les conditions sont x − 1 > 0 et 5 − x > 0, soit 1 < x < 5.\nL’égalité équivaut à x − 1 = 5 − x, donc 2x = 6 et x = 3.\nCette valeur est autorisée : S = {3}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre ln(x) + ln(x − 1) = ln(2).",
        correction: "Conditions : x > 0 et x − 1 > 0, donc x > 1.\nOn regroupe : ln[x(x − 1)] = ln(2). Cela équivaut à x² − x = 2, soit x² − x − 2 = 0.\nOn factorise : (x − 2)(x + 1) = 0. Les solutions possibles sont 2 et −1, mais seule 2 vérifie x > 1. Donc S = {2}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer les variations de f(x) = ln(x)/x sur ]0 ; +∞[.",
        correction: "Pour x > 0, la formule du quotient donne :\nf'(x) = [(1/x) × x − ln(x)]/x² = [1 − ln(x)]/x².\n\nLe dénominateur est positif. Comme ln(e) = 1 et ln est strictement croissante, 1 − ln(x) est positif si x < e, nul en e et négatif si x > e.\n\nAinsi f croît sur ]0 ; e], puis décroît sur [e ; +∞[. Son maximum est f(e) = 1/e."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer ∫₀² 3/(3x + 1) dx.",
        correction: "Sur [0 ; 2], 3x + 1 est strictement positif. Une primitive de 3/(3x + 1) est ln(3x + 1).\n\nL’intégrale vaut [ln(3x + 1)]₀² = ln(7) − ln(1) = ln(7)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer les primitives de f(x) = 2/(2x − 1) sur ]−∞ ; 1/2[.",
        correction: "Sur cet intervalle, 2x − 1 est négatif et ne s’annule pas. Les primitives sont :\nF(x) = ln|2x − 1| + C = ln(1 − 2x) + C.\n\nVérification : F'(x) = −2/(1 − 2x) = 2/(2x − 1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre ln(x + 1) ≤ ln(2x − 1).",
        correction: "Il faut x + 1 > 0 et 2x − 1 > 0. Ensemble, ces conditions donnent x > 1/2.\n\nPar croissance de ln, l’inéquation équivaut à x + 1 ≤ 2x − 1, soit x ≥ 2.\nCette condition est compatible avec le domaine. Donc S = [2 ; +∞[."
      }
    ]
  }
]);
