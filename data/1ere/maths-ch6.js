// ===== GUIDE - Mathématiques Première =====
// Chapitre 6 : applications, injection, surjection et bijection.

enregistrerChapitres("1ere", "maths", [
  {
    id: "m1-applications-injection-surjection",
    titre: "Chapitre 6 : Applications, injection, surjection et bijection",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m1-application-definition",
        titre: "Comprendre la notion d'application",
        blocs: [
          {
            type: "introduction",
            titre: "Associer des éléments",
            texte: "On veut associer à chaque élève d'un groupe son mois de naissance.\n\nChaque élève possède un seul mois de naissance : cette association est donc une application du groupe des élèves vers l'ensemble des douze mois.\n\nPlusieurs élèves peuvent être associés au même mois. Certains mois peuvent aussi ne correspondre à aucun élève du groupe."
          },
          {
            type: "definition",
            titre: "Définition d'une application",
            texte: "Une application f d'un ensemble E vers un ensemble F associe à chaque élément de E un unique élément de F.\n\nOn note : f : E → F.\n\nE est l'ensemble de départ et F l'ensemble d'arrivée.\n\nPour x ∈ E, l'élément associé est noté f(x). Il appartient à F."
          },
          {
            type: "exemple",
            titre: "Une application définie par un calcul",
            texte: "Soit f : ℝ → ℝ définie par f(x) = 2x + 1.\n\nÀ chaque réel x, on associe un unique réel 2x + 1.\n\nPar exemple :\n\nf(0) = 1 ;\nf(2) = 5 ;\nf(-1) = -1.\n\nOn peut écrire : x ↦ 2x + 1. La flèche ↦ indique ce que devient un élément."
          },
          {
            type: "remarque",
            titre: "Deux conditions à vérifier",
            texte: "Pour définir une application de E vers F :\n\n• chaque élément de E doit avoir une image ;\n• cette image doit être unique et appartenir à F.\n\nPar exemple, la formule x ↦ 1/x ne définit pas une application de ℝ vers ℝ, car elle n'est pas définie en 0. Elle définit en revanche une application de ℝ privé de 0 vers ℝ."
          },
          {
            type: "schema",
            titre: "Exemple d'application entre deux ensembles",
            svg: "<svg viewBox='0 0 380 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Dans E, a et b ont pour image 1, et c a pour image 2. Dans F, l’élément 3 n’a pas d’antécédent'><defs><marker id='fleche6' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0,0 L8,4 L0,8 Z' fill='#475569'/></marker></defs><rect width='380' height='220' fill='white'/><ellipse cx='85' cy='110' rx='55' ry='85' fill='#dbeafe' stroke='#2563eb'/><ellipse cx='295' cy='110' rx='55' ry='85' fill='#dcfce7' stroke='#16a34a'/><text x='85' y='20' text-anchor='middle' font-size='16'>E</text><text x='295' y='20' text-anchor='middle' font-size='16'>F</text><g font-size='17' fill='#1e293b'><text x='80' y='65'>a</text><text x='80' y='115'>b</text><text x='80' y='165'>c</text><text x='290' y='65'>1</text><text x='290' y='115'>2</text><text x='290' y='165'>3</text></g><g stroke='#475569' stroke-width='2' marker-end='url(#fleche6)'><line x1='98' y1='60' x2='275' y2='60'/><line x1='98' y1='110' x2='275' y2='64'/><line x1='98' y1='160' x2='275' y2='112'/></g></svg>",
            legende: "Chaque élément de E possède exactement une image : f(a) = 1, f(b) = 1 et f(c) = 2. L'élément 3 de F n'a pas d'antécédent."
          }
        ]
      },

      {
        id: "m1-image-antecedent",
        titre: "Images et antécédents",
        blocs: [
          {
            type: "definition",
            titre: "Image et antécédent",
            texte: "Si f(x) = y :\n\n• y est l'image de x par f ;\n• x est un antécédent de y par f.\n\nChaque élément de l'ensemble de départ a exactement une image. En revanche, un élément de l'ensemble d'arrivée peut avoir aucun, un ou plusieurs antécédents."
          },
          {
            type: "exemple",
            titre: "Avec la fonction carré",
            texte: "Soit f : ℝ → ℝ définie par f(x) = x².\n\nL'image de -3 est 9, car f(-3) = 9.\n\nLes antécédents de 9 sont -3 et 3, car (-3)² = 9 et 3² = 9.\n\nLe nombre 0 a un seul antécédent : 0. Le nombre -1 n'a aucun antécédent réel, car un carré réel ne peut pas être négatif."
          },
          {
            type: "methode",
            titre: "Trouver les antécédents",
            texte: "Pour chercher les antécédents d'un élément y par une application f :\n\n1. Résous l'équation f(x) = y.\n2. Ne garde que les solutions qui appartiennent à l'ensemble de départ.\n3. Présente toutes les solutions trouvées.\n\nExemple : pour f : ℝ → ℝ, f(x) = 2x + 1, les antécédents de 7 vérifient 2x + 1 = 7. On obtient x = 3 : 7 a donc pour unique antécédent 3."
          },
          {
            type: "definition",
            titre: "Ensemble image",
            texte: "L'image de l'ensemble E par f est l'ensemble de toutes les valeurs effectivement prises par f :\n\nf(E) = {f(x) | x ∈ E}.\n\nCet ensemble est contenu dans F, mais il n'est pas nécessairement égal à F.\n\nDans le schéma précédent, f(E) = {1 ; 2}, tandis que F = {1 ; 2 ; 3}."
          },
          {
            type: "exemple",
            titre: "Image d'une partie",
            texte: "Soit f : ℝ → ℝ définie par f(x) = x², et A = {-2 ; 1 ; 3}.\n\nL'image de A est :\n\nf(A) = {f(-2) ; f(1) ; f(3)}\n= {4 ; 1 ; 9}.\n\nDans un ensemble, on ne répète pas les éléments. Ainsi, si B = {-2 ; 2}, alors f(B) = {4}."
          }
        ]
      },

      {
        id: "m1-injection",
        titre: "Reconnaître une application injective",
        blocs: [
          {
            type: "definition",
            titre: "Injection",
            texte: "Une application f : E → F est injective si deux éléments différents de E ont toujours des images différentes.\n\nAutrement dit, pour tous x et x' dans E :\n\nf(x) = f(x') entraîne x = x'.\n\nCela signifie aussi que chaque élément de F possède au plus un antécédent."
          },
          {
            type: "methode",
            titre: "Démontrer ou réfuter l'injectivité",
            texte: "Pour démontrer que f est injective :\n\n1. Prends deux éléments quelconques x et x' de E.\n2. Suppose f(x) = f(x').\n3. Montre que cette égalité impose x = x'.\n\nPour montrer que f n'est pas injective, il suffit de trouver deux éléments distincts de E ayant la même image. Un tel exemple est appelé contre-exemple."
          },
          {
            type: "exemple",
            titre: "Une application injective",
            texte: "Soit f : ℝ → ℝ définie par f(x) = 2x + 1.\n\nSupposons f(x) = f(x'). Alors :\n\n2x + 1 = 2x' + 1\n2x = 2x'\nx = x'.\n\nDonc f est injective."
          },
          {
            type: "exemple",
            titre: "Une application non injective",
            texte: "Soit g : ℝ → ℝ définie par g(x) = x².\n\nOn a g(2) = 4 et g(-2) = 4, alors que 2 ≠ -2.\n\nDeux éléments distincts ont la même image : g n'est pas injective."
          },
          {
            type: "remarque",
            titre: "Le départ compte",
            texte: "La même formule x ↦ x² définit une application injective si on prend [0 ; +∞[ comme ensemble de départ.\n\nEn effet, si x et x' sont positifs ou nuls et si x² = x'², alors x = x'."
          }
        ]
      },

      {
        id: "m1-surjection",
        titre: "Reconnaître une application surjective",
        blocs: [
          {
            type: "definition",
            titre: "Surjection",
            texte: "Une application f : E → F est surjective si chaque élément de F possède au moins un antécédent dans E.\n\nAutrement dit, pour tout y ∈ F, il existe au moins un x ∈ E tel que f(x) = y.\n\nCela équivaut à dire que f(E) = F."
          },
          {
            type: "methode",
            titre: "Démontrer ou réfuter la surjectivité",
            texte: "Pour démontrer que f est surjective :\n\n1. Prends un élément quelconque y de F.\n2. Cherche un x dans E tel que f(x) = y.\n3. Vérifie que cet antécédent existe pour tout y ∈ F.\n\nPour montrer que f n'est pas surjective, il suffit de trouver un élément de F qui n'a aucun antécédent dans E."
          },
          {
            type: "exemple",
            titre: "Une application surjective",
            texte: "Soit f : ℝ → ℝ définie par f(x) = 2x + 1.\n\nPrenons un réel quelconque y. Cherchons x tel que 2x + 1 = y.\n\nOn obtient x = (y - 1)/2, qui est bien un réel. De plus :\n\nf((y - 1)/2) = y.\n\nTout réel y a donc un antécédent : f est surjective."
          },
          {
            type: "exemple",
            titre: "Une application non surjective",
            texte: "Soit g : ℝ → ℝ définie par g(x) = x².\n\nLe nombre -1 appartient à l'ensemble d'arrivée ℝ, mais il n'a pas d'antécédent réel : x² = -1 n'a aucune solution dans ℝ.\n\nDonc g n'est pas surjective de ℝ vers ℝ."
          },
          {
            type: "remarque",
            titre: "L'arrivée compte",
            texte: "Si l'on définit h : ℝ → [0 ; +∞[ par h(x) = x², alors h est surjective.\n\nEn effet, pour tout y ≥ 0, le réel √y vérifie h(√y) = y.\n\nLa formule est la même que pour g, mais l'ensemble d'arrivée a changé."
          }
        ]
      },

      {
        id: "m1-bijection",
        titre: "Reconnaître une bijection",
        blocs: [
          {
            type: "definition",
            titre: "Injection et surjection à la fois",
            texte: "Une application est bijective si elle est à la fois injective et surjective.\n\nCela signifie que chaque élément de l'ensemble d'arrivée possède exactement un antécédent dans l'ensemble de départ."
          },
          {
            type: "tableau",
            titre: "Trois propriétés à distinguer",
            entetes: ["Propriété", "Nombre d'antécédents de chaque élément de F"],
            lignes: [
              ["Injective", "Au plus un : zéro ou un."],
              ["Surjective", "Au moins un : un ou plusieurs."],
              ["Bijective", "Exactement un."]
            ]
          },
          {
            type: "exemple",
            titre: "Une bijection de ℝ vers ℝ",
            texte: "L'application f : ℝ → ℝ définie par f(x) = 2x + 1 est injective et surjective, comme nous l'avons montré.\n\nElle est donc bijective. Pour chaque réel y, son unique antécédent est (y - 1)/2."
          },
          {
            type: "exemple",
            titre: "La fonction carré sur les réels positifs",
            texte: "Soit h : [0 ; +∞[ → [0 ; +∞[ définie par h(x) = x².\n\nElle est injective sur cet ensemble de départ. Elle est aussi surjective : tout y ≥ 0 possède l'antécédent √y.\n\nElle est donc bijective. L'unique antécédent de y est √y."
          },
          {
            type: "remarque",
            titre: "La réciproque",
            texte: "Pour une bijection, on peut associer à chaque élément de l'ensemble d'arrivée son unique antécédent. Cette association est l'application réciproque.\n\nNous étudierons sa notation et son calcul au chapitre suivant."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f : ℝ → ℝ définie par f(x) = 3x - 2.\n\n1. Calcule f(0), f(2) et f(-1).\n2. Quelle est l'image de 2 ?",
        correction: "1. f(0) = 3 × 0 - 2 = -2.\n\nf(2) = 3 × 2 - 2 = 4.\n\nf(-1) = 3 × (-1) - 2 = -5.\n\n2. L'image de 2 est 4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f : ℝ → ℝ définie par f(x) = x².\n\n1. Donne tous les antécédents réels de 16.\n2. Le nombre -4 a-t-il un antécédent ?",
        correction: "1. Les antécédents de 16 vérifient x² = 16. Ce sont -4 et 4.\n\n2. Non. Pour tout réel x, x² ≥ 0 : l'équation x² = -4 n'a aucune solution réelle."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit E = {a ; b ; c} et F = {1 ; 2 ; 3}. On définit f : E → F par f(a) = 1, f(b) = 2 et f(c) = 2.\n\n1. Donne f(E).\n2. Donne les antécédents de 2.\n3. L'application est-elle injective ? Est-elle surjective ?",
        correction: "1. Les images obtenues sont 1 et 2 : f(E) = {1 ; 2}.\n\n2. Les antécédents de 2 sont b et c.\n\n3. f n'est pas injective : b et c sont distincts mais ont la même image.\n\nElle n'est pas surjective vers F : 3 n'a aucun antécédent."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit f : ℝ → ℝ définie par f(x) = 4x - 3.\n\n1. Trouve l'antécédent de 9.\n2. Détermine f(A) pour A = {0 ; 1 ; 2}.",
        correction: "1. On résout 4x - 3 = 9. Ainsi 4x = 12, puis x = 3. L'antécédent de 9 est 3.\n\n2. f(0) = -3, f(1) = 1 et f(2) = 5.\n\nDonc f(A) = {-3 ; 1 ; 5}."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f : ℝ → ℝ définie par f(x) = 5x - 2.\n\n1. Démontre que f est injective.\n2. Démontre que f est surjective.\n3. Conclus.",
        correction: "1. Si f(x) = f(x'), alors 5x - 2 = 5x' - 2, donc 5x = 5x' et x = x'. Ainsi f est injective.\n\n2. Soit y un réel quelconque. L'équation 5x - 2 = y donne x = (y + 2)/5, qui appartient à ℝ. Ce réel vérifie f(x) = y. Ainsi f est surjective.\n\n3. f est à la fois injective et surjective : elle est bijective."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On définit g : ℝ → [0 ; +∞[ par g(x) = x².\n\n1. Montre que g n'est pas injective.\n2. Montre que g est surjective vers [0 ; +∞[.\n3. Est-elle bijective ?",
        correction: "1. g(1) = 1 et g(-1) = 1, mais 1 ≠ -1. Donc g n'est pas injective.\n\n2. Soit y ≥ 0. Le réel x = √y vérifie g(x) = (√y)² = y. Tout élément de l'ensemble d'arrivée a donc un antécédent : g est surjective.\n\n3. Non. Pour être bijective, elle devrait être injective et surjective."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit E = {-2 ; -1 ; 0 ; 1 ; 2} et F = {0 ; 1 ; 4}. On définit f : E → F par f(x) = x².\n\n1. Donne l'image de chaque élément de E.\n2. Détermine les antécédents de chaque élément de F.\n3. Étudie l'injectivité et la surjectivité de f.\n4. Si l'on remplace E par E' = {0 ; 1 ; 2}, la même formule définit-elle une bijection de E' vers F ?",
        correction: "1. f(-2) = 4 ; f(-1) = 1 ; f(0) = 0 ; f(1) = 1 ; f(2) = 4.\n\n2. Dans E :\n• 0 a pour antécédent 0 ;\n• 1 a pour antécédents -1 et 1 ;\n• 4 a pour antécédents -2 et 2.\n\n3. f n'est pas injective, car -1 et 1 ont la même image. Elle est surjective : chaque élément de F a au moins un antécédent.\n\n4. Avec E' = {0 ; 1 ; 2}, les images sont respectivement 0, 1 et 4. Chaque élément de F a exactement un antécédent dans E'. La nouvelle application est donc bijective."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Soit f : [-1 ; +∞[ → ℝ définie par f(x) = x² + 2x.\n\n1. Vérifie que f(x) = (x + 1)² - 1.\n2. Démontre que f est injective sur son ensemble de départ.\n3. f est-elle surjective vers ℝ ?\n4. Montre que la même formule définit une bijection de [-1 ; +∞[ vers [-1 ; +∞[.",
        correction: "1. (x + 1)² - 1 = x² + 2x + 1 - 1 = x² + 2x.\n\n2. Si f(x) = f(x'), alors (x + 1)² = (x' + 1)². Or x et x' appartiennent à [-1 ; +∞[, donc x + 1 et x' + 1 sont positifs ou nuls. L'égalité de leurs carrés entraîne x + 1 = x' + 1, puis x = x'. f est injective.\n\n3. Non. Pour tout x ≥ -1, f(x) = (x + 1)² - 1 ≥ -1. Par exemple, -2 n'a aucun antécédent, bien qu'il appartienne à ℝ.\n\n4. La formule prend bien ses valeurs dans [-1 ; +∞[. Elle reste injective. Pour tout y ≥ -1, posons x = -1 + √(y + 1). Alors x ≥ -1 et f(x) = (√(y + 1))² - 1 = y. Elle est donc aussi surjective vers [-1 ; +∞[, puis bijective."
      }
    ]
  }
]);
