// ===== GUIDE - SVT 5e (T7) =====
// Base sur le fascicule de SVT 5e de Madagascar,
// complete par Guide.
//
// Chapitre 5 : La puberte et le cycle menstruel

enregistrerChapitres("5e", "svt", [
  {
    id: "svt5-puberte-cycle",
    titre: "Chapitre 5 : La puberté et le cycle menstruel",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt5-puberte-definition",
        titre: "Qu'est-ce que la puberté ?",
        blocs: [
          {
            type: "texte",
            titre: "Le corps change",
            texte: "En grandissant, le corps d'un enfant se transforme progressivement pour devenir un corps adulte.\nUne partie de ces changements se produit pendant la puberté."
          },
          {
            type: "definition",
            titre: "La puberté",
            texte: "La puberté est une période de la vie pendant laquelle le corps se transforme et les organes reproducteurs deviennent progressivement capables de participer à la reproduction."
          },
          {
            type: "remarque",
            titre: "Chacun à son rythme",
            texte: "La puberté ne commence pas au même âge et ne se déroule pas à la même vitesse chez tout le monde.\nCes différences sont normales."
          }
        ]
      },

      {
        id: "svt5-puberte-changements",
        titre: "Les changements pendant la puberté",
        blocs: [
          {
            type: "texte",
            titre: "Des changements communs",
            texte: "Chez les filles comme chez les garçons, on peut observer une poussée de croissance, l'apparition de poils au pubis et sous les bras, une transpiration plus importante et parfois de l'acné."
          },
          {
            type: "tableau",
            titre: "Quelques changements",
            entetes: ["Chez la fille", "Chez le garçon"],
            lignes: [
              [
                "Les seins se développent.",
                "Les testicules et le pénis grandissent."
              ],
              [
                "Les hanches peuvent s'élargir.",
                "La voix devient généralement plus grave."
              ],
              [
                "Les premières règles apparaissent.",
                "Les premières éjaculations peuvent apparaître."
              ],
              [
                "L'ovulation peut commencer.",
                "Les testicules commencent à produire des spermatozoïdes."
              ]
            ]
          },
          {
            type: "definition",
            titre: "L'éjaculation",
            texte: "L'éjaculation est la sortie du sperme par le pénis. Elle peut parfois se produire pendant le sommeil : c'est normal."
          },
          {
            type: "remarque",
            titre: "Des émotions aussi",
            texte: "Pendant l'adolescence, les émotions et les relations avec les autres peuvent changer. Si tu as des questions ou des inquiétudes, tu peux en parler à un adulte de confiance ou à un professionnel de santé."
          }
        ]
      },

      {
        id: "svt5-cycle-regles",
        titre: "Les règles",
        blocs: [
          {
            type: "definition",
            titre: "Les règles",
            texte: "Les règles, ou menstruations, sont un écoulement de sang et de fragments de la paroi interne de l'utérus par le vagin.\nElles durent généralement plusieurs jours."
          },
          {
            type: "texte",
            titre: "Pourquoi y a-t-il des règles ?",
            texte: "Au cours du cycle, la paroi interne de l'utérus s'épaissit.\nLorsqu'une grossesse ne commence pas, une partie de cette paroi se détache : elle est évacuée pendant les règles."
          },
          {
            type: "remarque",
            titre: "Un phénomène naturel",
            texte: "Les règles sont un phénomène naturel, pas une maladie. Leur durée et la quantité de sang peuvent varier d'une personne à l'autre."
          },
          {
            type: "texte",
            titre: "Hygiène et bien-être",
            texte: "Pendant les règles, on peut utiliser une protection propre adaptée, comme une serviette hygiénique jetable ou un tissu propre. Il faut la changer régulièrement et se laver les mains avant et après.\nUne protection en tissu réutilisable doit être bien lavée et séchée avant d'être réutilisée."
          },
          {
            type: "remarque",
            titre: "Quand demander de l'aide ?",
            texte: "De légères douleurs peuvent accompagner les règles. Si la douleur est très forte, si le saignement est très abondant ou si quelque chose t'inquiète, parles-en à un adulte de confiance ou à un professionnel de santé."
          }
        ]
      },

      {
        id: "svt5-cycle-menstruel",
        titre: "Comprendre le cycle menstruel",
        blocs: [
          {
            type: "definition",
            titre: "Le cycle menstruel",
            texte: "Le cycle menstruel correspond aux changements qui se répètent dans les ovaires et dans l'utérus.\nOn compte le premier jour des règles comme le premier jour du cycle. Un nouveau cycle commence au premier jour des règles suivantes."
          },
          {
            type: "texte",
            titre: "Les grandes étapes",
            texte: "Au début du cycle, les règles ont lieu. Ensuite, la paroi interne de l'utérus s'épaissit.\nUne ovulation peut avoir lieu : un ovaire libère alors une cellule reproductrice.\nSi une grossesse ne commence pas, de nouvelles règles surviennent et un nouveau cycle débute."
          },
          {
            type: "exemple",
            titre: "Compter la durée d'un cycle",
            texte: "Si les règles commencent le 1er d'un mois et que les règles suivantes commencent le 29 du même mois, le cycle a duré 28 jours.\nOn compte du premier jour des règles jusqu'à la veille des règles suivantes."
          },
          {
            type: "remarque",
            titre: "Les cycles peuvent varier",
            texte: "Un cycle de 28 jours est un exemple, pas une règle pour tout le monde.\nLa durée peut varier d'une personne à l'autre et d'un cycle à l'autre, surtout pendant les premières années après l'apparition des règles."
          },
          {
            type: "schema",
            titre: "Un cycle menstruel simplifié",
            svg: "<svg viewBox='0 0 340 245' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='10' width='260' height='45' rx='9' fill='#fee2e2' stroke='#b91c1c' stroke-width='2'/><text x='170' y='29' font-size='13' font-weight='bold' fill='#7f1d1d' text-anchor='middle'>DÉBUT DU CYCLE</text><text x='170' y='46' font-size='12' fill='#7f1d1d' text-anchor='middle'>Premier jour des règles</text><line x1='170' y1='55' x2='170' y2='70' stroke='#6b7280' stroke-width='2'/><polygon points='165,67 170,76 175,67' fill='#6b7280'/><rect x='40' y='77' width='260' height='45' rx='9' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='170' y='96' font-size='12' fill='#78350f' text-anchor='middle'>La paroi de l'utérus s'épaissit</text><text x='170' y='113' font-size='12' fill='#78350f' text-anchor='middle'>Une ovulation peut avoir lieu</text><line x1='170' y1='122' x2='170' y2='137' stroke='#6b7280' stroke-width='2'/><polygon points='165,134 170,143 175,134' fill='#6b7280'/><rect x='40' y='144' width='260' height='45' rx='9' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='170' y='163' font-size='12' fill='#075985' text-anchor='middle'>Si aucune grossesse ne commence :</text><text x='170' y='180' font-size='12' fill='#075985' text-anchor='middle'>de nouvelles règles surviennent</text><line x1='170' y1='189' x2='170' y2='204' stroke='#6b7280' stroke-width='2'/><polygon points='165,201 170,210 175,201' fill='#6b7280'/><text x='170' y='228' font-size='12' font-weight='bold' fill='#374151' text-anchor='middle'>Début d'un nouveau cycle</text></svg>",
            legende: "Ce schéma montre les grandes étapes d'un cycle. Leur durée varie et l'ovulation n'a pas toujours lieu au même moment."
          }
        ]
      },

      {
        id: "svt5-cycle-ovulation",
        titre: "Ovulation et début de grossesse",
        blocs: [
          {
            type: "texte",
            titre: "Après l'ovulation",
            texte: "Lors de l'ovulation, un ovaire libère une cellule reproductrice, appelée ovocyte. Celle-ci peut être rencontrée par un spermatozoïde dans une trompe : leur fusion est la fécondation."
          },
          {
            type: "texte",
            titre: "Si une grossesse commence",
            texte: "Après la fécondation, la cellule formée se divise. Elle peut ensuite s'installer dans la paroi de l'utérus : c'est le début d'une grossesse.\nLa grossesse sera étudiée plus en détail au chapitre 6."
          },
          {
            type: "remarque",
            titre: "Attention aux dates",
            texte: "Le jour de l'ovulation varie : on ne peut pas le connaître avec certitude simplement en comptant les jours du cycle.\nUne grossesse est possible avant les premières règles, car une ovulation peut avoir lieu avant celles-ci."
          }
        ]
      },

      {
        id: "svt5-puberte-retenir",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Les idées importantes",
            texte: "1. La puberté est une période de transformation progressive du corps.\n2. Elle ne se déroule pas au même rythme chez tout le monde.\n3. Les règles sont un écoulement naturel provenant de la paroi de l'utérus.\n4. Un cycle commence le premier jour des règles et se termine la veille des règles suivantes.\n5. La durée du cycle et le moment de l'ovulation peuvent varier."
          },
          {
            type: "methode",
            titre: "Pour compter un cycle",
            texte: "1. Repère le premier jour des règles : c'est le jour 1.\n2. Repère le premier jour des règles suivantes.\n3. Compte les jours jusqu'à la veille de ces nouvelles règles.\nLe premier jour des nouvelles règles est le jour 1 du cycle suivant."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que la puberté ?",
        correction: "C'est une période pendant laquelle le corps se transforme et les organes reproducteurs deviennent progressivement capables de participer à la reproduction."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite deux changements qui peuvent se produire chez les filles comme chez les garçons pendant la puberté.",
        correction: "Par exemple : une poussée de croissance et l'apparition de poils au pubis et sous les bras. Une transpiration plus importante ou de l'acné sont aussi possibles."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est le premier jour du cycle menstruel ?",
        correction: "C'est le premier jour des règles."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Qu'est-ce que les règles ?",
        correction: "Les règles sont un écoulement de sang et de fragments de la paroi interne de l'utérus par le vagin."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Que se passe-t-il lors de l'ovulation ?",
        correction: "Un ovaire libère une cellule reproductrice appelée ovocyte."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Aina et son amie n'ont pas commencé leur puberté au même âge. Est-ce forcément inquiétant ?",
        correction: "Non. La puberté ne commence pas au même âge chez tout le monde. En cas d'inquiétude, elles peuvent en parler à un professionnel de santé."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Les règles commencent le 1er juin et les suivantes commencent le 29 juin. Combien de jours a duré ce cycle ?",
        correction: "Le cycle a duré 28 jours : du 1er juin au 28 juin inclus. Le 29 juin est le premier jour du cycle suivant."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Vrai ou faux ? Corrige les phrases fausses.\n1. Tous les cycles durent exactement 28 jours.\n2. Les règles sont un phénomène naturel.\n3. La puberté se déroule au même rythme chez tous les adolescents.",
        correction: "1. Faux : la durée des cycles peut varier.\n2. Vrai.\n3. Faux : chacun se développe à son rythme."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Pourquoi dit-on que les règles marquent le début d'un nouveau cycle ?",
        correction: "Par convention, on compte le premier jour des règles comme le jour 1 du cycle. Le premier jour des règles suivantes marque donc le début du cycle suivant."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Fara pense que l'ovulation a toujours lieu le même jour chez toutes les filles. Explique pourquoi ce n'est pas exact.",
        correction: "La durée des cycles varie d'une personne à l'autre et peut aussi varier chez une même personne. Le moment de l'ovulation peut donc changer : il ne peut pas être connu avec certitude en comptant simplement les jours."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Décris les grandes étapes d'un cycle lorsqu'aucune grossesse ne commence.",
        correction: "Le cycle commence le premier jour des règles. Ensuite, la paroi interne de l'utérus s'épaissit et une ovulation peut avoir lieu. Si une grossesse ne commence pas, une partie de la paroi se détache et de nouvelles règles surviennent : un nouveau cycle commence."
      }
    ]
  }
]);
