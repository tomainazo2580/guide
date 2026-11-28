enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch27",
    titre: "Chapitre 27 : Transformations de l’espace",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch27-l1",
        titre: "Leçon 1 : Comprendre une transformation de l’espace",
        blocs: [
          {
            type: "introduction",
            titre: "D’un point à son image",
            texte: "Une transformation de l’espace associe à chaque point M un point M', appelé son image. Pour la décrire, on peut utiliser une construction géométrique, une relation vectorielle ou des coordonnées.\n\nCe chapitre étudie les translations, les symétries, les homothéties et quelques rotations de l’espace."
          },
          {
            type: "definition",
            titre: "Points fixes et conservation des distances",
            texte: "Un point M est fixe si son image est lui-même : M' = M.\n\nUne isométrie est une transformation qui conserve les distances : pour tous points A et B, A'B' = AB. Elle conserve notamment l’alignement, les angles et les formes des figures."
          },
          {
            type: "tableau",
            titre: "Premiers repères",
            entetes: ["Transformation", "Points fixes", "Effet sur les distances"],
            lignes: [
              ["Translation de vecteur non nul", "Aucun", "Distances conservées"],
              ["Symétrie centrale de centre Ω", "Ω seulement", "Distances conservées"],
              ["Symétrie par rapport à un plan", "Tous les points du plan", "Distances conservées"],
              ["Homothétie de centre Ω et de rapport k ≠ 0", "Ω seulement si k ≠ 1", "Distances multipliées par |k|"]
            ]
          },
          {
            type: "remarque",
            titre: "Le cas de l’identité",
            texte: "L’identité laisse tous les points fixes. C’est à la fois la translation de vecteur nul et l’homothétie de rapport 1."
          }
        ]
      },

      {
        id: "tle-maths-ch27-l2",
        titre: "Leçon 2 : Translations et symétries",
        blocs: [
          {
            type: "definition",
            titre: "Translation",
            texte: "La translation de vecteur u envoie M sur M' tel que MM' = u.\n\nSi u = (a ; b ; c), alors dans le repère :\nx' = x + a ; y' = y + b ; z' = z + c.\n\nLa translation conserve les distances et les directions."
          },
          {
            type: "definition",
            titre: "Symétrie centrale",
            texte: "La symétrie de centre Ω envoie M sur M' tel que Ω est le milieu de [MM']. Elle est aussi l’homothétie de centre Ω et de rapport −1.\n\nSi Ω(a ; b ; c), alors :\nx' = 2a − x ; y' = 2b − y ; z' = 2c − z."
          },
          {
            type: "definition",
            titre: "Symétrie par rapport à un plan",
            texte: "La symétrie orthogonale par rapport à un plan P envoie M sur M' de sorte que P est le plan médiateur de [MM'] lorsque M n’appartient pas à P. Si M appartient à P, alors M' = M.\n\nAutrement dit, si H est le projeté orthogonal de M sur P, alors H est le milieu de [MM']."
          },
          {
            type: "schema",
            titre: "Symétrie par rapport à un plan",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 220'><path d='M45 125 L220 125 L310 80 L135 80 Z' fill='#dbeafe' stroke='#60a5fa' stroke-width='2'/><line x1='175' y1='35' x2='175' y2='195' stroke='#475569' stroke-width='2' stroke-dasharray='5 4'/><circle cx='175' cy='45' r='4' fill='#2563eb'/><circle cx='175' cy='105' r='4' fill='#334155'/><circle cx='175' cy='165' r='4' fill='#dc2626'/><text x='184' y='49' font-size='14'>M</text><text x='184' y='109' font-size='14'>H</text><text x='184' y='169' font-size='14'>M'</text><text x='260' y='103' font-size='14'>P</text><text x='190' y='205' font-size='12'>MH = HM'</text></svg>",
            legende: "H est le milieu de [MM'] et la droite (MM') est perpendiculaire au plan P."
          },
          {
            type: "exemple",
            titre: "Symétrie par rapport au plan z = 0",
            texte: "Dans un repère orthonormé, le plan z = 0 est le plan (Oxy). La symétrie orthogonale par rapport à ce plan transforme M(x ; y ; z) en M'(x ; y ; −z).\n\nPar exemple, l’image de A(2 ; −1 ; 3) est A'(2 ; −1 ; −3)."
          },
          {
            type: "definition",
            titre: "Symétrie par rapport à une droite",
            texte: "La symétrie orthogonale d’axe D dans l’espace est le demi-tour autour de D. Chaque point de D est fixe. Pour un point M hors de D, son image M' est telle que D passe par le milieu de [MM'] et lui est perpendiculaire.\n\nDans un repère orthonormé, la symétrie d’axe (Oz) envoie (x ; y ; z) sur (−x ; −y ; z)."
          }
        ]
      },

      {
        id: "tle-maths-ch27-l3",
        titre: "Leçon 3 : Homothéties et rotations",
        blocs: [
          {
            type: "definition",
            titre: "Homothétie de l’espace",
            texte: "L’homothétie de centre Ω et de rapport réel k non nul envoie M sur M' tel que :\n\nΩM' = k ΩM.\n\nSi Ω(a ; b ; c), alors :\nx' = a + k(x − a) ; y' = b + k(y − b) ; z' = c + k(z − c).\n\nLes distances sont multipliées par |k|, les aires par k² et les volumes par |k|³."
          },
          {
            type: "exemple",
            titre: "Calculer une image",
            texte: "Soit l’homothétie de centre Ω(1 ; 0 ; 2) et de rapport −2. Pour M(3 ; 1 ; 2), on a ΩM = (2 ; 1 ; 0).\n\nDonc ΩM' = −2ΩM = (−4 ; −2 ; 0), d’où M'(−3 ; −2 ; 2).\n\nLe rapport négatif place M et M' de part et d’autre de Ω."
          },
          {
            type: "definition",
            titre: "Rotation autour d’un axe",
            texte: "Une rotation de l’espace est définie par un axe orienté et un angle θ. Elle laisse fixes les points de son axe et agit dans chaque plan perpendiculaire à cet axe comme une rotation plane de même angle.\n\nDans un repère orthonormé direct, pour l’axe (Oz) orienté par k et l’angle θ :\nx' = x cos θ − y sin θ ;\ny' = x sin θ + y cos θ ;\nz' = z."
          },
          {
            type: "exemple",
            titre: "Quart de tour autour de (Oz)",
            texte: "Pour θ = π/2, cos θ = 0 et sin θ = 1. Les formules deviennent :\n\nx' = −y ; y' = x ; z' = z.\n\nAinsi, A(2 ; 1 ; 3) a pour image A'(−1 ; 2 ; 3). La coordonnée z reste inchangée."
          },
          {
            type: "remarque",
            titre: "Orientation de l’axe",
            texte: "Le signe de l’angle dépend de l’orientation choisie pour l’axe. Inverser cette orientation revient à changer θ en −θ pour décrire la même rotation."
          }
        ]
      },

      {
        id: "tle-maths-ch27-l4",
        titre: "Leçon 4 : Méthodes et compositions",
        blocs: [
          {
            type: "methode",
            titre: "Étudier une transformation donnée par ses coordonnées",
            texte: "1. Calculer l’image d’un point général M(x ; y ; z).\n2. Comparer les formules à celles d’une translation, d’une symétrie, d’une homothétie ou d’une rotation connue.\n3. Chercher les points fixes en résolvant x' = x, y' = y et z' = z.\n4. Justifier la nature de la transformation avec les formules et préciser ses éléments caractéristiques."
          },
          {
            type: "methode",
            titre: "Composer deux transformations",
            texte: "Pour calculer T₂ ∘ T₁, on applique d’abord T₁, puis T₂ à l’image obtenue. L’ordre est important : T₂ ∘ T₁ et T₁ ∘ T₂ ne sont pas toujours égales."
          },
          {
            type: "exemple",
            titre: "Deux translations",
            texte: "Soit T₁ la translation de vecteur u = (1 ; 0 ; 2) et T₂ celle de vecteur v = (0 ; −3 ; 1).\n\nLa composée T₂ ∘ T₁ est la translation de vecteur u + v = (1 ; −3 ; 3). Pour M(x ; y ; z), son image est (x + 1 ; y − 3 ; z + 3)."
          },
          {
            type: "exemple",
            titre: "Deux symétries centrales",
            texte: "Soient S_A et S_B les symétries centrales de centres A et B. Pour tout point M, si N = S_A(M) et M' = S_B(N), alors :\n\nOM' = 2OB − ON = 2OB − (2OA − OM) = OM + 2AB.\n\nLa composée S_B ∘ S_A est donc la translation de vecteur 2AB. Si A = B, cette translation est l’identité."
          },
          {
            type: "remarque",
            titre: "Distinguer les symétries",
            texte: "Dans l’espace, une symétrie centrale, une symétrie par rapport à un plan et une symétrie d’axe ont des ensembles de points fixes différents. Il faut préciser leur centre, leur plan ou leur axe."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "La translation de vecteur u = (2 ; −1 ; 3) transforme A(1 ; 4 ; 0) en A'. Calculer les coordonnées de A'.",
        correction: "On ajoute les coordonnées de u à celles de A : A'(1 + 2 ; 4 − 1 ; 0 + 3), soit A'(3 ; 3 ; 3)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle est l’image de M(2 ; −3 ; 5) par la symétrie par rapport au plan z = 0, dans un repère orthonormé ?",
        correction: "La symétrie par rapport au plan z = 0 conserve x et y et change le signe de z. L’image est M'(2 ; −3 ; −5)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Déterminer l’image de M(1 ; 2 ; 3) par la symétrie centrale de centre O, origine du repère.",
        correction: "La symétrie centrale de centre O change le signe des trois coordonnées. L’image est M'(−1 ; −2 ; −3)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une homothétie de rapport −3 transforme un segment de longueur 4 cm. Quelle est la longueur de son image ?",
        correction: "Les longueurs sont multipliées par la valeur absolue du rapport. La longueur cherchée est |−3| × 4 = 12 cm."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans un repère orthonormé, donner l’image de A(2 ; −1 ; 4) par la symétrie d’axe (Oz).",
        correction: "La symétrie d’axe (Oz) envoie (x ; y ; z) sur (−x ; −y ; z). L’image est A'(−2 ; 1 ; 4)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer l’image de M(4 ; 0 ; −1) par la symétrie centrale de centre Ω(1 ; 2 ; 1).",
        correction: "L’image M' vérifie M' = 2Ω − M en coordonnées. Ainsi M'(2 − 4 ; 4 − 0 ; 2 − (−1)), soit M'(−2 ; 4 ; 3). Ω est bien le milieu de [MM']."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On considère l’homothétie de centre Ω(1 ; 1 ; 1) et de rapport 2. Déterminer l’image de A(2 ; −1 ; 3).",
        correction: "ΩA = (1 ; −2 ; 2). L’image A' vérifie ΩA' = 2ΩA = (2 ; −4 ; 4). En ajoutant les coordonnées de Ω, on obtient A'(3 ; −3 ; 5)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère orthonormé direct, déterminer l’image de M(1 ; 2 ; 4) par la rotation d’axe (Oz), orienté par k, et d’angle π/2.",
        correction: "Pour cet angle, x' = −y, y' = x et z' = z. Donc M'(−2 ; 1 ; 4)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les points fixes de la transformation T définie par (x' ; y' ; z') = (x ; y ; −z). Identifier T dans un repère orthonormé.",
        correction: "Un point fixe vérifie z = −z, donc z = 0 ; x et y sont quelconques. L’ensemble des points fixes est le plan z = 0. Les formules montrent que T est la symétrie orthogonale par rapport à ce plan."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une homothétie de rapport 2 transforme un solide de volume 7 cm³ et une face d’aire 3 cm². Calculer le volume et l’aire des images.",
        correction: "Les volumes sont multipliés par |2|³ = 8 : le volume image vaut 56 cm³. Les aires sont multipliées par 2² = 4 : l’aire image vaut 12 cm²."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer la composée de la translation de vecteur u = (1 ; 2 ; 0) suivie de celle de vecteur v = (−1 ; 0 ; 3).",
        correction: "La composée est la translation de vecteur u + v = (0 ; 2 ; 3). Elle envoie donc (x ; y ; z) sur (x ; y + 2 ; z + 3)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère orthonormé, trouver l’image de M(3 ; 2 ; 1) par la symétrie orthogonale par rapport au plan x = 1.",
        correction: "Le projeté orthogonal de M sur le plan x = 1 est H(1 ; 2 ; 1). H doit être le milieu de [MM']. Donc x' = 2 × 1 − 3 = −1, tandis que y' = 2 et z' = 1. L’image est M'(−1 ; 2 ; 1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soient A(1 ; 0 ; 0) et B(0 ; 2 ; 1). On applique la symétrie centrale de centre A puis celle de centre B. Identifier la transformation obtenue et donner l’image de O.",
        correction: "La composée est la translation de vecteur 2AB. Or AB = (−1 ; 2 ; 1), donc 2AB = (−2 ; 4 ; 2). L’image de O est le point de coordonnées (−2 ; 4 ; 2)."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Dans un repère orthonormé direct, R est la rotation d’axe (Oz), orienté par k, et d’angle π/2. T est la translation de vecteur (0 ; 0 ; 2). 1. Calculer l’image de M(x ; y ; z) par T ∘ R. 2. Déterminer les points fixes de T ∘ R. 3. Cette composée conserve-t-elle les distances ?",
        correction: "1. R transforme M en (−y ; x ; z). Puis T donne M'(−y ; x ; z + 2).\n2. Un point fixe devrait notamment vérifier z + 2 = z, ce qui est impossible. La composée n’a donc aucun point fixe.\n3. Oui. R et T sont des isométries : chacune conserve les distances, donc leur composée les conserve aussi."
      }
    ]
  }
]);
