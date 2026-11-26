enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-rotations-similitudes-triangles-semblables",
    titre: "Chapitre 27 : Rotations, similitudes et triangles semblables",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch27-rotations",
        titre: "1. Rotations du plan",
        blocs: [
          {
            type: "definition",
            titre: "Centre et angle",
            texte: "La rotation de centre O et d'angle orienté θ associe à chaque point M un point M' tel que OM' = OM et, si M ≠ O, l'angle orienté de OM⃗ vers OM'⃗ est égal à θ modulo 2π. Le point O est fixe."
          },
          {
            type: "regle",
            titre: "Sens de rotation",
            texte: "Un angle positif correspond au sens inverse des aiguilles d'une montre ; un angle négatif correspond à l'autre sens. Une rotation d'angle π est une symétrie centrale. Une rotation d'angle 0 modulo 2π laisse tous les points fixes."
          },
          {
            type: "schema",
            titre: "Rotation d'un quart de tour",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' role='img' aria-label='Le point M situé à droite de O a pour image M prime au-dessus de O par une rotation de centre O et d’angle positif pi sur deux.'><rect width='360' height='240' fill='white'/><line x1='140' y1='160' x2='250' y2='160' stroke='#1769aa' stroke-width='2'/><line x1='140' y1='160' x2='140' y2='50' stroke='#c43b35' stroke-width='2'/><path d='M180 160 A40 40 0 0 0 140 120' fill='none' stroke='#555' stroke-width='2'/><path d='M145 125 L140 120 L136 126' fill='none' stroke='#555' stroke-width='2'/><circle cx='140' cy='160' r='4' fill='#333'/><circle cx='250' cy='160' r='4' fill='#1769aa'/><circle cx='140' cy='50' r='4' fill='#c43b35'/><text x='125' y='180' font-size='14'>O</text><text x='255' y='165' font-size='14'>M</text><text x='147' y='49' font-size='14'>M'</text><text x='155' y='130' font-size='14'>π/2</text></svg>",
            legende: "La rotation de centre O et d'angle π/2 envoie M sur M'. Elle conserve la distance à O."
          },
          {
            type: "regle",
            titre: "Propriétés",
            texte: "Une rotation est une isométrie : elle conserve les distances, les angles géométriques, l'alignement et l'orientation. Sa réciproque est la rotation de même centre et d'angle −θ."
          },
          {
            type: "regle",
            titre: "Coordonnées pour un centre à l'origine",
            texte: "Dans un repère orthonormé direct, l'image de M(x ; y) par la rotation de centre O(0 ; 0) et d'angle θ est M'(x cos θ − y sin θ ; x sin θ + y cos θ). Pour θ = π/2, on obtient M'(−y ; x)."
          },
          {
            type: "exemple",
            titre: "Rotation d'un point",
            texte: "Dans un repère orthonormé direct, la rotation de centre O(0 ; 0) et d'angle π/2 transforme M(3 ; 1) en M'(−1 ; 3). On vérifie que OM² = 3² + 1² = 10 et OM'² = (−1)² + 3² = 10."
          },
          {
            type: "methode",
            titre: "Construire l'image d'un point",
            texte: "Pour M différent du centre O, tracer le cercle de centre O passant par M, puis reporter l'angle orienté θ à partir de la demi-droite [OM). L'intersection obtenue avec le cercle est M'. Si M = O, son image est O."
          }
        ]
      },
      {
        id: "m1-ch27-similitudes",
        titre: "2. Similitudes",
        blocs: [
          {
            type: "definition",
            titre: "Transformation qui multiplie les distances",
            texte: "Une similitude du plan de rapport r > 0 est une transformation qui multiplie toutes les distances par r : pour tous points A et B, leurs images A' et B' vérifient A'B' = r AB."
          },
          {
            type: "regle",
            titre: "Propriétés",
            texte: "Une similitude conserve l'alignement, les angles géométriques et les rapports de longueurs. Elle transforme une droite en droite et un cercle en cercle. Si r = 1, c'est une isométrie."
          },
          {
            type: "regle",
            titre: "Similitudes directes et indirectes",
            texte: "Une similitude directe conserve l'orientation ; une similitude indirecte la renverse. Une rotation suivie d'une homothétie de même centre et de rapport positif r est une similitude directe de rapport r. Une symétrie axiale suivie d'une homothétie de rapport non nul est un exemple de similitude indirecte."
          },
          {
            type: "remarque",
            titre: "Attention au rapport",
            texte: "Le rapport d'une similitude est une longueur relative, donc il est strictement positif. Une homothétie de rapport k ≠ 0 est une similitude de rapport |k| ; même si k est négatif, elle conserve l'orientation dans le plan."
          },
          {
            type: "exemple",
            titre: "Rotation suivie d'un agrandissement",
            texte: "Dans un repère orthonormé direct, on effectue une rotation de centre O et d'angle π/2, puis une homothétie de centre O et de rapport 2. Le point A(1 ; 2) devient d'abord (−2 ; 1), puis A'(−4 ; 2). Toutes les longueurs sont multipliées par 2."
          },
          {
            type: "regle",
            titre: "Composition",
            texte: "La composition de deux similitudes de rapports r et s est une similitude de rapport rs. La réciproque d'une similitude de rapport r est une similitude de rapport 1/r."
          },
          {
            type: "schema",
            titre: "Une similitude directe de centre O",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 260' role='img' aria-label='Un triangle OAB et son image OA prime B prime par une rotation de centre O d’angle pi sur deux suivie d’un agrandissement de rapport deux.'><rect width='420' height='260' fill='white'/><polygon points='150,200 200,200 200,175' fill='none' stroke='#1769aa' stroke-width='2'/><polygon points='150,200 150,100 200,100' fill='none' stroke='#c43b35' stroke-width='2'/><circle cx='150' cy='200' r='4' fill='#333'/><circle cx='200' cy='200' r='4' fill='#1769aa'/><circle cx='200' cy='175' r='4' fill='#1769aa'/><circle cx='150' cy='100' r='4' fill='#c43b35'/><circle cx='200' cy='100' r='4' fill='#c43b35'/><text x='132' y='220' font-size='14'>O</text><text x='203' y='218' font-size='14' fill='#1769aa'>A</text><text x='204' y='173' font-size='14' fill='#1769aa'>B</text><text x='130' y='97' font-size='14' fill='#c43b35'>A'</text><text x='203' y='97' font-size='14' fill='#c43b35'>B'</text></svg>",
            legende: "Le triangle rouge est l'image du triangle bleu par une rotation d'angle π/2 suivie d'une homothétie de rapport 2, toutes deux de centre O."
          }
        ]
      },
      {
        id: "m1-ch27-triangles",
        titre: "3. Triangles semblables",
        blocs: [
          {
            type: "definition",
            titre: "Même forme",
            texte: "Deux triangles non aplatis sont semblables lorsque leurs angles correspondants sont égaux. Leurs côtés correspondants sont alors proportionnels. Le coefficient de proportionnalité est le rapport de similitude entre les deux triangles."
          },
          {
            type: "regle",
            titre: "Critères de similitude",
            texte: "Deux triangles non aplatis sont semblables notamment si : deux angles de l'un sont égaux à deux angles de l'autre ; ou leurs trois côtés correspondants sont proportionnels ; ou deux côtés correspondants sont proportionnels et les angles compris entre ces côtés sont égaux."
          },
          {
            type: "methode",
            titre: "Associer les sommets avant de calculer",
            texte: "Repérer les angles égaux et écrire les sommets dans l'ordre correspondant. Si ABC et A'B'C' sont semblables avec A ↔ A', B ↔ B' et C ↔ C', alors A'B'/AB = B'C'/BC = A'C'/AC."
          },
          {
            type: "exemple",
            titre: "Calculer une longueur",
            texte: "Deux triangles ABC et DEF sont semblables avec A ↔ D, B ↔ E et C ↔ F. On sait que AB = 3, BC = 4 et DE = 6. Le rapport de ABC vers DEF vaut DE/AB = 2, donc EF = 2 × BC = 8."
          },
          {
            type: "regle",
            titre: "Périmètres et aires",
            texte: "Si deux triangles semblables ont un rapport de longueurs r > 0, leurs périmètres sont dans le rapport r et leurs aires dans le rapport r²."
          },
          {
            type: "exemple",
            titre: "Agrandissement et aire",
            texte: "Si les côtés d'un triangle sont multipliés par 3, son périmètre est multiplié par 3 et son aire par 3² = 9."
          },
          {
            type: "remarque",
            titre: "Correspondance des côtés",
            texte: "Il faut comparer les côtés placés en face d'angles correspondants. Des rapports écrits dans un ordre incohérent peuvent conduire à un résultat faux."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère orthonormé direct, donner l'image de A(2 ; 3) par la rotation de centre O(0 ; 0) et d'angle π/2.",
        correction: "Pour une rotation d'angle π/2, (x ; y) devient (−y ; x). L'image est donc A'(−3 ; 2)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une similitude de rapport 3 transforme un segment de longueur 4 cm. Quelle est la longueur de son image ?",
        correction: "Les distances sont multipliées par 3. La longueur de l'image est 3 × 4 = 12 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux triangles non aplatis ont respectivement deux angles de 40° et 65°. Sont-ils semblables ? Justifier.",
        correction: "Leurs deux premiers angles sont égaux ; le troisième mesure aussi 180° − 40° − 65° = 75° dans chacun. Les triangles sont semblables par le critère des angles."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux triangles ABC et DEF sont semblables avec A ↔ D, B ↔ E et C ↔ F. On donne AB = 5 cm, BC = 7 cm et DE = 10 cm. Calculer EF.",
        correction: "Le rapport de ABC vers DEF est DE/AB = 10/5 = 2. Le côté BC correspond à EF, donc EF = 2 × 7 = 14 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé direct, une transformation est obtenue en appliquant une rotation de centre O(0 ; 0) et d'angle π/2, puis une homothétie de centre O et de rapport 3. Déterminer l'image de A(2 ; −1) et le rapport de cette similitude.",
        correction: "La rotation transforme A(2 ; −1) en (1 ; 2). L'homothétie de rapport 3 donne A'(3 ; 6). La rotation conserve les distances et l'homothétie les multiplie par 3 : la similitude obtenue a pour rapport 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux triangles ont pour longueurs de côtés 3 cm, 4 cm, 5 cm et 6 cm, 8 cm, 10 cm. Montrer qu'ils sont semblables et comparer leurs aires.",
        correction: "Les côtés correspondants sont proportionnels : 6/3 = 8/4 = 10/5 = 2. Les triangles sont semblables, avec un rapport de 2 du premier vers le second. Leurs aires sont donc dans le rapport 2² = 4 : l'aire du second est quatre fois celle du premier."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé direct, on applique à M(x ; y) une rotation de centre O(0 ; 0) et d'angle π/2, puis une homothétie de centre O et de rapport 2. Exprimer les coordonnées de M'. Déterminer le point M dont l'image est M'(−6 ; 4).",
        correction: "Après la rotation, les coordonnées sont (−y ; x). Après l'homothétie, M'(−2y ; 2x). Pour obtenir M'(−6 ; 4), on résout −2y = −6 et 2x = 4 : y = 3 et x = 2. Le point recherché est M(2 ; 3)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Les triangles ABC et DEF sont semblables avec A ↔ D, B ↔ E et C ↔ F. On donne AB = 4 cm, BC = 6 cm, AC = 8 cm et le périmètre de DEF vaut 45 cm. Calculer les trois côtés de DEF et comparer les aires des deux triangles.",
        correction: "Le périmètre de ABC vaut 4 + 6 + 8 = 18 cm. Le rapport de similitude de ABC vers DEF est 45/18 = 5/2. Ainsi DE = 4 × 5/2 = 10 cm, EF = 6 × 5/2 = 15 cm et DF = 8 × 5/2 = 20 cm. L'aire de DEF est (5/2)² = 25/4 fois celle de ABC."
      }
    ]
  }
]);
