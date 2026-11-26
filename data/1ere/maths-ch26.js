enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-isometries-homotheties",
    titre: "Chapitre 26 : Transformations du plan : isométries et homothéties",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch26-transformations",
        titre: "1. Transformations et isométries",
        blocs: [
          {
            type: "introduction",
            titre: "Transformer une figure",
            texte: "Une transformation du plan associe à chaque point M un point image M'. On peut ainsi étudier l'image d'une droite, d'un segment, d'un cercle ou d'une figure entière."
          },
          {
            type: "definition",
            titre: "Isométrie",
            texte: "Une isométrie du plan est une transformation qui conserve les distances : pour tous points A et B, si A' et B' sont leurs images, alors A'B' = AB."
          },
          {
            type: "regle",
            titre: "Conséquences",
            texte: "Une isométrie conserve notamment l'alignement, les milieux, les angles géométriques et les longueurs. L'image d'un cercle est un cercle de même rayon ; l'image d'une droite est une droite."
          },
          {
            type: "remarque",
            titre: "Orientation",
            texte: "Une translation et une rotation conservent l'orientation des figures. Une symétrie axiale la renverse. Une symétrie centrale est une rotation d'angle π et conserve donc l'orientation."
          }
        ]
      },
      {
        id: "m1-ch26-isometries-usuelles",
        titre: "2. Isométries usuelles",
        blocs: [
          {
            type: "definition",
            titre: "Translation",
            texte: "La translation de vecteur u⃗ associe à M le point M' tel que MM'⃗ = u⃗. Dans un repère, si u⃗ = (a ; b) et M(x ; y), alors M'(x + a ; y + b)."
          },
          {
            type: "definition",
            titre: "Symétrie centrale",
            texte: "La symétrie de centre O associe à M le point M' tel que O soit le milieu de [MM']. Le centre O est son unique point fixe. Dans un repère, si O(a ; b) et M(x ; y), alors M'(2a − x ; 2b − y)."
          },
          {
            type: "definition",
            titre: "Symétrie axiale",
            texte: "La symétrie d'axe d associe à un point M hors de d le point M' tel que d soit la médiatrice de [MM']. Tout point de l'axe reste fixe."
          },
          {
            type: "schema",
            titre: "Symétrie par rapport à une droite",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 230' role='img' aria-label='Deux points M et M prime symétriques par rapport à une droite verticale d : le segment qui les joint est perpendiculaire à d et son milieu appartient à d.'><rect width='400' height='230' fill='white'/><line x1='200' y1='20' x2='200' y2='210' stroke='#1769aa' stroke-width='2'/><line x1='90' y1='115' x2='310' y2='115' stroke='#333' stroke-width='2'/><path d='M190 115 L190 105 L200 105' fill='none' stroke='#333'/><circle cx='90' cy='115' r='4' fill='#c43b35'/><circle cx='310' cy='115' r='4' fill='#c43b35'/><circle cx='200' cy='115' r='3' fill='#333'/><text x='78' y='137' font-size='14'>M</text><text x='312' y='137' font-size='14'>M'</text><text x='205' y='134' font-size='14'>H</text><text x='207' y='30' font-size='14' fill='#1769aa'>d</text><text x='124' y='105' font-size='13'>MH</text><text x='242' y='105' font-size='13'>HM'</text></svg>",
            legende: "L'axe d est perpendiculaire à [MM'] en son milieu H : MH = HM'."
          },
          {
            type: "definition",
            titre: "Rotation",
            texte: "La rotation de centre O et d'angle θ associe à M un point M' tel que OM' = OM et, si M ≠ O, l'angle orienté de OM⃗ vers OM'⃗ vaut θ modulo 2π. Le centre O reste fixe. Les rotations seront approfondies au chapitre suivant."
          },
          {
            type: "exemple",
            titre: "Images par translation et symétrie centrale",
            texte: "Pour A(2 ; −1), la translation de vecteur (3 ; 2) donne A'(5 ; 1). La symétrie de centre O(1 ; 1) donne A''(2 × 1 − 2 ; 2 × 1 − (−1)) = (0 ; 3)."
          },
          {
            type: "regle",
            titre: "Composition de translations",
            texte: "Effectuer successivement les translations de vecteurs u⃗ puis v⃗ revient à effectuer la translation de vecteur u⃗ + v⃗. La translation réciproque de celle de vecteur u⃗ est celle de vecteur −u⃗."
          }
        ]
      },
      {
        id: "m1-ch26-homotheties",
        titre: "3. Homothéties",
        blocs: [
          {
            type: "definition",
            titre: "Centre et rapport",
            texte: "L'homothétie de centre O et de rapport k associe à M le point M' défini par OM'⃗ = k OM⃗, où k est un réel. Si k = 1, tous les points restent fixes ; si k = 0, tous les points ont pour image O."
          },
          {
            type: "schema",
            titre: "Rapport positif et rapport négatif",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 180' role='img' aria-label='Sur une droite, O est l’origine, M est à sa droite ; son image par une homothétie de rapport deux est plus à droite, et son image par une homothétie de rapport moins un est à gauche de O.'><rect width='440' height='180' fill='white'/><line x1='35' y1='90' x2='405' y2='90' stroke='#333' stroke-width='2'/><circle cx='80' cy='90' r='4' fill='#c43b35'/><circle cx='180' cy='90' r='4' fill='#333'/><circle cx='280' cy='90' r='4' fill='#333'/><circle cx='380' cy='90' r='4' fill='#1769aa'/><text x='57' y='114' font-size='14' fill='#c43b35'>M₋₁</text><text x='173' y='114' font-size='14'>O</text><text x='273' y='114' font-size='14'>M</text><text x='369' y='114' font-size='14' fill='#1769aa'>M₂</text><text x='48' y='55' font-size='13' fill='#c43b35'>rapport −1</text><text x='321' y='55' font-size='13' fill='#1769aa'>rapport 2</text></svg>",
            legende: "Pour le rapport 2, OM₂⃗ = 2OM⃗. Pour le rapport −1, OM₋₁⃗ = −OM⃗ : O est le milieu de [MM₋₁]."
          },
          {
            type: "regle",
            titre: "Coordonnées de l'image",
            texte: "Dans un repère, si O(a ; b) et M(x ; y), l'image M'(x' ; y') par l'homothétie de centre O et de rapport k vérifie x' = a + k(x − a) et y' = b + k(y − b)."
          },
          {
            type: "regle",
            titre: "Effet sur les figures",
            texte: "Pour tous points A et B, A'B'⃗ = k AB⃗, donc A'B' = |k| AB. Si k ≠ 0, l'homothétie conserve l'alignement, les angles géométriques et le parallélisme. Une droite a pour image une droite parallèle, éventuellement confondue avec elle ; un cercle de rayon R a pour image un cercle de rayon |k|R."
          },
          {
            type: "remarque",
            titre: "Cas particuliers",
            texte: "Une homothétie de rapport −1 est la symétrie centrale de centre O. Pour k ≠ 0, son homothétie réciproque a le même centre et le rapport 1/k. Pour k = 0, tous les points ont la même image : il n'existe pas de transformation réciproque."
          },
          {
            type: "exemple",
            titre: "Calculer une image",
            texte: "Soit l'homothétie de centre O(1 ; 2) et de rapport −2. Pour A(3 ; 1), on a OA⃗ = (2 ; −1), donc OA'⃗ = (−4 ; 2) et A' = (1 − 4 ; 2 + 2) = (−3 ; 4). Si AB = 3, alors A'B' = |−2| × 3 = 6."
          },
          {
            type: "methode",
            titre: "Construire l'image d'un point",
            texte: "Tracer la droite (OM). Si k > 0, placer M' sur la demi-droite [OM), à la distance |k|OM de O. Si k < 0, le placer sur la demi-droite opposée, à la même distance |k|OM. Si M = O ou k = 0, l'image est O."
          }
        ]
      },
      {
        id: "m1-ch26-reconnaitre",
        titre: "4. Reconnaître et utiliser une transformation",
        blocs: [
          {
            type: "methode",
            titre: "Choisir une propriété",
            texte: "Pour une translation, rechercher des vecteurs déplacement égaux. Pour une symétrie centrale, rechercher des segments ayant le même milieu. Pour une symétrie axiale, rechercher une médiatrice commune. Pour une homothétie, rechercher un centre, des alignements et un rapport orienté commun."
          },
          {
            type: "exemple",
            titre: "Image d'un cercle par homothétie",
            texte: "Un cercle de centre A et de rayon 4 est transformé par une homothétie de centre O et de rapport −3/2. Son image est le cercle de centre A', image de A, et de rayon |−3/2| × 4 = 6."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre rapport et facteur de longueur",
            texte: "Le rapport k peut être négatif, mais une longueur est toujours multipliée par |k|. Une homothétie n'est une isométrie que si |k| = 1."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère, donner l'image de A(−1 ; 3) par la translation de vecteur u⃗ = (4 ; −2).",
        correction: "On ajoute les coordonnées du vecteur : A'(−1 + 4 ; 3 − 2) = A'(3 ; 1)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une isométrie transforme un segment [AB] de longueur 7 cm en [A'B']. Quelle est la longueur A'B' ?",
        correction: "Une isométrie conserve les distances. Donc A'B' = AB = 7 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère, déterminer l'image de M(5 ; −1) par la symétrie centrale de centre O(2 ; 1).",
        correction: "Le centre O est le milieu de [MM']. Ainsi x' = 2 × 2 − 5 = −1 et y' = 2 × 1 − (−1) = 3. L'image est M'(−1 ; 3)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un cercle de rayon 6 cm est transformé par une homothétie de rapport −1/2. Quel est le rayon du cercle image ?",
        correction: "Les longueurs sont multipliées par |−1/2| = 1/2. Le rayon image vaut donc 3 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère, on considère l'homothétie de centre O(1 ; −1) et de rapport 2. Déterminer l'image de A(3 ; 2), puis retrouver A à partir de son image en utilisant la transformation réciproque.",
        correction: "OA⃗ = (2 ; 3), donc OA'⃗ = (4 ; 6) et A'(5 ; 5). La réciproque est l'homothétie de centre O et de rapport 1/2. À partir de A', on obtient O + 1/2 OA'⃗ = (1 ; −1) + (2 ; 3) = (3 ; 2), soit A."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé, déterminer l'image du cercle de centre A(2 ; 1) et de rayon 3 par la translation de vecteur (−1 ; 4).",
        correction: "La translation conserve les distances. Le centre image est A'(2 − 1 ; 1 + 4) = (1 ; 5), et le rayon reste 3. Le cercle image a donc pour équation (x − 1)² + (y − 5)² = 9."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé, on applique à la droite d : x + 2y − 3 = 0 l'homothétie de centre O(0 ; 0) et de rapport 2. Déterminer une équation de la droite image.",
        correction: "Si M(x ; y) a pour image M'(X ; Y), alors X = 2x et Y = 2y. Comme le rapport est non nul, x = X/2 et y = Y/2. La condition M ∈ d équivaut à X/2 + 2Y/2 − 3 = 0, soit X + 2Y − 6 = 0. La droite image a donc pour équation x + 2y − 6 = 0. Elle est parallèle à d."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé, A(1 ; 1), B(3 ; 2), A'(3 ; 1) et B'(7 ; 3). Montrer que l'homothétie de centre O(−1 ; 1) et de rapport 2 transforme A en A' et B en B'. En déduire le rapport des longueurs A'B' et AB.",
        correction: "OA⃗ = (2 ; 0) et OA'⃗ = (4 ; 0) = 2OA⃗. De même, OB⃗ = (4 ; 1) et OB'⃗ = (8 ; 2) = 2OB⃗. L'homothétie indiquée transforme donc A en A' et B en B'. Elle multiplie les longueurs par |2| : A'B' = 2AB."
      }
    ]
  }
]);
