enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch24",
    titre: "Chapitre 24 : Transformations et isométries du plan",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch24-l1",
        titre: "Leçon 1 : Transformations et translations",
        blocs: [
          {
            type: "introduction",
            titre: "Transformer une figure",
            texte: "Une transformation du plan associe à chaque point M un point M', appelé son image. Certaines transformations déplacent une figure sans modifier ses longueurs : ce sont les isométries."
          },
          {
            type: "definition",
            titre: "Isométrie",
            texte: "Une isométrie du plan est une transformation qui conserve les distances : pour tous points A et B, si leurs images sont A' et B', alors A'B' = AB.\n\nElle conserve notamment les longueurs, les angles non orientés et l’alignement."
          },
          {
            type: "definition",
            titre: "Translation",
            texte: "La translation de vecteur u associe à chaque point M le point M' tel que le vecteur MM' soit égal à u.\n\nTous les points se déplacent dans la même direction, dans le même sens et de la même longueur."
          },
          {
            type: "methode",
            titre: "Coordonnées de l’image",
            texte: "Si M(x ; y) et si le vecteur de translation est u(a ; b), alors son image est M'(x + a ; y + b)."
          },
          {
            type: "exemple",
            titre: "Une translation",
            texte: "L’image de M(2 ; −1) par la translation de vecteur u(3 ; 4) est M'(2 + 3 ; −1 + 4), soit M'(5 ; 3)."
          },
          {
            type: "schema",
            titre: "Translation d’un segment",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 180'><rect width='320' height='180' fill='white'/><line x1='45' y1='120' x2='125' y2='120' stroke='#1769aa' stroke-width='3'/><line x1='165' y1='60' x2='245' y2='60' stroke='#c62828' stroke-width='3'/><line x1='45' y1='120' x2='165' y2='60' stroke='#777' stroke-dasharray='5 4'/><line x1='125' y1='120' x2='245' y2='60' stroke='#777' stroke-dasharray='5 4'/><circle cx='45' cy='120' r='4' fill='#1769aa'/><circle cx='125' cy='120' r='4' fill='#1769aa'/><circle cx='165' cy='60' r='4' fill='#c62828'/><circle cx='245' cy='60' r='4' fill='#c62828'/><text x='36' y='143' font-size='14'>A</text><text x='120' y='143' font-size='14'>B</text><text x='155' y='48' font-size='14'>A'</text><text x='240' y='48' font-size='14'>B'</text><text x='78' y='90' font-size='13'>u</text></svg>",
            legende: "La translation envoie A sur A' et B sur B'. Les vecteurs AA' et BB' sont égaux ; les segments [AB] et [A'B'] ont la même longueur."
          }
        ]
      },

      {
        id: "tle-maths-ch24-l2",
        titre: "Leçon 2 : Rotations et symétrie centrale",
        blocs: [
          {
            type: "definition",
            titre: "Rotation",
            texte: "La rotation de centre O et d’angle θ associe à chaque point M le point M' tel que OM' = OM et que l’angle orienté de OM vers OM' soit θ modulo 2π. Le centre O reste fixe."
          },
          {
            type: "exemple",
            titre: "Quart de tour",
            texte: "Dans un repère orthonormé direct, la rotation de centre O et d’angle π/2 envoie A(1 ; 0) sur A'(0 ; 1). Elle correspond à un quart de tour dans le sens direct."
          },
          {
            type: "definition",
            titre: "Symétrie centrale",
            texte: "La symétrie de centre O associe à M le point M' tel que O soit le milieu de [MM']. C’est une rotation de centre O et d’angle π."
          },
          {
            type: "methode",
            titre: "Coordonnées en repère",
            texte: "Si O est l’origine du repère, l’image de M(x ; y) par la symétrie centrale de centre O est M'(−x ; −y).\n\nSi le centre est C(a ; b), l’image est M'(2a − x ; 2b − y)."
          },
          {
            type: "exemple",
            titre: "Symétrie de centre C",
            texte: "Soient C(1 ; 2) et M(4 ; −1). Son image par la symétrie centrale de centre C est M'(2 − 4 ; 4 − (−1)), soit M'(−2 ; 5).\n\nLe milieu de [MM'] est bien C(1 ; 2)."
          },
          {
            type: "remarque",
            titre: "Conservation",
            texte: "Une rotation, donc aussi une symétrie centrale, est une isométrie : elle conserve les distances et les angles non orientés."
          }
        ]
      },

      {
        id: "tle-maths-ch24-l3",
        titre: "Leçon 3 : Symétrie axiale",
        blocs: [
          {
            type: "definition",
            titre: "Réflexion par rapport à une droite",
            texte: "La symétrie axiale d’axe D associe à un point M son symétrique M'. Si M n’appartient pas à D, la droite D est la médiatrice de [MM']. Si M appartient à D, il reste fixe."
          },
          {
            type: "tableau",
            titre: "Symétries usuelles",
            entetes: ["Axe", "Image de M(x ; y)"],
            lignes: [
              ["Axe des abscisses", "M'(x ; −y)"],
              ["Axe des ordonnées", "M'(−x ; y)"],
              ["Droite y = x", "M'(y ; x)"]
            ]
          },
          {
            type: "schema",
            titre: "Symétrie axiale",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 190'><rect width='320' height='190' fill='white'/><line x1='160' y1='20' x2='160' y2='170' stroke='#555' stroke-width='2'/><line x1='80' y1='85' x2='240' y2='85' stroke='#888' stroke-dasharray='5 4'/><circle cx='80' cy='85' r='5' fill='#1769aa'/><circle cx='240' cy='85' r='5' fill='#c62828'/><circle cx='160' cy='85' r='3' fill='#333'/><path d='M150 85 L150 95 L160 95' fill='none' stroke='#333'/><text x='65' y='76' font-size='14'>M</text><text x='245' y='76' font-size='14'>M'</text><text x='168' y='35' font-size='14'>D</text><text x='165' y='108' font-size='13'>H</text></svg>",
            legende: "L’axe D est perpendiculaire à [MM'] et passe par son milieu H."
          },
          {
            type: "exemple",
            titre: "Image par rapport à y = x",
            texte: "La symétrie d’axe y = x échange les coordonnées. L’image de M(2 ; −3) est donc M'(−3 ; 2)."
          },
          {
            type: "remarque",
            titre: "Orientation",
            texte: "Une symétrie axiale conserve les distances, mais inverse l’orientation des figures. Une translation et une rotation conservent l’orientation."
          }
        ]
      },

      {
        id: "tle-maths-ch24-l4",
        titre: "Leçon 4 : Compositions et reconnaissance",
        blocs: [
          {
            type: "definition",
            titre: "Composer deux transformations",
            texte: "La composée g ∘ f signifie : appliquer d’abord f, puis appliquer g à l’image obtenue.\n\nL’ordre peut modifier le résultat."
          },
          {
            type: "exemple",
            titre: "Deux translations",
            texte: "La composée de la translation de vecteur u et de celle de vecteur v est la translation de vecteur u + v.\n\nPar exemple, u(2 ; 1) puis v(−1 ; 3) donnent une translation de vecteur (1 ; 4)."
          },
          {
            type: "exemple",
            titre: "Deux symétries axiales",
            texte: "La composée de deux symétries d’axes parallèles est une translation. Lorsque les axes sont sécants, leur composée est une rotation de centre leur point d’intersection.\n\nL’ordre des deux symétries détermine le sens de la translation ou de la rotation."
          },
          {
            type: "methode",
            titre: "Reconnaître une transformation",
            texte: "Pour étudier une transformation :\n1. Observer ce qui reste fixe : un centre, une droite ou aucun point.\n2. Comparer les distances et l’orientation.\n3. Utiliser la définition ou les coordonnées pour vérifier la transformation proposée.\n\nL’observation d’une figure seule suggère une réponse, mais une justification est nécessaire."
          },
          {
            type: "remarque",
            titre: "Composition d’isométries",
            texte: "La composée de deux isométries est encore une isométrie, car chacune conserve les distances."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer l’image de M(1 ; 2) par la translation de vecteur (3 ; −1).",
        correction: "On ajoute les coordonnées du vecteur : M'(1 + 3 ; 2 − 1) = M'(4 ; 1)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer l’image de M(−2 ; 3) par la symétrie de centre O, origine du repère.",
        correction: "La symétrie de centre O change les signes des deux coordonnées. L’image est M'(2 ; −3)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer l’image de M(2 ; −5) par la symétrie d’axe des abscisses.",
        correction: "On conserve l’abscisse et on change le signe de l’ordonnée : M'(2 ; 5)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer l’image de M(4 ; 1) par la symétrie d’axe des ordonnées.",
        correction: "On change le signe de l’abscisse et on conserve l’ordonnée : M'(−4 ; 1)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer l’image de M(3 ; −2) par la symétrie d’axe y = x.",
        correction: "Cette symétrie échange les coordonnées : M'(−2 ; 3)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère orthonormé direct, déterminer l’image de A(1 ; 0) par la rotation de centre O et d’angle π/2.",
        correction: "Un quart de tour dans le sens direct envoie le point de coordonnées (1 ; 0) sur le point (0 ; 1)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer l’image de M(5 ; 3) par la symétrie de centre C(2 ; 1).",
        correction: "M' a pour coordonnées (2 × 2 − 5 ; 2 × 1 − 3), soit M'(−1 ; −1)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux translations ont pour vecteurs u(1 ; 2) et v(3 ; −4). Donner le vecteur de leur composée.",
        correction: "Le vecteur est u + v = (1 + 3 ; 2 − 4) = (4 ; −2)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une isométrie envoie A sur A' et B sur B'. Si AB = 7 cm, quelle est la longueur A'B' ?",
        correction: "Une isométrie conserve les distances. Donc A'B' = AB = 7 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On applique à M(2 ; 1) une translation de vecteur (1 ; 0), puis la symétrie de centre O. Déterminer l’image finale.",
        correction: "Après la translation, M devient (3 ; 1). La symétrie de centre O donne ensuite (−3 ; −1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On applique à M(2 ; 1) la symétrie de centre O, puis une translation de vecteur (1 ; 0). Comparer avec l’exercice précédent.",
        correction: "La symétrie donne (−2 ; −1), puis la translation donne (−1 ; −1).\nCe résultat est différent de (−3 ; −1), obtenu dans l’autre ordre : l’ordre des transformations compte."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "A(1 ; 2) et A'(4 ; 6) sont associés par une translation. Donner son vecteur et l’image de B(−1 ; 0).",
        correction: "Le vecteur de translation est AA' = (4 − 1 ; 6 − 2) = (3 ; 4).\nL’image de B est donc B'(−1 + 3 ; 0 + 4) = B'(2 ; 4)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On applique la symétrie d’axe des abscisses, puis celle d’axe des ordonnées. Quelle transformation obtient-on ?",
        correction: "Un point (x ; y) devient d’abord (x ; −y), puis (−x ; −y). C’est la symétrie centrale de centre O, ou rotation de centre O et d’angle π."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les points M(1 ; 4) et M'(5 ; 4) sont symétriques par rapport à une droite. Déterminer cet axe.",
        correction: "L’axe est la médiatrice de [MM']. Le milieu de [MM'] est (3 ; 4). Le segment est horizontal, donc sa médiatrice est la droite verticale x = 3."
      }
    ]
  }
]);
