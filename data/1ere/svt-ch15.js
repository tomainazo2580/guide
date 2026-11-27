enregistrerChapitres("1ere", "svt", [
  {
    id: 15,
    titre: "Chapitre 15 : La subduction et la convergence des plaques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Qu’est-ce qu’une zone de subduction ?",
        blocs: [
          {
            type: "introduction",
            titre: "Le rapprochement de deux plaques",
            texte: "À certaines limites de plaques, deux plaques lithosphériques se rapprochent. Cette convergence peut entraîner la plongée d’une lithosphère océanique sous une autre plaque. Ce phénomène, appelé subduction, s’accompagne souvent de séismes, d’une fosse océanique et d’un volcanisme."
          },
          {
            type: "definition",
            titre: "Subduction",
            texte: "La subduction est l’enfoncement d’une plaque lithosphérique, généralement océanique, sous une autre plaque. La plaque plongeante pénètre progressivement dans le manteau. La plaque située au-dessus est appelée plaque chevauchante ou plaque supérieure."
          },
          {
            type: "definition",
            titre: "Fosse océanique",
            texte: "Une fosse océanique est une dépression longue et profonde du fond océanique. Dans une zone de subduction, elle marque approximativement la région où la plaque océanique commence à se courber et à plonger sous la plaque supérieure."
          },
          {
            type: "remarque",
            titre: "Croûte et lithosphère",
            texte: "Ce n’est pas seulement la croûte océanique qui plonge : la lithosphère océanique comprend la croûte et une partie rigide du manteau supérieur. L’ensemble de cette lithosphère participe à la subduction."
          },
          {
            type: "schema",
            titre: "Organisation simplifiée d’une zone de subduction",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 380" role="img" aria-labelledby="svt15s1t svt15s1d">
  <title id="svt15s1t">Subduction d'une plaque océanique</title>
  <desc id="svt15s1d">Une plaque océanique plonge sous une plaque continentale. Une fosse se situe près de la zone de plongée et un volcan se trouve sur la plaque supérieure.</desc>
  <defs>
    <marker id="svt15a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <path d="M0 0 L8 4 L0 8 Z" fill="#a33"/>
    </marker>
  </defs>
  <rect width="720" height="380" fill="#fff"/>
  <rect x="0" y="45" width="720" height="90" fill="#dceff8"/>
  <text x="35" y="78" font-size="16">Océan</text>
  <path d="M0 135 L280 135 Q315 135 345 155 L530 300 L500 330 L315 180 Q295 165 280 165 L0 165 Z" fill="#899ba1" stroke="#555" stroke-width="2"/>
  <path d="M330 145 L430 145 L460 80 L490 145 L720 145 L720 210 L400 210 Z" fill="#d5b995" stroke="#765" stroke-width="2"/>
  <path d="M0 165 L280 165 Q300 165 315 180 L500 330 L0 330 Z" fill="#e7b996" opacity="0.65"/>
  <path d="M170 115 L270 115 M610 115 L520 115" stroke="#a33" stroke-width="3" marker-end="url(#svt15a1)"/>
  <path d="M430 250 L465 165" stroke="#a33" stroke-width="3" marker-end="url(#svt15a1)"/>
  <text x="45" y="200" font-size="15">Plaque océanique</text>
  <text x="395" y="185" font-size="15">Plaque supérieure</text>
  <text x="225" y="105" font-size="14">Fosse</text>
  <text x="475" y="65" font-size="14">Volcan</text>
  <text x="515" y="305" font-size="14">Plaque plongeante</text>
  <text x="55" y="300" font-size="14">Manteau</text>
</svg>`,
            legende: "Coupe simplifiée et non à l’échelle. Les flèches horizontales indiquent une convergence ; la flèche montante représente la remontée possible de magma."
          }
        ]
      },

      {
        id: 2,
        titre: "Pourquoi la lithosphère océanique peut-elle plonger ?",
        blocs: [
          {
            type: "definition",
            titre: "Refroidissement de la lithosphère océanique",
            texte: "Après sa formation à une dorsale, la lithosphère océanique s’éloigne, refroidit et s’épaissit. Sa densité moyenne augmente progressivement. Lorsqu’elle est suffisamment froide et dense, elle peut contribuer à son propre enfoncement dans le manteau si une subduction est engagée."
          },
          {
            type: "definition",
            titre: "Densité",
            texte: "La densité compare la masse volumique d’un matériau à celle d’une référence. Dans ce chapitre, comparer les densités permet de comprendre qu’une lithosphère océanique froide peut être globalement plus dense que le manteau environnant."
          },
          {
            type: "remarque",
            titre: "La subduction ne commence pas automatiquement",
            texte: "Une lithosphère océanique devenue dense ne plonge pas nécessairement toute seule à n’importe quel endroit. La mise en place d’une zone de subduction dépend aussi de l’histoire géologique, des forces appliquées et de la présence de zones de faiblesse."
          },
          {
            type: "definition",
            titre: "Deux configurations",
            texte: "Une plaque océanique peut plonger sous une plaque portant un continent : un arc volcanique continental peut alors se former. Elle peut aussi plonger sous une autre plaque océanique : un arc d’îles volcaniques peut se former sur la plaque supérieure."
          },
          {
            type: "tableau",
            titre: "Comparer deux zones de subduction",
            entetes: ["Plaque supérieure", "Structure volcanique possible", "Exemple"],
            lignes: [
              ["Portant un continent", "Arc volcanique continental.", "Les Andes, à l’ouest de l’Amérique du Sud."],
              ["Océanique", "Arc d’îles volcaniques.", "Certaines îles des Mariannes, dans l’océan Pacifique."]
            ]
          },
          {
            type: "remarque",
            titre: "Attention aux exemples",
            texte: "Chaque zone possède une histoire et des caractéristiques propres. La présence d’une fosse ou d’une chaîne volcanique doit être interprétée avec d’autres données, notamment les mouvements des plaques et la répartition des séismes."
          }
        ]
      },

      {
        id: 3,
        titre: "Les séismes dans les zones de subduction",
        blocs: [
          {
            type: "definition",
            titre: "Foyer et épicentre",
            texte: "Le foyer d’un séisme est la région en profondeur où débute la rupture des roches. L’épicentre est le point de la surface situé à la verticale du foyer. La profondeur du foyer peut être estimée à partir des enregistrements des ondes sismiques."
          },
          {
            type: "definition",
            titre: "Plan de Wadati-Benioff",
            texte: "Dans une zone de subduction, les foyers de nombreux séismes se répartissent selon une zone inclinée qui suit approximativement la plaque plongeante. Cette répartition est appelée zone ou plan de Wadati-Benioff."
          },
          {
            type: "schema",
            titre: "Répartition simplifiée des foyers sismiques",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 330" role="img" aria-labelledby="svt15s2t svt15s2d">
  <title id="svt15s2t">Foyers sismiques dans une zone de subduction</title>
  <desc id="svt15s2d">Les foyers, représentés par des points, deviennent globalement plus profonds depuis la fosse vers l'intérieur de la plaque supérieure et dessinent une zone inclinée.</desc>
  <defs>
    <marker id="svt15a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <path d="M0 0 L8 4 L0 8 Z" fill="#444"/>
    </marker>
  </defs>
  <rect width="720" height="330" fill="#fff"/>
  <path d="M35 75 L255 75 L280 90 L650 90" fill="none" stroke="#555" stroke-width="4"/>
  <text x="75" y="55" font-size="15">Océan</text>
  <text x="280" y="60" font-size="15">Fosse</text>
  <text x="485" y="60" font-size="15">Plaque supérieure</text>
  <path d="M275 90 L575 270" stroke="#899ba1" stroke-width="25"/>
  <circle cx="295" cy="105" r="6" fill="#a33"/>
  <circle cx="335" cy="130" r="6" fill="#a33"/>
  <circle cx="380" cy="158" r="6" fill="#a33"/>
  <circle cx="425" cy="185" r="6" fill="#a33"/>
  <circle cx="470" cy="212" r="6" fill="#a33"/>
  <circle cx="515" cy="240" r="6" fill="#a33"/>
  <text x="80" y="165" font-size="15">Points rouges :</text>
  <text x="80" y="187" font-size="15">foyers sismiques</text>
  <path d="M210 180 L320 130" stroke="#444" stroke-width="2" marker-end="url(#svt15a2)"/>
  <text x="430" y="290" font-size="15">Plaque plongeante</text>
  <text x="20" y="275" font-size="14">Profondeur croissante vers le bas</text>
</svg>`,
            legende: "Les foyers ne sont pas tous parfaitement alignés. Leur répartition inclinée est un indice de la plongée d’une plaque."
          },
          {
            type: "exemple",
            titre: "Lire une coupe sismique",
            texte: "Si les foyers sont superficiels près d’une fosse et deviennent globalement plus profonds vers l’intérieur d’un continent, leur alignement incliné suggère qu’une plaque plonge sous ce continent. Il faut comparer cette interprétation avec les autres observations de la région."
          },
          {
            type: "remarque",
            titre: "Des séismes à différentes profondeurs",
            texte: "Les zones de subduction peuvent produire des séismes superficiels, intermédiaires et profonds. De très forts séismes peuvent se produire à l’interface entre les plaques. Certains mouvements brusques du fond marin peuvent déplacer l’eau et provoquer un tsunami."
          },
          {
            type: "remarque",
            titre: "Réduire les risques",
            texte: "On ne sait pas prévoir avec précision la date d’un séisme. La surveillance, les constructions adaptées, les plans d’évacuation et l’information de la population contribuent à réduire les risques. Après un fort séisme près du littoral, il faut suivre les consignes locales d’alerte et d’évacuation."
          }
        ]
      },

      {
        id: 4,
        titre: "Le volcanisme des zones de subduction",
        blocs: [
          {
            type: "introduction",
            titre: "Pourquoi du magma se forme-t-il ?",
            texte: "La subduction s’accompagne souvent d’un alignement de volcans situé sur la plaque supérieure. Le magma qui les alimente se forme en profondeur, mais la plaque océanique plongeante ne fond pas simplement en totalité."
          },
          {
            type: "definition",
            titre: "Rôle de l’eau",
            texte: "En s’enfonçant, certaines roches de la plaque plongeante libèrent de l’eau contenue dans leurs minéraux. Cette eau remonte vers le manteau situé au-dessus et facilite sa fusion partielle. Le magma produit peut ensuite remonter et évoluer avant d’atteindre la surface."
          },
          {
            type: "definition",
            titre: "Arc volcanique",
            texte: "Un arc volcanique est un ensemble de volcans disposés approximativement en alignement ou en arc sur la plaque supérieure. Il peut se situer sur un continent ou former des îles volcaniques."
          },
          {
            type: "definition",
            titre: "Volcanisme explosif",
            texte: "Dans de nombreuses zones de subduction, les magmas sont relativement visqueux et peuvent contenir des gaz. Leur remontée peut provoquer des éruptions explosives, avec projections de cendres, blocs et parfois nuées ardentes. Toutes les éruptions d’une même zone ne sont cependant pas identiques."
          },
          {
            type: "schema",
            titre: "De l’eau de la plaque au magma",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 350" role="img" aria-labelledby="svt15s3t svt15s3d">
  <title id="svt15s3t">Formation de magma au-dessus d'une plaque en subduction</title>
  <desc id="svt15s3d">La plaque plongeante libère de l'eau. Cette eau facilite la fusion partielle du manteau situé au-dessus. Une partie du magma remonte vers un volcan.</desc>
  <defs>
    <marker id="svt15a3b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <path d="M0 0 L8 4 L0 8 Z" fill="#267"/>
    </marker>
    <marker id="svt15a3r" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <path d="M0 0 L8 4 L0 8 Z" fill="#a33"/>
    </marker>
  </defs>
  <rect width="720" height="350" fill="#fff"/>
  <path d="M0 105 L250 105 L520 315 L480 340 L230 135 L0 135 Z" fill="#899ba1" stroke="#555" stroke-width="2"/>
  <path d="M255 105 L450 105 L480 45 L510 105 L720 105 L720 170 L340 170 Z" fill="#d5b995" stroke="#765" stroke-width="2"/>
  <path d="M300 145 L525 300 L640 300 L640 170 L340 170 Z" fill="#e7b996" opacity="0.7"/>
  <path d="M370 195 L390 145 M415 230 L435 170" stroke="#267" stroke-width="3" marker-end="url(#svt15a3b)"/>
  <path d="M470 215 L480 115" stroke="#a33" stroke-width="4" marker-end="url(#svt15a3r)"/>
  <text x="35" y="80" font-size="15">Plaque océanique</text>
  <text x="535" y="75" font-size="15">Volcan</text>
  <text x="80" y="240" font-size="15">Plaque plongeante</text>
  <text x="290" y="275" font-size="14">Libération d'eau</text>
  <text x="515" y="205" font-size="14">Fusion partielle</text>
  <text x="515" y="225" font-size="14">du manteau</text>
</svg>`,
            legende: "Schéma simplifié : l’eau facilite la fusion partielle du manteau situé au-dessus de la plaque plongeante."
          },
          {
            type: "remarque",
            titre: "Des roches volcaniques et plutoniques",
            texte: "Une partie du magma peut atteindre la surface et former des roches volcaniques. Une autre partie peut refroidir lentement en profondeur et former des roches plutoniques. La composition des roches obtenues dépend de l’histoire du magma."
          }
        ]
      },

      {
        id: 5,
        titre: "Convergence, fermeture d’un océan et collision",
        blocs: [
          {
            type: "definition",
            titre: "Consommation de lithosphère océanique",
            texte: "Dans une zone de subduction, de la lithosphère océanique s’enfonce dans le manteau. Si la convergence se poursuit, la largeur d’un domaine océanique peut diminuer. Son évolution dépend cependant des mouvements et de l’histoire de l’ensemble des plaques concernées."
          },
          {
            type: "definition",
            titre: "Collision continentale",
            texte: "Une collision continentale peut se produire lorsque deux ensembles continentaux se rencontrent après la fermeture d’un domaine océanique. La croûte continentale, relativement peu dense, résiste à un enfoncement prolongé ; la convergence provoque alors notamment un raccourcissement et un épaississement de la croûte."
          },
          {
            type: "definition",
            titre: "Chaîne de collision",
            texte: "Une chaîne de collision est une chaîne de montagnes associée au rapprochement et à l’épaississement de continents. Elle peut présenter des plis, des failles inverses, des chevauchements et des roches métamorphiques."
          },
          {
            type: "exemple",
            titre: "L’Himalaya",
            texte: "L’Himalaya est lié à la convergence entre les plaques indienne et eurasiatique et à la collision continentale qui a suivi la fermeture d’un domaine océanique ancien. Cette chaîne continue d’évoluer sous l’effet des mouvements tectoniques."
          },
          {
            type: "remarque",
            titre: "Toutes les chaînes ne se forment pas de la même façon",
            texte: "Une chaîne de montagnes peut avoir une histoire complexe. Les Andes sont notamment associées à une subduction océan-continent active, tandis que l’Himalaya est un exemple de chaîne de collision continentale."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "La subduction correspond à la plongée d’une lithosphère océanique sous une autre plaque. Une fosse, une répartition inclinée de foyers sismiques et un arc volcanique sont des indices fréquents de cette zone. L’eau libérée par la plaque plongeante facilite la fusion partielle du manteau situé au-dessus. La poursuite d’une convergence peut réduire un domaine océanique et, dans certains cas, conduire à une collision continentale."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Définir la subduction. Quelle partie de la plaque océanique plonge : la croûte seule ou la lithosphère ?",
        correction: "La subduction est l’enfoncement d’une plaque lithosphérique sous une autre plaque. C’est la lithosphère océanique qui plonge : elle comprend la croûte océanique et une partie rigide du manteau supérieur."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Citer trois observations fréquemment associées à une zone de subduction.",
        correction: "On peut observer une fosse océanique, des séismes dont les foyers dessinent une zone inclinée en profondeur et un arc volcanique sur la plaque supérieure. Ces indices doivent être examinés ensemble."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Des foyers sismiques sont peu profonds près d’une fosse et deviennent progressivement plus profonds vers l’intérieur d’un continent. Quelle structure cette répartition suggère-t-elle ?",
        correction: "Cette répartition suggère une plaque océanique qui plonge sous le continent. Les foyers dessinent approximativement une zone inclinée appelée zone de Wadati-Benioff. D’autres observations sont nécessaires pour préciser la géométrie et l’histoire de la limite de plaques."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Distinguer le foyer et l’épicentre d’un séisme.",
        correction: "Le foyer est la région en profondeur où débute la rupture responsable du séisme. L’épicentre est le point situé à la surface, à la verticale du foyer."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une lithosphère océanique s’éloigne d’une dorsale pendant plusieurs millions d’années. Comment évoluent généralement sa température, son épaisseur et sa densité moyenne ?",
        correction: "Elle refroidit à mesure qu’elle s’éloigne de la dorsale. Elle s’épaissit et sa densité moyenne augmente généralement. Devenue suffisamment dense, elle peut contribuer à son enfoncement lorsqu’une subduction est engagée ; cela ne signifie pas qu’une subduction démarre automatiquement."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Un élève affirme : « Les volcans de subduction sont alimentés parce que toute la plaque plongeante fond. » Corriger cette affirmation.",
        correction: "La plaque plongeante ne fond pas simplement en totalité. En s’enfonçant, certaines de ses roches libèrent de l’eau. Cette eau facilite la fusion partielle du manteau situé au-dessus de la plaque. Une partie du magma produit remonte et peut alimenter des volcans."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Quelle différence peut-on observer entre une subduction sous un continent et une subduction sous une autre plaque océanique ?",
        correction: "Sous un continent, la subduction peut être associée à un arc volcanique continental, comme dans les Andes. Sous une plaque océanique, elle peut être associée à un arc d’îles volcaniques, comme dans la région des Mariannes."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une plaque océanique plonge sous un continent. Dans quelle plaque les volcans de l’arc se situent-ils généralement ?",
        correction: "Les volcans de l’arc se situent généralement sur la plaque supérieure, ici la plaque portant le continent. Ils sont alimentés par des magmas formés notamment par fusion partielle du manteau situé au-dessus de la plaque plongeante."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Expliquer comment la poursuite d’une convergence peut conduire à une collision continentale.",
        correction: "Une lithosphère océanique peut d’abord s’enfoncer en subduction, ce qui réduit le domaine océanique si les conditions le permettent. Lorsque les continents situés de part et d’autre se rencontrent, leur croûte relativement peu dense résiste à un enfoncement prolongé. La convergence entraîne alors notamment un raccourcissement et un épaississement de la croûte, pouvant former une chaîne de collision."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Après un fort séisme sous-marin près d’un littoral, pourquoi peut-on craindre un tsunami ? Un tsunami se produit-il après tous les séismes ?",
        correction: "Un déplacement brusque du fond marin peut déplacer une grande quantité d’eau et engendrer un tsunami. Mais tous les séismes ne produisent pas un déplacement suffisant du fond marin : un tsunami ne suit donc pas chaque séisme. Il faut suivre les alertes et consignes locales."
      }
    ]
  }
]);
