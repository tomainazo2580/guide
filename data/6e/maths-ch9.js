enregistrerChapitres("6e", "maths", [
  {
    id: "ch9",
    titre: "Chapitre 9 : Transformations et symétrie axiale",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "ch9-lecon1",
        titre: "Leçon 1 : Les transformations géométriques",
        blocs: [
          { type: "texte", texte: "Une transformation géométrique déplace ou retourne une figure. Tu en vois tous les jours : la brousse qui avance sur la route, ton reflet dans le miroir, les aiguilles de la montre qui tournent...\n\nEn 6e, il y a trois transformations à connaître : la translation, la réflexion et la rotation." },
          { type: "definition", texte: "La translation, c'est un glissement : la figure glisse dans une direction, sur une certaine distance, sans tourner.\nExemple : la brousse qui roule tout droit sur la route nationale." },
          { type: "definition", texte: "La réflexion, c'est un effet miroir : la figure se retourne de l'autre côté d'une droite, comme dans un miroir posé sur cette droite.\nExemple : ton visage et son reflet dans le miroir." },
          { type: "definition", texte: "La rotation, c'est un tour : la figure tourne autour d'un point fixe, d'un certain angle.\nExemple : les aiguilles d'une montre tournent autour du centre du cadran." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='215' viewBox='0 0 320 215'><polygon points='25,55 55,55 40,30' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><line x1='62' y1='45' x2='102' y2='45' stroke='#E53935' stroke-width='2'/><polygon points='102,45 92,40 92,50' fill='#E53935'/><polygon points='110,55 140,55 125,30' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><text x='80' y='72' font-size='12' text-anchor='middle' fill='#333333'>translation</text><polygon points='185,55 215,55 200,30' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><line x1='232' y1='20' x2='232' y2='65' stroke='#E53935' stroke-width='2' stroke-dasharray='5,4'/><polygon points='279,55 249,55 264,30' fill='#E3F2FD' stroke='#43A047' stroke-width='2'/><text x='232' y='72' font-size='12' text-anchor='middle' fill='#333333'>réflexion</text><circle cx='160' cy='150' r='4' fill='#E53935'/><text x='172' y='154' font-size='12' fill='#E53935'>O</text><polygon points='160,150 160,105 185,128' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><polygon points='160,150 205,150 183,173' fill='#E3F2FD' stroke='#43A047' stroke-width='2'/><path d='M 175 118 A 45 45 0 0 1 200 143' fill='none' stroke='#F4B400' stroke-width='2'/><polygon points='200,143 193,133 202,135' fill='#F4B400'/><text x='160' y='205' font-size='12' text-anchor='middle' fill='#333333'>rotation autour du point O</text></svg>", legende: "Translation : glissement. Réflexion : effet miroir par rapport à la droite rouge. Rotation : tour autour du point O." },
          { type: "remarque", texte: "Dans les trois cas, la figure de départ s'appelle la figure initiale, et la figure d'arrivée s'appelle l'image." }
        ]
      },
      {
        id: "ch9-lecon2",
        titre: "Leçon 2 : Les transformations isométriques",
        blocs: [
          { type: "texte", texte: "Question importante : quand on glisse, retourne ou tourne une figure, est-ce qu'elle change de taille ? Réponse : non !" },
          { type: "definition", texte: "Une transformation isométrique est une transformation qui ne change ni les longueurs, ni les angles, ni l'aire de la figure.\nLe préfixe « iso » veut dire « égal », et « métrique » vient de « mesure » : les mesures restent égales." },
          { type: "regle", texte: "La translation, la réflexion et la rotation sont des transformations isométriques :\n• les longueurs ne changent pas ;\n• les angles ne changent pas ;\n• l'aire ne change pas.\nLa figure image est exactement superposable à la figure initiale." },
          { type: "exemple", texte: "Exemple : un triangle ABC a des côtés de 3 cm, 4 cm et 5 cm. Après une translation, son image A'B'C' a toujours des côtés de 3 cm, 4 cm et 5 cm. Seule la position a changé, pas les mesures." },
          { type: "remarque", texte: "Notation : l'image du point A se note A' (on lit « A prime »). L'image du triangle ABC se note A'B'C'.\nAttention : ne confonds pas les transformations avec l'agrandissement ou la réduction, qui changent la taille. Ceux-là ne sont PAS isométriques." }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch9-lecon3",
        titre: "Leçon 3 : La symétrie axiale (complété par Guide)",
        blocs: [
          { type: "texte", texte: "La réflexion porte un autre nom quand on la dessine sur une feuille : la symétrie axiale. Le mot « axiale » vient de « axe » : c'est la droite qui joue le rôle du miroir." },
          { type: "definition", texte: "Deux figures sont symétriques par rapport à une droite (d) si on peut plier la feuille le long de (d) et que les deux figures se superposent exactement.\nLa droite (d) s'appelle l'axe de symétrie." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='170' viewBox='0 0 320 170'><line x1='160' y1='15' x2='160' y2='155' stroke='#E53935' stroke-width='2' stroke-dasharray='6,4'/><text x='168' y='28' font-size='13' fill='#E53935'>(d)</text><circle cx='110' cy='50' r='3.5' fill='#1E88E5'/><text x='98' y='46' font-size='13' fill='#1E88E5'>A</text><circle cx='210' cy='50' r='3.5' fill='#43A047'/><text x='217' y='46' font-size='13' fill='#43A047'>A'</text><line x1='110' y1='50' x2='210' y2='50' stroke='#9E9E9E' stroke-width='1.5' stroke-dasharray='3,3'/><polyline points='154,50 154,44 160,44' fill='none' stroke='#9E9E9E' stroke-width='1.5'/><text x='160' y='66' font-size='11' text-anchor='middle' fill='#777777'>angle droit</text><polygon points='130,130 150,130 140,100' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><polygon points='190,130 170,130 180,100' fill='#E3F2FD' stroke='#43A047' stroke-width='2'/><text x='160' y='165' font-size='11' text-anchor='middle' fill='#777777'>deux triangles symétriques</text></svg>", legende: "L'axe (d) est le miroir. A et A' sont à la même distance de l'axe, et le segment [AA'] est perpendiculaire à l'axe." },
          { type: "regle", texte: "Deux points symétriques A et A' par rapport à un axe (d) sont :\n• à la même distance de l'axe ;\n• alignés sur une droite perpendiculaire à l'axe.\nOn dit que l'axe (d) est le miroir entre A et A'." },
          { type: "exemple", texte: "Exemple : le point A est à 3 cm à gauche de l'axe (d). Alors son symétrique A' est à 3 cm à droite de l'axe, sur la perpendiculaire à (d) passant par A." },
          { type: "remarque", texte: "Le test du pliage est très utile : si tu plies la feuille le long de l'axe et que les deux figures coïncident exactement, elles sont symétriques. Sinon, elles ne le sont pas." }
        ]
      },
      {
        id: "ch9-lecon4",
        titre: "Leçon 4 : Construire le symétrique d'une figure",
        blocs: [
          { type: "texte", texte: "Pour construire le symétrique d'une figure, on ne dessine pas au hasard : on construit le symétrique de chaque sommet, un par un, puis on les relie." },
          { type: "methode", texte: "Construire le symétrique du point A par rapport à l'axe (d), avec la règle et l'équerre :\n1. Trace la perpendiculaire à (d) qui passe par A (avec l'équerre).\n2. Mesure la distance entre A et l'axe (d).\n3. Reporte la même distance de l'autre côté de l'axe, sur la même perpendiculaire.\n4. Le point obtenu est A', le symétrique de A." },
          { type: "methode", texte: "Construire le symétrique d'un triangle ABC :\n1. Construis A', le symétrique de A.\n2. Construis B', le symétrique de B.\n3. Construis C', le symétrique de C.\n4. Relie A', B' et C' : le triangle A'B'C' est le symétrique du triangle ABC." },
          { type: "exemple", texte: "Exemple : ABC est un triangle avec A et B à 2 cm de l'axe (d), et C à 4 cm de l'axe.\n• A' sera à 2 cm de l'autre côté de l'axe ;\n• B' sera à 2 cm de l'autre côté ;\n• C' sera à 4 cm de l'autre côté.\nLe triangle A'B'C' a exactement les mêmes mesures que ABC." },
          { type: "remarque", texte: "Cas particulier : si un point est SUR l'axe de symétrie, son symétrique est lui-même. Il ne bouge pas, comme un point posé exactement sur le miroir." }
        ]
      },
      {
        id: "ch9-lecon5",
        titre: "Leçon 5 : Les axes de symétrie des figures",
        blocs: [
          { type: "texte", texte: "Certaines figures sont symétriques par rapport à elles-mêmes : on peut les plier en deux et les deux moitiés se superposent. La ligne de pliage est un axe de symétrie de la figure." },
          { type: "definition", texte: "Une droite est un axe de symétrie d'une figure si, en pliant le long de cette droite, les deux moitiés de la figure se superposent exactement." },
          { type: "tableau", entetes: ["Figure", "Nombre d'axes de symétrie"], lignes: [["Triangle quelconque", "0"], ["Triangle isocèle", "1"], ["Triangle équilatéral", "3"], ["Rectangle", "2"], ["Losange", "2"], ["Carré", "4"], ["Cercle", "une infinité"]] },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='165' viewBox='0 0 320 165'><rect x='25' y='45' width='80' height='55' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><line x1='65' y1='38' x2='65' y2='107' stroke='#E53935' stroke-width='1.5' stroke-dasharray='5,4'/><line x1='18' y1='72' x2='112' y2='72' stroke='#E53935' stroke-width='1.5' stroke-dasharray='5,4'/><text x='65' y='125' font-size='12' text-anchor='middle' fill='#333333'>rectangle : 2 axes</text><rect x='160' y='42' width='58' height='58' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><line x1='189' y1='34' x2='189' y2='108' stroke='#E53935' stroke-width='1.5' stroke-dasharray='5,4'/><line x1='152' y1='71' x2='226' y2='71' stroke='#E53935' stroke-width='1.5' stroke-dasharray='5,4'/><line x1='166' y1='48' x2='212' y2='94' stroke='#E53935' stroke-width='1.5' stroke-dasharray='5,4'/><line x1='212' y1='48' x2='166' y2='94' stroke='#E53935' stroke-width='1.5' stroke-dasharray='5,4'/><text x='189' y='125' font-size='12' text-anchor='middle' fill='#333333'>carré : 4 axes</text><polygon points='268,100 300,100 284,62' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><line x1='284' y1='56' x2='284' y2='107' stroke='#E53935' stroke-width='1.5' stroke-dasharray='5,4'/><text x='284' y='125' font-size='12' text-anchor='middle' fill='#333333'>isocèle : 1 axe</text><text x='160' y='155' font-size='11' text-anchor='middle' fill='#777777'>les axes sont en pointillés rouges</text></svg>", legende: "Le rectangle a 2 axes de symétrie, le carré en a 4, le triangle isocèle en a 1 seul." },
          { type: "remarque", texte: "Attention : les diagonales du rectangle ne sont PAS des axes de symétrie ! Si tu plies un rectangle le long d'une diagonale, les deux moitiés ne se superposent pas. Fais l'essai avec une feuille rectangulaire pour t'en convaincre." }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nPour chaque situation, nomme la transformation (translation, réflexion ou rotation) :\na) la brousse qui avance tout droit sur la route\nb) ton visage dans le miroir\nc) les aiguilles d'une montre", correction: "a) Translation : le véhicule glisse en ligne droite sans tourner.\nb) Réflexion : effet miroir, le visage se retourne de l'autre côté du miroir.\nc) Rotation : les aiguilles tournent autour du centre du cadran." },
      { niveau: 1, points: 2, enonce: "Exercice 2\nLe point A est à 3 cm de l'axe de symétrie (d).\nÀ quelle distance de l'axe se trouve son symétrique A' ?", correction: "A' est à 3 cm de l'axe, de l'autre côté.\nRègle : deux points symétriques sont toujours à la même distance de l'axe, sur une droite perpendiculaire à l'axe." },
      { niveau: 2, points: 3, enonce: "Exercice 3\nUn triangle a des côtés de 3 cm, 4 cm et 5 cm. On lui applique une translation, puis une réflexion.\na) Quelles sont les longueurs des côtés de la figure image ?\nb) Pourquoi ?", correction: "a) Les côtés mesurent toujours 3 cm, 4 cm et 5 cm.\nb) La translation et la réflexion sont des transformations isométriques : elles ne changent ni les longueurs, ni les angles, ni l'aire. Seule la position ou le sens de la figure change." },
      { niveau: 2, points: 3, enonce: "Exercice 4\nCombien d'axes de symétrie possède chaque figure ?\na) un rectangle\nb) un triangle isocèle\nc) un carré", correction: "a) Rectangle : 2 axes de symétrie (les droites qui passent par les milieux des côtés opposés).\nb) Triangle isocèle : 1 axe de symétrie (la droite qui passe par le sommet principal et le milieu de la base).\nc) Carré : 4 axes de symétrie (2 médianes et 2 diagonales)." },
      { niveau: 3, points: 4, enonce: "Exercice 5\nExplique comment construire le symétrique du point A par rapport à une droite (d), avec la règle et l'équerre.", correction: "1. Tracer la perpendiculaire à (d) passant par A, avec l'équerre.\n2. Mesurer la distance entre A et l'axe (d).\n3. Reporter la même distance de l'autre côté de l'axe, sur la même perpendiculaire.\n4. Le point obtenu est A', le symétrique de A.\nVérification possible : plier la feuille le long de (d), A et A' doivent se superposer." },
      { niveau: 3, points: 4, enonce: "Exercice 6\nDans la cour de l'école, le drapeau de Madagascar se reflète dans une grande flaque d'eau après la pluie.\na) Quelle transformation observe-t-on ?\nb) Le drapeau reflété a-t-il les mêmes dimensions que le vrai drapeau ? Justifie.", correction: "a) C'est une réflexion : la surface de l'eau joue le rôle d'un miroir, comme un axe de symétrie.\nb) Oui, les dimensions sont identiques : la réflexion est une transformation isométrique, elle ne change ni les longueurs, ni les angles. Seule l'orientation change (l'image est inversée, comme dans un miroir)." },
      { niveau: 4, points: 5, enonce: "Exercice 7\nAndry dit : « Les diagonales du rectangle sont des axes de symétrie. »\nA-t-il raison ? Explique ta réponse avec l'expérience du pliage.", correction: "Non, Andry a tort.\nSi on plie un rectangle le long d'une diagonale, les deux moitiés ne se superposent PAS : les coins ne coïncident pas (fais l'essai avec une feuille rectangulaire).\nLes axes de symétrie du rectangle sont les 2 droites qui passent par les milieux des côtés opposés.\nAttention : le carré, lui, a bien ses 2 diagonales comme axes de symétrie, plus les 2 médianes : 4 axes en tout." },
      { niveau: 4, points: 5, enonce: "Exercice 8\nLe triangle ABC a pour symétrique le triangle A'B'C' par rapport à une droite (d).\nOn sait que AB = 5 cm, que l'angle en A mesure 70°, et que le point C est sur l'axe (d).\na) Quelle est la longueur A'B' ?\nb) Que mesure l'angle en A' ?\nc) Où se trouve le point C', symétrique de C ?", correction: "a) A'B' = 5 cm, car la réflexion est isométrique : les longueurs ne changent pas.\nb) L'angle en A' mesure 70°, car les angles ne changent pas non plus.\nc) C est sur l'axe de symétrie (d) : son symétrique C' est donc C lui-même. Un point de l'axe ne bouge pas, comme un point posé sur le miroir." }
    ]
  }
]);
