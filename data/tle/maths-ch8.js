enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch8",
    titre: "Chapitre 8 : Techniques d’intégration et volumes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch8-l1",
        titre: "Leçon 1 : Reconnaître une forme composée",
        blocs: [
          {
            type: "introduction",
            titre: "Choisir une méthode",
            texte: "Pour calculer une intégrale, on cherche d’abord si l’intégrande possède une primitive connue. Une expression composée peut souvent être traitée en reconnaissant la dérivée de la fonction intérieure."
          },
          {
            type: "methode",
            titre: "Reconnaître u' × g(u)",
            texte: "Si G est une primitive de g et si u est dérivable, alors une primitive de u'(x)g(u(x)) est G(u(x)).\n\nOn peut vérifier la réponse en dérivant G(u(x))."
          },
          {
            type: "exemple",
            titre: "Une puissance",
            texte: "Calculons ∫₀¹ 2x(x² + 1)² dx.\n\nOn pose u(x) = x² + 1, donc u'(x) = 2x. Une primitive de 2x(x² + 1)² est (x² + 1)³/3.\n\nL’intégrale vaut [(x² + 1)³/3]₀¹ = 8/3 − 1/3 = 7/3."
          },
          {
            type: "exemple",
            titre: "Une expression trigonométrique",
            texte: "Calculons ∫₀ᵖⁱ 2 sin(2x) dx.\n\nUne primitive de 2 sin(2x) est −cos(2x). Donc :\n∫₀ᵖⁱ 2 sin(2x) dx = [−cos(2x)]₀ᵖⁱ = −1 − (−1) = 0.\n\nLes angles sont exprimés en radians."
          },
          {
            type: "remarque",
            titre: "Vérifier le coefficient",
            texte: "Dans une composée, ne pas oublier la dérivée de l’expression intérieure. Par exemple, une primitive de cos(3x) est sin(3x)/3, et non sin(3x)."
          }
        ]
      },

      {
        id: "tle-maths-ch8-l2",
        titre: "Leçon 2 : Changement de variable affine",
        blocs: [
          {
            type: "definition",
            titre: "Substitution affine",
            texte: "Pour une intégrale contenant ax + b, avec a ≠ 0, on peut poser t = ax + b. Alors dt = a dx, soit dx = dt/a.\n\nLes bornes doivent aussi être transformées : lorsque x = α, t = aα + b ; lorsque x = β, t = aβ + b."
          },
          {
            type: "methode",
            titre: "Procédure",
            texte: "1. Poser t = ax + b et écrire dx = dt/a.\n2. Transformer les deux bornes.\n3. Réécrire toute l’intégrale en fonction de t.\n4. Calculer avec les nouvelles bornes.\n\nSi a est négatif, les nouvelles bornes peuvent être décroissantes : on conserve leur ordre et le signe de 1/a."
          },
          {
            type: "exemple",
            titre: "Substitution avec coefficient positif",
            texte: "Calculons I = ∫₀¹ (2x + 1)² dx.\n\nPosons t = 2x + 1. Alors dx = dt/2. Pour x = 0, t = 1 ; pour x = 1, t = 3.\n\nI = (1/2)∫₁³ t² dt = (1/2)[t³/3]₁³\n= (1/2)(27/3 − 1/3) = 13/3."
          },
          {
            type: "exemple",
            titre: "Substitution avec coefficient négatif",
            texte: "Calculons I = ∫₀¹ (3 − x)² dx.\n\nPosons t = 3 − x. Alors dx = −dt. Pour x = 0, t = 3 ; pour x = 1, t = 2.\n\nI = −∫₃² t² dt = ∫₂³ t² dt\n= [t³/3]₂³ = (27 − 8)/3 = 19/3."
          },
          {
            type: "remarque",
            titre: "Ne pas mélanger les variables",
            texte: "Si l’intégrale est entièrement écrite en t, on utilise les bornes en t. Si l’on revient à une primitive en x, on utilise les bornes initiales en x."
          }
        ]
      },

      {
        id: "tle-maths-ch8-l3",
        titre: "Leçon 3 : Intégration par parties",
        blocs: [
          {
            type: "definition",
            titre: "Formule d’intégration par parties",
            texte: "Si u et v sont de classe C¹ sur [a ; b], c’est-à-dire dérivables avec des dérivées continues, alors :\n\n∫ₐᵇ u(x)v'(x) dx = [u(x)v(x)]ₐᵇ − ∫ₐᵇ u'(x)v(x) dx.\n\nCette formule vient de la dérivation d’un produit : (uv)' = u'v + uv'."
          },
          {
            type: "methode",
            titre: "Comment choisir u et v' ?",
            texte: "1. Séparer l’intégrande sous la forme u × v'.\n2. Choisir u de façon que u' soit plus simple.\n3. Choisir v' de façon à savoir calculer une primitive v.\n4. Appliquer la formule, en calculant soigneusement le terme aux bornes.\n5. Calculer la nouvelle intégrale."
          },
          {
            type: "exemple",
            titre: "Produit d’un polynôme et d’un cosinus",
            texte: "Calculons I = ∫₀ᵖⁱ x cos(x) dx.\n\nOn choisit u(x) = x et v'(x) = cos(x). Alors u'(x) = 1 et v(x) = sin(x).\n\nI = [x sin(x)]₀ᵖⁱ − ∫₀ᵖⁱ sin(x) dx.\nLe premier terme vaut 0. De plus, ∫₀ᵖⁱ sin(x) dx = [−cos(x)]₀ᵖⁱ = 2.\n\nDonc I = −2."
          },
          {
            type: "remarque",
            titre: "Une intégrale peut être négative",
            texte: "Dans l’exemple précédent, x cos(x) change de signe sur [0 ; π]. Le résultat −2 est une aire algébrique, pas une aire géométrique."
          },
          {
            type: "exemple",
            titre: "Trouver une primitive par parties",
            texte: "Cherchons une primitive de x sin(x).\n\nAvec u = x et v' = sin(x), on a u' = 1 et v = −cos(x). Une intégration par parties donne :\n\n∫ x sin(x) dx = −x cos(x) + ∫ cos(x) dx.\n\nLes primitives sont donc −x cos(x) + sin(x) + C. Vérification : la dérivée de −x cos(x) + sin(x) est x sin(x)."
          }
        ]
      },

      {
        id: "tle-maths-ch8-l4",
        titre: "Leçon 4 : Volumes par intégration",
        blocs: [
          {
            type: "definition",
            titre: "Volume par sections",
            texte: "Considérons un solide compris entre les plans d’abscisses a et b. Si l’aire de sa section perpendiculaire à l’axe des abscisses est A(x), et si A est continue sur [a ; b], alors son volume est :\n\nV = ∫ₐᵇ A(x) dx."
          },
          {
            type: "definition",
            titre: "Rotation autour de l’axe des abscisses",
            texte: "Si une région comprise entre l’axe des abscisses et la courbe d’une fonction continue f est tournée autour de cet axe, la section à l’abscisse x est un disque de rayon |f(x)|.\n\nSon aire est π[f(x)]². Le volume obtenu entre a et b est donc :\n\nV = π∫ₐᵇ [f(x)]² dx."
          },
          {
            type: "schema",
            titre: "Une section circulaire",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 190'><rect width='320' height='190' fill='white'/><line x1='20' y1='100' x2='195' y2='100' stroke='#333' stroke-width='2'/><path d='M35 70 C90 65 135 53 190 38 M35 130 C90 135 135 147 190 162' fill='none' stroke='#1769aa' stroke-width='2'/><ellipse cx='190' cy='100' rx='24' ry='62' fill='#bbdefb' stroke='#1769aa' stroke-width='2'/><line x1='190' y1='100' x2='190' y2='38' stroke='#c62828' stroke-width='2'/><text x='200' y='72' font-size='13' fill='#c62828'>rayon |f(x)|</text><text x='218' y='112' font-size='13'>section</text><text x='24' y='93' font-size='13'>axe</text></svg>",
            legende: "Schéma qualitatif : une section perpendiculaire à l’axe est un disque. Son aire vaut π[f(x)]²."
          },
          {
            type: "exemple",
            titre: "Volume d’un cône",
            texte: "La région comprise entre y = x et l’axe des abscisses sur [0 ; 2] tourne autour de cet axe.\n\nV = π∫₀² x² dx = π[x³/3]₀² = 8π/3 unités de volume.\n\nOn retrouve la formule du cône : rayon 2, hauteur 2, donc V = π × 2² × 2/3 = 8π/3."
          },
          {
            type: "remarque",
            titre: "Attention aux unités",
            texte: "Si l’unité de longueur est le centimètre, le volume est en cm³. Il faut exprimer toutes les longueurs dans la même unité avant le calcul."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer ∫₀¹ 2(2x + 1) dx.",
        correction: "Une primitive est (2x + 1)²/2. L’intégrale vaut donc [(2x + 1)²/2]₀¹ = 9/2 − 1/2 = 4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner une primitive de cos(4x) sur ℝ.",
        correction: "Une primitive est sin(4x)/4, car sa dérivée est 4 cos(4x)/4 = cos(4x)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer ∫₀¹ 3(3x + 2)² dx.",
        correction: "Une primitive est (3x + 2)³/3. Donc l’intégrale vaut (5³ − 2³)/3 = 117/3 = 39."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Avec le changement de variable t = 2x + 1, calculer ∫₀¹ (2x + 1) dx.",
        correction: "On a dx = dt/2. Les bornes x = 0 et x = 1 deviennent t = 1 et t = 3.\nL’intégrale vaut (1/2)∫₁³ t dt = (1/2)[t²/2]₁³ = (1/2) × 4 = 2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer ∫₀¹ (2 − x) dx à l’aide de t = 2 − x.",
        correction: "On a dx = −dt. Les bornes deviennent 2 puis 1.\nL’intégrale vaut −∫₂¹ t dt = ∫₁² t dt = [t²/2]₁² = 2 − 1/2 = 3/2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer ∫₀¹ 2x(x² + 2) dx.",
        correction: "La dérivée de x² + 2 est 2x. Une primitive est (x² + 2)²/2.\nL’intégrale vaut 3²/2 − 2²/2 = 5/2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer le volume obtenu en faisant tourner autour de l’axe des abscisses la région comprise entre y = 2 et l’axe sur [0 ; 3].",
        correction: "Le solide est un cylindre de rayon 2 et de hauteur 3.\nV = π∫₀³ 2² dx = 4π × 3 = 12π unités de volume."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Par intégration par parties, calculer ∫₀ᵖⁱ x sin(x) dx.",
        correction: "On choisit u = x et v' = sin(x), donc u' = 1 et v = −cos(x).\n\nL’intégrale vaut [−x cos(x)]₀ᵖⁱ + ∫₀ᵖⁱ cos(x) dx.\nLe premier terme vaut π et le second vaut [sin(x)]₀ᵖⁱ = 0. Le résultat est π."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer ∫₀¹ x(x + 1)² dx en posant t = x + 1.",
        correction: "Avec t = x + 1, on a x = t − 1 et dx = dt. Les bornes deviennent 1 et 2.\n\nL’intégrale est ∫₁² (t − 1)t² dt = ∫₁² (t³ − t²) dt.\nElle vaut [t⁴/4 − t³/3]₁² = (4 − 8/3) − (1/4 − 1/3) = 17/12."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer ∫₀¹ (1 − 2x)³ dx par un changement de variable affine.",
        correction: "Posons t = 1 − 2x, donc dx = −dt/2. Pour x = 0, t = 1 ; pour x = 1, t = −1.\n\nL’intégrale vaut −(1/2)∫₁⁻¹ t³ dt = (1/2)∫₋₁¹ t³ dt.\nComme une primitive est t⁴/4, le résultat est (1/2)(1/4 − 1/4) = 0."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une région est comprise entre y = x² et l’axe des abscisses sur [0 ; 2]. Elle tourne autour de cet axe. Calculer le volume obtenu.",
        correction: "À l’abscisse x, le rayon du disque est x². Son aire est donc πx⁴.\n\nV = π∫₀² x⁴ dx = π[x⁵/5]₀² = 32π/5 unités de volume."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un solide a, à l’abscisse x comprise entre 0 et 3 cm, une section d’aire A(x) = 2x + 1 cm². Calculer son volume.",
        correction: "Le volume est V = ∫₀³ (2x + 1) dx = [x² + x]₀³ = 9 + 3 = 12 cm³."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer ∫₀¹ x(2x + 1) dx par intégration par parties.",
        correction: "Prenons u = x et v' = 2x + 1. Alors u' = 1 et on peut choisir v = x² + x.\n\nL’intégrale vaut [x(x² + x)]₀¹ − ∫₀¹ (x² + x) dx\n= 2 − [x³/3 + x²/2]₀¹\n= 2 − 1/3 − 1/2 = 7/6."
      }
    ]
  }
]);
