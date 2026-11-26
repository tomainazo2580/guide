enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch23",
    titre: "Chapitre 23 : Benzène et hydrocarbures aromatiques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch23-benzene",
        titre: "1. La molécule de benzène",
        blocs: [
          {
            type: "introduction",
            titre: "Une structure particulière",
            texte: "Le benzène est un hydrocarbure qui possède six atomes de carbone disposés en cycle. Il sert de référence pour étudier une importante famille de composés : les composés aromatiques."
          },
          {
            type: "definition",
            titre: "Benzène",
            texte: "Le benzène a pour formule brute C₆H₆. Sa molécule est plane : ses six carbones forment un hexagone et chacun porte un atome d’hydrogène."
          },
          {
            type: "schema",
            titre: "Deux représentations du benzène",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 260' role='img' aria-label='Deux représentations du benzène : un hexagone avec trois doubles liaisons alternées, puis un hexagone avec un cercle intérieur représentant la délocalisation des électrons.'><text x='155' y='28' text-anchor='middle' font-size='18'>Formule de Kekulé</text><polygon points='155,55 230,98 230,184 155,227 80,184 80,98' fill='none' stroke='#222' stroke-width='3'/><line x1='164' y1='67' x2='216' y2='97' stroke='#222' stroke-width='2'/><line x1='216' y1='109' x2='216' y2='175' stroke='#222' stroke-width='2' opacity='0'/><line x1='218' y1='178' x2='163' y2='210' stroke='#222' stroke-width='2'/><line x1='92' y1='107' x2='92' y2='175' stroke='#222' stroke-width='2'/><text x='465' y='28' text-anchor='middle' font-size='18'>Représentation avec cercle</text><polygon points='465,55 540,98 540,184 465,227 390,184 390,98' fill='none' stroke='#222' stroke-width='3'/><circle cx='465' cy='141' r='48' fill='none' stroke='#267' stroke-width='3'/></svg>",
            legende: "Chaque sommet représente un carbone ; les hydrogènes ne sont pas dessinés. Le cercle indique la délocalisation des électrons sur le cycle."
          },
          {
            type: "definition",
            titre: "Délocalisation",
            texte: "Les électrons associés aux liaisons π du benzène sont délocalisés sur l’ensemble du cycle. Les six liaisons carbone-carbone ont la même longueur : le benzène réel ne possède pas trois liaisons simples et trois doubles fixes."
          },
          {
            type: "remarque",
            titre: "À propos du mot « aromatique »",
            texte: "En chimie, « aromatique » désigne une catégorie structurale ; cela ne signifie pas qu’un composé est agréable à sentir ou sans danger."
          }
        ]
      },

      {
        id: "sp1-ch23-derives",
        titre: "2. Dérivés du benzène et nomenclature",
        blocs: [
          {
            type: "definition",
            titre: "Dérivé substitué",
            texte: "Un dérivé substitué du benzène peut être obtenu en remplaçant formellement un ou plusieurs hydrogènes du cycle par d’autres atomes ou groupes d’atomes."
          },
          {
            type: "tableau",
            titre: "Exemples de dérivés monosubstitués",
            entetes: ["Groupe lié au cycle", "Nom", "Formule brute"],
            lignes: [
              ["–CH₃", "Méthylbenzène ou toluène", "C₇H₈"],
              ["–Cl", "Chlorobenzène", "C₆H₅Cl"],
              ["–NO₂", "Nitrobenzène", "C₆H₅NO₂"]
            ]
          },
          {
            type: "regle",
            titre: "Deux substituants",
            texte: "Avec deux substituants, on numérote les carbones du cycle pour indiquer leurs positions relatives. Les positions 1,2 sont dites ortho (o-), les positions 1,3 méta (m-) et les positions 1,4 para (p-)."
          },
          {
            type: "schema",
            titre: "Positions relatives de deux substituants",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 250' role='img' aria-label='Cycle benzénique numéroté de 1 à 6 : un second substituant en position 2 est ortho, en position 3 méta et en position 4 para par rapport au premier en position 1.'><polygon points='310,35 400,87 400,177 310,229 220,177 220,87' fill='none' stroke='#222' stroke-width='3'/><circle cx='310' cy='132' r='50' fill='none' stroke='#267' stroke-width='3'/><text x='310' y='25' text-anchor='middle' font-size='18'>1 : premier substituant</text><text x='415' y='90' font-size='17'>2 : ortho</text><text x='415' y='185' font-size='17'>3 : méta</text><text x='310' y='248' text-anchor='middle' font-size='17'>4 : para</text><text x='195' y='185' text-anchor='end' font-size='17'>5</text><text x='195' y='90' text-anchor='end' font-size='17'>6</text></svg>",
            legende: "Les positions sont repérées relativement au substituant placé en 1. Dans ce dessin, 2 et 6 sont équivalentes, de même que 3 et 5."
          },
          {
            type: "exemple",
            titre: "Dichlorobenzènes",
            texte: "Deux atomes de chlore fixés sur des carbones voisins donnent le 1,2-dichlorobenzène, aussi appelé ortho-dichlorobenzène. Sur les positions 1 et 3, on obtient l’isomère méta ; sur 1 et 4, l’isomère para."
          },
          {
            type: "remarque",
            titre: "Hydrocarbure ou non ?",
            texte: "Le toluène ne contient que du carbone et de l’hydrogène : c’est un hydrocarbure aromatique. Le chlorobenzène et le nitrobenzène sont des composés aromatiques, mais pas des hydrocarbures, car ils contiennent d’autres éléments."
          }
        ]
      },

      {
        id: "sp1-ch23-substitution",
        titre: "3. Réactions de substitution",
        blocs: [
          {
            type: "definition",
            titre: "Substitution",
            texte: "Une substitution est une transformation au cours de laquelle un atome ou groupe d’atomes d’une molécule est remplacé par un autre. Le cycle aromatique est conservé dans les substitutions étudiées ici."
          },
          {
            type: "exemple",
            titre: "Nitration du benzène",
            texte: "Dans des conditions industrielles ou de laboratoire adaptées, le benzène peut subir une nitration : C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O. Le produit organique est le nitrobenzène ; un hydrogène du cycle est remplacé par le groupe –NO₂."
          },
          {
            type: "exemple",
            titre: "Chloration du benzène",
            texte: "Une chloration par substitution peut être représentée par : C₆H₆ + Cl₂ → C₆H₅Cl + HCl, en présence d’un catalyseur adapté. Le produit organique est le chlorobenzène."
          },
          {
            type: "remarque",
            titre: "Substitution et addition",
            texte: "Dans une substitution aromatique, le cycle est conservé et un substituant en remplace un autre. Dans une addition sur un alcène, des atomes se fixent sur les carbones de la liaison double. Les deux types de transformation ne doivent pas être confondus."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Le benzène est toxique et cancérogène. Les réactifs de nitration et de chloration peuvent aussi être dangereux. Ne réalise pas ces réactions et ne cherche pas à sentir les produits."
          }
        ]
      },

      {
        id: "sp1-ch23-combustion",
        titre: "4. Combustion et calculs",
        blocs: [
          {
            type: "regle",
            titre: "Combustion complète",
            texte: "La combustion complète du benzène produit du dioxyde de carbone et de l’eau : 2 C₆H₆ + 15 O₂ → 12 CO₂ + 6 H₂O."
          },
          {
            type: "methode",
            titre: "Exploiter une équation",
            texte: "1. Vérifier que l’équation est équilibrée. 2. Lire les rapports entre quantités de matière à partir des coefficients. 3. Convertir une masse en quantité de matière avec n = m/M si nécessaire. 4. Calculer les quantités demandées en tenant compte du réactif limitant."
          },
          {
            type: "exemple",
            titre: "Quantité de dioxyde de carbone",
            texte: "Si 0,10 mol de benzène brûle complètement avec un excès de dioxygène, l’équation indique que 2 mol de benzène forment 12 mol de CO₂. On obtient donc n(CO₂) = 0,10 × 12/2 = 0,60 mol."
          },
          {
            type: "remarque",
            titre: "Combustion incomplète",
            texte: "Si le dioxygène manque, la combustion peut notamment produire du monoxyde de carbone et de la suie. Le monoxyde de carbone est très toxique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est la formule brute du benzène ? Combien de carbones composent son cycle ?",
        correction: "La formule brute du benzène est C₆H₆. Son cycle contient six atomes de carbone."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Deux substituants d’un cycle benzénique sont placés en positions 1 et 4. La relation est-elle ortho, méta ou para ?",
        correction: "Les positions 1 et 4 correspondent à la relation para."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le méthylbenzène, ou toluène, est obtenu en remplaçant un hydrogène du benzène C₆H₆ par un groupe –CH₃. Détermine sa formule brute et indique s’il s’agit d’un hydrocarbure.",
        correction: "Le cycle restant est C₆H₅. L’ajout de CH₃ donne C₇H₈. Le toluène ne contient que du carbone et de l’hydrogène : c’est un hydrocarbure."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Complète et équilibre la substitution suivante : C₆H₆ + Cl₂ → C₆H₅Cl + … . Nomme le produit organique.",
        correction: "C₆H₆ + Cl₂ → C₆H₅Cl + HCl. Le produit organique est le chlorobenzène."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "La combustion complète du benzène est : 2 C₆H₆ + 15 O₂ → 12 CO₂ + 6 H₂O. On brûle entièrement 0,20 mol de benzène avec du dioxygène en excès. Calcule les quantités de O₂ consommé et de CO₂ formé.",
        correction: "Pour 2 mol de benzène, 15 mol de O₂ sont consommées et 12 mol de CO₂ sont formées. Donc n(O₂) = 0,20 × 15/2 = 1,5 mol et n(CO₂) = 0,20 × 12/2 = 1,2 mol."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux molécules de dichlorobenzène portent chacune deux atomes de chlore sur un cycle benzénique. Dans la première, ils occupent les positions 1 et 2 ; dans la seconde, les positions 1 et 3. Donne leur nom et explique pourquoi ce sont des isomères de constitution.",
        correction: "La première est le 1,2-dichlorobenzène, ou ortho-dichlorobenzène ; la seconde est le 1,3-dichlorobenzène, ou méta-dichlorobenzène. Elles ont la même formule brute C₆H₄Cl₂, mais les positions relatives des atomes de chlore diffèrent : ce sont des isomères de constitution."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On brûle complètement 7,8 g de benzène C₆H₆ en présence de dioxygène en excès. Équation : 2 C₆H₆ + 15 O₂ → 12 CO₂ + 6 H₂O. Données : M(C) = 12 g·mol⁻¹, M(H) = 1 g·mol⁻¹ et M(O) = 16 g·mol⁻¹. Calcule la quantité de benzène brûlée, puis la masse de CO₂ formée.",
        correction: "M(C₆H₆) = 6 × 12 + 6 × 1 = 78 g·mol⁻¹, donc n(C₆H₆) = 7,8/78 = 0,10 mol. L’équation donne n(CO₂) = 0,10 × 12/2 = 0,60 mol. M(CO₂) = 12 + 2 × 16 = 44 g·mol⁻¹ ; la masse formée est m(CO₂) = 0,60 × 44 = 26,4 g."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Pour la nitration modélisée par C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O, on dispose initialement de 0,30 mol de benzène et de 0,20 mol d’acide nitrique. On suppose la réaction complète jusqu’à épuisement du réactif limitant. Identifie ce réactif et détermine les quantités finales de nitrobenzène formé et de benzène restant.",
        correction: "Les réactifs sont consommés dans le rapport 1:1. L’acide nitrique, présent à 0,20 mol, est limitant. Il se forme donc 0,20 mol de nitrobenzène. La quantité de benzène restante est 0,30 − 0,20 = 0,10 mol."
      }
    ]
  }
]);
