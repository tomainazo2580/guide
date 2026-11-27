enregistrerChapitres("1ere", "svt", [
  {
    id: 22,
    titre: "Chapitre 22 : Méthodes et bilan en sciences de la vie et de la Terre",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "1. Observer, formuler une hypothèse et expérimenter",
        blocs: [
          {
            type: "texte",
            titre: "De l’observation à l’hypothèse",
            texte: "Une observation est un fait constaté ou mesuré. Une hypothèse est une explication possible de ce fait. Pour être testable, elle doit permettre de prévoir un résultat que l’on peut comparer à une expérience ou à d’autres observations. Une hypothèse compatible avec un résultat n’est pas nécessairement la seule explication possible."
          },
          {
            type: "texte",
            titre: "Construire une expérience",
            texte: "Pour tester l’effet d’un facteur, on compare des situations qui diffèrent autant que possible par ce seul facteur. Les autres conditions sont maintenues constantes. Un témoin sert de référence. On mesure les résultats, on répète si possible l’expérience, puis on compare les résultats à la prévision."
          },
          {
            type: "texte",
            titre: "Exemple : lumière et photosynthèse",
            texte: "On cherche à savoir si la lumière influence le dégagement de dioxygène d’une plante aquatique. On place des fragments comparables dans les mêmes conditions de température, de durée et de disponibilité en dioxyde de carbone. L’un est éclairé, l’autre maintenu dans l’obscurité. On mesure le dioxygène dans chaque dispositif. Le dispositif obscur est ici un témoin de comparaison."
          },
          {
            type: "schema",
            titre: "Les étapes d’une démarche expérimentale",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 190" role="img" aria-labelledby="ch22s1titre ch22s1desc">
              <title id="ch22s1titre">Démarche expérimentale</title>
              <desc id="ch22s1desc">Une observation conduit à une hypothèse, puis à une expérience et à des résultats dont l’interprétation permet de discuter l’hypothèse.</desc>
              <defs>
                <marker id="ch22fleche1" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
                  <path d="M0 0 L9 4.5 L0 9 Z" fill="#333"/>
                </marker>
              </defs>
              <g font-size="15" text-anchor="middle">
                <rect x="10" y="55" width="135" height="55" rx="8" fill="#dcecf6" stroke="#46677d"/>
                <text x="77" y="88">Observation</text>
                <rect x="170" y="55" width="135" height="55" rx="8" fill="#e8e1f3" stroke="#695b7d"/>
                <text x="237" y="88">Hypothèse</text>
                <rect x="330" y="55" width="135" height="55" rx="8" fill="#f7e7c8" stroke="#80663b"/>
                <text x="397" y="88">Expérience</text>
                <rect x="490" y="55" width="135" height="55" rx="8" fill="#dcefdc" stroke="#527451"/>
                <text x="557" y="88">Résultats</text>
                <rect x="650" y="55" width="120" height="55" rx="8" fill="#f3dada" stroke="#805454"/>
                <text x="710" y="80">Discussion</text>
                <text x="710" y="99">et conclusion</text>
              </g>
              <g stroke="#333" stroke-width="2" marker-end="url(#ch22fleche1)">
                <line x1="145" y1="82" x2="167" y2="82"/>
                <line x1="305" y1="82" x2="327" y2="82"/>
                <line x1="465" y1="82" x2="487" y2="82"/>
                <line x1="625" y1="82" x2="647" y2="82"/>
              </g>
              <text x="390" y="150" text-anchor="middle" font-size="15">Une conclusion peut conduire à une nouvelle question.</text>
            </svg>`,
            legende: "La démarche n’est pas toujours linéaire : des résultats inattendus peuvent conduire à modifier l’hypothèse ou le protocole."
          },
          {
            type: "texte",
            titre: "Conclure avec prudence",
            texte: "Il faut distinguer le résultat mesuré de son interprétation. Si plusieurs facteurs changent en même temps, il est difficile d’attribuer l’effet observé à l’un d’eux. Les erreurs de mesure, les différences entre organismes et un nombre insuffisant de répétitions limitent aussi la portée d’une conclusion."
          }
        ]
      },

      {
        id: 2,
        titre: "2. Exploiter un tableau, un graphique et des mesures",
        blocs: [
          {
            type: "texte",
            titre: "Lire des données",
            texte: "Avant d’interpréter un tableau ou un graphique, repère le phénomène étudié, les grandeurs mesurées et leurs unités. Sur un graphique, lis les axes et leur échelle. Décris d’abord les variations : augmentation, diminution, stabilité ou maximum. Ensuite seulement, propose une explication."
          },
          {
            type: "texte",
            titre: "Calculer une variation et un pourcentage",
            texte: "La variation absolue est la valeur finale moins la valeur initiale. Si la valeur initiale n’est pas nulle, la variation relative en pourcentage vaut : (valeur finale − valeur initiale) ÷ valeur initiale × 100. Par exemple, un passage de 20 à 30 unités correspond à une augmentation de 10 unités, soit 10 ÷ 20 × 100 = 50 %."
          },
          {
            type: "texte",
            titre: "Calculer une vitesse moyenne",
            texte: "Une vitesse moyenne est une distance divisée par une durée. Les unités doivent être précisées et converties correctement. Par exemple, 40 km par million d’années correspondent à 4 cm par an : 40 km valent 4 000 000 cm et un million d’années valent 1 000 000 ans."
          },
          {
            type: "tableau",
            titre: "Questions à se poser devant des données",
            entetes: ["Étape", "Question"],
            lignes: [
              ["Identifier", "Que mesure-t-on et dans quelles unités ?"],
              ["Décrire", "Quelles valeurs et quelles variations observe-t-on ?"],
              ["Comparer", "Quelles conditions ou quels groupes sont comparés ?"],
              ["Interpréter", "Quelle explication est compatible avec les résultats ?"],
              ["Discuter", "Quelles limites empêchent une conclusion plus précise ?"]
            ]
          }
        ]
      },

      {
        id: 3,
        titre: "3. Bilan : matière et énergie dans le vivant",
        blocs: [
          {
            type: "texte",
            titre: "Nutrition et production végétale",
            texte: "Les végétaux chlorophylliens absorbent l’eau et les ions minéraux principalement par leurs racines. Le dioxyde de carbone entre notamment par les stomates des feuilles. Grâce à l’énergie lumineuse, la photosynthèse permet la production de matière organique à partir de matière minérale, avec libération de dioxygène."
          },
          {
            type: "texte",
            titre: "Utilisation de la matière organique",
            texte: "La matière organique produite par les végétaux alimente les chaînes alimentaires. Chez les animaux et l’être humain, la digestion transforme de grosses molécules alimentaires en nutriments absorbables. Les cellules utilisent ces nutriments pour construire leur matière et pour leurs activités. La respiration cellulaire libère de l’énergie utilisable ; certaines cellules peuvent aussi réaliser des fermentations dans des conditions adaptées."
          },
          {
            type: "texte",
            titre: "Cycles de matière",
            texte: "La matière passe entre les êtres vivants et leur milieu. Les organismes décomposeurs transforment les débris et les déchets ; certains processus rendent à nouveau disponibles des éléments minéraux. Les cycles du carbone et de l’azote impliquent plusieurs réservoirs et transformations. La matière se recycle, tandis que l’énergie reçue et utilisée par les êtres vivants est progressivement dissipée, notamment sous forme de chaleur."
          },
          {
            type: "schema",
            titre: "Un réseau simplifié de transferts",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" role="img" aria-labelledby="ch22s2titre ch22s2desc">
              <title id="ch22s2titre">Matière et énergie dans un écosystème</title>
              <desc id="ch22s2desc">La lumière fournit de l’énergie aux végétaux. La matière passe du milieu aux végétaux, puis aux consommateurs et aux décomposeurs, qui contribuent au retour d’éléments minéraux dans le milieu.</desc>
              <defs>
                <marker id="ch22fleche2" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
                  <path d="M0 0 L9 4.5 L0 9 Z" fill="#333"/>
                </marker>
              </defs>
              <rect x="20" y="105" width="160" height="60" rx="8" fill="#e8e1d3" stroke="#6d604e"/>
              <text x="100" y="130" text-anchor="middle" font-size="15">Milieu : eau, ions</text>
              <text x="100" y="150" text-anchor="middle" font-size="15">et dioxyde de carbone</text>
              <rect x="250" y="105" width="145" height="60" rx="8" fill="#d9eed2" stroke="#4d7844"/>
              <text x="322" y="140" text-anchor="middle" font-size="16">Végétaux</text>
              <rect x="475" y="105" width="145" height="60" rx="8" fill="#f4dfc5" stroke="#806342"/>
              <text x="547" y="140" text-anchor="middle" font-size="16">Consommateurs</text>
              <rect x="250" y="220" width="190" height="55" rx="8" fill="#e0d9eb" stroke="#685b78"/>
              <text x="345" y="253" text-anchor="middle" font-size="16">Décomposeurs</text>
              <circle cx="322" cy="30" r="24" fill="#f6cf59"/>
              <text x="322" y="35" text-anchor="middle" font-size="13">Lumière</text>
              <g fill="none" stroke="#333" stroke-width="2" marker-end="url(#ch22fleche2)">
                <line x1="180" y1="135" x2="245" y2="135"/>
                <line x1="395" y1="135" x2="470" y2="135"/>
                <line x1="322" y1="56" x2="322" y2="100"/>
                <path d="M545 165 L545 247 L445 247"/>
                <line x1="322" y1="165" x2="322" y2="215"/>
                <path d="M250 247 L100 247 L100 170"/>
              </g>
              <text x="400" y="198" text-anchor="middle" font-size="14">Débris et déchets</text>
              <text x="100" y="225" text-anchor="middle" font-size="14">Éléments minéraux</text>
            </svg>`,
            legende: "Schéma simplifié : les échanges réels sont plus nombreux. Les flèches reliant les organismes représentent des transferts de matière ; la lumière est un apport d’énergie."
          }
        ]
      },

      {
        id: 4,
        titre: "4. Bilan : reconstituer une histoire géologique",
        blocs: [
          {
            type: "texte",
            titre: "Chronologie relative",
            texte: "Dans une série sédimentaire non renversée, une couche est généralement plus ancienne que celle qui la recouvre : c’est le principe de superposition. Une structure qui en recoupe une autre est généralement plus récente que celle qu’elle recoupe. Un fragment inclus dans une roche est plus ancien que la roche qui l’enferme. Ces principes nécessitent une observation attentive des déformations et des contacts."
          },
          {
            type: "texte",
            titre: "Fossiles, faciès et datations",
            texte: "Un fossile stratigraphique utile permet de comparer l’âge relatif de couches éloignées : il appartient notamment à une espèce largement répartie et ayant vécu pendant une durée géologique relativement courte. Le faciès renseigne surtout sur les conditions du milieu de formation. Une datation absolue estime un âge numérique, avec une incertitude, à partir d’une méthode adaptée à l’échantillon et à l’événement étudié."
          },
          {
            type: "texte",
            titre: "Relier les événements",
            texte: "Une histoire géologique peut comprendre des dépôts, des déformations, du métamorphisme, du magmatisme, une érosion et de nouveaux dépôts. Pour établir leur ordre, on compare les structures et les contacts. Les indices tectoniques et les roches permettent ensuite de proposer un contexte, comme une divergence, une subduction ou une collision."
          },
          {
            type: "texte",
            titre: "Méthode de rédaction",
            texte: "Dans une réponse, sépare les observations des déductions : « j’observe que… », puis « j’en déduis que… ». Termine par une conclusion qui répond à la question. Lorsqu’une donnée ne permet pas de trancher entre plusieurs possibilités, indique clairement cette limite."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Raisonnement",
        points: 6,
        enonce: "On souhaite tester l’effet de la lumière sur le dégagement de dioxygène d’une plante aquatique. Propose deux dispositifs comparables, une mesure et une conclusion possible.",
        correction: "On place deux fragments comparables de la même plante dans des récipients identiques, pendant la même durée, à la même température et avec une disponibilité comparable en dioxyde de carbone. Un dispositif est éclairé ; l’autre est maintenu dans l’obscurité et sert de témoin. On mesure la quantité de dioxygène dans chaque récipient. Si elle est plus élevée dans le dispositif éclairé, le résultat est compatible avec un effet de la lumière sur le bilan de dioxygène. Des répétitions et des mesures adaptées renforceraient la conclusion."
      },
      {
        niveau: "Calcul",
        points: 5,
        enonce: "Dans une expérience, une mesure passe de 12 à 18 unités lorsque l’éclairement augmente. Calcule la variation absolue et la variation relative en pourcentage.",
        correction: "La variation absolue est 18 − 12 = 6 unités. La variation relative est 6 ÷ 12 × 100 = 50 %. La mesure a donc augmenté de 6 unités, soit de 50 % par rapport à sa valeur initiale. Pour attribuer cette augmentation à la lumière, il faut que les autres conditions pertinentes soient comparables."
      },
      {
        niveau: "Raisonnement",
        points: 6,
        enonce: "Une plante pousse dans une solution contenant de l’eau et des ions minéraux, à la lumière et en présence de dioxyde de carbone. Explique l’origine du carbone de sa matière organique et le rôle de la lumière.",
        correction: "Le carbone de la matière organique produite par photosynthèse provient principalement du dioxyde de carbone absorbé dans l’air ou dissous dans l’eau selon le milieu. La lumière fournit l’énergie nécessaire à la photosynthèse. L’eau et les ions minéraux sont également nécessaires au fonctionnement et à la croissance de la plante, mais les ions minéraux ne constituent pas la source principale du carbone organique."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Un morceau de pain est mâché puis avalé. Explique le rôle de la salive et ce que deviennent les produits de la digestion.",
        correction: "Le pain contient notamment de l’amidon. Dans la bouche, l’amylase salivaire commence à transformer l’amidon en molécules glucidiques plus petites. La digestion se poursuit dans le tube digestif grâce à d’autres enzymes. Les nutriments obtenus, dont le glucose issu de la digestion des glucides, sont absorbés principalement dans l’intestin grêle puis distribués aux cellules."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Explique comment le carbone d’une feuille morte peut retourner dans l’atmosphère.",
        correction: "Des animaux et des micro-organismes décomposeurs fragmentent et transforment la matière de la feuille. Lors de leur respiration, ils utilisent une partie de cette matière organique et rejettent du dioxyde de carbone dans le milieu, puis dans l’atmosphère. Une autre partie du carbone peut rester temporairement dans le sol ou être transférée à d’autres organismes."
      },
      {
        niveau: "Raisonnement",
        points: 6,
        enonce: "Dans une série non renversée, les couches A, B et C sont superposées dans cet ordre, A étant en bas. Une faille coupe les trois couches. Une couche D non déformée recouvre ensuite l’ensemble et n’est pas coupée par la faille. Classe ces événements du plus ancien au plus récent.",
        correction: "Par superposition, le dépôt de A précède celui de B, puis celui de C. La faille est postérieure aux trois couches qu’elle recoupe. Puis une surface s’est mise en place avant le dépôt de D ; D recouvre l’ensemble et n’est pas coupée par la faille. L’ordre retenu est donc : dépôt de A, dépôt de B, dépôt de C, formation de la faille, puis dépôt de D. Une érosion peut avoir précédé D si le contact en montre la trace, mais elle ne peut pas être affirmée à partir de la seule description."
      },
      {
        niveau: "Raisonnement",
        points: 5,
        enonce: "Deux couches éloignées contiennent le même fossile stratigraphique. L’une est un calcaire marin peu profond, l’autre une argile déposée plus au large. Pourquoi peut-on rapprocher leur âge sans conclure qu’elles se sont formées dans le même milieu ?",
        correction: "Le fossile stratigraphique permet une corrélation d’âge relatif si l’espèce a vécu pendant une durée courte à l’échelle géologique et si son identification est fiable. Les faciès diffèrent : le calcaire et l’argile peuvent témoigner de conditions de dépôt différentes. Des dépôts approximativement contemporains peuvent donc se former dans des milieux distincts."
      },
      {
        niveau: "Calcul",
        points: 5,
        enonce: "Deux volcans d’un alignement sont séparés de 120 km et leur différence d’âge est de 3 millions d’années. Dans l’hypothèse d’une source fixe et d’un déplacement régulier dans la direction de l’alignement, calcule la vitesse moyenne de la plaque en cm/an.",
        correction: "La vitesse moyenne vaut 120 ÷ 3 = 40 km par million d’années. Comme 40 km = 4 000 000 cm, on obtient 4 000 000 ÷ 1 000 000 = 4 cm/an. Cette estimation repose sur les hypothèses données et sur la fiabilité des distances et des âges."
      },
      {
        niveau: "Bilan",
        points: 6,
        enonce: "Dans une région, on observe des basaltes en coussins, des gabbros et des péridotites associés à des roches plissées et métamorphiques. Propose une histoire possible et indique deux vérifications nécessaires.",
        correction: "Les basaltes en coussins suggèrent une émission de lave sous l’eau. L’association avec des gabbros et des péridotites peut correspondre à une ophiolite, vestige possible d’une ancienne lithosphère océanique. Les plis et les roches métamorphiques suggèrent ensuite une déformation et des transformations en profondeur, compatibles avec une histoire de convergence. Pour vérifier cette proposition, il faut notamment étudier l’organisation et les contacts entre les roches, ainsi que déterminer leurs âges et les conditions du métamorphisme. D’autres histoires peuvent être compatibles tant que ces données manquent."
      },
      {
        niveau: "Bilan",
        points: 6,
        enonce: "Relie en quelques étapes la formation d’une roche magmatique, son exposition en surface et la formation possible d’une roche sédimentaire.",
        correction: "Un magma se refroidit et se solidifie pour former une roche magmatique, en surface ou en profondeur. Une roche formée en profondeur peut ensuite être exhumée et exposée. Elle subit alors altération et érosion ; les matériaux produits sont transportés puis déposés. Leur accumulation, suivie notamment de compaction et de cimentation, peut former une roche sédimentaire. Ce parcours est possible, mais ne constitue pas une succession obligatoire."
      }
    ]
  }
]);
