enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch22",
    titre: "Chapitre 22 : Forme trigonométrique et racines complexes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch22-l1",
        titre: "Leçon 1 : Formes trigonométrique et exponentielle",
        blocs: [
          {
            type: "introduction",
            titre: "Utiliser le module et l’argument",
            texte: "La forme algébrique a + bi facilite les additions. Pour les produits, les puissances et les racines, il est souvent plus pratique d’utiliser le module et un argument."
          },
          {
            type: "definition",
            titre: "Forme trigonométrique",
            texte: "Tout complexe non nul z de module r et d’argument θ s’écrit :\n\nz = r(cos θ + i sin θ), avec r > 0.\n\nLes angles sont exprimés en radians. On peut remplacer θ par θ + 2kπ, où k est un entier."
          },
          {
            type: "exemple",
            titre: "Passer à la forme trigonométrique",
            texte: "Pour z = 1 + i, on a |z| = √2 et un argument est π/4.\n\nDonc z = √2[cos(π/4) + i sin(π/4)]."
          },
          {
            type: "definition",
            titre: "Notation exponentielle complexe",
            texte: "Pour tout réel θ, on note :\n\neⁱᶿ = cos θ + i sin θ.\n\nAinsi, si z est non nul, z = reⁱᶿ. Cette notation vérifie eⁱ⁽ᵅ⁺ᵝ⁾ = eⁱᵅeⁱᵝ."
          },
          {
            type: "exemple",
            titre: "Deux écritures",
            texte: "Le complexe −2i a pour module 2 et pour argument −π/2. Il s’écrit :\n\n−2i = 2[cos(−π/2) + i sin(−π/2)] = 2e⁻ⁱᵖⁱ/²."
          },
          {
            type: "remarque",
            titre: "Le cas de zéro",
            texte: "Le complexe 0 a pour module 0, mais il n’a pas d’argument. On ne lui attribue donc pas de forme trigonométrique avec un argument déterminé."
          }
        ]
      },

      {
        id: "tle-maths-ch22-l2",
        titre: "Leçon 2 : Produits, quotients et formule de Moivre",
        blocs: [
          {
            type: "definition",
            titre: "Produit et quotient",
            texte: "Si z = r(cos α + i sin α) et w = s(cos β + i sin β), avec r > 0 et s > 0 :\n\nzw = rs[cos(α + β) + i sin(α + β)] ;\nz/w = (r/s)[cos(α − β) + i sin(α − β)]."
          },
          {
            type: "exemple",
            titre: "Multiplier deux complexes",
            texte: "Soient z = 2[cos(π/3) + i sin(π/3)] et w = 3[cos(π/6) + i sin(π/6)].\n\nLe produit a pour module 6 et pour argument π/3 + π/6 = π/2.\nDonc zw = 6i."
          },
          {
            type: "definition",
            titre: "Formule de Moivre",
            texte: "Pour tout réel θ et tout entier n :\n\n(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ).\n\nSi z = r(cos θ + i sin θ), avec r > 0, alors :\nzⁿ = rⁿ[cos(nθ) + i sin(nθ)]."
          },
          {
            type: "exemple",
            titre: "Calculer une puissance",
            texte: "Comme 1 + i = √2[cos(π/4) + i sin(π/4)] :\n\n(1 + i)⁶ = (√2)⁶[cos(6π/4) + i sin(6π/4)].\n\nLe module vaut 8 et 6π/4 = 3π/2. Comme cos(3π/2) = 0 et sin(3π/2) = −1, on obtient (1 + i)⁶ = −8i."
          },
          {
            type: "methode",
            titre: "Formules d’Euler",
            texte: "Pour tout réel θ :\n\ncos θ = (eⁱᶿ + e⁻ⁱᶿ)/2 ;\nsin θ = (eⁱᶿ − e⁻ⁱᶿ)/(2i).\n\nCes formules s’obtiennent en additionnant ou en soustrayant eⁱᶿ = cos θ + i sin θ et e⁻ⁱᶿ = cos θ − i sin θ."
          }
        ]
      },

      {
        id: "tle-maths-ch22-l3",
        titre: "Leçon 3 : Racines n-ièmes d’un complexe",
        blocs: [
          {
            type: "definition",
            titre: "Résoudre zⁿ = a",
            texte: "Soit n un entier supérieur ou égal à 1 et a un complexe non nul de module R et d’argument θ.\n\nLes solutions de zⁿ = a sont les n complexes :\n\nzₖ = R^(1/n)[cos((θ + 2kπ)/n) + i sin((θ + 2kπ)/n)],\n\npour k = 0, 1, ..., n − 1.\n\nElles ont toutes pour module R^(1/n)."
          },
          {
            type: "methode",
            titre: "Pourquoi ces angles ?",
            texte: "Si z a pour module r et pour argument φ, alors zⁿ a pour module rⁿ et pour argument nφ.\n\nPour obtenir a, il faut donc rⁿ = R et nφ = θ + 2kπ. Ainsi r = R^(1/n) et φ = (θ + 2kπ)/n.\n\nLes valeurs k = 0 à n − 1 donnent toutes les solutions distinctes."
          },
          {
            type: "exemple",
            titre: "Racines cubiques de 8",
            texte: "Résolvons z³ = 8. Le nombre 8 a pour module 8 et pour argument 0. Les racines ont pour module 2 et pour arguments 0, 2π/3 et 4π/3.\n\nElles sont :\n2 ;\n2[cos(2π/3) + i sin(2π/3)] = −1 + i√3 ;\n2[cos(4π/3) + i sin(4π/3)] = −1 − i√3."
          },
          {
            type: "remarque",
            titre: "Si a = 0",
            texte: "Pour n ≥ 1, l’équation zⁿ = 0 possède une seule solution : z = 0."
          },
          {
            type: "schema",
            titre: "Racines cubiques de l’unité",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 220'><rect width='320' height='220' fill='white'/><line x1='30' y1='110' x2='290' y2='110' stroke='black' stroke-width='2'/><line x1='160' y1='205' x2='160' y2='15' stroke='black' stroke-width='2'/><circle cx='160' cy='110' r='70' fill='none' stroke='#999' stroke-dasharray='5 4'/><path d='M230 110 L125 49.4 L125 170.6 Z' fill='none' stroke='#1769aa' stroke-width='2'/><circle cx='230' cy='110' r='5' fill='#c62828'/><circle cx='125' cy='49.4' r='5' fill='#c62828'/><circle cx='125' cy='170.6' r='5' fill='#c62828'/><text x='236' y='106' font-size='13'>1</text><text x='75' y='44' font-size='13'>e^(2iπ/3)</text><text x='75' y='190' font-size='13'>e^(4iπ/3)</text><text x='165' y='126' font-size='13'>O</text></svg>",
            legende: "Les trois racines cubiques de 1 sont sur le cercle unité et forment un triangle équilatéral."
          }
        ]
      },

      {
        id: "tle-maths-ch22-l4",
        titre: "Leçon 4 : Racines de l’unité et applications",
        blocs: [
          {
            type: "definition",
            titre: "Racines n-ièmes de l’unité",
            texte: "Les solutions de zⁿ = 1 sont :\n\nzₖ = cos(2kπ/n) + i sin(2kπ/n), pour k = 0, 1, ..., n − 1.\n\nElles sont sur le cercle de centre O et de rayon 1, régulièrement espacées."
          },
          {
            type: "exemple",
            titre: "Racines quatrièmes de l’unité",
            texte: "Pour z⁴ = 1, les arguments sont 0, π/2, π et 3π/2.\n\nLes solutions sont donc 1, i, −1 et −i."
          },
          {
            type: "methode",
            titre: "Retrouver des identités trigonométriques",
            texte: "La formule de Moivre peut donner des identités. On développe le membre de gauche, puis on identifie les parties réelle et imaginaire."
          },
          {
            type: "exemple",
            titre: "Formules de l’angle double",
            texte: "D’après Moivre :\n(cos θ + i sin θ)² = cos(2θ) + i sin(2θ).\n\nEn développant le membre de gauche :\ncos²θ − sin²θ + 2i sin θ cos θ.\n\nPar identification :\ncos(2θ) = cos²θ − sin²θ ;\nsin(2θ) = 2 sin θ cos θ."
          },
          {
            type: "methode",
            titre: "Vérifier une racine",
            texte: "Après avoir trouvé une solution proposée de zⁿ = a, on peut calculer sa puissance n-ième à l’aide de sa forme trigonométrique ou de sa forme algébrique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Écrire i sous forme trigonométrique.",
        correction: "Le module de i est 1 et un argument est π/2. Donc i = cos(π/2) + i sin(π/2)."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Écrire 2[cos(π) + i sin(π)] sous forme algébrique.",
        correction: "cos(π) = −1 et sin(π) = 0. Le complexe vaut donc −2."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Donner les solutions de z² = 1.",
        correction: "z² − 1 = (z − 1)(z + 1). Les solutions sont z = 1 et z = −1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Écrire 1 − i sous forme trigonométrique.",
        correction: "Son module est √2 et un argument est −π/4. Donc 1 − i = √2[cos(−π/4) + i sin(−π/4)]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer (cos θ + i sin θ)³.",
        correction: "D’après la formule de Moivre, (cos θ + i sin θ)³ = cos(3θ) + i sin(3θ)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer (1 + i)² puis (1 + i)⁴.",
        correction: "(1 + i)² = 1 + 2i + i² = 2i. Donc (1 + i)⁴ = (2i)² = −4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les racines quatrièmes de 1.",
        correction: "Les arguments sont 0, π/2, π et 3π/2, avec un module égal à 1. Les solutions sont 1, i, −1 et −i."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre z² = −4.",
        correction: "Les solutions sont 2i et −2i, car leur carré vaut −4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer e^(iπ).",
        correction: "e^(iπ) = cos π + i sin π = −1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Calculer (1 + i)⁸.",
        correction: "(1 + i)² = 2i, donc (1 + i)⁴ = −4 et (1 + i)⁸ = (−4)² = 16."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre z³ = 1.",
        correction: "Les racines ont pour module 1 et pour arguments 0, 2π/3 et 4π/3.\nElles sont 1, −1/2 + i√3/2 et −1/2 − i√3/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre z³ = −8.",
        correction: "Le module de −8 est 8 et un argument est π. Les racines ont pour module 2 et pour arguments π/3, π et 5π/3.\n\nElles sont 1 + i√3, −2 et 1 − i√3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer sous forme trigonométrique les racines carrées de i.",
        correction: "i a pour module 1 et pour argument π/2. Les racines ont pour module 1 et pour arguments (π/2)/2 = π/4 et (π/2 + 2π)/2 = 5π/4.\n\nElles sont cos(π/4) + i sin(π/4) et cos(5π/4) + i sin(5π/4)."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "À l’aide de Moivre, exprimer cos(2θ) et sin(2θ) en fonction de cos θ et sin θ.",
        correction: "On développe (cos θ + i sin θ)² : cos²θ − sin²θ + 2i sin θ cos θ.\nD’après Moivre, cette expression est égale à cos(2θ) + i sin(2θ). Par identification :\ncos(2θ) = cos²θ − sin²θ et sin(2θ) = 2 sin θ cos θ."
      }
    ]
  }
]);
