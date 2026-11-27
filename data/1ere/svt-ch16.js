enregistrerChapitres("1ere", "svt", [
  {
    id: 16,
    titre: "Chapitre 16 : La tectonique globale",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "La Terre, une mosaïque de plaques",
        blocs: [
          {
            type: "introduction",
            titre: "Un modèle pour comprendre la Terre",
            texte: "La tectonique globale, ou tectonique des plaques, est un modèle qui explique une grande partie des mouvements et des déformations de la lithosphère. Elle relie notamment la formation des océans, les séismes, le volcanisme et la formation de nombreuses chaînes de montagnes."
          },
          {
            type: "definition",
            titre: "Plaque lithosphérique",
            texte: "Une plaque lithosphérique est une partie rigide de l’enveloppe externe de la Terre. Elle comprend de la croûte et une partie du manteau supérieur. Elle se déplace par rapport aux plaques voisines, généralement à des vitesses de quelques centimètres par an."
          },
          {
            type: "remarque",
            titre: "Une plaque peut porter un continent et un océan",
            texte: "Les limites des plaques ne coïncident pas nécessairement avec les contours des continents. Une même plaque peut porter une partie de continent et une partie de fond océanique."
          },
          {
            type: "definition",
            titre: "Limite de plaques",
            texte: "Une limite de plaques est une zone où deux plaques ont un mouvement relatif l’une par rapport à l’autre. Les déformations, les séismes et certains volcans se concentrent souvent près de ces limites."
          },
          {
            type: "tableau",
            titre: "Les trois types de limites",
            entetes: ["Limite", "Mouvement relatif", "Structures et phénomènes fréquents"],
            lignes: [
              ["Divergente", "Les plaques s’écartent.", "Rift ou dorsale ; formation de lithosphère océanique à la dorsale ; séismes et volcanisme."],
              ["Convergente", "Les plaques se rapprochent.", "Subduction ou collision ; fosses, séismes, arcs volcaniques ou chaînes de montagnes selon le contexte."],
              ["Coulissante", "Les plaques glissent latéralement l’une par rapport à l’autre.", "Failles décrochantes et séismes."]
            ]
          }
        ]
      },

      {
        id: 2,
        titre: "Les mouvements et leurs moteurs",
        blocs: [
          {
            type: "definition",
            titre: "Mesurer le mouvement des plaques",
            texte: "Les mesures géodésiques par satellite permettent de suivre le déplacement de points situés à la surface de la Terre. En répétant les mesures au cours du temps, on peut calculer leur vitesse et comparer le mouvement de différentes plaques."
          },
          {
            type: "definition",
            titre: "Énergie interne de la Terre",
            texte: "La Terre perd progressivement de la chaleur vers l’espace. Une partie de cette chaleur provient notamment de la désintégration radioactive de certains éléments et une autre partie de l’histoire de sa formation. Cette énergie interne contribue aux mouvements lents du manteau et à l’activité géologique."
          },
          {
            type: "definition",
            titre: "Convection mantellique",
            texte: "À l’échelle des temps géologiques, les roches majoritairement solides du manteau peuvent se déformer et participer à des mouvements lents. Les différences de température et de densité contribuent à ces mouvements, appelés convection mantellique."
          },
          {
            type: "definition",
            titre: "Forces liées aux plaques",
            texte: "Une plaque océanique froide et dense qui plonge peut exercer une traction sur la partie de la plaque qui reste en surface : c’est la traction de la plaque plongeante. Le relief et la différence de densité de la lithosphère près d’une dorsale contribuent aussi à son éloignement : on parle souvent de poussée à la dorsale."
          },
          {
            type: "remarque",
            titre: "Un fonctionnement complexe",
            texte: "Les mouvements des plaques résultent de plusieurs forces et de l’évolution du manteau. La convection ne doit pas être représentée comme de simples tapis roulants identiques sous toutes les plaques. Les vitesses et les mécanismes varient selon les régions."
          },
          {
            type: "schema",
            titre: "Moteurs simplifiés du mouvement d’une plaque",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 350" role="img" aria-labelledby="svt16s1t svt16s1d">
  <title id="svt16s1t">Mouvement d'une plaque entre dorsale et subduction</title>
  <desc id="svt16s1d">Une lithosphère océanique se forme à une dorsale et s'éloigne de celle-ci. À l'autre extrémité, une plaque froide plonge ; son poids contribue à tirer la plaque.</desc>
  <defs><marker id="svt16a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#a33"/></marker></defs>
  <rect width="720" height="350" fill="#fff"/>
  <rect x="0" y="30" width="720" height="80" fill="#dceff8"/>
  <path d="M30 150 L125 150 L160 120 L195 150 L480 150 Q510 150 535 175 L645 285 L620 310 L510 200 Q495 180 480 180 L30 180 Z" fill="#899ba1" stroke="#555" stroke-width="2"/>
  <path d="M525 145 L720 145 L720 210 L585 210 Z" fill="#d5b995" stroke="#765" stroke-width="2"/>
  <text x="160" y="105" text-anchor="middle" font-size="16">Dorsale</text>
  <text x="540" y="125" font-size="15">Fosse</text>
  <path d="M220 165 L375 165" stroke="#a33" stroke-width="3" marker-end="url(#svt16a1)"/>
  <path d="M570 205 L625 260" stroke="#a33" stroke-width="3" marker-end="url(#svt16a1)"/>
  <text x="260" y="205" font-size="14">Éloignement</text>
  <text x="465" y="325" font-size="14">Traction de la plaque plongeante</text>
  <text x="55" y="280" font-size="15">Manteau majoritairement solide</text>
</svg>`,
            legende: "Schéma simplifié : il ne représente pas toutes les forces ni tous les mouvements du manteau."
          }
        ]
      },

      {
        id: 3,
        titre: "Les séismes et la tectonique des plaques",
        blocs: [
          {
            type: "definition",
            titre: "Origine d’un séisme tectonique",
            texte: "Les mouvements tectoniques peuvent accumuler des contraintes dans les roches de part et d’autre d’une faille. Lorsqu’une rupture ou un glissement brusque se produit, une partie de l’énergie accumulée est libérée sous forme d’ondes sismiques : c’est un séisme."
          },
          {
            type: "definition",
            titre: "Foyer et épicentre",
            texte: "Le foyer est la région en profondeur où débute la rupture. L’épicentre est le point de la surface situé à sa verticale. Les secousses ressenties dépendent notamment de la magnitude, de la distance, de la profondeur et de la nature du sol."
          },
          {
            type: "definition",
            titre: "Magnitude et intensité",
            texte: "La magnitude caractérise l’énergie libérée par un séisme à sa source selon une échelle donnée. L’intensité décrit les effets et les dégâts observés en un lieu. Un même séisme possède une magnitude déterminée selon une méthode, mais ses intensités varient d’un lieu à l’autre."
          },
          {
            type: "tableau",
            titre: "Séismes selon le contexte",
            entetes: ["Contexte", "Caractéristiques possibles"],
            lignes: [
              ["Dorsale et rift", "Séismes généralement superficiels associés à l’extension et aux mouvements sur les failles."],
              ["Subduction", "Séismes de profondeurs variées, de superficiels à profonds, associés notamment à la plaque plongeante et à l’interface entre plaques."],
              ["Limite coulissante", "Séismes généralement superficiels sur des failles à déplacement principalement horizontal."],
              ["Intérieur d’une plaque", "Des séismes sont possibles, même s’ils sont souvent moins fréquents que près de certaines limites."]
            ]
          },
          {
            type: "remarque",
            titre: "Prévision et prévention",
            texte: "On ne peut pas prévoir avec précision la date et le lieu exacts d’un séisme. L’étude des zones à risque, les constructions adaptées et les plans de secours permettent cependant de réduire les conséquences possibles."
          }
        ]
      },

      {
        id: 4,
        titre: "Le volcanisme dans différents contextes",
        blocs: [
          {
            type: "tableau",
            titre: "Comparer des contextes volcaniques",
            entetes: ["Contexte", "Origine simplifiée du magma", "Manifestations possibles"],
            lignes: [
              ["Dorsale", "Fusion partielle du manteau lors de sa remontée et de la diminution de pression.", "Volcanisme surtout sous-marin, souvent basaltique."],
              ["Subduction", "L’eau libérée par la plaque plongeante facilite la fusion partielle du manteau situé au-dessus.", "Arc volcanique ; éruptions parfois explosives."],
              ["Intraplaque", "Certaines remontées de manteau chaud peuvent favoriser une fusion partielle loin d’une limite de plaques.", "Volcans isolés ou alignements volcaniques selon l’histoire de la plaque."]
            ]
          },
          {
            type: "definition",
            titre: "Point chaud",
            texte: "Un point chaud est une région où un apport durable de matériaux mantelliques chauds peut alimenter un volcanisme. Si une plaque se déplace au-dessus d’une source relativement stable, un alignement de volcans d’âges différents peut se former."
          },
          {
            type: "exemple",
            titre: "Un alignement volcanique",
            texte: "Dans un modèle simplifié de point chaud, le volcan actif se trouve près de la source actuelle de magma. Les édifices plus éloignés ont été emportés par le mouvement de la plaque et sont généralement plus anciens. Le modèle doit être confronté aux âges et aux autres données de la région."
          },
          {
            type: "remarque",
            titre: "Tous les volcans ne sont pas aux limites",
            texte: "De nombreux volcans se situent près des limites de plaques, mais certains sont intraplaques. La présence d’un volcan ne suffit donc pas, à elle seule, à localiser une limite de plaques."
          },
          {
            type: "schema",
            titre: "Alignement volcanique intraplaque simplifié",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 300" role="img" aria-labelledby="svt16s2t svt16s2d">
  <title id="svt16s2t">Point chaud et déplacement d'une plaque</title>
  <desc id="svt16s2d">Une plaque se déplace vers la gauche au-dessus d'une source de magma. Le volcan actif est situé au-dessus de la source, tandis que les volcans plus éloignés vers la gauche sont plus anciens.</desc>
  <defs><marker id="svt16a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#a33"/></marker></defs>
  <rect width="720" height="300" fill="#fff"/>
  <rect x="20" y="145" width="680" height="45" fill="#899ba1" stroke="#555"/>
  <path d="M80 145 L105 105 L130 145 M240 145 L270 90 L300 145 M480 145 L520 65 L560 145" fill="#b88967" stroke="#765" stroke-width="2"/>
  <path d="M520 275 L520 150" stroke="#a33" stroke-width="5" marker-end="url(#svt16a2)"/>
  <path d="M430 220 L220 220" stroke="#a33" stroke-width="3" marker-end="url(#svt16a2)"/>
  <text x="105" y="90" text-anchor="middle" font-size="14">Ancien</text>
  <text x="270" y="75" text-anchor="middle" font-size="14">Moins ancien</text>
  <text x="520" y="50" text-anchor="middle" font-size="14">Actif</text>
  <text x="330" y="245" text-anchor="middle" font-size="14">Déplacement de la plaque</text>
  <text x="545" y="275" font-size="14">Source de magma</text>
</svg>`,
            legende: "Dans ce modèle, la source est supposée relativement stable. Les situations réelles peuvent être plus complexes."
          }
        ]
      },

      {
        id: 5,
        titre: "Les ophiolites, témoins d’un ancien océan",
        blocs: [
          {
            type: "definition",
            titre: "Ophiolite",
            texte: "Une ophiolite est un ensemble de roches interprété comme un fragment d’ancienne lithosphère océanique observable sur un continent. On peut y trouver des roches du manteau, comme des péridotites, et des roches de la croûte océanique, comme des gabbros et des basaltes."
          },
          {
            type: "definition",
            titre: "Obduction",
            texte: "L’obduction est la mise en place d’un fragment de lithosphère océanique sur une marge continentale. Elle peut contribuer à expliquer la présence de certaines ophiolites dans une chaîne de montagnes."
          },
          {
            type: "remarque",
            titre: "Un ensemble souvent incomplet",
            texte: "Une ophiolite ne présente pas nécessairement toutes les couches d’une lithosphère océanique ni leur ordre idéal : elle peut avoir été fragmentée, déformée ou métamorphisée. Son interprétation repose sur l’ensemble des roches et de leurs relations."
          },
          {
            type: "schema",
            titre: "Composition simplifiée d’une ophiolite",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 300" role="img" aria-labelledby="svt16s3t svt16s3d">
  <title id="svt16s3t">Roches d'une ophiolite</title>
  <desc id="svt16s3d">Une succession idéalisée montre des basaltes au-dessus de gabbros, eux-mêmes au-dessus de péridotites. L'ensemble représente des fragments de croûte océanique et de manteau.</desc>
  <rect width="680" height="300" fill="#fff"/>
  <rect x="50" y="55" width="340" height="55" fill="#879ca5" stroke="#555"/>
  <rect x="50" y="110" width="340" height="55" fill="#aeb8b5" stroke="#555"/>
  <rect x="50" y="165" width="340" height="70" fill="#a8b58f" stroke="#555"/>
  <text x="220" y="88" text-anchor="middle" font-size="17">Basaltes</text>
  <text x="220" y="143" text-anchor="middle" font-size="17">Gabbros</text>
  <text x="220" y="205" text-anchor="middle" font-size="17">Péridotites</text>
  <path d="M410 55 L425 55 L425 165 L410 165" fill="none" stroke="#444" stroke-width="3"/>
  <text x="440" y="115" font-size="15">Croûte océanique</text>
  <text x="440" y="205" font-size="15">Manteau lithosphérique</text>
  <text x="50" y="270" font-size="14">Succession idéale et simplifiée</text>
</svg>`,
            legende: "Les filons et les sédiments ne sont pas représentés. Une ophiolite réelle peut être incomplète ou déformée."
          },
          {
            type: "exemple",
            titre: "Reconstituer une ancienne convergence",
            texte: "La présence d’ophiolites dans une chaîne de montagnes, associée à d’autres indices comme des roches métamorphiques et des structures de compression, peut témoigner de l’existence puis de la fermeture d’un domaine océanique ancien."
          }
        ]
      },

      {
        id: 6,
        titre: "Relier les observations dans un modèle global",
        blocs: [
          {
            type: "methode",
            titre: "Identifier un contexte tectonique",
            texte: "1. Observer la répartition des séismes et leur profondeur. 2. Repérer les reliefs : dorsale, fosse, chaîne ou faille. 3. Étudier la nature et l’âge des roches ainsi que le volcanisme. 4. Examiner les mouvements mesurés des plaques. 5. Proposer un contexte et vérifier que tous les indices sont cohérents."
          },
          {
            type: "exemple",
            titre: "Ensemble d’indices",
            texte: "Une fosse, une zone inclinée de foyers sismiques et un arc volcanique suggèrent une subduction. Une dorsale, des séismes superficiels et des roches océaniques de plus en plus anciennes en s’éloignant de l’axe suggèrent une divergence avec expansion océanique."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "La tectonique des plaques relie les mouvements de la lithosphère aux séismes, au volcanisme et à la formation de nombreuses structures géologiques. Les plaques divergent, convergent ou coulissent. Leur mouvement résulte de plusieurs forces liées notamment à la dynamique interne de la Terre. Les ophiolites peuvent conserver la trace d’un ancien domaine océanique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Nommer les trois types de limites de plaques et décrire le mouvement relatif correspondant.",
        correction: "À une limite divergente, les plaques s’écartent. À une limite convergente, elles se rapprochent. À une limite coulissante, elles glissent principalement latéralement l’une par rapport à l’autre."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Pourquoi les limites des plaques ne correspondent-elles pas toujours aux contours des continents ?",
        correction: "Une plaque lithosphérique peut porter à la fois une partie continentale et une partie océanique. Les contours visibles des continents ne définissent donc pas nécessairement les limites des plaques."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Expliquer ce que l’on appelle la traction de la plaque plongeante.",
        correction: "Une lithosphère océanique froide et dense qui s’enfonce en subduction peut tirer sur la partie de la plaque qui reste en surface. Cette traction contribue au mouvement de la plaque, avec d’autres forces."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un séisme a une magnitude donnée, mais des dégâts importants sont observés dans une ville et faibles dans une autre. Est-ce contradictoire ?",
        correction: "Non. La magnitude caractérise le séisme à sa source, tandis que l’intensité décrit ses effets en un lieu. Les effets varient notamment avec la distance, la profondeur, la nature du sol et la vulnérabilité des constructions."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Associer à chaque contexte une origine simplifiée possible du magma : dorsale, subduction, point chaud.",
        correction: "À la dorsale, le magma peut provenir de la fusion partielle du manteau lors de sa remontée et de la diminution de pression. En subduction, l’eau libérée par la plaque plongeante facilite la fusion partielle du manteau situé au-dessus. À un point chaud, une remontée de matériaux mantelliques chauds peut favoriser une fusion partielle."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un alignement volcanique montre un volcan actif à l’est et des volcans de plus en plus anciens vers l’ouest. Dans le modèle d’un point chaud relativement fixe, proposer le sens du déplacement de la plaque.",
        correction: "La plaque se déplacerait globalement vers l’ouest dans ce modèle. Les volcans se sont formés près de la source de magma puis ont été emportés par la plaque ; les plus anciens sont donc plus éloignés dans le sens du déplacement. Il faut vérifier cette hypothèse avec les âges et d’autres observations."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Qu’est-ce qu’une ophiolite ? Citer deux types de roches qu’elle peut contenir.",
        correction: "Une ophiolite est un ensemble de roches interprété comme un fragment d’ancienne lithosphère océanique présent sur un continent. Elle peut notamment contenir des basaltes, des gabbros et des péridotites."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une chaîne de montagnes contient des ophiolites, des roches métamorphiques et des structures de compression. Quelle histoire peut-on proposer ?",
        correction: "Ces indices peuvent suggérer qu’un domaine océanique a existé puis s’est fermé lors d’une convergence. Des fragments de lithosphère océanique ont été conservés dans la chaîne, tandis que les roches ont subi des déformations et des transformations. L’histoire précise doit être établie avec des observations et des datations complémentaires."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une région présente une dorsale, des séismes superficiels et des roches océaniques de plus en plus anciennes de part et d’autre de l’axe. Quel contexte tectonique proposent ces indices ?",
        correction: "Ces indices suggèrent une limite divergente avec accrétion et expansion océanique. La lithosphère se forme près de la dorsale puis s’en éloigne, ce qui explique l’âge croissant des roches."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un élève affirme : « Tous les séismes et tous les volcans se trouvent exactement sur une limite de plaques. » Corriger.",
        correction: "De nombreux séismes et volcans se concentrent près des limites de plaques, mais certains se produisent à l’intérieur des plaques. Un volcan intraplaque peut notamment être lié à un point chaud ; des séismes intraplaques sont également possibles."
      }
    ]
  }
]);
