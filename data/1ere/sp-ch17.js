enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch17",
    titre: "Chapitre 17 : Ondes et propagation",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch17-onde",
        titre: "1. Qu’est-ce qu’une onde ?",
        blocs: [
          {
            type: "introduction",
            titre: "Une perturbation qui se propage",
            texte: "Lorsqu’une personne secoue l’extrémité d’une corde tendue, une déformation se propage le long de la corde. Chaque petite portion de corde bouge autour de sa position d’équilibre, mais ne voyage pas avec la déformation sur toute la longueur."
          },
          {
            type: "definition",
            titre: "Onde progressive",
            texte: "Une onde progressive est la propagation d’une perturbation de proche en proche. Elle transporte de l’énergie sans transport global de matière associé à sa propagation."
          },
          {
            type: "definition",
            titre: "Ondes mécaniques et électromagnétiques",
            texte: "Une onde mécanique a besoin d’un milieu matériel pour se propager : c’est le cas d’une onde sur une corde ou du son dans l’air. Une onde électromagnétique, comme la lumière, peut se propager dans le vide."
          },
          {
            type: "schema",
            titre: "Propagation d’une déformation sur une corde",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 210' role='img' aria-label='Une déformation localisée se propage vers la droite le long d’une corde. Un point de la corde oscille verticalement autour de sa position d’équilibre.'><line x1='35' y1='120' x2='585' y2='120' stroke='#aaa' stroke-dasharray='6,6' stroke-width='2'/><path d='M35 120 L175 120 C205 120 215 55 260 55 C305 55 315 120 345 120 L585 120' fill='none' stroke='#267' stroke-width='4'/><circle cx='260' cy='55' r='5' fill='#a33'/><line x1='260' y1='75' x2='260' y2='105' stroke='#a33' stroke-width='2'/><polygon points='260,75 254,85 266,85' fill='#a33'/><polygon points='260,105 254,95 266,95' fill='#a33'/><line x1='390' y1='65' x2='520' y2='65' stroke='#222' stroke-width='3'/><polygon points='520,65 508,58 508,72' fill='#222'/><text x='455' y='50' text-anchor='middle' font-size='16'>propagation</text><text x='260' y='150' text-anchor='middle' font-size='15'>mouvement local vertical</text><text x='310' y='185' text-anchor='middle' font-size='15'>La ligne pointillée indique la position d’équilibre.</text></svg>",
            legende: "La déformation se déplace vers la droite ; les points de la corde se déplacent localement autour de leur position d’équilibre."
          },
          {
            type: "remarque",
            titre: "Attention au mot « transport »",
            texte: "L’onde transporte de l’énergie. Dans le modèle étudié, les éléments du milieu oscillent localement : ils ne sont pas emportés globalement avec l’onde."
          }
        ]
      },

      {
        id: "sp1-ch17-types",
        titre: "2. Ondes transversales et longitudinales",
        blocs: [
          {
            type: "definition",
            titre: "Onde transversale",
            texte: "Une onde mécanique est transversale lorsque la déformation locale du milieu est perpendiculaire à la direction de propagation. L’onde sur une corde tendue est un exemple de modèle transversal."
          },
          {
            type: "definition",
            titre: "Onde longitudinale",
            texte: "Une onde mécanique est longitudinale lorsque la déformation locale du milieu se fait dans la même direction que la propagation. Le son dans l’air est une onde longitudinale : il se propage par compressions et dilatations de l’air."
          },
          {
            type: "schema",
            titre: "Comparer les directions",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 230' role='img' aria-label='Pour une onde transversale, la perturbation est verticale et la propagation horizontale. Pour une onde longitudinale, perturbation et propagation sont horizontales.'><text x='155' y='25' text-anchor='middle' font-size='18'>Transversale</text><line x1='65' y1='110' x2='245' y2='110' stroke='#222' stroke-width='3'/><polygon points='245,110 233,103 233,117' fill='#222'/><text x='155' y='135' text-anchor='middle' font-size='15'>propagation</text><line x1='155' y1='55' x2='155' y2='95' stroke='#a33' stroke-width='3'/><polygon points='155,55 148,67 162,67' fill='#a33'/><polygon points='155,95 148,83 162,83' fill='#a33'/><text x='155' y='180' text-anchor='middle' font-size='15'>perturbation perpendiculaire</text><text x='465' y='25' text-anchor='middle' font-size='18'>Longitudinale</text><line x1='375' y1='110' x2='555' y2='110' stroke='#222' stroke-width='3'/><polygon points='555,110 543,103 543,117' fill='#222'/><text x='465' y='135' text-anchor='middle' font-size='15'>propagation</text><line x1='425' y1='65' x2='505' y2='65' stroke='#a33' stroke-width='3'/><polygon points='425,65 437,58 437,72' fill='#a33'/><polygon points='505,65 493,58 493,72' fill='#a33'/><text x='465' y='180' text-anchor='middle' font-size='15'>perturbation parallèle</text></svg>",
            legende: "Les flèches rouges indiquent la direction de la perturbation locale ; les flèches noires indiquent le sens de propagation."
          },
          {
            type: "remarque",
            titre: "Le son ne se propage pas dans le vide",
            texte: "Le son étant une onde mécanique, il a besoin d’un milieu matériel. La lumière, elle, est une onde électromagnétique et peut traverser le vide."
          }
        ]
      },

      {
        id: "sp1-ch17-celerite",
        titre: "3. Célérité et retard",
        blocs: [
          {
            type: "definition",
            titre: "Célérité",
            texte: "La célérité v est la vitesse de propagation de l’onde dans un milieu donné. Pour une propagation à célérité constante sur une distance d pendant une durée Δt : v = d/Δt."
          },
          {
            type: "regle",
            titre: "Unités et retard",
            texte: "Avec d en mètres et Δt en secondes, v s’exprime en m·s⁻¹. Le retard de propagation entre deux points séparés d’une distance d, dans le sens de propagation, vaut Δt = d/v."
          },
          {
            type: "exemple",
            titre: "Un signal sonore",
            texte: "Un son parcourt 680 m dans l’air à la célérité supposée constante de 340 m·s⁻¹. Son temps de parcours est Δt = 680/340 = 2,0 s."
          },
          {
            type: "methode",
            titre: "Résoudre un problème de propagation",
            texte: "1. Identifier la distance effectivement parcourue par l’onde. 2. Convertir les données en unités compatibles. 3. Choisir v = d/Δt, d = vΔt ou Δt = d/v. 4. Vérifier si le trajet comporte un aller simple ou un aller-retour."
          },
          {
            type: "exemple",
            titre: "Écho",
            texte: "Un signal sonore revient après réflexion sur un obstacle au bout de 0,60 s. Si la célérité du son est 340 m·s⁻¹ et si l’émetteur et le récepteur sont au même endroit, le son a parcouru un aller-retour : 2d = vΔt. La distance à l’obstacle est d = 340 × 0,60/2 = 102 m."
          }
        ]
      },

      {
        id: "sp1-ch17-periodicite",
        titre: "4. Période, fréquence et longueur d’onde",
        blocs: [
          {
            type: "definition",
            titre: "Onde périodique",
            texte: "Une onde est périodique lorsqu’en un point du milieu, la perturbation se reproduit identiquement à intervalles de temps réguliers. Le plus petit intervalle correspondant est la période T, exprimée en secondes."
          },
          {
            type: "definition",
            titre: "Fréquence",
            texte: "La fréquence f est le nombre de périodes par seconde. Elle s’exprime en hertz (Hz) et vérifie f = 1/T, avec T en secondes."
          },
          {
            type: "definition",
            titre: "Longueur d’onde",
            texte: "Pour une onde progressive périodique se propageant à célérité constante, la longueur d’onde λ est la distance parcourue par l’onde pendant une période : λ = vT = v/f. Elle s’exprime en mètres."
          },
          {
            type: "schema",
            titre: "Longueur d’onde sur un profil sinusoïdal",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 230' role='img' aria-label='Profil spatial d’une onde sinusoïdale à un instant donné. La longueur d’onde est la distance horizontale entre deux crêtes consécutives.'><line x1='45' y1='120' x2='575' y2='120' stroke='#aaa' stroke-width='2'/><path d='M50 120 C75 120 75 60 100 60 C125 60 125 120 150 120 C175 120 175 180 200 180 C225 180 225 120 250 120 C275 120 275 60 300 60 C325 60 325 120 350 120 C375 120 375 180 400 180 C425 180 425 120 450 120 C475 120 475 60 500 60 C525 60 525 120 550 120' fill='none' stroke='#267' stroke-width='3'/><line x1='100' y1='40' x2='300' y2='40' stroke='#a33' stroke-width='2'/><line x1='100' y1='33' x2='100' y2='48' stroke='#a33' stroke-width='2'/><line x1='300' y1='33' x2='300' y2='48' stroke='#a33' stroke-width='2'/><text x='200' y='30' text-anchor='middle' font-size='17'>λ</text><text x='310' y='215' text-anchor='middle' font-size='15'>Profil de la perturbation à un instant donné</text></svg>",
            legende: "Sur ce profil sinusoïdal, λ est la distance entre deux crêtes consécutives. Ce graphique représente l’espace à un instant donné, et non l’évolution temporelle en un point."
          },
          {
            type: "exemple",
            titre: "Calculer une longueur d’onde",
            texte: "Une onde sonore de fréquence f = 500 Hz se propage à v = 340 m·s⁻¹. Sa longueur d’onde est λ = v/f = 340/500 = 0,68 m. Sa période est T = 1/500 = 0,0020 s."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre T et λ",
            texte: "La période T est une durée mesurée en un point ; la longueur d’onde λ est une distance. Leurs unités sont différentes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Le son dans l’air est-il une onde mécanique ou électromagnétique ? Peut-il se propager dans le vide ?",
        correction: "Le son dans l’air est une onde mécanique. Il a besoin d’un milieu matériel et ne se propage donc pas dans le vide."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une perturbation sur une corde se propage horizontalement tandis que chaque point de la corde se déplace verticalement. L’onde est-elle transversale ou longitudinale ?",
        correction: "La perturbation est perpendiculaire à la propagation : l’onde est transversale."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une onde parcourt 45 m en 0,15 s à célérité constante. Calcule sa célérité.",
        correction: "v = d/Δt = 45/0,15 = 300 m·s⁻¹."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une onde périodique a une fréquence f = 25 Hz. Calcule sa période.",
        correction: "T = 1/f = 1/25 = 0,040 s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une onde périodique se propage à 240 m·s⁻¹ avec une fréquence de 120 Hz. Calcule sa période et sa longueur d’onde.",
        correction: "T = 1/f = 1/120 ≈ 8,3 × 10⁻³ s. λ = v/f = 240/120 = 2,0 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une personne émet un son et entend son écho 0,80 s plus tard. La célérité du son est 340 m·s⁻¹. L’émetteur et le récepteur sont au même endroit. Calcule la distance séparant la personne de l’obstacle.",
        correction: "Le son effectue un aller-retour : 2d = vΔt. Donc d = 340 × 0,80/2 = 136 m."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une onde périodique se propage à célérité constante sur une corde. Deux points A et B, séparés de 3,0 m dans le sens de propagation, reproduisent une même perturbation avec un retard de 0,50 s. La fréquence est 4,0 Hz. Calcule la célérité, la période et la longueur d’onde. Combien de longueurs d’onde séparent A et B ?",
        correction: "v = d/Δt = 3,0/0,50 = 6,0 m·s⁻¹. T = 1/f = 1/4,0 = 0,25 s. λ = v/f = 6,0/4,0 = 1,5 m. La distance AB représente 3,0/1,5 = 2,0 longueurs d’onde."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un signal lumineux et un signal sonore sont émis simultanément depuis un point situé à 1 020 m d’un observateur. On suppose les trajets rectilignes et les célérités constantes : vson = 340 m·s⁻¹ et vlumière = 3,0 × 10⁸ m·s⁻¹. Calcule les temps de parcours puis le retard du son par rapport à la lumière.",
        correction: "Pour le son : tson = 1 020/340 = 3,0 s. Pour la lumière : tlumière = 1 020/(3,0 × 10⁸) = 3,4 × 10⁻⁶ s. Le retard est tson − tlumière = 2,9999966 s, soit environ 3,0 s."
      }
    ]
  }
]);
