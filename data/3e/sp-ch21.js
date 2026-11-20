enregistrerChapitres("3e", "sp", [
  {
    id: 21,
    titre: "Chapitre 21 : Lentilles convergentes et formation des images",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Les lentilles",
        blocs: [
          {
            type: "introduction",
            titre: "La lumière à travers une lentille",
            texte: "Une loupe, un appareil photographique et des lunettes utilisent des lentilles pour modifier le trajet de la lumière.\n\nUne lentille est constituée d’un matériau transparent, comme le verre ou certains plastiques. La lumière change de direction lorsqu’elle passe entre l’air et la lentille : c’est la réfraction."
          },
          {
            type: "definition",
            titre: "Lentille convergente",
            texte: "Une lentille convergente est généralement plus épaisse au centre qu’aux bords. Elle peut faire converger un faisceau de rayons parallèles vers un point appelé foyer image."
          },
          {
            type: "definition",
            titre: "Lentille divergente",
            texte: "Une lentille divergente est généralement plus mince au centre qu’aux bords. Elle écarte un faisceau de rayons parallèles.\n\nDans ce chapitre, nous étudions surtout les lentilles convergentes."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ne regarde jamais le Soleil à travers une lentille ou un instrument optique. Une lentille convergente éclairée par le Soleil peut concentrer la lumière et provoquer des brûlures ou un incendie."
          }
        ]
      },

      {
        id: 2,
        titre: "Axe, centre et foyers",
        blocs: [
          {
            type: "definition",
            titre: "Axe optique et centre optique",
            texte: "L’axe optique est une droite passant par le centre de la lentille et perpendiculaire à celle-ci dans le modèle étudié.\n\nLe centre optique est noté O. Pour une lentille mince, un rayon passant par O n’est pas dévié de façon appréciable."
          },
          {
            type: "definition",
            titre: "Foyer image et distance focale",
            texte: "Des rayons parallèles à l’axe optique, arrivant sur une lentille convergente, ressortent en passant par un point de l’axe appelé foyer image. On le note F′.\n\nLa distance entre le centre optique O et le foyer image F′ est la distance focale, notée f′ :\n\nf′ = OF′."
          },
          {
            type: "schema",
            titre: "Convergence de rayons parallèles",
            svg: "<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Trois rayons parallèles à l’axe convergent au foyer image après une lentille convergente'><line x1='15' y1='110' x2='385' y2='110' stroke='#64748b' stroke-width='1.5' stroke-dasharray='5 4'/><line x1='190' y1='25' x2='190' y2='195' stroke='#2563eb' stroke-width='3'/><path d='M190 25 L183 39 M190 25 L197 39 M190 195 L183 181 M190 195 L197 181' fill='none' stroke='#2563eb' stroke-width='3'/><line x1='25' y1='55' x2='190' y2='55' stroke='#ea580c' stroke-width='2.5'/><line x1='190' y1='55' x2='310' y2='110' stroke='#ea580c' stroke-width='2.5'/><line x1='25' y1='110' x2='310' y2='110' stroke='#ea580c' stroke-width='2.5'/><line x1='25' y1='165' x2='190' y2='165' stroke='#ea580c' stroke-width='2.5'/><line x1='190' y1='165' x2='310' y2='110' stroke='#ea580c' stroke-width='2.5'/><path d='M105 55 L93 49 L93 61 Z M105 110 L93 104 L93 116 Z M105 165 L93 159 L93 171 Z' fill='#ea580c'/><circle cx='190' cy='110' r='4' fill='#111827'/><circle cx='310' cy='110' r='4' fill='#111827'/><text x='180' y='132' font-size='15'>O</text><text x='305' y='132' font-size='15'>F′</text><text x='190' y='215' text-anchor='middle' font-size='13'>Lentille convergente</text><text x='90' y='32' text-anchor='middle' font-size='13'>Rayons parallèles</text></svg>",
            legende: "Les rayons parallèles à l’axe se rejoignent au foyer image F′. La flèche bleue représente la lentille dans ce schéma simplifié."
          },
          {
            type: "definition",
            titre: "Foyer objet",
            texte: "Une lentille convergente possède aussi un foyer objet, noté F, situé de l’autre côté de la lentille. Dans l’air, pour la lentille mince étudiée, F et F′ sont à la même distance de O : OF = OF′."
          },
          {
            type: "exemple",
            titre: "Mesurer la distance focale",
            texte: "Si le foyer image F′ se trouve à 12 cm du centre optique O, la distance focale est :\n\nf′ = OF′ = 12 cm."
          }
        ]
      },

      {
        id: 3,
        titre: "Construire l’image d’un objet",
        blocs: [
          {
            type: "regle",
            titre: "Deux rayons utiles",
            texte: "Pour construire l’image d’un point par une lentille convergente, on utilise notamment deux rayons :\n\n• un rayon passant par le centre optique O continue sans déviation appréciable ;\n• un rayon incident parallèle à l’axe optique ressort en passant par le foyer image F′.\n\nLorsque les rayons émergents se croisent, leur point d’intersection donne l’image du point étudié."
          },
          {
            type: "schema",
            titre: "Construction d’une image réelle",
            svg: "<svg viewBox='0 0 400 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Construction de l’image renversée d’un objet placé au-delà du foyer d’une lentille convergente'><line x1='15' y1='130' x2='385' y2='130' stroke='#64748b' stroke-width='1.5' stroke-dasharray='5 4'/><line x1='200' y1='20' x2='200' y2='240' stroke='#2563eb' stroke-width='3'/><path d='M200 20 L193 34 M200 20 L207 34 M200 240 L193 226 M200 240 L207 226' fill='none' stroke='#2563eb' stroke-width='3'/><line x1='50' y1='130' x2='50' y2='70' stroke='#16a34a' stroke-width='4'/><path d='M50 70 L43 82 L57 82 Z' fill='#16a34a'/><line x1='50' y1='70' x2='200' y2='70' stroke='#ea580c' stroke-width='2'/><line x1='200' y1='70' x2='375' y2='210' stroke='#ea580c' stroke-width='2'/><line x1='50' y1='70' x2='375' y2='200' stroke='#dc2626' stroke-width='2'/><line x1='300' y1='130' x2='300' y2='170' stroke='#7c3aed' stroke-width='4'/><path d='M300 170 L293 158 L307 158 Z' fill='#7c3aed'/><circle cx='200' cy='130' r='3' fill='#111827'/><circle cx='125' cy='130' r='3' fill='#111827'/><circle cx='275' cy='130' r='3' fill='#111827'/><text x='39' y='150' font-size='13'>A</text><text x='35' y='66' font-size='13'>B</text><text x='190' y='150' font-size='13'>O</text><text x='119' y='150' font-size='13'>F</text><text x='267' y='150' font-size='13'>F′</text><text x='305' y='125' font-size='13'>A′</text><text x='305' y='185' font-size='13'>B′</text><text x='50' y='32' text-anchor='middle' font-size='13'>Objet</text><text x='320' y='225' text-anchor='middle' font-size='13'>Image</text><text x='200' y='255' text-anchor='middle' font-size='12'>Schéma simplifié : les rayons se croisent en B′.</text></svg>",
            legende: "L’objet AB est placé au-delà du foyer objet F. Les deux rayons issus de B se croisent en B′. L’image A′B′ est réelle et renversée."
          },
          {
            type: "methode",
            titre: "Étapes de construction",
            texte: "1. Tracer l’axe optique et la lentille, puis placer O, F et F′.\n2. Placer l’objet AB, avec A sur l’axe et B au-dessus.\n3. Depuis B, tracer un rayon passant par O : il continue en ligne droite.\n4. Depuis B, tracer un rayon parallèle à l’axe jusqu’à la lentille, puis le faire passer par F′.\n5. L’intersection de ces deux rayons donne B′. Placer A′ sur l’axe, à la verticale de B′."
          },
          {
            type: "remarque",
            titre: "Rayons sur le schéma",
            texte: "Les rayons tracés sont des outils de construction. En réalité, de nombreux rayons issus de chaque point de l’objet traversent la lentille."
          }
        ]
      },

      {
        id: 4,
        titre: "Image réelle et image virtuelle",
        blocs: [
          {
            type: "definition",
            titre: "Image réelle",
            texte: "Une image réelle se forme là où les rayons lumineux se croisent effectivement. Elle peut être recueillie sur un écran placé à la bonne position.\n\nAvec une lentille convergente, un objet placé au-delà du foyer objet peut donner une image réelle renversée."
          },
          {
            type: "definition",
            titre: "Image virtuelle",
            texte: "Une image virtuelle est obtenue lorsque les rayons qui arrivent à l’œil semblent provenir d’un point, sans se croiser réellement en ce point.\n\nElle ne peut pas être recueillie directement sur un écran."
          },
          {
            type: "exemple",
            titre: "La loupe",
            texte: "Lorsqu’un petit objet est placé entre une lentille convergente et son foyer objet, la lentille peut servir de loupe. L’œil voit alors une image virtuelle, droite et agrandie."
          },
          {
            type: "remarque",
            titre: "La position de l’objet compte",
            texte: "Une même lentille convergente ne donne pas toujours la même image. La position de l’objet par rapport à la lentille et au foyer détermine notamment si l’image est réelle ou virtuelle."
          },
          {
            type: "tableau",
            titre: "Deux situations à distinguer",
            entetes: ["Position de l’objet", "Image obtenue"],
            lignes: [
              ["Au-delà du foyer objet F", "Image réelle et renversée, recueillable sur un écran."],
              ["Entre F et la lentille", "Image virtuelle, droite et agrandie : utilisation comme loupe."]
            ]
          }
        ]
      },

      {
        id: 5,
        titre: "Applications et méthode",
        blocs: [
          {
            type: "exemple",
            titre: "Appareil photographique",
            texte: "L’objectif d’un appareil photographique utilise des lentilles pour former une image réelle sur un capteur. La mise au point permet d’obtenir une image nette sur ce capteur."
          },
          {
            type: "exemple",
            titre: "L’œil",
            texte: "L’œil possède notamment une lentille souple appelée cristallin. Avec les autres parties transparentes de l’œil, elle contribue à former une image sur la rétine.\n\nLe cristallin peut changer de forme pour aider à voir nettement des objets situés à différentes distances : c’est l’accommodation."
          },
          {
            type: "methode",
            titre: "Décrire une image",
            texte: "Pour décrire une image, préciser :\n\n1. Si elle est réelle ou virtuelle.\n2. Si elle est droite ou renversée par rapport à l’objet.\n3. Si elle est agrandie, réduite ou de même taille, lorsque le schéma ou les mesures le permettent.\n4. Si elle peut être recueillie sur un écran."
          },
          {
            type: "remarque",
            titre: "Erreurs à éviter",
            texte: "• Confondre le centre optique O et le foyer image F′.\n• Tracer un rayon parallèle à l’axe sans le faire passer par F′ après la lentille.\n• Affirmer qu’une image virtuelle peut être recueillie directement sur un écran.\n• Penser qu’une lentille convergente donne toujours une image agrandie.\n• Regarder le Soleil à travers une lentille."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Comment reconnaît-on généralement une lentille convergente à sa forme ?",
        correction: "Une lentille convergente est généralement plus épaisse au centre qu’aux bords."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Que deviennent des rayons parallèles à l’axe optique après une lentille convergente ?",
        correction: "Ils ressortent en passant par le foyer image F′ de la lentille."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Que représente le point O sur le schéma d’une lentille mince ?",
        correction: "O représente le centre optique. Un rayon passant par O continue sans déviation appréciable dans le modèle étudié."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le foyer image d’une lentille se trouve à 15 cm de son centre optique. Quelle est sa distance focale ?",
        correction: "La distance focale est la distance OF′.\n\nDonc f′ = OF′ = 15 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une image peut être recueillie nettement sur un écran. Est-elle réelle ou virtuelle ?",
        correction: "C’est une image réelle. Les rayons lumineux se croisent effectivement à l’endroit où l’image se forme."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet est placé entre une lentille convergente et son foyer objet. La lentille est utilisée comme loupe. Décris l’image observée.",
        correction: "L’image observée est virtuelle, droite et agrandie. Elle ne peut pas être recueillie directement sur un écran."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Cite deux rayons utiles pour construire l’image d’un point par une lentille convergente et explique leur trajet.",
        correction: "• Un rayon passant par le centre optique O continue sans déviation appréciable.\n\n• Un rayon incident parallèle à l’axe optique ressort en passant par le foyer image F′.\n\nLorsque les rayons émergents se croisent, leur intersection donne l’image du point."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une lentille convergente a une distance focale de 10 cm. Un objet est placé à 25 cm de la lentille. Est-il entre la lentille et le foyer ou au-delà du foyer ? Peut-on obtenir son image sur un écran ?",
        correction: "Le foyer objet est à 10 cm de la lentille. L’objet est à 25 cm : il est donc au-delà du foyer.\n\nOn peut obtenir une image réelle et renversée sur un écran placé à la bonne position."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une élève dit : « Toute lentille convergente agrandit toujours l’image. » A-t-elle raison ? Explique.",
        correction: "Non. L’image dépend de la position de l’objet. Une lentille convergente peut donner, selon la situation, une image agrandie, réduite ou de même taille.\n\nUtilisée comme loupe avec l’objet entre le foyer et la lentille, elle donne une image virtuelle agrandie."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Exercice type BEPC. Une lentille convergente a une distance focale de 8 cm. Un objet AB est placé à 24 cm devant la lentille, avec A sur l’axe optique.\n\n1. À quelle distance de O place-t-on F et F′ ?\n2. L’objet est-il au-delà du foyer objet ?\n3. Décris deux rayons issus de B permettant de construire B′.\n4. L’image peut-elle être recueillie sur un écran ? Est-elle droite ou renversée ?",
        correction: "1. La distance focale est 8 cm. Dans le modèle étudié, on place F à 8 cm de O du côté de l’objet et F′ à 8 cm de O de l’autre côté.\n\n2. Oui. L’objet est à 24 cm de la lentille, donc au-delà du foyer situé à 8 cm.\n\n3. Depuis B, on trace un rayon passant par O, qui continue sans déviation appréciable. On trace aussi un rayon parallèle à l’axe : après la lentille, il passe par F′. Leur intersection donne B′.\n\n4. Oui. L’image est réelle et peut être recueillie sur un écran placé à la bonne position. Elle est renversée."
      }
    ]
  }
]);
