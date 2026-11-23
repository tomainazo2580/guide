enregistrerChapitres("2nde", "maths", [{
  id: "m2-produit-scalaire-orthogonalite",
  titre: "Chapitre 19 : Produit scalaire et orthogonalité",
  premium: false,
  guide: false,

  lecons: [
    {
      id: "m2-ch19-definition",
      titre: "1. Définition du produit scalaire",
      blocs: [
        {
          type: "introduction",
          titre: "Un nouveau calcul sur les vecteurs",
          texte: "Le produit scalaire associe un nombre réel à deux vecteurs. Il permet notamment d'étudier des angles, des longueurs et l'orthogonalité."
        },
        {
          type: "definition",
          titre: "Produit scalaire avec un angle",
          texte: "Si →u et →v sont deux vecteurs non nuls et si θ est un angle compris entre 0 et 180° formé par ces vecteurs placés à la même origine, leur produit scalaire est : →u · →v = ||→u|| × ||→v|| × cos θ. Si l'un des vecteurs est nul, leur produit scalaire est 0."
        },
        {
          type: "schema",
          titre: "Angle entre deux vecteurs",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 210' role='img' aria-label='Deux vecteurs u et v issus de O forment un angle theta'><rect width='360' height='210' fill='white'/><defs><marker id='fleche19a' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0 0 L0 6 L9 3 Z' fill='#222'/></marker></defs><g stroke='#222' stroke-width='2.5' fill='none' marker-end='url(#fleche19a)'><path d='M55 165 L300 165'/><path d='M55 165 L215 45'/></g><path d='M105 165 A50 50 0 0 0 95 135' stroke='#555' stroke-width='2' fill='none'/><g fill='#222' font-size='17' font-family='sans-serif'><text x='39' y='187'>O</text><text x='305' y='170'>u</text><text x='220' y='43'>v</text><text x='110' y='148'>θ</text></g></svg>",
          legende: "Les vecteurs sont placés à la même origine pour lire leur angle θ."
        },
        {
          type: "exemple",
          titre: "Calcul avec un angle",
          texte: "Si ||→u|| = 4, ||→v|| = 3 et θ = 60°, alors →u · →v = 4 × 3 × cos 60° = 12 × 1/2 = 6."
        },
        {
          type: "remarque",
          titre: "Signe du produit scalaire",
          texte: "Pour deux vecteurs non nuls : si l'angle est aigu, le produit scalaire est positif ; s'il est droit, il est nul ; s'il est obtus, il est négatif. Si les vecteurs sont de même sens, l'angle vaut 0°. S'ils sont de sens opposés, il vaut 180°."
        },
        {
          type: "regle",
          titre: "Carré scalaire",
          texte: "Pour tout vecteur →u, on a →u · →u = ||→u||². En particulier, le carré scalaire est toujours positif ou nul et il est nul seulement si →u = →0."
        }
      ]
    },

    {
      id: "m2-ch19-calcul",
      titre: "2. Règles de calcul",
      blocs: [
        {
          type: "regle",
          titre: "Propriétés",
          texte: "Pour tous vecteurs →u, →v, →w et tout réel k : →u · →v = →v · →u ; →u · (→v + →w) = →u · →v + →u · →w ; (k→u) · →v = k(→u · →v). Le produit scalaire est un nombre, et non un vecteur."
        },
        {
          type: "regle",
          titre: "Identités utiles",
          texte: "Pour tous vecteurs →u et →v : ||→u + →v||² = ||→u||² + 2(→u · →v) + ||→v||² ; et ||→u − →v||² = ||→u||² − 2(→u · →v) + ||→v||²."
        },
        {
          type: "exemple",
          titre: "Développer un carré",
          texte: "Si ||→u|| = 3, ||→v|| = 2 et →u · →v = 1, alors ||→u + →v||² = 3² + 2 × 1 + 2² = 15. Donc ||→u + →v|| = √15."
        },
        {
          type: "remarque",
          titre: "Ne pas confondre",
          texte: "En général, ||→u + →v|| n'est pas égal à ||→u|| + ||→v||. Il faut utiliser une propriété adaptée avant de calculer la norme."
        }
      ]
    },

    {
      id: "m2-ch19-coordonnees",
      titre: "3. Produit scalaire en coordonnées",
      blocs: [
        {
          type: "regle",
          titre: "Dans une base orthonormée",
          texte: "Dans une base orthonormée, si →u = (x ; y) et →v = (x' ; y'), alors →u · →v = xx' + yy'. En particulier, ||→u||² = x² + y² et ||→u|| = √(x² + y²)."
        },
        {
          type: "remarque",
          titre: "Condition importante",
          texte: "Ces formules simples ne s'appliquent pas directement dans une base quelconque. Il faut que la base soit orthonormée : ses vecteurs sont perpendiculaires et de norme 1."
        },
        {
          type: "exemple",
          titre: "Calcul en coordonnées",
          texte: "Dans une base orthonormée, si →u = (2 ; −1) et →v = (3 ; 4), alors →u · →v = 2 × 3 + (−1) × 4 = 2. De plus, ||→u|| = √(2² + (−1)²) = √5."
        },
        {
          type: "methode",
          titre: "Avec des points",
          texte: "Dans un repère orthonormé, pour calculer →AB · →AC, commencer par déterminer les coordonnées de →AB et de →AC. Multiplier ensuite les coordonnées correspondantes et additionner."
        },
        {
          type: "exemple",
          titre: "Produit scalaire dans un triangle",
          texte: "Soient A(1 ; 1), B(4 ; 2) et C(2 ; 4). Alors →AB = (3 ; 1) et →AC = (1 ; 3). Ainsi →AB · →AC = 3 × 1 + 1 × 3 = 6."
        }
      ]
    },

    {
      id: "m2-ch19-orthogonalite",
      titre: "4. Orthogonalité et angles",
      blocs: [
        {
          type: "regle",
          titre: "Critère d'orthogonalité",
          texte: "Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul. Le vecteur nul est orthogonal à tout vecteur. Deux vecteurs non nuls sont orthogonaux lorsque leurs directions sont perpendiculaires."
        },
        {
          type: "methode",
          titre: "Démontrer qu'un triangle est rectangle",
          texte: "Pour montrer que ABC est rectangle en A : calculer →AB et →AC, puis leur produit scalaire. Si →AB · →AC = 0 et si B et C sont distincts de A, les droites (AB) et (AC) sont perpendiculaires : le triangle est rectangle en A."
        },
        {
          type: "exemple",
          titre: "Triangle rectangle",
          texte: "Dans un repère orthonormé, A(0 ; 0), B(3 ; 1) et C(−1 ; 3). Alors →AB = (3 ; 1) et →AC = (−1 ; 3). Leur produit scalaire vaut 3 × (−1) + 1 × 3 = 0. Ces vecteurs sont non nuls : ABC est rectangle en A."
        },
        {
          type: "methode",
          titre: "Calculer un angle",
          texte: "Pour deux vecteurs non nuls, calculer d'abord le produit scalaire et les deux normes. Puis utiliser cos θ = (→u · →v)/(||→u|| × ||→v||). On trouve θ avec la fonction arccos de la calculatrice, en vérifiant si elle est réglée en degrés ou en radians."
        },
        {
          type: "exemple",
          titre: "Trouver un angle",
          texte: "Si ||→u|| = 2, ||→v|| = 3 et →u · →v = 3, alors cos θ = 3/(2 × 3) = 1/2. Comme θ est compris entre 0 et 180°, on obtient θ = 60°."
        }
      ]
    },

    {
      id: "m2-ch19-longueurs",
      titre: "5. Produit scalaire et longueurs d'un triangle",
      blocs: [
        {
          type: "regle",
          titre: "Formule avec les trois côtés",
          texte: "Pour tous points A, B et C : →AB · →AC = (AB² + AC² − BC²)/2. Cette formule découle de →BC = →AC − →AB et du développement du carré de sa norme."
        },
        {
          type: "exemple",
          titre: "Calculer un produit scalaire avec les côtés",
          texte: "Si AB = 5 cm, AC = 4 cm et BC = 3 cm, alors →AB · →AC = (5² + 4² − 3²)/2 = (25 + 16 − 9)/2 = 16 cm²."
        },
        {
          type: "regle",
          titre: "Relation d'Al-Kashi",
          texte: "Dans un triangle ABC non aplati, BC² = AB² + AC² − 2 × AB × AC × cos(BÂC). Si l'angle BÂC est droit, son cosinus est nul et on retrouve le théorème de Pythagore."
        },
        {
          type: "exemple",
          titre: "Calculer un côté",
          texte: "Dans un triangle ABC, AB = 4 cm, AC = 5 cm et BÂC = 60°. Alors BC² = 4² + 5² − 2 × 4 × 5 × 1/2 = 21. Ainsi BC = √21 cm."
        }
      ]
    }
  ],

  exercices: [
    {
      niveau: 1,
      points: 2,
      enonce: "Deux vecteurs →u et →v sont non nuls. On donne ||→u|| = 2, ||→v|| = 5 et l'angle entre eux vaut 60°. Calcule →u · →v.",
      correction: "→u · →v = 2 × 5 × cos 60° = 10 × 1/2 = 5."
    },
    {
      niveau: 1,
      points: 2,
      enonce: "La norme d'un vecteur →u est 7. Calcule →u · →u.",
      correction: "→u · →u = ||→u||² = 7² = 49."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans une base orthonormée, →u = (3 ; 2) et →v = (−1 ; 4). Calcule →u · →v.",
      correction: "→u · →v = 3 × (−1) + 2 × 4 = −3 + 8 = 5."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans une base orthonormée, →u = (2 ; 3) et →v = (−3 ; 2). Ces vecteurs sont-ils orthogonaux ?",
      correction: "→u · →v = 2 × (−3) + 3 × 2 = 0. Leur produit scalaire est nul : les vecteurs sont orthogonaux."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "On donne ||→u|| = 3, ||→v|| = 4 et →u · →v = −2. Calcule ||→u + →v||².",
      correction: "||→u + →v||² = ||→u||² + 2(→u · →v) + ||→v||² = 9 + 2 × (−2) + 16 = 21."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère orthonormé, A(1 ; 2), B(4 ; 3) et C(0 ; 5). Démontre que le triangle ABC est rectangle.",
      correction: "→AB = (3 ; 1) et →AC = (−1 ; 3). Leur produit scalaire est 3 × (−1) + 1 × 3 = 0. Les deux vecteurs sont non nuls, donc (AB) et (AC) sont perpendiculaires. Le triangle ABC est rectangle en A."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans une base orthonormée, →u = (1 ; 2) et →v = (2 ; −1). Calcule ||→u||, ||→v|| et l'angle entre ces deux vecteurs.",
      correction: "||→u|| = √(1² + 2²) = √5 et ||→v|| = √(2² + (−1)²) = √5. De plus, →u · →v = 1 × 2 + 2 × (−1) = 0. Les vecteurs sont non nuls et orthogonaux : leur angle vaut 90°."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un triangle ABC, AB = 6 cm, AC = 5 cm et BC = 7 cm. Calcule →AB · →AC, puis cos(BÂC).",
      correction: "→AB · →AC = (AB² + AC² − BC²)/2 = (36 + 25 − 49)/2 = 6 cm². Or →AB · →AC = AB × AC × cos(BÂC). Donc cos(BÂC) = 6/(6 × 5) = 1/5."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans une base orthonormée, on donne →u = (2 ; −1) et →v = (m ; 4). Détermine le réel m pour que →u et →v soient orthogonaux.",
      correction: "→u · →v = 2m + (−1) × 4 = 2m − 4. Les vecteurs sont orthogonaux si et seulement si 2m − 4 = 0. Donc m = 2."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère orthonormé, A(1 ; 1), B(5 ; 3) et C(3 ; 5). 1. Calcule →AB · →AC. 2. Calcule AB et AC. 3. Détermine la valeur exacte de cos(BÂC), puis une valeur approchée de l'angle au degré près.",
      correction: "1. →AB = (4 ; 2) et →AC = (2 ; 4). Leur produit scalaire vaut 4 × 2 + 2 × 4 = 16. 2. AB = √(4² + 2²) = √20 = 2√5 ; AC = √(2² + 4²) = 2√5. 3. cos(BÂC) = 16/((2√5)(2√5)) = 16/20 = 4/5. À la calculatrice en degrés, BÂC = arccos(4/5) ≈ 37°."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un triangle ABC, AB = 5 cm, AC = 7 cm et BÂC = 120°. 1. Calcule →AB · →AC. 2. Calcule BC², puis BC. 3. Le triangle est-il rectangle en A ?",
      correction: "1. cos 120° = −1/2, donc →AB · →AC = 5 × 7 × (−1/2) = −35/2 cm². 2. Par la relation d'Al-Kashi, BC² = 5² + 7² − 2 × 5 × 7 × cos 120° = 25 + 49 + 35 = 109 cm². Ainsi BC = √109 cm. 3. L'angle en A vaut 120°, et non 90° : le triangle n'est pas rectangle en A."
    }
  ]
}]);
