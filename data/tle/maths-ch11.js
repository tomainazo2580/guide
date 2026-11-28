enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch11",
    titre: "Chapitre 11 : Équations et inéquations avec logarithmes et exponentielles",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch11-l1",
        titre: "Leçon 1 : Résoudre avec le logarithme",
        blocs: [
          {
            type: "introduction",
            titre: "Commencer par le domaine",
            texte: "Le logarithme ln(u) n’est défini que lorsque u > 0. Avant toute transformation, il faut donc déterminer les valeurs autorisées."
          },
          {
            type: "methode",
            titre: "Les équivalences utiles",
            texte: "Pour u > 0 et v > 0 :\n• ln(u) = ln(v) équivaut à u = v.\n• ln(u) < ln(v) équivaut à u < v.\n\nPour tout réel k :\n• ln(u) = k équivaut à u = exp(k).\n• ln(u) < k équivaut à 0 < u < exp(k).\n\nLes inégalités larges se traitent de la même manière."
          },
          {
            type: "exemple",
            titre: "Équation avec un second membre constant",
            texte: "Résolvons ln(2x − 1) = 2.\n\nDomaine : 2x − 1 > 0, soit x > 1/2.\nL’équation équivaut à 2x − 1 = e², donc x = (1 + e²)/2.\nCette valeur est bien supérieure à 1/2. Ainsi S = {(1 + e²)/2}."
          },
          {
            type: "exemple",
            titre: "Inéquation",
            texte: "Résolvons ln(x + 2) ≥ 1.\n\nDomaine : x > −2. Comme 1 = ln(e) et ln est strictement croissante :\nln(x + 2) ≥ ln(e) équivaut à x + 2 ≥ e.\n\nDonc x ≥ e − 2. Ces valeurs sont autorisées puisque e > 0. Ainsi S = [e − 2 ; +∞[."
          },
          {
            type: "remarque",
            titre: "Regrouper sans perdre les conditions",
            texte: "On peut écrire ln(u) + ln(v) = ln(uv) seulement lorsque u > 0 et v > 0. Il ne suffit pas que le produit uv soit positif."
          }
        ]
      },

      {
        id: "tle-maths-ch11-l2",
        titre: "Leçon 2 : Résoudre avec l’exponentielle",
        blocs: [
          {
            type: "methode",
            titre: "Équations et inéquations",
            texte: "La fonction exp est strictement positive et strictement croissante.\n\n• exp(u) = exp(v) équivaut à u = v.\n• exp(u) ≤ exp(v) équivaut à u ≤ v.\n• Pour k > 0, exp(u) = k équivaut à u = ln(k).\n• Si k ≤ 0, exp(u) = k n’a pas de solution."
          },
          {
            type: "exemple",
            titre: "Comparer avec une constante positive",
            texte: "Résolvons exp(−2x) > 3.\n\nComme 3 = exp(ln(3)), la croissance de exp donne −2x > ln(3).\nEn divisant par −2, on inverse le sens :\nx < −ln(3)/2.\n\nAinsi S = ]−∞ ; −ln(3)/2[."
          },
          {
            type: "exemple",
            titre: "Étudier le signe avant de transformer",
            texte: "Résolvons exp(x) ≥ −1.\n\nPour tout réel x, exp(x) > 0, donc exp(x) ≥ −1. Tous les réels conviennent : S = ℝ.\n\nOn ne peut pas écrire ln(−1), car ce logarithme n’est pas défini dans ℝ."
          },
          {
            type: "remarque",
            titre: "Quand un quotient apparaît",
            texte: "Si une expression contient un dénominateur, il faut vérifier qu’il ne s’annule pas. Ne multipliez pas une inéquation par une expression de signe inconnu sans distinguer les cas."
          }
        ]
      },

      {
        id: "tle-maths-ch11-l3",
        titre: "Leçon 3 : Changements d’inconnue",
        blocs: [
          {
            type: "methode",
            titre: "Poser X = exp(x)",
            texte: "Lorsque l’équation contient exp(2x) et exp(x), on peut poser X = exp(x). Alors X > 0 et exp(2x) = X².\n\nOn résout l’équation en X, on conserve seulement les solutions strictement positives, puis on revient à x avec x = ln(X)."
          },
          {
            type: "exemple",
            titre: "Une équation du second degré",
            texte: "Résolvons exp(2x) − 3exp(x) + 2 = 0.\n\nPosons X = exp(x), avec X > 0. On obtient :\nX² − 3X + 2 = 0, soit (X − 1)(X − 2) = 0.\n\nLes deux solutions X = 1 et X = 2 sont positives. Ainsi x = ln(1) = 0 ou x = ln(2).\nDonc S = {0 ; ln(2)}."
          },
          {
            type: "methode",
            titre: "Poser X = ln(x)",
            texte: "Lorsque l’expression contient des puissances de ln(x), on peut poser X = ln(x), après avoir imposé x > 0.\n\nOn résout en X, puis on revient à x avec x = exp(X)."
          },
          {
            type: "exemple",
            titre: "Une équation en ln(x)",
            texte: "Résolvons [ln(x)]² − ln(x) − 2 = 0.\n\nDomaine : x > 0. Posons X = ln(x). Alors X² − X − 2 = 0, soit (X − 2)(X + 1) = 0.\n\nDonc ln(x) = 2 ou ln(x) = −1. Les solutions sont x = e² et x = e⁻¹ = 1/e.\nAinsi S = {1/e ; e²}."
          },
          {
            type: "remarque",
            titre: "Deux changements d’inconnue différents",
            texte: "Si X = exp(x), alors X est strictement positif. Si X = ln(x), alors X peut être n’importe quel réel. Ne pas confondre ces deux conditions."
          }
        ]
      },

      {
        id: "tle-maths-ch11-l4",
        titre: "Leçon 4 : Méthode de synthèse et interprétation",
        blocs: [
          {
            type: "methode",
            titre: "Organiser la résolution",
            texte: "1. Déterminer le domaine de l’expression.\n2. Choisir une transformation valable : propriétés de ln ou exp, factorisation ou changement d’inconnue.\n3. Résoudre l’équation ou l’inéquation obtenue.\n4. Revenir à l’inconnue initiale.\n5. Vérifier les conditions et présenter l’ensemble des solutions."
          },
          {
            type: "exemple",
            titre: "Inéquation avec changement d’inconnue",
            texte: "Résolvons exp(2x) − 3exp(x) + 2 ≤ 0.\n\nPosons X = exp(x), avec X > 0. On résout :\n(X − 1)(X − 2) ≤ 0, soit 1 ≤ X ≤ 2.\n\nComme exp est croissante, 1 ≤ exp(x) ≤ 2 équivaut à 0 ≤ x ≤ ln(2).\nDonc S = [0 ; ln(2)]."
          },
          {
            type: "exemple",
            titre: "Seuil dans un modèle",
            texte: "Une quantité suit N(t) = 80exp(0,05t), pour t ≥ 0. Cherchons quand elle atteint au moins 120.\n\n80exp(0,05t) ≥ 120 équivaut à exp(0,05t) ≥ 1,5.\nDonc 0,05t ≥ ln(1,5), puis t ≥ 20ln(1,5) ≈ 8,11.\n\nDans ce modèle, le seuil est atteint à partir d’environ 8,11 unités de temps."
          },
          {
            type: "remarque",
            titre: "Valeur exacte et valeur approchée",
            texte: "Conserver la valeur exacte, par exemple 20ln(1,5), avant de donner une approximation. Pour un temps compté uniquement en jours entiers, il faut ensuite adapter l’interprétation à la question."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre ln(x) = 0.",
        correction: "Il faut x > 0. Comme 0 = ln(1), l’équation équivaut à x = 1. Donc S = {1}."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre exp(x) = e³.",
        correction: "Comme e³ = exp(3) et que exp est strictement croissante, x = 3. Donc S = {3}."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre exp(x) < 0.",
        correction: "Pour tout réel x, exp(x) > 0. L’inéquation n’a aucune solution : S = ∅."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre ln(x − 2) = 1.",
        correction: "Il faut x > 2. L’équation équivaut à x − 2 = e, donc x = 2 + e. Cette valeur est autorisée. Ainsi S = {2 + e}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre ln(3x + 1) < 0.",
        correction: "Domaine : 3x + 1 > 0, soit x > −1/3.\nComme 0 = ln(1), l’inéquation équivaut à 3x + 1 < 1, soit x < 0.\nEn combinant : S = ]−1/3 ; 0[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre exp(2x + 1) = 4.",
        correction: "Comme 4 > 0, on obtient 2x + 1 = ln(4), puis x = [ln(4) − 1]/2.\nDonc S = {[ln(4) − 1]/2}."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre exp(−x) ≤ 2.",
        correction: "On écrit 2 = exp(ln(2)). Par croissance de exp, −x ≤ ln(2). En multipliant par −1, on inverse le sens : x ≥ −ln(2).\nDonc S = [−ln(2) ; +∞[."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre ln(x) + ln(x − 3) = ln(4).",
        correction: "Les conditions donnent x > 3. On regroupe alors les logarithmes : x(x − 3) = 4.\nDonc x² − 3x − 4 = 0, soit (x − 4)(x + 1) = 0.\nParmi 4 et −1, seule la valeur 4 vérifie x > 3. Ainsi S = {4}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre exp(2x) − 5exp(x) + 6 = 0.",
        correction: "Posons X = exp(x), avec X > 0. L’équation devient X² − 5X + 6 = 0, soit (X − 2)(X − 3) = 0.\nLes deux solutions sont positives : X = 2 ou X = 3.\nDonc S = {ln(2) ; ln(3)}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre exp(2x) + exp(x) − 2 = 0.",
        correction: "Posons X = exp(x), avec X > 0. On obtient X² + X − 2 = 0, soit (X − 1)(X + 2) = 0.\nLa solution X = −2 est impossible car X > 0. Il reste X = 1, donc x = ln(1) = 0.\nAinsi S = {0}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre [ln(x)]² = 4.",
        correction: "Domaine : x > 0. Posons X = ln(x). L’équation X² = 4 donne X = −2 ou X = 2.\nDonc x = e⁻² ou x = e². Ainsi S = {e⁻² ; e²}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre exp(2x) − 4exp(x) + 3 > 0.",
        correction: "Posons X = exp(x), avec X > 0. On résout (X − 1)(X − 3) > 0.\nLe produit est positif pour X < 1 ou X > 3. En tenant compte de X > 0 : 0 < X < 1 ou X > 3.\nPar croissance de exp, cela donne x < 0 ou x > ln(3).\nDonc S = ]−∞ ; 0[ ∪ ]ln(3) ; +∞[."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre ln(x² − 1) = 0.",
        correction: "Domaine : x² − 1 > 0, soit x < −1 ou x > 1.\nComme ln(1) = 0, l’équation équivaut à x² − 1 = 1, donc x² = 2.\nLes solutions −√2 et √2 appartiennent toutes deux au domaine. Ainsi S = {−√2 ; √2}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une quantité suit N(t) = 200exp(−0,1t), pour t ≥ 0. Déterminer à partir de quel instant elle est inférieure ou égale à 100.",
        correction: "On résout 200exp(−0,1t) ≤ 100, soit exp(−0,1t) ≤ 1/2.\nPar croissance de exp : −0,1t ≤ ln(1/2) = −ln(2).\nEn divisant par −0,1, on inverse le sens : t ≥ 10ln(2).\nLa quantité est donc inférieure ou égale à 100 à partir de t = 10ln(2) ≈ 6,93 unités de temps."
      }
    ]
  }
]);
