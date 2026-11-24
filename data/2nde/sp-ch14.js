enregistrerChapitres("2nde", "sp", [
  {
    id: 14,
    titre: "Chapitre 14 : La quantité de mouvement",
    premium: false,
    guide: false,

    lecons: [
      {
        id: 1,
        titre: "Définir la quantité de mouvement",
        blocs: [
          {
            type: "introduction",
            titre: "Masse et mouvement",
            texte: "Une balle et une charrette roulant à la même vitesse n’ont pas le même effet lors d’un choc. Pour étudier ce type de situation, on utilise une grandeur qui tient compte à la fois de la masse et de la vitesse : la quantité de mouvement."
          },
          {
            type: "definition",
            titre: "Quantité de mouvement",
            texte: "Pour un objet de masse m représenté par un point et animé d’une vitesse vectorielle v, la quantité de mouvement est le vecteur p défini par :\n\np = m × v.\n\nLa quantité de mouvement a la même direction et le même sens que la vitesse."
          },
          {
            type: "regle",
            titre: "Unités",
            texte: "Si la masse m est en kilogrammes et la vitesse en mètres par seconde, la quantité de mouvement s’exprime en kg·m·s⁻¹, également noté kg·m/s."
          },
          {
            type: "exemple",
            titre: "Une balle en mouvement",
            texte: "Une balle de masse 0,20 kg se déplace vers la droite à 5,0 m/s. Sa quantité de mouvement a pour valeur :\n\np = 0,20 × 5,0 = 1,0 kg·m/s.\n\nElle est dirigée vers la droite."
          },
          {
            type: "remarque",
            titre: "Une grandeur vectorielle",
            texte: "Deux objets de même masse et de même vitesse en valeur, mais se déplaçant en sens opposés, ont des quantités de mouvement de même valeur mais de sens opposés."
          },
          {
            type: "rappel",
            titre: "Dépendance au référentiel",
            texte: "La vitesse dépend du référentiel choisi. La quantité de mouvement dépend donc elle aussi du référentiel."
          }
        ]
      },

      {
        id: 2,
        titre: "Calculer sur un axe orienté",
        blocs: [
          {
            type: "definition",
            titre: "Composante algébrique",
            texte: "Pour un mouvement sur une droite, on choisit un axe orienté. La composante de la vitesse est positive dans le sens de l’axe et négative dans le sens opposé. On écrit alors :\n\npₓ = m × vₓ."
          },
          {
            type: "exemple",
            titre: "Mouvement vers la gauche",
            texte: "L’axe est orienté vers la droite. Une balle de 0,30 kg se déplace vers la gauche à 4,0 m/s. Sa vitesse algébrique vaut −4,0 m/s.\n\npₓ = 0,30 × (−4,0) = −1,2 kg·m/s."
          },
          {
            type: "methode",
            titre: "Calculer une quantité de mouvement",
            texte: "1. Préciser le référentiel et choisir un axe orienté.\n2. Convertir la masse en kg et la vitesse en m/s.\n3. Donner un signe à la vitesse selon le sens du mouvement.\n4. Calculer pₓ = m × vₓ.\n5. Donner l’unité et interpréter le signe."
          },
          {
            type: "rappel",
            titre: "Conversions",
            texte: "1 kg = 1 000 g. Pour convertir des g en kg, on divise par 1 000.\n\nPour convertir une vitesse de km/h en m/s, on divise par 3,6."
          },
          {
            type: "exemple",
            titre: "Avec conversions",
            texte: "Un objet de 500 g se déplace à 36 km/h dans le sens positif de l’axe.\n\nm = 0,500 kg et vₓ = 36 / 3,6 = 10 m/s.\n\npₓ = 0,500 × 10 = +5,0 kg·m/s."
          }
        ]
      },

      {
        id: 3,
        titre: "Quantité de mouvement d’un système",
        blocs: [
          {
            type: "definition",
            titre: "Système de plusieurs objets",
            texte: "La quantité de mouvement totale d’un système est la somme vectorielle des quantités de mouvement des objets qui le constituent."
          },
          {
            type: "regle",
            titre: "Sur une droite",
            texte: "Pour deux objets se déplaçant sur un axe :\n\np_total,x = m₁v₁ₓ + m₂v₂ₓ.\n\nLes vitesses sont algébriques : il faut tenir compte de leur signe."
          },
          {
            type: "exemple",
            titre: "Deux objets en sens opposés",
            texte: "L’axe est orienté vers la droite. Un chariot A de 2,0 kg roule vers la droite à 3,0 m/s. Un chariot B de 1,0 kg roule vers la gauche à 2,0 m/s.\n\np_total,x = 2,0 × 3,0 + 1,0 × (−2,0) = +4,0 kg·m/s."
          },
          {
            type: "remarque",
            titre: "Somme nulle",
            texte: "Une quantité de mouvement totale nulle ne signifie pas nécessairement que chaque objet est immobile. Les quantités de mouvement de plusieurs objets peuvent se compenser."
          },
          {
            type: "schema",
            titre: "Exemple de compensation",
            texte: "A : 1 kg à 2 m/s vers la droite → pₓ = +2 kg·m/s\nB : 1 kg à 2 m/s vers la gauche → pₓ = −2 kg·m/s\n\nPour le système A + B : p_total,x = 0."
          }
        ]
      },

      {
        id: 4,
        titre: "Conservation de la quantité de mouvement",
        blocs: [
          {
            type: "regle",
            titre: "Principe de conservation",
            texte: "Dans un référentiel galiléen, si la résultante des forces extérieures exercées sur un système est nulle, sa quantité de mouvement totale reste constante. Pendant un choc très bref, on peut aussi utiliser une conservation approchée si l’effet des forces extérieures est négligeable durant le choc."
          },
          {
            type: "rappel",
            titre: "Référentiel utilisé",
            texte: "Dans les exercices de ce chapitre, le référentiel terrestre est supposé galiléen pour la durée et la situation étudiées."
          },
          {
            type: "regle",
            titre: "Avant et après une interaction",
            texte: "Lorsque les conditions de conservation sont vérifiées :\n\np_total avant = p_total après.\n\nIl s’agit d’une égalité vectorielle. Sur un axe, on utilise les composantes algébriques."
          },
          {
            type: "exemple",
            titre: "Choc avec accrochage",
            texte: "Un chariot A de 2,0 kg se déplace à 3,0 m/s vers la droite. Il heurte un chariot B de 1,0 kg immobile. Après le choc, ils restent accrochés. La quantité de mouvement du système des deux chariots est supposée conservée.\n\nAvant : pₓ = 2,0 × 3,0 + 1,0 × 0 = 6,0 kg·m/s.\nAprès : pₓ = (2,0 + 1,0) × vₓ.\n\nDonc vₓ = 6,0 / 3,0 = 2,0 m/s vers la droite."
          },
          {
            type: "remarque",
            titre: "Choisir le bon système",
            texte: "Lors d’un choc entre A et B, la force exercée par A sur B et celle exercée par B sur A sont internes au système A + B. Pour appliquer la conservation à ce système, il faut examiner l’effet des forces extérieures sur l’ensemble."
          },
          {
            type: "remarque",
            titre: "Quantité de mouvement et énergie",
            texte: "La conservation de la quantité de mouvement ne signifie pas que l’énergie cinétique se conserve toujours. Lors d’un choc avec accrochage, une partie de l’énergie cinétique peut notamment être transformée en énergie interne et en déformations."
          }
        ]
      },

      {
        id: 5,
        titre: "Variation de quantité de mouvement et force",
        blocs: [
          {
            type: "definition",
            titre: "Variation",
            texte: "La variation de quantité de mouvement entre deux instants est le vecteur :\n\nΔp = p_finale − p_initiale.\n\nSur un axe, on soustrait les composantes algébriques : Δpₓ = p_finale,x − p_initiale,x."
          },
          {
            type: "regle",
            titre: "Force résultante et impulsion",
            texte: "Dans un référentiel galiléen, la variation de quantité de mouvement d’un système est égale à l’impulsion de la résultante des forces extérieures. Si cette résultante est constante pendant une durée Δt :\n\nΔp = F_résultante × Δt.\n\nLa force est en N, la durée en s et Δp en kg·m/s. On a 1 N·s = 1 kg·m/s."
          },
          {
            type: "exemple",
            titre: "Force constante",
            texte: "Une résultante constante de 4,0 N agit vers la droite pendant 0,50 s. La variation de quantité de mouvement vaut :\n\nΔpₓ = 4,0 × 0,50 = +2,0 kg·m/s."
          },
          {
            type: "methode",
            titre: "Étudier un choc sur un axe",
            texte: "1. Choisir un axe orienté.\n2. Calculer p_initiale,x et p_finale,x avec leurs signes.\n3. Calculer Δpₓ = p_finale,x − p_initiale,x.\n4. Si la résultante est constante, utiliser Fₓ = Δpₓ / Δt.\n5. Interpréter le signe de Fₓ."
          },
          {
            type: "remarque",
            titre: "Durée du choc",
            texte: "Pour une même variation de quantité de mouvement, augmenter la durée de l’interaction diminue la valeur de la force résultante moyenne. C’est notamment l’un des principes utilisés dans certains dispositifs de protection. Cela ne permet pas à lui seul de déterminer tous les effets d’un choc."
          }
        ]
      },

      {
        id: 6,
        titre: "Méthodes et erreurs à éviter",
        blocs: [
          {
            type: "methode",
            titre: "Résoudre un exercice de conservation",
            texte: "1. Définir le système et le référentiel.\n2. Vérifier que la conservation est indiquée ou justifiée.\n3. Choisir un axe et noter les vitesses avec leurs signes.\n4. Écrire la quantité de mouvement totale avant et après.\n5. Résoudre l’égalité et donner l’unité.\n6. Interpréter le signe du résultat."
          },
          {
            type: "tableau",
            titre: "Erreurs fréquentes",
            texte: "Erreur : utiliser une masse en grammes avec une vitesse en m/s et donner le résultat en kg·m/s.\nÀ faire : convertir la masse en kg.\n\nErreur : additionner les vitesses sans tenir compte de leur sens.\nÀ faire : choisir un axe et utiliser des signes.\n\nErreur : supposer la quantité de mouvement d’un seul objet conservée pendant un choc.\nÀ faire : définir le système et examiner les forces extérieures.\n\nErreur : affirmer que l’énergie cinétique est toujours conservée lors d’un choc.\nÀ faire : distinguer quantité de mouvement et énergie cinétique.\n\nErreur : calculer Δp en faisant p_initiale − p_finale.\nÀ faire : utiliser Δp = p_finale − p_initiale."
          },
          {
            type: "schema",
            titre: "À retenir",
            texte: "Pour un objet : p = m × v\n\nPour un système : p_total = somme vectorielle des quantités de mouvement\n\nSi la conservation est applicable :\np_total avant = p_total après\n\nPour une résultante constante :\nΔp = F_résultante × Δt"
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une balle de masse 0,50 kg se déplace vers la droite à 4,0 m/s. Calcule la valeur de sa quantité de mouvement et indique son sens. On donne p = m × v.",
        correction: "p = 0,50 × 4,0 = 2,0 kg·m/s. La quantité de mouvement est dirigée vers la droite, comme la vitesse."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet de masse 2,0 kg est immobile dans le référentiel terrestre. Quelle est sa quantité de mouvement dans ce référentiel ? On donne p = m × v.",
        correction: "Sa vitesse vaut 0 m/s. Sa quantité de mouvement vaut donc 2,0 × 0 = 0 kg·m/s."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un référentiel donné, deux balles ont la même masse et la même vitesse en valeur. L’une se déplace vers la droite et l’autre vers la gauche. Compare leurs quantités de mouvement.",
        correction: "Leurs quantités de mouvement ont la même valeur et la même direction, mais des sens opposés."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 250 g se déplace à 8,0 m/s dans le sens positif d’un axe. Calcule sa quantité de mouvement algébrique. On donne pₓ = m × vₓ et 1 kg = 1 000 g.",
        correction: "m = 250 g = 0,250 kg.\n\npₓ = 0,250 × 8,0 = +2,0 kg·m/s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un chariot de masse 3,0 kg roule vers la gauche à 2,0 m/s. L’axe est orienté vers la droite. Calcule sa quantité de mouvement algébrique avec pₓ = m × vₓ.",
        correction: "La vitesse algébrique vaut −2,0 m/s.\n\npₓ = 3,0 × (−2,0) = −6,0 kg·m/s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une résultante constante de 6,0 N agit dans le sens positif d’un axe pendant 0,20 s. Calcule la variation de quantité de mouvement algébrique. On donne Δpₓ = Fₓ × Δt.",
        correction: "Δpₓ = 6,0 × 0,20 = +1,2 N·s, soit +1,2 kg·m/s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Deux chariots se déplacent sur une droite dans le référentiel terrestre supposé galiléen. L’axe est orienté vers la droite. Le chariot A a une masse de 2,0 kg et une vitesse de 3,0 m/s vers la droite. Le chariot B a une masse de 1,5 kg et une vitesse de 2,0 m/s vers la gauche. Calcule la quantité de mouvement algébrique de chaque chariot, puis celle du système A + B.",
        correction: "p_A,x = 2,0 × 3,0 = +6,0 kg·m/s.\n\np_B,x = 1,5 × (−2,0) = −3,0 kg·m/s.\n\np_total,x = 6,0 − 3,0 = +3,0 kg·m/s. La quantité de mouvement totale est dirigée vers la droite."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans le référentiel terrestre supposé galiléen, un chariot A de 2,0 kg roule vers la droite à 3,0 m/s et heurte un chariot B de 1,0 kg immobile. Les deux chariots restent accrochés après le choc. On suppose que la quantité de mouvement du système A + B se conserve pendant le choc. Calcule leur vitesse commune après le choc.",
        correction: "On choisit la droite positive.\n\nAvant le choc : pₓ = 2,0 × 3,0 + 1,0 × 0 = 6,0 kg·m/s.\n\nAprès le choc : pₓ = (2,0 + 1,0) × vₓ.\n\nPar conservation : 6,0 = 3,0 × vₓ, donc vₓ = +2,0 m/s. Les chariots avancent vers la droite."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une balle de masse 0,20 kg se déplace vers la droite à 5,0 m/s. Après un choc, elle repart vers la gauche à 3,0 m/s. L’axe est orienté vers la droite. Calcule les quantités de mouvement algébriques initiale et finale, puis leur variation Δpₓ = p_finale,x − p_initiale,x.",
        correction: "p_initiale,x = 0,20 × 5,0 = +1,0 kg·m/s.\n\np_finale,x = 0,20 × (−3,0) = −0,60 kg·m/s.\n\nΔpₓ = −0,60 − 1,0 = −1,6 kg·m/s. La variation est dirigée vers la gauche."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une balle de masse 0,10 kg, initialement immobile, reçoit une résultante constante de 5,0 N vers la droite pendant 0,20 s. Dans le référentiel étudié, on utilise Δp = F × Δt. Calcule sa quantité de mouvement finale et sa vitesse finale.",
        correction: "La variation vaut Δp = 5,0 × 0,20 = 1,0 kg·m/s vers la droite.\n\nLa quantité de mouvement initiale est nulle : la quantité de mouvement finale vaut donc 1,0 kg·m/s vers la droite.\n\nAvec p = m × v : v = 1,0 / 0,10 = 10 m/s vers la droite."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans le référentiel terrestre supposé galiléen, deux chariots se déplacent sur une droite. L’axe est orienté vers la droite. Avant le choc, A a une masse de 2,0 kg et une vitesse de +4,0 m/s ; B a une masse de 3,0 kg et une vitesse de −1,0 m/s. Après le choc, ils restent accrochés. On suppose que la quantité de mouvement du système A + B se conserve. 1. Calcule la quantité de mouvement totale avant le choc. 2. Calcule la vitesse commune après le choc. 3. Indique le sens du mouvement après le choc.",
        correction: "1. p_total avant,x = 2,0 × 4,0 + 3,0 × (−1,0) = 8,0 − 3,0 = +5,0 kg·m/s.\n\n2. Après le choc, la masse totale est 2,0 + 3,0 = 5,0 kg. Par conservation :\n5,0 = 5,0 × vₓ.\nDonc vₓ = +1,0 m/s.\n\n3. Le signe positif indique un mouvement vers la droite."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Deux patineurs A et B, initialement immobiles l’un par rapport à l’autre et au sol, se repoussent. Leurs masses sont m_A = 50 kg et m_B = 60 kg. Dans le référentiel terrestre supposé galiléen, on néglige l’effet des forces extérieures horizontales pendant la poussée. Après la poussée, A se déplace à 1,2 m/s vers la gauche. 1. Choisis un axe orienté vers la droite et calcule la quantité de mouvement horizontale initiale du système A + B. 2. Détermine la vitesse algébrique de B après la poussée. 3. Indique son sens.",
        correction: "1. Les deux patineurs sont initialement immobiles par rapport au sol : la quantité de mouvement horizontale totale initiale vaut 0.\n\n2. La quantité de mouvement horizontale se conserve dans les conditions données. Avec v_A,x = −1,2 m/s :\n\n50 × (−1,2) + 60 × v_B,x = 0.\n−60 + 60 × v_B,x = 0.\nDonc v_B,x = +1,0 m/s.\n\n3. B se déplace vers la droite."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans le référentiel terrestre supposé galiléen, une balle de 0,20 kg arrive vers un mur à 10 m/s vers la droite. Elle repart à 6,0 m/s vers la gauche. Le contact dure 0,040 s. On choisit l’axe positif vers la droite et on suppose que la résultante horizontale des forces sur la balle est constante pendant le contact. 1. Calcule les quantités de mouvement horizontales initiale et finale. 2. Calcule leur variation. 3. Détermine la résultante horizontale des forces sur la balle. On donne Δpₓ = Fₓ × Δt.",
        correction: "1. p_initiale,x = 0,20 × 10 = +2,0 kg·m/s.\n\np_finale,x = 0,20 × (−6,0) = −1,2 kg·m/s.\n\n2. Δpₓ = −1,2 − 2,0 = −3,2 kg·m/s.\n\n3. Fₓ = Δpₓ / Δt = −3,2 / 0,040 = −80 N. La résultante horizontale a une intensité de 80 N et est dirigée vers la gauche."
      }
    ]
  }
]);
