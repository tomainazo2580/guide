enregistrerChapitres("5e", "sp", [
  {
    id: 1,
    titre: "La masse et sa mesure",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Qu’est-ce que la masse ?",
        blocs: [
          {
            type: "texte",
            contenu: "Dans la vie quotidienne, on mesure la masse de nombreux objets : un sac de riz, des fruits, un cahier ou encore un colis."
          },
          {
            type: "definition",
            contenu: "La masse est une grandeur physique qui indique notamment la quantité de matière d’un objet. Elle se mesure avec une balance."
          },
          {
            type: "exemple",
            contenu: "Un paquet de farine peut avoir une masse de 1 kilogramme. Une mangue peut avoir une masse de 300 grammes."
          },
          {
            type: "remarque",
            contenu: "Deux objets qui ont le même volume n’ont pas forcément la même masse. Par exemple, une boule de fer et une boule de bois de même taille n’ont généralement pas la même masse."
          }
        ]
      },
      {
        id: 2,
        titre: "Les unités de masse",
        blocs: [
          {
            type: "texte",
            contenu: "L’unité de masse du Système international est le kilogramme, de symbole kg. On utilise aussi le gramme, de symbole g, pour des masses plus petites, et la tonne, de symbole t, pour des masses importantes."
          },
          {
            type: "regle",
            contenu: "1 kg = 1 000 g et 1 t = 1 000 kg."
          },
          {
            type: "tableau",
            entetes: ["Unité", "Symbole", "Exemple"],
            lignes: [
              ["Milligramme", "mg", "Masse d’un très petit objet"],
              ["Gramme", "g", "Masse d’un fruit"],
              ["Kilogramme", "kg", "Masse d’un sac de riz"],
              ["Tonne", "t", "Masse d’une grande quantité de marchandises"]
            ]
          },
          {
            type: "remarque",
            contenu: "Le symbole du kilogramme est kg, en lettres minuscules. On écrit par exemple 5 kg, et non 5 kgs."
          }
        ]
      },
      {
        id: 3,
        titre: "Convertir des masses",
        blocs: [
          {
            type: "texte",
            contenu: "Convertir une masse, c’est l’exprimer dans une autre unité sans changer la masse elle-même."
          },
          {
            type: "tableau",
            entetes: ["kg", "hg", "dag", "g", "dg", "cg", "mg"],
            lignes: [
              ["kilogramme", "hectogramme", "décagramme", "gramme", "décigramme", "centigramme", "milligramme"]
            ]
          },
          {
            type: "regle",
            contenu: "Dans ce tableau, chaque déplacement d’une colonne vers la droite multiplie le nombre par 10. Chaque déplacement d’une colonne vers la gauche le divise par 10."
          },
          {
            type: "methode",
            contenu: "Pour passer des kilogrammes aux grammes, on se déplace de trois colonnes vers la droite : on multiplie donc par 1 000. Pour passer des grammes aux kilogrammes, on divise par 1 000."
          },
          {
            type: "exemple",
            contenu: "2,5 kg = 2,5 × 1 000 = 2 500 g. Inversement, 750 g = 750 ÷ 1 000 = 0,75 kg."
          },
          {
            type: "exemple",
            contenu: "3 000 mg = 3 g, car 1 g = 1 000 mg."
          },
          {
            type: "remarque",
            contenu: "Pour comparer ou additionner des masses, il est plus facile de les exprimer d’abord dans la même unité."
          }
        ]
      },
      {
        id: 4,
        titre: "Mesurer une masse avec une balance",
        blocs: [
          {
            type: "texte",
            contenu: "Il existe plusieurs types de balances. Une balance électronique affiche directement une valeur. Une balance à deux plateaux permet de comparer des masses."
          },
          {
            type: "methode",
            contenu: "Avec une balance électronique : 1. Placer la balance sur une surface stable. 2. L’allumer et vérifier qu’elle indique zéro. 3. Poser l’objet sur le plateau. 4. Attendre que l’affichage se stabilise, puis lire la valeur et son unité."
          },
          {
            type: "exemple",
            contenu: "Si la balance affiche 425 g lorsqu’on y place une mangue, la masse de la mangue est de 425 g."
          },
          {
            type: "texte",
            contenu: "Avec une balance à deux plateaux, on place l’objet sur un plateau et des masses marquées sur l’autre. À l’équilibre, la masse de l’objet est égale à la somme des masses marquées."
          },
          {
            type: "exemple",
            contenu: "Une balance est en équilibre lorsque l’objet est sur un plateau et que des masses de 200 g, 50 g et 20 g sont sur l’autre. La masse de l’objet est : 200 + 50 + 20 = 270 g."
          },
          {
            type: "remarque",
            contenu: "Avant la mesure, la balance à deux plateaux doit être correctement réglée. Pendant la mesure, les plateaux doivent être libres de bouger."
          }
        ]
      },
      {
        id: 5,
        titre: "Mesurer la masse d’un liquide",
        blocs: [
          {
            type: "texte",
            contenu: "On ne peut pas poser directement un liquide sur une balance : il faut utiliser un récipient. La balance mesure alors la masse du récipient et du liquide ensemble."
          },
          {
            type: "methode",
            contenu: "Sans fonction tare : 1. Mesurer la masse du récipient vide. 2. Verser le liquide dans le récipient. 3. Mesurer la masse du récipient contenant le liquide. 4. Soustraire la masse du récipient vide de la masse totale."
          },
          {
            type: "regle",
            contenu: "Masse du liquide = masse du récipient avec le liquide − masse du récipient vide."
          },
          {
            type: "exemple",
            contenu: "Un verre vide a une masse de 150 g. Avec de l’eau, sa masse est de 350 g. La masse de l’eau est donc : 350 − 150 = 200 g."
          },
          {
            type: "methode",
            contenu: "Avec la fonction tare d’une balance électronique : placer le récipient vide sur la balance, appuyer sur la touche de tare pour remettre l’affichage à zéro, puis verser le liquide. La valeur affichée donne alors directement la masse du liquide."
          },
          {
            type: "remarque",
            contenu: "La tare ne supprime pas la masse du récipient : elle permet simplement à la balance de ne pas la compter dans la valeur affichée."
          }
        ]
      },
      {
        id: 6,
        titre: "Masse et poids",
        blocs: [
          {
            type: "texte",
            contenu: "Dans le langage courant, on dit souvent « peser » pour parler de la masse. En sciences physiques, la masse et le poids sont deux grandeurs différentes."
          },
          {
            type: "definition",
            contenu: "La masse se mesure avec une balance et s’exprime notamment en kilogrammes. Le poids est une force due à l’attraction d’un astre ; il se mesure avec un dynamomètre et s’exprime en newtons, de symbole N."
          },
          {
            type: "exemple",
            contenu: "Un objet transporté de la Terre à la Lune conserve la même masse, mais son poids change, car l’attraction de la Lune est différente de celle de la Terre."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 1,
        enonce: "Quel instrument utilise-t-on pour mesurer la masse d’un objet ?",
        correction: "On mesure la masse d’un objet avec une balance."
      },
      {
        niveau: 1,
        points: 1,
        enonce: "Quel est le symbole du kilogramme ?",
        correction: "Le symbole du kilogramme est kg."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Complète : a) 1 kg = … g ; b) 1 t = … kg.",
        correction: "a) 1 kg = 1 000 g. b) 1 t = 1 000 kg."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Convertis en grammes : a) 3 kg ; b) 1,5 kg.",
        correction: "Pour passer des kilogrammes aux grammes, on multiplie par 1 000. a) 3 kg = 3 000 g. b) 1,5 kg = 1 500 g."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Convertis en kilogrammes : a) 2 000 g ; b) 450 g.",
        correction: "Pour passer des grammes aux kilogrammes, on divise par 1 000. a) 2 000 g = 2 kg. b) 450 g = 0,45 kg."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Une balance à deux plateaux est en équilibre. Sur un plateau se trouve un objet ; sur l’autre, il y a des masses marquées de 500 g, 100 g et 20 g. Quelle est la masse de l’objet ?",
        correction: "À l’équilibre, la masse de l’objet est égale à la somme des masses marquées : 500 + 100 + 20 = 620 g."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Un bol vide a une masse de 180 g. Avec du lait, sa masse est de 430 g. Quelle est la masse du lait ?",
        correction: "Masse du lait = masse du bol avec le lait − masse du bol vide = 430 − 180 = 250 g."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Un paquet de riz a une masse de 2 kg et un autre a une masse de 750 g. Quelle est leur masse totale en grammes ?",
        correction: "On convertit d’abord 2 kg en grammes : 2 kg = 2 000 g. La masse totale est donc 2 000 + 750 = 2 750 g."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Une marchande possède 5 kg de farine. Elle vend 1 500 g. Quelle masse de farine lui reste-t-il, en kilogrammes ?",
        correction: "1 500 g = 1,5 kg. Il lui reste donc 5 − 1,5 = 3,5 kg de farine."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Une bouteille vide a une masse de 250 g. Remplie d’huile, elle a une masse de 1,05 kg. Calcule la masse de l’huile en grammes, puis en kilogrammes.",
        correction: "On exprime d’abord les deux masses dans la même unité : 1,05 kg = 1 050 g. Masse de l’huile = 1 050 − 250 = 800 g. En kilogrammes : 800 g = 0,8 kg."
      },
      {
        niveau: 4,
        points: 2,
        enonce: "Un élève pose un récipient vide sur une balance électronique, puis appuie sur la touche de tare. Il verse ensuite du liquide et la balance affiche 320 g. Que représente cette valeur ?",
        correction: "La tare a remis l’affichage à zéro avec le récipient vide sur la balance. La valeur affichée, 320 g, représente donc la masse du liquide versé."
      }
    ]
  }
]);
