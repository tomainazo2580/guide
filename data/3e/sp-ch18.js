enregistrerChapitres("3e", "sp", [
  {
    id: 18,
    titre: "Chapitre 18 : Travail et puissance mécaniques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Le travail d’une force",
        blocs: [
          {
            type: "introduction",
            titre: "Soulever ou déplacer un objet",
            texte: "Lorsqu’une personne soulève un seau, elle exerce une force et le seau se déplace. En physique, on peut calculer le travail de certaines forces pendant un déplacement.\n\nLe mot « travail » a ici un sens précis, différent de son sens courant."
          },
          {
            type: "definition",
            titre: "Travail mécanique",
            texte: "Le travail d’une force est une grandeur liée à l’action de cette force pendant un déplacement. Il dépend notamment de l’intensité de la force, de la distance parcourue et de l’orientation de la force par rapport au déplacement.\n\nOn note souvent le travail W. Son unité est le joule, de symbole J."
          },
          {
            type: "remarque",
            titre: "Une force sans déplacement",
            texte: "Si le point d’application de la force ne se déplace pas, le travail mécanique de cette force est nul.\n\nPar exemple, une personne peut se fatiguer en poussant un mur immobile, mais la force exercée sur le mur ne fournit aucun travail mécanique au mur puisque celui-ci ne se déplace pas."
          }
        ]
      },

      {
        id: 2,
        titre: "Force dans la direction du déplacement",
        blocs: [
          {
            type: "regle",
            titre: "Force dans le même sens",
            texte: "Si une force constante est dirigée dans le même sens que le déplacement rectiligne de son point d’application, son travail vaut :\n\nW = F × d.\n\nF est l’intensité de la force en newtons (N), d la distance en mètres (m) et W le travail en joules (J)."
          },
          {
            type: "exemple",
            titre: "Tirer une caisse",
            texte: "Une caisse se déplace de 5 m en ligne droite. Une force constante de 20 N agit dans la direction et le sens du déplacement.\n\nW = F × d = 20 × 5 = 100 J.\n\nLe travail de cette force est positif : il vaut 100 J."
          },
          {
            type: "definition",
            titre: "Travail moteur",
            texte: "Le travail d’une force est dit moteur lorsqu’il est positif. Dans le cas simple étudié ici, c’est le cas lorsque la force constante est dirigée dans le même sens que le déplacement."
          },
          {
            type: "regle",
            titre: "Force de sens opposé",
            texte: "Si une force constante est dirigée dans la même direction que le déplacement rectiligne, mais en sens opposé, son travail vaut :\n\nW = −F × d.\n\nLe travail est alors négatif : on parle de travail résistant."
          },
          {
            type: "exemple",
            titre: "Force de frottement",
            texte: "Une caisse avance de 5 m. Une force de frottement constante de 4 N s’oppose à son déplacement.\n\nW = −F × d = −4 × 5 = −20 J.\n\nLe travail de cette force de frottement est résistant."
          }
        ]
      },

      {
        id: 3,
        titre: "Force perpendiculaire et cas général",
        blocs: [
          {
            type: "regle",
            titre: "Force perpendiculaire",
            texte: "Si une force constante est perpendiculaire au déplacement rectiligne de son point d’application, son travail est nul : W = 0 J."
          },
          {
            type: "exemple",
            titre: "Déplacement horizontal",
            texte: "Un objet se déplace horizontalement sur une surface plane. Son poids est vertical : il est perpendiculaire au déplacement.\n\nLe travail du poids pendant ce déplacement horizontal est donc nul."
          },
          {
            type: "remarque",
            titre: "Direction oblique",
            texte: "Si une force est oblique par rapport au déplacement, on ne peut pas utiliser directement W = F × d avec l’intensité totale F.\n\nPour une force constante et un déplacement rectiligne, le travail s’écrit W = F × d × cos α, où α est l’angle entre la force et le déplacement. Cette formule retrouve les cas précédents."
          },
          {
            type: "tableau",
            titre: "Signe du travail dans trois cas simples",
            entetes: ["Orientation de la force", "Travail"],
            lignes: [
              ["Même direction et même sens que le déplacement", "Positif : travail moteur"],
              ["Même direction et sens opposé au déplacement", "Négatif : travail résistant"],
              ["Perpendiculaire au déplacement", "Nul"]
            ]
          }
        ]
      },

      {
        id: 4,
        titre: "Travail du poids",
        blocs: [
          {
            type: "definition",
            titre: "Rappel sur le poids",
            texte: "Le poids d’un objet est la force d’attraction exercée par la Terre sur cet objet. Près de la surface terrestre, son intensité est P = m × g.\n\nP est en N, m en kg et g en N/kg."
          },
          {
            type: "regle",
            titre: "Descente verticale",
            texte: "Lorsqu’un objet descend verticalement d’une hauteur h, son poids et son déplacement sont dirigés vers le bas. Le travail du poids est positif :\n\nW du poids = P × h = m × g × h."
          },
          {
            type: "regle",
            titre: "Montée verticale",
            texte: "Lorsqu’un objet monte verticalement d’une hauteur h, son poids est dirigé vers le bas, donc en sens opposé au déplacement. Le travail du poids est négatif :\n\nW du poids = −P × h = −m × g × h."
          },
          {
            type: "exemple",
            titre: "Soulever un objet",
            texte: "Un objet de masse 2 kg monte verticalement de 3 m. On prend g = 10 N/kg.\n\nSon poids vaut P = m × g = 2 × 10 = 20 N.\n\nLe poids est opposé à la montée :\nW du poids = −P × h = −20 × 3 = −60 J."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les forces",
            texte: "Lorsqu’on soulève un objet, le travail du poids et celui de la force qui soulève l’objet sont deux travaux différents.\n\nSi l’objet monte à vitesse constante et si l’on néglige les autres forces, la force qui le soulève vaut son poids et son travail est positif. Le travail du poids est alors négatif."
          }
        ]
      },

      {
        id: 5,
        titre: "La puissance mécanique",
        blocs: [
          {
            type: "definition",
            titre: "Puissance moyenne",
            texte: "La puissance mécanique moyenne indique le travail fourni par unité de temps. Pour une force effectuant un travail W pendant une durée t :\n\nP = W / t.\n\nSi W est en joules et t en secondes, P est en watts, de symbole W."
          },
          {
            type: "remarque",
            titre: "Attention aux symboles",
            texte: "La lettre W peut désigner le travail dans une formule. Le symbole W désigne aussi le watt, unité de puissance. Il faut regarder le contexte.\n\nLa lettre P peut désigner le poids dans le chapitre sur les forces ou la puissance dans une formule de puissance. Ce sont deux grandeurs différentes."
          },
          {
            type: "regle",
            titre: "Formules utiles",
            texte: "Pour calculer la puissance moyenne : P = W / t.\nPour calculer le travail : W = P × t.\nPour calculer la durée : t = W / P, si P n’est pas nulle.\n\n1 kW = 1 000 W."
          },
          {
            type: "exemple",
            titre: "Comparer deux durées",
            texte: "Une machine fournit un travail de 600 J en 3 s.\n\nP = W / t = 600 / 3 = 200 W.\n\nUne autre machine qui fournit le même travail en 6 s a une puissance moyenne de 600 / 6 = 100 W. Pour un même travail, celle qui met moins de temps développe la plus grande puissance moyenne."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthode et bilan",
        blocs: [
          {
            type: "methode",
            titre: "Calculer un travail",
            texte: "1. Identifier la force étudiée et le déplacement de son point d’application.\n2. Repérer l’orientation de la force : même sens, sens opposé ou perpendiculaire.\n3. Convertir la force en N et la distance en m.\n4. Choisir la relation adaptée et calculer.\n5. Donner le résultat en J avec son signe."
          },
          {
            type: "methode",
            titre: "Calculer une puissance moyenne",
            texte: "1. Relever le travail et la durée correspondante.\n2. Convertir le travail en joules et la durée en secondes.\n3. Écrire P = W / t.\n4. Calculer et donner le résultat en watts."
          },
          {
            type: "remarque",
            titre: "Erreurs à éviter",
            texte: "• Oublier le signe négatif lorsque la force est opposée au déplacement.\n• Utiliser une masse en grammes au lieu de kilogrammes dans P = m × g.\n• Utiliser une durée en minutes sans la convertir en secondes pour obtenir une puissance en watts.\n• Confondre le travail d’une force avec le travail d’une autre force.\n• Utiliser W = F × d pour une force oblique sans tenir compte de son orientation."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
