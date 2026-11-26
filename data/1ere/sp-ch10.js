enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-gaz-parfaits",
    titre: "Chapitre 10 : Gaz parfaits et transformations",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch10-etat-gaz",
        titre: "1. Décrire l'état d'un gaz",
        blocs: [
          {
            type: "introduction",
            titre: "Des particules en mouvement",
            texte: "Un gaz est constitué de particules en mouvement désordonné. Les grandeurs macroscopiques comme la pression, le volume et la température permettent de décrire son état sans suivre chaque particule."
          },
          {
            type: "definition",
            titre: "Variables d'état",
            texte: "Pour une quantité de gaz donnée, on utilise notamment la pression p, le volume V, la température absolue T et la quantité de matière n."
          },
          {
            type: "tableau",
            titre: "Grandeurs et unités SI",
            entetes: ["Grandeur", "Symbole", "Unité SI"],
            lignes: [
              ["Pression", "p", "pascal (Pa)"],
              ["Volume", "V", "mètre cube (m³)"],
              ["Température absolue", "T", "kelvin (K)"],
              ["Quantité de matière", "n", "mole (mol)"]
            ]
          },
          {
            type: "regle",
            titre: "Conversions utiles",
            texte: "T(K) = θ(°C) + 273,15. Un litre vaut 10⁻³ m³ ; un millilitre vaut 10⁻⁶ m³. Un bar vaut 10⁵ Pa."
          },
          {
            type: "exemple",
            titre: "Convertir",
            texte: "Une température de 27 °C correspond à 300,15 K. Un volume de 2 L correspond à 2 × 10⁻³ m³. Une pression de 1,2 bar correspond à 1,2 × 10⁵ Pa."
          },
          {
            type: "remarque",
            titre: "Température dans les formules",
            texte: "Les lois des gaz utilisent la température absolue en kelvins. On ne doit pas remplacer T par une température exprimée en degrés Celsius."
          },
          {
            type: "definition",
            titre: "Modèle du gaz parfait",
            texte: "Le gaz parfait est un modèle dans lequel les particules sont assimilées à des points et les interactions entre elles sont négligées en dehors des collisions. Ce modèle décrit approximativement certains gaz, notamment lorsque leur pression est suffisamment faible."
          }
        ]
      },
      {
        id: "sp1-ch10-equation",
        titre: "2. Équation d'état du gaz parfait",
        blocs: [
          {
            type: "regle",
            titre: "Loi des gaz parfaits",
            texte: "Pour un gaz parfait à l'équilibre : pV = nRT, où R = 8,31 J·mol⁻¹·K⁻¹ environ. Avec cette valeur de R, on utilise p en pascals, V en mètres cubes et T en kelvins."
          },
          {
            type: "methode",
            titre: "Utiliser l'équation",
            texte: "1. Identifier p, V, n et T. 2. Convertir les données en unités compatibles. 3. Isoler la grandeur cherchée dans pV = nRT. 4. Effectuer le calcul et vérifier l'unité et l'ordre de grandeur."
          },
          {
            type: "exemple",
            titre: "Calculer un volume",
            texte: "Pour n = 1 mol, T = 300 K et p = 1,0 × 10⁵ Pa, on obtient V = nRT/p = 1 × 8,31 × 300/(1,0 × 10⁵) = 0,02493 m³, soit environ 24,9 L."
          },
          {
            type: "regle",
            titre: "Comparer deux états",
            texte: "Pour une quantité fixe d'un même gaz parfait, pV/T est constant. Entre deux états d'équilibre, p₁V₁/T₁ = p₂V₂/T₂, avec les températures en kelvins."
          },
          {
            type: "remarque",
            titre: "Quantité fixe",
            texte: "La relation p₁V₁/T₁ = p₂V₂/T₂ suppose que la quantité de gaz ne change pas. En cas de fuite ou d'ajout de gaz, il faut utiliser l'équation d'état en tenant compte de n dans chaque état."
          }
        ]
      },
      {
        id: "sp1-ch10-transformations",
        titre: "3. Transformations particulières",
        blocs: [
          {
            type: "definition",
            titre: "Transformation isotherme",
            texte: "Une transformation est isotherme si la température reste constante. Pour une quantité fixe de gaz parfait, pV = constante : si le volume double, la pression est divisée par deux."
          },
          {
            type: "definition",
            titre: "Transformation isobare",
            texte: "Une transformation est isobare si la pression reste constante. Pour une quantité fixe de gaz parfait, V/T = constante : le volume est proportionnel à la température absolue."
          },
          {
            type: "definition",
            titre: "Transformation isochore",
            texte: "Une transformation est isochore si le volume reste constant. Pour une quantité fixe de gaz parfait, p/T = constante : la pression est proportionnelle à la température absolue."
          },
          {
            type: "tableau",
            titre: "Résumé pour une quantité fixe de gaz parfait",
            entetes: ["Transformation", "Grandeur constante", "Relation"],
            lignes: [
              ["Isotherme", "T", "p₁V₁ = p₂V₂"],
              ["Isobare", "p", "V₁/T₁ = V₂/T₂"],
              ["Isochore", "V", "p₁/T₁ = p₂/T₂"]
            ]
          },
          {
            type: "schema",
            titre: "Transformations sur un diagramme pression-volume",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 290' role='img' aria-label='Diagramme pression-volume : une isochore est verticale, une isobare horizontale et une isotherme décroissante. Les trois courbes se croisent au même point.'><rect width='460' height='290' fill='white'/><defs><marker id='sp1ch10axe' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#333'/></marker></defs><line x1='60' y1='230' x2='430' y2='230' stroke='#333' stroke-width='2' marker-end='url(#sp1ch10axe)'/><line x1='60' y1='230' x2='60' y2='20' stroke='#333' stroke-width='2' marker-end='url(#sp1ch10axe)'/><line x1='200' y1='35' x2='200' y2='230' stroke='#1769aa' stroke-width='2'/><line x1='60' y1='140' x2='410' y2='140' stroke='#c43b35' stroke-width='2'/><path d='M130 50 C145 90 165 117 200 140 C250 173 315 187 400 195' fill='none' stroke='#27834b' stroke-width='3'/><circle cx='200' cy='140' r='4' fill='#333'/><text x='432' y='235' font-size='14'>V</text><text x='45' y='20' font-size='14'>p</text><text x='208' y='48' font-size='13' fill='#1769aa'>isochore</text><text x='320' y='130' font-size='13' fill='#c43b35'>isobare</text><text x='315' y='211' font-size='13' fill='#27834b'>isotherme</text></svg>",
            legende: "Représentation qualitative : à volume constant, la courbe est verticale ; à pression constante, elle est horizontale ; à température constante, p diminue lorsque V augmente."
          },
          {
            type: "exemple",
            titre: "Compression isotherme",
            texte: "Une quantité fixe de gaz parfait passe de V₁ = 4 L à V₂ = 2 L à température constante. Si p₁ = 1 bar, alors p₂ = p₁V₁/V₂ = 1 × 4/2 = 2 bar."
          },
          {
            type: "exemple",
            titre: "Échauffement isochore",
            texte: "À volume constant, un gaz passe de 300 K à 360 K. Si sa pression initiale est 100 kPa, sa pression finale vaut p₂ = 100 × 360/300 = 120 kPa."
          }
        ]
      },
      {
        id: "sp1-ch10-matiere",
        titre: "4. Quantité de matière et masse",
        blocs: [
          {
            type: "regle",
            titre: "Masse et quantité de matière",
            texte: "La quantité de matière est n = m/M, où m est la masse du gaz et M sa masse molaire. Il faut utiliser des unités de masse compatibles, par exemple m en grammes et M en g/mol."
          },
          {
            type: "exemple",
            titre: "Calculer une quantité de matière",
            texte: "Pour 8 g de dioxygène O₂, de masse molaire M = 32 g/mol, la quantité de matière vaut n = 8/32 = 0,25 mol."
          },
          {
            type: "methode",
            titre: "Relier masse et état du gaz",
            texte: "Si la masse est donnée, calculer d'abord n = m/M. Convertir ensuite les autres grandeurs en unités SI et utiliser pV = nRT."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les transformations décrites sont des modèles d'étude. Un récipient fermé soumis à une élévation de température peut devenir dangereux si sa pression augmente ; il ne faut pas réaliser de chauffage d'un récipient fermé."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Convertir 20 °C en kelvins et 3 L en mètres cubes.",
        correction: "T = 20 + 273,15 = 293,15 K. Le volume vaut 3 L = 3 × 10⁻³ m³."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une quantité fixe de gaz parfait subit une transformation isochore. Quelle grandeur reste constante ?",
        correction: "Une transformation isochore se fait à volume constant."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un gaz parfait de quantité n = 2 mol est à la température T = 300 K et à la pression p = 1,0 × 10⁵ Pa. Calculer son volume. Prendre R = 8,31 J·mol⁻¹·K⁻¹.",
        correction: "V = nRT/p = 2 × 8,31 × 300/(1,0 × 10⁵) = 0,04986 m³, soit environ 49,9 L."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une quantité fixe de gaz parfait est comprimée à température constante. Sa pression initiale est 100 kPa et son volume passe de 6 L à 3 L. Calculer la pression finale.",
        correction: "La transformation est isotherme : p₁V₁ = p₂V₂. Donc p₂ = 100 × 6/3 = 200 kPa."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "À pression constante, une quantité fixe de gaz parfait occupe 4 L à 300 K. Quel volume occupe-t-elle à 450 K ?",
        correction: "À pression constante, V₁/T₁ = V₂/T₂. Donc V₂ = V₁T₂/T₁ = 4 × 450/300 = 6 L."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une masse de 16 g de dioxygène O₂ est à 300 K dans un volume de 12,465 L. On assimile le gaz à un gaz parfait. Données : M(O₂) = 32 g/mol et R = 8,31 J·mol⁻¹·K⁻¹. Calculer sa pression.",
        correction: "n = m/M = 16/32 = 0,5 mol. Le volume vaut 12,465 L = 0,012465 m³. Ainsi p = nRT/V = 0,5 × 8,31 × 300/0,012465 = 1,0 × 10⁵ Pa."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une quantité fixe de gaz parfait passe d'un état p₁ = 100 kPa, V₁ = 3 L, T₁ = 300 K à un état V₂ = 2 L, T₂ = 400 K. Calculer p₂.",
        correction: "Pour une quantité fixe, p₁V₁/T₁ = p₂V₂/T₂. Donc p₂ = p₁V₁T₂/(T₁V₂) = 100 × 3 × 400/(300 × 2) = 200 kPa."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un gaz parfait est enfermé sans fuite dans un récipient rigide. Sa pression initiale est 150 kPa à 27 °C. Calculer sa pression à 127 °C. On utilisera T(K) = θ(°C) + 273,15.",
        correction: "Le récipient est rigide : la transformation est isochore. T₁ = 300,15 K et T₂ = 400,15 K. Donc p₂ = p₁T₂/T₁ = 150 × 400,15/300,15 ≈ 200 kPa. La température doit être exprimée en kelvins, et non directement en degrés Celsius."
      }
    ]
  }
]);
