// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 15 : angles orientés et cercle trigonométrique.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-angles-orientes-cercle-trigonometrique",
    titre: "Chapitre 15 : Angles orientés et cercle trigonométrique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch15-orientation",
        titre: "Orienter un angle",
        blocs: [
          {
            type: "introduction",
            titre: "Un angle et un sens de parcours",
            texte: "Dans un triangle rectangle, nous avons étudié des angles compris entre 0° et 90°.\n\nAvec les angles orientés, nous allons aussi considérer le sens dans lequel on tourne et des angles pouvant dépasser un tour."
          },
          {
            type: "definition",
            titre: "Sens positif et sens négatif",
            texte: "Dans un plan orienté, le sens positif est le sens inverse de celui des aiguilles d'une montre. On l'appelle aussi sens direct ou sens trigonométrique.\n\nLe sens négatif est le sens des aiguilles d'une montre.\n\nÀ partir d'une même direction :\n• un quart de tour positif correspond à 90° ;\n• un quart de tour négatif correspond à -90° ;\n• un tour positif correspond à 360°."
          },
          {
            type: "schema",
            titre: "Les deux sens de rotation",
            svg: "<svg viewBox='0 0 340 170' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Un quart de tour positif vers le haut et un quart de tour négatif vers le bas'><rect x='5' y='5' width='330' height='160' rx='10' fill='#f8fafc' stroke='#cbd5e1'/><circle cx='95' cy='85' r='3' fill='#334155'/><line x1='95' y1='85' x2='145' y2='85' stroke='#334155' stroke-width='2'/><line x1='95' y1='85' x2='95' y2='35' stroke='#334155' stroke-width='2'/><path d='M125 85 A30 30 0 0 0 95 55' fill='none' stroke='#2563eb' stroke-width='3'/><path d='M95 55 l8 -4 M95 55 l6 7' stroke='#2563eb' stroke-width='2' fill='none'/><text x='95' y='135' text-anchor='middle' font-size='14' fill='#1d4ed8'>+90° : sens positif</text><circle cx='245' cy='85' r='3' fill='#334155'/><line x1='245' y1='85' x2='295' y2='85' stroke='#334155' stroke-width='2'/><line x1='245' y1='85' x2='245' y2='135' stroke='#334155' stroke-width='2'/><path d='M275 85 A30 30 0 0 1 245 115' fill='none' stroke='#dc2626' stroke-width='3'/><path d='M245 115 l8 -7 M245 115 l8 4' stroke='#dc2626' stroke-width='2' fill='none'/><text x='245' y='155' text-anchor='middle' font-size='14' fill='#b91c1c'>-90° : sens négatif</text></svg>",
            legende: "Dans les deux dessins, on part de la direction horizontale vers la droite. À gauche, on tourne dans le sens positif ; à droite, dans le sens négatif."
          },
          {
            type: "definition",
            titre: "Mesures d'un même angle orienté",
            texte: "Après un tour complet, on retrouve la même direction finale.\n\nAinsi, 30°, 390° et -330° correspondent au même angle orienté :\n\n390° = 30° + 360° ;\n-330° = 30° - 360°.\n\nPlus généralement, deux mesures en degrés correspondent au même angle orienté si leur différence est un multiple entier de 360°."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre mesure et parcours",
            texte: "30° et 390° donnent la même direction finale, mais le parcours de 390° comprend un tour complet supplémentaire.\n\nOn dit que ces mesures sont égales modulo 360°."
          }
        ]
      },

      {
        id: "m2-ch15-radians",
        titre: "Mesurer un angle en radians",
        blocs: [
          {
            type: "definition",
            titre: "Le radian",
            texte: "Sur un cercle de rayon R, un angle au centre de 1 radian intercepte un arc de longueur R.\n\nPour un angle positif de mesure θ en radians, la longueur de l'arc correspondant est :\n\nL = Rθ.\n\nUn tour complet mesure 2π radians, car la circonférence du cercle vaut 2πR."
          },
          {
            type: "regle",
            titre: "Correspondance entre degrés et radians",
            texte: "Un tour complet vaut 360° ou 2π radians. Donc :\n\n180° = π radians ;\n90° = π/2 radians ;\n360° = 2π radians.\n\nPour convertir des degrés en radians, on multiplie par π/180.\n\nPour convertir des radians en degrés, on multiplie par 180/π."
          },
          {
            type: "tableau",
            titre: "Mesures à connaître",
            entetes: ["Degrés", "Radians"],
            lignes: [
              ["0°", "0"],
              ["30°", "π/6"],
              ["45°", "π/4"],
              ["60°", "π/3"],
              ["90°", "π/2"],
              ["180°", "π"],
              ["270°", "3π/2"],
              ["360°", "2π"]
            ]
          },
          {
            type: "methode",
            titre: "Convertir",
            texte: "Exemple 1 : convertir 150° en radians.\n\n150 × π/180 = 5π/6.\n\nDonc 150° = 5π/6 radians.\n\nExemple 2 : convertir -3π/4 radians en degrés.\n\n(-3π/4) × 180/π = -135°.\n\nLa conversion conserve le signe de l'angle."
          },
          {
            type: "remarque",
            titre: "Mesures en radians d'un même angle",
            texte: "Ajouter ou retrancher un nombre entier de tours ne change pas la direction finale.\n\nDeux mesures en radians correspondent au même angle orienté si leur différence est de la forme 2kπ, avec k entier relatif.\n\nPar exemple, π/3 et 7π/3 correspondent au même angle, car 7π/3 = π/3 + 2π."
          },
          {
            type: "remarque",
            titre: "Calculatrice",
            texte: "Pour calculer le sinus ou le cosinus d'un angle donné en radians, utilise le mode RAD. Pour un angle donné en degrés, utilise le mode DEG.\n\nPar exemple, en mode RAD, sin(π/6) = 1/2."
          }
        ]
      },

      {
        id: "m2-ch15-cercle",
        titre: "Le cercle trigonométrique",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "Dans un repère orthonormé, le cercle trigonométrique est le cercle de centre O et de rayon 1, orienté dans le sens positif.\n\nOn part du point I de coordonnées (1 ; 0). À un réel t, mesuré en radians, on associe le point M obtenu en tournant depuis I d'un angle t autour de O."
          },
          {
            type: "definition",
            titre: "Cosinus et sinus",
            texte: "Le point M associé à t a pour coordonnées :\n\nM(cos t ; sin t).\n\nLe cosinus est donc l'abscisse de M et le sinus son ordonnée.\n\nCette définition permet d'étudier les sinus et cosinus d'angles positifs ou négatifs, et pas seulement ceux des angles aigus."
          },
          {
            type: "schema",
            titre: "Lire le cosinus et le sinus",
            svg: "<svg viewBox='0 0 360 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Cercle trigonométrique avec un point M dans le premier quadrant, de coordonnées cosinus t et sinus t'><rect x='5' y='5' width='350' height='250' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='30' y1='145' x2='330' y2='145' stroke='#334155' stroke-width='2'/><line x1='160' y1='235' x2='160' y2='15' stroke='#334155' stroke-width='2'/><circle cx='160' cy='145' r='90' fill='none' stroke='#64748b' stroke-width='2'/><line x1='160' y1='145' x2='214' y2='73' stroke='#2563eb' stroke-width='2'/><line x1='214' y1='73' x2='214' y2='145' stroke='#dc2626' stroke-dasharray='5 4' stroke-width='2'/><line x1='160' y1='73' x2='214' y2='73' stroke='#16a34a' stroke-dasharray='5 4' stroke-width='2'/><path d='M190 145 A30 30 0 0 0 178 121' fill='none' stroke='#7c3aed' stroke-width='2'/><circle cx='214' cy='73' r='5' fill='#2563eb'/><circle cx='250' cy='145' r='4' fill='#334155'/><text x='221' y='68' font-size='14' fill='#1d4ed8'>M(cos t ; sin t)</text><text x='245' y='166' font-size='14' fill='#334155'>I</text><text x='147' y='164' font-size='14' fill='#334155'>O</text><text x='195' y='164' font-size='13' fill='#b91c1c'>cos t</text><text x='110' y='78' font-size='13' fill='#166534'>sin t</text><text x='187' y='128' font-size='14' fill='#6d28d9'>t</text><text x='315' y='164' font-size='13' fill='#334155'>x</text><text x='170' y='27' font-size='13' fill='#334155'>y</text></svg>",
            legende: "M est sur le cercle de rayon 1. Son abscisse est cos t et son ordonnée est sin t. Ici, les deux sont positifs."
          },
          {
            type: "regle",
            titre: "Identité fondamentale",
            texte: "Comme M(cos t ; sin t) appartient au cercle de centre O et de rayon 1, le théorème de Pythagore donne :\n\ncos² t + sin² t = 1.\n\nCette égalité est valable pour tout réel t.\n\nDe plus, -1 ≤ cos t ≤ 1 et -1 ≤ sin t ≤ 1."
          },
          {
            type: "regle",
            titre: "Tangente",
            texte: "Lorsque cos t ≠ 0, on définit :\n\ntan t = sin t / cos t.\n\nLa tangente n'est pas définie lorsque cos t = 0, c'est-à-dire pour t = π/2 + kπ, avec k entier relatif."
          }
        ]
      },

      {
        id: "m2-ch15-valeurs-signes",
        titre: "Valeurs et signes sur le cercle",
        blocs: [
          {
            type: "tableau",
            titre: "Valeurs remarquables",
            entetes: ["t", "0", "π/6", "π/4", "π/3", "π/2"],
            lignes: [
              ["cos t", "1", "√3/2", "√2/2", "1/2", "0"],
              ["sin t", "0", "1/2", "√2/2", "√3/2", "1"]
            ]
          },
          {
            type: "tableau",
            titre: "Points sur les axes",
            entetes: ["t", "0", "π/2", "π", "3π/2"],
            lignes: [
              ["cos t", "1", "0", "-1", "0"],
              ["sin t", "0", "1", "0", "-1"]
            ]
          },
          {
            type: "definition",
            titre: "Les quatre quadrants",
            texte: "Les axes partagent le plan en quatre régions, appelées quadrants.\n\n• Premier quadrant : abscisse et ordonnée positives.\n• Deuxième quadrant : abscisse négative, ordonnée positive.\n• Troisième quadrant : abscisse et ordonnée négatives.\n• Quatrième quadrant : abscisse positive, ordonnée négative.\n\nComme cos t est l'abscisse et sin t l'ordonnée, on peut en déduire leurs signes."
          },
          {
            type: "tableau",
            titre: "Signes hors des axes",
            entetes: ["Position de M", "cos t", "sin t"],
            lignes: [
              ["Premier quadrant", "+", "+"],
              ["Deuxième quadrant", "−", "+"],
              ["Troisième quadrant", "−", "−"],
              ["Quatrième quadrant", "+", "−"]
            ]
          },
          {
            type: "exemple",
            titre: "Déterminer des signes",
            texte: "Si π/2 < t < π, le point M est dans le deuxième quadrant.\n\nSon abscisse est négative et son ordonnée positive. Ainsi :\n\ncos t < 0 et sin t > 0.\n\nPar exemple, 2π/3 est compris entre π/2 et π : son cosinus est négatif et son sinus positif."
          },
          {
            type: "remarque",
            titre: "Sur les axes",
            texte: "Aux extrémités des quadrants, il faut lire directement les coordonnées du point.\n\nPar exemple, pour t = π/2, le point est (0 ; 1) : cos(π/2) = 0 et sin(π/2) = 1."
          }
        ]
      },

      {
        id: "m2-ch15-angles-associes",
        titre: "Angles associés et périodicité",
        blocs: [
          {
            type: "regle",
            titre: "Un tour supplémentaire",
            texte: "Pour tout entier relatif k :\n\ncos(t + 2kπ) = cos t ;\nsin(t + 2kπ) = sin t.\n\nLa tangente, lorsqu'elle est définie, vérifie aussi :\n\ntan(t + kπ) = tan t.\n\nOn dit que cosinus et sinus sont périodiques de période 2π et que la tangente est périodique de période π."
          },
          {
            type: "regle",
            titre: "Angles opposés",
            texte: "Les points associés à t et -t sont symétriques par rapport à l'axe des abscisses.\n\nLeurs abscisses sont égales et leurs ordonnées opposées :\n\ncos(-t) = cos t ;\nsin(-t) = -sin t.\n\nLorsque la tangente est définie : tan(-t) = -tan t."
          },
          {
            type: "regle",
            titre: "Angles π - t et π + t",
            texte: "Les symétries du cercle donnent :\n\ncos(π - t) = -cos t ;\nsin(π - t) = sin t.\n\ncos(π + t) = -cos t ;\nsin(π + t) = -sin t.\n\nCes formules permettent de retrouver des valeurs à partir d'un angle connu."
          },
          {
            type: "exemple",
            titre: "Calculer une valeur exacte",
            texte: "Comme 2π/3 = π - π/3 :\n\ncos(2π/3) = -cos(π/3) = -1/2 ;\nsin(2π/3) = sin(π/3) = √3/2.\n\nLe cosinus est négatif et le sinus positif, ce qui correspond bien au deuxième quadrant."
          },
          {
            type: "methode",
            titre: "Réduire une mesure",
            texte: "Pour retrouver une mesure comprise dans [0 ; 2π[, on ajoute ou on retranche des tours complets.\n\nExemple : 13π/6 = 12π/6 + π/6 = 2π + π/6.\n\nLe point associé à 13π/6 est donc le même que celui associé à π/6.\n\nAinsi cos(13π/6) = √3/2 et sin(13π/6) = 1/2."
          }
        ]
      },

      {
        id: "m2-ch15-equations",
        titre: "Premières équations trigonométriques",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre cos t = cos a",
            texte: "Sur le cercle, deux points ayant la même abscisse sont symétriques par rapport à l'axe des abscisses, ou sont confondus.\n\nAinsi :\n\ncos t = cos a équivaut à\n t = a + 2kπ ou t = -a + 2kπ,\navec k ∈ ℤ.\n\nSi l'on cherche les solutions dans un intervalle donné, on ne conserve que les mesures appartenant à cet intervalle."
          },
          {
            type: "methode",
            titre: "Résoudre sin t = sin a",
            texte: "Deux points du cercle ayant la même ordonnée sont symétriques par rapport à l'axe des ordonnées, ou sont confondus.\n\nAinsi :\n\nsin t = sin a équivaut à\n t = a + 2kπ ou t = π - a + 2kπ,\navec k ∈ ℤ."
          },
          {
            type: "exemple",
            titre: "Un exemple sur un tour",
            texte: "Résolvons cos t = 1/2 sur [0 ; 2π[.\n\nOn sait que cos(π/3) = 1/2. L'autre point de même abscisse est associé à -π/3, soit 5π/3 sur l'intervalle choisi.\n\nLes solutions sont donc π/3 et 5π/3."
          },
          {
            type: "remarque",
            titre: "Attention à l'intervalle",
            texte: "Sur [0 ; 2π[, 0 est inclus mais 2π est exclu : ces deux mesures correspondent au même point.\n\nDans une réponse sur ℝ, les solutions se décrivent avec un entier k. Dans une réponse sur un intervalle, il faut lister uniquement les valeurs qui appartiennent à cet intervalle."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Convertis en radians :\n\n1. 90°\n2. 60°\n3. 180°\n4. -45°",
        correction: "On multiplie chaque mesure par π/180.\n\n1. 90° = π/2.\n2. 60° = π/3.\n3. 180° = π.\n4. -45° = -π/4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donne les valeurs exactes :\n\n1. cos 0\n2. sin(π/2)\n3. cos π\n4. sin(3π/2)",
        correction: "Sur le cercle trigonométrique :\n\n1. cos 0 = 1.\n2. sin(π/2) = 1.\n3. cos π = -1.\n4. sin(3π/2) = -1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Convertis :\n\n1. 150° en radians.\n2. 225° en radians.\n3. 5π/6 radians en degrés.\n4. -π/3 radians en degrés.",
        correction: "1. 150 × π/180 = 5π/6.\n\n2. 225 × π/180 = 5π/4.\n\n3. (5π/6) × 180/π = 150°.\n\n4. (-π/3) × 180/π = -60°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On sait que π < t < 3π/2.\n\n1. Dans quel quadrant se trouve le point associé à t ?\n2. Donne le signe de cos t et de sin t.\n3. La tangente est-elle positive ou négative ?",
        correction: "1. Le point est dans le troisième quadrant.\n\n2. Son abscisse et son ordonnée sont négatives : cos t < 0 et sin t < 0.\n\n3. cos t n'est pas nul et tan t = sin t/cos t. Le quotient de deux nombres négatifs est positif : tan t > 0."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On considère les mesures π/4, 9π/4 et -7π/4.\n\n1. Montrer qu'elles correspondent au même point du cercle.\n2. Donner le cosinus et le sinus de chacune.",
        correction: "1. 9π/4 = π/4 + 2π et -7π/4 = π/4 - 2π. Ces mesures diffèrent donc de π/4 d'un nombre entier de tours.\n\n2. Elles ont le même cosinus et le même sinus que π/4 :\n\ncos = √2/2 et sin = √2/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Donne les valeurs exactes de :\n\n1. cos(-π/3)\n2. sin(-π/3)\n3. cos(2π/3)\n4. sin(2π/3)",
        correction: "1. cos(-π/3) = cos(π/3) = 1/2.\n\n2. sin(-π/3) = -sin(π/3) = -√3/2.\n\n3. 2π/3 = π - π/3, donc cos(2π/3) = -cos(π/3) = -1/2.\n\n4. sin(2π/3) = sin(π/3) = √3/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On sait que cos t = -3/5 et que π/2 < t < π.\n\n1. Détermine le signe de sin t.\n2. Calcule sin t exactement.\n3. Calcule tan t.",
        correction: "1. Le point associé à t est dans le deuxième quadrant. Son ordonnée est positive : sin t > 0.\n\n2. Avec cos² t + sin² t = 1 :\n\nsin² t = 1 - (-3/5)² = 1 - 9/25 = 16/25.\n\nComme sin t > 0, sin t = 4/5.\n\n3. cos t n'est pas nul. Donc tan t = (4/5)/(-3/5) = -4/3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Réduis chaque mesure à une mesure appartenant à [0 ; 2π[, puis donne son sinus et son cosinus :\n\n1. 13π/6\n2. -π/2\n3. 7π/3",
        correction: "1. 13π/6 = 2π + π/6. La mesure réduite est π/6. Son cosinus vaut √3/2 et son sinus vaut 1/2.\n\n2. -π/2 + 2π = 3π/2. La mesure réduite est 3π/2. Son cosinus vaut 0 et son sinus vaut -1.\n\n3. 7π/3 = 2π + π/3. La mesure réduite est π/3. Son cosinus vaut 1/2 et son sinus vaut √3/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résous sur [0 ; 2π[ :\n\n1. cos t = 1/2\n2. sin t = 1/2",
        correction: "1. cos(π/3) = 1/2. Les deux points du cercle ayant cette abscisse correspondent à π/3 et -π/3. Sur [0 ; 2π[, -π/3 s'écrit 5π/3.\n\nS = {π/3 ; 5π/3}.\n\n2. sin(π/6) = 1/2. L'autre point de même ordonnée correspond à π - π/6 = 5π/6.\n\nS = {π/6 ; 5π/6}."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère l'angle t = 11π/6.\n\n1. Exprime t en degrés et situe son point sur le cercle.\n2. Écris t sous la forme 2π - a, avec a un angle remarquable.\n3. Calcule cos t, sin t et tan t exactement.\n4. Résous cos x = cos t sur [0 ; 2π[.",
        correction: "1. (11π/6) × 180/π = 330°. Le point est dans le quatrième quadrant.\n\n2. 11π/6 = 12π/6 - π/6 = 2π - π/6. Il correspond au même point que -π/6.\n\n3. cos t = cos(-π/6) = cos(π/6) = √3/2.\n\nsin t = sin(-π/6) = -sin(π/6) = -1/2.\n\nComme cos t ≠ 0 : tan t = (-1/2)/(√3/2) = -1/√3 = -√3/3.\n\n4. cos x = cos t équivaut à x = t + 2kπ ou x = -t + 2kπ. Dans [0 ; 2π[, on obtient x = 11π/6 ou x = π/6.\n\nS = {π/6 ; 11π/6}."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un point M du cercle trigonométrique correspond à un angle t tel que sin t = -1/2 et cos t > 0.\n\n1. Dans quel quadrant se trouve M ?\n2. Détermine t dans l'intervalle [0 ; 2π[.\n3. Donne les coordonnées exactes de M.\n4. Donne toutes les mesures de cet angle orienté en radians.",
        correction: "1. sin t est l'ordonnée et cos t l'abscisse de M. L'ordonnée est négative et l'abscisse positive : M est dans le quatrième quadrant.\n\n2. L'angle de référence est π/6 car sin(π/6) = 1/2. Dans le quatrième quadrant, la mesure cherchée est 2π - π/6 = 11π/6.\n\n3. sin t = -1/2 et cos t = √3/2. Donc M(√3/2 ; -1/2).\n\n4. Toutes les mesures correspondant à ce point sont :\n\nt = 11π/6 + 2kπ, avec k ∈ ℤ."
      }
    ]
  }
]);
