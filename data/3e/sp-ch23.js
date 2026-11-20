// ===== GUIDE - Sciences physiques 3e (T9) =====
// Chapitre 23 : révision générale.
// Synthèse et exercices préparés par Guide.

enregistrerChapitres("3e", "sp", [
  {
    id: "sp3-revision-generale",
    titre: "Chapitre 23 : Révision générale",
    premium: false,
    guide: true,

    lecons: [
      {
        id: "sp3-revision-solutions",
        titre: "Chimie : solutions, concentration et pH",
        blocs: [
          {
            type: "regle",
            titre: "Solution et concentration massique",
            texte: "Une solution est un mélange homogène obtenu en dissolvant un soluté dans un solvant.\n\nLa concentration massique d’un soluté est :\n\nCₘ = m / V.\n\nSi m est en grammes et V en litres, Cₘ est en g/L. On peut aussi écrire m = Cₘ × V ou V = m / Cₘ, lorsque Cₘ est non nulle."
          },
          {
            type: "methode",
            titre: "Dilution",
            texte: "Diluer une solution consiste à ajouter du solvant pour diminuer sa concentration.\n\nSi la quantité de soluté est conservée :\n\nC₁ × V₁ = C₂ × V₂.\n\nUtilise la même unité de volume pour V₁ et V₂. Une dilution ne consiste pas à ajouter du soluté."
          },
          {
            type: "regle",
            titre: "Acidité et pH",
            texte: "À 25 °C :\n\n• pH inférieur à 7 : solution acide ;\n• pH égal à 7 : solution neutre ;\n• pH supérieur à 7 : solution basique.\n\nLe papier pH donne une valeur approximative. Un indicateur coloré donne généralement une indication ou un intervalle de pH, pas une valeur exacte."
          },
          {
            type: "remarque",
            titre: "Prudence",
            texte: "Ne goûte jamais une solution de laboratoire et ne mélange pas des produits inconnus. Une solution acide ou basique concentrée peut être corrosive."
          }
        ]
      },

      {
        id: "sp3-revision-reactions",
        titre: "Chimie : ions et réactions chimiques",
        blocs: [
          {
            type: "regle",
            titre: "Atomes et ions",
            texte: "Un atome est électriquement neutre. Un ion est chargé :\n\n• un cation est positif, car il a perdu un ou plusieurs électrons ;\n• un anion est négatif, car il a gagné un ou plusieurs électrons.\n\nExemples : Na⁺ est un cation et Cl⁻ est un anion."
          },
          {
            type: "methode",
            titre: "Équilibrer une équation",
            texte: "Une équation-bilan doit respecter la conservation des atomes de chaque élément et de la charge électrique.\n\nOn ajuste les coefficients placés devant les formules, sans modifier les indices à l’intérieur de celles-ci.\n\nExemple : 2 H₂ + O₂ → 2 H₂O.\n\nOn compte 4 atomes H et 2 atomes O de chaque côté."
          },
          {
            type: "regle",
            titre: "Neutralisation acide-base",
            texte: "En solution aqueuse, les ions H₃O⁺ et HO⁻ réagissent selon :\n\nH₃O⁺ + HO⁻ → 2 H₂O.\n\nUn mélange acide-base n’est pas automatiquement neutre : son état final dépend notamment des quantités introduites et des espèces présentes."
          },
          {
            type: "regle",
            titre: "Combustion",
            texte: "Une combustion nécessite un combustible, un comburant et une énergie d’activation : ce sont les trois éléments du triangle du feu.\n\nLa combustion complète d’un hydrocarbure produit du dioxyde de carbone et de l’eau. Une combustion incomplète peut notamment produire du monoxyde de carbone, gaz toxique."
          },
          {
            type: "exemple",
            titre: "Combustion du méthane",
            texte: "CH₄ + 2 O₂ → CO₂ + 2 H₂O.\n\nÀ gauche comme à droite, on compte 1 atome C, 4 atomes H et 4 atomes O."
          }
        ]
      },

      {
        id: "sp3-revision-calculs-chimiques",
        titre: "Chimie : quantités de matière et gaz",
        blocs: [
          {
            type: "regle",
            titre: "Quantité de matière",
            texte: "Pour une espèce de masse m et de masse molaire M :\n\nn = m / M.\n\nAvec m en g et M en g/mol, n est en mol.\n\nOn peut aussi écrire m = n × M."
          },
          {
            type: "regle",
            titre: "Volume d’un gaz",
            texte: "Si le volume molaire Vₘ est connu dans les conditions de l’exercice :\n\nV = n × Vₘ et n = V / Vₘ.\n\nAvec V en litres et Vₘ en L/mol, n est en mol. Le volume molaire dépend des conditions de température et de pression : utilise la valeur donnée par l’énoncé."
          },
          {
            type: "methode",
            titre: "Utiliser une équation-bilan",
            texte: "1. Équilibrer l’équation.\n2. Convertir les données en quantités de matière.\n3. Utiliser les rapports entre les coefficients de l’équation, en tenant compte du réactif limitant si nécessaire.\n4. Convertir le résultat dans l’unité demandée.\n5. Vérifier les unités et la cohérence du résultat."
          }
        ]
      },

      {
        id: "sp3-revision-electricite",
        titre: "Physique : électricité et magnétisme",
        blocs: [
          {
            type: "regle",
            titre: "Intensité et tension",
            texte: "L’intensité I s’exprime en ampères (A) et se mesure avec un ampèremètre branché en série.\n\nLa tension U s’exprime en volts (V) et se mesure avec un voltmètre branché en dérivation aux bornes du dipôle."
          },
          {
            type: "regle",
            titre: "Loi d’Ohm, puissance et énergie",
            texte: "Pour un conducteur ohmique : U = R × I.\n\nLa puissance électrique vaut P = U × I.\n\nPour une puissance constante pendant une durée t : E = P × t.\n\nAvec P en W et t en s, E est en J. Avec P en kW et t en h, E est en kWh."
          },
          {
            type: "regle",
            titre: "Magnétisme",
            texte: "Deux pôles magnétiques de même nom se repoussent ; deux pôles de noms différents s’attirent.\n\nUne bobine parcourue par un courant crée un champ magnétique. Un noyau en fer doux renforce généralement l’action d’un électroaimant."
          },
          {
            type: "remarque",
            titre: "Sécurité électrique",
            texte: "Ne réalise jamais de montage directement sur le secteur. Les expériences se font avec une alimentation basse tension adaptée, sous la surveillance de l’enseignant."
          }
        ]
      },

      {
        id: "sp3-revision-mecanique",
        titre: "Physique : mouvement, forces et énergie",
        blocs: [
          {
            type: "regle",
            titre: "Vitesse moyenne",
            texte: "La vitesse moyenne est : v = d / t, où d est la distance totale et t la durée totale du trajet étudié.\n\nAvec d en km et t en h, v est en km/h. Avec d en m et t en s, v est en m/s.\n\nPour passer de km/h à m/s, on divise par 3,6."
          },
          {
            type: "regle",
            titre: "Force et poids",
            texte: "Une force est représentée par une flèche : point d’application, direction, sens et intensité sont à préciser. Son intensité s’exprime en newtons (N).\n\nPrès de la surface terrestre : P = m × g, avec P en N, m en kg et g en N/kg."
          },
          {
            type: "regle",
            titre: "Travail et puissance mécaniques",
            texte: "Pour une force constante dirigée dans le sens d’un déplacement rectiligne de son point d’application : W = F × d.\n\nSi la force est de sens opposé : W = −F × d. Si elle est perpendiculaire au déplacement, son travail est nul.\n\nLa puissance mécanique moyenne est P = W / t, avec W en J et t en s."
          },
          {
            type: "regle",
            titre: "Énergie mécanique",
            texte: "E꜀ = ½ × m × v² et Eₚ = m × g × h, dans les conditions étudiées et pour un niveau de référence choisi.\n\nEₘ = E꜀ + Eₚ.\n\nSi seul le poids travaille, ou si le travail total des autres forces est nul, l’énergie mécanique se conserve."
          }
        ]
      },

      {
        id: "sp3-revision-lumiere-son",
        titre: "Physique : lumière et son",
        blocs: [
          {
            type: "regle",
            titre: "Lumière",
            texte: "Dans un milieu transparent et homogène, la lumière se propage en ligne droite.\n\nSur un miroir plan, l’angle de réflexion est égal à l’angle d’incidence. Ces angles se mesurent par rapport à la normale.\n\nLa lumière peut changer de direction en passant d’un milieu transparent à un autre : c’est la réfraction."
          },
          {
            type: "regle",
            titre: "Lentille convergente",
            texte: "Un rayon parallèle à l’axe optique ressort en passant par le foyer image F′. Un rayon passant par le centre optique O continue sans déviation appréciable dans le modèle de la lentille mince.\n\nUne image réelle peut être recueillie sur un écran. Une image virtuelle ne peut pas y être recueillie directement."
          },
          {
            type: "regle",
            titre: "Son et écho",
            texte: "Un son est produit par une vibration. Il se propage dans un milieu matériel, mais pas dans le vide.\n\nLa fréquence, en hertz (Hz), permet de distinguer un son grave d’un son aigu. Le niveau sonore s’exprime en décibels (dB).\n\nPour un écho revenant au point de départ : distance jusqu’à l’obstacle = v × t / 2."
          },
          {
            type: "methode",
            titre: "Avant de rendre ta copie",
            texte: "• Ai-je relevé les données et la grandeur demandée ?\n• Ai-je converti les unités ?\n• Ai-je écrit la formule ou la loi utilisée ?\n• Mon équation chimique est-elle équilibrée ?\n• Ai-je justifié et donné l’unité du résultat ?\n• Mon résultat est-il cohérent ?"
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 3,
        enonce: "Chimie. On dissout 12 g de sel dans de l’eau et on obtient 0,5 L de solution.\n\n1. Identifie le soluté et le solvant.\n2. Calcule la concentration massique en g/L.",
        correction: "1. Le soluté est le sel. Le solvant est l’eau.\n\n2. Cₘ = m / V = 12 / 0,5 = 24 g/L.\n\nLa concentration massique est 24 g/L."
      },
      {
        niveau: 1,
        points: 3,
        enonce: "Chimie. À 25 °C, une solution A a un pH de 3 et une solution B a un pH de 9.\n\n1. Classe chaque solution : acide, neutre ou basique.\n2. Le papier pH donne-t-il habituellement une valeur exacte ?",
        correction: "1. À 25 °C, le pH de A est inférieur à 7 : A est acide. Le pH de B est supérieur à 7 : B est basique.\n\n2. Non. Le papier pH donne habituellement une valeur approximative, obtenue par comparaison de couleurs."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Chimie. On prélève 50 mL d’une solution de concentration 40 g/L, puis on dilue le prélèvement jusqu’à obtenir 200 mL de solution.\n\nCalcule la concentration finale.",
        correction: "La quantité de soluté du prélèvement est conservée pendant la dilution : C₁V₁ = C₂V₂.\n\nC₂ = C₁V₁ / V₂ = 40 × 50 / 200 = 10 g/L.\n\nLa concentration finale est 10 g/L. Le volume a été multiplié par 4, donc la concentration a été divisée par 4."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Chimie. Équilibre l’équation de combustion complète du propane :\n\nC₃H₈ + O₂ → CO₂ + H₂O.",
        correction: "Il faut 3 molécules de CO₂ pour conserver les 3 atomes de carbone, et 4 molécules d’eau pour conserver les 8 atomes d’hydrogène.\n\nÀ droite, cela donne 3 × 2 + 4 = 10 atomes d’oxygène. Il faut donc 5 molécules de O₂ à gauche.\n\nC₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Chimie. Un échantillon contient 9 g d’eau. On donne M(H₂O) = 18 g/mol.\n\n1. Calcule la quantité de matière d’eau.\n2. L’électrolyse de l’eau est modélisée par 2 H₂O → 2 H₂ + O₂. Si toute l’eau de l’échantillon réagit, calcule la quantité de dioxygène formée.",
        correction: "1. n(H₂O) = m / M = 9 / 18 = 0,5 mol.\n\n2. L’équation indique que 2 mol d’eau produisent 1 mol de dioxygène.\n\nn(O₂) = 0,5 / 2 = 0,25 mol.\n\nOn obtient 0,25 mol de dioxygène dans les conditions indiquées."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Chimie. Lors de la combustion complète du méthane : CH₄ + 2 O₂ → CO₂ + 2 H₂O. On fait réagir 0,5 mol de méthane avec un excès de dioxygène.\n\n1. Calcule la quantité de CO₂ formée.\n2. Calcule son volume si Vₘ = 24 L/mol dans les conditions de l’expérience.",
        correction: "1. L’équation indique que 1 mol de CH₄ produit 1 mol de CO₂. Avec 0,5 mol de méthane et un excès de dioxygène, on forme 0,5 mol de CO₂.\n\n2. V = n × Vₘ = 0,5 × 24 = 12 L.\n\nLe volume de CO₂ formé est 12 L dans les conditions données."
      },
      {
        niveau: 2,
        points: 4,
        enonce: "Physique. Un conducteur ohmique de résistance 20 Ω est traversé par un courant d’intensité 0,3 A.\n\n1. Calcule la tension à ses bornes.\n2. Calcule sa puissance électrique.",
        correction: "1. Loi d’Ohm : U = R × I = 20 × 0,3 = 6 V.\n\n2. P = U × I = 6 × 0,3 = 1,8 W.\n\nLa tension est 6 V et la puissance est 1,8 W."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Physique. Un appareil de puissance constante 1,2 kW fonctionne pendant 30 min.\n\n1. Convertis la durée en heures.\n2. Calcule l’énergie consommée en kWh.",
        correction: "1. 30 min = 30 / 60 = 0,5 h.\n\n2. E = P × t = 1,2 × 0,5 = 0,6 kWh.\n\nL’énergie consommée est 0,6 kWh."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Physique. Un cycliste parcourt 18 km en 45 min.\n\n1. Convertis la durée en heures.\n2. Calcule sa vitesse moyenne en km/h.\n3. Convertis cette vitesse en m/s.",
        correction: "1. 45 min = 45 / 60 = 0,75 h.\n\n2. v = d / t = 18 / 0,75 = 24 km/h.\n\n3. 24 / 3,6 ≈ 6,67 m/s.\n\nLa vitesse moyenne est 24 km/h, soit environ 6,67 m/s."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Physique. Une charge de masse 5 kg est immobile, suspendue à une corde verticale. On prend g = 10 N/kg et on considère seulement le poids et la force de la corde.\n\n1. Calcule le poids.\n2. Détermine l’intensité et le sens de la force de la corde.",
        correction: "1. P = m × g = 5 × 10 = 50 N. Le poids est vertical et dirigé vers le bas.\n\n2. La charge est immobile sous l’action de deux forces : elles se compensent. La force de la corde est verticale, dirigée vers le haut et son intensité vaut 50 N."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Physique. Un objet de masse 2 kg se déplace à 4 m/s à une hauteur de 3 m au-dessus du niveau de référence. On prend g = 10 N/kg.\n\nCalcule son énergie cinétique, son énergie potentielle et son énergie mécanique.",
        correction: "Énergie cinétique : E꜀ = ½ × m × v² = ½ × 2 × 4² = 16 J.\n\nÉnergie potentielle : Eₚ = m × g × h = 2 × 10 × 3 = 60 J.\n\nÉnergie mécanique : Eₘ = E꜀ + Eₚ = 16 + 60 = 76 J."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Physique. Un rayon lumineux arrive sur un miroir plan en faisant un angle de 35° avec la surface du miroir.\n\nCalcule l’angle d’incidence et l’angle de réflexion.",
        correction: "L’angle d’incidence se mesure par rapport à la normale, perpendiculaire au miroir.\n\ni = 90° − 35° = 55°.\n\nD’après la loi de la réflexion : r = i = 55°."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Physique. Une personne entend son écho 1,2 s après avoir émis un son. On prend la vitesse du son égale à 340 m/s.\n\n1. Calcule la distance totale parcourue par le son.\n2. Calcule la distance entre la personne et l’obstacle.",
        correction: "1. La durée correspond à l’aller-retour : D = v × t = 340 × 1,2 = 408 m.\n\n2. La distance jusqu’à l’obstacle vaut la moitié : d = 408 / 2 = 204 m."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Type BEPC — chimie. On dissout 8 g d’un soluté dans l’eau et on obtient 200 mL de solution S₁. On prélève ensuite 50 mL de S₁ et on complète avec de l’eau pour obtenir 250 mL de solution S₂.\n\n1. Calcule la concentration massique de S₁.\n2. Calcule la concentration massique de S₂.\n3. Quelle masse de soluté est contenue dans le prélèvement de 50 mL ?",
        correction: "1. V₁ = 200 mL = 0,200 L.\n\nC₁ = m / V₁ = 8 / 0,200 = 40 g/L.\n\n2. Pendant la dilution, la quantité de soluté du prélèvement est conservée :\n\nC₁Vprélevé = C₂V₂.\n\nC₂ = 40 × 50 / 250 = 8 g/L.\n\n3. Vprélevé = 50 mL = 0,050 L.\n\nm = C₁ × Vprélevé = 40 × 0,050 = 2 g.\n\nLa solution diluée contient toujours ces 2 g de soluté."
      },
      {
        niveau: 4,
        points: 6,
        enonce: "Type BEPC — physique. Une machine soulève verticalement une charge de masse 10 kg sur une hauteur de 4 m, à vitesse constante, en 5 s. On néglige les autres forces et on prend g = 10 N/kg.\n\n1. Calcule le poids de la charge.\n2. Détermine la force exercée par la machine.\n3. Calcule le travail de cette force.\n4. Calcule la puissance mécanique moyenne fournie à la charge.",
        correction: "1. Poids : P = m × g = 10 × 10 = 100 N, dirigé vers le bas.\n\n2. La charge monte verticalement à vitesse constante et les autres forces sont négligées. La force de la machine compense le poids : elle vaut 100 N et est dirigée vers le haut.\n\n3. La force de la machine est dans le sens du déplacement : W = F × d = 100 × 4 = 400 J.\n\n4. Puissance mécanique moyenne : P = W / t = 400 / 5 = 80 W.\n\nCette puissance est celle fournie à la charge, pas nécessairement la puissance électrique consommée."
      }
    ]
  }
]);
