enregistrerChapitres("tle", "sp", [
  {
    id: "tle-sp-ch4",
    titre: "Chapitre 4 : Applications de la dynamique",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-sp-ch4-l1",
        titre: "Leçon 1 : Méthode et projections",
        blocs: [
          {
            type: "introduction",
            titre: "Passer des forces aux équations",
            texte: "Pour appliquer la deuxième loi de Newton, on commence par représenter les forces extérieures. On choisit ensuite des axes adaptés au mouvement afin de projeter la relation vectorielle ΣF = ma.\n\nDans ce chapitre, les mouvements sont étudiés dans un référentiel terrestre supposé galiléen."
          },
          {
            type: "methode",
            titre: "Les étapes à suivre",
            texte: "1. Choisir le système étudié et le référentiel.\n2. Faire le bilan des forces extérieures et les représenter.\n3. Choisir des axes orientés adaptés.\n4. Écrire ΣF = ma, puis projeter sur chaque axe.\n5. Utiliser les conditions initiales pour déterminer le mouvement.\n6. Vérifier les unités, les signes et la cohérence du résultat."
          },
          {
            type: "exemple",
            titre: "Traction horizontale",
            texte: "Un objet de masse m est tiré vers la droite sur un sol horizontal. La traction F est horizontale, les frottements sont négligés et l’objet reste en contact avec le sol.\n\nLes forces sont le poids P, la réaction normale N et la traction F.\n\nSur l’axe horizontal orienté vers la droite : F = maₓ, donc aₓ = F/m.\nSur l’axe vertical : N − mg = 0, donc N = mg."
          },
          {
            type: "remarque",
            titre: "Réaction normale et frottement",
            texte: "La force exercée par un support peut être décomposée en une réaction normale N, perpendiculaire au support, et une force de frottement parallèle au support. Dans ce chapitre, N désigne uniquement la composante normale."
          }
        ]
      },

      {
        id: "tle-sp-ch4-l2",
        titre: "Leçon 2 : Mouvement sur un plan incliné",
        blocs: [
          {
            type: "definition",
            titre: "Décomposer le poids",
            texte: "Pour un plan incliné d’un angle α par rapport à l’horizontale, on choisit un axe parallèle au plan et un axe perpendiculaire au plan.\n\nLa composante du poids parallèle au plan a pour norme mg sin α et est dirigée vers le bas de la pente. Sa composante perpendiculaire a pour norme mg cos α et est dirigée vers le plan."
          },
          {
            type: "schema",
            titre: "Forces sur un plan incliné sans frottement",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 250'><defs><marker id='sp4-poids' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#dc2626'/></marker><marker id='sp4-normal' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#16a34a'/></marker></defs><path d='M40 210 L365 210 L365 65 Z' fill='#f1f5f9' stroke='#64748b' stroke-width='2'/><g transform='translate(210 139) rotate(-24)'><rect x='-28' y='-24' width='56' height='48' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/></g><line x1='210' y1='139' x2='210' y2='215' stroke='#dc2626' stroke-width='3' marker-end='url(#sp4-poids)'/><line x1='220' y1='161' x2='184' y2='80' stroke='#16a34a' stroke-width='3' marker-end='url(#sp4-normal)'/><text x='218' y='205' font-size='14'>P</text><text x='158' y='78' font-size='14'>N</text><text x='324' y='203' font-size='14'>α</text></svg>",
            legende: "Le poids P est vertical. La réaction normale N est perpendiculaire au plan. Les composantes du poids ne sont pas des forces supplémentaires."
          },
          {
            type: "exemple",
            titre: "Glissement sans frottement",
            texte: "Un objet glisse sur un plan incliné sans frottement et reste en contact avec lui. On oriente l’axe parallèle au plan vers le bas.\n\nSur cet axe : mg sin α = ma, donc a = g sin α.\nPerpendiculairement au plan : N − mg cos α = 0, donc N = mg cos α.\n\nPar exemple, si α = 30° et g = 10 m/s², alors a = 10 × 0,5 = 5 m/s² vers le bas de la pente."
          },
          {
            type: "remarque",
            titre: "Attention aux hypothèses",
            texte: "La relation N = mg cos α suppose ici que l’objet reste au contact du plan, sans accélération perpendiculaire, et qu’aucune autre force ne possède de composante perpendiculaire au plan."
          }
        ]
      },

      {
        id: "tle-sp-ch4-l3",
        titre: "Leçon 3 : Frottements",
        blocs: [
          {
            type: "definition",
            titre: "Frottement de glissement",
            texte: "Lorsqu’un objet glisse sur un support, le frottement exercé par le support est parallèle à la surface et opposé au mouvement relatif de glissement.\n\nDans un modèle simple, sa norme est f = μN, où μ est le coefficient de frottement de glissement et N la norme de la réaction normale. μ est sans unité."
          },
          {
            type: "texte",
            titre: "Ne pas confondre repos et glissement",
            texte: "Quand il n’y a pas de glissement, le frottement statique peut prendre différentes valeurs pour empêcher le glissement, jusqu’à une valeur maximale dans le modèle considéré. On ne peut donc pas utiliser automatiquement f = μN avec le coefficient de glissement pour un objet immobile."
          },
          {
            type: "exemple",
            titre: "Glissement horizontal",
            texte: "Un objet de masse 2 kg glisse sur un sol horizontal. Il subit une traction horizontale F = 10 N vers la droite. On prend μ = 0,2 et g = 10 m/s² ; l’objet glisse vers la droite.\n\nComme l’accélération verticale est nulle : N = mg = 20 N.\nLe frottement vaut f = μN = 0,2 × 20 = 4 N, vers la gauche.\n\nLa résultante horizontale vaut 10 − 4 = 6 N. Donc a = 6/2 = 3 m/s² vers la droite."
          },
          {
            type: "methode",
            titre: "Déterminer le sens du frottement",
            texte: "1. Identifier le support et le mouvement relatif de glissement.\n2. Représenter le frottement parallèlement à la surface, dans le sens opposé à ce glissement.\n3. Calculer la réaction normale à partir de la projection perpendiculaire.\n4. Si le modèle le permet, utiliser f = μN, puis projeter selon le mouvement."
          },
          {
            type: "remarque",
            titre: "La réaction normale n’est pas toujours égale au poids",
            texte: "Sur un plan incliné sans autre force perpendiculaire, N = mg cos α. Même sur un sol horizontal, une traction inclinée peut modifier N."
          }
        ]
      },

      {
        id: "tle-sp-ch4-l4",
        titre: "Leçon 4 : Systèmes reliés par un fil",
        blocs: [
          {
            type: "introduction",
            titre: "Deux objets en interaction",
            texte: "Deux objets reliés par un fil peuvent avoir des mouvements liés. Nous utilisons ici un modèle simple : fil inextensible et de masse négligeable, poulie idéale et absence de frottements sauf indication contraire."
          },
          {
            type: "schema",
            titre: "Chariot relié à une masse suspendue",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 240'><line x1='30' y1='130' x2='300' y2='130' stroke='#334155' stroke-width='4'/><rect x='95' y='75' width='80' height='55' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><circle cx='300' cy='115' r='15' fill='none' stroke='#64748b' stroke-width='2'/><line x1='175' y1='91' x2='300' y2='100' stroke='#64748b' stroke-width='2'/><line x1='315' y1='115' x2='315' y2='175' stroke='#64748b' stroke-width='2'/><rect x='295' y='175' width='40' height='45' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='115' y='108' font-size='14'>m₁</text><text x='300' y='203' font-size='14'>m₂</text><text x='105' y='155' font-size='12'>support horizontal</text></svg>",
            legende: "Le chariot m₁ est relié à la masse suspendue m₂. Dans le modèle idéal, les deux objets ont des accélérations de même norme."
          },
          {
            type: "exemple",
            titre: "Écrire les équations",
            texte: "Un chariot de masse m₁ est relié à une masse suspendue m₂. Les frottements sont négligés. On choisit comme sens positifs la droite pour le chariot et le bas pour la masse suspendue.\n\nLa tension a la même norme T des deux côtés de la poulie idéale. Les accélérations ont la même composante a selon les axes choisis.\n\nPour le chariot : T = m₁a.\nPour la masse suspendue : m₂g − T = m₂a.\n\nEn additionnant : m₂g = (m₁ + m₂)a, donc a = m₂g/(m₁ + m₂). Puis T = m₁a."
          },
          {
            type: "methode",
            titre: "Traiter deux systèmes",
            texte: "1. Dessiner séparément les forces sur chaque objet.\n2. Choisir les sens positifs en tenant compte du lien imposé par le fil.\n3. Écrire une équation dynamique pour chaque objet.\n4. Utiliser la relation entre les accélérations et, dans le modèle idéal, l’égalité des tensions.\n5. Résoudre le système et vérifier les unités."
          },
          {
            type: "remarque",
            titre: "Validité du modèle",
            texte: "L’égalité des tensions des deux côtés n’est pas automatique pour une poulie réelle avec frottement ou inertie importante. Les conclusions dépendent des hypothèses données."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet de masse 2 kg subit une résultante horizontale de 8 N. Calculer son accélération.",
        correction: "D’après ΣF = ma, a = 8/2 = 4 m/s², dans le sens de la résultante."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Sur un sol horizontal, un objet de masse 3 kg reste en contact avec le sol. Aucune force autre que le poids et la réaction normale n’agit verticalement. Calculer N avec g = 10 m/s².",
        correction: "L’accélération verticale est nulle, donc N − mg = 0. Ainsi N = 3 × 10 = 30 N."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet glisse sans frottement sur un plan incliné à 30°. Calculer son accélération le long du plan avec g = 10 m/s².",
        correction: "a = g sin 30° = 10 × 0,5 = 5 m/s², vers le bas de la pente."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un objet glisse vers la droite sur un sol horizontal. Dans quel sens est dirigé le frottement du sol ?",
        correction: "Le frottement de glissement est parallèle au sol et opposé au mouvement relatif : il est dirigé vers la gauche."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une réaction normale vaut 50 N et le coefficient de frottement de glissement vaut 0,1. Calculer la norme du frottement dans le modèle f = μN.",
        correction: "f = μN = 0,1 × 50 = 5 N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 4 kg glisse sans frottement sur un plan incliné à 30°. Calculer la norme de la composante du poids parallèle au plan. Prendre g = 10 m/s².",
        correction: "La composante parallèle vaut mg sin 30° = 4 × 10 × 0,5 = 20 N, vers le bas de la pente."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 2 kg glisse sur un sol horizontal. Il subit une traction de 12 N vers la droite et un frottement de 4 N vers la gauche. Calculer son accélération.",
        correction: "La résultante horizontale vaut 12 − 4 = 8 N vers la droite. L’accélération vaut a = 8/2 = 4 m/s² vers la droite."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 5 kg glisse sur un sol horizontal. On prend μ = 0,2 et g = 10 m/s². Aucune force autre que le poids et la réaction du sol n’agit verticalement. Calculer N puis f.",
        correction: "N = mg = 5 × 10 = 50 N. Le frottement de glissement vaut f = μN = 0,2 × 50 = 10 N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un chariot de masse 4 kg est tiré sans frottement par une force horizontale de 10 N. Il part du repos. Calculer sa vitesse après 2 s si la force reste constante.",
        correction: "a = F/m = 10/4 = 2,5 m/s². Comme le chariot part du repos, v = at = 2,5 × 2 = 5 m/s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 1 kg glisse sans frottement sur un plan incliné à 60°. Calculer N avec g = 10 m/s², en supposant qu’aucune autre force n’agit et qu’il reste en contact avec le plan.",
        correction: "N = mg cos 60° = 1 × 10 × 0,5 = 5 N."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un chariot de masse m₁ = 3 kg est relié à une masse suspendue m₂ = 1 kg. Le fil et la poulie sont idéaux, et les frottements sont négligés. Calculer l’accélération avec g = 10 m/s².",
        correction: "a = m₂g/(m₁ + m₂) = 1 × 10/(3 + 1) = 2,5 m/s²."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Dans le système précédent, avec m₁ = 3 kg, m₂ = 1 kg et g = 10 m/s², calculer la tension du fil. Le fil et la poulie sont idéaux et les frottements sont négligés.",
        correction: "L’accélération vaut a = 1 × 10/(3 + 1) = 2,5 m/s². Pour le chariot, T = m₁a = 3 × 2,5 = 7,5 N. On vérifie avec la masse suspendue : m₂g − T = 10 − 7,5 = 2,5 N = m₂a."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un objet de masse 2 kg glisse vers le bas d’un plan incliné à 30°. Le coefficient de frottement de glissement est μ = 0,1. Il reste en contact avec le plan et aucune autre force n’agit. Avec g = 10 m/s² et cos 30° ≈ 0,866, calculer son accélération.",
        correction: "N = mg cos 30° ≈ 2 × 10 × 0,866 = 17,32 N. Le frottement vaut f = μN ≈ 1,732 N et est dirigé vers le haut du plan.\nLa composante du poids vers le bas vaut mg sin 30° = 10 N. Donc ma ≈ 10 − 1,732 = 8,268 N et a ≈ 8,268/2 = 4,13 m/s² vers le bas du plan."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. Un chariot de masse 4 kg glisse vers la droite sur un sol horizontal sous l’action d’une traction constante de 20 N. Le coefficient de frottement de glissement est μ = 0,25. On prend g = 10 m/s². À l’instant initial, sa vitesse est de 2 m/s vers la droite. 1. Calculer N et le frottement. 2. Déterminer l’accélération. 3. Calculer sa vitesse et son déplacement après 3 s, si les conditions restent les mêmes.",
        correction: "1. N = mg = 4 × 10 = 40 N. Le frottement vaut f = μN = 0,25 × 40 = 10 N vers la gauche.\n2. La résultante horizontale vaut 20 − 10 = 10 N vers la droite. Ainsi a = 10/4 = 2,5 m/s² vers la droite.\n3. v(3) = v₀ + at = 2 + 2,5 × 3 = 9,5 m/s. Le déplacement est Δx = v₀t + ½at² = 2 × 3 + ½ × 2,5 × 9 = 17,25 m vers la droite."
      }
    ]
  }
]);
