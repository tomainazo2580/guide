enregistrerChapitres("2nde", "maths", [{
  id: "m2-vecteurs-plan",
  titre: "Chapitre 17 : Les vecteurs du plan",
  premium: false,
  guide: false,

  lecons: [
    {
      id: "m2-ch17-notion",
      titre: "1. Notion de vecteur",
      blocs: [
        {
          type: "introduction",
          titre: "Représenter un déplacement",
          texte: "Un vecteur permet de représenter un déplacement. Il indique une direction, un sens et une longueur. Deux déplacements peuvent représenter le même vecteur même s'ils ne partent pas du même point."
        },
        {
          type: "definition",
          titre: "Vecteur défini par deux points",
          texte: "Le vecteur allant de A vers B se note →AB. Il est représenté par une flèche d'origine A et d'extrémité B. Si A et B sont distincts, sa direction est celle de la droite (AB), son sens est de A vers B et sa norme est la longueur AB."
        },
        {
          type: "definition",
          titre: "Vecteur nul",
          texte: "Lorsque A et B sont confondus, le vecteur →AA est appelé vecteur nul. Il se note →0 et sa norme est 0. On ne lui attribue pas de direction ni de sens."
        },
        {
          type: "schema",
          titre: "Deux représentants d'un même vecteur",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 190' role='img' aria-label='Deux flèches AB et CD de même direction, de même sens et de même longueur'><rect width='360' height='190' fill='white'/><defs><marker id='fleche17a' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0 0 L0 6 L9 3 Z' fill='#222'/></marker></defs><g stroke='#222' stroke-width='3' fill='none' marker-end='url(#fleche17a)'><path d='M50 65 L200 65'/><path d='M120 130 L270 130'/></g><g fill='#222' font-size='17' font-family='sans-serif'><text x='38' y='58'>A</text><text x='205' y='58'>B</text><text x='108' y='154'>C</text><text x='275' y='154'>D</text></g></svg>",
          legende: "Les flèches ont la même direction, le même sens et la même longueur : →AB = →CD."
        },
        {
          type: "regle",
          titre: "Égalité de deux vecteurs",
          texte: "Deux vecteurs non nuls sont égaux s'ils ont la même direction, le même sens et la même norme. Leurs origines peuvent être différentes. Deux vecteurs nuls sont aussi égaux."
        },
        {
          type: "definition",
          titre: "Vecteur opposé",
          texte: "Le vecteur opposé de →AB est →BA : il a la même direction et la même norme, mais le sens contraire. On écrit →BA = −→AB. L'opposé du vecteur nul est lui-même."
        }
      ]
    },

    {
      id: "m2-ch17-parallelogramme",
      titre: "2. Vecteurs et parallélogramme",
      blocs: [
        {
          type: "schema",
          titre: "Vecteurs égaux dans un parallélogramme",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 210' role='img' aria-label='Parallélogramme ABCD montrant les vecteurs AB et DC'><rect width='360' height='210' fill='white'/><defs><marker id='fleche17b' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0 0 L0 6 L9 3 Z' fill='#222'/></marker></defs><g stroke='#222' stroke-width='2' fill='none'><path d='M55 165 L235 165 L300 45 L120 45 Z'/></g><g stroke='#222' stroke-width='3' fill='none' marker-end='url(#fleche17b)'><path d='M65 154 L220 154'/><path d='M130 56 L285 56'/></g><g fill='#222' font-size='17' font-family='sans-serif'><text x='39' y='184'>A</text><text x='238' y='184'>B</text><text x='305' y='45'>C</text><text x='103' y='40'>D</text></g></svg>",
          legende: "Dans le parallélogramme ABCD, →AB = →DC et →AD = →BC."
        },
        {
          type: "regle",
          titre: "Propriété et réciproque",
          texte: "Si ABCD est un parallélogramme, alors →AB = →DC et →AD = →BC. Réciproquement, si les points A, B et D ne sont pas alignés et si →AB = →DC, alors ABCD est un parallélogramme."
        },
        {
          type: "methode",
          titre: "Construire un représentant",
          texte: "Pour construire le point D tel que →CD = →AB : à partir de C, tracer un segment parallèle à (AB), de même longueur que AB et orienté dans le même sens que la flèche de A vers B. Son extrémité est D."
        },
        {
          type: "remarque",
          titre: "Attention à l'ordre",
          texte: "Dans un parallélogramme ABCD, →AB = →DC, mais →AB et →CD sont opposés. Inverser les lettres change le sens du vecteur."
        }
      ]
    },

    {
      id: "m2-ch17-somme",
      titre: "3. Somme et différence de vecteurs",
      blocs: [
        {
          type: "regle",
          titre: "Relation de Chasles",
          texte: "Pour tous points A, B et C : →AB + →BC = →AC. On peut voir cette égalité comme l'enchaînement des déplacements de A vers B, puis de B vers C : le déplacement total va de A vers C."
        },
        {
          type: "schema",
          titre: "Enchaînement de deux déplacements",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 200' role='img' aria-label='Relation de Chasles : vecteur AB suivi de vecteur BC donne vecteur AC'><rect width='360' height='200' fill='white'/><defs><marker id='fleche17c' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0 0 L0 6 L9 3 Z' fill='#222'/></marker></defs><g stroke='#222' stroke-width='2.5' fill='none' marker-end='url(#fleche17c)'><path d='M45 155 L155 40'/><path d='M155 40 L305 155'/><path d='M50 160 L300 160'/></g><g fill='#222' font-size='17' font-family='sans-serif'><text x='28' y='175'>A</text><text x='150' y='29'>B</text><text x='309' y='175'>C</text></g></svg>",
          legende: "→AB + →BC = →AC."
        },
        {
          type: "methode",
          titre: "Construire une somme",
          texte: "Pour construire →u + →v, choisir un représentant de →u, puis placer l'origine d'un représentant de →v à l'extrémité du premier. La somme est le vecteur allant de l'origine du premier à l'extrémité du second."
        },
        {
          type: "regle",
          titre: "Règle du parallélogramme",
          texte: "Si ABCD est un parallélogramme, alors →AB + →AD = →AC. Les deux vecteurs issus de A sont les côtés du parallélogramme et leur somme est la diagonale issue de A."
        },
        {
          type: "regle",
          titre: "Différence de deux vecteurs",
          texte: "Soustraire un vecteur revient à ajouter son opposé : →u − →v = →u + (−→v). En particulier, pour tous points A, B et C : →AB − →AC = →CB."
        },
        {
          type: "exemple",
          titre: "Simplifier une expression",
          texte: "→AB + →BC + →CD = →AC + →CD = →AD. Pour →AB − →AC, on écrit →AB + →CA. En changeant l'ordre des termes : →CA + →AB = →CB."
        },
        {
          type: "remarque",
          titre: "Ordre des termes",
          texte: "L'addition des vecteurs est commutative : →u + →v = →v + →u. Elle est aussi associative : (→u + →v) + →w = →u + (→v + →w). Enfin, →u + →0 = →u et →u + (−→u) = →0."
        }
      ]
    },

    {
      id: "m2-ch17-produit",
      titre: "4. Produit d'un vecteur par un nombre",
      blocs: [
        {
          type: "definition",
          titre: "Multiplication par un réel",
          texte: "Soient un vecteur non nul →u et un réel k non nul. Le vecteur k→u a la même direction que →u. Son sens est celui de →u si k > 0 et le sens opposé si k < 0. Sa norme vaut |k| fois celle de →u. De plus, 0→u = →0 et k→0 = →0."
        },
        {
          type: "exemple",
          titre: "Exemples",
          texte: "Si →u a une norme de 3 cm, alors 2→u a le même sens que →u et une norme de 6 cm. Le vecteur −(1/2)→u a le sens opposé et une norme de 1,5 cm."
        },
        {
          type: "regle",
          titre: "Règles de calcul",
          texte: "Pour tous réels k et l et tous vecteurs →u et →v : k(→u + →v) = k→u + k→v ; (k + l)→u = k→u + l→u ; k(l→u) = (kl)→u."
        },
        {
          type: "regle",
          titre: "Milieu d'un segment",
          texte: "Un point I est le milieu de [AB] si et seulement si →AI = (1/2)→AB. On a alors aussi →AI = →IB et →IA + →IB = →0."
        },
        {
          type: "exemple",
          titre: "Point situé au-delà d'un segment",
          texte: "Si →AM = 3→AB et A ≠ B, alors M est sur la demi-droite [AB), au-delà de B, et AM = 3AB. Si →AN = −2→AB, alors N est sur la droite (AB), de l'autre côté de A par rapport à B, et AN = 2AB."
        }
      ]
    },

    {
      id: "m2-ch17-coordonnees",
      titre: "5. Coordonnées d'un vecteur dans un repère",
      blocs: [
        {
          type: "definition",
          titre: "Coordonnées",
          texte: "Dans un repère du plan, si A(xA ; yA) et B(xB ; yB), alors →AB a pour coordonnées (xB − xA ; yB − yA). On soustrait toujours les coordonnées de l'origine à celles de l'extrémité."
        },
        {
          type: "exemple",
          titre: "Calculer les coordonnées",
          texte: "Si A(2 ; −1) et B(5 ; 3), alors →AB = (5 − 2 ; 3 − (−1)) = (3 ; 4). Par conséquent →BA = (−3 ; −4)."
        },
        {
          type: "regle",
          titre: "Calculs avec les coordonnées",
          texte: "Si →u = (x ; y) et →v = (x' ; y'), alors →u + →v = (x + x' ; y + y'), →u − →v = (x − x' ; y − y') et k→u = (kx ; ky). Deux vecteurs sont égaux si et seulement si leurs coordonnées correspondantes sont égales."
        },
        {
          type: "exemple",
          titre: "Calcul vectoriel",
          texte: "Si →u = (2 ; −3) et →v = (−1 ; 4), alors 2→u + →v = (4 ; −6) + (−1 ; 4) = (3 ; −2)."
        },
        {
          type: "regle",
          titre: "Coordonnées du milieu",
          texte: "Si I est le milieu de [AB], avec A(xA ; yA) et B(xB ; yB), alors I a pour coordonnées ((xA + xB)/2 ; (yA + yB)/2). Cette formule est valable dans tout repère du plan."
        },
        {
          type: "exemple",
          titre: "Calculer un milieu",
          texte: "Si A(−2 ; 3) et B(4 ; 5), le milieu I de [AB] a pour coordonnées ((−2 + 4)/2 ; (3 + 5)/2), soit I(1 ; 4)."
        },
        {
          type: "remarque",
          titre: "Norme et repère",
          texte: "Dans un repère orthonormé seulement, la norme d'un vecteur de coordonnées (x ; y) vaut √(x² + y²). Cette formule ne s'applique pas directement dans un repère quelconque."
        }
      ]
    }
  ],

  exercices: [
    {
      niveau: 1,
      points: 2,
      enonce: "Complète avec la relation de Chasles : →AB + →BC = … ; →MN + →NP = … .",
      correction: "On obtient →AB + →BC = →AC et →MN + →NP = →MP."
    },
    {
      niveau: 1,
      points: 2,
      enonce: "ABCD est un parallélogramme. Complète : →AB = … et →AD = … .",
      correction: "Les côtés opposés donnent →AB = →DC et →AD = →BC. Il faut respecter le sens des flèches."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère, A(−1 ; 2) et B(3 ; −4). Calcule les coordonnées de →AB et de →BA.",
      correction: "→AB = (3 − (−1) ; −4 − 2) = (4 ; −6). Le vecteur opposé est →BA = (−4 ; 6)."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère, →u = (3 ; −2) et →v = (−1 ; 5). Calcule →u + →v et 2→u − →v.",
      correction: "→u + →v = (3 − 1 ; −2 + 5) = (2 ; 3). Puis 2→u − →v = (6 ; −4) − (−1 ; 5) = (7 ; −9)."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un repère, A(2 ; −3) et B(8 ; 5). Détermine les coordonnées du milieu I de [AB].",
      correction: "I a pour coordonnées ((2 + 8)/2 ; (−3 + 5)/2), donc I(5 ; 1)."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère, A(1 ; 2), B(5 ; 3), C(7 ; 7) et D(3 ; 6). Démontre que ABCD est un parallélogramme.",
      correction: "→AB = (5 − 1 ; 3 − 2) = (4 ; 1). →DC = (7 − 3 ; 7 − 6) = (4 ; 1). Donc →AB = →DC. De plus, →AB = (4 ; 1) et →AD = (2 ; 4) ne sont pas des multiples l'un de l'autre : A, B et D ne sont pas alignés. Par la réciproque de la propriété du parallélogramme, ABCD est un parallélogramme."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère, A(−2 ; 1), B(3 ; 4) et C(5 ; −1). Détermine les coordonnées du point D tel que →CD = →AB.",
      correction: "→AB = (3 − (−2) ; 4 − 1) = (5 ; 3). Si D(x ; y), alors →CD = (x − 5 ; y + 1). L'égalité demandée donne x − 5 = 5 et y + 1 = 3. Donc D(10 ; 2)."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans un repère, A(2 ; 1) et B(6 ; 3). Détermine les coordonnées du point M vérifiant →AM = 2→AB.",
      correction: "→AB = (6 − 2 ; 3 − 1) = (4 ; 2), donc 2→AB = (8 ; 4). Si M(x ; y), alors →AM = (x − 2 ; y − 1). Ainsi x − 2 = 8 et y − 1 = 4, d'où M(10 ; 5)."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Pour des points A, B, C et D, simplifie : 1. →AB + →BC + →CD ; 2. →AB − →DB ; 3. →CA + →AB − →CB.",
      correction: "1. Par Chasles, →AB + →BC + →CD = →AC + →CD = →AD. 2. →AB − →DB = →AB + →BD = →AD. 3. →CA + →AB − →CB = →CB − →CB = →0."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans un repère, A(−1 ; 2), B(3 ; 4) et C(5 ; −2). 1. Détermine le point D tel que ABCD soit un parallélogramme. 2. Calcule le milieu de [AC] et celui de [BD]. 3. Que constates-tu ?",
      correction: "1. Pour un parallélogramme ABCD, →AD = →BC. Or →BC = (5 − 3 ; −2 − 4) = (2 ; −6). Donc D = (−1 + 2 ; 2 − 6), soit D(1 ; −4). Les points A, B et C ne sont pas alignés ; la construction donne bien un parallélogramme. 2. Le milieu de [AC] est ((−1 + 5)/2 ; (2 − 2)/2) = (2 ; 0). Le milieu de [BD] est ((3 + 1)/2 ; (4 − 4)/2) = (2 ; 0). 3. Les diagonales [AC] et [BD] ont le même milieu, propriété du parallélogramme."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "A et B sont deux points distincts. I est le milieu de [AB]. Le point M vérifie →AM = 3→AB. 1. Exprime →IM en fonction de →AB. 2. Exprime →MB en fonction de →AB. 3. Si AB = 4 cm, calcule IM et MB.",
      correction: "1. Par Chasles, →IM = →IA + →AM. Comme I est le milieu de [AB], →IA = −(1/2)→AB. Donc →IM = −(1/2)→AB + 3→AB = (5/2)→AB. 2. →MB = →MA + →AB = −3→AB + →AB = −2→AB. 3. Les longueurs sont les normes : IM = (5/2) × 4 = 10 cm et MB = |−2| × 4 = 8 cm."
    }
  ]
}]);
