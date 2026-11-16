enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch12",
    titre: "Chapitre 12 : Triangles et constructions",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch12-lecon1",
        titre: "1. Reconnaître et nommer un triangle",
        blocs: [
          {
            type: "definition",
            titre: "Un triangle",
            texte: "Un triangle est une figure formée par trois points non alignés reliés deux à deux. Il possède trois sommets, trois côtés et trois angles."
          },
          {
            type: "schema",
            titre: "Le triangle ABC",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 230' role='img' aria-label='Triangle ABC avec A en haut, B en bas à gauche et C en bas à droite'><path d='M185 25 L45 195 L350 195 Z' fill='#eaf4ff' stroke='#25496b' stroke-width='3'/><g font-size='21' fill='#222'><text x='178' y='20'>A</text><text x='25' y='215'>B</text><text x='355' y='215'>C</text></g></svg>",
            legende: "Les sommets sont A, B et C. Les côtés sont [AB], [BC] et [CA]."
          },
          {
            type: "texte",
            titre: "Côtés et angles",
            texte: "Dans le triangle ABC, les trois angles sont BÂC, A B̂ C et AĈB. Leur sommet est respectivement A, B et C. Le côté [BC] est opposé au sommet A."
          },
          {
            type: "exemple",
            titre: "Une précision utile",
            texte: "[AB] désigne le segment reliant A à B. AB désigne sa longueur. Si AB = 4 cm, cela signifie que la longueur du côté [AB] est 4 cm."
          },
          {
            type: "remarque",
            titre: "Un triangle ou une ligne ?",
            texte: "Si les trois points sont alignés, ils ne forment pas un triangle. Il faut trois points non alignés."
          }
        ]
      },

      {
        id: "maths5-ch12-lecon2",
        titre: "2. Les triangles particuliers",
        blocs: [
          {
            type: "definition",
            titre: "Triangle isocèle",
            texte: "Un triangle isocèle possède au moins deux côtés de même longueur. Si AB = AC, le triangle ABC est isocèle en A. Le sommet A est appelé sommet principal et [BC] est sa base."
          },
          {
            type: "regle",
            titre: "Angles d’un triangle isocèle",
            texte: "Dans un triangle isocèle, les angles à la base ont la même mesure. Si AB = AC, alors les angles AB̂C et BĈA sont égaux."
          },
          {
            type: "definition",
            titre: "Triangle équilatéral",
            texte: "Un triangle équilatéral possède trois côtés de même longueur. Ses trois angles ont la même mesure : chacun mesure 60°."
          },
          {
            type: "definition",
            titre: "Triangle rectangle",
            texte: "Un triangle rectangle possède un angle droit. Le côté opposé à l’angle droit est appelé l’hypoténuse."
          },
          {
            type: "exemple",
            titre: "Nommer un triangle rectangle",
            texte: "Si le triangle ABC est rectangle en A, l’angle BÂC mesure 90° et [BC] est l’hypoténuse."
          },
          {
            type: "remarque",
            titre: "Plusieurs propriétés",
            texte: "Un triangle peut être à la fois rectangle et isocèle : il possède alors un angle droit et deux côtés de même longueur."
          }
        ]
      },

      {
        id: "maths5-ch12-lecon3",
        titre: "3. Les angles d’un triangle",
        blocs: [
          {
            type: "regle",
            titre: "Somme des angles",
            texte: "Dans tout triangle, la somme des mesures des trois angles est égale à 180°."
          },
          {
            type: "exemple",
            titre: "Trouver un angle manquant",
            texte: "Deux angles d’un triangle mesurent 50° et 70°. Le troisième mesure 180° − 50° − 70° = 60°."
          },
          {
            type: "methode",
            titre: "Dans un triangle rectangle",
            texte: "Un angle droit mesure 90°. Les deux autres angles d’un triangle rectangle ont donc une somme de 90°. Si l’un mesure 35°, l’autre mesure 90° − 35° = 55°."
          },
          {
            type: "exemple",
            titre: "Dans un triangle isocèle",
            texte: "Le triangle ABC est isocèle en A et l’angle A mesure 40°. Les angles B et C sont égaux et leur somme vaut 180° − 40° = 140°. Chacun mesure donc 140° ÷ 2 = 70°."
          },
          {
            type: "remarque",
            titre: "Un triangle équilatéral",
            texte: "Les trois angles d’un triangle équilatéral sont égaux. Comme leur somme est 180°, chacun mesure 180° ÷ 3 = 60°."
          }
        ]
      },

      {
        id: "maths5-ch12-lecon4",
        titre: "4. Peut-on construire un triangle ?",
        blocs: [
          {
            type: "regle",
            titre: "Inégalité triangulaire",
            texte: "Dans un triangle, la longueur de chaque côté est strictement inférieure à la somme des longueurs des deux autres côtés."
          },
          {
            type: "exemple",
            titre: "Construction possible",
            texte: "Avec les longueurs 3 cm, 4 cm et 5 cm, la plus grande longueur est 5 cm. Comme 5 < 3 + 4, on peut construire un triangle."
          },
          {
            type: "exemple",
            titre: "Construction impossible",
            texte: "Avec les longueurs 2 cm, 3 cm et 6 cm, on a 6 > 2 + 3. Il est impossible de construire un triangle avec ces trois longueurs."
          },
          {
            type: "remarque",
            titre: "Lorsque les longueurs sont égales",
            texte: "Avec 2 cm, 3 cm et 5 cm, on a 2 + 3 = 5. Les points seraient alignés : on n’obtient pas un triangle."
          },
          {
            type: "methode",
            titre: "Vérifier trois longueurs positives",
            texte: "Repère la plus grande longueur. Si elle est strictement inférieure à la somme des deux autres, un triangle est constructible. Sinon, il ne l’est pas."
          }
        ]
      },

      {
        id: "maths5-ch12-lecon5",
        titre: "5. Construire un triangle avec ses trois côtés",
        blocs: [
          {
            type: "texte",
            titre: "Exemple de construction",
            texte: "Construisons un triangle ABC tel que AB = 5 cm, AC = 4 cm et BC = 3 cm. La construction est possible car 5 < 4 + 3."
          },
          {
            type: "methode",
            titre: "À la règle et au compas",
            texte: "1. Trace le segment [AB] de 5 cm. 2. Ouvre le compas à 4 cm et trace un arc de centre A. 3. Ouvre le compas à 3 cm et trace un arc de centre B qui coupe le premier. 4. Nomme C un point d’intersection des arcs. 5. Trace [AC] et [BC]."
          },
          {
            type: "exemple",
            titre: "Pourquoi cette méthode fonctionne",
            texte: "C est sur l’arc de centre A et de rayon 4 cm : AC = 4 cm. Il est aussi sur l’arc de centre B et de rayon 3 cm : BC = 3 cm."
          },
          {
            type: "remarque",
            titre: "Deux positions possibles",
            texte: "Les arcs peuvent se couper de part et d’autre de [AB]. Les deux triangles obtenus ont les longueurs demandées ; ils sont symétriques par rapport à la droite (AB)."
          },
          {
            type: "methode",
            titre: "Vérifier",
            texte: "Mesure les trois côtés avec la règle. Un petit écart peut venir de la précision du tracé : place bien la pointe du compas et ne change pas son ouverture pendant un arc."
          }
        ]
      },

      {
        id: "maths5-ch12-lecon6",
        titre: "6. Construire avec un côté et deux angles",
        blocs: [
          {
            type: "texte",
            titre: "Exemple",
            texte: "Construisons un triangle ABC tel que AB = 6 cm, l’angle en A mesure 50° et l’angle en B mesure 70°."
          },
          {
            type: "methode",
            titre: "À la règle et au rapporteur",
            texte: "1. Trace [AB] de 6 cm. 2. En A, trace une demi-droite qui forme un angle de 50° avec [AB). 3. En B, du même côté de la droite (AB), trace une demi-droite qui forme un angle de 70° avec [BA). 4. Leur intersection est C. 5. Repasse les côtés [AC] et [BC]."
          },
          {
            type: "exemple",
            titre: "Vérifier le troisième angle",
            texte: "Dans ce triangle, l’angle en C mesure 180° − 50° − 70° = 60°. On peut utiliser cette valeur pour contrôler la construction."
          },
          {
            type: "remarque",
            titre: "Attention au sommet",
            texte: "En A, on mesure à partir de la demi-droite [AB). En B, on mesure à partir de [BA). Lis le rapporteur en partant du bon 0°."
          }
        ]
      },

      {
        id: "maths5-ch12-lecon7",
        titre: "7. Construire des triangles particuliers",
        blocs: [
          {
            type: "methode",
            titre: "Construire un triangle isocèle",
            texte: "Pour construire ABC isocèle en A avec BC = 4 cm et AB = AC = 5 cm : trace [BC] de 4 cm. Trace ensuite deux arcs de rayon 5 cm, l’un de centre B et l’autre de centre C. Nomme A un point d’intersection des arcs, puis trace [AB] et [AC]."
          },
          {
            type: "methode",
            titre: "Construire un triangle équilatéral",
            texte: "Pour construire un triangle ABC de côté 4 cm : trace [AB] de 4 cm. Trace un arc de centre A et de rayon 4 cm, puis un arc de centre B de même rayon. Leur intersection donne C. Relie C à A et à B."
          },
          {
            type: "methode",
            titre: "Construire un triangle rectangle",
            texte: "Pour construire ABC rectangle en A avec AB = 4 cm et AC = 3 cm : trace [AB] de 4 cm. Trace en A la perpendiculaire à (AB), à l’aide de l’équerre. Sur cette perpendiculaire, place C à 3 cm de A, puis trace [BC]."
          },
          {
            type: "remarque",
            titre: "Coder sa figure",
            texte: "On peut marquer les côtés de même longueur avec de petits traits identiques. Un petit carré au sommet indique un angle droit. Le codage montre les propriétés connues de la figure."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Combien un triangle possède-t-il de sommets, de côtés et d’angles ?",
        correction: "Un triangle possède trois sommets, trois côtés et trois angles."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le triangle ABC est isocèle en A. Quels côtés ont la même longueur ?",
        correction: "Les côtés [AB] et [AC] ont la même longueur : AB = AC."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Combien mesure chaque angle d’un triangle équilatéral ?",
        correction: "Chaque angle mesure 60°."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le triangle ABC est rectangle en B. Quel est son hypoténuse ?",
        correction: "L’hypoténuse est le côté opposé à l’angle droit : c’est [AC]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux angles d’un triangle mesurent 45° et 65°. Calcule le troisième.",
        correction: "La somme des trois angles vaut 180°. Le troisième mesure 180° − 45° − 65° = 70°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un triangle rectangle possède un angle de 30° en plus de son angle droit. Calcule le troisième angle.",
        correction: "Le troisième angle mesure 180° − 90° − 30° = 60°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Le triangle ABC est isocèle en A. L’angle en B mesure 55°. Combien mesure l’angle en C ?",
        correction: "Les angles à la base d’un triangle isocèle sont égaux. L’angle en C mesure donc 55°."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Peut-on construire un triangle de côtés 3 cm, 4 cm et 6 cm ?",
        correction: "Oui. La plus grande longueur est 6 cm et 6 < 3 + 4. Les longueurs permettent donc de construire un triangle."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Peut-on construire un triangle de côtés 2 cm, 4 cm et 7 cm ? Justifie.",
        correction: "Non. La plus grande longueur est 7 cm et 7 > 2 + 4. L’inégalité triangulaire n’est pas respectée."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Peut-on construire un triangle de côtés 3 cm, 5 cm et 8 cm ?",
        correction: "Non. 3 + 5 = 8. Les trois points seraient alignés : ils ne formeraient pas un triangle."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un triangle est isocèle en A. Son angle en A mesure 80°. Calcule ses deux autres angles.",
        correction: "Les deux angles à la base sont égaux. Leur somme vaut 180° − 80° = 100°. Chacun mesure 100° ÷ 2 = 50°."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Construis au compas un triangle ABC tel que AB = 6 cm, AC = 5 cm et BC = 4 cm.",
        correction: "Trace [AB] de 6 cm. Trace un arc de centre A et de rayon 5 cm, puis un arc de centre B et de rayon 4 cm. Nomme C un point d’intersection, puis trace [AC] et [BC]."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Construis un triangle équilatéral ABC de côté 5 cm. Quelle est la longueur BC ?",
        correction: "Trace [AB] de 5 cm. Avec le compas ouvert à 5 cm, trace un arc de centre A puis un arc de centre B. Leur intersection donne C. Relie les sommets. Les trois côtés mesurent 5 cm, donc BC = 5 cm."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un triangle rectangle est aussi isocèle. Combien mesurent ses deux angles autres que l’angle droit ?",
        correction: "Les deux autres angles sont égaux et leur somme vaut 90°. Ils mesurent donc chacun 90° ÷ 2 = 45°."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève veut construire un triangle dont les angles mesurent 60°, 70° et 80°. Est-ce possible ?",
        correction: "Non. La somme proposée vaut 60° + 70° + 80° = 210°. Or la somme des angles d’un triangle doit être égale à 180°."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Deux côtés d’un triangle mesurent 4 cm et 7 cm. Parmi les longueurs 2 cm, 5 cm et 12 cm, lesquelles peuvent être la longueur du troisième côté ?",
        correction: "Avec 2 cm, on a 2 + 4 < 7 : impossible. Avec 5 cm, 7 < 4 + 5 : possible. Avec 12 cm, 12 > 4 + 7 : impossible. Seule la longueur 5 cm convient."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Le triangle ABC est isocèle en A et son angle en B mesure 40°. Calcule les angles en C et en A.",
        correction: "Les angles à la base sont égaux, donc l’angle en C mesure 40°. L’angle en A mesure 180° − 40° − 40° = 100°."
      }
    ]
  }
]);
