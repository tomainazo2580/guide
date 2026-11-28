enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch35",
    titre: "Chapitre 35 : Méthodes et entraînements de synthèse",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch35-l1",
        titre: "Leçon 1 : Organiser sa résolution",
        blocs: [
          {
            type: "introduction",
            titre: "Un problème, plusieurs étapes",
            texte: "Un exercice de synthèse peut réunir plusieurs notions : une étude de fonction, une équation, une suite ou encore un calcul de probabilité.\n\nAvant de calculer, il est utile de repérer les données, les inconnues et les liens entre les questions. Une réponse claire doit permettre au lecteur de comprendre le raisonnement."
          },
          {
            type: "methode",
            titre: "Lire et préparer",
            texte: "1. Lire tout l’énoncé et relever les données.\n2. Identifier ce qui est demandé à chaque question.\n3. Repérer les hypothèses : domaine de définition, indépendance, repère orthonormé, etc.\n4. Noter les formules ou propriétés utiles et vérifier leurs conditions d’application.\n5. Avancer dans l’ordre : un résultat précédent peut être utile ensuite."
          },
          {
            type: "methode",
            titre: "Rédiger et vérifier",
            texte: "Énoncer la propriété utilisée, effectuer le calcul, puis conclure en répondant à la question. Donner les valeurs exactes avant les approximations lorsque c’est possible.\n\nVérifier les signes, les unités et la cohérence du résultat. Si une question reste difficile, on peut utiliser son résultat admis pour poursuivre, en le signalant."
          },
          {
            type: "remarque",
            titre: "Gérer le temps",
            texte: "Commencer par les questions accessibles, réserver du temps à la relecture et ne pas rester bloqué trop longtemps sur une seule question. Les entraînements de ce chapitre servent à réviser : les consignes et les barèmes réels dépendent de l’épreuve."
          }
        ]
      },

      {
        id: "tle-maths-ch35-l2",
        titre: "Leçon 2 : Synthèse en analyse",
        blocs: [
          {
            type: "methode",
            titre: "Étudier une fonction",
            texte: "Pour une étude complète :\n1. Déterminer le domaine de définition.\n2. Calculer les limites utiles et chercher les asymptotes éventuelles.\n3. Calculer la dérivée, puis étudier son signe.\n4. Dresser les variations et calculer les valeurs remarquables.\n5. Traiter les questions de tangente, d’équation, d’aire ou de représentation demandées."
          },
          {
            type: "exemple",
            titre: "Dérivée, variations et aire",
            texte: "Soit f(x) = x² − 2x sur ℝ.\n\nf'(x) = 2x − 2. Cette dérivée est négative pour x < 1, nulle en 1 et positive pour x > 1. Ainsi f décroît sur ]−∞ ; 1], puis croît sur [1 ; +∞[. Son minimum est f(1) = −1.\n\nSur [0 ; 2], f(x) = x(x − 2) ≤ 0. L’aire comprise entre sa courbe et l’axe des abscisses vaut donc :\n−∫₀² f(x) dx = −[x³/3 − x²]₀² = 4/3 unités d’aire."
          },
          {
            type: "remarque",
            titre: "Intégrale et aire",
            texte: "L’intégrale ∫ₐᵇ f(x) dx est une aire algébrique : elle peut être négative. Pour calculer une aire géométrique, il faut tenir compte du signe de f, quitte à découper l’intervalle."
          },
          {
            type: "methode",
            titre: "Équation et logarithme",
            texte: "Pour résoudre eᵘ = c, vérifier d’abord que c > 0, puis utiliser u = ln(c). Pour une équation contenant ln(u), vérifier d’abord que u > 0.\n\nSi une solution approchée est demandée, préciser l’encadrement ou l’arrondi utilisé."
          }
        ]
      },

      {
        id: "tle-maths-ch35-l3",
        titre: "Leçon 3 : Synthèse en algèbre et géométrie",
        blocs: [
          {
            type: "methode",
            titre: "Complexes",
            texte: "Pour z = a + ib : conj(z) = a − ib et |z| = √(a² + b²). Pour diviser par un complexe non nul, on peut multiplier numérateur et dénominateur par le conjugué du dénominateur.\n\nPour z' = az + b avec a ≠ 0, on reconnaît une similitude directe de rapport |a|. Si a ≠ 1, son centre a pour affixe b/(1 − a)."
          },
          {
            type: "exemple",
            titre: "Un complexe sous deux formes",
            texte: "Pour z = 1 + i, on a |z| = √2 et un argument π/4. Ainsi :\n\nz = √2(cos(π/4) + i sin(π/4)).\n\nSon carré vaut directement (1 + i)² = 2i ; avec la forme trigonométrique, le module est aussi (√2)² = 2 et un argument est 2 × π/4 = π/2."
          },
          {
            type: "methode",
            titre: "Droite et plan dans l’espace",
            texte: "Dans un repère orthonormé, un vecteur normal au plan ax + by + cz + d = 0 est n = (a ; b ; c).\n\nPour trouver l’intersection d’une droite paramétrée et d’un plan, remplacer les coordonnées de la droite dans l’équation du plan, résoudre en t, puis calculer les coordonnées du point."
          },
          {
            type: "methode",
            titre: "Arithmétique",
            texte: "Pour une congruence, on peut remplacer chaque nombre par un reste plus simple, puis additionner ou multiplier les congruences.\n\nAttention : on ne divise pas toujours une congruence par un entier. Une division doit être justifiée, notamment par l’existence d’un inverse modulo le nombre considéré."
          }
        ]
      },

      {
        id: "tle-maths-ch35-l4",
        titre: "Leçon 4 : Synthèse en probabilités et statistiques",
        blocs: [
          {
            type: "methode",
            titre: "Probabilités",
            texte: "Définir les événements avant de calculer. Si P(A) > 0 :\n\nP(A ∩ B) = P(A)P(B | A).\n\nPour « au moins un », le complémentaire « aucun » est souvent plus simple. Si X compte les succès de n épreuves de Bernoulli indépendantes de même probabilité p, alors X ~ B(n, p)."
          },
          {
            type: "exemple",
            titre: "Une question de complémentaire",
            texte: "On lance 4 fois une pièce équilibrée, de manière indépendante. La probabilité d’obtenir au moins une face est :\n\n1 − P(aucune face) = 1 − (1/2)⁴ = 15/16."
          },
          {
            type: "methode",
            titre: "Statistiques",
            texte: "Pour une série à une variable, calculer une mesure de position et, si demandé, une mesure de dispersion. Pour deux variables, conserver les données par couples et observer le nuage avant d’utiliser un ajustement.\n\nUne droite de régression fournit une estimation ; elle ne prouve pas une relation de cause à effet."
          },
          {
            type: "remarque",
            titre: "Vérification finale",
            texte: "Une probabilité doit être comprise entre 0 et 1. La somme des probabilités d’une loi finie doit valoir 1. Une variance ne peut pas être négative."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 3,
        enonce: "Soit f(x) = x² − 4x + 3. Calculer f'(x), déterminer les variations de f et donner son minimum.",
        correction: "f'(x) = 2x − 4 = 2(x − 2). Elle est négative pour x < 2 et positive pour x > 2. Donc f décroît sur ]−∞ ; 2] puis croît sur [2 ; +∞[. Son minimum est f(2) = 4 − 8 + 3 = −1."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Résoudre dans ℝ l’équation e^(2x) = 5.",
        correction: "Comme 5 > 0, on prend le logarithme népérien : 2x = ln(5). L’unique solution est x = ln(5)/2."
      },
      {
        niveau: 1,
        points: 3,
        enonce: "Une suite géométrique vérifie u₀ = 3 et uₙ₊₁ = 2uₙ. Donner uₙ en fonction de n, puis calculer u₄.",
        correction: "La suite a pour raison 2 et pour premier terme u₀ = 3. Ainsi uₙ = 3 × 2ⁿ pour n ≥ 0. En particulier, u₄ = 3 × 16 = 48."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Calculer le module et un argument de z = −1 + i.",
        correction: "|z| = √((-1)² + 1²) = √2. Le point d’affixe z est dans le deuxième quadrant et un argument est 3π/4."
      },
      {
        niveau: 2,
        points: 4,
        enonce: "Soit f(x) = x² − 4 sur [0 ; 3]. Calculer ∫₀³ f(x) dx, puis l’aire comprise entre la courbe et l’axe des abscisses sur cet intervalle.",
        correction: "Une primitive est F(x) = x³/3 − 4x. Donc ∫₀³ f(x) dx = F(3) − F(0) = 9 − 12 = −3.\nSur [0 ; 2], f ≤ 0 ; sur [2 ; 3], f ≥ 0. L’aire vaut donc −∫₀² f(x) dx + ∫₂³ f(x) dx.\nF(2) = 8/3 − 8 = −16/3 et F(3) = −3. Ainsi l’aire vaut 16/3 + (−3 + 16/3) = 23/3 unités d’aire."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Résoudre le système : 2x + y = 7 et x − y = 2.",
        correction: "La deuxième équation donne y = x − 2. En remplaçant dans la première : 2x + x − 2 = 7, donc 3x = 9 et x = 3. Alors y = 1. Le couple solution est (3 ; 1)."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Déterminer le reste de 7⁵ dans la division euclidienne par 5.",
        correction: "On a 7 ≡ 2 modulo 5. Donc 7⁵ ≡ 2⁵ = 32 ≡ 2 modulo 5. Le reste est 2."
      },
      {
        niveau: 2,
        points: 4,
        enonce: "Soit S la transformation définie par z' = 2z + 1. Donner son rapport et son centre, puis calculer l’image du point d’affixe i.",
        correction: "S est une similitude directe de coefficient a = 2, donc de rapport 2. Comme a ≠ 1, son centre a pour affixe ω = 1/(1 − 2) = −1. L’image de i a pour affixe 2i + 1 = 1 + 2i."
      },
      {
        niveau: 2,
        points: 4,
        enonce: "Dans un repère orthonormé, déterminer l’intersection de D : x = t, y = 1 + t, z = 2 − t et du plan P : x + y + z = 5.",
        correction: "On remplace dans l’équation de P : t + (1 + t) + (2 − t) = 5, soit 3 + t = 5. Donc t = 2 et le point d’intersection est (2 ; 3 ; 0). Il vérifie 2 + 3 + 0 = 5."
      },
      {
        niveau: 2,
        points: 4,
        enonce: "Une urne contient 3 boules rouges et 2 bleues. On tire deux boules successivement sans remise. Calculer la probabilité d’obtenir au moins une boule bleue.",
        correction: "L’événement contraire est « obtenir deux rouges ». Sa probabilité est 3/5 × 2/4 = 3/10. La probabilité cherchée est donc 1 − 3/10 = 7/10."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Synthèse d’analyse. Soit f(x) = ln(x) − x + 2 sur ]0 ; +∞[. 1. Calculer f'(x) et étudier les variations. 2. Calculer f(1). 3. Montrer que l’équation f(x) = 0 possède une unique solution dans ]0 ; 1[.",
        correction: "1. f'(x) = 1/x − 1 = (1 − x)/x. Comme x > 0, f' est positive sur ]0 ; 1[ et négative sur ]1 ; +∞[. Ainsi f croît puis décroît, avec un maximum en 1.\n2. f(1) = ln(1) − 1 + 2 = 1.\n3. f est continue et strictement croissante sur ]0 ; 1]. De plus, lim(x→0⁺) f(x) = −∞ et f(1) = 1 > 0. Le théorème des valeurs intermédiaires assure l’existence d’une solution dans ]0 ; 1[, et la stricte croissance assure son unicité."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Synthèse de suites et de finance. Un capital initial de 100 000 Ar est placé à 5 % par an à intérêts composés. À la fin de chaque année, après ajout des intérêts, on verse 10 000 Ar. On note Cₙ le capital juste après le versement de la n-ième année et C₀ = 100 000. 1. Écrire la relation entre Cₙ₊₁ et Cₙ. 2. Calculer C₁ et C₂. 3. Montrer que uₙ = Cₙ + 200 000 est géométrique et donner Cₙ.",
        correction: "1. Les intérêts sont ajoutés avant le versement, donc Cₙ₊₁ = 1,05Cₙ + 10 000.\n2. C₁ = 1,05 × 100 000 + 10 000 = 115 000 Ar ; C₂ = 1,05 × 115 000 + 10 000 = 130 750 Ar.\n3. uₙ₊₁ = Cₙ₊₁ + 200 000 = 1,05Cₙ + 210 000 = 1,05(Cₙ + 200 000) = 1,05uₙ. La suite u est géométrique de raison 1,05 et u₀ = 300 000. Donc uₙ = 300 000 × 1,05ⁿ et Cₙ = 300 000 × 1,05ⁿ − 200 000."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Synthèse de probabilités. Une boîte est choisie au hasard : la boîte A avec probabilité 0,4 et la boîte B avec probabilité 0,6. La probabilité de tirer une boule rouge est 0,5 dans A et 0,25 dans B. 1. Calculer P(rouge). 2. Calculer P(A | rouge). 3. On répète toute l’expérience 3 fois indépendamment, dans les mêmes conditions. Si X compte les boules rouges, donner sa loi et calculer P(X = 0).",
        correction: "1. P(rouge) = 0,4 × 0,5 + 0,6 × 0,25 = 0,2 + 0,15 = 0,35.\n2. P(A ∩ rouge) = 0,2. Donc P(A | rouge) = 0,2/0,35 = 4/7.\n3. Chaque expérience a une probabilité de succès 0,35 et les expériences sont indépendantes. Ainsi X ~ B(3, 0,35). On obtient P(X = 0) = 0,65³ = 0,274625."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Synthèse de statistiques. On observe les couples (1 ; 2), (2 ; 3) et (3 ; 4). 1. Calculer le point moyen. 2. Déterminer la droite de régression de y en x. 3. Estimer y pour x = 2,5 et préciser si l’on interpole ou extrapole.",
        correction: "1. x̄ = (1 + 2 + 3)/3 = 2 et ȳ = (2 + 3 + 4)/3 = 3. Le point moyen est G(2 ; 3).\n2. V(x) = (1 + 4 + 9)/3 − 2² = 2/3. La moyenne des produits xy vaut (2 + 6 + 12)/3 = 20/3, donc cov(x, y) = 20/3 − 2 × 3 = 2/3. La pente est a = 1 et b = 3 − 2 = 1. La droite est ŷ = x + 1.\n3. Pour x = 2,5, le modèle donne ŷ = 3,5. Comme 2,5 est entre 1 et 3, il s’agit d’une interpolation."
      }
    ]
  }
]);
