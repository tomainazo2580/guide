enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch21",
    titre: "Chapitre 21 : Alcanes et pétrole",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch21-alcanes",
        titre: "1. Reconnaître un alcane",
        blocs: [
          {
            type: "introduction",
            titre: "Des hydrocarbures courants",
            texte: "Le méthane, le propane et le butane sont des hydrocarbures utilisés notamment comme combustibles. Ils appartiennent à la famille des alcanes."
          },
          {
            type: "definition",
            titre: "Alcane",
            texte: "Un alcane est un hydrocarbure saturé à chaîne ouverte : ses atomes de carbone sont reliés uniquement par des liaisons simples. Sa chaîne peut être linéaire ou ramifiée."
          },
          {
            type: "regle",
            titre: "Formule générale",
            texte: "La formule brute d’un alcane comportant n atomes de carbone est CnH₂n₊₂, avec n entier supérieur ou égal à 1. Cette formule concerne les alcanes à chaîne ouverte ; elle ne s’applique pas aux cycloalcanes."
          },
          {
            type: "tableau",
            titre: "Premiers alcanes linéaires",
            entetes: ["Nombre de carbones", "Nom", "Formule brute", "Formule semi-développée"],
            lignes: [
              ["1", "Méthane", "CH₄", "CH₄"],
              ["2", "Éthane", "C₂H₆", "CH₃–CH₃"],
              ["3", "Propane", "C₃H₈", "CH₃–CH₂–CH₃"],
              ["4", "Butane", "C₄H₁₀", "CH₃–CH₂–CH₂–CH₃"],
              ["5", "Pentane", "C₅H₁₂", "CH₃–CH₂–CH₂–CH₂–CH₃"]
            ]
          },
          {
            type: "schema",
            titre: "Chaînes linéaire et ramifiée",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 220' role='img' aria-label='Deux alcanes de formule C4H10 : le butane possède une chaîne de quatre carbones ; le 2-méthylpropane possède une chaîne de trois carbones portant un groupe méthyle sur le carbone central.'><text x='160' y='35' text-anchor='middle' font-size='18'>Butane : chaîne linéaire</text><text x='160' y='110' text-anchor='middle' font-size='20'>CH₃—CH₂—CH₂—CH₃</text><text x='470' y='35' text-anchor='middle' font-size='18'>2-méthylpropane : chaîne ramifiée</text><text x='470' y='110' text-anchor='middle' font-size='20'>CH₃—CH—CH₃</text><line x1='470' y1='120' x2='470' y2='150' stroke='#222' stroke-width='2'/><text x='470' y='177' text-anchor='middle' font-size='20'>CH₃</text><text x='310' y='210' text-anchor='middle' font-size='15'>Les deux molécules ont la formule brute C₄H₁₀.</text></svg>",
            legende: "Même formule brute, enchaînements différents : le butane et le 2-méthylpropane sont des isomères de constitution."
          }
        ]
      },

      {
        id: "sp1-ch21-nomenclature",
        titre: "2. Nommer quelques alcanes ramifiés",
        blocs: [
          {
            type: "definition",
            titre: "Groupe alkyle",
            texte: "Un groupe alkyle provient formellement d’un alcane auquel on retire un atome d’hydrogène. Par exemple, le groupe méthyle est –CH₃ et le groupe éthyle est –CH₂–CH₃."
          },
          {
            type: "tableau",
            titre: "Préfixes usuels",
            entetes: ["Nombre de carbones de la chaîne", "Préfixe", "Nom de l’alcane linéaire"],
            lignes: [
              ["1", "méth-", "méthane"],
              ["2", "éth-", "éthane"],
              ["3", "prop-", "propane"],
              ["4", "but-", "butane"],
              ["5", "pent-", "pentane"],
              ["6", "hex-", "hexane"]
            ]
          },
          {
            type: "methode",
            titre: "Nommer une molécule simple",
            texte: "1. Choisir la plus longue chaîne continue de carbones : elle donne le nom principal. 2. Numéroter cette chaîne depuis l’extrémité qui donne les plus petits indices aux ramifications. 3. Nommer chaque groupe alkyle et indiquer sa position. 4. Si un même groupe apparaît plusieurs fois, utiliser di-, tri-, etc., en indiquant tous ses indices."
          },
          {
            type: "exemple",
            titre: "2-méthylbutane",
            texte: "Pour CH₃–CH(CH₃)–CH₂–CH₃, la plus longue chaîne compte quatre carbones : butane. Le groupe méthyle est sur le carbone 2 lorsqu’on numérote depuis l’extrémité la plus proche. Le nom est 2-méthylbutane."
          },
          {
            type: "exemple",
            titre: "Deux ramifications identiques",
            texte: "Pour CH₃–C(CH₃)₂–CH₃, la chaîne principale compte trois carbones et deux groupes méthyle sont fixés sur son carbone 2. Le nom est 2,2-diméthylpropane."
          },
          {
            type: "remarque",
            titre: "Erreur fréquente",
            texte: "La chaîne principale n’est pas forcément celle qui apparaît horizontalement dans une écriture. Il faut rechercher la plus longue chaîne continue avant de choisir le nom."
          }
        ]
      },

      {
        id: "sp1-ch21-proprietes",
        titre: "3. Propriétés et combustion",
        blocs: [
          {
            type: "definition",
            titre: "Propriétés physiques",
            texte: "Les alcanes sont peu solubles dans l’eau. Leur température d’ébullition dépend notamment de la taille et de la structure de leurs molécules ; dans une série linéaire, elle augmente généralement avec le nombre de carbones."
          },
          {
            type: "regle",
            titre: "Combustion complète",
            texte: "La combustion complète d’un alcane dans le dioxygène produit du dioxyde de carbone et de l’eau. Elle libère de l’énergie. Pour le méthane : CH₄ + 2 O₂ → CO₂ + 2 H₂O."
          },
          {
            type: "methode",
            titre: "Équilibrer une combustion",
            texte: "1. Écrire l’alcane, O₂, CO₂ et H₂O. 2. Équilibrer les atomes de carbone avec CO₂. 3. Équilibrer les hydrogènes avec H₂O. 4. Équilibrer les oxygènes avec O₂. 5. Si nécessaire, multiplier tous les coefficients pour obtenir des entiers."
          },
          {
            type: "exemple",
            titre: "Combustion du propane",
            texte: "Pour C₃H₈ : C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. On compte trois carbones, huit hydrogènes et dix oxygènes de chaque côté."
          },
          {
            type: "remarque",
            titre: "Combustion incomplète",
            texte: "Si le dioxygène est insuffisant, la combustion peut former notamment du monoxyde de carbone CO et de la suie. Le monoxyde de carbone est un gaz très toxique. Ne réalise pas de combustion comme expérience personnelle."
          }
        ]
      },

      {
        id: "sp1-ch21-petrole",
        titre: "4. Pétrole et gaz naturel",
        blocs: [
          {
            type: "definition",
            titre: "Des mélanges",
            texte: "Le pétrole brut est un mélange complexe contenant de nombreux hydrocarbures. Le gaz naturel contient principalement du méthane, accompagné de quantités variables d’autres gaz. Leurs compositions dépendent du gisement."
          },
          {
            type: "definition",
            titre: "Distillation fractionnée",
            texte: "Dans une raffinerie, la distillation fractionnée sépare le pétrole en fractions selon leurs domaines de températures d’ébullition. Une fraction est un mélange de composés ayant des propriétés proches ; ce n’est pas nécessairement une substance pure."
          },
          {
            type: "schema",
            titre: "Principe simplifié d’une colonne de distillation",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 300' role='img' aria-label='Colonne de distillation du pétrole : les fractions aux températures d’ébullition plus basses sont recueillies vers le haut plus frais, les fractions aux températures d’ébullition plus élevées vers le bas plus chaud.'><rect x='215' y='25' width='150' height='235' rx='8' fill='#eee' stroke='#555' stroke-width='4'/><line x1='215' y1='75' x2='365' y2='75' stroke='#888' stroke-width='2'/><line x1='215' y1='125' x2='365' y2='125' stroke='#888' stroke-width='2'/><line x1='215' y1='175' x2='365' y2='175' stroke='#888' stroke-width='2'/><line x1='215' y1='225' x2='365' y2='225' stroke='#888' stroke-width='2'/><line x1='365' y1='55' x2='475' y2='55' stroke='#267' stroke-width='3'/><polygon points='475,55 463,48 463,62' fill='#267'/><text x='485' y='60' font-size='15'>gaz et fractions légères</text><line x1='365' y1='150' x2='475' y2='150' stroke='#267' stroke-width='3'/><polygon points='475,150 463,143 463,157' fill='#267'/><text x='485' y='155' font-size='15'>fractions intermédiaires</text><line x1='365' y1='235' x2='475' y2='235' stroke='#267' stroke-width='3'/><polygon points='475,235 463,228 463,242' fill='#267'/><text x='485' y='240' font-size='15'>fractions lourdes</text><line x1='65' y1='205' x2='210' y2='205' stroke='#a33' stroke-width='3'/><polygon points='210,205 198,198 198,212' fill='#a33'/><text x='70' y='190' font-size='15'>pétrole chauffé</text><text x='290' y='48' text-anchor='middle' font-size='15'>plus frais</text><text x='290' y='250' text-anchor='middle' font-size='15'>plus chaud</text><text x='310' y='290' text-anchor='middle' font-size='15'>Schéma de principe : fractions recueillies à différentes hauteurs</text></svg>",
            legende: "La colonne est plus chaude vers le bas. Les fractions les plus volatiles montent davantage avant d’être recueillies."
          },
          {
            type: "definition",
            titre: "Craquage",
            texte: "Le craquage est une transformation industrielle qui coupe certaines grosses molécules d’hydrocarbures en molécules plus petites. Il peut produire des alcanes et des alcènes ; contrairement à la distillation, il modifie les molécules."
          },
          {
            type: "remarque",
            titre: "Environnement",
            texte: "La combustion des combustibles fossiles émet du dioxyde de carbone, un gaz à effet de serre. L’extraction, le transport et l’utilisation du pétrole et du gaz peuvent aussi provoquer d’autres pollutions."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un alcane à chaîne ouverte contient cinq atomes de carbone. Quelle est sa formule brute ?",
        correction: "Avec n = 5 dans CnH₂n₊₂, on obtient C₅H₁₂."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Parmi C₂H₆, C₂H₄ et C₃H₈, quelles formules vérifient la formule générale d’un alcane à chaîne ouverte ?",
        correction: "C₂H₆ et C₃H₈ vérifient CnH₂n₊₂. C₂H₄ ne la vérifie pas."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Nomme l’alcane de formule semi-développée CH₃–CH(CH₃)–CH₂–CH₃.",
        correction: "La plus longue chaîne compte quatre carbones : butane. Le groupe méthyle porte l’indice 2. La molécule est le 2-méthylbutane."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Équilibre la combustion complète de l’éthane : C₂H₆ + O₂ → CO₂ + H₂O. Utilise des coefficients entiers.",
        correction: "On obtient 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O. Il y a de chaque côté 4 atomes de carbone, 12 d’hydrogène et 14 d’oxygène."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On considère CH₃–CH₂–CH₂–CH₃ et CH₃–CH(CH₃)–CH₃. Donne leur nom et leur formule brute. Explique leur relation.",
        correction: "La première molécule est le butane ; la seconde est le 2-méthylpropane. Toutes deux ont pour formule C₄H₁₀. Leurs enchaînements diffèrent : ce sont des isomères de constitution."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un alcane à chaîne ouverte possède une masse molaire de 58 g·mol⁻¹. Données : M(C) = 12 g·mol⁻¹ et M(H) = 1 g·mol⁻¹. Détermine sa formule brute.",
        correction: "Pour CnH₂n₊₂, M = 12n + (2n + 2) = 14n + 2. Donc 14n + 2 = 58, soit n = 4. La formule est C₄H₁₀."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "La combustion complète du propane est : C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. On brûle entièrement 0,40 mol de propane avec suffisamment de dioxygène. Calcule la quantité de matière de dioxygène consommée et celles de dioxyde de carbone et d’eau formées.",
        correction: "Pour 1 mol de propane, l’équation indique 5 mol de O₂, 3 mol de CO₂ et 4 mol de H₂O. Pour 0,40 mol de propane : n(O₂) = 2,0 mol ; n(CO₂) = 1,2 mol ; n(H₂O) = 1,6 mol."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un échantillon de butane C₄H₁₀ a une masse de 29 g. Sa combustion complète est : 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O. Données : M(C) = 12 g·mol⁻¹ et M(H) = 1 g·mol⁻¹. Calcule la quantité de butane brûlée, puis les quantités de O₂ consommé et de CO₂ formé, si le dioxygène est en excès.",
        correction: "M(C₄H₁₀) = 4 × 12 + 10 × 1 = 58 g·mol⁻¹. Donc n(C₄H₁₀) = 29/58 = 0,50 mol. D’après l’équation, 2 mol de butane consomment 13 mol de O₂ et produisent 8 mol de CO₂. Ainsi n(O₂) = 0,50 × 13/2 = 3,25 mol et n(CO₂) = 0,50 × 8/2 = 2,0 mol."
      }
    ]
  }
]);
