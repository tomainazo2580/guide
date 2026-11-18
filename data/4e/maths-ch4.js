// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 4 : Priorités opératoires et calculs avec parenthèses

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch4",
    titre: "Chapitre 4 : Priorités opératoires et calculs avec parenthèses",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch4-sans-parentheses",
        titre: "Calculer sans parenthèses",
        blocs: [
          {
            type: "regle",
            titre: "Multiplications et divisions en priorité",
            texte: "Dans une expression sans parenthèses, on effectue les multiplications et les divisions avant les additions et les soustractions."
          },
          {
            type: "exemple",
            titre: "Une multiplication avant une addition",
            texte: "A = 5 + 3 × 4\nA = 5 + 12\nA = 17\nOn calcule d'abord 3 × 4, même si cette multiplication est écrite après l'addition."
          },
          {
            type: "exemple",
            titre: "Une division avant une soustraction",
            texte: "B = 10 − 12 ÷ 3\nB = 10 − 4\nB = 6"
          },
          {
            type: "regle",
            titre: "Opérations de même priorité",
            texte: "Lorsqu'il ne reste que des multiplications et des divisions, on les effectue de gauche à droite.\nDe même, lorsqu'il ne reste que des additions et des soustractions, on les effectue de gauche à droite."
          },
          {
            type: "exemple",
            titre: "De gauche à droite",
            texte: "C = 18 ÷ 3 × 2\nC = 6 × 2\nC = 12\n\nD = 10 − 4 + 2\nD = 6 + 2\nD = 8"
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Dans 18 ÷ 3 × 2, on ne calcule pas 3 × 2 en premier : la division et la multiplication ont la même priorité. On commence donc par 18 ÷ 3."
          }
        ]
      },

      {
        id: "m4-ch4-parentheses",
        titre: "Calculer avec des parenthèses",
        blocs: [
          {
            type: "regle",
            titre: "Parenthèses d'abord",
            texte: "On effectue d'abord les calculs entre parenthèses. À l'intérieur des parenthèses, on respecte les mêmes règles de priorité : multiplications et divisions avant additions et soustractions."
          },
          {
            type: "exemple",
            titre: "Les parenthèses changent le résultat",
            texte: "A = (5 + 3) × 4\nA = 8 × 4\nA = 32\n\nSans les parenthèses, 5 + 3 × 4 = 17. Les deux expressions ne sont donc pas égales."
          },
          {
            type: "exemple",
            titre: "Priorités à l'intérieur des parenthèses",
            texte: "B = 2 × (3 + 4 × 2)\nB = 2 × (3 + 8)\nB = 2 × 11\nB = 22"
          },
          {
            type: "methode",
            titre: "Parenthèses emboîtées",
            texte: "Lorsque des parenthèses sont placées à l'intérieur d'autres parenthèses, commence par les plus intérieures.\n\nC = 3 × [7 − (2 + 1)]\nC = 3 × [7 − 3]\nC = 3 × 4\nC = 12\nLes crochets jouent ici le même rôle que des parenthèses."
          },
          {
            type: "remarque",
            titre: "Parenthèses et nombres négatifs",
            texte: "On écrit souvent un nombre négatif entre parenthèses pour bien distinguer son signe de celui de l'opération.\nExemple : 4 − (−3) = 4 + 3 = 7.\nLes parenthèses autour de −3 indiquent ici le nombre que l'on soustrait."
          }
        ]
      },

      {
        id: "m4-ch4-relatifs",
        titre: "Appliquer les priorités avec les nombres relatifs",
        blocs: [
          {
            type: "methode",
            titre: "Avancer étape par étape",
            texte: "1. Repère les parenthèses et les opérations prioritaires.\n2. Calcule une opération ou un groupe d'opérations de même priorité.\n3. Réécris toute l'expression après chaque étape.\n4. Termine par les additions et les soustractions."
          },
          {
            type: "exemple",
            titre: "Produit puis somme",
            texte: "A = (−3) + (+2) × (−5)\nA = (−3) + (−10)\nA = −13\nLa multiplication est prioritaire sur l'addition."
          },
          {
            type: "exemple",
            titre: "Parenthèses puis division",
            texte: "B = [(−8) + (+2)] ÷ (−3)\nB = (−6) ÷ (−3)\nB = +2"
          },
          {
            type: "exemple",
            titre: "Plusieurs opérations",
            texte: "C = 12 − (−2) × 3 + 8 ÷ (−4)\nC = 12 − (−6) + (−2)\nC = 12 + 6 − 2\nC = 16"
          },
          {
            type: "remarque",
            titre: "Division par zéro",
            texte: "Une division par zéro n'est pas définie. Si un calcul conduit à un diviseur égal à 0, l'expression n'a pas de valeur.\nExemple : 5 ÷ (3 − 3) n'est pas défini car 3 − 3 = 0."
          }
        ]
      },

      {
        id: "m4-ch4-distributivite",
        titre: "Utiliser la distributivité",
        blocs: [
          {
            type: "regle",
            titre: "Multiplier une somme",
            texte: "On peut multiplier chaque terme d'une somme par le même nombre, puis additionner les résultats :\na × (b + c) = a × b + a × c.\nCette propriété s'appelle la distributivité."
          },
          {
            type: "exemple",
            titre: "Deux façons de calculer",
            texte: "A = 3 × (4 + 2)\nMéthode 1 : A = 3 × 6 = 18.\nMéthode 2 : A = 3 × 4 + 3 × 2 = 12 + 6 = 18."
          },
          {
            type: "regle",
            titre: "Multiplier une différence",
            texte: "La distributivité fonctionne aussi avec une soustraction :\na × (b − c) = a × b − a × c."
          },
          {
            type: "exemple",
            titre: "Avec un nombre négatif",
            texte: "B = (−2) × (3 + 5)\nB = (−2) × 3 + (−2) × 5\nB = −6 + (−10)\nB = −16.\nOn peut vérifier : (−2) × 8 = −16."
          },
          {
            type: "remarque",
            titre: "Attention à chaque terme",
            texte: "Dans 3 × (4 + 2), il faut multiplier les deux termes par 3. Écrire 3 × 4 + 2 serait une erreur."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n1. 7 + 2 × 3\n2. 15 − 8 ÷ 2",
        correction: "1. La multiplication est prioritaire : 7 + 2 × 3 = 7 + 6 = 13.\n2. La division est prioritaire : 15 − 8 ÷ 2 = 15 − 4 = 11."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule de gauche à droite :\n1. 20 ÷ 5 × 3\n2. 12 − 7 + 4",
        correction: "1. Division et multiplication ont la même priorité : 20 ÷ 5 × 3 = 4 × 3 = 12.\n2. Soustraction et addition ont la même priorité : 12 − 7 + 4 = 5 + 4 = 9."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule :\n1. (7 + 2) × 3\n2. 15 − (8 ÷ 2 + 1)\n3. 4 × [6 − (3 + 1)]",
        correction: "1. (7 + 2) × 3 = 9 × 3 = 27.\n2. Dans les parenthèses, on commence par la division : 15 − (4 + 1) = 15 − 5 = 10.\n3. On commence par les parenthèses intérieures : 4 × [6 − 4] = 4 × 2 = 8."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule :\n1. (−4) + (+3) × (−2)\n2. [(−5) + (+9)] ÷ (−2)\n3. 6 − (−3) × 2",
        correction: "1. (−4) + (+3) × (−2) = (−4) + (−6) = −10.\n2. [(−5) + (+9)] ÷ (−2) = (+4) ÷ (−2) = −2.\n3. 6 − (−3) × 2 = 6 − (−6) = 6 + 6 = 12."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule de deux façons : d'abord en calculant la parenthèse, puis en utilisant la distributivité.\n1. 4 × (5 + 2)\n2. (−3) × (6 − 2)",
        correction: "1. Parenthèse d'abord : 4 × 7 = 28. Avec la distributivité : 4 × 5 + 4 × 2 = 20 + 8 = 28.\n2. Parenthèse d'abord : (−3) × 4 = −12. Avec la distributivité : (−3) × 6 − (−3) × 2 = −18 − (−6) = −18 + 6 = −12."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calcule en détaillant :\nA = 18 ÷ (−3) + 2 × (−4)\nB = 5 − [3 + (−2) × 4]",
        correction: "A = 18 ÷ (−3) + 2 × (−4)\nA = −6 + (−8)\nA = −14.\n\nB = 5 − [3 + (−2) × 4]\nB = 5 − [3 + (−8)]\nB = 5 − (−5)\nB = 5 + 5\nB = 10."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une association achète 4 cahiers à 2 500 Ar chacun et 3 stylos à 1 000 Ar chacun. Elle paie avec 20 000 Ar.\n1. Écris une expression qui donne la somme rendue.\n2. Calcule cette somme en respectant les priorités.",
        correction: "1. Le prix des cahiers est 4 × 2 500 et celui des stylos est 3 × 1 000. La somme rendue est :\n20 000 − (4 × 2 500 + 3 × 1 000).\n2. On effectue les multiplications dans la parenthèse :\n20 000 − (10 000 + 3 000)\n= 20 000 − 13 000\n= 7 000 Ar.\nOn rend 7 000 Ar à l'association."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Calcule en détaillant :\nA = 24 ÷ [2 × (−3)] − (−5)\nB = (−2) × [7 − (−3)] + 18 ÷ (−6)\nC = 12 ÷ [5 − (2 + 3)]",
        correction: "A = 24 ÷ [2 × (−3)] − (−5)\nA = 24 ÷ (−6) − (−5)\nA = −4 + 5\nA = +1.\n\nB = (−2) × [7 − (−3)] + 18 ÷ (−6)\nB = (−2) × 10 + (−3)\nB = −20 − 3\nB = −23.\n\nC : on calcule d'abord le diviseur : 5 − (2 + 3) = 5 − 5 = 0. Une division par zéro n'est pas définie, donc C n'a pas de valeur."
      }
    ]
  }
]);
