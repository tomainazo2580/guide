enregistrerChapitres("1ere", "svt", [
  {
    id: 6,
    titre: "Chapitre 6 : Le métabolisme et l’utilisation des nutriments",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Le devenir des nutriments dans l’organisme",
        blocs: [
          {
            type: "introduction",
            titre: "Après la digestion",
            texte: "Les nutriments issus de la digestion traversent la paroi intestinale. Ils sont ensuite transportés vers les organes. Les cellules les utilisent pour fonctionner, fabriquer leurs constituants ou constituer des réserves. Une partie de la matière absorbée peut être transformée avant son utilisation."
          },
          {
            type: "definition",
            titre: "Assimilation",
            texte: "L’assimilation est l’utilisation et la transformation de substances absorbées par les cellules pour fabriquer leur propre matière ou constituer des réserves. Par exemple, une cellule peut utiliser des acides aminés pour fabriquer ses protéines."
          },
          {
            type: "exemple",
            titre: "Quelques devenirs du glucose",
            texte: "Le glucose absorbé peut être utilisé par les cellules pour libérer de l’énergie. Il peut aussi être stocké sous forme de glycogène, notamment dans le foie et les muscles. Si les apports dépassent les besoins dans certaines conditions, une partie peut contribuer à la formation de lipides de réserve."
          },
          {
            type: "definition",
            titre: "Métabolisme",
            texte: "Le métabolisme est l’ensemble des réactions chimiques qui se déroulent dans les cellules d’un organisme. Ces réactions transforment la matière et l’énergie. Elles sont souvent accélérées par des enzymes."
          },
          {
            type: "tableau",
            titre: "Deux grands aspects du métabolisme",
            entetes: ["Aspect", "Définition", "Exemple"],
            lignes: [
              ["Anabolisme", "Ensemble de réactions de synthèse qui fabriquent des molécules complexes à partir de molécules plus simples. Ces réactions nécessitent souvent de l’énergie.", "Fabrication d’une protéine à partir d’acides aminés."],
              ["Catabolisme", "Ensemble de réactions qui dégradent des molécules. Certaines de ces réactions libèrent de l’énergie utilisable par la cellule.", "Dégradation du glucose lors de la respiration cellulaire."]
            ]
          },
          {
            type: "schema",
            titre: "Deux devenirs des nutriments",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" role="img" aria-labelledby="svt6s1t svt6s1d">
  <title id="svt6s1t">Utilisation des nutriments par les cellules</title>
  <desc id="svt6s1d">Les nutriments peuvent être utilisés pour fabriquer la matière cellulaire et des réserves, ou être dégradés afin de fournir de l'énergie utilisable.</desc>
  <defs>
    <marker id="svt6a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="680" height="280" fill="#fff"/>
  <rect x="235" y="20" width="210" height="55" rx="8" fill="#e2eff8" stroke="#527b95"/>
  <text x="340" y="53" text-anchor="middle" font-size="18">Nutriments absorbés</text>
  <path d="M280 75 L145 140 M400 75 L535 140" stroke="#444" stroke-width="2" marker-end="url(#svt6a1)"/>
  <rect x="25" y="145" width="240" height="90" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="145" y="174" text-anchor="middle" font-size="17">Anabolisme</text>
  <text x="145" y="198" text-anchor="middle" font-size="14">Synthèse de matière</text>
  <text x="145" y="218" text-anchor="middle" font-size="14">et de réserves</text>
  <rect x="415" y="145" width="240" height="90" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="535" y="174" text-anchor="middle" font-size="17">Catabolisme</text>
  <text x="535" y="198" text-anchor="middle" font-size="14">Dégradation de molécules</text>
  <text x="535" y="218" text-anchor="middle" font-size="14">et libération d'énergie</text>
</svg>`,
            legende: "Les réactions de synthèse et de dégradation sont liées : l’énergie libérée par certaines réactions peut servir à d’autres."
          }
        ]
      },

      {
        id: 2,
        titre: "La respiration cellulaire",
        blocs: [
          {
            type: "definition",
            titre: "Définition",
            texte: "La respiration cellulaire est un ensemble de réactions par lesquelles une cellule utilise notamment une molécule organique, comme le glucose, et du dioxygène. Ces réactions libèrent de l’énergie dont une partie est rendue disponible sous forme d’ATP ; elles produisent notamment du dioxyde de carbone et de l’eau."
          },
          {
            type: "definition",
            titre: "ATP",
            texte: "L’ATP, ou adénosine triphosphate, est une molécule qui permet des transferts d’énergie utilisable dans la cellule. Elle intervient dans de nombreuses activités cellulaires, par exemple certaines synthèses, les transports actifs et les contractions musculaires."
          },
          {
            type: "regle",
            titre: "Bilan simplifié de la respiration du glucose",
            texte: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + énergie. Cette écriture résume de nombreuses réactions. Une partie de l’énergie libérée contribue à la formation d’ATP ; une autre partie est dissipée sous forme de chaleur."
          },
          {
            type: "definition",
            titre: "Lieu dans la cellule",
            texte: "La dégradation du glucose commence dans le cytoplasme par la glycolyse. En présence de dioxygène, les étapes suivantes de la respiration se déroulent notamment dans les mitochondries des cellules eucaryotes, comme les cellules animales et végétales."
          },
          {
            type: "remarque",
            titre: "Respiration pulmonaire et respiration cellulaire",
            texte: "La respiration pulmonaire correspond aux échanges de gaz entre l’air et l’organisme. La respiration cellulaire désigne des réactions chimiques dans les cellules. Chez l’être humain, le sang transporte le dioxygène des poumons vers les organes et une partie du CO₂ des organes vers les poumons."
          },
          {
            type: "schema",
            titre: "Respiration cellulaire : entrées et sorties",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 260" role="img" aria-labelledby="svt6s2t svt6s2d">
  <title id="svt6s2t">Bilan de la respiration cellulaire</title>
  <desc id="svt6s2d">Une cellule reçoit du glucose et du dioxygène. La respiration produit du dioxyde de carbone, de l'eau et de l'énergie utilisable, notamment sous forme d'ATP.</desc>
  <defs>
    <marker id="svt6a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="680" height="260" fill="#fff"/>
  <ellipse cx="340" cy="130" rx="120" ry="85" fill="#f5e7dc" stroke="#9a6557" stroke-width="3"/>
  <ellipse cx="340" cy="130" rx="65" ry="35" fill="#e9c5aa" stroke="#9a6557" stroke-width="2"/>
  <text x="340" y="125" text-anchor="middle" font-size="16">Respiration</text>
  <text x="340" y="147" text-anchor="middle" font-size="15">cellulaire</text>
  <text x="30" y="75" font-size="17">Glucose</text>
  <path d="M120 70 L225 100" stroke="#444" stroke-width="2" marker-end="url(#svt6a2)"/>
  <text x="20" y="205" font-size="17">Dioxygène</text>
  <path d="M130 200 L225 160" stroke="#444" stroke-width="2" marker-end="url(#svt6a2)"/>
  <text x="490" y="75" font-size="17">CO₂ + eau</text>
  <path d="M450 100 L520 80" stroke="#444" stroke-width="2" marker-end="url(#svt6a2)"/>
  <text x="490" y="190" font-size="17">ATP + chaleur</text>
  <path d="M450 160 L520 180" stroke="#444" stroke-width="2" marker-end="url(#svt6a2)"/>
</svg>`,
            legende: "Bilan simplifié. L’ATP permet des transferts d’énergie dans la cellule ; une partie de l’énergie est dissipée sous forme de chaleur."
          }
        ]
      },

      {
        id: 3,
        titre: "Les fermentations",
        blocs: [
          {
            type: "definition",
            titre: "Fermentation",
            texte: "Une fermentation est une voie métabolique qui permet à certaines cellules de poursuivre la dégradation partielle du glucose et de produire une quantité limitée d’ATP sans utiliser le dioxygène comme accepteur final d’électrons. Elle régénère notamment des molécules nécessaires à la poursuite de la glycolyse."
          },
          {
            type: "definition",
            titre: "Fermentation alcoolique",
            texte: "Certaines levures réalisent une fermentation alcoolique en l’absence de dioxygène disponible. Le glucose est transformé notamment en éthanol et en dioxyde de carbone, avec production d’une faible quantité d’ATP."
          },
          {
            type: "regle",
            titre: "Bilan simplifié de la fermentation alcoolique",
            texte: "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ + énergie. L’énergie récupérée sous forme d’ATP est nettement inférieure à celle obtenue lors de l’oxydation complète du glucose par respiration."
          },
          {
            type: "definition",
            titre: "Fermentation lactique",
            texte: "Certaines bactéries réalisent une fermentation lactique : le glucose est transformé principalement en lactate. Des cellules musculaires humaines peuvent également produire du lactate lorsque la glycolyse est très sollicitée, notamment lors d’un effort intense ; cela peut se produire même si du dioxygène reste présent."
          },
          {
            type: "remarque",
            titre: "D’autres fermentations",
            texte: "Les micro-organismes réalisent aussi d’autres fermentations, qui produisent des mélanges variables de substances organiques et parfois des gaz. Les produits obtenus dépendent de l’organisme et des conditions du milieu."
          },
          {
            type: "tableau",
            titre: "Respiration et fermentations : comparaison",
            entetes: ["Phénomène", "Utilisation du dioxygène", "Produits simplifiés", "ATP obtenu à partir du glucose"],
            lignes: [
              ["Respiration aérobie", "Oui, comme accepteur final dans la chaîne respiratoire.", "CO₂ et eau.", "Relativement important."],
              ["Fermentation alcoolique", "Pas d’utilisation du dioxygène dans la voie fermentaire.", "Éthanol et CO₂.", "Faible : 2 ATP nets par glucose par la glycolyse."],
              ["Fermentation lactique", "Pas d’utilisation du dioxygène dans la voie fermentaire.", "Lactate.", "Faible : 2 ATP nets par glucose par la glycolyse."]
            ]
          },
          {
            type: "schema",
            titre: "Deux voies de transformation du glucose",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 300" role="img" aria-labelledby="svt6s3t svt6s3d">
  <title id="svt6s3t">Respiration et fermentation du glucose</title>
  <desc id="svt6s3d">Le glucose peut être dégradé par respiration avec utilisation de dioxygène ou par fermentation. La respiration fournit davantage d'ATP que la fermentation.</desc>
  <defs>
    <marker id="svt6a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#444"/></marker>
  </defs>
  <rect width="700" height="300" fill="#fff"/>
  <rect x="260" y="20" width="180" height="50" rx="8" fill="#e2eff8" stroke="#527b95"/>
  <text x="350" y="51" text-anchor="middle" font-size="18">Glucose</text>
  <path d="M300 70 L165 130 M400 70 L535 130" stroke="#444" stroke-width="2" marker-end="url(#svt6a3)"/>
  <rect x="30" y="135" width="270" height="125" rx="8" fill="#dcefd4" stroke="#39733a"/>
  <text x="165" y="164" text-anchor="middle" font-size="17">Respiration</text>
  <text x="165" y="190" text-anchor="middle" font-size="15">avec utilisation de O₂</text>
  <text x="165" y="214" text-anchor="middle" font-size="15">CO₂ + eau</text>
  <text x="165" y="238" text-anchor="middle" font-size="15">davantage d'ATP</text>
  <rect x="400" y="135" width="270" height="125" rx="8" fill="#f8ebd5" stroke="#98783a"/>
  <text x="535" y="164" text-anchor="middle" font-size="17">Fermentation</text>
  <text x="535" y="190" text-anchor="middle" font-size="15">éthanol + CO₂</text>
  <text x="535" y="214" text-anchor="middle" font-size="15">ou lactate</text>
  <text x="535" y="238" text-anchor="middle" font-size="15">peu d'ATP</text>
</svg>`,
            legende: "Schéma simplifié : les deux voies comprennent plusieurs réactions. Les produits de fermentation dépendent du type de cellule."
          }
        ]
      },

      {
        id: 4,
        titre: "Mettre en évidence une fermentation",
        blocs: [
          {
            type: "introduction",
            titre: "Levures et glucose",
            texte: "Les levures sont des micro-organismes capables de transformer des sucres. Dans des conditions appropriées, elles réalisent une fermentation alcoolique et dégagent du dioxyde de carbone."
          },
          {
            type: "methode",
            titre: "Protocole de comparaison",
            texte: "Préparer un flacon A contenant de l’eau, des levures et du glucose. Préparer un flacon B témoin contenant les mêmes quantités d’eau et de glucose, mais sans levures. Maintenir les flacons à une température adaptée, dans des conditions aussi semblables que possible. Recueillir ou mesurer le gaz produit sans fermer hermétiquement un récipient rigide : la pression pourrait augmenter dangereusement."
          },
          {
            type: "methode",
            titre: "Identifier le gaz",
            texte: "Faire passer le gaz recueilli dans de l’eau de chaux. Si elle se trouble, cela indique la présence de dioxyde de carbone dans les conditions du test. Comparer avec le témoin et répéter l’expérience."
          },
          {
            type: "remarque",
            titre: "Interpréter avec prudence",
            texte: "Le dégagement de CO₂ par des levures en présence de glucose montre une activité métabolique, mais le CO₂ seul ne prouve pas une fermentation alcoolique : les levures peuvent aussi produire du CO₂ par respiration. Pour soutenir l’hypothèse de fermentation alcoolique, il faut contrôler les conditions d’accès au dioxygène et rechercher également l’éthanol avec une méthode adaptée."
          },
          {
            type: "exemple",
            titre: "Une application : la pâte à pain",
            texte: "Dans une pâte contenant de la levure et des sucres disponibles, le CO₂ produit contribue à former des bulles qui font gonfler la pâte. La cuisson modifie ensuite la pâte et inactive les levures. La production de gaz dans une pâte réelle dépend de plusieurs conditions, notamment la température et la disponibilité des sucres."
          }
        ]
      },

      {
        id: 5,
        titre: "Les besoins des cellules et le bilan du métabolisme",
        blocs: [
          {
            type: "definition",
            titre: "Besoins en matière et en énergie",
            texte: "Les cellules ont besoin de matière pour fabriquer et renouveler leurs constituants. Elles ont aussi besoin d’énergie pour assurer leurs activités. Les besoins varient selon l’organe, l’âge, l’activité et l’état de l’organisme."
          },
          {
            type: "exemple",
            titre: "Le muscle en activité",
            texte: "Lors d’un effort, les cellules musculaires utilisent davantage d’ATP pour la contraction. Elles régénèrent cet ATP par différentes voies, notamment la respiration cellulaire et, selon l’intensité de l’effort, la glycolyse associée à une production de lactate."
          },
          {
            type: "remarque",
            titre: "Les plantes respirent aussi",
            texte: "Les cellules végétales respirent de jour comme de nuit. Les cellules chlorophylliennes éclairées réalisent également la photosynthèse. La matière organique produite peut servir à la respiration, à la construction de la plante ou à la constitution de réserves."
          },
          {
            type: "rappel",
            titre: "À retenir",
            texte: "Le métabolisme comprend l’anabolisme, qui construit des molécules, et le catabolisme, qui en dégrade. La respiration cellulaire utilise notamment du glucose et du dioxygène et fournit de l’énergie utilisable sous forme d’ATP. Les fermentations transforment partiellement le glucose et fournissent moins d’ATP. L’assimilation permet aux cellules de transformer la matière absorbée pour fabriquer leurs constituants et leurs réserves."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Découverte",
        points: 4,
        enonce: "Définir le métabolisme, puis distinguer anabolisme et catabolisme à l’aide d’un exemple pour chacun.",
        correction: "Le métabolisme est l’ensemble des réactions chimiques qui se déroulent dans les cellules. L’anabolisme comprend des réactions de synthèse, par exemple la fabrication d’une protéine à partir d’acides aminés. Le catabolisme comprend des réactions de dégradation, par exemple la dégradation du glucose lors de la respiration cellulaire."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Compléter le bilan simplifié de la respiration cellulaire du glucose : glucose + ... → dioxyde de carbone + ... + énergie. Donner une utilisation de l’énergie rendue disponible.",
        correction: "Le bilan est : glucose + dioxygène → dioxyde de carbone + eau + énergie. Une partie de l’énergie est rendue disponible sous forme d’ATP. Elle peut notamment servir aux contractions musculaires, aux transports actifs ou aux synthèses cellulaires."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Distinguer respiration pulmonaire et respiration cellulaire. Expliquer le rôle du sang entre ces deux phénomènes.",
        correction: "La respiration pulmonaire correspond aux échanges de gaz entre l’air et l’organisme au niveau des poumons. La respiration cellulaire est un ensemble de réactions chimiques dans les cellules utilisant notamment le dioxygène. Le sang transporte le dioxygène des poumons vers les organes et une partie du CO₂ des organes vers les poumons."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Des levures placées avec du glucose produisent un gaz qui trouble l’eau de chaux. Peut-on conclure avec certitude qu’elles réalisent une fermentation alcoolique ? Justifier.",
        correction: "Non. Le trouble de l’eau de chaux indique la présence de CO₂, mais les levures peuvent produire ce gaz par fermentation alcoolique ou par respiration. Il faut contrôler les conditions d’accès au dioxygène et rechercher aussi l’éthanol avec une méthode adaptée pour mieux soutenir l’hypothèse d’une fermentation alcoolique."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Comparer les produits et la quantité relative d’ATP de la respiration du glucose, de la fermentation alcoolique et de la fermentation lactique.",
        correction: "La respiration du glucose produit notamment du CO₂ et de l’eau et fournit relativement beaucoup d’ATP. La fermentation alcoolique produit notamment de l’éthanol et du CO₂ ; la fermentation lactique produit principalement du lactate. Les deux fermentations fournissent peu d’ATP : 2 ATP nets par glucose par la glycolyse."
      },
      {
        niveau: "Calcul",
        points: 4,
        enonce: "Le bilan simplifié de la fermentation alcoolique indique qu’une molécule de glucose produit deux molécules de CO₂. Combien de molécules de CO₂ correspondent théoriquement à la fermentation complète de 5 molécules de glucose selon ce bilan ?",
        correction: "Une molécule de glucose donne deux molécules de CO₂ selon le bilan simplifié. Pour 5 molécules : 5 × 2 = 10 molécules de CO₂. Il s’agit d’une relation théorique fondée sur ce bilan, sans tenir compte d’autres transformations éventuelles."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une cellule utilise des acides aminés absorbés pour fabriquer une protéine. S’agit-il d’anabolisme ou de catabolisme ? Quel lien peut-on faire avec l’assimilation ?",
        correction: "Il s’agit d’anabolisme : la cellule synthétise une molécule complexe, la protéine, à partir de molécules plus simples, les acides aminés. C’est aussi un exemple d’assimilation, car la cellule utilise des substances absorbées pour fabriquer sa propre matière."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Lors d’un effort intense, des cellules musculaires produisent du lactate. Un élève affirme : « Cela prouve qu’il n’y a absolument plus de dioxygène dans le muscle. » Cette conclusion est-elle justifiée ?",
        correction: "Non. La production de lactate peut augmenter lorsque la glycolyse est fortement sollicitée, même si du dioxygène reste présent dans le muscle. Elle ne prouve donc pas à elle seule une absence totale de dioxygène."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Une plante verte est placée dans l’obscurité pendant une nuit. Quels phénomènes continuent ou cessent faute de lumière : photosynthèse et respiration cellulaire ?",
        correction: "La photosynthèse cesse faute de lumière. La respiration cellulaire continue dans les cellules vivantes : elle utilise de la matière organique et du dioxygène et produit notamment du CO₂ et de l’eau. La plante peut utiliser ses réserves pour fournir des substrats à ses cellules."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Dans une expérience, un flacon contient de l’eau, du glucose et des levures. Proposer un témoin pour étudier le rôle des levures dans la production de gaz. Indiquer deux conditions à maintenir identiques.",
        correction: "Le témoin peut contenir les mêmes quantités d’eau et de glucose, mais sans levures. On maintient notamment la température et la durée identiques ; les récipients et les conditions d’accès au dioxygène doivent également être comparables. Si du gaz apparaît surtout dans le flacon avec levures, cela soutient leur rôle dans sa production. Il faut ensuite identifier le gaz et, si nécessaire, rechercher l’éthanol."
      }
    ]
  }
]);
