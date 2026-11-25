enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-fonctions-sinus-cosinus-tangente",
    titre: "Chapitre 21 : Fonctions sinus, cosinus et tangente",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-ch21-sinus-cosinus",
        titre: "1. Les fonctions sinus et cosinus",
        blocs: [
          {
            type: "introduction",
            titre: "De l'angle à la fonction",
            texte: "À chaque nombre réel x, exprimé en radians, on associe un point du cercle trigonométrique. Son abscisse est cos x et son ordonnée est sin x. On obtient ainsi deux fonctions définies sur ℝ."
          },
          {
            type: "regle",
            titre: "Ensemble de définition et valeurs",
            texte: "Les fonctions sinus et cosinus sont définies sur ℝ. Pour tout réel x : −1 ≤ sin x ≤ 1 et −1 ≤ cos x ≤ 1."
          },
          {
            type: "regle",
            titre: "Périodicité et parité",
            texte: "Pour tout réel x : sin(x + 2π) = sin x et cos(x + 2π) = cos x. Les deux fonctions sont 2π-périodiques. De plus, sin(−x) = −sin x : le sinus est impair ; cos(−x) = cos x : le cosinus est pair."
          },
          {
            type: "remarque",
            titre: "Conséquences graphiques",
            texte: "La courbe du sinus est symétrique par rapport à l'origine du repère. Celle du cosinus est symétrique par rapport à l'axe des ordonnées. Chacune se reproduit par translation horizontale de 2π."
          },
          {
            type: "tableau",
            titre: "Valeurs utiles sur [0 ; 2π]",
            entetes: ["x", "0", "π/2", "π", "3π/2", "2π"],
            lignes: [
              ["sin x", "0", "1", "0", "−1", "0"],
              ["cos x", "1", "0", "−1", "0", "1"]
            ]
          },
          {
            type: "schema",
            titre: "Courbes du sinus et du cosinus sur [0 ; 2π]",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 250' role='img' aria-label='Courbes du sinus et du cosinus de zéro à deux pi, avec leurs valeurs remarquables.'><rect width='500' height='250' fill='white'/><line x1='55' y1='120' x2='465' y2='120' stroke='#333'/><line x1='60' y1='30' x2='60' y2='210' stroke='#333'/><line x1='60' y1='50' x2='460' y2='50' stroke='#ccc' stroke-dasharray='4 4'/><line x1='60' y1='190' x2='460' y2='190' stroke='#ccc' stroke-dasharray='4 4'/><path d='M60 120 C93.33 46.7 126.67 26.67 160 50 C193.33 73.33 226.67 120 260 120 C293.33 120 326.67 166.67 360 190 C393.33 213.33 426.67 193.3 460 120' fill='none' stroke='#1769aa' stroke-width='3' visibility='hidden'/><polyline points='60,120 80,98.37 100,78.86 120,63.37 140,53.43 160,50 180,53.43 200,63.37 220,78.86 240,98.37 260,120 280,141.63 300,161.14 320,176.63 340,186.57 360,190 380,186.57 400,176.63 420,161.14 440,141.63 460,120' fill='none' stroke='#1769aa' stroke-width='3'/><polyline points='60,50 80,53.43 100,63.37 120,78.86 140,98.37 160,120 180,141.63 200,161.14 220,176.63 240,186.57 260,190 280,186.57 300,176.63 320,161.14 340,141.63 360,120 380,98.37 400,78.86 420,63.37 440,53.43 460,50' fill='none' stroke='#c43b35' stroke-width='3'/><text x='35' y='54' font-size='13'>1</text><text x='30' y='194' font-size='13'>−1</text><text x='55' y='139' font-size='13'>0</text><text x='150' y='139' font-size='13'>π/2</text><text x='255' y='139' font-size='13'>π</text><text x='346' y='139' font-size='13'>3π/2</text><text x='450' y='139' font-size='13'>2π</text><text x='180' y='24' font-size='14' fill='#1769aa'>bleu : sin x</text><text x='300' y='24' font-size='14' fill='#c43b35'>rouge : cos x</text></svg>",
            legende: "Les tracés approchent les courbes en reliant des points calculés. Les valeurs aux angles indiqués sont exactes."
          },
          {
            type: "regle",
            titre: "Dérivées",
            texte: "Les fonctions sinus et cosinus sont dérivables sur ℝ : (sin x)' = cos x et (cos x)' = −sin x. Ces formules utilisent les angles exprimés en radians."
          },
          {
            type: "tableau",
            titre: "Variations sur [0 ; 2π]",
            entetes: ["Fonction", "Intervalles", "Variations"],
            lignes: [
              ["sin", "[0 ; π/2]", "croît de 0 à 1"],
              ["sin", "[π/2 ; 3π/2]", "décroît de 1 à −1"],
              ["sin", "[3π/2 ; 2π]", "croît de −1 à 0"],
              ["cos", "[0 ; π]", "décroît de 1 à −1"],
              ["cos", "[π ; 2π]", "croît de −1 à 1"]
            ]
          },
          {
            type: "exemple",
            titre: "Justifier une variation",
            texte: "Sur [0 ; π], sin x ≥ 0. La dérivée de cos x est −sin x, donc elle est négative ou nulle sur cet intervalle. La fonction cosinus y est décroissante, de cos 0 = 1 à cos π = −1."
          }
        ]
      },
      {
        id: "m1-ch21-tangente",
        titre: "2. La fonction tangente",
        blocs: [
          {
            type: "definition",
            titre: "Définition et domaine",
            texte: "Pour tout réel x tel que cos x ≠ 0, tan x = sin x / cos x. Son ensemble de définition est ℝ privé des nombres π/2 + kπ, avec k ∈ ℤ."
          },
          {
            type: "regle",
            titre: "Périodicité et parité",
            texte: "La fonction tangente est π-périodique : tan(x + π) = tan x pour tout x de son domaine. Elle est impaire : tan(−x) = −tan x. Sa courbe est donc symétrique par rapport à l'origine."
          },
          {
            type: "regle",
            titre: "Dérivée et variations",
            texte: "Sur son domaine, (tan x)' = 1/cos²x = 1 + tan²x. Cette dérivée est strictement positive : la tangente est strictement croissante sur chacun des intervalles ]−π/2 + kπ ; π/2 + kπ[, où k ∈ ℤ."
          },
          {
            type: "remarque",
            titre: "Attention aux intervalles",
            texte: "La tangente n'est pas croissante sur tout son domaine pris d'un seul bloc : les valeurs interdites séparent ce domaine en plusieurs intervalles."
          },
          {
            type: "regle",
            titre: "Limites et asymptotes",
            texte: "Sur ]−π/2 ; π/2[, tan x tend vers −∞ lorsque x tend vers −π/2 par la droite, et vers +∞ lorsque x tend vers π/2 par la gauche. Par périodicité, les droites d'équations x = π/2 + kπ sont des asymptotes verticales."
          },
          {
            type: "schema",
            titre: "Une branche de la courbe de la tangente",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250' role='img' aria-label='Branche croissante de la tangente entre moins pi sur deux et pi sur deux, avec deux asymptotes verticales.'><rect width='400' height='250' fill='white'/><line x1='25' y1='125' x2='375' y2='125' stroke='#333'/><line x1='200' y1='20' x2='200' y2='230' stroke='#333'/><line x1='80' y1='20' x2='80' y2='230' stroke='#c43b35' stroke-dasharray='5 4'/><line x1='320' y1='20' x2='320' y2='230' stroke='#c43b35' stroke-dasharray='5 4'/><polyline points='100,229.5 110,196 120,176.96 140,155 160,143.19 180,133.57 200,125 220,116.43 240,106.81 260,95 280,73.04 290,54 300,20.5' fill='none' stroke='#1769aa' stroke-width='3'/><circle cx='140' cy='155' r='3' fill='#1769aa'/><circle cx='260' cy='95' r='3' fill='#1769aa'/><text x='62' y='146' font-size='13'>−π/2</text><text x='129' y='145' font-size='13'>−π/4</text><text x='190' y='144' font-size='13'>0</text><text x='250' y='145' font-size='13'>π/4</text><text x='307' y='146' font-size='13'>π/2</text><text x='207' y='98' font-size='13'>1</text><text x='205' y='160' font-size='13'>−1</text><text x='110' y='18' font-size='13' fill='#1769aa'>y = tan x</text></svg>",
            legende: "La branche bleue est représentée approximativement. Les droites rouges en pointillés sont les asymptotes x = −π/2 et x = π/2 ; elles ne font pas partie de la courbe."
          },
          {
            type: "exemple",
            titre: "Comparer deux tangentes",
            texte: "Comme −π/4 < π/6 et que ces deux angles appartiennent à ]−π/2 ; π/2[, la croissance de la tangente donne tan(−π/4) < tan(π/6)."
          }
        ]
      },
      {
        id: "m1-ch21-applications",
        titre: "3. Utiliser les fonctions trigonométriques",
        blocs: [
          {
            type: "methode",
            titre: "Étudier une fonction trigonométrique",
            texte: "1. Déterminer son domaine. 2. Rechercher une période et une éventuelle parité. 3. Calculer la dérivée et étudier son signe sur un intervalle adapté. 4. Calculer les valeurs ou limites nécessaires. 5. Construire les variations et, si demandé, prolonger le tracé par périodicité."
          },
          {
            type: "regle",
            titre: "Dérivée d'une fonction composée",
            texte: "Si u est dérivable, alors (sin u)' = u' cos u et (cos u)' = −u' sin u. Là où cos u ≠ 0, (tan u)' = u'/cos²u."
          },
          {
            type: "exemple",
            titre: "Dériver puis étudier",
            texte: "Soit f(x) = sin(2x). Elle est définie sur ℝ et f'(x) = 2cos(2x). Sur [0 ; π/2], cos(2x) est positif ou nul sur [0 ; π/4], puis négatif ou nul sur [π/4 ; π/2]. Ainsi f croît de 0 à 1 sur [0 ; π/4], puis décroît de 1 à 0 sur [π/4 ; π/2]."
          },
          {
            type: "exemple",
            titre: "Déterminer une période",
            texte: "Pour f(x) = sin(2x), on a f(x + π) = sin(2x + 2π) = sin(2x). Donc π est une période de f. En revanche, 2π reste aussi une période, mais ce n'est pas sa plus petite période strictement positive."
          },
          {
            type: "exemple",
            titre: "Résolution graphique et vérification",
            texte: "Les intersections de la courbe y = cos x avec la droite y = 1/2 représentent les solutions de cos x = 1/2. Sur [0 ; 2π[, le cercle ou les valeurs exactes donnent π/3 et 5π/3. Un graphique permet d'estimer les solutions ; il ne suffit pas toujours à établir leurs valeurs exactes."
          },
          {
            type: "remarque",
            titre: "Erreurs à éviter",
            texte: "Ne pas confondre les périodes 2π du sinus et du cosinus avec la période π de la tangente. Ne pas oublier le facteur u' dans la dérivée d'une fonction composée. Toujours exclure les valeurs pour lesquelles une tangente n'est pas définie."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer sin(3π/2), cos(2π) et tan(π/4).",
        correction: "D'après les valeurs usuelles : sin(3π/2) = −1, cos(2π) = 1 et tan(π/4) = 1."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "La fonction cosinus est-elle paire ou impaire ? Quelle symétrie possède sa courbe ?",
        correction: "Pour tout réel x, cos(−x) = cos x : la fonction cosinus est paire. Sa courbe est symétrique par rapport à l'axe des ordonnées."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les valeurs interdites de tan x dans l'intervalle [−π ; π], puis calculer tan(−π/4).",
        correction: "La tangente est interdite lorsque x = π/2 + kπ. Dans [−π ; π], les valeurs interdites sont −π/2 et π/2. Par imparité, tan(−π/4) = −tan(π/4) = −1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les variations de f(x) = cos x sur [0 ; 2π] et préciser ses valeurs en 0, π et 2π.",
        correction: "f'(x) = −sin x. Sur [0 ; π], sin x ≥ 0 : f décroît de f(0) = 1 à f(π) = −1. Sur [π ; 2π], sin x ≤ 0 : f croît de −1 à f(2π) = 1."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = 2sin x + 1. Donner son domaine, une période, sa dérivée et ses valeurs minimale et maximale sur ℝ.",
        correction: "f est définie sur ℝ et 2π est une période. Sa dérivée est f'(x) = 2cos x. Comme −1 ≤ sin x ≤ 1, on a −1 ≤ 2sin x + 1 ≤ 3. Le minimum est −1, atteint notamment en x = 3π/2 ; le maximum est 3, atteint notamment en x = π/2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit g(x) = cos(2x). Calculer g'(x), puis étudier les variations de g sur [0 ; π].",
        correction: "g'(x) = −2sin(2x). Sur [0 ; π/2], sin(2x) ≥ 0, donc g décroît de g(0) = 1 à g(π/2) = −1. Sur [π/2 ; π], sin(2x) ≤ 0, donc g croît de −1 à g(π) = 1."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit h(x) = sin x + cos x sur [0 ; 2π]. Calculer h'(x), puis déterminer les variations et les extrema de h sur cet intervalle.",
        correction: "h'(x) = cos x − sin x. Ses zéros vérifient cos x = sin x, soit x = π/4 et x = 5π/4 sur [0 ; 2π]. La dérivée est positive sur [0 ; π/4[, négative sur ]π/4 ; 5π/4[, puis positive sur ]5π/4 ; 2π]. Ainsi h croît de h(0) = 1 à h(π/4) = √2, décroît jusqu'à h(5π/4) = −√2, puis croît jusqu'à h(2π) = 1. Le maximum est √2 et le minimum est −√2."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit p(x) = tan(2x). Déterminer son domaine, donner une période strictement positive et calculer sa dérivée sur son domaine. Résoudre p(x) = 1 sur [0 ; π[.",
        correction: "Il faut cos(2x) ≠ 0, donc 2x ≠ π/2 + kπ, soit x ≠ π/4 + kπ/2, k ∈ ℤ. Comme tan(2(x + π/2)) = tan(2x + π) = tan(2x), π/2 est une période. Sur le domaine, p'(x) = 2/cos²(2x). Enfin, tan(2x) = 1 équivaut à 2x = π/4 + kπ, donc x = π/8 + kπ/2. Sur [0 ; π[, les solutions sont π/8 et 5π/8 ; elles appartiennent au domaine."
      }
    ]
  }
]);
