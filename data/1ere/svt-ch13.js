enregistrerChapitres("1ere", "svt", [
  {
    id: 13,
    titre: "Chapitre 13 : La structure du globe terrestre",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Comment connaître l’intérieur de la Terre ?",
        blocs: [
          {
            type: "introduction",
            titre: "Un intérieur difficile à observer",
            texte: "La Terre a un rayon d’environ 6 370 km. Les forages humains n’atteignent qu’une très faible profondeur par rapport à cette dimension. Pour étudier l’intérieur du globe, les scientifiques utilisent donc des observations indirectes, notamment les ondes produites par les séismes."
          },
          {
            type: "definition",
            titre: "Onde sismique",
            texte: "Une onde sismique est une vibration qui se propage à travers la Terre ou à sa surface après une rupture, comme celle qui se produit lors d’un séisme. Sa vitesse et sa trajectoire dépendent des propriétés des matériaux traversés."
          },
          {
            type: "definition",
            titre: "Ondes P et ondes S",
            texte: "Les ondes P sont des ondes de compression qui traversent les solides et les liquides. Les ondes S sont des ondes de cisaillement qui traversent les solides, mais pas les liquides. Les ondes P arrivent généralement avant les ondes S à une station d’enregistrement."
          },
          {
            type: "definition",
            titre: "Discontinuité",
            texte: "Une discontinuité sismique est une limite en profondeur où les propriétés de propagation des ondes changent nettement. Elle indique un changement des propriétés des matériaux, de leur composition ou de leur état."
          },
          {
            type: "exemple",
            titre: "Le noyau externe",
            texte: "Les ondes S ne traversent pas le noyau externe. L’étude de leur absence dans certaines zones, associée au comportement des ondes P, constitue un indice important de l’état liquide du noyau externe."
          },
          {
            type: "remarque",
            titre: "D’autres indices",
            texte: "Les scientifiques étudient aussi les roches accessibles à la surface, les matériaux remontés par certains volcans, les mesures de gravité et le champ magnétique terrestre. Ces indices complètent l’étude des ondes sismiques."
          }
        ]
      },

      {
        id: 2,
        titre: "Les grandes enveloppes de la Terre",
        blocs: [
          {
            type: "tableau",
            titre: "Structure simplifiée du globe",
            entetes: ["Enveloppe", "Profondeur ou épaisseur approximative", "Caractères principaux"],
            lignes: [
              ["Croûte", "De quelques kilomètres sous certains océans à plusieurs dizaines de kilomètres sous les continents.", "Enveloppe superficielle solide, de composition variable."],
              ["Manteau", "De la base de la croûte jusqu’à environ 2 900 km de profondeur.", "Roches majoritairement solides, capables de se déformer lentement à long terme."],
              ["Noyau externe", "D’environ 2 900 à 5 150 km de profondeur.", "Principalement constitué de fer et de nickel ; il est liquide."],
              ["Noyau interne", "D’environ 5 150 km de profondeur jusqu’au centre.", "Principalement constitué de fer et de nickel ; il est solide."]
            ]
          },
          {
            type: "definition",
            titre: "Croûte continentale et croûte océanique",
            texte: "La croûte continentale est généralement plus épaisse et moins dense que la croûte océanique. La croûte océanique est constituée notamment de basaltes et de gabbros. La croûte continentale contient des roches variées, dont des roches de composition granitique."
          },
          {
            type: "definition",
            titre: "Manteau",
            texte: "Le manteau est constitué principalement de roches riches en minéraux comme les olivines et les pyroxènes. Bien qu’il soit majoritairement solide, il peut se déformer très lentement à l’échelle des temps géologiques."
          },
          {
            type: "definition",
            titre: "Noyau",
            texte: "Le noyau est riche en fer et en nickel. Son enveloppe externe est liquide, tandis que sa partie interne est solide. Les mouvements du métal liquide dans le noyau externe participent à la production du champ magnétique terrestre."
          },
          {
            type: "schema",
            titre: "Coupe simplifiée de la Terre",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 390" role="img" aria-labelledby="svt13s1t svt13s1d">
  <title id="svt13s1t">Enveloppes internes de la Terre</title>
  <desc id="svt13s1d">Une coupe circulaire montre de l'extérieur vers le centre la croûte, le manteau, le noyau externe liquide et le noyau interne solide.</desc>
  <defs><marker id="svt13a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker></defs>
  <rect width="700" height="390" fill="#fff"/>
  <circle cx="220" cy="195" r="160" fill="#d8a66d" stroke="#555" stroke-width="8"/>
  <circle cx="220" cy="195" r="86" fill="#e97f4f" stroke="#765" stroke-width="2"/>
  <circle cx="220" cy="195" r="43" fill="#f4cf69" stroke="#765" stroke-width="2"/>
  <text x="440" y="55" font-size="16">Croûte : enveloppe mince</text>
  <path d="M435 50 L345 85" stroke="#444" stroke-width="2" marker-end="url(#svt13a1)"/>
  <text x="440" y="120" font-size="16">Manteau : solide</text>
  <path d="M435 115 L345 145" stroke="#444" stroke-width="2" marker-end="url(#svt13a1)"/>
  <text x="440" y="185" font-size="16">Noyau externe : liquide</text>
  <path d="M435 180 L300 185" stroke="#444" stroke-width="2" marker-end="url(#svt13a1)"/>
  <text x="440" y="250" font-size="16">Noyau interne : solide</text>
  <path d="M435 245 L255 210" stroke="#444" stroke-width="2" marker-end="url(#svt13a1)"/>
  <text x="440" y="325" font-size="14">Schéma non à l'échelle pour la croûte</text>
</svg>`,
            legende: "La croûte est représentée par le bord sombre, fortement épaissi pour être visible."
          },
          {
            type: "remarque",
            titre: "Les principales limites",
            texte: "La limite entre la croûte et le manteau est appelée discontinuité de Mohorovičić, ou Moho. La limite entre le manteau et le noyau externe se situe vers 2 900 km de profondeur ; celle entre les noyaux externe et interne vers 5 150 km."
          }
        ]
      },

      {
        id: 3,
        titre: "Lithosphère, asthénosphère et plaques",
        blocs: [
          {
            type: "definition",
            titre: "Lithosphère",
            texte: "La lithosphère est l’enveloppe externe rigide de la Terre. Elle comprend la croûte et la partie supérieure rigide du manteau. Elle est découpée en plaques lithosphériques."
          },
          {
            type: "definition",
            titre: "Asthénosphère",
            texte: "L’asthénosphère est une partie du manteau située sous la lithosphère, moins rigide à long terme. Elle est constituée de roches majoritairement solides qui peuvent se déformer lentement. Ce n’est pas un océan de magma liquide."
          },
          {
            type: "definition",
            titre: "Plaque lithosphérique",
            texte: "Une plaque lithosphérique est un ensemble rigide à l’échelle des temps géologiques, qui se déplace par rapport aux plaques voisines. Une plaque peut porter de la lithosphère océanique, de la lithosphère continentale, ou les deux."
          },
          {
            type: "schema",
            titre: "Lithosphère et asthénosphère",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 310" role="img" aria-labelledby="svt13s2t svt13s2d">
  <title id="svt13s2t">Lithosphère reposant sur l'asthénosphère</title>
  <desc id="svt13s2d">La lithosphère comprend la croûte et une partie rigide du manteau. Sous elle se trouve l'asthénosphère, moins rigide à long terme et majoritairement solide.</desc>
  <rect width="700" height="310" fill="#fff"/>
  <rect x="35" y="35" width="350" height="45" fill="#d5b995" stroke="#765"/>
  <rect x="35" y="80" width="350" height="75" fill="#e8dba9" stroke="#765"/>
  <rect x="35" y="155" width="350" height="105" fill="#e7b996" stroke="#765"/>
  <text x="210" y="63" text-anchor="middle" font-size="17">Croûte</text>
  <text x="210" y="113" text-anchor="middle" font-size="16">Manteau supérieur</text>
  <text x="210" y="135" text-anchor="middle" font-size="16">rigide</text>
  <text x="210" y="205" text-anchor="middle" font-size="17">Asthénosphère</text>
  <path d="M405 35 L420 35 L420 155 L405 155" fill="none" stroke="#444" stroke-width="3"/>
  <text x="435" y="90" font-size="16">Lithosphère</text>
  <text x="435" y="113" font-size="14">croûte + manteau rigide</text>
  <text x="435" y="205" font-size="15">Roches majoritairement</text>
  <text x="435" y="226" font-size="15">solides, moins rigides</text>
</svg>`,
            legende: "Les limites et les épaisseurs varient selon les régions. Le schéma n’est pas à l’échelle."
          },
          {
            type: "remarque",
            titre: "Croûte et lithosphère ne sont pas synonymes",
            texte: "La croûte est définie notamment par sa composition et ses propriétés. La lithosphère est définie par son comportement mécanique rigide : elle comprend la croûte et une partie du manteau."
          }
        ]
      },

      {
        id: 4,
        titre: "Les grands ensembles continentaux et océaniques",
        blocs: [
          {
            type: "definition",
            titre: "Chaîne de montagnes",
            texte: "Une chaîne de montagnes est un ensemble de reliefs et de structures géologiques souvent liés à des déformations de la lithosphère. Certaines chaînes se forment dans des zones de convergence entre plaques ; leur histoire peut comprendre des plis, des failles, du métamorphisme et du magmatisme."
          },
          {
            type: "definition",
            titre: "Bouclier",
            texte: "Un bouclier est une région continentale où affleurent de très anciennes roches du socle, généralement magmatiques ou métamorphiques. Ces régions constituent des parties relativement stables des continents à l’échelle géologique."
          },
          {
            type: "definition",
            titre: "Plateforme continentale au sens géologique",
            texte: "Une plateforme est une région continentale où un socle ancien est recouvert par une couverture de roches sédimentaires relativement peu déformées. Ce sens ne doit pas être confondu avec celui de plateau continental, qui désigne la partie immergée de la marge d’un continent."
          },
          {
            type: "definition",
            titre: "Grands reliefs océaniques",
            texte: "Le fond des océans présente notamment des dorsales, reliefs allongés associés à la formation de lithosphère océanique, et des fosses profondes associées à certaines zones de subduction. Entre ces structures s’étendent de vastes plaines abyssales."
          },
          {
            type: "tableau",
            titre: "Comparer quelques ensembles",
            entetes: ["Ensemble", "Caractère général"],
            lignes: [
              ["Bouclier", "Socle continental ancien affleurant."],
              ["Plateforme géologique", "Socle ancien recouvert de sédiments relativement peu déformés."],
              ["Chaîne de montagnes", "Région de reliefs et de structures souvent déformées."],
              ["Dorsale océanique", "Relief sous-marin où se forme de la nouvelle lithosphère océanique."],
              ["Fosse océanique", "Dépression profonde souvent liée à la plongée d’une plaque en subduction."]
            ]
          }
        ]
      },

      {
        id: 5,
        titre: "Les limites des plaques",
        blocs: [
          {
            type: "definition",
            titre: "Divergence",
            texte: "À une limite divergente, deux plaques s’écartent. Aux dorsales océaniques, cette divergence est associée à la remontée de matériaux chauds et à la formation de nouvelle lithosphère océanique."
          },
          {
            type: "definition",
            titre: "Convergence",
            texte: "À une limite convergente, deux plaques se rapprochent. Une lithosphère océanique peut plonger sous une autre plaque : c’est la subduction. La convergence de deux continents peut aussi conduire à une collision et à la formation d’une chaîne de montagnes."
          },
          {
            type: "definition",
            titre: "Coulissage",
            texte: "À une limite coulissante, deux plaques glissent principalement l’une par rapport à l’autre. Des séismes peuvent se produire sur les failles associées. Cette limite ne correspond pas nécessairement à une création ou à une disparition importante de lithosphère."
          },
          {
            type: "schema",
            titre: "Trois mouvements relatifs des plaques",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 280" role="img" aria-labelledby="svt13s3t svt13s3d">
  <title id="svt13s3t">Divergence, convergence et coulissage</title>
  <desc id="svt13s3d">La divergence correspond à un écartement, la convergence à un rapprochement et le coulissage à un déplacement latéral relatif.</desc>
  <defs><marker id="svt13a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#a33"/></marker></defs>
  <rect width="720" height="280" fill="#fff"/>
  <text x="120" y="35" text-anchor="middle" font-size="17">Divergence</text>
  <rect x="25" y="70" width="85" height="90" fill="#dcefd4" stroke="#39733a"/>
  <rect x="130" y="70" width="85" height="90" fill="#dcefd4" stroke="#39733a"/>
  <path d="M100 115 L45 115 M140 115 L195 115" stroke="#a33" stroke-width="3" marker-end="url(#svt13a3)"/>
  <text x="360" y="35" text-anchor="middle" font-size="17">Convergence</text>
  <rect x="265" y="70" width="85" height="90" fill="#f8ebd5" stroke="#98783a"/>
  <rect x="370" y="70" width="85" height="90" fill="#f8ebd5" stroke="#98783a"/>
  <path d="M280 115 L340 115 M440 115 L380 115" stroke="#a33" stroke-width="3" marker-end="url(#svt13a3)"/>
  <text x="600" y="35" text-anchor="middle" font-size="17">Coulissage</text>
  <rect x="505" y="70" width="85" height="90" fill="#e2eff8" stroke="#527b95"/>
  <rect x="610" y="70" width="85" height="90" fill="#e2eff8" stroke="#527b95"/>
  <path d="M548 145 L548 85 M652 85 L652 145" stroke="#a33" stroke-width="3" marker-end="url(#svt13a3)"/>
  <text x="360" y="225" text-anchor="middle" font-size="14">Vues simplifiées des mouvements relatifs</text>
</svg>`,
            legende: "Les flèches montrent les mouvements des plaques l’une par rapport à l’autre."
          },
          {
            type: "remarque",
            titre: "Séismes et limites",
            texte: "Les séismes et les volcans ne sont pas répartis au hasard à la surface de la Terre. Leur concentration dans certaines zones aide à repérer les limites des plaques. Il existe aussi des séismes et des volcans à l’intérieur des plaques."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "Les ondes sismiques renseignent sur la structure interne de la Terre. Le globe comprend une croûte, un manteau majoritairement solide, un noyau externe liquide et un noyau interne solide. La lithosphère rigide est découpée en plaques qui se déplacent au-dessus d’une asthénosphère moins rigide. Leurs limites peuvent être divergentes, convergentes ou coulissantes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Citer les grandes enveloppes de la Terre de la surface vers le centre. Préciser l’état du noyau externe et du noyau interne.",
        correction: "De la surface vers le centre : croûte, manteau, noyau externe, noyau interne. Le noyau externe est liquide et le noyau interne est solide."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Pourquoi les ondes sismiques sont-elles utiles pour étudier l’intérieur de la Terre ?",
        correction: "Les ondes sismiques se propagent à travers la Terre et leur comportement dépend des matériaux traversés. Les changements de vitesse, de trajectoire ou l’absence de certaines ondes permettent d’identifier des limites et de déduire certaines propriétés des enveloppes internes."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Les ondes S ne traversent pas les liquides. Quel indice cette propriété apporte-t-elle sur l’état du noyau externe ?",
        correction: "L’absence de transmission directe des ondes S à travers le noyau externe est compatible avec un état liquide. Cette observation, associée à l’étude des ondes P et d’autres données, constitue un indice important que le noyau externe est liquide."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Distinguer croûte et lithosphère.",
        correction: "La croûte est l’enveloppe superficielle définie notamment par sa composition et ses propriétés. La lithosphère est l’enveloppe externe rigide : elle comprend la croûte et une partie du manteau supérieur. La croûte seule ne constitue donc pas toute la lithosphère."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un élève affirme : « L’asthénosphère est entièrement liquide, donc les plaques flottent sur un océan de lave. » Corriger.",
        correction: "L’asthénosphère est constituée de roches majoritairement solides. Elle est moins rigide que la lithosphère et peut se déformer lentement à l’échelle géologique. Elle ne constitue pas un océan de lave liquide."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Associer chaque mouvement de plaques à son nom : a) écartement ; b) rapprochement ; c) glissement latéral relatif.",
        correction: "a) L’écartement correspond à une divergence. b) Le rapprochement correspond à une convergence. c) Le glissement latéral relatif correspond à une limite coulissante."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Quelle différence fait-on entre un bouclier et une plateforme au sens géologique ?",
        correction: "Dans un bouclier, les roches anciennes du socle continental affleurent. Dans une plateforme géologique, le socle ancien est recouvert par une couverture de roches sédimentaires relativement peu déformées."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une carte montre une longue zone où se concentrent des séismes et des volcans. Que peut-on proposer ? Pourquoi faut-il rester prudent ?",
        correction: "Cette concentration peut indiquer une limite de plaques. Il faut rester prudent car des séismes et des volcans existent aussi à l’intérieur des plaques. D’autres données, comme les mouvements mesurés et les structures géologiques, permettent de préciser l’interprétation."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Distinguer dorsale océanique et fosse océanique.",
        correction: "Une dorsale est un relief sous-marin associé à la divergence et à la formation de nouvelle lithosphère océanique. Une fosse océanique est une dépression profonde souvent associée à une zone où une plaque océanique plonge en subduction."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Le noyau externe s’étend approximativement de 2 900 km à 5 150 km de profondeur. Calculer son épaisseur approximative.",
        correction: "Épaisseur approximative : 5 150 − 2 900 = 2 250 km. Cette valeur utilise les profondeurs arrondies données dans le cours."
      }
    ]
  }
]);
