enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch15",
    titre: "Chapitre 15 : Statistiques et diagrammes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch15-lecon1",
        titre: "1. Recueillir et organiser des données",
        blocs: [
          {
            type: "texte",
            titre: "À quoi servent les statistiques ?",
            texte: "Les statistiques permettent de recueillir, d’organiser et d’étudier des données. Elles aident à décrire une situation, par exemple les moyens de transport utilisés par les élèves d’une classe."
          },
          {
            type: "definition",
            titre: "Les mots à connaître",
            texte: "La population est l’ensemble étudié. Chaque élément de cette population est un individu. Le caractère est ce que l’on observe chez chaque individu. Les différentes réponses possibles sont les valeurs ou modalités du caractère."
          },
          {
            type: "exemple",
            titre: "Une enquête dans une classe",
            texte: "On demande à 20 élèves leur moyen de transport principal pour venir à l’école. La population est le groupe des 20 élèves. Chaque élève est un individu. Le caractère étudié est le moyen de transport principal. Les modalités peuvent être : marche, vélo ou bus."
          },
          {
            type: "remarque",
            titre: "Caractère qualitatif ou quantitatif",
            texte: "Un caractère est qualitatif lorsque ses modalités sont des catégories, comme le moyen de transport. Il est quantitatif lorsque ses valeurs sont des nombres qui expriment une quantité, comme le nombre de frères et sœurs."
          },
          {
            type: "methode",
            titre: "Faire une enquête",
            texte: "1. Choisir une question claire. 2. Déterminer la population étudiée. 3. Recueillir les réponses. 4. Ranger les résultats dans un tableau. 5. Vérifier que chaque individu a été compté une seule fois."
          }
        ]
      },

      {
        id: "maths5-ch15-lecon2",
        titre: "2. Effectifs et tableaux",
        blocs: [
          {
            type: "definition",
            titre: "Effectif",
            texte: "L’effectif d’une valeur est le nombre de fois où cette valeur apparaît. L’effectif total est la somme de tous les effectifs : c’est le nombre total de données recueillies."
          },
          {
            type: "exemple",
            titre: "Nombre de livres lus",
            texte: "On interroge 10 élèves sur le nombre de livres lus pendant un mois. Les réponses sont : 0 ; 1 ; 2 ; 1 ; 3 ; 2 ; 1 ; 0 ; 2 ; 1. La valeur 1 apparaît 4 fois : son effectif est donc 4."
          },
          {
            type: "tableau",
            titre: "Tableau des effectifs",
            entetes: ["Nombre de livres", "0", "1", "2", "3", "Total"],
            lignes: [
              ["Effectif", "2", "4", "3", "1", "10"]
            ]
          },
          {
            type: "methode",
            titre: "Construire et vérifier le tableau",
            texte: "Écris les différentes valeurs, puis compte combien de fois chacune apparaît. Additionne les effectifs : 2 + 4 + 3 + 1 = 10. On retrouve bien les 10 réponses."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Dans ce tableau, 3 est une valeur possible : 3 livres. Son effectif est 1 : un seul élève a lu 3 livres."
          }
        ]
      },

      {
        id: "maths5-ch15-lecon3",
        titre: "3. Fréquences et pourcentages",
        blocs: [
          {
            type: "definition",
            titre: "Fréquence",
            texte: "La fréquence d’une valeur indique la part de cette valeur dans l’ensemble des données. On la calcule en divisant son effectif par l’effectif total."
          },
          {
            type: "regle",
            titre: "Formules",
            texte: "Fréquence = effectif de la valeur ÷ effectif total. Pour obtenir un pourcentage, on multiplie la fréquence par 100."
          },
          {
            type: "exemple",
            titre: "Exemple avec les livres",
            texte: "Sur 10 élèves, 4 ont lu 1 livre. La fréquence de la valeur 1 est 4 ÷ 10 = 0,4. En pourcentage, cela donne 0,4 × 100 = 40 %. Donc 40 % des élèves interrogés ont lu 1 livre."
          },
          {
            type: "tableau",
            titre: "Effectifs et fréquences",
            entetes: ["Livres lus", "0", "1", "2", "3", "Total"],
            lignes: [
              ["Effectif", "2", "4", "3", "1", "10"],
              ["Fréquence", "0,2", "0,4", "0,3", "0,1", "1"],
              ["Pourcentage", "20 %", "40 %", "30 %", "10 %", "100 %"]
            ]
          },
          {
            type: "remarque",
            titre: "Vérification",
            texte: "La somme des fréquences de toutes les valeurs est 1, soit 100 %. Lorsque les résultats sont arrondis, la somme des pourcentages affichés peut être légèrement différente de 100 %."
          },
          {
            type: "exemple",
            titre: "Une fréquence non décimale exacte",
            texte: "Si 2 élèves sur 3 répondent « oui », la fréquence est 2/3. Elle vaut environ 0,667, soit environ 66,7 %. Le signe ≈ signifie « est environ égal à »."
          }
        ]
      },

      {
        id: "maths5-ch15-lecon4",
        titre: "4. Diagrammes en bâtons et en barres",
        blocs: [
          {
            type: "texte",
            titre: "Représenter un tableau",
            texte: "Un diagramme permet de voir rapidement les résultats. Pour des valeurs numériques isolées, on peut utiliser un diagramme en bâtons. Pour des catégories, on peut utiliser un diagramme en barres."
          },
          {
            type: "schema",
            titre: "Livres lus par 10 élèves",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 250' role='img' aria-label='Diagramme en bâtons : 0 livre, 2 élèves ; 1 livre, 4 élèves ; 2 livres, 3 élèves ; 3 livres, 1 élève'><rect width='420' height='250' fill='white'/><text x='10' y='20' font-size='15' fill='#222'>Nombre d’élèves</text><line x1='60' y1='200' x2='380' y2='200' stroke='#333' stroke-width='2'/><line x1='60' y1='200' x2='60' y2='35' stroke='#333' stroke-width='2'/><g stroke='#ddd'><line x1='60' y1='160' x2='380' y2='160'/><line x1='60' y1='120' x2='380' y2='120'/><line x1='60' y1='80' x2='380' y2='80'/><line x1='60' y1='40' x2='380' y2='40'/></g><g font-size='14' fill='#333'><text x='40' y='205'>0</text><text x='40' y='165'>1</text><text x='40' y='125'>2</text><text x='40' y='85'>3</text><text x='40' y='45'>4</text><text x='107' y='220'>0</text><text x='177' y='220'>1</text><text x='247' y='220'>2</text><text x='317' y='220'>3</text><text x='170' y='242'>Nombre de livres</text></g><g stroke='#2563eb' stroke-width='6'><line x1='112' y1='200' x2='112' y2='120'/><line x1='182' y1='200' x2='182' y2='40'/><line x1='252' y1='200' x2='252' y2='80'/><line x1='322' y1='200' x2='322' y2='160'/></g></svg>",
            legende: "La hauteur de chaque bâton indique l’effectif correspondant."
          },
          {
            type: "exemple",
            titre: "Lire le diagramme",
            texte: "Au-dessus de 2 livres, le bâton atteint 3 sur l’axe vertical : 3 élèves ont lu 2 livres. Le bâton le plus haut correspond à 1 livre : c’est la valeur la plus fréquente."
          },
          {
            type: "methode",
            titre: "Construire un diagramme",
            texte: "1. Tracer deux axes. 2. Placer les valeurs ou catégories sur l’axe horizontal. 3. Choisir une graduation régulière pour les effectifs sur l’axe vertical. 4. Tracer chaque bâton ou barre jusqu’à la bonne hauteur. 5. Donner un titre et nommer les axes."
          },
          {
            type: "remarque",
            titre: "Attention à l’échelle",
            texte: "Avant de lire une hauteur, regarde la graduation : une division peut représenter 1, 2, 5 ou une autre quantité."
          }
        ]
      },

      {
        id: "maths5-ch15-lecon5",
        titre: "5. Diagrammes circulaires",
        blocs: [
          {
            type: "definition",
            titre: "Un disque partagé",
            texte: "Un diagramme circulaire représente la totalité des données par un disque. Chaque catégorie est représentée par un secteur dont la taille dépend de sa fréquence."
          },
          {
            type: "regle",
            titre: "Calculer l’angle d’un secteur",
            texte: "Un tour complet mesure 360°. Pour une catégorie : angle du secteur = fréquence × 360°, ou encore effectif de la catégorie ÷ effectif total × 360°."
          },
          {
            type: "exemple",
            titre: "Les transports de 20 élèves",
            texte: "Sur 20 élèves, 10 viennent à pied, 5 à vélo et 5 en bus. Pour la marche : 10/20 × 360° = 180°. Pour le vélo : 5/20 × 360° = 90°. Pour le bus : 5/20 × 360° = 90°."
          },
          {
            type: "tableau",
            titre: "Préparation du diagramme",
            entetes: ["Transport", "Marche", "Vélo", "Bus", "Total"],
            lignes: [
              ["Effectif", "10", "5", "5", "20"],
              ["Fréquence", "0,5", "0,25", "0,25", "1"],
              ["Angle", "180°", "90°", "90°", "360°"]
            ]
          },
          {
            type: "methode",
            titre: "Construire le diagramme",
            texte: "Trace un cercle et un rayon de départ. À l’aide du rapporteur, construis successivement les angles calculés au centre du cercle. Colorie ou distingue les secteurs et ajoute une légende."
          },
          {
            type: "remarque",
            titre: "Contrôle",
            texte: "La somme des angles des secteurs doit être égale à 360°. Si les angles ont été arrondis, il peut être nécessaire d’ajuster le tracé."
          }
        ]
      },

      {
        id: "maths5-ch15-lecon6",
        titre: "6. Calculer une moyenne",
        blocs: [
          {
            type: "definition",
            titre: "Moyenne d’une série",
            texte: "La moyenne d’une série de nombres se calcule en divisant la somme de toutes les valeurs par le nombre de valeurs."
          },
          {
            type: "exemple",
            titre: "Une liste de notes",
            texte: "Pour les notes 8 ; 10 ; 12 ; 14, la moyenne est (8 + 10 + 12 + 14) ÷ 4 = 44 ÷ 4 = 11."
          },
          {
            type: "methode",
            titre: "Quand les valeurs sont dans un tableau",
            texte: "Multiplie chaque valeur par son effectif. Additionne les résultats, puis divise par l’effectif total. Chaque valeur est ainsi comptée autant de fois qu’elle apparaît."
          },
          {
            type: "exemple",
            titre: "Moyenne des livres lus",
            texte: "Avec 2 élèves à 0 livre, 4 à 1 livre, 3 à 2 livres et 1 à 3 livres, le total de livres est : 0 × 2 + 1 × 4 + 2 × 3 + 3 × 1 = 13. La moyenne est 13 ÷ 10 = 1,3 livre par élève."
          },
          {
            type: "remarque",
            titre: "Comprendre la moyenne",
            texte: "Une moyenne peut ne correspondre à aucune valeur de la série : aucun élève n’a nécessairement lu 1,3 livre. Elle donne une indication globale, mais ne décrit pas à elle seule tous les résultats."
          }
        ]
      },

      {
        id: "maths5-ch15-lecon7",
        titre: "7. Regrouper des données en classes",
        blocs: [
          {
            type: "texte",
            titre: "Pourquoi regrouper ?",
            texte: "Lorsqu’il y a beaucoup de valeurs différentes, on peut les regrouper dans des intervalles appelés classes. Le tableau devient plus facile à lire, mais on perd une partie des détails."
          },
          {
            type: "exemple",
            titre: "Des durées de trajet",
            texte: "On relève la durée du trajet de 10 élèves, en minutes : 5 ; 8 ; 12 ; 14 ; 15 ; 17 ; 19 ; 21 ; 24 ; 28. On les regroupe en trois classes : de 0 à moins de 10 minutes, de 10 à moins de 20 minutes et de 20 à moins de 30 minutes."
          },
          {
            type: "tableau",
            titre: "Tableau des durées",
            entetes: ["Durée du trajet", "De 0 à moins de 10 min", "De 10 à moins de 20 min", "De 20 à moins de 30 min", "Total"],
            lignes: [
              ["Effectif", "2", "5", "3", "10"]
            ]
          },
          {
            type: "remarque",
            titre: "Attention aux limites",
            texte: "Une durée de 10 minutes appartient à la classe « de 10 à moins de 20 minutes », pas à la première. Préciser les limites évite de compter une donnée deux fois."
          },
          {
            type: "methode",
            titre: "Lire avec prudence",
            texte: "Le tableau indique que 5 trajets durent au moins 10 minutes et moins de 20 minutes. Mais il ne permet pas de retrouver exactement toutes les durées : pour cela, il faut conserver la liste de départ."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On demande à 25 élèves leur fruit préféré. Quelle est la population étudiée ? Quel est le caractère étudié ?",
        correction: "La population est le groupe des 25 élèves interrogés. Le caractère étudié est le fruit préféré."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le caractère « couleur du cartable » est-il qualitatif ou quantitatif ? Et le caractère « nombre de livres » ?",
        correction: "La couleur du cartable est un caractère qualitatif. Le nombre de livres est un caractère quantitatif."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans la série 2 ; 3 ; 2 ; 1 ; 2 ; 3 ; 1, quel est l’effectif de la valeur 2 ? Quel est l’effectif total ?",
        correction: "La valeur 2 apparaît 3 fois : son effectif est 3. Il y a 7 nombres au total : l’effectif total est 7."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un tableau donne les effectifs 6, 4 et 5. Calcule l’effectif total.",
        correction: "L’effectif total est 6 + 4 + 5 = 15."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour la série 0 ; 1 ; 1 ; 2 ; 0 ; 2 ; 1 ; 3, donne l’effectif de chaque valeur.",
        correction: "0 apparaît 2 fois ; 1 apparaît 3 fois ; 2 apparaît 2 fois ; 3 apparaît 1 fois. Vérification : 2 + 3 + 2 + 1 = 8."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur 20 élèves, 8 viennent à pied. Calcule la fréquence et le pourcentage correspondant.",
        correction: "Fréquence : 8 ÷ 20 = 0,4. Pourcentage : 0,4 × 100 = 40 %. Donc 40 % des élèves viennent à pied."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un groupe de 30 personnes, 12 choisissent la lecture. Combien ne choisissent pas la lecture ? Quel pourcentage du groupe choisit la lecture ?",
        correction: "30 − 12 = 18 personnes ne choisissent pas la lecture. La fréquence de la lecture est 12/30 = 0,4, soit 40 %."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Trois catégories ont pour fréquences 0,2 ; 0,5 ; 0,3. Vérifie que toutes les données sont représentées.",
        correction: "0,2 + 0,5 + 0,3 = 1. La somme vaut 1, soit 100 % : les fréquences représentent bien la totalité."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule la moyenne des nombres 6 ; 8 ; 10 ; 12.",
        correction: "La somme est 6 + 8 + 10 + 12 = 36. Il y a 4 nombres. La moyenne est 36 ÷ 4 = 9."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans une enquête, les effectifs sont : marche 8, vélo 5 et bus 7. Quel est l’effectif total ? Quelle catégorie est la plus fréquente ? Combien d’élèves viennent à vélo ou en bus ?",
        correction: "Effectif total : 8 + 5 + 7 = 20. La marche est la catégorie la plus fréquente avec 8 élèves. À vélo ou en bus : 5 + 7 = 12 élèves."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour un diagramme en bâtons, les valeurs 1, 2 et 3 ont respectivement pour effectifs 2, 5 et 3. Décris les hauteurs des bâtons et calcule l’effectif total.",
        correction: "Le bâton placé au-dessus de 1 atteint 2 ; celui au-dessus de 2 atteint 5 ; celui au-dessus de 3 atteint 3. L’effectif total est 2 + 5 + 3 = 10."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un diagramme circulaire, une catégorie représente la moitié des réponses. Quel est l’angle de son secteur ? Et pour une catégorie représentant un quart des réponses ?",
        correction: "La moitié du disque correspond à 360° ÷ 2 = 180°. Un quart du disque correspond à 360° ÷ 4 = 90°."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Sur 20 élèves, 5 préfèrent le dessin. Calcule l’angle correspondant dans un diagramme circulaire.",
        correction: "La fréquence est 5/20 = 1/4. L’angle est 1/4 × 360° = 90°."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les notes 8, 10 et 12 ont respectivement pour effectifs 2, 3 et 1. Calcule la moyenne.",
        correction: "Effectif total : 2 + 3 + 1 = 6. Somme des notes : 8 × 2 + 10 × 3 + 12 × 1 = 58. Moyenne : 58 ÷ 6 = 29/3, soit environ 9,67."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les durées 7, 10, 16, 20 et 25 minutes sont réparties dans les classes « de 0 à moins de 10 », « de 10 à moins de 20 » et « de 20 à moins de 30 ». Donne les trois effectifs.",
        correction: "Première classe : 7, donc 1. Deuxième classe : 10 et 16, donc 2. Troisième classe : 20 et 25, donc 2. Les effectifs sont 1, 2 et 2."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans une classe de 40 élèves, 18 choisissent le football, 12 le basket et les autres la course. Calcule l’effectif et le pourcentage de chaque catégorie.",
        correction: "Course : 40 − 18 − 12 = 10 élèves. Football : 18/40 = 45 %. Basket : 12/40 = 30 %. Course : 10/40 = 25 %. Vérification : 45 % + 30 % + 25 % = 100 %."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Pour les 40 élèves de l’exercice précédent, calcule les angles du diagramme circulaire : football 18, basket 12 et course 10.",
        correction: "Football : 18/40 × 360° = 162°. Basket : 12/40 × 360° = 108°. Course : 10/40 × 360° = 90°. Vérification : 162° + 108° + 90° = 360°."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une série compte 5 valeurs : 4 ; 6 ; 7 ; 8 ; et un nombre inconnu. La moyenne est 7. Trouve le nombre inconnu.",
        correction: "Pour avoir une moyenne de 7 avec 5 valeurs, la somme doit être 7 × 5 = 35. La somme des valeurs connues est 4 + 6 + 7 + 8 = 25. Le nombre inconnu est donc 35 − 25 = 10."
      }
    ]
  }
]);
