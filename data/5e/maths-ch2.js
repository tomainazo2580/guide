enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch2",
    titre: "Chapitre 2 : Fractions équivalentes et simplification",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch2-lecon1",
        titre: "1. Comprendre une fraction",
        blocs: [
          {
            type: "definition",
            titre: "Une fraction",
            texte: "Une fraction s’écrit sous la forme a/b, avec b différent de zéro. Le nombre a est le numérateur et le nombre b est le dénominateur."
          },
          {
            type: "texte",
            titre: "Partager une unité",
            texte: "Pour comprendre 3/4, imaginons une unité partagée en 4 parts égales. Le dénominateur 4 indique le nombre de parts égales et le numérateur 3 indique que l’on prend 3 de ces parts."
          },
          {
            type: "schema",
            titre: "Trois quarts d’une unité",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 115' role='img' aria-label='Une bande partagée en quatre parts égales, dont trois sont colorées'><rect x='10' y='15' width='400' height='45' fill='white' stroke='#333' stroke-width='2'/><rect x='11' y='16' width='299' height='43' fill='#74b9ff'/><path d='M110 15v45 M210 15v45 M310 15v45' stroke='#333' stroke-width='2'/><text x='210' y='95' text-anchor='middle' font-size='19'>3 parts colorées sur 4 : 3/4</text></svg>",
            legende: "Les quatre parts sont égales. Trois sont colorées."
          },
          {
            type: "exemple",
            titre: "Une fraction peut dépasser 1",
            texte: "7/4 signifie 7 quarts. Comme 4/4 = 1, on a 7/4 = 4/4 + 3/4 = 1 + 3/4. Une fraction n’est donc pas toujours inférieure à 1."
          },
          {
            type: "remarque",
            titre: "Dénominateur non nul",
            texte: "On ne peut pas diviser par zéro : une écriture comme 3/0 n’est pas définie."
          }
        ]
      },

      {
        id: "maths5-ch2-lecon2",
        titre: "2. Des fractions différentes, une même valeur",
        blocs: [
          {
            type: "definition",
            titre: "Fractions équivalentes",
            texte: "Deux fractions sont équivalentes lorsqu’elles représentent le même nombre. Par exemple, 1/2 et 2/4 sont deux écritures différentes de la même quantité."
          },
          {
            type: "schema",
            titre: "Une moitié et deux quarts",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 155' role='img' aria-label='Deux bandes de même longueur : une moitié et deux quarts sont colorés'><rect x='20' y='15' width='400' height='40' fill='white' stroke='#333' stroke-width='2'/><rect x='21' y='16' width='199' height='38' fill='#74b9ff'/><path d='M220 15v40' stroke='#333' stroke-width='2'/><text x='220' y='78' text-anchor='middle' font-size='18'>1/2</text><rect x='20' y='90' width='400' height='40' fill='white' stroke='#333' stroke-width='2'/><rect x='21' y='91' width='199' height='38' fill='#74b9ff'/><path d='M120 90v40 M220 90v40 M320 90v40' stroke='#333' stroke-width='2'/><text x='10' y='118' text-anchor='end' font-size='16'></text><text x='220' y='151' text-anchor='middle' font-size='18'>2/4</text></svg>",
            legende: "Les bandes ont la même longueur et la même quantité est colorée : 1/2 = 2/4."
          },
          {
            type: "regle",
            titre: "Multiplier le haut et le bas",
            texte: "On ne change pas la valeur d’une fraction en multipliant son numérateur et son dénominateur par un même nombre non nul."
          },
          {
            type: "exemple",
            titre: "Fabriquer des fractions équivalentes",
            texte: "1/2 = (1 × 2)/(2 × 2) = 2/4. De même, 3/5 = (3 × 4)/(5 × 4) = 12/20."
          },
          {
            type: "remarque",
            titre: "Multiplier les deux",
            texte: "Il faut multiplier le numérateur et le dénominateur par le même nombre. Par exemple, 3/5 n’est pas égal à 6/5 : seul le numérateur a été multiplié par 2."
          },
          {
            type: "exemple",
            titre: "Compléter une égalité",
            texte: "Pour compléter 4/7 = …/21, on remarque que 7 × 3 = 21. On multiplie donc aussi le numérateur par 3 : 4 × 3 = 12. Ainsi, 4/7 = 12/21."
          }
        ]
      },

      {
        id: "maths5-ch2-lecon3",
        titre: "3. Simplifier une fraction",
        blocs: [
          {
            type: "definition",
            titre: "Simplifier",
            texte: "Simplifier une fraction, c’est l’écrire avec un numérateur et un dénominateur entiers plus petits, tout en gardant la même valeur."
          },
          {
            type: "regle",
            titre: "Diviser le haut et le bas",
            texte: "On ne change pas la valeur d’une fraction en divisant son numérateur et son dénominateur par un même nombre non nul. Pour simplifier avec des nombres entiers, on choisit un diviseur commun au numérateur et au dénominateur."
          },
          {
            type: "exemple",
            titre: "Une simplification",
            texte: "Dans 12/18, 12 et 18 sont tous les deux divisibles par 2. Donc 12/18 = (12 ÷ 2)/(18 ÷ 2) = 6/9. On peut encore diviser par 3 : 6/9 = 2/3."
          },
          {
            type: "methode",
            titre: "Comment faire ?",
            texte: "1. Chercher un nombre supérieur à 1 qui divise à la fois le numérateur et le dénominateur. 2. Diviser les deux par ce nombre. 3. Recommencer si les deux résultats ont encore un diviseur commun supérieur à 1."
          },
          {
            type: "exemple",
            titre: "Simplifier en une seule fois",
            texte: "On peut aussi diviser directement 12 et 18 par 6 : 12/18 = (12 ÷ 6)/(18 ÷ 6) = 2/3."
          },
          {
            type: "remarque",
            titre: "Erreur à éviter",
            texte: "On simplifie des facteurs communs, pas des chiffres pris séparément. Par exemple, 16/64 n’est pas égal à 1/4 parce qu’on aurait « barré les 6 » : l’égalité est vraie parce que 16 et 64 sont tous les deux divisibles par 16."
          }
        ]
      },

      {
        id: "maths5-ch2-lecon4",
        titre: "4. Reconnaître une fraction irréductible",
        blocs: [
          {
            type: "definition",
            titre: "Fraction irréductible",
            texte: "Une fraction à numérateur et dénominateur entiers est irréductible lorsqu’on ne peut plus les diviser tous les deux par un même entier supérieur à 1."
          },
          {
            type: "exemple",
            titre: "Un exemple",
            texte: "2/3 est irréductible : 2 et 3 n’ont aucun diviseur commun supérieur à 1. En revanche, 6/9 n’est pas irréductible : les deux nombres sont divisibles par 3."
          },
          {
            type: "tableau",
            titre: "Quelques critères de divisibilité utiles",
            entetes: ["Divisible par", "Critère", "Exemple"],
            lignes: [
              ["2", "Le chiffre des unités est 0, 2, 4, 6 ou 8.", "24 est divisible par 2."],
              ["3", "La somme des chiffres est divisible par 3.", "123 : 1 + 2 + 3 = 6."],
              ["5", "Le chiffre des unités est 0 ou 5.", "45 est divisible par 5."],
              ["10", "Le chiffre des unités est 0.", "70 est divisible par 10."]
            ]
          },
          {
            type: "remarque",
            titre: "Ces critères ne suffisent pas toujours",
            texte: "Un diviseur commun peut être un autre nombre, comme 7. Par exemple, 14/21 se simplifie par 7 et donne 2/3, même si 14 et 21 ne sont pas tous les deux divisibles par 2, 3 ou 5."
          },
          {
            type: "methode",
            titre: "Vérifier avec les diviseurs",
            texte: "Pour vérifier que 8/15 est irréductible, on peut lister les diviseurs de 8 : 1, 2, 4 et 8. Aucun de ceux qui sont supérieurs à 1 ne divise 15. La fraction est donc irréductible."
          }
        ]
      },

      {
        id: "maths5-ch2-lecon5",
        titre: "5. Comparer des fractions simples",
        blocs: [
          {
            type: "regle",
            titre: "Même dénominateur positif",
            texte: "Lorsque deux fractions ont le même dénominateur positif, la plus grande est celle qui a le plus grand numérateur."
          },
          {
            type: "exemple",
            titre: "Comparer des parts de même taille",
            texte: "3/7 < 5/7 : trois septièmes sont moins que cinq septièmes."
          },
          {
            type: "methode",
            titre: "Se ramener au même dénominateur",
            texte: "Pour comparer 2/3 et 3/4, on cherche des fractions équivalentes ayant un même dénominateur. Ici, 12 convient : 2/3 = 8/12 et 3/4 = 9/12. Comme 8/12 < 9/12, alors 2/3 < 3/4."
          },
          {
            type: "exemple",
            titre: "Comparer à 1",
            texte: "Pour une fraction positive : si le numérateur est plus petit que le dénominateur, la fraction est inférieure à 1 ; s’il lui est égal, elle vaut 1 ; s’il est plus grand, elle est supérieure à 1. Ainsi, 3/5 < 1, 5/5 = 1 et 7/5 > 1."
          },
          {
            type: "remarque",
            titre: "Attention aux dénominateurs",
            texte: "On ne compare pas directement les numérateurs si les dénominateurs sont différents. Par exemple, 3/4 est supérieur à 4/8, car 3/4 = 6/8."
          }
        ]
      },

      {
        id: "maths5-ch2-lecon6",
        titre: "6. Une fraction comme quotient",
        blocs: [
          {
            type: "definition",
            titre: "Fraction et division",
            texte: "La fraction a/b représente aussi le quotient de a par b, à condition que b soit différent de zéro. Ainsi, 3/4 = 3 ÷ 4."
          },
          {
            type: "exemple",
            titre: "Obtenir une écriture décimale",
            texte: "3 ÷ 4 = 0,75. Donc 3/4 = 0,75. De même, 7/2 = 7 ÷ 2 = 3,5."
          },
          {
            type: "remarque",
            titre: "Toutes les fractions ne sont pas décimales",
            texte: "Certaines fractions n’ont pas d’écriture décimale finie. Par exemple, 1/3 = 0,333… : les chiffres 3 continuent sans fin. On peut utiliser 0,33 comme valeur approchée, mais 1/3 n’est pas exactement égal à 0,33."
          },
          {
            type: "exemple",
            titre: "Partager une quantité",
            texte: "Trois litres d’eau sont partagés également entre 4 récipients. Chaque récipient reçoit 3/4 de litre, soit 0,75 L."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans la fraction 5/8, donne le numérateur et le dénominateur.",
        correction: "Le numérateur est 5 et le dénominateur est 8."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une bande est partagée en 6 parts égales. On en colorie 5. Quelle fraction de la bande est coloriée ?",
        correction: "La fraction coloriée est 5/6 : 5 parts sur 6 parts égales."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Complète : a) 1/3 = …/6 ; b) 2/5 = …/15.",
        correction: "a) 1/3 = 2/6 : on multiplie le haut et le bas par 2. b) 2/5 = 6/15 : on multiplie le haut et le bas par 3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris 9/4 comme la somme d’un entier et d’une fraction inférieure à 1.",
        correction: "9/4 = 8/4 + 1/4 = 2 + 1/4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Simplifie 8/12 en divisant le numérateur et le dénominateur par 4.",
        correction: "8/12 = (8 ÷ 4)/(12 ÷ 4) = 2/3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Simplifie 15/25 jusqu’à obtenir une fraction irréductible.",
        correction: "15 et 25 sont divisibles par 5 : 15/25 = 3/5. La fraction 3/5 est irréductible."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète : a) 6/9 = 2/… ; b) 4/7 = 12/… .",
        correction: "a) 6/9 = 2/3 : on divise le haut et le bas par 3. b) 4/7 = 12/21 : on multiplie le haut et le bas par 3."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Les fractions 10/15 et 2/3 sont-elles égales ? Justifie.",
        correction: "Oui. En divisant 10 et 15 par 5, on obtient 10/15 = 2/3."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Parmi 7/12 et 8/12, quelle est la plus grande fraction ? Explique.",
        correction: "8/12 > 7/12 : les dénominateurs sont égaux et positifs, et 8 > 7."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Compare 3/4 et 5/8 en les écrivant avec le même dénominateur.",
        correction: "3/4 = 6/8. Comme 6/8 > 5/8, alors 3/4 > 5/8."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Écris sous forme décimale : a) 1/2 ; b) 3/4 ; c) 7/5.",
        correction: "a) 1/2 = 0,5 ; b) 3/4 = 0,75 ; c) 7/5 = 1,4."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Dans une classe, 12 élèves sur 30 participent à un club. Quelle fraction de la classe cela représente-t-il ? Simplifie-la.",
        correction: "La fraction est 12/30. En divisant le numérateur et le dénominateur par 6, on obtient 12/30 = 2/5."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Range dans l’ordre croissant : 1/2 ; 3/4 ; 5/8.",
        correction: "Avec le dénominateur 8 : 1/2 = 4/8 et 3/4 = 6/8. Donc 1/2 < 5/8 < 3/4."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève écrit : « 6/10 = 3/10 parce que 6 ÷ 2 = 3. » Explique son erreur et corrige.",
        correction: "Il a divisé seulement le numérateur. Il faut aussi diviser le dénominateur par 2 : 6/10 = 3/5."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Une bouteille contient 3/4 de litre d’eau. Une autre contient 2/3 de litre. Laquelle contient le plus d’eau ?",
        correction: "On utilise le dénominateur 12 : 3/4 = 9/12 et 2/3 = 8/12. Comme 9/12 > 8/12, la première bouteille contient plus d’eau."
      }
    ]
  }
]);
