enregistrerChapitres("1ere", "svt", [
  {
    id: 11,
    titre: "Chapitre 11 : Fossiles, datation et reconstitution des milieux anciens",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les fossiles, témoins du passé",
        blocs: [
          {
            type: "introduction",
            titre: "Des traces conservées dans les roches",
            texte: "Les roches sédimentaires peuvent contenir des restes ou des traces d’êtres vivants anciens. Ces fossiles renseignent sur la succession des êtres vivants, l’âge relatif des couches et les milieux dans lesquels les sédiments se sont déposés."
          },
          {
            type: "definition",
            titre: "Fossile",
            texte: "Un fossile est un reste ou une trace d’un organisme du passé conservé dans une roche ou un autre dépôt naturel. Il peut s’agir d’une coquille, d’un os, d’une empreinte de feuille, d’une piste ou d’un terrier."
          },
          {
            type: "definition",
            titre: "Fossilisation",
            texte: "La fossilisation est l’ensemble des processus qui permettent la conservation d’un reste ou d’une trace. Elle est rare : la plupart des organismes se décomposent ou sont détruits sans laisser de fossile."
          },
          {
            type: "tableau",
            titre: "Diversité des fossiles",
            entetes: ["Groupe ou trace", "Exemples", "Ce qui peut être conservé"],
            lignes: [
              ["Vertébrés", "Poissons, reptiles, mammifères anciens.", "Os, dents, empreintes de pas."],
              ["Invertébrés", "Ammonites, trilobites, coquillages.", "Coquilles, parties du squelette externe, moulages."],
              ["Végétaux", "Fougères, arbres, plantes à fleurs anciens.", "Empreintes de feuilles, bois, pollen."],
              ["Traces d’activité", "Pistes, terriers, traces de déplacement.", "Marques conservées dans un ancien sédiment."]
            ]
          },
          {
            type: "remarque",
            titre: "Conservation et interprétation",
            texte: "Un fossile ne conserve pas toujours l’organisme entier. Les parties dures se conservent plus facilement que les parties molles. Un enfouissement rapide peut favoriser la conservation, mais les fossiles restent un échantillon incomplet de la vie passée."
          },
          {
            type: "schema",
            titre: "Étapes possibles de la fossilisation",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 230" role="img" aria-labelledby="svt11s1t svt11s1d">
  <title id="svt11s1t">Fossilisation simplifiée</title>
  <desc id="svt11s1d">Un organisme meurt, ses restes sont enfouis dans des sédiments, puis une trace ou un reste est conservé dans une roche qui peut ensuite être exposée par l'érosion.</desc>
  <defs><marker id="svt11a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker></defs>
  <rect width="720" height="230" fill="#fff"/>
  <rect x="15" y="65" width="145" height="85" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="87" y="98" text-anchor="middle" font-size="15">Organisme</text>
  <text x="87" y="122" text-anchor="middle" font-size="15">et mort</text>
  <rect x="195" y="65" width="145" height="85" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="267" y="98" text-anchor="middle" font-size="15">Enfouissement</text>
  <text x="267" y="122" text-anchor="middle" font-size="15">dans le sédiment</text>
  <rect x="375" y="65" width="145" height="85" rx="8" fill="#e7ded5" stroke="#806b55"/>
  <text x="447" y="98" text-anchor="middle" font-size="15">Conservation</text>
  <text x="447" y="122" text-anchor="middle" font-size="15">dans une roche</text>
  <rect x="555" y="65" width="145" height="85" rx="8" fill="#e2eff8" stroke="#527b95"/>
  <text x="627" y="98" text-anchor="middle" font-size="15">Exposition</text>
  <text x="627" y="122" text-anchor="middle" font-size="15">par l'érosion</text>
  <path d="M160 108 L190 108 M340 108 L370 108 M520 108 L550 108" stroke="#444" stroke-width="2" marker-end="url(#svt11a1)"/>
  <text x="360" y="200" text-anchor="middle" font-size="14">Une succession possible, parmi plusieurs modes de conservation</text>
</svg>`,
            legende: "Ce schéma présente une possibilité de fossilisation ; toutes les étapes et tous les fossiles ne sont pas identiques."
          }
        ]
      },

      {
        id: 2,
        titre: "Les fossiles stratigraphiques",
        blocs: [
          {
            type: "definition",
            titre: "Fossile stratigraphique",
            texte: "Un fossile stratigraphique, ou fossile-guide, est utile pour dater relativement et comparer des couches. Un bon fossile-guide correspond à un organisme ayant vécu pendant une durée géologique relativement courte, ayant eu une large répartition géographique et étant suffisamment abondant et reconnaissable."
          },
          {
            type: "exemple",
            titre: "Exemples de groupes étudiés",
            texte: "Certaines espèces de trilobites et d’ammonites, invertébrés marins, sont utilisées pour la datation relative de couches de certaines périodes. Des fossiles de vertébrés ou de végétaux peuvent aussi servir à comparer des terrains, selon leur répartition et leur durée d’existence."
          },
          {
            type: "remarque",
            titre: "L’espèce compte",
            texte: "Un grand groupe peut avoir existé pendant une très longue durée. Il faut donc identifier aussi précisément que possible l’espèce ou l’ensemble de fossiles présent : la seule mention « fossile de poisson » ou « ammonite » ne donne pas toujours une datation précise."
          },
          {
            type: "definition",
            titre: "Corrélation de couches",
            texte: "La corrélation consiste à rapprocher des couches observées dans des lieux différents afin de déterminer si elles correspondent à une même période ou à des périodes proches. La présence d’un même assemblage de fossiles stratigraphiques peut aider à établir cette correspondance."
          },
          {
            type: "methode",
            titre: "Comparer deux affleurements",
            texte: "Identifier les fossiles dans chaque couche, comparer leurs périodes d’existence connues, puis rechercher l’intervalle de temps commun. Vérifier la cohérence avec l’ordre des couches et avec d’autres indices. Deux couches de nature différente peuvent être contemporaines si elles se sont déposées au même moment dans des milieux différents."
          },
          {
            type: "schema",
            titre: "Corrélation à l’aide d’un fossile-guide",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 300" role="img" aria-labelledby="svt11s2t svt11s2d">
  <title id="svt11s2t">Corrélation de deux couches fossilifères</title>
  <desc id="svt11s2d">Deux affleurements éloignés présentent chacun une couche contenant le fossile-guide X. Ces deux couches peuvent être rapprochées dans le temps même si leur nature diffère.</desc>
  <rect width="700" height="300" fill="#fff"/>
  <text x="170" y="30" text-anchor="middle" font-size="17">Affleurement A</text>
  <text x="530" y="30" text-anchor="middle" font-size="17">Affleurement B</text>
  <rect x="50" y="55" width="240" height="60" fill="#e8dba9" stroke="#765"/>
  <rect x="50" y="115" width="240" height="60" fill="#bfc9bb" stroke="#765"/>
  <rect x="50" y="175" width="240" height="60" fill="#d5b995" stroke="#765"/>
  <rect x="410" y="55" width="240" height="60" fill="#d5b995" stroke="#765"/>
  <rect x="410" y="115" width="240" height="60" fill="#b8d8e5" stroke="#765"/>
  <rect x="410" y="175" width="240" height="60" fill="#e8dba9" stroke="#765"/>
  <text x="170" y="151" text-anchor="middle" font-size="19">Fossile X</text>
  <text x="530" y="151" text-anchor="middle" font-size="19">Fossile X</text>
  <path d="M290 145 L410 145" stroke="#a33" stroke-width="3" stroke-dasharray="7 5"/>
  <text x="350" y="275" text-anchor="middle" font-size="14">Correspondance temporelle proposée</text>
</svg>`,
            legende: "Les couches contenant X peuvent être corrélées si X est un bon fossile-guide et si les autres observations sont cohérentes."
          },
          {
            type: "remarque",
            titre: "Précautions",
            texte: "Un fossile peut avoir été arraché à une couche ancienne puis redéposé dans un sédiment plus récent : il est alors remanié. Son âge indique celui de l’organisme, pas directement celui du nouveau dépôt. Il faut examiner son état et son contexte."
          }
        ]
      },

      {
        id: 3,
        titre: "Fossiles de faciès et milieux de dépôt",
        blocs: [
          {
            type: "definition",
            titre: "Fossile de faciès",
            texte: "Un fossile de faciès renseigne surtout sur les conditions du milieu où vivait l’organisme : profondeur, salinité, température ou nature du fond, selon le cas. L’organisme correspondant peut avoir existé pendant une longue durée ; il n’est donc pas nécessairement un bon fossile-guide."
          },
          {
            type: "definition",
            titre: "Faciès sédimentaire",
            texte: "Le faciès d’une couche est l’ensemble de ses caractères observables : nature de la roche, taille des grains, structures sédimentaires et fossiles. L’étude du faciès aide à reconstituer les conditions de dépôt."
          },
          {
            type: "exemple",
            titre: "Indices d’un ancien milieu",
            texte: "Un ensemble de fossiles d’organismes marins associés à une roche sédimentaire peut indiquer un ancien milieu marin. Des empreintes de végétaux terrestres et certains dépôts associés peuvent indiquer un milieu continental. L’interprétation dépend de l’ensemble des indices, car les restes peuvent parfois avoir été transportés."
          },
          {
            type: "tableau",
            titre: "Deux questions différentes",
            entetes: ["Outil", "Question principale", "Caractère recherché"],
            lignes: [
              ["Fossile stratigraphique", "Quand la couche s’est-elle déposée relativement à d’autres ?", "Durée d’existence courte et large répartition géographique."],
              ["Fossile de faciès", "Dans quel type de milieu l’organisme vivait-il ?", "Exigences écologiques suffisamment caractéristiques."],
              ["Faciès sédimentaire", "Quelles étaient les conditions de dépôt ?", "Ensemble des caractères de la roche et de ses fossiles."]
            ]
          },
          {
            type: "remarque",
            titre: "Un même âge, des roches différentes",
            texte: "À un même moment, des sédiments différents peuvent se déposer dans une rivière, sur une plage et au large. Des couches contemporaines n’ont donc pas nécessairement le même faciès."
          }
        ]
      },

      {
        id: 4,
        titre: "Chronologies relative et absolue",
        blocs: [
          {
            type: "definition",
            titre: "Chronologie relative",
            texte: "La chronologie relative classe les événements les uns par rapport aux autres. Elle utilise notamment la superposition des couches, les relations de recoupement et la succession des fossiles. Elle ne fournit pas nécessairement un âge en années."
          },
          {
            type: "definition",
            titre: "Datation absolue",
            texte: "La datation absolue fournit une estimation chiffrée de l’âge d’un événement ou d’un matériau, généralement accompagnée d’une incertitude. Certaines méthodes reposent sur la désintégration radioactive d’isotopes présents dans des minéraux."
          },
          {
            type: "definition",
            titre: "Demi-vie",
            texte: "La demi-vie est la durée nécessaire pour que la moitié des noyaux radioactifs d’un isotope donné se désintègrent. Après deux demi-vies, il reste en moyenne un quart de la quantité initiale de noyaux radioactifs ; après trois, un huitième."
          },
          {
            type: "exemple",
            titre: "Calcul simplifié",
            texte: "Dans un modèle simplifié, si un échantillon conserve un quart de sa quantité initiale d’un isotope radioactif, deux demi-vies se sont écoulées. Si la demi-vie de cet isotope vaut 1 million d’années, la durée correspondante est de 2 millions d’années."
          },
          {
            type: "remarque",
            titre: "Choisir la bonne méthode",
            texte: "Une datation radiométrique date un événement lié au minéral analysé, par exemple sa cristallisation, et pas automatiquement tous les événements de la roche. Le choix de l’isotope dépend notamment de l’âge recherché et du matériau. Les méthodes nécessitent des vérifications, car un système peut avoir été modifié après sa formation."
          },
          {
            type: "exemple",
            titre: "Encadrer l’âge d’une couche",
            texte: "Une couche fossilifère est comprise entre deux niveaux de cendres volcaniques. Si la cendre inférieure est datée à 120 millions d’années et la cendre supérieure à 118 millions d’années, la couche s’est déposée entre ces deux événements, sous réserve que les datations et les relations de superposition soient fiables. Les incertitudes des mesures doivent aussi être prises en compte."
          },
          {
            type: "schema",
            titre: "Encadrement par deux niveaux datés",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 285" role="img" aria-labelledby="svt11s3t svt11s3d">
  <title id="svt11s3t">Âge encadré d'une couche fossilifère</title>
  <desc id="svt11s3d">Une couche fossilifère se trouve entre une cendre inférieure datée à 120 millions d'années et une cendre supérieure datée à 118 millions d'années. Son dépôt est compris entre ces deux âges dans une série non renversée.</desc>
  <rect width="680" height="285" fill="#fff"/>
  <rect x="40" y="55" width="380" height="55" fill="#d8d8d8" stroke="#555"/>
  <rect x="40" y="110" width="380" height="75" fill="#e8dba9" stroke="#765"/>
  <rect x="40" y="185" width="380" height="55" fill="#b9b9b9" stroke="#555"/>
  <text x="230" y="88" text-anchor="middle" font-size="16">Cendre supérieure : 118 Ma</text>
  <text x="230" y="153" text-anchor="middle" font-size="16">Couche fossilifère</text>
  <text x="230" y="218" text-anchor="middle" font-size="16">Cendre inférieure : 120 Ma</text>
  <text x="445" y="142" font-size="15">Dépôt entre</text>
  <text x="445" y="164" font-size="15">120 et 118 Ma</text>
  <text x="40" y="270" font-size="14">Ma = millions d'années</text>
</svg>`,
            legende: "Exemple simplifié : les incertitudes des datations et l’état de la série doivent être vérifiés."
          }
        ]
      },

      {
        id: 5,
        titre: "L’échelle stratigraphique",
        blocs: [
          {
            type: "definition",
            titre: "Échelle des temps géologiques",
            texte: "L’échelle stratigraphique organise l’histoire de la Terre en grandes divisions chronologiques. Elle s’appuie sur l’étude des roches, la succession des fossiles et des datations chiffrées. Ses limites correspondent à des événements ou changements reconnus dans les archives géologiques."
          },
          {
            type: "tableau",
            titre: "Quelques grandes divisions",
            entetes: ["Division", "Repères simplifiés"],
            lignes: [
              ["Précambrien", "Intervalle très long allant de la formation de la Terre jusqu’au début du Cambrien, vers 539 millions d’années."],
              ["Paléozoïque", "De l’ordre de 539 à 252 millions d’années ; il comprend notamment le Cambrien, le Dévonien et le Permien."],
              ["Mésozoïque", "De l’ordre de 252 à 66 millions d’années ; il comprend le Trias, le Jurassique et le Crétacé."],
              ["Cénozoïque", "De 66 millions d’années environ à aujourd’hui ; il comprend notamment le Paléogène, le Néogène et le Quaternaire."]
            ]
          },
          {
            type: "remarque",
            titre: "Des âges approximatifs",
            texte: "Les limites sont données ici sous forme arrondie. Les estimations peuvent être précisées au fur et à mesure des recherches. Plus un âge exprimé en millions d’années est grand, plus l’événement est ancien."
          },
          {
            type: "methode",
            titre: "Lire une échelle",
            texte: "Repérer d’abord le sens du temps et les unités. Placer l’événement entre les limites qui l’encadrent, puis nommer la division correspondante. Par exemple, un événement daté approximativement de 100 Ma appartient au Mésozoïque, plus précisément au Crétacé."
          }
        ]
      },

      {
        id: 6,
        titre: "La paléogéographie",
        blocs: [
          {
            type: "definition",
            titre: "Reconstituer les paysages anciens",
            texte: "La paléogéographie est l’étude de la répartition et des caractères des milieux à une époque passée : continents, mers, rivages et autres environnements. Elle s’appuie sur les roches, les fossiles et leurs âges."
          },
          {
            type: "methode",
            titre: "Construire une reconstitution",
            texte: "1. Choisir une période. 2. Identifier et corréler des couches de cet âge dans plusieurs lieux. 3. Étudier leurs faciès et leurs fossiles pour interpréter les milieux de dépôt. 4. Reporter ces résultats sur une carte et proposer la position des anciens milieux. 5. Indiquer les zones incertaines."
          },
          {
            type: "exemple",
            titre: "Comparer plusieurs lieux",
            texte: "Pour une même période, un géologue identifie des dépôts continentaux dans une région, des dépôts littoraux dans une deuxième et des dépôts marins dans une troisième. Il peut proposer une répartition approximative des terres, du rivage et de la mer, puis la confronter à d’autres observations."
          },
          {
            type: "remarque",
            titre: "Une reconstitution reste une hypothèse",
            texte: "Les roches disponibles sont parfois érodées, enfouies ou déformées. Une carte paléogéographique est donc une reconstitution fondée sur des indices incomplets ; elle peut être modifiée lorsque de nouvelles données sont découvertes."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "Les fossiles sont des restes ou des traces d’êtres vivants anciens. Les fossiles stratigraphiques aident à comparer l’âge relatif des couches ; les fossiles de faciès et les caractères des roches renseignent sur les milieux de dépôt. La datation absolue fournit une estimation chiffrée avec incertitude. L’ensemble de ces indices permet de construire l’échelle des temps géologiques et de proposer des reconstitutions paléogéographiques."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Définir un fossile et donner un exemple de fossile de vertébré, d’invertébré et de végétal.",
        correction: "Un fossile est un reste ou une trace d’un organisme ancien conservé dans un dépôt naturel. Exemples : une dent de poisson pour un vertébré ; une coquille d’ammonite pour un invertébré ; une empreinte de feuille pour un végétal."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Quelles caractéristiques rendent une espèce utile comme fossile stratigraphique ?",
        correction: "Une espèce utile comme fossile-guide a vécu pendant une durée géologique relativement courte, a occupé une large aire géographique et est suffisamment abondante et reconnaissable. Ces caractères facilitent la comparaison et la datation relative de couches éloignées."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Deux couches éloignées contiennent le même fossile-guide, mais l’une est sableuse et l’autre calcaire. Peuvent-elles être contemporaines ? Justifier.",
        correction: "Oui. Si le fossile est bien identifié, non remanié et si les autres indices sont cohérents, les deux couches peuvent correspondre à une même période. Leur nature différente peut s’expliquer par des milieux de dépôt différents au même moment."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Distinguer fossile stratigraphique et fossile de faciès.",
        correction: "Un fossile stratigraphique sert surtout à dater relativement et à corréler des couches. Un fossile de faciès renseigne surtout sur les conditions du milieu dans lequel vivait l’organisme. Un fossile de faciès peut avoir existé longtemps et ne pas permettre une datation précise."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Dans une roche, on découvre une coquille ancienne dont les bords sont usés, mélangée à des fossiles nettement plus récents. Pourquoi faut-il être prudent avant d’utiliser cette coquille pour dater la couche ?",
        correction: "La coquille a pu être arrachée à un dépôt ancien, transportée puis redéposée dans une couche plus récente : elle serait remaniée. Dans ce cas, elle indique l’âge de l’organisme ancien, mais pas directement celui du nouveau dépôt. Il faut étudier son état et le contexte des autres fossiles."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Dans un modèle simplifié, un isotope radioactif possède une demi-vie de 2 millions d’années. Il reste un quart de sa quantité initiale. Combien de demi-vies se sont écoulées et quelle durée cela représente-t-il ?",
        correction: "Après une demi-vie, il reste la moitié ; après deux demi-vies, il reste la moitié de la moitié, soit un quart. Deux demi-vies se sont donc écoulées. La durée est 2 × 2 = 4 millions d’années. Ce calcul suppose que le modèle et les conditions de datation sont applicables."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Une couche fossilifère non renversée se trouve au-dessus d’une cendre datée à 90 Ma et au-dessous d’une cendre datée à 86 Ma. Encadrer son âge en négligeant les incertitudes pour cet exercice.",
        correction: "La couche est plus récente que la cendre inférieure à 90 Ma et plus ancienne que la cendre supérieure à 86 Ma. Son dépôt est donc compris entre 90 et 86 millions d’années. En pratique, il faut tenir compte des incertitudes des datations et vérifier les relations entre les couches."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Un événement est daté approximativement de 100 millions d’années. Dans quelle grande division et dans quelle période citées dans le cours se situe-t-il ?",
        correction: "100 Ma se situe entre environ 252 et 66 Ma : l’événement appartient donc au Mésozoïque. Il se situe plus précisément dans le Crétacé, période du Mésozoïque."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Pour une même période, trois régions présentent respectivement des dépôts continentaux, littoraux et marins. Que peut-on tenter de reconstituer ? Pourquoi faut-il préciser les incertitudes ?",
        correction: "On peut proposer une carte paléogéographique montrant la répartition approximative des terres, du rivage et de la mer à cette période. Il faut préciser les incertitudes car les roches observées peuvent être incomplètes, déformées ou mal datées, et les indices de milieu ne sont pas toujours sans ambiguïté."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une couche A contient une espèce connue entre 150 et 140 Ma. Elle contient aussi une espèce connue entre 145 et 135 Ma. Dans quel intervalle leur présence commune situe-t-elle le dépôt, si les fossiles sont bien identifiés et non remaniés ?",
        correction: "La première espèce est connue entre 150 et 140 Ma ; la seconde entre 145 et 135 Ma. Leur intervalle commun est compris entre 145 et 140 Ma. Sous les hypothèses de l’énoncé, le dépôt se situe donc dans cet intervalle."
      }
    ]
  }
]);
