// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 6 : Reconnaître et utiliser la proportionnalité

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch6",
    titre: "Chapitre 6 : Reconnaître et utiliser la proportionnalité",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch6-reconnaitre",
        titre: "Reconnaître une situation de proportionnalité",
        blocs: [
          {
            type: "definition",
            titre: "Deux grandeurs proportionnelles",
            texte: "Deux grandeurs sont proportionnelles lorsque l'on obtient les valeurs de la seconde en multipliant celles de la première par un même nombre. Ce nombre s'appelle le coefficient de proportionnalité.\nSi x représente la première grandeur et y la seconde, on écrit y = k × x, où k est le coefficient."
          },
          {
            type: "exemple",
            titre: "Un achat au même prix par kilogramme",
            texte: "Des tomates coûtent 4 000 Ar par kilogramme. Le prix est proportionnel à la masse achetée :\nPrix en Ar = 4 000 × masse en kg.\nPour 2 kg, le prix est 4 000 × 2 = 8 000 Ar."
          },
          {
            type: "tableau",
            titre: "Masse de tomates et prix",
            entetes: ["Masse en kg", "1", "2", "3", "4"],
            lignes: [
              ["Prix en Ar", "4 000", "8 000", "12 000", "16 000"]
            ]
          },
          {
            type: "regle",
            titre: "Lire le coefficient",
            texte: "Dans le tableau précédent, on multiplie chaque masse par 4 000 pour obtenir le prix. Le coefficient de proportionnalité de la première ligne vers la seconde est donc 4 000.\nPour retrouver ce coefficient à partir d'une colonne, on peut diviser le prix par la masse, à condition que la masse ne soit pas nulle."
          },
          {
            type: "remarque",
            titre: "Toutes les situations ne sont pas proportionnelles",
            texte: "Si une course coûte 5 000 Ar au départ, puis 2 000 Ar par kilomètre, le prix n'est pas proportionnel à la distance : pour 0 km, il est déjà de 5 000 Ar, et non de 0 Ar."
          }
        ]
      },

      {
        id: "m4-ch6-tableau",
        titre: "Compléter un tableau de proportionnalité",
        blocs: [
          {
            type: "methode",
            titre: "Utiliser le coefficient",
            texte: "Pour compléter un tableau de proportionnalité :\n1. Repère une colonne où les deux valeurs sont connues et où la première valeur est non nulle.\n2. Divise la valeur de la seconde ligne par celle de la première pour trouver le coefficient.\n3. Multiplie chaque valeur de la première ligne par ce coefficient."
          },
          {
            type: "exemple",
            titre: "Cahiers et prix",
            texte: "Trois cahiers identiques coûtent 6 000 Ar.\nLe coefficient de la quantité vers le prix est 6 000 ÷ 3 = 2 000 Ar par cahier.\nCinq cahiers coûtent donc 5 × 2 000 = 10 000 Ar."
          },
          {
            type: "methode",
            titre: "Passer par l'unité",
            texte: "Quand c'est possible, on peut d'abord calculer la valeur correspondant à une unité, puis multiplier.\nSi 4 mètres de tissu coûtent 20 000 Ar, 1 mètre coûte 20 000 ÷ 4 = 5 000 Ar. Alors 3 mètres coûtent 5 000 × 3 = 15 000 Ar."
          },
          {
            type: "regle",
            titre: "Utiliser les colonnes",
            texte: "Dans un tableau de proportionnalité, on peut multiplier ou diviser les deux valeurs d'une colonne par un même nombre non nul pour obtenir une autre colonne. On peut aussi additionner les valeurs de deux colonnes pour en obtenir une nouvelle."
          },
          {
            type: "exemple",
            titre: "Additionner deux colonnes",
            texte: "Si 2 kg de riz coûtent 6 000 Ar et si le prix est proportionnel à la masse, alors 4 kg coûtent 12 000 Ar. On en déduit que 6 kg coûtent 6 000 + 12 000 = 18 000 Ar."
          },
          {
            type: "remarque",
            titre: "Multiplier une colonne par zéro",
            texte: "On peut aussi multiplier les deux valeurs d'une colonne par 0 : on obtient alors une colonne contenant deux zéros. En revanche, on ne divise jamais par 0."
          }
        ]
      },

      {
        id: "m4-ch6-produit-croix",
        titre: "Utiliser les produits en croix",
        blocs: [
          {
            type: "regle",
            titre: "L'égalité des produits en croix",
            texte: "Dans un tableau de proportionnalité à deux colonnes, si la première ligne contient a et b, et la seconde c et d, alors a × d = b × c.\nCette égalité permet notamment de chercher une valeur manquante."
          },
          {
            type: "tableau",
            titre: "Deux colonnes",
            entetes: ["Première colonne", "Deuxième colonne"],
            lignes: [
              ["a", "b"],
              ["c", "d"]
            ]
          },
          {
            type: "methode",
            titre: "Calculer une valeur manquante",
            texte: "Si a est non nul et si a, b et c sont connus, l'égalité a × d = b × c donne : d = (b × c) ÷ a.\nAvant de diviser, vérifie toujours que le diviseur n'est pas nul."
          },
          {
            type: "exemple",
            titre: "Une recette",
            texte: "Pour 4 personnes, il faut 300 g de riz. Pour 6 personnes, on cherche la masse x, en gardant les mêmes quantités par personne.\nOn écrit : 4 × x = 6 × 300.\nDonc x = (6 × 300) ÷ 4 = 450 g."
          },
          {
            type: "remarque",
            titre: "Vérifier la cohérence",
            texte: "Dans l'exemple, le nombre de personnes passe de 4 à 6 : la masse de riz doit augmenter. Le résultat de 450 g est donc cohérent."
          }
        ]
      },

      {
        id: "m4-ch6-verifier",
        titre: "Vérifier une proportionnalité",
        blocs: [
          {
            type: "methode",
            titre: "Chercher un même coefficient",
            texte: "Pour vérifier si un tableau est proportionnel, cherche si toutes les valeurs de la seconde ligne peuvent être obtenues en multipliant les valeurs correspondantes de la première ligne par un même nombre.\nPour calculer les quotients, utilise seulement les colonnes dont la première valeur est non nulle. Vérifie aussi que toute colonne dont la première valeur est 0 a 0 dans la seconde ligne."
          },
          {
            type: "exemple",
            titre: "Tableau proportionnel",
            texte: "Première ligne : 2 ; 4 ; 5.\nSeconde ligne : 6 ; 12 ; 15.\nOn calcule 6 ÷ 2 = 3, 12 ÷ 4 = 3 et 15 ÷ 5 = 3. Le coefficient est toujours 3 : le tableau est proportionnel."
          },
          {
            type: "exemple",
            titre: "Tableau non proportionnel",
            texte: "Première ligne : 2 ; 4 ; 5.\nSeconde ligne : 6 ; 12 ; 16.\nLes deux premières colonnes donnent le coefficient 3, mais 16 ÷ 5 = 3,2. Il n'y a pas de coefficient commun : le tableau n'est pas proportionnel."
          },
          {
            type: "remarque",
            titre: "Du tableau à la situation",
            texte: "Même si des valeurs d'un tableau sont proportionnelles, il faut connaître l'énoncé pour savoir si cette relation reste valable pour d'autres valeurs."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un cahier coûte 2 500 Ar. Les cahiers sont vendus au même prix.\n1. Quel est le prix de 2 cahiers ?\n2. Quel est le prix de 4 cahiers ?",
        correction: "1. 2 × 2 500 = 5 000 Ar.\n2. 4 × 2 500 = 10 000 Ar.\nLe prix est proportionnel au nombre de cahiers."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On passe de la première ligne à la seconde en multipliant par 4.\nPremière ligne : 1 ; 3 ; 5.\nComplète la seconde ligne.",
        correction: "On multiplie chaque valeur par 4 :\n1 × 4 = 4 ; 3 × 4 = 12 ; 5 × 4 = 20.\nLa seconde ligne est : 4 ; 12 ; 20."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Trois mètres de tissu coûtent 18 000 Ar. Le prix est proportionnel à la longueur.\n1. Combien coûte un mètre ?\n2. Combien coûtent 5 mètres ?",
        correction: "1. Prix d'un mètre : 18 000 ÷ 3 = 6 000 Ar.\n2. Prix de 5 mètres : 5 × 6 000 = 30 000 Ar."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les deux lignes suivantes forment-elles un tableau de proportionnalité ? Justifie.\nPremière ligne : 2 ; 3 ; 4.\nSeconde ligne : 8 ; 12 ; 16.",
        correction: "On calcule les quotients : 8 ÷ 2 = 4 ; 12 ÷ 3 = 4 ; 16 ÷ 4 = 4.\nLe coefficient est toujours 4. Le tableau est donc proportionnel."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour 5 personnes, une recette nécessite 400 g de riz. Les quantités sont proportionnelles au nombre de personnes.\n1. Quelle quantité faut-il pour 1 personne ?\n2. Quelle quantité faut-il pour 8 personnes ?",
        correction: "1. Pour une personne : 400 ÷ 5 = 80 g.\n2. Pour 8 personnes : 80 × 8 = 640 g.\nIl faut 640 g de riz."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour 4 litres d'une boisson, il faut 600 g de fruits. Les quantités sont proportionnelles.\nUtilise les produits en croix pour calculer la masse de fruits nécessaire à 7 litres.",
        correction: "Appelons x la masse cherchée en grammes.\nDans le tableau de proportionnalité, 4 litres correspondent à 600 g et 7 litres à x g.\nLes produits en croix donnent : 4 × x = 7 × 600.\nDonc x = 4 200 ÷ 4 = 1 050 g.\nIl faut 1 050 g de fruits."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère le tableau suivant :\nPremière ligne : 0 ; 2 ; 5 ; 8.\nSeconde ligne : 0 ; 6 ; 15 ; 25.\n1. Ce tableau est-il proportionnel ?\n2. Quelle valeur faudrait-il mettre à la place de 25 pour obtenir un tableau de proportionnalité ?",
        correction: "1. Les colonnes non nulles donnent 6 ÷ 2 = 3, 15 ÷ 5 = 3 et 25 ÷ 8 = 3,125. Les coefficients ne sont pas tous égaux : le tableau n'est pas proportionnel.\n2. Les deux premières colonnes non nulles donnent le coefficient 3. Pour 8, il faudrait donc écrire 8 × 3 = 24. La colonne de zéros convient également."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un véhicule consomme 6 litres de carburant pour parcourir 100 km. On suppose que la consommation est proportionnelle à la distance.\n1. Combien consomme-t-il pour 250 km ?\n2. Quelle distance peut-il parcourir avec 15 litres dans les mêmes conditions ?",
        correction: "1. Pour 250 km, la consommation vaut (250 × 6) ÷ 100 = 15 litres.\n2. Puisque 250 km correspondent à 15 litres, il peut parcourir 250 km avec 15 litres.\nOn peut aussi calculer : (15 × 100) ÷ 6 = 250 km."
      }
    ]
  }
]);
