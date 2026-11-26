enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-moment-force-equilibre",
    titre: "Chapitre 7 : Moment d'une force et équilibre de rotation",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch7-moment",
        titre: "1. Effet d'une force sur la rotation",
        blocs: [
          {
            type: "introduction",
            titre: "Ouvrir une porte",
            texte: "Il est plus facile de faire tourner une porte en poussant près de la poignée que près des gonds. L'effet de rotation dépend non seulement de l'intensité de la force, mais aussi de sa direction et de sa distance à l'axe."
          },
          {
            type: "definition",
            titre: "Axe et ligne d'action",
            texte: "L'axe de rotation est la droite autour de laquelle le solide peut tourner. La ligne d'action d'une force est la droite passant par son point d'application et ayant la direction de cette force."
          },
          {
            type: "definition",
            titre: "Bras de levier dans un plan",
            texte: "Pour une force située dans un plan perpendiculaire à un axe de rotation fixe, le bras de levier d est la distance perpendiculaire entre l'axe et la ligne d'action de la force. On peut le mesurer depuis le point O où l'axe coupe le plan."
          },
          {
            type: "definition",
            titre: "Moment par rapport à l'axe",
            texte: "Dans ce cas, la valeur absolue du moment de la force par rapport à l'axe vaut Fd. Son unité est le newton-mètre, noté N·m. Le signe du moment dépend du sens de rotation choisi comme positif."
          },
          {
            type: "schema",
            titre: "Force perpendiculaire et bras de levier",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 230' role='img' aria-label='Une barre horizontale tourne autour de O. Une force verticale vers le haut est appliquée en A. La distance OA est le bras de levier et la force tend à faire tourner la barre dans le sens inverse des aiguilles d’une montre.'><rect width='440' height='230' fill='white'/><defs><marker id='sp1ch7fleche' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><line x1='90' y1='150' x2='330' y2='150' stroke='#333' stroke-width='6'/><circle cx='90' cy='150' r='7' fill='#1769aa'/><circle cx='310' cy='150' r='4' fill='#333'/><line x1='310' y1='150' x2='310' y2='45' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch7fleche)'/><line x1='90' y1='180' x2='310' y2='180' stroke='#1769aa' stroke-width='2'/><line x1='90' y1='173' x2='90' y2='187' stroke='#1769aa'/><line x1='310' y1='173' x2='310' y2='187' stroke='#1769aa'/><text x='78' y='140' font-size='14'>O</text><text x='316' y='154' font-size='14'>A</text><text x='318' y='55' font-size='14' fill='#c43b35'>F⃗</text><text x='190' y='201' font-size='14' fill='#1769aa'>d = OA</text></svg>",
            legende: "La force est perpendiculaire à OA : son bras de levier vaut OA. Si le sens inverse des aiguilles d'une montre est positif, son moment est +F × OA."
          },
          {
            type: "regle",
            titre: "Force inclinée",
            texte: "Si une force F⃗ est appliquée en A dans le plan perpendiculaire à l'axe et si θ est l'angle entre OA⃗ et F⃗, la valeur absolue de son moment vaut OA × F × |sin θ|. Le signe se détermine d'après le sens de rotation qu'elle tend à produire."
          },
          {
            type: "exemple",
            titre: "Calculer un moment",
            texte: "Une force de 20 N est appliquée perpendiculairement à une barre à 0,30 m de l'axe. Son moment a pour valeur absolue 20 × 0,30 = 6 N·m. Il vaut +6 N·m si elle tend à faire tourner la barre dans le sens positif choisi, et −6 N·m dans le cas contraire."
          },
          {
            type: "remarque",
            titre: "Moment nul",
            texte: "Si la ligne d'action de la force passe par l'axe, le bras de levier est nul et le moment par rapport à cet axe est nul. Une force peut donc être non nulle sans produire d'effet de rotation autour de cet axe."
          },
          {
            type: "remarque",
            titre: "Newton-mètre et joule",
            texte: "Le moment s'exprime en N·m. Même si 1 N·m et 1 J ont les mêmes dimensions, on écrit généralement N·m pour un moment et J pour un travail ou une énergie : ce sont des grandeurs différentes."
          }
        ]
      },
      {
        id: "sp1-ch7-signes",
        titre: "2. Choisir un signe et calculer",
        blocs: [
          {
            type: "methode",
            titre: "Calculer un moment algébrique",
            texte: "1. Repérer l'axe et choisir un sens positif de rotation. 2. Tracer ou imaginer la ligne d'action de la force. 3. Déterminer le bras de levier perpendiculaire d. 4. Calculer Fd. 5. Donner le signe positif ou négatif selon le sens de rotation que la force tend à produire."
          },
          {
            type: "exemple",
            titre: "Deux forces sur une barre",
            texte: "Une barre horizontale pivote en O. Une force de 10 N vers le haut agit à 0,4 m à droite de O ; une autre de 6 N vers le bas agit à 0,5 m à droite de O. Si le sens inverse des aiguilles d'une montre est positif, les moments valent respectivement +4 N·m et −3 N·m. Leur somme vaut +1 N·m."
          },
          {
            type: "exemple",
            titre: "Attention au côté du pivot",
            texte: "Une force verticale vers le bas appliquée à droite du pivot tend à faire tourner la barre dans le sens des aiguilles d'une montre. La même force appliquée à gauche du pivot tend à la faire tourner dans l'autre sens."
          },
          {
            type: "remarque",
            titre: "Axe et géométrie",
            texte: "Les formules Fd et OA × F × |sin θ| présentées ici s'appliquent aux situations planes décrites : l'axe est perpendiculaire au plan de la figure et les forces sont dans ce plan."
          }
        ]
      },
      {
        id: "sp1-ch7-equilibre",
        titre: "3. Équilibre de rotation",
        blocs: [
          {
            type: "definition",
            titre: "Équilibre autour d'un axe fixe",
            texte: "Un solide en équilibre autour d'un axe fixe reste au repos par rapport à cet axe. Pour un solide pouvant tourner autour d'un axe fixe, la somme algébrique des moments des forces extérieures par rapport à cet axe doit être nulle."
          },
          {
            type: "regle",
            titre: "Théorème des moments à l'équilibre",
            texte: "À l'équilibre de rotation : ΣMaxe(F⃗) = 0. Avec une convention de signe cohérente, les moments positifs et négatifs se compensent. Une force dont la ligne d'action passe par l'axe a un moment nul par rapport à cet axe."
          },
          {
            type: "schema",
            titre: "Une balance en équilibre",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 250' role='img' aria-label='Barre horizontale sur un pivot O. Une force de 12 newtons agit vers le bas à gauche à 0,5 mètre du pivot et une force de 6 newtons agit vers le bas à droite à 1 mètre du pivot. Les moments opposés ont chacun une valeur absolue de 6 newton-mètres.'><rect width='480' height='250' fill='white'/><defs><marker id='sp1ch7bas' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><line x1='90' y1='100' x2='405' y2='100' stroke='#333' stroke-width='6'/><polygon points='200,100 180,135 220,135' fill='#b8d8ef' stroke='#1769aa' stroke-width='2'/><line x1='100' y1='100' x2='100' y2='175' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch7bas)'/><line x1='400' y1='100' x2='400' y2='175' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch7bas)'/><text x='185' y='89' font-size='14'>O</text><text x='60' y='195' font-size='13' fill='#c43b35'>12 N</text><text x='382' y='195' font-size='13' fill='#c43b35'>6 N</text><text x='118' y='83' font-size='13'>0,5 m</text><text x='275' y='83' font-size='13'>1 m</text></svg>",
            legende: "Les deux moments sont opposés : 12 × 0,5 = 6 × 1 = 6 N·m. La barre est supposée légère ou son poids avoir un moment nul autour de O."
          },
          {
            type: "exemple",
            titre: "Équilibrer un levier",
            texte: "Une force de 12 N agit vers le bas à 0,5 m à gauche d'un pivot. À quelle distance à droite faut-il placer une force verticale de 6 N vers le bas pour équilibrer ses effets ? Les moments ont des sens opposés : 12 × 0,5 = 6 × d, donc d = 1 m."
          },
          {
            type: "remarque",
            titre: "Équilibre complet d'un solide",
            texte: "Pour l'équilibre d'un solide, la somme des forces extérieures doit aussi être nulle. Dans le cas d'un solide maintenu par un pivot fixe, la force exercée par le pivot peut contribuer à cet équilibre des forces, même si son moment par rapport à l'axe du pivot est nul."
          },
          {
            type: "methode",
            titre: "Étudier une barre en équilibre",
            texte: "1. Isoler la barre et faire le bilan de toutes les forces extérieures, y compris son poids si nécessaire. 2. Choisir l'axe du pivot et un sens positif. 3. Calculer les moments avec leurs signes. 4. Écrire ΣM = 0. 5. Si l'on demande la force du pivot, utiliser aussi ΣF⃗ = 0⃗."
          }
        ]
      },
      {
        id: "sp1-ch7-couple",
        titre: "4. Couple de forces",
        blocs: [
          {
            type: "definition",
            titre: "Deux forces opposées",
            texte: "Un couple de forces est constitué de deux forces parallèles, de même intensité et de sens opposés, appliquées sur des lignes d'action distinctes. Leur résultante est nulle, mais leur effet de rotation ne l'est pas."
          },
          {
            type: "regle",
            titre: "Moment d'un couple",
            texte: "Pour un couple de forces d'intensité F dont les lignes d'action sont séparées par la distance perpendiculaire d, la valeur absolue du moment du couple est M = Fd. Dans le plan considéré, ce moment a la même valeur par rapport à tout axe perpendiculaire au plan."
          },
          {
            type: "exemple",
            titre: "Faire tourner un volant",
            texte: "Deux forces opposées de 15 N sont appliquées tangentiellement sur deux côtés opposés d'un volant. Si la distance entre leurs lignes d'action est 0,40 m, le moment du couple a pour valeur absolue 15 × 0,40 = 6 N·m."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une force de 10 N est appliquée perpendiculairement à une barre à 0,20 m de son axe de rotation. Calculer la valeur absolue de son moment.",
        correction: "Le bras de levier vaut 0,20 m. La valeur absolue du moment est Fd = 10 × 0,20 = 2 N·m."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La ligne d'action d'une force passe par l'axe de rotation d'une barre. Que vaut le moment de cette force par rapport à cet axe ?",
        correction: "La distance entre l'axe et la ligne d'action est nulle. Le bras de levier est donc nul et le moment vaut 0 N·m."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une barre horizontale pivote en O. Une force de 8 N, verticale vers le bas, est appliquée à 0,50 m à droite de O. Le sens inverse des aiguilles d'une montre est choisi positif. Calculer le moment de cette force.",
        correction: "La force tend à faire tourner la barre dans le sens des aiguilles d'une montre : son moment est négatif. Sa valeur absolue est 8 × 0,50 = 4 N·m. Le moment vaut donc −4 N·m."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une force de 20 N est appliquée à l'extrémité A d'une barre OA de longueur 0,4 m. L'angle entre OA⃗ et la force vaut 30°. Calculer la valeur absolue du moment par rapport à l'axe passant par O et perpendiculaire au plan. On donne sin 30° = 0,5.",
        correction: "La valeur absolue du moment est OA × F × sin 30° = 0,4 × 20 × 0,5 = 4 N·m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une barre légère horizontale pivote en O. Une force verticale de 15 N vers le bas agit à 0,40 m à gauche de O. Une force verticale F vers le bas agit à 0,60 m à droite de O. Déterminer F pour que la barre soit en équilibre de rotation.",
        correction: "Les deux forces produisent des moments de sens opposés. À l'équilibre, 15 × 0,40 = F × 0,60. Donc F = 6/0,60 = 10 N. Le poids de la barre est négligé et la force du pivot a un moment nul autour de O."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux forces parallèles de même intensité 25 N, de sens opposés, forment un couple. Leurs lignes d'action sont distantes de 0,16 m. Calculer la valeur absolue du moment du couple.",
        correction: "Le moment du couple vaut en valeur absolue M = Fd = 25 × 0,16 = 4 N·m."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une barre homogène horizontale AB de longueur 2 m et de masse 4 kg pivote autour de A. Une force verticale F vers le haut est appliquée en B. La barre est immobile. Prendre g = 10 N/kg. Déterminer F, puis la force verticale exercée par le pivot sur la barre.",
        correction: "Le poids de la barre vaut P = mg = 40 N et s'applique en son centre, à 1 m de A. À l'équilibre des moments autour de A : F × 2 − 40 × 1 = 0, donc F = 20 N. Pour l'équilibre vertical, R + F − P = 0, où R est la composante verticale de la force du pivot. Ainsi R = 40 − 20 = 20 N vers le haut."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une barre légère horizontale pivote en O. À 0,40 m à droite de O, une force de 30 N fait un angle de 30° avec la barre et tend à la faire tourner dans le sens inverse des aiguilles d'une montre. À 0,60 m à gauche de O, on applique une force verticale F. Préciser son sens et calculer son intensité pour obtenir l'équilibre de rotation. On donne sin 30° = 0,5.",
        correction: "La première force a un moment positif de valeur 0,40 × 30 × 0,5 = 6 N·m. La seconde doit produire un moment de −6 N·m. À gauche du pivot, une force vers le haut tend à faire tourner la barre dans le sens des aiguilles d'une montre : c'est le sens nécessaire. Comme elle est perpendiculaire à la barre, F × 0,60 = 6, donc F = 10 N vers le haut."
      }
    ]
  }
]);
