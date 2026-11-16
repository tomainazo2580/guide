enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch9",
    titre: "Chapitre 9 : Les équations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch9-lecon1",
        titre: "1. Comprendre une égalité et une équation",
        blocs: [
          {
            type: "definition",
            titre: "Une égalité",
            texte: "Une égalité indique que deux expressions ont la même valeur. Elle contient le signe =. Dans 4 + 3 = 7, les deux côtés valent 7."
          },
          {
            type: "texte",
            titre: "Les deux membres",
            texte: "Dans une égalité, l’expression à gauche du signe = est le membre de gauche. Celle à droite est le membre de droite. Dans 2 + 5 = 7, les membres sont 2 + 5 et 7."
          },
          {
            type: "definition",
            titre: "Une équation",
            texte: "Une équation est une égalité qui contient un ou plusieurs nombres inconnus, souvent représentés par des lettres. Résoudre une équation, c’est chercher les valeurs de l’inconnue qui rendent l’égalité vraie."
          },
          {
            type: "exemple",
            titre: "Un nombre à trouver",
            texte: "Dans x + 3 = 8, on cherche le nombre x. Le nombre 5 convient, car 5 + 3 = 8."
          },
          {
            type: "remarque",
            titre: "L’inconnue",
            texte: "La lettre x est appelée l’inconnue. On peut aussi utiliser une autre lettre, comme y ou n."
          }
        ]
      },

      {
        id: "maths5-ch9-lecon2",
        titre: "2. Vérifier si un nombre est une solution",
        blocs: [
          {
            type: "definition",
            titre: "Solution d’une équation",
            texte: "Une solution est une valeur de l’inconnue qui rend l’égalité vraie lorsqu’on la remplace dans les deux membres."
          },
          {
            type: "methode",
            titre: "Vérifier",
            texte: "1. Remplace la lettre par le nombre proposé dans chaque membre où elle apparaît. 2. Calcule les deux membres. 3. Compare les résultats."
          },
          {
            type: "exemple",
            titre: "Un nombre qui convient",
            texte: "Pour l’équation 2x + 1 = 9, essayons x = 4. À gauche : 2 × 4 + 1 = 9. À droite : 9. Les deux membres sont égaux : 4 est une solution."
          },
          {
            type: "exemple",
            titre: "Un nombre qui ne convient pas",
            texte: "Pour la même équation, essayons x = 3. À gauche : 2 × 3 + 1 = 7. À droite : 9. Comme 7 est différent de 9, 3 n’est pas une solution."
          },
          {
            type: "remarque",
            titre: "Vérifier ne remplace pas toujours résoudre",
            texte: "Vérifier un nombre permet de savoir s’il est une solution. Pour résoudre complètement une équation, il faut aussi déterminer toutes ses solutions dans l’ensemble de nombres considéré."
          }
        ]
      },

      {
        id: "maths5-ch9-lecon3",
        titre: "3. Conserver une égalité",
        blocs: [
          {
            type: "texte",
            titre: "L’image de la balance",
            texte: "Imagine une balance en équilibre. Si on ajoute le même poids des deux côtés, elle reste en équilibre. Une égalité se conserve aussi lorsqu’on effectue certaines opérations identiques sur ses deux membres."
          },
          {
            type: "regle",
            titre: "Ajouter ou soustraire",
            texte: "On peut ajouter un même nombre aux deux membres d’une égalité, ou soustraire un même nombre aux deux membres, sans changer son égalité."
          },
          {
            type: "exemple",
            titre: "Soustraire des deux côtés",
            texte: "Si x + 3 = 8, alors x + 3 − 3 = 8 − 3. On obtient x = 5."
          },
          {
            type: "regle",
            titre: "Multiplier ou diviser",
            texte: "On peut multiplier les deux membres par un même nombre non nul, ou les diviser par un même nombre non nul, tout en conservant les solutions de l’équation."
          },
          {
            type: "remarque",
            titre: "Pourquoi non nul ?",
            texte: "On ne peut pas diviser par zéro. Multiplier une équation par zéro transforme les deux membres en 0 : on perd alors des informations et on peut obtenir de fausses solutions."
          },
          {
            type: "methode",
            titre: "Le but",
            texte: "On choisit les opérations qui permettent d’isoler l’inconnue : on cherche à obtenir une égalité de la forme x = un nombre."
          }
        ]
      },

      {
        id: "maths5-ch9-lecon4",
        titre: "4. Résoudre des équations simples",
        blocs: [
          {
            type: "exemple",
            titre: "Une addition",
            texte: "Résolvons x + 7 = 12. On soustrait 7 aux deux membres : x + 7 − 7 = 12 − 7. Donc x = 5. Vérification : 5 + 7 = 12."
          },
          {
            type: "exemple",
            titre: "Une soustraction",
            texte: "Résolvons x − 4 = 9. On ajoute 4 aux deux membres : x − 4 + 4 = 9 + 4. Donc x = 13. Vérification : 13 − 4 = 9."
          },
          {
            type: "exemple",
            titre: "Une multiplication",
            texte: "Résolvons 3x = 15. On divise les deux membres par 3 : 3x ÷ 3 = 15 ÷ 3. Donc x = 5. Vérification : 3 × 5 = 15."
          },
          {
            type: "exemple",
            titre: "Une division",
            texte: "Résolvons x/4 = 6. On multiplie les deux membres par 4 : x = 24. Vérification : 24/4 = 6."
          },
          {
            type: "remarque",
            titre: "Utiliser les opérations inverses",
            texte: "Pour annuler une addition de 7, on soustrait 7. Pour annuler une multiplication par 3, on divise par 3. Dans une équation, on effectue l’opération choisie sur les deux membres."
          }
        ]
      },

      {
        id: "maths5-ch9-lecon5",
        titre: "5. Résoudre en plusieurs étapes",
        blocs: [
          {
            type: "methode",
            titre: "Une méthode",
            texte: "Pour une équation comme 2x + 3 = 11, on isole d’abord le terme en x, puis on isole x. On vérifie ensuite la solution dans l’équation de départ."
          },
          {
            type: "exemple",
            titre: "Deux opérations",
            texte: "2x + 3 = 11. On soustrait 3 des deux côtés : 2x = 8. On divise les deux côtés par 2 : x = 4. Vérification : 2 × 4 + 3 = 11."
          },
          {
            type: "exemple",
            titre: "Avec une soustraction",
            texte: "3x − 5 = 10. On ajoute 5 des deux côtés : 3x = 15. On divise par 3 : x = 5. Vérification : 3 × 5 − 5 = 10."
          },
          {
            type: "exemple",
            titre: "Avec une solution négative",
            texte: "2x + 7 = 3. On soustrait 7 : 2x = −4. On divise par 2 : x = −2. Vérification : 2 × (−2) + 7 = 3."
          },
          {
            type: "remarque",
            titre: "Écrire les étapes",
            texte: "Évite de changer un signe sans expliquer pourquoi. Écrire l’opération effectuée sur les deux membres aide à comprendre et à repérer les erreurs."
          }
        ]
      },

      {
        id: "maths5-ch9-lecon6",
        titre: "6. Mettre un problème en équation",
        blocs: [
          {
            type: "methode",
            titre: "Les étapes",
            texte: "1. Choisis une lettre pour la quantité inconnue. 2. Traduis les informations en une équation. 3. Résous l’équation. 4. Vérifie et réponds à la question avec une phrase."
          },
          {
            type: "exemple",
            titre: "Un nombre à trouver",
            texte: "Le triple d’un nombre augmenté de 2 vaut 17. Appelons x ce nombre. On écrit 3x + 2 = 17. En soustrayant 2 : 3x = 15. En divisant par 3 : x = 5. Vérification : 3 × 5 + 2 = 17. Le nombre cherché est 5."
          },
          {
            type: "exemple",
            titre: "Prix d’un cahier",
            texte: "Trois cahiers identiques et un stylo à 1 000 Ar coûtent ensemble 7 000 Ar. Soit x le prix d’un cahier en ariary. On écrit 3x + 1 000 = 7 000. Donc 3x = 6 000, puis x = 2 000. Un cahier coûte 2 000 Ar."
          },
          {
            type: "remarque",
            titre: "Tenir compte de la situation",
            texte: "Dans un problème concret, la solution doit avoir un sens. Par exemple, le nombre de cahiers doit être un entier positif ou nul. On précise aussi l’unité dans la réponse."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans l’équation x + 4 = 9, quelle est l’inconnue ?",
        correction: "L’inconnue est x : c’est le nombre que l’on cherche."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le nombre 3 est-il une solution de x + 5 = 8 ?",
        correction: "Oui. En remplaçant x par 3, on obtient 3 + 5 = 8. L’égalité est vraie."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le nombre 2 est-il une solution de 3x = 9 ?",
        correction: "Non. Pour x = 2, 3x = 3 × 2 = 6, et 6 est différent de 9."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résous : x + 6 = 10.",
        correction: "On soustrait 6 aux deux membres : x = 10 − 6 = 4. Vérification : 4 + 6 = 10."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous : x − 5 = 8.",
        correction: "On ajoute 5 aux deux membres : x = 8 + 5 = 13. Vérification : 13 − 5 = 8."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous : 4x = 20.",
        correction: "On divise les deux membres par 4 : x = 20 ÷ 4 = 5. Vérification : 4 × 5 = 20."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous : x/3 = 7.",
        correction: "On multiplie les deux membres par 3 : x = 21. Vérification : 21/3 = 7."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résous : x + 4 = −2.",
        correction: "On soustrait 4 aux deux membres : x = −2 − 4 = −6. Vérification : −6 + 4 = −2."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Résous : 2x + 5 = 13.",
        correction: "On soustrait 5 : 2x = 8. On divise par 2 : x = 4. Vérification : 2 × 4 + 5 = 13."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Résous : 3x − 2 = 10.",
        correction: "On ajoute 2 : 3x = 12. On divise par 3 : x = 4. Vérification : 3 × 4 − 2 = 10."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Résous : 5x + 3 = −7.",
        correction: "On soustrait 3 : 5x = −10. On divise par 5 : x = −2. Vérification : 5 × (−2) + 3 = −7."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Le nombre −3 est-il une solution de 2x + 4 = −2 ?",
        correction: "Oui. Pour x = −3, 2x + 4 = 2 × (−3) + 4 = −6 + 4 = −2."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un nombre augmenté de 8 vaut 15. Écris une équation et trouve ce nombre.",
        correction: "Soit x le nombre. On écrit x + 8 = 15. Donc x = 15 − 8 = 7. Le nombre cherché est 7."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Le double d’un nombre diminué de 3 vaut 11. Trouve ce nombre à l’aide d’une équation.",
        correction: "Soit x le nombre. On écrit 2x − 3 = 11. Alors 2x = 14, puis x = 7. Vérification : 2 × 7 − 3 = 11."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Deux cahiers identiques et un stylo à 1 000 Ar coûtent 5 000 Ar. Quel est le prix d’un cahier ?",
        correction: "Soit x le prix d’un cahier en ariary. 2x + 1 000 = 5 000, donc 2x = 4 000 et x = 2 000. Un cahier coûte 2 000 Ar."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève résout 2x + 3 = 11 et écrit 2x = 11 + 3. Explique son erreur et corrige.",
        correction: "Pour annuler l’addition de 3 à gauche, il faut soustraire 3 aux deux membres. On obtient 2x = 11 − 3 = 8, puis x = 4."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Résous 4x − 7 = 5, puis vérifie ta réponse.",
        correction: "On ajoute 7 aux deux membres : 4x = 12. On divise par 4 : x = 3. Vérification : 4 × 3 − 7 = 12 − 7 = 5."
      }
    ]
  }
]);
