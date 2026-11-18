// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 7 : Pourcentages et applications

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch7",
    titre: "Chapitre 7 : Pourcentages et applications",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch7-sens",
        titre: "Comprendre un pourcentage",
        blocs: [
          {
            type: "definition",
            titre: "Pour cent",
            texte: "Un pourcentage indique une proportion rapportée à 100.\nDire « 25 % » signifie « 25 pour 100 » :\n25 % = 25/100 = 0,25."
          },
          {
            type: "exemple",
            titre: "Dans une classe",
            texte: "Dans un groupe de 100 élèves, 40 étudient une langue donnée. Ils représentent 40 % du groupe.\nLa proportion est 40/100, soit 0,4 ou 40 %."
          },
          {
            type: "tableau",
            titre: "Quelques pourcentages utiles",
            entetes: ["Pourcentage", "Fraction", "Nombre décimal"],
            lignes: [
              ["10 %", "10/100 = 1/10", "0,1"],
              ["25 %", "25/100 = 1/4", "0,25"],
              ["50 %", "50/100 = 1/2", "0,5"],
              ["75 %", "75/100 = 3/4", "0,75"],
              ["100 %", "100/100 = 1", "1"]
            ]
          },
          {
            type: "remarque",
            titre: "Un pourcentage peut dépasser 100 %",
            texte: "Une valeur peut représenter plus de 100 % d'une autre valeur. Par exemple, 150 % de 200 vaut 300 : cela représente une fois et demie la valeur de départ."
          }
        ]
      },

      {
        id: "m4-ch7-calculer-part",
        titre: "Calculer un pourcentage d'une quantité",
        blocs: [
          {
            type: "regle",
            titre: "Appliquer un pourcentage",
            texte: "Pour calculer t % d'une quantité, on multiplie cette quantité par t/100.\nQuantité cherchée = quantité de départ × t/100."
          },
          {
            type: "methode",
            titre: "Les étapes",
            texte: "Pour calculer 15 % de 2 000 :\n1. Écris 15 % sous forme de fraction : 15/100.\n2. Multiplie : 2 000 × 15/100.\n3. Calcule : 2 000 × 0,15 = 300.\nDonc 15 % de 2 000 vaut 300."
          },
          {
            type: "exemple",
            titre: "Des livres",
            texte: "Une bibliothèque possède 120 livres. Parmi eux, 25 % sont des livres de sciences.\nNombre de livres de sciences : 120 × 25/100 = 120 × 1/4 = 30."
          },
          {
            type: "exemple",
            titre: "Un calcul mental",
            texte: "10 % de 5 000 Ar vaut 500 Ar : on divise par 10.\n5 % est la moitié de 10 %, donc 5 % de 5 000 Ar vaut 250 Ar."
          }
        ]
      },

      {
        id: "m4-ch7-trouver-taux",
        titre: "Trouver un pourcentage",
        blocs: [
          {
            type: "methode",
            titre: "Comparer une partie au total",
            texte: "Pour trouver quel pourcentage une partie représente d'un total non nul :\n1. Divise la partie par le total.\n2. Multiplie le résultat par 100.\n\nPourcentage = (partie ÷ total) × 100."
          },
          {
            type: "exemple",
            titre: "Élèves présents",
            texte: "Dans une classe de 40 élèves, 32 sont présents.\nProportion d'élèves présents : 32 ÷ 40 = 0,8.\nPourcentage : 0,8 × 100 = 80.\nIl y a donc 80 % d'élèves présents."
          },
          {
            type: "remarque",
            titre: "Bien choisir le total",
            texte: "Le total est la quantité de référence. Si la référence change, le pourcentage peut changer.\nOn ne divise jamais par un total égal à zéro."
          }
        ]
      },

      {
        id: "m4-ch7-evolutions",
        titre: "Appliquer une réduction ou une augmentation",
        blocs: [
          {
            type: "methode",
            titre: "Une réduction",
            texte: "Pour appliquer une réduction :\n1. Calcule le montant de la réduction à partir du prix initial.\n2. Soustrais ce montant du prix initial."
          },
          {
            type: "exemple",
            titre: "Réduction de 20 %",
            texte: "Un sac coûte 30 000 Ar. Il bénéficie d'une réduction de 20 %.\nMontant de la réduction : 30 000 × 20/100 = 6 000 Ar.\nPrix après réduction : 30 000 − 6 000 = 24 000 Ar."
          },
          {
            type: "methode",
            titre: "Une augmentation",
            texte: "Pour appliquer une augmentation, calcule son montant à partir de la valeur initiale, puis ajoute-le à cette valeur."
          },
          {
            type: "exemple",
            titre: "Augmentation de 5 %",
            texte: "Un abonnement coûte 10 000 Ar. Son prix augmente de 5 %.\nMontant de l'augmentation : 10 000 × 5/100 = 500 Ar.\nNouveau prix : 10 000 + 500 = 10 500 Ar."
          },
          {
            type: "remarque",
            titre: "Deux évolutions successives",
            texte: "Après une première évolution, la seconde s'applique à la nouvelle valeur.\nPar exemple, une hausse de 10 % suivie d'une baisse de 10 % ne ramène pas au prix initial : pour 100 Ar, on obtient d'abord 110 Ar, puis 110 − 11 = 99 Ar."
          }
        ]
      },

      {
        id: "m4-ch7-interet",
        titre: "Découvrir l'intérêt simple",
        blocs: [
          {
            type: "definition",
            titre: "Capital et intérêt",
            texte: "Un capital est une somme d'argent placée ou prêtée. L'intérêt est une somme calculée à partir de ce capital, selon un taux et une durée.\nDans un calcul à intérêt simple, on calcule l'intérêt sur le capital initial pour chaque période."
          },
          {
            type: "exemple",
            titre: "Un placement pendant un an",
            texte: "On place 100 000 Ar à un taux annuel simple de 4 %.\nIntérêt pour un an : 100 000 × 4/100 = 4 000 Ar.\nEn supposant qu'il n'y a ni frais ni autre prélèvement, la somme après un an est 100 000 + 4 000 = 104 000 Ar."
          },
          {
            type: "exemple",
            titre: "Un placement pendant deux ans",
            texte: "Avec le même capital de 100 000 Ar et un intérêt simple de 4 % par an, l'intérêt est de 4 000 Ar chaque année.\nPour deux ans : 4 000 × 2 = 8 000 Ar.\nSans frais ni prélèvement, la somme finale est 108 000 Ar."
          },
          {
            type: "remarque",
            titre: "Lire les conditions",
            texte: "Dans une situation réelle, les frais, prélèvements, durées et modalités de calcul peuvent modifier le résultat. Il faut lire les conditions proposées."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Écris sous forme de fraction sur 100, puis sous forme décimale :\n1. 30 %\n2. 5 %\n3. 75 %",
        correction: "1. 30 % = 30/100 = 0,30 = 0,3.\n2. 5 % = 5/100 = 0,05.\n3. 75 % = 75/100 = 0,75."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule :\n1. 10 % de 800\n2. 50 % de 60\n3. 25 % de 200",
        correction: "1. 800 × 10/100 = 80.\n2. 60 × 50/100 = 30 : c'est la moitié de 60.\n3. 200 × 25/100 = 200 ÷ 4 = 50."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une école possède 200 livres. Parmi eux, 35 % sont des livres de sciences.\nCombien y a-t-il de livres de sciences ?",
        correction: "On calcule 35 % de 200 : 200 × 35/100 = 70.\nIl y a 70 livres de sciences."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans une classe de 40 élèves, 18 participent à un club de lecture. Quel pourcentage de la classe cela représente-t-il ?",
        correction: "La proportion est 18 ÷ 40 = 0,45.\nOn multiplie par 100 : 0,45 × 100 = 45.\nLes élèves du club représentent 45 % de la classe."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un cartable coûte 40 000 Ar. Son prix est réduit de 15 %.\n1. Calcule le montant de la réduction.\n2. Calcule le prix après réduction.",
        correction: "1. Réduction : 40 000 × 15/100 = 6 000 Ar.\n2. Prix après réduction : 40 000 − 6 000 = 34 000 Ar."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une somme de 50 000 Ar est placée pendant deux ans à un taux annuel simple de 6 %. On suppose qu'il n'y a ni frais ni prélèvement.\n1. Calcule l'intérêt pour une année.\n2. Calcule l'intérêt pour deux années.\n3. Quelle est la somme finale ?",
        correction: "1. Intérêt annuel : 50 000 × 6/100 = 3 000 Ar.\n2. À intérêt simple, on calcule chaque année sur le capital initial : 3 000 × 2 = 6 000 Ar.\n3. Somme finale : 50 000 + 6 000 = 56 000 Ar."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un collège de 480 élèves, 40 % participent à une activité sportive. Parmi ces participants, 25 % pratiquent le basket.\n1. Combien d'élèves participent à une activité sportive ?\n2. Combien de ces participants pratiquent le basket ?\n3. Quel pourcentage de l'ensemble des élèves représente ce groupe de basketteurs ?",
        correction: "1. Participants sportifs : 480 × 40/100 = 192 élèves.\n2. Basketteurs : 192 × 25/100 = 48 élèves.\n3. Par rapport aux 480 élèves du collège : 48 ÷ 480 × 100 = 10. Ces basketteurs représentent 10 % de l'ensemble des élèves."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un article coûte 20 000 Ar. Son prix augmente de 10 %, puis le nouveau prix diminue de 10 %.\n1. Calcule le prix après l'augmentation.\n2. Calcule le prix après la réduction.\n3. Retrouve-t-on le prix initial ?",
        correction: "1. Augmentation : 20 000 × 10/100 = 2 000 Ar. Nouveau prix : 20 000 + 2 000 = 22 000 Ar.\n2. La réduction s'applique à 22 000 Ar : 22 000 × 10/100 = 2 200 Ar. Prix final : 22 000 − 2 200 = 19 800 Ar.\n3. Non : 19 800 Ar est inférieur au prix initial de 20 000 Ar."
      }
    ]
  }
]);
