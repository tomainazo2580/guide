enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-espace-droites-plans-reperes",
    titre: "Chapitre 28 : Géométrie dans l'espace : droites, plans et repères",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch28-droites-plans",
        titre: "1. Droites et plans dans l'espace",
        blocs: [
          {
            type: "introduction",
            titre: "Passer du plan à l'espace",
            texte: "Dans l'espace, une droite et un plan sont deux objets différents. Une figure dessinée en perspective aide à les imaginer, mais elle ne permet pas à elle seule de prouver qu'une propriété est vraie."
          },
          {
            type: "regle",
            titre: "Déterminer une droite ou un plan",
            texte: "Deux points distincts déterminent une unique droite. Trois points non alignés déterminent un unique plan. Un plan est aussi déterminé par une droite et un point qui ne lui appartient pas."
          },
          {
            type: "regle",
            titre: "Droite et plan",
            texte: "Si deux points distincts d'une droite appartiennent à un plan, toute la droite est contenue dans ce plan."
          },
          {
            type: "regle",
            titre: "Deux plans",
            texte: "Deux plans distincts sont soit parallèles, sans point commun, soit sécants suivant une droite. Deux plans confondus ont tous leurs points en commun."
          },
          {
            type: "regle",
            titre: "Une droite et un plan",
            texte: "Une droite peut être contenue dans un plan, le couper en un seul point, ou lui être strictement parallèle, sans point commun. Une droite est dite parallèle à un plan si elle est contenue dans ce plan ou strictement parallèle à celui-ci."
          },
          {
            type: "remarque",
            titre: "Deux droites dans l'espace",
            texte: "Deux droites peuvent être sécantes, parallèles ou non coplanaires. Deux droites non coplanaires ne sont ni parallèles ni sécantes. Contrairement au cas du plan, deux droites sans point commun ne sont donc pas nécessairement parallèles."
          },
          {
            type: "schema",
            titre: "Deux droites non coplanaires dans un cube",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 430 300' role='img' aria-label='Cube ABCDEFGH en perspective : les droites AB et CG, représentées en couleurs, sont non coplanaires.'><rect width='430' height='300' fill='white'/><polygon points='70,200 250,200 320,150 140,150' fill='none' stroke='#555' stroke-width='2'/><polygon points='70,80 250,80 320,30 140,30' fill='none' stroke='#555' stroke-width='2'/><line x1='70' y1='200' x2='70' y2='80' stroke='#555' stroke-width='2'/><line x1='250' y1='200' x2='250' y2='80' stroke='#555' stroke-width='2'/><line x1='320' y1='150' x2='320' y2='30' stroke='#c43b35' stroke-width='4'/><line x1='140' y1='150' x2='140' y2='30' stroke='#555' stroke-width='2' stroke-dasharray='5 4'/><line x1='70' y1='200' x2='250' y2='200' stroke='#1769aa' stroke-width='4'/><text x='53' y='220' font-size='14'>A</text><text x='250' y='220' font-size='14'>B</text><text x='326' y='155' font-size='14'>C</text><text x='128' y='166' font-size='14'>D</text><text x='52' y='80' font-size='14'>E</text><text x='250' y='76' font-size='14'>F</text><text x='326' y='30' font-size='14'>G</text><text x='127' y='28' font-size='14'>H</text></svg>",
            legende: "Dans ce cube, (AB) et (CG) ne sont pas parallèles et n'ont aucun point commun : elles sont non coplanaires. Le dessin est une représentation en perspective."
          },
          {
            type: "exemple",
            titre: "Justifier la position de deux droites",
            texte: "Dans le cube ABCDEFGH, la droite (AB) est contenue dans le plan de la face (ABCD). La droite (CG) coupe ce plan en C, qui n'appartient pas à (AB). Les deux droites ne sont donc pas sécantes. Leurs directions ne sont pas parallèles : elles sont non coplanaires."
          }
        ]
      },
      {
        id: "m1-ch28-parallelisme-orthogonalite",
        titre: "2. Parallélisme et orthogonalité",
        blocs: [
          {
            type: "regle",
            titre: "Droite parallèle à un plan",
            texte: "Si une droite d est parallèle à une droite d' contenue dans un plan P, alors d est parallèle à P : elle est soit contenue dans P, soit strictement parallèle à P."
          },
          {
            type: "regle",
            titre: "Plans parallèles",
            texte: "Si un plan P contient deux droites sécantes respectivement parallèles à deux droites sécantes d'un plan Q, alors P et Q sont parallèles, éventuellement confondus."
          },
          {
            type: "definition",
            titre: "Droite perpendiculaire à un plan",
            texte: "Une droite est perpendiculaire à un plan lorsqu'elle est orthogonale à toutes les droites de ce plan. Dans l'espace, deux droites sont dites orthogonales si leurs directions sont perpendiculaires ; elles ne sont pas forcément sécantes."
          },
          {
            type: "regle",
            titre: "Critère pratique",
            texte: "Si une droite est orthogonale à deux droites sécantes d'un plan, alors elle est perpendiculaire à ce plan. Pour appliquer ce critère, il faut vérifier que les deux droites du plan sont bien sécantes."
          },
          {
            type: "exemple",
            titre: "Une arête perpendiculaire à une face",
            texte: "Dans un cube ABCDEFGH, l'arête (AE) est orthogonale à (AB) et à (AD). Ces deux droites sont sécantes et appartiennent au plan (ABCD). Donc (AE) est perpendiculaire au plan (ABCD)."
          }
        ]
      },
      {
        id: "m1-ch28-vecteurs",
        titre: "3. Vecteurs et repères de l'espace",
        blocs: [
          {
            type: "definition",
            titre: "Coordonnées dans l'espace",
            texte: "Un repère de l'espace est formé d'une origine O et de trois vecteurs de base non coplanaires. Un point M possède alors trois coordonnées (x ; y ; z), définies par OM⃗ = x i⃗ + y j⃗ + z k⃗."
          },
          {
            type: "regle",
            titre: "Coordonnées d'un vecteur",
            texte: "Si A(xA ; yA ; zA) et B(xB ; yB ; zB), alors AB⃗ = (xB − xA ; yB − yA ; zB − zA). Les sommes de vecteurs et les produits par un réel se calculent coordonnée par coordonnée."
          },
          {
            type: "exemple",
            titre: "Calcul vectoriel",
            texte: "Pour A(1 ; −2 ; 3) et B(4 ; 0 ; −1), on obtient AB⃗ = (3 ; 2 ; −4). Si u⃗ = (1 ; 2 ; 0) et v⃗ = (2 ; −1 ; 3), alors u⃗ + v⃗ = (3 ; 1 ; 3)."
          },
          {
            type: "definition",
            titre: "Repère orthonormé",
            texte: "Un repère est orthonormé lorsque ses trois vecteurs de base sont deux à deux perpendiculaires et de norme 1. Dans un tel repère, la distance AB vaut √((xB − xA)² + (yB − yA)² + (zB − zA)²)."
          },
          {
            type: "schema",
            titre: "Trois coordonnées dans l'espace",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 280' role='img' aria-label='Repère de l’espace en perspective. Le point M est repéré par ses déplacements selon les directions des axes x, y et z.'><rect width='420' height='280' fill='white'/><defs><marker id='m1ch28fleche' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#333'/></marker></defs><line x1='110' y1='220' x2='355' y2='220' stroke='#333' stroke-width='2' marker-end='url(#m1ch28fleche)'/><line x1='110' y1='220' x2='45' y2='255' stroke='#333' stroke-width='2' marker-end='url(#m1ch28fleche)'/><line x1='110' y1='220' x2='110' y2='25' stroke='#333' stroke-width='2' marker-end='url(#m1ch28fleche)'/><line x1='110' y1='220' x2='250' y2='220' stroke='#1769aa' stroke-width='2'/><line x1='250' y1='220' x2='220' y2='236' stroke='#1769aa' stroke-width='2'/><line x1='220' y1='236' x2='220' y2='116' stroke='#c43b35' stroke-width='2'/><circle cx='220' cy='116' r='4' fill='#c43b35'/><text x='95' y='239' font-size='14'>O</text><text x='359' y='225' font-size='14'>x</text><text x='30' y='263' font-size='14'>y</text><text x='115' y='27' font-size='14'>z</text><text x='226' y='114' font-size='14'>M</text><text x='165' y='212' font-size='13' fill='#1769aa'>x</text><text x='230' y='244' font-size='13' fill='#1769aa'>y</text><text x='225' y='180' font-size='13' fill='#c43b35'>z</text></svg>",
            legende: "Le chemin coloré illustre les trois déplacements associés aux coordonnées de M. La perspective modifie les longueurs apparentes."
          },
          {
            type: "regle",
            titre: "Colinéarité de vecteurs",
            texte: "Deux vecteurs u⃗ et v⃗ sont colinéaires si l'un est un multiple de l'autre, ou, plus généralement, s'il existe deux réels non tous deux nuls dont une combinaison de u⃗ et v⃗ est le vecteur nul. Cette formulation inclut le cas d'un vecteur nul."
          },
          {
            type: "exemple",
            titre: "Tester la colinéarité",
            texte: "u⃗ = (1 ; −2 ; 3) et v⃗ = (2 ; −4 ; 6) sont colinéaires car v⃗ = 2u⃗. En revanche, (1 ; 0 ; 0) et (0 ; 1 ; 0) ne sont pas colinéaires."
          }
        ]
      },
      {
        id: "m1-ch28-parametres",
        titre: "4. Représentations paramétriques",
        blocs: [
          {
            type: "definition",
            titre: "Droite de l'espace",
            texte: "La droite passant par A(xA ; yA ; zA) et de vecteur directeur non nul u⃗ = (p ; q ; r) est l'ensemble des points M tels que AM⃗ = t u⃗, avec t ∈ ℝ. Ses équations sont x = xA + tp, y = yA + tq et z = zA + tr."
          },
          {
            type: "exemple",
            titre: "Vérifier l'appartenance",
            texte: "Soit d : x = 1 + 2t, y = −1 + t, z = 3 − t. Le point M(5 ; 1 ; 1) appartient à d : pour t = 2, les trois équations sont vérifiées. Le même paramètre doit convenir aux trois coordonnées."
          },
          {
            type: "definition",
            titre: "Plan de l'espace",
            texte: "Un plan passant par A et de vecteurs directeurs non colinéaires u⃗ et v⃗ est l'ensemble des points M tels que AM⃗ = s u⃗ + t v⃗, avec s et t réels. Cette expression fournit trois équations paramétriques en s et t."
          },
          {
            type: "exemple",
            titre: "Un plan paramétré",
            texte: "Le plan passant par A(1 ; 0 ; 2), de vecteurs directeurs (1 ; 0 ; 1) et (0 ; 1 ; −1), est donné par x = 1 + s, y = t, z = 2 + s − t, avec s, t ∈ ℝ."
          },
          {
            type: "remarque",
            titre: "Prochaine étape",
            texte: "Le chapitre suivant utilise le produit scalaire, les vecteurs normaux et les équations cartésiennes pour étudier les droites et les plans."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un cube ABCDEFGH, les faces ABCD et EFGH sont opposées. Quelle est la position relative de leurs plans ?",
        correction: "Les plans des faces opposées (ABCD) et (EFGH) sont parallèles et distincts."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère de l'espace, A(1 ; 2 ; −1) et B(3 ; −1 ; 4). Calculer AB⃗.",
        correction: "AB⃗ = (3 − 1 ; −1 − 2 ; 4 − (−1)) = (2 ; −3 ; 5)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère orthonormé de l'espace, calculer la distance entre A(0 ; 1 ; 2) et B(2 ; 2 ; 4).",
        correction: "AB = √((2 − 0)² + (2 − 1)² + (4 − 2)²) = √(4 + 1 + 4) = 3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Les vecteurs u⃗ = (2 ; −1 ; 4) et v⃗ = (−4 ; 2 ; −8) sont-ils colinéaires ?",
        correction: "On constate que v⃗ = −2u⃗. Les deux vecteurs sont donc colinéaires."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère de l'espace, la droite d passe par A(1 ; 0 ; 2) et admet u⃗ = (2 ; −1 ; 3) comme vecteur directeur. Donner une représentation paramétrique de d. Le point M(5 ; −2 ; 8) appartient-il à d ?",
        correction: "Une représentation est x = 1 + 2t, y = −t et z = 2 + 3t, t ∈ ℝ. Pour t = 2, on obtient (5 ; −2 ; 8). Les trois coordonnées correspondent au même paramètre : M appartient à d."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un cube ABCDEFGH, les arêtes [AE], [BF], [CG] et [DH] relient les deux faces opposées ABCD et EFGH. Justifier que (AE) est perpendiculaire au plan (ABCD).",
        correction: "Dans un cube, les arêtes (AE), (AB) et (AD) issues de A sont deux à deux perpendiculaires. Ainsi (AE) est orthogonale aux deux droites sécantes (AB) et (AD) du plan (ABCD). Elle est donc perpendiculaire à ce plan."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère de l'espace, soit le plan P passant par A(1 ; 2 ; 0) et dirigé par u⃗ = (1 ; 0 ; 1) et v⃗ = (0 ; 1 ; 1). Donner une représentation paramétrique de P. Le point M(3 ; 1 ; 1) appartient-il à P ?",
        correction: "Les vecteurs u⃗ et v⃗ ne sont pas colinéaires. Une représentation de P est x = 1 + s, y = 2 + t et z = s + t, avec s, t ∈ ℝ. Pour M, les deux premières coordonnées imposent s = 2 et t = −1. Alors s + t = 1, ce qui correspond à sa troisième coordonnée. Donc M appartient à P."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère de l'espace, on donne d : x = t, y = 0, z = 0 et d' : x = 0, y = 1, z = s, avec t, s ∈ ℝ. Étudier leur position relative.",
        correction: "Un point de d a pour deuxième coordonnée 0, tandis qu'un point de d' a pour deuxième coordonnée 1 : elles n'ont aucun point commun. Leurs vecteurs directeurs respectifs sont (1 ; 0 ; 0) et (0 ; 0 ; 1), qui ne sont pas colinéaires : elles ne sont pas parallèles. Deux droites coplanaires non parallèles seraient sécantes. Ces droites sont donc non coplanaires."
      }
    ]
  }
]);
