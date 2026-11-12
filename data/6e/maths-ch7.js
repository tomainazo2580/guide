enregistrerChapitres("6e", "maths", [
  {
    id: "ch7",
    titre: "Chapitre 7 : Droites, segments et angles",
    premium: false,
    guide: true,
    lecons: [
      {
        id: "ch7-lecon1",
        titre: "Leçon 1 : Points, droites, demi-droites et segments",
        blocs: [
          { type: "texte", texte: "En géométrie, tout commence par le point. Un point se marque par une petite croix ou un petit point, et on le nomme avec une lettre majuscule : A, B, M...\n\nÀ partir des points, on peut tracer des lignes. Mais attention : en mathématiques, il y a trois sortes de lignes droites à bien distinguer." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='150' viewBox='0 0 320 150'><line x1='30' y1='30' x2='290' y2='30' stroke='#1E88E5' stroke-width='2'/><polygon points='30,30 42,26 42,34' fill='#1E88E5'/><polygon points='290,30 278,26 278,34' fill='#1E88E5'/><circle cx='120' cy='30' r='3' fill='#E53935'/><circle cx='200' cy='30' r='3' fill='#E53935'/><text x='120' y='20' font-size='12' text-anchor='middle' fill='#E53935'>A</text><text x='200' y='20' font-size='12' text-anchor='middle' fill='#E53935'>B</text><text x='160' y='48' font-size='12' text-anchor='middle' fill='#333333'>droite (AB) : illimitée des deux côtés</text><circle cx='50' cy='80' r='3' fill='#E53935'/><line x1='50' y1='80' x2='290' y2='80' stroke='#43A047' stroke-width='2'/><polygon points='290,80 278,76 278,84' fill='#43A047'/><circle cx='160' cy='80' r='3' fill='#E53935'/><text x='50' y='70' font-size='12' text-anchor='middle' fill='#E53935'>A</text><text x='160' y='70' font-size='12' text-anchor='middle' fill='#E53935'>B</text><text x='160' y='98' font-size='12' text-anchor='middle' fill='#333333'>demi-droite [AB) : commence en A, illimitée après B</text><line x1='60' y1='125' x2='260' y2='125' stroke='#F4B400' stroke-width='2.5'/><circle cx='60' cy='125' r='3' fill='#E53935'/><circle cx='260' cy='125' r='3' fill='#E53935'/><text x='60' y='115' font-size='12' text-anchor='middle' fill='#E53935'>A</text><text x='260' y='115' font-size='12' text-anchor='middle' fill='#E53935'>B</text><text x='160' y='143' font-size='12' text-anchor='middle' fill='#333333'>segment [AB] : limité par A et B</text></svg>", legende: "Les trois sortes de lignes droites. Les flèches montrent que la ligne continue sans fin." },
          { type: "definition", texte: "Une droite est une ligne droite illimitée des deux côtés. On la note (d) avec une petite lettre, ou (AB) avec deux de ses points, entre parenthèses." },
          { type: "definition", texte: "Une demi-droite a un début mais pas de fin. Elle commence en A et passe par B. On la note [AB) : un crochet du côté du début, une parenthèse du côté infini." },
          { type: "definition", texte: "Un segment est un morceau de droite limité par deux points appelés extrémités. On le note [AB], avec deux crochets.\nC'est le seul des trois qu'on peut mesurer !" },
          { type: "definition", texte: "Des points sont alignés quand ils sont sur la même droite." },
          { type: "remarque", texte: "Retiens bien les notations :\n• (AB) avec parenthèses : la droite\n• [AB) avec un crochet : la demi-droite\n• [AB] avec deux crochets : le segment" }
        ]
      },
      {
        id: "ch7-lecon2",
        titre: "Leçon 2 : Mesurer un segment, le milieu",
        blocs: [
          { type: "texte", texte: "Une droite est infinie : impossible de la mesurer. Mais un segment a un début et une fin, donc il a une longueur qu'on peut mesurer avec la règle." },
          { type: "definition", texte: "La longueur d'un segment [AB] est la distance entre ses deux extrémités. On la note AB, sans crochets.\nExemple : AB = 5 cm se lit « la longueur du segment [AB] est 5 centimètres »." },
          { type: "methode", texte: "Pour mesurer un segment avec la règle :\n1. Place le zéro de la règle exactement sur l'extrémité A.\n2. Lis le nombre qui se trouve en face de l'extrémité B.\n3. Écris la longueur avec l'unité : AB = 7 cm." },
          { type: "definition", texte: "Le milieu d'un segment est le point qui partage le segment en deux parties de même longueur.\nSi I est le milieu de [AB], alors AI = IB." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='100' viewBox='0 0 320 100'><line x1='40' y1='50' x2='280' y2='50' stroke='#1E88E5' stroke-width='2.5'/><circle cx='40' cy='50' r='3.5' fill='#E53935'/><circle cx='280' cy='50' r='3.5' fill='#E53935'/><circle cx='160' cy='50' r='3.5' fill='#43A047'/><text x='40' y='38' font-size='13' text-anchor='middle' fill='#E53935'>A</text><text x='280' y='38' font-size='13' text-anchor='middle' fill='#E53935'>B</text><text x='160' y='38' font-size='13' text-anchor='middle' fill='#43A047'>I</text><text x='100' y='72' font-size='12' text-anchor='middle' fill='#333333'>AI</text><text x='220' y='72' font-size='12' text-anchor='middle' fill='#333333'>IB</text><text x='160' y='92' font-size='12' text-anchor='middle' fill='#333333'>I est le milieu de [AB] : AI = IB</text></svg>", legende: "Le point I est exactement au milieu du segment [AB]." },
          { type: "exemple", texte: "Exemple 1 : AB = 6 cm et I est le milieu de [AB].\nAlors AI = IB = 6 ÷ 2 = 3 cm.\n\nExemple 2 : M est le milieu de [RS] et RM = 3,5 cm.\nAlors RS = 2 × 3,5 = 7 cm." },
          { type: "remarque", texte: "Attention à l'écriture : [AB] avec crochets désigne le segment (le dessin), AB sans crochets désigne sa longueur (un nombre)." }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch7-lecon3",
        titre: "Leçon 3 : Les angles",
        blocs: [
          { type: "texte", texte: "Une porte qui s'ouvre, des ciseaux qu'on écarte, les aiguilles d'une montre : partout, il y a des angles.\n\nUn angle, c'est une ouverture formée par deux demi-droites qui partent du même point." },
          { type: "definition", texte: "Un angle est formé par deux demi-droites de même origine.\n• L'origine commune s'appelle le sommet de l'angle.\n• Les deux demi-droites s'appellent les côtés de l'angle." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='150' viewBox='0 0 320 150'><circle cx='100' cy='110' r='4' fill='#E53935'/><line x1='100' y1='110' x2='250' y2='110' stroke='#1E88E5' stroke-width='2.5'/><line x1='100' y1='110' x2='210' y2='35' stroke='#1E88E5' stroke-width='2.5'/><path d='M 140 110 A 40 40 0 0 0 133 87.5' fill='none' stroke='#F4B400' stroke-width='2.5'/><text x='88' y='126' font-size='13' fill='#E53935'>O</text><text x='255' y='114' font-size='13' fill='#333333'>x</text><text x='215' y='32' font-size='13' fill='#333333'>y</text><text x='148' y='98' font-size='12' fill='#B8860B'>l'ouverture</text><text x='100' y='140' font-size='12' text-anchor='middle' fill='#333333'>sommet</text><text x='235' y='132' font-size='12' fill='#1E88E5'>côté</text></svg>", legende: "L'angle xOy : le sommet O et les deux côtés [Ox) et [Oy)." },
          { type: "methode", texte: "Pour nommer un angle, on utilise trois lettres, et le sommet est toujours au milieu :\nl'angle xOy a pour sommet O et pour côtés [Ox) et [Oy).\nOn peut aussi l'écrire yOx, c'est le même angle." },
          { type: "definition", texte: "Un angle se mesure en degrés. Le symbole du degré est °.\nL'instrument qui mesure les angles s'appelle le rapporteur.\nExemples : 30°, 90°, 120°." },
          { type: "remarque", texte: "La grandeur d'un angle dépend de l'ouverture entre ses côtés, pas de la longueur des côtés. Un angle dessiné avec des côtés très longs n'est pas plus grand !" }
        ]
      },
      {
        id: "ch7-lecon4",
        titre: "Leçon 4 : Les types d'angles",
        blocs: [
          { type: "texte", texte: "Selon leur ouverture, on range les angles en quatre familles. Le point de repère est l'angle droit : celui du coin de ton cahier." },
          { type: "definition", texte: "L'angle droit mesure exactement 90°. C'est l'angle du coin d'un cahier, d'une porte ou d'une table. Sur un dessin, on le marque avec un petit carré." },
          { type: "definition", texte: "L'angle aigu est plus fermé que l'angle droit : il mesure moins de 90°.\nExemples : 30°, 45°, 60°." },
          { type: "definition", texte: "L'angle obtus est plus ouvert que l'angle droit : il mesure entre 90° et 180°.\nExemples : 120°, 135°, 150°." },
          { type: "definition", texte: "L'angle plat mesure exactement 180°. Ses deux côtés forment une ligne droite." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='135' viewBox='0 0 320 135'><circle cx='50' cy='90' r='3' fill='#333333'/><line x1='50' y1='90' x2='120' y2='90' stroke='#1E88E5' stroke-width='2'/><line x1='50' y1='90' x2='105' y2='48' stroke='#1E88E5' stroke-width='2'/><path d='M 75 90 A 25 25 0 0 0 70 75' fill='none' stroke='#E53935' stroke-width='2'/><text x='85' y='115' font-size='12' text-anchor='middle' fill='#333333'>aigu</text><text x='85' y='129' font-size='11' text-anchor='middle' fill='#666666'>moins de 90°</text><circle cx='175' cy='90' r='3' fill='#333333'/><line x1='175' y1='90' x2='245' y2='90' stroke='#1E88E5' stroke-width='2'/><line x1='175' y1='90' x2='175' y2='30' stroke='#1E88E5' stroke-width='2'/><polyline points='175,78 187,78 187,90' fill='none' stroke='#E53935' stroke-width='2'/><text x='210' y='115' font-size='12' text-anchor='middle' fill='#333333'>droit</text><text x='210' y='129' font-size='11' text-anchor='middle' fill='#666666'>90°</text><circle cx='275' cy='90' r='3' fill='#333333'/><line x1='275' y1='90' x2='315' y2='90' stroke='#1E88E5' stroke-width='2'/><line x1='275' y1='90' x2='228' y2='55' stroke='#1E88E5' stroke-width='2'/><path d='M 295 90 A 20 20 0 0 0 259 78' fill='none' stroke='#E53935' stroke-width='2'/><text x='270' y='115' font-size='12' text-anchor='middle' fill='#333333'>obtus</text><text x='270' y='129' font-size='11' text-anchor='middle' fill='#666666'>entre 90° et 180°</text></svg>", legende: "De gauche à droite : un angle aigu, un angle droit (avec son petit carré), un angle obtus." },
          { type: "tableau", entetes: ["Type d'angle", "Mesure", "Exemple de la vie courante"], lignes: [["Aigu", "moins de 90°", "ciseaux à peine ouverts"], ["Droit", "exactement 90°", "coin du cahier"], ["Obtus", "entre 90° et 180°", "porte grande ouverte"], ["Plat", "exactement 180°", "ligne droite"]] },
          { type: "remarque", texte: "Pour vérifier si un angle est droit, utilise l'équerre : si l'angle épouse exactement le coin de l'équerre, c'est un angle droit." }
        ]
      },
      {
        id: "ch7-lecon5",
        titre: "Leçon 5 : Droites perpendiculaires et parallèles",
        blocs: [
          { type: "texte", texte: "Sur une feuille, deux droites peuvent être dans deux situations : soit elles se coupent, soit elles ne se coupent jamais." },
          { type: "definition", texte: "Deux droites qui se coupent en un point sont sécantes." },
          { type: "definition", texte: "Deux droites perpendiculaires sont deux droites qui se coupent en formant un angle droit (90°).\nOn écrit : (d1) ⊥ (d2). Le symbole ⊥ se lit « perpendiculaire à ».\nExemple : le mur et le sol d'une maison bien construite." },
          { type: "definition", texte: "Deux droites parallèles sont deux droites qui ne se coupent jamais, même si on les prolonge sans fin. Elles gardent toujours le même écartement.\nOn écrit : (d3) // (d4). Le symbole // se lit « parallèle à ».\nExemples : les deux bords d'une règle, les rails du train, les lignes de ton cahier." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='135' viewBox='0 0 320 135'><line x1='30' y1='85' x2='140' y2='85' stroke='#1E88E5' stroke-width='2'/><line x1='85' y1='30' x2='85' y2='110' stroke='#43A047' stroke-width='2'/><polyline points='85,73 97,73 97,85' fill='none' stroke='#E53935' stroke-width='2'/><text x='145' y='89' font-size='13' fill='#1E88E5'>(d1)</text><text x='90' y='28' font-size='13' fill='#43A047'>(d2)</text><text x='85' y='128' font-size='12' text-anchor='middle' fill='#333333'>(d1) ⊥ (d2)</text><line x1='190' y1='55' x2='305' y2='55' stroke='#1E88E5' stroke-width='2'/><line x1='190' y1='95' x2='305' y2='95' stroke='#43A047' stroke-width='2'/><polygon points='247,55 240,51 240,59' fill='#1E88E5'/><polygon points='247,95 240,91 240,99' fill='#43A047'/><text x='310' y='59' font-size='13' fill='#1E88E5'>(d3)</text><text x='310' y='99' font-size='13' fill='#43A047'>(d4)</text><text x='247' y='128' font-size='12' text-anchor='middle' fill='#333333'>(d3) // (d4)</text></svg>", legende: "À gauche : deux droites perpendiculaires (le petit carré marque l'angle droit). À droite : deux droites parallèles (les petites flèches identiques le montrent)." },
          { type: "methode", texte: "Pour vérifier que deux droites sont perpendiculaires : place le coin de l'équerre à leur croisement. Si l'angle est exactement droit, elles sont perpendiculaires.\n\nPour vérifier que deux droites sont parallèles : mesure l'écartement à deux endroits différents. Si c'est le même, elles sont parallèles." },
          { type: "remarque", texte: "Deux droites perpendiculaires se coupent toujours. Deux droites parallèles ne se coupent jamais. C'est l'un ou l'autre !" }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nPour chaque objet, dis s'il fait penser à une droite, une demi-droite ou un segment :\na) un fil tendu entre tes deux mains\nb) un rayon de soleil qui part du soleil\nc) une route toute droite qui continue sans fin des deux côtés", correction: "a) Un segment : il a deux extrémités (tes deux mains).\nb) Une demi-droite : il a un début (le soleil) mais pas de fin.\nc) Une droite : illimitée des deux côtés." },
      { niveau: 1, points: 2, enonce: "Exercice 2\nLe segment [AB] mesure 8 cm. Le point I est son milieu.\nQuelle est la longueur AI ?", correction: "Le milieu partage le segment en deux parties égales.\nAI = 8 ÷ 2 = 4 cm\nVérification : AI + IB = 4 + 4 = 8 cm. C'est juste ✓" },
      { niveau: 2, points: 3, enonce: "Exercice 3\nÉcris avec les bons symboles :\na) le segment d'extrémités A et B\nb) la droite passant par M et N\nc) la demi-droite d'origine R passant par S\nd) la longueur du segment [KL] vaut 6 cm", correction: "a) [AB] (deux crochets)\nb) (MN) (deux parenthèses)\nc) [RS) (un crochet, une parenthèse)\nd) KL = 6 cm (sans crochets, car c'est une longueur)" },
      { niveau: 2, points: 3, enonce: "Exercice 4\nClasse chaque angle : aigu, droit, obtus ou plat ?\na) 45°\nb) 90°\nc) 130°\nd) 180°\ne) 12°", correction: "a) 45° : angle aigu (moins de 90°)\nb) 90° : angle droit\nc) 130° : angle obtus (entre 90° et 180°)\nd) 180° : angle plat\ne) 12° : angle aigu (moins de 90°)" },
      { niveau: 3, points: 4, enonce: "Exercice 5\nM est le milieu du segment [AB] et AM = 3,5 cm.\nQuelle est la longueur AB ? Explique ton raisonnement.", correction: "M est le milieu, donc AM = MB = 3,5 cm.\nAB = AM + MB = 3,5 + 3,5 = 7 cm\nOn peut aussi calculer : AB = 2 × 3,5 = 7 cm.\nVérification : 7 ÷ 2 = 3,5 cm. C'est juste ✓" },
      { niveau: 3, points: 4, enonce: "Exercice 6\nDeux angles forment ensemble un angle plat (180°). Le premier mesure 65°.\na) Combien mesure le deuxième angle ?\nb) De quel type est ce deuxième angle ?", correction: "a) 180 − 65 = 115°\nb) 115° est entre 90° et 180°, donc c'est un angle obtus.\nVérification : 65 + 115 = 180°. C'est juste ✓" },
      { niveau: 4, points: 5, enonce: "Exercice 7\nObserve ta classe ou ta maison.\na) Cite deux choses perpendiculaires (qui se coupent en angle droit).\nb) Cite deux choses parallèles (qui ne se coupent jamais).\nc) Comment peux-tu vérifier tes réponses ?", correction: "Exemples de réponses :\na) Perpendiculaires : le mur et le sol, le pied et le plateau de la table, le coin du tableau...\nb) Parallèles : les deux grands bords du tableau, les lignes du cahier, les barreaux d'une échelle...\nc) Pour les perpendiculaires : vérifier avec le coin de l'équerre (ou d'un cahier). Pour les parallèles : mesurer l'écartement à deux endroits, il doit être identique." },
      { niveau: 4, points: 5, enonce: "Exercice 8\nSur une feuille, Andry a tracé un rectangle ABCD (A en haut à gauche, B en haut à droite, C en bas à droite, D en bas à gauche).\na) Les côtés [AB] et [DC] sont-ils parallèles ou perpendiculaires ?\nb) Les côtés [AB] et [BC] sont-ils parallèles ou perpendiculaires ?\nc) Que mesure l'angle en B ?", correction: "a) [AB] et [DC] sont les deux côtés horizontaux : ils sont parallèles. On écrit (AB) // (DC).\nb) [AB] et [BC] se coupent en B en formant le coin du rectangle : ils sont perpendiculaires. On écrit (AB) ⊥ (BC).\nc) L'angle en B est un angle droit : il mesure 90°.\nDans un rectangle, les 4 angles sont droits et les côtés opposés sont parallèles." }
    ]
  }
]);
