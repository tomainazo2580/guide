// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 8 : La transmission des maladies infectieuses

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-transmission-maladies",
    titre: "Chapitre 8 : La transmission des maladies infectieuses",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-transmission-maladie",
        titre: "Qu'est-ce qu'une maladie infectieuse ?",
        blocs: [
          {
            type: "texte",
            titre: "Un rappel",
            texte: "Certains microbes sont utiles ou inoffensifs. D'autres peuvent provoquer des maladies : on les appelle des microbes pathogènes."
          },
          {
            type: "definition",
            titre: "Une maladie infectieuse",
            texte: "Une maladie infectieuse est une maladie causée par un agent infectieux, par exemple une bactérie, un virus ou un parasite."
          },
          {
            type: "remarque",
            titre: "Pas toutes de la même façon",
            texte: "Les maladies infectieuses ne se transmettent pas toutes de la même manière. Certaines passent d'une personne à une autre ; d'autres sont transmises par un animal ou par de l'eau contaminée."
          }
        ]
      },

      {
        id: "svt5-transmission-entree",
        titre: "Comment un agent infectieux entre-t-il dans le corps ?",
        blocs: [
          {
            type: "texte",
            titre: "Plusieurs portes d'entrée",
            texte: "Un agent infectieux peut entrer dans le corps par différentes voies : par exemple par la bouche, par le nez, par une plaie ou lors d'une piqûre."
          },
          {
            type: "tableau",
            titre: "Quelques exemples",
            entetes: ["Porte d'entrée", "Comment ?"],
            lignes: [
              [
                "Bouche",
                "En avalant de l'eau ou des aliments contaminés."
              ],
              [
                "Nez ou bouche",
                "En respirant de l'air contenant certains agents infectieux."
              ],
              [
                "Peau abîmée",
                "Par une coupure ou une plaie souillée."
              ],
              [
                "Peau piquée",
                "Lors de la piqûre d'un animal qui transmet un agent infectieux."
              ]
            ]
          },
          {
            type: "definition",
            titre: "La contamination",
            texte: "La contamination est l'entrée d'un agent infectieux dans l'organisme."
          },
          {
            type: "remarque",
            titre: "Les barrières du corps",
            texte: "La peau intacte aide à empêcher l'entrée de nombreux microbes. À l'intérieur du corps, les muqueuses, par exemple dans le nez et la bouche, participent aussi à la protection."
          }
        ]
      },

      {
        id: "svt5-transmission-voies",
        titre: "Les voies de transmission",
        blocs: [
          {
            type: "definition",
            titre: "La transmission",
            texte: "La transmission est le passage d'un agent infectieux d'une source vers une autre personne ou un autre être vivant."
          },
          {
            type: "tableau",
            titre: "Quelques voies de transmission",
            entetes: ["Voie", "Exemple"],
            lignes: [
              [
                "Par l'air",
                "Une personne atteinte de la grippe peut libérer des particules contenant le virus en parlant, en toussant ou en éternuant. Une autre personne peut les respirer."
              ],
              [
                "Par l'eau ou les aliments",
                "Une personne peut avaler des microbes présents dans de l'eau ou des aliments contaminés."
              ],
              [
                "Par contact",
                "Certains microbes peuvent passer par contact direct avec une personne infectée ou par l'intermédiaire d'objets contaminés."
              ],
              [
                "Par un animal vecteur",
                "Un moustique infecté peut transmettre le parasite responsable du paludisme lors d'une piqûre."
              ],
              [
                "Par certains liquides du corps",
                "Le VIH peut notamment se transmettre par le sang et lors de rapports sexuels non protégés."
              ]
            ]
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "La voie de transmission explique comment l'agent infectieux passe d'une source à une personne.\nLa porte d'entrée est l'endroit par lequel il entre dans son corps."
          },
          {
            type: "exemple",
            titre: "Une eau contaminée",
            texte: "Une personne boit de l'eau contenant un microbe pathogène.\nLa voie de transmission est l'eau contaminée. La porte d'entrée est la bouche."
          }
        ]
      },

      {
        id: "svt5-transmission-vecteur",
        titre: "Le cas du paludisme",
        blocs: [
          {
            type: "definition",
            titre: "Le paludisme",
            texte: "Le paludisme est une maladie causée par un parasite microscopique appelé Plasmodium."
          },
          {
            type: "definition",
            titre: "Un vecteur",
            texte: "Un vecteur est un être vivant qui peut transmettre un agent infectieux d'un être vivant à un autre."
          },
          {
            type: "texte",
            titre: "Le moustique et le parasite",
            texte: "Le paludisme est transmis à l'être humain par la piqûre d'un moustique Anophèle femelle infecté.\nLe moustique est le vecteur ; le parasite Plasmodium est l'agent responsable de la maladie."
          },
          {
            type: "schema",
            titre: "Transmission du paludisme",
            svg: "<svg viewBox='0 0 340 190' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='27' width='130' height='62' rx='10' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><text x='80' y='49' font-size='12' font-weight='bold' fill='#14532d' text-anchor='middle'>Moustique</text><text x='80' y='66' font-size='11' fill='#14532d' text-anchor='middle'>Anophèle femelle</text><text x='80' y='81' font-size='11' fill='#14532d' text-anchor='middle'>infecté</text><line x1='145' y1='58' x2='191' y2='58' stroke='#6b7280' stroke-width='2'/><polygon points='186,53 196,58 186,63' fill='#6b7280'/><rect x='197' y='27' width='128' height='62' rx='10' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='261' y='53' font-size='12' font-weight='bold' fill='#1e3a8a' text-anchor='middle'>Personne</text><text x='261' y='72' font-size='11' fill='#1e3a8a' text-anchor='middle'>piquée</text><text x='170' y='112' font-size='11' fill='#374151' text-anchor='middle'>Le parasite peut être transmis lors de la piqûre</text><text x='170' y='144' font-size='12' fill='#14532d' text-anchor='middle'>Vecteur : moustique</text><text x='170' y='164' font-size='12' fill='#7f1d1d' text-anchor='middle'>Agent responsable : Plasmodium</text></svg>",
            legende: "Un moustique Anophèle femelle infecté peut transmettre le parasite responsable du paludisme."
          },
          {
            type: "remarque",
            titre: "Une protection",
            texte: "Dormir sous une moustiquaire imprégnée d'insecticide aide à réduire les piqûres de moustiques et le risque de paludisme."
          }
        ]
      },

      {
        id: "svt5-transmission-infection",
        titre: "De la contamination à la maladie",
        blocs: [
          {
            type: "texte",
            titre: "Après l'entrée dans le corps",
            texte: "Après la contamination, certains agents infectieux peuvent se multiplier dans l'organisme : c'est une infection.\nL'infection peut entraîner des signes de maladie, comme de la fièvre, de la toux ou une diarrhée, selon l'agent responsable."
          },
          {
            type: "definition",
            titre: "La période d'incubation",
            texte: "La période d'incubation est le temps qui peut s'écouler entre la contamination et l'apparition des premiers signes de la maladie."
          },
          {
            type: "remarque",
            titre: "Des situations différentes",
            texte: "Une contamination ne provoque pas toujours une maladie visible. Une personne peut parfois être infectée sans présenter de signes."
          },
          {
            type: "schema",
            titre: "Un exemple de succession",
            svg: "<svg viewBox='0 0 340 245' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='10' width='260' height='45' rx='9' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='170' y='29' font-size='13' font-weight='bold' fill='#78350f' text-anchor='middle'>CONTAMINATION</text><text x='170' y='46' font-size='11' fill='#78350f' text-anchor='middle'>Entrée de l'agent infectieux</text><line x1='170' y1='55' x2='170' y2='73' stroke='#6b7280' stroke-width='2'/><polygon points='165,69 170,78 175,69' fill='#6b7280'/><rect x='40' y='79' width='260' height='45' rx='9' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='170' y='98' font-size='13' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>INFECTION POSSIBLE</text><text x='170' y='115' font-size='11' fill='#7f1d1d' text-anchor='middle'>L'agent infectieux se multiplie</text><line x1='170' y1='124' x2='170' y2='142' stroke='#6b7280' stroke-width='2'/><polygon points='165,138 170,147 175,138' fill='#6b7280'/><rect x='40' y='148' width='260' height='55' rx='9' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='170' y='168' font-size='13' font-weight='bold' fill='#1e3a8a' text-anchor='middle'>SIGNES DE MALADIE POSSIBLES</text><text x='170' y='187' font-size='11' fill='#1e3a8a' text-anchor='middle'>Par exemple : fièvre ou toux</text><text x='170' y='228' font-size='11' fill='#6b7280' text-anchor='middle'>Les signes ne sont pas toujours présents</text></svg>",
            legende: "Après une contamination, une infection peut se produire. Elle peut entraîner des signes de maladie, mais pas toujours."
          }
        ]
      },

      {
        id: "svt5-transmission-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. Une maladie infectieuse est causée par un agent infectieux.\n2. La contamination est l'entrée de cet agent dans le corps.\n3. La transmission peut se faire notamment par l'air, l'eau, les aliments, le contact ou un vecteur.\n4. Un moustique Anophèle femelle infecté peut transmettre le parasite responsable du paludisme.\n5. Une infection peut se produire sans signes visibles."
          },
          {
            type: "methode",
            titre: "Pour comprendre une transmission",
            texte: "Pose-toi ces questions :\n- Quel est l'agent infectieux ?\n- D'où vient-il ?\n- Comment est-il transmis ?\n- Par où entre-t-il dans le corps ?"
          },
          {
            type: "remarque",
            titre: "Dans le prochain chapitre",
            texte: "Nous verrons comment prévenir les infections et comment certains traitements aident à les combattre."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce qu'une maladie infectieuse ?",
        correction: "C'est une maladie causée par un agent infectieux, comme une bactérie, un virus ou un parasite."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'appelle-t-on contamination ?",
        correction: "La contamination est l'entrée d'un agent infectieux dans l'organisme."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux portes d'entrée possibles d'un agent infectieux dans le corps.",
        correction: "Par exemple : la bouche et une plaie. Un agent infectieux peut aussi entrer par le nez ou lors d'une piqûre."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite trois voies possibles de transmission des agents infectieux.",
        correction: "Par exemple : l'air, l'eau contaminée et le contact. Certains agents sont aussi transmis par des animaux vecteurs ou par certains liquides du corps."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel agent est responsable du paludisme ? Quel animal peut le transmettre ?",
        correction: "Le paludisme est causé par le parasite Plasmodium. Il peut être transmis par la piqûre d'un moustique Anophèle femelle infecté."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce qu'un vecteur ?",
        correction: "C'est un être vivant qui peut transmettre un agent infectieux d'un être vivant à un autre."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne boit de l'eau contenant des microbes pathogènes. Quelle est la voie de transmission ? Quelle est la porte d'entrée ?",
        correction: "La voie de transmission est l'eau contaminée. La porte d'entrée est la bouche."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Qu'est-ce que la période d'incubation ?",
        correction: "C'est le temps qui peut s'écouler entre la contamination et l'apparition des premiers signes de la maladie."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Le moustique est le parasite responsable du paludisme.\n2. Une personne infectée présente toujours des signes de maladie.\n3. La peau intacte aide à protéger le corps contre de nombreux microbes.",
        correction: "1. Faux : le moustique est le vecteur. Le parasite responsable est Plasmodium.\n2. Faux : une personne peut être infectée sans présenter de signes.\n3. Vrai."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique comment une personne peut attraper le paludisme et cite un moyen de réduire le risque.",
        correction: "Un moustique Anophèle femelle infecté peut transmettre le parasite Plasmodium lors d'une piqûre. Dormir sous une moustiquaire imprégnée d'insecticide aide à réduire les piqûres et le risque de paludisme."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une personne atteinte de la grippe tousse près d'une autre personne. Explique comment le virus peut être transmis et par où il peut entrer.",
        correction: "La personne malade peut libérer dans l'air des particules contenant le virus en toussant. L'autre personne peut les respirer : le virus entre alors par le nez ou par la bouche."
      }
    ]
  }
]);
