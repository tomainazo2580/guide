enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-angles-cercle-tangentes",
    titre: "Chapitre 25 : Angles au centre, angles inscrits et tangentes au cercle",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch25-angles",
        titre: "1. Angles au centre et angles inscrits",
        blocs: [
          {
            type: "definition",
            titre: "Angle au centre",
            texte: "Un angle au centre d'un cercle est un angle dont le sommet est le centre du cercle. Si A et B sont deux points du cercle de centre O, l'angle AOB est un angle au centre."
          },
          {
            type: "definition",
            titre: "Angle inscrit",
            texte: "Un angle inscrit est un angle dont le sommet et les deux autres points qui le définissent sont sur le cercle. Si A, B et M sont trois points distincts du cercle, l'angle AMB est inscrit. Il intercepte l'arc AB qui ne contient pas M."
          },
          {
            type: "regle",
            titre: "Théorème de l'angle inscrit",
            texte: "La mesure d'un angle inscrit est la moitié de la mesure de l'arc qu'il intercepte, mesurée par l'angle au centre correspondant, éventuellement rentrant. En particulier, si l'angle au centre AOB est saillant et si M se trouve sur le grand arc AB, alors AMB = AOB/2."
          },
          {
            type: "schema",
            titre: "Un angle inscrit et l'angle au centre associé",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 280' role='img' aria-label='Cercle de centre O. Les angles AOB au centre et AMB inscrit interceptent le même petit arc AB ; M est sur le grand arc.'><rect width='420' height='280' fill='white'/><circle cx='210' cy='140' r='100' fill='none' stroke='#777' stroke-width='2'/><path d='M260 53.40 A100 100 0 0 1 310 140' fill='none' stroke='#1769aa' stroke-width='5'/><line x1='210' y1='140' x2='260' y2='53.40' stroke='#1769aa' stroke-width='2'/><line x1='210' y1='140' x2='310' y2='140' stroke='#1769aa' stroke-width='2'/><line x1='110' y1='140' x2='260' y2='53.40' stroke='#c43b35' stroke-width='2'/><line x1='110' y1='140' x2='310' y2='140' stroke='#c43b35' stroke-width='2'/><circle cx='210' cy='140' r='4' fill='#333'/><circle cx='260' cy='53.40' r='4' fill='#333'/><circle cx='310' cy='140' r='4' fill='#333'/><circle cx='110' cy='140' r='4' fill='#333'/><text x='198' y='160' font-size='14'>O</text><text x='260' y='47' font-size='14'>A</text><text x='315' y='145' font-size='14'>B</text><text x='92' y='145' font-size='14'>M</text><text x='230' y='128' font-size='13' fill='#1769aa'>60°</text><text x='130' y='135' font-size='13' fill='#c43b35'>30°</text></svg>",
            legende: "L'angle au centre AOB mesure 60°. L'angle inscrit AMB, qui intercepte le même arc bleu AB, mesure 30°."
          },
          {
            type: "exemple",
            titre: "Calculer un angle inscrit",
            texte: "Un angle au centre AOB mesure 100°. Si M est sur le grand arc AB, alors l'angle inscrit AMB intercepte le petit arc AB et mesure 100°/2 = 50°."
          },
          {
            type: "remarque",
            titre: "Bien choisir l'arc",
            texte: "Si M est sur le petit arc AB, l'angle AMB intercepte le grand arc AB. Par exemple, si le petit angle au centre AOB mesure 100°, le grand arc mesure 360° − 100° = 260° et l'angle inscrit correspondant mesure 130°."
          },
          {
            type: "regle",
            titre: "Angles inscrits interceptant le même arc",
            texte: "Deux angles inscrits qui interceptent le même arc ont la même mesure. Deux angles inscrits interceptant des arcs complémentaires du cercle ont des mesures dont la somme est 180°."
          },
          {
            type: "regle",
            titre: "Angle inscrit dans un demi-cercle",
            texte: "Si [AB] est un diamètre et si M est un point du cercle distinct de A et B, alors AMB = 90°. Réciproquement, si le triangle AMB est rectangle en M, alors M appartient au cercle de diamètre [AB]."
          }
        ]
      },
      {
        id: "m1-ch25-quadrilateres",
        titre: "2. Quadrilatères inscrits",
        blocs: [
          {
            type: "definition",
            titre: "Quadrilatère inscrit",
            texte: "Un quadrilatère est inscrit dans un cercle lorsque ses quatre sommets appartiennent à ce cercle."
          },
          {
            type: "regle",
            titre: "Angles opposés",
            texte: "Dans un quadrilatère convexe ABCD inscrit dans un cercle, les angles opposés sont supplémentaires : BAD + BCD = 180° et ABC + ADC = 180°."
          },
          {
            type: "exemple",
            titre: "Calculer un angle opposé",
            texte: "Si ABCD est un quadrilatère convexe inscrit et si l'angle BAD mesure 72°, alors l'angle BCD mesure 180° − 72° = 108°."
          },
          {
            type: "remarque",
            titre: "Utiliser les hypothèses",
            texte: "Avant d'appliquer la règle, vérifier que les quatre sommets sont bien sur un même cercle et que les angles considérés sont opposés."
          }
        ]
      },
      {
        id: "m1-ch25-tangentes",
        titre: "3. Tangente à un cercle",
        blocs: [
          {
            type: "definition",
            titre: "Tangente en un point",
            texte: "Une tangente à un cercle est une droite qui a un seul point commun avec ce cercle. Ce point est appelé point de tangence."
          },
          {
            type: "regle",
            titre: "Rayon et tangente",
            texte: "La tangente au cercle de centre O au point T est perpendiculaire au rayon (OT). Réciproquement, la droite perpendiculaire à (OT) en un point T du cercle est la tangente au cercle en T."
          },
          {
            type: "schema",
            titre: "Tangente perpendiculaire au rayon",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250' role='img' aria-label='Cercle de centre O ; en son point T situé à droite, la tangente verticale est perpendiculaire au rayon OT.'><rect width='400' height='250' fill='white'/><circle cx='170' cy='125' r='80' fill='none' stroke='#1769aa' stroke-width='2'/><line x1='250' y1='20' x2='250' y2='230' stroke='#c43b35' stroke-width='2'/><line x1='170' y1='125' x2='250' y2='125' stroke='#333' stroke-width='2'/><path d='M240 125 L240 115 L250 115' fill='none' stroke='#333'/><circle cx='170' cy='125' r='4' fill='#333'/><circle cx='250' cy='125' r='4' fill='#333'/><text x='151' y='146' font-size='14'>O</text><text x='257' y='143' font-size='14'>T</text><text x='258' y='34' font-size='13' fill='#c43b35'>tangente</text></svg>",
            legende: "Le point T appartient au cercle. La tangente en T est perpendiculaire au rayon OT."
          },
          {
            type: "methode",
            titre: "Construire la tangente en T",
            texte: "Tracer le rayon (OT), puis la droite perpendiculaire à (OT) passant par T. Cette droite est la tangente cherchée."
          },
          {
            type: "regle",
            titre: "Équation de la tangente dans un repère",
            texte: "Dans un repère orthonormé, soit le cercle de centre O(a ; b) et soit T(xT ; yT) un point du cercle. La tangente en T a pour équation (xT − a)(x − xT) + (yT − b)(y − yT) = 0. Le vecteur OT⃗ est normal à cette droite."
          },
          {
            type: "exemple",
            titre: "Écrire une équation de tangente",
            texte: "Pour le cercle x² + y² = 25, le centre est O(0 ; 0). Le point T(3 ; 4) appartient au cercle car 3² + 4² = 25. La tangente en T a pour équation 3(x − 3) + 4(y − 4) = 0, soit 3x + 4y − 25 = 0."
          },
          {
            type: "regle",
            titre: "Deux tangentes issues d'un point extérieur",
            texte: "Si P est à l'extérieur d'un cercle de centre O et si les tangentes issues de P touchent le cercle en T et U, alors PT = PU. Les triangles OPT et OPU sont rectangles en T et U."
          },
          {
            type: "exemple",
            titre: "Longueur d'une tangente",
            texte: "Si OP = 13, si le rayon OT vaut 5 et si (PT) est tangente au cercle en T, le triangle OPT est rectangle en T. Par Pythagore, PT² = OP² − OT² = 169 − 25 = 144, donc PT = 12."
          },
          {
            type: "remarque",
            titre: "Un point extérieur est nécessaire",
            texte: "Depuis un point strictement extérieur au cercle, on peut tracer deux tangentes. Depuis un point du cercle, il n'y a qu'une tangente ; depuis un point strictement intérieur, il n'y en a aucune."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Sur un cercle de centre O, l'angle au centre AOB mesure 80°. Le point M est situé sur le grand arc AB. Calculer l'angle inscrit AMB.",
        correction: "L'angle inscrit AMB intercepte le petit arc AB, comme l'angle au centre AOB. Il mesure la moitié de 80°, soit 40°."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un cercle a pour diamètre [AB]. M est un point du cercle distinct de A et de B. Quelle est la mesure de l'angle AMB ?",
        correction: "Un angle inscrit qui intercepte un diamètre est droit. Donc AMB = 90°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "ABCD est un quadrilatère convexe inscrit dans un cercle. L'angle ABC mesure 115°. Calculer l'angle ADC.",
        correction: "Les angles opposés ABC et ADC sont supplémentaires. Donc ADC = 180° − 115° = 65°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un cercle de centre O passe par T. La droite d est perpendiculaire à (OT) en T. Expliquer pourquoi d est tangente au cercle.",
        correction: "T appartient au cercle et d est perpendiculaire au rayon (OT) en T. D'après la réciproque de la propriété du rayon et de la tangente, d est la tangente au cercle en T."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un cercle de centre O a pour rayon 5 cm. Un point P extérieur vérifie OP = 13 cm. La droite (PT) est tangente au cercle en T. Calculer PT.",
        correction: "La tangente (PT) est perpendiculaire au rayon (OT). Le triangle OPT est donc rectangle en T. Par Pythagore, PT² = OP² − OT² = 13² − 5² = 144. Ainsi PT = 12 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé, on considère le cercle de centre O(0 ; 0) et de rayon 5. Vérifier que T(−3 ; 4) appartient au cercle, puis donner une équation de la tangente en T.",
        correction: "OT² = (−3)² + 4² = 25 : T appartient au cercle. Le vecteur OT⃗ = (−3 ; 4) est normal à la tangente, qui passe par T. Son équation est −3(x + 3) + 4(y − 4) = 0, soit −3x + 4y − 25 = 0."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Sur un cercle de centre O, le petit angle au centre AOB mesure 110°. M est un point du petit arc AB, distinct de A et de B. Calculer l'angle inscrit AMB en précisant l'arc intercepté.",
        correction: "M se trouve sur le petit arc AB : l'angle AMB intercepte donc le grand arc AB. Celui-ci mesure 360° − 110° = 250°. L'angle inscrit mesure la moitié de cet arc, soit AMB = 125°."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé, on considère le cercle C : (x − 1)² + (y − 2)² = 25 et le point T(4 ; 6). Vérifier que T appartient à C, puis déterminer la tangente en T et son intersection avec l'axe des abscisses.",
        correction: "Le centre est O(1 ; 2) et le rayon est 5. Comme (4 − 1)² + (6 − 2)² = 9 + 16 = 25, T appartient à C. Le vecteur OT⃗ = (3 ; 4) est normal à la tangente. Une équation est 3(x − 4) + 4(y − 6) = 0, soit 3x + 4y − 36 = 0. Sur l'axe des abscisses, y = 0 ; ainsi x = 12. L'intersection est le point (12 ; 0)."
      }
    ]
  }
]);
