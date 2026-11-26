enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch15",
    titre: "Chapitre 15 : Loi de Pouillet et circuits",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch15-rappels",
        titre: "1. Lois utiles pour étudier un circuit",
        blocs: [
          {
            type: "introduction",
            titre: "Prévoir le courant",
            texte: "La loi de Pouillet permet de calculer l’intensité du courant dans une boucle série à partir des caractéristiques du générateur et des dipôles traversés. Pour la comprendre, rappelons les lois des circuits."
          },
          {
            type: "regle",
            titre: "Courant dans une boucle série",
            texte: "Dans une boucle ne comportant aucune dérivation, tous les dipôles sont traversés par la même intensité I. Leur ordre dans la boucle ne change pas cette intensité dans le modèle étudié."
          },
          {
            type: "regle",
            titre: "Loi des mailles",
            texte: "Dans une maille, la somme algébrique des tensions orientées dans un parcours fermé est nulle. Pour une boucle simple comprenant un générateur et des récepteurs, la tension fournie par le générateur est égale à la somme des tensions reçues par les récepteurs."
          },
          {
            type: "schema",
            titre: "Boucle série avec générateur et résistances",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 250' role='img' aria-label='Une boucle fermée comprend un générateur réel à gauche et deux résistances R1 et R2 en série. Le courant I sort de la borne positive du générateur et traverse les deux résistances.'><path d='M110 70 H180 M260 70 H350 M430 70 H510 V190 H110 V145 M110 105 V70' fill='none' stroke='#222' stroke-width='3'/><circle cx='110' cy='125' r='20' fill='white' stroke='#222' stroke-width='3'/><text x='110' y='131' text-anchor='middle' font-size='14'>G</text><text x='80' y='109' font-size='17'>+</text><text x='80' y='151' font-size='17'>−</text><rect x='180' y='50' width='80' height='40' fill='white' stroke='#222' stroke-width='3'/><text x='220' y='76' text-anchor='middle' font-size='17'>R1</text><rect x='350' y='50' width='80' height='40' fill='white' stroke='#222' stroke-width='3'/><text x='390' y='76' text-anchor='middle' font-size='17'>R2</text><line x1='280' y1='70' x2='330' y2='70' stroke='#267' stroke-width='3'/><polygon points='330,70 318,63 318,77' fill='#267'/><text x='305' y='55' text-anchor='middle' font-size='17'>I</text><text x='310' y='225' text-anchor='middle' font-size='16'>Générateur : force électromotrice E et résistance interne r</text></svg>",
            legende: "Le courant a la même intensité dans chaque dipôle. La résistance interne r est incluse dans le modèle du générateur."
          },
          {
            type: "regle",
            titre: "Association de résistances en série",
            texte: "Pour des résistances R1, R2, … en série, la résistance équivalente vaut Req = R1 + R2 + …. Avec une même intensité I, la somme de leurs tensions est Req × I."
          }
        ]
      },

      {
        id: "sp1-ch15-pouillet",
        titre: "2. Loi de Pouillet pour une boucle simple",
        blocs: [
          {
            type: "definition",
            titre: "Situation étudiée",
            texte: "Considérons un générateur réel de force électromotrice E et de résistance interne r, alimentant des conducteurs ohmiques en série de résistance totale R. On suppose un régime continu et les fils de résistance négligeable."
          },
          {
            type: "regle",
            titre: "Établissement de la loi",
            texte: "La tension aux bornes du générateur qui débite est U = E − rI. La tension aux bornes de l’ensemble des résistances est U = RI. En les égalant : E − rI = RI, donc E = (R + r)I. Ainsi I = E/(R + r)."
          },
          {
            type: "exemple",
            titre: "Calcul de l’intensité",
            texte: "Un générateur de force électromotrice E = 12 V et de résistance interne r = 1,0 Ω alimente une résistance R = 5,0 Ω. L’intensité vaut I = 12/(5,0 + 1,0) = 2,0 A. La tension du générateur est U = E − rI = 10 V ; celle de la résistance est aussi U = RI = 10 V."
          },
          {
            type: "methode",
            titre: "Utiliser la loi de Pouillet",
            texte: "1. Vérifier que les dipôles considérés forment une seule boucle série. 2. Additionner les résistances externes et internes. 3. Écrire l’expression adaptée à la boucle. 4. Calculer I en ampères. 5. Vérifier le résultat avec les tensions et la loi des mailles."
          },
          {
            type: "remarque",
            titre: "Limites du modèle",
            texte: "La formule I = E/(R + r) correspond à la situation décrite : un générateur et des résistances en série. Elle ne s’applique pas directement à un circuit comportant des dérivations ou un récepteur actif sans adapter le bilan."
          }
        ]
      },

      {
        id: "sp1-ch15-moteur",
        titre: "3. Boucle avec un récepteur actif",
        blocs: [
          {
            type: "definition",
            titre: "Un moteur dans la boucle",
            texte: "Un moteur en fonctionnement peut être modélisé par une force contre-électromotrice E′ et une résistance interne r′. En convention récepteur, sa tension est Um = E′ + r′I."
          },
          {
            type: "regle",
            titre: "Expression de l’intensité",
            texte: "Pour une boucle série comprenant un générateur E, r, un moteur E′, r′ et une résistance R, la loi des mailles donne E − rI = E′ + r′I + RI. Donc I = (E − E′)/(R + r + r′), pour le fonctionnement supposé où le générateur débite et le moteur reçoit l’énergie."
          },
          {
            type: "exemple",
            titre: "Générateur et moteur",
            texte: "Avec E = 12 V, E′ = 6,0 V, R = 2,0 Ω, r = 0,50 Ω et r′ = 0,50 Ω : I = (12 − 6,0)/(2,0 + 0,50 + 0,50) = 2,0 A. La tension du générateur vaut 11 V ; celle du moteur vaut 7,0 V ; celle de R vaut 4,0 V. Le bilan est 11 = 7,0 + 4,0 V."
          },
          {
            type: "remarque",
            titre: "Interpréter le signe",
            texte: "Si le calcul donne une intensité négative, le sens réel du courant est opposé au sens choisi. Il faut alors réexaminer le fonctionnement des dipôles : on ne peut pas affirmer automatiquement que le générateur débite et que le moteur fonctionne comme récepteur dans le sens initialement supposé."
          }
        ]
      },

      {
        id: "sp1-ch15-derivations",
        titre: "4. Attention aux dérivations",
        blocs: [
          {
            type: "definition",
            titre: "Nœud et branches",
            texte: "Un nœud est un point où se rejoignent plusieurs branches d’un circuit. Dans une dérivation, le courant peut se partager entre plusieurs branches."
          },
          {
            type: "regle",
            titre: "Loi des nœuds",
            texte: "À un nœud, la somme des intensités des courants entrants est égale à la somme des intensités des courants sortants. Pour deux branches alimentées par un courant I : I = I1 + I2."
          },
          {
            type: "regle",
            titre: "Tension dans des branches en dérivation",
            texte: "Deux dipôles reliés aux mêmes points A et B sont soumis à la même tension UAB. Pour deux résistances R1 et R2 en dérivation : 1/Req = 1/R1 + 1/R2."
          },
          {
            type: "schema",
            titre: "Deux résistances en dérivation",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 250' role='img' aria-label='Deux résistances R1 et R2 sont reliées en parallèle entre les mêmes points A et B. Le courant I entrant en A se partage en I1 et I2.'><circle cx='100' cy='125' r='5' fill='#222'/><circle cx='520' cy='125' r='5' fill='#222'/><text x='100' y='115' text-anchor='middle' font-size='18'>A</text><text x='520' y='115' text-anchor='middle' font-size='18'>B</text><path d='M100 125 V60 H245 M375 60 H520 V125 M100 125 V190 H245 M375 190 H520 V125' fill='none' stroke='#222' stroke-width='3'/><rect x='245' y='40' width='130' height='40' fill='white' stroke='#222' stroke-width='3'/><text x='310' y='66' text-anchor='middle' font-size='17'>R1</text><rect x='245' y='170' width='130' height='40' fill='white' stroke='#222' stroke-width='3'/><text x='310' y='196' text-anchor='middle' font-size='17'>R2</text><line x1='20' y1='125' x2='95' y2='125' stroke='#267' stroke-width='3'/><polygon points='95,125 83,118 83,132' fill='#267'/><text x='55' y='110' text-anchor='middle' font-size='16'>I</text><line x1='145' y1='60' x2='215' y2='60' stroke='#267' stroke-width='3'/><polygon points='215,60 203,53 203,67' fill='#267'/><text x='180' y='48' text-anchor='middle' font-size='16'>I1</text><line x1='145' y1='190' x2='215' y2='190' stroke='#267' stroke-width='3'/><polygon points='215,190 203,183 203,197' fill='#267'/><text x='180' y='178' text-anchor='middle' font-size='16'>I2</text></svg>",
            legende: "Les deux résistances ont la même tension entre A et B ; le courant entrant se partage : I = I1 + I2."
          },
          {
            type: "exemple",
            titre: "Résistance équivalente",
            texte: "Deux résistances de 6,0 Ω et 3,0 Ω sont en dérivation. 1/Req = 1/6,0 + 1/3,0 = 1/2,0 ; donc Req = 2,0 Ω. On peut ensuite utiliser cette résistance équivalente dans l’étude du reste du circuit."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Ces circuits sont des modèles de calcul. Ne court-circuite pas un générateur et ne réalise aucun montage sur le secteur ou avec une source inconnue."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Deux résistances de 4,0 Ω et 7,0 Ω sont associées en série. Calcule leur résistance équivalente.",
        correction: "En série, Req = R1 + R2 = 4,0 + 7,0 = 11 Ω."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "À un nœud, un courant de 3,0 A se partage en deux courants. Le premier vaut 1,2 A. Calcule l’intensité du second.",
        correction: "La loi des nœuds donne I = I1 + I2. Donc I2 = 3,0 − 1,2 = 1,8 A."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un générateur de force électromotrice E = 9,0 V et de résistance interne r = 1,0 Ω alimente une résistance R = 8,0 Ω dans une boucle série. Calcule l’intensité du courant.",
        correction: "I = E/(R + r) = 9,0/(8,0 + 1,0) = 1,0 A."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux résistances de 6,0 Ω et 3,0 Ω sont en dérivation sous une tension commune de 12 V. Calcule le courant dans chaque résistance et le courant total.",
        correction: "I1 = U/R1 = 12/6,0 = 2,0 A. I2 = U/R2 = 12/3,0 = 4,0 A. Le courant total vaut I = I1 + I2 = 6,0 A."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un générateur E = 15 V, r = 1,0 Ω alimente en série deux résistances R1 = 2,0 Ω et R2 = 4,0 Ω. Calcule l’intensité puis les tensions aux bornes du générateur et de chaque résistance. Vérifie la loi des mailles.",
        correction: "La résistance totale est 1,0 + 2,0 + 4,0 = 7,0 Ω. I = 15/7,0 ≈ 2,14 A. U1 = R1I ≈ 4,29 V et U2 = R2I ≈ 8,57 V. La tension du générateur est U = E − rI ≈ 12,86 V. On vérifie U1 + U2 ≈ 12,86 V."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une boucle série comprend un générateur E = 18 V, r = 1,0 Ω, un moteur modélisé par E′ = 8,0 V et r′ = 1,0 Ω, ainsi qu’une résistance R = 3,0 Ω. Calcule l’intensité, puis la tension du moteur.",
        correction: "I = (E − E′)/(R + r + r′) = (18 − 8,0)/(3,0 + 1,0 + 1,0) = 2,0 A. La tension du moteur vaut Um = E′ + r′I = 8,0 + 1,0 × 2,0 = 10 V."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un générateur de force électromotrice E = 12 V et de résistance interne r = 1,0 Ω alimente deux résistances R1 = 6,0 Ω et R2 = 3,0 Ω en dérivation. Calcule leur résistance équivalente, le courant débité par le générateur, la tension commune aux deux branches et le courant dans chaque branche.",
        correction: "1/Req = 1/6,0 + 1/3,0 = 1/2,0, donc Req = 2,0 Ω. Le circuit équivalent donne I = E/(r + Req) = 12/(1,0 + 2,0) = 4,0 A. La tension commune est U = ReqI = 2,0 × 4,0 = 8,0 V. I1 = U/R1 = 8,0/6,0 ≈ 1,33 A et I2 = U/R2 = 8,0/3,0 ≈ 2,67 A. Leur somme vaut environ 4,0 A."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une boucle série comprend un générateur E = 24 V, r = 1,0 Ω, un moteur E′ = 9,0 V, r′ = 1,0 Ω et une résistance R. L’intensité mesurée est I = 3,0 A. Détermine R, puis vérifie la loi des mailles à l’aide des tensions du générateur, du moteur et de la résistance.",
        correction: "E − E′ = (R + r + r′)I. Donc R = (E − E′)/I − r − r′ = (24 − 9,0)/3,0 − 1,0 − 1,0 = 3,0 Ω. La tension du générateur est Ug = E − rI = 21 V. Celle du moteur est Um = E′ + r′I = 12 V. Celle de la résistance est UR = RI = 9,0 V. On vérifie : Ug = Um + UR = 21 V."
      }
    ]
  }
]);
