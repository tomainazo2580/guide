// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 9 : cercles, angles au centre et polygones réguliers.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-cercles-polygones",
    titre: "Chapitre 9 : Cercles et polygones réguliers",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-cercle-vocabulaire",
        titre: "Revoir le vocabulaire du cercle",
        blocs: [
          {
            type: "introduction",
            titre: "Des points à la même distance",
            texte: "Imagine un compas dont la pointe est fixée en un point O. Lorsque tu fais tourner le crayon sans changer l'ouverture du compas, il trace un cercle.\n\nTous les points de ce cercle sont à la même distance de O."
          },
          {
            type: "definition",
            titre: "Centre, rayon et diamètre",
            texte: "Un cercle de centre O et de rayon r est l'ensemble des points situés à la distance r de O.\n\nSi A et B sont deux points du cercle :\n• [OA] est un rayon et OA est sa longueur ;\n• [AB] est une corde : elle joint deux points du cercle ;\n• si [AB] passe par O, c'est un diamètre.\n\nLa longueur d'un diamètre vaut deux fois celle d'un rayon : d = 2r."
          },
          {
            type: "schema",
            titre: "Rayon, corde et diamètre",
            svg: "<svg viewBox='0 0 320 210' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Cercle de centre O, de diamètre AB, avec un rayon OC et une corde CD'><circle cx='160' cy='105' r='75' fill='#eff6ff' stroke='#1d4ed8' stroke-width='2'/><line x1='85' y1='105' x2='235' y2='105' stroke='#334155' stroke-width='2'/><line x1='160' y1='105' x2='205' y2='45' stroke='#16a34a' stroke-width='3'/><line x1='205' y1='45' x2='115' y2='45' stroke='#dc2626' stroke-width='3'/><circle cx='160' cy='105' r='3' fill='#334155'/><text x='70' y='110' font-size='15'>A</text><text x='240' y='110' font-size='15'>B</text><text x='208' y='40' font-size='15'>C</text><text x='102' y='40' font-size='15'>D</text><text x='164' y='120' font-size='15'>O</text></svg>",
            legende: "[AB] est un diamètre, [OC] un rayon et [CD] une corde. Le centre O est à égale distance de tous les points du cercle."
          },
          {
            type: "remarque",
            titre: "Cercle ou disque ?",
            texte: "Le cercle est la ligne formée par les points à une distance exactement égale au rayon.\n\nLe disque est la surface constituée des points situés à une distance inférieure ou égale au rayon. Il comprend le cercle et son intérieur."
          },
          {
            type: "exemple",
            titre: "À toi de vérifier",
            texte: "Un cercle a un diamètre de 14 cm. Quel est son rayon ?\n\nLe rayon vaut la moitié du diamètre : 14 ÷ 2 = 7 cm."
          }
        ]
      },
      {
        id: "m3-angle-au-centre",
        titre: "Comprendre un angle au centre",
        blocs: [
          {
            type: "definition",
            titre: "Un angle dont le sommet est le centre",
            texte: "Dans un cercle de centre O, si A et B sont deux points du cercle, l'angle AOB est un angle au centre : son sommet est O et ses côtés passent par A et B.\n\nOn écrit aussi AÔB. La lettre du sommet est au milieu."
          },
          {
            type: "schema",
            titre: "Un quart de tour",
            svg: "<svg viewBox='0 0 320 210' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Un cercle de centre O et deux rayons OA et OB formant un angle droit de 90 degrés'><circle cx='145' cy='105' r='75' fill='#eff6ff' stroke='#1d4ed8' stroke-width='2'/><path d='M145 105 L220 105 A75 75 0 0 0 145 30 Z' fill='#bfdbfe'/><line x1='145' y1='105' x2='220' y2='105' stroke='#334155' stroke-width='2'/><line x1='145' y1='105' x2='145' y2='30' stroke='#334155' stroke-width='2'/><path d='M145 87 L163 87 L163 105' fill='none' stroke='#dc2626' stroke-width='2'/><text x='148' y='123' font-size='15'>O</text><text x='225' y='110' font-size='15'>A</text><text x='140' y='24' font-size='15'>B</text><text x='175' y='76' font-size='15' fill='#b91c1c'>90°</text></svg>",
            legende: "L'angle AÔB a pour sommet le centre O. Il mesure ici 90° : il représente un quart de tour."
          },
          {
            type: "regle",
            titre: "Un tour complet",
            texte: "Un tour complet autour d'un point mesure 360°.\n\n• Un demi-tour mesure 180°.\n• Un quart de tour mesure 90°.\n• Trois quarts de tour mesurent 270°.\n\nSi plusieurs angles forment ensemble un tour complet sans se chevaucher, la somme de leurs mesures est 360°."
          },
          {
            type: "methode",
            titre: "Partager un tour en parts égales",
            texte: "Si on partage un tour complet en 6 angles égaux, chaque angle mesure :\n\n360° ÷ 6 = 60°.\n\nSi on le partage en 8 angles égaux, chacun mesure :\n360° ÷ 8 = 45°.\n\nOn divise 360° par le nombre de parts égales."
          },
          {
            type: "remarque",
            titre: "Degrés et longueurs",
            texte: "Un angle se mesure ici en degrés, avec le symbole °. Une longueur se mesure par exemple en centimètres ou en mètres.\n\nNe confonds pas l'angle au centre et la longueur d'un rayon : ce sont deux grandeurs différentes."
          }
        ]
      },
      {
        id: "m3-polygones-reguliers",
        titre: "Reconnaître un polygone régulier",
        blocs: [
          {
            type: "definition",
            titre: "Polygone",
            texte: "Un polygone est une figure plane fermée formée de segments.\n\nUn triangle a 3 côtés ; un quadrilatère en a 4 ; un pentagone en a 5 ; un hexagone en a 6."
          },
          {
            type: "definition",
            titre: "Deux conditions à vérifier",
            texte: "Un polygone régulier a tous ses côtés de même longueur et tous ses angles intérieurs de même mesure.\n\nUn carré est régulier : ses quatre côtés sont égaux et ses quatre angles mesurent 90°.\n\nUn rectangle qui n'est pas un carré n'est pas régulier : ses angles sont égaux, mais ses côtés ne le sont pas tous."
          },
          {
            type: "remarque",
            titre: "Des côtés égaux ne suffisent pas toujours",
            texte: "Un losange a quatre côtés de même longueur, mais ses angles ne sont pas nécessairement égaux. Il n'est donc pas toujours régulier.\n\nUn losange qui est aussi un carré, lui, est régulier."
          },
          {
            type: "regle",
            titre: "Polygone régulier inscrit dans un cercle",
            texte: "Les sommets d'un polygone régulier peuvent être placés sur un même cercle. On dit que le polygone est inscrit dans ce cercle.\n\nLes angles au centre entre deux sommets voisins sont égaux. Si le polygone a n côtés, chacun de ces angles mesure :\n\n360° ÷ n."
          },
          {
            type: "schema",
            titre: "Un hexagone régulier inscrit",
            svg: "<svg viewBox='0 0 320 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Hexagone régulier inscrit dans un cercle de centre O, partagé en six angles au centre égaux'><circle cx='160' cy='110' r='85' fill='#eff6ff' stroke='#93c5fd' stroke-width='2'/><polygon points='160,25 233.6,67.5 233.6,152.5 160,195 86.4,152.5 86.4,67.5' fill='none' stroke='#1d4ed8' stroke-width='3'/><path d='M160 110 L160 25 M160 110 L233.6 67.5 M160 110 L233.6 152.5 M160 110 L160 195 M160 110 L86.4 152.5 M160 110 L86.4 67.5' fill='none' stroke='#64748b' stroke-width='1.5'/><circle cx='160' cy='110' r='3' fill='#dc2626'/><text x='165' y='112' font-size='14'>O</text><text x='175' y='75' font-size='14' fill='#b91c1c'>60°</text></svg>",
            legende: "Les six angles au centre entre sommets voisins sont égaux : chacun mesure 360° ÷ 6 = 60°."
          },
          {
            type: "exemple",
            titre: "Quelques angles au centre",
            texte: "Pour un triangle équilatéral inscrit : 360° ÷ 3 = 120°.\n\nPour un carré inscrit : 360° ÷ 4 = 90°.\n\nPour un pentagone régulier inscrit : 360° ÷ 5 = 72°.\n\nPour un hexagone régulier inscrit : 360° ÷ 6 = 60°."
          }
        ]
      },
      {
        id: "m3-construire-polygones",
        titre: "Construire un polygone régulier",
        blocs: [
          {
            type: "methode",
            titre: "Avec un rapporteur",
            texte: "Pour construire un pentagone régulier inscrit dans un cercle :\n\n1. Trace un cercle de centre O et place un premier point A sur le cercle.\n2. Calcule l'angle au centre : 360° ÷ 5 = 72°.\n3. À partir du rayon [OA], utilise le rapporteur pour tracer successivement des rayons séparés par des angles de 72°.\n4. Marque leurs intersections avec le cercle.\n5. Relie les cinq points voisins à la règle.\n\nEn pratique, la précision dépend du tracé et de la lecture du rapporteur."
          },
          {
            type: "methode",
            titre: "Construire un hexagone au compas",
            texte: "Dans un hexagone régulier inscrit, la longueur de chaque côté est égale au rayon du cercle.\n\n1. Trace un cercle de centre O avec le compas.\n2. Sans changer l'ouverture du compas, place un point A sur le cercle.\n3. Pique en A et marque sur le cercle un point voisin B.\n4. Recommence à partir de B, puis des points suivants, sans changer l'ouverture.\n5. Après six reports, tu reviens à A. Relie les six points voisins.\n\nEn pratique, de petites imprécisions peuvent empêcher le dernier point de tomber exactement sur A."
          },
          {
            type: "exemple",
            titre: "Pourquoi le côté de l'hexagone vaut-il le rayon ?",
            texte: "Deux sommets voisins A et B forment avec le centre O un angle AÔB de 60°.\n\nOA et OB sont des rayons, donc OA = OB. Le triangle OAB est isocèle en O. Ses deux autres angles sont égaux ; leur somme vaut 180° - 60° = 120°, donc chacun mesure 60°.\n\nLes trois angles du triangle valent 60° : il est équilatéral. Ainsi AB = OA = OB."
          },
          {
            type: "remarque",
            titre: "Une construction soignée",
            texte: "Utilise un crayon bien taillé, garde le compas à la même ouverture lorsque la méthode le demande et nomme les points.\n\nLe dessin aide à voir la propriété, mais une démonstration explique pourquoi elle est vraie."
          }
        ]
      },
      {
        id: "m3-polygones-perimetres",
        titre: "Calculer un périmètre",
        blocs: [
          {
            type: "definition",
            titre: "Le tour d'une figure",
            texte: "Le périmètre d'un polygone est la somme des longueurs de tous ses côtés.\n\nPour un polygone régulier de n côtés, chaque côté ayant une longueur c :\n\nP = n × c."
          },
          {
            type: "exemple",
            titre: "Un hexagone régulier",
            texte: "Un hexagone régulier a six côtés de 4 cm.\n\nSon périmètre est : P = 6 × 4 = 24 cm.\n\nOn multiplie par 6 parce que les six côtés ont la même longueur."
          },
          {
            type: "methode",
            titre: "Retrouver la longueur d'un côté",
            texte: "Un pentagone régulier a un périmètre de 35 cm. Ses cinq côtés sont égaux.\n\nLa longueur d'un côté est donc : 35 ÷ 5 = 7 cm.\n\nVérification : 5 × 7 = 35 cm."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre angle et côté",
            texte: "Connaître l'angle au centre d'un polygone ne suffit pas, à lui seul, pour calculer son périmètre. Il faut aussi connaître une longueur ou disposer d'autres informations permettant de la trouver."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un cercle de centre O a un rayon de 5 cm.\n\n1. Quelle est la distance entre O et un point A du cercle ?\n2. Quelle est la longueur d'un diamètre ?",
        correction: "1. Tous les points du cercle sont à une distance du centre égale au rayon. Donc OA = 5 cm.\n\n2. Un diamètre mesure deux fois le rayon : 2 × 5 = 10 cm."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On partage un tour complet en angles égaux. Calcule la mesure de chaque angle si le nombre de parts est :\n\n1. 4\n2. 6\n3. 8",
        correction: "Un tour complet mesure 360°.\n\n1. 360° ÷ 4 = 90°.\n2. 360° ÷ 6 = 60°.\n3. 360° ÷ 8 = 45°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Réponds vrai ou faux et justifie :\n\n1. Un carré est un polygone régulier.\n2. Tout rectangle est un polygone régulier.\n3. Un hexagone régulier possède six côtés égaux.",
        correction: "1. Vrai : ses quatre côtés sont égaux et ses quatre angles sont égaux.\n\n2. Faux : un rectangle qui n'est pas un carré n'a pas ses quatre côtés de même longueur. Le carré est un cas particulier de rectangle régulier.\n\n3. Vrai : un hexagone a six côtés et, s'il est régulier, ils ont tous la même longueur."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calcule l'angle au centre entre deux sommets voisins :\n\n1. d'un pentagone régulier inscrit dans un cercle ;\n2. d'un octogone régulier inscrit dans un cercle.",
        correction: "Les angles au centre entre sommets voisins se partagent un tour complet de 360° en parts égales.\n\n1. Un pentagone a 5 côtés : 360° ÷ 5 = 72°.\n\n2. Un octogone a 8 côtés : 360° ÷ 8 = 45°."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un hexagone régulier est inscrit dans un cercle de rayon 3 cm.\n\n1. Quelle est la longueur d'un côté de l'hexagone ?\n2. Calcule son périmètre.\n3. Quelle est la mesure de l'angle au centre entre deux sommets voisins ?",
        correction: "1. Dans un hexagone régulier inscrit, chaque côté a la même longueur que le rayon du cercle. Un côté mesure donc 3 cm.\n\n2. Il y a six côtés : P = 6 × 3 = 18 cm.\n\n3. Les six angles au centre sont égaux et forment un tour complet : 360° ÷ 6 = 60°."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un polygone régulier inscrit dans un cercle possède un angle au centre de 40° entre deux sommets voisins.\n\n1. Combien de côtés possède-t-il ?\n2. Chaque côté mesure 2 cm. Calcule son périmètre.",
        correction: "1. Les angles au centre sont égaux et leur somme est 360°. Si chaque angle mesure 40°, leur nombre est :\n360 ÷ 40 = 9.\n\nLe polygone possède donc 9 côtés.\n\n2. Ses neuf côtés mesurent chacun 2 cm :\nP = 9 × 2 = 18 cm."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On veut construire un carré inscrit dans un cercle de centre O et de rayon 4 cm.\n\n1. Quel angle au centre faut-il laisser entre deux sommets voisins ?\n2. Décris une méthode de construction avec un rapporteur.\n3. Quelle est la longueur d'une diagonale du carré ?",
        correction: "1. Le carré possède quatre sommets. Les quatre angles au centre sont égaux : 360° ÷ 4 = 90°.\n\n2. On trace le cercle de centre O et de rayon 4 cm, puis un premier rayon. Avec le rapporteur, on trace trois autres rayons de façon à séparer les rayons voisins par des angles de 90°. On marque leurs intersections avec le cercle et on relie les quatre points voisins.\n\n3. Deux sommets opposés sont situés sur une même droite passant par O. Une diagonale du carré est donc un diamètre du cercle : 2 × 4 = 8 cm.\n\nAttention : 8 cm est la longueur d'une diagonale, pas celle d'un côté."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On place six points régulièrement espacés sur un cercle de centre O et de rayon 5 cm, puis on relie les points voisins.\n\n1. Nomme le polygone obtenu.\n2. Calcule l'angle au centre entre deux sommets voisins.\n3. Calcule son périmètre.\n4. Explique pourquoi un côté a la même longueur qu'un rayon.",
        correction: "1. On obtient un hexagone régulier : il possède six côtés et les sommets sont régulièrement espacés sur le cercle.\n\n2. L'angle au centre mesure 360° ÷ 6 = 60°.\n\n3. Chaque côté mesure autant que le rayon, soit 5 cm. Le périmètre est donc 6 × 5 = 30 cm.\n\n4. Soient A et B deux sommets voisins. OA = OB car ce sont des rayons, et l'angle AÔB mesure 60°. Le triangle OAB est isocèle en O : ses deux autres angles sont égaux et mesurent ensemble 120°, donc chacun mesure 60°. Le triangle est équilatéral, ainsi AB = OA = OB = 5 cm."
      }
    ]
  }
]);
