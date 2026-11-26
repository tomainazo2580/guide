enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-travail-puissance-energie-rotation",
    titre: "Chapitre 9 : Travail, puissance et énergie en rotation",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch9-travail",
        titre: "1. Travail d'un moment",
        blocs: [
          {
            type: "introduction",
            titre: "Transférer de l'énergie en faisant tourner",
            texte: "Un moteur peut mettre une roue en rotation : son action transfère de l'énergie au système. Pour étudier ce transfert autour d'un axe fixe, on utilise le moment des forces et le déplacement angulaire."
          },
          {
            type: "regle",
            titre: "Moment constant",
            texte: "Pour un solide tournant autour d'un axe fixe, si le moment algébrique M d'une force par rapport à cet axe est constant pendant un déplacement angulaire Δθ, son travail est W = MΔθ. L'angle doit être exprimé en radians et les signes de M et de Δθ doivent utiliser la même convention."
          },
          {
            type: "remarque",
            titre: "Signe du travail",
            texte: "Si le moment et le déplacement angulaire sont de même signe, le travail est positif : il est moteur. S'ils sont de signes opposés, le travail est négatif : il est résistant."
          },
          {
            type: "exemple",
            titre: "Travail d'un moteur",
            texte: "Un moteur exerce un moment constant de +4 N·m pendant une rotation de +3 rad. Son travail vaut W = 4 × 3 = 12 J."
          },
          {
            type: "exemple",
            titre: "Travail résistant",
            texte: "Un frein exerce un moment constant de −2 N·m pendant une rotation de +5 rad. Son travail vaut W = −2 × 5 = −10 J."
          },
          {
            type: "schema",
            titre: "Moment et déplacement angulaire",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 260' role='img' aria-label='Une roue tourne autour de O. Un rayon passe de OA à OB dans le sens inverse des aiguilles d’une montre ; le déplacement angulaire est positif.'><rect width='400' height='260' fill='white'/><defs><marker id='sp1ch9fleche' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><circle cx='170' cy='150' r='85' fill='none' stroke='#777' stroke-width='2'/><line x1='170' y1='150' x2='255' y2='150' stroke='#1769aa' stroke-width='3'/><line x1='170' y1='150' x2='212.5' y2='76.39' stroke='#1769aa' stroke-width='3'/><path d='M220 150 A50 50 0 0 0 195 106.70' fill='none' stroke='#c43b35' stroke-width='2' marker-end='url(#sp1ch9fleche)'/><circle cx='170' cy='150' r='4' fill='#333'/><text x='153' y='170' font-size='14'>O</text><text x='260' y='155' font-size='14'>A</text><text x='217' y='73' font-size='14'>B</text><text x='217' y='120' font-size='14' fill='#c43b35'>Δθ</text></svg>",
            legende: "Le sens inverse des aiguilles d'une montre est choisi positif. Ici, Δθ est positif ; un moment positif effectue donc un travail positif."
          },
          {
            type: "remarque",
            titre: "Moment variable",
            texte: "Si le moment varie pendant la rotation, on ne peut pas toujours calculer le travail en multipliant une seule valeur de M par Δθ. Il faut tenir compte de la variation du moment au cours du déplacement."
          }
        ]
      },
      {
        id: "sp1-ch9-puissance",
        titre: "2. Puissance en rotation",
        blocs: [
          {
            type: "definition",
            titre: "Puissance moyenne",
            texte: "Pendant une durée Δt, la puissance moyenne d'une action est Pmoy = W/Δt. Elle s'exprime en watts, avec 1 W = 1 J/s."
          },
          {
            type: "regle",
            titre: "Puissance instantanée",
            texte: "Pour une action de moment algébrique M autour d'un axe fixe, la puissance instantanée est P = Mω, où ω est la vitesse angulaire algébrique en rad/s. Les signes de M et de ω doivent utiliser la même convention."
          },
          {
            type: "exemple",
            titre: "Puissance d'un moteur",
            texte: "Un moteur exerce un moment de 5 N·m dans le sens d'une rotation à 10 rad/s. Sa puissance instantanée est P = 5 × 10 = 50 W."
          },
          {
            type: "exemple",
            titre: "Puissance d'un frein",
            texte: "Une roue tourne à ω = +8 rad/s et un frein exerce un moment M = −3 N·m. La puissance du frein est P = −3 × 8 = −24 W : son action retire de l'énergie mécanique à la roue à cet instant."
          },
          {
            type: "remarque",
            titre: "Moyenne et instant",
            texte: "Si la vitesse angulaire varie, la puissance P = Mω peut varier même lorsque le moment M est constant. La puissance moyenne W/Δt ne doit pas être confondue avec une puissance instantanée."
          }
        ]
      },
      {
        id: "sp1-ch9-energie",
        titre: "3. Énergie cinétique de rotation",
        blocs: [
          {
            type: "definition",
            titre: "Énergie cinétique d'un solide en rotation",
            texte: "Pour un solide rigide tournant autour d'un axe fixe, son énergie cinétique de rotation est Ec = 1/2 Jω², où J est son moment d'inertie par rapport à cet axe et ω sa vitesse angulaire."
          },
          {
            type: "remarque",
            titre: "Rôle de l'axe et de la vitesse",
            texte: "Le moment d'inertie J doit être calculé par rapport à l'axe de rotation étudié. Comme ω est au carré, Ec est positive ou nulle, quel que soit le sens de rotation."
          },
          {
            type: "regle",
            titre: "Théorème de l'énergie cinétique",
            texte: "Dans un référentiel galiléen, pour un solide rigide en rotation autour d'un axe fixe, la variation de son énergie cinétique est égale à la somme des travaux des forces extérieures : Ec(B) − Ec(A) = ΣW."
          },
          {
            type: "exemple",
            titre: "Énergie d'une roue",
            texte: "Une roue de moment d'inertie J = 2 kg·m² tourne à 4 rad/s. Son énergie cinétique vaut Ec = 1/2 × 2 × 4² = 16 J. À 8 rad/s, elle vaudrait 64 J : doubler la vitesse angulaire multiplie l'énergie par 4."
          },
          {
            type: "exemple",
            titre: "Travail et variation de vitesse",
            texte: "Une roue de moment d'inertie 1 kg·m² passe de 2 rad/s à 6 rad/s. La variation de son énergie cinétique vaut 1/2 × 1 × (6² − 2²) = 16 J. La somme des travaux des forces extérieures est donc 16 J."
          }
        ]
      },
      {
        id: "sp1-ch9-bilans",
        titre: "4. Faire un bilan énergétique",
        blocs: [
          {
            type: "methode",
            titre: "Méthode",
            texte: "1. Isoler le solide et préciser l'axe de rotation. 2. Choisir le sens positif et repérer le déplacement angulaire. 3. Calculer les travaux des actions extérieures. 4. Écrire la variation d'énergie cinétique. 5. Vérifier les signes, les unités et le domaine de validité du modèle."
          },
          {
            type: "exemple",
            titre: "Roue freinée",
            texte: "Une roue de moment d'inertie 2 kg·m² tourne à 5 rad/s. Un frein exerce un moment constant de −5 N·m pendant un déplacement angulaire de +4 rad ; les autres travaux sont nuls. L'énergie initiale est 25 J et le travail du frein est −20 J. L'énergie finale est donc 5 J : 1/2 × 2 × ω² = 5, d'où |ω| = √5 rad/s."
          },
          {
            type: "remarque",
            titre: "Moment et énergie ne sont pas la même grandeur",
            texte: "Le moment s'exprime en N·m ; le travail et l'énergie s'expriment en J. Le déplacement angulaire en radians permet de relier un moment constant à un travail, mais moment et énergie restent deux grandeurs différentes."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un moteur exerce un moment constant de 3 N·m dans le sens d'une rotation de 4 rad. Calculer son travail.",
        correction: "Le moment et le déplacement angulaire ont le même signe. Le travail vaut W = MΔθ = 3 × 4 = 12 J."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une roue de moment d'inertie 2 kg·m² tourne à 3 rad/s. Calculer son énergie cinétique de rotation.",
        correction: "Ec = 1/2 Jω² = 1/2 × 2 × 3² = 9 J."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un moteur exerce un moment de 6 N·m sur une roue qui tourne à 5 rad/s dans le même sens. Calculer la puissance instantanée du moteur.",
        correction: "P = Mω = 6 × 5 = 30 W."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une roue tourne dans le sens positif de 8 rad. Un frein exerce pendant cette rotation un moment constant de −2 N·m. Calculer le travail du frein et préciser son signe.",
        correction: "W = MΔθ = −2 × 8 = −16 J. Le travail est négatif : il est résistant."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une roue de moment d'inertie 0,5 kg·m² passe de 4 rad/s à 8 rad/s. Calculer la variation de son énergie cinétique et la somme des travaux des forces extérieures.",
        correction: "ΔEc = 1/2 J(ωB² − ωA²) = 1/2 × 0,5 × (64 − 16) = 12 J. D'après le théorème de l'énergie cinétique, la somme des travaux vaut 12 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un moteur exerce un moment constant de 10 N·m dans le sens d'une rotation de 20 rad réalisée en 5 s. Calculer son travail et sa puissance moyenne.",
        correction: "W = MΔθ = 10 × 20 = 200 J. La puissance moyenne est Pmoy = W/Δt = 200/5 = 40 W."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une roue de moment d'inertie 2 kg·m² part du repos. Un moteur exerce un moment constant de +6 N·m et les frottements un moment constant de −2 N·m pendant une rotation de +8 rad. Calculer le travail de chaque action, puis la vitesse angulaire finale.",
        correction: "Le travail du moteur est 6 × 8 = 48 J ; celui des frottements est −2 × 8 = −16 J. Leur somme est 32 J. La roue part du repos, donc 1/2 × 2 × ω² = 32. Ainsi ω = √32 = 4√2 rad/s, soit environ 5,66 rad/s dans le sens positif."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une roue de moment d'inertie 4 kg·m² tourne à 6 rad/s. Un frein exerce un moment constant opposé au mouvement, de valeur absolue 3 N·m, jusqu'à l'arrêt. Les autres travaux sont négligeables. Déterminer l'énergie initiale et l'angle parcouru jusqu'à l'arrêt.",
        correction: "L'énergie initiale vaut Ec = 1/2 × 4 × 6² = 72 J. À l'arrêt, l'énergie cinétique est nulle : la variation vaut −72 J. Le travail du frein est −3Δθ. Ainsi −3Δθ = −72, donc Δθ = 24 rad dans le sens initial de rotation."
      }
    ]
  }
]);
