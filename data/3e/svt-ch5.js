// ===== GUIDE - SVT 3e (T9) =====
// Chapitre 5 : Le système nerveux et les mouvements

enregistrerChapitres("3e", "svt", [
  {
    id: "svt3-systeme-nerveux-mouvements",
    titre: "Chapitre 5 : Le système nerveux et les mouvements",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt3-nerveux-introduction",
        titre: "Recevoir une information et réagir",
        blocs: [
          {
            type: "introduction",
            titre: "Deux situations",
            texte: "Tu vois un cahier et tu tends volontairement la main pour le prendre. Si ta main touche par accident un objet très chaud, elle peut se retirer très rapidement. Dans les deux cas, le système nerveux intervient, mais les réponses ne sont pas organisées de la même manière."
          },
          {
            type: "definition",
            titre: "Le système nerveux",
            texte: "Le système nerveux reçoit des informations, les traite et contribue à commander des réponses de l'organisme. Il permet notamment de percevoir le milieu, de réaliser des mouvements et d'assurer certaines réactions rapides."
          },
          {
            type: "definition",
            titre: "Stimulus et réponse",
            texte: "Un stimulus est une modification capable de déclencher une réaction : lumière, son, contact ou chaleur, par exemple. La réponse est la réaction de l'organisme, comme un mouvement de retrait."
          },
          {
            type: "exemple",
            titre: "Toucher un objet chaud",
            texte: "La chaleur ou la douleur constitue un stimulus détecté par des récepteurs de la peau. Des messages nerveux sont transmis et des muscles peuvent se contracter : la main se retire."
          }
        ]
      },
      {
        id: "svt3-nerveux-organes",
        titre: "Les organes du système nerveux",
        blocs: [
          {
            type: "definition",
            titre: "Les centres nerveux",
            texte: "Les centres nerveux comprennent l'encéphale, situé dans la boîte crânienne, et la moelle épinière, située dans la colonne vertébrale. Ils reçoivent et traitent des informations nerveuses et participent à l'élaboration de réponses."
          },
          {
            type: "texte",
            titre: "Encéphale et moelle épinière",
            texte: "L'encéphale comprend notamment le cerveau. Il intervient dans les perceptions, la mémoire, la réflexion et la commande de nombreux mouvements volontaires. La moelle épinière transmet des messages entre l'encéphale et différentes parties du corps et intervient dans certains réflexes."
          },
          {
            type: "definition",
            titre: "Les nerfs",
            texte: "Les nerfs relient les centres nerveux à différentes parties du corps. Ils contiennent des fibres qui conduisent des messages nerveux. Certaines fibres transmettent des informations vers les centres nerveux ; d'autres conduisent des commandes vers les muscles ou d'autres organes."
          },
          {
            type: "schema",
            titre: "Organisation simplifiée du système nerveux",
            svg: "<svg viewBox='0 0 360 310' xmlns='http://www.w3.org/2000/svg'><ellipse cx='180' cy='50' rx='42' ry='32' fill='#fbcfe8' stroke='#9d174d' stroke-width='2'/><text x='245' y='48' font-size='13' fill='#1f2937'>Encéphale</text><line x1='239' y1='51' x2='220' y2='51' stroke='#374151'/><rect x='173' y='82' width='14' height='150' rx='6' fill='#fbcfe8' stroke='#9d174d' stroke-width='2'/><text x='225' y='119' font-size='13' fill='#1f2937'>Moelle épinière</text><line x1='219' y1='116' x2='188' y2='116' stroke='#374151'/><path d='M173 115 L105 150 M187 115 L255 150 M173 165 L95 205 M187 165 L265 205 M173 215 L125 270 M187 215 L235 270' fill='none' stroke='#2563eb' stroke-width='3'/><text x='10' y='151' font-size='13' fill='#1d4ed8'>Nerfs</text><line x1='52' y1='148' x2='105' y2='150' stroke='#2563eb'/><text x='180' y='300' text-anchor='middle' font-size='12' fill='#374151'>Schéma d'organisation : les proportions ne sont pas respectées</text></svg>",
            legende: "L'encéphale et la moelle épinière sont des centres nerveux. Les nerfs les relient à différentes parties du corps."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "La moelle épinière est un centre nerveux ; elle ne doit pas être confondue avec les nerfs qui en partent. Le cerveau fait partie de l'encéphale."
          }
        ]
      },
      {
        id: "svt3-nerveux-messages",
        titre: "Récepteurs, messages et muscles",
        blocs: [
          {
            type: "definition",
            titre: "Le récepteur sensoriel",
            texte: "Un récepteur sensoriel détecte un stimulus. Par exemple, des récepteurs de la peau détectent notamment le contact ou une chaleur douloureuse ; l'œil reçoit des informations lumineuses."
          },
          {
            type: "definition",
            titre: "Le message nerveux",
            texte: "Un message nerveux est une information transmise par les cellules nerveuses. Un message sensitif va d'un récepteur vers un centre nerveux. Un message moteur va d'un centre nerveux vers un organe effecteur."
          },
          {
            type: "definition",
            titre: "L'organe effecteur",
            texte: "Un organe effecteur réalise une réponse. Dans un mouvement, un muscle est un effecteur : il se contracte en réponse à une commande nerveuse et contribue au déplacement d'une partie du corps."
          },
          {
            type: "regle",
            titre: "Un trajet général",
            texte: "Stimulus → récepteur sensoriel → message sensitif → centre nerveux → message moteur → muscle → mouvement."
          },
          {
            type: "remarque",
            titre: "Le sens des messages",
            texte: "Le message sensitif se dirige vers un centre nerveux. Le message moteur part d'un centre nerveux vers un muscle. Ne pas inverser ces deux directions."
          }
        ]
      },
      {
        id: "svt3-nerveux-volontaire",
        titre: "Le mouvement volontaire",
        blocs: [
          {
            type: "definition",
            titre: "Un mouvement décidé",
            texte: "Un mouvement volontaire est un mouvement réalisé de façon intentionnelle : prendre un objet ou lever la main, par exemple. Le cerveau participe à sa préparation et à sa commande."
          },
          {
            type: "exemple",
            titre: "Prendre un cahier",
            texte: "La lumière provenant du cahier atteint les yeux. Des informations nerveuses sensitives rejoignent l'encéphale. Après traitement de ces informations et décision, des commandes motrices sont transmises vers les muscles du bras et de la main, notamment par la moelle épinière et les nerfs. Les muscles se contractent et la main se déplace."
          },
          {
            type: "regle",
            titre: "À retenir",
            texte: "Pour un mouvement volontaire, le cerveau intervient dans la décision et la commande. Les nerfs transmettent les messages ; les muscles réalisent le mouvement par leur contraction."
          },
          {
            type: "remarque",
            titre: "Des gestes appris",
            texte: "Écrire ou faire du vélo demande un apprentissage. Avec l'entraînement, certaines parties de ces gestes deviennent plus faciles et automatisées, mais cela ne les transforme pas en réflexes spinaux."
          }
        ]
      },
      {
        id: "svt3-nerveux-reflexe",
        titre: "Le réflexe spinal",
        blocs: [
          {
            type: "definition",
            titre: "Une réponse involontaire",
            texte: "Un réflexe est une réponse rapide et involontaire à un stimulus. Dans un réflexe spinal, la moelle épinière participe directement à l'organisation de la réponse."
          },
          {
            type: "exemple",
            titre: "Le retrait de la main",
            texte: "Lorsqu'un stimulus douloureux atteint la peau de la main, des messages sensitifs rejoignent la moelle épinière. Celle-ci participe à l'envoi de messages moteurs vers des muscles qui permettent de retirer la main. La réponse peut commencer avant une décision volontaire."
          },
          {
            type: "schema",
            titre: "Trajet simplifié d'un réflexe spinal",
            svg: "<svg viewBox='0 0 360 360' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='8' width='250' height='38' rx='7' fill='#fef3c7' stroke='#92400e'/><text x='180' y='32' text-anchor='middle' font-size='13' fill='#1f2937'>Stimulus douloureux</text><path d='M180 46 L180 61 M175 55 L180 62 L185 55' fill='none' stroke='#374151' stroke-width='2'/><rect x='55' y='64' width='250' height='38' rx='7' fill='#fce7f3' stroke='#be185d'/><text x='180' y='88' text-anchor='middle' font-size='13' fill='#1f2937'>Récepteur de la peau</text><path d='M180 102 L180 119 M175 113 L180 120 L185 113' fill='none' stroke='#2563eb' stroke-width='2'/><text x='190' y='116' font-size='11' fill='#1d4ed8'>voie sensitive</text><rect x='55' y='122' width='250' height='40' rx='7' fill='#fbcfe8' stroke='#9d174d'/><text x='180' y='147' text-anchor='middle' font-size='13' fill='#1f2937'>Moelle épinière</text><path d='M180 162 L180 180 M175 174 L180 181 L185 174' fill='none' stroke='#be185d' stroke-width='2'/><text x='190' y='176' font-size='11' fill='#be185d'>voie motrice</text><rect x='55' y='183' width='250' height='38' rx='7' fill='#dcfce7' stroke='#15803d'/><text x='180' y='207' text-anchor='middle' font-size='13' fill='#1f2937'>Muscle effecteur</text><path d='M180 221 L180 238 M175 232 L180 239 L185 232' fill='none' stroke='#374151' stroke-width='2'/><rect x='55' y='241' width='250' height='38' rx='7' fill='#dbeafe' stroke='#2563eb'/><text x='180' y='265' text-anchor='middle' font-size='13' fill='#1f2937'>Retrait de la main</text><path d='M305 142 L330 142 L330 70 L305 70' fill='none' stroke='#7c3aed' stroke-width='2'/><path d='M312 65 L305 70 L312 75' fill='none' stroke='#7c3aed' stroke-width='2'/><text x='180' y='308' text-anchor='middle' font-size='12' fill='#6d28d9'>L'information peut aussi atteindre l'encéphale.</text><text x='180' y='330' text-anchor='middle' font-size='11' fill='#374151'>Schéma fonctionnel simplifié</text></svg>",
            legende: "La voie sensitive conduit l'information vers la moelle épinière ; la voie motrice conduit la commande vers le muscle. L'information est aussi transmise vers l'encéphale."
          },
          {
            type: "remarque",
            titre: "Le cerveau est-il informé ?",
            texte: "Oui. Dans un réflexe spinal, la réponse de retrait peut être organisée par la moelle épinière sans attendre une décision consciente. Cependant, des informations nerveuses remontent aussi vers l'encéphale, ce qui permet notamment la perception de la douleur."
          },
          {
            type: "remarque",
            titre: "Tous les réflexes ne sont pas spinaux",
            texte: "Certains réflexes font intervenir d'autres centres nerveux. Il ne faut donc pas dire que tous les réflexes sont commandés par la moelle épinière."
          }
        ]
      },
      {
        id: "svt3-nerveux-comparer",
        titre: "Comparer mouvement volontaire et réflexe",
        blocs: [
          {
            type: "tableau",
            titre: "Deux types de réponses",
            entetes: ["Critère", "Mouvement volontaire", "Réflexe spinal"],
            lignes: [
              ["Exemple", "Prendre volontairement un objet", "Retirer rapidement la main après un stimulus douloureux"],
              ["Caractère", "Intentionnel", "Involontaire"],
              ["Centre intervenant directement", "Le cerveau participe à la commande", "La moelle épinière participe directement à la réponse"],
              ["Muscles", "Ils exécutent la commande", "Ils exécutent aussi la commande"],
              ["Information vers l'encéphale", "L'encéphale reçoit et traite des informations", "L'information peut aussi remonter vers l'encéphale"]
            ]
          },
          {
            type: "methode",
            titre: "Expliquer un mouvement",
            texte: "1. Identifie le stimulus ou la situation de départ.\n2. Repère le récepteur qui reçoit l'information.\n3. Indique le trajet du message sensitif vers un centre nerveux.\n4. Précise le centre qui participe à la réponse.\n5. Décris le trajet du message moteur vers le muscle.\n6. Indique la réponse observée et précise si elle est volontaire ou réflexe."
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "• Dire qu'un muscle reçoit directement le stimulus sans intervention nerveuse dans le trajet étudié.\n• Inverser les messages sensitifs et moteurs.\n• Confondre moelle épinière et nerf.\n• Affirmer que le cerveau ne reçoit aucune information lors d'un réflexe spinal.\n• Appeler « réflexe spinal » tout geste devenu facile grâce à l'entraînement."
          }
        ]
      },
      {
        id: "svt3-nerveux-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan du chapitre",
            texte: "• L'encéphale et la moelle épinière sont des centres nerveux ; les nerfs les relient aux autres parties du corps.\n• Un récepteur détecte un stimulus et un message sensitif rejoint un centre nerveux.\n• Un message moteur peut ensuite atteindre un muscle, qui se contracte.\n• Le cerveau participe à la commande des mouvements volontaires.\n• Un réflexe spinal est une réponse rapide et involontaire à laquelle la moelle épinière participe directement.\n• Lors d'un réflexe spinal, des informations peuvent aussi atteindre l'encéphale."
          },
          {
            type: "rappel",
            titre: "Pour la suite",
            texte: "Le fonctionnement et la protection du système nerveux, notamment le rôle du sommeil et les risques liés aux substances psychoactives, seront étudiés dans la suite du cours."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Nomme les deux grandes parties des centres nerveux.",
        correction: "Les centres nerveux comprennent l'encéphale et la moelle épinière."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel organe effecteur se contracte pour produire un mouvement ?",
        correction: "C'est un muscle qui se contracte pour contribuer au mouvement."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète : récepteur → message ... → centre nerveux → message ... → muscle.",
        correction: "Récepteur → message sensitif → centre nerveux → message moteur → muscle.\nLe message sensitif se dirige vers le centre nerveux ; le message moteur part du centre vers le muscle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Donne une différence entre un mouvement volontaire et un réflexe spinal.",
        correction: "Un mouvement volontaire est intentionnel et le cerveau participe à sa commande. Un réflexe spinal est une réponse involontaire à laquelle la moelle épinière participe directement."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne touche accidentellement un objet très chaud et retire rapidement sa main. Identifie le stimulus, le récepteur et l'organe effecteur.",
        correction: "Le stimulus est la chaleur douloureuse liée au contact. Des récepteurs sensoriels de la peau détectent ce stimulus. Les muscles qui se contractent pour retirer la main sont les organes effecteurs."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève dit : « Dans un réflexe spinal, le message moteur va de la peau vers la moelle épinière. » Corrige son affirmation.",
        correction: "Le message qui va des récepteurs de la peau vers la moelle épinière est un message sensitif. Le message moteur suit l'autre direction : il part d'un centre nerveux vers un muscle effecteur."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique pourquoi le retrait réflexe de la main peut commencer avant que la personne décide consciemment de la retirer.",
        correction: "Dans ce réflexe spinal, le message sensitif rejoint la moelle épinière, qui participe directement à l'envoi d'une commande motrice vers les muscles. La réponse peut donc commencer sans attendre une décision volontaire du cerveau. Des informations remontent aussi vers l'encéphale."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Après beaucoup d'entraînement, une élève écrit plus facilement sans réfléchir à chaque mouvement de ses doigts. Peut-on en conclure que l'écriture est un réflexe spinal ? Explique.",
        correction: "Non. L'écriture est un geste appris. Avec l'entraînement, certaines de ses composantes deviennent automatisées, mais cela ne prouve pas qu'il s'agit d'un réflexe spinal. Un réflexe spinal est une réponse involontaire à un stimulus dans laquelle la moelle épinière participe directement."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une personne voit une balle arriver, décide de l'attraper et tend les bras. Décris les étapes reliant l'information visuelle au mouvement. Nomme le récepteur, un centre nerveux, les messages et les effecteurs.",
        correction: "1. Les yeux reçoivent les informations lumineuses provenant de la balle.\n2. Des messages nerveux sensitifs rejoignent l'encéphale, où l'information est traitée.\n3. Le cerveau participe à la décision et à la commande du mouvement volontaire.\n4. Des messages moteurs sont transmis vers les muscles des bras et des mains, notamment par la moelle épinière et les nerfs.\n5. Les muscles effecteurs se contractent et les bras se déplacent pour tenter d'attraper la balle."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un camarade affirme : « Quand on retire la main par réflexe, le cerveau ne reçoit jamais d'information. C'est le muscle qui décide seul de se contracter. » Repère les erreurs et décris le trajet simplifié de la réponse.",
        correction: "Les deux affirmations sont incorrectes. Le muscle ne décide pas seul : il reçoit une commande nerveuse. De plus, des informations peuvent remonter vers l'encéphale lors du réflexe.\nTrajet simplifié : stimulus douloureux → récepteurs de la peau → voie sensitive → moelle épinière → voie motrice → muscles → retrait de la main. La moelle épinière participe directement à la réponse sans attendre une décision consciente."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un modèle simplifié, une lésion empêche les messages sensitifs venant de la peau d'atteindre la moelle épinière, mais les muscles et la voie motrice sont intacts. Peut-on attendre le retrait réflexe habituel en réponse à un stimulus appliqué à cette zone ? Justifie sans conclure sur tous les mouvements possibles de la personne.",
        correction: "On ne peut pas attendre le retrait réflexe habituel déclenché par ce stimulus dans le modèle décrit. Le message sensitif n'atteint pas la moelle épinière : une étape du trajet réflexe est interrompue, même si les muscles et la voie motrice sont intacts.\nCela ne permet pas de conclure que tous les mouvements de la personne sont impossibles. D'autres trajets et d'autres commandes peuvent exister ; la situation réelle dépend notamment de la lésion."
      }
    ]
  }
]);
