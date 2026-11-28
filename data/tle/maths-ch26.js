enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch26",
    titre: "Chapitre 26 : Géométrie de l’espace et produit vectoriel",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch26-l1",
        titre: "Leçon 1 : Points et vecteurs de l’espace",
        blocs: [
          {
            type: "introduction",
            titre: "Passer du plan à l’espace",
            texte: "Dans l’espace, il faut trois coordonnées pour repérer un point. Dans un repère (O ; i, j, k), un point M a pour coordonnées (x ; y ; z) lorsque :\n\nOM = x i + y j + z k.\n\nLes coordonnées d’un vecteur indiquent ses composantes selon les trois axes."
          },
          {
            type: "definition",
            titre: "Coordonnées d’un vecteur",
            texte: "Si A(xA ; yA ; zA) et B(xB ; yB ; zB), alors :\n\nAB = (xB − xA ; yB − yA ; zB − zA).\n\nDeux vecteurs sont égaux si leurs trois coordonnées sont égales. Deux vecteurs non nuls sont colinéaires si l’un est un multiple de l’autre."
          },
          {
            type: "texte",
            titre: "Distance dans un repère orthonormé",
            texte: "Dans un repère orthonormé, si u = (x ; y ; z), sa norme est :\n\n||u|| = √(x² + y² + z²).\n\nAinsi, AB = √((xB − xA)² + (yB − yA)² + (zB − zA)²).\n\nLe milieu de [AB] a pour coordonnées les moyennes des coordonnées de A et de B."
          },
          {
            type: "schema",
            titre: "Un repère de l’espace",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 220'><defs><marker id='fleche26a' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#334155'/></marker></defs><line x1='115' y1='155' x2='300' y2='155' stroke='#334155' stroke-width='2' marker-end='url(#fleche26a)'/><line x1='115' y1='155' x2='45' y2='205' stroke='#334155' stroke-width='2' marker-end='url(#fleche26a)'/><line x1='115' y1='155' x2='115' y2='25' stroke='#334155' stroke-width='2' marker-end='url(#fleche26a)'/><text x='105' y='174' font-size='14'>O</text><text x='302' y='160' font-size='14'>x</text><text x='30' y='214' font-size='14'>y</text><text x='120' y='25' font-size='14'>z</text><circle cx='210' cy='75' r='4' fill='#2563eb'/><text x='218' y='73' font-size='14'>M(x ; y ; z)</text><line x1='210' y1='75' x2='210' y2='155' stroke='#94a3b8' stroke-dasharray='5 4'/></svg>",
            legende: "Représentation en perspective : les axes sont perpendiculaires dans l’espace, même s’ils ne le paraissent pas tous sur le dessin."
          },
          {
            type: "exemple",
            titre: "Vecteur et distance",
            texte: "Soient A(1 ; −2 ; 3) et B(4 ; 2 ; 3) dans un repère orthonormé.\n\nAB = (4 − 1 ; 2 − (−2) ; 3 − 3) = (3 ; 4 ; 0).\n\nDonc AB = √(3² + 4² + 0²) = 5."
          }
        ]
      },

      {
        id: "tle-maths-ch26-l2",
        titre: "Leçon 2 : Produit scalaire et orthogonalité",
        blocs: [
          {
            type: "definition",
            titre: "Produit scalaire",
            texte: "Dans un repère orthonormé, pour u = (x ; y ; z) et v = (x' ; y' ; z') :\n\nu · v = xx' + yy' + zz'.\n\nPour deux vecteurs non nuls, u · v = ||u|| × ||v|| × cos(θ), où θ est l’angle entre eux."
          },
          {
            type: "methode",
            titre: "Montrer que deux vecteurs sont orthogonaux",
            texte: "Calculer leur produit scalaire. Si u · v = 0, les vecteurs sont orthogonaux.\n\nPour conclure que deux droites sont perpendiculaires, vérifier en plus qu’elles sont sécantes. Dans l’espace, deux droites peuvent avoir des directions orthogonales sans se rencontrer."
          },
          {
            type: "exemple",
            titre: "Calcul de produit scalaire",
            texte: "Soient u = (1 ; 2 ; −1) et v = (2 ; 0 ; 2).\n\nu · v = 1 × 2 + 2 × 0 + (−1) × 2 = 0.\n\nLes deux vecteurs sont orthogonaux."
          },
          {
            type: "definition",
            titre: "Vecteur normal à un plan",
            texte: "Un vecteur non nul n est normal à un plan lorsqu’il est orthogonal à toutes les directions de ce plan.\n\nIl suffit de vérifier qu’il est orthogonal à deux vecteurs non colinéaires du plan.\n\nDans un repère orthonormé, le plan d’équation ax + by + cz + d = 0, avec (a ; b ; c) ≠ (0 ; 0 ; 0), a pour vecteur normal n = (a ; b ; c)."
          },
          {
            type: "exemple",
            titre: "Équation d’un plan",
            texte: "Cherchons le plan passant par A(1 ; 0 ; 2) et de vecteur normal n = (2 ; −1 ; 3).\n\nUn point M(x ; y ; z) appartient au plan si et seulement si n · AM = 0 :\n2(x − 1) − y + 3(z − 2) = 0.\n\nAprès développement : 2x − y + 3z − 8 = 0."
          }
        ]
      },

      {
        id: "tle-maths-ch26-l3",
        titre: "Leçon 3 : Droites et plans",
        blocs: [
          {
            type: "definition",
            titre: "Représentation paramétrique d’une droite",
            texte: "La droite passant par A(xA ; yA ; zA) et de vecteur directeur non nul u = (a ; b ; c) est l’ensemble des points M tels que AM = t u, avec t réel.\n\nSes équations paramétriques sont :\nx = xA + at ; y = yA + bt ; z = zA + ct, avec t ∈ ℝ."
          },
          {
            type: "methode",
            titre: "Tester l’appartenance d’un point à une droite",
            texte: "Remplacer x, y et z par les coordonnées du point dans les équations paramétriques. Le point appartient à la droite s’il existe une même valeur réelle de t qui vérifie les trois équations."
          },
          {
            type: "exemple",
            titre: "Intersection d’une droite et d’un plan",
            texte: "Soit D : x = 1 + t, y = 2t, z = 3 − t et P : x + y + z = 6.\n\nOn remplace les coordonnées de la droite dans l’équation du plan :\n(1 + t) + 2t + (3 − t) = 6.\nDonc 4 + 2t = 6, soit t = 1.\n\nLe point d’intersection est I(2 ; 2 ; 2). Il vérifie bien 2 + 2 + 2 = 6."
          },
          {
            type: "texte",
            titre: "Positions relatives d’une droite et d’un plan",
            texte: "Soit u un vecteur directeur de la droite et n un vecteur normal au plan.\n\n• Si n · u ≠ 0, la droite coupe le plan en un unique point.\n• Si n · u = 0, la droite est parallèle au plan : elle est soit incluse dans le plan, soit sans point commun avec lui. Pour distinguer ces cas, on teste un point de la droite dans l’équation du plan."
          },
          {
            type: "remarque",
            titre: "Deux droites dans l’espace",
            texte: "Deux droites peuvent être sécantes, parallèles ou non coplanaires. Dans ce dernier cas, elles ne se coupent pas et ne sont pas parallèles : on les appelle aussi droites gauches."
          }
        ]
      },

      {
        id: "tle-maths-ch26-l4",
        titre: "Leçon 4 : Produit vectoriel",
        blocs: [
          {
            type: "definition",
            titre: "Calcul dans un repère orthonormé direct",
            texte: "Pour u = (x ; y ; z) et v = (x' ; y' ; z'), leur produit vectoriel est le vecteur :\n\nu × v = (yz' − zy' ; zx' − xz' ; xy' − yx').\n\nL’ordre compte : v × u = −(u × v). Cette formule suppose un repère orthonormé direct."
          },
          {
            type: "texte",
            titre: "Propriétés géométriques",
            texte: "Le vecteur u × v est orthogonal à u et à v. Sa norme vaut :\n\n||u × v|| = ||u|| × ||v|| × sin(θ),\n\noù θ est l’angle entre les deux vecteurs non nuls.\n\nu × v = 0 si et seulement si u et v sont colinéaires. Si les vecteurs ne sont pas colinéaires, u × v est normal au plan qu’ils dirigent."
          },
          {
            type: "schema",
            titre: "Produit vectoriel et aire",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 200'><defs><marker id='fleche26b' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#1e40af'/></marker></defs><path d='M55 150 L225 150 L285 95 L115 95 Z' fill='#dbeafe' stroke='#60a5fa' stroke-width='2'/><line x1='55' y1='150' x2='225' y2='150' stroke='#1e40af' stroke-width='3' marker-end='url(#fleche26b)'/><line x1='55' y1='150' x2='115' y2='95' stroke='#1e40af' stroke-width='3' marker-end='url(#fleche26b)'/><line x1='55' y1='150' x2='55' y2='35' stroke='#1e40af' stroke-width='3' marker-end='url(#fleche26b)'/><text x='135' y='171' font-size='14'>u</text><text x='76' y='112' font-size='14'>v</text><text x='63' y='42' font-size='14'>u × v</text></svg>",
            legende: "Le produit vectoriel est perpendiculaire au plan de u et v. Sa norme donne l’aire du parallélogramme représenté."
          },
          {
            type: "exemple",
            titre: "Calculer et vérifier",
            texte: "Soient u = (1 ; 0 ; 1) et v = (0 ; 1 ; 1).\n\nu × v = (0 × 1 − 1 × 1 ; 1 × 0 − 1 × 1 ; 1 × 1 − 0 × 0) = (−1 ; −1 ; 1).\n\nVérification : u · (u × v) = −1 + 1 = 0 et v · (u × v) = −1 + 1 = 0.\n\nL’aire du parallélogramme construit sur u et v vaut √3 ; celle du triangle correspondant vaut √3/2."
          },
          {
            type: "methode",
            titre: "Trouver un plan passant par trois points",
            texte: "Pour trois points A, B et C non alignés :\n1. Calculer AB et AC.\n2. Calculer n = AB × AC : ce vecteur est non nul et normal au plan (ABC).\n3. Écrire n · AM = 0 avec M(x ; y ; z).\n4. Développer et vérifier que A, B et C satisfont l’équation obtenue."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Soient A(2 ; 1 ; −1) et B(5 ; −1 ; 3). Calculer AB et la distance AB dans un repère orthonormé.",
        correction: "AB = (5 − 2 ; −1 − 1 ; 3 − (−1)) = (3 ; −2 ; 4). Donc AB = √(3² + (−2)² + 4²) = √29."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer le milieu de A(1 ; 3 ; −2) et B(5 ; −1 ; 4).",
        correction: "Le milieu a pour coordonnées ((1 + 5)/2 ; (3 − 1)/2 ; (−2 + 4)/2), soit (3 ; 1 ; 1)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Les vecteurs u = (1 ; 2 ; 3) et v = (2 ; 4 ; 6) sont-ils colinéaires ?",
        correction: "Oui : v = 2u. Les deux vecteurs sont donc colinéaires."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer le produit scalaire de u = (1 ; −1 ; 2) et v = (2 ; 0 ; −1). Que peut-on conclure ?",
        correction: "u · v = 1 × 2 + (−1) × 0 + 2 × (−1) = 0. Les vecteurs sont orthogonaux."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner un vecteur normal au plan 3x − 2y + z − 5 = 0.",
        correction: "Un vecteur normal est n = (3 ; −2 ; 1), formé des coefficients de x, y et z."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer une équation du plan passant par A(1 ; 2 ; 0) et de vecteur normal n = (1 ; −2 ; 3).",
        correction: "M(x ; y ; z) appartient au plan si et seulement si n · AM = 0, soit (x − 1) − 2(y − 2) + 3z = 0. On obtient x − 2y + 3z + 3 = 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le point P(3 ; 4 ; 1) appartient-il à la droite D : x = 1 + t, y = 2t, z = 3 − t ?",
        correction: "La première équation donne t = 2. Pour cette valeur, y = 4 et z = 1. Les trois équations sont vérifiées avec le même paramètre : P appartient à D."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer l’intersection de la droite D : x = t, y = 1 + t, z = 2 et du plan P : x + y + z = 7.",
        correction: "On remplace dans l’équation du plan : t + (1 + t) + 2 = 7, donc 2t + 3 = 7 et t = 2. L’unique point d’intersection est (2 ; 3 ; 2)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer u × v pour u = (1 ; 2 ; 0) et v = (0 ; 1 ; 3), dans un repère orthonormé direct.",
        correction: "u × v = (2 × 3 − 0 × 1 ; 0 × 0 − 1 × 3 ; 1 × 1 − 2 × 0) = (6 ; −3 ; 1)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère orthonormé direct, calculer l’aire du triangle construit à partir de u = (1 ; 0 ; 0) et v = (0 ; 2 ; 0).",
        correction: "u × v = (0 ; 0 ; 2), donc ||u × v|| = 2. L’aire du triangle est la moitié de celle du parallélogramme : 2/2 = 1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "La droite D : x = 1 + t, y = 2 − t, z = 3 est-elle parallèle au plan P : x + y + z − 1 = 0 ? Est-elle incluse dans P ?",
        correction: "Un vecteur directeur de D est u = (1 ; −1 ; 0) et un vecteur normal à P est n = (1 ; 1 ; 1). Leur produit scalaire vaut 1 − 1 + 0 = 0 : D est parallèle au plan. Pour t = 0, le point (1 ; 2 ; 3) donne 1 + 2 + 3 − 1 = 5 ≠ 0. Il n’appartient pas à P : D est donc sans point commun avec P."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé direct, déterminer une équation du plan passant par A(0 ; 0 ; 1), B(1 ; 0 ; 1) et C(0 ; 2 ; 2).",
        correction: "AB = (1 ; 0 ; 0) et AC = (0 ; 2 ; 1).\nAB × AC = (0 ; −1 ; 2), vecteur non nul : les trois points ne sont pas alignés.\nUn point M(x ; y ; z) du plan vérifie 0x − y + 2(z − 1) = 0, soit −y + 2z − 2 = 0.\nVérification : A, B et C satisfont tous cette équation."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les droites D : (x ; y ; z) = (0 ; 0 ; 0) + t(1 ; 0 ; 0) et D' : (x ; y ; z) = (0 ; 1 ; 1) + s(0 ; 1 ; 0) sont-elles sécantes ? Sont-elles parallèles ?",
        correction: "Un point de D a une coordonnée z = 0, tandis qu’un point de D' a une coordonnée z = 1. Elles ne sont donc pas sécantes. Leurs vecteurs directeurs (1 ; 0 ; 0) et (0 ; 1 ; 0) ne sont pas colinéaires : elles ne sont pas parallèles. Ce sont deux droites gauches."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Dans un repère orthonormé direct, on donne A(1 ; 0 ; 0), B(0 ; 1 ; 0) et C(0 ; 0 ; 1). 1. Calculer AB × AC. 2. En déduire une équation du plan (ABC). 3. Trouver son intersection avec la droite x = y = z = t.",
        correction: "1. AB = (−1 ; 1 ; 0) et AC = (−1 ; 0 ; 1). Donc AB × AC = (1 ; 1 ; 1), qui est non nul.\n2. Un point M(x ; y ; z) appartient au plan si et seulement si (1 ; 1 ; 1) · (x − 1 ; y ; z) = 0. Une équation est donc x + y + z − 1 = 0.\n3. Sur la droite, x = y = z = t. On obtient 3t − 1 = 0, donc t = 1/3. Le point d’intersection est (1/3 ; 1/3 ; 1/3)."
      }
    ]
  }
]);
