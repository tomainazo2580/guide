enregistrerChapitres("1ere", "svt", [
  {
    id: 2,
    titre: "Chapitre 2 : La nutrition minérale des végétaux",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les ressources minérales de la plante",
        blocs: [
          {
            type: "introduction",
            titre: "Une plante échange avec son milieu",
            texte: "Une plante verte prélève dans le sol de l’eau et des ions minéraux dissous. Elle prélève aussi du dioxyde de carbone dans l’air. Grâce à la lumière, ses organes chlorophylliens utilisent notamment l’eau et le dioxyde de carbone pour fabriquer de la matière organique. L’absorption des ions apporte d’autres éléments nécessaires à sa croissance, comme l’azote, le phosphore et le potassium."
          },
          {
            type: "definition",
            titre: "Solution du sol",
            texte: "La solution du sol est l’eau présente entre les particules du sol, avec les substances qui y sont dissoutes. Les racines y prélèvent de l’eau et certains ions, par exemple les ions nitrate NO₃⁻, potassium K⁺ et calcium Ca²⁺."
          },
          {
            type: "schema",
            titre: "Les principaux échanges de la plante",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 310" role="img" aria-labelledby="s1t s1d">
  <title id="s1t">Échanges entre une plante et son milieu</title>
  <desc id="s1d">Les racines prélèvent eau et ions dans le sol. Les feuilles prélèvent le dioxyde de carbone et perdent de l'eau sous forme de vapeur. La lumière atteint les feuilles.</desc>
  <defs><marker id="a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#244"/></marker></defs>
  <rect width="640" height="310" fill="#fff"/>
  <rect x="0" y="215" width="640" height="95" fill="#e8d4ad"/>
  <path d="M315 245 L315 95 M315 220 L275 270 M315 220 L350 278 M315 235 L295 290" fill="none" stroke="#76532d" stroke-width="5"/>
  <path d="M315 145 Q255 100 245 145 Q270 165 315 145 M315 115 Q370 70 390 110 Q365 135 315 115" fill="#80bd72" stroke="#39733a" stroke-width="3"/>
  <text x="15" y="245" font-size="17">Sol</text>
  <text x="20" y="285" font-size="16">Eau + ions</text>
  <path d="M150 278 L270 257" stroke="#244" stroke-width="2" marker-end="url(#a)"/>
  <text x="25" y="95" font-size="16">CO₂ de l'air</text>
  <path d="M145 98 L240 132" stroke="#244" stroke-width="2" marker-end="url(#a)"/>
  <text x="430" y="85" font-size="16">Lumière</text>
  <path d="M475 95 L385 112" stroke="#244" stroke-width="2" marker-end="url(#a)"/>
  <text x="415" y="180" font-size="16">Vapeur d'eau</text>
  <path d="M365 150 L460 155" stroke="#244" stroke-width="2" marker-end="url(#a)"/>
</svg>`,
            legende: "Les racines assurent l’essentiel des prélèvements d’eau et d’ions ; les feuilles assurent notamment les échanges gazeux avec l’air."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les sources",
            texte: "Le carbone de la matière organique végétale provient principalement du CO₂ atmosphérique, et non de l’humus absorbé par les racines. Les ions minéraux restent néanmoins indispensables à la fabrication et au fonctionnement des cellules."
          }
        ]
      },

      {
        id: 2,
        titre: "L’absorption de l’eau par les racines",
        blocs: [
          {
            type: "definition",
            titre: "Zone pilifère",
            texte: "La zone pilifère est une région jeune de la racine portant de nombreux poils absorbants. Chaque poil absorbant est un prolongement d’une cellule superficielle de la racine. Leur nombre et leur forme augmentent la surface de contact avec la solution du sol."
          },
          {
            type: "schema",
            titre: "Racine et poils absorbants",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300" role="img" aria-labelledby="s2t s2d">
  <title id="s2t">Zone pilifère d'une racine</title>
  <desc id="s2d">Une racine porte de nombreux poils au-dessus de son extrémité. L'eau du sol entre vers la racine au niveau des poils.</desc>
  <defs><marker id="b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#236"/></marker></defs>
  <rect width="640" height="300" fill="#fff"/>
  <path d="M295 15 L295 230 Q310 270 325 230 L325 15" fill="#f0ddad" stroke="#765" stroke-width="3"/>
  <g stroke="#765" stroke-width="2">
    <path d="M295 65 L245 48 M295 85 L240 78 M295 105 L242 110 M295 125 L235 142 M295 145 L245 170 M295 165 L250 195"/>
    <path d="M325 65 L375 48 M325 85 L380 78 M325 105 L378 110 M325 125 L385 142 M325 145 L375 170 M325 165 L370 195"/>
  </g>
  <text x="20" y="70" font-size="16">Eau du sol</text>
  <path d="M120 75 L235 104" stroke="#236" stroke-width="2" marker-end="url(#b)"/>
  <text x="410" y="95" font-size="16">Poils absorbants</text>
  <path d="M405 100 L378 110" stroke="#236" stroke-width="2" marker-end="url(#b)"/>
  <text x="410" y="155" font-size="16">Zone pilifère</text>
  <path d="M405 160 L375 170" stroke="#236" stroke-width="2" marker-end="url(#b)"/>
  <text x="355" y="265" font-size="16">Extrémité de la racine</text>
  <path d="M350 260 L322 243" stroke="#236" stroke-width="2" marker-end="url(#b)"/>
</svg>`,
            legende: "Schéma simplifié : les poils absorbants sont portés par une zone située en arrière de l’extrémité racinaire."
          },
          {
            type: "definition",
            titre: "Osmose",
            texte: "L’osmose est le déplacement net d’eau à travers une membrane sélectivement perméable, d’un milieu où l’eau est plus disponible vers un milieu où elle est moins disponible. En première approximation, entre deux solutions de mêmes solutés ne traversant pas la membrane, l’eau passe du milieu le moins concentré en solutés vers le plus concentré."
          },
          {
            type: "exemple",
            titre: "Entrée et sortie d’eau",
            texte: "Si le milieu extérieur est moins concentré en solutés efficaces que le contenu cellulaire, l’eau tend à entrer dans la cellule : celle-ci devient turgescente. Si le milieu extérieur est très concentré, l’eau peut sortir : le contenu cellulaire se rétracte et la membrane se décolle localement de la paroi ; c’est la plasmolyse."
          },
          {
            type: "remarque",
            titre: "De la cellule au xylème",
            texte: "L’entrée de l’eau dépend des différences de potentiel hydrique, elles-mêmes liées notamment à la concentration en solutés et à la pression. L’eau traverse ensuite les tissus de la racine jusqu’au xylème. Un sol très salé rend l’eau moins disponible pour la plante, même si le sol paraît humide."
          },
          {
            type: "methode",
            titre: "Mettre en évidence une zone d’absorption",
            texte: "Placer des jeunes plantules comparables dans des dispositifs où seule une région différente de la racine touche l’eau : zone pilifère dans un cas, autre région dans l’autre. Maintenir les autres conditions identiques et suivre l’état des plantules ainsi que le niveau d’eau, en limitant l’évaporation. Une meilleure absorption lorsque la zone pilifère est au contact de l’eau indique son rôle important."
          }
        ]
      },

      {
        id: 3,
        titre: "Absorption sélective des ions et rôle du sol",
        blocs: [
          {
            type: "definition",
            titre: "Absorption sélective",
            texte: "Les racines ne prélèvent pas tous les ions dans les mêmes proportions que celles de la solution du sol. Les membranes des cellules possèdent des protéines de transport qui permettent le passage de certains ions. Certains transports utilisent directement ou indirectement de l’énergie et peuvent accumuler un ion contre son gradient de concentration."
          },
          {
            type: "exemple",
            titre: "Comparer les proportions",
            texte: "Une solution peut contenir plusieurs ions, mais la composition des tissus ou de la sève ne reproduit pas nécessairement leurs proportions initiales. Cette différence est un indice de sélectivité ; elle ne suffit pas, à elle seule, à identifier le mécanisme précis de transport."
          },
          {
            type: "tableau",
            titre: "Quelques facteurs de l’absorption",
            entetes: ["Facteur", "Effet possible"],
            lignes: [
              ["Disponibilité de l’eau", "Un sol trop sec limite les échanges entre la solution du sol et les racines."],
              ["Concentration en ions", "Une carence limite l’absorption ; une salinité excessive peut gêner l’entrée d’eau ou devenir toxique."],
              ["Aération du sol", "Un manque de dioxygène réduit la respiration des racines et peut limiter les transports actifs."],
              ["Température", "Elle influence l’activité des cellules et la vitesse des échanges ; des valeurs extrêmes sont défavorables."],
              ["pH du sol", "Il modifie la disponibilité de nombreux ions et peut affecter l’activité des racines."],
              ["État des racines", "Une grande surface absorbante et des racines saines favorisent les prélèvements."]
            ]
          },
          {
            type: "definition",
            titre: "Complexe argilo-humique",
            texte: "Le complexe argilo-humique est une association stable entre particules d’argile et humus, souvent liée par des ions comme Ca²⁺. Ses charges, généralement négatives, retiennent des cations tels que K⁺, Ca²⁺ et Mg²⁺. Ces ions peuvent être échangés avec ceux de la solution du sol : le complexe constitue ainsi une réserve d’ions limitant leur entraînement par l’eau."
          },
          {
            type: "schema",
            titre: "Le complexe argilo-humique, réserve de cations",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 250" role="img" aria-labelledby="s3t s3d">
  <title id="s3t">Échanges entre complexe argilo-humique et solution du sol</title>
  <desc id="s3d">Des cations sont retenus sur un complexe chargé négativement et peuvent être échangés avec la solution du sol, où la racine les prélève.</desc>
  <defs><marker id="c" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#333"/></marker></defs>
  <rect width="640" height="250" fill="#fff"/>
  <ellipse cx="160" cy="125" rx="110" ry="65" fill="#d8bf95" stroke="#765" stroke-width="3"/>
  <text x="77" y="115" font-size="16">Argile + humus</text>
  <text x="98" y="145" font-size="20">−  −  −  −</text>
  <text x="62" y="65" font-size="16">K⁺</text><text x="180" y="55" font-size="16">Ca²⁺</text>
  <text x="70" y="205" font-size="16">Mg²⁺</text>
  <path d="M275 110 L390 110" stroke="#333" stroke-width="2" marker-end="url(#c)"/>
  <path d="M390 140 L275 140" stroke="#333" stroke-width="2" marker-end="url(#c)"/>
  <text x="290" y="90" font-size="15">Échanges</text>
  <rect x="405" y="70" width="190" height="110" fill="#dceef8" stroke="#579"/>
  <text x="425" y="105" font-size="16">Solution du sol</text>
  <text x="435" y="140" font-size="16">K⁺  Ca²⁺  Mg²⁺</text>
  <text x="425" y="220" font-size="15">Vers les racines</text>
  <path d="M500 180 L500 201" stroke="#333" stroke-width="2" marker-end="url(#c)"/>
</svg>`,
            legende: "Schéma simplifié : les cations retenus et ceux dissous peuvent s’échanger. Les nitrates, chargés négativement, sont en général moins retenus par ce complexe."
          },
          {
            type: "remarque",
            titre: "Fertilisation et lessivage",
            texte: "Un apport d’engrais peut corriger une carence, mais un excès n’améliore pas nécessairement la croissance. Des ions, notamment les nitrates, peuvent être entraînés vers les eaux par lessivage et contribuer à leur pollution."
          }
        ]
      },

      {
        id: 4,
        titre: "Transport de l’eau et des ions dans la plante",
        blocs: [
          {
            type: "definition",
            titre: "Sève brute et xylème",
            texte: "La sève brute est constituée principalement d’eau et d’ions minéraux. Elle circule des racines vers les organes aériens dans le xylème, tissu conducteur comprenant des éléments allongés dont les parois sont renforcées. À maturité, les principaux éléments conducteurs du xylème sont généralement morts."
          },
          {
            type: "definition",
            titre: "Transit horizontal et transit vertical",
            texte: "Le transit horizontal ou radial correspond au passage de l’eau et des ions depuis la surface de la racine à travers ses tissus jusqu’au xylème central. Le transit vertical correspond ensuite à leur montée dans le xylème de la racine, de la tige et des nervures des feuilles."
          },
          {
            type: "schema",
            titre: "Du sol aux feuilles",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300" role="img" aria-labelledby="s4t s4d">
  <title id="s4t">Trajet de l'eau et des ions dans la plante</title>
  <desc id="s4d">L'eau et les ions traversent horizontalement les tissus de la racine puis montent verticalement dans le xylème jusqu'à la feuille.</desc>
  <defs><marker id="d" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#1672a3"/></marker></defs>
  <rect width="640" height="300" fill="#fff"/>
  <path d="M300 260 L300 65 L335 65 L335 260" fill="#e4cf9d" stroke="#765" stroke-width="3"/>
  <path d="M318 72 Q390 25 430 65 Q390 105 318 72" fill="#8ac67c" stroke="#39733a" stroke-width="3"/>
  <path d="M175 210 L310 210" stroke="#1672a3" stroke-width="4" marker-end="url(#d)"/>
  <path d="M318 195 L318 92" stroke="#1672a3" stroke-width="4" marker-end="url(#d)"/>
  <path d="M325 72 L390 67" stroke="#1672a3" stroke-width="3" marker-end="url(#d)"/>
  <text x="20" y="205" font-size="16">Eau + ions du sol</text>
  <text x="45" y="245" font-size="16">Transit radial</text>
  <text x="355" y="155" font-size="16">Montée dans</text>
  <text x="355" y="177" font-size="16">le xylème</text>
  <text x="440" y="70" font-size="16">Feuille</text>
  <text x="260" y="288" font-size="16">Racine</text>
</svg>`,
            legende: "La transpiration des feuilles participe à l’aspiration de la colonne d’eau dans le xylème."
          },
          {
            type: "remarque",
            titre: "Deux circulations différentes",
            texte: "Le xylème transporte surtout l’eau et les ions vers les parties aériennes. Le phloème transporte une sève riche en substances organiques, notamment des sucres, des organes qui les produisent ou les libèrent vers ceux qui les utilisent ou les stockent. Les trajets dans le phloème dépendent des organes sources et receveurs."
          }
        ]
      },

      {
        id: 5,
        titre: "La transpiration végétale",
        blocs: [
          {
            type: "definition",
            titre: "Définition et localisation",
            texte: "La transpiration végétale est la perte d’eau sous forme de vapeur par les organes aériens. Elle se produit surtout par les stomates des feuilles, petits pores délimités par deux cellules de garde. Une fraction traverse aussi la cuticule. Selon l’espèce, les stomates peuvent être plus nombreux sur une face de la feuille."
          },
          {
            type: "schema",
            titre: "Stomate et sortie de vapeur d’eau",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 220" role="img" aria-labelledby="s5t s5d">
  <title id="s5t">Stomate ouvert vu de face</title>
  <desc id="s5d">Deux cellules de garde entourent un pore appelé ostiole. La vapeur d'eau sort par ce pore.</desc>
  <defs><marker id="e" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#267"/></marker></defs>
  <rect width="640" height="220" fill="#fff"/>
  <path d="M240 45 Q185 110 240 175 Q270 160 272 110 Q270 60 240 45 Z" fill="#91c980" stroke="#39733a" stroke-width="3"/>
  <path d="M320 45 Q375 110 320 175 Q290 160 288 110 Q290 60 320 45 Z" fill="#91c980" stroke="#39733a" stroke-width="3"/>
  <text x="30" y="70" font-size="16">Cellule de garde</text>
  <path d="M165 68 L220 87" stroke="#267" stroke-width="2" marker-end="url(#e)"/>
  <text x="390" y="120" font-size="16">Ostiole : pore</text>
  <path d="M385 115 L292 115" stroke="#267" stroke-width="2" marker-end="url(#e)"/>
  <path d="M280 105 L280 20" stroke="#267" stroke-width="3" marker-end="url(#e)"/>
  <text x="320" y="25" font-size="16">Vapeur d'eau vers l'air</text>
</svg>`,
            legende: "L’ouverture stomatique varie avec les conditions du milieu et l’état hydrique de la plante."
          },
          {
            type: "methode",
            titre: "Mesurer une perte d’eau",
            texte: "Peser à intervalles réguliers une plante en pot dont la surface du sol est recouverte afin de limiter l’évaporation directe. Prévoir un pot témoin semblable sans plante, également couvert. La diminution de masse du dispositif avec plante, corrigée de celle du témoin, estime la perte d’eau de la plante pendant la durée étudiée. On peut rapporter cette perte au temps et à la surface foliaire."
          },
          {
            type: "exemple",
            titre: "Calcul d’une perte moyenne",
            texte: "Si le dispositif avec plante perd 18 g en 3 h et le témoin 3 g pendant la même durée, la perte corrigée est de 18 − 3 = 15 g. La perte moyenne estimée est de 15 ÷ 3 = 5 g/h. La mesure reste approximative car d’autres échanges de matière peuvent aussi modifier légèrement la masse."
          },
          {
            type: "remarque",
            titre: "Potomètre",
            texte: "Un potomètre suit généralement le volume d’eau absorbé par un rameau, par exemple grâce au déplacement d’une bulle dans un tube gradué. Ce volume estime la transpiration si les autres utilisations et variations de stockage de l’eau restent faibles ; absorption et transpiration ne sont pas rigoureusement identiques."
          },
          {
            type: "regle",
            titre: "Importance et facteurs",
            texte: "Une grande partie de l’eau absorbée peut être perdue par transpiration, mais la proportion varie selon les conditions. La transpiration participe à la montée de la sève brute et au refroidissement des feuilles. Elle augmente souvent lorsque l’air est plus sec, que la température ou le vent augmentent et que les stomates sont ouverts ; un fort déficit en eau peut provoquer leur fermeture et limiter la perte."
          }
        ]
      },

      {
        id: 6,
        titre: "Origine du carbone de la matière organique",
        blocs: [
          {
            type: "definition",
            titre: "Utilisation du dioxyde de carbone",
            texte: "Dans les organes chlorophylliens éclairés, la photosynthèse permet la fabrication de matière organique à partir notamment de CO₂ et d’eau. Le CO₂ entre principalement par les stomates. Le carbone qu’il contient est incorporé à des molécules organiques ; l’énergie lumineuse est nécessaire à cette transformation."
          },
          {
            type: "regle",
            titre: "Bilan simplifié",
            texte: "Le bilan global simplifié de la production de glucose peut s’écrire : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, en présence de lumière et d’un appareil photosynthétique fonctionnel. Il résume un ensemble de réactions et ne décrit pas toutes les étapes."
          },
          {
            type: "methode",
            titre: "Tester le rôle du CO₂",
            texte: "Après avoir maintenu deux plantes comparables à l’obscurité pour diminuer leurs réserves d’amidon, placer chacune sous une enceinte transparente éclairée. Dans l’une, utiliser un dispositif absorbant le CO₂ ; dans l’autre, maintenir du CO₂ disponible. Garder les autres conditions comparables. Après quelques heures, rechercher l’amidon dans une feuille de chaque plante avec de l’eau iodée, après préparation adaptée de la feuille. Une coloration bleu-noir dans le témoin, absente ou plus faible dans l’enceinte privée de CO₂, soutient le rôle du CO₂ dans la production de matière organique. La manipulation des réactifs et du chauffage doit être encadrée."
          },
          {
            type: "rappel",
            titre: "Bilan du chapitre",
            texte: "Les racines absorbent l’eau et des ions dans la solution du sol, particulièrement au niveau de la zone pilifère. L’eau se déplace selon les différences de potentiel hydrique ; les ions sont absorbés sélectivement. Le complexe argilo-humique retient et échange certains cations. L’eau et les ions rejoignent le xylème puis montent vers les feuilles, où une grande quantité d’eau peut être perdue par transpiration. Le CO₂ de l’air fournit le carbone utilisé pour produire de la matière organique par photosynthèse."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: "Application",
        points: 4,
        enonce: "Une plante verte pousse dans un sol humide, à la lumière. Indiquer la source principale : a) de l’eau ; b) des ions nitrate ; c) du carbone incorporé dans ses sucres. Préciser par quel organe chaque ressource entre principalement.",
        correction: "a) L’eau vient de la solution du sol et entre principalement par les racines, notamment la zone pilifère. b) Les nitrates viennent également de la solution du sol et sont absorbés par les racines. c) Le carbone vient principalement du CO₂ atmosphérique, qui entre surtout dans les feuilles par les stomates."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Une cellule végétale est placée dans une solution très concentrée en solutés qui ne traversent pas sa membrane. Prévoir le sens du déplacement net de l’eau et l’aspect possible de la cellule. Que se passe-t-il si on la replace ensuite dans une solution suffisamment diluée ?",
        correction: "Dans la solution très concentrée, l’eau tend à sortir de la cellule par osmose. Le contenu cellulaire se rétracte et peut se décoller de la paroi : c’est la plasmolyse. Dans une solution suffisamment diluée, l’eau tend à rentrer ; si la cellule est encore vivante, elle peut retrouver sa turgescence. Le résultat exact dépend des potentiels hydriques des deux milieux."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Deux plantules comparables disposent de la même quantité d’eau. Pour la première, la zone pilifère est dans l’eau ; pour la seconde, seule l’extrémité de la racine est dans l’eau. La première reste ferme tandis que la seconde se flétrit. Quelle conclusion peut-on proposer ? Citer deux conditions à contrôler.",
        correction: "Le résultat soutient l’idée que la zone pilifère joue un rôle important dans l’absorption d’eau. Il faut notamment contrôler l’éclairement et la température ; les plantules doivent aussi être comparables et l’évaporation directe limitée. Une répétition avec plusieurs plantules rendrait la conclusion plus fiable."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Dans une culture, un ion est proportionnellement plus abondant dans les tissus racinaires que dans la solution nutritive. Que suggère cette observation ? Prouve-t-elle que le transport est actif ?",
        correction: "Elle suggère une absorption ou une accumulation sélective de cet ion. Elle ne prouve pas à elle seule un transport actif : les tissus contiennent plusieurs compartiments et la comparaison des proportions ne mesure pas directement le flux ni la dépense d’énergie. Il faudrait des expériences complémentaires, par exemple étudier l’effet d’une diminution de l’activité respiratoire, en tenant compte des autres effets possibles."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Expliquer comment le complexe argilo-humique peut contribuer à la nutrition minérale. Pourquoi les nitrates sont-ils particulièrement exposés au lessivage ?",
        correction: "Le complexe argilo-humique, généralement chargé négativement, retient des cations comme K⁺ et Ca²⁺. Il peut les échanger avec la solution du sol, où les racines peuvent les prélever : il joue donc un rôle de réserve. Les nitrates NO₃⁻ sont des anions ; ils sont en général moins retenus par ce complexe et peuvent être entraînés avec l’eau qui traverse le sol."
      },
      {
        niveau: "Application",
        points: 4,
        enonce: "Une plante en pot, sol couvert, perd 26 g en 4 h. Un pot témoin comparable sans plante, sol couvert, perd 2 g pendant la même durée. Calculer la perte corrigée puis la perte moyenne par heure. Que représente approximativement cette mesure ?",
        correction: "Perte corrigée : 26 − 2 = 24 g. Perte moyenne : 24 ÷ 4 = 6 g/h. Cette valeur estime la perte d’eau de la plante, principalement par transpiration, dans les conditions de l’expérience. Elle est approximative : la correction du témoin et les autres échanges de matière ne sont pas nécessairement parfaits."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Décrire le trajet d’une molécule d’eau depuis le sol jusqu’à l’air. Nommer les deux types de transit dans la plante et le tissu conducteur emprunté.",
        correction: "L’eau entre dans la racine, notamment au niveau d’un poil absorbant. Elle traverse les tissus racinaires jusqu’au xylème : c’est le transit radial ou horizontal. Elle monte ensuite dans le xylème de la racine et de la tige jusqu’aux feuilles : c’est le transit vertical. Elle peut enfin s’évaporer dans les espaces internes de la feuille et sortir sous forme de vapeur, principalement par les stomates."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Deux plantes comparables sont éclairées et disposent d’eau et d’ions. L’une reçoit de l’air contenant du CO₂ ; l’autre est placée dans une enceinte où le CO₂ est retiré. Après quelques heures, on observe une production d’amidon dans les feuilles de la première, mais très faible dans celles de la seconde. Interpréter ce résultat et préciser le rôle du témoin.",
        correction: "La différence observée soutient l’idée que le CO₂ est nécessaire à une production normale de matière organique par photosynthèse dans ces conditions. Son carbone est incorporé aux molécules organiques à partir desquelles l’amidon peut être formé. La plante recevant du CO₂ constitue le témoin : elle montre que la production d’amidon est possible lorsque ce facteur est disponible. Il faut maintenir les autres conditions comparables et avoir préalablement réduit les réserves d’amidon."
      },
      {
        niveau: "Raisonnement",
        points: 4,
        enonce: "Après un apport excessif de sel, une plante cultivée dans un sol pourtant humide se flétrit. Proposer une explication en utilisant la notion d’osmose.",
        correction: "L’excès de sel diminue la disponibilité de l’eau dans la solution du sol. Le gradient de potentiel hydrique favorable à l’entrée d’eau dans les racines diminue ou peut s’inverser : les cellules absorbent moins d’eau ou en perdent. Elles perdent alors leur turgescence, ce qui contribue au flétrissement. Des effets toxiques directs de certains ions peuvent également intervenir."
      }
    ]
  }
]);
