// ===== GUIDE - Sciences physiques 4e (T8) =====
// Chapitre fondé sur le fascicule T8.
// Les explications et les exercices sont complétés par Guide.

enregistrerChapitres("4e", "sp", [
  {
    id: "sp4-ch11",
    titre: "Chapitre 11 : L'alternateur et le transformateur",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp4-ch11-lecon1",
        titre: "Produire une tension avec un alternateur",
        blocs: [
          {
            type: "definition",
            titre: "Alternateur",
            texte: "Un alternateur est un générateur qui transforme une partie de l'énergie mécanique qu'il reçoit en énergie électrique. Il produit une tension alternative."
          },
          {
            type: "texte",
            titre: "Le principe",
            texte: "Dans un modèle simple, un aimant est mis en mouvement à proximité d'une bobine de fil conducteur. Ce mouvement peut faire apparaître une tension aux bornes de la bobine."
          },
          {
            type: "definition",
            titre: "Bobine",
            texte: "Une bobine est constituée d'un fil conducteur enroulé en plusieurs tours. Chaque tour de fil est appelé une spire."
          },
          {
            type: "schema",
            titre: "Un modèle simple d'alternateur",
            svg: "<svg viewBox='0 0 340 170' xmlns='http://www.w3.org/2000/svg'><rect width='340' height='170' fill='#f8fafc'/><rect x='30' y='55' width='50' height='50' fill='#ef4444' stroke='#475569' stroke-width='2'/><rect x='80' y='55' width='50' height='50' fill='#60a5fa' stroke='#475569' stroke-width='2'/><text x='55' y='86' text-anchor='middle' font-size='18' fill='white'>N</text><text x='105' y='86' text-anchor='middle' font-size='18' fill='#0f172a'>S</text><path d='M 40 38 C 58 14, 100 14, 118 38' fill='none' stroke='#334155' stroke-width='2'/><polygon points='118,38 107,35 114,28' fill='#334155'/><g fill='none' stroke='#b45309' stroke-width='3'><ellipse cx='215' cy='80' rx='12' ry='40'/><ellipse cx='225' cy='80' rx='12' ry='40'/><ellipse cx='235' cy='80' rx='12' ry='40'/><ellipse cx='245' cy='80' rx='12' ry='40'/></g><line x1='203' y1='80' x2='185' y2='140' stroke='#b45309' stroke-width='2'/><line x1='257' y1='80' x2='285' y2='140' stroke='#b45309' stroke-width='2'/><text x='80' y='130' text-anchor='middle' font-size='13' fill='#0f172a'>Aimant mobile</text><text x='230' y='155' text-anchor='middle' font-size='13' fill='#0f172a'>Bobine et bornes</text></svg>",
            legende: "Modèle simplifié : le mouvement de l'aimant par rapport à la bobine peut produire une tension variable."
          },
          {
            type: "remarque",
            titre: "Mouvement relatif",
            texte: "Ce qui compte est la variation de l'effet magnétique à travers la bobine. Selon l'appareil, l'aimant ou la bobine peut être mis en mouvement."
          }
        ]
      },
      {
        id: "sp4-ch11-lecon2",
        titre: "L'alternateur dans une chaîne d'énergie",
        blocs: [
          {
            type: "exemple",
            titre: "Une centrale hydroélectrique",
            texte: "Dans une centrale hydroélectrique, l'eau en mouvement entraîne une turbine. La turbine entraîne un alternateur, qui transforme une partie de l'énergie mécanique en énergie électrique."
          },
          {
            type: "schema",
            titre: "Une chaîne simplifiée",
            svg: "<svg viewBox='0 0 360 150' xmlns='http://www.w3.org/2000/svg'><rect width='360' height='150' fill='#f8fafc'/><rect x='8' y='35' width='96' height='55' rx='6' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='56' y='58' text-anchor='middle' font-size='12' fill='#1e3a5f'>Eau en</text><text x='56' y='76' text-anchor='middle' font-size='12' fill='#1e3a5f'>mouvement</text><line x1='105' y1='62' x2='123' y2='62' stroke='#334155' stroke-width='2'/><polygon points='123,62 116,57 116,67' fill='#334155'/><rect x='124' y='35' width='96' height='55' rx='6' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><text x='172' y='58' text-anchor='middle' font-size='12' fill='#78350f'>Turbine +</text><text x='172' y='76' text-anchor='middle' font-size='12' fill='#78350f'>alternateur</text><line x1='221' y1='62' x2='239' y2='62' stroke='#334155' stroke-width='2'/><polygon points='239,62 232,57 232,67' fill='#334155'/><rect x='240' y='35' width='110' height='55' rx='6' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='295' y='58' text-anchor='middle' font-size='12' fill='#14532d'>Énergie</text><text x='295' y='76' text-anchor='middle' font-size='12' fill='#14532d'>électrique</text><text x='180' y='120' text-anchor='middle' font-size='12' fill='#475569'>Une partie de l'énergie est dissipée, notamment en chaleur.</text></svg>",
            legende: "L'alternateur reçoit de l'énergie mécanique et fournit de l'énergie électrique."
          },
          {
            type: "remarque",
            titre: "D'autres mises en mouvement",
            texte: "Une éolienne utilise le mouvement de l'air pour entraîner un dispositif relié à un générateur. Selon l'installation, différentes formes d'énergie peuvent être utilisées pour produire de l'électricité."
          }
        ]
      },
      {
        id: "sp4-ch11-lecon3",
        titre: "Découvrir le transformateur",
        blocs: [
          {
            type: "definition",
            titre: "Transformateur",
            texte: "Un transformateur est un dispositif électrique qui permet de modifier une tension alternative. Il comporte généralement deux bobines et un noyau magnétique."
          },
          {
            type: "definition",
            titre: "Primaire et secondaire",
            texte: "La bobine qui reçoit la tension alternative est appelée primaire. La bobine aux bornes de laquelle on obtient une autre tension est appelée secondaire."
          },
          {
            type: "schema",
            titre: "Transformateur simplifié",
            svg: "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg'><rect width='340' height='180' fill='#f8fafc'/><rect x='110' y='30' width='120' height='115' fill='none' stroke='#475569' stroke-width='18'/><g fill='none' stroke='#d97706' stroke-width='3'><path d='M 98 45 C 75 45, 75 65, 98 65 C 121 65, 121 45, 98 45'/><path d='M 98 70 C 75 70, 75 90, 98 90 C 121 90, 121 70, 98 70'/><path d='M 98 95 C 75 95, 75 115, 98 115 C 121 115, 121 95, 98 95'/><path d='M 242 45 C 219 45, 219 65, 242 65 C 265 65, 265 45, 242 45'/><path d='M 242 70 C 219 70, 219 90, 242 90 C 265 90, 265 70, 242 70'/><path d='M 242 95 C 219 95, 219 115, 242 115 C 265 115, 265 95, 242 95'/></g><text x='60' y='155' text-anchor='middle' font-size='13' fill='#0f172a'>Primaire</text><text x='280' y='155' text-anchor='middle' font-size='13' fill='#0f172a'>Secondaire</text><text x='170' y='174' text-anchor='middle' font-size='12' fill='#475569'>Noyau magnétique</text></svg>",
            legende: "Les deux bobines sont représentées autour d'un noyau magnétique. Ce schéma illustre le principe, pas un montage à réaliser."
          },
          {
            type: "remarque",
            titre: "Quelle énergie ?",
            texte: "Le transformateur reçoit de l'énergie électrique au primaire et en fournit au secondaire. Une partie est dissipée, notamment sous forme de chaleur."
          }
        ]
      },
      {
        id: "sp4-ch11-lecon4",
        titre: "Transformateur élévateur ou abaisseur",
        blocs: [
          {
            type: "definition",
            titre: "Deux possibilités",
            texte: "Un transformateur est dit élévateur lorsque la tension efficace au secondaire est supérieure à celle du primaire. Il est dit abaisseur lorsqu'elle est inférieure."
          },
          {
            type: "exemple",
            titre: "Un transformateur abaisseur",
            texte: "Un transformateur reçoit une tension alternative de 12 V efficaces au primaire et fournit 6 V efficaces au secondaire. Comme 6 V est inférieur à 12 V, il est abaisseur."
          },
          {
            type: "exemple",
            titre: "Un transformateur élévateur",
            texte: "Un transformateur reçoit une tension alternative de 6 V efficaces au primaire et fournit 24 V efficaces au secondaire. Comme 24 V est supérieur à 6 V, il est élévateur."
          },
          {
            type: "remarque",
            titre: "La fréquence",
            texte: "Pour un transformateur étudié dans des conditions normales de fonctionnement, la fréquence de la tension alternative au secondaire est la même qu'au primaire."
          }
        ]
      },
      {
        id: "sp4-ch11-lecon5",
        titre: "Une relation pour le transformateur idéal",
        blocs: [
          {
            type: "regle",
            titre: "Tensions et nombres de spires",
            texte: "Pour un transformateur idéal en régime alternatif sinusoïdal :\nU₂ ÷ U₁ = N₂ ÷ N₁.\nU₁ et U₂ sont les tensions efficaces au primaire et au secondaire. N₁ et N₂ sont les nombres de spires des deux bobines."
          },
          {
            type: "exemple",
            titre: "Calculer la tension secondaire",
            texte: "Un transformateur idéal possède N₁ = 200 spires au primaire et N₂ = 100 spires au secondaire. Sa tension primaire vaut U₁ = 12 V.\nU₂ = U₁ × N₂ ÷ N₁ = 12 × 100 ÷ 200 = 6 V.\nLe transformateur est abaisseur."
          },
          {
            type: "methode",
            titre: "Utiliser la relation",
            texte: "1. Repère les valeurs du primaire : U₁ et N₁.\n2. Repère celles du secondaire : U₂ et N₂.\n3. Écris U₂ ÷ U₁ = N₂ ÷ N₁.\n4. Isole la grandeur recherchée, puis calcule.\n5. Vérifie si le résultat correspond à un transformateur élévateur ou abaisseur."
          },
          {
            type: "remarque",
            titre: "Un modèle idéal",
            texte: "La relation est donnée ici pour un transformateur idéal. Dans un appareil réel, les pertes et les conditions d'utilisation peuvent conduire à des résultats différents."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Même un transformateur ne rend pas automatiquement une installation sans danger. Ne branche pas de transformateur sur le réseau et ne manipule pas de fils ou d'appareils ouverts."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Quelle transformation d'énergie réalise un alternateur ?",
        correction: "Un alternateur transforme une partie de l'énergie mécanique qu'il reçoit en énergie électrique."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Comment appelle-t-on les deux bobines d'un transformateur ?",
        correction: "La bobine qui reçoit la tension est le primaire. L'autre bobine est le secondaire."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un transformateur reçoit 12 V efficaces et fournit 3 V efficaces. Est-il élévateur ou abaisseur ?",
        correction: "Il est abaisseur : la tension au secondaire, 3 V, est inférieure à celle du primaire, 12 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Dans une centrale hydroélectrique, quel élément entraîne l'alternateur ? D'où vient le mouvement ?",
        correction: "Une turbine entraîne l'alternateur. La turbine est mise en mouvement par l'eau."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un transformateur idéal possède N₁ = 300 spires et N₂ = 150 spires. Sa tension primaire est U₁ = 12 V efficaces. Calcule U₂ et indique si le transformateur est élévateur ou abaisseur.",
        correction: "U₂ = U₁ × N₂ ÷ N₁.\nU₂ = 12 × 150 ÷ 300 = 6 V.\nLa tension diminue : le transformateur est abaisseur."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un transformateur idéal reçoit une tension de 8 V efficaces. Il possède 100 spires au primaire et 300 spires au secondaire. Calcule la tension efficace au secondaire.",
        correction: "U₂ = U₁ × N₂ ÷ N₁ = 8 × 300 ÷ 100 = 24 V.\nLa tension efficace au secondaire est 24 V."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un transformateur idéal est alimenté en tension sinusoïdale. Sa bobine primaire possède 400 spires et reçoit 24 V efficaces. La tension secondaire souhaitée est 6 V efficaces.\n1. Calcule le nombre de spires N₂ nécessaire.\n2. Le transformateur est-il élévateur ou abaisseur ?",
        correction: "1. U₂ ÷ U₁ = N₂ ÷ N₁, donc N₂ = N₁ × U₂ ÷ U₁.\nN₂ = 400 × 6 ÷ 24 = 100 spires.\n2. La tension passe de 24 V à 6 V : le transformateur est abaisseur."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un élève dit : « L'alternateur et le transformateur font exactement la même chose : ils créent de l'énergie électrique. » Corrige ses deux erreurs.",
        correction: "D'abord, ces appareils ne créent pas l'énergie : ils la transforment ou la transmettent, avec des pertes.\nEnsuite, leurs rôles diffèrent. L'alternateur transforme une partie de l'énergie mécanique reçue en énergie électrique. Le transformateur reçoit de l'énergie électrique et modifie une tension alternative entre son primaire et son secondaire."
      }
    ]
  }
]);
