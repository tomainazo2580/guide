enregistrerChapitres("2nde", "sp", [
  {
    id: 13,
    titre: "Chapitre 13 : Les moments des forces",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "L’effet de rotation d’une force",
        blocs: [
          {
            type: "introduction",
            titre: "Ouvrir une porte",
            texte: "Pour ouvrir une porte, il est généralement plus facile de pousser près de la poignée que près des charnières. L’effet de rotation dépend non seulement de l’intensité de la force, mais aussi de sa direction et de l’endroit où elle est appliquée."
          },
          {
            type: "definition",
            titre: "Axe de rotation",
            texte: "Un axe de rotation est une droite autour de laquelle un solide peut tourner. Pour une porte, l’axe de rotation passe approximativement par les charnières."
          },
          {
            type: "definition",
            titre: "Moment d’une force",
            texte: "Le moment d’une force par rapport à un axe mesure son effet de rotation autour de cet axe. Dans ce chapitre, nous étudions des situations où les forces et les distances sont dans un plan perpendiculaire à l’axe de rotation."
          },
          {
            type: "exemple",
            titre: "La poignée d’une porte",
            texte: "À force égale et pour une poussée perpendiculaire à la porte, pousser plus loin de l’axe des charnières produit un moment plus grand."
          },
          {
            type: "remarque",
            titre: "Une force peut ne pas faire tourner",
            texte: "Une force peut avoir une intensité non nulle et un moment nul par rapport à un axe. C’est le cas, dans le modèle plan étudié ici, si sa droite d’action passe par l’axe de rotation."
          }
        ]
      },

      {
        id: 2,
        titre: "Bras de levier et valeur du moment",
        blocs: [
          {
            type: "definition",
            titre: "Droite d’action",
            texte: "La droite d’action d’une force est la droite qui passe par son point d’application et qui suit sa direction."
          },
          {
            type: "definition",
            titre: "Bras de levier",
            texte: "Dans le plan étudié, le bras de levier d est la distance la plus courte entre l’axe de rotation et la droite d’action de la force. Cette distance est mesurée perpendiculairement à la droite d’action."
          },
          {
            type: "regle",
            titre: "Valeur du moment",
            texte: "La valeur du moment d’une force par rapport à l’axe vaut :\n\n|M| = F × d.\n\nF est l’intensité de la force en newtons (N), d le bras de levier en mètres (m) et |M| la valeur du moment en newton-mètres (N·m)."
          },
          {
            type: "schema",
            titre: "Force perpendiculaire à une barre",
            texte: "Axe O                    Point A\n  •────────────────────────•\n  <──────── d ────────────>│\n                           ↓ F\n\nLa force est perpendiculaire à OA : ici, le bras de levier est la distance OA."
          },
          {
            type: "exemple",
            titre: "Calcul d’un moment",
            texte: "Une force de 10 N agit perpendiculairement à une barre, à 0,40 m de son axe de rotation.\n\n|M| = F × d = 10 × 0,40 = 4,0 N·m."
          },
          {
            type: "remarque",
            titre: "Attention à la distance",
            texte: "La distance entre l’axe et le point d’application n’est pas toujours le bras de levier. Elle lui est égale lorsque la force est perpendiculaire au segment reliant l’axe au point d’application. Sinon, il faut mesurer la distance perpendiculaire jusqu’à la droite d’action."
          },
          {
            type: "rappel",
            titre: "Conversions",
            texte: "1 m = 100 cm. Par exemple, 40 cm = 0,40 m et 5 cm = 0,05 m. Pour obtenir un moment en N·m avec une force en N, on utilise le bras de levier en m."
          }
        ]
      },

      {
        id: 3,
        titre: "Signe du moment",
        blocs: [
          {
            type: "introduction",
            titre: "Deux sens de rotation",
            texte: "Une force peut tendre à faire tourner un solide dans le sens des aiguilles d’une montre ou dans le sens opposé. Pour additionner les moments, on choisit une convention de signe."
          },
          {
            type: "regle",
            titre: "Convention utilisée dans ce chapitre",
            texte: "Nous choisissons le sens inverse des aiguilles d’une montre comme sens positif. Le moment est alors positif si la force tend à faire tourner le solide dans ce sens, et négatif si elle tend à le faire tourner dans le sens des aiguilles d’une montre."
          },
          {
            type: "exemple",
            titre: "Force à droite de l’axe",
            texte: "Une barre horizontale pivote autour d’un axe passant par O. Une force verticale vers le bas agit à droite de O. Elle tend à faire descendre la partie droite : la rotation est dans le sens des aiguilles d’une montre. Son moment est donc négatif avec notre convention."
          },
          {
            type: "exemple",
            titre: "Force à gauche de l’axe",
            texte: "Sur la même barre horizontale, une force verticale vers le bas appliquée à gauche de O tend à faire descendre la partie gauche. Son moment est positif avec notre convention."
          },
          {
            type: "remarque",
            titre: "Une convention à annoncer",
            texte: "On peut choisir l’autre sens comme positif. Les signes des moments changent alors, mais le résultat physique ne change pas si la convention est respectée dans tout le calcul."
          }
        ]
      },

      {
        id: 4,
        titre: "Équilibre autour d’un axe fixe",
        blocs: [
          {
            type: "definition",
            titre: "Solide mobile autour d’un axe fixe",
            texte: "Un solide mobile autour d’un axe fixe peut tourner autour de cet axe, mais son axe reste en place. Une balançoire à bascule ou une barre articulée peuvent être modélisées ainsi."
          },
          {
            type: "regle",
            titre: "Condition des moments",
            texte: "Si un solide est en équilibre autour d’un axe fixe, la somme algébrique des moments des forces extérieures par rapport à cet axe est nulle :\n\nΣM = 0.\n\nAvec une convention de signe cohérente, les effets de rotation se compensent."
          },
          {
            type: "remarque",
            titre: "Réaction de l’axe",
            texte: "La force exercée par un axe idéal sur le solide peut intervenir dans le bilan des forces. Si sa droite d’action passe par l’axe, son moment par rapport à cet axe est nul. Elle ne disparaît pas pour autant du bilan des forces."
          },
          {
            type: "methode",
            titre: "Appliquer la condition des moments",
            texte: "1. Identifier le solide et l’axe de rotation.\n2. Faire le bilan des forces extérieures.\n3. Choisir un sens positif de rotation.\n4. Déterminer le bras de levier et le signe du moment de chaque force.\n5. Écrire ΣM = 0 pour le solide en équilibre.\n6. Calculer l’inconnue et vérifier son unité."
          },
          {
            type: "exemple",
            titre: "Deux forces sur une barre",
            texte: "Une barre horizontale est en équilibre autour d’un axe O. Une force de 20 N agit vers le bas à 0,30 m à gauche de O. Une force F agit vers le bas à 0,60 m à droite de O. Les forces sont perpendiculaires à la barre ; les autres moments sont nuls.\n\nAvec le sens inverse des aiguilles d’une montre positif :\n20 × 0,30 − F × 0,60 = 0.\n\nDonc F = 6,0 / 0,60 = 10 N."
          },
          {
            type: "remarque",
            titre: "Un solide libre",
            texte: "Pour un solide libre, la condition ΣM = 0 autour d’un axe ne suffit pas à elle seule : il faut également étudier la somme des forces et les éventuels effets de rotation. Pour un solide maintenu par un axe fixe idéal, la réaction de l’axe contribue au bilan des forces."
          }
        ]
      },

      {
        id: 5,
        titre: "Leviers et équilibre",
        blocs: [
          {
            type: "definition",
            titre: "Levier",
            texte: "Un levier est un solide pouvant tourner autour d’un axe ou d’un point d’appui. Une force appliquée à une certaine distance de cet appui peut agir sur une charge située à une autre distance."
          },
          {
            type: "schema",
            titre: "Levier simple",
            texte: "Force F₁ vers le bas        Force F₂ vers le bas\n       ↓                            ↓\n       •────────────O───────────────•\n                    ▲\n                 axe fixe\n\nSi les forces sont perpendiculaires au levier, les bras de levier sont les distances à O."
          },
          {
            type: "regle",
            titre: "Deux moments opposés",
            texte: "Si deux forces produisent des moments de sens opposés et si les autres moments par rapport à l’axe sont nuls, l’équilibre donne :\n\nF₁ × d₁ = F₂ × d₂.\n\nLes distances d₁ et d₂ sont les bras de levier."
          },
          {
            type: "exemple",
            titre: "Une balançoire",
            texte: "Dans un modèle simplifié, une personne exerce une force verticale de 300 N à 1,0 m à gauche de l’axe. Une autre exerce une force verticale vers le bas à 1,5 m à droite. Le poids de la planche a un moment nul et les autres moments sont négligés.\n\nÀ l’équilibre : 300 × 1,0 = F × 1,5.\nDonc F = 200 N."
          },
          {
            type: "remarque",
            titre: "Effort et distance",
            texte: "Pour équilibrer un même moment, une force plus faible peut être utilisée avec un bras de levier plus grand. Cela ne signifie pas que le travail ou l’énergie nécessaire disparaît."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Choisir le bon bras de levier",
            texte: "1. Repérer l’axe de rotation.\n2. Tracer ou imaginer la droite d’action de la force.\n3. Depuis l’axe, tracer la perpendiculaire à cette droite.\n4. Mesurer la distance correspondante : c’est le bras de levier.\n5. Convertir cette distance en mètres avant de calculer le moment en N·m."
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : utiliser une distance en cm et annoncer un résultat en N·m.\nÀ faire : convertir les cm en m.\n\nErreur : prendre systématiquement la distance entre l’axe et le point d’application comme bras de levier.\nÀ faire : utiliser la distance perpendiculaire à la droite d’action.\n\nErreur : donner le même signe à deux moments de sens de rotation opposés.\nÀ faire : choisir une convention et examiner chaque force.\n\nErreur : oublier le poids de la barre sans justification.\nÀ faire : le prendre en compte, sauf si son moment est nul ou s’il est négligé dans l’énoncé.\n\nErreur : croire qu’une force de moment nul est forcément nulle.\nÀ faire : vérifier si sa droite d’action passe par l’axe."
          },
          {
            type: "schema",
            titre: "À retenir",
            texte: "Valeur du moment : |M| = F × d\n\nd : distance perpendiculaire entre l’axe et la droite d’action.\n\nPour un solide en équilibre autour d’un axe fixe :\nΣM = 0."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Pour ouvrir une porte, on pousse perpendiculairement à sa surface. À force égale, l’effet de rotation est-il généralement plus grand près de la poignée ou près des charnières ?",
        correction: "Il est plus grand près de la poignée : elle est plus éloignée de l’axe des charnières, donc le bras de levier est plus grand."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une force de 5 N a un bras de levier de 0,20 m par rapport à un axe. Calcule la valeur de son moment avec |M| = F × d.",
        correction: "|M| = F × d = 5 × 0,20 = 1,0 N·m."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans une étude plane, la droite d’action d’une force passe par l’axe de rotation. Que valent son bras de levier et son moment par rapport à cet axe ?",
        correction: "Le bras de levier est nul. Le moment vaut donc 0 N·m, même si la force n’est pas nulle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une force de 15 N agit avec un bras de levier de 40 cm par rapport à un axe. Calcule la valeur de son moment en N·m. On donne |M| = F × d et 1 m = 100 cm.",
        correction: "d = 40 cm = 0,40 m.\n\n|M| = 15 × 0,40 = 6,0 N·m."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une barre horizontale pivote autour d’un axe O. Une force verticale vers le bas est appliquée à droite de O. Le sens inverse des aiguilles d’une montre est choisi positif. Le moment de cette force est-il positif ou négatif ?",
        correction: "La force tend à faire descendre la partie droite de la barre : elle provoque un effet de rotation dans le sens des aiguilles d’une montre. Son moment est donc négatif."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une force de 8 N produit un moment de valeur 2,4 N·m par rapport à un axe. Calcule son bras de levier. On donne |M| = F × d.",
        correction: "d = |M| / F = 2,4 / 8 = 0,30 m, soit 30 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une barre horizontale est en équilibre autour d’un axe fixe O. Une force verticale de 12 N agit vers le bas à 0,50 m à gauche de O. Une force verticale F agit vers le bas à 0,30 m à droite de O. Les autres forces ont un moment nul par rapport à O. Calcule F. On donne |M| = F × d.",
        correction: "Les deux forces produisent des moments de sens opposés. À l’équilibre :\n\n12 × 0,50 = F × 0,30.\n6,0 = 0,30 F.\nF = 20 N."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une barre horizontale pivote autour de O. Une force F₁ de 10 N agit verticalement vers le bas à 0,20 m à gauche de O. Une force F₂ de 8 N agit verticalement vers le bas à 0,50 m à droite de O. On choisit le sens inverse des aiguilles d’une montre positif. Calcule chaque moment puis leur somme. On donne |M| = F × d.",
        correction: "F₁ tend à faire tourner la barre dans le sens positif : M₁ = +10 × 0,20 = +2,0 N·m.\n\nF₂ produit une rotation dans le sens négatif : M₂ = −8 × 0,50 = −4,0 N·m.\n\nSomme : M₁ + M₂ = +2,0 − 4,0 = −2,0 N·m. Ces deux moments ne se compensent pas."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une barre homogène horizontale est immobile autour d’un axe fixe passant par son centre de gravité G. Son poids vaut 30 N. Une force de 10 N agit verticalement vers le bas à 0,40 m à gauche de G. Une autre force verticale vers le bas agit à 0,50 m à droite de G. La réaction de l’axe passe par G. Calcule l’intensité de la seconde force.",
        correction: "Le poids et la réaction de l’axe ont chacun un moment nul par rapport à l’axe passant par G, car leur droite d’action passe par cet axe.\n\nÀ l’équilibre : 10 × 0,40 = F × 0,50.\n\nF = 4,0 / 0,50 = 8,0 N."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans une étude plane, une force de 25 N est appliquée à un point A d’une barre. La distance OA entre l’axe O et A vaut 0,50 m, mais la distance perpendiculaire de O à la droite d’action de la force vaut 0,30 m. Calcule la valeur du moment de la force par rapport à O. On donne |M| = F × d.",
        correction: "Le bras de levier est la distance perpendiculaire à la droite d’action : d = 0,30 m, et non 0,50 m.\n\n|M| = 25 × 0,30 = 7,5 N·m."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une barre horizontale homogène de masse 2,0 kg est en équilibre autour d’un axe fixe passant par son centre G. Une masse de 3,0 kg est suspendue à 0,40 m à gauche de G. Une autre masse m est suspendue à 0,60 m à droite de G. Les forces exercées par les masses sur la barre sont verticales vers le bas et valent leurs poids. La réaction de l’axe passe par G. On prend g = 10 N·kg⁻¹. 1. Calcule le moment du poids de la barre par rapport à G. 2. Calcule m. 3. Détermine l’intensité de la réaction verticale de l’axe sur la barre, en supposant qu’il n’y a pas d’autre force.",
        correction: "1. Le poids de la barre agit en G : son bras de levier est nul, donc son moment par rapport à G vaut 0 N·m.\n\n2. Le poids de la masse de gauche vaut 3,0 × 10 = 30 N. À l’équilibre des moments :\n30 × 0,40 = (m × 10) × 0,60.\n12 = 6m, donc m = 2,0 kg.\n\n3. Le poids de la barre vaut 2,0 × 10 = 20 N. Les forces vers le bas valent au total 20 + 30 + 20 = 70 N. La barre étant immobile, la réaction verticale de l’axe vaut 70 N vers le haut."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une barre horizontale est en équilibre autour d’un axe fixe O. Trois forces verticales vers le bas agissent sur elle : F₁ = 20 N à 0,30 m à gauche de O, F₂ = 5 N à 0,40 m à gauche de O et F₃ à 0,50 m à droite de O. Les autres moments par rapport à O sont nuls. On choisit le sens inverse des aiguilles d’une montre positif. 1. Calcule les moments de F₁ et F₂. 2. Détermine F₃. 3. Vérifie que la somme des moments est nulle.",
        correction: "1. Les forces à gauche produisent des moments positifs :\nM₁ = +20 × 0,30 = +6,0 N·m.\nM₂ = +5 × 0,40 = +2,0 N·m.\n\n2. F₃ produit un moment négatif. À l’équilibre : 6,0 + 2,0 − F₃ × 0,50 = 0.\nDonc F₃ = 8,0 / 0,50 = 16 N.\n\n3. M₃ = −16 × 0,50 = −8,0 N·m. La somme vaut 6,0 + 2,0 − 8,0 = 0 N·m."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une barre horizontale de longueur 1,20 m est articulée à une extrémité O. Son poids de 40 N agit verticalement vers le bas en son centre, situé à 0,60 m de O. Une force verticale F vers le haut est appliquée à l’autre extrémité, à 1,20 m de O. La barre est en équilibre et la réaction de l’axe passe par O. 1. Calcule F avec la condition des moments. 2. Détermine la réaction verticale de l’axe en utilisant la somme des forces verticales. 3. Explique pourquoi la réaction de l’axe n’intervient pas dans le calcul des moments en O.",
        correction: "1. Le poids et F produisent des moments opposés. À l’équilibre : F × 1,20 = 40 × 0,60. Donc F = 24 / 1,20 = 20 N vers le haut.\n\n2. En choisissant le haut positif : R + F − P = 0. Donc R = 40 − 20 = 20 N vers le haut.\n\n3. La droite d’action de la réaction passe par O : son bras de levier est nul et son moment par rapport à O est donc nul."
      }
    ]
  }
]);
