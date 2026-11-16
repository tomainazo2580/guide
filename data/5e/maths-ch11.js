enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch11",
    titre: "Chapitre 11 : Angles et droites parallèles",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch11-lecon1",
        titre: "1. Reconnaître et nommer un angle",
        blocs: [
          {
            type: "definition",
            titre: "Un angle",
            texte: "Un angle est formé par deux demi-droites de même origine. Cette origine est le sommet de l’angle ; les demi-droites sont ses côtés."
          },
          {
            type: "exemple",
            titre: "Nommer un angle",
            texte: "Si les demi-droites [OA) et [OB) forment un angle de sommet O, on le note AÔB ou BÔA. La lettre du sommet est toujours au milieu."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Dans l’angle AÔB, le sommet est O, pas A ni B. Les côtés sont les demi-droites [OA) et [OB)."
          },
          {
            type: "definition",
            titre: "La mesure",
            texte: "On mesure habituellement un angle en degrés, notés °. Le rapporteur permet de mesurer ou de construire un angle."
          }
        ]
      },

      {
        id: "maths5-ch11-lecon2",
        titre: "2. Mesurer et construire un angle",
        blocs: [
          {
            type: "methode",
            titre: "Mesurer avec un rapporteur",
            texte: "1. Place le centre du rapporteur sur le sommet de l’angle. 2. Aligne la graduation 0° avec l’un des côtés. 3. Lis la graduation où passe l’autre côté. 4. Utilise la bonne série de graduations : celle qui commence à 0° sur le premier côté."
          },
          {
            type: "exemple",
            titre: "Choisir la bonne graduation",
            texte: "Si un côté passe par 0° et l’autre par 60° sur la même série de graduations, l’angle mesure 60°. Vérifie que la lecture correspond à l’ouverture observée : 60° est inférieur à un angle droit."
          },
          {
            type: "methode",
            titre: "Construire un angle de 70°",
            texte: "1. Trace une demi-droite [OA). 2. Place le centre du rapporteur sur O et aligne son 0° sur [OA). 3. Fais une marque à 70°. 4. Trace la demi-droite d’origine O passant par cette marque et place un point B dessus. L’angle AÔB mesure 70°."
          },
          {
            type: "remarque",
            titre: "Longueur des côtés",
            texte: "La mesure d’un angle dépend de son ouverture, pas de la longueur des traits dessinés. On peut prolonger un côté à la règle pour mieux lire le rapporteur."
          }
        ]
      },

      {
        id: "maths5-ch11-lecon3",
        titre: "3. Les différents angles",
        blocs: [
          {
            type: "tableau",
            titre: "Reconnaître les angles",
            entetes: ["Nom", "Mesure", "Exemple"],
            lignes: [
              ["Angle nul", "0°", "0°"],
              ["Angle aigu", "Entre 0° et 90°, sans les bornes", "35°"],
              ["Angle droit", "90°", "90°"],
              ["Angle obtus", "Entre 90° et 180°, sans les bornes", "120°"],
              ["Angle plat", "180°", "180°"]
            ]
          },
          {
            type: "exemple",
            titre: "Deux angles à classer",
            texte: "Un angle de 48° est aigu car 0° < 48° < 90°. Un angle de 135° est obtus car 90° < 135° < 180°."
          },
          {
            type: "remarque",
            titre: "Un petit carré",
            texte: "Sur une figure, un petit carré placé au sommet indique généralement un angle droit. Deux droites qui se coupent en formant un angle droit sont perpendiculaires."
          }
        ]
      },

      {
        id: "maths5-ch11-lecon4",
        titre: "4. Angles complémentaires, supplémentaires et adjacents",
        blocs: [
          {
            type: "definition",
            titre: "Angles complémentaires",
            texte: "Deux angles sont complémentaires lorsque la somme de leurs mesures vaut 90°. Par exemple, 35° et 55° sont complémentaires."
          },
          {
            type: "definition",
            titre: "Angles supplémentaires",
            texte: "Deux angles sont supplémentaires lorsque la somme de leurs mesures vaut 180°. Par exemple, 70° et 110° sont supplémentaires."
          },
          {
            type: "definition",
            titre: "Angles adjacents",
            texte: "Deux angles sont adjacents s’ils ont le même sommet, un côté commun et s’ils sont situés de part et d’autre de ce côté commun, sans se superposer."
          },
          {
            type: "exemple",
            titre: "Sur une ligne droite",
            texte: "Si deux angles adjacents forment ensemble un angle plat, ils sont supplémentaires. Si l’un mesure 65°, l’autre mesure 180° − 65° = 115°."
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Deux angles complémentaires ou supplémentaires ne sont pas forcément adjacents : ils peuvent être dessinés à des endroits différents."
          }
        ]
      },

      {
        id: "maths5-ch11-lecon5",
        titre: "5. Angles opposés par le sommet",
        blocs: [
          {
            type: "definition",
            titre: "Deux droites sécantes",
            texte: "Deux droites sécantes se coupent en un point. Elles forment quatre angles autour de ce point."
          },
          {
            type: "schema",
            titre: "Deux droites sécantes en O",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 220' role='img' aria-label='Deux droites se coupent en O. Les angles AOB et COD sont opposés par le sommet'><line x1='35' y1='110' x2='365' y2='110' stroke='#333' stroke-width='3'/><line x1='80' y1='195' x2='320' y2='25' stroke='#333' stroke-width='3'/><circle cx='200' cy='110' r='4' fill='#333'/><path d='M240 110 A40 40 0 0 0 233 87' fill='none' stroke='#c43b3b' stroke-width='3'/><path d='M160 110 A40 40 0 0 0 167 133' fill='none' stroke='#c43b3b' stroke-width='3'/><g font-size='19' fill='#222'><text x='370' y='115'>A</text><text x='320' y='22'>B</text><text x='18' y='115'>C</text><text x='62' y='207'>D</text><text x='206' y='132'>O</text></g></svg>",
            legende: "Les angles AÔB et CÔD sont opposés par le sommet : ils ont la même mesure."
          },
          {
            type: "definition",
            titre: "Opposés par le sommet",
            texte: "Deux angles opposés par le sommet sont formés par deux droites sécantes et se trouvent l’un en face de l’autre."
          },
          {
            type: "regle",
            titre: "Propriété",
            texte: "Deux angles opposés par le sommet ont la même mesure."
          },
          {
            type: "exemple",
            titre: "Calculer un angle",
            texte: "Sur le schéma, si AÔB mesure 40°, alors CÔD mesure aussi 40°. Un angle adjacent à AÔB qui forme avec lui un angle plat mesure 180° − 40° = 140°."
          }
        ]
      },

      {
        id: "maths5-ch11-lecon6",
        titre: "6. Parallèles coupées par une sécante",
        blocs: [
          {
            type: "definition",
            titre: "Une sécante à deux droites",
            texte: "Une sécante est une droite qui coupe deux autres droites. Dans le schéma suivant, la droite oblique coupe les droites horizontales (d) et (d’)."
          },
          {
            type: "schema",
            titre: "Deux parallèles et une sécante",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 430 250' role='img' aria-label='Deux parallèles coupées par une sécante. Les angles 1 et 2 sont correspondants. Les angles 3 et 4 sont alternes-internes.'><line x1='25' y1='70' x2='405' y2='70' stroke='#333' stroke-width='3'/><line x1='25' y1='180' x2='405' y2='180' stroke='#333' stroke-width='3'/><line x1='90' y1='235' x2='330' y2='15' stroke='#555' stroke-width='3'/><g font-size='20' fill='#222'><text x='28' y='60'>(d)</text><text x='28' y='170'>(d’)</text><text x='290' y='57' fill='#b32626'>1</text><text x='170' y='167' fill='#b32626'>2</text><text x='280' y='97' fill='#1455a0'>3</text><text x='120' y='167' fill='#1455a0'>4</text></g></svg>",
            legende: "Les angles rouges 1 et 2 sont correspondants. Les angles bleus 3 et 4 sont alternes-internes."
          },
          {
            type: "definition",
            titre: "Angles correspondants",
            texte: "Deux angles correspondants occupent la même position aux deux intersections de la sécante avec les droites : par exemple, tous les deux au-dessus de leur droite et du même côté de la sécante."
          },
          {
            type: "definition",
            titre: "Angles alternes-internes",
            texte: "Deux angles alternes-internes sont situés entre les deux droites et de part et d’autre de la sécante."
          },
          {
            type: "regle",
            titre: "Lorsque les droites sont parallèles",
            texte: "Si deux droites parallèles sont coupées par une sécante, les angles correspondants ont la même mesure. Les angles alternes-internes ont également la même mesure."
          },
          {
            type: "exemple",
            titre: "Utiliser la propriété",
            texte: "Sur le schéma, si l’angle 1 mesure 60°, l’angle correspondant 2 mesure aussi 60°, car (d) et (d’) sont parallèles."
          },
          {
            type: "remarque",
            titre: "La condition est importante",
            texte: "On ne peut pas utiliser ces égalités simplement parce qu’une figure semble parallèle : il faut que le parallélisme soit donné ou démontré."
          }
        ]
      },

      {
        id: "maths5-ch11-lecon7",
        titre: "7. Démontrer que deux droites sont parallèles",
        blocs: [
          {
            type: "regle",
            titre: "Avec des angles correspondants",
            texte: "Si deux droites coupées par une sécante forment des angles correspondants de même mesure, alors ces deux droites sont parallèles."
          },
          {
            type: "regle",
            titre: "Avec des angles alternes-internes",
            texte: "Si deux droites coupées par une sécante forment des angles alternes-internes de même mesure, alors ces deux droites sont parallèles."
          },
          {
            type: "exemple",
            titre: "Rédiger une justification",
            texte: "Deux droites sont coupées par une sécante. Deux angles alternes-internes mesurent chacun 75°. Ils sont égaux ; donc les deux droites sont parallèles."
          },
          {
            type: "methode",
            titre: "Raisonner dans le bon sens",
            texte: "Pour calculer un angle, on peut partir de droites dont le parallélisme est connu. Pour démontrer que les droites sont parallèles, on peut partir de deux angles correspondants égaux ou de deux angles alternes-internes égaux."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans l’angle AÔB, quel est le sommet ?",
        correction: "Le sommet est O : sa lettre se trouve au milieu de la notation."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Classe chaque angle : 40°, 90° et 130°.",
        correction: "40° est aigu ; 90° est droit ; 130° est obtus."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est la mesure d’un angle plat ?",
        correction: "Un angle plat mesure 180°."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Deux angles mesurent 30° et 60°. Sont-ils complémentaires ?",
        correction: "Oui : 30° + 60° = 90°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un angle mesure 42°. Quelle est la mesure de son complémentaire ?",
        correction: "90° − 42° = 48°. Son complémentaire mesure 48°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un angle mesure 115°. Quelle est la mesure de son supplémentaire ?",
        correction: "180° − 115° = 65°. Son supplémentaire mesure 65°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux angles opposés par le sommet sont tels que l’un mesure 53°. Combien mesure l’autre ?",
        correction: "Il mesure aussi 53°, car deux angles opposés par le sommet ont la même mesure."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux angles adjacents forment un angle plat. L’un mesure 72°. Combien mesure l’autre ?",
        correction: "Leur somme vaut 180°. L’autre angle mesure 180° − 72° = 108°."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Trace à la règle et au rapporteur un angle AÔB de 65°. Est-il aigu ou obtus ?",
        correction: "Trace [OA), place le centre du rapporteur sur O, marque 65° à partir de [OA), puis trace [OB) passant par la marque. L’angle est aigu car 65° < 90°."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Deux droites parallèles sont coupées par une sécante. Deux angles correspondants mesurent respectivement 68° et x. Trouve x.",
        correction: "Les droites sont parallèles, donc ces angles correspondants sont égaux. Ainsi, x = 68°."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure 125°. Combien mesure l’autre angle de cette paire ?",
        correction: "Il mesure 125° : les angles alternes-internes formés par une sécante avec deux parallèles sont égaux."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Deux angles opposés par le sommet mesurent respectivement 3x et 75°. Trouve x.",
        correction: "Les angles sont égaux, donc 3x = 75°. En divisant par 3, on obtient x = 25°."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Deux droites sont coupées par une sécante. Une paire d’angles alternes-internes mesure 80° et 80°. Que peut-on conclure ?",
        correction: "Les angles alternes-internes sont égaux. On peut donc conclure que les deux droites sont parallèles."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Deux droites se coupent. L’un des quatre angles mesure 35°. Donne les mesures des trois autres.",
        correction: "L’angle opposé par le sommet mesure 35°. Chacun des deux angles adjacents forme un angle plat avec l’angle de 35° : ils mesurent donc 180° − 35° = 145°. Les trois mesures sont 35°, 145° et 145°."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Deux angles adjacents forment un angle plat. Le premier mesure 2x et le second 3x. Trouve x et les mesures des deux angles.",
        correction: "Leur somme vaut 180° : 2x + 3x = 180°, donc 5x = 180° et x = 36°. Les angles mesurent 2 × 36° = 72° et 3 × 36° = 108°."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève dit : « Deux angles supplémentaires sont toujours adjacents. » A-t-il raison ?",
        correction: "Non. Supplémentaires signifie seulement que leurs mesures ont pour somme 180°. Par exemple, un angle de 60° et un angle de 120° dessinés séparément sont supplémentaires sans être adjacents."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Deux droites sont coupées par une sécante. Une paire d’angles correspondants mesure 65° et 70°. Ces droites peuvent-elles être parallèles ?",
        correction: "Non. Si les droites étaient parallèles, ces angles correspondants seraient égaux. Or 65° est différent de 70° : les droites ne sont donc pas parallèles."
      }
    ]
  }
]);
