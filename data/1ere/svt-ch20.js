enregistrerChapitres("1ere", "svt", [
  {
    id: 20,
    titre: "Chapitre 20 : Le magmatisme dans les contextes tectoniques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "1. Relier magmatisme et tectonique des plaques",
        blocs: [
          {
            type: "texte",
            titre: "Des répartitions non aléatoires",
            texte: "Les volcans et les roches magmatiques ne sont pas répartis au hasard à la surface de la Terre. Beaucoup se trouvent aux limites des plaques lithosphériques, notamment aux dorsales océaniques et au-dessus des zones de subduction. D’autres existent à l’intérieur des plaques : on parle alors de magmatisme intraplaque."
          },
          {
            type: "texte",
            titre: "Trois grands contextes à comparer",
            texte: "Dans une zone de divergence, deux plaques s’écartent. Dans une zone de convergence avec subduction, une plaque s’enfonce sous une autre. Dans un domaine intraplaque, le magmatisme se produit loin d’une limite de plaques ou sans être directement lié à celle-ci. Les mécanismes de fusion et les roches produites diffèrent selon les conditions."
          },
          {
            type: "texte",
            titre: "Une démarche d’interprétation",
            texte: "Pour relier une roche à un contexte géologique, on étudie plusieurs indices : sa composition, sa texture, l’âge des roches voisines, leur répartition et les structures tectoniques. La présence d’une roche seule ne suffit pas toujours à identifier un contexte unique."
          }
        ]
      },

      {
        id: 2,
        titre: "2. Le magmatisme des zones de divergence",
        blocs: [
          {
            type: "texte",
            titre: "Dorsales océaniques",
            texte: "Une dorsale est une limite divergente où deux plaques s’écartent. Le manteau chaud remonte sous la dorsale pour occuper l’espace créé. Au cours de cette remontée, la pression diminue : une partie de la roche du manteau, appelée péridotite, fond partiellement par décompression."
          },
          {
            type: "texte",
            titre: "Formation de la lithosphère océanique",
            texte: "Le magma produit peut remonter et cristalliser en profondeur en formant du gabbro. Une autre partie atteint le fond océanique et forme des basaltes. Au contact de l’eau, certaines coulées prennent la forme de coussins, appelés basaltes en coussins. L’ensemble contribue à la formation d’une nouvelle croûte océanique : c’est l’accrétion océanique."
          },
          {
            type: "texte",
            titre: "Rifts continentaux",
            texte: "Dans un continent soumis à une extension, des fractures et un fossé d’effondrement peuvent former un rift. L’amincissement de la lithosphère et la remontée du manteau peuvent favoriser une fusion partielle par décompression et un volcanisme. Si l’ouverture se poursuit, un océan peut se former, mais tous les rifts n’évoluent pas jusqu’à ce stade."
          },
          {
            type: "schema",
            titre: "Divergence et formation de croûte océanique",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350" role="img" aria-labelledby="ch20s1titre ch20s1desc">
              <title id="ch20s1titre">Magmatisme à une dorsale océanique</title>
              <desc id="ch20s1desc">Deux plaques océaniques divergent. Du manteau chaud remonte, fond partiellement par décompression et fournit du magma qui forme basaltes et gabbros.</desc>
              <defs>
                <marker id="ch20fleche1" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0 0 L10 5 L0 10 Z" fill="#333"/>
                </marker>
              </defs>
              <rect x="0" y="0" width="780" height="80" fill="#cce9f6"/>
              <text x="390" y="30" text-anchor="middle" font-size="17">Océan</text>
              <path d="M0 110 L285 110 L350 83 L390 100 L430 83 L495 110 L780 110 L780 145 L0 145 Z" fill="#5a6d77"/>
              <path d="M0 145 L335 145 L390 120 L445 145 L780 145 L780 195 L0 195 Z" fill="#8b9da1"/>
              <rect x="0" y="195" width="780" height="155" fill="#e6bb83"/>
              <path d="M335 250 Q340 188 390 145 Q440 188 445 250 Z" fill="#ee8d53" stroke="#b44f2d" stroke-width="2"/>
              <line x1="390" y1="320" x2="390" y2="235" stroke="#a33d27" stroke-width="4" marker-end="url(#ch20fleche1)"/>
              <line x1="310" y1="65" x2="225" y2="65" stroke="#333" stroke-width="3" marker-end="url(#ch20fleche1)"/>
              <line x1="470" y1="65" x2="555" y2="65" stroke="#333" stroke-width="3" marker-end="url(#ch20fleche1)"/>
              <text x="120" y="135" fill="#fff" font-size="16">Basaltes</text>
              <text x="120" y="178" font-size="16">Gabbros</text>
              <text x="390" y="285" text-anchor="middle" font-size="16">Remontée du manteau</text>
              <text x="390" y="307" text-anchor="middle" font-size="16">et fusion partielle</text>
              <text x="610" y="225" font-size="16">Manteau</text>
            </svg>`,
            legende: "Coupe simplifiée, sans échelle. La remontée du manteau et sa décompression alimentent le magmatisme de la dorsale."
          }
        ]
      },

      {
        id: 3,
        titre: "3. Le magmatisme des zones de convergence",
        blocs: [
          {
            type: "texte",
            titre: "Subduction et libération d’eau",
            texte: "Dans une zone de subduction, une plaque lithosphérique plonge sous une autre. En profondeur, des minéraux hydratés de la plaque plongeante deviennent instables et libèrent de l’eau. Celle-ci gagne le manteau situé au-dessus de la plaque et facilite sa fusion partielle en abaissant sa température de début de fusion."
          },
          {
            type: "texte",
            titre: "Des magmas aux roches",
            texte: "Les magmas produits remontent et peuvent évoluer en profondeur. Certains atteignent la surface et alimentent des volcans, souvent disposés en arc. Les andésites sont fréquentes dans ces contextes, mais elles ne sont pas les seules roches possibles. D’autres magmas cristallisent en profondeur et forment des roches plutoniques de compositions variées, notamment certaines roches granitiques."
          },
          {
            type: "texte",
            titre: "Attention à la source du magma",
            texte: "Dans le modèle étudié ici, l’eau libérée par la plaque plongeante favorise surtout la fusion partielle du manteau situé au-dessus d’elle. Il serait incorrect d’affirmer que toute la plaque plongeante fond et se transforme directement en magma."
          },
          {
            type: "texte",
            titre: "Risques volcaniques",
            texte: "De nombreux volcans de subduction peuvent produire des éruptions explosives, avec projections de cendres, gaz et parfois nuées ardentes. Le style éruptif varie cependant d’un volcan à l’autre et au cours du temps. La surveillance repose notamment sur les séismes, les déformations du sol et les émissions de gaz."
          },
          {
            type: "schema",
            titre: "De la subduction au volcanisme",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360" role="img" aria-labelledby="ch20s2titre ch20s2desc">
              <title id="ch20s2titre">Magmatisme au-dessus d’une zone de subduction</title>
              <desc id="ch20s2desc">Une plaque océanique plonge, libère de l’eau et favorise la fusion partielle du manteau situé au-dessus. Le magma peut alimenter un volcan.</desc>
              <defs>
                <marker id="ch20fleche2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0 0 L10 5 L0 10 Z" fill="#333"/>
                </marker>
              </defs>
              <rect x="0" y="0" width="800" height="90" fill="#d7eff8"/>
              <rect x="0" y="90" width="800" height="270" fill="#eacb9e"/>
              <path d="M0 90 L280 90 Q320 95 350 125 L580 340 L540 340 L325 155 Q300 125 275 120 L0 120 Z" fill="#657d8c" stroke="#405765" stroke-width="2"/>
              <path d="M315 90 L510 90 L550 45 L590 90 L800 90 L800 125 L350 125 Z" fill="#a8957c" stroke="#6b5a46" stroke-width="2"/>
              <path d="M550 90 L550 160" stroke="#c94d30" stroke-width="9"/>
              <path d="M550 160 Q530 190 500 205" fill="none" stroke="#c94d30" stroke-width="7" marker-end="url(#ch20fleche2)"/>
              <path d="M425 190 Q470 150 515 190 Q485 225 440 225 Z" fill="#f49a5b" stroke="#b45a32" stroke-width="2"/>
              <line x1="430" y1="240" x2="455" y2="215" stroke="#276eaa" stroke-width="3" marker-end="url(#ch20fleche2)"/>
              <text x="20" y="65" font-size="16">Plaque océanique</text>
              <text x="630" y="67" font-size="16">Volcan</text>
              <text x="575" y="175" font-size="15">Remontée</text>
              <text x="575" y="195" font-size="15">du magma</text>
              <text x="295" y="255" font-size="15" fill="#155c94">Eau libérée</text>
              <text x="515" y="240" font-size="15">Fusion partielle</text>
              <text x="515" y="260" font-size="15">du manteau</text>
              <text x="100" y="325" font-size="15">Plaque plongeante</text>
            </svg>`,
            legende: "Coupe simplifiée, sans échelle. L’eau libérée par la plaque plongeante favorise la fusion partielle du manteau sus-jacent."
          }
        ]
      },

      {
        id: 4,
        titre: "4. Le magmatisme intraplaque",
        blocs: [
          {
            type: "texte",
            titre: "Volcanisme loin des limites de plaques",
            texte: "Certains volcans se situent à l’intérieur d’une plaque océanique ou continentale. Une explication possible est la présence d’un point chaud alimenté par une remontée de manteau anormalement chaud, parfois appelée panache mantellique. Lors de sa remontée, ce manteau peut fondre partiellement par décompression."
          },
          {
            type: "texte",
            titre: "Alignements volcaniques",
            texte: "Si une plaque se déplace au-dessus d’une source magmatique approximativement fixe pendant un certain temps, une succession d’édifices volcaniques peut se former. Les volcans les plus éloignés de la zone actuellement active sont alors généralement plus anciens. Les îles Hawaii et la chaîne volcanique qui les prolonge illustrent ce type d’organisation."
          },
          {
            type: "texte",
            titre: "Prudence dans l’interprétation",
            texte: "Tous les volcans intraplaques ne prouvent pas, à eux seuls, l’existence d’un panache mantellique. Les sources peuvent se déplacer et d’autres mécanismes peuvent intervenir. Il faut confronter la répartition, les âges, les compositions et les observations géophysiques."
          },
          {
            type: "schema",
            titre: "Formation possible d’un alignement de point chaud",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 290" role="img" aria-labelledby="ch20s3titre ch20s3desc">
              <title id="ch20s3titre">Alignement volcanique au-dessus d’un point chaud</title>
              <desc id="ch20s3desc">Une plaque se déplace vers la gauche au-dessus d’une source magmatique. Le volcan actif est à droite et les édifices plus anciens sont transportés vers la gauche.</desc>
              <defs>
                <marker id="ch20fleche3" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0 0 L10 5 L0 10 Z" fill="#333"/>
                </marker>
              </defs>
              <rect x="0" y="110" width="800" height="55" fill="#7a8c91"/>
              <rect x="0" y="165" width="800" height="125" fill="#e6bd87"/>
              <path d="M90 110 L125 78 L160 110 M245 110 L280 65 L315 110 M400 110 L440 52 L480 110 M565 110 L610 35 L655 110" fill="#826f5f" stroke="#554437" stroke-width="2"/>
              <path d="M610 110 L610 190" stroke="#d95432" stroke-width="9"/>
              <path d="M580 290 Q580 235 610 190 Q640 235 640 290 Z" fill="#ed8d54" stroke="#b95232" stroke-width="2"/>
              <line x1="505" y1="25" x2="345" y2="25" stroke="#333" stroke-width="3" marker-end="url(#ch20fleche3)"/>
              <text x="425" y="18" text-anchor="middle" font-size="15">Déplacement de la plaque</text>
              <text x="125" y="145" text-anchor="middle" font-size="15">Plus ancien</text>
              <text x="610" y="145" text-anchor="middle" font-size="15">Actif</text>
              <text x="610" y="265" text-anchor="middle" font-size="15">Remontée chaude</text>
            </svg>`,
            legende: "Dans ce modèle simplifié, la plaque entraîne les anciens volcans tandis qu’un volcan actif se trouve au-dessus de la source."
          }
        ]
      },

      {
        id: 5,
        titre: "5. Comparer les contextes et exploiter les indices",
        blocs: [
          {
            type: "tableau",
            titre: "Divergence, subduction et intraplaque",
            entetes: ["Contexte", "Mécanisme favorisant la fusion", "Manifestations possibles"],
            lignes: [
              ["Dorsale ou rift", "Décompression du manteau chaud qui remonte", "Basaltes ; gabbros en profondeur ; formation de croûte océanique à la dorsale"],
              ["Subduction", "Eau libérée par la plaque plongeante, favorisant la fusion du manteau sus-jacent", "Arc volcanique ; andésites fréquentes ; intrusions plutoniques"],
              ["Intraplaque", "Souvent décompression d’un manteau chaud en remontée", "Volcans isolés ou alignés ; roches de compositions variables"]
            ]
          },
          {
            type: "texte",
            titre: "Méthode : interpréter un alignement volcanique",
            texte: "Commence par localiser le volcan actif. Range ensuite les autres édifices selon leur âge et observe leur position. Si les âges augmentent régulièrement en s’éloignant de la source active, le modèle d’une plaque mobile au-dessus d’une source approximativement fixe est compatible avec les données. Il faut ensuite comparer cette hypothèse à d’autres observations."
          },
          {
            type: "texte",
            titre: "Bilan",
            texte: "Le magmatisme dépend du contexte tectonique. La décompression joue un rôle majeur aux dorsales et dans certains domaines intraplaques ; l’eau facilite la fusion du manteau dans les zones de subduction. Les magmas peuvent produire des roches volcaniques en surface et plutoniques en profondeur."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Application",
        points: 4,
        enonce: "Distingue divergence, subduction et domaine intraplaque.",
        correction: "La divergence correspond à l’écartement de deux plaques. La subduction est l’enfoncement d’une plaque sous une autre dans un contexte de convergence. Un domaine intraplaque se situe à l’intérieur d’une plaque, loin d’une limite ou sans lien direct avec celle-ci."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Explique pourquoi une partie du manteau peut fondre sous une dorsale.",
        correction: "Sous une dorsale, le manteau chaud remonte lorsque les plaques s’écartent. La pression diminue au cours de cette remontée. La roche peut alors franchir sa limite de début de fusion et fondre partiellement par décompression."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Associe basalte et gabbro à leur lieu habituel de formation dans la croûte océanique.",
        correction: "Le basalte se forme par refroidissement rapide de lave au fond de l’océan ou près de la surface. Le gabbro cristallise plus lentement en profondeur. Ces deux roches participent à la croûte océanique formée à la dorsale."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Décris les étapes qui relient une plaque en subduction à la formation possible d’un volcan.",
        correction: "La plaque plongeante transporte des minéraux hydratés. En profondeur, certains libèrent de l’eau. Cette eau facilite la fusion partielle du manteau situé au-dessus de la plaque. Le magma produit remonte, peut évoluer en profondeur et, s’il atteint la surface, alimente un volcan."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un élève écrit : « Dans une zone de subduction, toute la plaque plongeante fond et forme directement les volcans. » Corrige son affirmation.",
        correction: "Toute la plaque plongeante ne fond pas. Dans le modèle courant, elle libère de l’eau en profondeur. Cette eau favorise surtout la fusion partielle du manteau situé au-dessus de la plaque ; les magmas produits peuvent ensuite remonter et alimenter des volcans."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Dans un alignement volcanique, l’édifice actif est à l’est. Vers l’ouest, les volcans ont des âges de 1, 3 puis 5 millions d’années. Le modèle d’un point chaud approximativement fixe est-il compatible avec ces données ? Quel serait alors le sens du déplacement de la plaque ?",
        correction: "Oui, ce modèle est compatible : les édifices sont de plus en plus anciens lorsqu’on s’éloigne du volcan actif vers l’ouest. Dans ce modèle, la plaque se déplacerait vers l’ouest au-dessus de la source. Ces seules données ne prouvent toutefois pas à elles seules l’existence d’un panache mantellique."
      },
      {
        niveau: "Calcul",
        points: 5,
        enonce: "Dans un modèle simplifié, un volcan aujourd’hui situé à 300 km du point chaud actif s’est formé il y a 6 millions d’années. Calcule la vitesse moyenne de déplacement de la plaque en km par million d’années, puis en cm par an.",
        correction: "Vitesse moyenne = distance ÷ durée = 300 ÷ 6 = 50 km par million d’années. Or 1 km = 100 000 cm et 1 million d’années = 1 000 000 ans. Ainsi, 50 km par million d’années = 5 000 000 cm ÷ 1 000 000 ans = 5 cm/an. Le résultat suppose notamment une source approximativement fixe et un déplacement représenté par cette distance."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Un rift continental présente des failles normales et des émissions volcaniques. Explique pourquoi ces observations sont compatibles avec une extension, sans conclure qu’un océan se formera nécessairement.",
        correction: "Les failles normales sont compatibles avec l’étirement et l’amincissement de la lithosphère. La remontée du manteau qui peut accompagner cet amincissement favorise sa fusion partielle par décompression et peut alimenter le volcanisme. L’ouverture d’un océan exige la poursuite de l’extension : tous les rifts ne l’atteignent pas."
      },
      {
        niveau: "Bilan",
        points: 6,
        enonce: "Compare l’origine possible des magmas sous une dorsale et au-dessus d’une subduction. Indique un produit magmatique possible dans chaque cas.",
        correction: "Sous une dorsale, le manteau chaud remonte et fond partiellement surtout par décompression ; le magma peut former du basalte en surface et du gabbro en profondeur. Au-dessus d’une subduction, l’eau libérée par la plaque plongeante favorise la fusion partielle du manteau sus-jacent ; les magmas peuvent notamment alimenter un volcan produisant de l’andésite ou cristalliser en profondeur."
      }
    ]
  }
]);
