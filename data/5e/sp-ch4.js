enregistrerChapitres("5e", "sp", [
  {
    id: 4,
    titre: "Les mélanges",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Corps purs et mélanges",
        blocs: [
          {
            type: "definition",
            contenu: "Un corps pur est constitué d’une seule espèce chimique. Un mélange contient au moins deux espèces chimiques différentes."
          },
          {
            type: "exemple",
            contenu: "L’eau pure est un corps pur. L’eau salée est un mélange : elle contient de l’eau et du sel dissous."
          },
          {
            type: "remarque",
            contenu: "Une eau qui paraît claire n’est pas forcément un corps pur : elle peut contenir des substances dissoutes qu’on ne voit pas à l’œil nu."
          },
          {
            type: "texte",
            contenu: "Un mélange peut être composé de solides, de liquides ou de gaz. Par exemple, l’air est un mélange de gaz."
          }
        ]
      },
      {
        id: 2,
        titre: "Mélanges homogènes et hétérogènes",
        blocs: [
          {
            type: "definition",
            contenu: "Un mélange est homogène lorsqu’on ne distingue pas ses différents constituants à l’œil nu : il présente un aspect uniforme."
          },
          {
            type: "exemple",
            contenu: "Lorsque du sel est entièrement dissous dans l’eau, le mélange obtenu est homogène : on ne distingue plus le sel à l’œil nu."
          },
          {
            type: "definition",
            contenu: "Un mélange est hétérogène lorsqu’on distingue au moins deux parties ou constituants différents à l’œil nu."
          },
          {
            type: "exemple",
            contenu: "Un mélange d’eau et de sable est hétérogène : on peut distinguer les grains de sable de l’eau."
          },
          {
            type: "tableau",
            entetes: ["Mélange", "Observation", "Type"],
            lignes: [
              ["Eau et sel entièrement dissous", "Aspect uniforme", "Homogène"],
              ["Eau et sable", "Grains visibles dans l’eau", "Hétérogène"],
              ["Eau et huile au repos", "Deux couches visibles", "Hétérogène"]
            ]
          },
          {
            type: "remarque",
            contenu: "Homogène ne veut pas dire pur. Dans l’eau salée, le sel n’a pas disparu : il est dissous dans l’eau."
          }
        ]
      },
      {
        id: 3,
        titre: "Observer un mélange",
        blocs: [
          {
            type: "methode",
            contenu: "Pour classer un mélange : 1. Observer son aspect à l’œil nu. 2. Chercher si l’on distingue plusieurs parties ou constituants. 3. Si l’aspect est uniforme, le mélange est homogène à l’œil nu ; si plusieurs parties sont visibles, il est hétérogène."
          },
          {
            type: "exemple",
            contenu: "On mélange de la terre et de l’eau. Des particules de terre sont visibles : le mélange est hétérogène."
          },
          {
            type: "remarque",
            contenu: "L’aspect d’un mélange peut changer avec le temps. Après agitation, certaines particules restent un moment dispersées, puis se déposent au fond."
          },
          {
            type: "remarque",
            contenu: "Observer un mélange à l’œil nu ne permet pas toujours de connaître sa composition. Il ne faut jamais goûter un mélange inconnu pour l’identifier."
          }
        ]
      },
      {
        id: 4,
        titre: "Mélanges de deux liquides : la miscibilité",
        blocs: [
          {
            type: "definition",
            contenu: "Deux liquides sont miscibles lorsqu’ils se mélangent pour former un mélange homogène."
          },
          {
            type: "exemple",
            contenu: "L’eau et l’alcool sont miscibles : mélangés, ils forment un mélange homogène."
          },
          {
            type: "definition",
            contenu: "Deux liquides non miscibles ne forment pas un mélange homogène lorsqu’on les mélange. Au repos, ils forment généralement deux couches distinctes."
          },
          {
            type: "exemple",
            contenu: "L’eau et l’huile ne sont pas miscibles. Après un temps de repos, elles forment deux couches : l’huile se trouve au-dessus de l’eau."
          },
          {
            type: "remarque",
            contenu: "La miscibilité concerne le mélange de liquides. Pour un solide comme le sel qui se dissout dans l’eau, on parle plutôt de solubilité et de dissolution."
          }
        ]
      },
      {
        id: 5,
        titre: "Quelques mélanges du quotidien",
        blocs: [
          {
            type: "tableau",
            entetes: ["Mélange", "Observation à l’œil nu", "Classement"],
            lignes: [
              ["Eau et sucre entièrement dissous", "Aspect uniforme", "Homogène"],
              ["Eau et craie en poudre", "Particules visibles", "Hétérogène"],
              ["Riz et haricots secs", "Grains différents visibles", "Hétérogène"],
              ["Air", "Aspect uniforme", "Homogène"]
            ]
          },
          {
            type: "remarque",
            contenu: "La poudre de craie ne se dissout pas dans l’eau comme le sucre. Elle peut se disperser temporairement et rendre l’eau trouble."
          },
          {
            type: "texte",
            contenu: "Certains constituants d’un mélange peuvent être séparés par des méthodes adaptées. Nous étudierons ces méthodes dans un prochain chapitre."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 1,
        enonce: "Qu’est-ce qu’un mélange ?",
        correction: "Un mélange contient au moins deux espèces chimiques différentes."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle différence observe-t-on entre un mélange homogène et un mélange hétérogène ?",
        correction: "Un mélange homogène présente un aspect uniforme à l’œil nu. Dans un mélange hétérogène, on distingue au moins deux parties ou constituants."
      },
      {
        niveau: 1,
        points: 1,
        enonce: "L’eau et le sable forment-ils un mélange homogène ou hétérogène ?",
        correction: "Ils forment un mélange hétérogène, car on distingue les grains de sable de l’eau."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Du sucre est entièrement dissous dans un verre d’eau. Le mélange est-il homogène ou hétérogène ?",
        correction: "Le mélange est homogène : il présente un aspect uniforme et on ne distingue plus le sucre à l’œil nu."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Qu’appelle-t-on deux liquides miscibles ? Donne un exemple.",
        correction: "Deux liquides sont miscibles lorsqu’ils forment ensemble un mélange homogène. Par exemple, l’eau et l’alcool sont miscibles."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "On verse de l’huile dans de l’eau et on laisse le mélange au repos. Qu’observe-t-on ?",
        correction: "On observe deux couches : l’huile se trouve au-dessus de l’eau. Ces deux liquides ne sont pas miscibles ; le mélange est hétérogène."
      },
      {
        niveau: 2,
        points: 2,
        enonce: "Vrai ou faux : un mélange homogène est toujours un corps pur. Explique.",
        correction: "Faux. Un mélange homogène contient plusieurs espèces chimiques, même si on ne les distingue pas à l’œil nu. Par exemple, l’eau salée contient de l’eau et du sel dissous."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Classe les mélanges suivants : a) riz et haricots ; b) eau et sel entièrement dissous ; c) eau et huile au repos.",
        correction: "a) Hétérogène : on distingue les grains. b) Homogène : l’aspect est uniforme. c) Hétérogène : on distingue deux couches."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Une eau est claire à l’œil nu. Peut-on affirmer qu’elle est pure ?",
        correction: "Non. Elle peut contenir des substances dissoutes invisibles à l’œil nu. Son aspect clair ne suffit pas pour affirmer qu’elle est pure."
      },
      {
        niveau: 3,
        points: 2,
        enonce: "Un élève dit : « Le sel est miscible avec l’eau. » Corrige sa phrase.",
        correction: "On dit que le sel est soluble dans l’eau : il peut s’y dissoudre. Le terme « miscible » est utilisé pour deux liquides."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "On agite de l’eau avec de la terre, puis on laisse reposer. Décris une évolution possible du mélange et classe-le.",
        correction: "Après agitation, des particules de terre peuvent être dispersées dans l’eau. Au repos, une partie peut se déposer au fond. On distingue alors des parties différentes : le mélange est hétérogène."
      },
      {
        niveau: 4,
        points: 3,
        enonce: "On mélange de l’eau et de l’huile. Un élève agite fortement le récipient et observe de petites gouttes, puis laisse reposer. Explique ce qu’il peut observer.",
        correction: "L’agitation disperse l’un des liquides en petites gouttes dans l’autre. Après repos, les gouttes se regroupent progressivement et deux couches apparaissent. L’eau et l’huile ne sont pas miscibles."
      }
    ]
  }
]);
