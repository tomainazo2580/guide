// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 12 : Agrandissement et réduction

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch12",
    titre: "Chapitre 12 : Agrandissement et réduction",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch12-definition",
        titre: "Comprendre l'agrandissement et la réduction",
        blocs: [
          {
            type: "definition",
            titre: "Des figures de même forme",
            texte: "Agrandir ou réduire une figure consiste à multiplier toutes ses longueurs par un même nombre positif k, appelé rapport.\nLa figure obtenue garde la même forme, mais ses dimensions peuvent changer."
          },
          {
            type: "regle",
            titre: "Le rapport k",
            texte: "• Si k est supérieur à 1, c'est un agrandissement.\n• Si k est positif et inférieur à 1, c'est une réduction.\n• Si k = 1, les longueurs ne changent pas."
          },
          {
            type: "exemple",
            titre: "Un segment agrandi",
            texte: "Un segment mesure 4 cm. On l'agrandit avec un rapport k = 3.\nSa nouvelle longueur est 4 × 3 = 12 cm."
          },
          {
            type: "exemple",
            titre: "Un segment réduit",
            texte: "Un segment mesure 10 cm. On le réduit avec un rapport k = 0,4.\nSa nouvelle longueur est 10 × 0,4 = 4 cm."
          },
          {
            type: "schema",
            titre: "Un triangle et son agrandissement",
            svg: "<svg viewBox='0 0 340 190' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Un petit triangle rectangle et son agrandissement de rapport deux'><polygon points='20,145 80,145 20,105' fill='#bfdbfe' stroke='#2563eb' stroke-width='2'/><polygon points='155,145 275,145 155,65' fill='#dcfce7' stroke='#166534' stroke-width='2'/><text x='50' y='165' font-size='13' text-anchor='middle' fill='#2563eb'>3 cm</text><text x='5' y='125' font-size='13' fill='#2563eb'>2</text><text x='215' y='165' font-size='13' text-anchor='middle' fill='#166534'>6 cm</text><text x='135' y='105' font-size='13' fill='#166534'>4</text><text x='95' y='85' font-size='13' fill='#1e293b'>× 2</text></svg>",
            legende: "Le second triangle est un agrandissement de rapport 2 : ses longueurs sont le double de celles du premier."
          }
        ]
      },

      {
        id: "m4-ch12-longueurs",
        titre: "Calculer des longueurs et trouver le rapport",
        blocs: [
          {
            type: "regle",
            titre: "Longueurs correspondantes",
            texte: "Longueur de la figure obtenue = longueur de la figure de départ × k.\nLes longueurs correspondantes sont proportionnelles."
          },
          {
            type: "methode",
            titre: "Trouver le rapport",
            texte: "Lorsque l'on connaît deux longueurs correspondantes et que la longueur de départ est non nulle :\nk = longueur obtenue ÷ longueur de départ.\nIl faut exprimer les deux longueurs dans la même unité avant de diviser."
          },
          {
            type: "exemple",
            titre: "Du départ vers l'image",
            texte: "Un côté de 5 cm devient un côté correspondant de 15 cm.\nk = 15 ÷ 5 = 3.\nIl s'agit d'un agrandissement de rapport 3."
          },
          {
            type: "exemple",
            titre: "Une réduction",
            texte: "Un côté de 8 cm devient un côté correspondant de 2 cm.\nk = 2 ÷ 8 = 0,25.\nIl s'agit d'une réduction de rapport 0,25."
          },
          {
            type: "remarque",
            titre: "Le sens est important",
            texte: "Si une longueur de 5 cm devient 15 cm, le rapport du départ vers l'image est 3. Pour revenir de 15 cm à 5 cm, le rapport est 1/3."
          }
        ]
      },

      {
        id: "m4-ch12-perimetres",
        titre: "Périmètres et angles",
        blocs: [
          {
            type: "regle",
            titre: "Périmètre",
            texte: "Lors d'un agrandissement ou d'une réduction de rapport k, le périmètre est multiplié par k, comme toutes les longueurs."
          },
          {
            type: "exemple",
            titre: "Un rectangle",
            texte: "Un rectangle mesure 6 cm sur 4 cm. Son périmètre est 2 × (6 + 4) = 20 cm.\nAvec un rapport 2, ses dimensions deviennent 12 cm et 8 cm. Son nouveau périmètre est 2 × (12 + 8) = 40 cm, soit 20 × 2."
          },
          {
            type: "regle",
            titre: "Angles",
            texte: "Un agrandissement ou une réduction conserve les mesures des angles. Un angle de 60° reste un angle de 60°, quel que soit le rapport positif choisi."
          }
        ]
      },

      {
        id: "m4-ch12-aires-volumes",
        titre: "Effet sur les aires et les volumes",
        blocs: [
          {
            type: "regle",
            titre: "Les aires",
            texte: "Lors d'un agrandissement ou d'une réduction de rapport k, les aires sont multipliées par k².\nAire obtenue = aire de départ × k²."
          },
          {
            type: "exemple",
            titre: "Un carré agrandi",
            texte: "Un carré de côté 3 cm a une aire de 3 × 3 = 9 cm².\nAvec un rapport 2, son côté devient 6 cm et son aire devient 6 × 6 = 36 cm².\nOn a bien 9 × 2² = 9 × 4 = 36."
          },
          {
            type: "regle",
            titre: "Les volumes",
            texte: "Lors d'un agrandissement ou d'une réduction de rapport k, les volumes sont multipliés par k³.\nVolume obtenu = volume de départ × k³."
          },
          {
            type: "exemple",
            titre: "Un cube réduit",
            texte: "Un cube de côté 4 cm a un volume de 4 × 4 × 4 = 64 cm³.\nAvec un rapport 0,5, son côté devient 2 cm et son volume devient 2 × 2 × 2 = 8 cm³.\nOn a bien 64 × 0,5³ = 64 × 0,125 = 8."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Pour un rapport 3 : les longueurs sont multipliées par 3, les aires par 3² = 9 et les volumes par 3³ = 27."
          }
        ]
      },

      {
        id: "m4-ch12-echelles",
        titre: "Utiliser une échelle",
        blocs: [
          {
            type: "definition",
            titre: "Échelle d'un plan",
            texte: "L'échelle d'un plan est le rapport entre une longueur sur le plan et la longueur réelle correspondante, exprimées dans la même unité.\nÉchelle = longueur sur le plan ÷ longueur réelle."
          },
          {
            type: "exemple",
            titre: "Une échelle de 1/100",
            texte: "À l'échelle 1/100, 1 cm sur le plan correspond à 100 cm dans la réalité, soit 1 m.\nUne longueur réelle de 4 m est donc représentée par 4 cm sur le plan."
          },
          {
            type: "methode",
            titre: "Ne pas oublier les unités",
            texte: "Pour utiliser une échelle :\n1. Mets les longueurs dans la même unité.\n2. Utilise le rapport dans le bon sens.\n3. Convertis le résultat dans l'unité demandée."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un segment de 5 cm est agrandi avec un rapport 3. Quelle est sa nouvelle longueur ?",
        correction: "Nouvelle longueur = 5 × 3 = 15 cm."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Indique s'il s'agit d'un agrandissement, d'une réduction ou d'une figure de mêmes dimensions :\n1. k = 2\n2. k = 0,5\n3. k = 1",
        correction: "1. 2 est supérieur à 1 : agrandissement.\n2. 0,5 est positif et inférieur à 1 : réduction.\n3. Avec k = 1, les dimensions ne changent pas."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un rectangle mesure 8 cm sur 5 cm. On le réduit avec un rapport 0,5.\n1. Quelles sont ses nouvelles dimensions ?\n2. Quel est son nouveau périmètre ?",
        correction: "1. 8 × 0,5 = 4 cm et 5 × 0,5 = 2,5 cm.\n2. Le nouveau périmètre est 2 × (4 + 2,5) = 13 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un côté de 12 cm devient un côté correspondant de 3 cm.\n1. Quel est le rapport du départ vers l'image ?\n2. Un autre côté de la figure de départ mesure 8 cm. Quelle est la longueur de son image ?",
        correction: "1. k = 3 ÷ 12 = 0,25.\n2. La longueur image est 8 × 0,25 = 2 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un triangle a un périmètre de 18 cm et un angle de 50°. On l'agrandit avec un rapport 2.\n1. Quel est le périmètre du triangle obtenu ?\n2. Quelle est la mesure de l'angle correspondant ?",
        correction: "1. Le périmètre est multiplié par 2 : 18 × 2 = 36 cm.\n2. Les angles sont conservés : l'angle correspondant mesure 50°."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une figure a une aire de 12 cm². On l'agrandit avec un rapport 3.\n1. Par quel nombre son aire est-elle multipliée ?\n2. Quelle est l'aire obtenue ?",
        correction: "1. L'aire est multipliée par k² = 3² = 9.\n2. Aire obtenue : 12 × 9 = 108 cm²."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un solide a un volume de 320 cm³. On le réduit avec un rapport 0,5.\n1. Par quel nombre ses longueurs sont-elles multipliées ?\n2. Par quel nombre son volume est-il multiplié ?\n3. Calcule son nouveau volume.",
        correction: "1. Les longueurs sont multipliées par 0,5.\n2. Le volume est multiplié par 0,5³ = 0,125.\n3. Nouveau volume : 320 × 0,125 = 40 cm³."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Sur un plan à l'échelle 1/200, une salle mesure 3 cm de long et 2 cm de large.\n1. Calcule ses dimensions réelles en mètres.\n2. Calcule l'aire réelle de la salle.",
        correction: "1. Longueur réelle : 3 × 200 = 600 cm = 6 m. Largeur réelle : 2 × 200 = 400 cm = 4 m.\n2. Aire réelle : 6 × 4 = 24 m²."
      }
    ]
  }
]);
