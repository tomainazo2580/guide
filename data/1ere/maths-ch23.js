enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-barycentres",
    titre: "Chapitre 23 : Barycentres et applications",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch23-deux-points",
        titre: "1. Barycentre de deux points pondérés",
        blocs: [
          {
            type: "introduction",
            titre: "Associer un point à des coefficients",
            texte: "Un système de points pondérés est formé de points auxquels on associe des nombres réels appelés coefficients ou poids. Leur barycentre est un point qui équilibre une somme de vecteurs. Les coefficients peuvent être positifs, négatifs ou nuls."
          },
          {
            type: "definition",
            titre: "Barycentre de deux points",
            texte: "Soient A et B deux points, et a et b deux réels tels que a + b ≠ 0. Le barycentre de (A ; a) et (B ; b) est l'unique point G tel que aGA⃗ + bGB⃗ = 0⃗."
          },
          {
            type: "regle",
            titre: "Construire G sur la droite (AB)",
            texte: "Si A et B sont distincts et a + b ≠ 0, alors AG⃗ = b/(a + b) AB⃗. Ainsi G appartient à la droite (AB). Le coefficient peut placer G entre A et B ou à l'extérieur du segment [AB]."
          },
          {
            type: "methode",
            titre: "Justifier la formule",
            texte: "Par la relation de Chasles, GB⃗ = GA⃗ + AB⃗. En remplaçant dans aGA⃗ + bGB⃗ = 0⃗, on obtient (a + b)GA⃗ + bAB⃗ = 0⃗, puis AG⃗ = b/(a + b) AB⃗."
          },
          {
            type: "schema",
            titre: "Barycentre de (A ; 1) et (B ; 2)",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 150' role='img' aria-label='Sur le segment AB, le barycentre G de A coefficient 1 et B coefficient 2 est placé aux deux tiers du trajet de A vers B.'><rect width='420' height='150' fill='white'/><line x1='60' y1='75' x2='360' y2='75' stroke='#333' stroke-width='2'/><line x1='60' y1='75' x2='260' y2='75' stroke='#1769aa' stroke-width='4'/><circle cx='60' cy='75' r='4' fill='#333'/><circle cx='260' cy='75' r='4' fill='#1769aa'/><circle cx='360' cy='75' r='4' fill='#333'/><text x='52' y='100' font-size='15'>A</text><text x='253' y='100' font-size='15' fill='#1769aa'>G</text><text x='354' y='100' font-size='15'>B</text><text x='82' y='55' font-size='14'>AG = 2/3 AB</text><text x='265' y='120' font-size='13'>GB = 1/3 AB</text></svg>",
            legende: "G est plus proche du point B, dont le coefficient est le plus grand. Ici AG⃗ = 2/3 AB⃗."
          },
          {
            type: "exemple",
            titre: "Un barycentre à l'extérieur du segment",
            texte: "Si G est le barycentre de (A ; 2) et (B ; −1), alors AG⃗ = −AB⃗. Ainsi A est le milieu de [GB] et G se trouve de l'autre côté de A par rapport à B."
          },
          {
            type: "regle",
            titre: "Cas du milieu",
            texte: "Si I est le milieu de [AB], alors IA⃗ + IB⃗ = 0⃗. I est donc le barycentre de (A ; 1) et (B ; 1), ou de deux coefficients égaux non nuls."
          },
          {
            type: "remarque",
            titre: "Somme des coefficients nulle",
            texte: "La définition du barycentre exige a + b ≠ 0. Si A et B sont distincts et si a + b = 0 avec a ≠ 0, aucun point G ne vérifie l'équation. Si tous les coefficients sont nuls, l'équation est vérifiée par tout point : elle ne définit pas un point unique."
          }
        ]
      },
      {
        id: "m1-ch23-plusieurs-points",
        titre: "2. Barycentre de plusieurs points",
        blocs: [
          {
            type: "definition",
            titre: "Définition générale",
            texte: "Soient A₁, …, Aₙ des points et a₁, …, aₙ des réels dont la somme S est non nulle. Leur barycentre est l'unique point G tel que a₁GA₁⃗ + … + aₙGAₙ⃗ = 0⃗. Cette définition s'applique notamment à trois ou quatre points pondérés."
          },
          {
            type: "regle",
            titre: "Formule avec un point quelconque",
            texte: "Si G est le barycentre des points (Aᵢ ; aᵢ) et si S = a₁ + … + aₙ ≠ 0, alors, pour tout point M : a₁MA₁⃗ + … + aₙMAₙ⃗ = S MG⃗. En prenant M = O, on obtient OG⃗ = (a₁OA₁⃗ + … + aₙOAₙ⃗)/S."
          },
          {
            type: "methode",
            titre: "Coordonnées du barycentre",
            texte: "Dans un repère, si Aᵢ a pour coordonnées (xᵢ ; yᵢ), alors G a pour coordonnées xG = (a₁x₁ + … + aₙxₙ)/S et yG = (a₁y₁ + … + aₙyₙ)/S. Vérifier d'abord que S ≠ 0."
          },
          {
            type: "exemple",
            titre: "Trois points pondérés",
            texte: "Soient A(0 ; 0), B(3 ; 0), C(0 ; 6), de coefficients respectifs 1, 2 et 1. Leur somme vaut 4. Le barycentre G a pour coordonnées ((1 × 0 + 2 × 3 + 1 × 0)/4 ; (1 × 0 + 2 × 0 + 1 × 6)/4), soit G(3/2 ; 3/2)."
          },
          {
            type: "regle",
            titre: "Multiplier les coefficients",
            texte: "Multiplier tous les coefficients par un même réel non nul ne change pas le barycentre. Par exemple, les systèmes (A ; 1), (B ; 2) et (A ; 3), (B ; 6) ont le même barycentre."
          },
          {
            type: "regle",
            titre: "Regroupement des points",
            texte: "On peut remplacer plusieurs points pondérés par leur barycentre partiel, affecté de la somme de leurs coefficients, à condition que cette somme soit non nulle. Le barycentre du système obtenu est alors le même que celui du système initial, lorsque la somme totale est non nulle."
          },
          {
            type: "exemple",
            titre: "Regroupement de quatre points",
            texte: "Soit G le barycentre de (A ; 1), (B ; 1), (C ; 2), (D ; 2). Si I est le milieu de [AB] et J celui de [CD], on peut remplacer A et B par (I ; 2), puis C et D par (J ; 4). Ainsi G est le barycentre de (I ; 2) et (J ; 4), donc IG⃗ = 2/3 IJ⃗."
          },
          {
            type: "schema",
            titre: "Barycentre de trois points de même coefficient",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 250' role='img' aria-label='Triangle ABC : la médiane issue de A passe par le milieu I de BC et par le barycentre G des trois sommets de même coefficient.'><rect width='420' height='250' fill='white'/><polygon points='70,200 350,200 190,20' fill='none' stroke='#333' stroke-width='2'/><line x1='70' y1='200' x2='270' y2='110' stroke='#1769aa' stroke-width='2'/><circle cx='70' cy='200' r='4' fill='#333'/><circle cx='350' cy='200' r='4' fill='#333'/><circle cx='190' cy='20' r='4' fill='#333'/><circle cx='270' cy='110' r='4' fill='#333'/><circle cx='203.33' cy='140' r='4' fill='#c43b35'/><text x='53' y='219' font-size='14'>A</text><text x='352' y='219' font-size='14'>B</text><text x='185' y='16' font-size='14'>C</text><text x='276' y='111' font-size='14'>I</text><text x='205' y='158' font-size='14' fill='#c43b35'>G</text></svg>",
            legende: "I est le milieu de [BC]. En regroupant (B ; 1) et (C ; 1) en (I ; 2), on obtient AG⃗ = 2/3 AI⃗. De même, G appartient aux deux autres médianes."
          },
          {
            type: "regle",
            titre: "Centre de gravité d'un triangle",
            texte: "Le barycentre des trois sommets d'un triangle affectés de coefficients égaux non nuls est le point d'intersection des médianes. Il se situe aux deux tiers de chaque médiane à partir du sommet."
          }
        ]
      },
      {
        id: "m1-ch23-applications",
        titre: "3. Applications aux calculs et aux lieux",
        blocs: [
          {
            type: "methode",
            titre: "Simplifier une somme de vecteurs",
            texte: "Reconnaître les coefficients et leur somme S. Si S ≠ 0, introduire le barycentre G correspondant, puis remplacer la somme par S MG⃗. Cela permet souvent de transformer une condition sur des vecteurs en condition de distance."
          },
          {
            type: "exemple",
            titre: "Un lieu circulaire",
            texte: "Soit G le barycentre de (A ; 1) et (B ; 2). La relation MA⃗ + 2MB⃗ = 3MG⃗ donne ||MA⃗ + 2MB⃗|| = 6 si et seulement si 3MG = 6, donc MG = 2. Le lieu est le cercle de centre G et de rayon 2."
          },
          {
            type: "exemple",
            titre: "Une condition vectorielle",
            texte: "Si G est le barycentre de (A ; 1), (B ; 2) et (C ; −1), la somme des coefficients vaut 2. Pour tout point M : MA⃗ + 2MB⃗ − MC⃗ = 2MG⃗. Cette somme est nulle si et seulement si M = G."
          },
          {
            type: "remarque",
            titre: "Que se passe-t-il si la somme vaut zéro ?",
            texte: "La formule du barycentre ne s'applique pas directement. Par exemple, pour tous points A, B et M : MA⃗ − MB⃗ = BA⃗, une somme indépendante de M. Il faut alors étudier la condition sans introduire de barycentre pour ce système."
          },
          {
            type: "methode",
            titre: "Déterminer un lieu",
            texte: "Après simplification, traduire la condition en distance ou en équation connue. Préciser l'ensemble obtenu : cercle, point, ensemble vide ou autre. Vérifier que les transformations sont réversibles."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "A et B sont deux points distincts. Soit G le barycentre de (A ; 3) et (B ; 3). Identifier G.",
        correction: "Les coefficients sont égaux et non nuls. G est donc le milieu du segment [AB]."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "A et B sont deux points distincts. Soit G le barycentre de (A ; 1) et (B ; 3). Exprimer AG⃗ en fonction de AB⃗.",
        correction: "La somme des coefficients vaut 4. Donc AG⃗ = 3/(1 + 3) AB⃗ = 3/4 AB⃗. G appartient au segment [AB]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans un repère, A(1 ; 2) et B(5 ; 6). Calculer les coordonnées du barycentre G de (A ; 1) et (B ; 3).",
        correction: "La somme des coefficients vaut 4. Ainsi xG = (1 + 3 × 5)/4 = 4 et yG = (2 + 3 × 6)/4 = 5. Donc G(4 ; 5)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "A et B sont distincts. Construire le barycentre G de (A ; 3) et (B ; −1), puis situer G par rapport au segment [AB].",
        correction: "La somme des coefficients vaut 2 et AG⃗ = −1/2 AB⃗. Sur la droite (AB), on place G de l'autre côté de A par rapport à B, avec AG = AB/2. G est à l'extérieur du segment [AB]."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un repère, A(0 ; 0), B(4 ; 0) et C(0 ; 6). Calculer les coordonnées du barycentre G de (A ; 2), (B ; 1) et (C ; 1). Montrer que G est le milieu de [AI], où I est le milieu de [BC].",
        correction: "La somme des coefficients vaut 4. Ainsi G((2 × 0 + 4 + 0)/4 ; (2 × 0 + 0 + 6)/4) = G(1 ; 3/2). Le milieu de [BC] est I(2 ; 3). Le milieu de [AI] est donc (1 ; 3/2), qui est bien G. On pouvait aussi regrouper (B ; 1) et (C ; 1) en (I ; 2), puis constater que G est le barycentre de (A ; 2) et (I ; 2)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "A et B sont distincts. Soit G le barycentre de (A ; 1) et (B ; 2). Déterminer le lieu des points M tels que ||MA⃗ + 2MB⃗|| = 9.",
        correction: "Pour tout M, MA⃗ + 2MB⃗ = 3MG⃗. La condition équivaut à 3MG = 9, donc MG = 3. Le lieu est le cercle de centre G et de rayon 3. Pour construire son centre, on place G sur [AB] avec AG = 2AB/3."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère, A(0 ; 0), B(4 ; 0), C(0 ; 4) et D(4 ; 4). Soit G le barycentre de (A ; 1), (B ; 1), (C ; 2) et (D ; 2). Calculer G, puis vérifier le résultat en regroupant A avec B et C avec D.",
        correction: "La somme des coefficients vaut 6. Donc xG = (0 + 4 + 0 + 8)/6 = 2 et yG = (0 + 0 + 8 + 8)/6 = 8/3. Ainsi G(2 ; 8/3). Le milieu de [AB] est I(2 ; 0) et celui de [CD] est J(2 ; 4). Le regroupement donne G barycentre de (I ; 2) et (J ; 4). Ainsi IG⃗ = 4/6 IJ⃗ = 2/3 IJ⃗, d'où G(2 ; 8/3)."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un repère orthonormé, A(0 ; 0) et B(3 ; 0). Déterminer le lieu des points M tels que ||2MA⃗ − MB⃗|| = 4. Donner le centre et le rayon de ce lieu.",
        correction: "La somme des coefficients 2 et −1 vaut 1. Soit G leur barycentre : AG⃗ = −AB⃗, donc G(−3 ; 0). Pour tout M, 2MA⃗ − MB⃗ = MG⃗. La condition équivaut à MG = 4. Le lieu est le cercle de centre G(−3 ; 0) et de rayon 4."
      }
    ]
  }
]);
