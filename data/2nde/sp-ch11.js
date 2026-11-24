enregistrerChapitres("2nde", "sp", [
  {
    id: 11,
    titre: "Chapitre 11 : Les forces",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Actions mécaniques et forces",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi étudier les forces ?",
            texte: "Lorsqu’une personne pousse une charrette, son action peut modifier le mouvement de celle-ci. Une action mécanique peut aussi déformer un objet ou contribuer à le maintenir en équilibre."
          },
          {
            type: "definition",
            titre: "Système étudié",
            texte: "Le système est l’objet ou l’ensemble d’objets que l’on choisit d’étudier. Pour faire le bilan des forces, on identifie les actions exercées sur ce système par les objets extérieurs."
          },
          {
            type: "definition",
            titre: "Action mécanique",
            texte: "Une action mécanique est l’action exercée par un objet sur un autre. Elle peut modifier son mouvement, le déformer ou contribuer à son équilibre. Une force permet de modéliser une action mécanique."
          },
          {
            type: "exemple",
            titre: "Un livre posé sur une table",
            texte: "Si le système étudié est le livre, la Terre exerce sur lui une action à distance : son poids. La table exerce sur lui une action de contact."
          },
          {
            type: "remarque",
            titre: "Force et mouvement",
            texte: "Une force n’a pas toujours pour effet visible de mettre un objet en mouvement. Un livre immobile sur une table est soumis à plusieurs forces. Leur effet combiné doit être étudié."
          }
        ]
      },

      {
        id: 2,
        titre: "Actions de contact et actions à distance",
        blocs: [
          {
            type: "definition",
            titre: "Action de contact",
            texte: "Une action de contact nécessite un contact entre l’objet qui agit et le système étudié. Elle peut être exercée sur une petite zone, comme l’action d’un fil, ou sur une surface, comme l’action d’une table."
          },
          {
            type: "definition",
            titre: "Action à distance",
            texte: "Une action à distance s’exerce sans contact entre les objets. L’action gravitationnelle de la Terre sur un objet est un exemple d’action à distance."
          },
          {
            type: "exemple",
            titre: "Quelques actions",
            texte: "La main qui pousse une porte exerce une action de contact. Le fil qui retient une lampe exerce une action de contact. La Terre qui attire une balle exerce une action à distance."
          },
          {
            type: "methode",
            titre: "Faire un bilan des actions",
            texte: "1. Choisir le système étudié.\n2. Rechercher les objets en contact avec lui : support, fil, main, air, etc.\n3. Rechercher les actions à distance utiles, notamment celle de la Terre.\n4. Ne conserver que les actions qui ne sont pas négligées dans l’énoncé.\n5. Nommer les forces exercées sur le système."
          },
          {
            type: "remarque",
            titre: "Actions négligées",
            texte: "Certains exercices demandent de négliger les frottements de l’air ou du support. Cela simplifie le modèle : une action négligée n’est pas incluse dans le bilan des forces."
          }
        ]
      },

      {
        id: 3,
        titre: "Caractéristiques et représentation d’une force",
        blocs: [
          {
            type: "definition",
            titre: "Les quatre caractéristiques",
            texte: "Une force est représentée par un vecteur. On précise son point d’application, sa direction, son sens et son intensité, aussi appelée valeur."
          },
          {
            type: "tableau",
            titre: "Lire les caractéristiques",
            texte: "Point d’application : endroit où la force est représentée sur le système.\n\nDirection : droite suivant laquelle la force agit, par exemple verticale ou horizontale.\n\nSens : orientation sur cette droite, par exemple vers le haut ou vers le bas.\n\nIntensité : valeur de la force, exprimée en newtons."
          },
          {
            type: "definition",
            titre: "Le newton",
            texte: "L’unité de force dans le Système international est le newton, de symbole N. L’intensité d’une force peut être mesurée avec un dynamomètre adapté."
          },
          {
            type: "methode",
            titre: "Tracer un vecteur force",
            texte: "1. Choisir une échelle, par exemple 1 cm pour 2 N.\n2. Placer l’origine de la flèche au point d’application.\n3. Tracer la flèche suivant la direction et le sens de la force.\n4. Calculer sa longueur avec l’échelle.\n5. Nommer la force à côté de la flèche."
          },
          {
            type: "exemple",
            titre: "Utiliser une échelle",
            texte: "Une force horizontale de 6 N est dirigée vers la droite. Avec l’échelle 1 cm pour 2 N, on trace depuis son point d’application une flèche horizontale vers la droite, de longueur 6 / 2 = 3 cm."
          },
          {
            type: "schema",
            titre: "Représentation",
            texte: "Point d’application A\n\nA •────────→ F\n\nLa flèche indique la direction et le sens. Sa longueur représente l’intensité selon l’échelle choisie."
          },
          {
            type: "remarque",
            titre: "Direction et sens",
            texte: "Deux forces peuvent avoir la même direction mais des sens opposés : par exemple, deux forces verticales, l’une vers le haut et l’autre vers le bas."
          }
        ]
      },

      {
        id: 4,
        titre: "Le poids d’un objet",
        blocs: [
          {
            type: "definition",
            titre: "Poids",
            texte: "Le poids d’un objet est la force d’attraction gravitationnelle exercée par la Terre sur cet objet. Dans le modèle usuel près de la surface terrestre, on le représente appliqué au centre de gravité G de l’objet."
          },
          {
            type: "regle",
            titre: "Caractéristiques du poids",
            texte: "Point d’application : centre de gravité G.\nDirection : verticale du lieu.\nSens : vers le centre de la Terre, donc vers le bas localement.\nIntensité : P = m × g."
          },
          {
            type: "regle",
            titre: "Relation entre poids et masse",
            texte: "P = m × g.\n\nP : poids en newtons (N).\nm : masse en kilogrammes (kg).\ng : intensité de la pesanteur en N·kg⁻¹.\n\nPrès de la surface terrestre, on utilise souvent g ≈ 9,8 N·kg⁻¹ ou la valeur arrondie 10 N·kg⁻¹, selon l’énoncé."
          },
          {
            type: "exemple",
            titre: "Poids d’un objet",
            texte: "Pour une masse m = 2,0 kg et g = 10 N·kg⁻¹ :\nP = m × g = 2,0 × 10 = 20 N."
          },
          {
            type: "rappel",
            titre: "Convertir une masse",
            texte: "1 kg = 1 000 g. Par exemple, 500 g = 0,500 kg et 250 g = 0,250 kg. Dans P = m × g, la masse doit être en kg si g est en N·kg⁻¹."
          },
          {
            type: "remarque",
            titre: "Masse et poids",
            texte: "La masse et le poids sont deux grandeurs différentes. La masse s’exprime en kg ; le poids est une force exprimée en N. Pour un même objet, le poids dépend de la valeur locale de g."
          }
        ]
      },

      {
        id: 5,
        titre: "Forces de contact courantes",
        blocs: [
          {
            type: "definition",
            titre: "Action d’un support",
            texte: "Un support exerce une force de contact sur un objet qui repose ou glisse sur lui. Dans un modèle simple, cette force peut être décomposée en une composante normale, perpendiculaire au support, et une composante tangentielle de frottement."
          },
          {
            type: "definition",
            titre: "Frottement",
            texte: "Le frottement est une composante de la force de contact parallèle à la surface. Son sens dépend de la situation : il s’oppose au glissement relatif ou à sa tendance. Il ne faut pas supposer qu’il est toujours opposé au mouvement de l’objet par rapport au sol."
          },
          {
            type: "exemple",
            titre: "Objet tiré sur une table",
            texte: "Un objet glisse vers la droite sur une table immobile. Dans ce cas, la force de frottement de la table sur l’objet est dirigée vers la gauche, opposée au glissement relatif."
          },
          {
            type: "definition",
            titre: "Tension d’un fil",
            texte: "Un fil tendu exerce sur l’objet auquel il est attaché une force dirigée suivant le fil et orientée de l’objet vers le fil. Dans les exercices simples, cette force est souvent appelée tension du fil."
          },
          {
            type: "exemple",
            titre: "Lampe suspendue",
            texte: "Une lampe suspendue à un fil vertical est soumise notamment à son poids, vers le bas, et à la tension du fil, vers le haut."
          },
          {
            type: "remarque",
            titre: "Ne pas compter deux fois une force",
            texte: "Si l’action totale du support est décomposée en force normale et force de frottement, on représente ces deux composantes. On n’ajoute pas en plus l’action totale comme une troisième force indépendante."
          }
        ]
      },

      {
        id: 6,
        titre: "Interactions et somme des forces",
        blocs: [
          {
            type: "definition",
            titre: "Interaction entre deux objets",
            texte: "Si un objet A exerce une force sur un objet B, alors B exerce aussi une force sur A. Ces deux forces ont la même direction, la même intensité et des sens opposés."
          },
          {
            type: "remarque",
            titre: "Deux systèmes différents",
            texte: "Les deux forces d’une interaction s’exercent sur deux objets différents. Elles ne s’annulent donc pas dans le bilan des forces d’un seul de ces objets."
          },
          {
            type: "exemple",
            titre: "Livre et table",
            texte: "La table exerce une force vers le haut sur le livre. Le livre exerce une force vers le bas sur la table. Ces forces forment une paire d’interaction, mais seule la première appartient au bilan des forces exercées sur le livre."
          },
          {
            type: "definition",
            titre: "Somme des forces",
            texte: "La somme des forces, ou résultante des forces, est la somme vectorielle des forces exercées sur un même système. Pour des forces sur une même droite, on peut choisir un sens positif et additionner leurs valeurs algébriques."
          },
          {
            type: "exemple",
            titre: "Forces opposées sur une droite",
            texte: "Un objet subit une force horizontale de 8 N vers la droite et une force de 3 N vers la gauche. En choisissant la droite comme sens positif, la somme vaut +8 − 3 = +5 N. La résultante est de 5 N vers la droite."
          },
          {
            type: "remarque",
            titre: "Lien avec le mouvement",
            texte: "Dans un référentiel adapté, lorsqu’un système est soumis à une somme des forces nulle, il peut rester au repos ou avoir un mouvement rectiligne uniforme. Les conditions d’équilibre et les lois du mouvement seront approfondies dans les chapitres suivants."
          }
        ]
      },

      {
        id: 7,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Étudier les forces sur un objet",
            texte: "1. Définir le système.\n2. Identifier les objets extérieurs qui agissent sur lui.\n3. Nommer chaque force non négligée.\n4. Indiquer, si possible, son point d’application, sa direction, son sens et son intensité.\n5. Tracer les vecteurs avec une échelle si l’énoncé le demande.\n6. Si nécessaire, calculer leur somme en tenant compte de leurs directions et de leurs sens."
          },
          {
            type: "schema",
            titre: "Livre immobile sur une table horizontale",
            texte: "          ↑ R : action de la table\n          │\n       [ livre ]\n          │\n          ↓ P : poids\n     ───────────── table\n\nDans ce modèle, les forces verticales ont des sens opposés."
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : exprimer un poids en kg.\nÀ faire : exprimer le poids en N et la masse en kg.\n\nErreur : utiliser une masse en g dans P = m × g avec g en N·kg⁻¹.\nÀ faire : convertir la masse en kg.\n\nErreur : confondre direction et sens.\nÀ faire : préciser par exemple « verticale, vers le bas ».\n\nErreur : inclure dans le bilan du livre la force que le livre exerce sur la table.\nÀ faire : ne garder que les forces exercées sur le livre.\n\nErreur : additionner les intensités de deux forces opposées sans tenir compte de leur sens.\nÀ faire : utiliser des signes ou une addition vectorielle."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une main pousse une porte et la Terre attire un objet. Pour chacune de ces actions, indique s’il s’agit d’une action de contact ou d’une action à distance.",
        correction: "La main exerce une action de contact sur la porte. La Terre exerce une action à distance sur l’objet."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite les quatre caractéristiques utilisées pour représenter une force.",
        correction: "Ce sont le point d’application, la direction, le sens et l’intensité."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet a une masse de 3,0 kg. Calcule son poids pour g = 10 N·kg⁻¹.",
        correction: "P = m × g = 3,0 × 10 = 30 N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 750 g est proche de la surface terrestre. On prend g = 10 N·kg⁻¹. Calcule l’intensité de son poids et indique sa direction et son sens.",
        correction: "m = 750 g = 0,750 kg.\n\nP = m × g = 0,750 × 10 = 7,5 N.\n\nLe poids a une direction verticale et un sens vers le bas, vers le centre de la Terre."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une force de 12 N est horizontale et dirigée vers la gauche. On veut la représenter à l’échelle 1 cm pour 4 N. Donne la longueur, la direction et le sens de la flèche à tracer.",
        correction: "Longueur : 12 / 4 = 3 cm. On trace depuis le point d’application une flèche horizontale de 3 cm, dirigée vers la gauche."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une lampe est suspendue immobile à un fil vertical. On néglige l’action de l’air. Nomme les forces exercées sur la lampe et indique le sens de chacune.",
        correction: "La lampe subit son poids, exercé par la Terre, vertical vers le bas, et la tension du fil, verticale vers le haut."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un livre de masse 0,50 kg repose immobile sur une table horizontale. On prend g = 10 N·kg⁻¹ et on néglige l’action de l’air. Dans ce modèle, la force de la table sur le livre est verticale vers le haut et son intensité est de 5,0 N. 1. Fais le bilan des forces exercées sur le livre. 2. Calcule son poids. 3. Détermine la somme des forces verticales.",
        correction: "1. Le livre subit son poids P, vers le bas, et la force R de la table, vers le haut.\n\n2. P = m × g = 0,50 × 10 = 5,0 N.\n\n3. En choisissant le haut comme sens positif : R − P = 5,0 − 5,0 = 0 N. La somme des forces est nulle dans ce modèle."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une caisse glisse vers la droite sur un sol horizontal immobile. Elle subit horizontalement une force de traction de 20 N vers la droite et une force de frottement de 6 N vers la gauche. Son poids et la force normale du sol sont verticaux, opposés et de même intensité. Détermine la somme des forces exercées sur la caisse.",
        correction: "Les deux forces verticales se compensent. En choisissant la droite comme sens positif, la somme horizontale vaut 20 − 6 = 14 N. La résultante des forces est donc horizontale, de 14 N vers la droite."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne exerce sur une charrette une force horizontale de 40 N vers la droite. La charrette exerce simultanément une force sur la personne. Indique la direction, le sens et l’intensité de cette seconde force. Explique pourquoi elle ne figure pas dans le bilan des forces exercées sur la charrette.",
        correction: "La force exercée par la charrette sur la personne est horizontale, dirigée vers la gauche et d’intensité 40 N. Elle s’exerce sur la personne, pas sur la charrette : elle ne figure donc pas dans le bilan des forces exercées sur la charrette."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une lampe de masse 2,0 kg est suspendue immobile à un fil vertical. On néglige l’air et on prend g = 10 N·kg⁻¹. L’énoncé précise que la somme des forces sur la lampe est nulle. Calcule le poids et la tension du fil. Indique comment représenter ces forces à l’échelle 1 cm pour 10 N.",
        correction: "P = m × g = 2,0 × 10 = 20 N, vertical vers le bas.\n\nLa somme des forces est nulle : la tension est verticale vers le haut et vaut 20 N.\n\nÀ l’échelle donnée, chaque flèche mesure 20 / 10 = 2 cm. On représente le poids depuis G vers le bas et la tension au point d’attache vers le haut."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une caisse de masse 4,0 kg glisse vers la droite sur un sol horizontal immobile. Elle subit une traction horizontale de 18 N vers la droite et un frottement de 5,0 N vers la gauche. La composante normale du support est verticale vers le haut et vaut 40 N. On prend g = 10 N·kg⁻¹ et on néglige l’air. 1. Nomme toutes les forces exercées sur la caisse. 2. Calcule son poids. 3. Calcule les sommes des forces verticales et horizontales. 4. Donne la direction, le sens et l’intensité de la résultante.",
        correction: "1. La caisse subit son poids, la composante normale du support, le frottement et la traction.\n\n2. P = m × g = 4,0 × 10 = 40 N, vers le bas.\n\n3. Verticalement, en choisissant le haut positif : 40 − 40 = 0 N. Horizontalement, en choisissant la droite positive : 18 − 5,0 = 13 N.\n\n4. La résultante est horizontale, dirigée vers la droite, d’intensité 13 N."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux équipes tirent horizontalement un anneau. L’équipe A exerce une force de 120 N vers la gauche et l’équipe B une force de 90 N vers la droite. Le poids de l’anneau et l’action verticale de son support se compensent. 1. Calcule la résultante horizontale. 2. Une troisième force horizontale est ajoutée sur l’anneau pour rendre la somme des forces nulle. Donne sa direction, son sens et son intensité. 3. À l’échelle 1 cm pour 30 N, donne la longueur de chaque flèche représentant les trois forces horizontales.",
        correction: "1. En choisissant la droite comme sens positif : somme = 90 − 120 = −30 N. La résultante horizontale vaut donc 30 N vers la gauche.\n\n2. Pour obtenir une somme nulle, la troisième force doit être horizontale, dirigée vers la droite et d’intensité 30 N.\n\n3. À l’échelle donnée : force de A = 120 / 30 = 4 cm ; force de B = 90 / 30 = 3 cm ; troisième force = 30 / 30 = 1 cm."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet A de masse 600 g est posé immobile sur une table horizontale B. On prend g = 10 N·kg⁻¹ et on néglige l’air. La somme des forces exercées sur A est nulle. 1. Calcule le poids de A. 2. Détermine l’intensité et le sens de la force exercée par B sur A. 3. Donne l’intensité et le sens de la force exercée par A sur B. 4. Les deux forces de la question 2 et de la question 3 s’annulent-elles dans le bilan des forces sur A ? Justifie.",
        correction: "1. m = 600 g = 0,600 kg. Le poids de A vaut P = 0,600 × 10 = 6,0 N vers le bas.\n\n2. La somme des forces sur A est nulle. La force de B sur A vaut donc 6,0 N vers le haut.\n\n3. Par interaction, la force de A sur B vaut 6,0 N vers le bas.\n\n4. Non. La force de B sur A agit sur A, tandis que la force de A sur B agit sur B. Seule la première figure dans le bilan des forces sur A. Sur A, elle compense le poids."
      }
    ]
  }
]);
