enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch14",
    titre: "Chapitre 14 : Mesures, périmètres, aires et volumes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch14-lecon1",
        titre: "1. Convertir des longueurs et des masses",
        blocs: [
          {
            type: "texte",
            titre: "Pourquoi convertir ?",
            texte: "Avant de comparer des mesures ou de les utiliser dans un même calcul, il faut les exprimer dans la même unité. Par exemple, on ne peut pas additionner directement 2 m et 30 cm sans convertir l’une des deux mesures."
          },
          {
            type: "tableau",
            titre: "Unités de longueur",
            entetes: ["Unité", "Symbole", "Valeur en mètres"],
            lignes: [
              ["Kilomètre", "km", "1 km = 1 000 m"],
              ["Mètre", "m", "1 m"],
              ["Décimètre", "dm", "1 dm = 0,1 m"],
              ["Centimètre", "cm", "1 cm = 0,01 m"],
              ["Millimètre", "mm", "1 mm = 0,001 m"]
            ]
          },
          {
            type: "methode",
            titre: "Convertir une longueur",
            texte: "On peut utiliser une égalité connue. Pour convertir 2,5 m en centimètres : 1 m = 100 cm, donc 2,5 m = 2,5 × 100 = 250 cm. Dans l’autre sens, 250 cm = 250 ÷ 100 = 2,5 m."
          },
          {
            type: "tableau",
            titre: "Quelques unités de masse",
            entetes: ["Unité", "Égalité"],
            lignes: [
              ["Tonne", "1 t = 1 000 kg"],
              ["Kilogramme", "1 kg = 1 000 g"],
              ["Décigramme", "1 dg = 0,1 g = 100 mg"],
              ["Milligramme", "1 mg = 0,001 g"]
            ]
          },
          {
            type: "exemple",
            titre: "Additionner après conversion",
            texte: "2 m + 30 cm = 200 cm + 30 cm = 230 cm. On peut aussi répondre 2,30 m."
          },
          {
            type: "remarque",
            titre: "Vérifier le sens",
            texte: "Pour une même longueur, le nombre de centimètres est plus grand que le nombre de mètres : 1 m contient 100 cm. Cela aide à vérifier si la conversion est raisonnable."
          }
        ]
      },

      {
        id: "maths5-ch14-lecon2",
        titre: "2. Convertir des durées",
        blocs: [
          {
            type: "regle",
            titre: "Les égalités à connaître",
            texte: "1 heure = 60 minutes ; 1 minute = 60 secondes ; 1 jour = 24 heures."
          },
          {
            type: "exemple",
            titre: "Heures et minutes",
            texte: "2 h 15 min = 2 × 60 min + 15 min = 135 min. Dans l’autre sens, 150 min = 120 min + 30 min = 2 h 30 min."
          },
          {
            type: "exemple",
            titre: "Minutes et secondes",
            texte: "3 min 20 s = 3 × 60 s + 20 s = 200 s."
          },
          {
            type: "remarque",
            titre: "Attention : ce n’est pas une unité décimale",
            texte: "1 h 30 min n’est pas égal à 1,30 h. Trente minutes représentent une demi-heure : 1 h 30 min = 1,5 h. En revanche, 1,30 h = 1 h + 0,30 h = 1 h 18 min."
          },
          {
            type: "methode",
            titre: "Convertir une fraction d’heure",
            texte: "Pour transformer 0,25 h en minutes, on multiplie par 60 : 0,25 × 60 = 15 min. Donc 2,25 h = 2 h 15 min."
          },
          {
            type: "remarque",
            titre: "Une minute en heures",
            texte: "1 min = 1/60 h, soit environ 0,0167 h. Cette écriture décimale est une valeur approchée."
          }
        ]
      },

      {
        id: "maths5-ch14-lecon3",
        titre: "3. Calculer un périmètre",
        blocs: [
          {
            type: "definition",
            titre: "Périmètre",
            texte: "Le périmètre d’une figure est la longueur de son contour. Il s’exprime dans une unité de longueur : cm, m, km…"
          },
          {
            type: "schema",
            titre: "Le contour d’un rectangle",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 210' role='img' aria-label='Rectangle de longueur 6 centimètres et de largeur 3 centimètres'><rect x='65' y='40' width='270' height='120' fill='#eaf4ff' stroke='#c43b3b' stroke-width='4'/><text x='200' y='27' text-anchor='middle' font-size='19'>6 cm</text><text x='355' y='108' text-anchor='middle' font-size='19'>3 cm</text><text x='200' y='195' text-anchor='middle' font-size='17'>Le contour rouge est le périmètre.</text></svg>",
            legende: "Pour calculer le périmètre, on additionne les longueurs des quatre côtés."
          },
          {
            type: "tableau",
            titre: "Formules de périmètre",
            entetes: ["Figure", "Formule"],
            lignes: [
              ["Triangle", "Somme des longueurs des trois côtés"],
              ["Rectangle", "P = 2 × (longueur + largeur)"],
              ["Carré", "P = 4 × côté"],
              ["Cercle", "P = 2 × π × rayon, ou P = π × diamètre"]
            ]
          },
          {
            type: "exemple",
            titre: "Rectangle",
            texte: "Pour le rectangle de longueur 6 cm et de largeur 3 cm : P = 2 × (6 + 3) = 2 × 9 = 18 cm."
          },
          {
            type: "exemple",
            titre: "Cercle",
            texte: "Un cercle de rayon 4 cm a un périmètre de 2 × π × 4 = 8π cm, soit environ 25,12 cm si l’on prend π ≈ 3,14."
          },
          {
            type: "remarque",
            titre: "Rayon et diamètre",
            texte: "Le diamètre d’un cercle vaut deux fois son rayon. Dans l’exemple précédent, le diamètre est 8 cm : on retrouve le même périmètre avec π × 8."
          }
        ]
      },

      {
        id: "maths5-ch14-lecon4",
        titre: "4. Comprendre et convertir les aires",
        blocs: [
          {
            type: "definition",
            titre: "Aire",
            texte: "L’aire mesure l’étendue d’une surface. Elle s’exprime dans une unité carrée : cm², m², km²… Elle ne doit pas être confondue avec le périmètre, qui mesure le contour."
          },
          {
            type: "exemple",
            titre: "Un centimètre carré",
            texte: "Un carré de 1 cm de côté a une aire de 1 cm². Un rectangle de 3 cm sur 2 cm peut contenir 6 carrés de 1 cm² : son aire est donc 6 cm²."
          },
          {
            type: "regle",
            titre: "Conversion des aires",
            texte: "Pour les unités d’aire usuelles, chaque passage à l’unité voisine multiplie ou divise par 100. Par exemple : 1 m² = 100 dm² et 1 dm² = 100 cm². Donc 1 m² = 10 000 cm²."
          },
          {
            type: "exemple",
            titre: "Pourquoi 1 m² vaut 10 000 cm²",
            texte: "Un carré de 1 m de côté mesure aussi 100 cm de côté. Son aire est donc 100 cm × 100 cm = 10 000 cm²."
          },
          {
            type: "exemple",
            titre: "Deux conversions",
            texte: "3 m² = 30 000 cm². Dans l’autre sens, 2 500 cm² = 2 500 ÷ 10 000 = 0,25 m²."
          },
          {
            type: "remarque",
            titre: "Longueur ou aire ?",
            texte: "On a 1 m = 100 cm, mais 1 m² = 10 000 cm². Il ne faut pas utiliser le même facteur pour une longueur et pour une aire."
          }
        ]
      },

      {
        id: "maths5-ch14-lecon5",
        titre: "5. Calculer des aires",
        blocs: [
          {
            type: "tableau",
            titre: "Formules usuelles",
            entetes: ["Figure", "Aire"],
            lignes: [
              ["Rectangle", "longueur × largeur"],
              ["Carré", "côté × côté"],
              ["Triangle", "base × hauteur correspondante ÷ 2"],
              ["Parallélogramme", "base × hauteur correspondante"],
              ["Disque", "π × rayon × rayon"]
            ]
          },
          {
            type: "exemple",
            titre: "Rectangle et carré",
            texte: "Un rectangle de 6 cm sur 3 cm a une aire de 6 × 3 = 18 cm². Un carré de côté 4 cm a une aire de 4 × 4 = 16 cm²."
          },
          {
            type: "exemple",
            titre: "Triangle",
            texte: "Un triangle a une base de 8 cm et une hauteur correspondante de 5 cm. Son aire est 8 × 5 ÷ 2 = 20 cm²."
          },
          {
            type: "remarque",
            titre: "Bien choisir la hauteur",
            texte: "La hauteur utilisée doit être perpendiculaire à la droite portant la base choisie. Un côté incliné n’est pas forcément une hauteur."
          },
          {
            type: "exemple",
            titre: "Disque",
            texte: "Un disque de rayon 3 cm a pour aire π × 3 × 3 = 9π cm², soit environ 28,26 cm² si l’on prend π ≈ 3,14."
          },
          {
            type: "methode",
            titre: "Présenter le calcul",
            texte: "1. Choisis la formule adaptée. 2. Convertis les mesures dans une même unité si nécessaire. 3. Remplace les lettres par les nombres. 4. Calcule et écris l’unité carrée."
          }
        ]
      },

      {
        id: "maths5-ch14-lecon6",
        titre: "6. Volumes et capacités",
        blocs: [
          {
            type: "definition",
            titre: "Volume et capacité",
            texte: "Le volume mesure l’espace occupé par un objet ou contenu dans un solide. La capacité indique la quantité qu’un récipient peut contenir. Les volumes s’expriment notamment en cm³, dm³ ou m³ ; les capacités en litres et millilitres."
          },
          {
            type: "tableau",
            titre: "Égalités utiles",
            entetes: ["Volume", "Capacité ou autre volume"],
            lignes: [
              ["1 dm³", "1 L"],
              ["1 cm³", "1 mL"],
              ["1 L", "1 000 mL"],
              ["1 m³", "1 000 dm³ = 1 000 L"]
            ]
          },
          {
            type: "regle",
            titre: "Conversions de volumes",
            texte: "Entre deux unités de volume voisines, comme m³ et dm³, on multiplie ou on divise par 1 000. Ainsi, 1 dm³ = 1 000 cm³."
          },
          {
            type: "regle",
            titre: "Volume d’un pavé droit",
            texte: "Le volume d’un pavé droit, aussi appelé parallélépipède rectangle, est : longueur × largeur × hauteur. Les trois mesures doivent être exprimées dans la même unité."
          },
          {
            type: "exemple",
            titre: "Un récipient rectangulaire",
            texte: "Un pavé droit mesure 4 cm de long, 3 cm de large et 2 cm de haut. Son volume est 4 × 3 × 2 = 24 cm³, soit 24 mL."
          },
          {
            type: "exemple",
            titre: "Un cube",
            texte: "Un cube de côté 5 cm a un volume de 5 × 5 × 5 = 125 cm³."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les unités",
            texte: "Une longueur s’exprime en cm, une aire en cm² et un volume en cm³. Le nombre de dimensions mesurées n’est pas le même."
          }
        ]
      },

      {
        id: "maths5-ch14-lecon7",
        titre: "7. Choisir la bonne méthode",
        blocs: [
          {
            type: "methode",
            titre: "Lire la question",
            texte: "Pour une clôture autour d’un terrain, on cherche une longueur de contour : le périmètre. Pour recouvrir le sol, on cherche une surface : l’aire. Pour remplir un réservoir, on cherche un volume ou une capacité."
          },
          {
            type: "exemple",
            titre: "Un terrain rectangulaire",
            texte: "Un terrain mesure 12 m sur 5 m. Son périmètre est 2 × (12 + 5) = 34 m. Son aire est 12 × 5 = 60 m². Les deux résultats répondent à des questions différentes."
          },
          {
            type: "exemple",
            titre: "Un réservoir",
            texte: "Un réservoir en forme de pavé droit a des dimensions intérieures de 2 dm, 3 dm et 4 dm. Son volume intérieur est 2 × 3 × 4 = 24 dm³, soit une capacité de 24 L."
          },
          {
            type: "methode",
            titre: "Vérifier avant de répondre",
            texte: "Demande-toi : ai-je choisi la bonne formule ? Les mesures sont-elles dans la même unité ? Mon résultat est-il une longueur, une aire ou un volume ? Ai-je indiqué l’unité correcte ?"
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis : a) 3 m en cm ; b) 2 kg en g.",
        correction: "a) 3 m = 3 × 100 = 300 cm. b) 2 kg = 2 × 1 000 = 2 000 g."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis 250 cm en mètres.",
        correction: "250 cm = 250 ÷ 100 = 2,5 m."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Combien de minutes y a-t-il dans 2 h 30 min ?",
        correction: "2 h = 120 min. Donc 2 h 30 min = 120 + 30 = 150 min."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calcule le périmètre d’un carré de côté 5 cm.",
        correction: "P = 4 × 5 = 20 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un rectangle mesure 7 cm de long et 3 cm de large. Calcule son périmètre.",
        correction: "P = 2 × (7 + 3) = 2 × 10 = 20 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule l’aire d’un rectangle de longueur 8 m et de largeur 4 m.",
        correction: "Aire = 8 × 4 = 32 m²."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertis : a) 2 m² en cm² ; b) 3 L en mL.",
        correction: "a) 2 m² = 2 × 10 000 = 20 000 cm². b) 3 L = 3 × 1 000 = 3 000 mL."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule l’aire d’un triangle de base 10 cm et de hauteur correspondante 6 cm.",
        correction: "Aire = 10 × 6 ÷ 2 = 30 cm²."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un cercle a un diamètre de 10 cm. Calcule son périmètre avec π ≈ 3,14.",
        correction: "P = π × diamètre ≈ 3,14 × 10 = 31,4 cm."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Calcule l’aire d’un disque de rayon 2 cm. Donne une valeur approchée avec π ≈ 3,14.",
        correction: "Aire = π × 2 × 2 = 4π cm², soit environ 12,56 cm²."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un pavé droit mesure 5 cm, 4 cm et 3 cm. Calcule son volume.",
        correction: "Volume = 5 × 4 × 3 = 60 cm³."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Convertis 2,5 dm³ en litres puis en millilitres.",
        correction: "Comme 1 dm³ = 1 L, on a 2,5 dm³ = 2,5 L. Puis 2,5 L = 2 500 mL."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un film dure 1 h 45 min. Exprime cette durée en minutes.",
        correction: "1 h = 60 min. Donc 1 h 45 min = 60 + 45 = 105 min."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un terrain rectangulaire mesure 15 m sur 8 m. Calcule son périmètre et son aire.",
        correction: "Périmètre : 2 × (15 + 8) = 46 m. Aire : 15 × 8 = 120 m². Le premier mesure le contour, le second la surface."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un rectangle mesure 2 m de long et 50 cm de large. Calcule son aire en m².",
        correction: "On convertit 50 cm en mètres : 50 cm = 0,5 m. L’aire est 2 × 0,5 = 1 m²."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève affirme que 1 m² = 100 cm² parce que 1 m = 100 cm. Explique son erreur.",
        correction: "Une aire est mesurée dans deux directions. Un carré de 1 m de côté mesure 100 cm sur 100 cm. Son aire vaut donc 100 × 100 = 10 000 cm²."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un récipient rectangulaire a pour dimensions intérieures 4 dm, 3 dm et 2 dm. Quelle est sa capacité en litres ?",
        correction: "Son volume intérieur est 4 × 3 × 2 = 24 dm³. Comme 1 dm³ = 1 L, sa capacité est 24 L."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un trajet dure 1,5 h. Combien cela représente-t-il en heures et minutes ?",
        correction: "0,5 h est une demi-heure, soit 30 min. Donc 1,5 h = 1 h 30 min."
      }
    ]
  }
]);
