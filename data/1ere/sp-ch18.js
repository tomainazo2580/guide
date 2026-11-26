enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch18",
    titre: "Chapitre 18 : Réflexion et réfraction de la lumière",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch18-propagation",
        titre: "1. Lumière et changement de milieu",
        blocs: [
          {
            type: "introduction",
            titre: "Observer sans se tromper",
            texte: "Une paille plongée dans l’eau semble brisée à la surface. La lumière provenant de la partie immergée change de direction en passant de l’eau à l’air : ce phénomène est la réfraction."
          },
          {
            type: "definition",
            titre: "Rayon lumineux",
            texte: "Un rayon lumineux est un modèle qui indique la direction et le sens de propagation de la lumière. Dans un milieu transparent homogène, la lumière se propage en ligne droite."
          },
          {
            type: "definition",
            titre: "Dioptre",
            texte: "Un dioptre est la surface de séparation entre deux milieux transparents. Au point où arrive un rayon, la normale est la droite perpendiculaire au dioptre."
          },
          {
            type: "definition",
            titre: "Angles",
            texte: "L’angle d’incidence i est l’angle entre le rayon incident et la normale. L’angle de réflexion r et l’angle de réfraction t sont eux aussi mesurés par rapport à la normale, et non par rapport à la surface."
          }
        ]
      },

      {
        id: "sp1-ch18-reflexion",
        titre: "2. Réflexion",
        blocs: [
          {
            type: "definition",
            titre: "Rayon réfléchi",
            texte: "Lorsqu’une partie de la lumière revient dans le milieu d’origine après avoir rencontré une surface, elle forme le rayon réfléchi."
          },
          {
            type: "regle",
            titre: "Lois de la réflexion",
            texte: "Le rayon incident, le rayon réfléchi et la normale au point d’incidence sont dans un même plan. L’angle de réflexion est égal à l’angle d’incidence : r = i."
          },
          {
            type: "schema",
            titre: "Réflexion sur une surface plane",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 300' role='img' aria-label='Un rayon incident arrive obliquement sur une surface horizontale et un rayon réfléchi repart de l’autre côté de la normale. Les angles avec la normale sont égaux.'><line x1='55' y1='220' x2='565' y2='220' stroke='#555' stroke-width='5'/><line x1='310' y1='35' x2='310' y2='255' stroke='#888' stroke-width='2' stroke-dasharray='6,5'/><line x1='150' y1='60' x2='310' y2='220' stroke='#267' stroke-width='3'/><polygon points='310,220 296,214 304,206' fill='#267'/><line x1='310' y1='220' x2='470' y2='60' stroke='#a33' stroke-width='3'/><polygon points='470,60 456,66 464,74' fill='#a33'/><circle cx='310' cy='220' r='5' fill='#222'/><path d='M310 175 A45 45 0 0 0 278 188' fill='none' stroke='#222' stroke-width='2'/><path d='M310 175 A45 45 0 0 1 342 188' fill='none' stroke='#222' stroke-width='2'/><text x='285' y='165' font-size='17'>i</text><text x='327' y='165' font-size='17'>r</text><text x='130' y='48' font-size='16'>incident</text><text x='455' y='48' font-size='16'>réfléchi</text><text x='320' y='50' font-size='16'>normale</text><text x='310' y='282' text-anchor='middle' font-size='16'>surface réfléchissante</text></svg>",
            legende: "Les angles i et r sont mesurés entre chaque rayon et la normale : ils sont égaux."
          },
          {
            type: "exemple",
            titre: "Angle de réflexion",
            texte: "Si un rayon arrive avec un angle d’incidence de 35°, son angle de réflexion est r = 35°. L’angle de 35° est mesuré entre le rayon et la normale."
          },
          {
            type: "remarque",
            titre: "Angle avec la surface",
            texte: "Si le rayon incident fait 20° avec une surface plane, il fait 90° − 20° = 70° avec la normale. Son angle de réflexion est donc 70°."
          }
        ]
      },

      {
        id: "sp1-ch18-refraction",
        titre: "3. Réfraction et loi de Snell-Descartes",
        blocs: [
          {
            type: "definition",
            titre: "Indice de réfraction",
            texte: "L’indice de réfraction n d’un milieu transparent est défini par n = c/v, où c est la célérité de la lumière dans le vide et v sa célérité dans le milieu. L’indice est sans unité. Dans les situations usuelles de ce chapitre, n est au moins égal à 1."
          },
          {
            type: "definition",
            titre: "Rayon réfracté",
            texte: "Le rayon réfracté est la partie de la lumière transmise dans le second milieu. Il peut changer de direction au passage de la surface, sauf notamment en incidence normale."
          },
          {
            type: "regle",
            titre: "Loi de la réfraction",
            texte: "Le rayon incident, le rayon réfracté et la normale sont dans un même plan. Si n1 et n2 sont les indices des milieux de départ et d’arrivée, les angles i et t vérifient : n1 sin(i) = n2 sin(t). Les deux angles sont mesurés par rapport à la normale."
          },
          {
            type: "schema",
            titre: "Réfraction vers un milieu plus réfringent",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 320' role='img' aria-label='Un rayon passe du milieu 1 au milieu 2, d’indice supérieur. Il se rapproche de la normale : l’angle de réfraction est inférieur à l’angle d’incidence.'><rect x='20' y='160' width='580' height='140' fill='#e6f4ff'/><line x1='20' y1='160' x2='600' y2='160' stroke='#555' stroke-width='3'/><line x1='310' y1='20' x2='310' y2='295' stroke='#888' stroke-width='2' stroke-dasharray='6,5'/><line x1='175' y1='25' x2='310' y2='160' stroke='#267' stroke-width='3'/><polygon points='310,160 296,154 304,146' fill='#267'/><line x1='310' y1='160' x2='365' y2='295' stroke='#a33' stroke-width='3'/><polygon points='365,295 354,286 364,282' fill='#a33'/><circle cx='310' cy='160' r='5' fill='#222'/><path d='M310 120 A40 40 0 0 0 282 132' fill='none' stroke='#222' stroke-width='2'/><path d='M310 200 A40 40 0 0 0 325 197' fill='none' stroke='#222' stroke-width='2'/><text x='285' y='112' font-size='17'>i</text><text x='327' y='213' font-size='17'>t</text><text x='45' y='45' font-size='16'>milieu 1 : n1</text><text x='45' y='190' font-size='16'>milieu 2 : n2 &gt; n1</text><text x='335' y='35' font-size='16'>normale</text></svg>",
            legende: "Lorsque n2 > n1 et que l’incidence est oblique, le rayon réfracté se rapproche de la normale : t < i."
          },
          {
            type: "exemple",
            titre: "De l’air vers le verre",
            texte: "Un rayon passe de l’air d’indice n1 = 1,00 vers un verre d’indice n2 = 1,50 avec i = 30°. La loi donne sin(t) = n1 sin(i)/n2 = 1,00 × 0,50/1,50 = 0,333. Donc t ≈ 19,5°. Le rayon se rapproche de la normale."
          },
          {
            type: "methode",
            titre: "Calculer un angle réfracté",
            texte: "1. Repérer le milieu de départ et celui d’arrivée. 2. Vérifier que l’angle donné est mesuré par rapport à la normale. 3. Écrire n1 sin(i) = n2 sin(t). 4. Calculer sin(t), puis utiliser la fonction sinus inverse avec la calculatrice en degrés. 5. Vérifier la cohérence du résultat."
          },
          {
            type: "remarque",
            titre: "Incidence normale",
            texte: "Si i = 0°, le rayon transmis n’est pas dévié : t = 0°. Sa célérité peut néanmoins changer lorsqu’il passe d’un milieu à l’autre."
          }
        ]
      },

      {
        id: "sp1-ch18-reflexion-totale",
        titre: "4. Réflexion totale",
        blocs: [
          {
            type: "definition",
            titre: "Condition",
            texte: "Lorsqu’un rayon passe d’un milieu d’indice n1 vers un milieu d’indice plus faible n2, il existe un angle limite ilim tel que sin(ilim) = n2/n1. Pour i supérieur à ilim, il n’y a pas de rayon réfracté propagatif dans le second milieu : la réflexion est totale dans le modèle étudié."
          },
          {
            type: "remarque",
            titre: "À l’angle limite",
            texte: "Pour i = ilim, la loi de réfraction donne t = 90° : le rayon réfracté limite est tangent à la surface. La réflexion totale correspond aux angles d’incidence strictement supérieurs à ilim."
          },
          {
            type: "exemple",
            titre: "Du verre vers l’air",
            texte: "Pour un passage du verre d’indice 1,50 vers l’air d’indice 1,00 : sin(ilim) = 1,00/1,50 = 0,667, donc ilim ≈ 41,8°. Une incidence de 50° donne une réflexion totale."
          },
          {
            type: "methode",
            titre: "Tester la réflexion totale",
            texte: "1. Vérifier que le rayon passe d’un indice plus grand vers un indice plus petit. 2. Calculer ilim = arcsin(n2/n1). 3. Comparer i à ilim. Si i > ilim, il y a réflexion totale."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ne regarde jamais directement le Soleil ni un faisceau laser. Les schémas de rayons sont des modèles de propagation, pas des expériences à réaliser."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un rayon arrive sur une surface plane avec un angle d’incidence de 42° par rapport à la normale. Quel est son angle de réflexion ?",
        correction: "La loi de la réflexion donne r = i = 42°."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un rayon incident fait un angle de 25° avec une surface plane. Calcule son angle d’incidence, mesuré par rapport à la normale.",
        correction: "La normale est perpendiculaire à la surface. L’angle d’incidence vaut donc 90° − 25° = 65°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "La célérité de la lumière dans le vide est c = 3,0 × 10⁸ m·s⁻¹. Dans un milieu transparent, sa célérité est v = 2,0 × 10⁸ m·s⁻¹. Calcule l’indice de réfraction du milieu.",
        correction: "n = c/v = (3,0 × 10⁸)/(2,0 × 10⁸) = 1,5."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un rayon passe de l’air d’indice 1,00 vers un milieu d’indice 1,50 avec un angle d’incidence de 30°. Calcule l’angle de réfraction.",
        correction: "La loi de Snell-Descartes donne 1,00 sin(30°) = 1,50 sin(t). Donc sin(t) = 0,50/1,50 = 0,333 et t ≈ 19,5°."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un rayon passe de l’air d’indice 1,00 dans un liquide transparent. L’angle d’incidence vaut 45° et l’angle de réfraction 32°. Détermine l’indice du liquide, arrondi à deux décimales.",
        correction: "n1 sin(i) = n2 sin(t), donc n2 = n1 sin(i)/sin(t) = sin(45°)/sin(32°) ≈ 0,707/0,530 ≈ 1,33."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un rayon se propage dans l’eau d’indice 1,33 et arrive sur la surface eau-air. L’air a un indice de 1,00. Calcule l’angle limite, puis indique si une incidence de 60° produit une réflexion totale.",
        correction: "sin(ilim) = 1,00/1,33 ≈ 0,752, donc ilim ≈ 48,8°. Comme 60° > 48,8°, il y a réflexion totale."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un rayon passe d’un verre d’indice 1,50 vers l’air d’indice 1,00 avec une incidence de 30°. Calcule l’angle réfracté. Puis indique ce qui se passe si l’incidence devient 50°.",
        correction: "Pour i = 30° : 1,50 sin(30°) = 1,00 sin(t), donc sin(t) = 0,75 et t ≈ 48,6°. L’angle limite vaut arcsin(1,00/1,50) ≈ 41,8°. Pour i = 50°, supérieur à l’angle limite, la réflexion est totale."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un rayon lumineux passe de l’air d’indice 1,00 vers une plaque de verre d’indice 1,50 dont les deux faces sont parallèles. Son angle d’incidence sur la première face est 45°. Calcule l’angle dans le verre, puis l’angle de sortie dans l’air par rapport à la normale à la seconde face. On néglige les réflexions multiples.",
        correction: "À l’entrée : sin(t) = sin(45°)/1,50 ≈ 0,471, donc t ≈ 28,1°. Les faces étant parallèles, l’angle d’incidence sur la seconde face est aussi 28,1°. À la sortie : 1,50 sin(28,1°) = 1,00 sin(s), d’où s ≈ 45°. Le rayon émergent est parallèle au rayon incident, mais il peut être décalé."
      }
    ]
  }
]);
