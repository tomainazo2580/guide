// ===== GUIDE - Mathématiques 2nde =====
// Chapitre 8 : variations et extrema d'une fonction.
// Inspiré de la répartition annuelle ministérielle
// et complété par Guide.

enregistrerChapitres("2nde", "maths", [
  {
    id: "m2-variations-extrema-fonctions",
    titre: "Chapitre 8 : Variations et extrema d'une fonction",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "m2-ch8-croissance",
        titre: "Fonctions croissantes et décroissantes",
        blocs: [
          {
            type: "introduction",
            titre: "Comment évolue une fonction ?",
            texte: "Lorsque la quantité x augmente, son image f(x) peut augmenter, diminuer ou rester constante.\n\nÉtudier les variations d'une fonction consiste à préciser sur quels intervalles ces situations se produisent."
          },
          {
            type: "definition",
            titre: "Fonction croissante",
            texte: "Une fonction f est croissante sur un intervalle I si, pour tous nombres u et v de I :\n\nsi u < v, alors f(u) ≤ f(v).\n\nAutrement dit, quand les valeurs de x augmentent dans I, leurs images ne diminuent pas.\n\nSi l'on a toujours f(u) < f(v), la fonction est strictement croissante sur I."
          },
          {
            type: "definition",
            titre: "Fonction décroissante",
            texte: "Une fonction f est décroissante sur un intervalle I si, pour tous nombres u et v de I :\n\nsi u < v, alors f(u) ≥ f(v).\n\nQuand les valeurs de x augmentent dans I, leurs images n'augmentent pas.\n\nSi l'on a toujours f(u) > f(v), la fonction est strictement décroissante sur I."
          },
          {
            type: "definition",
            titre: "Fonction constante",
            texte: "Une fonction est constante sur I si elle prend la même valeur pour tous les nombres de I.\n\nPar exemple, f(x) = 3 est constante sur ℝ : quels que soient u et v, f(u) = f(v) = 3.\n\nSelon les définitions précédentes, une fonction constante est à la fois croissante et décroissante, mais elle n'est ni strictement croissante ni strictement décroissante sur un intervalle contenant plusieurs nombres."
          },
          {
            type: "remarque",
            titre: "Toujours préciser l'intervalle",
            texte: "Une fonction peut être décroissante sur un intervalle et croissante sur un autre.\n\nPar exemple, la fonction carré f(x) = x² est décroissante sur ]-∞ ; 0] et croissante sur [0 ; +∞[. Elle n'est donc ni croissante ni décroissante sur ℝ tout entier."
          },
          {
            type: "exemple",
            titre: "Comparer des images",
            texte: "Si f est croissante sur [1 ; 5], alors 2 < 4 entraîne f(2) ≤ f(4).\n\nSi g est décroissante sur [1 ; 5], alors 2 < 4 entraîne g(2) ≥ g(4).\n\nCes conclusions ne permettent pas de calculer les images : elles permettent seulement de les comparer."
          }
        ]
      },

      {
        id: "m2-ch8-graphique",
        titre: "Lire les variations sur une courbe",
        blocs: [
          {
            type: "methode",
            titre: "Observer de gauche à droite",
            texte: "Pour lire les variations sur un graphique :\n\n1. Parcours la courbe de gauche à droite, c'est-à-dire dans le sens des x croissants.\n2. Quand la courbe monte, la fonction est croissante.\n3. Quand la courbe descend, la fonction est décroissante.\n4. Si elle reste horizontale sur une portion, la fonction est constante sur cette portion.\n\nPense à préciser les intervalles de x concernés."
          },
          {
            type: "schema",
            titre: "Une courbe qui descend puis monte",
            svg: "<svg viewBox='0 0 360 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Courbe de la fonction carré : elle descend jusqu’à zéro puis monte'><rect x='5' y='5' width='350' height='210' rx='8' fill='#f8fafc' stroke='#cbd5e1'/><line x1='25' y1='175' x2='335' y2='175' stroke='#334155' stroke-width='2'/><line x1='180' y1='195' x2='180' y2='20' stroke='#334155' stroke-width='2'/><path d='M335 175 l-8 -4 M335 175 l-8 4 M180 20 l-4 8 M180 20 l4 8' fill='none' stroke='#334155' stroke-width='2'/><path d='M60 31 Q180 319 300 31' fill='none' stroke='#2563eb' stroke-width='3'/><circle cx='180' cy='175' r='5' fill='#dc2626'/><text x='188' y='194' font-size='14' fill='#334155'>0</text><text x='308' y='44' font-size='14' fill='#1d4ed8'>y = x²</text><text x='68' y='165' font-size='13' fill='#334155'>descend</text><text x='235' y='165' font-size='13' fill='#334155'>monte</text><text x='325' y='199' font-size='14' fill='#334155'>x</text><text x='190' y='30' font-size='14' fill='#334155'>y</text></svg>",
            legende: "Sur la portion représentée, la courbe de x² descend jusqu'à l'origine puis monte. En réalité, ces variations se poursuivent respectivement sur ]-∞ ; 0] et [0 ; +∞[."
          },
          {
            type: "remarque",
            titre: "Une lecture parfois approximative",
            texte: "Une courbe dessinée aide à conjecturer les variations, c'est-à-dire à proposer un résultat.\n\nUn dessin imprécis ou limité à une partie du domaine ne suffit pas toujours à démontrer ce résultat sur tout un intervalle. Une justification par le calcul peut être nécessaire."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre signe et variation",
            texte: "Une fonction peut être négative tout en étant croissante.\n\nPar exemple, f(x) = x sur [-3 ; -1] est croissante : quand x augmente, f(x) augmente. Pourtant, toutes ses valeurs sur cet intervalle sont négatives."
          }
        ]
      },

      {
        id: "m2-ch8-tableau",
        titre: "Construire et lire un tableau de variations",
        blocs: [
          {
            type: "definition",
            titre: "Rôle du tableau",
            texte: "Un tableau de variations résume les intervalles sur lesquels une fonction est croissante ou décroissante.\n\nLa première ligne indique les valeurs de x qui délimitent ces intervalles. La deuxième indique l'évolution de f(x) et, lorsqu'elles sont connues, les images aux points importants.\n\nUne flèche ↗ indique une croissance ; une flèche ↘ indique une décroissance."
          },
          {
            type: "tableau",
            titre: "Exemple sur [-2 ; 3]",
            entetes: ["x", "-2", "0", "3"],
            lignes: [
              ["Variations de f", "4", "↘ 0", "↗ 9"]
            ]
          },
          {
            type: "exemple",
            titre: "Lire ce tableau",
            texte: "Ce tableau correspond à f(x) = x² sur [-2 ; 3].\n\nIl indique que :\n• f(-2) = 4 ;\n• f décroît de 4 à 0 lorsque x va de -2 à 0 ;\n• f croît de 0 à 9 lorsque x va de 0 à 3 ;\n• f(3) = 9.\n\nLe tableau résume le comportement de la fonction sur les intervalles, et pas seulement les trois images indiquées."
          },
          {
            type: "methode",
            titre: "Déduire un encadrement",
            texte: "Si f est croissante sur [a ; b], alors pour tout x ∈ [a ; b] :\n\nf(a) ≤ f(x) ≤ f(b).\n\nSi f est décroissante sur [a ; b] :\n\nf(b) ≤ f(x) ≤ f(a).\n\nExemple : f(x) = x² est croissante sur [1 ; 3]. Donc, pour 1 ≤ x ≤ 3 :\n\n1 ≤ x² ≤ 9."
          }
        ]
      },

      {
        id: "m2-ch8-extrema",
        titre: "Maximum et minimum d'une fonction",
        blocs: [
          {
            type: "definition",
            titre: "Minimum",
            texte: "La fonction f admet un minimum m sur un ensemble I si :\n\n• pour tout x ∈ I, f(x) ≥ m ;\n• il existe au moins un nombre a ∈ I tel que f(a) = m.\n\nOn dit que le minimum m est atteint en a.\n\nLe minimum est une valeur de la fonction ; a est une valeur de x où ce minimum est atteint."
          },
          {
            type: "definition",
            titre: "Maximum",
            texte: "La fonction f admet un maximum M sur I si :\n\n• pour tout x ∈ I, f(x) ≤ M ;\n• il existe au moins un nombre a ∈ I tel que f(a) = M.\n\nOn dit que le maximum M est atteint en a."
          },
          {
            type: "exemple",
            titre: "Exemple sur un intervalle",
            texte: "Pour f(x) = x² sur [-2 ; 3] :\n\n• le minimum est 0, atteint en x = 0 ;\n• le maximum est 9, atteint en x = 3.\n\nAttention : sur [-2 ; 2], le maximum est 4 et il est atteint en deux valeurs : x = -2 et x = 2."
          },
          {
            type: "remarque",
            titre: "Une borne n'est pas forcément atteinte",
            texte: "Pour f(x) = x sur ]0 ; 1[, toutes les images sont comprises strictement entre 0 et 1.\n\nLa fonction est minorée par 0 et majorée par 1, mais elle n'a ni minimum ni maximum sur cet intervalle : 0 et 1 ne sont pas atteints.\n\nL'intervalle étudié est donc essentiel."
          }
        ]
      },

      {
        id: "m2-ch8-demonstration",
        titre: "Justifier des variations par le calcul",
        blocs: [
          {
            type: "methode",
            titre: "Comparer deux images",
            texte: "Pour étudier les variations de f sur I :\n\n1. Prends deux nombres quelconques u et v de I tels que u < v.\n2. Compare f(u) et f(v), souvent en étudiant le signe de f(v) - f(u).\n3. Conclus pour tous les couples u < v de I.\n\nUne comparaison portant sur seulement deux valeurs particulières ne suffit pas à démontrer les variations sur tout un intervalle."
          },
          {
            type: "exemple",
            titre: "Une fonction affine",
            texte: "Soit f(x) = 3x - 2 sur ℝ. Prenons u < v.\n\nf(v) - f(u) = (3v - 2) - (3u - 2)\n= 3(v - u).\n\nComme v - u > 0, on a f(v) - f(u) > 0. Donc f(v) > f(u).\n\nLa fonction f est strictement croissante sur ℝ."
          },
          {
            type: "exemple",
            titre: "La fonction carré sur les positifs",
            texte: "Soit f(x) = x² sur [0 ; +∞[. Prenons 0 ≤ u < v.\n\nf(v) - f(u) = v² - u² = (v - u)(v + u).\n\nOn a v - u > 0 et v + u > 0. Le produit est donc strictement positif.\n\nAinsi f(v) > f(u) : la fonction carré est strictement croissante sur [0 ; +∞[."
          },
          {
            type: "exemple",
            titre: "La fonction carré sur les négatifs",
            texte: "Prenons maintenant u < v ≤ 0.\n\nComme précédemment : f(v) - f(u) = (v - u)(v + u).\n\nCette fois, v - u > 0 et v + u < 0. Leur produit est strictement négatif.\n\nDonc f(v) < f(u) : la fonction carré est strictement décroissante sur ]-∞ ; 0]."
          },
          {
            type: "remarque",
            titre: "Éviter une conclusion trop rapide",
            texte: "Pour comparer des carrés, il faut tenir compte du signe des nombres.\n\nPar exemple, -3 < -2 mais (-3)² = 9 > 4 = (-2)². L'ordre est inversé sur cet intervalle négatif."
          }
        ]
      },

      {
        id: "m2-ch8-second-degre",
        titre: "Variations d'une fonction du second degré",
        blocs: [
          {
            type: "rappel",
            titre: "Utiliser la forme canonique",
            texte: "Une fonction du second degré s'écrit sous forme canonique :\n\nf(x) = a(x - α)² + β, avec a ≠ 0.\n\nSon sommet a pour coordonnées (α ; β). Pour étudier ses variations, on sépare les valeurs de x situées avant α et celles situées après α."
          },
          {
            type: "regle",
            titre: "Variations sur ℝ",
            texte: "Si a > 0, f est strictement décroissante sur ]-∞ ; α] puis strictement croissante sur [α ; +∞[. Son minimum est β, atteint en α.\n\nSi a < 0, f est strictement croissante sur ]-∞ ; α] puis strictement décroissante sur [α ; +∞[. Son maximum est β, atteint en α."
          },
          {
            type: "exemple",
            titre: "Un maximum",
            texte: "Soit f(x) = -2(x - 1)² + 8.\n\nIci a = -2 < 0, α = 1 et β = 8.\n\nLa fonction est croissante sur ]-∞ ; 1], puis décroissante sur [1 ; +∞[.\n\nSon maximum sur ℝ est 8, atteint pour x = 1."
          },
          {
            type: "methode",
            titre: "Sur un intervalle limité",
            texte: "Si la fonction est étudiée seulement sur un intervalle, ne conserve que la partie du tableau correspondant à cet intervalle.\n\nExemple : f(x) = (x - 2)² sur [3 ; 5]. Comme [3 ; 5] est situé après 2, f y est croissante.\n\nSon minimum sur [3 ; 5] est f(3) = 1 ; son maximum est f(5) = 9. Le minimum global 0, atteint en 2 sur ℝ, n'est pas atteint sur [3 ; 5]."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une fonction f est croissante sur [0 ; 5]. Compare, lorsque c'est possible :\n\n1. f(1) et f(4).\n2. f(0) et f(5).\n3. f(-1) et f(2).",
        correction: "1. Comme 1 < 4 et que les deux nombres sont dans [0 ; 5], f(1) ≤ f(4).\n\n2. Comme 0 < 5, f(0) ≤ f(5).\n\n3. On ne peut pas conclure avec les seules informations données : -1 n'appartient pas à l'intervalle où l'on connaît les variations."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Soit f(x) = x² sur [-2 ; 3].\n\n1. Calcule f(-2), f(0) et f(3).\n2. Donne les intervalles où f est décroissante puis croissante.",
        correction: "1. f(-2) = 4 ; f(0) = 0 ; f(3) = 9.\n\n2. La fonction carré est décroissante sur [-2 ; 0] puis croissante sur [0 ; 3]."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit g une fonction décroissante sur [-1 ; 4], avec g(-1) = 7 et g(4) = -3.\n\n1. Compare g(0) et g(2).\n2. Encadre g(x) pour x ∈ [-1 ; 4].\n3. Donne le minimum et le maximum de g sur cet intervalle.",
        correction: "1. Comme 0 < 2 et que g est décroissante, g(0) ≥ g(2).\n\n2. Pour tout x ∈ [-1 ; 4], g(4) ≤ g(x) ≤ g(-1), donc -3 ≤ g(x) ≤ 7.\n\n3. Le minimum est -3, atteint en x = 4. Le maximum est 7, atteint en x = -1. D'autres valeurs de x peuvent éventuellement donner les mêmes images."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On considère f(x) = (x - 2)² + 1 sur ℝ.\n\n1. Indique ses intervalles de variation.\n2. Donne son minimum et précise où il est atteint.\n3. La fonction possède-t-elle un maximum sur ℝ ?",
        correction: "1. La forme canonique donne a = 1 > 0 et α = 2. La fonction décroît sur ]-∞ ; 2] puis croît sur [2 ; +∞[.\n\n2. Le minimum est 1, atteint pour x = 2.\n\n3. Non. Quand x devient arbitrairement grand, (x - 2)² + 1 peut dépasser n'importe quel nombre réel."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Démontre que f(x) = -2x + 5 est strictement décroissante sur ℝ en comparant f(u) et f(v) pour u < v.",
        correction: "Soient u et v deux réels tels que u < v. Alors v - u > 0.\n\nf(v) - f(u) = (-2v + 5) - (-2u + 5) = -2(v - u).\n\nComme -2 est négatif et v - u est positif, f(v) - f(u) < 0. Donc f(v) < f(u).\n\nCette conclusion vaut pour tous réels u < v : f est strictement décroissante sur ℝ."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = x² - 4x + 3 sur ℝ.\n\n1. Écris f sous forme canonique.\n2. Détermine ses variations.\n3. Donne son minimum et la valeur de x où il est atteint.",
        correction: "1. f(x) = (x - 2)² - 4 + 3 = (x - 2)² - 1.\n\n2. Le coefficient devant le carré est positif. f est donc décroissante sur ]-∞ ; 2] puis croissante sur [2 ; +∞[.\n\n3. Le minimum est -1, atteint pour x = 2."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On étudie f(x) = x² sur l'intervalle [-3 ; 2].\n\n1. Indique ses variations sur cet intervalle.\n2. Calcule les images de -3, 0 et 2.\n3. Détermine son minimum et son maximum sur [-3 ; 2].",
        correction: "1. f est décroissante sur [-3 ; 0] puis croissante sur [0 ; 2].\n\n2. f(-3) = 9 ; f(0) = 0 ; f(2) = 4.\n\n3. Sur la première partie, les images vont de 9 à 0 ; sur la seconde, elles vont de 0 à 4. Le minimum sur l'ensemble de l'intervalle est donc 0, atteint en 0. Le maximum est 9, atteint en -3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit f(x) = (x - 2)² sur [3 ; 6].\n\n1. Justifie que f est croissante sur cet intervalle.\n2. Détermine son minimum et son maximum sur [3 ; 6].\n3. Encadre f(x) pour 3 ≤ x ≤ 6.",
        correction: "1. La fonction décroît jusqu'à 2 puis croît après 2. Comme [3 ; 6] est inclus dans [2 ; +∞[, elle y est croissante.\n\n2. Le minimum est f(3) = 1, atteint en 3. Le maximum est f(6) = 16, atteint en 6.\n\n3. Pour tout x ∈ [3 ; 6], 1 ≤ f(x) ≤ 16."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Une cour rectangulaire a un périmètre de 40 m. Un côté mesure x mètres, avec 0 < x < 20. On note A(x) son aire en m².\n\n1. Exprime A(x) puis écris-la sous forme canonique.\n2. Étudie les variations de A sur ]0 ; 20[.\n3. Détermine l'aire maximale et les dimensions de la cour correspondante.\n4. La cour peut-elle avoir une aire de 110 m² ? Justifie.",
        correction: "1. L'autre côté mesure 20 - x. Donc A(x) = x(20 - x) = -x² + 20x.\n\nEn complétant le carré : A(x) = -(x - 10)² + 100.\n\n2. Le coefficient devant le carré est négatif. A est croissante sur ]0 ; 10] puis décroissante sur [10 ; 20[.\n\n3. Pour tout x du domaine, A(x) ≤ 100. L'égalité est atteinte pour x = 10, qui appartient au domaine. L'aire maximale est 100 m² et les deux côtés mesurent 10 m.\n\n4. Non. L'aire maximale étant 100 m², elle ne peut pas atteindre 110 m²."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "On considère f(x) = -x² + 6x - 5 sur l'intervalle [0 ; 5].\n\n1. Écris f sous forme canonique.\n2. Donne les variations de f sur [0 ; 5].\n3. Calcule f(0), f(3) et f(5), puis détermine le minimum et le maximum sur [0 ; 5].\n4. Détermine les valeurs de x de [0 ; 5] pour lesquelles f(x) ≥ 0.",
        correction: "1. f(x) = -(x² - 6x) - 5 = -[(x - 3)² - 9] - 5 = -(x - 3)² + 4.\n\n2. Comme le coefficient devant le carré est négatif, f est croissante sur [0 ; 3] puis décroissante sur [3 ; 5].\n\n3. f(0) = -5 ; f(3) = 4 ; f(5) = 0. Le maximum est 4, atteint en 3. Pour le minimum, on compare les valeurs aux extrémités : -5 < 0. Le minimum est donc -5, atteint en 0.\n\n4. f(x) = -x² + 6x - 5 = -(x - 1)(x - 5). Les racines sont 1 et 5. Le coefficient de x² est négatif : f est positive entre les racines et nulle aux racines. Les solutions sur [0 ; 5] sont donc [1 ; 5]."
      }
    ]
  }
]);
