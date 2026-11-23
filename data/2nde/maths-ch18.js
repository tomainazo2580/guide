enregistrerChapitres("2nde", "maths", [{
  id: "m2-bases-determinant-colinearite",
  titre: "Chapitre 18 : Bases, déterminant et colinéarité",
  premium: false,
  guide: false,

  lecons: [
    {
      id: "m2-ch18-colinearite",
      titre: "1. Vecteurs colinéaires",
      blocs: [
        {
          type: "definition",
          titre: "Définition",
          texte: "Deux vecteurs sont colinéaires si l'un d'eux est un multiple de l'autre. Pour deux vecteurs non nuls, cela signifie qu'ils ont la même direction : ils peuvent avoir le même sens ou des sens opposés. Le vecteur nul est colinéaire à tout vecteur."
        },
        {
          type: "schema",
          titre: "Des vecteurs de même direction",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 190' role='img' aria-label='Trois vecteurs horizontaux colinéaires, dont un de sens opposé'><rect width='360' height='190' fill='white'/><defs><marker id='fleche18a' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0 0 L0 6 L9 3 Z' fill='#222'/></marker></defs><g stroke='#222' stroke-width='3' fill='none' marker-end='url(#fleche18a)'><path d='M50 45 L150 45'/><path d='M50 95 L250 95'/><path d='M250 145 L150 145'/></g><g fill='#222' font-size='17' font-family='sans-serif'><text x='160' y='50'>u</text><text x='260' y='100'>2u</text><text x='120' y='150'>−u</text></g></svg>",
          legende: "Les vecteurs représentés ont la même direction. Le vecteur −u est de sens opposé à u."
        },
        {
          type: "exemple",
          titre: "Reconnaître des multiples",
          texte: "Si →v = 3→u, alors →u et →v sont colinéaires et ont le même sens lorsque →u est non nul. Si →w = −2→u, alors →w et →u sont colinéaires et ont des sens opposés."
        },
        {
          type: "remarque",
          titre: "Attention au vecteur nul",
          texte: "Le vecteur nul est colinéaire à tout vecteur. Cependant, si →u = →0 et →v est non nul, il n'existe aucun réel k tel que →v = k→u. Pour écrire systématiquement →v = k→u, il faut donc que →u soit non nul."
        },
        {
          type: "regle",
          titre: "Alignement de points",
          texte: "Les points A, B et C sont alignés si et seulement si les vecteurs →AB et →AC sont colinéaires. Cette propriété reste valable si certains points sont confondus."
        },
        {
          type: "regle",
          titre: "Parallélisme de droites",
          texte: "Si A ≠ B et C ≠ D, les droites (AB) et (CD) sont parallèles, éventuellement confondues, si et seulement si →AB et →CD sont colinéaires."
        }
      ]
    },

    {
      id: "m2-ch18-bases",
      titre: "2. Bases et coordonnées",
      blocs: [
        {
          type: "definition",
          titre: "Base du plan",
          texte: "Une base du plan est un couple ordonné de vecteurs non colinéaires, noté par exemple (→i ; →j). Tout vecteur →u du plan s'écrit alors d'une seule façon sous la forme →u = x→i + y→j. Les nombres x et y sont les coordonnées de →u dans cette base."
        },
        {
          type: "schema",
          titre: "Décomposer un vecteur",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 230' role='img' aria-label='Dans une base orthogonale, le vecteur u est la somme de deux i et un j'><rect width='360' height='230' fill='white'/><defs><marker id='fleche18b' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0 0 L0 6 L9 3 Z' fill='#222'/></marker></defs><g stroke='#222' stroke-width='2.5' fill='none' marker-end='url(#fleche18b)'><path d='M60 180 L130 180'/><path d='M60 180 L60 110'/><path d='M60 180 L200 110'/></g><g stroke='#777' stroke-width='1.5' stroke-dasharray='5 4' fill='none'><path d='M60 110 L200 110 L200 180'/></g><g fill='#222' font-size='16' font-family='sans-serif'><text x='135' y='185'>i</text><text x='43' y='105'>j</text><text x='207' y='109'>u</text><text x='104' y='205'>2i</text><text x='218' y='145'>u = 2i + j</text></g></svg>",
          legende: "Ici, →u = 2→i + →j : ses coordonnées dans la base (→i ; →j) sont (2 ; 1)."
        },
        {
          type: "exemple",
          titre: "Lire une décomposition",
          texte: "Dans la base (→i ; →j), si →u = −2→i + 3→j, alors →u a pour coordonnées (−2 ; 3). Dans la base inversée (→j ; →i), ses coordonnées sont (3 ; −2) : l'ordre de la base est important."
        },
        {
          type: "remarque",
          titre: "Une base n'est pas nécessairement orthonormée",
          texte: "Les deux vecteurs d'une base doivent être non colinéaires. Ils ne sont pas obligatoirement perpendiculaires ni de norme 1. Une base est orthonormée lorsque ses vecteurs sont perpendiculaires et de norme 1."
        },
        {
          type: "definition",
          titre: "Repère du plan",
          texte: "Un repère du plan est formé d'une origine O et d'une base (→i ; →j). Il se note (O ; →i ; →j). Dire que le point M a pour coordonnées (x ; y) signifie que →OM = x→i + y→j."
        }
      ]
    },

    {
      id: "m2-ch18-determinant",
      titre: "3. Déterminant de deux vecteurs",
      blocs: [
        {
          type: "definition",
          titre: "Calcul du déterminant",
          texte: "Dans une même base, si →u = (x ; y) et →v = (x' ; y'), leur déterminant est : det(→u ; →v) = xy' − yx'. On multiplie la première coordonnée du premier vecteur par la deuxième du second, puis on soustrait l'autre produit."
        },
        {
          type: "exemple",
          titre: "Exemple de calcul",
          texte: "Pour →u = (2 ; 3) et →v = (4 ; 5), det(→u ; →v) = 2 × 5 − 3 × 4 = 10 − 12 = −2."
        },
        {
          type: "regle",
          titre: "Critère de colinéarité",
          texte: "Deux vecteurs →u et →v du plan sont colinéaires si et seulement si det(→u ; →v) = 0. Ce critère fonctionne aussi lorsqu'un des vecteurs est nul."
        },
        {
          type: "exemple",
          titre: "Tester la colinéarité",
          texte: "Pour →u = (2 ; −3) et →v = (−4 ; 6), on obtient det(→u ; →v) = 2 × 6 − (−3) × (−4) = 12 − 12 = 0. Les vecteurs sont colinéaires. On peut aussi vérifier que →v = −2→u."
        },
        {
          type: "remarque",
          titre: "Ordre et base",
          texte: "Inverser les deux vecteurs change le signe : det(→v ; →u) = −det(→u ; →v). La valeur numérique du déterminant dépend de la base choisie, mais le fait qu'il soit nul ou non ne dépend pas de la base."
        },
        {
          type: "regle",
          titre: "Reconnaître une base",
          texte: "Deux vecteurs →u et →v forment une base du plan si et seulement si ils ne sont pas colinéaires, c'est-à-dire si et seulement si det(→u ; →v) ≠ 0."
        }
      ]
    },

    {
      id: "m2-ch18-applications",
      titre: "4. Applications géométriques",
      blocs: [
        {
          type: "methode",
          titre: "Démontrer que trois points sont alignés",
          texte: "1. Calculer les coordonnées de →AB et de →AC. 2. Calculer det(→AB ; →AC). 3. Si le déterminant est nul, les vecteurs sont colinéaires et les points A, B et C sont alignés. Sinon, ils ne sont pas alignés."
        },
        {
          type: "exemple",
          titre: "Alignement",
          texte: "Soient A(1 ; 2), B(3 ; 5) et C(5 ; 8). On a →AB = (2 ; 3) et →AC = (4 ; 6). Ainsi det(→AB ; →AC) = 2 × 6 − 3 × 4 = 0. Les points A, B et C sont donc alignés."
        },
        {
          type: "methode",
          titre: "Étudier le parallélisme",
          texte: "Pour étudier les droites (AB) et (CD), vérifier d'abord que A ≠ B et C ≠ D. Calculer ensuite →AB, →CD et leur déterminant. Si ce déterminant est nul, les droites sont parallèles, éventuellement confondues. Sinon, elles ne sont pas parallèles."
        },
        {
          type: "exemple",
          titre: "Droites parallèles",
          texte: "Soient A(0 ; 1), B(2 ; 4), C(1 ; −1) et D(5 ; 5). On a →AB = (2 ; 3) et →CD = (4 ; 6). Leur déterminant vaut 2 × 6 − 3 × 4 = 0. Les droites (AB) et (CD) sont donc parallèles."
        },
        {
          type: "methode",
          titre: "Trouver un paramètre",
          texte: "Lorsque les coordonnées contiennent un nombre inconnu, traduire la colinéarité par une égalité de déterminant à zéro. Résoudre ensuite l'équation obtenue et conclure."
        },
        {
          type: "exemple",
          titre: "Avec un paramètre",
          texte: "On cherche m pour que →u = (2 ; 3) et →v = (4 ; m) soient colinéaires. Il faut et il suffit que 2m − 3 × 4 = 0, soit 2m − 12 = 0. Donc m = 6."
        },
        {
          type: "remarque",
          titre: "Erreurs à éviter",
          texte: "Utiliser des coordonnées exprimées dans une même base. Ne pas oublier le signe moins dans xy' − yx'. Un déterminant non nul signifie que les vecteurs ne sont pas colinéaires. Enfin, pour parler d'une droite (AB), il faut que A et B soient distincts."
        }
      ]
    }
  ],

  exercices: [
    {
      niveau: 1,
      points: 2,
      enonce: "Dans une base, →u = (2 ; 1) et →v = (3 ; 4). Calcule det(→u ; →v).",
      correction: "det(→u ; →v) = 2 × 4 − 1 × 3 = 8 − 3 = 5."
    },
    {
      niveau: 1,
      points: 2,
      enonce: "Dans la base (→i ; →j), on donne →u = 3→i − 2→j. Quelles sont les coordonnées de →u ?",
      correction: "Les coordonnées de →u dans la base (→i ; →j) sont (3 ; −2)."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère, →u = (3 ; −2) et →v = (−6 ; 4). Ces vecteurs sont-ils colinéaires ?",
      correction: "det(→u ; →v) = 3 × 4 − (−2) × (−6) = 12 − 12 = 0. Les vecteurs sont donc colinéaires. On remarque aussi que →v = −2→u."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère, →u = (1 ; 2) et →v = (3 ; 1). Ces vecteurs forment-ils une base du plan ?",
      correction: "det(→u ; →v) = 1 × 1 − 2 × 3 = −5. Ce déterminant est non nul : les vecteurs ne sont pas colinéaires et forment donc une base du plan."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère, A(1 ; 1), B(4 ; 3) et C(7 ; 5). Les points sont-ils alignés ?",
      correction: "→AB = (3 ; 2) et →AC = (6 ; 4). Leur déterminant vaut 3 × 4 − 2 × 6 = 0. Les vecteurs sont colinéaires, donc A, B et C sont alignés."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère, A(−1 ; 2), B(2 ; 5) et C(5 ; 7). Détermine si A, B et C sont alignés.",
      correction: "→AB = (2 − (−1) ; 5 − 2) = (3 ; 3) et →AC = (5 − (−1) ; 7 − 2) = (6 ; 5). Le déterminant vaut 3 × 5 − 3 × 6 = −3. Il est non nul : les points ne sont pas alignés."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère, A(1 ; 2), B(4 ; 6), C(−2 ; 3) et D(4 ; 11). Les droites (AB) et (CD) sont-elles parallèles ?",
      correction: "A et B sont distincts, de même que C et D. →AB = (3 ; 4) et →CD = (6 ; 8). On calcule det(→AB ; →CD) = 3 × 8 − 4 × 6 = 0. Les vecteurs sont colinéaires, donc les droites (AB) et (CD) sont parallèles."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère, détermine le réel m pour lequel les vecteurs →u = (3 ; −2) et →v = (m ; 6) sont colinéaires.",
      correction: "Les vecteurs sont colinéaires si et seulement si det(→u ; →v) = 0. Or det(→u ; →v) = 3 × 6 − (−2) × m = 18 + 2m. On résout 18 + 2m = 0, d'où m = −9."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère, on donne →u = (1 ; 1), →v = (1 ; −1) et →w = (5 ; 1). 1. Justifie que (→u ; →v) est une base. 2. Trouve les coordonnées de →w dans cette base.",
      correction: "1. det(→u ; →v) = 1 × (−1) − 1 × 1 = −2 ≠ 0. Le couple forme donc une base. 2. Cherchons a et b tels que →w = a→u + b→v. Dans le repère initial, cela donne a + b = 5 et a − b = 1. En additionnant, 2a = 6, donc a = 3. Puis b = 2. Les coordonnées de →w dans la base (→u ; →v) sont (3 ; 2)."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère, A(1 ; 2), B(4 ; 6) et M(m ; 10). 1. Détermine m pour que A, B et M soient alignés. 2. Pour cette valeur, exprime →AM en fonction de →AB.",
      correction: "1. →AB = (3 ; 4) et →AM = (m − 1 ; 8). L'alignement équivaut à det(→AB ; →AM) = 0, soit 3 × 8 − 4(m − 1) = 0. Ainsi 24 − 4m + 4 = 0, donc m = 7. 2. Pour m = 7, →AM = (6 ; 8) = 2(3 ; 4). Donc →AM = 2→AB."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère, on donne →u = (2 ; 1), →v = (1 ; 2) et →w = (7 ; 8). 1. Montre que (→u ; →v) est une base. 2. Détermine les coordonnées de →w dans cette base. 3. Dans le repère de départ, on donne A(1 ; −1). Détermine le point M tel que →AM = →w.",
      correction: "1. det(→u ; →v) = 2 × 2 − 1 × 1 = 3 ≠ 0. Les vecteurs forment donc une base. 2. Posons →w = a→u + b→v. On obtient le système 2a + b = 7 et a + 2b = 8. De la première équation, b = 7 − 2a. En remplaçant dans la seconde : a + 14 − 4a = 8, donc a = 2, puis b = 3. Les coordonnées de →w dans la base (→u ; →v) sont (2 ; 3). 3. Dans le repère de départ, →AM = (7 ; 8). Donc M a pour coordonnées (1 + 7 ; −1 + 8), soit M(8 ; 7)."
    }
  ]
}]);
