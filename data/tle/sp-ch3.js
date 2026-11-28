enregistrerChapitres("tle", "sp", [
  {
    id: "tle-sp-ch3",
    titre: "Chapitre 3 : Forces et lois de Newton",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-sp-ch3-l1",
        titre: "Leçon 1 : Identifier les forces",
        blocs: [
          {
            type: "introduction",
            titre: "Du mouvement à ses causes",
            texte: "La cinématique décrit le mouvement. La dynamique étudie les liens entre les forces exercées sur un système et son mouvement.\n\nAvant tout calcul, il faut choisir le système étudié, le référentiel et faire le bilan des forces extérieures."
          },
          {
            type: "definition",
            titre: "Système et force extérieure",
            texte: "Le système est l’objet ou l’ensemble d’objets que l’on choisit d’étudier. Une force extérieure est exercée sur ce système par un objet qui ne lui appartient pas.\n\nUne force est représentée par un vecteur : on précise son point d’application, sa direction, son sens et sa norme en newtons (N)."
          },
          {
            type: "tableau",
            titre: "Quelques forces courantes",
            entetes: ["Force", "Description"],
            lignes: [
              ["Poids P", "Force exercée par la Terre ; près du sol, P = mg et sa direction est verticale."],
              ["Réaction d’un support", "Force exercée par le support ; elle peut comprendre une composante normale et un frottement."],
              ["Tension d’un fil", "Force exercée par le fil, dirigée suivant le fil vers le point d’attache."],
              ["Force d’un ressort", "Force exercée par un ressort déformé ; elle tend à ramener le ressort vers sa longueur à vide."]
            ]
          },
          {
            type: "schema",
            titre: "Bilan des forces d’un objet sur un support",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 220'><defs><marker id='sp3-fleche1' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#dc2626'/></marker></defs><line x1='35' y1='165' x2='365' y2='165' stroke='#334155' stroke-width='4'/><rect x='155' y='105' width='90' height='60' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><line x1='200' y1='135' x2='200' y2='200' stroke='#dc2626' stroke-width='3' marker-end='url(#sp3-fleche1)'/><line x1='200' y1='165' x2='200' y2='70' stroke='#dc2626' stroke-width='3' marker-end='url(#sp3-fleche1)'/><text x='210' y='198' font-size='14'>P</text><text x='210' y='77' font-size='14'>R</text><text x='258' y='160' font-size='13'>support</text></svg>",
            legende: "Pour un objet posé sur un support horizontal, le poids P est dirigé vers le bas. Ici, R représente la réaction normale du support ; le frottement est supposé nul."
          },
          {
            type: "remarque",
            titre: "Modélisation",
            texte: "Selon le problème, on peut négliger certains effets, comme les frottements ou la résistance de l’air. Il faut le préciser : une force ne disparaît pas simplement parce qu’elle complique le calcul."
          }
        ]
      },

      {
        id: "tle-sp-ch3-l2",
        titre: "Leçon 2 : Principe d’inertie",
        blocs: [
          {
            type: "definition",
            titre: "Première loi de Newton",
            texte: "Dans un référentiel galiléen, si la résultante des forces extérieures exercées sur un système est nulle, son centre de masse est au repos ou en mouvement rectiligne uniforme.\n\nRéciproquement, dans un tel référentiel, un mouvement rectiligne uniforme du centre de masse correspond à une résultante des forces extérieures nulle."
          },
          {
            type: "texte",
            titre: "Référentiel galiléen",
            texte: "Un référentiel galiléen est un référentiel dans lequel le principe d’inertie est vérifié. Pour de nombreuses expériences proches de la surface de la Terre et de courte durée, on peut assimiler le référentiel terrestre à un référentiel galiléen.\n\nCette approximation doit être adaptée à la situation étudiée."
          },
          {
            type: "exemple",
            titre: "Objet immobile sur une table",
            texte: "On considère un objet immobile sur une table horizontale. Les forces exercées sont son poids P et la réaction normale R de la table ; on néglige les autres forces.\n\nDans le référentiel terrestre supposé galiléen, l’accélération est nulle. Ainsi P + R = 0 : les deux vecteurs sont opposés et leurs normes sont égales."
          },
          {
            type: "remarque",
            titre: "Une force n’est pas nécessaire pour entretenir un mouvement uniforme",
            texte: "Dans le modèle sans frottements, un objet peut continuer à se déplacer en ligne droite à vitesse constante lorsque la somme des forces est nulle. Dans la vie courante, des forces sont souvent nécessaires pour compenser les frottements."
          }
        ]
      },

      {
        id: "tle-sp-ch3-l3",
        titre: "Leçon 3 : Deuxième loi de Newton",
        blocs: [
          {
            type: "definition",
            titre: "Relation fondamentale de la dynamique",
            texte: "Dans un référentiel galiléen, pour un système de masse constante m, la somme vectorielle des forces extérieures est :\n\nΣF ext = m aG,\n\noù aG est l’accélération de son centre de masse G.\n\nAvec m en kg et aG en m/s², la résultante des forces s’exprime en newtons."
          },
          {
            type: "texte",
            titre: "Interpréter la relation",
            texte: "La résultante des forces et l’accélération ont la même direction et le même sens. Plus la résultante est grande, plus l’accélération est grande pour une masse donnée.\n\nL’accélération n’a pas forcément la même direction que la vitesse : elle peut modifier la valeur de la vitesse, sa direction ou les deux."
          },
          {
            type: "schema",
            titre: "Résultante et accélération",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 170'><defs><marker id='sp3-fleche2' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#dc2626'/></marker><marker id='sp3-fleche3' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#16a34a'/></marker></defs><rect x='60' y='55' width='90' height='60' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><line x1='150' y1='75' x2='315' y2='75' stroke='#dc2626' stroke-width='3' marker-end='url(#sp3-fleche2)'/><line x1='150' y1='105' x2='260' y2='105' stroke='#16a34a' stroke-width='3' marker-end='url(#sp3-fleche3)'/><text x='230' y='62' font-size='14'>ΣF</text><text x='220' y='128' font-size='14'>a</text></svg>",
            legende: "La résultante ΣF et l’accélération a ont le même sens. Les longueurs des flèches ne sont pas à comparer directement : leurs unités sont différentes."
          },
          {
            type: "exemple",
            titre: "Calculer une accélération",
            texte: "Un objet de masse 2 kg subit une résultante horizontale de norme 6 N vers la droite.\n\nD’après ΣF = ma, la norme de son accélération est a = 6/2 = 3 m/s², vers la droite."
          },
          {
            type: "methode",
            titre: "Résoudre par projection",
            texte: "1. Choisir le système et un référentiel supposé galiléen.\n2. Dessiner et nommer les forces extérieures.\n3. Écrire la relation vectorielle ΣF = maG.\n4. Choisir des axes et projeter chaque vecteur sur ces axes.\n5. Résoudre les équations obtenues, puis vérifier les signes et les unités."
          }
        ]
      },

      {
        id: "tle-sp-ch3-l4",
        titre: "Leçon 4 : Actions réciproques et applications",
        blocs: [
          {
            type: "definition",
            titre: "Troisième loi de Newton",
            texte: "Si un objet A exerce une force F(A sur B) sur un objet B, alors B exerce sur A une force F(B sur A) telle que :\n\nF(A sur B) = −F(B sur A).\n\nCes forces ont la même direction et la même norme, mais des sens opposés. Elles s’exercent sur deux objets différents."
          },
          {
            type: "exemple",
            titre: "Livre et table",
            texte: "La table pousse le livre vers le haut. Le livre pousse la table vers le bas. Ces deux forces constituent une paire d’actions réciproques.\n\nAttention : le poids du livre et la force de la table sur le livre ne forment pas cette paire, car ils agissent tous deux sur le livre."
          },
          {
            type: "exemple",
            titre: "Chute sans résistance de l’air",
            texte: "On étudie un objet de masse m en chute près de la surface terrestre, dans un référentiel terrestre supposé galiléen. On néglige la résistance de l’air.\n\nLa seule force retenue est le poids P = mg. La deuxième loi donne ma = mg, donc a = g : l’accélération est verticale, dirigée vers le bas.\n\nCette conclusion ne suppose pas que la vitesse initiale soit nulle."
          },
          {
            type: "remarque",
            titre: "Forces qui se compensent",
            texte: "Deux forces opposées peuvent se compenser dans le bilan d’un système si elles agissent sur ce même système. Les forces d’une paire d’actions réciproques, elles, agissent sur deux systèmes différents : on ne les annule pas dans le bilan de l’un d’eux."
          },
          {
            type: "methode",
            titre: "Vérifier une réponse",
            texte: "Une fois le calcul terminé, vérifier que la masse est en kilogrammes, les forces en newtons et l’accélération en m/s². Comparer le sens de l’accélération à celui de la résultante, et non nécessairement à celui de la vitesse."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer le poids d’un objet de masse 2 kg près du sol, avec g = 10 N/kg.",
        correction: "La norme du poids est P = mg = 2 × 10 = 20 N. Le poids est dirigé verticalement vers le bas."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet de masse 3 kg subit une résultante de 12 N. Calculer la norme de son accélération dans un référentiel galiléen.",
        correction: "D’après ΣF = ma, a = 12/3 = 4 m/s². L’accélération a le même sens que la résultante."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un référentiel galiléen, la résultante des forces sur un objet est nulle. Quels mouvements son centre de masse peut-il avoir ?",
        correction: "Son centre de masse reste au repos ou se déplace en ligne droite à vitesse constante : son mouvement est rectiligne uniforme."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet subit deux forces horizontales : 9 N vers la droite et 4 N vers la gauche. Donner la résultante.",
        correction: "Les forces sont opposées. Leur résultante a pour norme 9 − 4 = 5 N et est dirigée vers la droite."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une main pousse un mur. Quelle force constitue l’action réciproque de la force de la main sur le mur ?",
        correction: "C’est la force exercée par le mur sur la main. Elle a la même norme et la même direction, mais un sens opposé."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 5 kg est immobile sur une table horizontale. On néglige les autres forces. Avec g = 10 N/kg, donner la norme de son poids et celle de la réaction normale.",
        correction: "Le poids vaut P = mg = 5 × 10 = 50 N. L’objet est immobile dans le référentiel terrestre supposé galiléen : les deux forces se compensent. La réaction normale a donc une norme de 50 N et est dirigée vers le haut."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un mobile de masse 4 kg subit une force horizontale de 20 N vers la droite et une force de frottement de 8 N vers la gauche. Les forces verticales se compensent. Calculer son accélération.",
        correction: "La résultante horizontale est 20 − 8 = 12 N vers la droite. Donc a = 12/4 = 3 m/s² vers la droite."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une force résultante de 15 N produit une accélération de 3 m/s². Déterminer la masse du système.",
        correction: "Avec F = ma, on obtient m = F/a = 15/3 = 5 kg."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On néglige la résistance de l’air. Dans quel sens est dirigée l’accélération d’une balle lancée verticalement vers le haut ?",
        correction: "La seule force retenue est le poids, dirigé vers le bas. Dans le référentiel terrestre supposé galiléen, l’accélération est donc dirigée vers le bas, même pendant la montée."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 2 kg possède une accélération de 4 m/s² vers la gauche. Donner la résultante des forces extérieures.",
        correction: "La norme de la résultante est F = ma = 2 × 4 = 8 N. Elle est dirigée vers la gauche, comme l’accélération."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le poids d’un livre et la force exercée par une table sur ce livre forment-ils une paire d’actions réciproques ?",
        correction: "Non. Ces deux forces agissent toutes deux sur le livre. La force réciproque de celle de la table sur le livre est celle du livre sur la table."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet de masse 2 kg est tiré horizontalement par une force de 14 N vers la droite. Le frottement est de 6 N vers la gauche. Sa vitesse initiale est de 3 m/s vers la droite. Les forces sont constantes et les forces verticales se compensent. Calculer son accélération puis sa vitesse après 2 s.",
        correction: "La résultante horizontale vaut 14 − 6 = 8 N vers la droite. L’accélération est a = 8/2 = 4 m/s² vers la droite.\nEn orientant l’axe vers la droite, v(t) = v₀ + at. Donc v(2) = 3 + 4 × 2 = 11 m/s vers la droite."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une balle de masse 0,5 kg est en chute sans résistance de l’air. Prendre g = 10 m/s². Déterminer son poids et son accélération.",
        correction: "La norme de son poids est P = mg = 0,5 × 10 = 5 N, vers le bas. Le poids est la seule force retenue : ma = P, donc a = g = 10 m/s², vers le bas."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Dans un référentiel galiléen, un chariot de masse 3 kg se déplace sur une piste horizontale. Il subit une traction de 18 N vers la droite et un frottement de 6 N vers la gauche. Les forces verticales se compensent. Le chariot part du repos. 1. Calculer la résultante horizontale. 2. Déterminer l’accélération. 3. Calculer la vitesse après 5 s si les forces restent constantes.",
        correction: "1. La résultante horizontale vaut 18 − 6 = 12 N vers la droite.\n2. D’après la deuxième loi de Newton, a = 12/3 = 4 m/s² vers la droite.\n3. Le départ se fait sans vitesse initiale et l’accélération est constante : v = 0 + 4 × 5 = 20 m/s vers la droite."
      }
    ]
  }
]);
