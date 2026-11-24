enregistrerChapitres("2nde", "sp", [
  {
    id: 16,
    titre: "Chapitre 16 : Les composants électroniques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Des composants aux rôles différents",
        blocs: [
          {
            type: "introduction",
            titre: "Dans un circuit",
            texte: "Un circuit électronique associe des composants qui remplissent différents rôles : limiter un courant, émettre de la lumière ou commander une autre partie du circuit. Pour les étudier, on utilise des schémas et des modèles adaptés."
          },
          {
            type: "rappel",
            titre: "Dipôle",
            texte: "Un dipôle est un composant qui possède deux bornes. Une résistance, une diode et une DEL sont des dipôles. Un transistor possède généralement trois bornes : ce n’est donc pas un dipôle."
          },
          {
            type: "definition",
            titre: "Composant polarisé",
            texte: "Un composant polarisé doit être branché dans un sens déterminé pour fonctionner comme prévu. Une diode et une DEL sont polarisées. Une résistance ohmique ordinaire ne l’est pas."
          },
          {
            type: "remarque",
            titre: "Symboles et schémas",
            texte: "Un schéma électrique représente les connexions par des traits et les composants par des symboles normalisés. Le dessin ci-dessous est une aide de lecture simplifiée ; pour un schéma normalisé, on utilise les symboles appris en classe."
          },
          {
            type: "schema",
            titre: "Exemple de chaîne en série",
            texte: "Borne + du générateur → résistance → DEL → borne −\n\nLes mêmes charges traversent successivement les deux composants. Le sens de branchement de la DEL est important."
          }
        ]
      },

      {
        id: 2,
        titre: "La résistance",
        blocs: [
          {
            type: "definition",
            titre: "Conducteur ohmique",
            texte: "Une résistance, ou conducteur ohmique, est un dipôle pour lequel la tension U et l’intensité I sont proportionnelles dans les conditions étudiées. Sa résistance électrique se note R et s’exprime en ohms, symbole Ω."
          },
          {
            type: "regle",
            titre: "Loi d’Ohm",
            texte: "En convention récepteur : U = R × I.\n\nU est en volts (V), R en ohms (Ω) et I en ampères (A). On peut écrire I = U / R si R n’est pas nulle."
          },
          {
            type: "exemple",
            titre: "Limiter le courant",
            texte: "Une résistance de 200 Ω est soumise à une tension de 4,0 V. L’intensité qui la traverse vaut I = 4,0 / 200 = 0,020 A, soit 20 mA."
          },
          {
            type: "regle",
            titre: "Puissance reçue",
            texte: "Pour une résistance : P = U × I = R × I². La puissance s’exprime en watts (W). Une résistance réelle possède une puissance maximale admissible qu’il ne faut pas dépasser."
          },
          {
            type: "remarque",
            titre: "Valeurs réelles",
            texte: "La valeur indiquée sur une résistance est nominale : sa valeur réelle peut différer légèrement selon sa tolérance. Sa résistance peut aussi varier avec la température."
          },
          {
            type: "definition",
            titre: "Résistance variable",
            texte: "Une résistance variable permet de modifier une résistance dans un circuit. Un potentiomètre possède généralement trois bornes et peut notamment servir à régler une tension."
          }
        ]
      },

      {
        id: 3,
        titre: "La diode",
        blocs: [
          {
            type: "definition",
            titre: "Diode",
            texte: "Une diode est un dipôle polarisé qui conduit principalement dans un sens. Ses bornes sont appelées anode et cathode."
          },
          {
            type: "regle",
            titre: "Sens passant et sens bloquant",
            texte: "Dans le sens passant, le courant conventionnel traverse la diode de l’anode vers la cathode lorsqu’elle est suffisamment polarisée. Dans le sens opposé, une diode ordinaire bloque pratiquement le courant tant que ses limites sont respectées."
          },
          {
            type: "schema",
            titre: "Repérer les bornes",
            texte: "Sens passant du courant conventionnel :\n\nanode A ── diode ── cathode K\n             I →\n\nLa diode est un composant polarisé : inverser ses bornes change son fonctionnement."
          },
          {
            type: "definition",
            titre: "Modèle simplifié",
            texte: "Dans certains exercices, on modélise une diode passante par une tension constante U_D à ses bornes et une diode bloquée par un circuit ouvert. Ce modèle est une approximation : la valeur U_D est fournie dans l’énoncé."
          },
          {
            type: "exemple",
            titre: "Diode et résistance en série",
            texte: "Un générateur de 6,0 V alimente une résistance et une diode passante en série. Si le modèle donne U_D = 0,70 V, la tension aux bornes de la résistance vaut 6,0 − 0,70 = 5,3 V."
          },
          {
            type: "remarque",
            titre: "Limites du modèle",
            texte: "Une diode réelle n’est pas un interrupteur parfait : il existe notamment un faible courant inverse et des limites de tension et de courant à respecter. Un branchement inverse excessif peut l’endommager."
          }
        ]
      },

      {
        id: 4,
        titre: "La diode électroluminescente",
        blocs: [
          {
            type: "definition",
            titre: "DEL ou LED",
            texte: "Une diode électroluminescente, appelée DEL ou LED, est une diode qui émet de la lumière lorsqu’elle est traversée par un courant adapté dans le sens passant."
          },
          {
            type: "regle",
            titre: "Une résistance de limitation",
            texte: "Dans un modèle simple avec un générateur de tension constante, on associe une résistance en série à la DEL pour limiter le courant. La valeur de la tension de la DEL et le courant souhaité doivent être connus ou donnés."
          },
          {
            type: "methode",
            titre: "Calculer la résistance en série",
            texte: "Dans le modèle où la DEL passante a une tension constante U_DEL :\n1. Calculer U_R = U_générateur − U_DEL.\n2. Convertir le courant souhaité en ampères.\n3. Calculer R = U_R / I.\n4. Vérifier que le courant et la puissance sont compatibles avec les composants."
          },
          {
            type: "exemple",
            titre: "Exemple de calcul",
            texte: "Un générateur fournit 6,0 V. La DEL a une tension de 2,0 V et on souhaite un courant de 20 mA.\n\nU_R = 6,0 − 2,0 = 4,0 V.\nI = 20 mA = 0,020 A.\nR = 4,0 / 0,020 = 200 Ω.\n\nLa puissance reçue par la résistance est P = 4,0 × 0,020 = 0,080 W."
          },
          {
            type: "remarque",
            titre: "Ne pas généraliser une valeur",
            texte: "La tension d’une DEL dépend de ses caractéristiques et de son courant. On ne doit pas supposer que toutes les DEL ont une tension de 2,0 V."
          },
          {
            type: "remarque",
            titre: "Cadre sécurisé",
            texte: "Les calculs de ce chapitre sont théoriques. Ne pas brancher une DEL directement à une prise secteur ou à une source inconnue. Les manipulations électriques doivent être réalisées avec du matériel adapté et sous encadrement."
          }
        ]
      },

      {
        id: 5,
        titre: "Caractéristique d’un dipôle",
        blocs: [
          {
            type: "definition",
            titre: "Caractéristique tension-intensité",
            texte: "La caractéristique d’un dipôle est une représentation graphique reliant la tension à ses bornes et l’intensité qui le traverse. Il faut lire les grandeurs et leurs unités sur les axes."
          },
          {
            type: "regle",
            titre: "Conducteur ohmique",
            texte: "Pour un conducteur ohmique de résistance constante, la représentation de U en fonction de I est une droite passant par l’origine. Sa pente vaut R, car U = R × I."
          },
          {
            type: "exemple",
            titre: "Lire une résistance",
            texte: "Sur la caractéristique d’un conducteur ohmique, on lit U = 3,0 V pour I = 0,015 A.\n\nR = U / I = 3,0 / 0,015 = 200 Ω."
          },
          {
            type: "remarque",
            titre: "Composant non ohmique",
            texte: "La caractéristique d’une diode n’est pas une droite passant par l’origine. Le rapport U / I ne constitue donc pas une résistance constante permettant de décrire son fonctionnement dans toutes les conditions."
          },
          {
            type: "methode",
            titre: "Lire un graphique",
            texte: "1. Identifier la grandeur et l’unité de chaque axe.\n2. Repérer le point demandé.\n3. Lire les valeurs de U et I.\n4. Convertir les unités si nécessaire.\n5. N’utiliser U / I comme résistance constante que si le modèle du conducteur ohmique convient."
          }
        ]
      },

      {
        id: 6,
        titre: "Le transistor comme interrupteur",
        blocs: [
          {
            type: "definition",
            titre: "Transistor",
            texte: "Un transistor est un composant électronique à trois bornes. Dans un transistor bipolaire de type NPN, elles sont appelées base B, collecteur C et émetteur E."
          },
          {
            type: "introduction",
            titre: "Commander un courant",
            texte: "Dans un montage adapté, un faible courant de commande à la base peut permettre de commander un courant dans une autre partie du circuit. Cette propriété est utilisée pour réaliser un interrupteur électronique."
          },
          {
            type: "definition",
            titre: "Deux états simplifiés",
            texte: "Dans le modèle d’interrupteur étudié :\n• transistor bloqué : le courant collecteur est considéré comme nul ;\n• transistor saturé : le transistor laisse passer le courant du circuit commandé, avec une faible tension entre collecteur et émetteur.\n\nLes conditions de commande sont précisées par l’énoncé."
          },
          {
            type: "remarque",
            titre: "Un modèle",
            texte: "Le transistor réel possède des limites de courant, de tension et de puissance. On ne peut pas conclure qu’il est saturé simplement parce qu’un courant arrive à sa base : il faut que les conditions du montage le permettent."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les composants",
            texte: "La diode possède deux bornes. Le transistor bipolaire possède trois bornes. Leurs rôles et leurs modèles ne sont pas interchangeables."
          }
        ]
      },

      {
        id: 7,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Étudier un circuit avec DEL",
            texte: "1. Repérer le générateur, la DEL et la résistance.\n2. Vérifier que le sens de la DEL est indiqué.\n3. Si la DEL est passante dans le modèle donné, utiliser l’additivité des tensions.\n4. Calculer le courant avec la loi d’Ohm appliquée à la résistance.\n5. Vérifier les unités et les limites indiquées."
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : appliquer U = R × I à la diode comme si sa résistance était constante.\nÀ faire : utiliser le modèle de diode donné.\n\nErreur : oublier de convertir les mA en A.\nÀ faire : diviser par 1 000.\n\nErreur : utiliser la tension du générateur comme tension de la résistance sans tenir compte de la DEL.\nÀ faire : utiliser l’additivité des tensions.\n\nErreur : supposer qu’une diode conduit de façon identique dans les deux sens.\nÀ faire : repérer son anode et sa cathode.\n\nErreur : conclure qu’un transistor est saturé sans donnée suffisante.\nÀ faire : utiliser les conditions précisées dans l’énoncé."
          },
          {
            type: "schema",
            titre: "À retenir",
            texte: "Résistance : U_R = R × I\n\nDiode : composant polarisé\n\nDEL passante en série avec une résistance :\nU_générateur = U_R + U_DEL\n\nTransistor : composant à trois bornes pouvant servir d’interrupteur électronique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une diode et une résistance ohmique ordinaire sont deux dipôles. Lequel de ces composants est polarisé ?",
        correction: "La diode est polarisée : son sens de branchement compte. Une résistance ohmique ordinaire n’est pas polarisée."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Nomme les deux bornes d’une diode. Dans quel sens le courant conventionnel la traverse-t-il lorsqu’elle est passante ?",
        correction: "Les bornes sont l’anode et la cathode. Dans le sens passant, le courant conventionnel va de l’anode vers la cathode."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un conducteur ohmique de résistance 100 Ω est traversé par un courant de 0,020 A. Calcule la tension à ses bornes. On donne U = R × I.",
        correction: "U = R × I = 100 × 0,020 = 2,0 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une résistance ohmique de 150 Ω est soumise à une tension de 3,0 V. Calcule le courant en ampères puis en milliampères. On donne U = R × I et 1 A = 1 000 mA.",
        correction: "I = U / R = 3,0 / 150 = 0,020 A, soit 20 mA."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un modèle simplifié, une diode passante et une résistance sont en série aux bornes d’un générateur de 9,0 V. La tension de la diode vaut 0,70 V. Calcule la tension de la résistance.",
        correction: "Par additivité des tensions : U_R = 9,0 − 0,70 = 8,3 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un transistor bipolaire NPN possède trois bornes. Nomme-les et indique si ce composant est un dipôle.",
        correction: "Ses bornes sont la base B, le collecteur C et l’émetteur E. Il possède trois bornes : ce n’est donc pas un dipôle."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un générateur idéal de 9,0 V alimente en série une DEL passante et une résistance de 350 Ω. Dans le modèle utilisé, la tension de la DEL vaut 2,0 V. Calcule la tension aux bornes de la résistance, puis le courant dans le circuit en A et en mA. On donne U_R = R × I.",
        correction: "U_R = 9,0 − 2,0 = 7,0 V.\n\nI = U_R / R = 7,0 / 350 = 0,020 A = 20 mA. La DEL et la résistance étant en série, elles sont traversées par ce même courant."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "La caractéristique d’un conducteur ohmique passe par l’origine. On lit une tension de 4,0 V pour une intensité de 20 mA. Calcule sa résistance, puis la tension attendue pour un courant de 30 mA. On donne U = R × I et 1 A = 1 000 mA.",
        correction: "20 mA = 0,020 A. Donc R = 4,0 / 0,020 = 200 Ω.\n\nPour 30 mA = 0,030 A : U = 200 × 0,030 = 6,0 V."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un générateur idéal de 6,0 V alimente en série une résistance de 100 Ω et une diode. Dans le modèle donné, la diode est bloquée et se comporte comme un circuit ouvert. Détermine le courant dans la branche et la tension aux bornes de la résistance.",
        correction: "La diode bloquée ouvre le circuit dans ce modèle : I = 0 A. Pour la résistance, U_R = R × I = 100 × 0 = 0 V."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un montage théorique, un transistor est utilisé comme interrupteur. L’énoncé précise que le transistor est bloqué lorsque la commande est absente et saturé lorsque la commande est présente. Dans le modèle utilisé, le courant collecteur est nul à l’état bloqué et vaut 50 mA à l’état saturé. Donne le courant collecteur dans chaque état et explique le rôle de la commande.",
        correction: "Sans commande, le transistor est bloqué : le courant collecteur est nul. Avec commande, il est saturé : le courant collecteur vaut 50 mA. La commande permet donc de contrôler le courant dans la partie du circuit reliée au collecteur."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un générateur idéal de 9,0 V doit alimenter une DEL et une résistance en série. Dans le modèle utilisé, la DEL passante a une tension constante de 2,0 V. On souhaite un courant de 20 mA. 1. Calcule la tension nécessaire aux bornes de la résistance. 2. Calcule sa résistance. 3. Calcule la puissance qu’elle reçoit. 4. Une résistance prévue pour une puissance maximale de 0,25 W convient-elle du point de vue de la puissance ? Données : U_R = R × I ; P = U_R × I ; 1 A = 1 000 mA.",
        correction: "1. U_R = 9,0 − 2,0 = 7,0 V.\n\n2. I = 20 mA = 0,020 A. Donc R = 7,0 / 0,020 = 350 Ω.\n\n3. P = 7,0 × 0,020 = 0,14 W.\n\n4. Oui, du point de vue de la puissance dans ce modèle : 0,14 W est inférieur à 0,25 W. Il faut aussi que les autres caractéristiques des composants soient adaptées."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un générateur idéal de 12 V alimente deux branches en dérivation. La première contient une résistance ohmique R₁ = 600 Ω. La seconde contient une DEL passante de tension constante 2,0 V en série avec une résistance R₂ = 500 Ω. 1. Calcule le courant dans chaque branche. 2. Calcule le courant total fourni par le générateur. 3. Calcule la puissance reçue par R₂. On donne U = R × I et P = U × I.",
        correction: "1. Chaque branche est soumise à 12 V.\n\nPremière branche : I₁ = 12 / 600 = 0,020 A = 20 mA.\n\nSeconde branche : U_R₂ = 12 − 2,0 = 10 V. Donc I₂ = 10 / 500 = 0,020 A = 20 mA.\n\n2. Loi des nœuds : I_total = I₁ + I₂ = 0,040 A = 40 mA.\n\n3. P_R₂ = U_R₂ × I₂ = 10 × 0,020 = 0,20 W."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un générateur idéal de 6,0 V alimente en série une résistance ohmique de 250 Ω et une DEL. Dans le sens passant, on utilise le modèle U_DEL = 1,5 V. Dans le sens bloquant, la DEL est modélisée par un circuit ouvert. 1. Calcule le courant si la DEL est passante. 2. Calcule la puissance reçue par la résistance dans ce cas. 3. Quel est le courant si la DEL est inversée et bloquée dans ce modèle ? Données : U_R = R × I ; P_R = R × I².",
        correction: "1. U_R = 6,0 − 1,5 = 4,5 V. Donc I = 4,5 / 250 = 0,018 A = 18 mA.\n\n2. P_R = 250 × 0,018² = 0,081 W.\n\n3. Une DEL bloquée est assimilée ici à un circuit ouvert : le courant est nul dans la branche."
      }
    ]
  }
]);
