enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-geometrie-analytique-espace",
    titre: "Chapitre 29 : Géométrie analytique dans l'espace : produit scalaire, équations et distances",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch29-produit-scalaire",
        titre: "1. Produit scalaire dans l'espace",
        blocs: [
          {
            type: "introduction",
            titre: "Le même outil que dans le plan",
            texte: "Le produit scalaire permet de calculer des angles et de reconnaître des directions orthogonales. Les formules de coordonnées ci-dessous utilisent un repère orthonormé de l'espace."
          },
          {
            type: "definition",
            titre: "Expression avec un angle",
            texte: "Pour deux vecteurs non nuls u⃗ et v⃗, u⃗ · v⃗ = ||u⃗|| ||v⃗|| cos θ, où θ est l'angle entre leurs directions orientées à partir d'une même origine. Si l'un des vecteurs est nul, leur produit scalaire vaut 0."
          },
          {
            type: "regle",
            titre: "Expression en coordonnées",
            texte: "Dans un repère orthonormé, si u⃗ = (x ; y ; z) et v⃗ = (x' ; y' ; z'), alors u⃗ · v⃗ = xx' + yy' + zz'. En particulier, u⃗ · u⃗ = ||u⃗||² = x² + y² + z²."
          },
          {
            type: "regle",
            titre: "Orthogonalité",
            texte: "Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul. Deux droites sont orthogonales lorsque leurs vecteurs directeurs sont orthogonaux ; elles ne sont pas nécessairement sécantes."
          },
          {
            type: "exemple",
            titre: "Tester deux directions",
            texte: "Pour u⃗ = (1 ; 2 ; −1) et v⃗ = (2 ; 0 ; 2), u⃗ · v⃗ = 1 × 2 + 2 × 0 + (−1) × 2 = 0. Les deux vecteurs sont orthogonaux."
          },
          {
            type: "methode",
            titre: "Calculer un angle",
            texte: "Pour deux vecteurs non nuls, calculer leurs normes et leur produit scalaire, puis utiliser cos θ = (u⃗ · v⃗)/(||u⃗|| ||v⃗||). En déduire θ entre 0 et π."
          },
          {
            type: "exemple",
            titre: "Angle entre deux vecteurs",
            texte: "Soient u⃗ = (1 ; 0 ; 0) et v⃗ = (1 ; 1 ; 0). Leur produit scalaire vaut 1, leurs normes valent 1 et √2. Ainsi cos θ = 1/√2 = √2/2, donc θ = π/4."
          }
        ]
      },
      {
        id: "m1-ch29-plans",
        titre: "2. Vecteur normal et équation d'un plan",
        blocs: [
          {
            type: "definition",
            titre: "Vecteur normal",
            texte: "Un vecteur normal à un plan est un vecteur non nul orthogonal à toutes les directions de ce plan. Une droite de vecteur directeur normal à un plan est perpendiculaire à ce plan."
          },
          {
            type: "schema",
            titre: "Un vecteur normal à un plan",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 260' role='img' aria-label='Un plan représenté par un parallélogramme contient le point A et deux directions u et v. Le vecteur n, issu de A, est normal au plan.'><rect width='400' height='260' fill='white'/><defs><marker id='m1ch29bleu' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#1769aa'/></marker><marker id='m1ch29rouge' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><polygon points='60,180 275,180 340,110 125,110' fill='#eef5fb' stroke='#555' stroke-width='2'/><line x1='170' y1='150' x2='250' y2='150' stroke='#1769aa' stroke-width='2' marker-end='url(#m1ch29bleu)'/><line x1='170' y1='150' x2='203' y2='114' stroke='#1769aa' stroke-width='2' marker-end='url(#m1ch29bleu)'/><line x1='170' y1='150' x2='170' y2='40' stroke='#c43b35' stroke-width='3' marker-end='url(#m1ch29rouge)'/><circle cx='170' cy='150' r='4' fill='#333'/><text x='152' y='170' font-size='14'>A</text><text x='210' y='145' font-size='14' fill='#1769aa'>u⃗</text><text x='205' y='121' font-size='14' fill='#1769aa'>v⃗</text><text x='178' y='72' font-size='14' fill='#c43b35'>n⃗</text><text x='290' y='171' font-size='14'>P</text></svg>",
            legende: "Les directions u⃗ et v⃗ sont dans le plan P. Le vecteur normal n⃗ leur est orthogonal. La perspective ne conserve pas nécessairement les angles apparents."
          },
          {
            type: "regle",
            titre: "Équation cartésienne",
            texte: "Dans un repère orthonormé, un plan admet une équation ax + by + cz + d = 0, où (a ; b ; c) ≠ (0 ; 0 ; 0). Le vecteur n⃗ = (a ; b ; c) est normal à ce plan."
          },
          {
            type: "methode",
            titre: "Plan passant par un point et de normale donnée",
            texte: "Si le plan passe par A(xA ; yA ; zA) et a pour vecteur normal n⃗ = (a ; b ; c), écrire n⃗ · AM⃗ = 0. Une équation est a(x − xA) + b(y − yA) + c(z − zA) = 0."
          },
          {
            type: "exemple",
            titre: "Construire une équation",
            texte: "Le plan passant par A(1 ; 2 ; 0) et de vecteur normal (2 ; −1 ; 3) a pour équation 2(x − 1) − (y − 2) + 3z = 0, soit 2x − y + 3z = 0."
          },
          {
            type: "methode",
            titre: "À partir de deux directions",
            texte: "Si un plan est dirigé par deux vecteurs non colinéaires u⃗ et v⃗, chercher un vecteur non nul n⃗ = (a ; b ; c) vérifiant n⃗ · u⃗ = 0 et n⃗ · v⃗ = 0. Utiliser ensuite un point du plan pour écrire son équation."
          },
          {
            type: "exemple",
            titre: "Trouver une normale",
            texte: "Pour u⃗ = (1 ; 0 ; 1) et v⃗ = (0 ; 1 ; 1), le vecteur n⃗ = (1 ; 1 ; −1) est orthogonal aux deux : 1 − 1 = 0 dans chaque produit scalaire. Le plan passant par O et dirigé par u⃗ et v⃗ a donc pour équation x + y − z = 0."
          }
        ]
      },
      {
        id: "m1-ch29-positions",
        titre: "3. Positions relatives et intersections",
        blocs: [
          {
            type: "regle",
            titre: "Deux plans",
            texte: "Deux plans sont parallèles, éventuellement confondus, si et seulement si leurs vecteurs normaux sont colinéaires. Ils sont perpendiculaires si et seulement si leurs vecteurs normaux sont orthogonaux."
          },
          {
            type: "regle",
            titre: "Droite et plan",
            texte: "Soit une droite de vecteur directeur u⃗ et un plan de vecteur normal n⃗. La droite est parallèle au plan, éventuellement contenue dans celui-ci, si et seulement si u⃗ · n⃗ = 0. Elle est perpendiculaire au plan si et seulement si u⃗ et n⃗ sont colinéaires."
          },
          {
            type: "methode",
            titre: "Intersection d'une droite et d'un plan",
            texte: "Remplacer x, y et z dans l'équation du plan par leurs expressions paramétriques sur la droite. Si l'on obtient une valeur unique de t, elle donne le point d'intersection. Une égalité impossible signifie que la droite est strictement parallèle au plan ; une égalité vraie pour tout t signifie qu'elle est contenue dans le plan."
          },
          {
            type: "exemple",
            titre: "Calcul d'une intersection",
            texte: "Soit d : x = 1 + t, y = 2 − t, z = t, et P : x + y + z − 5 = 0. La substitution donne (1 + t) + (2 − t) + t − 5 = 0, soit t = 2. Le point d'intersection est (3 ; 0 ; 2)."
          },
          {
            type: "exemple",
            titre: "Comparer deux plans",
            texte: "Les plans P : x + 2y − z + 1 = 0 et Q : 2x + 4y − 2z − 3 = 0 ont des normales colinéaires. Ils sont parallèles. Leurs équations ne sont pas proportionnelles en incluant le terme constant : ils sont distincts."
          }
        ]
      },
      {
        id: "m1-ch29-distance",
        titre: "4. Distance d'un point à un plan",
        blocs: [
          {
            type: "definition",
            titre: "Distance à un plan",
            texte: "La distance d'un point A à un plan P est la distance AH, où H est le projeté orthogonal de A sur P : la droite (AH) est perpendiculaire à P lorsque A n'appartient pas à P. Si A appartient à P, la distance vaut 0."
          },
          {
            type: "schema",
            titre: "Projection orthogonale sur un plan",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 260' role='img' aria-label='Un point A est au-dessus d’un plan P. Son projeté orthogonal H appartient au plan et le segment AH est perpendiculaire au plan.'><rect width='400' height='260' fill='white'/><polygon points='55,200 270,200 345,120 130,120' fill='#eef5fb' stroke='#555' stroke-width='2'/><line x1='190' y1='65' x2='190' y2='165' stroke='#c43b35' stroke-width='3'/><circle cx='190' cy='65' r='4' fill='#333'/><circle cx='190' cy='165' r='4' fill='#333'/><text x='175' y='60' font-size='14'>A</text><text x='198' y='171' font-size='14'>H</text><text x='245' y='185' font-size='14'>P</text><text x='198' y='115' font-size='13' fill='#c43b35'>AH</text></svg>",
            legende: "H est le point du plan le plus proche de A. La distance de A au plan P est AH."
          },
          {
            type: "regle",
            titre: "Formule de distance",
            texte: "Dans un repère orthonormé, la distance du point A(xA ; yA ; zA) au plan ax + by + cz + d = 0 est |axA + byA + czA + d|/√(a² + b² + c²), avec (a ; b ; c) ≠ (0 ; 0 ; 0)."
          },
          {
            type: "exemple",
            titre: "Calculer une distance",
            texte: "Pour A(1 ; 2 ; 3) et P : 2x − y + 2z − 3 = 0, la distance vaut |2 − 2 + 6 − 3|/√(4 + 1 + 4) = 3/3 = 1."
          },
          {
            type: "methode",
            titre: "Trouver le projeté orthogonal",
            texte: "Écrire la droite passant par A et dirigée par un vecteur normal au plan. Son intersection avec le plan est le projeté H. On peut ensuite calculer AH et comparer avec la formule de distance."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère orthonormé de l'espace, calculer le produit scalaire de u⃗ = (1 ; 2 ; 3) et v⃗ = (2 ; −1 ; 0).",
        correction: "u⃗ · v⃗ = 1 × 2 + 2 × (−1) + 3 × 0 = 0. Les deux vecteurs sont orthogonaux."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère orthonormé de l'espace, donner un vecteur normal au plan P : 2x − y + 3z − 4 = 0.",
        correction: "Les coefficients de x, y et z donnent un vecteur normal : n⃗ = (2 ; −1 ; 3)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère orthonormé de l'espace, déterminer une équation du plan passant par A(1 ; 0 ; 2) et de vecteur normal n⃗ = (1 ; 2 ; −1).",
        correction: "On écrit n⃗ · AM⃗ = 0 : (x − 1) + 2y − (z − 2) = 0. Une équation du plan est donc x + 2y − z + 1 = 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère orthonormé de l'espace, les plans P : x + y + z = 0 et Q : x − y + 1 = 0 sont-ils perpendiculaires ?",
        correction: "Des vecteurs normaux sont n⃗P = (1 ; 1 ; 1) et n⃗Q = (1 ; −1 ; 0). Leur produit scalaire vaut 1 − 1 + 0 = 0. Les plans sont donc perpendiculaires."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé de l'espace, déterminer l'intersection de la droite d : x = t, y = 1 + t, z = 2t et du plan P : x + y + z = 5.",
        correction: "En substituant les coordonnées de d dans l'équation de P, on obtient t + 1 + t + 2t = 5, soit 4t = 4 et t = 1. Le point d'intersection est donc (1 ; 2 ; 2)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé de l'espace, calculer la distance du point A(1 ; 0 ; 0) au plan P : 2x + 2y + z − 5 = 0.",
        correction: "La distance vaut |2 × 1 + 2 × 0 + 0 − 5|/√(2² + 2² + 1²) = 3/3 = 1."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé de l'espace, on considère la droite d : x = 1 + t, y = 2t, z = −t et le plan P : 2x − y + 1 = 0. Étudier leur position relative.",
        correction: "Un vecteur directeur de d est u⃗ = (1 ; 2 ; −1), et une normale à P est n⃗ = (2 ; −1 ; 0). Leur produit scalaire vaut 2 − 2 = 0 : d est parallèle à P ou contenue dans P. Le point de d obtenu pour t = 0 est A(1 ; 0 ; 0), qui ne vérifie pas l'équation de P puisque 2 × 1 − 0 + 1 = 3 ≠ 0. La droite est donc strictement parallèle à P."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé de l'espace, soit A(1 ; 2 ; 3) et P : x + y + z = 0. Déterminer le projeté orthogonal H de A sur P et la distance de A à P.",
        correction: "Une normale à P est n⃗ = (1 ; 1 ; 1). La droite passant par A et dirigée par n⃗ est x = 1 + t, y = 2 + t, z = 3 + t. Son intersection avec P vérifie 6 + 3t = 0, donc t = −2. Ainsi H(−1 ; 0 ; 1). La distance vaut AH = √((-2)² + (-2)² + (-2)²) = √12 = 2√3. La formule directe donne aussi |1 + 2 + 3|/√3 = 2√3."
      }
    ]
  }
]);
