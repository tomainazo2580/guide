enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch1",
    titre: "Chapitre 1 : Les nombres décimaux",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch1-lecon1",
        titre: "1. Comprendre les nombres décimaux",
        blocs: [
          {
            type: "texte",
            titre: "À quoi servent les nombres décimaux ?",
            texte: "Les nombres décimaux permettent d’exprimer des quantités qui ne sont pas forcément entières. Par exemple, une longueur de 2,5 m correspond à 2 m et un demi-mètre."
          },
          {
            type: "definition",
            titre: "Nombre décimal",
            texte: "Un nombre décimal est un nombre qui peut s’écrire sous la forme d’une fraction dont le dénominateur est 1, 10, 100, 1 000… Exemples : 7 = 7/1 ; 2,5 = 25/10 ; 3,47 = 347/100."
          },
          {
            type: "texte",
            titre: "Partie entière et partie décimale",
            texte: "Dans l’écriture 18,34, le nombre 18 est la partie entière et 34 est la partie décimale. La virgule sépare les unités des dixièmes."
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "La partie décimale 34 ne représente pas 34 unités : dans 18,34, elle représente 34 centièmes, c’est-à-dire 34/100."
          },
          {
            type: "exemple",
            titre: "Lire un nombre",
            texte: "On peut lire 18,34 « dix-huit virgule trente-quatre » ou « dix-huit unités et trente-quatre centièmes »."
          }
        ]
      },

      {
        id: "maths5-ch1-lecon2",
        titre: "2. La valeur des chiffres",
        blocs: [
          {
            type: "texte",
            titre: "Chaque position a une valeur",
            texte: "Dans un nombre, la valeur d’un chiffre dépend de sa position. À gauche de la virgule se trouvent les unités, les dizaines, les centaines… À droite se trouvent les dixièmes, les centièmes, les millièmes…"
          },
          {
            type: "tableau",
            titre: "Exemple : 4 582,367",
            entetes: [
              "Milliers",
              "Centaines",
              "Dizaines",
              "Unités",
              "Dixièmes",
              "Centièmes",
              "Millièmes"
            ],
            lignes: [
              ["4", "5", "8", "2", "3", "6", "7"]
            ]
          },
          {
            type: "exemple",
            titre: "Interpréter les chiffres",
            texte: "Dans 4 582,367 : 8 est le chiffre des dizaines ; 2 est le chiffre des unités ; 3 est le chiffre des dixièmes ; 6 est le chiffre des centièmes ; 7 est le chiffre des millièmes."
          },
          {
            type: "regle",
            titre: "Dix fois plus, dix fois moins",
            texte: "Quand on se déplace d’un rang vers la gauche dans le tableau, la valeur est multipliée par 10. Quand on se déplace d’un rang vers la droite, elle est divisée par 10. Ainsi, 1 unité = 10 dixièmes et 1 dixième = 10 centièmes."
          },
          {
            type: "remarque",
            titre: "Chiffre et nombre de dizaines",
            texte: "Dans 582, le chiffre des dizaines est 8, mais le nombre de dizaines entières est 58 : 582 = 58 × 10 + 2."
          }
        ]
      },

      {
        id: "maths5-ch1-lecon3",
        titre: "3. Décomposer un nombre décimal",
        blocs: [
          {
            type: "definition",
            titre: "Décomposer",
            texte: "Décomposer un nombre, c’est l’écrire comme une somme ou une différence de nombres plus simples, sans changer sa valeur."
          },
          {
            type: "exemple",
            titre: "Décomposition par rangs",
            texte: "18,34 = 10 + 8 + 0,3 + 0,04. On peut aussi écrire : 18,34 = 1 × 10 + 8 × 1 + 3 × 0,1 + 4 × 0,01."
          },
          {
            type: "exemple",
            titre: "Avec des fractions décimales",
            texte: "18,34 = 18 + 3/10 + 4/100. Comme 3/10 = 30/100, on obtient aussi : 18,34 = 18 + 34/100."
          },
          {
            type: "exemple",
            titre: "Une autre décomposition",
            texte: "18,34 = 19 − 0,66 = 19 − 66/100. En effet, 0,66 est ce qu’il manque à 18,34 pour atteindre 19."
          },
          {
            type: "methode",
            titre: "Décomposer pas à pas",
            texte: "Pour décomposer 5,072 : 1. La partie entière est 5. 2. Il y a 0 dixième, 7 centièmes et 2 millièmes. 3. On écrit : 5,072 = 5 + 0,07 + 0,002 = 5 + 7/100 + 2/1 000."
          },
          {
            type: "remarque",
            titre: "Le zéro a son importance",
            texte: "Dans 5,072, le zéro indique qu’il n’y a pas de dixième. Sans lui, on obtiendrait 5,72, qui est un autre nombre."
          }
        ]
      },

      {
        id: "maths5-ch1-lecon4",
        titre: "4. Écritures égales d’un nombre décimal",
        blocs: [
          {
            type: "regle",
            titre: "Zéros à droite de la partie décimale",
            texte: "On peut ajouter ou supprimer des zéros à la fin de la partie décimale sans changer le nombre : 3,5 = 3,50 = 3,500. Cela permet notamment de comparer des nombres plus facilement."
          },
          {
            type: "exemple",
            titre: "Pourquoi ?",
            texte: "5 dixièmes représentent la même quantité que 50 centièmes. Donc 3 + 5/10 = 3 + 50/100, soit 3,5 = 3,50."
          },
          {
            type: "remarque",
            titre: "Ne pas supprimer un zéro n’importe où",
            texte: "On ne peut pas supprimer un zéro situé entre la virgule et un autre chiffre non nul. Par exemple, 2,05 n’est pas égal à 2,5 : 2,05 représente 2 unités et 5 centièmes, tandis que 2,5 représente 2 unités et 5 dixièmes."
          },
          {
            type: "texte",
            titre: "Écriture fractionnaire",
            texte: "Pour écrire un décimal sous forme de fraction décimale, on peut utiliser un dénominateur 10, 100, 1 000… selon le nombre de chiffres après la virgule."
          },
          {
            type: "exemple",
            titre: "Passer d’une écriture à l’autre",
            texte: "4,7 = 47/10 ; 0,36 = 36/100 ; 12,045 = 12 045/1 000. Dans l’autre sens : 83/100 = 0,83 et 6/1 000 = 0,006."
          },
          {
            type: "remarque",
            titre: "Attention à la lecture",
            texte: "0,6 = 6/10, mais 0,06 = 6/100. Le nombre de chiffres après la virgule change la valeur."
          }
        ]
      },

      {
        id: "maths5-ch1-lecon5",
        titre: "5. Comparer et ranger des nombres décimaux",
        blocs: [
          {
            type: "texte",
            titre: "Les signes",
            texte: "Le signe < signifie « est inférieur à » et le signe > signifie « est supérieur à ». Par exemple, 3 < 5 signifie que 3 est plus petit que 5."
          },
          {
            type: "methode",
            titre: "Comparer deux nombres positifs",
            texte: "1. Comparer d’abord les parties entières. 2. Si elles sont égales, comparer les dixièmes. 3. S’ils sont égaux, comparer les centièmes, puis les millièmes si nécessaire. On peut ajouter des zéros à droite pour avoir autant de chiffres après la virgule."
          },
          {
            type: "exemple",
            titre: "Première comparaison",
            texte: "Comparer 7,4 et 7,38. Les parties entières sont égales. On écrit 7,4 = 7,40. Comme 40 centièmes sont plus grands que 38 centièmes, 7,4 > 7,38."
          },
          {
            type: "exemple",
            titre: "Deuxième comparaison",
            texte: "Comparer 12,09 et 12,1. On écrit 12,1 = 12,10. Comme 9 centièmes sont plus petits que 10 centièmes, 12,09 < 12,1."
          },
          {
            type: "remarque",
            titre: "Piège fréquent",
            texte: "Il ne suffit pas de comparer les chiffres après la virgule comme des nombres entiers. Par exemple, 0,7 > 0,65, car 0,7 = 0,70."
          },
          {
            type: "definition",
            titre: "Ranger",
            texte: "Ranger dans l’ordre croissant signifie aller du plus petit au plus grand. Ranger dans l’ordre décroissant signifie aller du plus grand au plus petit."
          },
          {
            type: "exemple",
            titre: "Rangement",
            texte: "Dans l’ordre croissant : 2,08 < 2,3 < 2,35 < 3. On peut écrire 2,3 sous la forme 2,30 pour le comparer à 2,35."
          }
        ]
      },

      {
        id: "maths5-ch1-lecon6",
        titre: "6. Encadrer et placer un nombre",
        blocs: [
          {
            type: "definition",
            titre: "Encadrer",
            texte: "Encadrer un nombre consiste à trouver un nombre plus petit et un nombre plus grand. Par exemple : 4 < 4,37 < 5."
          },
          {
            type: "exemple",
            titre: "Encadrer à l’unité, au dixième et au centième",
            texte: "Pour 4,376 : à l’unité, 4 < 4,376 < 5 ; au dixième, 4,3 < 4,376 < 4,4 ; au centième, 4,37 < 4,376 < 4,38."
          },
          {
            type: "methode",
            titre: "Placer 2,4 sur une droite graduée",
            texte: "1. Repérer les graduations 2 et 3. 2. Partager l’intervalle entre 2 et 3 en 10 parts égales : chaque part vaut 0,1. 3. À partir de 2, avancer de 4 parts : on arrive à 2,4."
          },
          {
            type: "schema",
            titre: "De 2 à 3 : des dixièmes",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 105' role='img' aria-label='Droite graduée de 2 à 3, avec 2 virgule 4 marqué'><line x1='20' y1='45' x2='420' y2='45' stroke='#333' stroke-width='2'/><path d='M20 35v20 M60 39v12 M100 39v12 M140 39v12 M180 35v20 M220 39v12 M260 39v12 M300 39v12 M340 39v12 M380 39v12 M420 35v20' stroke='#333' stroke-width='2'/><circle cx='180' cy='45' r='6' fill='#e05252'/><text x='20' y='82' text-anchor='middle' font-size='18'>2</text><text x='180' y='82' text-anchor='middle' font-size='18' fill='#b32626'>2,4</text><text x='420' y='82' text-anchor='middle' font-size='18'>3</text></svg>",
            legende: "Entre 2 et 3, chaque petit intervalle vaut un dixième. Le point rouge indique 2,4."
          },
          {
            type: "remarque",
            titre: "Bien lire les graduations",
            texte: "Avant de placer un nombre, il faut déterminer la valeur de chaque intervalle : toutes les droites graduées ne sont pas partagées en dixièmes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans le nombre 46,375, donne le chiffre des unités, celui des dixièmes et celui des centièmes.",
        correction: "Le chiffre des unités est 6, celui des dixièmes est 3 et celui des centièmes est 7."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans 208,041, quel est le chiffre des dizaines ? Quel est le chiffre des millièmes ?",
        correction: "Le chiffre des dizaines est 0. Le chiffre des millièmes est 1."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris sous forme décimale : a) 7 + 3/10 ; b) 5 + 8/100 ; c) 6/1 000.",
        correction: "a) 7,3 ; b) 5,08 ; c) 0,006."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écris sous forme d’une fraction de dénominateur 10, 100 ou 1 000 : a) 2,7 ; b) 0,45 ; c) 3,062.",
        correction: "a) 27/10 ; b) 45/100 ; c) 3 062/1 000."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Décompose 35,64 en faisant apparaître les dizaines, les unités, les dixièmes et les centièmes.",
        correction: "35,64 = 30 + 5 + 0,6 + 0,04. On peut aussi écrire 35,64 = 30 + 5 + 6/10 + 4/100."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète : a) 12,47 = 12 + …/100 ; b) 12,47 = 13 − …/100.",
        correction: "a) 12,47 = 12 + 47/100. b) 12,47 = 13 − 53/100, car il manque 0,53 à 12,47 pour atteindre 13."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Parmi ces écritures, lesquelles sont égales à 4,5 : 4,05 ; 4,50 ; 4,500 ; 4,005 ?",
        correction: "4,50 et 4,500 sont égaux à 4,5. Les zéros ajoutés à la fin de la partie décimale ne changent pas la valeur."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète avec <, > ou = : a) 6,3 … 6,30 ; b) 8,09 … 8,9 ; c) 5,7 … 5,68.",
        correction: "a) 6,3 = 6,30. b) 8,09 < 8,9, car 8,9 = 8,90. c) 5,7 > 5,68, car 5,7 = 5,70."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Range dans l’ordre croissant : 3,4 ; 3,04 ; 3,44 ; 3,14.",
        correction: "3,04 < 3,14 < 3,4 < 3,44. Pour comparer, on peut écrire 3,4 sous la forme 3,40."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Encadre 7,286 entre deux entiers consécutifs, puis entre deux dixièmes consécutifs.",
        correction: "Entre deux entiers : 7 < 7,286 < 8. Entre deux dixièmes : 7,2 < 7,286 < 7,3."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Sur une droite graduée, l’intervalle entre 4 et 5 est partagé en 10 parts égales. Quelle est la valeur d’une part ? Quelle graduation atteint-on après 7 parts en partant de 4 ?",
        correction: "Une part vaut 0,1, soit un dixième. Après 7 parts, on atteint 4 + 0,7 = 4,7."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Une corde mesure 3,75 m. Une autre mesure 3,8 m. Quelle corde est la plus longue ? De combien ?",
        correction: "On écrit 3,8 m = 3,80 m. La deuxième corde est la plus longue. La différence est 3,80 − 3,75 = 0,05 m, soit 5 cm."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Trouve un nombre décimal ayant trois chiffres après la virgule, compris entre 2,46 et 2,47.",
        correction: "Plusieurs réponses sont possibles. Par exemple : 2,465. En effet, 2,460 < 2,465 < 2,470."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "On cherche un nombre de la forme 6,□4. Son chiffre des dixièmes est supérieur à 2 et inférieur à 5. Donne toutes les possibilités.",
        correction: "Le chiffre des dixièmes peut être 3 ou 4. Les deux nombres possibles sont donc 6,34 et 6,44."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève affirme : « 5,18 est plus grand que 5,7 parce que 18 est plus grand que 7. » Explique son erreur et donne la bonne comparaison.",
        correction: "Il faut comparer les chiffres de même rang. Or 5,7 = 5,70. Comme 18 centièmes sont inférieurs à 70 centièmes, on a 5,18 < 5,7."
      }
    ]
  }
]);
