enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch10",
    titre: "Chapitre 10 : Repérage dans le plan",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch10-lecon1",
        titre: "1. D’une droite à un plan",
        blocs: [
          {
            type: "texte",
            titre: "Se repérer sur une droite",
            texte: "Sur une droite graduée, un seul nombre suffit pour repérer un point. Par exemple, le point A d’abscisse 3 est placé sur la graduation 3."
          },
          {
            type: "texte",
            titre: "Se repérer dans un plan",
            texte: "Sur une feuille ou dans un plan, un seul nombre ne suffit généralement pas : il faut indiquer une position dans deux directions. On utilise pour cela deux axes gradués."
          },
          {
            type: "definition",
            titre: "Un repère",
            texte: "Un repère du plan est formé de deux axes gradués qui se coupent en un point appelé origine. Dans ce chapitre, nous utilisons un axe horizontal et un axe vertical."
          },
          {
            type: "texte",
            titre: "Les deux axes",
            texte: "L’axe horizontal est l’axe des abscisses. L’axe vertical est l’axe des ordonnées. Leur point d’intersection est l’origine, notée O."
          },
          {
            type: "remarque",
            titre: "Le sens des axes",
            texte: "Dans les repères utilisés ici, les abscisses augmentent vers la droite et les ordonnées augmentent vers le haut. Il faut toujours observer les graduations et les flèches d’un repère."
          }
        ]
      },

      {
        id: "maths5-ch10-lecon2",
        titre: "2. Lire les coordonnées d’un point",
        blocs: [
          {
            type: "definition",
            titre: "Coordonnées",
            texte: "La position d’un point dans un repère est donnée par deux nombres, dans un ordre précis : son abscisse, puis son ordonnée. On écrit par exemple A(3 ; 2)."
          },
          {
            type: "schema",
            titre: "Le point A(3 ; 2)",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 290' role='img' aria-label='Repère gradué avec le point A de coordonnées 3 et 2'><g stroke='#dbe4ed' stroke-width='1'><path d='M40 30V250 M80 30V250 M120 30V250 M160 30V250 M200 30V250 M240 30V250 M280 30V250 M320 30V250 M360 30V250'/><path d='M40 30H360 M40 70H360 M40 110H360 M40 150H360 M40 190H360 M40 230H360'/></g><g stroke='#333' stroke-width='2' fill='none'><path d='M30 150H375 M365 144l10 6-10 6'/><path d='M160 260V20 M154 30l6-10 6 10'/></g><g font-size='15' fill='#333'><text x='165' y='169'>O</text><text x='197' y='169'>1</text><text x='237' y='169'>2</text><text x='277' y='169'>3</text><text x='145' y='115'>1</text><text x='145' y='75'>2</text><text x='375' y='145'>x</text><text x='168' y='24'>y</text></g><path d='M280 150V70H160' fill='none' stroke='#d64545' stroke-width='2' stroke-dasharray='6 4'/><circle cx='280' cy='70' r='6' fill='#d64545'/><text x='290' y='64' font-size='17' fill='#b32626'>A(3 ; 2)</text></svg>",
            legende: "A est à 3 unités à droite et à 2 unités au-dessus de l’origine."
          },
          {
            type: "methode",
            titre: "Lire un point",
            texte: "1. Depuis le point, imagine une ligne verticale jusqu’à l’axe horizontal : lis l’abscisse. 2. Imagine une ligne horizontale jusqu’à l’axe vertical : lis l’ordonnée. 3. Écris les deux nombres dans cet ordre."
          },
          {
            type: "exemple",
            titre: "Exemple",
            texte: "Pour le point A du schéma, on lit 3 sur l’axe horizontal et 2 sur l’axe vertical. Ses coordonnées sont A(3 ; 2)."
          },
          {
            type: "remarque",
            titre: "L’ordre est important",
            texte: "A(3 ; 2) et B(2 ; 3) ne désignent pas le même point : dans le premier cas l’abscisse est 3 ; dans le second, elle est 2."
          }
        ]
      },

      {
        id: "maths5-ch10-lecon3",
        titre: "3. Placer un point",
        blocs: [
          {
            type: "methode",
            titre: "Placer A(3 ; 2)",
            texte: "1. Pars de l’origine O. 2. Déplace-toi de 3 unités vers la droite : c’est l’abscisse. 3. À partir de là, monte de 2 unités : c’est l’ordonnée. 4. Marque le point et écris son nom A."
          },
          {
            type: "exemple",
            titre: "Avec une abscisse négative",
            texte: "Pour placer B(−2 ; 1), pars de O, va de 2 unités vers la gauche, puis monte de 1 unité."
          },
          {
            type: "exemple",
            titre: "Avec une ordonnée négative",
            texte: "Pour placer C(2 ; −3), pars de O, va de 2 unités vers la droite, puis descends de 3 unités."
          },
          {
            type: "exemple",
            titre: "Deux coordonnées négatives",
            texte: "Pour placer D(−1 ; −2), pars de O, va de 1 unité vers la gauche, puis descends de 2 unités."
          },
          {
            type: "remarque",
            titre: "Vérifier les graduations",
            texte: "Avant de placer un point, regarde ce que vaut chaque intervalle sur chaque axe. Dans certains repères, une graduation peut valoir 2 unités ou 0,5 unité."
          }
        ]
      },

      {
        id: "maths5-ch10-lecon4",
        titre: "4. Les signes et les axes",
        blocs: [
          {
            type: "tableau",
            titre: "Où se trouve le point ?",
            entetes: ["Abscisse", "Ordonnée", "Position par rapport à O"],
            lignes: [
              ["Positive", "Positive", "À droite et au-dessus"],
              ["Négative", "Positive", "À gauche et au-dessus"],
              ["Négative", "Négative", "À gauche et au-dessous"],
              ["Positive", "Négative", "À droite et au-dessous"]
            ]
          },
          {
            type: "exemple",
            titre: "Lire les signes",
            texte: "E(−4 ; 2) est à gauche de O, car son abscisse est négative, et au-dessus de O, car son ordonnée est positive."
          },
          {
            type: "regle",
            titre: "Un point sur un axe",
            texte: "Un point d’ordonnée 0 est sur l’axe des abscisses. Un point d’abscisse 0 est sur l’axe des ordonnées."
          },
          {
            type: "exemple",
            titre: "Exemples",
            texte: "F(4 ; 0) est sur l’axe horizontal. G(0 ; −3) est sur l’axe vertical. L’origine O a pour coordonnées (0 ; 0) : elle appartient aux deux axes."
          },
          {
            type: "remarque",
            titre: "Attention à zéro",
            texte: "Si une coordonnée est nulle, le point se trouve sur un axe. Il n’est donc pas dans l’une des quatre régions situées entre les axes."
          }
        ]
      },

      {
        id: "maths5-ch10-lecon5",
        titre: "5. Comparer les positions de plusieurs points",
        blocs: [
          {
            type: "regle",
            titre: "Même ordonnée",
            texte: "Dans les repères de ce chapitre, deux points qui ont la même ordonnée sont sur une même ligne horizontale."
          },
          {
            type: "exemple",
            titre: "Une ligne horizontale",
            texte: "A(−2 ; 3) et B(4 ; 3) ont la même ordonnée, 3. A est à gauche de B, car −2 < 4."
          },
          {
            type: "regle",
            titre: "Même abscisse",
            texte: "Deux points qui ont la même abscisse sont sur une même ligne verticale."
          },
          {
            type: "exemple",
            titre: "Une ligne verticale",
            texte: "C(2 ; −1) et D(2 ; 4) ont la même abscisse, 2. C est au-dessous de D, car −1 < 4."
          },
          {
            type: "remarque",
            titre: "Deux coordonnées égales",
            texte: "Si deux points ont exactement la même abscisse et la même ordonnée dans un même repère, ils occupent la même position."
          }
        ]
      },

      {
        id: "maths5-ch10-lecon6",
        titre: "6. Construire et utiliser un repère",
        blocs: [
          {
            type: "methode",
            titre: "Tracer un repère pour s’entraîner",
            texte: "1. Trace deux droites perpendiculaires : une horizontale et une verticale. 2. Nomme O leur point d’intersection. 3. Choisis une unité et reporte des graduations régulières sur chaque axe. 4. Indique les nombres positifs et négatifs."
          },
          {
            type: "texte",
            titre: "Un repère orthogonal",
            texte: "Lorsque les deux axes sont perpendiculaires, le repère est dit orthogonal. Ils peuvent avoir des unités de longueurs différentes. Si les unités ont aussi la même longueur sur les deux axes, le repère est dit orthonormé."
          },
          {
            type: "exemple",
            titre: "Construire une figure",
            texte: "Place A(1 ; 1), B(4 ; 1), C(4 ; 3) et D(1 ; 3), puis relie les points dans l’ordre A, B, C, D et A. Dans un repère orthogonal, on obtient un rectangle."
          },
          {
            type: "methode",
            titre: "Se relire",
            texte: "Pour vérifier un placement, lis les coordonnées du point tracé. Tu dois retrouver d’abord l’abscisse, puis l’ordonnée indiquées dans l’énoncé."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans A(4 ; −2), quelle est l’abscisse ? Quelle est l’ordonnée ?",
        correction: "L’abscisse est 4. L’ordonnée est −2."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donne les coordonnées de l’origine O.",
        correction: "L’origine a pour coordonnées O(0 ; 0)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un point est situé 3 unités à droite de O et 2 unités au-dessus. Donne ses coordonnées.",
        correction: "Son abscisse est 3 et son ordonnée est 2 : ses coordonnées sont (3 ; 2)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le point M(5 ; 0) est-il sur l’axe des abscisses ou sur l’axe des ordonnées ?",
        correction: "M est sur l’axe des abscisses, car son ordonnée est 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Décris comment placer A(−3 ; 2) à partir de l’origine.",
        correction: "On va de 3 unités vers la gauche, puis de 2 unités vers le haut."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Décris comment placer B(2 ; −4) à partir de l’origine.",
        correction: "On va de 2 unités vers la droite, puis de 4 unités vers le bas."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le point C(−1 ; −5) est-il à droite ou à gauche de O ? Au-dessus ou au-dessous de O ?",
        correction: "C est à gauche de O, car −1 est négatif, et au-dessous de O, car −5 est négatif."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les points D(2 ; 3) et E(3 ; 2) ont-ils la même position ?",
        correction: "Non. D a pour abscisse 2 et pour ordonnée 3 ; E a pour abscisse 3 et pour ordonnée 2. L’ordre des coordonnées compte."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Parmi P(0 ; 4), Q(−2 ; 0) et R(0 ; 0), quels points sont sur l’axe des ordonnées ?",
        correction: "P et R sont sur l’axe des ordonnées, car leur abscisse est 0. R est l’origine : il est aussi sur l’axe des abscisses."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "A(−2 ; 3) et B(4 ; 3) sont-ils sur une même ligne horizontale ou verticale ? Quel point est le plus à gauche ?",
        correction: "Ils ont la même ordonnée, 3 : ils sont sur une même ligne horizontale. A est à gauche de B, car −2 < 4."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "C(2 ; −1) et D(2 ; 4) sont-ils sur une même ligne horizontale ou verticale ? Quel point est le plus haut ?",
        correction: "Ils ont la même abscisse, 2 : ils sont sur une même ligne verticale. D est plus haut que C, car 4 > −1."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Trace un repère, puis place A(1 ; 2), B(−2 ; 2) et C(−2 ; −1). Quels points ont la même ordonnée ?",
        correction: "A et B ont la même ordonnée, 2. Ils sont sur une même ligne horizontale. B et C ont la même abscisse, −2."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un point a une abscisse négative et une ordonnée positive. Où se trouve-t-il par rapport à O ?",
        correction: "Il se trouve à gauche de O et au-dessus de O."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Dans un repère orthogonal, place A(1 ; 1), B(4 ; 1), C(4 ; 3) et D(1 ; 3). Relie-les dans cet ordre, puis relie D à A. Quelle figure obtiens-tu ?",
        correction: "On obtient un rectangle. AB et CD sont horizontaux ; BC et DA sont verticaux. Les axes étant perpendiculaires, les côtés horizontaux et verticaux le sont aussi."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève dit : « Le point M(0 ; −3) est sur l’axe des abscisses parce qu’il contient un zéro. » Explique son erreur.",
        correction: "Le zéro est ici l’abscisse. M est donc sur l’axe des ordonnées. Pour être sur l’axe des abscisses, son ordonnée devrait être 0."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Le point A a la même abscisse que B(−2 ; 4) et la même ordonnée que C(3 ; −1). Quelles sont les coordonnées de A ?",
        correction: "A a pour abscisse −2, comme B, et pour ordonnée −1, comme C. Donc A(−2 ; −1)."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Sur un axe horizontal, chaque intervalle entre deux graduations vaut 2 unités. Un point est placé à la troisième graduation à droite de 0. Quelle est son abscisse ?",
        correction: "Chaque intervalle vaut 2 unités. À la troisième graduation, l’abscisse est 3 × 2 = 6."
      }
    ]
  }
]);
