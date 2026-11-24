enregistrerChapitres("2nde", "sp", [
  {
    id: 12,
    titre: "Chapitre 12 : L’équilibre d’un solide",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Qu’est-ce qu’un solide en équilibre ?",
        blocs: [
          {
            type: "introduction",
            titre: "Observer un objet immobile",
            texte: "Un livre posé sur une table et une lampe suspendue à un plafond sont immobiles par rapport à la pièce. Pourtant, chacun subit plusieurs actions mécaniques. Pour comprendre leur équilibre, il faut étudier les forces qui s’exercent sur eux."
          },
          {
            type: "definition",
            titre: "Solide",
            texte: "Dans ce chapitre, un solide est un objet dont on néglige les déformations. La distance entre deux points de cet objet est considérée comme constante."
          },
          {
            type: "definition",
            titre: "Équilibre",
            texte: "Un solide est en équilibre dans un référentiel lorsqu’il reste au repos dans ce référentiel. Tous ses points restent alors immobiles par rapport à ce référentiel."
          },
          {
            type: "remarque",
            titre: "Préciser le référentiel",
            texte: "Le repos dépend du référentiel choisi. Dans les exemples de ce chapitre, on utilise le référentiel terrestre lié au sol, sauf indication contraire."
          },
          {
            type: "rappel",
            titre: "Bilan des forces",
            texte: "Pour étudier l’équilibre d’un solide, on commence par identifier toutes les forces extérieures qui s’exercent sur lui : poids, action d’un support, tension d’un fil, etc. On ne fait figurer que les forces exercées sur le solide étudié."
          }
        ]
      },

      {
        id: 2,
        titre: "Conditions d’équilibre",
        blocs: [
          {
            type: "regle",
            titre: "Deux conditions à considérer",
            texte: "Dans le référentiel terrestre supposé adapté à l’étude, un solide en équilibre vérifie deux conditions : la somme vectorielle des forces extérieures est nulle et la somme de leurs moments par rapport à un point choisi est nulle. La première condition concerne la résultante des forces ; la seconde évite un effet global de rotation."
          },
          {
            type: "rappel",
            titre: "Somme vectorielle",
            texte: "La somme des forces tient compte de leurs directions et de leurs sens. Pour des forces sur une même droite, on peut choisir un sens positif et additionner leurs valeurs algébriques."
          },
          {
            type: "exemple",
            titre: "Deux forces opposées mais décalées",
            texte: "Deux forces de même intensité, parallèles et de sens opposés ont une somme vectorielle nulle. Si leurs droites d’action sont différentes, elles peuvent cependant faire tourner le solide. Une somme des forces nulle ne suffit donc pas, à elle seule, à garantir son équilibre."
          },
          {
            type: "remarque",
            titre: "Les moments seront approfondis",
            texte: "Le moment d’une force mesure son effet de rotation autour d’un point ou d’un axe. Il sera étudié plus en détail dans le chapitre consacré aux moments. Dans ce chapitre, nous utilisons surtout des situations simples où l’équilibre est indiqué ou peut être vérifié sans calcul détaillé de moments."
          },
          {
            type: "remarque",
            titre: "Repos et mouvement",
            texte: "Une somme des forces nulle n’implique pas forcément que l’objet est au repos : dans un référentiel adapté, son centre de masse peut aussi avoir un mouvement rectiligne uniforme. L’équilibre étudié ici correspond au repos."
          }
        ]
      },

      {
        id: 3,
        titre: "Solide soumis à deux forces",
        blocs: [
          {
            type: "regle",
            titre: "Condition d’équilibre",
            texte: "Un solide soumis à exactement deux forces extérieures non nulles est en équilibre si ces forces ont la même droite d’action, des sens opposés et la même intensité, et si le solide est initialement au repos."
          },
          {
            type: "definition",
            titre: "Droite d’action",
            texte: "La droite d’action d’une force est la droite passant par son point d’application et suivant sa direction. Deux forces peuvent être parallèles sans avoir la même droite d’action."
          },
          {
            type: "schema",
            titre: "Deux forces alignées",
            texte: "           ↑ F₂\n           │\n        [solide]\n           │\n           ↓ F₁\n\nMême droite d’action, sens opposés et même intensité."
          },
          {
            type: "exemple",
            titre: "Objet suspendu",
            texte: "Une lampe immobile est suspendue à un fil vertical. Si l’on néglige l’air, elle est soumise à deux forces : son poids P vers le bas et la tension T du fil vers le haut. À l’équilibre, leurs droites d’action sont les mêmes et T = P."
          },
          {
            type: "remarque",
            titre: "Attention aux systèmes",
            texte: "Le poids et la tension s’exercent tous deux sur la lampe : ils peuvent se compenser dans son bilan. La force exercée par la lampe sur le fil agit sur le fil ; elle ne fait pas partie du bilan des forces sur la lampe."
          }
        ]
      },

      {
        id: 4,
        titre: "Solide soumis à trois forces",
        blocs: [
          {
            type: "regle",
            titre: "Cas de trois forces non parallèles",
            texte: "Si un solide est en équilibre sous l’action de trois forces extérieures non nulles et non parallèles, leurs droites d’action sont concourantes : elles se coupent en un même point. Leur somme vectorielle est également nulle."
          },
          {
            type: "remarque",
            titre: "Deux vérifications",
            texte: "La concurrence des droites d’action ne suffit pas à elle seule : il faut aussi que la somme vectorielle des forces soit nulle. Inversement, une somme vectorielle nulle ne suffit pas si les droites d’action ne permettent pas l’équilibre en rotation."
          },
          {
            type: "methode",
            titre: "Construire un triangle des forces",
            texte: "1. Choisir une échelle de représentation.\n2. Tracer le vecteur de la première force.\n3. À son extrémité, tracer le vecteur de la deuxième force en conservant sa direction, son sens et sa longueur à l’échelle.\n4. À la nouvelle extrémité, tracer le vecteur de la troisième force.\n5. Si la somme des forces est nulle, le dernier vecteur ramène au point de départ : le triangle est fermé."
          },
          {
            type: "schema",
            titre: "Triangle des forces",
            texte: "Départ •──────→•\n        ↖      ↙\n         \\    /\n           •\n\nLes flèches sont placées bout à bout. Un triangle fermé représente une somme vectorielle nulle."
          },
          {
            type: "remarque",
            titre: "Cas des forces parallèles",
            texte: "La règle de concurrence énoncée ici concerne trois forces non parallèles. Lorsque les forces sont parallèles, il faut étudier la somme des forces et leurs effets de rotation, notamment à l’aide des moments."
          }
        ]
      },

      {
        id: 5,
        titre: "Résoudre un équilibre sur une droite",
        blocs: [
          {
            type: "methode",
            titre: "Utiliser un axe orienté",
            texte: "1. Faire le bilan des forces sur le solide.\n2. Choisir un axe orienté suivant leur direction commune.\n3. Attribuer un signe à chaque force : positif dans le sens de l’axe, négatif dans le sens opposé.\n4. Écrire que leur somme algébrique est nulle.\n5. Calculer la grandeur inconnue et interpréter son signe."
          },
          {
            type: "exemple",
            titre: "Objet maintenu verticalement",
            texte: "Un objet de poids 12 N est maintenu immobile par un fil vertical. En orientant l’axe vers le haut : T − P = 0. Donc T = P = 12 N."
          },
          {
            type: "exemple",
            titre: "Trois forces horizontales",
            texte: "Un objet immobile subit trois forces horizontales de même droite d’action : 8 N vers la droite, 3 N vers la gauche et une force inconnue F vers la gauche. En choisissant la droite positive : 8 − 3 − F = 0. Donc F = 5 N."
          },
          {
            type: "remarque",
            titre: "Vérifier la rotation",
            texte: "Une somme algébrique nulle ne règle pas automatiquement la question de la rotation. Dans l’exemple précédent, les forces ont la même droite d’action : elles ne créent pas de couple de rotation entre elles."
          }
        ]
      },

      {
        id: 6,
        titre: "Équilibre sur un support horizontal",
        blocs: [
          {
            type: "exemple",
            titre: "Livre posé sur une table",
            texte: "Un livre est immobile sur une table horizontale. On néglige l’air et on modélise l’action de la table par une force verticale R. Le livre subit son poids P vers le bas et R vers le haut. À l’équilibre, R = P."
          },
          {
            type: "exemple",
            titre: "Objet tiré sans glisser",
            texte: "Une caisse reste immobile sur un sol horizontal. Une personne la tire horizontalement vers la droite. Dans un modèle simple, le sol exerce une force de frottement vers la gauche et une force normale vers le haut. Si ces quatre forces sont les seules actions considérées, la somme horizontale et la somme verticale sont chacune nulles."
          },
          {
            type: "remarque",
            titre: "Frottement sans glissement",
            texte: "Une force de frottement peut exister même lorsqu’un objet ne glisse pas. On parle alors de frottement statique. Sa valeur dépend de la situation : elle n’est pas automatiquement égale au poids."
          },
          {
            type: "remarque",
            titre: "Stabilité",
            texte: "Un objet en équilibre peut basculer si sa position change suffisamment. Dans les situations usuelles, abaisser son centre de gravité et élargir sa base d’appui peuvent améliorer sa stabilité. L’étude précise du basculement nécessite notamment les moments des forces."
          }
        ]
      },

      {
        id: 7,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Étudier un solide en équilibre",
            texte: "1. Définir le solide et préciser le référentiel.\n2. Faire le bilan des forces extérieures non négligées.\n3. Représenter leurs directions et leurs sens.\n4. Écrire que leur somme vectorielle est nulle.\n5. Vérifier aussi que les forces ne produisent pas d’effet global de rotation : même droite d’action pour deux forces, ou étude des moments si nécessaire.\n6. Donner les résultats avec leurs unités."
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : conclure à l’équilibre dès que les intensités de deux forces sont égales.\nÀ faire : vérifier aussi leurs sens et leur droite d’action.\n\nErreur : croire qu’une somme des forces nulle garantit toujours l’absence de rotation.\nÀ faire : considérer aussi les moments des forces.\n\nErreur : inclure dans le bilan une force exercée par le solide sur un autre objet.\nÀ faire : ne retenir que les forces exercées sur le solide étudié.\n\nErreur : confondre masse et poids.\nÀ faire : convertir la masse en kg et calculer P = m × g en N.\n\nErreur : dire qu’un objet immobile ne peut subir aucun frottement.\nÀ faire : envisager un frottement statique si la situation le nécessite."
          },
          {
            type: "schema",
            titre: "À retenir",
            texte: "Solide au repos dans le référentiel choisi\n                ↓\nSomme vectorielle des forces = 0\nSomme des moments = 0\n\nPour deux forces non nulles :\nmême droite d’action, sens opposés, même intensité."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un livre reste immobile sur une table par rapport à la pièce. Dans le référentiel lié à la pièce, est-il en équilibre ?",
        correction: "Oui. Le livre reste au repos dans le référentiel lié à la pièce : il y est en équilibre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une lampe immobile est suspendue à un fil vertical. On néglige l’air. Nomme les deux forces exercées sur la lampe et indique leur sens.",
        correction: "La lampe subit son poids, exercé par la Terre, vertical vers le bas, et la tension du fil, verticale vers le haut."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une masse de 2,0 kg est immobile, suspendue à un fil vertical. On néglige l’air et on prend g = 10 N·kg⁻¹. Calcule son poids.",
        correction: "P = m × g = 2,0 × 10 = 20 N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet immobile est soumis à exactement deux forces extérieures non nulles. Quelles relations doivent exister entre leurs droites d’action, leurs sens et leurs intensités ?",
        correction: "Les deux forces doivent avoir la même droite d’action, des sens opposés et la même intensité."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une lampe de masse 800 g est immobile, suspendue à un fil vertical. On néglige l’air et on prend g = 10 N·kg⁻¹. Calcule son poids et la tension du fil.",
        correction: "m = 800 g = 0,800 kg.\n\nP = m × g = 0,800 × 10 = 8,0 N.\n\nLa lampe est en équilibre sous deux forces. La tension du fil vaut donc 8,0 N vers le haut."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux forces horizontales de même droite d’action agissent sur un objet immobile : l’une vaut 15 N vers la droite, l’autre est dirigée vers la gauche. Ces deux forces sont les seules forces horizontales. Calcule l’intensité de la seconde.",
        correction: "La somme horizontale est nulle. En choisissant la droite positive : 15 − F = 0. Donc F = 15 N vers la gauche."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une caisse de masse 5,0 kg reste immobile sur un sol horizontal. Elle subit son poids, une force normale verticale du sol, une traction horizontale de 12 N vers la droite et une force de frottement horizontale du sol vers la gauche. On néglige les autres actions et on prend g = 10 N·kg⁻¹. Calcule le poids, la force normale et le frottement.",
        correction: "Le poids vaut P = m × g = 5,0 × 10 = 50 N vers le bas.\n\nLa somme verticale est nulle : la force normale vaut donc 50 N vers le haut.\n\nLa somme horizontale est nulle : le frottement vaut donc 12 N vers la gauche. Il s’agit ici d’un frottement statique puisque la caisse ne glisse pas."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un solide est soumis à deux forces de 10 N. La première est horizontale vers la droite et la seconde horizontale vers la gauche. Leurs droites d’action sont parallèles mais différentes. La somme vectorielle des forces est-elle nulle ? Peut-on conclure que le solide est en équilibre ?",
        correction: "Les forces ont même intensité et des sens opposés : leur somme vectorielle est nulle.\n\nCependant, leurs droites d’action sont différentes. Elles peuvent produire un effet de rotation : on ne peut pas conclure à l’équilibre."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un solide immobile est soumis à trois forces horizontales de même droite d’action. Deux d’entre elles valent 18 N vers la droite et 7 N vers la gauche. La troisième est dirigée vers la gauche. Calcule son intensité, puis donne la longueur des trois flèches à l’échelle 1 cm pour 3 N.",
        correction: "En choisissant la droite positive : 18 − 7 − F = 0. Donc F = 11 N vers la gauche.\n\nÀ l’échelle donnée :\n18 N correspondent à 6 cm ;\n7 N correspondent à 7 / 3 ≈ 2,33 cm ;\n11 N correspondent à 11 / 3 ≈ 3,67 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un solide est en équilibre sous l’action de trois forces extérieures non nulles et non parallèles. Deux de leurs droites d’action se coupent au point I. Que peut-on dire de la droite d’action de la troisième force ? Quelle autre condition doivent vérifier les trois forces ?",
        correction: "Les trois droites d’action doivent être concourantes. La droite d’action de la troisième force passe donc aussi par I.\n\nDe plus, la somme vectorielle des trois forces doit être nulle."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un petit anneau de masse négligeable est immobile. Il est soumis à trois forces dont les droites d’action passent toutes par son centre : F₁ = 6 N vers la droite, F₂ = 8 N vers le haut et F₃ inconnue. 1. Donne les composantes horizontale et verticale de F₃. 2. Calcule son intensité. 3. Indique son sens. On rappelle que pour des composantes perpendiculaires de valeurs a et b, l’intensité du vecteur est √(a² + b²).",
        correction: "1. La somme des forces est nulle. F₃ doit donc compenser les deux autres forces : sa composante horizontale vaut 6 N vers la gauche et sa composante verticale vaut 8 N vers le bas.\n\n2. F₃ = √(6² + 8²) = √100 = 10 N.\n\n3. La force est dirigée obliquement vers le bas et vers la gauche. Les droites d’action passent par le centre : il n’y a pas d’effet de rotation autour de ce point."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une caisse de masse 3,0 kg est immobile sur un sol horizontal. Une personne exerce sur elle une force horizontale de 9,0 N vers la droite. Le sol exerce une force de frottement horizontale vers la gauche et une force normale verticale vers le haut. On néglige l’air et on prend g = 10 N·kg⁻¹. 1. Calcule le poids. 2. Détermine les intensités de la force normale et du frottement. 3. À l’échelle 1 cm pour 10 N, donne les longueurs des flèches représentant ces quatre forces. 4. La somme des forces nulle suffit-elle à démontrer l’absence de rotation si les points d’application ne sont pas précisés ?",
        correction: "1. P = 3,0 × 10 = 30 N vers le bas.\n\n2. À l’équilibre, la force normale vaut 30 N vers le haut et le frottement vaut 9,0 N vers la gauche.\n\n3. À l’échelle donnée : poids et force normale mesurent chacun 3,0 cm ; traction et frottement mesurent chacun 0,90 cm.\n\n4. Non. Des forces peuvent avoir une somme nulle tout en produisant un effet de rotation. Ici, l’immobilité de la caisse est donnée par l’énoncé ; pour vérifier l’absence de rotation à partir des forces, il faudrait aussi étudier leurs moments."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet de masse 1,5 kg est immobile, suspendu à un fil vertical. On néglige l’air et on prend g = 10 N·kg⁻¹. 1. Fais le bilan des forces sur l’objet. 2. Calcule leurs intensités. 3. Indique leurs droites d’action et leurs sens. 4. Le fil exerce une force sur l’objet ; l’objet exerce aussi une force sur le fil. Donne l’intensité et le sens de cette dernière force et explique pourquoi elle ne figure pas dans le bilan des forces sur l’objet.",
        correction: "1. L’objet subit son poids, exercé par la Terre, et la tension exercée par le fil.\n\n2. P = 1,5 × 10 = 15 N. L’objet étant en équilibre sous deux forces, la tension vaut aussi 15 N.\n\n3. Les deux forces ont la même droite d’action verticale. Le poids est dirigé vers le bas et la tension vers le haut.\n\n4. L’objet exerce sur le fil une force de 15 N vers le bas. Elle agit sur le fil, et non sur l’objet : elle ne figure donc pas dans le bilan des forces sur l’objet."
      }
    ]
  }
]);
