enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch5",
    titre: "Chapitre 5 : Priorités des opérations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch5-lecon1",
        titre: "1. Pourquoi respecter un ordre ?",
        blocs: [
          {
            type: "texte",
            titre: "Une même expression, un seul résultat",
            texte: "Quand une expression contient plusieurs opérations, on doit respecter des règles communes. Sinon, deux personnes pourraient trouver des résultats différents pour un même calcul."
          },
          {
            type: "exemple",
            titre: "Un premier calcul",
            texte: "Dans 3 + 4 × 2, on effectue d’abord la multiplication : 4 × 2 = 8. Puis on calcule 3 + 8 = 11. Le résultat est donc 11."
          },
          {
            type: "remarque",
            titre: "Une erreur fréquente",
            texte: "Si l’on calcule d’abord 3 + 4, on trouve 7 × 2 = 14. Mais ce n’est pas le résultat de 3 + 4 × 2. Pour demander ce calcul, il faudrait écrire (3 + 4) × 2."
          },
          {
            type: "methode",
            titre: "Présenter son travail",
            texte: "On recopie l’expression, puis on écrit une nouvelle ligne après chaque étape. Par exemple : 3 + 4 × 2 = 3 + 8 = 11. On ne change pas les parties qui n’ont pas encore été calculées."
          }
        ]
      },

      {
        id: "maths5-ch5-lecon2",
        titre: "2. Les parenthèses",
        blocs: [
          {
            type: "regle",
            titre: "Première priorité",
            texte: "Dans une expression contenant des parenthèses, on commence par calculer ce qui se trouve entre les parenthèses. À l’intérieur, on respecte aussi les règles de priorité."
          },
          {
            type: "exemple",
            titre: "Les parenthèses changent le calcul",
            texte: "(3 + 4) × 2 = 7 × 2 = 14. Sans les parenthèses, 3 + 4 × 2 = 11."
          },
          {
            type: "exemple",
            titre: "Plusieurs opérations dans les parenthèses",
            texte: "5 × (2 + 3 × 4) = 5 × (2 + 12) = 5 × 14 = 70. Dans les parenthèses, la multiplication 3 × 4 est prioritaire sur l’addition."
          },
          {
            type: "methode",
            titre: "Quand des parenthèses sont emboîtées",
            texte: "On commence par les parenthèses les plus intérieures, puis on avance vers l’extérieur."
          },
          {
            type: "exemple",
            titre: "Deux niveaux de parenthèses",
            texte: "2 × (10 − (3 + 2)) = 2 × (10 − 5) = 2 × 5 = 10."
          },
          {
            type: "remarque",
            titre: "Des parenthèses pour noter un nombre négatif",
            texte: "Dans 5 + (−3), les parenthèses permettent surtout de bien lire le nombre négatif. Elles ne demandent pas un calcul séparé : 5 + (−3) = 2."
          }
        ]
      },

      {
        id: "maths5-ch5-lecon3",
        titre: "3. Multiplications et divisions",
        blocs: [
          {
            type: "regle",
            titre: "Avant les additions et les soustractions",
            texte: "En l’absence de parenthèses à calculer, les multiplications et les divisions sont prioritaires sur les additions et les soustractions."
          },
          {
            type: "exemple",
            titre: "Multiplication avant addition",
            texte: "7 + 3 × 4 = 7 + 12 = 19."
          },
          {
            type: "exemple",
            titre: "Division avant soustraction",
            texte: "20 − 12 ÷ 3 = 20 − 4 = 16."
          },
          {
            type: "regle",
            titre: "Multiplication et division : même priorité",
            texte: "Si une suite ne contient que des multiplications et des divisions, on les effectue de gauche à droite."
          },
          {
            type: "exemple",
            titre: "De gauche à droite",
            texte: "24 ÷ 3 × 2 = 8 × 2 = 16. On n’effectue pas 3 × 2 en premier : cela donnerait un calcul différent."
          },
          {
            type: "remarque",
            titre: "Avec des nombres relatifs",
            texte: "Les priorités restent les mêmes avec des nombres négatifs. Il faut aussi appliquer les règles de signes. Par exemple : 5 + (−2) × 3 = 5 + (−6) = −1."
          }
        ]
      },

      {
        id: "maths5-ch5-lecon4",
        titre: "4. Additions et soustractions",
        blocs: [
          {
            type: "regle",
            titre: "Même priorité",
            texte: "Si une suite ne contient que des additions et des soustractions, on les effectue de gauche à droite."
          },
          {
            type: "exemple",
            titre: "Calcul pas à pas",
            texte: "15 − 8 + 2 = 7 + 2 = 9. On calcule d’abord 15 − 8, car cette opération est à gauche."
          },
          {
            type: "exemple",
            titre: "Deux soustractions",
            texte: "12 − 5 − 3 = 7 − 3 = 4."
          },
          {
            type: "remarque",
            titre: "Les parenthèses changent le résultat",
            texte: "12 − (5 − 3) = 12 − 2 = 10, alors que 12 − 5 − 3 = 4. Il ne faut pas ajouter ou enlever des parenthèses sans réfléchir."
          },
          {
            type: "exemple",
            titre: "Avec un nombre négatif",
            texte: "4 − (−3) + 2 = 7 + 2 = 9. On calcule d’abord 4 − (−3), puis on ajoute 2."
          }
        ]
      },

      {
        id: "maths5-ch5-lecon5",
        titre: "5. Une méthode pour les calculs mélangés",
        blocs: [
          {
            type: "methode",
            titre: "Les étapes",
            texte: "1. Repère et calcule les parenthèses, en commençant par les plus intérieures. 2. Effectue les multiplications et divisions de gauche à droite. 3. Termine par les additions et soustractions de gauche à droite."
          },
          {
            type: "exemple",
            titre: "Premier exemple détaillé",
            texte: "18 − 2 × (3 + 4) = 18 − 2 × 7 = 18 − 14 = 4. On calcule la parenthèse, puis la multiplication, puis la soustraction."
          },
          {
            type: "exemple",
            titre: "Avec une division",
            texte: "30 ÷ (2 + 3) + 4 × 2 = 30 ÷ 5 + 4 × 2 = 6 + 8 = 14."
          },
          {
            type: "exemple",
            titre: "Avec des nombres relatifs",
            texte: "10 − (−2) × 3 = 10 − (−6) = 10 + 6 = 16. La multiplication est prioritaire ; ensuite, soustraire −6 revient à ajouter +6."
          },
          {
            type: "remarque",
            titre: "La division par zéro",
            texte: "On vérifie qu’un diviseur n’est pas nul. Par exemple, 8 ÷ (3 − 3) n’est pas défini, car 3 − 3 = 0."
          },
          {
            type: "remarque",
            titre: "Et les puissances ?",
            texte: "Les puissances seront étudiées au chapitre suivant. Pour l’instant, on s’entraîne avec les quatre opérations et les parenthèses."
          }
        ]
      },

      {
        id: "maths5-ch5-lecon6",
        titre: "6. Traduire une situation en calcul",
        blocs: [
          {
            type: "texte",
            titre: "Choisir les bonnes opérations",
            texte: "Dans un problème, on commence par comprendre les quantités. On choisit ensuite les opérations et, si nécessaire, des parenthèses pour montrer ce qui doit être calculé ensemble."
          },
          {
            type: "exemple",
            titre: "Des cahiers et un stylo",
            texte: "Un cahier coûte 2 000 Ar et un stylo coûte 1 000 Ar. Pour 3 cahiers et 1 stylo : 3 × 2 000 + 1 000 = 6 000 + 1 000 = 7 000 Ar."
          },
          {
            type: "exemple",
            titre: "Trois lots identiques",
            texte: "Un lot contient un cahier à 2 000 Ar et un stylo à 1 000 Ar. Pour 3 lots : 3 × (2 000 + 1 000) = 3 × 3 000 = 9 000 Ar. Les parenthèses indiquent qu’on multiplie le prix du lot entier par 3."
          },
          {
            type: "methode",
            titre: "Vérifier",
            texte: "Après avoir calculé, vérifie que le résultat répond à la question et n’oublie pas l’unité : ariary, mètres, objets…"
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule : 5 + 3 × 2.",
        correction: "5 + 3 × 2 = 5 + 6 = 11. La multiplication est prioritaire."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule : (5 + 3) × 2.",
        correction: "(5 + 3) × 2 = 8 × 2 = 16. On commence par la parenthèse."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule : 20 − 12 ÷ 4.",
        correction: "20 − 12 ÷ 4 = 20 − 3 = 17."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans 7 + 4 × 3, quelle opération effectue-t-on en premier ?",
        correction: "On effectue d’abord la multiplication 4 × 3. Ensuite, on ajoute 7."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : 18 − 7 + 2.",
        correction: "18 − 7 + 2 = 11 + 2 = 13. Les additions et les soustractions sont calculées de gauche à droite."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : 24 ÷ 4 × 3.",
        correction: "24 ÷ 4 × 3 = 6 × 3 = 18. La division et la multiplication ont la même priorité : on calcule de gauche à droite."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : 6 × (9 − 5).",
        correction: "6 × (9 − 5) = 6 × 4 = 24."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule : 4 × (2 + 3 × 2).",
        correction: "4 × (2 + 3 × 2) = 4 × (2 + 6) = 4 × 8 = 32."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule : 25 − 3 × 4 + 2.",
        correction: "25 − 3 × 4 + 2 = 25 − 12 + 2 = 13 + 2 = 15."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule : 36 ÷ (4 + 2) + 5.",
        correction: "36 ÷ (4 + 2) + 5 = 36 ÷ 6 + 5 = 6 + 5 = 11."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule : 3 × (12 − (4 + 2)).",
        correction: "3 × (12 − (4 + 2)) = 3 × (12 − 6) = 3 × 6 = 18."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule : 8 + (−3) × 2.",
        correction: "8 + (−3) × 2 = 8 + (−6) = 2."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule : 5 − (−4) × 2.",
        correction: "5 − (−4) × 2 = 5 − (−8) = 5 + 8 = 13."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Place des parenthèses dans 8 − 3 × 2 pour obtenir 10.",
        correction: "(8 − 3) × 2 = 5 × 2 = 10."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève affirme que 18 ÷ 3 × 2 = 3, car 3 × 2 = 6 puis 18 ÷ 6 = 3. Explique son erreur.",
        correction: "La division et la multiplication ont la même priorité. On les effectue de gauche à droite : 18 ÷ 3 × 2 = 6 × 2 = 12. Pour obtenir 3, il faudrait écrire 18 ÷ (3 × 2)."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un cahier coûte 1 500 Ar et un crayon 500 Ar. Combien coûtent 4 lots contenant chacun un cahier et un crayon ? Écris une expression et calcule.",
        correction: "Un lot coûte 1 500 + 500 = 2 000 Ar. Les 4 lots coûtent 4 × (1 500 + 500) = 4 × 2 000 = 8 000 Ar."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "L’expression 12 ÷ (5 − 5) est-elle définie ? Explique.",
        correction: "Non. Dans la parenthèse, 5 − 5 = 0. L’expression devient 12 ÷ 0, et la division par zéro n’est pas définie."
      }
    ]
  }
]);
