enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch28",
    titre: "Chapitre 28 : Potentiels standards et réactions d’oxydoréduction",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch28-potentiel",
        titre: "1. Potentiel standard d’un couple",
        blocs: [
          {
            type: "introduction",
            titre: "Comparer des couples redox",
            texte: "Les couples oxydant/réducteur ne présentent pas tous la même tendance à capter des électrons. Le potentiel standard permet de les comparer dans des conditions de référence."
          },
          {
            type: "definition",
            titre: "Potentiel standard",
            texte: "Le potentiel standard d’un couple Ox/Red, noté E°, est exprimé en volts (V). Il est défini relativement à une électrode de référence : l’électrode standard à hydrogène, dont le potentiel est fixé à 0 V."
          },
          {
            type: "definition",
            titre: "Conditions standards",
            texte: "Les potentiels standards sont donnés pour des états de référence. Dans les calculs usuels à 25 °C, on utilise notamment une concentration de référence de 1 mol·L⁻¹ pour les espèces dissoutes et une pression de référence de 1 bar pour les gaz. Les solides et liquides purs sont dans leur état standard."
          },
          {
            type: "tableau",
            titre: "Exemples de potentiels standards à 25 °C",
            entetes: ["Couple Ox/Red", "Demi-équation de réduction", "E°"],
            lignes: [
              ["Zn²⁺/Zn", "Zn²⁺ + 2 e⁻ → Zn", "−0,76 V"],
              ["H⁺/H₂", "2 H⁺ + 2 e⁻ → H₂", "0,00 V"],
              ["Cu²⁺/Cu", "Cu²⁺ + 2 e⁻ → Cu", "+0,34 V"],
              ["Fe³⁺/Fe²⁺", "Fe³⁺ + e⁻ → Fe²⁺", "+0,77 V"]
            ]
          },
          {
            type: "remarque",
            titre: "Une grandeur de référence",
            texte: "E° caractérise un couple dans les conditions standards. Le potentiel d’une électrode dans une situation réelle peut être différent, notamment lorsque les concentrations ne sont pas celles de référence."
          }
        ]
      },

      {
        id: "sp1-ch28-classement",
        titre: "2. Comparer les pouvoirs oxydant et réducteur",
        blocs: [
          {
            type: "regle",
            titre: "Sens de comparaison",
            texte: "Plus E° d’un couple est élevé, plus son oxydant a tendance à capter des électrons en comparaison avec les oxydants des couples de E° plus faible, dans les conditions standards. Inversement, le réducteur du couple de E° le plus faible a la plus forte tendance à céder des électrons."
          },
          {
            type: "schema",
            titre: "Classement de quelques couples",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 290' role='img' aria-label='Échelle des potentiels standards croissants : Zn2+ sur Zn à moins 0,76 volt, H+ sur H2 à zéro volt, Cu2+ sur Cu à plus 0,34 volt et Fe3+ sur Fe2+ à plus 0,77 volt. Le pouvoir oxydant augmente vers le haut.'><line x1='165' y1='245' x2='165' y2='40' stroke='#222' stroke-width='3'/><polygon points='165,40 158,54 172,54' fill='#222'/><text x='110' y='30' font-size='16'>E° croissant</text><line x1='155' y1='225' x2='175' y2='225' stroke='#222' stroke-width='2'/><text x='195' y='231' font-size='17'>Zn²⁺/Zn : −0,76 V</text><line x1='155' y1='160' x2='175' y2='160' stroke='#222' stroke-width='2'/><text x='195' y='166' font-size='17'>H⁺/H₂ : 0,00 V</text><line x1='155' y1='125' x2='175' y2='125' stroke='#222' stroke-width='2'/><text x='195' y='131' font-size='17'>Cu²⁺/Cu : +0,34 V</text><line x1='155' y1='75' x2='175' y2='75' stroke='#222' stroke-width='2'/><text x='195' y='81' font-size='17'>Fe³⁺/Fe²⁺ : +0,77 V</text><text x='325' y='270' text-anchor='middle' font-size='15'>Le classement est qualitatif ; l’échelle n’est pas graduée proportionnellement.</text></svg>",
            legende: "Vers le haut, les oxydants des couples indiqués ont une tendance croissante à se réduire dans les conditions standards."
          },
          {
            type: "exemple",
            titre: "Comparer Cu²⁺/Cu et Zn²⁺/Zn",
            texte: "E°(Cu²⁺/Cu) = +0,34 V est supérieur à E°(Zn²⁺/Zn) = −0,76 V. Cu²⁺ est donc l’oxydant le plus fort des deux couples, tandis que Zn est le réducteur le plus fort."
          },
          {
            type: "remarque",
            titre: "Comparer des espèces de deux couples",
            texte: "Il faut comparer les oxydants entre eux ou les réducteurs entre eux. Le potentiel standard appartient au couple : on ne classe pas un oxydant et un réducteur comme s’ils étaient de même nature."
          }
        ]
      },

      {
        id: "sp1-ch28-reaction",
        titre: "3. Prévoir le sens d’une réaction",
        blocs: [
          {
            type: "regle",
            titre: "Règle dans les conditions standards",
            texte: "Si deux couples ont des potentiels standards différents, l’oxydant du couple de E° le plus élevé peut réagir avec le réducteur du couple de E° le plus faible. La différence ΔE° = E°(couple réduit) − E°(couple oxydé) est alors positive."
          },
          {
            type: "exemple",
            titre: "Ions cuivre(II) et zinc",
            texte: "Avec E°(Cu²⁺/Cu) = +0,34 V et E°(Zn²⁺/Zn) = −0,76 V, Cu²⁺ se réduit et Zn s’oxyde. L’équation est Cu²⁺ + Zn → Cu + Zn²⁺. La différence vaut ΔE° = 0,34 − (−0,76) = 1,10 V."
          },
          {
            type: "methode",
            titre: "Construire l’équation",
            texte: "1. Comparer les valeurs de E°. 2. Retenir la réduction de l’oxydant du couple au E° le plus élevé. 3. Retenir l’oxydation du réducteur du couple au E° le plus faible. 4. Équilibrer les électrons, puis additionner les demi-équations. 5. Vérifier les atomes et les charges."
          },
          {
            type: "remarque",
            titre: "Prévision et vitesse",
            texte: "Une différence ΔE° positive indique un sens favorable dans les conditions standards, mais ne garantit pas une réaction rapide. Hors de ces conditions, les concentrations et les autres conditions peuvent modifier le sens favorisé."
          }
        ]
      },

      {
        id: "sp1-ch28-bilans",
        titre: "4. Différence de potentiel et bilan de matière",
        blocs: [
          {
            type: "regle",
            titre: "Ne pas multiplier les potentiels",
            texte: "Lorsqu’on multiplie une demi-équation pour équilibrer les électrons, on ne multiplie pas le potentiel standard du couple. E° est une grandeur liée au couple, pas un coefficient de l’équation."
          },
          {
            type: "exemple",
            titre: "Fer(III) et cuivre",
            texte: "Données : E°(Fe³⁺/Fe²⁺) = +0,77 V et E°(Cu²⁺/Cu) = +0,34 V. Fe³⁺ se réduit et Cu s’oxyde. Après équilibrage : 2 Fe³⁺ + Cu → 2 Fe²⁺ + Cu²⁺. La différence de potentiel standard est ΔE° = 0,77 − 0,34 = 0,43 V, sans multiplier 0,77 par 2."
          },
          {
            type: "exemple",
            titre: "Quantités consommées",
            texte: "Pour 2 Fe³⁺ + Cu → 2 Fe²⁺ + Cu²⁺, si 0,20 mol de Fe³⁺ réagit complètement avec un excès de cuivre, il est consommé 0,20/2 = 0,10 mol de Cu et il se forme 0,20 mol de Fe²⁺."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les réactions entre métaux et solutions peuvent utiliser des substances dangereuses. Les équations et les piles sont étudiées sur le papier ; ne réalise pas de mélange chimique chez toi."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Le potentiel standard d’un couple redox s’exprime dans quelle unité ? Quelle électrode sert de référence pour l’échelle des potentiels standards ?",
        correction: "Il s’exprime en volts. L’électrode standard à hydrogène sert de référence et son potentiel est fixé à 0 V."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "On donne E°(Zn²⁺/Zn) = −0,76 V et E°(Cu²⁺/Cu) = +0,34 V. Quel couple a le potentiel standard le plus élevé ?",
        correction: "Le couple Cu²⁺/Cu a le potentiel standard le plus élevé : +0,34 V est supérieur à −0,76 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On donne E°(Zn²⁺/Zn) = −0,76 V et E°(Cu²⁺/Cu) = +0,34 V. Parmi Zn et Cu, quel est le réducteur le plus fort dans les conditions standards ?",
        correction: "Le réducteur du couple de potentiel standard le plus faible est le plus fort : c’est Zn, car −0,76 V < +0,34 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On donne E°(Zn²⁺/Zn) = −0,76 V et E°(Cu²⁺/Cu) = +0,34 V. Calcule ΔE° pour la réduction de Cu²⁺ et l’oxydation de Zn.",
        correction: "ΔE° = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = 0,34 − (−0,76) = 1,10 V."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On donne E°(Ag⁺/Ag) = +0,80 V et E°(Cu²⁺/Cu) = +0,34 V. Les demi-équations de réduction sont Ag⁺ + e⁻ → Ag et Cu²⁺ + 2 e⁻ → Cu. Prévois les espèces qui réagissent dans le sens favorable standard et écris l’équation globale.",
        correction: "Le couple Ag⁺/Ag a le potentiel le plus élevé : Ag⁺ se réduit. Cu est le réducteur du couple de potentiel plus faible et s’oxyde : Cu → Cu²⁺ + 2 e⁻. On multiplie la réduction de Ag⁺ par 2. L’équation est 2 Ag⁺ + Cu → 2 Ag + Cu²⁺."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On donne E°(Fe³⁺/Fe²⁺) = +0,77 V et E°(Cu²⁺/Cu) = +0,34 V. Calcule ΔE° pour la réaction 2 Fe³⁺ + Cu → 2 Fe²⁺ + Cu²⁺. Faut-il multiplier le potentiel du fer par 2 ?",
        correction: "ΔE° = 0,77 − 0,34 = 0,43 V. On ne multiplie pas E° par 2 lorsque l’on multiplie la demi-équation."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On donne E°(Ag⁺/Ag) = +0,80 V et E°(Cu²⁺/Cu) = +0,34 V. La réaction étudiée est 2 Ag⁺ + Cu → 2 Ag + Cu²⁺. Si 0,30 mol de Ag⁺ réagit complètement avec un excès de cuivre, calcule ΔE°, la quantité de cuivre consommée et celle d’argent formée.",
        correction: "ΔE° = 0,80 − 0,34 = 0,46 V. Selon l’équation, 2 mol de Ag⁺ consomment 1 mol de Cu et forment 2 mol de Ag. Donc n(Cu consommé) = 0,30/2 = 0,15 mol et n(Ag formé) = 0,30 mol."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On donne E°(Fe³⁺/Fe²⁺) = +0,77 V et E°(Zn²⁺/Zn) = −0,76 V. Les demi-équations de réduction sont Fe³⁺ + e⁻ → Fe²⁺ et Zn²⁺ + 2 e⁻ → Zn. Prévois la réaction favorable dans les conditions standards, écris son équation et calcule ΔE°. Si 0,10 mol de Zn réagit complètement avec un excès de Fe³⁺, quelle quantité de Fe²⁺ se forme ?",
        correction: "Fe³⁺ se réduit et Zn s’oxyde. En équilibrant les électrons : 2 Fe³⁺ + Zn → 2 Fe²⁺ + Zn²⁺. ΔE° = 0,77 − (−0,76) = 1,53 V. Une mole de Zn forme deux moles de Fe²⁺ : 0,10 mol de Zn forme donc 0,20 mol de Fe²⁺."
      }
    ]
  }
]);
