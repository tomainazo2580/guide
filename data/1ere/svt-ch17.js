enregistrerChapitres("1ere", "svt", [
  {
    id: 17,
    titre: "Chapitre 17 : La sédimentation et les roches sédimentaires",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "De la roche au sédiment",
        blocs: [
          {
            type: "introduction",
            titre: "Une histoire enregistrée dans les roches",
            texte: "Les roches sédimentaires se forment à partir de matériaux accumulés à la surface de la Terre. Leur étude permet de reconstituer d’anciens milieux : rivières, lacs, plages, mers ou déserts. Leur formation comprend souvent l’altération, l’érosion, le transport, le dépôt puis la transformation des sédiments."
          },
          {
            type: "definition",
            titre: "Altération",
            texte: "L’altération est la modification et la désagrégation des roches au contact de l’eau, de l’air et des êtres vivants. Elle comprend des actions physiques, qui fragmentent la roche, et des actions chimiques, qui transforment ou dissolvent certains minéraux."
          },
          {
            type: "exemple",
            titre: "Altération d’un granite",
            texte: "Dans un granite, l’eau peut transformer certains minéraux comme les feldspaths en minéraux argileux. D’autres grains, notamment de quartz, résistent davantage et peuvent être libérés. Le granite se désagrège progressivement."
          },
          {
            type: "definition",
            titre: "Érosion",
            texte: "L’érosion est l’enlèvement des matériaux à la surface de la Terre. L’eau, le vent, la glace et la gravité peuvent déplacer des fragments ou des substances dissoutes issus notamment de l’altération."
          },
          {
            type: "definition",
            titre: "Transport",
            texte: "Les matériaux érodés peuvent être transportés sous forme de fragments solides ou de substances dissoutes. La distance et les conditions du transport influencent notamment la taille, la forme et le tri des grains."
          },
          {
            type: "remarque",
            titre: "Observer les grains",
            texte: "Des grains arrondis peuvent témoigner d’une usure pendant le transport, mais leur forme ne permet pas à elle seule de connaître toute leur histoire. Il faut aussi observer leur taille, leur composition, leur tri et le contexte du dépôt."
          }
        ]
      },

      {
        id: 2,
        titre: "La sédimentation",
        blocs: [
          {
            type: "definition",
            titre: "Sédimentation",
            texte: "La sédimentation est l’accumulation de particules ou de substances dans un milieu de dépôt. Elle peut se produire dans une rivière, un lac, un désert, sur une plage ou au fond d’une mer."
          },
          {
            type: "definition",
            titre: "Dépôt de particules",
            texte: "Lorsqu’un courant ralentit, il perd une partie de sa capacité à transporter les particules. Les éléments les plus gros ou les plus lourds peuvent se déposer avant les particules plus fines. Le dépôt dépend cependant aussi de la forme des grains et des conditions du milieu."
          },
          {
            type: "definition",
            titre: "Sédimentation chimique et biologique",
            texte: "Certaines substances dissoutes peuvent précipiter et former des dépôts minéraux. D’autres dépôts résultent en grande partie de l’accumulation de restes ou de structures produits par des organismes, comme certaines coquilles calcaires. Plusieurs processus peuvent agir ensemble."
          },
          {
            type: "schema",
            titre: "Un trajet possible des matériaux",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 330" role="img" aria-labelledby="svt17s1t svt17s1d">
  <title id="svt17s1t">Altération, transport et dépôt</title>
  <desc id="svt17s1d">Une roche en relief s'altère. Des fragments sont transportés par une rivière puis déposés dans un bassin où ils s'accumulent en couches.</desc>
  <defs>
    <marker id="svt17a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <path d="M0 0 L8 4 L0 8 Z" fill="#345"/>
    </marker>
  </defs>
  <rect width="720" height="330" fill="#fff"/>
  <path d="M20 210 L125 70 L225 210 Z" fill="#b7b3aa" stroke="#666" stroke-width="2"/>
  <path d="M130 165 Q230 190 315 220 Q405 250 510 225" fill="none" stroke="#5d9fbe" stroke-width="10"/>
  <rect x="480" y="205" width="220" height="45" fill="#c7e6f2"/>
  <rect x="480" y="250" width="220" height="20" fill="#e8dba9" stroke="#987"/>
  <rect x="480" y="270" width="220" height="20" fill="#bfc9bb" stroke="#987"/>
  <text x="35" y="55" font-size="16">Roche altérée</text>
  <text x="225" y="175" font-size="16">Transport par l'eau</text>
  <path d="M250 185 L335 215" stroke="#345" stroke-width="2" marker-end="url(#svt17a1)"/>
  <text x="510" y="190" font-size="16">Bassin de dépôt</text>
  <text x="505" y="315" font-size="15">Couches de sédiments</text>
</svg>`,
            legende: "Schéma simplifié : les matériaux peuvent être transportés et déposés par d’autres agents que l’eau."
          },
          {
            type: "definition",
            titre: "Bassin sédimentaire",
            texte: "Un bassin sédimentaire est une région où des sédiments s’accumulent pendant une durée plus ou moins longue. Il peut être continental ou marin. Son histoire dépend notamment du relief, des apports sédimentaires et des mouvements de la lithosphère."
          },
          {
            type: "remarque",
            titre: "Les couches ne sont pas toujours continues",
            texte: "La sédimentation peut être interrompue, puis reprendre. Une partie des dépôts peut aussi être érodée. Une série sédimentaire peut donc présenter des lacunes."
          }
        ]
      },

      {
        id: 3,
        titre: "De la sédimentation à la roche : la diagenèse",
        blocs: [
          {
            type: "definition",
            titre: "Diagenèse",
            texte: "La diagenèse est l’ensemble des transformations qui affectent un sédiment après son dépôt et peuvent le transformer en roche sédimentaire. Elle se produit généralement à faible profondeur, à des températures et pressions inférieures à celles du métamorphisme."
          },
          {
            type: "definition",
            titre: "Compaction",
            texte: "La compaction est le tassement des sédiments sous le poids des matériaux accumulés au-dessus. Elle rapproche les grains et peut chasser une partie de l’eau présente entre eux."
          },
          {
            type: "definition",
            titre: "Cimentation",
            texte: "La cimentation correspond à la formation de minéraux dans les espaces entre les grains. Ces minéraux, précipités à partir de substances dissoutes, lient les grains et contribuent à former une roche solide."
          },
          {
            type: "schema",
            titre: "Formation simplifiée d’une roche détritique",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 260" role="img" aria-labelledby="svt17s2t svt17s2d">
  <title id="svt17s2t">Compaction et cimentation</title>
  <desc id="svt17s2d">Des grains de sédiment espacés sont progressivement rapprochés puis liés par un ciment minéral pour former une roche.</desc>
  <defs>
    <marker id="svt17a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <path d="M0 0 L8 4 L0 8 Z" fill="#444"/>
    </marker>
  </defs>
  <rect width="720" height="260" fill="#fff"/>
  <rect x="25" y="65" width="165" height="120" fill="#e2eff8" stroke="#527b95"/>
  <circle cx="60" cy="100" r="14" fill="#d5b995"/><circle cx="115" cy="95" r="14" fill="#d5b995"/>
  <circle cx="75" cy="150" r="14" fill="#d5b995"/><circle cx="145" cy="150" r="14" fill="#d5b995"/>
  <rect x="275" y="65" width="165" height="120" fill="#e2eff8" stroke="#527b95"/>
  <circle cx="315" cy="105" r="17" fill="#d5b995"/><circle cx="350" cy="105" r="17" fill="#d5b995"/>
  <circle cx="332" cy="140" r="17" fill="#d5b995"/><circle cx="367" cy="140" r="17" fill="#d5b995"/>
  <rect x="525" y="65" width="165" height="120" fill="#d8c9a8" stroke="#806b55"/>
  <circle cx="565" cy="105" r="17" fill="#d5b995" stroke="#765"/>
  <circle cx="600" cy="105" r="17" fill="#d5b995" stroke="#765"/>
  <circle cx="582" cy="140" r="17" fill="#d5b995" stroke="#765"/>
  <circle cx="617" cy="140" r="17" fill="#d5b995" stroke="#765"/>
  <path d="M190 125 L270 125 M440 125 L520 125" stroke="#444" stroke-width="2" marker-end="url(#svt17a2)"/>
  <text x="107" y="220" text-anchor="middle" font-size="15">Sédiment meuble</text>
  <text x="357" y="220" text-anchor="middle" font-size="15">Compaction</text>
  <text x="607" y="220" text-anchor="middle" font-size="15">Cimentation</text>
</svg>`,
            legende: "Schéma simplifié : la diagenèse peut comprendre plusieurs transformations et ne suit pas toujours exactement ces étapes."
          },
          {
            type: "exemple",
            titre: "Du sable au grès",
            texte: "Un sable accumulé peut être enfoui, compacté puis cimenté. Il forme alors une roche détritique appelée grès. Les grains de sable restent généralement reconnaissables dans la roche."
          },
          {
            type: "remarque",
            titre: "Diagenèse et métamorphisme",
            texte: "La diagenèse transforme un sédiment à des conditions généralement moins élevées que celles du métamorphisme. La limite entre les deux n’est pas toujours simple à fixer. Le métamorphisme transforme une roche à l’état principalement solide sous l’effet de nouvelles conditions de pression et de température."
          }
        ]
      },

      {
        id: 4,
        titre: "Diversité des roches sédimentaires",
        blocs: [
          {
            type: "definition",
            titre: "Roches détritiques",
            texte: "Les roches détritiques sont formées principalement de fragments issus de l’altération et de l’érosion d’autres roches. Le grès contient des grains de taille comparable à celle du sable. Un conglomérat contient des fragments plus gros, souvent visibles à l’œil nu."
          },
          {
            type: "definition",
            titre: "Roches carbonatées",
            texte: "Les calcaires sont des roches constituées principalement de minéraux carbonatés, notamment de calcite. Ils peuvent se former par accumulation de restes d’organismes, par précipitation chimique ou par une combinaison de processus."
          },
          {
            type: "definition",
            titre: "Évaporites",
            texte: "Les évaporites sont des roches formées par précipitation de minéraux lorsque des eaux riches en substances dissoutes s’évaporent fortement. Le gypse et le sel gemme sont des exemples de matériaux évaporitiques."
          },
          {
            type: "tableau",
            titre: "Quelques exemples",
            entetes: ["Roche", "Caractère principal", "Formation simplifiée"],
            lignes: [
              ["Grès", "Grains de taille sableuse généralement cimentés.", "Accumulation, compaction et cimentation de sable."],
              ["Conglomérat", "Fragments grossiers liés dans une matrice ou par un ciment.", "Dépôt puis transformation de graviers et autres fragments."],
              ["Calcaire", "Roche riche en carbonates, souvent en calcite.", "Dépôt de matériaux carbonatés d’origine biologique ou chimique."],
              ["Sel gemme", "Roche riche en halite.", "Précipitation de sels dans un milieu soumis à une forte évaporation."]
            ]
          },
          {
            type: "methode",
            titre: "Décrire une roche",
            texte: "Observer la couleur, la taille et la forme des grains, leur tri, la présence de couches ou de fossiles. Rechercher ensuite des indices complémentaires, par exemple la réaction d’un calcaire à un acide dilué sous supervision. Ne pas identifier un milieu ancien à partir d’un seul caractère."
          },
          {
            type: "remarque",
            titre: "Sécurité des tests",
            texte: "Les tests à l’acide ne doivent être réalisés qu’avec un produit et des protections adaptés, sous la supervision d’un enseignant. Ne jamais goûter un échantillon pour l’identifier."
          }
        ]
      },

      {
        id: 5,
        titre: "Lire un milieu ancien dans une roche",
        blocs: [
          {
            type: "definition",
            titre: "Faciès sédimentaire",
            texte: "Le faciès d’une couche regroupe ses caractères observables : nature de la roche, grains, structures et fossiles. Il donne des indices sur les conditions de dépôt, mais son interprétation exige la comparaison de plusieurs observations."
          },
          {
            type: "exemple",
            titre: "Quelques indices",
            texte: "Des galets arrondis peuvent indiquer un transport et un dépôt dans un milieu suffisamment dynamique. Des fossiles marins peuvent indiquer un milieu marin. Des traces de dessiccation peuvent suggérer qu’un sédiment humide a été exposé à l’air et s’est asséché. Chaque interprétation doit être vérifiée avec le contexte."
          },
          {
            type: "definition",
            titre: "Stratification entrecroisée",
            texte: "La stratification entrecroisée correspond à de petits lits inclinés dans une couche. Elle peut se former lors du déplacement de rides ou de dunes de sable sous l’action d’un courant d’eau ou du vent."
          },
          {
            type: "methode",
            titre: "Proposer une reconstitution",
            texte: "1. Décrire la roche et ses structures. 2. Identifier les fossiles éventuels. 3. Comparer les indices à ceux de milieux actuels connus. 4. Proposer un milieu ancien compatible avec l’ensemble des observations. 5. Préciser ce qui reste incertain."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "L’altération modifie les roches ; l’érosion enlève les matériaux, qui peuvent être transportés puis déposés. Après leur dépôt, les sédiments peuvent être compactés et cimentés au cours de la diagenèse. Les roches sédimentaires et leurs fossiles renseignent sur les anciens milieux de dépôt."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Remettre dans un ordre possible les étapes suivantes : dépôt, transport, altération, diagenèse, érosion.",
        correction: "Un ordre possible est : altération de la roche, érosion des matériaux, transport, dépôt ou sédimentation, puis diagenèse. Dans la nature, certaines étapes peuvent se répéter et les matériaux peuvent être repris par l’érosion."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Distinguer altération et érosion.",
        correction: "L’altération modifie et désagrège la roche sur place par des actions physiques et chimiques. L’érosion enlève et transporte les matériaux à la surface de la Terre."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Définir compaction et cimentation.",
        correction: "La compaction est le tassement des sédiments sous le poids des matériaux situés au-dessus. La cimentation est la formation de minéraux entre les grains, qui les lient et contribuent à former une roche solide."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une rivière ralentit en arrivant dans un lac. Pourquoi une partie des particules qu’elle transporte peut-elle se déposer ?",
        correction: "Quand le courant ralentit, sa capacité à transporter les particules diminue. Certains grains se déposent alors au fond du lac. Les plus gros ou les plus lourds peuvent se déposer avant les particules plus fines, selon les conditions."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Quel type de roche peut se former à partir d’un sable compacté et cimenté ?",
        correction: "Un sable compacté et cimenté peut former un grès. C’est une roche sédimentaire détritique dans laquelle les grains de taille sableuse sont souvent reconnaissables."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Distinguer un grès d’un calcaire en utilisant leur origine générale.",
        correction: "Un grès est une roche détritique formée principalement de grains de taille sableuse issus de l’érosion d’autres roches. Un calcaire est riche en carbonates, notamment en calcite ; il peut résulter d’une accumulation biologique, d’une précipitation chimique ou des deux."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une roche contient des galets arrondis. Peut-on déterminer avec certitude, à partir de ce seul indice, la distance exacte de leur transport ?",
        correction: "Non. La forme arrondie suggère une usure liée à un transport, mais elle ne permet pas de calculer à elle seule la distance parcourue. Il faut aussi étudier la nature des galets, leur taille, leur tri et le contexte du dépôt."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une couche contient des fossiles marins et repose sur une couche contenant des traces de végétaux terrestres. Quelle évolution possible du milieu peut-on proposer si la série n’est pas renversée ?",
        correction: "La couche terrestre est plus ancienne que la couche marine. On peut proposer qu’un milieu continental ait été recouvert plus tard par la mer, ce qui peut correspondre à une transgression. Il faut vérifier cette interprétation avec d’autres indices et d’autres affleurements."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Pourquoi une série sédimentaire peut-elle ne pas enregistrer toute l’histoire d’une région ?",
        correction: "La sédimentation peut s’interrompre pendant une période, et l’érosion peut enlever des dépôts déjà formés. Ces phénomènes créent des lacunes : certains intervalles de temps ne sont donc pas représentés par des couches conservées."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un géologue observe une stratification entrecroisée dans un grès. Quel phénomène de dépôt peut-il envisager ? Peut-il conclure immédiatement qu’il s’agit d’un désert ?",
        correction: "La stratification entrecroisée peut résulter du déplacement de rides ou de dunes de sable sous l’action d’un courant. Ce courant peut être de l’eau ou du vent. L’observation seule ne permet donc pas de conclure immédiatement à un désert ; d’autres indices sont nécessaires."
      }
    ]
  }
]);
