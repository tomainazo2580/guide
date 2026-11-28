enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch12",
    titre: "Chapitre 12 : Équations différentielles",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch12-l1",
        titre: "Leçon 1 : Comprendre une équation différentielle",
        blocs: [
          {
            type: "introduction",
            titre: "Une fonction inconnue",
            texte: "Dans une équation habituelle, l’inconnue est souvent un nombre. Dans une équation différentielle, l’inconnue est une fonction. L’équation relie cette fonction à une ou plusieurs de ses dérivées."
          },
          {
            type: "definition",
            titre: "Solution sur un intervalle",
            texte: "Une solution d’une équation différentielle sur un intervalle I est une fonction suffisamment dérivable sur I qui vérifie l’équation en chaque point de I.\n\nPar exemple, y' = 2y est une équation différentielle du premier ordre : elle fait intervenir la fonction inconnue y et sa dérivée première y'."
          },
          {
            type: "methode",
            titre: "Vérifier une solution",
            texte: "1. Calculer la dérivée de la fonction proposée.\n2. Remplacer y et y' dans l’équation.\n3. Vérifier que l’égalité obtenue est vraie pour tout x de l’intervalle."
          },
          {
            type: "exemple",
            titre: "Vérification",
            texte: "Vérifions que y(x) = 3e²ˣ est solution de y' = 2y sur ℝ.\n\nOn a y'(x) = 6e²ˣ et 2y(x) = 2 × 3e²ˣ = 6e²ˣ.\n\nDonc y' = 2y pour tout réel x : la fonction est bien solution."
          },
          {
            type: "definition",
            titre: "Condition initiale",
            texte: "Une condition initiale impose la valeur de la solution en un point : par exemple y(x₀) = y₀.\n\nElle permet souvent de choisir une solution particulière parmi une famille de solutions."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre vérifier et résoudre",
            texte: "Vérifier une fonction montre qu’elle est une solution. Résoudre l’équation demande de trouver toutes les solutions sur l’intervalle considéré."
          }
        ]
      },

      {
        id: "tle-maths-ch12-l2",
        titre: "Leçon 2 : Équation y' = ay",
        blocs: [
          {
            type: "definition",
            titre: "Solution générale",
            texte: "Soit a une constante réelle. Les solutions sur ℝ de l’équation différentielle y' = ay sont les fonctions :\n\ny(x) = Ceᵃˣ, où C est une constante réelle.\n\nCette formule reste valable lorsque a = 0 : les solutions sont alors les fonctions constantes."
          },
          {
            type: "methode",
            titre: "Pourquoi cette formule ?",
            texte: "D’abord, la dérivée de Ceᵃˣ est aCeᵃˣ : toute fonction de cette forme est donc solution.\n\nRéciproquement, si y est solution, posons z(x) = y(x)e⁻ᵃˣ. Alors :\nz'(x) = e⁻ᵃˣ[y'(x) − ay(x)] = 0.\n\nAinsi z est constante, égale à C, donc y(x) = Ceᵃˣ."
          },
          {
            type: "exemple",
            titre: "Résolution sans condition",
            texte: "Résolvons y' = −3y sur ℝ.\n\nIci a = −3. Les solutions sont donc :\ny(x) = Ce⁻³ˣ, avec C réel."
          },
          {
            type: "methode",
            titre: "Ajouter une condition initiale",
            texte: "Pour résoudre y' = ay avec y(x₀) = y₀, on écrit d’abord y(x) = Ceᵃˣ.\n\nLa condition donne Ceᵃˣ⁰ = y₀, donc C = y₀e⁻ᵃˣ⁰.\n\nLa solution peut aussi s’écrire directement :\ny(x) = y₀eᵃ⁽ˣ⁻ˣ⁰⁾."
          },
          {
            type: "exemple",
            titre: "Déterminer la constante",
            texte: "Résolvons y' = 2y avec y(0) = 5.\n\nLes solutions sont y(x) = Ce²ˣ. Comme y(0) = C = 5, la solution cherchée est y(x) = 5e²ˣ."
          },
          {
            type: "remarque",
            titre: "La solution nulle",
            texte: "La fonction nulle correspond à C = 0. En particulier, si y(x₀) = 0, l’unique solution de y' = ay vérifiant cette condition est y(x) = 0."
          }
        ]
      },

      {
        id: "tle-maths-ch12-l3",
        titre: "Leçon 3 : Équation y' = ay + b",
        blocs: [
          {
            type: "definition",
            titre: "Solution générale lorsque a ≠ 0",
            texte: "Soient a et b deux constantes réelles, avec a ≠ 0. Les solutions sur ℝ de y' = ay + b sont :\n\ny(x) = Ceᵃˣ − b/a, où C est une constante réelle."
          },
          {
            type: "methode",
            titre: "Retrouver la formule",
            texte: "1. Chercher une solution constante y = k. Elle vérifie 0 = ak + b, donc k = −b/a.\n2. Poser z = y − k. Alors z' = y' et z' = a(z + k) + b = az.\n3. Ainsi z(x) = Ceᵃˣ, donc y(x) = Ceᵃˣ + k = Ceᵃˣ − b/a."
          },
          {
            type: "exemple",
            titre: "Résolution avec condition initiale",
            texte: "Résolvons y' = 2y − 4 avec y(0) = 3.\n\nIci a = 2 et b = −4. La solution générale est :\ny(x) = Ce²ˣ + 2.\n\nLa condition donne C + 2 = 3, donc C = 1.\nLa solution cherchée est y(x) = e²ˣ + 2.\n\nVérification : y' = 2e²ˣ et 2y − 4 = 2(e²ˣ + 2) − 4 = 2e²ˣ."
          },
          {
            type: "remarque",
            titre: "Le cas a = 0",
            texte: "Si a = 0, l’équation devient y' = b. Ses solutions sont les primitives de la constante b : y(x) = bx + C.\n\nOn ne doit pas utiliser la formule −b/a dans ce cas."
          },
          {
            type: "definition",
            titre: "Valeur d’équilibre",
            texte: "Lorsque a ≠ 0, la valeur k = −b/a est appelée valeur d’équilibre : la fonction constante y(x) = k est une solution.\n\nSi a < 0, les solutions Ceᵃˣ + k tendent vers k lorsque x tend vers +∞."
          }
        ]
      },

      {
        id: "tle-maths-ch12-l4",
        titre: "Leçon 4 : Modéliser une évolution",
        blocs: [
          {
            type: "introduction",
            titre: "Relier le calcul au contexte",
            texte: "Une équation différentielle peut décrire l’évolution d’une quantité dans le temps. La variable t représente alors le temps ; les unités et les conditions du modèle doivent être précisées."
          },
          {
            type: "exemple",
            titre: "Croissance proportionnelle",
            texte: "Une quantité N vérifie N'(t) = 0,2N(t), avec N(0) = 100 et t ≥ 0.\n\nLes solutions sont N(t) = Ce⁰·²ᵗ. La condition initiale donne C = 100.\n\nAinsi N(t) = 100e⁰·²ᵗ. Après 5 unités de temps : N(5) = 100e ≈ 271,8."
          },
          {
            type: "exemple",
            titre: "Approche d’une valeur d’équilibre",
            texte: "Une température T, en °C, vérifie T'(t) = −0,1[T(t) − 20] et T(0) = 80, pour t ≥ 0.\n\nL’équation s’écrit T' = −0,1T + 2. La température d’équilibre est 20 °C. Les solutions sont T(t) = Ce⁻⁰·¹ᵗ + 20.\n\nComme T(0) = 80, on obtient C = 60. Donc :\nT(t) = 20 + 60e⁻⁰·¹ᵗ.\n\nLorsque t tend vers +∞, T(t) tend vers 20 °C."
          },
          {
            type: "schema",
            titre: "Approche d’une température d’équilibre",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 210'><rect width='320' height='210' fill='white'/><line x1='40' y1='180' x2='300' y2='180' stroke='black' stroke-width='2'/><line x1='60' y1='190' x2='60' y2='20' stroke='black' stroke-width='2'/><line x1='60' y1='150' x2='295' y2='150' stroke='#c62828' stroke-width='2' stroke-dasharray='5 4'/><path d='M60 35 C90 82 125 113 170 132 C205 142 250 147 295 149' fill='none' stroke='#1769aa' stroke-width='3'/><circle cx='60' cy='35' r='4' fill='#1769aa'/><text x='12' y='39' font-size='13'>80</text><text x='12' y='154' font-size='13'>20</text><text x='205' y='140' font-size='13' fill='#1769aa'>T(t)</text><text x='180' y='167' font-size='13' fill='#c62828'>équilibre</text><text x='290' y='197' font-size='13'>t</text><text x='65' y='18' font-size='13'>T</text></svg>",
            legende: "Schéma qualitatif : la température part de 80 °C et se rapproche de la valeur d’équilibre 20 °C."
          },
          {
            type: "methode",
            titre: "Étapes d’un problème",
            texte: "1. Identifier l’équation et la condition initiale.\n2. Résoudre l’équation différentielle.\n3. Utiliser la condition pour déterminer la constante.\n4. Répondre à la question en respectant le domaine de temps et les unités.\n5. Vérifier que le résultat est cohérent avec le modèle."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Vérifier que y(x) = 4e³ˣ est solution de y' = 3y.",
        correction: "On calcule y'(x) = 12e³ˣ. De plus, 3y(x) = 12e³ˣ.\nAinsi y' = 3y pour tout réel x : la fonction est solution."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner toutes les solutions sur ℝ de y' = 5y.",
        correction: "L’équation est de la forme y' = ay avec a = 5. Ses solutions sont y(x) = Ce⁵ˣ, où C est un réel quelconque."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre sur ℝ : y' = 0.",
        correction: "Une fonction dont la dérivée est nulle sur ℝ est constante. Les solutions sont y(x) = C, avec C réel."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre y' = −2y avec y(0) = 3.",
        correction: "La solution générale est y(x) = Ce⁻²ˣ. La condition y(0) = 3 donne C = 3.\nLa solution cherchée est y(x) = 3e⁻²ˣ."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre y' = y avec y(1) = 2.",
        correction: "La solution générale est y(x) = Ceˣ. La condition donne Ce = 2, donc C = 2/e.\nAinsi y(x) = 2eˣ⁻¹."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre y' = 4y avec y(2) = 0.",
        correction: "La solution générale est y(x) = Ce⁴ˣ. La condition donne Ce⁸ = 0. Comme e⁸ > 0, C = 0.\nLa solution est donc y(x) = 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre sur ℝ : y' = 3.",
        correction: "Il faut chercher les primitives de la fonction constante 3. Les solutions sont y(x) = 3x + C, avec C réel."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Trouver la solution constante de y' = 2y + 6.",
        correction: "Si y(x) = k est constante, alors y' = 0. Il faut donc 0 = 2k + 6, soit k = −3.\nLa solution constante est y(x) = −3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre sur ℝ : y' = 2y + 6.",
        correction: "La valeur d’équilibre est k = −6/2 = −3. Les solutions sont donc y(x) = Ce²ˣ − 3, avec C réel.\n\nVérification : y' = 2Ce²ˣ et 2y + 6 = 2(Ce²ˣ − 3) + 6 = 2Ce²ˣ."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre y' = −y + 4 avec y(0) = 1.",
        correction: "La valeur d’équilibre est 4. La solution générale est y(x) = Ce⁻ˣ + 4.\nLa condition donne C + 4 = 1, donc C = −3.\nLa solution cherchée est y(x) = 4 − 3e⁻ˣ."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre y' = 2y − 6 avec y(1) = 5.",
        correction: "La valeur d’équilibre est 3. Les solutions sont y(x) = Ce²ˣ + 3.\nLa condition donne Ce² + 3 = 5, donc C = 2e⁻².\nAinsi y(x) = 3 + 2e²⁽ˣ⁻¹⁾."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une quantité N vérifie N'(t) = −0,5N(t) et N(0) = 80, pour t ≥ 0. Déterminer N(t), puis l’instant où N(t) = 40.",
        correction: "La solution est N(t) = Ce⁻⁰·⁵ᵗ. Avec N(0) = 80, on obtient N(t) = 80e⁻⁰·⁵ᵗ.\n\nPour N(t) = 40 : e⁻⁰·⁵ᵗ = 1/2. Donc −0,5t = ln(1/2) = −ln(2), d’où t = 2ln(2) ≈ 1,39 unité de temps."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une température T vérifie T'(t) = −0,2[T(t) − 25] et T(0) = 65, pour t ≥ 0. Déterminer T(t) et sa limite lorsque t tend vers +∞.",
        correction: "La valeur d’équilibre est 25. La solution générale est T(t) = Ce⁻⁰·²ᵗ + 25.\nLa condition initiale donne C + 25 = 65, donc C = 40.\nAinsi T(t) = 25 + 40e⁻⁰·²ᵗ. Comme e⁻⁰·²ᵗ tend vers 0, T(t) tend vers 25 °C."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre y' = 4 avec y(2) = 1.",
        correction: "Les solutions de y' = 4 sont y(x) = 4x + C.\nLa condition y(2) = 1 donne 8 + C = 1, donc C = −7.\nLa solution est y(x) = 4x − 7."
      }
    ]
  }
]);
