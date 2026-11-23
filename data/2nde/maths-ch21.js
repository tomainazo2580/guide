enregistrerChapitres("2nde", "maths", [{
  id: "m2-transformations-plan",
  titre: "Chapitre 21 : Transformations du plan",
  premium: false,
  guide: false,
  lecons: [
    {
      id: "m2-ch21-generalites",
      titre: "1. Image et propriétés conservées",
      blocs: [
        {
          type: "introduction",
          titre: "Transformer une figure",
          texte: "Une transformation du plan associe à chaque point M un point M', appelé son image. En construisant les images de plusieurs points d'une figure, on obtient une nouvelle figure. Selon la transformation utilisée, certaines propriétés sont conservées."
        },
        {
          type: "definition",
          titre: "Antécédent et image",
          texte: "Si une transformation associe M' à M, on dit que M' est l'image de M et que M est un antécédent de M'. Un point invariant est un point qui est sa propre image."
        },
        {
          type: "rappel",
          titre: "Distance, alignement et angles",
          texte: "Dans ce chapitre, les symétries, les translations et les rotations conservent les distances et les angles. Une homothétie de rapport non nul conserve les angles et l'alignement, mais elle multiplie généralement les distances par une valeur différente de 1. Si son rapport est nul, tous les points ont la même image : les angles de la figure ne sont alors plus définis."
        }
      ]
    },
    {
      id: "m2-ch21-symetries",
      titre: "2. Symétries axiale et centrale",
      blocs: [
        {
          type: "definition",
          titre: "Symétrie axiale",
          texte: "L'image M' d'un point M par la symétrie d'axe d est définie ainsi : si M n'appartient pas à d, la droite d est la médiatrice du segment [MM']. Si M appartient à d, alors M' = M."
        },
        {
          type: "schema",
          titre: "Symétrie par rapport à une droite",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 190' role='img' aria-label='M et M prime sont symétriques par rapport à la droite verticale d'><rect width='360' height='190' fill='white'/><g stroke='#222' stroke-width='2' fill='none'><path d='M180 15 L180 175'/><path d='M65 95 L295 95'/><path d='M180 80 L195 80 L195 95'/></g><g fill='#222'><circle cx='65' cy='95' r='4'/><circle cx='180' cy='95' r='3'/><circle cx='295' cy='95' r='4'/></g><g fill='#222' font-size='17' font-family='sans-serif'><text x='50' y='85'>M</text><text x='297' y='85'>M'</text><text x='165' y='115'>H</text><text x='187' y='25'>d</text></g></svg>",
          legende: "La droite d est la médiatrice de [MM'] : elle est perpendiculaire à [MM'] en son milieu H."
        },
        {
          type: "definition",
          titre: "Symétrie centrale",
          texte: "L'image M' de M par la symétrie de centre O est le point tel que O soit le milieu de [MM']. Le point O est invariant. Une symétrie centrale est aussi une rotation de centre O et d'angle 180°."
        },
        {
          type: "regle",
          titre: "Conservation",
          texte: "Les deux symétries conservent les longueurs, les angles, l'alignement, les milieux et le parallélisme. L'image d'un cercle est un cercle de même rayon."
        },
        {
          type: "regle",
          titre: "Coordonnées dans un repère orthonormé",
          texte: "L'image de M(x ; y) par la symétrie d'axe des abscisses est M'(x ; −y). Par la symétrie d'axe des ordonnées, elle est M'(−x ; y). Par la symétrie de centre O, origine du repère, elle est M'(−x ; −y)."
        },
        {
          type: "exemple",
          titre: "Symétrie de centre quelconque",
          texte: "Dans un repère, I(2 ; 1) est le milieu de [MM']. Si M(5 ; −2), alors (5 + xM')/2 = 2 et (−2 + yM')/2 = 1. On obtient M'(−1 ; 4)."
        }
      ]
    },
    {
      id: "m2-ch21-translation",
      titre: "3. Translation",
      blocs: [
        {
          type: "definition",
          titre: "Translation de vecteur →u",
          texte: "La translation de vecteur →u associe à tout point M le point M' tel que →MM' = →u. Tous les points subissent le même déplacement. Si →u = →0, chaque point est invariant."
        },
        {
          type: "methode",
          titre: "Construire l'image d'un point",
          texte: "À partir de M, tracer un représentant du vecteur →u : même direction, même sens et même longueur. Son extrémité est M'. Pour obtenir l'image d'un triangle, construire les images de ses trois sommets et les relier."
        },
        {
          type: "regle",
          titre: "Propriétés",
          texte: "Une translation conserve les longueurs, les angles, l'alignement, les milieux et le parallélisme. L'image d'une droite est une droite parallèle, éventuellement confondue avec elle."
        },
        {
          type: "regle",
          titre: "Coordonnées",
          texte: "Dans un repère, si →u = (a ; b) et M(x ; y), alors l'image de M par la translation de vecteur →u est M'(x + a ; y + b). Cette formule est valable dans tout repère du plan."
        },
        {
          type: "exemple",
          titre: "Calculer une image",
          texte: "Si →u = (3 ; −2) et M(−1 ; 4), alors M'(−1 + 3 ; 4 − 2), soit M'(2 ; 2)."
        }
      ]
    },
    {
      id: "m2-ch21-homothetie",
      titre: "4. Homothétie",
      blocs: [
        {
          type: "definition",
          titre: "Centre et rapport",
          texte: "L'homothétie de centre O et de rapport réel k associe à tout point M le point M' défini par →OM' = k→OM. Le centre O est invariant."
        },
        {
          type: "schema",
          titre: "Rapports positif et négatif",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 170' role='img' aria-label='Sur une droite, M prime correspond au rapport 2 et N au rapport moins 1'><rect width='360' height='170' fill='white'/><path d='M25 90 L335 90' stroke='#222' stroke-width='2'/><g fill='#222'><circle cx='75' cy='90' r='4'/><circle cx='155' cy='90' r='4'/><circle cx='235' cy='90' r='4'/><circle cx='315' cy='90' r='4'/></g><g fill='#222' font-size='16' font-family='sans-serif'><text x='67' y='78'>N</text><text x='149' y='78'>O</text><text x='228' y='78'>M</text><text x='306' y='78'>M'</text><text x='28' y='130'>→ON = −→OM</text><text x='185' y='130'>→OM' = 2→OM</text></g></svg>",
          legende: "Un rapport positif place l'image du même côté de O que M ; un rapport négatif la place de l'autre côté."
        },
        {
          type: "remarque",
          titre: "Cas particuliers",
          texte: "Si k = 1, chaque point est invariant. Si k = −1, l'homothétie est la symétrie centrale de centre O. Si k = 0, tous les points ont pour image O : la figure est réduite à un point."
        },
        {
          type: "regle",
          titre: "Effet sur les longueurs et les aires",
          texte: "Si A' et B' sont les images de A et B, alors →A'B' = k→AB et A'B' = |k| × AB. Lorsque k ≠ 0, l'alignement, les angles et le parallélisme sont conservés. L'aire d'une figure est multipliée par k²."
        },
        {
          type: "exemple",
          titre: "Agrandissement ou réduction",
          texte: "Avec un rapport k = −2, une longueur de 3 cm devient 6 cm : on utilise |−2| = 2. Une aire de 5 cm² devient 4 × 5 = 20 cm². Le signe négatif indique que les points et leurs images sont situés de part et d'autre du centre."
        },
        {
          type: "regle",
          titre: "Coordonnées",
          texte: "Dans un repère, si le centre est O(a ; b) et M(x ; y), son image M' par l'homothétie de rapport k a pour coordonnées (a + k(x − a) ; b + k(y − b))."
        },
        {
          type: "exemple",
          titre: "Calculer l'image d'un point",
          texte: "Si O(1 ; 2), M(3 ; 5) et k = −2, alors M' a pour coordonnées (1 − 2(3 − 1) ; 2 − 2(5 − 2)), soit M'(−3 ; −4)."
        }
      ]
    },
    {
      id: "m2-ch21-rotation",
      titre: "5. Rotation",
      blocs: [
        {
          type: "definition",
          titre: "Centre et angle",
          texte: "Une rotation de centre O et d'angle orienté α associe à un point M différent de O le point M' tel que OM' = OM et que l'angle orienté de →OM vers →OM' soit α. Le centre O est invariant."
        },
        {
          type: "remarque",
          titre: "Sens de rotation",
          texte: "Un angle positif correspond au sens inverse des aiguilles d'une montre ; un angle négatif correspond au sens des aiguilles d'une montre. Par exemple, une rotation de 90° et une rotation de −90° ne donnent généralement pas la même image."
        },
        {
          type: "methode",
          titre: "Construire une image",
          texte: "Pour construire l'image de M par une rotation de centre O et d'angle α : 1. tracer le cercle de centre O passant par M ; 2. à partir de la demi-droite [OM), reporter l'angle α dans le bon sens ; 3. le point obtenu sur le cercle est M'."
        },
        {
          type: "regle",
          titre: "Propriétés",
          texte: "Une rotation conserve les longueurs, les angles, l'alignement, les milieux et le parallélisme. L'image d'un cercle est un cercle de même rayon, dont le centre est l'image du centre initial."
        },
        {
          type: "regle",
          titre: "Quart de tour dans un repère",
          texte: "Dans un repère orthonormé direct, la rotation de centre O et d'angle 90° transforme M(x ; y) en M'(−y ; x). Celle d'angle −90° transforme M(x ; y) en M'(y ; −x). Ici O est l'origine et le repère est direct : l'axe vertical positif est obtenu par un quart de tour positif depuis l'axe horizontal positif."
        },
        {
          type: "exemple",
          titre: "Rotation de 90°",
          texte: "Dans un repère orthonormé direct, l'image de M(3 ; 2) par la rotation de centre O et d'angle 90° est M'(−2 ; 3). Les distances à O sont égales : OM = OM' = √13."
        }
      ]
    },
    {
      id: "m2-ch21-bilan",
      titre: "6. Choisir une transformation",
      blocs: [
        {
          type: "methode",
          titre: "Identifier la transformation",
          texte: "Un effet miroir autour d'une droite indique une symétrie axiale. Un demi-tour autour d'un point indique une symétrie centrale. Un même déplacement pour tous les points indique une translation. Un agrandissement ou une réduction depuis un centre indique une homothétie. Un tour autour d'un centre d'un angle donné indique une rotation."
        },
        {
          type: "remarque",
          titre: "Erreurs à éviter",
          texte: "Pour une homothétie, multiplier les longueurs par |k| et non par k si k est négatif. Ne pas confondre la rotation de 90° avec celle de −90°. Pour une symétrie centrale, le centre est le milieu de [MM'] et non forcément une extrémité. Une figure ne suffit pas à prouver une propriété : il faut citer la transformation et ses propriétés."
        }
      ]
    }
  ],
  exercices: [
    {
      niveau: 1,
      points: 2,
      enonce: "Dans un repère orthonormé, donne l'image de M(3 ; −2) par la symétrie d'axe des abscisses.",
      correction: "La symétrie d'axe des abscisses conserve l'abscisse et change le signe de l'ordonnée. L'image est M'(3 ; 2)."
    },
    {
      niveau: 1,
      points: 2,
      enonce: "Une homothétie a pour rapport 3. Un segment mesure 4 cm. Quelle est la longueur de son image ?",
      correction: "Les longueurs sont multipliées par |3| = 3. Le segment image mesure donc 3 × 4 = 12 cm."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère, M(−2 ; 5) et →u = (4 ; −3). Détermine l'image M' de M par la translation de vecteur →u.",
      correction: "On ajoute les coordonnées du vecteur à celles de M : M'(−2 + 4 ; 5 − 3), soit M'(2 ; 2)."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère, I(1 ; 2) et A(4 ; −1). Détermine l'image A' de A par la symétrie de centre I.",
      correction: "I est le milieu de [AA']. Ainsi (4 + xA')/2 = 1 et (−1 + yA')/2 = 2. On obtient xA' = −2 et yA' = 5. Donc A'(−2 ; 5)."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère orthonormé direct d'origine O, donne l'image de M(2 ; −3) par la rotation de centre O et d'angle 90°.",
      correction: "La rotation de 90° transforme (x ; y) en (−y ; x). L'image de M est donc M'(3 ; 2)."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère, A(1 ; 2), B(4 ; 3) et C(2 ; 5). La translation de vecteur →u = (−2 ; 4) transforme ces points en A', B' et C'. Calcule leurs coordonnées et compare les longueurs AB et A'B'.",
      correction: "On ajoute (−2 ; 4) à chaque point : A'(−1 ; 6), B'(2 ; 7) et C'(0 ; 9). Une translation conserve les longueurs, donc A'B' = AB. On peut aussi vérifier que →A'B' = (3 ; 1) = →AB."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Une homothétie de centre O et de rapport −1/2 transforme un triangle ABC en A'B'C'. On donne AB = 8 cm, BC = 6 cm et l'aire de ABC égale à 12 cm². Calcule A'B', B'C' et l'aire de A'B'C'.",
      correction: "Les longueurs sont multipliées par |−1/2| = 1/2. Donc A'B' = 4 cm et B'C' = 3 cm. Les aires sont multipliées par (−1/2)² = 1/4 : l'aire de A'B'C' vaut 12/4 = 3 cm²."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère, O(1 ; −1) et M(4 ; 1). Détermine l'image M' de M par l'homothétie de centre O et de rapport 2.",
      correction: "→OM = (4 − 1 ; 1 − (−1)) = (3 ; 2). Donc →OM' = 2→OM = (6 ; 4). En ajoutant ces coordonnées à celles de O, on obtient M'(7 ; 3)."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère orthonormé direct d'origine O, A(2 ; 1) et B(−1 ; 3). Détermine leurs images A' et B' par la rotation de centre O et d'angle −90°. Compare AB et A'B'.",
      correction: "La rotation de −90° transforme (x ; y) en (y ; −x). Donc A'(1 ; −2) et B'(3 ; 1). Comme une rotation conserve les distances, A'B' = AB. Vérification : AB² = (−3)² + 2² = 13 et A'B'² = 2² + 3² = 13."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère orthonormé, A(1 ; 1), B(3 ; 1) et C(1 ; 4). On considère l'homothétie de centre O(0 ; 0) et de rapport −2. 1. Calcule les coordonnées des images A', B' et C'. 2. Compare les longueurs AB et A'B'. 3. L'aire de ABC vaut 3 unités d'aire. Quelle est l'aire de A'B'C' ?",
      correction: "1. Le centre est l'origine : on multiplie chaque coordonnée par −2. Ainsi A'(−2 ; −2), B'(−6 ; −2) et C'(−2 ; −8). 2. Les longueurs sont multipliées par 2 : AB = 2 et A'B' = 4. 3. Les aires sont multipliées par (−2)² = 4. L'aire de A'B'C' vaut donc 3 × 4 = 12 unités d'aire."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère orthonormé direct d'origine O, A(2 ; 1) subit d'abord la rotation de centre O et d'angle 90°, puis la translation de vecteur →u = (3 ; −1). On obtient le point C. 1. Détermine l'image intermédiaire B puis C. 2. Calcule les coordonnées de →AC. 3. La transformation composée est-elle nécessairement la translation de vecteur →AC pour tous les points ? Justifie.",
      correction: "1. La rotation transforme A(2 ; 1) en B(−1 ; 2). La translation donne C(−1 + 3 ; 2 − 1), soit C(2 ; 1). 2. →AC = (2 − 2 ; 1 − 1) = (0 ; 0). 3. Non. Ici A revient à sa position initiale, mais cela ne suffit pas pour que tous les points restent fixes. Par exemple, O(0 ; 0) reste d'abord en O par la rotation, puis devient (3 ; −1) par la translation. La transformation composée n'est donc pas la translation de vecteur nul."
    }
  ]
}]);
