enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-revision-generale",
    titre: "Chapitre 32 : Révision générale",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch32-algebre",
        titre: "1. Algèbre, systèmes et dénombrement",
        blocs: [
          {
            type: "regle",
            titre: "Trinôme du second degré",
            texte: "Pour ax² + bx + c, avec a ≠ 0, le discriminant est Δ = b² − 4ac. Si Δ > 0, il y a deux racines réelles ; si Δ = 0, une racine double ; si Δ < 0, aucune racine réelle. Lorsque deux racines x₁ < x₂ existent, le trinôme est du signe de a à l'extérieur des racines et du signe opposé entre elles."
          },
          {
            type: "exemple",
            titre: "Résoudre une inéquation",
            texte: "x² − 5x + 6 = (x − 2)(x − 3). Le coefficient de x² est positif, donc x² − 5x + 6 ≤ 0 équivaut à x ∈ [2 ; 3]."
          },
          {
            type: "methode",
            titre: "Équations et systèmes",
            texte: "Pour une équation avec une racine carrée, vérifier le domaine, isoler la racine puis contrôler les solutions après élévation au carré. Pour une équation bicarrée, poser X = x² avec X ≥ 0. Pour un système linéaire, utiliser la substitution ou l'élimination, puis vérifier dans les équations initiales."
          },
          {
            type: "methode",
            titre: "Régionnement et optimisation",
            texte: "Une inéquation linéaire à deux inconnues définit un demi-plan, éventuellement avec sa frontière. Le système définit l'intersection des demi-plans. Pour une fonction objectif linéaire sur une région polygonale bornée non vide, on peut chercher un maximum ou un minimum parmi les sommets."
          },
          {
            type: "regle",
            titre: "Applications et dénombrement",
            texte: "Une application est injective si deux éléments de départ distincts ont des images distinctes ; elle est surjective si tout élément de l'ensemble d'arrivée possède au moins un antécédent. Une bijection est à la fois injective et surjective et possède une application réciproque. Pour dénombrer, distinguer les choix ordonnés ou non, avec ou sans répétition."
          },
          {
            type: "exemple",
            titre: "Ordre ou absence d'ordre",
            texte: "Avec 5 personnes, on peut choisir un président puis un secrétaire de 5 × 4 = 20 façons. Pour former un groupe de 2 personnes sans rôle distinct, il y a 5 × 4/2 = 10 choix."
          }
        ]
      },
      {
        id: "m1-ch32-analyse",
        titre: "2. Fonctions et suites",
        blocs: [
          {
            type: "methode",
            titre: "Étudier une fonction",
            texte: "Déterminer son domaine ; rechercher les symétries ou la périodicité ; calculer les limites utiles ; étudier la dérivée et son signe ; construire le tableau de variations ; enfin calculer les valeurs et intersections demandées. Pour une fonction rationnelle, exclure les zéros du dénominateur avant tout calcul."
          },
          {
            type: "regle",
            titre: "Dérivée et tangente",
            texte: "Si f est dérivable en a, la tangente à sa courbe au point d'abscisse a a pour équation y = f(a) + f'(a)(x − a). Sur un intervalle, une dérivée positive ou nulle donne une fonction croissante ; une dérivée négative ou nulle donne une fonction décroissante."
          },
          {
            type: "exemple",
            titre: "Tangente et variations",
            texte: "Pour f(x) = x² − 2x, f'(x) = 2x − 2. La fonction décroît sur ]−∞ ; 1] puis croît sur [1 ; +∞[. Comme f(1) = −1 et f'(1) = 0, la tangente en x = 1 est la droite y = −1."
          },
          {
            type: "regle",
            titre: "Suites usuelles",
            texte: "Pour une suite arithmétique de raison r, uₙ = u₀ + nr. Pour une suite géométrique de raison q, uₙ = u₀qⁿ. Une suite peut aussi être définie par récurrence : on calcule alors les termes successifs à partir du terme initial."
          },
          {
            type: "remarque",
            titre: "Limite d'une suite géométrique",
            texte: "Si |q| < 1, alors qⁿ tend vers 0. La convergence ne se déduit pas seulement de quelques termes calculés : une observation numérique ou graphique suggère une conjecture qu'il faut justifier."
          }
        ]
      },
      {
        id: "m1-ch32-trigonometrie",
        titre: "3. Trigonométrie",
        blocs: [
          {
            type: "regle",
            titre: "Identités et équations",
            texte: "Pour tout réel x, cos²x + sin²x = 1. Si α est réel, cos x = cos α équivaut à x = ±α + 2kπ ; sin x = sin α équivaut à x = α + 2kπ ou x = π − α + 2kπ, avec k ∈ ℤ. Si tan α existe, tan x = tan α équivaut à x = α + kπ."
          },
          {
            type: "schema",
            titre: "Repères sur le cercle trigonométrique",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 250' role='img' aria-label='Cercle trigonométrique : les angles zéro, pi sur deux, pi et trois pi sur deux correspondent respectivement aux points de droite, du haut, de gauche et du bas.'><rect width='360' height='250' fill='white'/><line x1='45' y1='125' x2='315' y2='125' stroke='#555'/><line x1='180' y1='235' x2='180' y2='15' stroke='#555'/><circle cx='180' cy='125' r='85' fill='none' stroke='#1769aa' stroke-width='2'/><circle cx='265' cy='125' r='4' fill='#1769aa'/><circle cx='180' cy='40' r='4' fill='#1769aa'/><circle cx='95' cy='125' r='4' fill='#1769aa'/><circle cx='180' cy='210' r='4' fill='#1769aa'/><text x='272' y='130' font-size='14'>0</text><text x='186' y='37' font-size='14'>π/2</text><text x='76' y='130' font-size='14'>π</text><text x='186' y='218' font-size='14'>3π/2</text><text x='161' y='143' font-size='13'>O</text></svg>",
            legende: "Le cosinus est l'abscisse du point du cercle ; le sinus est son ordonnée. Un tour complet correspond à 2π radians."
          },
          {
            type: "methode",
            titre: "Résoudre sur un intervalle",
            texte: "Chercher toutes les familles de solutions, puis ne retenir que les valeurs de l'intervalle demandé. Pour une inéquation en sinus ou cosinus, lire les arcs convenables sur le cercle et vérifier l'inclusion des bornes. La tangente n'est pas définie en π/2 + kπ."
          },
          {
            type: "exemple",
            titre: "Une équation et une inéquation",
            texte: "Sur [0 ; 2π[, cos x = 1/2 a pour solutions π/3 et 5π/3. Sur le même intervalle, cos x ≥ 1/2 a pour ensemble de solutions [0 ; π/3] ∪ [5π/3 ; 2π[."
          }
        ]
      },
      {
        id: "m1-ch32-geometrie",
        titre: "4. Géométrie du plan et de l'espace",
        blocs: [
          {
            type: "regle",
            titre: "Produit scalaire et orthogonalité",
            texte: "Dans un repère orthonormé du plan, (x ; y) · (x' ; y') = xx' + yy'. Dans l'espace, on ajoute zz'. Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul."
          },
          {
            type: "regle",
            titre: "Barycentre",
            texte: "Si G est le barycentre de points pondérés (Aᵢ ; aᵢ), avec S = Σaᵢ ≠ 0, alors pour tout point M : ΣaᵢMAᵢ⃗ = S MG⃗. Les coordonnées de G s'obtiennent en faisant la moyenne pondérée des coordonnées des points."
          },
          {
            type: "regle",
            titre: "Droite et cercle dans le plan",
            texte: "Dans un repère orthonormé, un cercle de centre (a ; b) et de rayon R > 0 a pour équation (x − a)² + (y − b)² = R². Une droite ax + by + c = 0 admet (a ; b) comme vecteur normal. La tangente à un cercle en T est perpendiculaire au rayon passant par T."
          },
          {
            type: "regle",
            titre: "Transformations et triangles",
            texte: "Une isométrie conserve les distances. Une homothétie de rapport k multiplie les longueurs par |k|. Une similitude de rapport r multiplie les longueurs par r et les aires par r². Pour des triangles semblables, écrire les sommets correspondants dans le même ordre avant de comparer les côtés."
          },
          {
            type: "regle",
            titre: "Plans dans l'espace",
            texte: "Dans un repère orthonormé, le plan ax + by + cz + d = 0 a pour vecteur normal (a ; b ; c). La distance de A(xA ; yA ; zA) au plan est |axA + byA + czA + d|/√(a² + b² + c²)."
          }
        ]
      },
      {
        id: "m1-ch32-statistiques",
        titre: "5. Statistiques et méthode de révision",
        blocs: [
          {
            type: "regle",
            titre: "Série en classes",
            texte: "La fréquence d'une classe est son effectif divisé par l'effectif total. Les effectifs cumulés permettent de repérer la moitié de la série. Pour des classes d'amplitudes différentes, les aires des rectangles de l'histogramme, et non simplement leurs hauteurs, sont proportionnelles aux effectifs."
          },
          {
            type: "regle",
            titre: "Moyenne et dispersion",
            texte: "La moyenne pondérée est x̄ = Σnᵢxᵢ/N. La variance est V = Σnᵢ(xᵢ − x̄)²/N = Σnᵢxᵢ²/N − x̄², et l'écart-type est √V. Pour des données regroupées en classes, les calculs avec les centres donnent généralement des estimations."
          },
          {
            type: "methode",
            titre: "Avant de rendre une solution",
            texte: "Relire la question et les données. Vérifier les domaines, les unités, les bornes incluses ou exclues et la cohérence du résultat. En géométrie, justifier les propriétés utilisées. En statistique, distinguer une valeur exacte d'une estimation."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Factoriser x² − 7x + 12, puis résoudre x² − 7x + 12 = 0.",
        correction: "On cherche deux nombres de somme 7 et de produit 12 : 3 et 4. Ainsi x² − 7x + 12 = (x − 3)(x − 4). Le produit est nul si x = 3 ou x = 4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une suite arithmétique vérifie u₀ = 4 et a pour raison 3. Calculer u₁, u₂ et u₅.",
        correction: "On ajoute 3 à chaque étape : u₁ = 7 et u₂ = 10. La formule uₙ = 4 + 3n donne u₅ = 19."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre le système x + y = 7 et 2x − y = 2.",
        correction: "En additionnant les équations, 3x = 9, donc x = 3. Puis y = 7 − 3 = 4. Vérification : 2 × 3 − 4 = 2. La solution est (3 ; 4)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère orthonormé du plan, A(1 ; 2) et B(4 ; 6). Calculer AB⃗ et AB.",
        correction: "AB⃗ = (4 − 1 ; 6 − 2) = (3 ; 4). Donc AB = √(3² + 4²) = 5."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x² − 4x + 3. Étudier ses variations sur ℝ et déterminer l'équation de sa tangente au point d'abscisse 0.",
        correction: "f'(x) = 2x − 4. La dérivée est négative pour x < 2, nulle en 2 et positive pour x > 2. Ainsi f décroît sur ]−∞ ; 2] puis croît sur [2 ; +∞[. Son minimum est f(2) = −1. Comme f(0) = 3 et f'(0) = −4, la tangente en 0 a pour équation y = 3 − 4x."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre sur [0 ; 2π[ l'inéquation sin x ≥ 1/2.",
        correction: "Sur [0 ; 2π[, l'égalité sin x = 1/2 est atteinte en π/6 et 5π/6. Sur le cercle, l'ordonnée est supérieure ou égale à 1/2 entre ces deux angles. La solution est [π/6 ; 5π/6], bornes incluses."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé, on considère A(0 ; 0) et B(4 ; 0). Déterminer le lieu des points M tels que MA⃗ · MB⃗ = 0, puis donner son centre et son rayon.",
        correction: "A et B sont distincts. Le lieu est le cercle de diamètre [AB], avec A et B inclus. Son centre est le milieu I(2 ; 0) et son rayon est AB/2 = 2. Son équation est (x − 2)² + y² = 4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une série de 10 valeurs est regroupée dans les classes [0 ; 10[, [10 ; 20[ et [20 ; 30[, d'effectifs respectifs 2, 5 et 3. Calculer les effectifs cumulés croissants et estimer la moyenne avec les centres des classes.",
        correction: "Les effectifs cumulés sont 2, 7 et 10. Les centres sont 5, 15 et 25. La moyenne estimée vaut (2 × 5 + 5 × 15 + 3 × 25)/10 = 160/10 = 16. La moyenne exacte n'est pas connue à partir des seuls effectifs par classe."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Résoudre dans ℝ l'équation √(x + 2) = x. Préciser les conditions d'existence et vérifier chaque solution obtenue.",
        correction: "Il faut x + 2 ≥ 0 et, puisque la racine est positive ou nulle, x ≥ 0. En élevant au carré, x + 2 = x², soit x² − x − 2 = 0. On factorise : (x − 2)(x + 1) = 0. Les candidats sont 2 et −1, mais −1 ne respecte pas x ≥ 0. Pour x = 2, √(2 + 2) = 2 : la solution est donc x = 2."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une association choisit un président et un secrétaire parmi 6 personnes, sans cumuler les deux rôles. Combien de choix sont possibles ? Elle choisit ensuite séparément un groupe de 2 personnes parmi les mêmes 6 personnes, sans attribuer de rôle dans ce groupe. Combien de groupes sont possibles ?",
        correction: "Pour les rôles distincts, il y a 6 choix pour le président puis 5 pour le secrétaire, soit 6 × 5 = 30 choix. Pour un groupe sans rôle, chaque paire a été comptée deux fois dans les 30 choix ordonnés. Il y a donc 30/2 = 15 groupes."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé de l'espace, on donne A(1 ; 2 ; 3) et le plan P : x + y + z − 3 = 0. Déterminer le projeté orthogonal H de A sur P et la distance de A à P.",
        correction: "Un vecteur normal à P est (1 ; 1 ; 1). La droite passant par A et perpendiculaire à P est donnée par x = 1 + t, y = 2 + t et z = 3 + t. Pour son intersection avec P : (1 + t) + (2 + t) + (3 + t) − 3 = 0, donc 3 + 3t = 0 et t = −1. Ainsi H(0 ; 1 ; 2). La distance est AH = √(1² + 1² + 1²) = √3. La formule de distance donne aussi |1 + 2 + 3 − 3|/√3 = √3."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une suite est définie par u₀ = 10 et uₙ₊₁ = 0,5uₙ + 3. On pose vₙ = uₙ − 6. Montrer que (vₙ) est géométrique, exprimer uₙ en fonction de n et déterminer sa limite.",
        correction: "vₙ₊₁ = uₙ₊₁ − 6 = 0,5uₙ + 3 − 6 = 0,5(uₙ − 6) = 0,5vₙ. La suite (vₙ) est géométrique de raison 0,5 et v₀ = 10 − 6 = 4. Donc vₙ = 4(0,5)ⁿ et uₙ = 6 + 4(0,5)ⁿ. Comme |0,5| < 1, (0,5)ⁿ tend vers 0 : uₙ tend vers 6."
      }
    ]
  }
]);
