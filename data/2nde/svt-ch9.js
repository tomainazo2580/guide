enregistrerChapitres("2nde", "svt", [
  {
    id: 9,
    titre: "Chapitre 9 : Les écosystèmes et les chaînes alimentaires",
    premium: false,
    guide: false,
    lecons: [
      {
        id: 1,
        titre: "1. Qu’est-ce qu’un écosystème ?",
        blocs: [
          {
            type: "introduction",
            titre: "Un milieu et des êtres vivants en relation",
            texte: "Dans une forêt, un lac ou une mangrove, les êtres vivants interagissent entre eux et avec les conditions physiques et chimiques de leur environnement. L’étude de ces relations permet de comprendre le fonctionnement de l’ensemble."
          },
          {
            type: "definition",
            titre: "Biotope",
            texte: "Le biotope est le milieu physique et chimique considéré, caractérisé notamment par son eau, son sol, sa température et sa lumière."
          },
          {
            type: "definition",
            titre: "Biocénose",
            texte: "La biocénose est l’ensemble des populations d’êtres vivants présentes dans un biotope donné."
          },
          {
            type: "definition",
            titre: "Écosystème",
            texte: "Un écosystème est un ensemble formé par un biotope, la biocénose qui y vit et les interactions entre ces composantes."
          },
          {
            type: "exemple",
            titre: "Un lac",
            texte: "Dans un lac, l’eau, la lumière, la température et les substances dissoutes font partie des conditions du biotope. Les poissons, les plantes aquatiques et les organismes microscopiques font partie de la biocénose."
          },
          {
            type: "remarque",
            titre: "Délimiter l’étude",
            texte: "Un écosystème peut être étudié à différentes échelles. Ses limites sont souvent choisies pour l’étude et ne constituent pas nécessairement des frontières étanches."
          }
        ]
      },
      {
        id: 2,
        titre: "2. Habitat et niche écologique",
        blocs: [
          {
            type: "definition",
            titre: "Habitat",
            texte: "L’habitat est le lieu ou le type de milieu où vit une espèce et où elle trouve des conditions favorables."
          },
          {
            type: "definition",
            titre: "Niche écologique",
            texte: "La niche écologique décrit la manière dont une espèce utilise les ressources et les conditions du milieu, ainsi que ses relations avec les autres espèces. Elle ne se limite pas à l’endroit où elle vit."
          },
          {
            type: "exemple",
            titre: "Même habitat, rôles différents",
            texte: "Deux espèces d’oiseaux peuvent vivre dans une même forêt, mais rechercher des aliments différents ou utiliser des zones différentes de la végétation. Elles partagent alors une partie de leur habitat sans avoir exactement la même niche."
          },
          {
            type: "regle",
            titre: "Ne pas confondre",
            texte: "L’habitat indique principalement où vit l’espèce. La niche écologique précise notamment comment elle utilise les ressources et interagit avec son environnement."
          }
        ]
      },
      {
        id: 3,
        titre: "3. Les relations entre êtres vivants",
        blocs: [
          {
            type: "tableau",
            titre: "Quelques relations",
            entetes: ["Relation", "Description", "Exemple"],
            lignes: [
              ["Prédation", "Un organisme capture et consomme un autre organisme.", "Un oiseau capture un insecte."],
              ["Compétition", "Des organismes utilisent une même ressource limitée.", "Deux plantes voisines utilisent la lumière disponible."],
              ["Parasitisme", "Un organisme profite d’un autre en lui causant généralement un dommage.", "Un parasite vit aux dépens d’un animal hôte."],
              ["Mutualisme", "Les deux partenaires tirent un bénéfice de leur relation.", "Une abeille obtient du nectar et participe à la pollinisation d’une fleur."]
            ]
          },
          {
            type: "remarque",
            titre: "Des relations multiples",
            texte: "Une même espèce peut entretenir plusieurs relations différentes dans son milieu. Ces relations peuvent varier selon les conditions et les étapes de sa vie."
          }
        ]
      },
      {
        id: 4,
        titre: "4. Les chaînes alimentaires",
        blocs: [
          {
            type: "definition",
            titre: "Chaîne alimentaire",
            texte: "Une chaîne alimentaire représente une succession de relations alimentaires. Chaque organisme de la chaîne sert de nourriture à l’organisme qui suit."
          },
          {
            type: "regle",
            titre: "Sens des flèches",
            texte: "Dans ce cours, la flèche signifie « est mangé par » et indique le sens du transfert de matière et d’énergie : aliment → consommateur."
          },
          {
            type: "exemple",
            titre: "Exemple terrestre simplifié",
            texte: "Herbe → criquet → grenouille → serpent. L’herbe est mangée par le criquet ; le criquet peut être mangé par la grenouille ; la grenouille peut être mangée par le serpent."
          },
          {
            type: "schema",
            titre: "Une chaîne alimentaire",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 370" role="img" aria-label="Chaîne alimentaire : herbe, criquet, grenouille et serpent. Les flèches vont de l'aliment vers le consommateur.">
              <rect width="360" height="370" fill="#ffffff"/>
              <g font-family="Arial, sans-serif" text-anchor="middle" fill="#0f172a">
                <text x="180" y="25" font-size="14" font-weight="bold">Aliment → consommateur</text>
                <rect x="55" y="40" width="250" height="53" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
                <text x="180" y="62" font-size="15" font-weight="bold">Herbe</text>
                <text x="180" y="81" font-size="12">Producteur</text>
                <rect x="55" y="120" width="250" height="53" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
                <text x="180" y="142" font-size="15" font-weight="bold">Criquet</text>
                <text x="180" y="161" font-size="12">Consommateur primaire</text>
                <rect x="55" y="200" width="250" height="53" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
                <text x="180" y="222" font-size="15" font-weight="bold">Grenouille</text>
                <text x="180" y="241" font-size="12">Consommateur secondaire</text>
                <rect x="55" y="280" width="250" height="53" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
                <text x="180" y="302" font-size="15" font-weight="bold">Serpent</text>
                <text x="180" y="321" font-size="12">Consommateur</text>
                <text x="180" y="356" font-size="11" fill="#475569">Exemple simplifié : la flèche signifie « est mangé par ».</text>
              </g>
              <g stroke="#475569" stroke-width="3" fill="#475569">
                <path d="M180 96 V112"/>
                <path d="M174 108 L180 117 L186 108 Z"/>
                <path d="M180 176 V192"/>
                <path d="M174 188 L180 197 L186 188 Z"/>
                <path d="M180 256 V272"/>
                <path d="M174 268 L180 277 L186 268 Z"/>
              </g>
            </svg>`,
            legende: "Chaque flèche va de l’organisme mangé vers celui qui le mange. Cette chaîne représente seulement quelques relations possibles dans un milieu."
          },
          {
            type: "definition",
            titre: "Maillon et niveau trophique",
            texte: "Chaque élément représenté dans une chaîne est appelé maillon. Un niveau trophique correspond à une position générale dans les relations alimentaires : producteur, consommateur primaire, consommateur secondaire, etc."
          },
          {
            type: "remarque",
            titre: "Un modèle simplifié",
            texte: "Une chaîne ne montre qu’une partie des relations alimentaires. Dans la nature, une espèce peut consommer plusieurs aliments et être consommée par plusieurs espèces."
          }
        ]
      },
      {
        id: 5,
        titre: "5. Producteurs, consommateurs et décomposeurs",
        blocs: [
          {
            type: "definition",
            titre: "Producteurs",
            texte: "Dans une chaîne fondée sur la photosynthèse, les producteurs sont notamment les plantes vertes et les algues. Ils fabriquent de la matière organique à partir de matière minérale grâce à l’énergie lumineuse."
          },
          {
            type: "definition",
            titre: "Consommateurs",
            texte: "Les consommateurs obtiennent leur matière organique en consommant d’autres êtres vivants ou leur matière. Un consommateur primaire mange un producteur ; un consommateur secondaire mange un consommateur primaire."
          },
          {
            type: "definition",
            titre: "Décomposeurs",
            texte: "Les décomposeurs, notamment de nombreuses bactéries et de nombreux champignons, transforment la matière organique morte et les déchets. Leur activité contribue au retour de substances minérales dans le milieu."
          },
          {
            type: "exemple",
            titre: "Reconnaître les rôles",
            texte: "Dans la chaîne herbe → criquet → grenouille, l’herbe est productrice, le criquet est consommateur primaire et la grenouille est consommatrice secondaire. Les décomposeurs peuvent agir sur les restes et déchets issus de tous ces organismes."
          },
          {
            type: "remarque",
            titre: "Des positions variables",
            texte: "Le rôle d’un organisme dans une chaîne dépend de ce qu’il mange dans la situation étudiée. Un animal qui consomme différents types d’aliments peut occuper différentes positions dans un réseau alimentaire."
          }
        ]
      },
      {
        id: 6,
        titre: "6. Réseaux alimentaires, matière et énergie",
        blocs: [
          {
            type: "definition",
            titre: "Réseau alimentaire",
            texte: "Un réseau alimentaire est un ensemble de chaînes alimentaires reliées entre elles dans un milieu."
          },
          {
            type: "exemple",
            titre: "Plusieurs relations",
            texte: "Si une plante est mangée par un criquet et par un autre herbivore, et si la grenouille mange le criquet tandis qu’un oiseau mange aussi cet insecte, les chaînes correspondantes se croisent et forment une partie d’un réseau alimentaire."
          },
          {
            type: "regle",
            titre: "Transferts de matière",
            texte: "La matière passe entre organismes lors de l’alimentation. Les déchets et les restes sont transformés notamment par les décomposeurs ; des substances minérales peuvent ensuite être à nouveau utilisées par les producteurs."
          },
          {
            type: "regle",
            titre: "Transferts d’énergie",
            texte: "L’énergie lumineuse captée par les producteurs est transférée en partie aux consommateurs. À chaque niveau, une partie de l’énergie est utilisée par les organismes et dissipée notamment sous forme de chaleur : elle n’est pas recyclée comme la matière."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre matière et énergie",
            texte: "Des éléments de matière peuvent circuler et être réutilisés dans l’écosystème. L’énergie, elle, traverse le système et une partie est dissipée sous forme de chaleur."
          }
        ]
      },
      {
        id: 7,
        titre: "7. Quelques écosystèmes à Madagascar",
        blocs: [
          {
            type: "tableau",
            titre: "Exemples de milieux",
            entetes: ["Milieu", "Conditions ou caractéristiques", "Exemples d’êtres vivants"],
            lignes: [
              ["Forêt humide de l’Est", "Pluies généralement abondantes et végétation dense", "Arbres, fougères, insectes, lémuriens"],
              ["Forêt sèche de l’Ouest", "Saison sèche marquée dans de nombreuses zones", "Arbres adaptés à la saison sèche, oiseaux, insectes"],
              ["Littoral et mangrove", "Influence de la mer et des marées ; salinité variable", "Palétuviers, crabes, poissons, oiseaux"],
              ["Lac", "Milieu d’eau douce aux conditions variables selon le lac", "Plantes aquatiques, poissons, organismes microscopiques"],
              ["Montagne", "Conditions variant notamment avec l’altitude", "Végétation et animaux adaptés aux conditions locales"]
            ]
          },
          {
            type: "remarque",
            titre: "Chaque milieu est particulier",
            texte: "Ces exemples sont généraux. Les espèces et les conditions varient d’un site à l’autre. Une forêt, une rizière ou une zone humide peut aussi être fortement influencée par les activités humaines."
          }
        ]
      },
      {
        id: 8,
        titre: "8. Les effets d’une modification du milieu",
        blocs: [
          {
            type: "introduction",
            titre: "Des conséquences en chaîne",
            texte: "Une modification du milieu ou d’une population peut affecter d’autres organismes. Les effets dépendent des relations du réseau alimentaire et des conditions locales."
          },
          {
            type: "exemple",
            titre: "Une baisse des producteurs",
            texte: "Dans une chaîne simplifiée herbe → criquet → grenouille, une forte diminution de l’herbe peut réduire la nourriture disponible pour les criquets. Cela peut ensuite affecter les grenouilles, mais le résultat réel dépend aussi des autres aliments et facteurs."
          },
          {
            type: "methode",
            titre: "Raisonner sur une perturbation",
            texte: "1. Repérer l’élément modifié. 2. Identifier ses relations directes avec les autres organismes. 3. Proposer des conséquences possibles, sans les présenter automatiquement comme certaines. 4. Préciser les autres facteurs ou ressources qui peuvent influencer le résultat."
          },
          {
            type: "remarque",
            titre: "Un écosystème évolue",
            texte: "Un écosystème n’est pas immobile. Les populations et les conditions changent naturellement, et les activités humaines peuvent aussi modifier leur fonctionnement."
          }
        ]
      },
      {
        id: 9,
        titre: "9. L’essentiel à retenir",
        blocs: [
          {
            type: "rappel",
            titre: "Écosystème",
            texte: "Un écosystème comprend un biotope, une biocénose et leurs interactions. L’habitat correspond au lieu de vie ; la niche écologique décrit plus largement l’utilisation des ressources et les relations de l’espèce."
          },
          {
            type: "rappel",
            titre: "Alimentation",
            texte: "Une chaîne alimentaire représente des relations où la flèche va de l’aliment vers le consommateur. Plusieurs chaînes liées forment un réseau alimentaire."
          },
          {
            type: "rappel",
            titre: "Matière et énergie",
            texte: "Les producteurs fabriquent de la matière organique ; les consommateurs l’obtiennent en se nourrissant ; les décomposeurs transforment les restes et déchets. La matière peut être réutilisée, tandis qu’une partie de l’énergie est dissipée sous forme de chaleur."
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Définis les mots « biotope », « biocénose » et « écosystème ».",
        correction: "Le biotope est le milieu physique et chimique considéré. La biocénose est l’ensemble des populations d’êtres vivants qui y sont présentes. L’écosystème associe le biotope, la biocénose et leurs interactions."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans la chaîne herbe → criquet → grenouille, que signifie la flèche ? Identifie le producteur et le consommateur primaire.",
        correction: "La flèche signifie « est mangé par » et va de l’aliment vers le consommateur. L’herbe est le producteur ; le criquet est le consommateur primaire."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un lac, on relève : eau, température, poissons, plantes aquatiques et organismes microscopiques. Classe ces éléments entre biotope et biocénose.",
        correction: "Biotope : eau et température. Biocénose : poissons, plantes aquatiques et organismes microscopiques."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux espèces d’oiseaux vivent dans la même forêt. L’une mange surtout des insectes sur les troncs ; l’autre mange surtout des fruits dans la cime des arbres. Explique la différence entre leur habitat et leur niche écologique.",
        correction: "Les deux espèces partagent un habitat général : la forêt. Leurs niches diffèrent notamment par les ressources alimentaires et les parties de la végétation qu’elles utilisent."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On étudie la chaîne herbe → criquet → grenouille → serpent. 1. Identifie le producteur, le consommateur primaire et le consommateur secondaire. 2. Que mange le serpent dans cette chaîne ? 3. Quel rôle les décomposeurs peuvent-ils jouer après la mort de ces organismes ?",
        correction: "1. L’herbe est productrice, le criquet est consommateur primaire et la grenouille est consommateur secondaire. 2. Dans cette chaîne, le serpent mange la grenouille. 3. Les décomposeurs transforment les restes des organismes et contribuent au retour de substances minérales dans le milieu."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un milieu, une plante est mangée par un criquet et par une chenille. Le criquet est mangé par une grenouille et par un oiseau. La chenille est mangée par l’oiseau. Écris deux chaînes alimentaires possibles et explique pourquoi elles font partie d’un réseau.",
        correction: "Deux chaînes possibles sont : plante → criquet → grenouille et plante → chenille → oiseau. On peut aussi écrire plante → criquet → oiseau. Elles forment une partie d’un réseau car elles partagent des organismes et représentent plusieurs relations alimentaires liées."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un élève affirme : « Les décomposeurs ne servent à rien dans un écosystème, car ils ne produisent pas de lumière. » Explique leur rôle et corrige sa conclusion.",
        correction: "Les décomposeurs, notamment de nombreuses bactéries et de nombreux champignons, transforment les restes et déchets organiques. Leur activité contribue au retour de substances minérales qui peuvent être réutilisées par les producteurs. Ils ont donc un rôle important même s’ils ne produisent pas de lumière."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un réseau simplifié, des plantes sont mangées par des criquets et des chenilles. Les criquets sont mangés par des grenouilles et des oiseaux ; les chenilles sont mangées par des oiseaux. Une sécheresse réduit fortement la quantité de plantes. 1. Quels consommateurs sont directement concernés ? 2. Propose une conséquence possible pour les grenouilles et les oiseaux. 3. Pourquoi cette conséquence n’est-elle pas certaine ? 4. Quel rôle jouent les décomposeurs sur les restes des organismes ?",
        correction: "1. Les criquets et les chenilles sont directement concernés car ils se nourrissent des plantes. 2. Si leurs proies diminuent, les grenouilles et les oiseaux pourraient disposer de moins de nourriture. 3. Le résultat dépend d’autres facteurs, notamment de la durée de la sécheresse et de la présence éventuelle d’autres aliments. 4. Les décomposeurs transforment les restes et contribuent au retour de substances minérales dans le milieu."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On étudie une chaîne simplifiée : plante verte → insecte herbivore → oiseau. Après la mort des organismes, leurs restes sont transformés par des décomposeurs. 1. Indique la source d’énergie utilisée par la plante pour la photosynthèse. 2. Décris le transfert de matière vers l’oiseau. 3. Explique le rôle des décomposeurs dans la réutilisation de la matière. 4. Un élève affirme : « L’énergie est recyclée exactement comme la matière. » Corrige son affirmation.",
        correction: "1. La plante utilise l’énergie lumineuse. 2. L’insecte obtient de la matière en mangeant la plante ; l’oiseau en obtient en mangeant l’insecte. 3. Les décomposeurs transforment les restes et libèrent notamment des substances minérales qui peuvent être utilisées par les producteurs. 4. L’énergie est transférée en partie entre les niveaux, mais une partie est utilisée et dissipée sous forme de chaleur. Elle n’est pas recyclée exactement comme les éléments de matière."
      }
    ]
  }
]);
