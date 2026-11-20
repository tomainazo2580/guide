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
            type: "schema",
            titre: "Orientation de la force et signe du travail",
            svg: "<svg viewBox='0 0 400 285' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Travail positif, négatif ou nul selon l’orientation de la force'><text x='200' y='20' text-anchor='middle' font-size='14'>Dans les trois cas, le déplacement est vers la droite.</text><text x='20' y='53' font-size='14' font-weight='bold'>Même sens : W positif</text><rect x='45' y='65' width='45' height='30' fill='#dbeafe' stroke='#2563eb'/><line x1='70' y1='80' x2='150' y2='80' stroke='#dc2626' stroke-width='3'/><path d='M150 80 L138 73 L138 87 Z' fill='#dc2626'/><text x='160' y='85' font-size='13' fill='#b91c1c'>F</text><line x1='230' y1='80' x2='330' y2='80' stroke='#475569' stroke-width='3'/><path d='M330 80 L318 73 L318 87 Z' fill='#475569'/><text x='280' y='65' text-anchor='middle' font-size='12'>déplacement</text><text x='20' y='129' font-size='14' font-weight='bold'>Sens opposé : W négatif</text><rect x='115' y='141' width='45' height='30' fill='#dbeafe' stroke='#2563eb'/><line x1='138' y1='156' x2='58' y2='156' stroke='#dc2626' stroke-width='3'/><path d='M58 156 L70 149 L70 163 Z' fill='#dc2626'/><text x='40' y='161' font-size='13' fill='#b91c1c'>F</text><line x1='230' y1='156' x2='330' y2='156' stroke='#475569' stroke-width='3'/><path d='M330 156 L318 149 L318 163 Z' fill='#475569'/><text x='280' y='141' text-anchor='middle' font-size='12'>déplacement</text><text x='20' y='205' font-size='14' font-weight='bold'>Perpendiculaire : W nul</text><rect x='115' y='231' width='45' height='30' fill='#dbeafe' stroke='#2563eb'/><line x1='138' y1='246' x2='138' y2='211' stroke='#dc2626' stroke-width='3'/><path d='M138 211 L131 223 L145 223 Z' fill='#dc2626'/><text x='148' y='226' font-size='13' fill='#b91c1c'>F</text><line x1='230' y1='246' x2='330' y2='246' stroke='#475569' stroke-width='3'/><path d='M330 246 L318 239 L318 253 Z' fill='#475569'/><text x='280' y='231' text-anchor='middle' font-size='12'>déplacement</text><text x='200' y='280' text-anchor='middle' font-size='12'>Force constante et déplacement rectiligne du point d’application</text></svg>",
            legende: "La flèche rouge représente la force étudiée et la flèche grise indique le déplacement de son point d’application."
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
        points: 2,
        enonce: "Quelle est l’unité du travail mécanique ? Quelle est l’unité de la puissance mécanique ?",
        correction: "Le travail mécanique s’exprime en joules, de symbole J. La puissance mécanique s’exprime en watts, de symbole W."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une personne pousse un mur qui reste immobile. Quel est le travail de la force exercée sur le mur ?",
        correction: "Le mur ne se déplace pas. Le travail mécanique de la force exercée sur le mur est donc nul : W = 0 J."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une force constante de 15 N agit dans le sens d’un déplacement rectiligne de 4 m. Calcule son travail.",
        correction: "La force est dans le même sens que le déplacement.\n\nW = F × d = 15 × 4 = 60 J.\n\nLe travail est positif : c’est un travail moteur."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une force de frottement constante de 5 N s’oppose au déplacement rectiligne d’une caisse sur 6 m. Calcule son travail.",
        correction: "La force est opposée au déplacement.\n\nW = −F × d = −5 × 6 = −30 J.\n\nLe travail est négatif : c’est un travail résistant."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet se déplace horizontalement sur une table. Quel est le travail de son poids pendant ce déplacement ? Justifie.",
        correction: "Le poids est vertical tandis que le déplacement est horizontal. Le poids est donc perpendiculaire au déplacement.\n\nSon travail est nul : W = 0 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet de masse 3 kg descend verticalement de 2 m. On prend g = 10 N/kg. Calcule le travail de son poids.",
        correction: "Le poids vaut P = m × g = 3 × 10 = 30 N.\n\nLe poids et le déplacement sont tous deux dirigés vers le bas. Le travail est positif :\n\nW du poids = P × h = 30 × 2 = 60 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une machine fournit un travail de 1 200 J en 30 s. Calcule sa puissance mécanique moyenne.",
        correction: "P = W / t = 1 200 / 30 = 40 W.\n\nLa puissance mécanique moyenne est 40 W."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une machine développe une puissance mécanique moyenne de 200 W pendant 2 min. Calcule le travail fourni.",
        correction: "On convertit la durée : 2 min = 120 s.\n\nW = P × t = 200 × 120 = 24 000 J.\n\nLe travail fourni est 24 000 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un seau de masse 5 kg est soulevé verticalement de 4 m à vitesse constante. On néglige les autres forces et on prend g = 10 N/kg. Calcule le travail du poids et celui de la force qui soulève le seau.",
        correction: "Le poids vaut P = m × g = 5 × 10 = 50 N.\n\nLe poids est opposé à la montée : son travail est −50 × 4 = −200 J.\n\nÀ vitesse constante, avec les forces indiquées, la force qui soulève le seau vaut 50 N et est dirigée vers le haut. Son travail est donc +50 × 4 = +200 J."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice type BEPC. Une machine soulève verticalement une charge de masse 20 kg sur une hauteur de 5 m, à vitesse constante, en 10 s. On néglige les autres forces et on prend g = 10 N/kg.\n\n1. Calcule le poids de la charge.\n2. Détermine l’intensité de la force exercée par la machine sur la charge.\n3. Calcule le travail de cette force.\n4. Calcule le travail du poids.\n5. Calcule la puissance mécanique moyenne fournie à la charge par la machine.",
        correction: "1. Poids : P = m × g = 20 × 10 = 200 N.\n\n2. La charge monte à vitesse constante et les autres forces sont négligées. La force de la machine compense le poids : son intensité vaut 200 N, vers le haut.\n\n3. La force de la machine est dans le sens du déplacement : W machine = 200 × 5 = +1 000 J.\n\n4. Le poids est opposé au déplacement : W poids = −200 × 5 = −1 000 J.\n\n5. Puissance moyenne fournie à la charge : P = W machine / t = 1 000 / 10 = 100 W.\n\nCette valeur concerne la puissance mécanique fournie à la charge, pas nécessairement la puissance électrique consommée par la machine."
      }
    ]
  }
]);
