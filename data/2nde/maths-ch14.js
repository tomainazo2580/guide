// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 14 : trigonométrie dans le triangle rectangle.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-trigonometrie-triangle-rectangle",
    titre: "Chapitre 14 : Trigonométrie dans le triangle rectangle",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch14-reperage",
        titre: "Repérer les côtés du triangle",
        blocs: [
          {
            type: "introduction",
            titre: "À quoi sert la trigonométrie ?",
            texte: "La trigonométrie relie les angles et les longueurs d'un triangle rectangle. Elle permet notamment de calculer une longueur ou un angle lorsqu'on connaît certaines mesures.\n\nAvant de choisir une formule, il faut repérer l'angle étudié et les côtés du triangle."
          },
          {
            type: "definition",
            titre: "Hypoténuse, côté opposé et côté adjacent",
            texte: "Dans un triangle rectangle :\n\n• l'hypoténuse est le côté opposé à l'angle droit. C'est le plus long côté ;\n• pour un angle aigu choisi, le côté opposé est celui qui ne touche pas cet angle ;\n• le côté adjacent est le côté qui touche cet angle et qui n'est pas l'hypoténuse.\n\nLes rôles « opposé » et « adjacent » changent si l'on choisit l'autre angle aigu. L'hypoténuse, elle, ne change pas."
          },
          {
            type: "schema",
            titre: "Triangle ABC rectangle en B",
            svg: "<svg viewBox='0 0 360 215' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Triangle ABC rectangle en B. Pour l’angle A, AC est l’hypoténuse, AB le côté adjacent et BC le côté opposé'><rect x='5' y='5' width='350' height='205' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><path d='M45 170 L290 170 L290 30 Z' fill='#dbeafe' stroke='#1d4ed8' stroke-width='3'/><path d='M273 170 L273 153 L290 153' fill='none' stroke='#334155' stroke-width='2'/><path d='M85 170 A40 40 0 0 0 80 150' fill='none' stroke='#dc2626' stroke-width='2'/><text x='25' y='190' font-size='16' fill='#334155'>A</text><text x='294' y='190' font-size='16' fill='#334155'>B</text><text x='295' y='30' font-size='16' fill='#334155'>C</text><text x='145' y='193' font-size='13' fill='#1e40af'>adjacent à A</text><text x='294' y='105' font-size='13' fill='#1e40af'>opposé</text><text x='110' y='78' font-size='13' fill='#1e40af'>hypoténuse AC</text><text x='82' y='157' font-size='14' fill='#b91c1c'>α</text></svg>",
            legende: "Pour l'angle α en A : AC est l'hypoténuse, AB est le côté adjacent et BC est le côté opposé."
          },
          {
            type: "exemple",
            titre: "Changer d'angle",
            texte: "Dans le triangle ABC rectangle en B :\n\n• pour l'angle en A, le côté opposé est BC et le côté adjacent est AB ;\n• pour l'angle en C, le côté opposé est AB et le côté adjacent est BC.\n\nDans les deux cas, AC reste l'hypoténuse."
          },
          {
            type: "rappel",
            titre: "Théorème de Pythagore",
            texte: "Dans un triangle ABC rectangle en B :\n\nAC² = AB² + BC².\n\nCe théorème permet de calculer un côté si les deux autres sont connus. Il complète les outils trigonométriques."
          }
        ]
      },

      {
        id: "m2-ch14-rapports",
        titre: "Sinus, cosinus et tangente",
        blocs: [
          {
            type: "definition",
            titre: "Les trois rapports",
            texte: "Dans un triangle rectangle, pour un angle aigu α :\n\ncos α = longueur du côté adjacent / longueur de l'hypoténuse ;\n\nsin α = longueur du côté opposé / longueur de l'hypoténuse ;\n\ntan α = longueur du côté opposé / longueur du côté adjacent.\n\nCes rapports sont des nombres sans unité, à condition que les longueurs soient exprimées dans la même unité."
          },
          {
            type: "tableau",
            titre: "Pour l'angle A du triangle ABC rectangle en B",
            entetes: ["Rapport", "Formule"],
            lignes: [
              ["Cosinus", "cos A = AB/AC"],
              ["Sinus", "sin A = BC/AC"],
              ["Tangente", "tan A = BC/AB"]
            ]
          },
          {
            type: "exemple",
            titre: "Un triangle de côtés 3, 4 et 5",
            texte: "Soit ABC rectangle en B, avec AB = 4 cm, BC = 3 cm et AC = 5 cm.\n\nPour l'angle A :\n\ncos A = 4/5 = 0,8 ;\nsin A = 3/5 = 0,6 ;\ntan A = 3/4 = 0,75.\n\nPour l'angle C, les côtés opposé et adjacent sont échangés : sin C = 4/5 et cos C = 3/5."
          },
          {
            type: "regle",
            titre: "Deux relations utiles",
            texte: "Pour un angle aigu α :\n\ncos² α + sin² α = 1 ;\n\ntan α = sin α / cos α.\n\nLa première relation découle du théorème de Pythagore. Dans un triangle rectangle, cos α est non nul pour un angle aigu, donc la seconde formule est bien définie."
          },
          {
            type: "methode",
            titre: "Comprendre la première relation",
            texte: "Dans le triangle ABC rectangle en B, pour l'angle A :\n\ncos² A + sin² A\n= AB²/AC² + BC²/AC²\n= (AB² + BC²)/AC².\n\nD'après Pythagore, AB² + BC² = AC². Donc cos² A + sin² A = 1."
          },
          {
            type: "remarque",
            titre: "Une vérification utile",
            texte: "Pour un angle aigu d'un triangle rectangle, le sinus et le cosinus sont strictement compris entre 0 et 1.\n\nSi un calcul donne sin α = 1,4, il faut vérifier le choix des côtés ou les calculs : un tel résultat n'est pas possible pour cet angle."
          }
        ]
      },

      {
        id: "m2-ch14-longueurs",
        titre: "Calculer une longueur",
        blocs: [
          {
            type: "methode",
            titre: "Choisir le bon rapport",
            texte: "1. Fais un schéma et indique l'angle droit.\n2. Repère l'angle connu.\n3. Identifie le côté connu et le côté recherché par rapport à cet angle.\n4. Choisis le rapport qui utilise ces deux côtés.\n5. Écris l'égalité, isole la longueur inconnue et calcule.\n6. Vérifie l'unité et la cohérence du résultat."
          },
          {
            type: "exemple",
            titre: "Calculer le côté opposé",
            texte: "ABC est rectangle en B. On connaît AC = 10 cm et l'angle A = 30° ; on cherche BC.\n\nAC est l'hypoténuse et BC est opposé à A. On utilise donc le sinus :\n\nsin 30° = BC/10.\n\nComme sin 30° = 1/2 :\nBC = 10 × 1/2 = 5 cm."
          },
          {
            type: "exemple",
            titre: "Calculer l'hypoténuse",
            texte: "Dans un triangle rectangle, un angle aigu mesure 60° et son côté adjacent mesure 4 cm. On cherche l'hypoténuse h.\n\ncos 60° = 4/h.\n\nComme cos 60° = 1/2 :\n1/2 = 4/h, donc h = 8 cm.\n\nL'hypoténuse est bien plus longue que le côté de 4 cm."
          },
          {
            type: "exemple",
            titre: "Avec la calculatrice",
            texte: "ABC est rectangle en B, avec AB = 8 cm et l'angle A = 40°. On cherche BC.\n\nBC est opposé à A et AB est adjacent :\n\ntan 40° = BC/8.\n\nDonc BC = 8 × tan 40° ≈ 6,7 cm au dixième.\n\nLa valeur exacte peut être laissée sous la forme 8 tan 40°."
          },
          {
            type: "remarque",
            titre: "Vérifier les unités",
            texte: "Les longueurs utilisées dans un même rapport doivent être exprimées dans la même unité.\n\nPar exemple, avant de diviser 2 m par 50 cm, on peut convertir 2 m en 200 cm : le rapport vaut 200/50 = 4."
          }
        ]
      },

      {
        id: "m2-ch14-angles",
        titre: "Calculer un angle",
        blocs: [
          {
            type: "methode",
            titre: "Utiliser une fonction réciproque",
            texte: "Si l'on connaît un rapport trigonométrique, la calculatrice permet de retrouver l'angle aigu :\n\n• si cos α = k, on utilise arccos(k), souvent noté cos⁻¹ sur la calculatrice ;\n• si sin α = k, on utilise arcsin(k), souvent noté sin⁻¹ ;\n• si tan α = k, on utilise arctan(k), souvent noté tan⁻¹.\n\nCes notations désignent ici des fonctions permettant de retrouver l'angle ; cos⁻¹(k) ne signifie pas 1/cos(k)."
          },
          {
            type: "exemple",
            titre: "À partir de deux côtés",
            texte: "ABC est rectangle en B, avec AB = 4 cm et BC = 3 cm. Cherchons l'angle A.\n\nPour A, BC est opposé et AB adjacent :\n\ntan A = 3/4 = 0,75.\n\nDonc A = arctan(0,75) ≈ 36,9° au dixième de degré.\n\nL'autre angle aigu vaut environ 90° - 36,9° = 53,1°."
          },
          {
            type: "remarque",
            titre: "Régler la calculatrice",
            texte: "Pour obtenir ou utiliser des angles en degrés, règle la calculatrice en mode degré, souvent indiqué DEG.\n\nLe mode RAD utilise une autre unité, le radian. Les radians seront étudiés avec le cercle trigonométrique.\n\nVérification simple : en mode degré, sin(30) doit donner 0,5."
          },
          {
            type: "regle",
            titre: "Angles complémentaires",
            texte: "Dans un triangle rectangle, les deux angles aigus ont une somme de 90°.\n\nSi α et β sont ces deux angles :\n\nβ = 90° - α ;\nsin α = cos β ;\ncos α = sin β.\n\nCes relations s'expliquent parce que le côté opposé à l'un est adjacent à l'autre."
          }
        ]
      },

      {
        id: "m2-ch14-valeurs",
        titre: "Valeurs remarquables",
        blocs: [
          {
            type: "tableau",
            titre: "Angles de 30°, 45° et 60°",
            entetes: ["Angle α", "sin α", "cos α", "tan α"],
            lignes: [
              ["30°", "1/2", "√3/2", "√3/3"],
              ["45°", "√2/2", "√2/2", "1"],
              ["60°", "√3/2", "1/2", "√3"]
            ]
          },
          {
            type: "methode",
            titre: "Retrouver les valeurs de 45°",
            texte: "Considérons un triangle rectangle isocèle dont les deux côtés de l'angle droit mesurent 1.\n\nSes deux angles aigus mesurent chacun 45°. Par Pythagore, son hypoténuse mesure √2.\n\nAinsi : sin 45° = cos 45° = 1/√2 = √2/2, et tan 45° = 1/1 = 1."
          },
          {
            type: "methode",
            titre: "Retrouver les valeurs de 30° et 60°",
            texte: "Dans un triangle équilatéral de côté 2, on trace une hauteur. Elle partage le triangle en deux triangles rectangles.\n\nDans l'un d'eux, l'hypoténuse vaut 2 et la moitié de la base vaut 1. Par Pythagore, la hauteur vaut √(2² - 1²) = √3.\n\nLes angles aigus mesurent 30° et 60°. On retrouve ainsi, par exemple, sin 30° = 1/2 et cos 30° = √3/2."
          },
          {
            type: "remarque",
            titre: "Valeur exacte ou approchée",
            texte: "√3/2 est une valeur exacte de cos 30°. En revanche, 0,866 est une valeur approchée.\n\nOn écrit cos 30° = √3/2 et cos 30° ≈ 0,866."
          }
        ]
      },

      {
        id: "m2-ch14-problemes",
        titre: "Modéliser une situation",
        blocs: [
          {
            type: "methode",
            titre: "De la situation au triangle",
            texte: "1. Représente les points et indique les mesures connues.\n2. Justifie ou utilise l'angle droit fourni par l'énoncé.\n3. Repère l'angle étudié et les côtés utiles.\n4. Choisis un rapport trigonométrique.\n5. Calcule, puis réponds avec l'unité et la précision demandées.\n\nUn dessin aide à comprendre, mais ses longueurs apparentes ne remplacent pas les données de l'énoncé."
          },
          {
            type: "exemple",
            titre: "Hauteur d'un objet",
            texte: "Un observateur se trouve à 12 m du pied d'un poteau vertical. Depuis un point situé au niveau du pied du poteau, il voit le sommet sous un angle de 45° par rapport au sol horizontal.\n\nLe poteau et le sol forment un angle droit. Si h est la hauteur du poteau :\n\ntan 45° = h/12.\n\nComme tan 45° = 1, on obtient h = 12 m.\n\nDans une situation réelle, il faudrait tenir compte de la hauteur des yeux si elle n'était pas négligeable."
          },
          {
            type: "remarque",
            titre: "Ne pas utiliser la formule sans triangle rectangle",
            texte: "Les rapports présentés dans ce chapitre concernent un angle aigu d'un triangle rectangle.\n\nSi le triangle du problème n'est pas rectangle, on ne peut pas appliquer directement ces formules sans construire et justifier un triangle rectangle adapté."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "ABC est un triangle rectangle en B.\n\n1. Quelle est son hypoténuse ?\n2. Quel est le côté opposé à l'angle A ?\n3. Quel est le côté adjacent à l'angle C, autre que l'hypoténuse ?",
        correction: "1. L'hypoténuse est AC : elle est opposée à l'angle droit en B.\n\n2. Le côté opposé à l'angle A est BC.\n\n3. Pour l'angle C, le côté adjacent autre que l'hypoténuse est BC."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "ABC est rectangle en B, avec AB = 3 cm, BC = 4 cm et AC = 5 cm.\n\nCalcule sin A, cos A et tan A.",
        correction: "Pour l'angle A, BC est opposé, AB est adjacent et AC est l'hypoténuse.\n\nsin A = BC/AC = 4/5.\ncos A = AB/AC = 3/5.\ntan A = BC/AB = 4/3."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "DEF est rectangle en E. On sait que DF = 12 cm et que l'angle D mesure 30°.\n\n1. Identifie l'hypoténuse et le côté opposé à D.\n2. Calcule EF exactement.",
        correction: "1. DF est l'hypoténuse. Le côté opposé à l'angle D est EF.\n\n2. sin D = EF/DF, donc sin 30° = EF/12.\n\nComme sin 30° = 1/2, EF = 12 × 1/2 = 6 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un triangle rectangle, un angle aigu α mesure 45° et son côté adjacent mesure 7 cm.\n\n1. Calcule le côté opposé à α.\n2. Calcule l'hypoténuse exactement.",
        correction: "1. tan 45° = opposé/7. Comme tan 45° = 1, le côté opposé mesure 7 cm.\n\n2. Par Pythagore, si h est l'hypoténuse : h² = 7² + 7² = 98.\n\nDonc h = √98 = 7√2 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "ABC est rectangle en B. On donne AB = 6 cm et BC = 8 cm.\n\n1. Calcule AC.\n2. Détermine sin A et cos A.\n3. Calcule l'angle A au dixième de degré.",
        correction: "1. D'après Pythagore : AC² = 6² + 8² = 36 + 64 = 100. Comme AC est une longueur, AC = 10 cm.\n\n2. Pour l'angle A, BC est opposé et AB adjacent. Donc sin A = 8/10 = 4/5 et cos A = 6/10 = 3/5.\n\n3. tan A = 8/6 = 4/3. En mode degré, A = arctan(4/3) ≈ 53,1°."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pour un angle aigu α, on sait que sin α = 3/5.\n\n1. Calcule cos² α.\n2. Déduis-en cos α.\n3. Calcule tan α.",
        correction: "1. La relation cos² α + sin² α = 1 donne :\ncos² α = 1 - (3/5)² = 1 - 9/25 = 16/25.\n\n2. α est aigu, donc cos α est positif. Ainsi cos α = √(16/25) = 4/5.\n\n3. tan α = sin α/cos α = (3/5)/(4/5) = 3/4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "MNP est rectangle en N. L'angle M mesure 60° et MN = 5 cm.\n\n1. Calcule MP exactement.\n2. Calcule NP exactement.\n3. Vérifie tes résultats à l'aide de Pythagore.",
        correction: "1. MN est adjacent à M et MP est l'hypoténuse. Donc cos 60° = 5/MP. Comme cos 60° = 1/2, MP = 10 cm.\n\n2. NP est opposé à M. Ainsi tan 60° = NP/5. Donc NP = 5√3 cm.\n\n3. MN² + NP² = 5² + (5√3)² = 25 + 75 = 100 = 10² = MP². Les résultats sont cohérents."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un triangle ABC est rectangle en B. On sait que l'angle A mesure 35° et que AC = 9 cm.\n\n1. Calcule AB au dixième de centimètre.\n2. Calcule BC au dixième de centimètre.\n3. Donne la mesure de l'angle C.",
        correction: "1. AB est adjacent à A et AC est l'hypoténuse. Donc AB = 9 cos 35° ≈ 7,4 cm.\n\n2. BC est opposé à A. Donc BC = 9 sin 35° ≈ 5,2 cm.\n\n3. Les deux angles aigus sont complémentaires : C = 90° - 35° = 55°.\n\nLa calculatrice doit être réglée en degrés pour les approximations."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un poteau vertical est fixé sur un sol horizontal. Depuis un point du sol situé à 15 m du pied du poteau, on observe son sommet sous un angle de 40° par rapport au sol.\n\nOn suppose que le point d'observation est au niveau du sol.\n\n1. Fais un schéma et précise pourquoi le triangle est rectangle.\n2. Exprime la hauteur h du poteau à l'aide d'une fonction trigonométrique.\n3. Calcule h au dixième de mètre.\n4. Une personne affirme que h vaut 15 cos 40°. Explique son erreur.",
        correction: "1. On note P le pied du poteau, S son sommet et O le point d'observation. Le poteau est vertical et le sol horizontal : PS est perpendiculaire à OP. Le triangle OPS est rectangle en P.\n\n2. Pour l'angle O de 40°, la hauteur PS = h est le côté opposé et OP = 15 m est le côté adjacent. Donc tan 40° = h/15, soit h = 15 tan 40°.\n\n3. En mode degré, h ≈ 12,6 m au dixième.\n\n4. Le cosinus relie le côté adjacent à l'hypoténuse. Ici, la hauteur recherchée est le côté opposé et 15 m est le côté adjacent : c'est la tangente qui relie directement ces deux longueurs."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un triangle ABC rectangle en B, on donne AC = 20 cm et sin A = 3/5.\n\n1. Calcule BC et AB.\n2. Calcule cos A et tan A.\n3. Détermine les angles A et C au dixième de degré.\n4. Vérifie que sin A = cos C à l'aide des longueurs.",
        correction: "1. Pour l'angle A, sin A = BC/AC. Donc BC/20 = 3/5, d'où BC = 12 cm.\n\nPar Pythagore : AB² = AC² - BC² = 400 - 144 = 256. Donc AB = 16 cm.\n\n2. cos A = AB/AC = 16/20 = 4/5. De plus, tan A = BC/AB = 12/16 = 3/4.\n\n3. En mode degré, A = arcsin(3/5) ≈ 36,9°. L'autre angle aigu vaut C = 90° - A ≈ 53,1°.\n\n4. Pour l'angle C, BC est le côté adjacent et AC l'hypoténuse. Donc cos C = BC/AC = 12/20 = 3/5 = sin A."
      }
    ]
  }
]);
