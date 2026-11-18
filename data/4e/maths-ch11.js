// ===== GUIDE - Mathématiques 4e (T8) =====
// Chapitre 11 : La symétrie axiale et les propriétés des figures

enregistrerChapitres("4e", "maths", [
  {
    id: "m4-ch11",
    titre: "Chapitre 11 : La symétrie axiale et les propriétés des figures",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m4-ch11-definition",
        titre: "Comprendre la symétrie axiale",
        blocs: [
          {
            type: "definition",
            titre: "Une symétrie par rapport à une droite",
            texte: "La symétrie axiale d'axe (d) transforme une figure en son image comme si l'on pliait la feuille le long de la droite (d).\nLa droite (d) s'appelle l'axe de symétrie."
          },
          {
            type: "definition",
            titre: "Image d'un point",
            texte: "Si A n'est pas sur l'axe (d), son image A' est située de l'autre côté de (d), sur la perpendiculaire à (d) passant par A, et à la même distance de (d).\nL'axe (d) est alors la médiatrice du segment [AA']."
          },
          {
            type: "schema",
            titre: "Deux points symétriques par rapport à une droite",
            svg: "<svg viewBox='0 0 340 170' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Les points A et A prime sont de part et d’autre de la droite verticale d, à la même distance de cette droite'><line x1='170' y1='15' x2='170' y2='155' stroke='#2563eb' stroke-width='2'/><text x='180' y='28' font-size='14' fill='#2563eb'>(d)</text><line x1='55' y1='85' x2='285' y2='85' stroke='#64748b' stroke-width='1.5'/><path d='M170 85 L170 73 L182 73 L182 85' fill='none' stroke='#1e3a5f' stroke-width='1.5'/><circle cx='55' cy='85' r='5' fill='#dc2626'/><circle cx='170' cy='85' r='4' fill='#1e3a5f'/><circle cx='285' cy='85' r='5' fill='#dc2626'/><g font-size='14' text-anchor='middle' fill='#1e3a5f'><text x='55' y='68'>A</text><text x='158' y='105'>H</text><text x='285' y='68'>A'</text></g><g stroke='#1e3a5f' stroke-width='2'><line x1='110' y1='79' x2='116' y2='91'/><line x1='224' y1='79' x2='230' y2='91'/></g></svg>",
            legende: "(d) est perpendiculaire à [AA'] en son milieu H : AH = HA'."
          },
          {
            type: "regle",
            titre: "Un point sur l'axe",
            texte: "Un point situé sur l'axe de symétrie est son propre image. Il ne bouge pas lors du pliage."
          }
        ]
      },

      {
        id: "m4-ch11-construction",
        titre: "Construire l'image d'un point",
        blocs: [
          {
            type: "methode",
            titre: "Avec une règle et une équerre",
            texte: "Pour construire l'image A' d'un point A qui n'est pas sur l'axe (d) :\n1. Trace la perpendiculaire à (d) passant par A. Elle coupe (d) en H.\n2. Mesure la longueur AH.\n3. Sur cette perpendiculaire, de l'autre côté de (d), place A' tel que HA' = AH.\n4. Vérifie que (d) est la médiatrice de [AA']."
          },
          {
            type: "exemple",
            titre: "Un exemple de construction",
            texte: "Si le point A est à 3 cm de l'axe (d), son image A' est sur la perpendiculaire à (d) passant par A, de l'autre côté de l'axe, à 3 cm de celui-ci.\nSi H est le point d'intersection avec (d), alors AH = HA' = 3 cm."
          },
          {
            type: "remarque",
            titre: "Attention",
            texte: "Deux points situés à la même distance d'une droite ne sont pas nécessairement symétriques par rapport à cette droite. Il faut aussi que le segment qui les relie soit perpendiculaire à l'axe et coupé en son milieu par celui-ci."
          }
        ]
      },

      {
        id: "m4-ch11-figures",
        titre: "Construire l'image d'une figure",
        blocs: [
          {
            type: "methode",
            titre: "Un segment ou un triangle",
            texte: "Pour construire l'image d'un segment [AB], construis les images A' et B', puis trace [A'B'].\nPour un triangle ABC, construis les images A', B' et C', puis relie-les pour former le triangle A'B'C'."
          },
          {
            type: "schema",
            titre: "Deux triangles symétriques",
            svg: "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Deux triangles symétriques par rapport à une droite verticale'><line x1='170' y1='10' x2='170' y2='190' stroke='#64748b' stroke-width='2' stroke-dasharray='6 4'/><text x='178' y='24' font-size='13' fill='#64748b'>(d)</text><polygon points='45,45 125,70 85,155' fill='#bfdbfe' stroke='#2563eb' stroke-width='2'/><polygon points='295,45 215,70 255,155' fill='#fecaca' stroke='#dc2626' stroke-width='2'/><g stroke='#94a3b8' stroke-width='1' stroke-dasharray='4 4'><line x1='45' y1='45' x2='295' y2='45'/><line x1='125' y1='70' x2='215' y2='70'/><line x1='85' y1='155' x2='255' y2='155'/></g><g font-size='13'><text x='30' y='42' fill='#2563eb'>A</text><text x='126' y='65' fill='#2563eb'>B</text><text x='70' y='170' fill='#2563eb'>C</text><text x='298' y='42' fill='#dc2626'>A'</text><text x='202' y='65' fill='#dc2626'>B'</text><text x='258' y='170' fill='#dc2626'>C'</text></g></svg>",
            legende: "L'axe (d) est la médiatrice de [AA'], [BB'] et [CC']."
          },
          {
            type: "regle",
            titre: "Image d'une droite",
            texte: "L'image d'une droite est une droite. Pour la construire, on peut choisir deux points distincts de la droite, construire leurs images, puis tracer la droite passant par ces images.\nUne droite peut avoir pour image elle-même : c'est notamment le cas de l'axe de symétrie."
          },
          {
            type: "regle",
            titre: "Image d'un cercle",
            texte: "L'image d'un cercle est un cercle de même rayon, dont le centre est l'image du centre du cercle initial.\nSi le centre du cercle est sur l'axe, le cercle a pour image lui-même."
          }
        ]
      },

      {
        id: "m4-ch11-proprietes",
        titre: "Utiliser les propriétés de la symétrie axiale",
        blocs: [
          {
            type: "regle",
            titre: "Longueurs, angles et alignement",
            texte: "La symétrie axiale conserve les longueurs, les mesures des angles et l'alignement.\nSi A' et B' sont les images de A et B, alors A'B' = AB."
          },
          {
            type: "regle",
            titre: "Milieux",
            texte: "La symétrie axiale conserve les milieux : si M est le milieu de [AB], son image M' est le milieu de [A'B']."
          },
          {
            type: "exemple",
            titre: "Un triangle image",
            texte: "Un triangle a pour côtés 3 cm, 4 cm et 5 cm. Son image par une symétrie axiale a les mêmes longueurs de côtés et le même périmètre : 3 + 4 + 5 = 12 cm."
          },
          {
            type: "remarque",
            titre: "Orientation de la figure",
            texte: "Une figure et son image par symétrie axiale sont comme des images dans un miroir. Elles ont la même forme et les mêmes dimensions, mais leur orientation est inversée."
          }
        ]
      },

      {
        id: "m4-ch11-axes",
        titre: "Reconnaître les axes de symétrie d'une figure",
        blocs: [
          {
            type: "definition",
            titre: "Axe de symétrie d'une figure",
            texte: "Une droite est un axe de symétrie d'une figure si l'image de la figure par rapport à cette droite est la figure elle-même.\nEn pliant le long de cet axe, les deux parties de la figure se superposent."
          },
          {
            type: "tableau",
            titre: "Quelques figures usuelles",
            entetes: ["Figure", "Axes de symétrie"],
            lignes: [
              ["Cercle", "Toutes les droites passant par son centre"],
              ["Rectangle non carré", "Deux axes : les droites passant par les milieux de côtés opposés"],
              ["Carré", "Quatre axes : les deux diagonales et les deux droites passant par les milieux de côtés opposés"],
              ["Triangle isocèle non équilatéral", "Un axe : la droite passant par le sommet principal et le milieu de la base"],
              ["Triangle équilatéral", "Trois axes : chacun passe par un sommet et le milieu du côté opposé"]
            ]
          },
          {
            type: "remarque",
            titre: "Un cas particulier",
            texte: "Un carré est un rectangle particulier. Il possède quatre axes de symétrie, et non deux seulement."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un point A est situé sur une droite (d). Quelle est son image par la symétrie d'axe (d) ?",
        correction: "Un point situé sur l'axe ne bouge pas : son image est lui-même. L'image de A est donc A."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "A et A' sont symétriques par rapport à la droite (d). Le segment [AA'] coupe (d) en H et AH = 4 cm.\nCombien mesure HA' ?",
        correction: "L'axe est la médiatrice de [AA'], donc H est le milieu de [AA']. Ainsi HA' = AH = 4 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Trace une droite (d) et choisis un point A qui n'appartient pas à (d). Construis l'image A' de A par la symétrie d'axe (d).",
        correction: "Trace la perpendiculaire à (d) passant par A. Elle coupe (d) en H. Sur cette perpendiculaire, de l'autre côté de (d), place A' tel que HA' = HA. Ainsi, (d) est la médiatrice de [AA']."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un segment [AB] mesure 7 cm. Son image par une symétrie axiale est [A'B']. Combien mesure A'B' ? Justifie.",
        correction: "La symétrie axiale conserve les longueurs. Donc A'B' = AB = 7 cm."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un cercle de centre I et de rayon 3 cm a pour image un cercle par une symétrie d'axe (d).\n1. Comment construire le centre du cercle image ?\n2. Quel est son rayon ?\n3. Que se passe-t-il si I est sur l'axe ?",
        correction: "1. Construis I', image de I par rapport à (d) : si I n'est pas sur l'axe, celui-ci est la médiatrice de [II'].\n2. La symétrie conserve les longueurs : le rayon du cercle image est 3 cm.\n3. Si I est sur l'axe, son image est lui-même et le cercle a pour image le même cercle."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Combien d'axes de symétrie possède chacune de ces figures ?\n1. Un rectangle qui n'est pas un carré.\n2. Un carré.\n3. Un triangle équilatéral.",
        correction: "1. Le rectangle non carré possède 2 axes.\n2. Le carré possède 4 axes : ses 2 diagonales et les 2 droites passant par les milieux de côtés opposés.\n3. Le triangle équilatéral possède 3 axes."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un triangle ABC est isocèle en A : AB = AC. Soit M le milieu de [BC].\n1. Quel est l'axe de symétrie du triangle ?\n2. Quelle est l'image de B par cette symétrie ?\n3. Quelle est l'image de A ?\n4. Si BC = 8 cm, calcule BM et MC.",
        correction: "1. L'axe est la droite (AM), qui passe par le sommet principal et le milieu de la base.\n2. B et C sont symétriques par rapport à (AM) : l'image de B est C.\n3. A est sur l'axe : son image est lui-même.\n4. M est le milieu de [BC], donc BM = MC = 8 ÷ 2 = 4 cm."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "A et B sont deux points distincts. Une droite (d) est la médiatrice du segment [AB].\n1. Quelle est l'image de A par la symétrie d'axe (d) ?\n2. Un point M appartient à (d). Compare MA et MB.\n3. Justifie ta réponse.",
        correction: "1. Puisque (d) est la médiatrice de [AB], l'image de A par la symétrie d'axe (d) est B.\n2. MA = MB.\n3. Le point M est sur l'axe, donc son image est lui-même. La symétrie conserve les longueurs : l'image du segment [MA] est [MB], donc MA = MB."
      }
    ]
  }
]);
