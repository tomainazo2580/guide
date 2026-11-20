// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 12 : agrandissements et réductions.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-agrandissements-reductions",
    titre: "Chapitre 12 : Agrandissements et réductions",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-agrandir-reduire",
        titre: "Reconnaître un agrandissement ou une réduction",
        blocs: [
          {
            type: "introduction",
            titre: "Une même forme, mais une taille différente",
            texte: "Une photographie peut être agrandie pour être affichée, ou réduite pour tenir dans un cadre plus petit.\n\nSi l'on veut conserver sa forme, il faut multiplier toutes ses longueurs par un même nombre positif. Ce nombre est appelé coefficient d'agrandissement ou de réduction."
          },
          {
            type: "definition",
            titre: "Le coefficient",
            texte: "On note souvent k le coefficient.\n\n• Si k > 1, la figure est agrandie.\n• Si 0 < k < 1, elle est réduite.\n• Si k = 1, ses dimensions ne changent pas.\n\nChaque longueur de la nouvelle figure s'obtient en multipliant la longueur correspondante de la figure de départ par k."
          },
          {
            type: "schema",
            titre: "Un rectangle agrandi",
            svg: "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Un rectangle de 4 sur 2 et son agrandissement de coefficient 2, de dimensions 8 sur 4'><rect x='20' y='55' width='80' height='40' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><text x='60' y='48' text-anchor='middle' font-size='14'>4 cm</text><text x='20' y='115' font-size='13'>hauteur : 2 cm</text><path d='M115 75 L155 75 M148 68 L155 75 L148 82' fill='none' stroke='#334155' stroke-width='2'/><text x='135' y='62' text-anchor='middle' font-size='13'>× 2</text><rect x='170' y='35' width='160' height='80' fill='#dcfce7' stroke='#166534' stroke-width='2'/><text x='250' y='28' text-anchor='middle' font-size='14'>8 cm</text><text x='190' y='138' font-size='13'>hauteur : 4 cm</text></svg>",
            legende: "Toutes les longueurs sont multipliées par 2 : le rectangle garde les mêmes proportions."
          },
          {
            type: "exemple",
            titre: "Une réduction",
            texte: "Un rectangle mesure 12 cm de long et 8 cm de large. On le réduit avec le coefficient k = 0,5.\n\nNouvelle longueur : 12 × 0,5 = 6 cm.\nNouvelle largeur : 8 × 0,5 = 4 cm.\n\nLe coefficient 0,5 est inférieur à 1 : les dimensions diminuent."
          },
          {
            type: "remarque",
            titre: "Changer une seule dimension ne suffit pas",
            texte: "Si un rectangle de 4 cm sur 2 cm devient un rectangle de 8 cm sur 2 cm, seule sa longueur a été doublée.\n\nCe n'est pas un agrandissement de coefficient 2 : sa forme a été étirée. Pour conserver les proportions, il aurait fallu obtenir 8 cm sur 4 cm."
          }
        ]
      },
      {
        id: "m3-coefficient-longueurs",
        titre: "Trouver et utiliser le coefficient",
        blocs: [
          {
            type: "methode",
            titre: "Calculer le coefficient",
            texte: "Lorsque l'on connaît deux longueurs correspondantes, on calcule :\n\nk = nouvelle longueur ÷ longueur de départ.\n\nExemple : un segment de 5 cm devient un segment de 15 cm.\nk = 15 ÷ 5 = 3.\n\nLe coefficient est 3 : il s'agit d'un agrandissement."
          },
          {
            type: "methode",
            titre: "Calculer une longueur manquante",
            texte: "Un triangle est réduit avec le coefficient 0,4. Un de ses côtés mesure 10 cm avant la réduction.\n\nCôté après réduction : 10 × 0,4 = 4 cm.\n\nPour retrouver la longueur de départ à partir de la nouvelle longueur, on divise par le coefficient : 4 ÷ 0,4 = 10 cm."
          },
          {
            type: "exemple",
            titre: "Un coefficient sous forme de fraction",
            texte: "Un segment de 12 cm devient un segment de 9 cm.\n\nk = 9/12 = 3/4 = 0,75.\n\nC'est une réduction. Un autre segment de 8 cm de la figure de départ devient :\n8 × 3/4 = 6 cm."
          },
          {
            type: "remarque",
            titre: "Attention au sens du quotient",
            texte: "Le coefficient est ici calculé de la figure de départ vers la nouvelle figure :\n\nnouvelle longueur ÷ longueur de départ.\n\nDans l'autre sens, le coefficient est son inverse. Par exemple, passer de 5 cm à 15 cm donne k = 3 ; revenir de 15 cm à 5 cm donne k = 1/3."
          }
        ]
      },
      {
        id: "m3-proprietes-agrandissement",
        titre: "Ce qui change et ce qui ne change pas",
        blocs: [
          {
            type: "regle",
            titre: "Longueurs et angles",
            texte: "Dans un agrandissement ou une réduction de coefficient k :\n\n• toutes les longueurs sont multipliées par k ;\n• les mesures des angles sont conservées ;\n• les alignements et le parallélisme sont conservés.\n\nLa figure garde donc sa forme, même si ses dimensions changent."
          },
          {
            type: "exemple",
            titre: "Un triangle",
            texte: "Un triangle a des côtés de 3 cm, 4 cm et 5 cm. On l'agrandit avec k = 2.\n\nLes nouveaux côtés mesurent 6 cm, 8 cm et 10 cm.\n\nSes angles ne sont pas multipliés par 2 : ils gardent leurs mesures initiales."
          },
          {
            type: "regle",
            titre: "Le périmètre",
            texte: "Le périmètre est une somme de longueurs. Puisque chaque longueur est multipliée par k, le périmètre l'est aussi.\n\nNouveau périmètre = périmètre de départ × k."
          },
          {
            type: "exemple",
            titre: "Vérifier avec le triangle",
            texte: "Le périmètre du triangle de côtés 3 cm, 4 cm et 5 cm est :\n3 + 4 + 5 = 12 cm.\n\nAprès agrandissement de coefficient 2, les côtés mesurent 6 cm, 8 cm et 10 cm :\n6 + 8 + 10 = 24 cm.\n\nOn retrouve bien 12 × 2 = 24 cm."
          }
        ]
      },
      {
        id: "m3-aires-coefficient",
        titre: "L'effet sur les aires",
        blocs: [
          {
            type: "introduction",
            titre: "Une question importante",
            texte: "Si on double la longueur et la largeur d'un rectangle, son aire est-elle seulement doublée ?\n\nPrenons un rectangle de 3 cm sur 2 cm. Son aire est 3 × 2 = 6 cm².\n\nAprès agrandissement de coefficient 2, il mesure 6 cm sur 4 cm. Son aire est 6 × 4 = 24 cm².\n\nL'aire a été multipliée par 4, et non par 2."
          },
          {
            type: "regle",
            titre: "Aire et coefficient",
            texte: "Lors d'un agrandissement ou d'une réduction de coefficient k :\n\nnouvelle aire = aire de départ × k².\n\nOn utilise k² parce que deux dimensions sont multipliées par k."
          },
          {
            type: "exemple",
            titre: "Une réduction",
            texte: "Une figure a une aire de 80 cm². On la réduit avec le coefficient k = 1/2.\n\nLe coefficient des aires est :\n(1/2)² = 1/4.\n\nNouvelle aire : 80 × 1/4 = 20 cm².\n\nLes longueurs sont divisées par 2, mais l'aire est divisée par 4."
          },
          {
            type: "remarque",
            titre: "Bien élever le coefficient au carré",
            texte: "Si k = 3, alors k² = 9 : l'aire est multipliée par 9.\n\nSi k = 0,2, alors k² = 0,04 : l'aire est multipliée par 0,04."
          }
        ]
      },
      {
        id: "m3-volumes-coefficient",
        titre: "L'effet sur les volumes",
        blocs: [
          {
            type: "introduction",
            titre: "Trois dimensions",
            texte: "Un cube de 2 cm d'arête a un volume de 2 × 2 × 2 = 8 cm³.\n\nSi on double son arête, le nouveau cube a une arête de 4 cm et un volume de 4 × 4 × 4 = 64 cm³.\n\nLe volume a été multiplié par 8, car 2 × 2 × 2 = 8."
          },
          {
            type: "regle",
            titre: "Volume et coefficient",
            texte: "Lors d'un agrandissement ou d'une réduction de coefficient k :\n\nnouveau volume = volume de départ × k³.\n\nLes trois dimensions sont multipliées par k : le facteur pour le volume est donc k × k × k."
          },
          {
            type: "exemple",
            titre: "Une maquette réduite",
            texte: "Un solide de volume 240 cm³ est réduit avec le coefficient 1/2.\n\nLe coefficient des volumes est :\n(1/2)³ = 1/8.\n\nVolume de la maquette : 240 × 1/8 = 30 cm³."
          },
          {
            type: "tableau",
            titre: "À retenir",
            entetes: ["Grandeur", "Facteur à appliquer"],
            lignes: [
              ["Longueur", "k"],
              ["Périmètre", "k"],
              ["Aire", "k²"],
              ["Volume", "k³"],
              ["Angle", "Sa mesure ne change pas"]
            ]
          },
          {
            type: "remarque",
            titre: "Une condition essentielle",
            texte: "Ces règles s'appliquent lorsque toutes les dimensions sont multipliées par le même coefficient.\n\nSi on change seulement la hauteur d'un solide, sans changer les autres dimensions, il ne s'agit pas de l'agrandissement étudié ici."
          }
        ]
      },
      {
        id: "m3-echelles",
        titre: "Utiliser une échelle",
        blocs: [
          {
            type: "definition",
            titre: "Du réel au dessin",
            texte: "Une échelle compare une longueur sur un dessin à la longueur réelle correspondante, exprimées dans la même unité.\n\nÉchelle = longueur sur le dessin ÷ longueur réelle.\n\nÀ l'échelle 1/100, une longueur sur le dessin est 100 fois plus petite que la longueur réelle."
          },
          {
            type: "methode",
            titre: "Du dessin à la réalité",
            texte: "Sur un plan à l'échelle 1/100, un mur mesure 4 cm. Quelle est sa longueur réelle ?\n\n1. À cette échelle, 1 cm sur le plan représente 100 cm en réalité.\n2. Donc 4 cm représentent 4 × 100 = 400 cm.\n3. Comme 100 cm = 1 m, on obtient 400 cm = 4 m."
          },
          {
            type: "methode",
            titre: "De la réalité au dessin",
            texte: "Un terrain mesure 30 m de long. On le représente à l'échelle 1/500.\n\n1. On convertit : 30 m = 3 000 cm.\n2. Sur le plan, la longueur est 3 000 ÷ 500 = 6 cm.\n\nLa longueur dessinée est donc 6 cm."
          },
          {
            type: "remarque",
            titre: "Des unités identiques avant le quotient",
            texte: "Pour calculer ou utiliser une échelle, compare des longueurs exprimées dans la même unité.\n\nPar exemple, ne divise pas directement une longueur en centimètres par une longueur en mètres sans convertir d'abord."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On agrandit une figure avec le coefficient k = 3.\n\n1. Un segment mesure 4 cm avant l'agrandissement. Combien mesure son image ?\n2. Un angle mesure 50° avant l'agrandissement. Combien mesure l'angle correspondant ?",
        correction: "1. Les longueurs sont multipliées par 3 :\n4 × 3 = 12 cm.\n\n2. Les angles conservent leur mesure. L'angle correspondant mesure donc 50°, et non 150°."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une figure est réduite avec le coefficient 0,5. Un côté mesure 18 cm avant la réduction.\n\n1. Calcule la longueur correspondante après réduction.\n2. Pourquoi s'agit-il d'une réduction ?",
        correction: "1. Nouvelle longueur : 18 × 0,5 = 9 cm.\n\n2. Le coefficient 0,5 est positif et inférieur à 1 : les longueurs diminuent. C'est une réduction."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un segment de 8 cm devient un segment de 12 cm après agrandissement.\n\n1. Calcule le coefficient.\n2. Un autre segment de la figure de départ mesure 6 cm. Calcule sa nouvelle longueur.",
        correction: "1. Le coefficient est le quotient de la nouvelle longueur par la longueur de départ :\nk = 12 ÷ 8 = 1,5.\n\n2. On multiplie par le même coefficient :\n6 × 1,5 = 9 cm.\n\nLa nouvelle longueur est 9 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un rectangle mesure 5 cm sur 3 cm. On l'agrandit avec le coefficient 2.\n\n1. Calcule ses nouvelles dimensions.\n2. Calcule son périmètre avant et après l'agrandissement.",
        correction: "1. Les nouvelles dimensions sont :\n5 × 2 = 10 cm et 3 × 2 = 6 cm.\n\n2. Périmètre de départ : 2 × (5 + 3) = 16 cm.\nNouveau périmètre : 2 × (10 + 6) = 32 cm.\n\nVérification : 16 × 2 = 32 cm. Le périmètre est multiplié par le coefficient 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une figure a une aire de 12 cm². On l'agrandit avec le coefficient 3.\n\n1. Par combien son aire est-elle multipliée ?\n2. Calcule sa nouvelle aire.",
        correction: "1. Le facteur pour les aires est k². Ici :\n3² = 9.\n\n2. Nouvelle aire : 12 × 9 = 108 cm².\n\nAttention : les longueurs sont multipliées par 3, mais l'aire est multipliée par 9."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un solide a un volume de 160 cm³. On le réduit avec le coefficient 1/2.\n\n1. Par combien son volume est-il multiplié ?\n2. Calcule le volume du solide réduit.",
        correction: "1. Le facteur pour les volumes est k³ :\n(1/2)³ = 1/8.\n\n2. Nouveau volume : 160 × 1/8 = 20 cm³.\n\nLe volume est divisé par 8, et non par 2."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Sur un plan à l'échelle 1/200, une pièce rectangulaire mesure 3 cm sur 2 cm.\n\n1. Calcule ses dimensions réelles en mètres.\n2. Calcule son aire réelle en m².\n3. Calcule son aire sur le plan en cm² et vérifie le lien entre les deux aires.",
        correction: "1. À l'échelle 1/200, 1 cm sur le plan représente 200 cm en réalité.\n\nLongueur réelle : 3 × 200 = 600 cm = 6 m.\nLargeur réelle : 2 × 200 = 400 cm = 4 m.\n\n2. Aire réelle : 6 × 4 = 24 m².\n\n3. Aire sur le plan : 3 × 2 = 6 cm².\nLe coefficient des longueurs du plan vers la réalité est 200. Le facteur des aires est donc 200² = 40 000.\n\nAire réelle : 6 × 40 000 = 240 000 cm².\nComme 1 m² = 10 000 cm², cela donne 240 000 ÷ 10 000 = 24 m². On retrouve le résultat de la question 2."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une pyramide a une base carrée de côté 6 cm et une hauteur de 9 cm. On construit une réduction de cette pyramide avec le coefficient 1/3.\n\n1. Calcule le côté de la nouvelle base et la nouvelle hauteur.\n2. Calcule le volume de la pyramide de départ.\n3. Calcule le volume de la pyramide réduite de deux façons.",
        correction: "1. Toutes les longueurs sont multipliées par 1/3.\nCôté de la nouvelle base : 6 × 1/3 = 2 cm.\nNouvelle hauteur : 9 × 1/3 = 3 cm.\n\n2. Aire de la base initiale : 6 × 6 = 36 cm².\nVolume initial : (36 × 9) ÷ 3 = 108 cm³.\n\n3. Première méthode :\nAire de la nouvelle base : 2 × 2 = 4 cm².\nVolume réduit : (4 × 3) ÷ 3 = 4 cm³.\n\nDeuxième méthode :\nLe coefficient des volumes est (1/3)³ = 1/27.\nVolume réduit : 108 × 1/27 = 4 cm³.\n\nLes deux méthodes donnent le même résultat."
      }
    ]
  }
]);
