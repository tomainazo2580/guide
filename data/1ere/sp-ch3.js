enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-chute-libre",
    titre: "Chapitre 3 : Chute libre et mouvements sous l'action du poids",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch3-modele",
        titre: "1. Modéliser la chute libre",
        blocs: [
          {
            type: "introduction",
            titre: "Observer et simplifier",
            texte: "Un objet qui tombe dans l'air subit son poids ainsi que des actions de l'air. Pour étudier simplement certains mouvements, on néglige ces actions lorsque leur influence est suffisamment faible."
          },
          {
            type: "definition",
            titre: "Chute libre",
            texte: "Un objet est en chute libre lorsqu'il n'est soumis qu'à son poids. Ce modèle s'applique notamment dans le vide ou lorsque les actions de l'air sont négligeables devant le poids."
          },
          {
            type: "regle",
            titre: "Accélération de la pesanteur",
            texte: "Dans le référentiel terrestre supposé galiléen, près de la surface terrestre et en prenant g⃗ constant, la deuxième loi de Newton donne m a⃗ = m g⃗. Pour une masse m non nulle, on obtient a⃗ = g⃗ : l'accélération est verticale et dirigée vers le bas."
          },
          {
            type: "remarque",
            titre: "Rôle de la masse",
            texte: "Dans le modèle de la chute libre, l'accélération ne dépend pas de la masse. Deux objets lâchés simultanément sans vitesse initiale, depuis la même hauteur et dans les mêmes conditions, atteignent le sol en même temps si les actions de l'air sont négligées."
          },
          {
            type: "remarque",
            titre: "Valeur de g",
            texte: "On utilise souvent g ≈ 9,8 m/s² ou une valeur arrondie comme 10 m/s². Il faut employer la valeur donnée par l'énoncé. Les unités N/kg et m/s² sont équivalentes pour g."
          },
          {
            type: "schema",
            titre: "Chute verticale et axe orienté vers le bas",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 280' role='img' aria-label='Un objet est lâché en O. Un axe vertical est orienté vers le bas ; le poids et l’accélération sont dirigés vers le bas.'><rect width='360' height='280' fill='white'/><defs><marker id='sp1ch3fleche' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#333'/></marker><marker id='sp1ch3rouge' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><line x1='90' y1='35' x2='90' y2='245' stroke='#333' stroke-width='2' marker-end='url(#sp1ch3fleche)'/><circle cx='190' cy='65' r='10' fill='#1769aa'/><line x1='190' y1='75' x2='190' y2='145' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch3rouge)'/><line x1='245' y1='65' x2='245' y2='135' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch3rouge)'/><line x1='40' y1='245' x2='320' y2='245' stroke='#555' stroke-width='3'/><text x='72' y='60' font-size='14'>O</text><text x='73' y='263' font-size='14'>z</text><text x='199' y='125' font-size='14' fill='#c43b35'>P⃗</text><text x='254' y='115' font-size='14' fill='#c43b35'>g⃗</text><text x='270' y='238' font-size='13'>sol</text></svg>",
            legende: "L'origine O est au point de départ. Avec l'axe z orienté vers le bas, l'accélération algébrique vaut +g."
          }
        ]
      },
      {
        id: "sp1-ch3-vertical",
        titre: "2. Mouvement vertical",
        blocs: [
          {
            type: "regle",
            titre: "Axe orienté vers le bas",
            texte: "Si l'axe vertical z est orienté vers le bas et si la position et la vitesse initiales à t = 0 sont z₀ et v₀, alors a = g, v(t) = v₀ + gt et z(t) = z₀ + v₀t + 1/2 gt². La vitesse v₀ est algébrique : elle est négative si le mobile part vers le haut."
          },
          {
            type: "exemple",
            titre: "Objet lâché sans vitesse initiale",
            texte: "On choisit z₀ = 0 au point de départ et l'axe vers le bas. Avec v₀ = 0 et g = 10 m/s², on a v(t) = 10t et z(t) = 5t². Après 2 s, la vitesse est 20 m/s vers le bas et l'objet est descendu de 20 m, à condition qu'il n'ait pas encore touché le sol."
          },
          {
            type: "regle",
            titre: "Axe orienté vers le haut",
            texte: "Si l'axe vertical y est orienté vers le haut, alors a = −g, v(t) = v₀ − gt et y(t) = y₀ + v₀t − 1/2 gt². Les positions et vitesses sont algébriques sur cet axe."
          },
          {
            type: "exemple",
            titre: "Lancer vertical vers le haut",
            texte: "Un objet est lancé vers le haut avec v₀ = 20 m/s. On prend g = 10 m/s² et y₀ = 0. Sa vitesse est v(t) = 20 − 10t. Elle s'annule à t = 2 s : l'objet atteint alors son point le plus haut, à y = 20 × 2 − 5 × 2² = 20 m au-dessus du départ."
          },
          {
            type: "remarque",
            titre: "Au sommet",
            texte: "Au point le plus haut d'un lancer vertical, la vitesse est momentanément nulle, mais l'accélération reste g⃗, dirigée vers le bas. L'objet ne reste pas immobile : il redescend."
          },
          {
            type: "methode",
            titre: "Temps et vitesse d'arrivée",
            texte: "Choisir un axe et écrire l'équation de position. Remplacer la position par celle du sol pour obtenir une équation en t. Garder les solutions correspondant à l'intervalle physique étudié, puis utiliser l'équation de vitesse pour trouver la vitesse d'arrivée."
          }
        ]
      },
      {
        id: "sp1-ch3-lancer-horizontal",
        titre: "3. Lancer horizontal",
        blocs: [
          {
            type: "introduction",
            titre: "Étudier séparément les deux directions",
            texte: "Un objet peut être lancé horizontalement tout en tombant. Dans le modèle de chute libre, on décompose son mouvement selon un axe horizontal et un axe vertical."
          },
          {
            type: "regle",
            titre: "Équations du mouvement",
            texte: "On choisit l'origine au point de lancement, l'axe x horizontal dans le sens du lancer et l'axe y vertical vers le haut. Si la vitesse initiale horizontale est v₀ et si la vitesse verticale initiale est nulle, alors x(t) = v₀t et y(t) = −1/2 gt². Les composantes de la vitesse sont vₓ = v₀ et vᵧ = −gt."
          },
          {
            type: "regle",
            titre: "Trajectoire",
            texte: "Si v₀ ≠ 0, on peut remplacer t par x/v₀ dans l'équation verticale. On obtient y = −gx²/(2v₀²) : la trajectoire est une portion de parabole dans ce modèle."
          },
          {
            type: "schema",
            titre: "Trajectoire d'un lancer horizontal",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 290' role='img' aria-label='Objet lancé horizontalement depuis O : sa trajectoire descend progressivement et son accélération est verticale vers le bas.'><rect width='460' height='290' fill='white'/><defs><marker id='sp1ch3bleu' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#1769aa'/></marker><marker id='sp1ch3bas' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><line x1='70' y1='65' x2='425' y2='65' stroke='#777' stroke-width='1'/><line x1='70' y1='65' x2='70' y2='260' stroke='#777' stroke-width='1'/><path d='M70 65 Q230 65 390 225' fill='none' stroke='#1769aa' stroke-width='3'/><line x1='70' y1='65' x2='160' y2='65' stroke='#1769aa' stroke-width='3' marker-end='url(#sp1ch3bleu)'/><line x1='230' y1='105' x2='230' y2='165' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch3bas)'/><circle cx='70' cy='65' r='4' fill='#333'/><circle cx='230' cy='105' r='4' fill='#1769aa'/><text x='55' y='55' font-size='14'>O</text><text x='110' y='55' font-size='14' fill='#1769aa'>v⃗₀</text><text x='238' y='145' font-size='14' fill='#c43b35'>g⃗</text><text x='410' y='55' font-size='14'>x</text><text x='76' y='252' font-size='14'>y négatif</text></svg>",
            legende: "La composante horizontale de la vitesse reste constante ; la composante verticale évolue sous l'effet du poids. Le schéma est qualitatif."
          },
          {
            type: "exemple",
            titre: "Temps de chute et portée",
            texte: "Un objet est lancé horizontalement à 5 m/s depuis une hauteur de 20 m. Avec g = 10 m/s² et sans action de l'air, le sol correspond à y = −20 m. Ainsi −5t² = −20, donc t = 2 s. La distance horizontale parcourue avant l'impact est x = 5 × 2 = 10 m."
          },
          {
            type: "remarque",
            titre: "Limites du modèle",
            texte: "Les équations décrivent le mouvement jusqu'à l'impact si aucun obstacle ne l'interrompt. Elles ne décrivent pas le choc avec le sol. Si les actions de l'air sont importantes, les résultats réels peuvent être différents."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Dans le modèle de la chute libre près de la Terre, quelle force agit sur l'objet ? Donner la direction et le sens de son accélération.",
        correction: "L'objet n'est soumis qu'à son poids. Son accélération est verticale, dirigée vers le bas ; elle est égale à g⃗."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet est lâché sans vitesse initiale. On oriente l'axe vertical vers le bas et on prend g = 10 m/s². Calculer sa vitesse après 1 s, avant tout impact.",
        correction: "Avec v₀ = 0, v(t) = gt. Après 1 s, v = 10 × 1 = 10 m/s vers le bas."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet est lâché sans vitesse initiale depuis une hauteur de 45 m. On néglige l'air et on prend g = 10 m/s². Calculer la durée de sa chute.",
        correction: "Avec l'origine au point de départ et l'axe vers le bas, la distance de chute est z = 1/2 gt² = 5t². À l'arrivée, 45 = 5t², donc t² = 9. On retient le temps positif : t = 3 s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet est lancé verticalement vers le haut à 15 m/s. On néglige l'air et on prend g = 10 m/s². Calculer le temps nécessaire pour atteindre le sommet, supposé atteint avant tout obstacle.",
        correction: "Avec l'axe vers le haut, v(t) = 15 − 10t. Au sommet, v = 0, donc 15 − 10t = 0 et t = 1,5 s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet est lancé verticalement vers le haut depuis le sol à 20 m/s. On néglige l'air et on prend g = 10 m/s². Calculer sa hauteur maximale et le temps de retour au niveau du départ.",
        correction: "En orientant l'axe vers le haut, y(t) = 20t − 5t² et v(t) = 20 − 10t. Au sommet, v = 0, donc t = 2 s et y = 20 × 2 − 5 × 2² = 20 m. Le retour au niveau du départ vérifie 20t − 5t² = 0, soit 5t(4 − t) = 0. La solution t = 0 correspond au départ ; le retour a lieu à t = 4 s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet est lancé horizontalement à 8 m/s depuis une hauteur de 45 m. On néglige l'air et on prend g = 10 m/s². Calculer la durée de chute et la distance horizontale parcourue avant l'impact.",
        correction: "La vitesse verticale initiale est nulle. La chute verticale vérifie 45 = 1/2 × 10 × t², d'où t = 3 s. La vitesse horizontale reste constante : la distance parcourue horizontalement vaut 8 × 3 = 24 m."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet est lancé verticalement vers le haut depuis un point situé à 15 m au-dessus du sol, avec une vitesse initiale de 10 m/s. On néglige l'air et on prend g = 10 m/s². Avec un axe vertical orienté vers le haut et une origine au sol, déterminer l'instant et la vitesse de l'impact.",
        correction: "La position est y(t) = 15 + 10t − 5t². À l'impact, y = 0, donc 15 + 10t − 5t² = 0, soit t² − 2t − 3 = 0. On factorise : (t − 3)(t + 1) = 0. On retient t = 3 s ; t = −1 s ne correspond pas au mouvement après le lancement. La vitesse est v(t) = 10 − 10t, donc v(3) = −20 m/s : l'objet arrive à 20 m/s vers le bas."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet est lancé horizontalement à 6 m/s depuis une hauteur de 20 m. On néglige l'air et on prend g = 10 m/s². Déterminer le temps de chute, les composantes horizontale et verticale de la vitesse juste avant l'impact, puis la norme de cette vitesse.",
        correction: "La chute verticale vérifie 20 = 5t², donc t = 2 s. Avec l'axe horizontal dans le sens du lancer et l'axe vertical vers le haut, vₓ = 6 m/s et vᵧ = −gt = −20 m/s juste avant l'impact. La norme vaut √(vₓ² + vᵧ²) = √(36 + 400) = √436 = 2√109 m/s, soit environ 20,9 m/s."
      }
    ]
  }
]);
