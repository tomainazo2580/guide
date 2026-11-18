// ===== GUIDE - SVT 4e (T8) =====
// Chapitre 11 : Les roches métamorphiques

enregistrerChapitres("4e", "svt", [
  {
    id: "svt4-roches-metamorphiques",
    titre: "Chapitre 11 : Les roches métamorphiques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "svt4-metamorphisme-definition",
        titre: "Qu'est-ce que le métamorphisme ?",
        blocs: [
          {
            type: "definition",
            titre: "Le métamorphisme",
            texte: "Le métamorphisme est la transformation d'une roche préexistante sous l'effet de nouvelles conditions, notamment une température et une pression plus élevées. La roche se transforme généralement à l'état solide, sans fondre."
          },
          {
            type: "texte",
            titre: "Une roche de départ",
            texte: "La roche de départ peut être magmatique, sédimentaire ou déjà métamorphique. Ses minéraux et son aspect peuvent changer progressivement au cours de la transformation."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre avec la fusion",
            texte: "Une roche métamorphique se forme généralement sans fusion de la roche. Si une roche fond, totalement ou partiellement, la matière fondue produite peut participer à la formation de magma."
          }
        ]
      },
      {
        id: "svt4-metamorphisme-conditions",
        titre: "Dans quelles conditions les roches se transforment-elles ?",
        blocs: [
          {
            type: "texte",
            titre: "Température et pression",
            texte: "En profondeur, une roche peut subir une température et une pression plus élevées qu'à la surface. Ces conditions peuvent modifier ses minéraux et leur organisation."
          },
          {
            type: "exemple",
            titre: "Lors de la formation de montagnes",
            texte: "Lors de la formation de certaines chaînes de montagnes, des roches sont enfouies et comprimées. Les conditions rencontrées peuvent provoquer leur métamorphisme."
          },
          {
            type: "exemple",
            titre: "Près d'un magma",
            texte: "La chaleur d'un magma en profondeur peut aussi transformer les roches qui l'entourent. Ce type de transformation est appelé métamorphisme de contact."
          },
          {
            type: "remarque",
            titre: "Une transformation progressive",
            texte: "Les changements se produisent généralement sur de longues durées. Les conditions et la composition de la roche de départ influencent le résultat."
          }
        ]
      },
      {
        id: "svt4-gneiss",
        titre: "Le gneiss",
        blocs: [
          {
            type: "definition",
            titre: "Une roche métamorphique",
            texte: "Le gneiss est une roche métamorphique. Il présente souvent une alternance de bandes claires et de bandes plus sombres, dues à la répartition de ses minéraux."
          },
          {
            type: "texte",
            titre: "Son origine",
            texte: "Un gneiss peut provenir de la transformation de différentes roches, notamment d'un granite ou de certaines roches sédimentaires. La formation d'un gneiss ne nécessite pas obligatoirement la fusion de la roche."
          },
          {
            type: "schema",
            titre: "Un aspect possible du gneiss",
            svg: "<svg viewBox='0 0 340 190' xmlns='http://www.w3.org/2000/svg'><path d='M40 35 L285 25 L305 150 L55 165 Z' fill='#e5e7eb' stroke='#4b5563' stroke-width='2'/><path d='M45 60 C110 45 175 70 290 50' fill='none' stroke='#374151' stroke-width='9'/><path d='M48 85 C120 70 190 95 294 75' fill='none' stroke='#f9fafb' stroke-width='10'/><path d='M50 108 C125 92 195 118 298 100' fill='none' stroke='#374151' stroke-width='10'/><path d='M53 133 C125 118 205 143 301 125' fill='none' stroke='#f9fafb' stroke-width='10'/><text x='170' y='185' text-anchor='middle' font-size='11' fill='#4b5563'>Bandes claires et sombres : dessin simplifié</text></svg>",
            legende: "Le gneiss présente souvent des bandes de minéraux clairs et sombres. Ce dessin ne remplace pas l'observation d'un échantillon."
          }
        ]
      },
      {
        id: "svt4-migmatite",
        titre: "La migmatite",
        blocs: [
          {
            type: "texte",
            titre: "Une roche d'aspect mélangé",
            texte: "Une migmatite présente souvent des parties claires et des parties sombres disposées de façon irrégulière. Son nom évoque un mélange."
          },
          {
            type: "texte",
            titre: "Une fusion partielle possible",
            texte: "Certaines migmatites se forment lorsque des roches soumises à de fortes températures subissent une fusion partielle : une partie de la roche fond tandis qu'une autre reste solide. Les parties fondues peuvent ensuite se solidifier."
          },
          {
            type: "remarque",
            titre: "Gneiss et migmatite",
            texte: "Le gneiss ne nécessite pas obligatoirement de fusion pour se former. Une migmatite peut, quant à elle, témoigner d'une fusion partielle. Les bandes des deux roches peuvent avoir des aspects différents."
          }
        ]
      },
      {
        id: "svt4-metamorphiques-comparer",
        titre: "Comparer les grandes familles de roches",
        blocs: [
          {
            type: "tableau",
            titre: "Trois modes de formation",
            entetes: ["Famille", "Mode de formation", "Exemple"],
            lignes: [
              ["Magmatique", "Refroidissement et solidification d'un magma ou d'une lave", "Granite, basalte"],
              ["Sédimentaire", "Accumulation et transformation de sédiments, entre autres mécanismes", "Grès, calcaire"],
              ["Métamorphique", "Transformation d'une roche préexistante, généralement à l'état solide", "Gneiss"]
            ]
          },
          {
            type: "methode",
            titre: "Identifier le mode de formation",
            texte: "Demande-toi : la roche résulte-t-elle du refroidissement d'une matière fondue, de l'accumulation de sédiments ou de la transformation d'une roche préexistante ? Les observations seules ne suffisent pas toujours : on peut avoir besoin d'informations supplémentaires."
          }
        ]
      },
      {
        id: "svt4-metamorphiques-bilan",
        titre: "L'essentiel à retenir",
        blocs: [
          {
            type: "regle",
            titre: "Bilan",
            texte: "• Le métamorphisme transforme une roche préexistante sous de nouvelles conditions de température et de pression.\n• La transformation se fait généralement à l'état solide.\n• Le gneiss est une roche métamorphique qui présente souvent des bandes claires et sombres.\n• Certaines migmatites peuvent résulter d'une fusion partielle.\n• Le gneiss ne nécessite pas obligatoirement de fusion pour se former."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Qu'est-ce que le métamorphisme ?",
        correction: "C'est la transformation d'une roche préexistante sous de nouvelles conditions, notamment de température et de pression. Elle se produit généralement à l'état solide."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Cite une roche métamorphique étudiée dans le cours.",
        correction: "Le gneiss est une roche métamorphique."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quelle transformation une roche peut-elle subir près d'un magma en profondeur ?",
        correction: "La chaleur du magma peut transformer les roches qui l'entourent. On parle alors de métamorphisme de contact."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quel aspect présente souvent le gneiss ?",
        correction: "Le gneiss présente souvent une alternance de bandes claires et de bandes plus sombres, correspondant à une répartition différente des minéraux."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un gneiss doit-il obligatoirement provenir d'une roche qui a fondu ? Explique.",
        correction: "Non. Le gneiss est une roche métamorphique : il peut se former par transformation d'une roche préexistante à l'état solide, sous l'effet notamment de la température et de la pression."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Que signifie « fusion partielle » dans le cas de certaines migmatites ?",
        correction: "Cela signifie qu'une partie de la roche fond tandis qu'une autre partie reste solide. La matière fondue peut ensuite se solidifier."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève affirme : « Toutes les roches métamorphiques proviennent d'un granite fondu. » Corrige ses deux erreurs.",
        correction: "La roche de départ n'est pas forcément un granite : elle peut aussi être sédimentaire ou déjà métamorphique. De plus, le métamorphisme se produit généralement à l'état solide, sans que la roche fonde."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Compare la formation d'un granite et celle d'un gneiss.",
        correction: "Le granite est une roche magmatique : il se forme par refroidissement lent et solidification d'un magma en profondeur. Le gneiss est une roche métamorphique : il résulte de la transformation d'une roche préexistante, généralement à l'état solide, sous de nouvelles conditions de température et de pression."
      }
    ]
  }
]);
