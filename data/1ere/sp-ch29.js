enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch29",
    titre: "Chapitre 29 : Dosages d’oxydoréduction",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch29-principe",
        titre: "1. Principe d’un dosage",
        blocs: [
          {
            type: "introduction",
            titre: "Déterminer une concentration",
            texte: "Un dosage permet de déterminer la quantité ou la concentration d’une espèce dans un échantillon. Dans un dosage par titrage, on utilise une réaction avec une solution de concentration connue."
          },
          {
            type: "definition",
            titre: "Solution titrée et solution titrante",
            texte: "La solution titrée contient l’espèce dont on cherche la quantité ou la concentration. La solution titrante contient le réactif ajouté, dont la concentration est connue."
          },
          {
            type: "definition",
            titre: "Réaction support",
            texte: "Pour exploiter un titrage, on choisit une réaction suffisamment rapide, totale dans les conditions du dosage et dont l’équation est connue. Dans un dosage redox, cette réaction est une oxydoréduction."
          },
          {
            type: "schema",
            titre: "Dispositif de titrage",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300' role='img' aria-label='Une burette contenant la solution titrante verse progressivement du liquide dans un erlenmeyer contenant un volume connu de solution titrée.'><rect x='280' y='20' width='36' height='145' fill='#dcefff' stroke='#333' stroke-width='3'/><line x1='280' y1='65' x2='316' y2='65' stroke='#267' stroke-width='2'/><line x1='298' y1='165' x2='298' y2='190' stroke='#333' stroke-width='3'/><line x1='280' y1='177' x2='316' y2='177' stroke='#333' stroke-width='3'/><path d='M298 195 C290 205 290 210 298 213 C306 210 306 205 298 195' fill='#267'/><path d='M260 220 L245 270 Q245 280 255 280 H345 Q355 280 355 270 L340 220' fill='#e9f6ff' stroke='#333' stroke-width='3'/><line x1='270' y1='250' x2='330' y2='250' stroke='#267' stroke-width='2'/><text x='330' y='65' font-size='16'>solution titrante</text><text x='365' y='260' font-size='16'>solution titrée</text><text x='325' y='298' text-anchor='middle' font-size='15'>Le volume versé est lu sur la burette.</text></svg>",
            legende: "Schéma de principe : la solution titrante est ajoutée à un volume connu de solution titrée. Le repérage de l’équivalence dépend du dosage."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ce dispositif est présenté pour comprendre le principe. Les dosages redox peuvent utiliser des réactifs corrosifs ou toxiques : ne les réalise pas sans encadrement et matériel adaptés."
          }
        ]
      },

      {
        id: "sp1-ch29-equivalence",
        titre: "2. Équivalence et relation stœchiométrique",
        blocs: [
          {
            type: "definition",
            titre: "Équivalence",
            texte: "À l’équivalence, les réactifs titré et titrant ont été introduits dans les proportions de l’équation de réaction. La quantité initiale de l’espèce titrée est alors reliée à la quantité de titrant versée."
          },
          {
            type: "regle",
            titre: "Relation générale",
            texte: "Pour une réaction a A + b B → produits, où A est l’espèce titrée et B l’espèce titrante, à l’équivalence : nA,initial/a = nB,versé/b. Si les solutions sont homogènes, nA,initial = CA VA et nB,versé = CB VE."
          },
          {
            type: "methode",
            titre: "Résoudre un dosage",
            texte: "1. Écrire l’équation équilibrée et repérer les coefficients a et b. 2. Écrire nA/a = nB/b à l’équivalence. 3. Remplacer les quantités dissoutes par C × V. 4. Isoler la concentration recherchée. 5. Utiliser des volumes dans la même unité pour le rapport, ou en litres pour calculer les quantités en moles."
          },
          {
            type: "exemple",
            titre: "Cas d’un rapport 1:1",
            texte: "Une espèce A réagit avec B selon A + B → produits. On titre VA = 20,0 mL de solution A par une solution B de concentration CB = 0,10 mol·L⁻¹. L’équivalence est obtenue pour VE = 12,0 mL. CA VA = CB VE, donc CA = 0,10 × 12,0/20,0 = 0,060 mol·L⁻¹."
          },
          {
            type: "remarque",
            titre: "Équivalence et repérage",
            texte: "L’équivalence est définie par les proportions stœchiométriques. Le changement de couleur ou le signal mesuré sert à la repérer ; le point observé peut différer légèrement de l’équivalence idéale."
          }
        ]
      },

      {
        id: "sp1-ch29-permanganate",
        titre: "3. Dosage du fer(II) par le permanganate",
        blocs: [
          {
            type: "definition",
            titre: "Réaction en milieu acide",
            texte: "En milieu acide, les ions permanganate MnO₄⁻ peuvent oxyder les ions fer(II) Fe²⁺. L’équation est : MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺."
          },
          {
            type: "regle",
            titre: "Relation à l’équivalence",
            texte: "L’équation montre qu’une mole de MnO₄⁻ réagit avec cinq moles de Fe²⁺. Si les ions Fe²⁺ sont titrés par le permanganate : n(Fe²⁺)initial = 5 n(MnO₄⁻)versé à l’équivalence."
          },
          {
            type: "exemple",
            titre: "Calcul de concentration",
            texte: "On titre 20,0 mL d’une solution de Fe²⁺ par une solution de permanganate à 0,0200 mol·L⁻¹. L’équivalence est atteinte pour 10,0 mL. n(MnO₄⁻) = 0,0200 × 0,0100 = 2,00 × 10⁻⁴ mol. Donc n(Fe²⁺) = 5 × 2,00 × 10⁻⁴ = 1,00 × 10⁻³ mol et C(Fe²⁺) = 1,00 × 10⁻³/0,0200 = 0,0500 mol·L⁻¹."
          },
          {
            type: "remarque",
            titre: "Repérage coloré",
            texte: "Dans les conditions adaptées, l’apparition persistante d’une légère coloration due à un très faible excès de permanganate peut servir à repérer la fin du titrage. Cette observation est proche de l’équivalence, sans lui être rigoureusement identique."
          }
        ]
      },

      {
        id: "sp1-ch29-dilution",
        titre: "4. Dilution avant dosage",
        blocs: [
          {
            type: "definition",
            titre: "Facteur de dilution",
            texte: "Diluer une solution consiste à ajouter du solvant à un prélèvement. Si le facteur de dilution est F, la concentration de la solution diluée vaut Cdiluée = Cmère/F."
          },
          {
            type: "regle",
            titre: "Retrouver la solution initiale",
            texte: "Si le dosage détermine la concentration Cdiluée d’une solution obtenue par une dilution de facteur F, alors Cmère = F × Cdiluée."
          },
          {
            type: "exemple",
            titre: "Retour à la solution mère",
            texte: "Une solution a été diluée 10 fois. Le dosage de la solution diluée donne Cdiluée = 0,025 mol·L⁻¹. La concentration initiale vaut Cmère = 10 × 0,025 = 0,25 mol·L⁻¹."
          },
          {
            type: "methode",
            titre: "Ne pas oublier la dilution",
            texte: "1. Déterminer d’abord la concentration de la solution effectivement titrée. 2. Vérifier si elle provient d’une dilution. 3. Appliquer le facteur de dilution pour retrouver la concentration de la solution initiale."
          },
          {
            type: "remarque",
            titre: "Erreurs fréquentes",
            texte: "Ne pas oublier les coefficients de l’équation, ne pas confondre le volume prélevé avec le volume versé à l’équivalence, et convertir les millilitres en litres lorsqu’on calcule une quantité de matière."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Lors d’un titrage, quelle solution contient le réactif de concentration connue : la solution titrée ou la solution titrante ?",
        correction: "La solution titrante contient le réactif dont la concentration est connue."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Pour la réaction A + 2 B → produits, A est titré par B. À l’équivalence, exprime nB,versé en fonction de nA,initial.",
        correction: "L’équation indique qu’une mole de A réagit avec deux moles de B. À l’équivalence, nB,versé = 2 nA,initial."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un volume VA = 20,0 mL de solution A est titré par une solution B de concentration CB = 0,10 mol·L⁻¹. La réaction est A + B → produits. L’équivalence est obtenue pour VE = 15,0 mL. Calcule CA.",
        correction: "À l’équivalence, CA VA = CB VE. Donc CA = 0,10 × 15,0/20,0 = 0,075 mol·L⁻¹."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une solution mère est diluée 20 fois. La concentration de la solution diluée est 0,015 mol·L⁻¹. Calcule la concentration de la solution mère.",
        correction: "Cmère = F × Cdiluée = 20 × 0,015 = 0,30 mol·L⁻¹."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "En milieu acide, MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺. On titre 25,0 mL d’une solution de Fe²⁺ par une solution de permanganate à 0,0200 mol·L⁻¹. L’équivalence est atteinte pour 10,0 mL. Calcule la concentration en Fe²⁺.",
        correction: "n(MnO₄⁻) = 0,0200 × 0,0100 = 2,00 × 10⁻⁴ mol. À l’équivalence, n(Fe²⁺) = 5 n(MnO₄⁻) = 1,00 × 10⁻³ mol. Donc C(Fe²⁺) = 1,00 × 10⁻³/0,0250 = 0,0400 mol·L⁻¹."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une espèce A est titrée par B selon 2 A + 3 B → produits. Un prélèvement de 10,0 mL de A atteint l’équivalence après ajout de 12,0 mL de B à 0,0500 mol·L⁻¹. Calcule la concentration de A.",
        correction: "nB = 0,0500 × 0,0120 = 6,00 × 10⁻⁴ mol. À l’équivalence, nA/2 = nB/3, donc nA = (2/3)nB = 4,00 × 10⁻⁴ mol. Ainsi CA = 4,00 × 10⁻⁴/0,0100 = 0,0400 mol·L⁻¹."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une solution mère contenant Fe²⁺ est diluée 10 fois. On titre 20,0 mL de la solution diluée par une solution de MnO₄⁻ à 0,0100 mol·L⁻¹. L’équivalence est obtenue pour 12,0 mL. En milieu acide, la réaction est MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺. Détermine les concentrations en Fe²⁺ de la solution diluée puis de la solution mère.",
        correction: "n(MnO₄⁻) = 0,0100 × 0,0120 = 1,20 × 10⁻⁴ mol. À l’équivalence, n(Fe²⁺) = 5 × 1,20 × 10⁻⁴ = 6,00 × 10⁻⁴ mol. Cdiluée = 6,00 × 10⁻⁴/0,0200 = 0,0300 mol·L⁻¹. La solution mère étant dix fois plus concentrée : Cmère = 0,300 mol·L⁻¹."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un prélèvement de 15,0 mL d’une solution contenant Fe²⁺ est titré en milieu acide par une solution de MnO₄⁻ à 0,0250 mol·L⁻¹. La réaction est MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺. Le volume à l’équivalence est 9,60 mL. Calcule la concentration en Fe²⁺, puis la quantité de Fe²⁺ contenue dans 250 mL de cette solution homogène.",
        correction: "n(MnO₄⁻) = 0,0250 × 0,00960 = 2,40 × 10⁻⁴ mol. Dans le prélèvement, n(Fe²⁺) = 5 × 2,40 × 10⁻⁴ = 1,20 × 10⁻³ mol. C = 1,20 × 10⁻³/0,0150 = 0,0800 mol·L⁻¹. Dans 250 mL : n = CV = 0,0800 × 0,250 = 0,0200 mol."
      }
    ]
  }
]);
