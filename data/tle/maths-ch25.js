enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch25",
    titre: "Chapitre 25 : Similitudes du plan et nombres complexes",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch25-l1",
        titre: "Leçon 1 : Reconnaître une similitude",
        blocs: [
          {
            type: "introduction",
            titre: "Agrandir, réduire et éventuellement retourner",
            texte: "Une similitude est une transformation du plan qui multiplie toutes les distances par un même nombre strictement positif k, appelé rapport.\n\nUne rotation conserve les distances : son rapport est 1. Une homothétie de rapport 2 double les distances : son rapport comme similitude est 2. Une symétrie axiale conserve les distances, mais retourne l’orientation."
          },
          {
            type: "definition",
            titre: "Définition",
            texte: "Une transformation S est une similitude de rapport k > 0 lorsque, pour tous points A et B, on a :\n\nS(A) = A', S(B) = B' et A'B' = k × AB.\n\nUne similitude conserve l’alignement, les angles non orientés et les proportions des longueurs. Elle transforme un cercle en un cercle."
          },
          {
            type: "texte",
            titre: "Directe ou indirecte ?",
            texte: "Une similitude directe conserve l’orientation des figures : par exemple, le sens de parcours d’un triangle est conservé.\n\nUne similitude indirecte inverse cette orientation : c’est le cas d’une symétrie axiale et de ses compositions avec des similitudes directes.\n\nDans un repère orthonormé direct, les écritures complexes qui suivent permettent de distinguer les deux cas."
          },
          {
            type: "schema",
            titre: "Deux triangles semblables",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 190'><path d='M30 150 L100 150 L30 80 Z' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><path d='M185 150 L325 150 L185 10 Z' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='20' y='168' font-size='14'>A</text><text x='103' y='168' font-size='14'>B</text><text x='14' y='79' font-size='14'>C</text><text x='175' y='168' font-size='14'>A'</text><text x='328' y='168' font-size='14'>B'</text><text x='169' y='13' font-size='14'>C'</text><text x='55' y='181' font-size='13'>AB = 70</text><text x='225' y='181' font-size='13'>A'B' = 140</text></svg>",
            legende: "Le second triangle est un agrandissement de rapport 2 du premier ; son orientation est conservée."
          },
          {
            type: "exemple",
            titre: "Calculer un rapport",
            texte: "Une similitude transforme un segment [AB] de longueur 4 cm en un segment [A'B'] de longueur 6 cm.\n\nSon rapport est k = A'B'/AB = 6/4 = 3/2.\n\nTout segment de longueur 10 cm a donc pour image un segment de longueur 15 cm. Les aires sont multipliées par k² = 9/4."
          }
        ]
      },

      {
        id: "tle-maths-ch25-l2",
        titre: "Leçon 2 : Similitudes directes et écriture complexe",
        blocs: [
          {
            type: "definition",
            titre: "Écriture complexe",
            texte: "Dans un plan muni d’un repère orthonormé direct, toute similitude directe s’écrit :\n\nz' = az + b, avec a et b complexes et a ≠ 0.\n\nSon rapport est k = |a|. Un argument de a est un angle de la similitude, défini modulo 2π."
          },
          {
            type: "methode",
            titre: "Pourquoi le rapport vaut |a|",
            texte: "Pour deux points A et B d’affixes zA et zB, leurs images vérifient :\n\nzB' − zA' = a(zB − zA).\n\nEn prenant les modules : A'B' = |a| × AB.\n\nSi A ≠ B, un argument de a donne l’angle orienté du vecteur AB vers le vecteur A'B'."
          },
          {
            type: "texte",
            titre: "Centre et cas particuliers",
            texte: "Si a ≠ 1, la similitude possède un unique point fixe Ω d’affixe ω, appelé son centre :\n\nω = aω + b, donc ω = b/(1 − a).\n\nOn peut alors écrire z' − ω = a(z − ω) : il s’agit d’une rotation autour de Ω, d’angle arg(a), combinée à une homothétie de centre Ω et de rapport |a|.\n\nSi a = 1, on obtient une translation z' = z + b. Si b = 0, c’est l’identité ; sinon, la translation n’a pas de point fixe."
          },
          {
            type: "exemple",
            titre: "Identifier une similitude directe",
            texte: "Soit z' = 2iz + 1 − 2i.\n\na = 2i, donc le rapport est 2 et un angle est π/2.\n\nLe centre a pour affixe :\nω = (1 − 2i)/(1 − 2i) = 1.\n\nAinsi, la transformation est une rotation de centre d’affixe 1 et d’angle π/2, combinée à un agrandissement de rapport 2 de même centre."
          },
          {
            type: "remarque",
            titre: "Lorsque le rapport vaut 1",
            texte: "Si |a| = 1 et a ≠ 1, la similitude directe est une rotation. Si a = 1, c’est une translation, éventuellement l’identité."
          }
        ]
      },

      {
        id: "tle-maths-ch25-l3",
        titre: "Leçon 3 : Déterminer une similitude directe",
        blocs: [
          {
            type: "methode",
            titre: "À partir de deux images",
            texte: "On cherche la similitude directe envoyant A sur A' et B sur B', avec A ≠ B et A' ≠ B'.\n\n1. Écrire zA' = azA + b et zB' = azB + b.\n2. Soustraire : a = (zB' − zA')/(zB − zA).\n3. Calculer b = zA' − azA.\n4. Déterminer le rapport |a|, un angle arg(a), puis le centre si a ≠ 1.\n\nCes données déterminent une unique similitude directe."
          },
          {
            type: "exemple",
            titre: "Résolution complète",
            texte: "On cherche la similitude directe envoyant A d’affixe 0 sur A' d’affixe 1, et B d’affixe 1 sur B' d’affixe 1 + 2i.\n\nLa première image donne b = 1. La seconde donne a + 1 = 1 + 2i, donc a = 2i.\n\nAinsi z' = 2iz + 1. Son rapport est 2 et un angle est π/2.\n\nSon centre Ω vérifie ω = 2iω + 1, donc :\nω = 1/(1 − 2i) = (1 + 2i)/5.\n\nVérification : 0 a bien pour image 1 et 1 a bien pour image 1 + 2i."
          },
          {
            type: "methode",
            titre: "Utiliser les vecteurs",
            texte: "Si une similitude directe de rapport k et d’angle θ envoie A sur A' et B sur B', alors :\n\nA'B' = k × AB et (AB, A'B') = θ modulo 2π.\n\nEn complexe, cela correspond à zB' − zA' = a(zB − zA), avec a = k(cos θ + i sin θ)."
          },
          {
            type: "remarque",
            titre: "Attention aux points confondus",
            texte: "Pour utiliser la formule de a, il faut A ≠ B. De plus, A' et B' doivent être distincts : sinon a = 0, ce qui ne définit pas une similitude."
          }
        ]
      },

      {
        id: "tle-maths-ch25-l4",
        titre: "Leçon 4 : Similitudes indirectes et méthode de synthèse",
        blocs: [
          {
            type: "definition",
            titre: "Écriture complexe d’une similitude indirecte",
            texte: "Dans un repère orthonormé direct, toute similitude indirecte s’écrit :\n\nz' = a conj(z) + b, avec a ≠ 0.\n\nIci conj(z) désigne le conjugué de z. Le rapport est |a|. La conjugaison inverse l’orientation : elle correspond à la symétrie par rapport à l’axe réel."
          },
          {
            type: "exemple",
            titre: "Une symétrie axiale",
            texte: "La transformation z' = conj(z) envoie z = x + iy sur z' = x − iy. Elle conserve la partie réelle et change le signe de la partie imaginaire : c’est la symétrie par rapport à l’axe réel.\n\nSon rapport est 1 et ses points fixes sont les points d’affixe réelle."
          },
          {
            type: "texte",
            titre: "Points fixes : ne pas appliquer la formule directe",
            texte: "Pour une similitude indirecte, l’équation des points fixes est z = a conj(z) + b. On la résout en posant z = x + iy et en identifiant les parties réelle et imaginaire.\n\nSi |a| ≠ 1, il existe un unique point fixe. Si |a| = 1, il peut y avoir une droite de points fixes ou aucun point fixe. Il ne faut donc pas utiliser sans justification la formule b/(1 − a), réservée ici au cas direct."
          },
          {
            type: "exemple",
            titre: "Chercher les points fixes",
            texte: "Pour z' = conj(z) + 2, un point fixe devrait vérifier x + iy = x − iy + 2.\n\nL’égalité des parties réelles donne x = x + 2, ce qui est impossible. Il n’y a donc aucun point fixe.\n\nLa transformation est une symétrie par rapport à l’axe réel suivie d’une translation de vecteur d’affixe 2."
          },
          {
            type: "methode",
            titre: "Rédiger une étude",
            texte: "1. Identifier la forme : az + b ou a conj(z) + b, avec a ≠ 0.\n2. Conclure : similitude directe ou indirecte, de rapport |a|.\n3. Dans le cas direct, donner un angle arg(a), puis chercher le centre si a ≠ 1 ; traiter séparément le cas a = 1.\n4. Dans le cas indirect, chercher les points fixes par identification si la question le demande.\n5. Vérifier les images ou les propriétés demandées."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une similitude envoie un segment de longueur 8 cm sur un segment de longueur 12 cm. Donner son rapport et l’image d’un segment de longueur 6 cm.",
        correction: "Le rapport est k = 12/8 = 3/2. L’image d’un segment de 6 cm mesure 6 × 3/2 = 9 cm."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une similitude a pour rapport 3. Par quel nombre multiplie-t-elle les aires ? Quelle est l’image d’une aire de 5 cm² ?",
        correction: "Les aires sont multipliées par 3² = 9. L’image d’une aire de 5 cm² a donc une aire de 45 cm²."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Identifier la transformation z' = z + 3 − i.",
        correction: "C’est une translation de vecteur d’affixe 3 − i. Elle est directe et son rapport vaut 1. Comme le vecteur n’est pas nul, elle n’a pas de point fixe."
      },
      {
        niveau: 1,
        points: 3,
        enonce: "Pour z' = (1 + i)z, donner le rapport, un angle et le centre.",
        correction: "On a |1 + i| = √2 et arg(1 + i) = π/4 modulo 2π. Comme b = 0 et a ≠ 1, le centre a pour affixe 0. C’est une similitude directe de centre O, de rapport √2 et d’angle π/4."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "L’application z' = conj(z) est-elle directe ou indirecte ? Donner son rapport.",
        correction: "Elle est indirecte, car elle est de la forme a conj(z) + b avec a = 1. Son rapport est |1| = 1. C’est la symétrie par rapport à l’axe réel."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer le centre, le rapport et un angle de z' = iz + 1.",
        correction: "Le rapport est |i| = 1 et un angle est π/2. Le centre vérifie ω = iω + 1, donc ω = 1/(1 − i) = (1 + i)/2. C’est une rotation de centre d’affixe (1 + i)/2 et d’angle π/2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer la similitude directe envoyant le point d’affixe 0 sur celui d’affixe 2, et le point d’affixe 1 sur celui d’affixe 2 + i.",
        correction: "On écrit z' = az + b. L’image de 0 donne b = 2 ; celle de 1 donne a + 2 = 2 + i, donc a = i. Ainsi z' = iz + 2. Son rapport est 1 et un angle est π/2. Son centre a pour affixe 2/(1 − i) = 1 + i."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Soit S définie par z' = 2z − 3. Trouver ses points fixes et décrire S.",
        correction: "Un point fixe vérifie z = 2z − 3, donc z = 3. Le coefficient a = 2 a pour module 2 et pour argument 0. S est l’homothétie de centre d’affixe 3 et de rapport 2."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Pour la transformation z' = −conj(z), déterminer l’image de z = 2 + 3i et décrire géométriquement la transformation.",
        correction: "Pour z = 2 + 3i, on a conj(z) = 2 − 3i, donc z' = −2 + 3i. En général, x + iy devient −x + iy : c’est la symétrie par rapport à l’axe imaginaire. Elle est indirecte et de rapport 1."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer les points fixes de z' = 2conj(z).",
        correction: "Posons z = x + iy. L’équation z = 2conj(z) devient x + iy = 2x − 2iy. On obtient x = 2x et y = −2y, d’où x = 0 et y = 0. L’unique point fixe est l’origine."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une similitude directe de rapport 2 et d’angle π envoie A sur A'. Si AB = 3, donner A'B' et l’angle orienté (AB, A'B'), modulo 2π.",
        correction: "La distance est multipliée par 2 : A'B' = 6. L’angle orienté vaut π modulo 2π. Les vecteurs AB et A'B' sont donc de sens opposés."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Déterminer la similitude directe envoyant A d’affixe 1 sur A' d’affixe 2, et B d’affixe i sur B' d’affixe 2 + 2i. Donner son rapport, un angle et son centre.",
        correction: "On écrit z' = az + b. En soustrayant les égalités d’images :\na = 2i/(i − 1) = 1 − i.\nPuis b = 2 − a = 1 + i.\nAinsi z' = (1 − i)z + 1 + i.\nLe rapport est |1 − i| = √2 et un angle est −π/4. Comme a ≠ 1, le centre a pour affixe :\nω = (1 + i)/(1 − (1 − i)) = (1 + i)/i = 1 − i.\nVérification : l’image de 1 est 2, et celle de i est 2 + 2i."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Soit S : z' = (1 + i)z + 1. Calculer S(S(z)) et identifier la transformation obtenue.",
        correction: "En appliquant deux fois S :\nz'' = (1 + i)((1 + i)z + 1) + 1 = 2iz + 2 + i.\nC’est une similitude directe de rapport 2 et d’angle π/2. Son centre est (2 + i)/(1 − 2i) = i. On retrouve le centre de S, car 1/(1 − (1 + i)) = i."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Entraînement de synthèse. On considère S : z' = 2iz + 2. 1. Déterminer son rapport, un angle et son centre Ω. 2. Trouver l’image du point A d’affixe 1. 3. Si un triangle a une aire de 3 cm², quelle est l’aire de son image ?",
        correction: "1. Le coefficient a = 2i donne le rapport 2 et l’angle π/2. Le centre vérifie ω = 2iω + 2, donc ω = 2/(1 − 2i) = (2 + 4i)/5.\n2. L’image de A a pour affixe 2i + 2 = 2 + 2i.\n3. Les aires sont multipliées par 2² = 4 ; l’aire de l’image est 12 cm²."
      }
    ]
  }
]);
