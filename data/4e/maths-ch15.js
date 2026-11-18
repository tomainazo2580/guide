// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 15 : Organiser et représenter des données statistiques

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch15",
    titre: "Chapitre 15 : Organiser et représenter des données statistiques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch15-vocabulaire",
        titre: "Découvrir le vocabulaire des statistiques",
        blocs: [
          {
            type: "definition",
            titre: "Population et individu",
            texte: "En statistique, la population est l'ensemble étudié. Un individu est un élément de cette population.\nPar exemple, si l'on étudie les élèves d'une classe, la population est la classe et chaque élève est un individu."
          },
          {
            type: "definition",
            titre: "Caractère et valeurs",
            texte: "Le caractère est la propriété que l'on observe chez les individus.\nPar exemple, si l'on demande à chaque élève son moyen de transport pour venir en classe, le caractère étudié est le moyen de transport. Les réponses possibles sont les valeurs du caractère."
          },
          {
            type: "definition",
            titre: "Caractère qualitatif ou quantitatif",
            texte: "Un caractère qualitatif décrit une catégorie ou une qualité : par exemple, le moyen de transport.\nUn caractère quantitatif est exprimé par un nombre : par exemple, le nombre de frères et sœurs ou la taille en centimètres."
          },
          {
            type: "remarque",
            titre: "Discret ou continu",
            texte: "Un caractère quantitatif peut être discret, comme un nombre d'enfants, ou continu, comme une taille mesurée. Dans ce dernier cas, on peut regrouper les mesures en intervalles appelés classes."
          }
        ]
      },

      {
        id: "m4-ch15-tableau",
        titre: "Organiser les données dans un tableau",
        blocs: [
          {
            type: "definition",
            titre: "Effectif",
            texte: "L'effectif d'une valeur est le nombre d'individus qui présentent cette valeur.\nL'effectif total est le nombre total d'individus étudiés."
          },
          {
            type: "exemple",
            titre: "Une enquête dans une classe",
            texte: "On demande à 20 élèves leur moyen de transport pour venir à l'école : 10 viennent à pied, 6 à vélo et 4 en transport collectif.\nLes effectifs sont 10, 6 et 4. Leur somme est 10 + 6 + 4 = 20 : c'est l'effectif total."
          },
          {
            type: "tableau",
            titre: "Résultats de l'enquête",
            entetes: ["Moyen de transport", "Effectif"],
            lignes: [
              ["À pied", "10"],
              ["À vélo", "6"],
              ["Transport collectif", "4"],
              ["Total", "20"]
            ]
          },
          {
            type: "methode",
            titre: "Construire un tableau",
            texte: "1. Liste les valeurs ou les catégories observées.\n2. Compte le nombre d'individus pour chacune.\n3. Inscris les effectifs dans le tableau.\n4. Additionne les effectifs et vérifie que tu retrouves l'effectif total."
          }
        ]
      },

      {
        id: "m4-ch15-batons",
        titre: "Lire un diagramme en bâtons",
        blocs: [
          {
            type: "definition",
            titre: "Diagramme en bâtons",
            texte: "Un diagramme en bâtons représente les effectifs ou les fréquences par des bâtons séparés. La hauteur de chaque bâton correspond à l'effectif ou à la fréquence de la valeur indiquée."
          },
          {
            type: "schema",
            titre: "Moyens de transport de 20 élèves",
            svg: "<svg viewBox='0 0 340 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Diagramme : à pied 10 élèves, à vélo 6 élèves, transport collectif 4 élèves'><line x1='45' y1='190' x2='315' y2='190' stroke='#1e3a5f' stroke-width='2'/><line x1='45' y1='190' x2='45' y2='25' stroke='#1e3a5f' stroke-width='2'/><g stroke='#cbd5e1' stroke-width='1'><line x1='45' y1='160' x2='310' y2='160'/><line x1='45' y1='130' x2='310' y2='130'/><line x1='45' y1='100' x2='310' y2='100'/><line x1='45' y1='70' x2='310' y2='70'/><line x1='45' y1='40' x2='310' y2='40'/></g><g font-size='12' fill='#1e3a5f' text-anchor='end'><text x='38' y='194'>0</text><text x='38' y='164'>2</text><text x='38' y='134'>4</text><text x='38' y='104'>6</text><text x='38' y='74'>8</text><text x='38' y='44'>10</text></g><rect x='75' y='40' width='36' height='150' fill='#2563eb'/><rect x='155' y='100' width='36' height='90' fill='#16a34a'/><rect x='235' y='130' width='36' height='60' fill='#f59e0b'/><g font-size='12' fill='#1e3a5f' text-anchor='middle'><text x='93' y='211'>À pied</text><text x='173' y='211'>À vélo</text><text x='253' y='211'>Transport</text><text x='253' y='226'>collectif</text></g><text x='10' y='18' font-size='12' fill='#1e3a5f'>Effectif</text></svg>",
            legende: "La hauteur de chaque bâton indique le nombre d'élèves correspondant."
          },
          {
            type: "methode",
            titre: "Lire ou construire le diagramme",
            texte: "Pour lire un diagramme, observe d'abord le titre, les catégories et l'échelle de l'axe vertical.\nPour le construire, place les catégories sur l'axe horizontal, choisis une échelle régulière pour les effectifs, puis trace un bâton de hauteur adaptée pour chaque catégorie."
          }
        ]
      },

      {
        id: "m4-ch15-circulaire",
        titre: "Lire et construire un diagramme circulaire",
        blocs: [
          {
            type: "definition",
            titre: "Un disque partagé en secteurs",
            texte: "Dans un diagramme circulaire, un disque représente l'ensemble de la population. Chaque catégorie est représentée par un secteur.\nL'angle de chaque secteur est proportionnel à l'effectif de la catégorie."
          },
          {
            type: "regle",
            titre: "Calculer un angle",
            texte: "Si l'effectif total est non nul :\nAngle du secteur = effectif de la catégorie ÷ effectif total × 360°."
          },
          {
            type: "exemple",
            titre: "Les moyens de transport",
            texte: "Sur 20 élèves, 10 viennent à pied, 6 à vélo et 4 en transport collectif.\nÀ pied : 10 ÷ 20 × 360° = 180°.\nÀ vélo : 6 ÷ 20 × 360° = 108°.\nTransport collectif : 4 ÷ 20 × 360° = 72°.\nVérification : 180° + 108° + 72° = 360°."
          },
          {
            type: "methode",
            titre: "Tracer le diagramme",
            texte: "1. Calcule les angles des secteurs.\n2. Trace un cercle et un premier rayon.\n3. Avec un rapporteur, reporte successivement les angles à partir du centre.\n4. Identifie les secteurs avec une légende."
          }
        ]
      },

      {
        id: "m4-ch15-histogramme",
        titre: "Découvrir l'histogramme",
        blocs: [
          {
            type: "definition",
            titre: "Des valeurs regroupées en classes",
            texte: "Un histogramme peut représenter des données quantitatives regroupées en intervalles, appelés classes. Les rectangles sont placés côte à côte sur un axe gradué selon les limites des classes."
          },
          {
            type: "regle",
            titre: "Largeur et aire des rectangles",
            texte: "Dans un histogramme, l'aire de chaque rectangle est proportionnelle à l'effectif de sa classe.\nSi toutes les classes ont la même largeur, on peut prendre des hauteurs proportionnelles aux effectifs.\nSi les classes n'ont pas la même largeur, il faut adapter les hauteurs : on peut utiliser une hauteur égale à l'effectif divisé par la largeur de la classe."
          },
          {
            type: "exemple",
            titre: "Classes de même largeur",
            texte: "On étudie des tailles regroupées en classes de 10 cm : de 140 cm inclus à 150 cm exclu, puis de 150 cm inclus à 160 cm exclu.\nLes classes ont la même largeur. Si leurs effectifs sont 4 et 8, le second rectangle peut être deux fois plus haut que le premier."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Dans un diagramme en bâtons, les bâtons sont séparés et représentent des valeurs ou des catégories. Dans un histogramme, les rectangles représentent des intervalles de valeurs et leur largeur correspond à celle des intervalles."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On étudie le fruit préféré des 30 élèves d'une classe.\n1. Quelle est la population étudiée ?\n2. Quel est le caractère étudié ?\n3. Est-il qualitatif ou quantitatif ?",
        correction: "1. La population est l'ensemble des 30 élèves de la classe.\n2. Le caractère est le fruit préféré.\n3. Il est qualitatif : les réponses sont des catégories de fruits."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans une enquête, 8 élèves préfèrent le football, 5 le basket et 7 la course.\nQuel est l'effectif total ?",
        correction: "Effectif total : 8 + 5 + 7 = 20 élèves."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On observe les nombres de livres lus par 12 élèves : 0, 1, 2, 1, 0, 2, 3, 1, 2, 0, 1, 1.\nDonne l'effectif de chaque valeur.",
        correction: "On compte les occurrences :\n0 livre : 3 élèves ;\n1 livre : 5 élèves ;\n2 livres : 3 élèves ;\n3 livres : 1 élève.\nVérification : 3 + 5 + 3 + 1 = 12."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour représenter les moyens de transport d'une classe, on compte 10 élèves à pied, 6 à vélo et 4 en transport collectif.\nTrace un diagramme en bâtons en prenant 1 cm pour 2 élèves.",
        correction: "L'effectif total est 20. Avec 1 cm pour 2 élèves :\n• à pied : 10 ÷ 2 = 5 cm ;\n• à vélo : 6 ÷ 2 = 3 cm ;\n• transport collectif : 4 ÷ 2 = 2 cm.\nTrace trois bâtons séparés de ces hauteurs et indique les catégories."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un groupe de 20 élèves, 5 préfèrent les mangues, 10 les bananes et 5 les oranges.\nCalcule les angles d'un diagramme circulaire représentant ces choix.",
        correction: "Mangues : 5 ÷ 20 × 360° = 90°.\nBananes : 10 ÷ 20 × 360° = 180°.\nOranges : 5 ÷ 20 × 360° = 90°.\nVérification : 90° + 180° + 90° = 360°."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On classe des mesures en deux intervalles de même largeur : de 10 inclus à 20 exclu, puis de 20 inclus à 30 exclu. Leurs effectifs sont respectivement 4 et 8.\nDans un histogramme, comment comparer les hauteurs des deux rectangles ?",
        correction: "Les classes ont la même largeur. Les aires doivent être proportionnelles aux effectifs ; les hauteurs le sont donc aussi.\nComme 8 est le double de 4, le second rectangle doit être deux fois plus haut que le premier."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On étudie le moyen de transport de 40 élèves : 20 viennent à pied, 12 à vélo et 8 en transport collectif.\n1. Vérifie l'effectif total.\n2. Calcule l'angle de chaque secteur d'un diagramme circulaire.\n3. Quelle catégorie occupera la moitié du disque ?",
        correction: "1. 20 + 12 + 8 = 40 élèves.\n2. À pied : 20 ÷ 40 × 360° = 180°. À vélo : 12 ÷ 40 × 360° = 108°. Transport collectif : 8 ÷ 40 × 360° = 72°.\nVérification : 180 + 108 + 72 = 360°.\n3. La catégorie « à pied » occupe un secteur de 180°, soit la moitié du disque."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un histogramme, deux classes sont : de 0 inclus à 10 exclu, d'effectif 20 ; et de 10 inclus à 30 exclu, d'effectif 20.\n1. Quelle est la largeur de chaque classe ?\n2. Si la hauteur est calculée par effectif ÷ largeur, quelle est la hauteur de chaque rectangle ?\n3. Compare les aires des rectangles.",
        correction: "1. Première largeur : 10 − 0 = 10. Seconde largeur : 30 − 10 = 20.\n2. Première hauteur : 20 ÷ 10 = 2. Seconde hauteur : 20 ÷ 20 = 1.\n3. Première aire : 10 × 2 = 20. Seconde aire : 20 × 1 = 20. Les aires sont égales, comme les effectifs."
      }
    ]
  }
]);
