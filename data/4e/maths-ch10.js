// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 10 : La symétrie centrale

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch10",
    titre: "Chapitre 10 : La symétrie centrale",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch10-definition",
        titre: "Comprendre la symétrie centrale",
        blocs: [
          {
            type: "definition",
            titre: "Un demi-tour autour d'un point",
            texte: "La symétrie centrale de centre O transforme une figure en la figure obtenue en lui faisant effectuer un demi-tour autour de O.\nOn dit que la seconde figure est l'image de la première par la symétrie de centre O."
          },
          {
            type: "definition",
            titre: "Image d'un point",
            texte: "L'image d'un point A par la symétrie de centre O est le point A' tel que O soit le milieu du segment [AA'].\nCela signifie que A, O et A' sont alignés et que OA = OA'. Si A est confondu avec O, son image est O lui-même."
          },
          {
            type: "schema",
            titre: "Deux points symétriques",
            svg: "<svg viewBox='0 0 340 130' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Les points A, O et A prime sont alignés ; O est au milieu du segment A A prime'><line x1='40' y1='65' x2='300' y2='65' stroke='#1e3a5f' stroke-width='2'/><circle cx='55' cy='65' r='5' fill='#dc2626'/><circle cx='170' cy='65' r='5' fill='#1e3a5f'/><circle cx='285' cy='65' r='5' fill='#2563eb'/><g font-size='15' text-anchor='middle'><text x='55' y='48' fill='#dc2626'>A</text><text x='170' y='48' fill='#1e3a5f'>O</text><text x='285' y='48' fill='#2563eb'>A'</text></g><g stroke='#1e3a5f' stroke-width='2'><line x1='107' y1='59' x2='113' y2='71'/><line x1='227' y1='59' x2='233' y2='71'/></g><text x='170' y='105' font-size='13' text-anchor='middle' fill='#1e3a5f'>OA = OA'</text></svg>",
            legende: "A et A' sont symétriques par rapport à O : O est le milieu de [AA']."
          },
          {
            type: "remarque",
            titre: "Le centre ne bouge pas",
            texte: "Le centre O est son propre image : après le demi-tour autour de O, il reste à la même place."
          }
        ]
      },

      {
        id: "m4-ch10-construction",
        titre: "Construire l'image d'un point",
        blocs: [
          {
            type: "methode",
            titre: "Avec une règle et un compas",
            texte: "Pour construire l'image A' d'un point A par la symétrie de centre O, lorsque A et O sont distincts :\n1. Trace la droite (AO).\n2. Place la pointe du compas en O et ouvre-le jusqu'à A.\n3. Sur la droite (AO), de l'autre côté de O par rapport à A, reporte la longueur OA.\n4. Nomme A' le point obtenu.\nVérifie que O est le milieu de [AA']."
          },
          {
            type: "exemple",
            titre: "Un exemple avec une longueur",
            texte: "Si OA = 3 cm, l'image A' se trouve sur la droite (AO), de l'autre côté de O, avec OA' = 3 cm.\nLe segment [AA'] mesure alors 6 cm et O est son milieu."
          },
          {
            type: "remarque",
            titre: "Une distance seule ne suffit pas",
            texte: "Pour que A' soit l'image de A, il ne suffit pas d'avoir OA = OA'. Les points A, O et A' doivent aussi être alignés, avec O au milieu de [AA']."
          }
        ]
      },

      {
        id: "m4-ch10-figures",
        titre: "Construire l'image d'une figure",
        blocs: [
          {
            type: "methode",
            titre: "Image d'un segment",
            texte: "Pour construire l'image du segment [AB] par la symétrie de centre O :\n1. Construis l'image A' de A.\n2. Construis l'image B' de B.\n3. Trace le segment [A'B'].\nLe segment [A'B'] est l'image de [AB]."
          },
          {
            type: "methode",
            titre: "Image d'un triangle",
            texte: "Pour construire l'image d'un triangle ABC :\n1. Construis les images A', B' et C' de ses trois sommets.\n2. Relie A' à B', B' à C' et C' à A'.\nLe triangle A'B'C' est l'image du triangle ABC."
          },
          {
            type: "schema",
            titre: "Deux triangles symétriques",
            svg: "<svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Deux triangles ABC et A prime B prime C prime symétriques par rapport au centre O'><g stroke='#94a3b8' stroke-width='1' stroke-dasharray='5 4'><line x1='45' y1='35' x2='295' y2='205'/><line x1='135' y1='55' x2='205' y2='185'/><line x1='75' y1='105' x2='265' y2='135'/></g><polygon points='45,35 135,55 75,105' fill='#bfdbfe' stroke='#2563eb' stroke-width='2'/><polygon points='295,205 205,185 265,135' fill='#fecaca' stroke='#dc2626' stroke-width='2'/><circle cx='170' cy='120' r='4' fill='#1e3a5f'/><g font-size='13'><text x='30' y='30' fill='#2563eb'>A</text><text x='138' y='52' fill='#2563eb'>B</text><text x='58' y='119' fill='#2563eb'>C</text><text x='299' y='218' fill='#dc2626'>A'</text><text x='190' y='200' fill='#dc2626'>B'</text><text x='269' y='130' fill='#dc2626'>C'</text><text x='176' y='116' fill='#1e3a5f'>O</text></g></svg>",
            legende: "O est le milieu de [AA'], de [BB'] et de [CC']. Le triangle A'B'C' est l'image de ABC."
          },
          {
            type: "regle",
            titre: "Image d'une droite",
            texte: "L'image d'une droite est une droite parallèle à la droite de départ. Si la droite passe par le centre O, son image est la droite elle-même.\nPour la construire, on peut choisir deux points distincts sur la droite, construire leurs images, puis tracer la droite passant par ces images."
          },
          {
            type: "regle",
            titre: "Image d'un cercle",
            texte: "L'image d'un cercle est un cercle de même rayon. Son centre est l'image du centre du cercle de départ.\nSi le centre du cercle est aussi le centre de symétrie O, le cercle a pour image lui-même."
          }
        ]
      },

      {
        id: "m4-ch10-proprietes",
        titre: "Utiliser les propriétés de la symétrie",
        blocs: [
          {
            type: "regle",
            titre: "Longueurs et angles",
            texte: "La symétrie centrale conserve les longueurs et les mesures des angles.\nSi [A'B'] est l'image de [AB], alors A'B' = AB. Les deux figures ont la même forme et les mêmes dimensions."
          },
          {
            type: "regle",
            titre: "Alignement et milieux",
            texte: "La symétrie centrale conserve l'alignement : les images de points alignés sont alignées.\nElle conserve aussi les milieux : si M est le milieu de [AB], alors son image M' est le milieu de [A'B']."
          },
          {
            type: "exemple",
            titre: "Périmètre d'un triangle",
            texte: "Un triangle ABC a pour côtés 3 cm, 4 cm et 5 cm. Son image A'B'C' a les mêmes longueurs de côtés.\nSon périmètre est donc 3 + 4 + 5 = 12 cm, comme celui de ABC."
          },
          {
            type: "definition",
            titre: "Centre de symétrie d'une figure",
            texte: "Un point O est un centre de symétrie d'une figure si cette figure a pour image elle-même par la symétrie de centre O.\nExemple : le centre d'un cercle est un centre de symétrie du cercle."
          },
          {
            type: "exemple",
            titre: "Le parallélogramme",
            texte: "Le point d'intersection des diagonales d'un parallélogramme est son centre de symétrie : les sommets opposés sont deux à deux symétriques par rapport à ce point."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "A' est l'image de A par la symétrie de centre O.\n1. Quelle est la position de O sur le segment [AA'] ?\n2. Si OA = 4 cm, combien mesure OA' ?",
        correction: "1. O est le milieu du segment [AA'].\n2. OA' = OA = 4 cm."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Trace deux points distincts O et A. Construis A', l'image de A par la symétrie de centre O.",
        correction: "Trace la droite (AO). Avec le compas, reporte la longueur OA de l'autre côté de O sur cette droite. Le point obtenu est A'. Vérifie que OA = OA' et que O se trouve entre A et A'."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les points A, O et B sont alignés dans cet ordre. On sait que AO = 2,5 cm et OB = 2,5 cm.\n1. O est-il le milieu de [AB] ?\n2. B est-il l'image de A par la symétrie de centre O ?",
        correction: "1. O appartient à [AB] et AO = OB. O est donc le milieu de [AB].\n2. Oui. Puisque O est le milieu de [AB], B est l'image de A par la symétrie de centre O."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Trace un segment [AB] de 5 cm et choisis un point O qui n'est pas sur ce segment. Construis l'image [A'B'] de [AB] par la symétrie de centre O. Quelle est la longueur A'B' ?",
        correction: "Construis A' tel que O soit le milieu de [AA'], puis B' tel que O soit le milieu de [BB']. Trace [A'B'].\nLa symétrie conserve les longueurs, donc A'B' = AB = 5 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un triangle ABC a pour côtés AB = 4 cm, BC = 6 cm et CA = 5 cm. Son image par une symétrie centrale est le triangle A'B'C'.\n1. Donne les longueurs A'B', B'C' et C'A'.\n2. Calcule le périmètre de A'B'C'.",
        correction: "1. La symétrie conserve les longueurs : A'B' = 4 cm, B'C' = 6 cm et C'A' = 5 cm.\n2. Périmètre : 4 + 6 + 5 = 15 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un cercle de centre I et de rayon 2 cm a pour image un cercle par la symétrie de centre O.\n1. Comment construire le centre I' du cercle image ?\n2. Quel est son rayon ?\n3. Que se passe-t-il si I et O sont confondus ?",
        correction: "1. Construis I' tel que O soit le milieu de [II'] si I est distinct de O.\n2. La symétrie conserve les longueurs : le rayon est 2 cm.\n3. Si I = O, le centre reste O et le cercle a pour image lui-même."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "ABCD est un parallélogramme. Ses diagonales se coupent en O. On sait que AC = 8 cm et BD = 6 cm.\n1. Pourquoi O est-il un centre de symétrie de ABCD ?\n2. Quelle est l'image de A ? Celle de B ?\n3. Calcule OA et OB.",
        correction: "1. Les diagonales d'un parallélogramme se coupent en leur milieu. O est donc le milieu de [AC] et de [BD] : les sommets opposés sont symétriques par rapport à O. Le parallélogramme a ainsi pour image lui-même.\n2. L'image de A est C et l'image de B est D.\n3. OA = AC ÷ 2 = 4 cm et OB = BD ÷ 2 = 3 cm."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère une droite (d) et un point O situé sur cette droite.\n1. Choisis deux points distincts A et B sur (d), puis construis leurs images A' et B' par la symétrie de centre O.\n2. Quelle est l'image de la droite (d) ?\n3. La droite image est-elle nécessairement différente de (d) ?",
        correction: "1. Construis A' et B' en prenant O comme milieu de [AA'] et de [BB']. Si l'un des points choisis est O, son image est O lui-même.\n2. L'image de (d) est la droite (A'B'). Comme O, A et B sont sur (d), leurs images A' et B' sont aussi sur (d). La droite image est donc (d).\n3. Non. Ici, puisque (d) passe par le centre, elle a pour image elle-même."
      }
    ]
  }
]);
