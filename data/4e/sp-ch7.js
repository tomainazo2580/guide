// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch7",
    titre: "Chapitre 7 : Les ions et leur identification",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch7-lecon1",
        titre: "De l'atome à l'ion",
        blocs: [
          {
            type: "texte",
            titre: "Rappel : l'atome",
            texte: "Un atome neutre possède autant de protons que d'électrons. Les charges positives des protons compensent les charges négatives des électrons."
          },
          {
            type: "definition",
            titre: "Ion",
            texte: "Un ion est une entité qui porte une charge électrique. Il peut être formé à partir d'un atome ou d'un groupe d'atomes."
          },
          {
            type: "definition",
            titre: "Ion monoatomique",
            texte: "Un ion monoatomique est formé à partir d'un seul atome qui a perdu ou gagné un ou plusieurs électrons. Son noyau ne change pas lors de cette transformation."
          },
          {
            type: "regle",
            titre: "Perte ou gain d'électrons",
            texte: "Si un atome perd un ou plusieurs électrons, il devient un ion positif, appelé cation.\nS'il gagne un ou plusieurs électrons, il devient un ion négatif, appelé anion."
          },
          {
            type: "exemple",
            titre: "L'ion sodium",
            texte: "Un atome de sodium Na possède 11 protons et 11 électrons. S'il perd un électron, il possède toujours 11 protons mais seulement 10 électrons. Il devient l'ion sodium Na⁺, de charge positive."
          },
          {
            type: "exemple",
            titre: "L'ion chlorure",
            texte: "Un atome de chlore Cl possède 17 protons et 17 électrons. S'il gagne un électron, il possède toujours 17 protons mais 18 électrons. Il devient l'ion chlorure Cl⁻, de charge négative."
          }
        ]
      },
      {
        id: "sp4-ch7-lecon2",
        titre: "Lire les formules des ions",
        blocs: [
          {
            type: "texte",
            titre: "La charge dans la formule",
            texte: "La charge d'un ion est indiquée en haut à droite de sa formule. Le signe + indique un ion positif ; le signe − indique un ion négatif."
          },
          {
            type: "exemple",
            titre: "Des charges différentes",
            texte: "Na⁺ porte une charge positive ; Ca²⁺ porte deux charges positives ; Cl⁻ porte une charge négative ; O²⁻ porte deux charges négatives. Un ion Ca²⁺ provient d'un atome de calcium ayant perdu deux électrons."
          },
          {
            type: "tableau",
            titre: "Quelques ions monoatomiques",
            entetes: ["Nom", "Formule", "Charge"],
            lignes: [
              ["Ion sodium", "Na⁺", "Positive"],
              ["Ion calcium", "Ca²⁺", "Positive"],
              ["Ion cuivre(II)", "Cu²⁺", "Positive"],
              ["Ion fer(II)", "Fe²⁺", "Positive"],
              ["Ion fer(III)", "Fe³⁺", "Positive"],
              ["Ion chlorure", "Cl⁻", "Négative"]
            ]
          },
          {
            type: "remarque",
            titre: "Un même élément peut former plusieurs ions",
            texte: "Le fer peut former notamment les ions Fe²⁺ et Fe³⁺. Ils ne portent pas la même charge et n'ont pas le même nombre d'électrons."
          }
        ]
      },
      {
        id: "sp4-ch7-lecon3",
        titre: "Les ions polyatomiques",
        blocs: [
          {
            type: "definition",
            titre: "Ion polyatomique",
            texte: "Un ion polyatomique est un groupe d'atomes liés entre eux qui porte une charge électrique globale."
          },
          {
            type: "tableau",
            titre: "Quelques ions polyatomiques",
            entetes: ["Nom", "Formule", "Composition et charge"],
            lignes: [
              ["Ion hydroxyde", "OH⁻", "1 atome O et 1 atome H ; charge globale négative"],
              ["Ion nitrate", "NO₃⁻", "1 atome N et 3 atomes O ; charge globale négative"],
              ["Ion sulfate", "SO₄²⁻", "1 atome S et 4 atomes O ; deux charges négatives"],
              ["Ion carbonate", "CO₃²⁻", "1 atome C et 3 atomes O ; deux charges négatives"],
              ["Ion ammonium", "NH₄⁺", "1 atome N et 4 atomes H ; charge globale positive"]
            ]
          },
          {
            type: "exemple",
            titre: "Lire SO₄²⁻",
            texte: "SO₄²⁻ contient un atome de soufre S et quatre atomes d'oxygène O. L'écriture 2− indique la charge globale de l'ion. Elle ne signifie pas que chacun des atomes porte cette charge."
          },
          {
            type: "remarque",
            titre: "Deux sortes de nombres",
            texte: "L'indice en bas indique le nombre d'atomes d'un élément dans l'ion. Le nombre et le signe en haut indiquent sa charge électrique globale."
          }
        ]
      },
      {
        id: "sp4-ch7-lecon4",
        titre: "Des ions dans une solution aqueuse",
        blocs: [
          {
            type: "texte",
            titre: "Le sel dans l'eau",
            texte: "Le sel de cuisine est principalement constitué de chlorure de sodium. Quand il se dissout dans l'eau, des ions sodium Na⁺ et des ions chlorure Cl⁻ se trouvent dispersés dans la solution."
          },
          {
            type: "regle",
            titre: "Neutralité de la solution",
            texte: "Même si elle contient des ions positifs et négatifs, une solution est globalement électriquement neutre : les charges positives et négatives se compensent."
          },
          {
            type: "exemple",
            titre: "Solution de chlorure de sodium",
            texte: "Pour le chlorure de sodium dissous, on trouve autant d'ions Na⁺ que d'ions Cl⁻. Chaque ion porte une charge de même valeur mais de signe opposé : les charges se compensent."
          },
          {
            type: "remarque",
            titre: "Ne pas généraliser les nombres d'ions",
            texte: "Dans une solution contenant des ions de charges différentes, il n'y a pas forcément autant d'ions positifs que d'ions négatifs. C'est la somme des charges qui se compense."
          },
          {
            type: "exemple",
            titre: "Un autre équilibre de charges",
            texte: "Un ion calcium Ca²⁺ porte deux charges positives. Deux ions chlorure Cl⁻ portent ensemble deux charges négatives. Dans cette association, les charges se compensent."
          }
        ]
      },
      {
        id: "sp4-ch7-lecon5",
        titre: "Identifier quelques ions",
        blocs: [
          {
            type: "texte",
            titre: "Le principe d'un test",
            texte: "Pour rechercher certains ions, on peut ajouter un réactif à un échantillon de solution et observer le résultat. Dans certains cas, un solide insoluble apparaît : on l'appelle un précipité."
          },
          {
            type: "definition",
            titre: "Précipité",
            texte: "Un précipité est un solide qui se forme dans une solution lors d'une réaction chimique. Son apparition peut donner un indice sur les ions présents."
          },
          {
            type: "tableau",
            titre: "Quelques observations classiques",
            entetes: ["Ion recherché", "Réactif utilisé en laboratoire", "Observation possible"],
            lignes: [
              ["Chlorure Cl⁻", "Solution contenant des ions argent Ag⁺", "Précipité blanc de chlorure d'argent"],
              ["Cuivre(II) Cu²⁺", "Solution contenant des ions hydroxyde OH⁻", "Précipité bleu"],
              ["Fer(II) Fe²⁺", "Solution contenant des ions hydroxyde OH⁻", "Précipité vert"],
              ["Fer(III) Fe³⁺", "Solution contenant des ions hydroxyde OH⁻", "Précipité brun-rouille"],
              ["Sulfate SO₄²⁻", "Solution contenant des ions baryum Ba²⁺", "Précipité blanc de sulfate de baryum"]
            ]
          },
          {
            type: "exemple",
            titre: "Formation du chlorure d'argent",
            texte: "En présence d'ions argent Ag⁺ et d'ions chlorure Cl⁻, un précipité blanc de chlorure d'argent AgCl peut se former. L'écriture simplifiée est : Ag⁺ + Cl⁻ → AgCl."
          },
          {
            type: "remarque",
            titre: "Interpréter avec prudence",
            texte: "Un test donne un indice, mais d'autres substances présentes peuvent parfois modifier l'observation ou produire un résultat semblable. Pour conclure, on tient compte des conditions du test et, si nécessaire, d'autres analyses."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ces tests sont décrits pour comprendre et interpréter des observations. Les réactifs peuvent être dangereux : ils sont réservés à un laboratoire équipé et à un encadrement adapté. Ne les réalise pas chez toi."
          }
        ]
      },
      {
        id: "sp4-ch7-lecon6",
        titre: "Le test du dihydrogène",
        blocs: [
          {
            type: "texte",
            titre: "Un gaz à ne pas confondre avec un ion",
            texte: "Le dihydrogène H₂ est un gaz constitué de molécules neutres. Ce n'est pas un ion. Il peut apparaître lors de certaines réactions chimiques."
          },
          {
            type: "exemple",
            titre: "Une observation de laboratoire",
            texte: "En laboratoire, une petite quantité de dihydrogène peut être identifiée par une légère détonation caractéristique au contact d'une flamme. Cette observation est réalisée par une personne formée, avec des précautions adaptées."
          },
          {
            type: "remarque",
            titre: "Ne pas réaliser ce test chez soi",
            texte: "Le dihydrogène est inflammable et peut former avec l'air un mélange explosif. Ne produis pas ce gaz et n'approche pas de flamme d'un gaz inconnu."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'appelle-t-on un cation et un anion ?",
        correction: "Un cation est un ion chargé positivement. Un anion est un ion chargé négativement."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "L'ion chlorure Cl⁻ est-il positif ou négatif ? Provient-il d'un atome de chlore qui a gagné ou perdu un électron ?",
        correction: "Cl⁻ est un ion négatif. Il provient d'un atome de chlore qui a gagné un électron."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un atome de calcium possède 20 protons et 20 électrons. Il perd deux électrons pour former l'ion Ca²⁺.\n1. Combien l'ion possède-t-il de protons ?\n2. Combien possède-t-il d'électrons ?",
        correction: "1. Le noyau ne change pas : l'ion possède toujours 20 protons.\n2. Il a perdu deux électrons : 20 − 2 = 18 électrons."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Lis la formule de l'ion sulfate SO₄²⁻ : quels atomes contient-il et quelle est sa charge globale ?",
        correction: "L'ion sulfate contient 1 atome de soufre S et 4 atomes d'oxygène O. Sa charge globale est négative, de valeur deux charges élémentaires."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une solution contient des ions calcium Ca²⁺ et des ions chlorure Cl⁻. Dans un modèle simplifié, combien faut-il d'ions chlorure pour compenser la charge d'un ion calcium ? Explique.",
        correction: "Un ion Ca²⁺ porte deux charges positives. Un ion Cl⁻ porte une charge négative. Il faut donc deux ions Cl⁻ pour apporter deux charges négatives et compenser la charge de l'ion Ca²⁺."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "En laboratoire, on ajoute un réactif contenant des ions argent Ag⁺ à une solution. Un précipité blanc de chlorure d'argent apparaît.\n1. Quel ion cela met-il en évidence dans la solution ?\n2. Écris la réaction simplifiée.",
        correction: "1. Dans les conditions indiquées, la formation de chlorure d'argent met en évidence des ions chlorure Cl⁻.\n2. Ag⁺ + Cl⁻ → AgCl. Le solide AgCl est le précipité blanc."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un ion fer(III) Fe³⁺ provient d'un atome de fer qui possède 26 protons.\n1. Combien de protons possède l'ion ?\n2. Combien d'électrons l'atome neutre possédait-il ?\n3. Combien d'électrons l'ion possède-t-il ? Explique.",
        correction: "1. Le noyau ne change pas : l'ion possède 26 protons.\n2. L'atome neutre possède autant d'électrons que de protons, donc 26 électrons.\n3. La charge 3+ correspond à la perte de 3 électrons par l'atome : l'ion possède 26 − 3 = 23 électrons."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux échantillons sont étudiés en laboratoire. Avec un réactif contenant des ions hydroxyde, le premier donne un précipité bleu et le second un précipité brun-rouille.\n1. Quel ion peut être présent dans chaque échantillon ?\n2. Pourquoi faut-il rester prudent avant de conclure ?",
        correction: "1. Le précipité bleu peut indiquer des ions cuivre(II) Cu²⁺. Le précipité brun-rouille peut indiquer des ions fer(III) Fe³⁺.\n2. Une observation est un indice : d'autres substances ou les conditions du test peuvent influencer le résultat. Des analyses complémentaires peuvent être nécessaires."
      }
    ]
  }
]);
