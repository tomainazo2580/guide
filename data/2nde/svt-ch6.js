enregistrerChapitres("2nde", "svt", [
  {
    id: 6,
    titre: "Chapitre 6 : Les tissus animaux",
    premium: false,
    guide: false,
    lecons: [
      {
        id: 1,
        titre: "1. De la cellule à l’organisme",
        blocs: [
          {
            type: "introduction",
            titre: "Des cellules organisées",
            texte: "Dans un organisme animal pluricellulaire, les cellules ne sont pas disposées au hasard. Des cellules spécialisées s’associent et participent ensemble à différentes fonctions."
          },
          {
            type: "definition",
            titre: "Tissu",
            texte: "Un tissu est un ensemble organisé de cellules associées, généralement accompagnées de matière extracellulaire, qui participe à une ou plusieurs fonctions."
          },
          {
            type: "definition",
            titre: "Histologie",
            texte: "L’histologie est l’étude des tissus, notamment de leur organisation et de leurs structures observables au microscope."
          },
          {
            type: "regle",
            titre: "Niveaux d’organisation",
            texte: "Des cellules s’organisent en tissus ; plusieurs tissus participent à la constitution d’un organe ; des organes associés contribuent au fonctionnement d’un organisme."
          },
          {
            type: "exemple",
            titre: "Exemple d’un organe",
            texte: "L’intestin est un organe constitué de plusieurs tissus, dont un épithélium, du tissu conjonctif, du tissu musculaire et du tissu nerveux. Ces tissus contribuent ensemble à son fonctionnement."
          }
        ]
      },
      {
        id: 2,
        titre: "2. Les grandes catégories de tissus animaux",
        blocs: [
          {
            type: "tableau",
            titre: "Quatre grandes catégories",
            entetes: ["Catégorie", "Caractéristiques et fonctions générales"],
            lignes: [
              ["Tissu épithélial", "Cellules rapprochées formant notamment des revêtements ou des glandes."],
              ["Tissu conjonctif", "Cellules dispersées dans une matière extracellulaire souvent abondante ; soutien, liaison, protection ou réserve selon le tissu."],
              ["Tissu musculaire", "Cellules spécialisées dans la contraction."],
              ["Tissu nerveux", "Cellules spécialisées participant notamment à la réception, au traitement et à la transmission d’informations."]
            ]
          },
          {
            type: "remarque",
            titre: "Une classification générale",
            texte: "Chaque catégorie comprend plusieurs tissus spécialisés. Leur aspect et leurs fonctions varient selon leur localisation dans l’organisme."
          }
        ]
      },
      {
        id: 3,
        titre: "3. Les épithéliums de revêtement",
        blocs: [
          {
            type: "definition",
            titre: "Épithélium de revêtement",
            texte: "Un épithélium de revêtement est un tissu formé de cellules étroitement associées, qui couvre une surface ou tapisse une cavité de l’organisme."
          },
          {
            type: "definition",
            titre: "Épithélium simple",
            texte: "Un épithélium simple est constitué d’une seule couche de cellules. Il peut faciliter certains échanges ou l’absorption selon l’organe où il se trouve."
          },
          {
            type: "definition",
            titre: "Épithélium stratifié",
            texte: "Un épithélium stratifié est constitué de plusieurs couches de cellules superposées. Il peut jouer un rôle important de protection."
          },
          {
            type: "schema",
            titre: "Épithélium simple et épithélium stratifié",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 390" role="img" aria-label="Comparaison entre un épithélium simple à une couche de cellules et un épithélium stratifié à plusieurs couches">
              <rect width="360" height="390" fill="#ffffff"/>
              <g font-family="Arial, sans-serif" fill="#0f172a">
                <text x="16" y="25" font-size="15" font-weight="bold">1. Épithélium simple</text>
                <text x="16" y="45" font-size="12">Une seule couche de cellules</text>
                <text x="16" y="200" font-size="15" font-weight="bold">2. Épithélium stratifié</text>
                <text x="16" y="220" font-size="12">Plusieurs couches de cellules</text>
              </g>

              <!-- Épithélium simple -->
              <g fill="#bfdbfe" stroke="#2563eb" stroke-width="2">
                <rect x="34" y="70" width="42" height="62"/>
                <rect x="76" y="70" width="42" height="62"/>
                <rect x="118" y="70" width="42" height="62"/>
                <rect x="160" y="70" width="42" height="62"/>
                <rect x="202" y="70" width="42" height="62"/>
              </g>
              <g fill="#7c3aed">
                <ellipse cx="55" cy="102" rx="8" ry="11"/>
                <ellipse cx="97" cy="102" rx="8" ry="11"/>
                <ellipse cx="139" cy="102" rx="8" ry="11"/>
                <ellipse cx="181" cy="102" rx="8" ry="11"/>
                <ellipse cx="223" cy="102" rx="8" ry="11"/>
              </g>
              <path d="M34 136 H244" stroke="#a16207" stroke-width="4"/>
              <rect x="34" y="140" width="210" height="26" fill="#fef3c7"/>
              <g font-family="Arial, sans-serif" fill="#0f172a" font-size="11">
                <text x="260" y="88">Cellules</text>
                <text x="260" y="140">Base de</text>
                <text x="260" y="153">l’épithélium</text>
                <text x="42" y="157">Tissu sous-jacent</text>
              </g>
              <g stroke="#475569" stroke-width="1.5" fill="none">
                <path d="M238 83 H256"/>
                <path d="M244 136 H256"/>
              </g>

              <!-- Épithélium stratifié -->
              <g fill="#bfdbfe" stroke="#2563eb" stroke-width="2">
                <rect x="34" y="247" width="42" height="30"/>
                <rect x="76" y="247" width="42" height="30"/>
                <rect x="118" y="247" width="42" height="30"/>
                <rect x="160" y="247" width="42" height="30"/>
                <rect x="202" y="247" width="42" height="30"/>

                <rect x="34" y="277" width="42" height="30"/>
                <rect x="76" y="277" width="42" height="30"/>
                <rect x="118" y="277" width="42" height="30"/>
                <rect x="160" y="277" width="42" height="30"/>
                <rect x="202" y="277" width="42" height="30"/>

                <rect x="34" y="307" width="42" height="30"/>
                <rect x="76" y="307" width="42" height="30"/>
                <rect x="118" y="307" width="42" height="30"/>
                <rect x="160" y="307" width="42" height="30"/>
                <rect x="202" y="307" width="42" height="30"/>
              </g>
              <g fill="#7c3aed">
                <ellipse cx="55" cy="262" rx="7" ry="6"/><ellipse cx="97" cy="262" rx="7" ry="6"/><ellipse cx="139" cy="262" rx="7" ry="6"/><ellipse cx="181" cy="262" rx="7" ry="6"/><ellipse cx="223" cy="262" rx="7" ry="6"/>
                <ellipse cx="55" cy="292" rx="7" ry="6"/><ellipse cx="97" cy="292" rx="7" ry="6"/><ellipse cx="139" cy="292" rx="7" ry="6"/><ellipse cx="181" cy="292" rx="7" ry="6"/><ellipse cx="223" cy="292" rx="7" ry="6"/>
                <ellipse cx="55" cy="322" rx="7" ry="6"/><ellipse cx="97" cy="322" rx="7" ry="6"/><ellipse cx="139" cy="322" rx="7" ry="6"/><ellipse cx="181" cy="322" rx="7" ry="6"/><ellipse cx="223" cy="322" rx="7" ry="6"/>
              </g>
              <path d="M34 341 H244" stroke="#a16207" stroke-width="4"/>
              <rect x="34" y="345" width="210" height="24" fill="#fef3c7"/>
              <g font-family="Arial, sans-serif" fill="#0f172a" font-size="11">
                <text x="260" y="275">Couches</text>
                <text x="260" y="288">de cellules</text>
                <text x="42" y="361">Tissu sous-jacent</text>
                <text x="16" y="383" fill="#475569">Modèles simplifiés, sans échelle.</text>
              </g>
              <path d="M244 288 H256" stroke="#475569" stroke-width="1.5" fill="none"/>
            </svg>`,
            legende: "Dans un épithélium simple, les cellules forment une seule couche. Dans un épithélium stratifié, elles forment plusieurs couches superposées. Les formes réelles des cellules varient selon les tissus."
          },
          {
            type: "exemple",
            titre: "Deux exemples",
            texte: "L’épithélium qui tapisse une partie de l’intestin est simple et participe notamment à l’absorption. L’épiderme de la peau est un épithélium stratifié qui participe à la protection."
          },
          {
            type: "methode",
            titre: "Reconnaître le nombre de couches",
            texte: "Sur une coupe microscopique adaptée, repérer la surface de l’épithélium puis examiner l’organisation des cellules entre cette surface et le tissu sous-jacent. Une seule couche indique un épithélium simple ; plusieurs couches superposées indiquent un épithélium stratifié."
          },
          {
            type: "remarque",
            titre: "Observer avec prudence",
            texte: "La forme et l’orientation de la coupe peuvent rendre l’interprétation difficile. Il faut considérer l’ensemble de l’organisation et ne pas compter uniquement les noyaux visibles."
          }
        ]
      },
      {
        id: 4,
        titre: "4. Les épithéliums glandulaires",
        blocs: [
          {
            type: "definition",
            titre: "Épithélium glandulaire",
            texte: "Un épithélium glandulaire est un tissu dont les cellules sont spécialisées dans la production et la sécrétion de substances."
          },
          {
            type: "definition",
            titre: "Glande exocrine",
            texte: "Une glande exocrine libère sa sécrétion vers une surface ou dans une cavité, généralement par un conduit."
          },
          {
            type: "definition",
            titre: "Glande endocrine",
            texte: "Une glande endocrine libère des hormones dans le milieu intérieur ; celles-ci rejoignent notamment le sang et peuvent agir sur des cellules cibles à distance."
          },
          {
            type: "tableau",
            titre: "Exemples",
            entetes: ["Glande", "Type", "Sécrétion ou destination"],
            lignes: [
              ["Glande salivaire", "Exocrine", "La salive est libérée dans la bouche par des conduits."],
              ["Glande sudoripare", "Exocrine", "La sueur est libérée vers la surface de la peau par un conduit."],
              ["Thyroïde", "Endocrine", "Elle libère des hormones qui rejoignent le sang."]
            ]
          },
          {
            type: "remarque",
            titre: "Certains organes ont plusieurs fonctions",
            texte: "Un même organe peut comporter des parties ayant des fonctions exocrines et endocrines. Il faut donc distinguer les types de sécrétion plutôt que supposer qu’un organe n’a qu’une seule fonction."
          }
        ]
      },
      {
        id: 5,
        titre: "5. Les tissus conjonctifs",
        blocs: [
          {
            type: "definition",
            titre: "Tissu conjonctif",
            texte: "Un tissu conjonctif est un tissu dont les cellules sont séparées par une matière extracellulaire appelée matrice. Selon le tissu, cette matrice peut contenir des fibres et avoir une consistance variable."
          },
          {
            type: "definition",
            titre: "Matrice extracellulaire",
            texte: "La matrice extracellulaire est la matière située entre les cellules d’un tissu. Dans les tissus conjonctifs, elle joue un rôle important dans les propriétés mécaniques et les fonctions du tissu."
          },
          {
            type: "tableau",
            titre: "Quelques tissus conjonctifs",
            entetes: ["Tissu", "Caractéristiques et rôle"],
            lignes: [
              ["Conjonctif lâche", "Matrice relativement souple ; participe notamment à la liaison et au soutien de tissus."],
              ["Conjonctif dense", "Riche en fibres ; résiste à des tensions. Les tendons en sont un exemple."],
              ["Adipeux", "Riche en cellules stockant des graisses ; réserve d’énergie, protection et isolation selon sa localisation."],
              ["Élastique", "Riche en fibres élastiques ; permet une déformation suivie d’un retour vers la forme initiale."],
              ["Cartilagineux", "Matrice ferme et souple ; soutient certaines structures et participe au fonctionnement de certaines articulations."],
              ["Osseux", "Matrice minéralisée, rigide ; participe au soutien et à la protection."]
            ]
          },
          {
            type: "exemple",
            titre: "Relier structure et fonction",
            texte: "Un tendon relie un muscle à un os. Sa richesse en fibres résistantes lui permet de transmettre des forces. Le cartilage articulaire, lui, offre une surface adaptée au mouvement entre certains os."
          },
          {
            type: "remarque",
            titre: "Cellules et matrice",
            texte: "Le tissu conjonctif n’est pas constitué uniquement de fibres ou de matrice : il contient aussi des cellules. Les proportions et la composition varient selon le type de tissu."
          }
        ]
      },
      {
        id: 6,
        titre: "6. Les tissus musculaires",
        blocs: [
          {
            type: "definition",
            titre: "Tissu musculaire",
            texte: "Le tissu musculaire est constitué de cellules spécialisées capables de se contracter. Cette contraction permet de produire une force."
          },
          {
            type: "tableau",
            titre: "Trois types principaux",
            entetes: ["Type", "Localisation ou exemple", "Fonction générale"],
            lignes: [
              ["Musculaire strié squelettique", "Muscles reliés au squelette", "Participe notamment aux mouvements volontaires et au maintien de la posture."],
              ["Musculaire strié cardiaque", "Paroi du cœur", "Sa contraction rythmique participe à la circulation du sang."],
              ["Musculaire lisse", "Paroi de nombreux organes, comme l’intestin et certains vaisseaux", "Participe à des mouvements involontaires des organes."]
            ]
          },
          {
            type: "remarque",
            titre: "Volontaire et involontaire",
            texte: "Le contrôle des muscles squelettiques peut être volontaire, même si certaines de leurs contractions sont réflexes. Les contractions du muscle cardiaque et de nombreux muscles lisses ne dépendent pas de la volonté."
          }
        ]
      },
      {
        id: 7,
        titre: "7. Le tissu nerveux",
        blocs: [
          {
            type: "definition",
            titre: "Tissu nerveux",
            texte: "Le tissu nerveux est un tissu spécialisé dans la réception, le traitement et la transmission d’informations. Il comprend notamment des neurones et des cellules qui les accompagnent."
          },
          {
            type: "definition",
            titre: "Neurone",
            texte: "Un neurone est une cellule nerveuse spécialisée dans la réception et la transmission de messages. Il possède généralement un corps cellulaire et des prolongements."
          },
          {
            type: "remarque",
            titre: "D’autres cellules importantes",
            texte: "Le tissu nerveux contient aussi des cellules gliales qui assurent notamment des fonctions de soutien et participent au bon fonctionnement des neurones."
          },
          {
            type: "exemple",
            titre: "Dans un organe",
            texte: "Dans la paroi intestinale, du tissu nerveux participe à la coordination de l’activité locale, notamment de certains mouvements musculaires."
          }
        ]
      },
      {
        id: 8,
        titre: "8. Observer et comparer des tissus",
        blocs: [
          {
            type: "methode",
            titre: "Analyser une description ou une coupe",
            texte: "1. Repérer l’organisation des cellules : sont-elles très rapprochées ou séparées par une matrice abondante ? 2. Chercher des caractéristiques utiles : couches, fibres, cellules contractiles ou prolongements. 3. Relier les indices à une catégorie de tissu. 4. Vérifier que la fonction proposée est cohérente avec la description."
          },
          {
            type: "exemple",
            titre: "Reconnaître deux tissus",
            texte: "Un ensemble de cellules très rapprochées formant une couche qui tapisse une cavité évoque un épithélium de revêtement. Un ensemble de cellules séparées par une matrice riche en fibres évoque un tissu conjonctif."
          },
          {
            type: "remarque",
            titre: "Rester prudent",
            texte: "Une seule caractéristique ne suffit pas toujours à identifier précisément un tissu. La qualité de la coupe et les informations disponibles influencent la conclusion."
          }
        ]
      },
      {
        id: 9,
        titre: "9. L’essentiel à retenir",
        blocs: [
          {
            type: "rappel",
            titre: "Bilan",
            texte: "Un tissu est un ensemble organisé de cellules et de matière extracellulaire. Les grandes catégories de tissus animaux sont les tissus épithéliaux, conjonctifs, musculaires et nerveux."
          },
          {
            type: "rappel",
            titre: "Épithéliums et glandes",
            texte: "Un épithélium simple possède une couche de cellules ; un épithélium stratifié en possède plusieurs. Une glande exocrine sécrète généralement par un conduit vers une surface ou une cavité ; une glande endocrine libère des hormones dans le milieu intérieur."
          },
          {
            type: "rappel",
            titre: "Fonctions",
            texte: "Les tissus conjonctifs participent notamment au soutien, à la liaison ou à la réserve. Les tissus musculaires se contractent. Le tissu nerveux participe au traitement et à la transmission d’informations."
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Définis un tissu et cite les quatre grandes catégories de tissus animaux étudiées.",
        correction: "Un tissu est un ensemble organisé de cellules associées, généralement accompagnées de matière extracellulaire, participant à une ou plusieurs fonctions. Les quatre catégories étudiées sont les tissus épithéliaux, conjonctifs, musculaires et nerveux."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle différence distingue un épithélium simple d’un épithélium stratifié ?",
        correction: "Un épithélium simple possède une seule couche de cellules. Un épithélium stratifié possède plusieurs couches de cellules superposées."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une glande salivaire libère sa sécrétion dans la bouche par un conduit. La thyroïde libère des hormones qui rejoignent le sang. Classe chacune comme glande exocrine ou endocrine et justifie.",
        correction: "La glande salivaire est exocrine : elle libère sa sécrétion dans la bouche par un conduit. La thyroïde est endocrine : elle libère des hormones dans le milieu intérieur, qui rejoignent notamment le sang."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Associe chaque tissu à une fonction : 1. tissu musculaire ; 2. tissu nerveux ; 3. tissu adipeux. Fonctions : a. stockage de graisses ; b. contraction ; c. participation à la transmission d’informations.",
        correction: "1-b : le tissu musculaire se contracte. 2-c : le tissu nerveux participe à la transmission d’informations. 3-a : le tissu adipeux stocke notamment des graisses."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On décrit deux tissus. A est constitué de cellules très rapprochées formant une seule couche qui tapisse une cavité. B contient des cellules séparées par une matrice abondante riche en fibres résistantes. 1. Identifie la catégorie de chaque tissu. 2. Précise le type d’épithélium de A. 3. Propose une fonction possible pour B.",
        correction: "1. A est un tissu épithélial de revêtement ; B est un tissu conjonctif. 2. A est un épithélium simple, car il comporte une seule couche. 3. La richesse de B en fibres résistantes peut lui permettre de résister à des tensions et de participer au soutien ou à la liaison."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un tendon relie un muscle à un os. Il est riche en fibres résistantes. Un élève affirme : « Le tendon est un tissu musculaire puisqu’il est relié à un muscle. » Analyse son affirmation et explique en quoi sa structure est adaptée à son rôle.",
        correction: "L’affirmation est incorrecte : le tendon est constitué principalement de tissu conjonctif dense, même s’il est relié à un muscle. Ses nombreuses fibres résistantes l’aident à supporter et à transmettre les forces entre le muscle et l’os."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On étudie trois tissus musculaires : A se trouve dans un muscle relié au squelette ; B forme la paroi du cœur ; C se trouve dans la paroi de l’intestin. Nomme le type principal de tissu musculaire pour A, B et C, puis indique une fonction de chacun.",
        correction: "A : tissu musculaire strié squelettique, qui participe notamment aux mouvements du squelette. B : tissu musculaire strié cardiaque, dont la contraction participe à la circulation du sang. C : tissu musculaire lisse, qui participe notamment aux mouvements de l’intestin."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On décrit un organe possédant une surface interne tapissée d’une couche de cellules rapprochées. Sous ce revêtement se trouve un tissu riche en matrice et en fibres. Plus profondément, des cellules contractiles participent aux mouvements de l’organe, tandis que des cellules nerveuses contribuent à leur coordination. 1. Identifie les quatre catégories de tissus décrites. 2. Précise le type de revêtement. 3. Explique pourquoi cet exemple montre qu’un organe n’est pas constitué d’un seul tissu.",
        correction: "1. La couche de cellules rapprochées est un tissu épithélial ; le tissu riche en matrice et en fibres est conjonctif ; les cellules contractiles constituent un tissu musculaire ; les cellules nerveuses appartiennent au tissu nerveux. 2. Le revêtement est un épithélium simple puisqu’il comporte une seule couche. 3. L’organe associe plusieurs tissus aux fonctions complémentaires : revêtement, soutien, mouvement et coordination."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une élève observe deux préparations. Dans A, plusieurs couches de cellules très rapprochées recouvrent une surface. Dans B, des cellules sont dispersées dans une matrice rigide et minéralisée. Elle affirme : « A est un tissu conjonctif parce qu’il protège ; B est un épithélium parce qu’il est rigide. » 1. Corrige l’identification de A et de B. 2. Justifie avec les indices d’organisation. 3. Explique pourquoi la seule fonction de protection ne suffit pas à identifier la catégorie d’un tissu.",
        correction: "1. A est un épithélium de revêtement stratifié. B est un tissu conjonctif osseux. 2. A possède plusieurs couches de cellules rapprochées ; B contient des cellules dans une matrice minéralisée caractéristique du tissu osseux. 3. Plusieurs catégories de tissus peuvent participer à la protection. Il faut considérer l’organisation des cellules et de la matrice, ainsi que les autres indices disponibles."
      }
    ]
  }
]);
