// ===== GUIDE - Mathématiques Première =====
// Chapitre 7 : composition, réciproque, restriction et prolongement.
// Le prolongement est explicitement mentionné
// dans la répartition de Première C.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-composition-reciproque",
    titre: "Chapitre 7 : Composition, réciproque, restriction et prolongement",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-composition",
        titre: "Composer deux applications",
        blocs: [
          {
            type: "introduction",
            titre: "Deux étapes successives",
            texte: "On prend un nombre x, on lui ajoute 1, puis on multiplie le résultat par 2.\n\nLa première opération donne x + 1. La seconde donne 2(x + 1).\n\nEffectuer ces deux applications dans cet ordre s'appelle les composer."
          },
          {
            type: "definition",
            titre: "Composition",
            texte: "Soient f : E → F et g : F → G deux applications.\n\nLeur composée g ∘ f est l'application de E vers G définie par :\n\n(g ∘ f)(x) = g(f(x)).\n\nOn applique d'abord f, puis g. On lit g ∘ f « g rond f »."
          },
          {
            type: "schema",
            titre: "Suivre les deux étapes",
            svg: "<svg viewBox='0 0 440 130' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Un élément x de E est envoyé par f sur f de x dans F, puis par g sur g de f de x dans G'><defs><marker id='fleche7' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0,0 L8,4 L0,8 Z' fill='#475569'/></marker></defs><rect width='440' height='130' fill='white'/><g font-size='16' fill='#1e293b' text-anchor='middle'><text x='55' y='30'>E</text><text x='220' y='30'>F</text><text x='385' y='30'>G</text><text x='55' y='87'>x</text><text x='220' y='87'>f(x)</text><text x='385' y='87'>g(f(x))</text></g><g stroke='#475569' stroke-width='2' marker-end='url(#fleche7)'><line x1='80' y1='80' x2='175' y2='80'/><line x1='255' y1='80' x2='340' y2='80'/></g><text x='128' y='65' font-size='15' text-anchor='middle' fill='#1d4ed8'>f</text><text x='298' y='65' font-size='15' text-anchor='middle' fill='#b91c1c'>g</text></svg>",
            legende: "La composée g ∘ f applique d'abord f, puis g. Le résultat est g(f(x))."
          },
          {
            type: "exemple",
            titre: "Calculer une composée",
            texte: "Soient f : ℝ → ℝ et g : ℝ → ℝ définies par :\n\nf(x) = x + 1 et g(x) = 2x.\n\nAlors :\n\n(g ∘ f)(x) = g(f(x)) = g(x + 1) = 2(x + 1) = 2x + 2.\n\nPour x = 3 : f(3) = 4, puis g(4) = 8. Donc (g ∘ f)(3) = 8."
          },
          {
            type: "remarque",
            titre: "L'ordre compte",
            texte: "Avec les mêmes applications :\n\n(f ∘ g)(x) = f(2x) = 2x + 1.\n\nEn général, g ∘ f et f ∘ g ne sont pas égales. Ici, 2x + 2 ≠ 2x + 1."
          },
          {
            type: "remarque",
            titre: "Vérifier les ensembles",
            texte: "Pour composer f puis g, chaque valeur f(x) doit appartenir à l'ensemble de départ de g.\n\nPar exemple, si f : ℝ → ℝ est définie par f(x) = x² et si g : [0 ; +∞[ → ℝ est définie par g(t) = √t, on peut appliquer g à chaque image de f car f(x) ≥ 0. On obtient g(f(x)) = √(x²) = |x|."
          }
        ]
      },

      {
        id: "m1-reciproque",
        titre: "Trouver une application réciproque",
        blocs: [
          {
            type: "definition",
            titre: "Réciproque d'une bijection",
            texte: "Si f : E → F est bijective, chaque y ∈ F possède un unique antécédent x ∈ E.\n\nL'application réciproque f⁻¹ : F → E associe à y cet unique antécédent.\n\nAinsi :\n\nf(x) = y équivaut à f⁻¹(y) = x.\n\nPour tout x ∈ E, f⁻¹(f(x)) = x. Pour tout y ∈ F, f(f⁻¹(y)) = y."
          },
          {
            type: "methode",
            titre: "Calculer une réciproque",
            texte: "1. Vérifie ou démontre que f est une bijection entre les ensembles indiqués.\n2. Écris y = f(x).\n3. Exprime x en fonction de y.\n4. Vérifie que l'expression obtenue appartient à l'ensemble de départ de f.\n5. Donne la formule de f⁻¹ et ses ensembles de départ et d'arrivée."
          },
          {
            type: "exemple",
            titre: "Une application affine",
            texte: "Soit f : ℝ → ℝ définie par f(x) = 2x + 3.\n\nPour tout y ∈ ℝ, l'équation y = 2x + 3 possède une unique solution :\n\nx = (y - 3)/2.\n\nDonc f est bijective et sa réciproque est :\n\nf⁻¹ : ℝ → ℝ, y ↦ (y - 3)/2.\n\nOn peut aussi écrire f⁻¹(x) = (x - 3)/2.\n\nVérification : f⁻¹(f(x)) = (2x + 3 - 3)/2 = x."
          },
          {
            type: "exemple",
            titre: "Carré et racine carrée",
            texte: "Soit h : [0 ; +∞[ → [0 ; +∞[ définie par h(x) = x².\n\nPour tout y ≥ 0, l'unique solution positive ou nulle de x² = y est x = √y.\n\nDonc h est bijective et h⁻¹(y) = √y.\n\nLa condition x ≥ 0 est essentielle : sur ℝ, la formule x² n'est pas injective."
          },
          {
            type: "remarque",
            titre: "Attention à la notation f⁻¹",
            texte: "f⁻¹ désigne l'application réciproque de f lorsqu'elle existe. Elle ne désigne pas en général le quotient 1/f(x).\n\nPar exemple, si f(x) = 2x + 3, alors f⁻¹(x) = (x - 3)/2, tandis que 1/f(x) = 1/(2x + 3) lorsque ce quotient est défini."
          }
        ]
      },

      {
        id: "m1-restriction",
        titre: "Restreindre une application",
        blocs: [
          {
            type: "definition",
            titre: "Restriction",
            texte: "Soit f : E → F et soit A une partie de E.\n\nLa restriction de f à A est l'application qui garde la même règle, mais dont l'ensemble de départ est réduit à A.\n\nOn la note souvent f|A : A → F et on a f|A(x) = f(x) pour tout x ∈ A."
          },
          {
            type: "exemple",
            titre: "Restreindre la fonction carré",
            texte: "Soit f : ℝ → ℝ définie par f(x) = x².\n\nSa restriction à [0 ; +∞[ est l'application :\n\nh : [0 ; +∞[ → ℝ, h(x) = x².\n\nCette restriction est injective, mais elle n'est pas surjective vers ℝ : aucun nombre négatif n'est atteint.\n\nSi l'on considère la même règle avec [0 ; +∞[ comme ensemble d'arrivée, on obtient une bijection. Modifier l'ensemble d'arrivée est une opération distincte de la restriction du départ."
          },
          {
            type: "remarque",
            titre: "La règle ne change pas",
            texte: "Restreindre une application ne change pas l'image des éléments conservés.\n\nPar exemple, si f(x) = x² et si on restreint f à [0 ; +∞[, l'image de 3 reste 9. En revanche, -3 n'appartient plus au nouvel ensemble de départ."
          }
        ]
      },

      {
        id: "m1-prolongement",
        titre: "Prolonger une application",
        blocs: [
          {
            type: "definition",
            titre: "Prolongement",
            texte: "Soit f : E → F et soit E' un ensemble contenant E.\n\nUne application g : E' → F est un prolongement de f si g(x) = f(x) pour tout x ∈ E.\n\nOn garde donc les valeurs de f sur E et on définit aussi des images pour les éléments ajoutés à l'ensemble de départ."
          },
          {
            type: "exemple",
            titre: "Une valeur ajoutée",
            texte: "Soit f : ℝ privé de 0 → ℝ définie par :\n\nf(x) = (x² - 1)/(x - 1) pour x ≠ 0 et x ≠ 1, et f(1) = 2.\n\nPour tout x de son domaine, f(x) = x + 1 : en effet, x² - 1 = (x - 1)(x + 1) lorsque x ≠ 1.\n\nL'application g : ℝ → ℝ définie par g(x) = x + 1 est un prolongement de f. Elle conserve toutes les valeurs de f et définit en plus g(0) = 1."
          },
          {
            type: "remarque",
            titre: "Un prolongement n'est pas toujours unique",
            texte: "Dans l'exemple précédent, une application qui coïncide avec f partout sur ℝ privé de 0, mais prend une autre valeur réelle en 0, est aussi un prolongement au sens de la définition donnée.\n\nSi l'on demande en plus une propriété comme la continuité, il faut la vérifier séparément. La continuité sera étudiée plus tard."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Soient f : ℝ → ℝ, f(x) = x + 2, et g : ℝ → ℝ, g(x) = 3x.\n\nCalcule (g ∘ f)(1) et (f ∘ g)(1).",
        correction: "f(1) = 3, puis g(3) = 9. Donc (g ∘ f)(1) = 9.\n\ng(1) = 3, puis f(3) = 5. Donc (f ∘ g)(1) = 5.\n\nLes deux résultats sont différents : l'ordre compte."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f : ℝ → ℝ définie par f(x) = x - 4.\n\n1. Trouve l'unique antécédent de 3.\n2. Quelle est la formule de l'application réciproque ?",
        correction: "1. On résout x - 4 = 3, d'où x = 7.\n\n2. Pour tout réel y, y = x - 4 équivaut à x = y + 4. Chaque réel a donc un unique antécédent et f est bijective.\n\nSa réciproque est f⁻¹(y) = y + 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soient f : ℝ → ℝ, f(x) = x², et g : ℝ → ℝ, g(x) = x - 1.\n\nDétermine les expressions de g ∘ f et de f ∘ g.",
        correction: "(g ∘ f)(x) = g(x²) = x² - 1.\n\n(f ∘ g)(x) = f(x - 1) = (x - 1)² = x² - 2x + 1.\n\nCes deux composées ne sont pas égales en général."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f : ℝ → ℝ définie par f(x) = 3x + 6.\n\n1. Montre que f est bijective.\n2. Détermine f⁻¹.\n3. Vérifie que f⁻¹(f(2)) = 2.",
        correction: "1. Pour tout y ∈ ℝ, l'équation y = 3x + 6 a une unique solution : x = (y - 6)/3. Donc f est bijective.\n\n2. f⁻¹ : ℝ → ℝ est donnée par f⁻¹(y) = (y - 6)/3.\n\n3. f(2) = 12, puis f⁻¹(12) = (12 - 6)/3 = 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f : ℝ → ℝ définie par f(x) = x². On considère sa restriction h à [0 ; +∞[, avec ℝ comme ensemble d'arrivée.\n\n1. Donne le départ et l'arrivée de h.\n2. h est-elle injective ?\n3. h est-elle surjective vers ℝ ?\n4. Propose un ensemble d'arrivée pour lequel la même formule devient bijective.",
        correction: "1. h : [0 ; +∞[ → ℝ, h(x) = x².\n\n2. Oui. Si x et x' sont positifs ou nuls et si x² = x'², alors x = x'.\n\n3. Non : aucun nombre négatif n'est un carré réel.\n\n4. Avec [0 ; +∞[ comme ensemble d'arrivée, la formule est bijective : tout y ≥ 0 a pour unique antécédent positif ou nul √y."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f : ℝ privé de 2 → ℝ définie par f(x) = (x² - 4)/(x - 2).\n\n1. Simplifie f(x) sur son domaine.\n2. Donne un prolongement g de f à ℝ.\n3. Vérifie que g coïncide avec f sur le domaine de f.",
        correction: "1. x² - 4 = (x - 2)(x + 2). Comme x ≠ 2, on peut simplifier et obtenir f(x) = x + 2.\n\n2. On peut définir g : ℝ → ℝ par g(x) = x + 2, pour tout réel x. En particulier, g(2) = 4.\n\n3. Pour tout x ≠ 2, g(x) = x + 2 = f(x). Donc g est bien un prolongement de f."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soient f : ℝ → ℝ définie par f(x) = 2x - 1 et g : ℝ → ℝ définie par g(x) = x + 3.\n\n1. Calcule h = g ∘ f.\n2. Montre que h est bijective et détermine h⁻¹.\n3. Détermine f⁻¹ et g⁻¹.\n4. Vérifie que h⁻¹ = f⁻¹ ∘ g⁻¹.",
        correction: "1. h(x) = g(f(x)) = (2x - 1) + 3 = 2x + 2.\n\n2. Pour tout y ∈ ℝ, y = 2x + 2 possède l'unique solution x = (y - 2)/2. Donc h est bijective et h⁻¹(y) = (y - 2)/2.\n\n3. De y = 2x - 1, on tire f⁻¹(y) = (y + 1)/2. De y = x + 3, on tire g⁻¹(y) = y - 3.\n\n4. (f⁻¹ ∘ g⁻¹)(y) = f⁻¹(y - 3) = ((y - 3) + 1)/2 = (y - 2)/2 = h⁻¹(y).\n\nPour revenir en arrière, on inverse l'ordre des opérations."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f : [2 ; +∞[ → [0 ; +∞[ définie par f(x) = (x - 2)².\n\n1. Montre que f est injective.\n2. Montre que f est surjective.\n3. Détermine sa réciproque, en précisant son départ et son arrivée.\n4. Vérifie les deux compositions avec f et f⁻¹.",
        correction: "1. Si f(x) = f(x'), alors (x - 2)² = (x' - 2)². Comme x et x' sont au moins égaux à 2, les nombres x - 2 et x' - 2 sont positifs ou nuls. L'égalité de leurs carrés donne x - 2 = x' - 2, donc x = x'. f est injective.\n\n2. Soit y ≥ 0. Le nombre x = 2 + √y appartient à [2 ; +∞[ et f(x) = (√y)² = y. f est surjective.\n\n3. f est donc bijective. Sa réciproque est f⁻¹ : [0 ; +∞[ → [2 ; +∞[, définie par f⁻¹(y) = 2 + √y.\n\n4. Pour x ≥ 2 : f⁻¹(f(x)) = 2 + √((x - 2)²) = 2 + |x - 2| = x.\n\nPour y ≥ 0 : f(f⁻¹(y)) = (2 + √y - 2)² = y."
      }
    ]
  }
]);
