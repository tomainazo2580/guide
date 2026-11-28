enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch6",
    titre: "Chapitre 6 : Primitives",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch6-l1",
        titre: "Leçon 1 : Comprendre la notion de primitive",
        blocs: [
          {
            type: "introduction",
            titre: "Remonter de la dérivée à la fonction",
            texte: "Dériver une fonction permet d’obtenir sa dérivée. Chercher une primitive consiste à effectuer le travail inverse : à partir d’une fonction f, on cherche une fonction dont la dérivée est f."
          },
          {
            type: "definition",
            titre: "Primitive sur un intervalle",
            texte: "Une fonction F est une primitive de f sur un intervalle I si F est dérivable sur I et si F'(x) = f(x) pour tout x de I."
          },
          {
            type: "exemple",
            titre: "Vérifier une primitive",
            texte: "Sur ℝ, soit f(x) = 2x. La fonction F(x) = x² est une primitive de f, car F'(x) = 2x.\n\nLa fonction G(x) = x² + 5 est aussi une primitive de f, car G'(x) = 2x."
          },
          {
            type: "definition",
            titre: "Toutes les primitives sur un intervalle",
            texte: "Si F est une primitive de f sur un intervalle I, alors toutes les primitives de f sur I sont les fonctions x ↦ F(x) + C, où C est une constante réelle.\n\nDeux primitives d’une même fonction sur un même intervalle diffèrent donc d’une constante."
          },
          {
            type: "methode",
            titre: "Vérifier le résultat",
            texte: "Pour vérifier qu’une expression F est une primitive de f :\n1. Vérifier que F est dérivable sur l’intervalle demandé.\n2. Calculer F'(x).\n3. Vérifier que F'(x) = f(x)."
          },
          {
            type: "remarque",
            titre: "Pourquoi préciser l’intervalle ?",
            texte: "La propriété des constantes s’applique sur un intervalle. Si le domaine est formé de plusieurs intervalles séparés, la constante peut être différente sur chacun d’eux."
          },
          {
            type: "schema",
            titre: "Des primitives qui diffèrent d’une constante",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='20' y1='180' x2='300' y2='180' stroke='black' stroke-width='2'/><line x1='160' y1='205' x2='160' y2='20' stroke='black' stroke-width='2'/><path d='M55 58 Q160 218 265 58' fill='none' stroke='#1769aa' stroke-width='3'/><path d='M55 25 Q160 185 265 25' fill='none' stroke='#c62828' stroke-width='3'/><text x='226' y='92' font-size='13' fill='#1769aa'>F(x) = x²</text><text x='217' y='48' font-size='13' fill='#c62828'>G(x) = x² + C</text><text x='292' y='196' font-size='13'>x</text><text x='168' y='28' font-size='13'>y</text></svg>",
            legende: "Schéma qualitatif : ajouter une constante décale verticalement la courbe d’une primitive sans modifier sa dérivée."
          }
        ]
      },

      {
        id: "tle-maths-ch6-l2",
        titre: "Leçon 2 : Primitives usuelles",
        blocs: [
          {
            type: "tableau",
            titre: "Quelques primitives de référence",
            entetes: ["Fonction f(x)", "Une primitive F(x)", "Intervalle"],
            lignes: [
              ["k, constante", "kx", "ℝ"],
              ["xⁿ, n entier naturel", "xⁿ⁺¹/(n + 1)", "ℝ"],
              ["1/x²", "−1/x", "]−∞ ; 0[ ou ]0 ; +∞["],
              ["1/x³", "−1/(2x²)", "]−∞ ; 0[ ou ]0 ; +∞["],
              ["cos(x)", "sin(x)", "ℝ"],
              ["sin(x)", "−cos(x)", "ℝ"]
            ]
          },
          {
            type: "remarque",
            titre: "Le cas de 1/x",
            texte: "La formule des puissances ne s’applique pas à l’exposant −1, car on devrait diviser par 0. Les primitives de 1/x seront étudiées avec le logarithme népérien."
          },
          {
            type: "methode",
            titre: "Somme et multiplication par une constante",
            texte: "Si F est une primitive de f et G une primitive de g sur un même intervalle, alors F + G est une primitive de f + g. Pour une constante k, kF est une primitive de kf.\n\nOn peut donc chercher une primitive d’un polynôme terme à terme."
          },
          {
            type: "exemple",
            titre: "Primitive d’un polynôme",
            texte: "Cherchons les primitives de f(x) = 3x² − 4x + 5 sur ℝ.\n\nUne primitive de 3x² est x³ ; une primitive de −4x est −2x² ; une primitive de 5 est 5x.\n\nToutes les primitives sont donc F(x) = x³ − 2x² + 5x + C, avec C réel.\n\nVérification : F'(x) = 3x² − 4x + 5."
          },
          {
            type: "exemple",
            titre: "Primitive et domaine",
            texte: "Sur ]0 ; +∞[, les primitives de f(x) = 2/x² sont F(x) = −2/x + C.\n\nEn effet, la dérivée de −2/x est 2/x². La même expression convient aussi sur ]−∞ ; 0[, avec une constante qui peut être choisie indépendamment."
          }
        ]
      },

      {
        id: "tle-maths-ch6-l3",
        titre: "Leçon 3 : Reconnaître une forme composée",
        blocs: [
          {
            type: "methode",
            titre: "Utiliser la dérivée d’une composée",
            texte: "On reconnaît parfois f sous la forme u'(x) × g(u(x)). Si G est une primitive de g, alors G(u(x)) est une primitive de f.\n\nEn effet, la dérivée de G(u(x)) est G'(u(x))u'(x) = g(u(x))u'(x)."
          },
          {
            type: "tableau",
            titre: "Formes utiles",
            entetes: ["Fonction f(x)", "Une primitive", "Conditions"],
            lignes: [
              ["u'(x) × u(x)ⁿ", "u(x)ⁿ⁺¹/(n + 1)", "n entier naturel ; u dérivable"],
              ["u'(x)/u(x)²", "−1/u(x)", "u dérivable et non nulle"],
              ["u'(x) cos(u(x))", "sin(u(x))", "u dérivable"],
              ["u'(x) sin(u(x))", "−cos(u(x))", "u dérivable"]
            ]
          },
          {
            type: "exemple",
            titre: "Puissance d’une expression",
            texte: "Cherchons une primitive de f(x) = 6x(x² + 1)² sur ℝ.\n\nOn pose u(x) = x² + 1, donc u'(x) = 2x. Alors f(x) = 3u'(x)u(x)².\n\nUne primitive est 3 × u(x)³/3 = (x² + 1)³.\n\nVérification : sa dérivée est 3(x² + 1)² × 2x = 6x(x² + 1)²."
          },
          {
            type: "exemple",
            titre: "Coefficient à ajuster",
            texte: "Cherchons une primitive de f(x) = (2x + 1)³.\n\nLa dérivée de 2x + 1 est 2. Une primitive est donc (2x + 1)⁴/8 : en dérivant, on obtient 4(2x + 1)³ × 2/8 = (2x + 1)³."
          },
          {
            type: "remarque",
            titre: "Un produit ne se traite pas terme à terme",
            texte: "En général, multiplier une primitive de u par une primitive de v ne donne pas une primitive de uv. Il faut vérifier en dérivant ou utiliser une méthode adaptée."
          }
        ]
      },

      {
        id: "tle-maths-ch6-l4",
        titre: "Leçon 4 : Déterminer une primitive avec une condition",
        blocs: [
          {
            type: "methode",
            titre: "Utiliser une valeur connue",
            texte: "Pour déterminer la primitive F de f sur un intervalle I qui vérifie F(a) = b :\n1. Trouver une primitive F₀ de f sur I.\n2. Écrire F(x) = F₀(x) + C.\n3. Remplacer x par a et résoudre F₀(a) + C = b.\n\nIl faut que a appartienne à I."
          },
          {
            type: "exemple",
            titre: "Calculer la constante",
            texte: "Cherchons la primitive F de f(x) = 2x + 3 sur ℝ telle que F(1) = 7.\n\nLes primitives sont F(x) = x² + 3x + C.\nLa condition donne F(1) = 1 + 3 + C = 7, donc C = 3.\n\nLa primitive cherchée est F(x) = x² + 3x + 3."
          },
          {
            type: "exemple",
            titre: "Application à une vitesse",
            texte: "Un mobile se déplace sur un axe. Sa vitesse est v(t) = 4t + 2 en m/s pour t ≥ 0. Sa position initiale est x(0) = 5 m.\n\nLa position x est une primitive de la vitesse : x(t) = 2t² + 2t + C.\n\nComme x(0) = 5, on obtient C = 5. Donc x(t) = 2t² + 2t + 5, en mètres."
          },
          {
            type: "remarque",
            titre: "Bien interpréter la constante",
            texte: "Dans un problème, la constante est déterminée par la condition donnée : position initiale, valeur d’une fonction en un point ou autre information. Il faut conserver les unités lorsque la situation en possède."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Vérifier que F(x) = x³ est une primitive de f(x) = 3x² sur ℝ.",
        correction: "F est dérivable sur ℝ et F'(x) = 3x² = f(x). Donc F est une primitive de f sur ℝ."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner toutes les primitives de f(x) = 4x sur ℝ.",
        correction: "Une primitive de 4x est 2x², car sa dérivée est 4x. Toutes les primitives sur ℝ sont F(x) = 2x² + C, avec C réel."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner toutes les primitives de f(x) = cos(x) sur ℝ.",
        correction: "La dérivée de sin(x) est cos(x). Les primitives sont donc F(x) = sin(x) + C, avec C réel."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les primitives de f(x) = 6x² − 2x + 4 sur ℝ.",
        correction: "On intègre terme à terme : une primitive est 2x³ − x² + 4x.\nToutes les primitives sont F(x) = 2x³ − x² + 4x + C, avec C réel."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les primitives de f(x) = 3/x² sur ]0 ; +∞[.",
        correction: "La dérivée de −3/x est 3/x². Les primitives sur ]0 ; +∞[ sont donc F(x) = −3/x + C, avec C réel."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer la primitive F de f(x) = 2x − 1 sur ℝ telle que F(0) = 4.",
        correction: "Les primitives de f sont F(x) = x² − x + C.\nLa condition F(0) = 4 donne C = 4.\nDonc F(x) = x² − x + 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer la primitive F de f(x) = 3x² sur ℝ telle que F(2) = 1.",
        correction: "Les primitives sont F(x) = x³ + C.\nLa condition donne 8 + C = 1, donc C = −7.\nLa primitive cherchée est F(x) = x³ − 7."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Trouver une primitive de f(x) = 2(2x + 3) sur ℝ.",
        correction: "On remarque que la dérivée de 2x + 3 est 2. Une primitive est (2x + 3)²/2.\nEn effet, sa dérivée est [2(2x + 3) × 2]/2 = 2(2x + 3)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Trouver une primitive de f(x) = 5 cos(5x) sur ℝ.",
        correction: "La dérivée de sin(5x) est 5 cos(5x). Une primitive est donc F(x) = sin(5x)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer les primitives de f(x) = 4x/(x² + 1)² sur ℝ.",
        correction: "Posons u(x) = x² + 1 ; alors u'(x) = 2x et u(x) n’est jamais nul.\nOn a f(x) = 2u'(x)/u(x)². Une primitive est −2/u(x), soit −2/(x² + 1).\nToutes les primitives sont F(x) = −2/(x² + 1) + C, avec C réel."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer la primitive F de f(x) = 3(3x − 2)² sur ℝ telle que F(1) = 2.",
        correction: "La dérivée de (3x − 2)³ est 9(3x − 2)². Les primitives de f sont donc F(x) = (3x − 2)³/3 + C.\n\nLa condition F(1) = 2 donne 1/3 + C = 2, donc C = 5/3.\nAinsi F(x) = (3x − 2)³/3 + 5/3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une position x(t), en mètres, vérifie x'(t) = 6t − 4 pour t ≥ 0 et x(0) = 10. Déterminer x(t), puis calculer x(2).",
        correction: "Une primitive de 6t − 4 est 3t² − 4t. Donc x(t) = 3t² − 4t + C.\n\nComme x(0) = 10, C = 10. Ainsi x(t) = 3t² − 4t + 10.\nÀ t = 2, x(2) = 12 − 8 + 10 = 14 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer toutes les primitives de f(x) = 1/x² sur ℝ privé de 0.",
        correction: "Le domaine comporte deux intervalles séparés : ]−∞ ; 0[ et ]0 ; +∞[.\n\nSur chacun, une primitive est −1/x. Toutes les primitives sont donc définies par F(x) = −1/x + C₁ si x < 0 et F(x) = −1/x + C₂ si x > 0, où C₁ et C₂ sont deux constantes réelles indépendantes."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Trouver toutes les primitives de f(x) = 2x + sin(x), puis déterminer celle qui vaut 1 en 0.",
        correction: "Une primitive de 2x est x² et une primitive de sin(x) est −cos(x).\nToutes les primitives sont F(x) = x² − cos(x) + C.\n\nLa condition F(0) = 1 donne −1 + C = 1, donc C = 2.\nLa primitive cherchée est F(x) = x² − cos(x) + 2."
      }
    ]
  }
]);
