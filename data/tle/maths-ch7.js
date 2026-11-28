enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch7",
    titre: "Chapitre 7 : Calcul intégral et aires",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch7-l1",
        titre: "Leçon 1 : Comprendre l’intégrale",
        blocs: [
          {
            type: "introduction",
            titre: "De l’aire à l’intégrale",
            texte: "L’intégrale permet notamment de calculer des aires et des accumulations. Pour commencer, on considère une fonction continue et positive sur un intervalle [a ; b]."
          },
          {
            type: "definition",
            titre: "Intégrale d’une fonction positive",
            texte: "Si f est continue et positive sur [a ; b], avec a ≤ b, l’intégrale de f de a à b, notée ∫ₐᵇ f(x) dx, est l’aire du domaine compris entre la courbe de f, l’axe des abscisses et les droites x = a et x = b.\n\nL’aire est exprimée en unités d’aire du repère."
          },
          {
            type: "schema",
            titre: "Aire sous une courbe positive",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 210'><rect width='320' height='210' fill='white'/><line x1='25' y1='175' x2='300' y2='175' stroke='black' stroke-width='2'/><line x1='55' y1='195' x2='55' y2='20' stroke='black' stroke-width='2'/><path d='M100 145 Q165 55 250 75 L250 175 L100 175 Z' fill='#bbdefb' stroke='none'/><path d='M80 158 Q165 55 275 78' fill='none' stroke='#1769aa' stroke-width='3'/><line x1='100' y1='145' x2='100' y2='175' stroke='#555' stroke-dasharray='4 4'/><line x1='250' y1='75' x2='250' y2='175' stroke='#555' stroke-dasharray='4 4'/><text x='96' y='193' font-size='14'>a</text><text x='246' y='193' font-size='14'>b</text><text x='155' y='145' font-size='14'>aire</text><text x='265' y='67' font-size='14' fill='#1769aa'>y = f(x)</text></svg>",
            legende: "Schéma qualitatif : pour f positive, l’aire colorée correspond à l’intégrale de f entre a et b."
          },
          {
            type: "definition",
            titre: "Fonction de signe quelconque",
            texte: "Pour une fonction continue qui peut être négative, l’intégrale est une aire algébrique : les parties situées au-dessus de l’axe des abscisses comptent positivement, celles qui sont au-dessous comptent négativement.\n\nUne intégrale peut donc être positive, négative ou nulle."
          },
          {
            type: "exemple",
            titre: "Une intégrale négative",
            texte: "Sur [0 ; 2], la fonction f(x) = −1 est constante et négative. Le rectangle compris entre sa courbe et l’axe des abscisses a une aire géométrique de 2 unités d’aire.\n\nSon aire algébrique est négative : ∫₀² (−1) dx = −2."
          },
          {
            type: "remarque",
            titre: "Les bornes",
            texte: "Par convention, ∫ₐᵃ f(x) dx = 0 et ∫ᵦₐ f(x) dx = −∫ₐᵇ f(x) dx. Dans une lecture géométrique d’aire, on prend d’abord les bornes dans l’ordre croissant."
          }
        ]
      },

      {
        id: "tle-maths-ch7-l2",
        titre: "Leçon 2 : Calculer une intégrale avec une primitive",
        blocs: [
          {
            type: "definition",
            titre: "Formule fondamentale",
            texte: "Si f est continue sur [a ; b] et si F est une primitive de f sur cet intervalle, alors :\n\n∫ₐᵇ f(x) dx = F(b) − F(a).\n\nOn note aussi ce résultat [F(x)]ₐᵇ."
          },
          {
            type: "methode",
            titre: "Les étapes du calcul",
            texte: "1. Vérifier que la fonction est continue sur l’intervalle d’intégration.\n2. Trouver une primitive F.\n3. Calculer F(b) − F(a).\n4. Simplifier le résultat et vérifier sa cohérence avec le signe de la fonction si celui-ci est connu."
          },
          {
            type: "exemple",
            titre: "Calcul d’une intégrale",
            texte: "Calculons ∫₁³ 2x dx.\n\nLa fonction x ↦ 2x est continue sur [1 ; 3]. Une primitive est F(x) = x².\n\n∫₁³ 2x dx = [x²]₁³ = 3² − 1² = 9 − 1 = 8."
          },
          {
            type: "exemple",
            titre: "Attention aux parenthèses",
            texte: "Calculons ∫₀² (x − 3) dx.\n\nUne primitive est F(x) = x²/2 − 3x.\nF(2) = 2 − 6 = −4 et F(0) = 0.\n\nL’intégrale vaut −4 − 0 = −4. Ce résultat négatif est cohérent : x − 3 est négatif sur [0 ; 2]."
          },
          {
            type: "remarque",
            titre: "La constante disparaît",
            texte: "On peut utiliser n’importe quelle primitive : si l’on choisit F(x) + C, alors [F(b) + C] − [F(a) + C] = F(b) − F(a)."
          }
        ]
      },

      {
        id: "tle-maths-ch7-l3",
        titre: "Leçon 3 : Propriétés de l’intégrale",
        blocs: [
          {
            type: "tableau",
            titre: "Propriétés à connaître",
            entetes: ["Propriété", "Formule"],
            lignes: [
              ["Linéarité", "∫ₐᵇ (λf + μg) dx = λ∫ₐᵇ f dx + μ∫ₐᵇ g dx"],
              ["Relation de Chasles", "∫ₐᵇ f dx = ∫ₐᶜ f dx + ∫ᶜᵇ f dx"],
              ["Positivité", "Si f ≥ 0 sur [a ; b], alors ∫ₐᵇ f dx ≥ 0"],
              ["Comparaison", "Si f ≤ g sur [a ; b], alors ∫ₐᵇ f dx ≤ ∫ₐᵇ g dx"]
            ]
          },
          {
            type: "remarque",
            titre: "Conditions",
            texte: "Dans ces propriétés, les fonctions sont supposées continues sur un intervalle contenant les bornes. Pour la positivité et la comparaison, on suppose a ≤ b."
          },
          {
            type: "exemple",
            titre: "Utiliser la linéarité",
            texte: "Calculons ∫₀¹ (3x² + 2) dx.\n\nUne primitive de 3x² + 2 est x³ + 2x. Ainsi :\n∫₀¹ (3x² + 2) dx = [x³ + 2x]₀¹ = 3 − 0 = 3."
          },
          {
            type: "exemple",
            titre: "Utiliser la relation de Chasles",
            texte: "Si ∫₀² f(x) dx = 5 et ∫₂⁵ f(x) dx = −1, alors :\n\n∫₀⁵ f(x) dx = ∫₀² f(x) dx + ∫₂⁵ f(x) dx = 5 − 1 = 4."
          },
          {
            type: "methode",
            titre: "Encadrer une intégrale",
            texte: "Si m ≤ f(x) ≤ M pour tout x de [a ; b], avec a ≤ b, alors :\n\nm(b − a) ≤ ∫ₐᵇ f(x) dx ≤ M(b − a).\n\nOn compare f aux fonctions constantes m et M."
          },
          {
            type: "exemple",
            titre: "Un encadrement",
            texte: "Sur [0 ; 1], on a 1 ≤ x² + 1 ≤ 2.\n\nLa longueur de l’intervalle est 1, donc :\n1 ≤ ∫₀¹ (x² + 1) dx ≤ 2.\n\nLe calcul exact donne 1/3 + 1 = 4/3, ce qui respecte cet encadrement."
          }
        ]
      },

      {
        id: "tle-maths-ch7-l4",
        titre: "Leçon 4 : Aires et valeur moyenne",
        blocs: [
          {
            type: "methode",
            titre: "Calculer une aire entre une courbe et l’axe",
            texte: "Pour une fonction continue f sur [a ; b] :\n1. Étudier le signe de f.\n2. Si f ≥ 0 sur l’intervalle, l’aire vaut ∫ₐᵇ f(x) dx.\n3. Si f ≤ 0 sur l’intervalle, l’aire vaut −∫ₐᵇ f(x) dx.\n4. Si f change de signe, découper l’intervalle aux changements de signe et additionner les aires positives.\n\nDe façon générale, l’aire est ∫ₐᵇ |f(x)| dx."
          },
          {
            type: "exemple",
            titre: "Une fonction qui change de signe",
            texte: "Calculons l’aire entre la courbe de f(x) = x − 1 et l’axe des abscisses sur [0 ; 2].\n\nLa fonction est négative sur [0 ; 1] et positive sur [1 ; 2]. Une primitive est F(x) = x²/2 − x.\n\n∫₀¹ (x − 1) dx = F(1) − F(0) = −1/2.\n∫₁² (x − 1) dx = F(2) − F(1) = 1/2.\n\nL’aire cherchée vaut −(−1/2) + 1/2 = 1 unité d’aire. L’intégrale sur [0 ; 2], elle, vaut 0 : les deux parties algébriques se compensent."
          },
          {
            type: "methode",
            titre: "Aire entre deux courbes",
            texte: "Si f et g sont continues sur [a ; b] et si f(x) ≥ g(x) sur tout cet intervalle, l’aire comprise entre les deux courbes vaut :\n\n∫ₐᵇ [f(x) − g(x)] dx.\n\nSi les courbes changent d’ordre, on découpe l’intervalle à leurs intersections et on calcule à chaque fois « fonction du haut moins fonction du bas »."
          },
          {
            type: "exemple",
            titre: "Entre une droite et une parabole",
            texte: "Sur [0 ; 1], on a x ≥ x². L’aire entre y = x et y = x² vaut donc :\n\n∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6 unité d’aire."
          },
          {
            type: "definition",
            titre: "Valeur moyenne d’une fonction",
            texte: "Si f est continue sur [a ; b] avec a < b, sa valeur moyenne sur cet intervalle est :\n\nm = (1/(b − a)) × ∫ₐᵇ f(x) dx."
          },
          {
            type: "exemple",
            titre: "Calcul d’une valeur moyenne",
            texte: "Pour f(x) = 2x sur [1 ; 3], l’intégrale vaut 8. La longueur de l’intervalle est 3 − 1 = 2.\n\nLa valeur moyenne est donc m = 8/2 = 4."
          },
          {
            type: "remarque",
            titre: "Unités d’aire",
            texte: "Si une unité sur l’axe horizontal représente a cm et une unité sur l’axe vertical représente b cm, alors une unité d’aire représente a × b cm²."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer ∫₀² 3 dx.",
        correction: "Une primitive de 3 est 3x. Donc ∫₀² 3 dx = [3x]₀² = 6 − 0 = 6."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer ∫₁² 2x dx.",
        correction: "Une primitive de 2x est x². Ainsi ∫₁² 2x dx = [x²]₁² = 4 − 1 = 3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Sachant que ∫₁⁴ f(x) dx = 7, calculer ∫₄¹ f(x) dx et ∫₂² f(x) dx.",
        correction: "En inversant les bornes, on change le signe : ∫₄¹ f(x) dx = −7.\nUne intégrale dont les bornes sont égales vaut 0 : ∫₂² f(x) dx = 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer ∫₀² (3x² + 1) dx.",
        correction: "Une primitive est F(x) = x³ + x.\nDonc ∫₀² (3x² + 1) dx = [x³ + x]₀² = (8 + 2) − 0 = 10."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer ∫₀³ (x − 2) dx.",
        correction: "Une primitive est F(x) = x²/2 − 2x.\nF(3) = 9/2 − 6 = −3/2 et F(0) = 0.\nL’intégrale vaut donc −3/2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sachant que ∫₀² f(x) dx = 3 et ∫₂⁵ f(x) dx = 4, calculer ∫₀⁵ f(x) dx.",
        correction: "Par la relation de Chasles :\n∫₀⁵ f(x) dx = ∫₀² f(x) dx + ∫₂⁵ f(x) dx = 3 + 4 = 7."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer l’aire comprise entre la courbe y = x et l’axe des abscisses sur [0 ; 4].",
        correction: "La fonction x ↦ x est positive sur [0 ; 4]. L’aire vaut donc :\n∫₀⁴ x dx = [x²/2]₀⁴ = 16/2 = 8 unités d’aire."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer l’aire comprise entre la droite y = −2 et l’axe des abscisses sur [1 ; 4].",
        correction: "La fonction est négative sur l’intervalle. Son intégrale vaut ∫₁⁴ (−2) dx = −2 × (4 − 1) = −6.\nL’aire géométrique vaut l’opposé : 6 unités d’aire."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer la valeur moyenne de f(x) = x sur [0 ; 4].",
        correction: "L’intégrale vaut ∫₀⁴ x dx = [x²/2]₀⁴ = 8. La longueur de l’intervalle est 4.\nLa valeur moyenne est donc 8/4 = 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer l’aire entre la courbe de f(x) = x − 2 et l’axe des abscisses sur [0 ; 3].",
        correction: "f est négative sur [0 ; 2] et positive sur [2 ; 3]. Une primitive est F(x) = x²/2 − 2x.\n\n∫₀² f(x) dx = F(2) − F(0) = −2.\n∫₂³ f(x) dx = F(3) − F(2) = −3/2 − (−2) = 1/2.\n\nL’aire vaut −(−2) + 1/2 = 5/2 unités d’aire."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer l’aire entre les courbes y = x et y = x² sur [0 ; 1].",
        correction: "Sur [0 ; 1], x ≥ x². L’aire est donc :\n∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6 unité d’aire."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Sachant que 2 ≤ f(x) ≤ 5 sur [1 ; 3], encadrer ∫₁³ f(x) dx.",
        correction: "La longueur de [1 ; 3] est 2. En intégrant l’encadrement :\n2 × 2 ≤ ∫₁³ f(x) dx ≤ 5 × 2.\nDonc 4 ≤ ∫₁³ f(x) dx ≤ 10."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer ∫₁² 3/x² dx.",
        correction: "La fonction est continue sur [1 ; 2]. Une primitive de 3/x² est −3/x.\nDonc ∫₁² 3/x² dx = [−3/x]₁² = −3/2 − (−3) = 3/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère, une unité sur l’axe horizontal représente 2 cm et une unité sur l’axe vertical représente 3 cm. Une région a une aire de 4 unités d’aire. Quelle est son aire en cm² ?",
        correction: "Une unité d’aire représente 2 × 3 = 6 cm².\nPour 4 unités d’aire, l’aire est 4 × 6 = 24 cm²."
      }
    ]
  }
]);
