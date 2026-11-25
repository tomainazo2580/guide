enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-droites-cercles-plan",
    titre: "Chapitre 24 : Droites et cercles dans le plan",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch24-droites",
        titre: "1. Représentations d'une droite",
        blocs: [
          {
            type: "introduction",
            titre: "Géométrie et coordonnées",
            texte: "Dans un repère du plan, une droite peut être décrite par une équation cartésienne ou par des équations paramétriques. Les coordonnées permettent de vérifier qu'un point appartient à la droite et d'étudier ses intersections."
          },
          {
            type: "definition",
            titre: "Équation cartésienne",
            texte: "Une droite admet une équation de la forme ax + by + c = 0, où a et b ne sont pas tous les deux nuls. Un point M(x ; y) appartient à la droite si et seulement si ses coordonnées vérifient cette équation."
          },
          {
            type: "regle",
            titre: "Vecteur directeur",
            texte: "Pour la droite d'équation ax + by + c = 0, le vecteur u⃗ = (−b ; a) est un vecteur directeur non nul. Tout vecteur non nul colinéaire à u⃗ est également un vecteur directeur."
          },
          {
            type: "regle",
            titre: "Vecteur normal",
            texte: "Dans un repère orthonormé, n⃗ = (a ; b) est un vecteur normal à la droite ax + by + c = 0 : il est perpendiculaire à ses vecteurs directeurs."
          },
          {
            type: "definition",
            titre: "Équations paramétriques",
            texte: "Une droite passant par A(xA ; yA) et de vecteur directeur non nul u⃗ = (p ; q) est l'ensemble des points M(x ; y) tels que x = xA + tp et y = yA + tq, avec t ∈ ℝ."
          },
          {
            type: "exemple",
            titre: "Deux représentations de la même droite",
            texte: "La droite passant par A(1 ; 2) et de vecteur directeur (2 ; 3) a pour équations x = 1 + 2t et y = 2 + 3t. Comme 3(x − 1) − 2(y − 2) = 0, elle a aussi pour équation cartésienne 3x − 2y + 1 = 0."
          },
          {
            type: "schema",
            titre: "Point et vecteur directeur d'une droite",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 230' role='img' aria-label='Une droite passe par A et M. Un vecteur directeur u, parallèle à la droite, relie A à un autre point de cette droite.'><rect width='400' height='230' fill='white'/><defs><marker id='m1ch24fleche' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#1769aa'/></marker></defs><line x1='35' y1='190' x2='365' y2='25' stroke='#333' stroke-width='2'/><line x1='115' y1='150' x2='235' y2='90' stroke='#1769aa' stroke-width='3' marker-end='url(#m1ch24fleche)'/><circle cx='115' cy='150' r='4' fill='#333'/><circle cx='295' cy='60' r='4' fill='#c43b35'/><text x='103' y='171' font-size='14'>A</text><text x='299' y='57' font-size='14' fill='#c43b35'>M</text><text x='174' y='104' font-size='14' fill='#1769aa'>u⃗</text><text x='330' y='33' font-size='14'>d</text></svg>",
            legende: "Un point M appartient à la droite d si et seulement si AM⃗ = t u⃗ pour un réel t."
          },
          {
            type: "methode",
            titre: "Équation d'une droite passant par deux points",
            texte: "Si A et B sont distincts, calculer AB⃗ = (p ; q), puis écrire q(x − xA) − p(y − yA) = 0. On peut aussi utiliser les équations paramétriques avec le vecteur AB⃗."
          },
          {
            type: "exemple",
            titre: "Passer par deux points",
            texte: "Pour A(0 ; 1) et B(2 ; 5), AB⃗ = (2 ; 4). Une équation est 4(x − 0) − 2(y − 1) = 0, soit, après simplification, 2x − y + 1 = 0."
          }
        ]
      },
      {
        id: "m1-ch24-positions-droites",
        titre: "2. Positions relatives de deux droites",
        blocs: [
          {
            type: "regle",
            titre: "Comparer les directions",
            texte: "Deux droites sont parallèles si leurs vecteurs directeurs sont colinéaires. Elles peuvent alors être distinctes ou confondues. Si leurs vecteurs directeurs ne sont pas colinéaires, elles sont sécantes en un unique point."
          },
          {
            type: "methode",
            titre: "Chercher une intersection",
            texte: "Résoudre le système formé par les deux équations cartésiennes. Une solution unique donne le point d'intersection ; aucune solution correspond à deux droites parallèles distinctes ; une infinité de solutions correspond à deux droites confondues."
          },
          {
            type: "exemple",
            titre: "Deux droites sécantes",
            texte: "Pour d : x + y − 3 = 0 et d' : x − y − 1 = 0, on résout x + y = 3 et x − y = 1. En additionnant, 2x = 4, donc x = 2 puis y = 1. Les droites se coupent en (2 ; 1)."
          },
          {
            type: "regle",
            titre: "Droites perpendiculaires",
            texte: "Dans un repère orthonormé, deux droites sont perpendiculaires si et seulement si le produit scalaire de leurs vecteurs directeurs non nuls est nul."
          }
        ]
      },
      {
        id: "m1-ch24-cercles",
        titre: "3. Équation d'un cercle",
        blocs: [
          {
            type: "definition",
            titre: "Cercle de centre et de rayon donnés",
            texte: "Dans un repère orthonormé, le cercle de centre Ω(a ; b) et de rayon R > 0 est l'ensemble des points M(x ; y) tels que ΩM = R. Son équation est (x − a)² + (y − b)² = R²."
          },
          {
            type: "schema",
            titre: "Centre et rayon d'un cercle",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 250' role='img' aria-label='Cercle de centre Oméga et de rayon R. Un point M du cercle est relié au centre.'><rect width='360' height='250' fill='white'/><circle cx='180' cy='125' r='85' fill='none' stroke='#1769aa' stroke-width='2'/><line x1='180' y1='125' x2='248' y2='74' stroke='#c43b35' stroke-width='2'/><circle cx='180' cy='125' r='4' fill='#333'/><circle cx='248' cy='74' r='4' fill='#333'/><text x='160' y='143' font-size='15'>Ω</text><text x='252' y='70' font-size='15'>M</text><text x='210' y='91' font-size='15' fill='#c43b35'>R</text></svg>",
            legende: "Tous les points M du cercle sont à la même distance R du centre Ω."
          },
          {
            type: "methode",
            titre: "Reconnaître un cercle",
            texte: "Dans une équation de la forme x² + y² + Dx + Ey + F = 0, compléter les carrés : (x + D/2)² + (y + E/2)² = (D² + E²)/4 − F. Si le membre de droite est strictement positif, on obtient un cercle. S'il est nul, il reste un point ; s'il est négatif, il n'y a aucun point réel."
          },
          {
            type: "exemple",
            titre: "Compléter les carrés",
            texte: "x² + y² − 4x + 2y − 4 = 0 équivaut à (x − 2)² + (y + 1)² = 9. C'est le cercle de centre (2 ; −1) et de rayon 3."
          },
          {
            type: "remarque",
            titre: "Repère orthonormé",
            texte: "Les formules de distance et l'équation usuelle du cercle présentées ici supposent que le repère est orthonormé."
          }
        ]
      },
      {
        id: "m1-ch24-intersections",
        titre: "4. Intersection d'une droite et d'un cercle",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre par substitution",
            texte: "Exprimer une coordonnée à partir de l'équation de la droite, puis la remplacer dans celle du cercle. L'équation obtenue est généralement du second degré. Chaque solution doit être associée à ses deux coordonnées et vérifiée dans les équations initiales."
          },
          {
            type: "exemple",
            titre: "Deux points d'intersection",
            texte: "Pour le cercle x² + y² = 4 et la droite y = 1, on obtient x² + 1 = 4, donc x² = 3. Les points d'intersection sont (√3 ; 1) et (−√3 ; 1)."
          },
          {
            type: "regle",
            titre: "Selon la distance au centre",
            texte: "Soit un cercle de centre Ω et de rayon R > 0, et une droite d. Si la distance de Ω à d est inférieure à R, il y a deux points d'intersection ; si elle est égale à R, la droite est tangente et il y a un seul point ; si elle est supérieure à R, il n'y a pas d'intersection."
          },
          {
            type: "regle",
            titre: "Distance d'un point à une droite",
            texte: "Dans un repère orthonormé, la distance du point Ω(a ; b) à la droite ax + by + c = 0 doit être calculée avec des lettres distinctes pour éviter toute confusion. Pour la droite d : ux + vy + w = 0, elle vaut |ua + vb + w|/√(u² + v²), avec (u ; v) ≠ (0 ; 0)."
          },
          {
            type: "exemple",
            titre: "Reconnaître une tangente",
            texte: "Le cercle x² + y² = 4 a pour centre O(0 ; 0) et rayon 2. La distance de O à la droite x = 2 est 2 : cette droite est tangente au cercle en (2 ; 0)."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "La droite d a pour équation 2x − y + 1 = 0. Les points A(1 ; 3) et B(0 ; 0) appartiennent-ils à d ?",
        correction: "Pour A, 2 × 1 − 3 + 1 = 0 : A appartient à d. Pour B, 2 × 0 − 0 + 1 = 1 ≠ 0 : B n'appartient pas à d."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère orthonormé, donner le centre et le rayon du cercle d'équation (x − 3)² + (y + 2)² = 16.",
        correction: "Le centre est Ω(3 ; −2) et le rayon est √16 = 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère, déterminer une équation cartésienne de la droite passant par A(1 ; 1) et B(3 ; 5).",
        correction: "AB⃗ = (2 ; 4). Une équation est 4(x − 1) − 2(y − 1) = 0. Après simplification, on obtient 2x − y − 1 = 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer le point d'intersection des droites d : x + y = 5 et d' : x − y = 1.",
        correction: "En additionnant les deux équations, 2x = 6, donc x = 3. Puis y = 5 − 3 = 2. Les droites se coupent en (3 ; 2)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé, reconnaître l'ensemble d'équation x² + y² + 2x − 6y + 1 = 0. Préciser son centre et son rayon.",
        correction: "On complète les carrés : (x + 1)² − 1 + (y − 3)² − 9 + 1 = 0, soit (x + 1)² + (y − 3)² = 9. C'est le cercle de centre (−1 ; 3) et de rayon 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé, déterminer les points communs au cercle x² + y² = 25 et à la droite y = 3.",
        correction: "En remplaçant y par 3 : x² + 9 = 25, donc x² = 16 et x = 4 ou x = −4. Les points communs sont (4 ; 3) et (−4 ; 3)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé, on donne le cercle C : (x − 1)² + (y + 2)² = 9 et la droite d : x = 4. Étudier leur position relative et déterminer leur éventuel point commun.",
        correction: "Le centre de C est Ω(1 ; −2) et son rayon vaut 3. La distance de Ω à la droite x = 4 vaut |1 − 4| = 3. Elle est égale au rayon : d est tangente à C. En substituant x = 4, on obtient 9 + (y + 2)² = 9, donc y = −2. Le point de tangence est (4 ; −2)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé, la droite d passe par A(1 ; 2) et admet pour vecteur directeur u⃗ = (2 ; −1). Donner des équations paramétriques et une équation cartésienne de d, puis déterminer son intersection avec la droite d' : x = 5.",
        correction: "Une représentation paramétrique est x = 1 + 2t et y = 2 − t, t ∈ ℝ. Un vecteur normal à d est (1 ; 2), car (1 ; 2) · (2 ; −1) = 0. Une équation cartésienne est donc (x − 1) + 2(y − 2) = 0, soit x + 2y − 5 = 0. Pour x = 5, cette équation donne 2y = 0, donc y = 0. L'intersection est le point (5 ; 0)."
      }
    ]
  }
]);
