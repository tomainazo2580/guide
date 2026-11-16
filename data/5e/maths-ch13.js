enregistrerChapitres("5e", "maths", [
  {
    id: "maths5-ch13",
    titre: "Chapitre 13 : Droites remarquables du triangle",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "maths5-ch13-lecon1",
        titre: "1. Quelles sont ces droites ?",
        blocs: [
          {
            type: "texte",
            titre: "Quatre familles de droites",
            texte: "Dans un triangle, certaines droites sont construites à partir des côtés, des sommets ou des angles. On les appelle des droites remarquables : les médiatrices, les médianes, les hauteurs et les bissectrices."
          },
          {
            type: "texte",
            titre: "Une idée importante",
            texte: "Chaque famille contient trois droites associées au triangle. Les trois médiatrices passent par un même point. Il en est de même pour les trois médianes, les trois hauteurs et les trois bissectrices."
          },
          {
            type: "remarque",
            titre: "Ne pas les confondre",
            texte: "Une médiane passe par un sommet et le milieu du côté opposé. Une médiatrice est perpendiculaire à un côté en son milieu. Ce n’est pas la même définition."
          },
          {
            type: "remarque",
            titre: "Droite ou segment",
            texte: "Pour faciliter le dessin, on représente parfois seulement une partie d’une droite. Une droite, elle, se prolonge dans les deux sens."
          }
        ]
      },

      {
        id: "maths5-ch13-lecon2",
        titre: "2. La médiatrice d’un côté",
        blocs: [
          {
            type: "definition",
            titre: "Médiatrice d’un segment",
            texte: "La médiatrice d’un segment est la droite perpendiculaire à ce segment qui passe par son milieu."
          },
          {
            type: "exemple",
            titre: "Pour le segment [AB]",
            texte: "Si I est le milieu de [AB], la médiatrice de [AB] est la droite perpendiculaire à (AB) passant par I."
          },
          {
            type: "regle",
            titre: "Une propriété utile",
            texte: "Tout point de la médiatrice de [AB] est à la même distance de A et de B. Réciproquement, tout point situé à la même distance de A et de B appartient à cette médiatrice."
          },
          {
            type: "methode",
            titre: "Construire la médiatrice au compas",
            texte: "1. Ouvre le compas à une longueur supérieure à la moitié de AB. 2. Trace deux arcs de centre A, de part et d’autre de [AB]. 3. Sans changer l’ouverture, trace deux arcs de centre B qui coupent les premiers. 4. Trace la droite passant par les deux points d’intersection des arcs : c’est la médiatrice de [AB]."
          },
          {
            type: "remarque",
            titre: "Dans un triangle",
            texte: "Un triangle ABC possède trois médiatrices : celles de [AB], [BC] et [CA]. Une médiatrice ne passe pas forcément par un sommet du triangle."
          }
        ]
      },

      {
        id: "maths5-ch13-lecon3",
        titre: "3. Le cercle circonscrit",
        blocs: [
          {
            type: "regle",
            titre: "Intersection des médiatrices",
            texte: "Les trois médiatrices des côtés d’un triangle sont concourantes : elles passent par un même point. Ce point est le centre du cercle circonscrit au triangle."
          },
          {
            type: "definition",
            titre: "Cercle circonscrit",
            texte: "Le cercle circonscrit à un triangle est le cercle qui passe par ses trois sommets."
          },
          {
            type: "exemple",
            titre: "Pourquoi le centre convient-il ?",
            texte: "Si O est à l’intersection des médiatrices de [AB] et de [AC], alors OA = OB et OA = OC. Donc OA = OB = OC : un cercle de centre O et de rayon OA passe par A, B et C."
          },
          {
            type: "methode",
            titre: "Tracer le cercle circonscrit",
            texte: "1. Construis les médiatrices de deux côtés du triangle. 2. Nomme O leur point d’intersection. 3. Place la pointe du compas en O et ouvre-le jusqu’à un sommet. 4. Trace le cercle : il passe aussi par les deux autres sommets."
          },
          {
            type: "remarque",
            titre: "Position du centre",
            texte: "Le centre du cercle circonscrit n’est pas toujours à l’intérieur du triangle. Dans un triangle rectangle, il est au milieu de l’hypoténuse."
          }
        ]
      },

      {
        id: "maths5-ch13-lecon4",
        titre: "4. Les médianes",
        blocs: [
          {
            type: "definition",
            titre: "Médiane",
            texte: "Une médiane d’un triangle est la droite qui passe par un sommet et par le milieu du côté opposé."
          },
          {
            type: "schema",
            titre: "La médiane issue de A",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' role='img' aria-label='Triangle ABC, avec I milieu du côté BC et médiane AI'><path d='M170 25 L45 200 L355 200 Z' fill='#eaf4ff' stroke='#25496b' stroke-width='3'/><line x1='170' y1='25' x2='200' y2='200' stroke='#c43b3b' stroke-width='3'/><circle cx='200' cy='200' r='4' fill='#c43b3b'/><path d='M120 193v14 M280 193v14' stroke='#25496b' stroke-width='2'/><g font-size='20' fill='#222'><text x='163' y='20'>A</text><text x='25' y='220'>B</text><text x='360' y='220'>C</text><text x='194' y='225'>I</text></g></svg>",
            legende: "I est le milieu de [BC] : BI = IC. La droite (AI) est la médiane issue de A."
          },
          {
            type: "methode",
            titre: "Construire une médiane",
            texte: "Pour construire la médiane issue de A dans ABC : 1. Repère ou construis le milieu I de [BC]. 2. Trace la droite (AI)."
          },
          {
            type: "regle",
            titre: "Les trois médianes",
            texte: "Les trois médianes d’un triangle sont concourantes. Leur point d’intersection s’appelle le centre de gravité du triangle."
          },
          {
            type: "remarque",
            titre: "Médiane et médiatrice",
            texte: "Une médiane passe obligatoirement par un sommet. Elle n’est pas forcément perpendiculaire au côté opposé."
          }
        ]
      },

      {
        id: "maths5-ch13-lecon5",
        titre: "5. Les hauteurs",
        blocs: [
          {
            type: "definition",
            titre: "Hauteur",
            texte: "Une hauteur d’un triangle est la droite qui passe par un sommet et qui est perpendiculaire à la droite portant le côté opposé."
          },
          {
            type: "exemple",
            titre: "La hauteur issue de A",
            texte: "Dans le triangle ABC, la hauteur issue de A passe par A et est perpendiculaire à la droite (BC). Son point d’intersection avec (BC) s’appelle le pied de la hauteur."
          },
          {
            type: "methode",
            titre: "Construire une hauteur",
            texte: "1. Repère le sommet choisi et la droite portant le côté opposé. 2. Avec l’équerre, trace par le sommet la perpendiculaire à cette droite. 3. Si nécessaire, prolonge le côté opposé à la règle."
          },
          {
            type: "regle",
            titre: "Les trois hauteurs",
            texte: "Les trois hauteurs d’un triangle sont concourantes. Leur point d’intersection s’appelle l’orthocentre."
          },
          {
            type: "remarque",
            titre: "À l’extérieur du triangle",
            texte: "Le pied d’une hauteur peut se trouver sur le prolongement d’un côté. L’orthocentre peut lui aussi être à l’extérieur du triangle."
          },
          {
            type: "exemple",
            titre: "Triangle rectangle",
            texte: "Dans un triangle ABC rectangle en A, les droites (AB) et (AC) sont deux hauteurs. Elles se coupent en A : l’orthocentre est donc A."
          }
        ]
      },

      {
        id: "maths5-ch13-lecon6",
        titre: "6. Les bissectrices et le cercle inscrit",
        blocs: [
          {
            type: "definition",
            titre: "Bissectrice d’un angle",
            texte: "La bissectrice d’un angle est la demi-droite qui part du sommet et partage cet angle en deux angles de même mesure."
          },
          {
            type: "exemple",
            titre: "Partager un angle",
            texte: "Si un angle mesure 70°, sa bissectrice le partage en deux angles de 35°."
          },
          {
            type: "methode",
            titre: "Construire au rapporteur",
            texte: "Pour un angle AÔB de 80° : 1. Place le centre du rapporteur sur O et son 0° sur [OA). 2. Fais une marque à 40° à l’intérieur de l’angle. 3. Trace la demi-droite issue de O passant par cette marque."
          },
          {
            type: "regle",
            titre: "Dans un triangle",
            texte: "Les bissectrices des trois angles d’un triangle se coupent en un même point. Ce point est le centre du cercle inscrit dans le triangle."
          },
          {
            type: "definition",
            titre: "Cercle inscrit",
            texte: "Le cercle inscrit est un cercle situé à l’intérieur du triangle et tangent à ses trois côtés : il touche chacun des côtés en un point."
          },
          {
            type: "methode",
            titre: "Tracer le cercle inscrit",
            texte: "1. Construis les bissectrices de deux angles et nomme I leur intersection. 2. Trace la perpendiculaire à un côté passant par I. Nomme H son point d’intersection avec ce côté. 3. Trace le cercle de centre I et de rayon IH."
          },
          {
            type: "remarque",
            titre: "Deux cercles différents",
            texte: "Le cercle circonscrit passe par les trois sommets. Le cercle inscrit touche les trois côtés. Leurs centres ne sont pas forcément au même endroit."
          }
        ]
      },

      {
        id: "maths5-ch13-lecon7",
        titre: "7. Comparer les quatre familles",
        blocs: [
          {
            type: "tableau",
            titre: "À retenir",
            entetes: ["Droite", "Comment la reconnaître ?", "Point de rencontre"],
            lignes: [
              ["Médiatrice", "Perpendiculaire à un côté en son milieu", "Centre du cercle circonscrit"],
              ["Médiane", "Passe par un sommet et le milieu du côté opposé", "Centre de gravité"],
              ["Hauteur", "Passe par un sommet et est perpendiculaire au côté opposé ou à son prolongement", "Orthocentre"],
              ["Bissectrice", "Partage un angle en deux angles égaux", "Centre du cercle inscrit"]
            ]
          },
          {
            type: "exemple",
            titre: "Des propriétés qui peuvent se retrouver",
            texte: "Dans un triangle équilatéral, la droite passant par un sommet et le milieu du côté opposé est à la fois médiane, hauteur et médiatrice de ce côté. Elle porte aussi la bissectrice de l’angle à ce sommet."
          },
          {
            type: "remarque",
            titre: "Cas général",
            texte: "Dans un triangle quelconque, ces droites ne sont généralement pas confondues. Il faut s’appuyer sur leurs définitions, pas seulement sur l’apparence de la figure."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Complète : la médiatrice d’un segment est perpendiculaire à ce segment et passe par son …",
        correction: "Elle passe par son milieu."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un angle mesure 80°. Sa bissectrice le partage en deux angles de quelle mesure ?",
        correction: "Chaque angle mesure 80° ÷ 2 = 40°."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Comment appelle-t-on le point d’intersection des trois hauteurs d’un triangle ?",
        correction: "Il s’appelle l’orthocentre."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le cercle circonscrit à un triangle passe-t-il par ses sommets ou touche-t-il ses côtés ?",
        correction: "Le cercle circonscrit passe par les trois sommets du triangle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "I est le milieu de [BC] dans le triangle ABC. Comment appelle-t-on la droite (AI) ?",
        correction: "La droite (AI) est la médiane issue de A : elle passe par A et par le milieu du côté opposé."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un point M appartient à la médiatrice de [AB]. Si MA = 6 cm, que vaut MB ?",
        correction: "MB = 6 cm. Tout point de la médiatrice de [AB] est à la même distance de A et de B."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une droite passe par A et est perpendiculaire à (BC) dans le triangle ABC. Comment l’appelle-t-on ?",
        correction: "C’est la hauteur issue de A."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Comment appelle-t-on le point d’intersection des trois médianes d’un triangle ?",
        correction: "C’est le centre de gravité du triangle."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Trace un triangle ABC. Construis la médiane issue de B et explique ton tracé.",
        correction: "On construit le milieu J de [AC], puis on trace la droite (BJ). Elle passe par B et par le milieu du côté opposé : c’est la médiane issue de B."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "O appartient aux médiatrices de [AB] et de [AC]. Si OA = 5 cm, quelles sont les longueurs OB et OC ?",
        correction: "Comme O appartient à la médiatrice de [AB], OA = OB. Comme il appartient à celle de [AC], OA = OC. Donc OB = OC = 5 cm."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Un angle mesure 126°. Calcule les mesures des deux angles formés par sa bissectrice.",
        correction: "126° ÷ 2 = 63°. Chacun des deux angles mesure 63°."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Le triangle ABC est rectangle en B. Où se trouve son orthocentre ?",
        correction: "Les droites (BA) et (BC) sont deux hauteurs car elles sont perpendiculaires. Elles se coupent en B : l’orthocentre est B."
      },
      {
        niveau: 3,
        points: 3,
        enonce: "Le triangle ABC est rectangle en B. Où se trouve le centre de son cercle circonscrit ?",
        correction: "L’hypoténuse est [AC], le côté opposé à l’angle droit. Le centre du cercle circonscrit est le milieu de [AC]."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Une droite passe par le milieu du côté [BC] d’un triangle et par le sommet A. Est-elle forcément perpendiculaire à (BC) ?",
        correction: "Non. C’est la médiane issue de A, mais une médiane n’est pas forcément perpendiculaire au côté opposé."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un élève dit : « Le cercle inscrit passe par les trois sommets du triangle. » Corrige sa phrase.",
        correction: "C’est le cercle circonscrit qui passe par les trois sommets. Le cercle inscrit est à l’intérieur du triangle et touche ses trois côtés."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Un point P vérifie PA = PB. Que peut-on dire de sa position par rapport au segment [AB] ?",
        correction: "P appartient à la médiatrice de [AB], car il est à la même distance de A et de B."
      },
      {
        niveau: 4,
        points: 4,
        enonce: "Dans un triangle ABC, les médiatrices de [AB] et de [BC] se coupent en O. Explique pourquoi le cercle de centre O passant par B passe aussi par A et C.",
        correction: "O appartient à la médiatrice de [AB], donc OA = OB. Il appartient aussi à celle de [BC], donc OB = OC. Ainsi OA = OB = OC : A, B et C sont tous sur le cercle de centre O et de rayon OB."
      }
    ]
  }
]);
