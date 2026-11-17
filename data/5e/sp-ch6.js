enregistrerChapitres("5e", "sp", [
  {
    id: 6,
    titre: "Séparer les constituants d’un mélange",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Pourquoi séparer un mélange ?",
        blocs: [
          {
            type: "texte",
            contenu: "Dans la vie quotidienne, on sépare souvent les constituants d’un mélange : on retire les grains indésirables du riz, on filtre du café ou on récupère du sel après évaporation de l’eau de mer."
          },
          {
            type: "regle",
            contenu: "La méthode de séparation dépend de la nature du mélange et de ce que l’on souhaite récupérer."
          },
          {
            type: "remarque",
            contenu: "Une méthode peut séparer certains constituants sans nécessairement les séparer tous."
          }
        ]
      },
      {
        id: 2,
        titre: "La décantation",
        blocs: [
          {
            type: "definition",
            contenu: "La décantation consiste à laisser reposer un mélange hétérogène pour que certaines de ses parties se séparent sous l’effet de la gravité."
          },
          {
            type: "texte",
            contenu: "Dans un mélange d’eau et de terre, une partie des particules solides peut se déposer au fond. Le liquide situé au-dessus devient plus clair : on peut le verser doucement dans un autre récipient."
          },
          {
            type: "exemple",
            contenu: "On laisse reposer de l’eau boueuse. Une partie de la boue se dépose au fond. On verse ensuite doucement une partie de l’eau située au-dessus dans un autre récipient."
          },
          {
            type: "texte",
            contenu: "La décantation peut aussi séparer deux liquides non miscibles. Par exemple, après repos d’un mélange d’eau et d’huile, l’huile forme une couche au-dessus de l’eau."
          },
          {
            type: "remarque",
            contenu: "Après décantation, le liquide récupéré peut encore contenir de petites particules, des substances dissoutes ou des microbes. Il n’est pas nécessairement potable."
          }
        ]
      },
      {
        id: 3,
        titre: "La filtration",
        blocs: [
          {
            type: "definition",
            contenu: "La filtration permet de séparer un liquide de certaines particules solides non dissoutes en faisant passer le mélange à travers un filtre."
          },
          {
            type: "texte",
            contenu: "Les particules retenues par le filtre constituent le résidu. Le liquide qui traverse le filtre est appelé filtrat."
          },
          {
            type: "methode",
            contenu: "1. Placer un filtre dans un entonnoir au-dessus d’un récipient. 2. Verser doucement le mélange dans le filtre. 3. Observer le résidu retenu et recueillir le filtrat dans le récipient."
          },
          {
            type: "schema",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" role="img" aria-label="Filtration d'un mélange d'eau et de sable">
              <path d="M80 35 L200 35 L150 125 L130 125 Z" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
              <path d="M90 42 L190 42 L150 112 L140 112 Z" fill="#fff" stroke="#64748b" stroke-width="2"/>
              <path d="M105 48 L175 48 L158 78 L122 78 Z" fill="#bfdbfe"/>
              <circle cx="126" cy="73" r="3" fill="#92400e"/>
              <circle cx="138" cy="79" r="3" fill="#92400e"/>
              <circle cx="151" cy="74" r="3" fill="#92400e"/>
              <path d="M136 125 L136 155 L144 155 L144 125" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
              <path d="M105 165 L112 250 L168 250 L175 165" fill="none" stroke="#334155" stroke-width="3"/>
              <path d="M110 215 L170 215 L168 248 L112 248 Z" fill="#93c5fd"/>
              <line x1="162" y1="76" x2="245" y2="65" stroke="#334155" stroke-width="1.5"/>
              <text x="250" y="69" font-size="15" fill="#334155">Résidu : sable</text>
              <line x1="166" y1="229" x2="245" y2="229" stroke="#334155" stroke-width="1.5"/>
              <text x="250" y="233" font-size="15" fill="#334155">Filtrat</text>
              <line x1="181" y1="49" x2="245" y2="110" stroke="#334155" stroke-width="1.5"/>
              <text x="250" y="114" font-size="15" fill="#334155">Filtre</text>
            </svg>`,
            legende: "Le filtre retient le sable : le liquide recueilli en dessous est le filtrat."
          },
          {
            type: "exemple",
            contenu: "Pour un mélange d’eau et de sable, le sable est retenu par le filtre. L’eau recueillie constitue le filtrat."
          },
          {
            type: "remarque",
            contenu: "Un filtre ordinaire ne retient pas le sel dissous dans l’eau. Il ne retient pas non plus nécessairement tous les microbes ni toutes les particules très fines."
          },
          {
            type: "remarque",
            contenu: "Un filtrat clair n’est pas forcément une eau potable. Ne bois pas une eau filtrée sans savoir si elle est propre à la consommation."
          }
        ]
      },
      {
        id: 4,
        titre: "Le tamisage",
        blocs: [
          {
            type: "definition",
            contenu: "Le tamisage permet de séparer des solides de tailles différentes à l’aide d’un tamis."
          },
          {
            type: "texte",
            contenu: "Les particules assez petites passent à travers les ouvertures du tamis. Les plus grosses sont retenues."
          },
          {
            type: "exemple",
            contenu: "Un tamis peut séparer des graviers de grains de sable plus petits, si les ouvertures laissent passer le sable mais retiennent les graviers."
          },
          {
            type: "remarque",
            contenu: "Pour être efficace, le tamis doit avoir des ouvertures adaptées à la taille des particules à séparer."
          }
        ]
      },
      {
        id: 5,
        titre: "L’évaporation",
        blocs: [
          {
            type: "definition",
            contenu: "L’évaporation est le passage progressif d’un liquide à l’état de vapeur à sa surface."
          },
          {
            type: "texte",
            contenu: "Pour certains mélanges homogènes, l’évaporation du solvant permet de récupérer un solide dissous qui ne s’évapore pas dans ces conditions."
          },
          {
            type: "exemple",
            contenu: "Lorsqu’on laisse de l’eau salée s’évaporer, le sel reste dans le récipient. Dans les marais salants, l’eau de mer s’évapore sous l’action du soleil et du vent."
          },
          {
            type: "remarque",
            contenu: "Lors d’une évaporation simple à l’air libre, la vapeur d’eau se disperse dans l’air : on récupère le sel, mais pas l’eau."
          }
        ]
      },
      {
        id: 6,
        titre: "La distillation",
        blocs: [
          {
            type: "definition",
            contenu: "La distillation est une méthode qui consiste à vaporiser un liquide, puis à refroidir sa vapeur pour la transformer de nouveau en liquide : cette dernière étape est appelée condensation."
          },
          {
            type: "texte",
            contenu: "Lors de la distillation d’eau salée, on chauffe la solution. La vapeur d’eau est refroidie et redevient liquide. Le liquide recueilli est appelé distillat ; le sel reste principalement dans le récipient de départ."
          },
          {
            type: "remarque",
            contenu: "La distillation permet ici de récupérer de l’eau, contrairement à une évaporation simple à l’air libre. Elle demande un matériel adapté et l’encadrement d’un adulte."
          },
          {
            type: "remarque",
            contenu: "Ne chauffe pas un mélange inconnu et ne réalise pas une distillation seul : le chauffage, la vapeur et le matériel chaud peuvent provoquer des brûlures."
          }
        ]
      },
      {
        id: 7,
        titre: "Le pressage",
        blocs: [
          {
            type: "definition",
            contenu: "Le pressage consiste à exercer une pression sur une matière pour en extraire une partie liquide."
          },
          {
            type: "exemple",
            contenu: "En pressant une orange, on extrait du jus de sa pulpe. Le jus obtenu peut encore contenir de petits morceaux de pulpe."
          },
          {
            type: "remarque",
            contenu: "Le pressage ne donne pas forcément un liquide pur. Si nécessaire, une autre méthode de séparation peut être utilisée ensuite."
          }
        ]
      },
      {
        id: 8,
        titre: "Choisir une méthode adaptée",
        blocs: [
          {
            type: "tableau",
            entetes: ["Mélange ou matière", "Objectif", "Méthode possible"],
            lignes: [
              ["Eau et terre", "Laisser déposer une partie de la terre", "Décantation"],
              ["Eau et sable", "Retenir le sable", "Filtration"],
              ["Sable et graviers", "Séparer selon la taille des grains", "Tamisage"],
              ["Eau salée", "Récupérer le sel", "Évaporation"],
              ["Eau salée", "Récupérer de l’eau", "Distillation"],
              ["Orange", "Extraire du jus", "Pressage"]
            ]
          },
          {
            type: "methode",
            contenu: "Pour choisir une méthode : 1. Observer le mélange. 2. Repérer les constituants et leurs propriétés : taille des particules, solubilité ou miscibilité. 3. Déterminer ce que l’on veut récupérer. 4. Choisir une méthode adaptée."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 1,
        enonce: "Quelle méthode utilise un filtre pour retenir des particules solides non dissoutes ?",
        correction: "C’est la filtration."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Comment appelle-t-on le liquide recueilli après une filtration ? Et le solide retenu par le filtre ?",
        correction: "Le liquide recueilli est le filtrat. Le solide retenu par le filtre est le résidu."
      },
      {
        niveau: 1,
        points: 1,
        enonce: "Quelle méthode permet de séparer des grains de sable et des graviers selon leur taille ?",
        correction: "On peut utiliser le tamisage avec un tamis dont les ouvertures sont adaptées."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "On laisse reposer de l’eau boueuse. Une partie de la terre se dépose au fond. Comment appelle-t-on cette méthode ?",
        correction: "C’est une décantation."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Peut-on récupérer le sel dissous dans l’eau salée avec un filtre ordinaire ?",
        correction: "Non. Le sel dissous traverse le filtre avec l’eau. On peut récupérer le sel en laissant l’eau s’évaporer."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Quelle méthode peut-on utiliser pour extraire le jus d’une orange ?",
        correction: "On peut utiliser le pressage : on exerce une pression sur l’orange pour en extraire le jus."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Après filtration, une eau paraît claire. Est-elle forcément potable ?",
        correction: "Non. Elle peut encore contenir des microbes, des substances dissoutes ou des particules très fines. Un aspect clair ne garantit pas qu’elle soit potable."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Quelle différence y a-t-il entre l’évaporation simple de l’eau salée et sa distillation ?",
        correction: "Dans les deux cas, l’eau passe en vapeur. Lors d’une évaporation simple à l’air libre, la vapeur se disperse. Lors d’une distillation, la vapeur est refroidie et le liquide obtenu est recueilli."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un mélange contient de l’eau, du sable et du sel entièrement dissous. Quelle méthode permet d’abord de retirer le sable ? Que reste-t-il dans le filtrat ?",
        correction: "La filtration permet de retenir le sable. Le filtrat contient de l’eau et du sel dissous, car le sel traverse le filtre avec l’eau."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "On dispose d’un mélange d’eau et de sable. Propose deux étapes successives pour séparer une grande partie du sable de l’eau.",
        correction: "On peut d’abord laisser reposer le mélange pour qu’une partie du sable se dépose : c’est la décantation. On verse doucement le liquide au-dessus, puis on le filtre pour retenir d’autres particules de sable."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "On souhaite récupérer le sel et de l’eau à partir d’eau salée. Quelle méthode peut-on utiliser et que récupère-t-on dans chaque partie du montage ?",
        correction: "On peut utiliser une distillation, avec un matériel adapté et l’encadrement d’un adulte. L’eau vaporisée puis condensée est recueillie sous forme de distillat. Le sel reste principalement dans le récipient de départ."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "Un élève veut séparer un mélange de sable et de graviers. Il choisit un tamis dont les ouvertures sont plus grandes que les graviers. Son choix convient-il ?",
        correction: "Non. Si les ouvertures sont plus grandes que les graviers, ceux-ci peuvent passer avec le sable. Il faut choisir des ouvertures assez grandes pour laisser passer le sable, mais assez petites pour retenir les graviers."
      }
    ]
  }
]);
