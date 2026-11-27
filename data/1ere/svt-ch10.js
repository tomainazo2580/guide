enregistrerChapitres("1ere", "svt", [
  {
    id: 10,
    titre: "Chapitre 10 : Les strates et la chronologie relative",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les couches sédimentaires",
        blocs: [
          {
            type: "introduction",
            titre: "Lire une succession de couches",
            texte: "Dans certains paysages, les roches apparaissent en couches superposées. Ces couches témoignent d’une succession de dépôts et de transformations. Leur étude permet de reconstituer une partie de l’histoire d’une région."
          },
          {
            type: "definition",
            titre: "Sédiment et roche sédimentaire",
            texte: "Un sédiment est un ensemble de particules ou de substances déposées à la surface de la Terre, par exemple du sable ou de la boue. Après enfouissement et transformations, certains sédiments deviennent des roches sédimentaires."
          },
          {
            type: "definition",
            titre: "Strate et plan de stratification",
            texte: "Une strate est une couche de sédiment ou de roche sédimentaire qui se distingue des couches voisines par sa composition, sa couleur, sa taille des grains ou d’autres caractères. Un plan de stratification est une surface séparant deux strates successives."
          },
          {
            type: "definition",
            titre: "Série sédimentaire",
            texte: "Une série sédimentaire est une succession de strates observées dans une région. Elle peut être continue ou comporter des interruptions, des surfaces d’érosion et des couches manquantes."
          },
          {
            type: "schema",
            titre: "Strates et plans de stratification",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" role="img" aria-labelledby="svt10s1t svt10s1d">
  <title id="svt10s1t">Trois strates superposées</title>
  <desc id="svt10s1d">Trois couches de roches sédimentaires sont séparées par des plans de stratification. La couche A est en bas, la couche B au milieu et la couche C en haut.</desc>
  <defs><marker id="svt10a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker></defs>
  <rect width="680" height="280" fill="#fff"/>
  <rect x="40" y="165" width="350" height="65" fill="#d5b995" stroke="#765"/>
  <rect x="40" y="100" width="350" height="65" fill="#bfc9bb" stroke="#765"/>
  <rect x="40" y="35" width="350" height="65" fill="#e8dba9" stroke="#765"/>
  <text x="215" y="203" text-anchor="middle" font-size="19">Strate A</text>
  <text x="215" y="138" text-anchor="middle" font-size="19">Strate B</text>
  <text x="215" y="73" text-anchor="middle" font-size="19">Strate C</text>
  <text x="430" y="105" font-size="16">Plan de stratification</text>
  <path d="M425 100 L395 100" stroke="#444" stroke-width="2" marker-end="url(#svt10a1)"/>
  <text x="430" y="171" font-size="16">Plan de stratification</text>
  <path d="M425 165 L395 165" stroke="#444" stroke-width="2" marker-end="url(#svt10a1)"/>
  <text x="40" y="260" font-size="15">Bas</text>
  <text x="350" y="260" font-size="15">Haut</text>
</svg>`,
            legende: "Les lettres servent à repérer les couches. Dans ce dessin, les plans de stratification sont horizontaux."
          },
          {
            type: "remarque",
            titre: "Épaisseur d’une strate",
            texte: "L’épaisseur d’une strate se mesure entre ses deux limites, perpendiculairement aux plans de stratification. Elle ne correspond pas nécessairement à la hauteur verticale observée lorsque la couche est inclinée."
          }
        ]
      },

      {
        id: 2,
        titre: "Le principe de superposition",
        blocs: [
          {
            type: "definition",
            titre: "Chronologie relative",
            texte: "La chronologie relative établit l’ordre des événements géologiques : elle indique si un événement est plus ancien ou plus récent qu’un autre, sans donner nécessairement son âge en années."
          },
          {
            type: "regle",
            titre: "Principe de superposition",
            texte: "Dans une série sédimentaire non renversée, une strate est généralement plus récente que celle qu’elle recouvre et plus ancienne que celle qui la recouvre. On lit donc la succession des dépôts du bas vers le haut."
          },
          {
            type: "exemple",
            titre: "Trois couches",
            texte: "Dans une série non renversée où A est sous B et B sous C, le dépôt de A est le plus ancien. Il est suivi du dépôt de B, puis de C. Cette conclusion ordonne les dépôts mais ne donne pas leur âge chiffré."
          },
          {
            type: "remarque",
            titre: "Attention aux déformations",
            texte: "Des mouvements tectoniques peuvent incliner, plisser ou même renverser les couches. Une couche actuellement située au-dessus d’une autre n’est donc pas toujours la plus récente : il faut d’abord vérifier si la série a conservé son ordre initial."
          },
          {
            type: "methode",
            titre: "Établir un ordre relatif",
            texte: "1. Repérer les limites des couches et leur disposition. 2. Rechercher des indices de déformation ou de renversement. 3. Si la série n’est pas renversée, appliquer la superposition. 4. Présenter les événements du plus ancien au plus récent, en signalant les incertitudes."
          }
        ]
      },

      {
        id: 3,
        titre: "Disposition des couches et séries anormales",
        blocs: [
          {
            type: "definition",
            titre: "Série horizontale ou inclinée",
            texte: "Une série est horizontale lorsque ses plans de stratification sont approximativement horizontaux. Une série inclinée présente des plans penchés. Des couches souvent déposées à l’origine avec une faible pente peuvent avoir été inclinées après leur dépôt par des déformations."
          },
          {
            type: "definition",
            titre: "Accordance",
            texte: "Deux ensembles de couches sont en accordance lorsque leurs plans de stratification sont globalement parallèles. Cette disposition n’exclut pas nécessairement une interruption de dépôt ou une érosion : une lacune peut exister même si les couches restent parallèles."
          },
          {
            type: "definition",
            titre: "Discordance angulaire",
            texte: "Une discordance angulaire est une surface séparant deux ensembles de couches dont les orientations diffèrent. Elle peut témoigner d’une succession d’événements : dépôt de couches anciennes, déformation, érosion, puis dépôt de couches plus récentes."
          },
          {
            type: "definition",
            titre: "Série renversée",
            texte: "Une série renversée est une série dont l’ordre initial a été inversé par une déformation. Dans ce cas, les couches actuellement les plus hautes peuvent être plus anciennes que celles situées en dessous. On parle alors d’une disposition anormale par rapport à la superposition habituelle."
          },
          {
            type: "definition",
            titre: "Stratification entrecroisée",
            texte: "La stratification entrecroisée est une disposition de petits lits inclinés à l’intérieur d’une strate, formés notamment par le déplacement de rides ou de dunes de sable sous l’action de l’eau ou du vent. Elle ne signifie pas à elle seule que l’ensemble des couches a été renversé."
          },
          {
            type: "schema",
            titre: "Accordance et discordance angulaire",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 310" role="img" aria-labelledby="svt10s2t svt10s2d">
  <title id="svt10s2t">Accordance et discordance</title>
  <desc id="svt10s2d">À gauche, les couches successives sont parallèles. À droite, des couches horizontales reposent sur une surface d'érosion qui coupe des couches anciennes inclinées.</desc>
  <rect width="700" height="310" fill="#fff"/>
  <text x="170" y="30" text-anchor="middle" font-size="18">Accordance</text>
  <rect x="30" y="60" width="280" height="60" fill="#e8dba9" stroke="#765"/>
  <rect x="30" y="120" width="280" height="60" fill="#bfc9bb" stroke="#765"/>
  <rect x="30" y="180" width="280" height="60" fill="#d5b995" stroke="#765"/>
  <text x="530" y="30" text-anchor="middle" font-size="18">Discordance angulaire</text>
  <rect x="390" y="60" width="280" height="55" fill="#e8dba9" stroke="#765"/>
  <rect x="390" y="115" width="280" height="45" fill="#bfc9bb" stroke="#765"/>
  <path d="M390 160 L670 160 L670 240 L390 240 Z" fill="#d5b995" stroke="#765"/>
  <path d="M390 210 L470 160 M440 240 L560 160 M530 240 L650 160 M620 240 L670 207" stroke="#765" stroke-width="3"/>
  <path d="M390 160 L670 160" stroke="#a33" stroke-width="4"/>
  <text x="530" y="275" text-anchor="middle" font-size="14">Surface d'érosion en rouge</text>
</svg>`,
            legende: "À droite, les couches inclinées sont coupées par une surface sur laquelle se déposent ensuite des couches horizontales."
          },
          {
            type: "methode",
            titre: "Reconnaître une série renversée",
            texte: "Le géologue recherche des indices indiquant le sens initial du dépôt, par exemple certaines structures sédimentaires conservées dans les couches, puis les compare à la disposition actuelle. Une couche inclinée n’est pas nécessairement renversée : inclinaison et inversion de l’ordre sont deux situations différentes."
          }
        ]
      },

      {
        id: 4,
        titre: "Transgression et régression marines",
        blocs: [
          {
            type: "definition",
            titre: "Transgression marine",
            texte: "Une transgression marine correspond à une progression de la mer sur les continents. Elle peut résulter d’une montée relative du niveau marin, d’un enfoncement du continent ou d’une combinaison de ces phénomènes."
          },
          {
            type: "definition",
            titre: "Régression marine",
            texte: "Une régression marine correspond au déplacement du rivage vers le large, accompagné du retrait de la mer d’une partie des terres auparavant couvertes. Elle peut résulter d’une baisse relative du niveau marin, d’un soulèvement du continent ou d’autres changements, notamment des apports sédimentaires."
          },
          {
            type: "exemple",
            titre: "Ce que peut montrer une série",
            texte: "En un lieu donné, une succession allant de dépôts continentaux à des dépôts de bord de mer, puis à des dépôts marins plus éloignés du rivage peut indiquer une transgression. Une succession inverse peut indiquer une régression. L’interprétation exige de comparer plusieurs indices et plusieurs affleurements."
          },
          {
            type: "definition",
            titre: "Faciès sédimentaire",
            texte: "Le faciès est l’ensemble des caractères observables d’une roche ou d’une couche, comme sa nature, sa granulométrie, ses structures et ses fossiles. Ces caractères donnent des indices sur les conditions de dépôt : milieu continental, littoral ou marin, par exemple."
          },
          {
            type: "schema",
            titre: "Succession possible lors d’une transgression",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 310" role="img" aria-labelledby="svt10s3t svt10s3d">
  <title id="svt10s3t">Exemple de série transgressive</title>
  <desc id="svt10s3d">Dans une série non renversée, un dépôt continental ancien est recouvert par un dépôt littoral puis par un dépôt marin plus récent.</desc>
  <defs><marker id="svt10a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker></defs>
  <rect width="680" height="310" fill="#fff"/>
  <rect x="40" y="190" width="350" height="60" fill="#d5b995" stroke="#765"/>
  <rect x="40" y="130" width="350" height="60" fill="#e8dba9" stroke="#765"/>
  <rect x="40" y="70" width="350" height="60" fill="#b8d8e5" stroke="#765"/>
  <text x="215" y="225" text-anchor="middle" font-size="16">Dépôt continental</text>
  <text x="215" y="165" text-anchor="middle" font-size="16">Dépôt littoral</text>
  <text x="215" y="105" text-anchor="middle" font-size="16">Dépôt marin</text>
  <path d="M460 240 L460 75" stroke="#444" stroke-width="2" marker-end="url(#svt10a3)"/>
  <text x="480" y="145" font-size="15">Temps : du plus ancien</text>
  <text x="480" y="168" font-size="15">vers le plus récent</text>
  <text x="40" y="285" font-size="14">Exemple simplifié, en un lieu donné</text>
</svg>`,
            legende: "Dans cet exemple non renversé, le milieu devient marin au cours du temps. Toutes les séries transgressives ne présentent pas exactement ces trois couches."
          },
          {
            type: "remarque",
            titre: "Ne pas identifier un milieu avec un seul indice",
            texte: "La nature de la roche seule ne suffit pas toujours à déterminer la profondeur ou le milieu de dépôt. On utilise aussi les fossiles, les structures sédimentaires et la comparaison avec les couches voisines."
          }
        ]
      },

      {
        id: 5,
        titre: "Reconstituer une histoire géologique",
        blocs: [
          {
            type: "definition",
            titre: "Érosion et lacune",
            texte: "L’érosion enlève et transporte des matériaux. Dans une série, une lacune correspond à un intervalle de temps qui n’est pas représenté par des dépôts conservés : elle peut résulter d’une absence de dépôt, d’une érosion, ou des deux."
          },
          {
            type: "regle",
            titre: "Principe de recoupement",
            texte: "Une structure qui en recoupe une autre est plus récente que la structure recoupée. Par exemple, une faille qui coupe plusieurs couches est postérieure au dépôt de ces couches. Une couche non coupée qui repose au-dessus peut être postérieure à la faille, si les observations confirment cette relation."
          },
          {
            type: "methode",
            titre: "Ordre des événements",
            texte: "Pour reconstituer une histoire : repérer les couches, appliquer la superposition lorsque la série n’est pas renversée, identifier les structures qui recoupent les couches, puis rechercher les surfaces d’érosion et les discordances. Formuler l’ordre des événements sans inventer d’âge chiffré."
          },
          {
            type: "exemple",
            titre: "Une histoire possible",
            texte: "Des couches A puis B se déposent. Elles sont ensuite inclinées et érodées. Enfin, une couche C horizontale se dépose sur la surface d’érosion. L’ordre relatif est : dépôt de A, dépôt de B, inclinaison, érosion, dépôt de C."
          },
          {
            type: "remarque",
            titre: "Les limites de la chronologie relative",
            texte: "L’ordre relatif ne dit pas combien d’années séparent deux événements. Pour obtenir un âge chiffré ou une estimation en années, on utilise d’autres méthodes, notamment certaines datations radiométriques lorsque les matériaux et les conditions s’y prêtent."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "Les strates sont des couches séparées par des plans de stratification. Dans une série non renversée, la superposition ordonne les dépôts du bas vers le haut. Une discordance peut révéler une déformation et une érosion antérieures à de nouveaux dépôts. Les faciès renseignent sur les milieux de dépôt, tandis que les principes de superposition et de recoupement permettent d’établir une chronologie relative."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Définir une strate et un plan de stratification.",
        correction: "Une strate est une couche de sédiment ou de roche sédimentaire qui se distingue des couches voisines par ses caractères. Un plan de stratification est une surface séparant deux strates successives."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Dans une série non renversée, la couche A est sous B et la couche C est au-dessus de B. Classer les dépôts du plus ancien au plus récent et nommer le principe utilisé.",
        correction: "L’ordre est A, puis B, puis C. On utilise le principe de superposition : dans une série non renversée, chaque couche est généralement plus récente que celle qu’elle recouvre."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Deux ensembles de couches ont des plans parallèles. Un élève affirme qu’il ne peut y avoir aucune interruption de dépôt entre eux. Cette conclusion est-elle certaine ?",
        correction: "Non. Des couches parallèles sont en accordance, mais cette disposition n’exclut pas une lacune. Une interruption de dépôt ou une érosion peut avoir eu lieu sans produire une discordance angulaire visible."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Des couches anciennes inclinées sont coupées par une surface d’érosion. Une couche horizontale repose sur cette surface. Donner un ordre possible des événements.",
        correction: "Un ordre possible est : dépôt des couches anciennes ; inclinaison de ces couches ; érosion qui crée une surface recoupant les couches ; dépôt de la couche horizontale. La surface séparant les deux ensembles constitue une discordance angulaire."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Une série non renversée présente, de bas en haut, un dépôt continental, un dépôt littoral puis un dépôt marin. Quelle évolution du milieu cette succession peut-elle suggérer ?",
        correction: "Cette succession peut suggérer une transgression marine : en ce lieu, les conditions passent d’un milieu continental à un milieu littoral puis marin. Il faut toutefois confirmer l’interprétation par d’autres indices, notamment les fossiles, les structures et les observations dans les régions voisines."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une couche est inclinée. Peut-on conclure qu’elle est renversée ? Expliquer.",
        correction: "Non. Une couche peut être inclinée tout en conservant son ordre initial par rapport aux autres couches. Pour conclure à un renversement, il faut rechercher des indices du sens initial du dépôt et montrer que cet ordre a été inversé."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une faille coupe les couches A et B. Une couche C repose au-dessus et n’est pas coupée par la faille, qui s’arrête à la surface située sous C. Proposer un ordre relatif, en supposant la série non renversée et A sous B.",
        correction: "A se dépose d’abord, puis B, d’après la superposition. La faille recoupe A et B : elle est donc postérieure à leur dépôt. La couche C repose sur la surface où la faille s’arrête : dans cette configuration, son dépôt est postérieur à la faille. L’ordre proposé est donc A, B, faille, puis C."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un géologue conclut qu’une couche est plus ancienne qu’une autre. Connaît-il pour autant son âge en années ?",
        correction: "Non. Il a établi une chronologie relative : il connaît l’ordre des couches, mais pas nécessairement leur âge chiffré. Une estimation en années nécessite d’autres méthodes adaptées aux matériaux disponibles."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Qu’est-ce qu’une stratification entrecroisée ? Sa présence prouve-t-elle à elle seule que toute la série est renversée ?",
        correction: "La stratification entrecroisée correspond à de petits lits inclinés à l’intérieur d’une strate, formés notamment par le déplacement de rides ou de dunes sous l’action de l’eau ou du vent. Sa présence ne prouve pas à elle seule que toute la série est renversée."
      }
    ]
  }
]);
