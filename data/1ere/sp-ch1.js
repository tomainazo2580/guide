enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-mouvement-translation",
    titre: "Chapitre 1 : Mouvement de translation : position, vitesse et accélération",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch1-decrire-mouvement",
        titre: "1. Décrire un mouvement",
        blocs: [
          {
            type: "introduction",
            titre: "Un mouvement dépend de l'observateur",
            texte: "Pour décrire un mouvement, on choisit un objet étudié et un référentiel. Une personne assise dans un bus est immobile par rapport au bus, mais elle se déplace par rapport à la route. Ces deux descriptions sont compatibles : elles utilisent des référentiels différents."
          },
          {
            type: "definition",
            titre: "Système et référentiel",
            texte: "Le système est l'objet dont on étudie le mouvement. Un référentiel est un objet de référence auquel on associe un repère d'espace et une mesure du temps. Pour un mouvement près du sol, on utilise souvent le référentiel terrestre."
          },
          {
            type: "definition",
            titre: "Trajectoire",
            texte: "La trajectoire d'un point est l'ensemble des positions successives qu'il occupe dans le référentiel choisi. Elle est rectiligne si elle est une droite, circulaire si elle est un cercle, et curviligne dans les autres cas."
          },
          {
            type: "definition",
            titre: "Mouvement de translation",
            texte: "Un solide est en translation si tout segment reliant deux de ses points reste parallèle à lui-même au cours du mouvement. Ses points ont alors, à chaque instant, la même vitesse et la même accélération. La translation peut être rectiligne ou curviligne."
          },
          {
            type: "remarque",
            titre: "Translation ne signifie pas forcément ligne droite",
            texte: "Une cabine de grande roue qui reste verticale peut effectuer une translation circulaire : son orientation ne change pas, mais ses points décrivent des cercles."
          },
          {
            type: "schema",
            titre: "Repérer une position sur une trajectoire rectiligne",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 170' role='img' aria-label='Axe horizontal orienté vers la droite. Le point mobile M est à l’abscisse x positive, mesurée depuis l’origine O.'><rect width='480' height='170' fill='white'/><defs><marker id='sp1ch1axe' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#333'/></marker></defs><line x1='40' y1='90' x2='445' y2='90' stroke='#333' stroke-width='2' marker-end='url(#sp1ch1axe)'/><line x1='100' y1='82' x2='100' y2='98' stroke='#333' stroke-width='2'/><circle cx='330' cy='90' r='5' fill='#1769aa'/><line x1='100' y1='52' x2='330' y2='52' stroke='#c43b35' stroke-width='2'/><line x1='100' y1='45' x2='100' y2='59' stroke='#c43b35'/><line x1='330' y1='45' x2='330' y2='59' stroke='#c43b35'/><text x='91' y='120' font-size='15'>O</text><text x='321' y='120' font-size='15' fill='#1769aa'>M</text><text x='208' y='43' font-size='14' fill='#c43b35'>x</text><text x='448' y='95' font-size='14'>axe</text></svg>",
            legende: "La position de M est repérée par son abscisse x. Son signe dépend du côté de O où se trouve M et du sens choisi pour l'axe."
          },
          {
            type: "definition",
            titre: "Position et déplacement",
            texte: "Sur un axe orienté, la position d'un point à l'instant t est donnée par son abscisse x(t). Entre les instants t₁ et t₂, son déplacement algébrique est Δx = x(t₂) − x(t₁). Il peut être positif, négatif ou nul."
          },
          {
            type: "exemple",
            titre: "Déplacement et distance parcourue",
            texte: "Un mobile part de x = 2 m, va jusqu'à x = 7 m, puis revient à x = 4 m. Son déplacement algébrique total est 4 − 2 = 2 m. La distance parcourue est 5 + 3 = 8 m : elle tient compte du trajet, pas seulement des positions de départ et d'arrivée."
          }
        ]
      },
      {
        id: "sp1-ch1-vitesse",
        titre: "2. Vitesse",
        blocs: [
          {
            type: "definition",
            titre: "Vitesse moyenne sur un axe",
            texte: "Entre t₁ et t₂, la vitesse moyenne algébrique est vₘₒᵧ = Δx/Δt = (x₂ − x₁)/(t₂ − t₁), avec t₂ > t₁. Son signe indique le sens du déplacement global par rapport à l'axe choisi."
          },
          {
            type: "remarque",
            titre: "Vitesse moyenne et distance",
            texte: "La distance totale parcourue divisée par la durée donne la rapidité moyenne. Elle est toujours positive ou nulle et peut différer de la valeur absolue de la vitesse moyenne algébrique si le mobile change de sens."
          },
          {
            type: "definition",
            titre: "Vitesse instantanée",
            texte: "La vitesse instantanée décrit le mouvement à un instant donné. Pour un mouvement sur un axe, si x est dérivable, la vitesse algébrique est v(t) = dx/dt = x'(t). Elle est en mètre par seconde, noté m/s, si x est en mètres et t en secondes."
          },
          {
            type: "regle",
            titre: "Vecteur vitesse",
            texte: "Lorsque le point est en mouvement, son vecteur vitesse est tangent à la trajectoire et orienté dans le sens du mouvement. Sa norme est la rapidité instantanée. Sur un axe, cette rapidité est |v(t)|."
          },
          {
            type: "regle",
            titre: "Conversion d'unités",
            texte: "Pour convertir des m/s en km/h, multiplier par 3,6. Pour convertir des km/h en m/s, diviser par 3,6. Par exemple, 10 m/s = 36 km/h."
          },
          {
            type: "exemple",
            titre: "Vitesse moyenne",
            texte: "Un mobile passe de x₁ = 5 m à x₂ = 29 m entre t₁ = 2 s et t₂ = 8 s. Sa vitesse moyenne algébrique est (29 − 5)/(8 − 2) = 4 m/s. Si le mobile ne change pas de sens pendant cet intervalle, sa rapidité moyenne est aussi 4 m/s."
          },
          {
            type: "methode",
            titre: "Lire la vitesse sur un graphique",
            texte: "Sur un graphique de x en fonction de t, le coefficient directeur de la droite reliant deux points donne la vitesse moyenne entre ces instants. Le coefficient directeur de la tangente à la courbe en un point donne la vitesse instantanée à cet instant."
          }
        ]
      },
      {
        id: "sp1-ch1-acceleration",
        titre: "3. Accélération",
        blocs: [
          {
            type: "definition",
            titre: "Variation de la vitesse",
            texte: "Sur un axe, l'accélération moyenne est aₘₒᵧ = (v₂ − v₁)/(t₂ − t₁). Si v est dérivable, l'accélération instantanée algébrique est a(t) = dv/dt = v'(t) = x''(t). Son unité est le mètre par seconde au carré, noté m/s²."
          },
          {
            type: "remarque",
            titre: "Le signe de l'accélération",
            texte: "Une accélération négative ne signifie pas toujours que le mobile ralentit. Sur un axe, si vitesse et accélération ont le même signe, la rapidité augmente ; si elles ont des signes opposés, elle diminue, tant que ces signes restent inchangés."
          },
          {
            type: "exemple",
            titre: "Accélération et ralentissement",
            texte: "Un mobile a une vitesse de −6 m/s puis de −10 m/s après 2 s. Son accélération moyenne est (−10 − (−6))/2 = −2 m/s². Sa rapidité est passée de 6 à 10 m/s : il accélère dans le sens négatif de l'axe."
          },
          {
            type: "regle",
            titre: "Mouvement non rectiligne",
            texte: "Le vecteur accélération mesure la variation du vecteur vitesse. Même si la rapidité reste constante, le changement de direction de la vitesse peut produire une accélération, par exemple dans un mouvement circulaire."
          }
        ]
      },
      {
        id: "sp1-ch1-mouvements-rectilignes",
        titre: "4. Mouvements rectilignes usuels",
        blocs: [
          {
            type: "regle",
            titre: "Mouvement rectiligne uniforme",
            texte: "Dans un mouvement rectiligne uniforme, la vitesse algébrique v est constante et l'accélération est nulle. Si la position à t = 0 est x₀, alors x(t) = x₀ + vt."
          },
          {
            type: "exemple",
            titre: "Position à vitesse constante",
            texte: "Un mobile a x₀ = 3 m et v = 2 m/s. Son équation est x(t) = 3 + 2t, en unités SI. À t = 5 s, il se trouve en x = 13 m."
          },
          {
            type: "regle",
            titre: "Mouvement rectiligne à accélération constante",
            texte: "Si l'accélération algébrique a est constante, si v₀ et x₀ sont la vitesse et la position à t = 0, alors v(t) = v₀ + at et x(t) = x₀ + v₀t + 1/2 at²."
          },
          {
            type: "exemple",
            titre: "Calculer vitesse et position",
            texte: "Un mobile part de x₀ = 0 avec v₀ = 2 m/s et a = 3 m/s². Après 4 s, v = 2 + 3 × 4 = 14 m/s et x = 0 + 2 × 4 + 1/2 × 3 × 4² = 32 m."
          },
          {
            type: "schema",
            titre: "Position et vitesse pour une accélération constante",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 520 240' role='img' aria-label='Deux graphiques qualitatifs : pour une accélération positive constante et une vitesse initiale positive, la position augmente selon une courbe de plus en plus pentue et la vitesse augmente selon une droite.'><rect width='520' height='240' fill='white'/><line x1='45' y1='195' x2='235' y2='195' stroke='#333' stroke-width='2'/><line x1='45' y1='195' x2='45' y2='35' stroke='#333' stroke-width='2'/><path d='M45 175 Q140 165 225 48' fill='none' stroke='#1769aa' stroke-width='3'/><text x='28' y='30' font-size='14'>x</text><text x='230' y='215' font-size='14'>t</text><text x='75' y='225' font-size='12'>position</text><line x1='285' y1='195' x2='475' y2='195' stroke='#333' stroke-width='2'/><line x1='285' y1='195' x2='285' y2='35' stroke='#333' stroke-width='2'/><line x1='285' y1='165' x2='465' y2='55' stroke='#c43b35' stroke-width='3'/><text x='268' y='30' font-size='14'>v</text><text x='470' y='215' font-size='14'>t</text><text x='330' y='225' font-size='12'>vitesse algébrique</text></svg>",
            legende: "Exemple qualitatif avec a > 0 et v₀ > 0 : la pente du graphique de position augmente ; le graphique de vitesse est une droite de pente a."
          },
          {
            type: "methode",
            titre: "Résoudre un problème de mouvement",
            texte: "1. Choisir le référentiel et orienter l'axe. 2. Relever les données et les convertir en unités compatibles. 3. Identifier si la vitesse ou l'accélération est constante. 4. Choisir la relation adaptée et calculer. 5. Interpréter le signe et vérifier l'unité."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une personne assise dans un train observe une gare depuis sa fenêtre. Dans le référentiel du train, la personne est-elle immobile ? Dans le référentiel terrestre, le train roule : la personne est-elle immobile ?",
        correction: "Dans le référentiel du train, la personne assise est immobile par rapport au train. Dans le référentiel terrestre, elle se déplace avec le train : elle n'est donc pas immobile."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Convertir 72 km/h en m/s, puis 5 m/s en km/h.",
        correction: "72 km/h = 72/3,6 = 20 m/s. Inversement, 5 m/s = 5 × 3,6 = 18 km/h."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Sur un axe, un mobile passe de x = 4 m à x = 34 m entre les instants t = 2 s et t = 8 s. Calculer son déplacement et sa vitesse moyenne algébrique.",
        correction: "Le déplacement est Δx = 34 − 4 = 30 m. La durée est Δt = 8 − 2 = 6 s. La vitesse moyenne algébrique vaut donc 30/6 = 5 m/s."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un mobile effectue un mouvement rectiligne uniforme. À t = 0, sa position est x₀ = −2 m et sa vitesse algébrique vaut 3 m/s. Donner x(t), puis calculer sa position à t = 4 s.",
        correction: "Pour une vitesse constante, x(t) = x₀ + vt = −2 + 3t, avec x en mètres et t en secondes. À t = 4 s, x = −2 + 3 × 4 = 10 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Sur un axe, la vitesse d'un mobile passe de 4 m/s à 16 m/s en 6 s. Calculer son accélération moyenne. Si son accélération est constante et si sa position initiale est x₀ = 0, calculer son déplacement pendant ces 6 s.",
        correction: "L'accélération moyenne vaut (16 − 4)/6 = 2 m/s². L'accélération étant constante, Δx = v₀t + 1/2 at² = 4 × 6 + 1/2 × 2 × 6² = 24 + 36 = 60 m."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "La position d'un mobile sur un axe est x(t) = 2t² − 3t + 1, avec x en mètres et t en secondes. Déterminer sa vitesse et son accélération, puis calculer leurs valeurs à t = 2 s.",
        correction: "La vitesse est la dérivée de x : v(t) = 4t − 3 en m/s. L'accélération est la dérivée de v : a(t) = 4 m/s². À t = 2 s, v = 4 × 2 − 3 = 5 m/s et a = 4 m/s²."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un mobile se déplace sur un axe avec une accélération constante a = −2 m/s². À t = 0, x₀ = 0 et v₀ = 8 m/s. Déterminer l'instant où sa vitesse s'annule, sa position à cet instant et sa position à t = 6 s. Préciser le sens du mouvement avant et après l'arrêt.",
        correction: "v(t) = 8 − 2t. Elle s'annule pour t = 4 s. La position est x(t) = 8t − t². À t = 4 s, x = 32 − 16 = 16 m. À t = 6 s, x = 48 − 36 = 12 m. Avant 4 s, v > 0 : le mobile avance dans le sens positif. Après 4 s, v < 0 : il repart dans le sens négatif."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un mobile part de x = 0 m, va jusqu'à x = 20 m en 4 s, puis revient à x = 8 m en 3 s. Calculer son déplacement total, la distance totale parcourue, sa vitesse moyenne algébrique et sa rapidité moyenne sur tout le trajet.",
        correction: "Le déplacement total est 8 − 0 = 8 m. La distance parcourue est 20 + (20 − 8) = 32 m. La durée totale est 4 + 3 = 7 s. La vitesse moyenne algébrique est 8/7 m/s, soit environ 1,14 m/s. La rapidité moyenne est 32/7 m/s, soit environ 4,57 m/s."
      }
    ]
  }
]);
