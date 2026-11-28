enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch23",
    titre: "Chapitre 23 : Barycentres",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch23-l1",
        titre: "Leçon 1 : Barycentre de deux points",
        blocs: [
          {
            type: "introduction",
            titre: "Une position pondérée",
            texte: "Le barycentre permet d’associer un point à plusieurs points affectés de coefficients. Lorsque ces coefficients sont positifs, on peut les imaginer comme des masses placées aux points considérés."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "Soient A et B deux points et α, β deux réels tels que α + β ≠ 0. Le barycentre de (A, α) et (B, β) est l’unique point G vérifiant :\n\nα GA + β GB = 0,\n\nles lettres GA et GB désignant ici des vecteurs."
          },
          {
            type: "methode",
            titre: "Placer le barycentre",
            texte: "La relation de Chasles donne GB = GA + AB. En remplaçant dans la définition, on obtient :\n\nAG = [β/(α + β)] AB,\n\navec des vecteurs. Cette relation permet de placer G sur la droite (AB)."
          },
          {
            type: "exemple",
            titre: "Deux coefficients positifs",
            texte: "Si G est le barycentre de (A, 1) et (B, 3), alors :\nAG = (3/4) AB.\n\nG est situé sur [AB], aux trois quarts du chemin de A vers B. Il est donc plus proche de B, qui porte le coefficient le plus grand."
          },
          {
            type: "schema",
            titre: "Barycentre de (A, 1) et (B, 3)",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 120'><rect width='320' height='120' fill='white'/><line x1='40' y1='60' x2='280' y2='60' stroke='#333' stroke-width='3'/><circle cx='40' cy='60' r='5' fill='#1769aa'/><circle cx='220' cy='60' r='5' fill='#c62828'/><circle cx='280' cy='60' r='5' fill='#1769aa'/><text x='32' y='85' font-size='15'>A</text><text x='215' y='85' font-size='15'>G</text><text x='275' y='85' font-size='15'>B</text><text x='105' y='46' font-size='13'>AG = 3/4 AB</text></svg>",
            legende: "G se trouve aux trois quarts du segment de A vers B."
          },
          {
            type: "exemple",
            titre: "Un coefficient négatif",
            texte: "Si G est le barycentre de (A, 2) et (B, −1), alors α + β = 1 et AG = −AB.\n\nG est sur la droite (AB), de l’autre côté de A par rapport à B, avec AG = AB en longueurs."
          },
          {
            type: "remarque",
            titre: "Somme nulle",
            texte: "La définition usuelle exige α + β ≠ 0. Si la somme est nulle, on ne peut pas appliquer les formules de ce chapitre."
          }
        ]
      },

      {
        id: "tle-maths-ch23-l2",
        titre: "Leçon 2 : Propriétés et calculs de coordonnées",
        blocs: [
          {
            type: "definition",
            titre: "Relation avec un point quelconque",
            texte: "Si G est le barycentre de (A, α) et (B, β), alors pour tout point M :\n\nα MA + β MB = (α + β) MG,\n\nces écritures désignant des vecteurs."
          },
          {
            type: "methode",
            titre: "Calculer les coordonnées",
            texte: "Si A(xA ; yA) et B(xB ; yB), alors le barycentre G de (A, α) et (B, β), avec α + β ≠ 0, a pour coordonnées :\n\nxG = (αxA + βxB)/(α + β) ;\nyG = (αyA + βyB)/(α + β)."
          },
          {
            type: "exemple",
            titre: "Un calcul de coordonnées",
            texte: "Soient A(0 ; 2) et B(4 ; 6). Pour le barycentre G de (A, 1) et (B, 3) :\n\nxG = (1 × 0 + 3 × 4)/4 = 3 ;\nyG = (1 × 2 + 3 × 6)/4 = 5.\n\nDonc G(3 ; 5)."
          },
          {
            type: "definition",
            titre: "Homogénéité",
            texte: "Multiplier tous les coefficients par un même réel non nul ne change pas le barycentre.\n\nPar exemple, le barycentre de (A, 1) et (B, 3) est aussi celui de (A, 2) et (B, 6)."
          },
          {
            type: "exemple",
            titre: "Le milieu",
            texte: "Le barycentre de (A, 1) et (B, 1) est le milieu de [AB], car AG = (1/2) AB."
          }
        ]
      },

      {
        id: "tle-maths-ch23-l3",
        titre: "Leçon 3 : Barycentre de plusieurs points",
        blocs: [
          {
            type: "definition",
            titre: "Définition générale",
            texte: "Soient A₁, ..., Aₙ des points affectés de coefficients α₁, ..., αₙ. Si la somme S = α₁ + ... + αₙ est non nulle, leur barycentre G est l’unique point vérifiant :\n\nα₁GA₁ + ... + αₙGAₙ = 0,\n\navec des vecteurs."
          },
          {
            type: "methode",
            titre: "Coordonnées de plusieurs points",
            texte: "Si les points ont pour coordonnées (xᵢ ; yᵢ), alors :\n\nxG = (α₁x₁ + ... + αₙxₙ)/S ;\nyG = (α₁y₁ + ... + αₙyₙ)/S.\n\nOn commence toujours par vérifier que S ≠ 0."
          },
          {
            type: "exemple",
            titre: "Trois points",
            texte: "Soient A(0 ; 0), B(4 ; 0) et C(0 ; 3). On cherche le barycentre G de (A, 1), (B, 1) et (C, 2).\n\nLa somme des coefficients est 4.\nxG = (0 + 4 + 0)/4 = 1 ;\nyG = (0 + 0 + 6)/4 = 3/2.\n\nDonc G(1 ; 3/2)."
          },
          {
            type: "definition",
            titre: "Associativité",
            texte: "Si H est le barycentre de (A, α) et (B, β), avec α + β ≠ 0, on peut remplacer ces deux points pondérés par (H, α + β) pour calculer le barycentre avec d’autres points, à condition que la somme totale des coefficients soit non nulle."
          },
          {
            type: "exemple",
            titre: "Regrouper deux points",
            texte: "Le barycentre de (A, 1), (B, 1) et (C, 2) peut être obtenu en prenant d’abord H, milieu de [AB], puis G barycentre de (H, 2) et (C, 2).\n\nAinsi G est le milieu de [HC]."
          },
          {
            type: "remarque",
            titre: "Centre de gravité d’un triangle",
            texte: "Le barycentre de (A, 1), (B, 1) et (C, 1) est le centre de gravité du triangle ABC. Il se situe à l’intersection des médianes, aux deux tiers de chaque médiane à partir du sommet."
          }
        ]
      },

      {
        id: "tle-maths-ch23-l4",
        titre: "Leçon 4 : Utiliser les barycentres en géométrie",
        blocs: [
          {
            type: "methode",
            titre: "Simplifier une somme de vecteurs",
            texte: "Si G est le barycentre de points Aᵢ affectés de coefficients αᵢ, de somme S non nulle, alors pour tout point M :\n\nα₁MA₁ + ... + αₙMAₙ = S MG.\n\nCette relation permet de remplacer une somme de vecteurs par un seul vecteur."
          },
          {
            type: "exemple",
            titre: "Une distance",
            texte: "Soit G le barycentre de (A, 1) et (B, 2). Pour tout point M :\nMA + 2MB = 3MG, en vecteurs.\n\nAinsi la norme de MA + 2MB vaut 3 × MG. L’ensemble des points M vérifiant ||MA + 2MB|| = 6 est donc le cercle de centre G et de rayon 2."
          },
          {
            type: "methode",
            titre: "Prouver un alignement",
            texte: "Pour montrer que trois points A, B et G sont alignés, on peut établir une relation AG = k AB entre les vecteurs AG et AB, où k est un réel."
          },
          {
            type: "exemple",
            titre: "Barycentre et alignement",
            texte: "Si G est le barycentre de (A, 2) et (B, 1), alors AG = (1/3) AB. Les vecteurs AG et AB sont colinéaires, donc A, G et B sont alignés."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quel est le barycentre de (A, 1) et (B, 1) ?",
        correction: "C’est le milieu de [AB], car AG = (1/2) AB en vecteurs."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Le barycentre de (A, 2) et (B, −2) est-il défini par la formule usuelle ?",
        correction: "Non. La somme des coefficients est 2 − 2 = 0. La définition usuelle du barycentre ne s’applique pas."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Si G est le barycentre de (A, 1) et (B, 2), exprimer le vecteur AG en fonction du vecteur AB.",
        correction: "AG = [2/(1 + 2)] AB = (2/3) AB."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soient A(0 ; 0) et B(6 ; 3). Déterminer les coordonnées du barycentre de (A, 1) et (B, 2).",
        correction: "La somme des coefficients vaut 3.\nxG = (0 + 2 × 6)/3 = 4 ; yG = (0 + 2 × 3)/3 = 2.\nDonc G(4 ; 2)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit G barycentre de (A, 3) et (B, 1). Exprimer AG en fonction de AB, en vecteurs.",
        correction: "AG = [1/(3 + 1)] AB = (1/4) AB. G est situé au quart du segment en partant de A."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soient A(2 ; 1) et B(4 ; 5). Déterminer le milieu de [AB] par la formule du barycentre.",
        correction: "Le milieu est le barycentre de (A, 1) et (B, 1).\nSes coordonnées sont ((2 + 4)/2 ; (1 + 5)/2), soit (3 ; 3)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Si G est le barycentre de (A, 1) et (B, 3), quel est le barycentre de (A, 2) et (B, 6) ?",
        correction: "Les coefficients ont tous été multipliés par 2, nombre non nul. Le barycentre ne change pas : c’est G."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit G le barycentre de (A, 2) et (B, 3). Simplifier 2MA + 3MB, en vecteurs.",
        correction: "Par la relation du barycentre, pour tout point M : 2MA + 3MB = (2 + 3)MG = 5MG."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soient A(0 ; 0), B(3 ; 0) et C(0 ; 3). Calculer les coordonnées du barycentre de (A, 1), (B, 1) et (C, 1).",
        correction: "La somme des coefficients vaut 3. Donc xG = (0 + 3 + 0)/3 = 1 et yG = (0 + 0 + 3)/3 = 1.\nLe barycentre est G(1 ; 1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soient A(1 ; 2) et B(4 ; 5). Déterminer le barycentre de (A, 2) et (B, −1).",
        correction: "La somme vaut 1, donc le barycentre existe.\nxG = [2 × 1 − 4]/1 = −2 ; yG = [2 × 2 − 5]/1 = −1.\nAinsi G(−2 ; −1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soient A(0 ; 0), B(6 ; 0) et C(0 ; 4). Déterminer le barycentre de (A, 1), (B, 2) et (C, 1).",
        correction: "La somme des coefficients vaut 4.\nxG = (0 + 2 × 6 + 0)/4 = 3 ; yG = (0 + 0 + 4)/4 = 1.\nDonc G(3 ; 1)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit G le barycentre de (A, 1) et (B, 2). Décrire l’ensemble des points M tels que ||MA + 2MB|| = 9, les sommes étant des sommes de vecteurs.",
        correction: "Pour tout M, MA + 2MB = 3MG en vecteurs. Donc ||MA + 2MB|| = 3MG.\nL’égalité demandée équivaut à MG = 3. L’ensemble est le cercle de centre G et de rayon 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soient A(0 ; 0), B(4 ; 0) et C(0 ; 6). On note H le milieu de [AB]. Déterminer le barycentre G de (A, 1), (B, 1) et (C, 2) en regroupant A et B.",
        correction: "H est le barycentre de (A, 1) et (B, 1), de coefficient total 2. Par associativité, G est le barycentre de (H, 2) et (C, 2) : c’est le milieu de [HC].\n\nH(2 ; 0), donc G((2 + 0)/2 ; (0 + 6)/2) = G(1 ; 3)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans un triangle ABC, I est le milieu de [BC] et G est le barycentre de (A, 1), (B, 1), (C, 1). Exprimer AG en fonction de AI.",
        correction: "I est le barycentre de (B, 1) et (C, 1), de coefficient total 2. Ainsi G est le barycentre de (A, 1) et (I, 2).\n\nDonc AG = (2/3)AI en vecteurs. G est situé aux deux tiers de la médiane depuis A."
      }
    ]
  }
]);
