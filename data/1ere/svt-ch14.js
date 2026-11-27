enregistrerChapitres("1ere", "svt", [
  {
    id: 14,
    titre: "Chapitre 14 : De la dérive des continents à l’expansion des océans",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "L’hypothèse de Wegener",
        blocs: [
          {
            type: "introduction",
            titre: "Des continents autrefois réunis ?",
            texte: "Au début du XXᵉ siècle, Alfred Wegener propose que les continents actuels aient été autrefois réunis, puis se soient déplacés les uns par rapport aux autres. Cette hypothèse, appelée dérive des continents, précède la théorie moderne de la tectonique des plaques."
          },
          {
            type: "definition",
            titre: "Pangée",
            texte: "La Pangée est un ancien supercontinent qui réunissait une grande partie des terres émergées il y a plus de 200 millions d’années. Sa fragmentation a contribué à la disposition actuelle des continents et des océans."
          },
          {
            type: "tableau",
            titre: "Quelques arguments utilisés par Wegener",
            entetes: ["Argument", "Observation", "Interprétation proposée"],
            lignes: [
              ["Forme des continents", "Certaines marges continentales, notamment celles de l’Afrique et de l’Amérique du Sud, peuvent être rapprochées.", "Les continents auraient pu être réunis."],
              ["Fossiles", "Des fossiles de certains organismes anciens sont retrouvés sur des continents aujourd’hui séparés.", "Ces régions auraient pu être reliées dans le passé."],
              ["Roches et structures", "Des ensembles de roches et de structures de même âge présentent des correspondances de part et d’autre de certains océans.", "Ils auraient pu appartenir à un même ensemble avant la séparation."],
              ["Indices climatiques", "Des traces d’anciens climats, comme certaines traces glaciaires, sont observées dans des régions aujourd’hui éloignées.", "La disposition passée des continents pouvait différer de la disposition actuelle."]
            ]
          },
          {
            type: "remarque",
            titre: "Une hypothèse discutée",
            texte: "Les arguments de Wegener étaient importants, mais le mécanisme qu’il proposait pour déplacer les continents n’était pas satisfaisant. La théorie de la tectonique des plaques s’est construite plus tard, notamment grâce à l’étude des fonds océaniques et du magnétisme des roches."
          },
          {
            type: "remarque",
            titre: "La formulation moderne",
            texte: "Aujourd’hui, on décrit le déplacement de plaques lithosphériques qui peuvent porter à la fois des continents et des fonds océaniques. Les continents ne traversent pas simplement une croûte océanique immobile."
          }
        ]
      },

      {
        id: 2,
        titre: "Du rift continental à l’océan",
        blocs: [
          {
            type: "definition",
            titre: "Rift continental",
            texte: "Un rift continental est une région allongée où la lithosphère continentale s’étire et s’amincit. Des failles normales y délimitent souvent des compartiments abaissés. L’étirement peut s’accompagner d’une remontée de matériaux chauds et d’un volcanisme."
          },
          {
            type: "definition",
            titre: "Ouverture océanique",
            texte: "Si l’extension se poursuit et que les conditions le permettent, un continent peut se séparer en deux parties. De la lithosphère océanique se forme alors entre elles : un nouvel océan peut s’ouvrir. Tous les rifts continentaux ne deviennent cependant pas des océans."
          },
          {
            type: "schema",
            titre: "Une ouverture océanique possible",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 390" role="img" aria-labelledby="svt14s1t svt14s1d">
  <title id="svt14s1t">Du rift continental à un océan</title>
  <desc id="svt14s1d">Trois étapes simplifiées montrent une lithosphère continentale soumise à l'extension, un fossé d'effondrement, puis un océan avec une dorsale centrale.</desc>
  <defs><marker id="svt14a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#a33"/></marker></defs>
  <rect width="720" height="390" fill="#fff"/>
  <text x="25" y="30" font-size="17">1. Extension continentale</text>
  <rect x="80" y="45" width="560" height="55" fill="#d5b995" stroke="#765"/>
  <path d="M260 70 L180 70 M460 70 L540 70" stroke="#a33" stroke-width="3" marker-end="url(#svt14a1)"/>
  <text x="25" y="145" font-size="17">2. Rift et amincissement</text>
  <path d="M80 160 L260 160 L300 185 L420 185 L460 160 L640 160 L640 220 L80 220 Z" fill="#d5b995" stroke="#765" stroke-width="2"/>
  <path d="M260 160 L315 220 M460 160 L405 220" stroke="#444" stroke-width="3"/>
  <text x="360" y="210" text-anchor="middle" font-size="14">Fossé</text>
  <text x="25" y="265" font-size="17">3. Ouverture océanique possible</text>
  <rect x="80" y="285" width="180" height="55" fill="#d5b995" stroke="#765"/>
  <rect x="460" y="285" width="180" height="55" fill="#d5b995" stroke="#765"/>
  <rect x="260" y="285" width="200" height="25" fill="#b8d8e5" stroke="#527b95"/>
  <path d="M260 310 L340 310 L360 295 L380 310 L460 310 L460 340 L260 340 Z" fill="#8b9fa5" stroke="#555"/>
  <text x="360" y="365" text-anchor="middle" font-size="14">Dorsale et lithosphère océanique</text>
</svg>`,
            legende: "Schéma très simplifié et non à l’échelle : l’ouverture d’un océan n’est qu’une évolution possible d’un rift."
          },
          {
            type: "exemple",
            titre: "Indices d’extension",
            texte: "Un ensemble de failles normales et de fossés abaissés peut témoigner d’un étirement de la croûte. Pour reconstituer l’évolution d’un rift, les géologues étudient aussi les roches volcaniques, les sédiments et l’âge des structures."
          }
        ]
      },

      {
        id: 3,
        titre: "La dorsale et l’accrétion océanique",
        blocs: [
          {
            type: "definition",
            titre: "Dorsale océanique",
            texte: "Une dorsale océanique est un relief sous-marin allongé situé à une limite divergente. De part et d’autre de son axe, les plaques s’écartent et de nouvelle lithosphère océanique se forme."
          },
          {
            type: "definition",
            titre: "Formation du magma",
            texte: "Sous une dorsale, la remontée de manteau chaud s’accompagne d’une diminution de pression. Cette décompression peut provoquer la fusion partielle d’une petite partie des roches du manteau et produire un magma."
          },
          {
            type: "definition",
            titre: "Accrétion océanique",
            texte: "L’accrétion océanique est la formation de nouvelle lithosphère océanique au voisinage d’une dorsale. Une partie du magma refroidit en profondeur et forme notamment du gabbro ; une autre atteint le fond océanique et forme notamment du basalte."
          },
          {
            type: "definition",
            titre: "Expansion des fonds océaniques",
            texte: "L’expansion des fonds océaniques correspond à l’éloignement progressif de la lithosphère océanique de part et d’autre de la dorsale, à mesure que de la nouvelle lithosphère se forme près de son axe."
          },
          {
            type: "schema",
            titre: "Accrétion à une dorsale",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 340" role="img" aria-labelledby="svt14s2t svt14s2d">
  <title id="svt14s2t">Formation de lithosphère à une dorsale océanique</title>
  <desc id="svt14s2d">Deux plaques s'écartent de part et d'autre d'une dorsale. Du matériau mantellique remonte ; une fusion partielle produit du magma qui forme de nouvelles roches océaniques.</desc>
  <defs><marker id="svt14a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#a33"/></marker></defs>
  <rect width="720" height="340" fill="#fff"/>
  <rect x="0" y="35" width="720" height="70" fill="#dceff8"/>
  <text x="30" y="70" font-size="16">Océan</text>
  <path d="M30 155 L280 155 L330 125 L360 105 L390 125 L440 155 L690 155 L690 215 L30 215 Z" fill="#8b9fa5" stroke="#555" stroke-width="2"/>
  <rect x="30" y="215" width="660" height="95" fill="#e7b996" stroke="#765"/>
  <path d="M360 285 L360 150" stroke="#a33" stroke-width="5" marker-end="url(#svt14a2)"/>
  <path d="M310 180 L170 180 M410 180 L550 180" stroke="#a33" stroke-width="3" marker-end="url(#svt14a2)"/>
  <text x="365" y="95" text-anchor="middle" font-size="16">Axe de la dorsale</text>
  <text x="455" y="260" font-size="15">Manteau : remontée</text>
  <text x="455" y="282" font-size="15">et fusion partielle</text>
  <text x="70" y="200" font-size="15">Lithosphère océanique</text>
</svg>`,
            legende: "Schéma simplifié : le manteau est majoritairement solide ; seule une partie fond sous certaines conditions."
          },
          {
            type: "remarque",
            titre: "Une lithosphère qui évolue",
            texte: "En s’éloignant de la dorsale, la lithosphère océanique refroidit et s’épaissit. Le fond océanique devient généralement plus profond. Les roches de la croûte océanique sont en moyenne de plus en plus anciennes lorsqu’on s’éloigne de l’axe."
          }
        ]
      },

      {
        id: 4,
        titre: "Les preuves de l’expansion océanique",
        blocs: [
          {
            type: "definition",
            titre: "Magnétisme enregistré par les roches",
            texte: "Lorsque certaines roches volcaniques refroidissent, des minéraux magnétiques enregistrent une direction du champ magnétique terrestre. Le champ terrestre s’est inversé plusieurs fois au cours du temps : les périodes de polarité normale et inversée se succèdent."
          },
          {
            type: "definition",
            titre: "Bandes d’anomalies magnétiques",
            texte: "Sur les fonds océaniques, les mesures révèlent des bandes d’anomalies magnétiques approximativement parallèles à l’axe des dorsales. Leur disposition est souvent comparable de part et d’autre de l’axe. Elle s’explique par la formation successive de roches lors des différentes polarités du champ."
          },
          {
            type: "schema",
            titre: "Bandes magnétiques de part et d’autre d’une dorsale",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 290" role="img" aria-labelledby="svt14s3t svt14s3d">
  <title id="svt14s3t">Anomalies magnétiques symétriques</title>
  <desc id="svt14s3d">Des bandes de polarité alternée sont disposées approximativement de manière symétrique de part et d'autre de l'axe d'une dorsale. Les roches les plus jeunes sont près de l'axe.</desc>
  <defs><marker id="svt14a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#a33"/></marker></defs>
  <rect width="720" height="290" fill="#fff"/>
  <text x="360" y="30" text-anchor="middle" font-size="18">Axe de la dorsale</text>
  <rect x="60" y="75" width="75" height="90" fill="#555"/>
  <rect x="135" y="75" width="75" height="90" fill="#ddd" stroke="#777"/>
  <rect x="210" y="75" width="75" height="90" fill="#555"/>
  <rect x="285" y="75" width="75" height="90" fill="#ddd" stroke="#777"/>
  <rect x="360" y="75" width="75" height="90" fill="#ddd" stroke="#777"/>
  <rect x="435" y="75" width="75" height="90" fill="#555"/>
  <rect x="510" y="75" width="75" height="90" fill="#ddd" stroke="#777"/>
  <rect x="585" y="75" width="75" height="90" fill="#555"/>
  <path d="M360 55 L360 180" stroke="#a33" stroke-width="3"/>
  <path d="M300 205 L100 205 M420 205 L620 205" stroke="#a33" stroke-width="2" marker-end="url(#svt14a3)"/>
  <text x="360" y="240" text-anchor="middle" font-size="15">Éloignement de la lithosphère</text>
  <text x="65" y="275" font-size="13">Bandes claires et sombres : polarités enregistrées différentes</text>
</svg>`,
            legende: "La symétrie est approximative dans la nature. Les bandes les plus proches de l’axe correspondent aux roches les plus jeunes."
          },
          {
            type: "tableau",
            titre: "Observations complémentaires",
            entetes: ["Observation", "Lien avec l’expansion"],
            lignes: [
              ["Âge des roches océaniques", "Les roches sont généralement plus jeunes près de la dorsale et plus anciennes quand on s’en éloigne."],
              ["Épaisseur des sédiments", "Les sédiments sont souvent plus minces près de la dorsale et plus épais loin de celle-ci, car le fond ancien a eu plus de temps pour en recevoir."],
              ["Anomalies magnétiques", "Les bandes alternées et approximativement symétriques enregistrent la formation successive des roches de part et d’autre de l’axe."],
              ["Mesures géodésiques", "Les mesures modernes, notamment par satellite, permettent de mesurer les mouvements actuels des plaques."]
            ]
          },
          {
            type: "remarque",
            titre: "Plusieurs indices concordants",
            texte: "Aucun indice ne doit être interprété isolément. L’âge des roches, le magnétisme, les sédiments et les mesures actuelles constituent ensemble des arguments en faveur de l’expansion océanique."
          }
        ]
      },

      {
        id: 5,
        titre: "Calculer une vitesse moyenne d’expansion",
        blocs: [
          {
            type: "definition",
            titre: "Vitesse moyenne",
            texte: "La vitesse moyenne d’éloignement d’une roche par rapport à la dorsale est égale à la distance parcourue divisée par la durée. Elle s’exprime par exemple en kilomètres par million d’années ou en centimètres par an."
          },
          {
            type: "regle",
            titre: "Conversion utile",
            texte: "1 km par million d’années correspond à 0,1 cm par an. En effet, 1 km vaut 100 000 cm et un million d’années vaut 1 000 000 d’années."
          },
          {
            type: "methode",
            titre: "Méthode",
            texte: "1. Relever la distance entre la roche et l’axe de la dorsale. 2. Relever l’âge de la roche. 3. Diviser la distance par l’âge pour obtenir une vitesse moyenne d’éloignement d’un côté. 4. Convertir les unités si nécessaire. 5. Préciser que le résultat est une moyenne."
          },
          {
            type: "exemple",
            titre: "Exemple",
            texte: "Une roche océanique âgée de 10 millions d’années se trouve à 200 km de l’axe. Sa vitesse moyenne d’éloignement est de 200 ÷ 10 = 20 km par million d’années, soit 2 cm par an."
          },
          {
            type: "remarque",
            titre: "Un côté ou les deux côtés ?",
            texte: "La distance entre l’axe et une roche donne une estimation de la vitesse d’éloignement de ce côté. La vitesse d’écartement entre les deux plaques correspond au mouvement relatif total. Si les vitesses sont symétriques et égales de part et d’autre, elle vaut environ deux fois la vitesse calculée pour un seul côté."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "Wegener a proposé la dérive des continents à partir de plusieurs indices. La théorie moderne décrit le déplacement des plaques lithosphériques. Un rift continental peut évoluer vers une ouverture océanique. Aux dorsales, de la nouvelle lithosphère se forme par accrétion et s’éloigne de l’axe. L’âge des roches, les sédiments, les anomalies magnétiques et les mesures actuelles appuient le modèle de l’expansion océanique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Qui était Wegener et quelle grande hypothèse a-t-il proposée ?",
        correction: "Alfred Wegener était un scientifique qui a proposé, au début du XXᵉ siècle, l’hypothèse de la dérive des continents : les continents auraient été autrefois réunis puis se seraient déplacés les uns par rapport aux autres."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Citer trois types d’arguments utilisés pour soutenir l’idée d’une ancienne réunion des continents.",
        correction: "On peut citer la forme compatible de certaines marges continentales, la présence de fossiles semblables sur des continents séparés et les correspondances entre des roches ou structures de même âge. Des indices d’anciens climats constituent un autre type d’argument."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Pourquoi dit-on que la théorie moderne ne se limite pas à l’idée que les continents traversent des océans immobiles ?",
        correction: "La théorie moderne décrit le déplacement de plaques lithosphériques. Une même plaque peut porter de la lithosphère continentale et océanique. Les fonds océaniques participent donc eux aussi aux mouvements : ils ne sont pas simplement immobiles pendant que les continents les traversent."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Définir un rift continental. Tous les rifts deviennent-ils nécessairement des océans ?",
        correction: "Un rift continental est une région où la lithosphère continentale s’étire et s’amincit, souvent avec des failles normales et des fossés abaissés. Non : certains rifts peuvent ne pas évoluer jusqu’à l’ouverture d’un océan."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Expliquer comment du magma peut se former sous une dorsale.",
        correction: "Sous une dorsale, du manteau chaud remonte. La pression diminue au cours de cette remontée, ce qui peut provoquer la fusion partielle d’une partie des roches du manteau. Le magma ainsi formé contribue à la fabrication de la croûte océanique."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Des roches océaniques sont âgées de 5 Ma près d’une dorsale et de 40 Ma plus loin. Comment cette observation soutient-elle le modèle de l’expansion océanique ?",
        correction: "Les roches les plus proches de la dorsale sont les plus jeunes, tandis que les roches plus éloignées sont plus anciennes. Cela correspond au modèle selon lequel de la nouvelle lithosphère se forme près de l’axe puis s’en éloigne progressivement."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Pourquoi observe-t-on des bandes d’anomalies magnétiques alternées et approximativement symétriques de part et d’autre d’une dorsale ?",
        correction: "Le champ magnétique terrestre a connu des inversions. Les roches formées successivement près de la dorsale enregistrent la polarité du champ au moment de leur refroidissement. Comme la lithosphère s’éloigne de part et d’autre, les enregistrements successifs forment des bandes alternées dont la disposition est souvent approximativement symétrique."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Une roche âgée de 20 millions d’années est située à 400 km de l’axe d’une dorsale. Calculer sa vitesse moyenne d’éloignement en km par million d’années puis en cm/an.",
        correction: "Vitesse moyenne : 400 ÷ 20 = 20 km par million d’années. Comme 1 km par million d’années vaut 0,1 cm/an, on obtient 20 × 0,1 = 2 cm/an. Il s’agit d’une vitesse moyenne pour un côté de la dorsale."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "La vitesse moyenne d’éloignement est de 2 cm/an de chaque côté d’une dorsale. En supposant les mouvements symétriques, calculer la vitesse moyenne d’écartement entre les deux plaques.",
        correction: "Les deux plaques s’éloignent en sens opposés à 2 cm/an chacune. Leur vitesse relative d’écartement est donc 2 + 2 = 4 cm/an. Ce calcul dépend de l’hypothèse de symétrie donnée dans l’énoncé."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Pourquoi les sédiments sont-ils souvent plus épais loin d’une dorsale que près de son axe ?",
        correction: "La lithosphère située loin de l’axe est généralement plus ancienne. Elle a donc eu davantage de temps pour recevoir et accumuler des sédiments. L’épaisseur dépend toutefois aussi de la quantité de sédiments apportés et des conditions locales."
      }
    ]
  }
]);
