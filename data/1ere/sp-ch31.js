enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch31",
    titre: "Chapitre 31 : Électrolyse et corrosion",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch31-electrolyse",
        titre: "1. Principe de l’électrolyse",
        blocs: [
          {
            type: "introduction",
            titre: "Une transformation imposée",
            texte: "Dans une pile qui débite, une réaction spontanée fournit de l’énergie électrique. Lors d’une électrolyse, un générateur fournit de l’énergie électrique pour imposer une transformation chimique non spontanée dans les conditions considérées."
          },
          {
            type: "definition",
            titre: "Électrolyseur",
            texte: "Un électrolyseur comporte deux électrodes au contact d’un électrolyte, reliées à un générateur. L’électrolyte contient des ions mobiles qui permettent le transport de charge dans le milieu."
          },
          {
            type: "regle",
            titre: "Anode et cathode",
            texte: "Comme dans une pile, l’oxydation a lieu à l’anode et la réduction à la cathode. Dans un électrolyseur relié à un générateur qui impose l’électrolyse, l’anode est reliée à la borne positive et la cathode à la borne négative."
          },
          {
            type: "schema",
            titre: "Schéma général d’une électrolyse",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 340' role='img' aria-label='Un générateur alimente deux électrodes plongées dans un électrolyte. L’anode reliée à la borne positive est le siège d’une oxydation ; la cathode reliée à la borne négative est le siège d’une réduction.'><rect x='275' y='20' width='170' height='55' rx='6' fill='#f3f3f3' stroke='#333' stroke-width='3'/><text x='360' y='53' text-anchor='middle' font-size='18'>générateur</text><text x='295' y='92' text-anchor='middle' font-size='19'>+</text><text x='425' y='92' text-anchor='middle' font-size='19'>−</text><path d='M295 75 V110 H180 V170 M425 75 V110 H540 V170' fill='none' stroke='#222' stroke-width='3'/><path d='M105 145 V270 Q105 285 120 285 H600 Q615 285 615 270 V145' fill='#e8f5ff' stroke='#555' stroke-width='3'/><rect x='170' y='160' width='20' height='90' fill='#999' stroke='#333'/><rect x='530' y='160' width='20' height='90' fill='#999' stroke='#333'/><text x='180' y='310' text-anchor='middle' font-size='16'>anode : oxydation</text><text x='540' y='310' text-anchor='middle' font-size='16'>cathode : réduction</text><text x='360' y='235' text-anchor='middle' font-size='17'>électrolyte</text><line x1='260' y1='190' x2='210' y2='190' stroke='#a33' stroke-width='2'/><polygon points='210,190 222,183 222,197' fill='#a33'/><text x='245' y='175' text-anchor='middle' font-size='15'>anions</text><line x1='460' y1='190' x2='510' y2='190' stroke='#267' stroke-width='2'/><polygon points='510,190 498,183 498,197' fill='#267'/><text x='475' y='175' text-anchor='middle' font-size='15'>cations</text></svg>",
            legende: "Les ions négatifs migrent vers l’anode et les ions positifs vers la cathode. Les réactions effectives dépendent des espèces et des électrodes présentes."
          },
          {
            type: "remarque",
            titre: "Une distinction importante",
            texte: "Les noms anode et cathode dépendent des réactions : oxydation à l’anode, réduction à la cathode. Les signes des électrodes d’un électrolyseur sont opposés à ceux d’une pile qui débite."
          }
        ]
      },

      {
        id: "sp1-ch31-exemple",
        titre: "2. Exemple : dépôt de cuivre",
        blocs: [
          {
            type: "definition",
            titre: "Réduction à la cathode",
            texte: "Dans certaines conditions, les ions cuivre(II) d’une solution peuvent être réduits à la cathode : Cu²⁺ + 2 e⁻ → Cu. Le cuivre métallique peut alors se déposer sur cette électrode."
          },
          {
            type: "exemple",
            titre: "Avec une anode de cuivre",
            texte: "Si l’anode est en cuivre et si les réactions considérées sont seules en jeu, elle peut s’oxyder : Cu → Cu²⁺ + 2 e⁻. Le cuivre dissous à l’anode compense alors, en quantité de matière, le cuivre déposé à la cathode."
          },
          {
            type: "remarque",
            titre: "Les produits dépendent du montage",
            texte: "On ne peut pas déduire systématiquement tous les produits d’une électrolyse à partir du seul nom de la solution : la nature des électrodes, les espèces présentes et les conditions interviennent."
          },
          {
            type: "definition",
            titre: "Application",
            texte: "L’électrodéposition permet de recouvrir un objet d’une couche métallique. À l’échelle industrielle, elle est réalisée avec des installations et des règles de sécurité adaptées."
          }
        ]
      },

      {
        id: "sp1-ch31-faraday",
        titre: "3. Quantité d’électricité et quantité déposée",
        blocs: [
          {
            type: "regle",
            titre: "Charge transférée",
            texte: "Pour un courant constant I pendant une durée Δt : Q = IΔt. La quantité de matière d’électrons transférés vaut ne = Q/F, avec F ≈ 96 500 C·mol⁻¹."
          },
          {
            type: "regle",
            titre: "Lien avec la demi-équation",
            texte: "Si la réduction est Mᶻ⁺ + z e⁻ → M et si toute la charge sert à cette réaction, une mole de métal déposée nécessite z moles d’électrons : n(M) = ne/z = Q/(zF). La masse déposée est m(M) = n(M)M(M)."
          },
          {
            type: "exemple",
            titre: "Dépôt de cuivre",
            texte: "Un courant constant de 0,50 A passe pendant 1 930 s. Toute la charge sert à Cu²⁺ + 2 e⁻ → Cu. Avec F = 96 500 C·mol⁻¹ : Q = 0,50 × 1 930 = 965 C, ne = 965/96 500 = 0,010 mol et n(Cu) = 0,010/2 = 0,0050 mol."
          },
          {
            type: "methode",
            titre: "Calculer une masse déposée",
            texte: "1. Convertir la durée en secondes. 2. Calculer Q = IΔt. 3. Trouver ne = Q/F. 4. Utiliser le coefficient des électrons de la demi-équation. 5. Multiplier la quantité de métal par sa masse molaire."
          },
          {
            type: "remarque",
            titre: "Rendement électrique",
            texte: "Si une partie de la charge sert à d’autres réactions, la quantité de métal réellement déposée est inférieure à celle calculée en supposant que toute la charge sert au dépôt."
          }
        ]
      },

      {
        id: "sp1-ch31-corrosion",
        titre: "4. Corrosion des métaux",
        blocs: [
          {
            type: "definition",
            titre: "Corrosion",
            texte: "La corrosion est une dégradation progressive d’un matériau due à des réactions avec son environnement. Pour un métal, elle implique souvent son oxydation en ions métalliques."
          },
          {
            type: "exemple",
            titre: "Corrosion du fer",
            texte: "Dans un milieu humide contenant du dioxygène, le fer peut s’oxyder : Fe → Fe²⁺ + 2 e⁻. D’autres réactions, impliquant notamment l’eau et le dioxygène, conduisent à la formation de rouille. La rouille est un mélange de composés et sa formation ne se résume pas à cette seule demi-équation."
          },
          {
            type: "schema",
            titre: "Corrosion du fer en milieu humide",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 250' role='img' aria-label='Sur une surface de fer humide, une zone anodique libère des ions fer et des électrons. Les électrons circulent dans le métal vers une zone cathodique où du dioxygène est réduit.'><rect x='65' y='135' width='520' height='55' fill='#aaa' stroke='#555' stroke-width='3'/><path d='M100 135 Q325 25 550 135 Z' fill='#cfeaff' fill-opacity='0.7' stroke='#267' stroke-width='2'/><text x='180' y='100' text-anchor='middle' font-size='15'>zone anodique</text><text x='180' y='120' text-anchor='middle' font-size='15'>Fe → Fe²⁺ + 2 e⁻</text><text x='470' y='100' text-anchor='middle' font-size='15'>zone cathodique</text><text x='470' y='120' text-anchor='middle' font-size='15'>réduction de O₂</text><line x1='220' y1='163' x2='430' y2='163' stroke='#222' stroke-width='3'/><polygon points='430,163 418,156 418,170' fill='#222'/><text x='325' y='155' text-anchor='middle' font-size='15'>électrons dans le fer</text><text x='325' y='220' text-anchor='middle' font-size='16'>fer</text></svg>",
            legende: "L’eau contenant des ions permet le transport de charge entre les zones. La corrosion associe une oxydation et une réduction."
          },
          {
            type: "remarque",
            titre: "Équation cathodique possible",
            texte: "En milieu neutre ou basique, une réduction possible du dioxygène est O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻. Les conditions réelles et les produits de corrosion peuvent être plus complexes."
          }
        ]
      },

      {
        id: "sp1-ch31-protection",
        titre: "5. Protection contre la corrosion",
        blocs: [
          {
            type: "regle",
            titre: "Isoler le métal",
            texte: "Une peinture ou un revêtement adapté peut limiter le contact du métal avec l’eau et le dioxygène. Si le revêtement est abîmé, la protection peut devenir insuffisante."
          },
          {
            type: "definition",
            titre: "Protection par anode sacrificielle",
            texte: "On peut relier électriquement le métal à protéger à un métal plus facilement oxydable dans les conditions considérées, par exemple le zinc pour protéger l’acier. Le zinc s’oxyde préférentiellement : il constitue l’anode sacrificielle et doit être remplacé lorsqu’il est consommé."
          },
          {
            type: "exemple",
            titre: "Zinc et acier",
            texte: "Dans une protection adaptée par le zinc, le zinc cède des électrons et limite l’oxydation du fer. L’efficacité dépend notamment du contact électrique et du milieu."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Une électrolyse peut produire des substances dangereuses et les solutions utilisées peuvent être corrosives ou toxiques. Ne réalise pas d’électrolyse avec des produits domestiques ou une source électrique inconnue."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Lors d’une électrolyse, à quelle électrode se produit la réduction ? Cette électrode est-elle reliée à la borne positive ou négative du générateur ?",
        correction: "La réduction se produit à la cathode. Dans l’électrolyseur considéré, elle est reliée à la borne négative du générateur."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un électrolyte soumis à l’électrolyse, vers quelle électrode migrent les cations ? Vers quelle électrode migrent les anions ?",
        correction: "Les cations migrent vers la cathode négative ; les anions migrent vers l’anode positive."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "La demi-équation d’un dépôt de cuivre est Cu²⁺ + 2 e⁻ → Cu. Combien de moles d’électrons faut-il pour déposer 0,10 mol de cuivre ?",
        correction: "Il faut 2 mol d’électrons pour 1 mol de cuivre. Pour 0,10 mol de cuivre, il faut 0,20 mol d’électrons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un courant constant de 0,40 A traverse un électrolyseur pendant 15 minutes. Calcule la charge transférée.",
        correction: "Δt = 15 × 60 = 900 s. Q = IΔt = 0,40 × 900 = 360 C."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un dépôt de cuivre, toute la charge sert à la réaction Cu²⁺ + 2 e⁻ → Cu. Un courant constant de 1,0 A passe pendant 965 s. On donne F = 96 500 C·mol⁻¹. Calcule les quantités d’électrons transférés et de cuivre déposé.",
        correction: "Q = IΔt = 1,0 × 965 = 965 C. ne = Q/F = 965/96 500 = 0,010 mol. Il faut deux électrons par ion Cu²⁺ : n(Cu) = 0,010/2 = 0,0050 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Explique pourquoi une plaque d’acier peut être protégée par une anode sacrificielle en zinc. Quel métal est consommé préférentiellement ?",
        correction: "Dans les conditions adaptées, le zinc relié électriquement à l’acier s’oxyde plus facilement que le fer. Il cède des électrons et limite l’oxydation du fer. Le zinc est consommé préférentiellement : il faut le remplacer lorsqu’il est usé."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un dépôt de cuivre est obtenu par Cu²⁺ + 2 e⁻ → Cu. Un courant constant I = 2,0 A circule pendant 30 minutes ; toute la charge sert à ce dépôt. Données : F = 96 500 C·mol⁻¹ et M(Cu) = 63,5 g·mol⁻¹. Calcule la masse de cuivre déposée.",
        correction: "Δt = 1 800 s et Q = IΔt = 2,0 × 1 800 = 3 600 C. ne = 3 600/96 500 ≈ 0,0373 mol. Donc n(Cu) = ne/2 ≈ 0,0187 mol. La masse est m = nM ≈ 0,0187 × 63,5 ≈ 1,18 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un métal M est déposé selon M³⁺ + 3 e⁻ → M. Le courant constant vaut 1,5 A et toute la charge sert au dépôt. Données : F = 96 500 C·mol⁻¹ et M(M) = 27 g·mol⁻¹. Quelle durée faut-il pour déposer 0,27 g de métal ?",
        correction: "n(M) = m/M = 0,27/27 = 0,010 mol. Il faut ne = 3 × 0,010 = 0,030 mol d’électrons. Q = neF = 0,030 × 96 500 = 2 895 C. La durée est Δt = Q/I = 2 895/1,5 = 1 930 s, soit environ 32 min 10 s."
      }
    ]
  }
]);
