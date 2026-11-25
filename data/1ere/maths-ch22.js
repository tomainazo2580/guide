enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-vecteurs-produit-scalaire-lieux",
    titre: "Chapitre 22 : Vecteurs, produit scalaire et lieux du plan",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch22-vecteurs",
        titre: "1. Vecteurs et coordonnées",
        blocs: [
          {
            type: "introduction",
            titre: "Un outil pour décrire le plan",
            texte: "Un vecteur représente un déplacement : il possède une direction, un sens et une longueur, appelée norme. Le vecteur nul, noté 0⃗, a une norme nulle."
          },
          {
            type: "definition",
            titre: "Coordonnées d'un vecteur",
            texte: "Dans un repère du plan, si A(xA ; yA) et B(xB ; yB), alors le vecteur AB⃗ a pour coordonnées (xB − xA ; yB − yA). Deux vecteurs sont égaux si et seulement s'ils ont les mêmes coordonnées."
          },
          {
            type: "regle",
            titre: "Calculs sur les coordonnées",
            texte: "Si u⃗ = (x ; y), v⃗ = (x' ; y') et λ est un réel, alors u⃗ + v⃗ = (x + x' ; y + y') et λu⃗ = (λx ; λy). La relation de Chasles donne AB⃗ + BC⃗ = AC⃗."
          },
          {
            type: "exemple",
            titre: "Calcul d'un vecteur",
            texte: "Si A(1 ; −2) et B(4 ; 3), alors AB⃗ = (4 − 1 ; 3 − (−2)) = (3 ; 5). Dans un repère orthonormé, sa norme vaut √(3² + 5²) = √34."
          },
          {
            type: "definition",
            titre: "Norme et distance",
            texte: "Dans un repère orthonormé, si u⃗ = (x ; y), alors ||u⃗|| = √(x² + y²). En particulier, AB = ||AB⃗|| = √((xB − xA)² + (yB − yA)²)."
          },
          {
            type: "definition",
            titre: "Colinéarité",
            texte: "Deux vecteurs u⃗ = (x ; y) et v⃗ = (x' ; y') sont colinéaires si leur déterminant xy' − yx' est nul. Pour deux vecteurs non nuls, cela signifie qu'ils ont la même direction. Trois points A, B et C sont alignés si AB⃗ et AC⃗ sont colinéaires."
          },
          {
            type: "exemple",
            titre: "Tester un alignement",
            texte: "Avec A(1 ; 1), B(3 ; 2) et C(5 ; 3), on a AB⃗ = (2 ; 1) et AC⃗ = (4 ; 2). Leur déterminant vaut 2 × 2 − 1 × 4 = 0 : A, B et C sont alignés."
          }
        ]
      },
      {
        id: "m1-ch22-produit-scalaire",
        titre: "2. Produit scalaire",
        blocs: [
          {
            type: "definition",
            titre: "Définition géométrique",
            texte: "Pour deux vecteurs non nuls u⃗ et v⃗, leur produit scalaire est le nombre u⃗ · v⃗ = ||u⃗|| ||v⃗|| cos θ, où θ est un angle entre les deux vecteurs. Si l'un des vecteurs est nul, le produit scalaire vaut 0."
          },
          {
            type: "schema",
            titre: "Produit scalaire et projection",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' role='img' aria-label='Deux vecteurs issus de O : le vecteur v se projette orthogonalement sur la direction du vecteur u en H.'><rect width='400' height='240' fill='white'/><defs><marker id='m1ch22fleche' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#1769aa'/></marker><marker id='m1ch22fleche2' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><line x1='70' y1='180' x2='330' y2='180' stroke='#999'/><line x1='70' y1='180' x2='300' y2='180' stroke='#1769aa' stroke-width='3' marker-end='url(#m1ch22fleche)'/><line x1='70' y1='180' x2='220' y2='65' stroke='#c43b35' stroke-width='3' marker-end='url(#m1ch22fleche2)'/><line x1='220' y1='65' x2='220' y2='180' stroke='#555' stroke-dasharray='5 4'/><path d='M210 180 L210 170 L220 170' fill='none' stroke='#555'/><path d='M110 180 A40 40 0 0 0 102 156' fill='none' stroke='#555'/><circle cx='70' cy='180' r='3' fill='#333'/><circle cx='220' cy='180' r='3' fill='#333'/><text x='54' y='199' font-size='14'>O</text><text x='215' y='199' font-size='14'>H</text><text x='165' y='171' font-size='14' fill='#1769aa'>u⃗</text><text x='155' y='104' font-size='14' fill='#c43b35'>v⃗</text><text x='113' y='168' font-size='14'>θ</text></svg>",
            legende: "Dans cette figure, l'angle θ est aigu : la projection de v⃗ sur la direction de u⃗ est positive et u⃗ · v⃗ = ||u⃗|| × OH. Pour un angle obtus, il faut tenir compte du signe de la projection."
          },
          {
            type: "regle",
            titre: "Expression dans un repère orthonormé",
            texte: "Si u⃗ = (x ; y) et v⃗ = (x' ; y'), alors u⃗ · v⃗ = xx' + yy'. En particulier, u⃗ · u⃗ = ||u⃗||² = x² + y²."
          },
          {
            type: "regle",
            titre: "Propriétés de calcul",
            texte: "Pour tous vecteurs u⃗, v⃗, w⃗ et tout réel λ : u⃗ · v⃗ = v⃗ · u⃗ ; u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗ ; (λu⃗) · v⃗ = λ(u⃗ · v⃗)."
          },
          {
            type: "exemple",
            titre: "Calcul et interprétation",
            texte: "Pour u⃗ = (2 ; 1) et v⃗ = (1 ; −2), u⃗ · v⃗ = 2 × 1 + 1 × (−2) = 0. Ces deux vecteurs non nuls sont donc perpendiculaires."
          },
          {
            type: "regle",
            titre: "Orthogonalité",
            texte: "Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul. Pour établir que deux droites sont perpendiculaires, on peut vérifier que leurs vecteurs directeurs non nuls ont un produit scalaire nul."
          },
          {
            type: "regle",
            titre: "Identités utiles",
            texte: "Pour tous vecteurs u⃗ et v⃗ : ||u⃗ + v⃗||² = ||u⃗||² + 2u⃗ · v⃗ + ||v⃗||² et ||u⃗ − v⃗||² = ||u⃗||² − 2u⃗ · v⃗ + ||v⃗||²."
          },
          {
            type: "regle",
            titre: "Dans un triangle",
            texte: "Dans le triangle ABC : BC² = AB² + AC² − 2 AB⃗ · AC⃗. Si AB et AC sont non nuls et si θ est l'angle entre AB⃗ et AC⃗, alors BC² = AB² + AC² − 2 AB × AC × cos θ."
          },
          {
            type: "exemple",
            titre: "Calculer une longueur",
            texte: "Si AB = 3, AC = 4 et si l'angle BAC mesure 60°, alors BC² = 3² + 4² − 2 × 3 × 4 × cos 60° = 25 − 12 = 13. Donc BC = √13."
          }
        ]
      },
      {
        id: "m1-ch22-lieux",
        titre: "3. Lieux géométriques",
        blocs: [
          {
            type: "definition",
            titre: "Qu'est-ce qu'un lieu ?",
            texte: "Un lieu géométrique est l'ensemble de tous les points M qui vérifient une condition donnée. Pour le déterminer, il faut montrer que tout point solution appartient à l'ensemble annoncé et que tout point de cet ensemble vérifie la condition."
          },
          {
            type: "regle",
            titre: "Points équidistants de deux points",
            texte: "Si A et B sont distincts, l'ensemble des points M tels que MA = MB est la médiatrice du segment [AB] : la droite perpendiculaire à (AB) passant par son milieu."
          },
          {
            type: "schema",
            titre: "La médiatrice comme lieu",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250' role='img' aria-label='Segment AB horizontal, son milieu I et sa médiatrice verticale. Un point M de la médiatrice est relié à A et à B par deux segments égaux.'><rect width='400' height='250' fill='white'/><line x1='70' y1='170' x2='330' y2='170' stroke='#333' stroke-width='2'/><line x1='200' y1='25' x2='200' y2='225' stroke='#1769aa' stroke-width='2'/><line x1='70' y1='170' x2='200' y2='55' stroke='#c43b35' stroke-width='2'/><line x1='330' y1='170' x2='200' y2='55' stroke='#c43b35' stroke-width='2'/><path d='M190 170 L190 160 L200 160' fill='none' stroke='#333'/><circle cx='70' cy='170' r='4' fill='#333'/><circle cx='330' cy='170' r='4' fill='#333'/><circle cx='200' cy='170' r='4' fill='#333'/><circle cx='200' cy='55' r='4' fill='#333'/><text x='60' y='192' font-size='14'>A</text><text x='327' y='192' font-size='14'>B</text><text x='207' y='188' font-size='14'>I</text><text x='207' y='53' font-size='14'>M</text><text x='212' y='30' font-size='13' fill='#1769aa'>médiatrice</text></svg>",
            legende: "I est le milieu de [AB]. Tout point M de la médiatrice vérifie MA = MB, et réciproquement."
          },
          {
            type: "regle",
            titre: "Cercle de diamètre [AB]",
            texte: "Si A et B sont distincts, l'ensemble des points M tels que MA⃗ · MB⃗ = 0 est le cercle de diamètre [AB], avec A et B inclus. Pour M différent de A et de B, la condition signifie que l'angle AMB est droit."
          },
          {
            type: "methode",
            titre: "Utiliser un repère",
            texte: "Poser M(x ; y), traduire la condition avec les coordonnées et simplifier. Reconnaître une droite ou un cercle, puis vérifier que les transformations sont réversibles et que tous les points obtenus conviennent."
          },
          {
            type: "exemple",
            titre: "Lieu défini par un produit scalaire",
            texte: "Soit A(−1 ; 0) et B(3 ; 0). Pour M(x ; y), MA⃗ = (−1 − x ; −y) et MB⃗ = (3 − x ; −y). La condition MA⃗ · MB⃗ = 0 équivaut à (−1 − x)(3 − x) + y² = 0, soit (x − 1)² + y² = 4. Le lieu est le cercle de centre I(1 ; 0) et de rayon 2 : c'est le cercle de diamètre [AB]."
          },
          {
            type: "remarque",
            titre: "Ne pas perdre les extrémités",
            texte: "Dans la condition MA⃗ · MB⃗ = 0, les points A et B conviennent : l'un des deux vecteurs est alors nul. Si l'énoncé demande explicitement un angle droit AMB, cet angle n'est défini que pour M distinct de A et de B."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère orthonormé, on donne A(−1 ; 2) et B(3 ; 5). Calculer les coordonnées de AB⃗ et la distance AB.",
        correction: "AB⃗ = (3 − (−1) ; 5 − 2) = (4 ; 3). Donc AB = √(4² + 3²) = 5."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère orthonormé, on donne u⃗ = (2 ; −1) et v⃗ = (3 ; 4). Calculer u⃗ · v⃗.",
        correction: "u⃗ · v⃗ = 2 × 3 + (−1) × 4 = 6 − 4 = 2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère orthonormé, on donne A(0 ; 0), B(2 ; 1) et C(1 ; −2). Montrer que le triangle ABC est rectangle et préciser en quel point.",
        correction: "AB⃗ = (2 ; 1) et AC⃗ = (1 ; −2). Leur produit scalaire vaut 2 × 1 + 1 × (−2) = 0. Ces vecteurs sont non nuls : les droites (AB) et (AC) sont perpendiculaires. Le triangle ABC est donc rectangle en A."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère du plan, on donne A(1 ; 2), B(3 ; 5) et C(5 ; 8). Ces points sont-ils alignés ?",
        correction: "AB⃗ = (2 ; 3) et AC⃗ = (4 ; 6). Leur déterminant vaut 2 × 6 − 3 × 4 = 0. Les vecteurs sont colinéaires, donc A, B et C sont alignés."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un triangle ABC, AB = 5, AC = 3 et l'angle BAC mesure 60°. Calculer BC.",
        correction: "BC² = AB² + AC² − 2 AB × AC × cos 60° = 25 + 9 − 2 × 5 × 3 × 1/2 = 19. Comme une longueur est positive, BC = √19."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé, on donne A(0 ; 0) et B(4 ; 2). Déterminer une équation du lieu des points M(x ; y) tels que MA = MB.",
        correction: "Les distances étant positives ou nulles, MA = MB équivaut à MA² = MB². Donc x² + y² = (x − 4)² + (y − 2)², soit 8x + 4y = 20, ou encore 2x + y − 5 = 0. Le lieu est la médiatrice de [AB]. Toutes les étapes étant réversibles, tous les points de cette droite conviennent."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé, on donne A(−2 ; 1) et B(2 ; 1). Déterminer et représenter géométriquement le lieu des points M(x ; y) tels que MA⃗ · MB⃗ = 0. Préciser si A et B appartiennent au lieu.",
        correction: "MA⃗ = (−2 − x ; 1 − y) et MB⃗ = (2 − x ; 1 − y). Leur produit scalaire est x² − 4 + (y − 1)². La condition équivaut à x² + (y − 1)² = 4 : le lieu est le cercle de centre I(0 ; 1), milieu de [AB], et de rayon 2, donc le cercle de diamètre [AB]. Les points A et B appartiennent au lieu : en chacun d'eux, l'un des vecteurs est nul."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé, on donne A(0 ; 0), B(4 ; 0) et M(x ; y). Déterminer le lieu des points M tels que MA² + MB² = 20.",
        correction: "MA² + MB² = x² + y² + (x − 4)² + y². La condition équivaut à 2x² − 8x + 2y² + 16 = 20, puis à x² − 4x + y² = 2. En complétant le carré : (x − 2)² + y² = 6. Le lieu est le cercle de centre (2 ; 0) et de rayon √6. Toutes les transformations sont réversibles : chaque point de ce cercle vérifie la condition."
      }
    ]
  }
]);
