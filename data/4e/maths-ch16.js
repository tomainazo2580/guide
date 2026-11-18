// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 16 : Effectifs, fréquences et moyenne

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch16",
    titre: "Chapitre 16 : Effectifs, fréquences et moyenne",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch16-effectifs",
        titre: "Calculer les effectifs",
        blocs: [
          {
            type: "definition",
            titre: "Effectif d'une valeur",
            texte: "L'effectif d'une valeur est le nombre de fois où cette valeur apparaît dans la série statistique."
          },
          {
            type: "definition",
            titre: "Effectif total",
            texte: "L'effectif total est le nombre total de données étudiées. On l'obtient en additionnant les effectifs de toutes les valeurs."
          },
          {
            type: "exemple",
            titre: "Nombre de livres lus",
            texte: "On relève le nombre de livres lus par 10 élèves :\n0 ; 1 ; 2 ; 1 ; 0 ; 2 ; 1 ; 3 ; 1 ; 2.\n\n0 apparaît 2 fois ; 1 apparaît 4 fois ; 2 apparaît 3 fois ; 3 apparaît 1 fois.\nL'effectif total est 2 + 4 + 3 + 1 = 10."
          },
          {
            type: "tableau",
            titre: "Tableau des effectifs",
            entetes: ["Nombre de livres", "0", "1", "2", "3", "Total"],
            lignes: [
              ["Effectif", "2", "4", "3", "1", "10"]
            ]
          }
        ]
      },

      {
        id: "m4-ch16-frequences",
        titre: "Calculer les fréquences",
        blocs: [
          {
            type: "definition",
            titre: "Fréquence d'une valeur",
            texte: "La fréquence d'une valeur est la proportion de l'effectif total correspondant à cette valeur.\nLorsque l'effectif total est non nul :\nFréquence = effectif de la valeur ÷ effectif total."
          },
          {
            type: "exemple",
            titre: "Fréquence de 1 livre",
            texte: "Dans le tableau précédent, 4 élèves sur 10 ont lu 1 livre.\nLa fréquence de la valeur 1 est 4 ÷ 10 = 0,4.\nEn pourcentage : 0,4 × 100 = 40 %."
          },
          {
            type: "tableau",
            titre: "Effectifs et fréquences",
            entetes: ["Nombre de livres", "Effectif", "Fréquence", "Pourcentage"],
            lignes: [
              ["0", "2", "0,2", "20 %"],
              ["1", "4", "0,4", "40 %"],
              ["2", "3", "0,3", "30 %"],
              ["3", "1", "0,1", "10 %"],
              ["Total", "10", "1", "100 %"]
            ]
          },
          {
            type: "regle",
            titre: "Somme des fréquences",
            texte: "Lorsque toutes les valeurs de la série sont prises en compte, la somme de leurs fréquences est 1. Exprimée en pourcentage, cette somme est 100 %.\nSi les fréquences sont arrondies, leur somme peut être légèrement différente."
          },
          {
            type: "methode",
            titre: "Passer à un pourcentage",
            texte: "Pour exprimer une fréquence sous forme de pourcentage, multiplie-la par 100.\nPar exemple : 0,3 × 100 = 30, donc 0,3 correspond à 30 %."
          }
        ]
      },

      {
        id: "m4-ch16-moyenne",
        titre: "Calculer une moyenne",
        blocs: [
          {
            type: "definition",
            titre: "Moyenne d'une série numérique",
            texte: "La moyenne d'une série numérique est la somme de toutes les valeurs divisée par l'effectif total, à condition que celui-ci soit non nul."
          },
          {
            type: "exemple",
            titre: "Quelques notes",
            texte: "Un élève obtient les notes 10, 12, 14 et 16, toutes de même importance.\nSomme : 10 + 12 + 14 + 16 = 52.\nEffectif : 4 notes.\nMoyenne : 52 ÷ 4 = 13."
          },
          {
            type: "methode",
            titre: "Avec un tableau d'effectifs",
            texte: "Lorsqu'une même valeur apparaît plusieurs fois :\n1. Multiplie chaque valeur par son effectif.\n2. Additionne les produits obtenus.\n3. Divise cette somme par l'effectif total."
          },
          {
            type: "exemple",
            titre: "Moyenne des livres lus",
            texte: "Dans le tableau : 0 livre pour 2 élèves, 1 livre pour 4 élèves, 2 livres pour 3 élèves et 3 livres pour 1 élève.\nNombre total de livres : 0 × 2 + 1 × 4 + 2 × 3 + 3 × 1 = 13.\nMoyenne : 13 ÷ 10 = 1,3 livre par élève."
          },
          {
            type: "remarque",
            titre: "Interpréter la moyenne",
            texte: "La moyenne n'est pas nécessairement une valeur observée. Une moyenne de 1,3 livre par élève ne signifie pas qu'un élève a lu exactement 1,3 livre."
          },
          {
            type: "remarque",
            titre: "Une moyenne pour des nombres",
            texte: "On calcule une moyenne pour un caractère quantitatif. Calculer la moyenne de catégories comme « à pied » ou « à vélo » n'a pas de sens."
          }
        ]
      },

      {
        id: "m4-ch16-coefficients",
        titre: "Découvrir la moyenne pondérée",
        blocs: [
          {
            type: "definition",
            titre: "Des valeurs qui n'ont pas la même importance",
            texte: "Dans une moyenne pondérée, chaque valeur est associée à un coefficient qui indique son poids dans le calcul."
          },
          {
            type: "methode",
            titre: "Calculer une moyenne pondérée",
            texte: "1. Multiplie chaque valeur par son coefficient.\n2. Additionne les produits.\n3. Additionne les coefficients.\n4. Divise la somme des produits par la somme des coefficients, si celle-ci est non nulle."
          },
          {
            type: "exemple",
            titre: "Deux notes",
            texte: "Une note de 12 a un coefficient 2 et une note de 15 a un coefficient 1.\nSomme pondérée : 12 × 2 + 15 × 1 = 39.\nSomme des coefficients : 2 + 1 = 3.\nMoyenne : 39 ÷ 3 = 13."
          },
          {
            type: "remarque",
            titre: "Rôle des coefficients",
            texte: "Dans cet exemple, la note de coefficient 2 compte deux fois plus que celle de coefficient 1. Les coefficients utilisés ici sont positifs."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans une série, la valeur 1 apparaît 3 fois, la valeur 2 apparaît 5 fois et la valeur 3 apparaît 2 fois.\nQuel est l'effectif total ?",
        correction: "Effectif total : 3 + 5 + 2 = 10."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Sur 20 élèves, 5 viennent à vélo. Quelle est la fréquence des élèves venant à vélo ? Donne-la aussi en pourcentage.",
        correction: "Fréquence : 5 ÷ 20 = 0,25.\nEn pourcentage : 0,25 × 100 = 25 %. La fréquence est donc 0,25, soit 25 %."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule la moyenne des nombres 8, 10, 12 et 14.",
        correction: "Somme : 8 + 10 + 12 + 14 = 44.\nIl y a 4 nombres : moyenne = 44 ÷ 4 = 11."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans une classe de 25 élèves, 10 préfèrent le football, 5 le basket et 10 la course.\nCalcule la fréquence de chaque préférence, en pourcentage.",
        correction: "Football : 10 ÷ 25 = 0,4 = 40 %.\nBasket : 5 ÷ 25 = 0,2 = 20 %.\nCourse : 10 ÷ 25 = 0,4 = 40 %.\nVérification : 40 % + 20 % + 40 % = 100 %."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On relève le nombre de livres lus par 8 élèves :\n0 ; 1 ; 2 ; 1 ; 3 ; 2 ; 1 ; 2.\n1. Donne l'effectif de chaque valeur.\n2. Calcule le nombre total de livres lus.\n3. Calcule la moyenne par élève.",
        correction: "1. 0 : 1 élève ; 1 : 3 élèves ; 2 : 3 élèves ; 3 : 1 élève. Total : 1 + 3 + 3 + 1 = 8 élèves.\n2. Nombre de livres : 0 × 1 + 1 × 3 + 2 × 3 + 3 × 1 = 12.\n3. Moyenne : 12 ÷ 8 = 1,5 livre par élève."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève obtient 14 avec le coefficient 2 et 11 avec le coefficient 1. Calcule sa moyenne pondérée.",
        correction: "Somme pondérée : 14 × 2 + 11 × 1 = 28 + 11 = 39.\nSomme des coefficients : 2 + 1 = 3.\nMoyenne : 39 ÷ 3 = 13."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un groupe de 40 élèves, 12 ont choisi la lecture, 18 le sport et les autres la musique.\n1. Combien ont choisi la musique ?\n2. Calcule la fréquence de chaque choix en pourcentage.\n3. Vérifie la somme des fréquences.",
        correction: "1. Musique : 40 − 12 − 18 = 10 élèves.\n2. Lecture : 12 ÷ 40 = 0,3 = 30 %. Sport : 18 ÷ 40 = 0,45 = 45 %. Musique : 10 ÷ 40 = 0,25 = 25 %.\n3. 30 % + 45 % + 25 % = 100 %."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans une série de 20 notes, 5 élèves ont obtenu 8, 10 élèves ont obtenu 12 et 5 élèves ont obtenu 16.\n1. Calcule la moyenne des notes.\n2. Quelle est la fréquence de la note 12 ?\n3. La moyenne est-elle forcément égale à la note la plus fréquente ?",
        correction: "1. Somme des notes : 8 × 5 + 12 × 10 + 16 × 5 = 40 + 120 + 80 = 240. Moyenne : 240 ÷ 20 = 12.\n2. Fréquence de 12 : 10 ÷ 20 = 0,5, soit 50 %.\n3. Ici, elles sont toutes deux égales à 12, mais ce n'est pas toujours le cas. Par exemple, pour 2, 2 et 8, la valeur la plus fréquente est 2 et la moyenne est 4."
      }
    ]
  }
]);
