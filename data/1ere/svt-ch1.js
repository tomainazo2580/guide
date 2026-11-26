enregistrerChapitres("1ere", "svt", [
  {
    id: 1,
    titre: "Chapitre 1 : La constitution chimique de la matière vivante",
    premium: false,
    guide: false,
    lecons: [
      {
        id: 1,
        titre: "1. La matière vivante est constituée d’éléments chimiques",
        blocs: [
          {
            type: "introduction",
            titre: "Du visible à l’invisible",
            texte: "Une feuille, une racine et une graine ont des formes différentes, mais toutes sont constituées de cellules. Ces cellules contiennent de l’eau, des ions et des molécules. Les molécules sont elles-mêmes formées d’atomes appartenant à des éléments chimiques."
          },
          {
            type: "definition",
            titre: "Élément chimique",
            texte: "Un élément chimique correspond à une catégorie d’atomes caractérisés par le même nombre de protons. On le représente par un symbole : C pour le carbone, H pour l’hydrogène et O pour l’oxygène."
          },
          {
            type: "definition",
            titre: "Atome, molécule et ion",
            texte: "Un atome est une petite unité de matière. Une molécule est un assemblage d’atomes liés : par exemple, une molécule d’eau H₂O contient deux atomes d’hydrogène et un atome d’oxygène. Un ion est un atome ou un groupe d’atomes portant une charge électrique : par exemple K⁺ ou NO₃⁻."
          },
          {
            type: "schema",
            titre: "Niveaux d’organisation de la matière vivante",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180" role="img" aria-label="Une plante est formée de cellules qui contiennent des molécules constituées d’atomes">
              <rect width="640" height="180" fill="#fff"/>
              <g font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#0f172a">
                <rect x="10" y="45" width="125" height="65" rx="8" fill="#dcfce7" stroke="#15803d"/>
                <text x="72" y="72">Plante</text><text x="72" y="94">ex. : feuille</text>
                <rect x="170" y="45" width="125" height="65" rx="8" fill="#e0f2fe" stroke="#0369a1"/>
                <text x="232" y="83">Cellules</text>
                <rect x="330" y="45" width="125" height="65" rx="8" fill="#fef3c7" stroke="#b45309"/>
                <text x="392" y="83">Molécules</text>
                <rect x="490" y="45" width="125" height="65" rx="8" fill="#f3e8ff" stroke="#7e22ce"/>
                <text x="552" y="83">Atomes</text>
                <text x="320" y="150" font-size="14">Chaque niveau est constitué d’éléments du niveau suivant.</text>
              </g>
              <g stroke="#475569" stroke-width="2" fill="#475569">
                <path d="M135 78 H165"/><path d="M160 74 L166 78 L160 82"/>
                <path d="M295 78 H325"/><path d="M320 74 L326 78 L320 82"/>
                <path d="M455 78 H485"/><path d="M480 74 L486 78 L480 82"/>
              </g>
            </svg>`,
            legende: "La flèche signifie ici « est constitué notamment de ». Les ions ne sont pas représentés sur ce schéma simplifié."
          },
          {
            type: "remarque",
            titre: "Élément chimique et substance",
            texte: "Il faut distinguer un élément chimique d’une substance. L’élément oxygène O est présent dans l’eau H₂O comme dans le dioxygène O₂, mais l’eau et le dioxygène sont deux substances différentes."
          }
        ]
      },
      {
        id: 2,
        titre: "2. Eau, matière minérale et matière organique",
        blocs: [
          {
            type: "definition",
            titre: "Matière minérale",
            texte: "Dans ce cours, la matière minérale comprend notamment l’eau et les sels minéraux. Ces derniers peuvent être présents sous forme d’ions dissous, comme le potassium K⁺, le calcium Ca²⁺ ou le nitrate NO₃⁻."
          },
          {
            type: "definition",
            titre: "Matière organique",
            texte: "La matière organique du vivant comprend notamment les glucides, les lipides et les protéines. Ces molécules contiennent du carbone et généralement de l’hydrogène, ainsi que d’autres éléments selon les molécules."
          },
          {
            type: "remarque",
            titre: "Toutes les substances contenant du carbone ne sont pas organiques",
            texte: "Le dioxyde de carbone CO₂ contient du carbone, mais il est classé parmi les substances minérales. La présence de carbone seule ne suffit donc pas pour qualifier une substance d’organique."
          },
          {
            type: "tableau",
            titre: "Quelques constituants d’un végétal",
            entetes: ["Constituant", "Exemple de rôle ou de localisation"],
            lignes: [
              ["Eau", "Milieu où se déroulent de nombreuses réactions et où circulent des substances dissoutes."],
              ["Ions minéraux", "Interviennent dans la croissance et le fonctionnement des cellules."],
              ["Glucides", "Le glucose peut être utilisé par les cellules ; l’amidon peut servir de réserve."],
              ["Lipides", "Entrent notamment dans la composition des membranes et peuvent servir de réserve."],
              ["Protéines", "Participent à la structure et au fonctionnement des cellules ; certaines sont des enzymes."]
            ]
          },
          {
            type: "exemple",
            titre: "Masse fraîche et masse sèche",
            texte: "On pèse un échantillon végétal avant séchage : c’est sa masse fraîche. Après un séchage adapté jusqu’à masse stable, on obtient une masse sèche. La perte de masse permet d’estimer la quantité d’eau éliminée, en supposant que les autres pertes sont négligeables."
          },
          {
            type: "methode",
            titre: "Estimer la proportion d’eau",
            texte: "Masse d’eau estimée = masse fraîche − masse sèche. Pourcentage d’eau estimé = (masse d’eau estimée ÷ masse fraîche) × 100. Par exemple, pour 100 g de matière fraîche et 20 g de matière sèche : masse d’eau estimée = 80 g, soit 80 % de la masse fraîche."
          }
        ]
      },
      {
        id: 3,
        titre: "3. Macroéléments et oligoéléments",
        blocs: [
          {
            type: "definition",
            titre: "Élément essentiel",
            texte: "Un élément est dit essentiel à une plante lorsque son absence empêche l’achèvement normal de son cycle de vie et que son rôle ne peut pas être entièrement remplacé par un autre élément."
          },
          {
            type: "definition",
            titre: "Macroéléments",
            texte: "Les macroéléments sont des éléments nécessaires en quantités relativement importantes. Chez les plantes, on cite notamment le carbone C, l’hydrogène H, l’oxygène O, l’azote N, le phosphore P, le potassium K, le calcium Ca, le magnésium Mg et le soufre S."
          },
          {
            type: "definition",
            titre: "Oligoéléments",
            texte: "Les oligoéléments, ou microéléments, sont nécessaires en très faibles quantités. Ils restent indispensables lorsqu’ils sont essentiels à l’espèce étudiée. Le fer Fe, le manganèse Mn, le zinc Zn et le cuivre Cu en sont des exemples."
          },
          {
            type: "remarque",
            titre: "Petite quantité ne signifie pas faible importance",
            texte: "Un oligoélément peut être indispensable même si la plante en utilise peu. À l’inverse, un apport excessif peut être toxique. Les besoins varient selon l’élément et l’espèce."
          },
          {
            type: "tableau",
            titre: "Exemples d’éléments et de fonctions",
            entetes: ["Élément", "Catégorie", "Exemple de fonction"],
            lignes: [
              ["Carbone C", "Macroélément", "Constitue le squelette de nombreuses molécules organiques."],
              ["Azote N", "Macroélément", "Entre notamment dans la composition des acides aminés et des protéines."],
              ["Phosphore P", "Macroélément", "Entre notamment dans la composition de l’ADN et de l’ATP, molécule impliquée dans les transferts d’énergie."],
              ["Magnésium Mg", "Macroélément", "Entre dans la composition de la chlorophylle."],
              ["Potassium K", "Macroélément", "Participe notamment au fonctionnement cellulaire et à la régulation des stomates."],
              ["Fer Fe", "Oligoélément", "Intervient dans plusieurs réactions cellulaires et dans la formation de la chlorophylle."]
            ]
          },
          {
            type: "remarque",
            titre: "Le fer et la chlorophylle",
            texte: "Le fer contribue à la formation et au fonctionnement de l’appareil photosynthétique, mais il n’est pas l’atome central de la molécule de chlorophylle : cet atome est le magnésium."
          }
        ]
      },
      {
        id: 4,
        titre: "4. D’où viennent les éléments utilisés par une plante verte ?",
        blocs: [
          {
            type: "introduction",
            titre: "Des ressources de plusieurs milieux",
            texte: "Une plante verte puise des substances dans son environnement. Ses racines absorbent généralement de l’eau et des ions minéraux dans le sol. Ses organes chlorophylliens prélèvent notamment du dioxyde de carbone dans l’air."
          },
          {
            type: "schema",
            titre: "Origine simplifiée de quelques ressources",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 300" role="img" aria-label="La plante prélève du dioxyde de carbone dans l’air, de l’eau et des ions dans le sol et reçoit de la lumière">
              <rect width="620" height="300" fill="#fff"/>
              <rect y="205" width="620" height="95" fill="#e7d4b5"/>
              <circle cx="70" cy="55" r="26" fill="#fbbf24"/>
              <path d="M305 205 V110 M305 150 C260 135 255 105 260 90 C285 91 305 110 305 150 M305 135 C350 120 360 95 355 78 C330 80 305 100 305 135" fill="#86efac" stroke="#15803d" stroke-width="4"/>
              <path d="M305 205 C295 230 275 242 250 255 M305 205 C315 230 335 242 360 255" fill="none" stroke="#92400e" stroke-width="4"/>
              <g font-family="Arial, sans-serif" font-size="15" fill="#0f172a">
                <text x="15" y="105">Lumière</text>
                <text x="425" y="80">CO₂ de l’air</text>
                <text x="20" y="270">Eau et ions du sol</text>
                <text x="485" y="230">Sol</text>
              </g>
              <g stroke="#2563eb" stroke-width="2" fill="#2563eb">
                <path d="M110 85 L240 115"/><path d="M235 110 L242 115 L234 119"/>
                <path d="M420 87 L365 105"/><path d="M370 100 L363 106 L372 109"/>
                <path d="M145 260 L245 250"/><path d="M239 246 L247 250 L240 254"/>
              </g>
            </svg>`,
            legende: "Les flèches indiquent des apports. La lumière fournit de l’énergie ; elle n’est pas un élément chimique."
          },
          {
            type: "regle",
            titre: "Origine du carbone",
            texte: "Chez une plante verte, le carbone de nombreuses molécules organiques provient du CO₂ absorbé dans l’air. Grâce à la photosynthèse, la plante utilise de l’énergie lumineuse pour produire de la matière organique à partir de matière minérale."
          },
          {
            type: "remarque",
            titre: "Les ions minéraux ne fournissent pas tous les éléments",
            texte: "Le nitrate apporte de l’azote, tandis que d’autres ions apportent, par exemple, du potassium ou du magnésium. Le carbone de la matière organique provient principalement du CO₂, et non du complexe argilo-humique du sol."
          }
        ]
      },
      {
        id: 5,
        titre: "5. Étudier les besoins d’une plante",
        blocs: [
          {
            type: "definition",
            titre: "Carence",
            texte: "Une carence est une insuffisance d’un élément nécessaire au fonctionnement normal de l’organisme. Chez une plante, elle peut se manifester par une croissance réduite ou une modification de la couleur des feuilles."
          },
          {
            type: "methode",
            titre: "Comparer deux cultures",
            texte: "Pour étudier l’effet d’un élément, on compare deux lots de plantes semblables. Le lot témoin reçoit une solution nutritive complète. Le lot expérimental reçoit une solution identique, sauf pour l’élément étudié. On garde autant que possible les autres conditions identiques : lumière, température, eau, durée et espèce."
          },
          {
            type: "exemple",
            titre: "Étudier le rôle du magnésium",
            texte: "Si les plantes privées de magnésium présentent une croissance moindre que les témoins, cela indique que le magnésium est nécessaire dans les conditions de l’expérience. Il faut répéter les essais et vérifier que les autres conditions sont comparables avant de généraliser."
          },
          {
            type: "remarque",
            titre: "Interpréter avec prudence",
            texte: "Un jaunissement des feuilles ne prouve pas à lui seul une carence précise : plusieurs causes sont possibles. Une comparaison expérimentale et, si nécessaire, une analyse complémentaire permettent d’appuyer le diagnostic."
          }
        ]
      },
      {
        id: 6,
        titre: "6. L’essentiel à retenir",
        blocs: [
          {
            type: "rappel",
            titre: "Bilan",
            texte: "La matière vivante contient de l’eau, des ions minéraux et des molécules organiques. Les macroéléments sont nécessaires en quantités relativement importantes ; les oligoéléments sont nécessaires en très faibles quantités. Une faible quantité n’empêche pas un élément d’être indispensable."
          },
          {
            type: "rappel",
            titre: "Origine des ressources végétales",
            texte: "Les racines absorbent généralement l’eau et les ions du sol. Le carbone de la matière organique des plantes vertes provient principalement du CO₂ de l’air, utilisé lors de la photosynthèse. La lumière apporte de l’énergie, pas de matière."
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Définis un macroélément et un oligoélément. Donne un exemple de chaque chez une plante.",
        correction: "Un macroélément est nécessaire en quantité relativement importante : par exemple le magnésium. Un oligoélément est nécessaire en très faible quantité : par exemple le fer. Les deux peuvent être indispensables."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Classe les exemples suivants en matière minérale ou matière organique : eau, amidon, ion nitrate, protéine.",
        correction: "L’eau et l’ion nitrate appartiennent à la matière minérale. L’amidon et la protéine appartiennent à la matière organique."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un échantillon de feuilles a une masse fraîche de 50 g. Après séchage adapté, sa masse sèche est de 10 g. Estime la masse d’eau éliminée et le pourcentage d’eau par rapport à la masse fraîche.",
        correction: "Masse d’eau estimée = 50 − 10 = 40 g. Pourcentage d’eau estimé = (40 ÷ 50) × 100 = 80 %. Cette estimation suppose que les pertes autres que l’eau sont négligeables."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une élève affirme : « Le fer est inutile à la plante puisqu’elle en a besoin en très faible quantité. » Explique son erreur.",
        correction: "Le fer est un oligoélément : il est nécessaire en très faible quantité, mais cela ne signifie pas qu’il est inutile. Il intervient dans des fonctions cellulaires et dans la formation de la chlorophylle. Un excès peut toutefois être toxique."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Indique la source principale du carbone utilisé pour fabriquer la matière organique d’une plante verte. La lumière apporte-t-elle ce carbone ?",
        correction: "Le carbone provient principalement du dioxyde de carbone CO₂ de l’air. La lumière fournit l’énergie nécessaire à la photosynthèse ; elle n’apporte pas de carbone."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux lots de jeunes plants de la même espèce poussent dans les mêmes conditions. Le lot A reçoit une solution complète ; le lot B reçoit une solution identique mais sans magnésium. Après plusieurs semaines, B pousse moins bien. 1. Quel est le témoin ? 2. Quel facteur change ? 3. Quelle conclusion prudente proposes-tu ?",
        correction: "1. Le lot A est le témoin. 2. Le facteur modifié est la présence de magnésium dans la solution. 3. Dans ces conditions, l’absence de magnésium est associée à une croissance réduite : le résultat suggère que cet élément est nécessaire à une croissance normale. Des répétitions renforceraient la conclusion."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique pourquoi les deux phrases suivantes sont fausses : « Toutes les substances contenant du carbone sont organiques » et « La chlorophylle contient du fer en son centre ».",
        correction: "Le CO₂ contient du carbone mais est une substance minérale : la première phrase est donc fausse. L’atome central de la chlorophylle est le magnésium, pas le fer. Le fer reste néanmoins important pour la formation et le fonctionnement de l’appareil photosynthétique."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un groupe compare deux plants : le premier reçoit une solution complète et beaucoup de lumière ; le second reçoit une solution sans fer et reste à l’obscurité. Le second pousse moins. Peut-on attribuer cette différence au seul manque de fer ? Propose une comparaison améliorée.",
        correction: "Non. Deux facteurs changent à la fois : l’apport en fer et la lumière. Chacun peut contribuer à la différence observée. Il faut comparer des plants semblables recevant la même lumière, la même quantité d’eau et les mêmes conditions, avec une solution complète pour le témoin et une solution identique sans fer pour le lot expérimental. Répéter avec plusieurs plants rend la comparaison plus fiable."
      }
    ]
  }
]);
