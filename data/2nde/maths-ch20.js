enregistrerChapitres("2nde", "maths", [{
  id: "m2-relations-metriques-cercle",
  titre: "Chapitre 20 : Relations métriques et cercle",
  premium: false,
  guide: false,

  lecons: [
    {
      id: "m2-ch20-distance",
      titre: "1. Norme, distance et projection",
      blocs: [
        {
          type: "definition",
          titre: "Norme et distance",
          texte: "La norme du vecteur →AB est la longueur AB : ||→AB|| = AB. Dans un repère orthonormé, si A(xA ; yA) et B(xB ; yB), alors AB = √[(xB − xA)² + (yB − yA)²]."
        },
        {
          type: "exemple",
          titre: "Calculer une distance",
          texte: "Dans un repère orthonormé, A(1 ; 2) et B(4 ; 6). On a →AB = (3 ; 4), donc AB = √(3² + 4²) = √25 = 5."
        },
        {
          type: "definition",
          titre: "Projeté orthogonal",
          texte: "Soit une droite d et un point A. Le projeté orthogonal H de A sur d est le point de d tel que (AH) soit perpendiculaire à d. Si A appartient déjà à d, alors H = A."
        },
        {
          type: "schema",
          titre: "Distance d'un point à une droite",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 210' role='img' aria-label='Le point H est le projeté orthogonal de A sur la droite d'><rect width='360' height='210' fill='white'/><g stroke='#222' stroke-width='2' fill='none'><path d='M30 165 L330 165'/><path d='M155 35 L155 165'/><path d='M155 145 L175 145 L175 165'/></g><g fill='#222' font-size='17' font-family='sans-serif'><text x='143' y='28'>A</text><text x='143' y='187'>H</text><text x='325' y='158'>d</text></g></svg>",
          legende: "H appartient à d et (AH) est perpendiculaire à d. La distance de A à d est AH."
        },
        {
          type: "regle",
          titre: "La plus courte distance",
          texte: "Si H est le projeté orthogonal de A sur d, la distance de A à d est AH. Pour tout point M de d, AM ≥ AH. En effet, si M ≠ H, le triangle AHM est rectangle en H et AM² = AH² + HM²."
        }
      ]
    },

    {
      id: "m2-ch20-relations",
      titre: "2. Relations métriques dans un triangle",
      blocs: [
        {
          type: "rappel",
          titre: "Théorème de Pythagore",
          texte: "Si un triangle ABC est rectangle en A, alors BC² = AB² + AC². Réciproquement, si BC² = AB² + AC², alors le triangle ABC est rectangle en A."
        },
        {
          type: "regle",
          titre: "Produit scalaire et côtés",
          texte: "Pour tous points A, B et C : →AB · →AC = (AB² + AC² − BC²)/2. Cette formule permet de calculer un produit scalaire à partir des trois longueurs du triangle."
        },
        {
          type: "regle",
          titre: "Relation d'Al-Kashi",
          texte: "Dans un triangle ABC non aplati : BC² = AB² + AC² − 2 × AB × AC × cos(BÂC). Elle généralise Pythagore à un angle qui n'est pas nécessairement droit."
        },
        {
          type: "exemple",
          titre: "Calculer une longueur",
          texte: "Si AB = 3 cm, AC = 4 cm et BÂC = 60°, alors BC² = 3² + 4² − 2 × 3 × 4 × 1/2 = 13. Donc BC = √13 cm."
        },
        {
          type: "regle",
          titre: "Médiane et formule d'Apollonius",
          texte: "Si I est le milieu de [BC], alors AB² + AC² = 2AI² + BC²/2. On peut aussi écrire AI² = (AB² + AC²)/2 − BC²/4."
        },
        {
          type: "methode",
          titre: "Comprendre la formule de la médiane",
          texte: "Comme I est le milieu de [BC], les vecteurs →IB et →IC sont opposés. En écrivant →AB = →AI + →IB et →AC = →AI − →IB, puis en additionnant les carrés des normes, les termes de produit scalaire s'annulent. On obtient AB² + AC² = 2AI² + 2IB², avec IB = BC/2."
        },
        {
          type: "exemple",
          titre: "Longueur d'une médiane",
          texte: "Dans un triangle ABC, AB = 5 cm, AC = 5 cm et BC = 6 cm. Si I est le milieu de [BC], alors AI² = (25 + 25)/2 − 36/4 = 25 − 9 = 16. Donc AI = 4 cm."
        }
      ]
    },

    {
      id: "m2-ch20-cercle",
      titre: "3. Cercle : définition et équation",
      blocs: [
        {
          type: "definition",
          titre: "Cercle",
          texte: "Le cercle de centre O et de rayon R, avec R > 0, est l'ensemble des points M du plan tels que OM = R. Un point est à l'intérieur du cercle si OM < R et à l'extérieur si OM > R."
        },
        {
          type: "regle",
          titre: "Équation d'un cercle",
          texte: "Dans un repère orthonormé, le cercle de centre Ω(a ; b) et de rayon R > 0 a pour équation : (x − a)² + (y − b)² = R². Un point M(x ; y) appartient au cercle si et seulement si ses coordonnées vérifient cette équation."
        },
        {
          type: "exemple",
          titre: "Écrire et utiliser une équation",
          texte: "Le cercle de centre Ω(2 ; −1) et de rayon 3 a pour équation (x − 2)² + (y + 1)² = 9. Le point M(5 ; −1) appartient au cercle car (5 − 2)² + (−1 + 1)² = 9."
        },
        {
          type: "methode",
          titre: "Reconnaître un cercle",
          texte: "Dans un repère orthonormé, on peut transformer une équation en complétant les carrés. Par exemple, x² + y² − 4x + 2y − 4 = 0 devient (x − 2)² + (y + 1)² = 9. C'est donc le cercle de centre (2 ; −1) et de rayon 3."
        },
        {
          type: "remarque",
          titre: "Attention au rayon",
          texte: "Dans l'équation (x − a)² + (y − b)² = R², le nombre à droite est le carré du rayon. Par exemple, si le membre de droite vaut 16, le rayon vaut 4 et non 16."
        }
      ]
    },

    {
      id: "m2-ch20-diametre",
      titre: "4. Cercle de diamètre donné",
      blocs: [
        {
          type: "regle",
          titre: "Angle droit et diamètre",
          texte: "Soient A et B deux points distincts. Si M appartient au cercle de diamètre [AB] et si M est distinct de A et de B, alors le triangle AMB est rectangle en M. Réciproquement, si AMB est rectangle en M, alors M appartient au cercle de diamètre [AB]."
        },
        {
          type: "regle",
          titre: "Caractérisation par le produit scalaire",
          texte: "Pour A et B distincts, M appartient au cercle de diamètre [AB] si et seulement si →MA · →MB = 0. Cette égalité inclut les points A et B : dans chacun de ces deux cas, l'un des vecteurs est nul."
        },
        {
          type: "exemple",
          titre: "Vérifier l'appartenance",
          texte: "Dans un repère orthonormé, A(0 ; 0), B(4 ; 0) et M(2 ; 2). On a →MA = (−2 ; −2) et →MB = (2 ; −2). Leur produit scalaire vaut −4 + 4 = 0. Ainsi M appartient au cercle de diamètre [AB]. Comme M est distinct de A et B, AMB est rectangle en M."
        }
      ]
    },

    {
      id: "m2-ch20-positions",
      titre: "5. Positions relatives d'une droite et d'un cercle",
      blocs: [
        {
          type: "schema",
          titre: "Droite tangente à un cercle",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 220' role='img' aria-label='Cercle de centre O et droite tangente en H, perpendiculaire au rayon OH'><rect width='360' height='220' fill='white'/><g stroke='#222' stroke-width='2' fill='none'><circle cx='155' cy='105' r='65'/><path d='M35 170 L310 170'/><path d='M155 105 L155 170'/><path d='M155 154 L171 154 L171 170'/></g><circle cx='155' cy='105' r='3' fill='#222'/><circle cx='155' cy='170' r='3' fill='#222'/><g fill='#222' font-size='17' font-family='sans-serif'><text x='137' y='103'>O</text><text x='139' y='192'>H</text><text x='313' y='165'>d</text></g></svg>",
          legende: "La droite d est tangente au cercle en H. Le rayon [OH] est perpendiculaire à d."
        },
        {
          type: "regle",
          titre: "Comparer la distance au rayon",
          texte: "Soit un cercle de centre O et de rayon R > 0, et soit d une droite. On note δ la distance de O à d. Si δ < R, la droite coupe le cercle en deux points : elle est sécante. Si δ = R, elle le touche en un seul point : elle est tangente. Si δ > R, elle ne rencontre pas le cercle."
        },
        {
          type: "regle",
          titre: "Tangente en un point",
          texte: "La tangente à un cercle en un point H est la droite passant par H et perpendiculaire au rayon (OH). Réciproquement, une droite perpendiculaire à (OH) en un point H du cercle est tangente au cercle en H."
        },
        {
          type: "exemple",
          titre: "Comparer les longueurs",
          texte: "Un cercle a pour rayon 5 cm et son centre est à 3 cm d'une droite d. Comme 3 < 5, d est sécante au cercle. Si cette distance était 5 cm, d serait tangente ; si elle était 7 cm, d ne rencontrerait pas le cercle."
        },
        {
          type: "methode",
          titre: "Longueur d'une corde",
          texte: "Si une droite sécante coupe le cercle en A et B, et si H est le projeté orthogonal du centre O sur cette droite, alors H est le milieu de [AB]. Par Pythagore dans OHA : AH = √(R² − OH²), puis AB = 2AH."
        },
        {
          type: "exemple",
          titre: "Calculer une corde",
          texte: "Un cercle a un rayon de 5 cm. Une droite située à 3 cm du centre le coupe en A et B. Alors AH = √(5² − 3²) = √16 = 4 cm. La corde mesure AB = 2 × 4 = 8 cm."
        }
      ]
    },

    {
      id: "m2-ch20-deux-cercles",
      titre: "6. Positions relatives de deux cercles",
      blocs: [
        {
          type: "regle",
          titre: "Comparer les rayons et la distance des centres",
          texte: "Soient deux cercles de rayons R et r strictement positifs, de centres O et O', et d = OO'. Si |R − r| < d < R + r, ils ont deux points communs. Si d = R + r, ils sont tangents extérieurement. Si d = |R − r| avec d > 0, ils sont tangents intérieurement."
        },
        {
          type: "regle",
          titre: "Cercles sans point commun ou confondus",
          texte: "Si d > R + r, les cercles sont extérieurs l'un à l'autre et n'ont aucun point commun. Si d < |R − r|, l'un est à l'intérieur de l'autre sans point commun. Si d = 0 et R = r, les deux cercles sont confondus : ils ont une infinité de points communs."
        },
        {
          type: "exemple",
          titre: "Étudier deux cercles",
          texte: "Deux cercles ont pour rayons 5 cm et 3 cm, et leurs centres sont distants de 6 cm. On a |5 − 3| = 2 et 5 + 3 = 8. Comme 2 < 6 < 8, les cercles ont deux points communs."
        }
      ]
    }
  ],

  exercices: [
    {
      niveau: 1,
      points: 2,
      enonce: "Dans un repère orthonormé, A(0 ; 0) et B(3 ; 4). Calcule AB.",
      correction: "AB = √[(3 − 0)² + (4 − 0)²] = √(9 + 16) = 5."
    },
    {
      niveau: 1,
      points: 2,
      enonce: "Un cercle a pour centre Ω(1 ; −2) et pour rayon 4. Écris son équation dans un repère orthonormé.",
      correction: "L'équation est (x − 1)² + (y + 2)² = 16."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Un cercle de rayon 7 cm a son centre à 7 cm d'une droite d. Quelle est la position de d par rapport au cercle ?",
      correction: "La distance du centre à d est égale au rayon. La droite d est donc tangente au cercle."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère orthonormé, le cercle C a pour équation (x − 1)² + (y + 2)² = 25. Le point M(4 ; 2) appartient-il à C ?",
      correction: "On remplace x et y par les coordonnées de M : (4 − 1)² + (2 + 2)² = 9 + 16 = 25. L'égalité est vérifiée : M appartient à C."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Un cercle a pour rayon 5 cm. Une droite située à 4 cm de son centre coupe le cercle en A et B. Calcule AB.",
      correction: "Soit H le projeté orthogonal du centre O sur (AB). H est le milieu de [AB]. Dans le triangle OHA rectangle en H, AH = √(OA² − OH²) = √(25 − 16) = 3 cm. Donc AB = 2AH = 6 cm."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère orthonormé, on considère l'équation x² + y² − 6x + 4y + 4 = 0. Montre qu'elle représente un cercle et précise son centre et son rayon.",
      correction: "On regroupe et on complète les carrés : x² − 6x = (x − 3)² − 9 et y² + 4y = (y + 2)² − 4. L'équation devient (x − 3)² + (y + 2)² − 9 − 4 + 4 = 0, soit (x − 3)² + (y + 2)² = 9. C'est le cercle de centre Ω(3 ; −2) et de rayon 3."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un triangle ABC, AB = 7 cm, AC = 5 cm et BC = 6 cm. I est le milieu de [BC]. Calcule AI.",
      correction: "La formule de la médiane donne AI² = (AB² + AC²)/2 − BC²/4. Donc AI² = (49 + 25)/2 − 36/4 = 37 − 9 = 28. Ainsi AI = √28 = 2√7 cm."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère orthonormé, A(−1 ; 0), B(5 ; 0) et M(2 ; 3). Montre que M appartient au cercle de diamètre [AB].",
      correction: "→MA = (−3 ; −3) et →MB = (3 ; −3). Leur produit scalaire vaut (−3) × 3 + (−3) × (−3) = −9 + 9 = 0. Donc M appartient au cercle de diamètre [AB]."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Deux cercles ont pour rayons 6 cm et 2 cm. Précise leur position lorsque la distance entre leurs centres est : 1. 8 cm ; 2. 4 cm ; 3. 5 cm ; 4. 9 cm.",
      correction: "La somme des rayons est 8 cm et leur différence est 4 cm. 1. Pour d = 8 cm, les cercles sont tangents extérieurement. 2. Pour d = 4 cm, ils sont tangents intérieurement. 3. Comme 4 < 5 < 8, ils ont deux points communs. 4. Comme 9 > 8, ils sont extérieurs l'un à l'autre et sans point commun."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère orthonormé, on considère le cercle C de centre Ω(2 ; 1) et de rayon 5. 1. Écris son équation. 2. Détermine les points d'intersection de C avec la droite d d'équation y = 4. 3. Vérifie la longueur de la corde obtenue.",
      correction: "1. L'équation de C est (x − 2)² + (y − 1)² = 25. 2. Sur d, y = 4. On obtient (x − 2)² + 9 = 25, donc (x − 2)² = 16. Ainsi x − 2 = 4 ou x − 2 = −4. Les points sont A(6 ; 4) et B(−2 ; 4). 3. Ils ont la même ordonnée, donc AB = |6 − (−2)| = 8. On retrouve aussi ce résultat avec la distance de Ω à d, qui vaut 3 : AB = 2√(25 − 9) = 8."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère orthonormé, A(0 ; 0) et B(6 ; 0). Le point M a pour coordonnées (x ; 2). 1. Détermine les valeurs de x pour lesquelles M appartient au cercle de diamètre [AB]. 2. Pour chacune de ces valeurs, précise la nature du triangle AMB.",
      correction: "1. →MA = (−x ; −2) et →MB = (6 − x ; −2). M appartient au cercle si et seulement si →MA · →MB = 0, soit −x(6 − x) + 4 = 0. On obtient x² − 6x + 4 = 0. Son discriminant vaut Δ = 36 − 16 = 20. Les solutions sont x = (6 − √20)/2 = 3 − √5 et x = (6 + √20)/2 = 3 + √5. 2. Dans les deux cas, M est distinct de A et de B puisque son ordonnée vaut 2. Le triangle AMB est donc rectangle en M."
    }
  ]
}]);
