// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 13 : Volumes des pyramides et des cônes

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch13",
    titre: "Chapitre 13 : Volumes des pyramides et des cônes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch13-pyramide",
        titre: "Découvrir la pyramide",
        blocs: [
          {
            type: "definition",
            titre: "La pyramide",
            texte: "Une pyramide est un solide dont la base est un polygone et dont les faces latérales sont des triangles ayant un sommet commun, appelé sommet de la pyramide."
          },
          {
            type: "definition",
            titre: "La hauteur",
            texte: "La hauteur d'une pyramide est la distance entre son sommet et le plan de sa base. Elle se mesure sur une droite perpendiculaire à ce plan.\nIl ne faut pas la confondre avec une arête latérale inclinée."
          },
          {
            type: "schema",
            titre: "Une pyramide à base rectangulaire",
            svg: "<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Pyramide de sommet S et de base rectangulaire ABCD, avec hauteur SH'><polygon points='55,165 220,165 280,205 115,205' fill='#dbeafe' stroke='#1e3a5f' stroke-width='1.5'/><line x1='165' y1='25' x2='55' y2='165' stroke='#1e3a5f' stroke-width='2'/><line x1='165' y1='25' x2='220' y2='165' stroke='#1e3a5f' stroke-width='2'/><line x1='165' y1='25' x2='280' y2='205' stroke='#1e3a5f' stroke-width='2'/><line x1='165' y1='25' x2='115' y2='205' stroke='#1e3a5f' stroke-width='2'/><line x1='165' y1='25' x2='167.5' y2='185' stroke='#dc2626' stroke-width='2' stroke-dasharray='5 4'/><circle cx='167.5' cy='185' r='3' fill='#dc2626'/><g font-size='13' fill='#1e3a5f'><text x='165' y='18' text-anchor='middle'>S</text><text x='42' y='165'>A</text><text x='222' y='160'>B</text><text x='284' y='210'>C</text><text x='103' y='220'>D</text><text x='174' y='190' fill='#dc2626'>H</text><text x='145' y='105' fill='#dc2626'>h</text></g></svg>",
            legende: "La base ABCD est rectangulaire. Le segment [SH] représente la hauteur h ; les arêtes latérales sont inclinées."
          },
          {
            type: "remarque",
            titre: "Aire de la base",
            texte: "Pour calculer un volume, il faut d'abord savoir calculer l'aire de la base.\nPar exemple, pour une base rectangulaire : aire = longueur × largeur."
          }
        ]
      },

      {
        id: "m4-ch13-volume-pyramide",
        titre: "Calculer le volume d'une pyramide",
        blocs: [
          {
            type: "regle",
            titre: "Formule",
            texte: "Le volume d'une pyramide est égal au tiers du produit de l'aire de sa base par sa hauteur :\nV = aire de la base × hauteur ÷ 3."
          },
          {
            type: "methode",
            titre: "Les étapes",
            texte: "1. Calcule l'aire de la base.\n2. Vérifie que les unités de longueur sont compatibles.\n3. Multiplie l'aire de la base par la hauteur.\n4. Divise par 3.\n5. Écris l'unité de volume : cm³, m³, etc."
          },
          {
            type: "exemple",
            titre: "Base rectangulaire",
            texte: "Une pyramide a une base rectangulaire de 6 cm sur 4 cm et une hauteur de 5 cm.\nAire de la base : 6 × 4 = 24 cm².\nVolume : V = 24 × 5 ÷ 3 = 40 cm³."
          },
          {
            type: "exemple",
            titre: "Base triangulaire",
            texte: "La base d'une pyramide est un triangle de base 6 cm et de hauteur correspondante 4 cm. La hauteur de la pyramide est 9 cm.\nAire du triangle : 6 × 4 ÷ 2 = 12 cm².\nVolume : V = 12 × 9 ÷ 3 = 36 cm³."
          },
          {
            type: "remarque",
            titre: "Deux hauteurs différentes",
            texte: "Si la base est un triangle, sa hauteur sert à calculer son aire. La hauteur de la pyramide est la distance entre le sommet du solide et le plan de la base. Il ne faut pas les confondre."
          }
        ]
      },

      {
        id: "m4-ch13-cone",
        titre: "Découvrir le cône",
        blocs: [
          {
            type: "definition",
            titre: "Le cône de révolution",
            texte: "Un cône de révolution est un solide dont la base est un disque et dont la surface latérale rejoint un point appelé sommet.\nLe sommet est situé sur la droite perpendiculaire au plan de la base passant par le centre du disque."
          },
          {
            type: "definition",
            titre: "Rayon et hauteur",
            texte: "Le rayon r est le rayon du disque de base.\nLa hauteur h est la distance entre le sommet du cône et le plan de la base. Dans un cône de révolution, elle relie le sommet au centre de la base."
          },
          {
            type: "schema",
            titre: "Un cône de révolution",
            svg: "<svg viewBox='0 0 340 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Cône de sommet S, de centre de base O, de rayon r et de hauteur h'><path d='M70 175 Q170 140 270 175 Q170 210 70 175' fill='#dbeafe' stroke='#1e3a5f' stroke-width='1.5'/><line x1='170' y1='20' x2='70' y2='175' stroke='#1e3a5f' stroke-width='2'/><line x1='170' y1='20' x2='270' y2='175' stroke='#1e3a5f' stroke-width='2'/><line x1='170' y1='20' x2='170' y2='175' stroke='#dc2626' stroke-width='2' stroke-dasharray='5 4'/><line x1='170' y1='175' x2='270' y2='175' stroke='#166534' stroke-width='2'/><circle cx='170' cy='175' r='3' fill='#1e3a5f'/><text x='170' y='14' text-anchor='middle' font-size='14' fill='#1e3a5f'>S</text><text x='158' y='190' font-size='13' fill='#1e3a5f'>O</text><text x='180' y='100' font-size='14' fill='#dc2626'>h</text><text x='220' y='168' font-size='14' fill='#166534'>r</text></svg>",
            legende: "Le rayon r appartient à la base ; la hauteur h relie le sommet S au centre O de la base."
          },
          {
            type: "remarque",
            titre: "Rayon et diamètre",
            texte: "Le diamètre du disque est égal à deux fois son rayon : diamètre = 2 × rayon.\nSi le diamètre est donné, on le divise par 2 pour trouver le rayon."
          }
        ]
      },

      {
        id: "m4-ch13-volume-cone",
        titre: "Calculer le volume d'un cône",
        blocs: [
          {
            type: "regle",
            titre: "Formule du volume",
            texte: "L'aire d'un disque de rayon r est π × r².\nLe volume d'un cône de révolution est :\nV = π × r² × h ÷ 3,\noù r est le rayon de la base et h la hauteur."
          },
          {
            type: "methode",
            titre: "Les étapes",
            texte: "1. Repère le rayon r et la hauteur h, dans des unités compatibles.\n2. Calcule r².\n3. Multiplie par π puis par h.\n4. Divise par 3.\n5. Donne la valeur exacte avec π ou une valeur approchée si elle est demandée."
          },
          {
            type: "exemple",
            titre: "Valeur exacte puis valeur approchée",
            texte: "Un cône a un rayon de 3 cm et une hauteur de 4 cm.\nV = π × 3² × 4 ÷ 3\nV = π × 9 × 4 ÷ 3 = 12π cm³.\nAvec π ≈ 3,14 : V ≈ 12 × 3,14 = 37,68 cm³."
          },
          {
            type: "exemple",
            titre: "Lorsque le diamètre est donné",
            texte: "Le diamètre de la base est 8 cm et la hauteur est 6 cm.\nRayon : r = 8 ÷ 2 = 4 cm.\nV = π × 4² × 6 ÷ 3 = 32π cm³.\nAvec π ≈ 3,14 : V ≈ 100,48 cm³."
          }
        ]
      },

      {
        id: "m4-ch13-unites",
        titre: "Volumes et contenances",
        blocs: [
          {
            type: "regle",
            titre: "Unités usuelles",
            texte: "Une longueur se mesure par exemple en cm ou en m ; une aire en cm² ou en m² ; un volume en cm³ ou en m³.\nAvant le calcul, il faut utiliser des unités compatibles."
          },
          {
            type: "regle",
            titre: "Correspondances avec les litres",
            texte: "1 dm³ = 1 L.\n1 cm³ = 1 mL.\nComme 1 dm³ = 1 000 cm³, on a aussi 1 L = 1 000 mL."
          },
          {
            type: "exemple",
            titre: "Convertir un volume",
            texte: "Un récipient a une capacité de 2,5 dm³.\nComme 1 dm³ = 1 L, sa capacité est 2,5 L, soit 2 500 mL."
          },
          {
            type: "remarque",
            titre: "Attention au facteur 1 000",
            texte: "Comme 1 dm = 10 cm, on a 1 dm³ = 10 × 10 × 10 cm³ = 1 000 cm³. Le facteur de conversion des volumes n'est donc pas le même que celui des longueurs."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une pyramide a une base d'aire 12 cm² et une hauteur de 5 cm. Calcule son volume.",
        correction: "V = aire de la base × hauteur ÷ 3\nV = 12 × 5 ÷ 3 = 20 cm³."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis :\n1. 3 dm³ en litres.\n2. 250 cm³ en millilitres.",
        correction: "1. Comme 1 dm³ = 1 L, 3 dm³ = 3 L.\n2. Comme 1 cm³ = 1 mL, 250 cm³ = 250 mL."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une pyramide a une base rectangulaire de 8 cm sur 3 cm et une hauteur de 6 cm. Calcule son volume.",
        correction: "Aire de la base : 8 × 3 = 24 cm².\nVolume : 24 × 6 ÷ 3 = 48 cm³."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un cône a un rayon de 2 cm et une hauteur de 9 cm. Calcule son volume exact en fonction de π.",
        correction: "V = π × r² × h ÷ 3\nV = π × 2² × 9 ÷ 3\nV = π × 4 × 9 ÷ 3 = 12π cm³."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "La base d'une pyramide est un carré de côté 5 cm. Sa hauteur est de 12 cm.\n1. Calcule l'aire de la base.\n2. Calcule le volume de la pyramide.",
        correction: "1. Aire du carré : 5 × 5 = 25 cm².\n2. Volume : 25 × 12 ÷ 3 = 100 cm³."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un cône a un diamètre de 6 cm et une hauteur de 5 cm.\n1. Quel est son rayon ?\n2. Calcule son volume exact.\n3. Donne une valeur approchée avec π ≈ 3,14.",
        correction: "1. Rayon : 6 ÷ 2 = 3 cm.\n2. V = π × 3² × 5 ÷ 3 = 15π cm³.\n3. Avec π ≈ 3,14 : V ≈ 15 × 3,14 = 47,1 cm³."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "La base d'une pyramide est un triangle de base 10 cm et de hauteur correspondante 6 cm. La hauteur de la pyramide est 8 cm.\n1. Calcule l'aire de la base triangulaire.\n2. Calcule le volume de la pyramide.",
        correction: "1. Aire de la base : 10 × 6 ÷ 2 = 30 cm².\n2. Volume : 30 × 8 ÷ 3 = 80 cm³."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un récipient intérieur en forme de cône a un rayon de 10 cm et une hauteur de 15 cm.\n1. Calcule son volume exact en cm³.\n2. Donne une valeur approchée en cm³ avec π ≈ 3,14.\n3. Convertis cette valeur approchée en litres.",
        correction: "1. V = π × 10² × 15 ÷ 3 = 500π cm³.\n2. V ≈ 500 × 3,14 = 1 570 cm³.\n3. 1 570 cm³ = 1 570 mL = 1,57 L. La capacité est donc d'environ 1,57 L."
      }
    ]
  }
]);
