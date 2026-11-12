enregistrerChapitres("6e", "maths", [
  {
    id: "ch8",
    titre: "Chapitre 8 : Triangles et quadrilatères",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "ch8-lecon1",
        titre: "Leçon 1 : Les triangles et leurs familles",
        blocs: [
          { type: "texte", texte: "Au chapitre 7, tu as appris les droites, les segments et les angles. Maintenant, on assemble des segments pour construire des figures fermées.\n\nLa figure fermée la plus simple est le triangle : trois segments suffisent." },
          { type: "definition", texte: "Un triangle est une figure qui a 3 côtés, 3 sommets et 3 angles.\nOn le nomme avec ses trois sommets : le triangle ABC a pour côtés [AB], [BC] et [AC]." },
          { type: "definition", texte: "Un triangle quelconque n'a rien de particulier : ses 3 côtés ont des longueurs différentes." },
          { type: "definition", texte: "Un triangle isocèle a 2 côtés de même longueur.\nExemple : AB = AC = 5 cm." },
          { type: "definition", texte: "Un triangle équilatéral a 3 côtés de même longueur.\nExemple : AB = BC = AC = 4 cm." },
          { type: "definition", texte: "Un triangle rectangle a un angle droit (90°). On le marque avec un petit carré sur le dessin." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='205' viewBox='0 0 320 205'><polygon points='30,85 120,85 85,35' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><text x='75' y='102' font-size='12' text-anchor='middle' fill='#333333'>quelconque</text><polygon points='205,85 285,85 245,30' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><text x='245' y='102' font-size='12' text-anchor='middle' fill='#333333'>isocèle</text><polygon points='45,180 125,180 85,120' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><text x='85' y='198' font-size='12' text-anchor='middle' fill='#333333'>équilatéral</text><polygon points='200,180 280,180 200,120' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><polyline points='200,166 214,166 214,180' fill='none' stroke='#E53935' stroke-width='2'/><text x='243' y='198' font-size='12' text-anchor='middle' fill='#333333'>rectangle</text></svg>", legende: "Les quatre familles de triangles. Le petit carré rouge marque l'angle droit du triangle rectangle." },
          { type: "remarque", texte: "Un triangle peut appartenir à deux familles à la fois : un triangle rectangle isocèle a un angle droit ET deux côtés égaux." }
        ]
      },
      {
        id: "ch8-lecon2",
        titre: "Leçon 2 : La somme des angles d'un triangle",
        blocs: [
          { type: "texte", texte: "Fais l'expérience : dessine un grand triangle sur ton cahier, mesure ses trois angles au rapporteur, puis additionne-les. Tu trouveras toujours environ 180°, quel que soit le triangle." },
          { type: "regle", texte: "La somme des trois angles d'un triangle est toujours égale à 180°." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='160' viewBox='0 0 320 160'><polygon points='50,120 270,120 140,30' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><path d='M 78 120 A 28 28 0 0 0 70 100' fill='none' stroke='#E53935' stroke-width='2'/><path d='M 242 120 A 28 28 0 0 0 247 104' fill='none' stroke='#E53935' stroke-width='2'/><path d='M 120 50 A 28 28 0 0 0 163 46' fill='none' stroke='#E53935' stroke-width='2'/><text x='44' y='137' font-size='13' fill='#333333'>A</text><text x='272' y='137' font-size='13' fill='#333333'>B</text><text x='137' y='20' font-size='13' fill='#333333'>C</text><text x='75' y='112' font-size='12' fill='#E53935'>65°</text><text x='212' y='112' font-size='12' fill='#E53935'>60°</text><text x='133' y='72' font-size='12' fill='#E53935'>55°</text><text x='160' y='152' font-size='13' text-anchor='middle' fill='#333333'>65° + 60° + 55° = 180°</text></svg>", legende: "Dans ce triangle : 65° + 60° + 55° = 180°." },
          { type: "methode", texte: "Pour trouver un angle manquant dans un triangle :\n1. Additionne les deux angles connus.\n2. Soustrais le résultat de 180°.\n3. Vérifie : les trois angles doivent totaliser 180°." },
          { type: "exemple", texte: "Exemple 1 : un triangle a deux angles de 65° et 60°.\n1. 65 + 60 = 125\n2. 180 − 125 = 55\nLe troisième angle mesure 55°.\nVérification : 65 + 60 + 55 = 180 ✓\n\nExemple 2 : un triangle rectangle a un angle de 40°.\n1. 90 + 40 = 130\n2. 180 − 130 = 50\nLe troisième angle mesure 50°." },
          { type: "remarque", texte: "Un triangle ne peut jamais avoir deux angles droits : 90° + 90° = 180°, il ne resterait plus rien pour le troisième angle !" }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch8-lecon3",
        titre: "Leçon 3 : Construire un triangle au compas",
        blocs: [
          { type: "texte", texte: "Pour construire un triangle dont on connaît les trois longueurs, on utilise la règle et le compas. Le compas sert à reporter des longueurs sans les mesurer à chaque fois." },
          { type: "methode", texte: "Construire un triangle ABC avec AB = 6 cm, AC = 4 cm et BC = 5 cm :\n1. Trace le segment [AB] de 6 cm à la règle.\n2. Ouvre le compas de 4 cm, pique la pointe en A et trace un arc de cercle au-dessus du segment.\n3. Ouvre le compas de 5 cm, pique la pointe en B et trace un deuxième arc qui coupe le premier.\n4. Le croisement des deux arcs est le sommet C.\n5. Trace [AC] et [BC] à la règle. Le triangle est terminé." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'><path d='M 26 46 A 100 100 0 0 1 146 90' fill='none' stroke='#43A047' stroke-width='2' stroke-dasharray='5,4'/><path d='M 98 115 A 144 144 0 0 1 160 21' fill='none' stroke='#F4B400' stroke-width='2' stroke-dasharray='5,4'/><line x1='60' y1='140' x2='120' y2='60' stroke='#90A4AE' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='240' y1='140' x2='120' y2='60' stroke='#90A4AE' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='60' y1='140' x2='240' y2='140' stroke='#1E88E5' stroke-width='2.5'/><circle cx='60' cy='140' r='3.5' fill='#E53935'/><circle cx='240' cy='140' r='3.5' fill='#E53935'/><circle cx='120' cy='60' r='3.5' fill='#E53935'/><text x='48' y='158' font-size='13' fill='#333333'>A</text><text x='246' y='158' font-size='13' fill='#333333'>B</text><text x='118' y='48' font-size='13' fill='#333333'>C</text><text x='45' y='30' font-size='11' fill='#43A047'>arc de centre A</text><text x='205' y='18' font-size='11' fill='#B8860B'>arc de centre B</text></svg>", legende: "Le sommet C se trouve au croisement des deux arcs de cercle." },
          { type: "remarque", texte: "Si les deux arcs ne se croisent pas, c'est que le triangle est impossible avec ces trois longueurs. Par exemple, on ne peut pas construire un triangle avec des côtés de 2 cm, 3 cm et 10 cm : les côtés de 2 et 3 cm sont trop courts pour se rejoindre." }
        ]
      },
      {
        id: "ch8-lecon4",
        titre: "Leçon 4 : Les quadrilatères et leurs familles",
        blocs: [
          { type: "texte", texte: "Regarde autour de toi : le cahier, la table, l'écran du téléphone, la porte... Ce sont presque tous des quadrilatères." },
          { type: "definition", texte: "Un quadrilatère est une figure qui a 4 côtés, 4 sommets et 4 angles." },
          { type: "definition", texte: "Une diagonale est un segment qui relie deux sommets opposés. Un quadrilatère a toujours 2 diagonales." },
          { type: "definition", texte: "Le parallélogramme : ses côtés opposés sont parallèles et de même longueur." },
          { type: "definition", texte: "Le rectangle : c'est un parallélogramme qui a 4 angles droits." },
          { type: "definition", texte: "Le losange : ses 4 côtés ont la même longueur." },
          { type: "definition", texte: "Le carré : il a 4 angles droits ET 4 côtés de même longueur. C'est le quadrilatère le plus régulier." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='205' viewBox='0 0 320 205'><polygon points='45,85 135,85 115,40 25,40' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><text x='80' y='102' font-size='12' text-anchor='middle' fill='#333333'>parallélogramme</text><polygon points='185,85 290,85 290,40 185,40' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><polyline points='185,73 197,73 197,85' fill='none' stroke='#E53935' stroke-width='2'/><text x='237' y='102' font-size='12' text-anchor='middle' fill='#333333'>rectangle</text><polygon points='80,120 125,155 80,190 35,155' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><text x='80' y='202' font-size='12' text-anchor='middle' fill='#333333'>losange</text><polygon points='200,122 262,122 262,184 200,184' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><polyline points='200,172 212,172 212,184' fill='none' stroke='#E53935' stroke-width='2'/><text x='231' y='201' font-size='12' text-anchor='middle' fill='#333333'>carré</text></svg>", legende: "Les quatre quadrilatères particuliers à connaître par cœur." },
          { type: "remarque", texte: "Le carré est un quadrilatère très spécial : il est à la fois un rectangle (4 angles droits) et un losange (4 côtés égaux)." }
        ]
      },
      {
        id: "ch8-lecon5",
        titre: "Leçon 5 : Propriétés des quadrilatères et somme des angles",
        blocs: [
          { type: "texte", texte: "Chaque quadrilatère particulier a des propriétés précises, surtout pour ses diagonales. Ce tableau les résume :" },
          { type: "tableau", entetes: ["Quadrilatère", "Côtés et angles", "Diagonales"], lignes: [["Parallélogramme", "côtés opposés parallèles et de même longueur", "se coupent en leur milieu"], ["Rectangle", "comme le parallélogramme, avec 4 angles droits", "se coupent en leur milieu ET sont de même longueur"], ["Losange", "4 côtés de même longueur", "se coupent en leur milieu ET sont perpendiculaires"], ["Carré", "4 côtés de même longueur ET 4 angles droits", "se coupent en leur milieu, même longueur ET perpendiculaires"]] },
          { type: "regle", texte: "La somme des quatre angles d'un quadrilatère est toujours égale à 360°.\nC'est logique : une diagonale partage le quadrilatère en 2 triangles, et 2 × 180° = 360°." },
          { type: "exemple", texte: "Exemple : un quadrilatère a trois angles de 120°, 45° et 55°. Combien mesure le quatrième ?\n1. 120 + 45 + 55 = 220\n2. 360 − 220 = 140\nLe quatrième angle mesure 140°.\nVérification : 120 + 45 + 55 + 140 = 360 ✓" },
          { type: "remarque", texte: "Astuce pour retenir le tableau : les diagonales de TOUS les quadrilatères particuliers se coupent en leur milieu. Le rectangle ajoute « même longueur », le losange ajoute « perpendiculaires », et le carré a tout." }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nCombien un quadrilatère a-t-il :\na) de côtés ?\nb) de sommets ?\nc) de diagonales ?", correction: "a) 4 côtés\nb) 4 sommets\nc) 2 diagonales (elles relient les sommets opposés)" },
      { niveau: 1, points: 2, enonce: "Exercice 2\na) Un triangle a deux côtés de même longueur. Quel est son nom ?\nb) Un triangle a trois côtés de même longueur. Quel est son nom ?", correction: "a) C'est un triangle isocèle (2 côtés égaux).\nb) C'est un triangle équilatéral (3 côtés égaux)." },
      { niveau: 2, points: 3, enonce: "Exercice 3\nDans un triangle, deux angles mesurent 70° et 50°.\nCalcule le troisième angle. N'oublie pas de vérifier.", correction: "1. 70 + 50 = 120\n2. 180 − 120 = 60\nLe troisième angle mesure 60°.\nVérification : 70 + 50 + 60 = 180°. C'est juste ✓" },
      { niveau: 2, points: 3, enonce: "Exercice 4\nTrois angles d'un quadrilatère mesurent 110°, 90° et 70°.\nCalcule le quatrième angle.", correction: "1. 110 + 90 + 70 = 270\n2. 360 − 270 = 90\nLe quatrième angle mesure 90°.\nVérification : 110 + 90 + 70 + 90 = 360°. C'est juste ✓" },
      { niveau: 3, points: 4, enonce: "Exercice 5\nUn quadrilatère a 4 angles droits, mais ses 4 côtés n'ont PAS tous la même longueur.\na) Est-ce un carré ?\nb) Quel est alors son nom exact ? Explique ta réponse.", correction: "a) Non, ce n'est pas un carré : le carré exige 4 angles droits ET 4 côtés de même longueur.\nb) C'est un rectangle : un parallélogramme avec 4 angles droits. Ses côtés opposés sont égaux deux à deux, mais pas forcément tous égaux." },
      { niveau: 3, points: 4, enonce: "Exercice 6\nVoahangy veut construire un triangle ABC avec AB = 6 cm, AC = 4 cm et BC = 5 cm.\nDécris les étapes de la construction au compas (tu peux aussi faire la figure sur ton cahier).", correction: "1. Tracer le segment [AB] de 6 cm à la règle.\n2. Ouvrir le compas de 4 cm, piquer en A, tracer un arc au-dessus de [AB].\n3. Ouvrir le compas de 5 cm, piquer en B, tracer un arc qui coupe le premier.\n4. Le croisement des arcs est le point C.\n5. Tracer [AC] et [BC].\nVérification à la règle : AC = 4 cm et BC = 5 cm." },
      { niveau: 4, points: 5, enonce: "Exercice 7\nLes diagonales d'un quadrilatère se coupent en leur milieu et sont perpendiculaires, mais elles n'ont PAS la même longueur.\nDe quel quadrilatère s'agit-il ? Justifie ta réponse.", correction: "C'est un losange.\nJustification :\n• Les 4 quadrilatères particuliers ont des diagonales qui se coupent en leur milieu.\n• « Perpendiculaires » est la propriété du losange (le rectangle et le carré ont des diagonales de même longueur).\n• Comme les diagonales n'ont pas la même longueur, ce ne peut pas être un carré : le carré a les deux propriétés en même temps." },
      { niveau: 4, points: 5, enonce: "Exercice 8\nDans un triangle isocèle, l'angle principal mesure 40°. Les deux autres angles sont égaux entre eux.\nCombien mesure chacun de ces deux angles ?", correction: "La somme des trois angles vaut 180°.\n1. Les deux angles égaux totalisent : 180 − 40 = 140°\n2. Chaque angle mesure : 140 ÷ 2 = 70°\nVérification : 40 + 70 + 70 = 180°. C'est juste ✓" }
    ]
  }
]);
