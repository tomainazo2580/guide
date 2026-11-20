// ===== GUIDE - Mathématiques 3e (T9) =====
// Chapitre 11 : pyramides, cônes et boules.
// Inspiré du fascicule T9 et complété par Guide.

enregistrerChapitres("3e", "maths", [
  {
    id: "m3-pyramides-cones-boules",
    titre: "Chapitre 11 : Pyramides, cônes et boules",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m3-pyramide",
        titre: "Reconnaître une pyramide",
        blocs: [
          {
            type: "definition",
            titre: "Une base et un sommet",
            texte: "Une pyramide est un solide qui possède une base polygonale et des faces latérales triangulaires.\n\nToutes les faces latérales se rejoignent en un même point : le sommet de la pyramide.\n\nLa base peut être un triangle, un carré ou un autre polygone. On nomme souvent la pyramide d'après la forme de sa base."
          },
          {
            type: "schema",
            titre: "Une pyramide à base carrée",
            svg: "<svg viewBox='0 0 320 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Pyramide à base carrée, de sommet S et de hauteur SH'><path d='M55 155 L190 155 L260 195 L125 195 Z' fill='#dbeafe' stroke='#1e3a8a' stroke-width='2'/><path d='M155 20 L55 155 M155 20 L190 155 M155 20 L260 195 M155 20 L125 195' fill='none' stroke='#1e3a8a' stroke-width='2'/><line x1='155' y1='20' x2='155' y2='175' stroke='#dc2626' stroke-width='2' stroke-dasharray='5,4'/><circle cx='155' cy='175' r='3' fill='#dc2626'/><text x='155' y='16' text-anchor='middle' font-size='15'>S</text><text x='163' y='185' font-size='15' fill='#b91c1c'>H</text><text x='168' y='105' font-size='14' fill='#b91c1c'>hauteur</text></svg>",
            legende: "S est le sommet. La hauteur [SH] est perpendiculaire au plan de la base. Le dessin représente le solide en perspective."
          },
          {
            type: "definition",
            titre: "La hauteur d'une pyramide",
            texte: "La hauteur d'une pyramide est la distance perpendiculaire entre son sommet et le plan de sa base.\n\nSur le schéma, la hauteur est SH. Une arête latérale, comme un segment reliant S à un sommet de la base, est généralement inclinée : ce n'est pas forcément la hauteur."
          },
          {
            type: "methode",
            titre: "Repérer les éléments utiles",
            texte: "Avant de calculer un volume :\n\n1. Identifie la base et sa forme.\n2. Cherche les mesures nécessaires pour calculer l'aire de cette base.\n3. Repère la hauteur perpendiculaire à la base.\n\nNe confonds pas une longueur du contour de la base avec son aire."
          }
        ]
      },
      {
        id: "m3-volume-pyramide",
        titre: "Calculer le volume d'une pyramide",
        blocs: [
          {
            type: "regle",
            titre: "La formule",
            texte: "Le volume d'une pyramide est :\n\nV = (aire de la base × hauteur) ÷ 3.\n\nOn calcule donc d'abord l'aire de la base, puis on la multiplie par la hauteur et on divise par 3."
          },
          {
            type: "exemple",
            titre: "Une base carrée",
            texte: "Une pyramide a une base carrée de côté 6 cm et une hauteur de 4 cm.\n\n1. Aire de la base : 6 × 6 = 36 cm².\n2. Volume : V = (36 × 4) ÷ 3 = 48 cm³.\n\nLa réponse est en cm³ : une aire en cm² multipliée par une hauteur en cm donne un volume en cm³."
          },
          {
            type: "exemple",
            titre: "Une base triangulaire",
            texte: "La base d'une pyramide est un triangle d'aire 15 cm². La hauteur de la pyramide est 8 cm.\n\nV = (15 × 8) ÷ 3 = 120 ÷ 3 = 40 cm³.\n\nIci, l'aire de la base est déjà donnée : il n'est pas nécessaire de la recalculer."
          },
          {
            type: "remarque",
            titre: "Pourquoi diviser par 3 ?",
            texte: "Une pyramide occupe le tiers du volume d'un prisme qui a la même aire de base et la même hauteur.\n\nPar exemple, si le prisme a un volume de 144 cm³, la pyramide correspondante a un volume de 144 ÷ 3 = 48 cm³."
          }
        ]
      },
      {
        id: "m3-cone",
        titre: "Reconnaître un cône de révolution",
        blocs: [
          {
            type: "definition",
            titre: "Un disque et un sommet",
            texte: "Un cône de révolution possède une base en forme de disque et un sommet situé au-dessus du centre de cette base.\n\nSa hauteur est la distance entre le sommet et le centre du disque. Elle est perpendiculaire au plan de la base."
          },
          {
            type: "schema",
            titre: "Rayon et hauteur d'un cône",
            svg: "<svg viewBox='0 0 320 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Cône de sommet S, de base circulaire de centre O, de hauteur SO et de rayon OA'><ellipse cx='160' cy='185' rx='105' ry='22' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><path d='M55 185 L160 20 L265 185' fill='none' stroke='#1d4ed8' stroke-width='2'/><line x1='160' y1='20' x2='160' y2='185' stroke='#dc2626' stroke-width='2' stroke-dasharray='5,4'/><line x1='160' y1='185' x2='265' y2='185' stroke='#16a34a' stroke-width='3'/><circle cx='160' cy='185' r='3' fill='#334155'/><text x='160' y='16' text-anchor='middle' font-size='15'>S</text><text x='150' y='205' font-size='15'>O</text><text x='270' y='190' font-size='15'>A</text><text x='170' y='105' font-size='14' fill='#b91c1c'>hauteur</text><text x='205' y='180' font-size='14' fill='#166534'>rayon</text></svg>",
            legende: "SO est la hauteur et OA un rayon de la base. Le bord incliné du cône n'est pas sa hauteur."
          },
          {
            type: "regle",
            titre: "Volume du cône",
            texte: "Le volume d'un cône est :\n\nV = (aire de la base × hauteur) ÷ 3.\n\nComme sa base est un disque de rayon r, son aire est πr². Si h est la hauteur du cône :\n\nV = πr²h ÷ 3."
          },
          {
            type: "exemple",
            titre: "Calculer un volume",
            texte: "Un cône a un rayon de 3 cm et une hauteur de 4 cm.\n\nAire de la base : π × 3² = 9π cm².\nVolume : V = (9π × 4) ÷ 3 = 12π cm³.\n\nLa valeur exacte est 12π cm³. Avec π ≈ 3,14, on obtient environ 37,68 cm³."
          },
          {
            type: "remarque",
            titre: "Ne pas oublier le tiers",
            texte: "Le volume d'un cylindre de même rayon de base et de même hauteur est πr²h.\n\nLe cône correspondant occupe le tiers de ce volume : on doit donc diviser par 3."
          }
        ]
      },
      {
        id: "m3-sphere-boule",
        titre: "Distinguer une sphère et une boule",
        blocs: [
          {
            type: "definition",
            titre: "La surface et l'intérieur",
            texte: "Une sphère de centre O et de rayon r est l'ensemble des points situés exactement à la distance r de O : c'est une surface.\n\nUne boule de centre O et de rayon r comprend tous les points situés à une distance inférieure ou égale à r de O : elle contient la sphère et son intérieur.\n\nOn peut comparer cette distinction à celle entre un cercle et un disque."
          },
          {
            type: "schema",
            titre: "Centre et rayon",
            svg: "<svg viewBox='0 0 320 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Représentation d’une boule de centre O et de rayon OA'><circle cx='155' cy='100' r='75' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><ellipse cx='155' cy='100' rx='75' ry='22' fill='none' stroke='#64748b' stroke-width='1.5' stroke-dasharray='5,4'/><line x1='155' y1='100' x2='230' y2='100' stroke='#dc2626' stroke-width='3'/><circle cx='155' cy='100' r='3' fill='#334155'/><text x='145' y='94' font-size='15'>O</text><text x='236' y='105' font-size='15'>A</text><text x='190' y='92' font-size='14' fill='#b91c1c'>r</text></svg>",
            legende: "OA est un rayon. La sphère est la surface de la boule ; la boule comprend aussi son intérieur."
          },
          {
            type: "regle",
            titre: "Aire de la sphère",
            texte: "L'aire d'une sphère de rayon r est :\n\nA = 4πr².\n\nPour r = 3 cm :\nA = 4 × π × 3² = 36π cm².\n\nC'est une aire : son unité est une unité carrée."
          },
          {
            type: "regle",
            titre: "Volume de la boule",
            texte: "Le volume d'une boule de rayon r est :\n\nV = (4 × π × r³) ÷ 3.\n\nPour r = 3 cm :\nV = (4 × π × 3³) ÷ 3\n= (4 × π × 27) ÷ 3\n= 36π cm³.\n\nC'est un volume : son unité est une unité cubique."
          },
          {
            type: "remarque",
            titre: "Rayon ou diamètre ?",
            texte: "Les formules utilisent le rayon. Si l'énoncé donne le diamètre, il faut d'abord le diviser par 2.\n\nPar exemple, un diamètre de 12 cm correspond à un rayon de 6 cm."
          }
        ]
      },
      {
        id: "m3-sections-boule",
        titre: "Comprendre une section de boule",
        blocs: [
          {
            type: "definition",
            titre: "Une coupe par un plan",
            texte: "Imagine que l'on coupe une boule avec un plan. Si le plan traverse la boule, la surface de coupe est un disque. Le contour de cette section est un cercle.\n\nLa taille de ce disque dépend de la position du plan."
          },
          {
            type: "exemple",
            titre: "Une coupe passant par le centre",
            texte: "Si le plan de coupe passe par le centre O de la boule, la section est un disque dont le rayon est égal à celui de la boule.\n\nSon contour est appelé un grand cercle de la sphère.\n\nPour une boule de rayon 5 cm, cette section a donc un rayon de 5 cm et une aire de 25π cm²."
          },
          {
            type: "remarque",
            titre: "Une coupe qui ne passe pas par le centre",
            texte: "Si le plan traverse la boule sans passer par son centre, la section est un disque plus petit.\n\nPlus le plan se rapproche du bord de la boule, plus le disque de section devient petit. Un plan tangent touche la boule en un seul point."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Complète :\n\n1. La base d'un cône est un …\n2. Une pyramide possède des faces latérales en forme de …\n3. La hauteur d'une pyramide est perpendiculaire au plan de sa …",
        correction: "1. La base d'un cône est un disque.\n\n2. Les faces latérales d'une pyramide sont des triangles.\n\n3. Sa hauteur est perpendiculaire au plan de sa base."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une boule a un diamètre de 10 cm.\n\n1. Quel est son rayon ?\n2. Quelle est la différence entre la sphère et la boule ?",
        correction: "1. Le rayon est la moitié du diamètre : 10 ÷ 2 = 5 cm.\n\n2. La sphère est la surface formée des points à 5 cm du centre. La boule comprend cette surface et son intérieur."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une pyramide a une base carrée de côté 4 cm et une hauteur de 6 cm.\n\n1. Calcule l'aire de sa base.\n2. Calcule son volume.",
        correction: "1. La base est un carré : son aire vaut 4 × 4 = 16 cm².\n\n2. Le volume d'une pyramide est le tiers du produit de l'aire de la base par la hauteur :\nV = (16 × 6) ÷ 3 = 96 ÷ 3 = 32 cm³."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un cône a un rayon de base de 2 cm et une hauteur de 9 cm.\n\nCalcule son volume exact en fonction de π, puis une valeur approchée avec π ≈ 3,14.",
        correction: "La formule est V = πr²h ÷ 3.\n\nV = π × 2² × 9 ÷ 3\n= π × 4 × 9 ÷ 3\n= 12π cm³.\n\nAvec π ≈ 3,14 : V ≈ 12 × 3,14 = 37,68 cm³."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une boule a un rayon de 6 cm.\n\n1. Calcule l'aire exacte de sa sphère.\n2. Calcule le volume exact de la boule.",
        correction: "1. Aire de la sphère :\nA = 4πr² = 4 × π × 6²\n= 4 × π × 36 = 144π cm².\n\n2. Volume de la boule :\nV = 4πr³ ÷ 3 = 4 × π × 6³ ÷ 3\n= 4 × π × 216 ÷ 3\n= 288π cm³.\n\nAttention : l'aire est en cm² et le volume en cm³."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un cylindre et un cône ont le même rayon de base, 3 cm, et la même hauteur, 8 cm.\n\n1. Calcule le volume exact du cylindre.\n2. Calcule le volume exact du cône.\n3. Compare les deux volumes.",
        correction: "1. Cylindre :\nV = πr²h = π × 3² × 8 = 72π cm³.\n\n2. Cône :\nV = πr²h ÷ 3 = 72π ÷ 3 = 24π cm³.\n\n3. Le cône a le tiers du volume du cylindre. Inversement, le cylindre a trois fois le volume du cône."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une pyramide a une base rectangulaire de 12 cm sur 5 cm. Son volume est de 140 cm³.\n\n1. Calcule l'aire de la base.\n2. Trouve la hauteur de la pyramide.\n3. Vérifie ton résultat.",
        correction: "1. Aire de la base rectangulaire :\n12 × 5 = 60 cm².\n\n2. On note h la hauteur en cm. La formule donne :\n140 = (60 × h) ÷ 3.\nDonc 140 = 20h, puis h = 140 ÷ 20 = 7.\n\nLa hauteur mesure 7 cm.\n\n3. Vérification : (60 × 7) ÷ 3 = 420 ÷ 3 = 140 cm³. On retrouve le volume donné."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un moule sans couvercle a la forme d'un cône de révolution. Son rayon intérieur est 3 cm et sa hauteur intérieure est 8 cm.\n\n1. Calcule son volume intérieur exact.\n2. Donne une valeur approchée en cm³ avec π ≈ 3,14.\n3. Ce moule peut-il contenir 80 mL d'eau ?",
        correction: "1. Le volume intérieur vaut :\nV = πr²h ÷ 3\n= π × 3² × 8 ÷ 3\n= 24π cm³.\n\n2. Avec π ≈ 3,14 :\nV ≈ 24 × 3,14 = 75,36 cm³.\n\n3. Comme 1 cm³ = 1 mL, la capacité est d'environ 75,36 mL. Elle est inférieure à 80 mL : le moule ne peut donc pas contenir 80 mL sans déborder."
      }
    ]
  }
]);
