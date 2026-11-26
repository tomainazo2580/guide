enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-mouvement-rotation",
    titre: "Chapitre 6 : Mouvement de rotation et vitesse angulaire",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch6-rotation",
        titre: "1. Décrire une rotation",
        blocs: [
          {
            type: "introduction",
            titre: "Un mouvement autour d'un axe",
            texte: "Une roue, une porte ou un ventilateur peuvent tourner autour d'un axe. Pour décrire leur mouvement, on étudie la position angulaire d'un solide et le mouvement de ses points."
          },
          {
            type: "definition",
            titre: "Solide en rotation autour d'un axe fixe",
            texte: "Un solide est en rotation autour d'un axe fixe lorsque les points de cet axe restent fixes et que les autres points du solide décrivent des cercles centrés sur l'axe, dans des plans perpendiculaires à celui-ci."
          },
          {
            type: "definition",
            titre: "Position angulaire",
            texte: "Dans un plan perpendiculaire à l'axe, la position d'un point est repérée par un angle θ par rapport à une direction de référence. On choisit un sens positif de rotation. L'angle peut être exprimé en radians."
          },
          {
            type: "regle",
            titre: "Rappel sur les radians",
            texte: "Un tour complet correspond à 2π radians, un demi-tour à π radians et un quart de tour à π/2 radians. Pour un arc de cercle de rayon r et d'angle θ en radians, sa longueur est s = rθ si θ est positif."
          },
          {
            type: "schema",
            titre: "Position d'un point sur une roue",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 270' role='img' aria-label='Vue de face d’une roue de centre O : un point M sur le cercle est repéré par le rayon OM et un angle thêta mesuré depuis l’horizontale.'><rect width='400' height='270' fill='white'/><circle cx='170' cy='145' r='90' fill='none' stroke='#555' stroke-width='2'/><line x1='170' y1='145' x2='285' y2='145' stroke='#777' stroke-dasharray='5 4'/><line x1='170' y1='145' x2='215' y2='67.06' stroke='#1769aa' stroke-width='3'/><path d='M205 145 A35 35 0 0 0 187.5 114.69' fill='none' stroke='#c43b35' stroke-width='2'/><circle cx='170' cy='145' r='4' fill='#333'/><circle cx='215' cy='67.06' r='5' fill='#1769aa'/><text x='152' y='165' font-size='14'>O</text><text x='220' y='64' font-size='14'>M</text><text x='185' y='105' font-size='14'>r</text><text x='206' y='132' font-size='14' fill='#c43b35'>θ</text><text x='255' y='165' font-size='13'>référence</text></svg>",
            legende: "Le point M décrit un cercle de rayon r autour de O. L'angle θ repère sa position par rapport à la direction de référence."
          }
        ]
      },
      {
        id: "sp1-ch6-vitesse-angulaire",
        titre: "2. Vitesse angulaire et vitesse d'un point",
        blocs: [
          {
            type: "definition",
            titre: "Vitesse angulaire",
            texte: "Entre deux instants, la vitesse angulaire moyenne est ωmoy = Δθ/Δt. Si θ est dérivable, la vitesse angulaire instantanée est ω(t) = dθ/dt. Elle s'exprime en radians par seconde, notés rad/s."
          },
          {
            type: "remarque",
            titre: "Signe",
            texte: "Le signe de ω indique le sens de rotation par rapport au sens positif choisi. Pour calculer la rapidité angulaire, on utilise sa valeur absolue |ω|."
          },
          {
            type: "regle",
            titre: "Lien avec la vitesse linéaire",
            texte: "Pour un point situé à la distance r de l'axe, la norme de sa vitesse est v = r|ω|. Le vecteur vitesse est tangent à sa trajectoire circulaire et perpendiculaire au rayon reliant le point à l'axe."
          },
          {
            type: "exemple",
            titre: "Deux points d'une même roue",
            texte: "Une roue tourne à la vitesse angulaire ω = 4 rad/s. Un point situé à 0,2 m de l'axe a une vitesse de norme 0,2 × 4 = 0,8 m/s. Un point situé à 0,5 m de l'axe a une vitesse de norme 0,5 × 4 = 2 m/s. Les points ont la même vitesse angulaire, mais pas la même vitesse linéaire."
          },
          {
            type: "schema",
            titre: "Vitesse tangentielle",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 260' role='img' aria-label='Un point M à droite d’un cercle tourne dans le sens inverse des aiguilles d’une montre. Sa vitesse est verticale vers le haut et perpendiculaire au rayon OM.'><rect width='400' height='260' fill='white'/><defs><marker id='sp1ch6vitesse' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><circle cx='160' cy='145' r='80' fill='none' stroke='#555' stroke-width='2'/><line x1='160' y1='145' x2='240' y2='145' stroke='#1769aa' stroke-width='3'/><line x1='240' y1='145' x2='240' y2='55' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch6vitesse)'/><path d='M230 145 L230 135 L240 135' fill='none' stroke='#333'/><circle cx='160' cy='145' r='4' fill='#333'/><circle cx='240' cy='145' r='5' fill='#1769aa'/><text x='143' y='165' font-size='14'>O</text><text x='246' y='163' font-size='14'>M</text><text x='195' y='137' font-size='14'>r</text><text x='248' y='65' font-size='14' fill='#c43b35'>v⃗</text></svg>",
            legende: "Pour une rotation dans le sens indiqué, la vitesse de M est tangente au cercle et sa norme vaut r|ω|."
          }
        ]
      },
      {
        id: "sp1-ch6-periode-frequence",
        titre: "3. Rotation uniforme, période et fréquence",
        blocs: [
          {
            type: "definition",
            titre: "Rotation uniforme",
            texte: "Une rotation est uniforme lorsque sa vitesse angulaire est constante. Si θ₀ est la position angulaire à t = 0, alors θ(t) = θ₀ + ωt."
          },
          {
            type: "definition",
            titre: "Période et fréquence",
            texte: "Pour une rotation uniforme non nulle, la période T est la durée d'un tour. La fréquence f est le nombre de tours par seconde : f = 1/T. Elle s'exprime en hertz, notés Hz."
          },
          {
            type: "regle",
            titre: "Relations utiles",
            texte: "Pour une rotation uniforme non nulle : |ω| = 2π/T = 2πf. Si la fréquence est donnée en tours par minute, la diviser par 60 pour obtenir des tours par seconde."
          },
          {
            type: "exemple",
            titre: "De tours par minute à radians par seconde",
            texte: "Une roue effectue 120 tours par minute. Sa fréquence est f = 120/60 = 2 Hz. Sa rapidité angulaire vaut |ω| = 2π × 2 = 4π rad/s."
          },
          {
            type: "exemple",
            titre: "Position angulaire",
            texte: "Une roue tourne uniformément avec θ₀ = π/4 rad et ω = 2 rad/s. Après 3 s, θ = π/4 + 2 × 3 = π/4 + 6 rad. Si l'on souhaite la position sur un tour, on peut réduire cet angle modulo 2π."
          }
        ]
      },
      {
        id: "sp1-ch6-acceleration-angulaire",
        titre: "4. Accélération angulaire",
        blocs: [
          {
            type: "definition",
            titre: "Variation de la vitesse angulaire",
            texte: "L'accélération angulaire moyenne est αmoy = Δω/Δt. Si ω est dérivable, l'accélération angulaire instantanée est α = dω/dt. Elle s'exprime en rad/s²."
          },
          {
            type: "regle",
            titre: "Accélération angulaire constante",
            texte: "Si α est constante, avec ω₀ et θ₀ à t = 0, alors ω(t) = ω₀ + αt et θ(t) = θ₀ + ω₀t + 1/2 αt²."
          },
          {
            type: "exemple",
            titre: "Démarrage d'une roue",
            texte: "Une roue part du repos avec une accélération angulaire constante de 2 rad/s². Après 3 s, ω = 0 + 2 × 3 = 6 rad/s. Son déplacement angulaire est Δθ = 1/2 × 2 × 3² = 9 rad."
          },
          {
            type: "remarque",
            titre: "Accélération d'un point de la roue",
            texte: "Même en rotation uniforme, un point hors de l'axe change de direction : son accélération n'est pas nulle. Sa composante centripète est dirigée vers l'axe et a pour norme rω². Si la vitesse angulaire varie, une composante tangentielle de norme r|α| s'y ajoute."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Combien de radians correspondent à un demi-tour et à deux tours complets ?",
        correction: "Un demi-tour correspond à π radians. Deux tours complets correspondent à 2 × 2π = 4π radians."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une roue effectue 180 tours par minute. Calculer sa fréquence en hertz.",
        correction: "Une minute contient 60 secondes. La fréquence est f = 180/60 = 3 tours par seconde, soit 3 Hz."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une roue tourne uniformément à la fréquence de 2 Hz. Calculer sa période et sa rapidité angulaire.",
        correction: "T = 1/f = 1/2 = 0,5 s. La rapidité angulaire vaut |ω| = 2πf = 4π rad/s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un point est situé à 0,30 m de l'axe d'une roue qui tourne à 10 rad/s. Calculer la norme de sa vitesse.",
        correction: "v = r|ω| = 0,30 × 10 = 3 m/s. Le vecteur vitesse est tangent à la trajectoire circulaire."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une roue tourne uniformément avec une vitesse angulaire de 5 rad/s. À t = 0, sa position angulaire est θ₀ = 1 rad. Calculer sa position angulaire et le nombre de tours effectués après 4 s.",
        correction: "θ(4) = θ₀ + ωt = 1 + 5 × 4 = 21 rad. Le déplacement angulaire est Δθ = 20 rad. Le nombre de tours effectués est Δθ/(2π) = 10/π, soit environ 3,18 tours."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une roue part du repos avec une accélération angulaire constante de 3 rad/s². Calculer sa vitesse angulaire et son déplacement angulaire après 4 s.",
        correction: "ω = ω₀ + αt = 0 + 3 × 4 = 12 rad/s. Le déplacement angulaire vaut Δθ = ω₀t + 1/2 αt² = 1/2 × 3 × 4² = 24 rad."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une roue de rayon 0,25 m tourne uniformément à 120 tours par minute. Calculer sa période, sa rapidité angulaire, la norme de la vitesse d'un point sur son bord et la norme de l'accélération centripète de ce point.",
        correction: "La fréquence vaut f = 120/60 = 2 Hz, donc T = 1/2 = 0,5 s. La rapidité angulaire est |ω| = 2πf = 4π rad/s. Au bord, v = r|ω| = 0,25 × 4π = π m/s, environ 3,14 m/s. L'accélération centripète vaut rω² = 0,25 × (4π)² = 4π² m/s², environ 39,5 m/s²."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une roue tourne initialement à 20 rad/s dans le sens positif. Elle ralentit avec une accélération angulaire constante α = −4 rad/s² jusqu'à son arrêt. Calculer le temps nécessaire à l'arrêt et le nombre de tours effectués pendant ce ralentissement.",
        correction: "ω(t) = 20 − 4t. L'arrêt a lieu lorsque ω = 0, soit t = 5 s. Le déplacement angulaire est Δθ = 20 × 5 + 1/2 × (−4) × 5² = 100 − 50 = 50 rad. Le nombre de tours est 50/(2π) = 25/π, soit environ 7,96 tours."
      }
    ]
  }
]);
