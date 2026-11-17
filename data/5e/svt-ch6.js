// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 6 : De la fecondation a la grossesse

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-fecondation-grossesse",
    titre: "Chapitre 6 : De la fécondation à la grossesse",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-fecondation-rappel",
        titre: "La rencontre des cellules reproductrices",
        blocs: [
          {
            type: "texte",
            titre: "Rappel du chapitre 4",
            texte: "Le spermatozoïde et la cellule reproductrice féminine, appelée ovocyte, sont des cellules reproductrices.\nLors de l'ovulation, un ovaire libère un ovocyte."
          },
          {
            type: "definition",
            titre: "La fécondation",
            texte: "La fécondation est la fusion d'un spermatozoïde et d'un ovocyte.\nElle a généralement lieu dans une trompe et forme une cellule appelée cellule-œuf."
          },
          {
            type: "texte",
            titre: "Comment les cellules peuvent-elles se rencontrer ?",
            texte: "Lors d'un rapport sexuel vaginal, des spermatozoïdes peuvent être déposés dans le vagin avec le sperme. Ils peuvent ensuite remonter vers l'utérus et les trompes.\nSi un spermatozoïde rencontre un ovocyte et fusionne avec lui, il y a fécondation."
          },
          {
            type: "remarque",
            titre: "Ovocyte et ovule",
            texte: "Dans les leçons, la cellule reproductrice féminine est souvent appelée « ovule ». Chez l'être humain, au moment de l'ovulation, on l'appelle plus précisément « ovocyte »."
          }
        ]
      },

      {
        id: "svt5-fecondation-nidation",
        titre: "De la cellule-œuf à l'embryon",
        blocs: [
          {
            type: "texte",
            titre: "Les premières étapes",
            texte: "Après la fécondation, la cellule-œuf se divise en plusieurs cellules tout en se déplaçant vers l'utérus.\nL'ensemble de ces cellules forme un jeune embryon."
          },
          {
            type: "definition",
            titre: "La nidation",
            texte: "La nidation est l'installation de l'embryon dans la paroi interne de l'utérus.\nElle permet le début de son développement dans l'utérus."
          },
          {
            type: "schema",
            titre: "De la fécondation à la nidation",
            svg: "<svg viewBox='0 0 340 280' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='10' width='270' height='48' rx='9' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='170' y='30' font-size='13' font-weight='bold' fill='#1e3a8a' text-anchor='middle'>FÉCONDATION</text><text x='170' y='48' font-size='11' fill='#1e3a8a' text-anchor='middle'>Fusion des cellules, généralement dans une trompe</text><line x1='170' y1='58' x2='170' y2='75' stroke='#6b7280' stroke-width='2'/><polygon points='165,71 170,80 175,71' fill='#6b7280'/><rect x='35' y='81' width='270' height='48' rx='9' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><text x='170' y='101' font-size='13' font-weight='bold' fill='#831843' text-anchor='middle'>CELLULE-ŒUF</text><text x='170' y='119' font-size='11' fill='#831843' text-anchor='middle'>Elle se divise en plusieurs cellules</text><line x1='170' y1='129' x2='170' y2='146' stroke='#6b7280' stroke-width='2'/><polygon points='165,142 170,151 175,142' fill='#6b7280'/><rect x='35' y='152' width='270' height='48' rx='9' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='170' y='172' font-size='13' font-weight='bold' fill='#78350f' text-anchor='middle'>JEUNE EMBRYON</text><text x='170' y='190' font-size='11' fill='#78350f' text-anchor='middle'>Il se déplace vers l'utérus</text><line x1='170' y1='200' x2='170' y2='217' stroke='#6b7280' stroke-width='2'/><polygon points='165,213 170,222 175,213' fill='#6b7280'/><text x='170' y='242' font-size='13' font-weight='bold' fill='#14532d' text-anchor='middle'>NIDATION DANS L'UTÉRUS</text><text x='170' y='265' font-size='11' fill='#6b7280' text-anchor='middle'>Schéma simplifié des premières étapes</text></svg>",
            legende: "Après la fécondation, la cellule-œuf se divise. Le jeune embryon peut ensuite s'installer dans la paroi de l'utérus."
          },
          {
            type: "remarque",
            titre: "Toutes les fécondations ne mènent pas à une grossesse",
            texte: "Une cellule-œuf ne se développe pas toujours jusqu'à la nidation. La fécondation et la nidation sont deux étapes différentes."
          }
        ]
      },

      {
        id: "svt5-grossesse-developpement",
        titre: "Le développement pendant la grossesse",
        blocs: [
          {
            type: "definition",
            titre: "La grossesse",
            texte: "La grossesse est la période pendant laquelle un futur bébé se développe dans l'utérus, de la nidation jusqu'à la naissance."
          },
          {
            type: "texte",
            titre: "Embryon puis fœtus",
            texte: "Au début du développement, on parle d'embryon.\nAprès les premières semaines, on parle de fœtus. Il continue à grandir et à se développer jusqu'à la naissance."
          },
          {
            type: "texte",
            titre: "Le placenta et le cordon ombilical",
            texte: "Le placenta est un organe qui se forme pendant la grossesse. Il permet des échanges entre la personne enceinte et le futur bébé.\nLe cordon ombilical relie le futur bébé au placenta."
          },
          {
            type: "schema",
            titre: "Des échanges pendant la grossesse",
            svg: "<svg viewBox='0 0 340 210' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='55' width='88' height='62' rx='9' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><text x='54' y='80' font-size='11' fill='#831843' text-anchor='middle'>Personne</text><text x='54' y='97' font-size='11' fill='#831843' text-anchor='middle'>enceinte</text><line x1='98' y1='86' x2='121' y2='86' stroke='#6b7280' stroke-width='2'/><rect x='122' y='55' width='88' height='62' rx='9' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='166' y='91' font-size='12' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>Placenta</text><line x1='210' y1='86' x2='232' y2='86' stroke='#6b7280' stroke-width='2'/><rect x='233' y='55' width='97' height='62' rx='9' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='281' y='80' font-size='11' fill='#1e3a8a' text-anchor='middle'>Futur bébé</text><text x='281' y='97' font-size='10' fill='#1e3a8a' text-anchor='middle'>(cordon relié</text><text x='281' y='110' font-size='10' fill='#1e3a8a' text-anchor='middle'>au placenta)</text><text x='170' y='25' font-size='12' fill='#374151' text-anchor='middle'>Oxygène et nutriments vers le futur bébé</text><line x1='70' y1='33' x2='270' y2='33' stroke='#16a34a' stroke-width='2'/><polygon points='265,28 275,33 265,38' fill='#16a34a'/><text x='170' y='153' font-size='12' fill='#374151' text-anchor='middle'>Déchets vers la personne enceinte</text><line x1='270' y1='164' x2='70' y2='164' stroke='#ea580c' stroke-width='2'/><polygon points='75,159 65,164 75,169' fill='#ea580c'/><text x='170' y='194' font-size='11' fill='#6b7280' text-anchor='middle'>Schéma simplifié des échanges</text></svg>",
            legende: "Le placenta permet notamment l'apport d'oxygène et de nutriments au futur bébé et l'élimination de certains déchets."
          },
          {
            type: "remarque",
            titre: "La durée",
            texte: "Une grossesse humaine dure environ neuf mois, même si sa durée peut varier."
          }
        ]
      },

      {
        id: "svt5-grossesse-sante",
        titre: "Prendre soin de sa santé pendant la grossesse",
        blocs: [
          {
            type: "texte",
            titre: "Le suivi de grossesse",
            texte: "Pendant la grossesse, les consultations auprès d'une sage-femme ou d'un autre professionnel de santé permettent de suivre la santé de la personne enceinte et le développement du futur bébé."
          },
          {
            type: "regle",
            titre: "Quelques gestes importants",
            texte: "Pendant la grossesse, il est important de manger de façon variée, de se reposer et de suivre les conseils d'un professionnel de santé.\nIl faut éviter l'alcool, le tabac et les drogues. Avant de prendre un médicament, il faut demander conseil à un professionnel de santé."
          },
          {
            type: "remarque",
            titre: "Demander de l'aide",
            texte: "En cas de saignement, de douleur importante ou de tout autre signe inquiétant pendant une grossesse, il faut consulter rapidement un professionnel de santé."
          }
        ]
      },

      {
        id: "svt5-grossesse-precoce",
        titre: "Prévenir une grossesse précoce",
        blocs: [
          {
            type: "definition",
            titre: "Une grossesse précoce",
            texte: "On parle de grossesse précoce lorsqu'une grossesse survient chez une adolescente.\nElle peut avoir des conséquences sur sa santé, sa scolarité et sa vie quotidienne."
          },
          {
            type: "texte",
            titre: "S'informer et se faire accompagner",
            texte: "Connaître son corps et la reproduction aide à prendre des décisions éclairées.\nUne personne qui a des questions peut s'adresser à un professionnel de santé ou à un adulte de confiance."
          },
          {
            type: "regle",
            titre: "La prévention",
            texte: "Ne pas avoir de rapport sexuel vaginal évite une grossesse liée à ce type de rapport.\nLes méthodes contraceptives réduisent le risque de grossesse. Un professionnel de santé peut expliquer les méthodes disponibles et aider à choisir une méthode adaptée."
          },
          {
            type: "remarque",
            titre: "Le préservatif",
            texte: "Utilisé correctement à chaque rapport sexuel, le préservatif réduit le risque de grossesse et protège aussi contre de nombreuses infections sexuellement transmissibles, appelées IST.\nLes autres méthodes contraceptives ne protègent généralement pas contre les IST."
          },
          {
            type: "remarque",
            titre: "Après un rapport non protégé",
            texte: "En cas de rapport non protégé ou de préservatif déchiré, il est important de demander rapidement conseil à un professionnel de santé. Une contraception d'urgence peut être possible : elle est d'autant plus efficace qu'elle est prise tôt."
          },
          {
            type: "remarque",
            titre: "Le respect et le consentement",
            texte: "Personne ne doit être forcé à avoir un rapport sexuel. Chacun a le droit de dire non.\nEn cas de pression ou de violence, ce n'est pas la faute de la victime : il faut chercher de l'aide auprès d'un adulte de confiance ou d'un professionnel de santé."
          }
        ]
      },

      {
        id: "svt5-grossesse-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. La fécondation est la fusion d'un spermatozoïde et d'un ovocyte, généralement dans une trompe.\n2. La cellule-œuf se divise et forme un jeune embryon.\n3. La nidation est l'installation de l'embryon dans la paroi de l'utérus.\n4. Le placenta permet des échanges utiles au développement du futur bébé.\n5. L'information, le respect et l'accès aux conseils de santé participent à la prévention des grossesses précoces."
          },
          {
            type: "methode",
            titre: "Retenir l'ordre",
            texte: "Fécondation → cellule-œuf → divisions → jeune embryon → nidation dans l'utérus → développement pendant la grossesse → naissance."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que la fécondation ?",
        correction: "C'est la fusion d'un spermatozoïde et d'un ovocyte. Elle forme une cellule-œuf."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Où la fécondation a-t-elle généralement lieu chez l'être humain ?",
        correction: "Elle a généralement lieu dans une trompe."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Comment appelle-t-on la cellule formée lors de la fécondation ?",
        correction: "On l'appelle la cellule-œuf."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce que la nidation ?",
        correction: "C'est l'installation de l'embryon dans la paroi interne de l'utérus."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel organe permet des échanges entre la personne enceinte et le futur bébé ?",
        correction: "C'est le placenta. Le futur bébé y est relié par le cordon ombilical."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Cite deux éléments qui peuvent être apportés au futur bébé grâce aux échanges au niveau du placenta.",
        correction: "L'oxygène et les nutriments."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Remets ces étapes dans l'ordre : nidation, fécondation, division de la cellule-œuf, naissance.",
        correction: "Fécondation → division de la cellule-œuf → nidation → naissance."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. La nidation a généralement lieu dans une trompe.\n2. Le cordon ombilical relie le futur bébé au placenta.\n3. La fécondation et la nidation sont la même étape.",
        correction: "1. Faux : la nidation a lieu dans la paroi de l'utérus. La fécondation a généralement lieu dans une trompe.\n2. Vrai.\n3. Faux : la fécondation est la fusion des cellules reproductrices ; la nidation est l'installation de l'embryon dans la paroi de l'utérus."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pourquoi les consultations pendant la grossesse sont-elles utiles ?",
        correction: "Elles permettent à un professionnel de santé de suivre la santé de la personne enceinte et le développement du futur bébé."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique deux rôles du placenta pendant la grossesse.",
        correction: "Le placenta permet le passage d'oxygène et de nutriments vers le futur bébé. Il permet aussi l'élimination de certains déchets vers la personne enceinte."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une personne a eu un rapport sexuel non protégé et craint une grossesse. À qui peut-elle demander de l'aide et pourquoi faut-il agir rapidement ?",
        correction: "Elle peut demander rapidement conseil à un professionnel de santé. Une contraception d'urgence peut être possible et elle est d'autant plus efficace qu'elle est prise tôt."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Explique pourquoi le préservatif est différent des autres méthodes contraceptives pour la prévention des infections.",
        correction: "Utilisé correctement à chaque rapport sexuel, le préservatif réduit le risque de grossesse et protège aussi contre de nombreuses IST. Les autres méthodes contraceptives ne protègent généralement pas contre les IST."
      }
    ]
  }
]);
