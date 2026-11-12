enregistrerChapitres("6e", "maths", [
  {
    id: "ch13",
    titre: "Chapitre 13 : Périmètres et aires",
    premium: false,
    guide: false,
    lecons: [
      {
        id: "ch13-lecon1",
        titre: "Leçon 1 : Le périmètre",
        blocs: [
          { type: "texte", texte: "Le père de Koto veut clôturer son jardin avec du fil de fer. Pour savoir combien de mètres de fil acheter, il doit mesurer le tour du jardin.\n\nCe tour, en mathématiques, s'appelle le périmètre." },
          { type: "definition", texte: "Le périmètre d'une figure est la longueur de son contour : le tour complet de la figure.\nOn le calcule en additionnant les longueurs de tous les côtés.\nLe périmètre s'exprime dans une unité de LONGUEUR : cm, m, km..." },
          { type: "regle", texte: "Périmètre du rectangle : P = 2 × (L + l)\nL est la longueur, l est la largeur.\nPourquoi 2 fois ? Parce que le rectangle a 2 longueurs et 2 largeurs." },
          { type: "regle", texte: "Périmètre du carré : P = 4 × c\nc est le côté du carré. Ses 4 côtés sont égaux." },
          { type: "exemple", texte: "Exemple 1 : un jardin rectangulaire mesure 12 m de long et 8 m de large.\nP = 2 × (12 + 8) = 2 × 20 = 40 m\nIl faut 40 m de fil de fer pour en faire le tour.\n\nExemple 2 : un carré de 9 cm de côté.\nP = 4 × 9 = 36 cm" },
          { type: "remarque", texte: "Retiens bien : le périmètre est une LONGUEUR, il se mesure en mètres, en centimètres... jamais en mètres carrés !" }
        ]
      },
      {
        id: "ch13-lecon2",
        titre: "Leçon 2 : Le cercle et le nombre π",
        blocs: [
          { type: "texte", texte: "Une roue de charrette, une assiette, une kapoaka vue d'en haut : ce sont des cercles. Pour décrire un cercle, deux mots suffisent : le centre et le rayon." },
          { type: "definition", texte: "Le cercle de centre O est l'ensemble des points situés à la même distance de O. Cette distance s'appelle le rayon (r).\nLe diamètre (d) est un segment qui traverse le cercle en passant par le centre : d = 2 × r." },
          { type: "texte", texte: "Expérience : mesure le tour d'une kapoaka avec une ficelle, puis mesure son diamètre. Divise le tour par le diamètre. Tu trouveras toujours environ 3,14 ! Ce nombre magique est le même pour TOUS les cercles du monde. On l'appelle π (on prononce « pi »)." },
          { type: "regle", texte: "Le nombre π (pi) vaut environ 3,14.\nC'est le rapport entre le périmètre d'un cercle et son diamètre. Il est toujours le même, pour tous les cercles." },
          { type: "regle", texte: "Périmètre du cercle (aussi appelé circonférence) :\nP = π × d = π × r × 2\navec π ≈ 3,14" },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='195' viewBox='0 0 320 195'><circle cx='130' cy='90' r='60' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><circle cx='130' cy='90' r='4' fill='#E53935'/><text x='122' y='80' font-size='12' fill='#E53935'>O</text><line x1='130' y1='90' x2='172' y2='48' stroke='#43A047' stroke-width='2.5'/><text x='162' y='62' font-size='13' fill='#43A047'>r</text><line x1='70' y1='90' x2='190' y2='90' stroke='#F4B400' stroke-width='2.5' stroke-dasharray='6,4'/><text x='130' y='108' font-size='13' text-anchor='middle' fill='#B8860B'>d</text><text x='130' y='182' font-size='12' text-anchor='middle' fill='#333333'>d = 2 × r   et   P = π × d</text></svg>", legende: "Le rayon r (vert) va du centre au bord. Le diamètre d (jaune) traverse le cercle en passant par le centre : d = 2 × r." },
          { type: "exemple", texte: "Exemple : une roue a un rayon de 30 cm. Quel est son périmètre ?\nP = π × r × 2 = 3,14 × 30 × 2 = 188,4 cm\nLa roue parcourt 188,4 cm en un tour complet." },
          { type: "remarque", texte: "Attention aux formules : si on te donne le rayon, pense à le multiplier par 2. Si on te donne le diamètre, tu peux calculer directement P = π × d." }
        ]
      },
      // === FIN MORCEAU 1 ===
            {
        id: "ch13-lecon3",
        titre: "Leçon 3 : L'aire du rectangle et du carré",
        blocs: [
          { type: "texte", texte: "Le père de Koto veut maintenant recouvrir le sol de la maison de dalles. Cette fois, il ne s'agit plus du tour, mais de la SURFACE à couvrir : c'est l'aire." },
          { type: "definition", texte: "L'aire d'une figure est la mesure de sa surface : l'espace qu'elle occupe à l'intérieur de son contour.\nL'aire s'exprime dans une unité d'AIRE : cm², m², km²... (toujours avec le petit 2)." },
          { type: "regle", texte: "Aire du rectangle : A = L × l\nOn multiplie la longueur par la largeur." },
          { type: "regle", texte: "Aire du carré : A = c × c\nOn multiplie le côté par lui-même." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='175' viewBox='0 0 320 175'><rect x='30' y='30' width='150' height='100' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><line x1='80' y1='30' x2='80' y2='130' stroke='#90CAF9' stroke-width='1'/><line x1='130' y1='30' x2='130' y2='130' stroke='#90CAF9' stroke-width='1'/><line x1='30' y1='80' x2='180' y2='80' stroke='#90CAF9' stroke-width='1'/><text x='105' y='152' font-size='13' text-anchor='middle' fill='#333333'>L = 3 cm</text><text x='22' y='85' font-size='13' text-anchor='middle' fill='#333333' transform='rotate(-90 22 85)'>l = 2 cm</text><text x='105' y='85' font-size='13' text-anchor='middle' fill='#1E88E5'>6 carreaux</text><text x='250' y='70' font-size='13' text-anchor='middle' fill='#333333'>A = 3 × 2</text><text x='250' y='92' font-size='13' text-anchor='middle' fill='#333333'>= 6 cm²</text></svg>", legende: "Ce rectangle de 3 cm sur 2 cm contient 6 carreaux de 1 cm² : A = 3 × 2 = 6 cm²." },
          { type: "exemple", texte: "Exemple : une pièce mesure 5 m de long et 4 m de large. Quelle est son aire ?\nA = 5 × 4 = 20 m²\nLe sol de la pièce a une aire de 20 m²." },
          { type: "remarque", texte: "Ne confonds jamais périmètre et aire :\n• le PÉRIMÈTRE, c'est le TOUR (en m) ;\n• l'AIRE, c'est la SURFACE (en m²).\nUn grand jardin peut avoir un petit périmètre, et un jardin tout en longueur peut avoir un énorme périmètre avec une petite aire !" }
        ]
      },
      {
        id: "ch13-lecon4",
        titre: "Leçon 4 : L'aire du parallélogramme",
        blocs: [
          { type: "texte", texte: "Tu te souviens du parallélogramme (chapitre 8) ? Ses côtés opposés sont parallèles et de même longueur. Pour calculer son aire, il y a une astuce très élégante." },
          { type: "texte", texte: "Imagine qu'on découpe le petit triangle à gauche du parallélogramme et qu'on le glisse à droite. On obtient... un rectangle ! L'aire n'a pas changé." },
          { type: "regle", texte: "Aire du parallélogramme : A = b × h\n• b est la base : un côté du parallélogramme ;\n• h est la hauteur : la distance PERPENDICULAIRE entre la base et le côté opposé." },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='175' viewBox='0 0 320 175'><polygon points='70,120 230,120 270,40 110,40' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><line x1='190' y1='120' x2='190' y2='40' stroke='#E53935' stroke-width='2' stroke-dasharray='5,4'/><polyline points='190,108 202,108 202,120' fill='none' stroke='#E53935' stroke-width='1.5'/><text x='181' y='84' font-size='13' fill='#E53935'>h</text><text x='150' y='140' font-size='13' text-anchor='middle' fill='#333333'>base b</text><text x='265' y='165' font-size='13' fill='#333333'>A = b × h</text></svg>", legende: "La hauteur h (en rouge pointillé) est perpendiculaire à la base b : c'est la distance entre les deux côtés parallèles." },
          { type: "exemple", texte: "Exemple : un parallélogramme a une base de 8 cm et une hauteur de 5 cm.\nA = 8 × 5 = 40 cm²" },
          { type: "remarque", texte: "Attention au piège : la hauteur n'est PAS la longueur du côté incliné ! La hauteur est toujours perpendiculaire à la base. Sur les dessins, elle est souvent tracée en pointillés, avec un petit carré d'angle droit." }
        ]
      },
      {
        id: "ch13-lecon5",
        titre: "Leçon 5 : L'aire du triangle",
        blocs: [
          { type: "texte", texte: "Et pour le triangle ? Nouvelle astuce : prends DEUX triangles identiques et assemble-les. Tu obtiens un parallélogramme !\n\nL'aire d'un triangle est donc la MOITIÉ de l'aire du parallélogramme correspondant." },
          { type: "regle", texte: "Aire du triangle : A = (b × h) ÷ 2\n• b est la base : un côté du triangle ;\n• h est la hauteur : la perpendiculaire qui va du sommet opposé à la base.\nOn n'oublie JAMAIS le ÷ 2 !" },
          { type: "schema", svg: "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='185' viewBox='0 0 320 185'><polygon points='60,130 220,130 150,40' fill='#E3F2FD' stroke='#1E88E5' stroke-width='2'/><line x1='150' y1='130' x2='150' y2='40' stroke='#E53935' stroke-width='2' stroke-dasharray='5,4'/><polyline points='150,118 162,118 162,130' fill='none' stroke='#E53935' stroke-width='1.5'/><text x='141' y='88' font-size='13' fill='#E53935'>h</text><text x='140' y='152' font-size='13' text-anchor='middle' fill='#333333'>base b</text><text x='140' y='175' font-size='13' text-anchor='middle' fill='#333333'>A = (b × h) ÷ 2</text></svg>", legende: "La hauteur h descend du sommet, perpendiculairement à la base b." },
          { type: "exemple", texte: "Exemple 1 : un triangle a une base de 10 cm et une hauteur de 6 cm.\nA = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm²\n\nExemple 2 : un triangle a une base de 8 m et une hauteur de 3 m.\nA = (8 × 3) ÷ 2 = 24 ÷ 2 = 12 m²" },
          { type: "remarque", texte: "Deux étapes pour ne pas se tromper :\n1. Calcule d'abord b × h (comme pour le parallélogramme) ;\n2. Divise le résultat par 2.\nL'oubli du ÷ 2 est l'erreur la plus fréquente en 6e !" }
        ]
      }
      // === FIN MORCEAU 2 ===
          ],
    exercices: [
      { niveau: 1, points: 2, enonce: "Exercice 1\nCalcule le périmètre d'un rectangle de 9 cm de long et 5 cm de large.", correction: "P = 2 × (L + l) = 2 × (9 + 5) = 2 × 14 = 28 cm\nLe périmètre du rectangle est 28 cm." },
      { niveau: 1, points: 2, enonce: "Exercice 2\nCalcule l'aire d'un carré de 6 cm de côté.", correction: "A = c × c = 6 × 6 = 36 cm²\nL'aire du carré est 36 cm²." },
      { niveau: 2, points: 3, enonce: "Exercice 3\nUne roue de charrette a un diamètre de 50 cm.\nCalcule son périmètre (prends π = 3,14).", correction: "On connaît le diamètre, donc :\nP = π × d = 3,14 × 50 = 157 cm\nLe périmètre de la roue est 157 cm.\nEn un tour complet, la roue avance de 157 cm." },
      { niveau: 2, points: 3, enonce: "Exercice 4\nCalcule l'aire d'un triangle de base 12 cm et de hauteur 5 cm.", correction: "1. b × h = 12 × 5 = 60\n2. A = 60 ÷ 2 = 30 cm²\nL'aire du triangle est 30 cm²." },
      { niveau: 3, points: 4, enonce: "Exercice 5\nLe jardin de Koto est un rectangle de 15 m de long et 10 m de large.\na) Calcule son périmètre (pour la clôture).\nb) Calcule son aire (pour semer le gazon).\nc) Pourquoi les deux résultats n'ont-ils pas la même unité ?", correction: "a) P = 2 × (15 + 10) = 2 × 25 = 50 m\nb) A = 15 × 10 = 150 m²\nc) Le périmètre est une longueur (le tour du jardin) : il se mesure en mètres. L'aire est une surface (le sol à couvrir) : elle se mesure en mètres carrés. Ce sont deux grandeurs différentes !" },
      { niveau: 3, points: 4, enonce: "Exercice 6\nUn terrain a la forme d'un parallélogramme de base 40 m et de hauteur 25 m.\na) Calcule son aire en m².\nb) Convertis cette aire en dam².", correction: "a) A = b × h = 40 × 25 = 1 000 m²\nb) 1 dam² = 100 m², donc 1 000 m² = 1 000 ÷ 100 = 10 dam²\nLe terrain a une aire de 1 000 m², soit 10 dam²." },
      { niveau: 4, points: 5, enonce: "Exercice 7\nDeux terrains à vendre :\n• Terrain A : un carré de 30 m de côté.\n• Terrain B : un rectangle de 50 m de long et 16 m de large.\na) Calcule l'aire de chaque terrain.\nb) Lequel est le plus grand ?\nc) Calcule le périmètre de chaque terrain. Que remarques-tu ?", correction: "a) Terrain A : A = 30 × 30 = 900 m²\nTerrain B : A = 50 × 16 = 800 m²\nb) Le terrain A est le plus grand : 900 m² > 800 m².\nc) Périmètre de A : 4 × 30 = 120 m\nPérimètre de B : 2 × (50 + 16) = 2 × 66 = 132 m\nRemarque : le terrain B a un plus grand périmètre (132 m) mais une plus petite aire (800 m²) ! Le périmètre et l'aire ne varient pas forcément ensemble." },
      { niveau: 4, points: 5, enonce: "Exercice 8\nLa roue d'une bicyclette a un rayon de 35 cm.\na) Calcule le périmètre de la roue (prends π = 3,14).\nb) Hery parcourt 1 570 m pour aller à l'école. Combien de tours complets la roue fait-elle pendant ce trajet ? (Indice : 1 570 m = 157 000 cm)", correction: "a) P = π × r × 2 = 3,14 × 35 × 2 = 219,8 cm\nLe périmètre de la roue est 219,8 cm.\nb) Nombre de tours = distance ÷ périmètre\n157 000 ÷ 219,8 ≈ 714,3\nLa roue fait environ 714 tours complets pendant le trajet." }
    ]
  }
]);
