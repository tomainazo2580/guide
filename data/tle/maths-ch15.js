enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch15",
    titre: "Chapitre 15 : Systèmes d’équations linéaires",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch15-l1",
        titre: "Leçon 1 : Comprendre un système",
        blocs: [
          {
            type: "introduction",
            titre: "Plusieurs conditions à satisfaire",
            texte: "Un système regroupe plusieurs équations portant sur les mêmes inconnues. Le résoudre consiste à trouver les valeurs qui vérifient toutes les équations en même temps."
          },
          {
            type: "definition",
            titre: "Équation linéaire et solution",
            texte: "Une équation linéaire à deux inconnues peut s’écrire ax + by = c, où a, b et c sont des nombres connus.\n\nUne solution est un couple (x ; y) qui rend l’égalité vraie. Pour un système, ce couple doit vérifier chacune des équations."
          },
          {
            type: "exemple",
            titre: "Vérifier un couple",
            texte: "Considérons le système :\nx + y = 5\n2x − y = 1.\n\nPour (x ; y) = (2 ; 3), on obtient 2 + 3 = 5 et 2 × 2 − 3 = 1. Le couple (2 ; 3) est donc une solution."
          },
          {
            type: "definition",
            titre: "Interprétation graphique",
            texte: "Dans un repère, une équation ax + by = c, avec a et b non tous deux nuls, représente une droite.\n\nPour un système de deux telles équations, les solutions sont les coordonnées des points communs aux deux droites."
          },
          {
            type: "tableau",
            titre: "Trois situations possibles",
            entetes: ["Position des droites", "Solutions du système"],
            lignes: [
              ["Sécantes", "Une solution unique"],
              ["Parallèles et distinctes", "Aucune solution"],
              ["Confondues", "Une infinité de solutions"]
            ]
          },
          {
            type: "schema",
            titre: "Deux droites sécantes",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 210'><rect width='320' height='210' fill='white'/><line x1='25' y1='175' x2='300' y2='175' stroke='black' stroke-width='2'/><line x1='60' y1='195' x2='60' y2='15' stroke='black' stroke-width='2'/><line x1='80' y1='35' x2='260' y2='155' stroke='#1769aa' stroke-width='3'/><line x1='80' y1='155' x2='260' y2='35' stroke='#c62828' stroke-width='3'/><circle cx='170' cy='95' r='5' fill='#222'/><text x='178' y='91' font-size='14'>solution</text><text x='265' y='158' font-size='13' fill='#1769aa'>D₁</text><text x='265' y='38' font-size='13' fill='#c62828'>D₂</text><text x='290' y='192' font-size='13'>x</text><text x='68' y='25' font-size='13'>y</text></svg>",
            legende: "Schéma qualitatif : les coordonnées du point d’intersection vérifient les deux équations."
          }
        ]
      },

      {
        id: "tle-maths-ch15-l2",
        titre: "Leçon 2 : Substitution et élimination",
        blocs: [
          {
            type: "methode",
            titre: "Méthode par substitution",
            texte: "1. Isoler une inconnue dans l’une des équations.\n2. Remplacer cette inconnue dans l’autre équation.\n3. Résoudre l’équation obtenue.\n4. Retrouver l’autre inconnue et vérifier le couple."
          },
          {
            type: "exemple",
            titre: "Résolution par substitution",
            texte: "Résolvons :\nx + y = 5\n2x − y = 1.\n\nLa première équation donne y = 5 − x. On remplace dans la seconde :\n2x − (5 − x) = 1, donc 3x = 6 et x = 2.\n\nAlors y = 5 − 2 = 3. Vérification : 2 + 3 = 5 et 4 − 3 = 1.\nLa solution unique est (2 ; 3)."
          },
          {
            type: "methode",
            titre: "Méthode par élimination",
            texte: "On multiplie si nécessaire une ou plusieurs équations par des constantes non nulles, puis on les additionne ou les soustrait pour éliminer une inconnue.\n\nOn résout l’équation restante, puis on revient à une équation de départ pour trouver l’autre inconnue."
          },
          {
            type: "exemple",
            titre: "Résolution par élimination",
            texte: "Résolvons :\n2x + y = 7\nx − y = 2.\n\nEn additionnant les deux équations, on obtient 3x = 9, donc x = 3.\nPuis x − y = 2 donne 3 − y = 2, donc y = 1.\n\nVérification : 2 × 3 + 1 = 7 et 3 − 1 = 2. La solution est (3 ; 1)."
          },
          {
            type: "remarque",
            titre: "Préserver le système",
            texte: "Une opération doit conserver les mêmes solutions. Par exemple, remplacer une équation par elle-même plus un multiple d’une autre est permis. Il faut éviter de multiplier une équation par zéro, car on perdrait son information."
          }
        ]
      },

      {
        id: "tle-maths-ch15-l3",
        titre: "Leçon 3 : Systèmes à trois inconnues",
        blocs: [
          {
            type: "definition",
            titre: "Une solution à trois coordonnées",
            texte: "Pour un système à trois inconnues x, y et z, une solution est un triplet (x ; y ; z) qui vérifie toutes les équations."
          },
          {
            type: "methode",
            titre: "Élimination progressive",
            texte: "1. Choisir une inconnue à éliminer, par exemple x.\n2. Combiner la première équation avec chacune des deux autres pour obtenir deux équations en y et z.\n3. Résoudre le système obtenu à deux inconnues.\n4. Retrouver x dans une équation de départ.\n5. Vérifier le triplet dans les trois équations."
          },
          {
            type: "exemple",
            titre: "Résolution détaillée",
            texte: "Résolvons :\n(E₁) x + y + z = 6\n(E₂) 2x − y + z = 3\n(E₃) x + 2y − z = 2.\n\nÉliminons x :\nE₂ − 2E₁ donne −3y − z = −9, soit 3y + z = 9.\nE₃ − E₁ donne y − 2z = −4.\n\nDe 3y + z = 9, on tire z = 9 − 3y. Dans la seconde équation :\ny − 2(9 − 3y) = −4, donc 7y = 14 et y = 2.\nAlors z = 9 − 3 × 2 = 3, puis E₁ donne x = 6 − 2 − 3 = 1.\n\nVérification : 1 + 2 + 3 = 6 ; 2 − 2 + 3 = 3 ; 1 + 4 − 3 = 2.\nLa solution unique est (1 ; 2 ; 3)."
          },
          {
            type: "remarque",
            titre: "Noter les opérations",
            texte: "Écrire les opérations effectuées, comme E₂ − 2E₁, rend le raisonnement plus facile à relire et à corriger. Il faut remplacer une équation à la fois sans perdre les autres informations du système."
          }
        ]
      },

      {
        id: "tle-maths-ch15-l4",
        titre: "Leçon 4 : Cas particuliers et mise en équations",
        blocs: [
          {
            type: "exemple",
            titre: "Aucune solution",
            texte: "Considérons :\nx + y = 2\n2x + 2y = 5.\n\nEn doublant la première équation, on devrait avoir 2x + 2y = 4, ce qui contredit la seconde. Le système n’a donc aucune solution."
          },
          {
            type: "exemple",
            titre: "Une infinité de solutions",
            texte: "Considérons :\nx + y = 2\n2x + 2y = 4.\n\nLa seconde équation répète la première. On peut choisir x librement : si x = t, alors y = 2 − t.\n\nL’ensemble des solutions est {(t ; 2 − t) | t ∈ ℝ}."
          },
          {
            type: "methode",
            titre: "Traduire un problème",
            texte: "1. Choisir les inconnues et préciser ce qu’elles représentent.\n2. Traduire chaque information par une équation.\n3. Résoudre le système.\n4. Vérifier que le résultat respecte l’énoncé et ses unités.\n5. Rédiger une phrase de réponse."
          },
          {
            type: "exemple",
            titre: "Deux prix",
            texte: "Deux cahiers et un stylo coûtent 5 000 Ar. Un cahier et un stylo coûtent 3 000 Ar. Quels sont leurs prix ?\n\nNotons x le prix d’un cahier et y celui d’un stylo, en ariary. On obtient :\n2x + y = 5 000\nx + y = 3 000.\n\nEn soustrayant la seconde équation de la première, x = 2 000. Puis y = 3 000 − 2 000 = 1 000.\n\nVérification : 2 × 2 000 + 1 000 = 5 000. Un cahier coûte 2 000 Ar et un stylo 1 000 Ar."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Le couple (1 ; 2) est-il solution du système x + y = 3 et 2x − y = 0 ?",
        correction: "On remplace x par 1 et y par 2 : 1 + 2 = 3 et 2 × 1 − 2 = 0. Les deux équations sont vérifiées. Le couple est donc solution."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre le système x + y = 4 et x − y = 2.",
        correction: "En additionnant les équations : 2x = 6, donc x = 3. Puis 3 + y = 4 donne y = 1.\nLa solution est (3 ; 1)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre le système y = 2x et x + y = 9.",
        correction: "On remplace y par 2x : x + 2x = 9, donc x = 3. Alors y = 6.\nLa solution est (3 ; 6)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre le système 2x + y = 8 et x + y = 5.",
        correction: "On soustrait la seconde équation de la première : x = 3. Puis 3 + y = 5 donne y = 2.\nVérification : 2 × 3 + 2 = 8. La solution est (3 ; 2)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre le système 3x + 2y = 12 et x + y = 5.",
        correction: "La seconde équation donne y = 5 − x. En remplaçant : 3x + 2(5 − x) = 12, soit x = 2.\nAlors y = 3. La solution est (2 ; 3)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre le système 2x − y = 1 et 3x + y = 9.",
        correction: "On additionne : 5x = 10, donc x = 2. Puis 2 × 2 − y = 1 donne y = 3.\nVérification : 3 × 2 + 3 = 9. La solution est (2 ; 3)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le système x + y = 1 et 2x + 2y = 3 possède-t-il une solution ?",
        correction: "La première équation impose 2x + 2y = 2, alors que la seconde impose 2x + 2y = 3. C’est impossible. Le système n’a aucune solution."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre le système x − y = 4 et 2x − 2y = 8.",
        correction: "La seconde équation est le double de la première. Il suffit donc de résoudre x − y = 4.\nEn posant y = t, avec t réel, on obtient x = t + 4. Les solutions sont les couples (t + 4 ; t), pour t ∈ ℝ."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Vérifier que (2 ; 1 ; −1) est solution du système x + y + z = 2, 2x − y = 3 et y + z = 0.",
        correction: "On obtient 2 + 1 − 1 = 2 ; 2 × 2 − 1 = 3 ; et 1 − 1 = 0. Les trois équations sont vérifiées."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre le système x + y + z = 6, x + y − z = 0 et x − y = 0.",
        correction: "En soustrayant la deuxième équation de la première : 2z = 6, donc z = 3.\nLa troisième donne x = y. Dans la deuxième, x + y = 3, donc 2x = 3 et x = y = 3/2.\nLa solution est (3/2 ; 3/2 ; 3)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre le système x + y + z = 6, 2x + y + z = 7 et x + 2y + z = 8.",
        correction: "En soustrayant la première équation de la deuxième, on obtient x = 1. En soustrayant la première de la troisième, on obtient y = 2.\nLa première équation donne alors z = 6 − 1 − 2 = 3.\nLa solution est (1 ; 2 ; 3)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre le système x + y = 3 et 2x − 3y = 1.",
        correction: "De x + y = 3, on tire x = 3 − y. Donc 2(3 − y) − 3y = 1, soit 6 − 5y = 1.\nAinsi y = 1 et x = 2. La solution est (2 ; 1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Trois cahiers et deux stylos coûtent 8 000 Ar. Un cahier et un stylo coûtent 3 000 Ar. Déterminer le prix de chaque article.",
        correction: "Notons x le prix d’un cahier et y celui d’un stylo, en ariary. Le système est : 3x + 2y = 8 000 et x + y = 3 000.\n\nOn double la seconde équation : 2x + 2y = 6 000. Par soustraction, x = 2 000. Puis y = 1 000.\n\nUn cahier coûte 2 000 Ar et un stylo 1 000 Ar."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre le système x + y + z = 4, x + y = 3 et 2x + 2y + 2z = 8.",
        correction: "La troisième équation est le double de la première. En soustrayant x + y = 3 de x + y + z = 4, on obtient z = 1.\n\nOn pose x = t, avec t réel. Alors y = 3 − t. Les solutions sont les triplets (t ; 3 − t ; 1), pour t ∈ ℝ."
      }
    ]
  }
]);
