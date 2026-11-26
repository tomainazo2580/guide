enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-inertie-dynamique-rotation",
    titre: "Chapitre 8 : Moment d'inertie et dynamique de rotation",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch8-inertie",
        titre: "1. Moment d'inertie",
        blocs: [
          {
            type: "introduction",
            titre: "Modifier une rotation",
            texte: "Pour mettre une roue en rotation ou modifier sa vitesse angulaire, il faut tenir compte de sa masse et de la manière dont cette masse est répartie autour de l'axe."
          },
          {
            type: "definition",
            titre: "Moment d'inertie par rapport à un axe",
            texte: "Le moment d'inertie J d'un solide par rapport à un axe mesure son inertie de rotation autour de cet axe. Pour un ensemble de points matériels de masses mᵢ situés aux distances rᵢ de l'axe, J = Σmᵢrᵢ². Son unité SI est le kilogramme-mètre carré, noté kg·m²."
          },
          {
            type: "remarque",
            titre: "Répartition de la masse",
            texte: "Une masse éloignée de l'axe contribue davantage au moment d'inertie qu'une même masse proche de l'axe, car sa contribution est proportionnelle au carré de sa distance à l'axe."
          },
          {
            type: "exemple",
            titre: "Deux masses ponctuelles",
            texte: "Deux masses de 1 kg sont situées respectivement à 0,2 m et à 0,4 m d'un axe. Leur moment d'inertie total vaut J = 1 × 0,2² + 1 × 0,4² = 0,04 + 0,16 = 0,20 kg·m²."
          },
          {
            type: "schema",
            titre: "Influence de la distance à l'axe",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 180' role='img' aria-label='Deux masses ponctuelles sont fixées sur une barre : la masse m1 est à une distance r1 de l’axe O et la masse m2 à une distance r2 plus grande.'><rect width='460' height='180' fill='white'/><line x1='60' y1='95' x2='410' y2='95' stroke='#777' stroke-width='4'/><circle cx='80' cy='95' r='7' fill='#333'/><circle cx='180' cy='95' r='12' fill='#1769aa'/><circle cx='360' cy='95' r='12' fill='#c43b35'/><line x1='80' y1='135' x2='180' y2='135' stroke='#1769aa' stroke-width='2'/><line x1='80' y1='155' x2='360' y2='155' stroke='#c43b35' stroke-width='2'/><text x='68' y='75' font-size='14'>O</text><text x='170' y='70' font-size='14' fill='#1769aa'>m₁</text><text x='350' y='70' font-size='14' fill='#c43b35'>m₂</text><text x='122' y='130' font-size='14' fill='#1769aa'>r₁</text><text x='215' y='151' font-size='14' fill='#c43b35'>r₂</text></svg>",
            legende: "Pour des masses ponctuelles, la contribution de chacune vaut mᵢrᵢ². L'axe passe par O et est perpendiculaire au plan du dessin."
          },
          {
            type: "regle",
            titre: "Moments d'inertie usuels",
            texte: "Pour une masse ponctuelle m à la distance r d'un axe, J = mr². Pour un cerceau mince de masse m et de rayon R autour de son axe central perpendiculaire à son plan, J = mR². Pour un disque homogène plein autour du même type d'axe, J = 1/2 mR²."
          },
          {
            type: "remarque",
            titre: "Préciser l'axe",
            texte: "Le moment d'inertie dépend du solide et de l'axe choisi. Une formule valable pour un axe central ne s'applique pas automatiquement à un autre axe."
          }
        ]
      },
      {
        id: "sp1-ch8-dynamique",
        titre: "2. Relation fondamentale de la dynamique de rotation",
        blocs: [
          {
            type: "regle",
            titre: "Rotation autour d'un axe fixe",
            texte: "Dans un référentiel galiléen, pour un solide rigide tournant autour d'un axe fixe, la somme algébrique des moments des forces extérieures par rapport à cet axe vérifie ΣM = Jα. J est le moment d'inertie du solide et α son accélération angulaire algébrique."
          },
          {
            type: "remarque",
            titre: "Convention de signe",
            texte: "On choisit un sens positif de rotation. Les moments et l'accélération angulaire sont ensuite exprimés avec cette même convention."
          },
          {
            type: "exemple",
            titre: "Accélération d'une roue",
            texte: "Une roue a un moment d'inertie J = 2 kg·m². La somme des moments extérieurs vaut +6 N·m. Alors α = ΣM/J = 6/2 = +3 rad/s²."
          },
          {
            type: "regle",
            titre: "Si la somme des moments est nulle",
            texte: "Si ΣM = 0 et J > 0, alors α = 0 : la vitesse angulaire reste constante. Le solide peut rester au repos ou tourner uniformément. Une somme des moments nulle ne signifie donc pas nécessairement que le solide est immobile."
          },
          {
            type: "methode",
            titre: "Étudier une rotation",
            texte: "1. Isoler le solide et choisir le sens positif autour de l'axe. 2. Faire le bilan des forces extérieures. 3. Calculer leurs moments par rapport à l'axe. 4. Écrire ΣM = Jα. 5. Si α est constante, utiliser les relations de la rotation uniformément accélérée."
          }
        ]
      },
      {
        id: "sp1-ch8-applications",
        titre: "3. Forces, moments et mouvement",
        blocs: [
          {
            type: "exemple",
            titre: "Force tangentielle sur une roue",
            texte: "Une force tangentielle constante de 8 N agit sur le bord d'une roue de rayon 0,25 m. Son moment vaut 8 × 0,25 = 2 N·m dans le sens choisi positif. Si les autres moments se compensent et si J = 0,5 kg·m², alors α = 2/0,5 = 4 rad/s²."
          },
          {
            type: "exemple",
            titre: "Moment moteur et moment résistant",
            texte: "Un moteur exerce un moment de +10 N·m et les frottements un moment de −2 N·m. Pour une roue de moment d'inertie 4 kg·m², la somme vaut 8 N·m et α = 8/4 = 2 rad/s²."
          },
          {
            type: "regle",
            titre: "Lien avec la cinématique",
            texte: "Si la somme des moments est constante et si J est constant, alors α est constante. On peut utiliser ω(t) = ω₀ + αt et θ(t) = θ₀ + ω₀t + 1/2 αt²."
          },
          {
            type: "exemple",
            titre: "Démarrage d'une roue",
            texte: "Une roue part du repos avec J = 2 kg·m² et une somme constante de moments de 4 N·m. Son accélération angulaire vaut α = 2 rad/s². Après 3 s, ω = 0 + 2 × 3 = 6 rad/s."
          },
          {
            type: "remarque",
            titre: "Ralentissement",
            texte: "Si ω est positive et si α est négative, la rotation ralentit tant que ω reste positive. Après l'arrêt, il faut vérifier les forces et moments réellement présents avant de prolonger le modèle."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une masse ponctuelle de 2 kg se trouve à 0,5 m d'un axe. Calculer son moment d'inertie par rapport à cet axe.",
        correction: "J = mr² = 2 × 0,5² = 0,5 kg·m²."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une roue a pour moment d'inertie 3 kg·m². La somme des moments extérieurs vaut 12 N·m. Calculer son accélération angulaire.",
        correction: "Avec ΣM = Jα, on obtient α = 12/3 = 4 rad/s², dans le sens positif de la somme des moments."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux masses ponctuelles de 1 kg et 2 kg sont situées à 0,2 m et 0,3 m d'un axe. Calculer leur moment d'inertie total.",
        correction: "J = 1 × 0,2² + 2 × 0,3² = 0,04 + 0,18 = 0,22 kg·m²."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un disque homogène plein de masse 4 kg et de rayon 0,5 m tourne autour de son axe central. On donne J = 1/2 mR². Calculer J.",
        correction: "J = 1/2 × 4 × 0,5² = 0,5 kg·m²."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une roue de moment d'inertie 0,8 kg·m² subit un moment moteur de +5 N·m et un moment de frottement de −1 N·m. Calculer son accélération angulaire.",
        correction: "La somme des moments vaut 5 − 1 = 4 N·m. Donc α = 4/0,8 = 5 rad/s²."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une force tangentielle constante de 12 N agit sur le bord d'une roue de rayon 0,20 m. Le moment d'inertie de la roue vaut 0,6 kg·m² et les autres moments sont négligeables. La roue part du repos. Calculer son accélération angulaire puis sa vitesse angulaire après 5 s.",
        correction: "Le moment de la force vaut M = FR = 12 × 0,20 = 2,4 N·m. Ainsi α = M/J = 2,4/0,6 = 4 rad/s². Après 5 s, ω = 0 + 4 × 5 = 20 rad/s."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une roue de moment d'inertie 2 kg·m² tourne initialement à 10 rad/s. Un moment constant de −4 N·m agit jusqu'à l'arrêt ; les autres moments sont négligeables. Calculer l'accélération angulaire, le temps d'arrêt et le déplacement angulaire pendant le freinage.",
        correction: "α = ΣM/J = −4/2 = −2 rad/s². La vitesse angulaire est ω(t) = 10 − 2t ; elle s'annule pour t = 5 s. Le déplacement angulaire vaut Δθ = 10 × 5 + 1/2 × (−2) × 5² = 50 − 25 = 25 rad. Le modèle est utilisé seulement jusqu'à l'arrêt."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un cerceau mince et un disque homogène plein ont chacun une masse de 2 kg et un rayon de 0,4 m. Ils tournent chacun autour de leur axe central. On donne Jcerceau = mR² et Jdisque = 1/2 mR². Un même moment résultant de 0,8 N·m est appliqué à chacun. Calculer leurs moments d'inertie et leurs accélérations angulaires.",
        correction: "Pour le cerceau, J = 2 × 0,4² = 0,32 kg·m² et α = 0,8/0,32 = 2,5 rad/s². Pour le disque, J = 1/2 × 2 × 0,4² = 0,16 kg·m² et α = 0,8/0,16 = 5 rad/s². À masse et rayon égaux, le cerceau a ici un moment d'inertie plus grand."
      }
    ]
  }
]);
