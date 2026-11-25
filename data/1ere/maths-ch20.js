enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-identites-equations-inequations-trigonometriques",
    titre: "Chapitre 20 : Identités, équations et inéquations trigonométriques",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch20-identites",
        titre: "1. Identités trigonométriques",
        blocs: [
          {
            type: "introduction",
            titre: "Une identité est une égalité valable pour tout angle autorisé",
            texte: "Les identités permettent de transformer une expression sans changer sa valeur. Pour les utiliser correctement, il faut notamment vérifier que les tangentes et les quotients écrits existent."
          },
          {
            type: "regle",
            titre: "Identité fondamentale",
            texte: "Pour tout réel x : cos²x + sin²x = 1. On en déduit cos²x = 1 − sin²x et sin²x = 1 − cos²x."
          },
          {
            type: "definition",
            titre: "Tangente",
            texte: "Si cos x ≠ 0, alors tan x = sin x / cos x. La tangente n'est pas définie lorsque x = π/2 + kπ, avec k ∈ ℤ."
          },
          {
            type: "regle",
            titre: "Identités avec la tangente",
            texte: "Pour tout x tel que cos x ≠ 0 : 1 + tan²x = 1/cos²x. La tangente est π-périodique : tan(x + kπ) = tan x pour tout entier k."
          },
          {
            type: "exemple",
            titre: "Retrouver un cosinus",
            texte: "On sait que sin x = 3/5 et que x appartient à [0 ; π/2]. Alors cos²x = 1 − 9/25 = 16/25. Sur cet intervalle, le cosinus est positif ou nul : cos x = 4/5. Il ne suffit pas d'extraire une racine sans tenir compte du signe."
          },
          {
            type: "tableau",
            titre: "Formules d'addition et de soustraction",
            entetes: ["Expression", "Résultat"],
            lignes: [
              ["cos(a + b)", "cos a cos b − sin a sin b"],
              ["cos(a − b)", "cos a cos b + sin a sin b"],
              ["sin(a + b)", "sin a cos b + cos a sin b"],
              ["sin(a − b)", "sin a cos b − cos a sin b"]
            ]
          },
          {
            type: "regle",
            titre: "Tangente d'une somme ou d'une différence",
            texte: "Lorsque les tangentes écrites sont définies et que le dénominateur est non nul : tan(a + b) = (tan a + tan b)/(1 − tan a tan b) et tan(a − b) = (tan a − tan b)/(1 + tan a tan b)."
          },
          {
            type: "regle",
            titre: "Formules de l'angle double",
            texte: "Pour tout réel x : sin(2x) = 2 sin x cos x et cos(2x) = cos²x − sin²x = 2cos²x − 1 = 1 − 2sin²x. Lorsque les deux membres sont définis : tan(2x) = 2tan x/(1 − tan²x)."
          },
          {
            type: "exemple",
            titre: "Calculer une valeur exacte",
            texte: "Comme π/12 = π/4 − π/6, on obtient cos(π/12) = cos(π/4)cos(π/6) + sin(π/4)sin(π/6) = √6/4 + √2/4 = (√6 + √2)/4."
          },
          {
            type: "methode",
            titre: "Démontrer une identité",
            texte: "Partir d'un membre, le transformer à l'aide des identités connues, puis retrouver l'autre membre. Indiquer les conditions d'existence des expressions. Éviter de supposer au départ l'égalité que l'on veut démontrer."
          },
          {
            type: "exemple",
            titre: "Une transformation",
            texte: "Pour cos x ≠ 0 : (1 − sin²x)/cos x = cos²x/cos x = cos x. La simplification par cos x est possible uniquement parce que cos x ≠ 0."
          }
        ]
      },
      {
        id: "m1-ch20-equations",
        titre: "2. Résoudre les équations trigonométriques",
        blocs: [
          {
            type: "introduction",
            titre: "Le cercle fournit toutes les solutions",
            texte: "Sur le cercle trigonométrique, cos x est l'abscisse du point associé à x et sin x son ordonnée. Plusieurs angles peuvent correspondre à une même valeur. Les familles de solutions tiennent compte de la périodicité."
          },
          {
            type: "regle",
            titre: "Égalités avec un angle connu",
            texte: "Pour α réel et k ∈ ℤ : cos x = cos α équivaut à x = α + 2kπ ou x = −α + 2kπ. Sin x = sin α équivaut à x = α + 2kπ ou x = π − α + 2kπ. Si tan α existe, tan x = tan α équivaut à x = α + kπ."
          },
          {
            type: "remarque",
            titre: "Valeurs impossibles",
            texte: "Le sinus et le cosinus d'un angle sont toujours compris entre −1 et 1. Ainsi, sin x = 2 et cos x = −3 n'ont aucune solution réelle. La tangente, lorsqu'elle est définie, peut prendre toute valeur réelle."
          },
          {
            type: "schema",
            titre: "Deux angles ayant le même cosinus",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 260' role='img' aria-label='Cercle trigonométrique : les points correspondant aux angles alpha et moins alpha ont la même abscisse.'><rect width='360' height='260' fill='white'/><line x1='30' y1='130' x2='330' y2='130' stroke='#555'/><line x1='180' y1='245' x2='180' y2='15' stroke='#555'/><circle cx='180' cy='130' r='90' fill='none' stroke='#222' stroke-width='2'/><line x1='180' y1='130' x2='225' y2='52.06' stroke='#1769aa' stroke-width='2'/><line x1='180' y1='130' x2='225' y2='207.94' stroke='#c43b35' stroke-width='2'/><line x1='225' y1='52.06' x2='225' y2='207.94' stroke='#666' stroke-dasharray='5 4'/><circle cx='225' cy='52.06' r='4' fill='#1769aa'/><circle cx='225' cy='207.94' r='4' fill='#c43b35'/><text x='232' y='51' font-size='15' fill='#1769aa'>α</text><text x='232' y='216' font-size='15' fill='#c43b35'>−α</text><text x='213' y='126' font-size='13'>cos α</text><text x='165' y='147' font-size='13'>O</text><text x='326' y='125' font-size='13'>x</text><text x='185' y='22' font-size='13'>y</text></svg>",
            legende: "Les points d'angles α et −α sont symétriques par rapport à l'axe des abscisses : ils ont le même cosinus. Ajouter un tour, soit 2π, ne change pas le point."
          },
          {
            type: "methode",
            titre: "Résoudre sur un intervalle",
            texte: "1. Isoler la fonction trigonométrique. 2. Chercher les familles de solutions dans ℝ. 3. Garder uniquement les valeurs appartenant à l'intervalle demandé, en respectant ses bornes. 4. Éliminer d'éventuels doublons."
          },
          {
            type: "exemple",
            titre: "Une équation en cosinus",
            texte: "Résolvons cos x = 1/2 sur [0 ; 2π[. Comme 1/2 = cos(π/3), les solutions réelles sont x = π/3 + 2kπ ou x = −π/3 + 2kπ, k ∈ ℤ. Sur [0 ; 2π[, on obtient x = π/3 ou x = 5π/3."
          },
          {
            type: "exemple",
            titre: "Une équation en sinus",
            texte: "Résolvons sin x = √2/2 sur [0 ; 2π[. Comme √2/2 = sin(π/4), les solutions cherchées sont π/4 et π − π/4 = 3π/4."
          },
          {
            type: "exemple",
            titre: "Une équation en tangente",
            texte: "Résolvons tan x = −1 sur ]−π ; π]. On a tan(−π/4) = −1, donc x = −π/4 + kπ, k ∈ ℤ. Dans l'intervalle demandé, les solutions sont −π/4 et 3π/4. Ces deux angles appartiennent au domaine de la tangente."
          },
          {
            type: "exemple",
            titre: "Un angle multiple",
            texte: "Résolvons sin(2x) = 0 dans ℝ. Or sin t = 0 équivaut à t = kπ, k ∈ ℤ. Donc 2x = kπ, puis x = kπ/2, k ∈ ℤ. Il ne faut pas oublier de diviser toute l'égalité par 2."
          },
          {
            type: "methode",
            titre: "Équation factorisée",
            texte: "Si un produit est nul, au moins l'un de ses facteurs est nul. Résoudre chaque équation obtenue puis réunir les solutions, en vérifiant les conditions d'existence de l'expression de départ."
          },
          {
            type: "exemple",
            titre: "Factoriser avant de résoudre",
            texte: "2sin²x − sin x = 0 équivaut à sin x(2sin x − 1) = 0. Donc sin x = 0 ou sin x = 1/2. Sur [0 ; 2π[, les solutions sont 0, π/6, 5π/6 et π."
          }
        ]
      },
      {
        id: "m1-ch20-inequations",
        titre: "3. Résoudre les inéquations trigonométriques",
        blocs: [
          {
            type: "introduction",
            titre: "Lire une inégalité sur le cercle",
            texte: "Pour une inégalité en cosinus, on compare des abscisses. Pour une inégalité en sinus, on compare des ordonnées. Les points qui conviennent forment généralement un ou plusieurs arcs."
          },
          {
            type: "schema",
            titre: "Lecture de cos x ≥ 1/2",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 260' role='img' aria-label='Sur le cercle trigonométrique, l’arc situé à droite de la droite d’abscisse un demi correspond à cos x supérieur ou égal à un demi.'><rect width='360' height='260' fill='white'/><line x1='30' y1='130' x2='330' y2='130' stroke='#555'/><line x1='180' y1='245' x2='180' y2='15' stroke='#555'/><circle cx='180' cy='130' r='90' fill='none' stroke='#aaa' stroke-width='2'/><path d='M 225 52.06 A 90 90 0 0 1 225 207.94' fill='none' stroke='#1769aa' stroke-width='5'/><line x1='225' y1='35' x2='225' y2='225' stroke='#c43b35' stroke-dasharray='5 4'/><circle cx='225' cy='52.06' r='4' fill='#1769aa'/><circle cx='225' cy='207.94' r='4' fill='#1769aa'/><text x='232' y='50' font-size='14'>π/3</text><text x='232' y='218' font-size='14'>5π/3</text><text x='230' y='127' font-size='13' fill='#c43b35'>1/2</text><text x='165' y='147' font-size='13'>O</text><text x='326' y='125' font-size='13'>x</text><text x='185' y='22' font-size='13'>y</text></svg>",
            legende: "L'arc bleu rassemble les points d'abscisse supérieure ou égale à 1/2. Les extrémités sont incluses car l'inégalité est large."
          },
          {
            type: "methode",
            titre: "Méthode sur un intervalle de longueur 2π",
            texte: "1. Repérer les angles pour lesquels il y a égalité. 2. Placer ou imaginer les points correspondants sur le cercle. 3. Choisir les arcs dont les abscisses ou les ordonnées vérifient l'inégalité. 4. Traduire les arcs par des intervalles et décider si leurs bornes sont incluses."
          },
          {
            type: "exemple",
            titre: "Inégalité en cosinus",
            texte: "Sur [0 ; 2π[, cos x ≥ 1/2 lorsque le point est sur l'arc de droite, extrémités comprises. Donc x ∈ [0 ; π/3] ∪ [5π/3 ; 2π[. Le nombre 2π est exclu parce qu'il n'appartient pas à l'intervalle demandé."
          },
          {
            type: "exemple",
            titre: "Inégalité stricte en sinus",
            texte: "Sur [0 ; 2π[, sin x > 1/2 lorsque l'ordonnée est strictement supérieure à 1/2. Les angles limites sont π/6 et 5π/6. Ainsi x ∈ ]π/6 ; 5π/6[ : les deux bornes sont exclues."
          },
          {
            type: "exemple",
            titre: "Étendre les solutions à ℝ",
            texte: "Comme le sinus est 2π-périodique, sin x > 1/2 dans ℝ équivaut à x ∈ ]π/6 + 2kπ ; 5π/6 + 2kπ[ pour un entier k."
          },
          {
            type: "regle",
            titre: "Inégalités en tangente",
            texte: "Sur chaque intervalle ]−π/2 + kπ ; π/2 + kπ[, la fonction tangente est définie et strictement croissante. Ses bornes ne lui appartiennent pas. On peut résoudre sur un tel intervalle puis utiliser la période π."
          },
          {
            type: "exemple",
            titre: "Une inégalité en tangente",
            texte: "Sur ]−π/2 ; π/2[, tan x ≤ 1 équivaut à x ≤ π/4. Dans ℝ, les solutions sont donc les intervalles ]−π/2 + kπ ; π/4 + kπ], pour k ∈ ℤ. Les points −π/2 + kπ sont exclus car la tangente n'y est pas définie."
          },
          {
            type: "remarque",
            titre: "À vérifier",
            texte: "Une inégalité stricte exclut les points où il y a égalité. Une inégalité large les inclut seulement s'ils appartiennent au domaine et à l'intervalle demandé. Ne jamais inclure une valeur où la tangente n'est pas définie."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "On sait que sin x = 4/5 et que x ∈ [0 ; π/2]. Calculer cos x puis tan x.",
        correction: "cos²x = 1 − sin²x = 1 − 16/25 = 9/25. Comme x ∈ [0 ; π/2], cos x ≥ 0, donc cos x = 3/5. Ce cosinus est non nul, donc tan x = (4/5)/(3/5) = 4/3."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre sur [0 ; 2π[ l'équation cos x = 0.",
        correction: "Sur le cercle, l'abscisse est nulle aux points situés en haut et en bas. Les solutions sur [0 ; 2π[ sont x = π/2 et x = 3π/2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre dans ℝ l'équation sin x = −1/2. Donner ensuite les solutions sur [0 ; 2π[.",
        correction: "On a sin(−π/6) = −1/2. Dans ℝ, x = −π/6 + 2kπ ou x = π − (−π/6) + 2kπ = 7π/6 + 2kπ, avec k ∈ ℤ. Sur [0 ; 2π[, les solutions sont 7π/6 et 11π/6."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "À l'aide d'une formule d'addition, calculer la valeur exacte de sin(5π/12).",
        correction: "5π/12 = π/4 + π/6. Donc sin(5π/12) = sin(π/4)cos(π/6) + cos(π/4)sin(π/6) = √6/4 + √2/4 = (√6 + √2)/4."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre sur [0 ; 2π[ l'équation 2cos²x − cos x = 0.",
        correction: "On factorise : cos x(2cos x − 1) = 0. Ainsi cos x = 0 ou cos x = 1/2. Sur [0 ; 2π[, cos x = 0 donne π/2 et 3π/2 ; cos x = 1/2 donne π/3 et 5π/3. L'ensemble des solutions est {π/3 ; π/2 ; 3π/2 ; 5π/3}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Résoudre sur [0 ; 2π[ l'inéquation sin x ≤ −√2/2.",
        correction: "L'égalité sin x = −√2/2 est atteinte en 5π/4 et 7π/4 sur [0 ; 2π[. L'ordonnée est inférieure ou égale à cette valeur sur l'arc inférieur compris entre ces deux angles. La solution est [5π/4 ; 7π/4], bornes incluses."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Résoudre dans ℝ, puis sur [0 ; 2π[, l'équation cos(2x) = 1/2.",
        correction: "cos t = 1/2 équivaut à t = π/3 + 2kπ ou t = −π/3 + 2kπ, k ∈ ℤ. Avec t = 2x, on obtient x = π/6 + kπ ou x = −π/6 + kπ. Sur [0 ; 2π[, les solutions sont π/6, 5π/6, 7π/6 et 11π/6."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Résoudre sur ]−π ; π] l'inéquation tan x > 1. Préciser les valeurs interdites dans cet intervalle.",
        correction: "La tangente n'est pas définie en −π/2 et π/2. Sur chaque intervalle de définition, elle est strictement croissante et tan(π/4) = 1. Dans ℝ, tan x > 1 équivaut à x ∈ ]π/4 + kπ ; π/2 + kπ[, k ∈ ℤ. L'intersection avec ]−π ; π] donne ]−3π/4 ; −π/2[ ∪ ]π/4 ; π/2[. Les bornes où il y a égalité sont exclues, ainsi que les valeurs où la tangente n'existe pas."
      }
    ]
  }
]);
