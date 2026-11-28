enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch28",
    titre: "Chapitre 28 : Coniques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch28-l1",
        titre: "Leçon 1 : Découvrir les coniques",
        blocs: [
          {
            type: "introduction",
            titre: "Des courbes définies par des distances",
            texte: "Les coniques sont des courbes que l’on peut obtenir en coupant un cône par un plan. Dans ce chapitre, nous étudions trois familles non dégénérées : l’ellipse, l’hyperbole et la parabole.\n\nOn peut aussi les définir dans le plan à partir de points appelés foyers ou d’une droite appelée directrice."
          },
          {
            type: "texte",
            titre: "Prérequis",
            texte: "Dans un repère orthonormé, la distance entre A(xA ; yA) et M(x ; y) est :\n\nAM = √((x − xA)² + (y − yA)²).\n\nLa distance du point M(x ; y) à la droite verticale x = d est |x − d|. Pour une droite horizontale y = d, elle vaut |y − d|.\n\nPour résoudre les équations ci-dessous, il est utile de savoir développer, factoriser et compléter un carré."
          },
          {
            type: "tableau",
            titre: "Trois descriptions",
            entetes: ["Courbe", "Propriété caractéristique"],
            lignes: [
              ["Ellipse", "La somme des distances à deux foyers est constante."],
              ["Hyperbole", "La valeur absolue de la différence des distances à deux foyers est constante."],
              ["Parabole", "La distance à un foyer égale la distance à une directrice."]
            ]
          },
          {
            type: "remarque",
            titre: "Attention aux paramètres",
            texte: "Les formules du cours utilisent un repère orthonormé et des axes adaptés aux courbes. Selon les ouvrages, les lettres et les conventions pour les paramètres peuvent changer : il faut toujours vérifier l’équation choisie."
          }
        ]
      },

      {
        id: "tle-maths-ch28-l2",
        titre: "Leçon 2 : Ellipse et cercle",
        blocs: [
          {
            type: "definition",
            titre: "Équation réduite de l’ellipse",
            texte: "Dans un repère orthonormé, considérons :\n\nx²/a² + y²/b² = 1, avec a > b > 0.\n\nL’ellipse a pour centre O et pour sommets principaux (−a ; 0) et (a ; 0). Elle rencontre aussi l’axe des ordonnées en (0 ; −b) et (0 ; b).\n\nSes foyers sont F(−c ; 0) et F'(c ; 0), où c² = a² − b². Pour tout point M de l’ellipse : MF + MF' = 2a."
          },
          {
            type: "schema",
            titre: "Ellipse et foyers",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 200'><line x1='25' y1='100' x2='335' y2='100' stroke='#94a3b8'/><line x1='180' y1='15' x2='180' y2='185' stroke='#94a3b8'/><ellipse cx='180' cy='100' rx='130' ry='65' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='67' cy='100' r='3' fill='#dc2626'/><circle cx='293' cy='100' r='3' fill='#dc2626'/><circle cx='180' cy='35' r='3' fill='#16a34a'/><line x1='67' y1='100' x2='180' y2='35' stroke='#dc2626' stroke-dasharray='4 3'/><line x1='293' y1='100' x2='180' y2='35' stroke='#dc2626' stroke-dasharray='4 3'/><text x='55' y='119' font-size='13'>F</text><text x='294' y='119' font-size='13'>F'</text><text x='186' y='30' font-size='13'>M</text><text x='185' y='117' font-size='13'>O</text><text x='44' y='94' font-size='13'>−a</text><text x='310' y='94' font-size='13'>a</text></svg>",
            legende: "Pour chaque point M de l’ellipse, la somme MF + MF' reste égale à 2a."
          },
          {
            type: "methode",
            titre: "Lire les éléments sur l’équation",
            texte: "Pour x²/a² + y²/b² = 1 avec a > b > 0 :\n1. Lire a² et b² sous les deux carrés.\n2. Calculer a, b, puis c = √(a² − b²).\n3. Placer le centre, les sommets et les foyers.\n4. Pour vérifier qu’un point appartient à l’ellipse, remplacer x et y dans son équation."
          },
          {
            type: "exemple",
            titre: "Une ellipse",
            texte: "Pour x²/25 + y²/9 = 1, on a a = 5, b = 3 et c = √(25 − 9) = 4.\n\nLes foyers sont (−4 ; 0) et (4 ; 0). Les sommets principaux sont (−5 ; 0) et (5 ; 0). Pour chaque point M de l’ellipse, la somme des distances aux foyers vaut 10."
          },
          {
            type: "texte",
            titre: "Cas du cercle",
            texte: "Si les deux dénominateurs sont égaux, x²/R² + y²/R² = 1 devient x² + y² = R² : c’est un cercle de centre O et de rayon R > 0. On peut le voir comme un cas particulier d’ellipse où les deux foyers sont confondus au centre."
          }
        ]
      },

      {
        id: "tle-maths-ch28-l3",
        titre: "Leçon 3 : Hyperbole",
        blocs: [
          {
            type: "definition",
            titre: "Équation réduite",
            texte: "Dans un repère orthonormé, considérons :\n\nx²/a² − y²/b² = 1, avec a > 0 et b > 0.\n\nL’hyperbole a deux branches, un centre O et deux sommets (−a ; 0) et (a ; 0). Ses foyers sont F(−c ; 0) et F'(c ; 0), avec c² = a² + b².\n\nPour tout point M de l’hyperbole : |MF − MF'| = 2a."
          },
          {
            type: "texte",
            titre: "Asymptotes",
            texte: "Les deux asymptotes de l’hyperbole x²/a² − y²/b² = 1 ont pour équations :\n\ny = (b/a)x et y = −(b/a)x.\n\nLes branches se rapprochent de ces droites lorsque |x| devient très grand. Ces droites ne font pas partie de l’hyperbole."
          },
          {
            type: "schema",
            titre: "Branches et asymptotes",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 220'><line x1='20' y1='110' x2='340' y2='110' stroke='#94a3b8'/><line x1='180' y1='15' x2='180' y2='205' stroke='#94a3b8'/><line x1='35' y1='20' x2='325' y2='200' stroke='#f59e0b' stroke-dasharray='5 4'/><line x1='35' y1='200' x2='325' y2='20' stroke='#f59e0b' stroke-dasharray='5 4'/><path d='M38 20 C85 45 119 76 120 110 C119 144 85 175 38 200' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M322 20 C275 45 241 76 240 110 C241 144 275 175 322 200' fill='none' stroke='#2563eb' stroke-width='3'/><text x='105' y='105' font-size='13'>−a</text><text x='243' y='105' font-size='13'>a</text><text x='185' y='127' font-size='13'>O</text><text x='260' y='30' font-size='12'>asymptotes</text></svg>",
            legende: "Les deux branches se rapprochent des asymptotes en pointillés loin du centre."
          },
          {
            type: "exemple",
            titre: "Lire une hyperbole",
            texte: "Pour x²/16 − y²/9 = 1, on a a = 4 et b = 3. Comme c² = 16 + 9 = 25, c = 5.\n\nLes foyers sont (−5 ; 0) et (5 ; 0), les sommets sont (−4 ; 0) et (4 ; 0), et les asymptotes sont y = 3x/4 et y = −3x/4."
          },
          {
            type: "remarque",
            titre: "Hyperbole verticale",
            texte: "L’équation y²/a² − x²/b² = 1 décrit une hyperbole dont les sommets et les foyers sont sur l’axe des ordonnées. Il faut adapter la lecture à l’axe portant le terme positif."
          }
        ]
      },

      {
        id: "tle-maths-ch28-l4",
        titre: "Leçon 4 : Parabole et reconnaissance",
        blocs: [
          {
            type: "definition",
            titre: "Foyer et directrice",
            texte: "Une parabole est l’ensemble des points M équidistants d’un point fixe F, appelé foyer, et d’une droite fixe D, appelée directrice, avec F hors de D.\n\nPour p > 0, la parabole d’équation y² = 2px a pour sommet O, foyer F(p/2 ; 0), directrice x = −p/2 et axe (Ox). Elle s’ouvre vers les x positifs."
          },
          {
            type: "exemple",
            titre: "D’où vient l’équation ?",
            texte: "Pour F(p/2 ; 0) et D : x = −p/2, la condition MF = distance de M à D s’écrit :\n\n√((x − p/2)² + y²) = |x + p/2|.\n\nLes deux membres étant positifs ou nuls, on peut élever au carré :\n(x − p/2)² + y² = (x + p/2)².\nAprès simplification, y² = 2px. Les étapes étant réversibles, cette équation décrit bien la parabole."
          },
          {
            type: "schema",
            titre: "Une parabole",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 220'><line x1='20' y1='110' x2='340' y2='110' stroke='#94a3b8'/><line x1='155' y1='15' x2='155' y2='205' stroke='#94a3b8'/><line x1='105' y1='15' x2='105' y2='205' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M315 20 Q-5 110 315 200' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='205' cy='110' r='4' fill='#dc2626'/><text x='210' y='105' font-size='13'>F</text><text x='158' y='127' font-size='13'>O</text><text x='65' y='30' font-size='13'>directrice</text></svg>",
            legende: "Le foyer F et la directrice sont à égale distance du sommet O. La parabole s’ouvre vers la droite."
          },
          {
            type: "methode",
            titre: "Reconnaître une équation réduite",
            texte: "• Deux carrés de même signe, dont la somme de termes positifs vaut 1 : ellipse ; si les dénominateurs sont égaux, cercle.\n• Deux carrés de signes opposés : hyperbole dans les formes réduites étudiées.\n• Un seul carré égal à un multiple non nul de l’autre coordonnée : parabole.\n\nPour une équation translatée, poser X = x − h et Y = y − k afin de retrouver une forme réduite. Le centre ou le sommet est alors (h ; k)."
          },
          {
            type: "exemple",
            titre: "Parabole translatée",
            texte: "Considérons (y − 2)² = 8(x + 1). En posant X = x + 1 et Y = y − 2, on obtient Y² = 8X.\n\nComme 2p = 8, p = 4. Dans le repère initial, le sommet est S(−1 ; 2), le foyer est F(−1 + 2 ; 2) = F(1 ; 2), et la directrice est x = −1 − 2 = −3."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Reconnaître la courbe d’équation x²/9 + y²/4 = 1.",
        correction: "C’est une ellipse centrée à l’origine. Ses demi-axes mesurent 3 selon l’axe des abscisses et 2 selon l’axe des ordonnées."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner le centre et le rayon du cercle x² + y² = 16.",
        correction: "On reconnaît x² + y² = R² avec R² = 16. Le centre est O(0 ; 0) et le rayon est R = 4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le point M(3 ; 0) appartient-il à l’ellipse x²/9 + y²/4 = 1 ?",
        correction: "En remplaçant x par 3 et y par 0, on obtient 3²/9 + 0²/4 = 1. M appartient donc à l’ellipse."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Reconnaître la courbe y² = 6x et donner son sommet.",
        correction: "C’est une parabole de la forme y² = 2px, avec p = 3. Son sommet est O(0 ; 0)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner les sommets de l’hyperbole x²/25 − y²/4 = 1.",
        correction: "On a a² = 25, donc a = 5. Les sommets sont (−5 ; 0) et (5 ; 0)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les foyers et la somme des distances focales de l’ellipse x²/36 + y²/20 = 1.",
        correction: "a = 6 et b² = 20. Donc c² = 36 − 20 = 16, soit c = 4. Les foyers sont (−4 ; 0) et (4 ; 0). Pour tout point M de l’ellipse, MF + MF' = 2a = 12."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les foyers et les asymptotes de l’hyperbole x²/9 − y²/16 = 1.",
        correction: "a = 3, b = 4 et c = √(9 + 16) = 5. Les foyers sont (−5 ; 0) et (5 ; 0). Les asymptotes sont y = 4x/3 et y = −4x/3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer le foyer et la directrice de la parabole y² = 12x.",
        correction: "On compare à y² = 2px : 2p = 12, donc p = 6. Le foyer est F(p/2 ; 0) = F(3 ; 0) et la directrice est x = −p/2 = −3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le point M(5 ; 3) appartient-il à l’hyperbole x²/16 − y²/9 = 1 ?",
        correction: "On calcule 5²/16 − 3²/9 = 25/16 − 1 = 9/16. Ce n’est pas égal à 1 : M n’appartient pas à l’hyperbole."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer le centre et les demi-axes de l’ellipse (x − 2)²/25 + (y + 1)²/9 = 1.",
        correction: "En posant X = x − 2 et Y = y + 1, on obtient X²/25 + Y²/9 = 1. Le centre est (2 ; −1). Les demi-axes mesurent 5 horizontalement et 3 verticalement."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer l’équation du cercle de centre A(1 ; −2) et de rayon 3.",
        correction: "M(x ; y) appartient au cercle si AM = 3. En élevant au carré : (x − 1)² + (y + 2)² = 9."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une ellipse centrée en O a pour foyers (−3 ; 0) et (3 ; 0). Pour chacun de ses points M, la somme des distances aux foyers vaut 10. Déterminer son équation réduite.",
        correction: "On a c = 3 et 2a = 10, donc a = 5. Puis b² = a² − c² = 25 − 9 = 16. L’axe principal est horizontal : l’équation est x²/25 + y²/16 = 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer le sommet, le foyer et la directrice de (y + 1)² = 4(x − 2).",
        correction: "Posons X = x − 2 et Y = y + 1. On obtient Y² = 4X, soit 2p = 4 et p = 2. Le sommet est S(2 ; −1). Le foyer est situé à p/2 = 1 unité à droite du sommet : F(3 ; −1). La directrice est à une unité à gauche : x = 1."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. On considère la courbe C : 4x² + 9y² = 36. 1. Mettre l’équation sous forme réduite et identifier C. 2. Donner ses sommets sur les axes et ses foyers. 3. Le point M(0 ; 2) appartient-il à C ? Calculer alors MF + MF'.",
        correction: "1. En divisant par 36 : x²/9 + y²/4 = 1. C est une ellipse centrée en O.\n2. a = 3 et b = 2. Les sommets sur les axes sont (−3 ; 0), (3 ; 0), (0 ; −2) et (0 ; 2). On a c = √(9 − 4) = √5 : les foyers sont F(−√5 ; 0) et F'(√5 ; 0).\n3. Pour M(0 ; 2), 0²/9 + 2²/4 = 1, donc M appartient à C. Ainsi MF + MF' = 2a = 6. On peut vérifier : MF = MF' = √(5 + 4) = 3."
      }
    ]
  }
]);
