enregistrerChapitres("1ere", "svt", [
  {
    id: 18,
    titre: "Chapitre 18 : Le métamorphisme",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "1. Définition et conditions du métamorphisme",
        blocs: [
          {
            type: "texte",
            titre: "Une transformation à l’état solide",
            texte: "Le métamorphisme est l’ensemble des transformations minéralogiques et structurales que subit une roche sous l’effet de nouvelles conditions de température, de pression et de circulation de fluides. Ces transformations se produisent essentiellement à l’état solide : la roche ne fond pas entièrement. La roche initiale est appelée protolithe."
          },
          {
            type: "texte",
            titre: "Des roches initiales variées",
            texte: "Le protolithe peut être une roche sédimentaire, magmatique ou déjà métamorphique. Par exemple, un calcaire peut donner un marbre ; un grès riche en quartz peut donner une quartzite ; une roche argileuse peut évoluer vers un schiste puis, dans certaines conditions, vers un gneiss."
          },
          {
            type: "texte",
            titre: "Métamorphisme et fusion",
            texte: "Il ne faut pas confondre métamorphisme et fusion. Lors du métamorphisme, de nouveaux minéraux peuvent apparaître sans fusion générale de la roche. Si la température devient suffisamment élevée, une fusion partielle peut commencer : un liquide magmatique apparaît. La limite exacte dépend notamment de la pression, de la composition de la roche et de la présence d’eau."
          },
          {
            type: "schema",
            titre: "Transformation d’une roche par métamorphisme",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 220" role="img" aria-labelledby="ch18s1titre ch18s1desc">
              <title id="ch18s1titre">Transformation métamorphique d’une roche</title>
              <desc id="ch18s1desc">Une roche initiale est transformée à l’état solide par des variations de température, de pression et l’action de fluides en roche métamorphique.</desc>
              <defs>
                <marker id="ch18fleche1" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0,0 L10,5 L0,10 Z" fill="#333"/>
                </marker>
              </defs>
              <rect x="25" y="78" width="190" height="75" rx="10" fill="#ead5b4" stroke="#704d2b" stroke-width="2"/>
              <text x="120" y="108" text-anchor="middle" font-size="18">Roche initiale</text>
              <text x="120" y="135" text-anchor="middle" font-size="17">= protolithe</text>
              <line x1="225" y1="115" x2="525" y2="115" stroke="#333" stroke-width="3" marker-end="url(#ch18fleche1)"/>
              <text x="375" y="44" text-anchor="middle" font-size="17">Température, pression, fluides</text>
              <text x="375" y="70" text-anchor="middle" font-size="16">Transformation à l’état solide</text>
              <rect x="535" y="78" width="200" height="75" rx="10" fill="#cbdce9" stroke="#365d78" stroke-width="2"/>
              <text x="635" y="108" text-anchor="middle" font-size="18">Roche</text>
              <text x="635" y="135" text-anchor="middle" font-size="18">métamorphique</text>
              <text x="380" y="190" text-anchor="middle" font-size="16">Nouveaux minéraux et/ou nouvelle structure</text>
            </svg>`,
            legende: "Le métamorphisme transforme un protolithe sans fusion générale. Les changements dépendent à la fois de la roche initiale et des conditions rencontrées."
          }
        ]
      },

      {
        id: 2,
        titre: "2. Les facteurs du métamorphisme",
        blocs: [
          {
            type: "texte",
            titre: "La température",
            texte: "La température augmente généralement avec la profondeur, mais elle peut aussi augmenter au voisinage d’un magma. Une température plus élevée facilite les réactions entre minéraux et la recristallisation : des cristaux se réorganisent ou de nouveaux minéraux apparaissent."
          },
          {
            type: "texte",
            titre: "La pression",
            texte: "La pression augmente avec la profondeur à cause du poids des roches situées au-dessus. Dans une chaîne de montagnes, les roches peuvent aussi subir des contraintes dirigées, liées aux mouvements tectoniques. Ces contraintes favorisent la déformation et l’orientation de certains minéraux."
          },
          {
            type: "texte",
            titre: "Les fluides",
            texte: "L’eau et d’autres fluides présents dans les pores ou les fractures favorisent les réactions chimiques et le transport de certains éléments. Leur présence peut modifier la composition minérale d’une roche. Les transformations dépendent également de la durée pendant laquelle la roche reste soumise aux conditions métamorphiques."
          },
          {
            type: "tableau",
            titre: "Principaux facteurs et effets possibles",
            entetes: ["Facteur", "Origine possible", "Effet possible"],
            lignes: [
              ["Température", "Enfouissement ou proximité d’un magma", "Recristallisation et apparition de nouveaux minéraux"],
              ["Pression", "Poids des roches en profondeur", "Stabilité de minéraux adaptés aux fortes pressions"],
              ["Contraintes dirigées", "Déformation tectonique", "Orientation des minéraux et apparition d’une structure plane"],
              ["Fluides", "Eau présente dans la roche ou circulant dans les fractures", "Facilitation des réactions et transport d’éléments"]
            ]
          }
        ]
      },

      {
        id: 3,
        titre: "3. Reconnaître les transformations métamorphiques",
        blocs: [
          {
            type: "texte",
            titre: "Recristallisation et nouveaux minéraux",
            texte: "Les minéraux d’une roche ne sont stables que dans certaines conditions. Lorsque ces conditions changent, les minéraux initiaux peuvent se transformer et de nouveaux cristaux apparaître. Ainsi, des minéraux comme le grenat ou le glaucophane peuvent fournir des indices sur les conditions de formation d’une roche, à condition de considérer aussi les autres minéraux associés et la composition du protolithe."
          },
          {
            type: "texte",
            titre: "Schistosité et foliation",
            texte: "La schistosité est une organisation en plans selon lesquels certaines roches se débitent facilement. Elle résulte souvent de la déformation et de l’orientation de minéraux. La foliation est une structure planaire marquée par une organisation des minéraux, parfois sous forme de lits de compositions différentes. Dans un gneiss, l’alternance de bandes claires et sombres rend cette organisation visible."
          },
          {
            type: "texte",
            titre: "Toutes les roches métamorphiques ne sont pas feuilletées",
            texte: "Le marbre, issu d’un calcaire, est principalement constitué de cristaux de calcite recristallisés. La quartzite, issue d’un grès riche en quartz, est principalement constituée de quartz recristallisé. Ces roches ne présentent pas nécessairement une foliation visible."
          },
          {
            type: "tableau",
            titre: "Exemples de roches métamorphiques",
            entetes: ["Protolithe", "Roche métamorphique possible", "Caractères à retenir"],
            lignes: [
              ["Calcaire", "Marbre", "Calcite recristallisée ; foliation non nécessaire"],
              ["Grès riche en quartz", "Quartzite", "Quartz recristallisé ; roche généralement résistante"],
              ["Roche argileuse", "Schiste", "Plans de schistosité et minéraux souvent orientés"],
              ["Certaines roches argileuses ou magmatiques", "Gneiss", "Foliation souvent visible en bandes claires et sombres"]
            ]
          },
          {
            type: "texte",
            titre: "Attention aux identifications",
            texte: "L’aspect d’une roche donne des indices, mais ne suffit pas toujours à déterminer son origine avec certitude. L’identification doit tenir compte de l’ensemble des observations : minéraux, structure, contexte géologique et, si nécessaire, étude au microscope ou analyses."
          }
        ]
      },

      {
        id: 4,
        titre: "4. Les principaux contextes du métamorphisme",
        blocs: [
          {
            type: "texte",
            titre: "Métamorphisme de contact",
            texte: "Lorsqu’un magma s’installe dans la croûte, il chauffe les roches voisines, appelées roches encaissantes. Elles se transforment autour de l’intrusion et forment une auréole métamorphique. La température joue ici un rôle particulièrement important. L’intensité des transformations varie notamment avec la distance à l’intrusion, la température et la nature des roches."
          },
          {
            type: "texte",
            titre: "Métamorphisme régional",
            texte: "Le métamorphisme régional affecte de grandes régions, par exemple dans les chaînes de montagnes. L’enfouissement, l’augmentation de température et de pression ainsi que les déformations tectoniques peuvent produire des roches telles que des schistes ou des gneiss. Les conditions ne sont pas identiques partout dans une chaîne."
          },
          {
            type: "texte",
            titre: "Métamorphisme de subduction",
            texte: "Dans une zone de subduction, une plaque lithosphérique relativement froide s’enfonce. Certaines roches y atteignent de fortes pressions alors que leur température reste relativement basse pour la profondeur. Des assemblages minéraux caractéristiques peuvent se former, par exemple ceux des schistes bleus, puis, dans certaines conditions plus profondes, des éclogites."
          },
          {
            type: "schema",
            titre: "Métamorphisme de contact et métamorphisme régional",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" role="img" aria-labelledby="ch18s2titre ch18s2desc">
              <title id="ch18s2titre">Deux contextes de métamorphisme</title>
              <desc id="ch18s2desc">À gauche, une intrusion magmatique chauffe les roches voisines et forme une auréole. À droite, des roches enfouies et déformées sous une chaîne subissent un métamorphisme régional.</desc>
              <text x="200" y="28" text-anchor="middle" font-size="19">Métamorphisme de contact</text>
              <rect x="20" y="45" width="360" height="230" fill="#e5d8bd" stroke="#6b5a46" stroke-width="2"/>
              <path d="M105 275 Q105 130 200 115 Q295 130 295 275 Z" fill="#f5b96c" stroke="#b85d26" stroke-width="3"/>
              <path d="M130 275 Q130 155 200 145 Q270 155 270 275 Z" fill="#d95338" stroke="#8c3020" stroke-width="2"/>
              <text x="200" y="213" text-anchor="middle" font-size="17" fill="#fff">Intrusion</text>
              <text x="200" y="235" text-anchor="middle" font-size="17" fill="#fff">magmatique</text>
              <text x="200" y="94" text-anchor="middle" font-size="16">Auréole chauffée</text>
              <text x="65" y="72" font-size="15">Encaissant</text>

              <text x="600" y="28" text-anchor="middle" font-size="19">Métamorphisme régional</text>
              <path d="M415 125 L485 92 L535 110 L600 52 L665 110 L715 92 L785 125 L785 275 L415 275 Z" fill="#d9c9ae" stroke="#6b5a46" stroke-width="2"/>
              <path d="M440 215 Q515 180 590 215 T760 215" fill="none" stroke="#5e6f82" stroke-width="4"/>
              <path d="M440 237 Q515 202 590 237 T760 237" fill="none" stroke="#5e6f82" stroke-width="4"/>
              <text x="600" y="158" text-anchor="middle" font-size="16">Enfouissement et déformation</text>
              <text x="600" y="184" text-anchor="middle" font-size="16">sur une grande région</text>
              <text x="600" y="263" text-anchor="middle" font-size="15">Roches métamorphisées</text>
            </svg>`,
            legende: "Ces coupes sont schématiques et ne sont pas à l’échelle. Le contact agit surtout autour d’une intrusion ; le métamorphisme régional concerne de plus vastes domaines."
          }
        ]
      },

      {
        id: 5,
        titre: "5. Lire l’histoire d’une roche métamorphique",
        blocs: [
          {
            type: "texte",
            titre: "Des témoins de conditions anciennes",
            texte: "Une roche métamorphique observée en surface a souvent connu une histoire complexe. Elle a d’abord été formée sous forme de protolithe, puis enfouie ou chauffée et transformée. Des mouvements tectoniques et l’érosion des roches sus-jacentes peuvent ensuite contribuer à son exhumation, c’est-à-dire à son retour vers la surface."
          },
          {
            type: "texte",
            titre: "Les assemblages minéraux",
            texte: "Un minéral isolé ne suffit pas toujours à déterminer précisément la pression et la température. Les géologues étudient plusieurs minéraux présents ensemble, leur composition et leurs relations dans la roche. Ils comparent ces observations aux conditions de stabilité établies expérimentalement."
          },
          {
            type: "texte",
            titre: "Méthode d’étude",
            texte: "Pour interpréter une roche : 1) décrire les minéraux et la structure observables ; 2) rechercher le protolithe possible ; 3) repérer les indices de température, de pression et de déformation ; 4) proposer un contexte géologique compatible ; 5) distinguer ce qui est observé de ce qui reste une hypothèse."
          },
          {
            type: "texte",
            titre: "Bilan",
            texte: "Le métamorphisme transforme une roche essentiellement à l’état solide. Il dépend notamment de la température, de la pression, des contraintes, des fluides et du protolithe. Les roches produites enregistrent une partie de l’histoire thermique et tectonique de la Terre."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Application",
        points: 4,
        enonce: "Définis le métamorphisme et le mot « protolithe ». Une roche entièrement fondue est-elle encore dans un processus de métamorphisme à l’état solide ?",
        correction: "Le métamorphisme est la transformation minéralogique et structurale d’une roche, essentiellement à l’état solide, sous l’effet de nouvelles conditions notamment de température et de pression. Le protolithe est la roche initiale. Si la roche est entièrement fondue, elle est devenue un liquide magmatique : on ne décrit plus cette transformation comme un métamorphisme à l’état solide."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Cite trois facteurs du métamorphisme et explique brièvement leur rôle.",
        correction: "La température favorise les réactions et la recristallisation. La pression influe sur la stabilité des minéraux ; des contraintes dirigées peuvent aussi déformer la roche et orienter ses minéraux. Les fluides facilitent certaines réactions et peuvent transporter des éléments. La durée et la composition initiale interviennent également."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Associe chaque protolithe à une roche métamorphique possible : calcaire ; grès riche en quartz ; roche argileuse. Roches proposées : schiste ; marbre ; quartzite.",
        correction: "Calcaire → marbre, constitué principalement de calcite recristallisée. Grès riche en quartz → quartzite, constituée principalement de quartz recristallisé. Roche argileuse → schiste dans des conditions favorables. D’autres évolutions sont possibles selon les conditions et la composition."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Distingue schistosité et foliation. Toutes les roches métamorphiques présentent-elles un feuilletage visible ? Donne un exemple.",
        correction: "La schistosité correspond à des plans selon lesquels une roche peut se débiter. La foliation est une organisation planaire des minéraux, parfois en bandes de compositions différentes. Toutes les roches métamorphiques ne sont pas visiblement feuilletées : le marbre ou la quartzite peuvent ne pas montrer de foliation visible."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Une intrusion magmatique est entourée d’une zone de roches recristallisées. Les transformations sont plus marquées près de l’intrusion. Identifie le type de métamorphisme et propose une explication.",
        correction: "Il s’agit d’un métamorphisme de contact. Le magma a chauffé les roches encaissantes et provoqué leur transformation à l’état solide. La zone transformée forme une auréole métamorphique. L’effet thermique est généralement plus important près de l’intrusion, ce qui explique ici des transformations plus marquées à proximité."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Des roches enfouies sous une chaîne de montagnes montrent des minéraux orientés et une foliation. Relie ces observations au contexte géologique.",
        correction: "L’enfouissement a soumis les roches à des pressions et des températures plus élevées. Les mouvements tectoniques ont aussi exercé des contraintes dirigées, favorisant la déformation et l’orientation des minéraux. Ces indices sont compatibles avec un métamorphisme régional. Ils ne permettent toutefois pas, à eux seuls, de préciser toutes les conditions subies."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Pourquoi les roches d’une plaque en subduction peuvent-elles subir de fortes pressions sans atteindre immédiatement des températures aussi élevées que celles d’autres roches à profondeur comparable ?",
        correction: "La plaque qui s’enfonce est relativement froide. Sa descente l’amène rapidement en profondeur, où la pression est forte, tandis que son réchauffement prend du temps. Elle peut donc connaître des conditions de haute pression et de température relativement basse. Certains assemblages minéraux, notamment ceux des schistes bleus, peuvent en témoigner."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Une élève observe un minéral dans une roche et affirme : « Je connais maintenant exactement la pression et la température auxquelles cette roche s’est formée. » Explique pourquoi cette conclusion est trop rapide.",
        correction: "Un même minéral peut être stable dans une gamme de conditions et son apparition dépend aussi de la composition de la roche. Il faut étudier l’assemblage de plusieurs minéraux, leur composition et leurs relations, puis comparer ces données aux domaines de stabilité connus. L’observation d’un seul minéral est donc un indice, pas nécessairement une mesure exacte de pression et de température."
      },
      {
        niveau: "Bilan",
        points: 6,
        enonce: "Remets dans un ordre logique les événements suivants et explique chacun d’eux : exhumation ; formation d’un protolithe ; métamorphisme lors d’un enfouissement ; observation de la roche en surface.",
        correction: "1. Formation du protolithe : une roche initiale se met en place. 2. Enfouissement et métamorphisme : la roche subit de nouvelles conditions de pression et de température et se transforme essentiellement à l’état solide. 3. Exhumation : des mouvements tectoniques et l’érosion des roches situées au-dessus contribuent à son retour vers la surface. 4. Observation en surface : on peut étudier les minéraux et la structure conservés pour proposer une histoire géologique."
      }
    ]
  }
]);
