enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch7",
    titre: "Chapitre 7 : Proportionnalité et pourcentages",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch7-lecon1",
        titre: "1. Reconnaître une situation de proportionnalité",
        blocs: [
          {
            type: "texte",
            titre: "Une situation simple",
            texte: "Une orange coûte 500 Ar. Si chaque orange coûte le même prix, 2 oranges coûtent 1 000 Ar et 3 oranges coûtent 1 500 Ar. Quand la quantité est multipliée par un nombre, le prix est multiplié par ce même nombre."
          },
          {
            type: "definition",
            titre: "Proportionnalité",
            texte: "Deux grandeurs sont proportionnelles lorsque l’on passe des valeurs de l’une aux valeurs correspondantes de l’autre en multipliant toujours par un même nombre. Ce nombre est appelé coefficient de proportionnalité."
          },
          {
            type: "tableau",
            titre: "Prix des oranges",
            entetes: [
              "Nombre d’oranges",
              "1",
              "2",
              "3",
              "4"
            ],
            lignes: [
              ["Prix en Ar", "500", "1 000", "1 500", "2 000"]
            ]
          },
          {
            type: "exemple",
            titre: "Le coefficient",
            texte: "On passe du nombre d’oranges au prix en multipliant par 500. Par exemple : 3 × 500 = 1 500. Le coefficient de proportionnalité, dans ce sens, est 500."
          },
          {
            type: "remarque",
            titre: "Le sens compte",
            texte: "Le coefficient dépend du sens choisi : ici, on multiplie le nombre d’oranges par 500 pour obtenir le prix. Pour passer du prix au nombre d’oranges, on divise par 500."
          }
        ]
      },

      {
        id: "maths5-ch7-lecon2",
        titre: "2. Vérifier si un tableau est proportionnel",
        blocs: [
          {
            type: "methode",
            titre: "Chercher un même coefficient",
            texte: "Pour les valeurs non nulles de la première ligne, divise chaque valeur de la deuxième ligne par la valeur correspondante de la première ligne. Si tous les quotients sont égaux et que toute valeur 0 correspond à 0, le tableau est proportionnel."
          },
          {
            type: "tableau",
            titre: "Un tableau proportionnel",
            entetes: ["Quantité", "2", "3", "5"],
            lignes: [
              ["Prix en Ar", "800", "1 200", "2 000"]
            ]
          },
          {
            type: "exemple",
            titre: "Vérification",
            texte: "800 ÷ 2 = 400 ; 1 200 ÷ 3 = 400 ; 2 000 ÷ 5 = 400. Le quotient est toujours 400 : ce tableau est proportionnel."
          },
          {
            type: "tableau",
            titre: "Un tableau non proportionnel",
            entetes: ["Première grandeur", "2", "3", "5"],
            lignes: [
              ["Deuxième grandeur", "8", "12", "25"]
            ]
          },
          {
            type: "exemple",
            titre: "Pourquoi n’est-il pas proportionnel ?",
            texte: "8 ÷ 2 = 4 et 12 ÷ 3 = 4, mais 25 ÷ 5 = 5. Il n’y a pas un même coefficient pour toutes les colonnes."
          },
          {
            type: "remarque",
            titre: "Ce qui ne suffit pas",
            texte: "Deux grandeurs qui augmentent ensemble ne sont pas forcément proportionnelles. Par exemple, l’âge d’une personne et sa taille augmentent au cours de l’enfance, mais pas avec un coefficient constant."
          }
        ]
      },

      {
        id: "maths5-ch7-lecon3",
        titre: "3. Compléter un tableau de proportionnalité",
        blocs: [
          {
            type: "methode",
            titre: "Méthode 1 : utiliser le coefficient",
            texte: "Si 1 kg de riz coûte 3 000 Ar et que le prix est proportionnel à la masse, on multiplie la masse par 3 000 pour obtenir le prix. Ainsi, 4 kg coûtent 4 × 3 000 = 12 000 Ar."
          },
          {
            type: "methode",
            titre: "Méthode 2 : passer par l’unité",
            texte: "Si 3 cahiers identiques coûtent 4 500 Ar : 1. Le prix d’un cahier est 4 500 ÷ 3 = 1 500 Ar. 2. Le prix de 5 cahiers est 1 500 × 5 = 7 500 Ar. Cette méthode suppose que chaque cahier a le même prix."
          },
          {
            type: "methode",
            titre: "Méthode 3 : multiplier une colonne",
            texte: "Dans un tableau proportionnel, on peut multiplier les deux nombres d’une colonne par un même nombre pour obtenir une autre colonne."
          },
          {
            type: "exemple",
            titre: "Doubler",
            texte: "Si 2 kg coûtent 6 000 Ar, alors 4 kg coûtent 12 000 Ar : on a multiplié la masse et le prix par 2."
          },
          {
            type: "exemple",
            titre: "Ajouter des colonnes",
            texte: "Si 2 kg coûtent 6 000 Ar et 3 kg coûtent 9 000 Ar, alors 5 kg coûtent 15 000 Ar. On additionne les quantités : 2 + 3 = 5, et les prix correspondants : 6 000 + 9 000 = 15 000."
          },
          {
            type: "remarque",
            titre: "Bien lire l’énoncé",
            texte: "Ces méthodes s’appliquent à une situation de proportionnalité. Une réduction, des frais fixes ou un prix différent selon la quantité peuvent changer la situation."
          }
        ]
      },

      {
        id: "maths5-ch7-lecon4",
        titre: "4. Comprendre les pourcentages",
        blocs: [
          {
            type: "definition",
            titre: "Pour cent",
            texte: "« Pour cent » signifie « sur cent ». Le symbole % s’utilise pour écrire un pourcentage. Ainsi, 25 % = 25/100 = 0,25."
          },
          {
            type: "exemple",
            titre: "Lire un pourcentage",
            texte: "Si 25 élèves sur 100 portent des lunettes, on peut dire que 25 % de ces élèves portent des lunettes."
          },
          {
            type: "tableau",
            titre: "Quelques écritures utiles",
            entetes: ["Pourcentage", "Fraction", "Écriture décimale"],
            lignes: [
              ["10 %", "10/100", "0,10"],
              ["25 %", "25/100", "0,25"],
              ["50 %", "50/100", "0,50"],
              ["75 %", "75/100", "0,75"],
              ["100 %", "100/100", "1"]
            ]
          },
          {
            type: "remarque",
            titre: "Des repères",
            texte: "50 % représente la moitié : 50/100 = 1/2. 25 % représente le quart : 25/100 = 1/4. 100 % représente la totalité."
          },
          {
            type: "exemple",
            titre: "Plus de 100 %",
            texte: "Un pourcentage peut dépasser 100 % dans certaines situations. Par exemple, 150 % d’une quantité représentent une fois et demie cette quantité."
          }
        ]
      },

      {
        id: "maths5-ch7-lecon5",
        titre: "5. Calculer un pourcentage d’une quantité",
        blocs: [
          {
            type: "regle",
            titre: "La méthode",
            texte: "Pour calculer p % d’une quantité, on multiplie cette quantité par p/100."
          },
          {
            type: "exemple",
            titre: "Calculer 20 %",
            texte: "20 % de 150 = 150 × 20/100 = 30. On peut aussi calculer 150 × 0,20 = 30."
          },
          {
            type: "exemple",
            titre: "Calculer 25 %",
            texte: "25 % de 80 = 80 × 25/100 = 20. Comme 25 % est un quart, on peut aussi calculer 80 ÷ 4 = 20."
          },
          {
            type: "methode",
            titre: "Avec un prix",
            texte: "Pour calculer 10 % de 6 000 Ar : 6 000 × 10/100 = 600 Ar. Ici, 10 % correspond au dixième du prix."
          },
          {
            type: "remarque",
            titre: "Toujours préciser la quantité de départ",
            texte: "Un même pourcentage ne donne pas toujours le même résultat. Par exemple, 10 % de 100 vaut 10, mais 10 % de 200 vaut 20."
          }
        ]
      },

      {
        id: "maths5-ch7-lecon6",
        titre: "6. Retrouver un pourcentage et résoudre un problème",
        blocs: [
          {
            type: "methode",
            titre: "Passer d’une fraction à un pourcentage",
            texte: "Pour trouver le pourcentage représenté par une partie d’un ensemble non vide, on calcule : partie ÷ total × 100."
          },
          {
            type: "exemple",
            titre: "Dans une classe",
            texte: "Dans une classe de 40 élèves, 10 participent à une activité. La fraction est 10/40 = 0,25. Le pourcentage est 0,25 × 100 = 25 %. Donc 25 % de la classe participe à cette activité."
          },
          {
            type: "exemple",
            titre: "Une réduction",
            texte: "Un sac coûte 20 000 Ar. Il bénéficie d’une réduction de 10 %. La réduction vaut 20 000 × 10/100 = 2 000 Ar. Le prix après réduction est 20 000 − 2 000 = 18 000 Ar."
          },
          {
            type: "methode",
            titre: "Bien répondre",
            texte: "1. Identifie la quantité de départ. 2. Calcule la partie demandée. 3. Si l’on cherche un prix après réduction, soustrais la réduction au prix initial. 4. Vérifie l’unité et la vraisemblance du résultat."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Dans l’exemple du sac, 2 000 Ar est le montant de la réduction ; 18 000 Ar est le prix à payer. Ce sont deux réponses différentes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Complète : 25 % = 25/… = … sous forme décimale.",
        correction: "25 % = 25/100 = 0,25."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un pain coûte 800 Ar. Combien coûtent 3 pains au même prix ?",
        correction: "3 × 800 = 2 400. Les 3 pains coûtent 2 400 Ar."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule 50 % de 60.",
        correction: "50 % représente la moitié. Donc 50 % de 60 = 60 ÷ 2 = 30."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule 10 % de 4 000 Ar.",
        correction: "10 % est un dixième. Donc 4 000 ÷ 10 = 400 Ar."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux cahiers identiques coûtent 3 000 Ar. Combien coûte un cahier ? Combien coûtent 4 cahiers ?",
        correction: "Un cahier coûte 3 000 ÷ 2 = 1 500 Ar. Quatre cahiers coûtent 4 × 1 500 = 6 000 Ar."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un tableau, les nombres de la première ligne sont 2, 3 et 4. Ceux de la deuxième ligne sont 10, 15 et 20. Le tableau est-il proportionnel ?",
        correction: "Oui. On passe à la deuxième ligne en multipliant par 5 : 2 × 5 = 10, 3 × 5 = 15 et 4 × 5 = 20."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule 25 % de 120.",
        correction: "25 % est un quart. Donc 120 ÷ 4 = 30. On peut aussi calculer 120 × 25/100 = 30."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule 30 % de 200.",
        correction: "200 × 30/100 = 60. Donc 30 % de 200 vaut 60."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Trois mètres de tissu coûtent 18 000 Ar. Quel est le prix de 5 mètres au même prix par mètre ?",
        correction: "Un mètre coûte 18 000 ÷ 3 = 6 000 Ar. Cinq mètres coûtent 5 × 6 000 = 30 000 Ar."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un tableau contient les couples 2 et 6, puis 4 et 12, puis 5 et 16. Est-il proportionnel ?",
        correction: "Non. 6 ÷ 2 = 3 et 12 ÷ 4 = 3, mais 16 ÷ 5 = 3,2. Le coefficient n’est pas toujours le même."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Dans un groupe de 20 personnes, 5 portent un chapeau. Quel pourcentage du groupe cela représente-t-il ?",
        correction: "5 ÷ 20 = 0,25. Puis 0,25 × 100 = 25. Cela représente 25 % du groupe."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule 15 % de 2 000 Ar.",
        correction: "2 000 × 15/100 = 300 Ar. On peut aussi additionner 10 % de 2 000, soit 200 Ar, et 5 % de 2 000, soit 100 Ar."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Une gourde coûte 10 000 Ar. On lui applique une réduction de 20 %. Quel est le montant de la réduction ? Quel est le nouveau prix ?",
        correction: "La réduction vaut 10 000 × 20/100 = 2 000 Ar. Le nouveau prix est 10 000 − 2 000 = 8 000 Ar."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Pour préparer une boisson, on utilise 2 verres de jus pour 5 verres d’eau. Combien faut-il de verres de jus pour 15 verres d’eau si l’on garde les mêmes proportions ?",
        correction: "15 = 5 × 3. On multiplie aussi la quantité de jus par 3 : 2 × 3 = 6. Il faut 6 verres de jus."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève dit : « Dans un tableau, si les nombres augmentent sur les deux lignes, le tableau est forcément proportionnel. » Explique pourquoi c’est faux.",
        correction: "Les deux lignes peuvent augmenter sans avoir un coefficient constant. Par exemple, pour les couples 1 et 2, puis 2 et 5, les deux lignes augmentent, mais 2 ÷ 1 = 2 et 5 ÷ 2 = 2,5. Le tableau n’est donc pas proportionnel."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Dans une classe de 40 élèves, 35 % participent à un club. Combien d’élèves cela représente-t-il ? Combien n’y participent pas ?",
        correction: "40 × 35/100 = 14. Quatorze élèves participent au club. Les autres sont 40 − 14 = 26 élèves."
      }
    ]
  }
]);
