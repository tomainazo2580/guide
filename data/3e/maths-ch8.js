// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 8 : le théorème de Thalès et sa réciproque.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-thales",
    titre: "Chapitre 8 : Le théorème de Thalès",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-thales-reconnaitre",
        titre: "Reconnaître une configuration de Thalès",
        blocs: [
          {
            type: "introduction",
            titre: "Une figure à observer",
            texte: "Dans un triangle ABC, on place un point M sur le côté [AB] et un point N sur le côté [AC].\n\nSi la droite (MN) est parallèle au côté (BC), le petit triangle AMN a la même forme que le grand triangle ABC. Ses dimensions sont proportionnelles à celles du grand triangle.\n\nLe théorème de Thalès permet de traduire cette situation par des égalités de rapports."
          },
          {
            type: "schema",
            titre: "Deux triangles et deux droites parallèles",
            svg: "<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Triangle ABC, M sur AB, N sur AC et MN parallèle à BC'><path d='M160 20 L40 190 L280 190 Z' fill='#eff6ff' stroke='#1e3a8a' stroke-width='2'/><line x1='100' y1='105' x2='220' y2='105' stroke='#16a34a' stroke-width='3'/><circle cx='160' cy='20' r='3' fill='#1e3a8a'/><circle cx='40' cy='190' r='3' fill='#1e3a8a'/><circle cx='280' cy='190' r='3' fill='#1e3a8a'/><circle cx='100' cy='105' r='3' fill='#166534'/><circle cx='220' cy='105' r='3' fill='#166534'/><text x='160' y='15' text-anchor='middle' font-size='15'>A</text><text x='25' y='203' font-size='15'>B</text><text x='285' y='203' font-size='15'>C</text><text x='82' y='105' font-size='15'>M</text><text x='226' y='105' font-size='15'>N</text><text x='160' y='100' text-anchor='middle' font-size='13' fill='#166534'>//</text><text x='160' y='185' text-anchor='middle' font-size='13' fill='#1e3a8a'>//</text></svg>",
            legende: "M appartient à [AB], N appartient à [AC] et (MN) est parallèle à (BC). Les marques // indiquent les droites parallèles."
          },
          {
            type: "definition",
            titre: "Les mots de la figure",
            texte: "• [AB] désigne le segment qui relie A à B.\n• (AB) désigne la droite passant par A et B ; elle se prolonge des deux côtés.\n• AB désigne la longueur du segment [AB].\n\nAinsi, « M appartient à [AB] » décrit la position du point M, tandis que AM désigne une longueur."
          },
          {
            type: "methode",
            titre: "Les indices à chercher",
            texte: "Avant d'utiliser Thalès, cherche :\n\n1. Deux droites sécantes en un point, ici A.\n2. Des points alignés sur ces deux droites : A, M, B d'un côté ; A, N, C de l'autre.\n3. Deux droites parallèles : ici (MN) et (BC).\n\nNe conclus pas que deux droites sont parallèles seulement parce qu'elles semblent l'être sur le dessin. Il faut que l'énoncé le dise ou que cela ait été démontré."
          },
          {
            type: "remarque",
            titre: "La figure ne donne pas toujours les longueurs exactes",
            texte: "Une figure sert à comprendre la situation, mais elle n'est pas forcément dessinée à l'échelle.\n\nPour calculer, utilise les longueurs et les propriétés données dans l'énoncé. Une mesure faite à la règle sur le dessin ne remplace pas une démonstration."
          }
        ]
      },
      {
        id: "m3-thales-theoreme",
        titre: "Utiliser le théorème de Thalès",
        blocs: [
          {
            type: "regle",
            titre: "L'égalité des rapports",
            texte: "Si les points A, M, B sont alignés, les points A, N, C sont alignés, et si (MN) est parallèle à (BC), alors le théorème de Thalès donne :\n\nAM/AB = AN/AC = MN/BC.\n\nLes longueurs utilisées aux dénominateurs doivent être non nulles.\n\nDans chaque rapport, on compare un côté du triangle AMN au côté correspondant du triangle ABC."
          },
          {
            type: "methode",
            titre: "Garder le même ordre",
            texte: "Pour écrire les rapports sans te tromper, compare toujours les côtés du petit triangle à ceux du grand :\n\n• AM correspond à AB ;\n• AN correspond à AC ;\n• MN correspond à BC.\n\nOn obtient ainsi : AM/AB = AN/AC = MN/BC.\n\nOn peut aussi écrire les rapports dans l'autre sens, à condition de les inverser tous : AB/AM = AC/AN = BC/MN, lorsque les dénominateurs sont non nuls."
          },
          {
            type: "exemple",
            titre: "Calculer une longueur",
            texte: "Dans un triangle ABC, M est sur [AB], N est sur [AC] et (MN) est parallèle à (BC). On connaît AM = 3 cm, AB = 6 cm et AC = 8 cm. Calculons AN.\n\nD'après le théorème de Thalès :\nAM/AB = AN/AC.\n\nEn remplaçant :\n3/6 = AN/8.\n\nDonc AN = 8 × 3/6 = 4 cm.\n\nLe rapport 3/6 vaut 1/2 : le petit triangle a des longueurs deux fois plus petites que celles du grand."
          },
          {
            type: "methode",
            titre: "Rédiger une solution",
            texte: "Dans ton cahier :\n\n1. Indique les alignements et les droites parallèles donnés.\n2. Cite le théorème de Thalès.\n3. Écris les rapports en gardant les côtés correspondants dans le même ordre.\n4. Remplace par les valeurs connues.\n5. Calcule la longueur cherchée et écris son unité."
          },
          {
            type: "remarque",
            titre: "Vérifier si le résultat est plausible",
            texte: "Si M est entre A et B, alors AM est plus petite que AB. De même, si N est entre A et C, AN est plus petite que AC.\n\nDans l'exemple précédent, AN = 4 cm et AC = 8 cm : c'est cohérent. Ce contrôle ne remplace pas le calcul, mais peut révéler une erreur."
          }
        ]
      },
      {
        id: "m3-thales-papillon",
        titre: "Thalès dans une figure en papillon",
        blocs: [
          {
            type: "introduction",
            titre: "Les points peuvent être de part et d'autre",
            texte: "La configuration de Thalès ne se présente pas toujours avec un petit triangle à l'intérieur d'un grand. Les droites peuvent se couper entre les points : on obtient alors une figure souvent appelée « papillon »."
          },
          {
            type: "schema",
            titre: "Une configuration en papillon",
            svg: "<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Deux triangles en papillon : A M B alignés, A N C alignés et MN parallèle à BC'><path d='M75 25 L245 195 M245 25 L75 195' fill='none' stroke='#1e3a8a' stroke-width='2'/><line x1='75' y1='25' x2='245' y2='25' stroke='#16a34a' stroke-width='3'/><line x1='75' y1='195' x2='245' y2='195' stroke='#16a34a' stroke-width='3'/><circle cx='160' cy='110' r='4' fill='#dc2626'/><text x='164' y='105' font-size='15'>A</text><text x='57' y='23' font-size='15'>M</text><text x='249' y='23' font-size='15'>N</text><text x='249' y='210' font-size='15'>B</text><text x='58' y='210' font-size='15'>C</text><text x='160' y='20' text-anchor='middle' font-size='13' fill='#166534'>//</text><text x='160' y='210' text-anchor='middle' font-size='13' fill='#166534'>//</text></svg>",
            legende: "A, M, B sont alignés ; A, N, C sont alignés ; (MN) est parallèle à (BC). A est entre M et B et entre N et C."
          },
          {
            type: "regle",
            titre: "La même égalité de rapports",
            texte: "Dans la figure ci-dessus, le théorème donne encore :\n\nAM/AB = AN/AC = MN/BC.\n\nLes longueurs sont positives. Pour associer les côtés, pars du point commun A : M correspond à B et N correspond à C."
          },
          {
            type: "exemple",
            titre: "Un calcul en papillon",
            texte: "On sait que AM = 2 cm, AB = 5 cm et AC = 7,5 cm. Les alignements et le parallélisme sont ceux du schéma.\n\nD'après Thalès : AM/AB = AN/AC.\nDonc 2/5 = AN/7,5.\n\nAN = 7,5 × 2/5 = 3 cm."
          },
          {
            type: "remarque",
            titre: "Reste attentif aux points",
            texte: "La forme du dessin change, mais il faut toujours vérifier les alignements et le parallélisme. Ne choisis pas les rapports uniquement parce que deux longueurs sont proches sur la figure."
          }
        ]
      },
      {
        id: "m3-thales-reciproque",
        titre: "Démontrer un parallélisme : la réciproque",
        blocs: [
          {
            type: "introduction",
            titre: "Partir des longueurs",
            texte: "Le théorème de Thalès part de droites parallèles pour obtenir des rapports égaux.\n\nLa réciproque permet de faire le chemin inverse : sous certaines conditions d'alignement et d'ordre des points, des rapports égaux permettent de démontrer que deux droites sont parallèles."
          },
          {
            type: "regle",
            titre: "La réciproque de Thalès",
            texte: "Supposons que :\n\n• A, M, B sont alignés ;\n• A, N, C sont alignés ;\n• les points M et B sont du même côté de A, et N et C sont du même côté de A ;\n• AM/AB = AN/AC, avec AB et AC non nuls.\n\nAlors les droites (MN) et (BC) sont parallèles.\n\nLes deux conditions sur les côtés de A assurent que les points sont placés dans le même ordre sur les deux droites."
          },
          {
            type: "methode",
            titre: "Comparer les rapports",
            texte: "On sait que M appartient à [AB] et N à [AC]. Les longueurs sont : AM = 3 cm, AB = 6 cm, AN = 4 cm et AC = 8 cm.\n\n1. Les points sont alignés et placés dans le même ordre : A, M, B et A, N, C.\n2. AM/AB = 3/6 = 1/2.\n3. AN/AC = 4/8 = 1/2.\n4. Les rapports sont égaux.\n\nD'après la réciproque du théorème de Thalès, (MN) est parallèle à (BC)."
          },
          {
            type: "remarque",
            titre: "L'ordre des points compte",
            texte: "L'égalité de deux rapports de longueurs ne suffit pas à elle seule : il faut aussi vérifier les alignements et la position des points.\n\nPar exemple, si M et B sont du même côté de A mais que N et C sont de côtés opposés, on ne peut pas appliquer la réciproque avec les seules conditions ci-dessus."
          },
          {
            type: "methode",
            titre: "Prouver que des droites ne sont pas parallèles",
            texte: "Si les alignements nécessaires sont connus et que les rapports AM/AB et AN/AC sont différents, alors (MN) et (BC) ne sont pas parallèles.\n\nEn effet, si elles étaient parallèles, le théorème de Thalès imposerait l'égalité de ces rapports. Leur différence permet donc d'exclure le parallélisme."
          }
        ]
      },
      {
        id: "m3-droite-milieux",
        titre: "La droite des milieux",
        blocs: [
          {
            type: "definition",
            titre: "Qu'est-ce qu'un milieu ?",
            texte: "Un point M est le milieu d'un segment [AB] si :\n\n• M appartient à [AB] ;\n• AM = MB.\n\nIl partage donc le segment en deux parties de même longueur. On a aussi AM = AB/2."
          },
          {
            type: "regle",
            titre: "Joindre les milieux de deux côtés",
            texte: "Dans un triangle, le segment qui joint les milieux de deux côtés est parallèle au troisième côté et mesure la moitié de ce troisième côté.\n\nDans le triangle ABC, si M est le milieu de [AB] et N le milieu de [AC], alors :\n\n(MN) est parallèle à (BC), et MN = BC/2."
          },
          {
            type: "schema",
            titre: "Le segment des milieux",
            svg: "<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Triangle ABC avec M milieu de AB et N milieu de AC ; MN parallèle à BC et égal à la moitié de BC'><path d='M160 20 L40 190 L280 190 Z' fill='#eff6ff' stroke='#1e3a8a' stroke-width='2'/><line x1='100' y1='105' x2='220' y2='105' stroke='#16a34a' stroke-width='3'/><text x='160' y='15' text-anchor='middle' font-size='15'>A</text><text x='25' y='203' font-size='15'>B</text><text x='285' y='203' font-size='15'>C</text><text x='82' y='105' font-size='15'>M</text><text x='226' y='105' font-size='15'>N</text><text x='160' y='98' text-anchor='middle' font-size='13' fill='#166534'>MN</text><text x='160' y='208' text-anchor='middle' font-size='13' fill='#1e3a8a'>BC</text></svg>",
            legende: "M et N sont les milieux indiqués. Alors (MN) est parallèle à (BC) et MN = BC/2."
          },
          {
            type: "exemple",
            titre: "Calculer avec la droite des milieux",
            texte: "Dans un triangle ABC, M et N sont les milieux respectifs de [AB] et [AC]. Si BC = 10 cm, alors :\n\nMN = BC/2 = 10/2 = 5 cm.\n\nOn peut aussi justifier ce résultat par Thalès : AM/AB = 1/2, donc MN/BC = 1/2."
          },
          {
            type: "regle",
            titre: "La propriété dans l'autre sens",
            texte: "Dans un triangle, la droite qui passe par le milieu d'un côté et qui est parallèle à un deuxième côté coupe le troisième côté en son milieu.\n\nPar exemple, si M est le milieu de [AB], si N appartient à [AC] et si (MN) est parallèle à (BC), alors N est le milieu de [AC]."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un triangle ABC, M appartient à [AB], N appartient à [AC] et (MN) est parallèle à (BC).\n\n1. Complète : AM/AB = AN/… = MN/…\n2. Quel théorème permet d'écrire ces égalités ?",
        correction: "1. AM/AB = AN/AC = MN/BC.\n\nOn compare les côtés correspondants du triangle AMN à ceux du triangle ABC.\n\n2. Les alignements et le parallélisme permettent d'utiliser le théorème de Thalès."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un triangle ABC, M est le milieu de [AB] et N est le milieu de [AC]. On donne BC = 12 cm.\n\n1. Que peut-on dire des droites (MN) et (BC) ?\n2. Calcule MN.",
        correction: "1. Le segment [MN] joint les milieux de deux côtés du triangle. Donc (MN) est parallèle à (BC).\n\n2. Le segment des milieux mesure la moitié du troisième côté :\nMN = BC/2 = 12/2 = 6 cm."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans le triangle ABC, M appartient à [AB], N appartient à [AC] et (MN) est parallèle à (BC). On donne AM = 4 cm, AB = 10 cm et AC = 15 cm.\n\nCalcule AN en rédigeant ta justification.",
        correction: "Les points A, M, B sont alignés ; les points A, N, C sont alignés ; et (MN) est parallèle à (BC).\n\nD'après le théorème de Thalès :\nAM/AB = AN/AC.\n\nDonc 4/10 = AN/15.\nAinsi AN = 15 × 4/10 = 6 cm.\n\nVérification : AN est bien inférieure à AC, car N est sur [AC]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans le triangle ABC, M appartient à [AB], N appartient à [AC] et (MN) est parallèle à (BC). On donne AM = 3 cm, AB = 9 cm et BC = 12 cm.\n\nCalcule MN.",
        correction: "D'après le théorème de Thalès :\nAM/AB = MN/BC.\n\nEn remplaçant : 3/9 = MN/12.\nDonc MN = 12 × 3/9 = 4 cm.\n\nLe rapport 3/9 vaut 1/3 : MN mesure bien le tiers de BC."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un triangle ABC, M appartient à [AB] et N appartient à [AC]. On donne AM = 2 cm, AB = 5 cm, AN = 3 cm et AC = 7,5 cm.\n\nDémontre que (MN) est parallèle à (BC).",
        correction: "M appartient à [AB] et N appartient à [AC]. Les points A, M, B sont donc alignés dans cet ordre, ainsi que A, N, C.\n\nCalculons les deux rapports :\nAM/AB = 2/5 = 0,4.\nAN/AC = 3/7,5 = 0,4.\n\nLes rapports sont égaux et les points sont placés dans le même ordre.\n\nD'après la réciproque du théorème de Thalès, (MN) est parallèle à (BC)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un triangle ABC, M appartient à [AB] et N appartient à [AC]. On donne AM = 3 cm, AB = 6 cm, AN = 5 cm et AC = 8 cm.\n\nLes droites (MN) et (BC) peuvent-elles être parallèles ? Justifie.",
        correction: "Calculons les rapports :\nAM/AB = 3/6 = 1/2.\nAN/AC = 5/8.\n\nOr 1/2 = 4/8, et 4/8 ≠ 5/8. Les rapports sont différents.\n\nSi (MN) et (BC) étaient parallèles, le théorème de Thalès imposerait leur égalité. Elles ne sont donc pas parallèles."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Les points M, A, B sont alignés dans cet ordre. Les points N, A, C sont alignés dans cet ordre. On sait que (MN) est parallèle à (BC), AM = 3 cm, AB = 6 cm, AN = 4 cm et MN = 5 cm.\n\n1. Fais une figure en papillon.\n2. Calcule AC.\n3. Calcule BC.",
        correction: "1. Schéma de la configuration :\n<svg viewBox='0 0 320 220' width='100%' style='max-width:320px;height:auto' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Figure en papillon : M A B alignés, N A C alignés et MN parallèle à BC'><path d='M75 25 L245 195 M245 25 L75 195' fill='none' stroke='#1e3a8a' stroke-width='2'/><line x1='75' y1='25' x2='245' y2='25' stroke='#16a34a' stroke-width='3'/><line x1='75' y1='195' x2='245' y2='195' stroke='#16a34a' stroke-width='3'/><circle cx='160' cy='110' r='4' fill='#dc2626'/><text x='164' y='105' font-size='15'>A</text><text x='57' y='23' font-size='15'>M</text><text x='249' y='23' font-size='15'>N</text><text x='249' y='210' font-size='15'>B</text><text x='58' y='210' font-size='15'>C</text></svg>\nLe dessin montre les alignements et le parallélisme ; il n'est pas à l'échelle des longueurs données.\n\n2. D'après Thalès :\nAM/AB = AN/AC = MN/BC.\n\nAinsi 3/6 = 4/AC. Comme 3/6 = 1/2, on a 4/AC = 1/2. Donc AC = 4 × 2 = 8 cm.\n\n3. De même, 3/6 = 5/BC. Donc 5/BC = 1/2 et BC = 5 × 2 = 10 cm.\n\nVérification : 3/6 = 4/8 = 5/10 = 1/2."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Au même moment, un bâton vertical de 1,5 m projette une ombre de 2 m. Un arbre vertical projette une ombre de 8 m sur un sol horizontal.\n\nOn suppose que les rayons du soleil sont parallèles et que le bâton et l'arbre sont perpendiculaires au sol.\n\n1. Explique pourquoi les hauteurs et les longueurs des ombres sont proportionnelles.\n2. Calcule la hauteur de l'arbre.",
        correction: "1. Le bâton et l'arbre forment chacun, avec le sol et un rayon du soleil, un triangle rectangle. Les rayons sont parallèles et les deux objets sont perpendiculaires au même sol : les triangles ont la même forme. On peut utiliser la proportionnalité qui découle de Thalès.\n\n2. Notons h la hauteur de l'arbre, en mètres. On compare hauteur et ombre :\n1,5/2 = h/8.\n\nDonc h = 8 × 1,5/2 = 6 m.\n\nVérification : l'ombre de l'arbre est quatre fois plus longue que celle du bâton, car 8 ÷ 2 = 4. Sa hauteur est donc aussi quatre fois plus grande : 1,5 × 4 = 6 m."
      }
    ]
  }
]);
