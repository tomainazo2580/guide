enregistrerChapitres("tle", "maths", [
  {
    id: "tle-maths-ch34",
    titre: "Chapitre 34 : Intérêts composés, annuités et escompte commercial",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "tle-maths-ch34-l1",
        titre: "Leçon 1 : Intérêts et taux par période",
        blocs: [
          {
            type: "introduction",
            titre: "Faire évoluer un capital",
            texte: "Un capital placé peut produire des intérêts. En mathématiques financières, il faut préciser le taux, la durée et la période à laquelle le taux s’applique : année, mois ou autre période.\n\nDans ce chapitre, les calculs sont effectués sans frais ni impôts, sauf indication contraire. Les résultats monétaires peuvent être arrondis à l’unité demandée dans l’énoncé."
          },
          {
            type: "definition",
            titre: "Taux et coefficient multiplicateur",
            texte: "Un taux de 5 % correspond à i = 5/100 = 0,05. Après une période à ce taux, un capital C devient :\n\nC' = C(1 + i).\n\nLe nombre 1 + i est le coefficient multiplicateur de la période."
          },
          {
            type: "exemple",
            titre: "Une année de placement",
            texte: "Un capital de 100 000 Ar est placé pendant une année au taux annuel de 5 %.\n\nLes intérêts sont 100 000 × 0,05 = 5 000 Ar. Le capital après un an est 100 000 + 5 000 = 105 000 Ar."
          },
          {
            type: "texte",
            titre: "Intérêts simples et composés",
            texte: "À intérêts simples, les intérêts de chaque période sont calculés sur le capital initial C₀ : après n périodes au taux i, Cₙ = C₀(1 + ni).\n\nÀ intérêts composés, les intérêts sont ajoutés au capital à chaque période et produisent eux-mêmes des intérêts aux périodes suivantes."
          },
          {
            type: "remarque",
            titre: "Attention à la période",
            texte: "Un taux annuel ne peut pas être utilisé directement comme taux mensuel. Si un taux annuel effectif est i et que les intérêts sont composés mensuellement au même taux mensuel j, alors (1 + j)¹² = 1 + i.\n\nAinsi j = (1 + i)^(1/12) − 1. Diviser le taux annuel par 12 correspond à une autre convention et ne donne généralement pas ce taux mensuel équivalent."
          }
        ]
      },

      {
        id: "tle-maths-ch34-l2",
        titre: "Leçon 2 : Intérêts composés",
        blocs: [
          {
            type: "definition",
            titre: "Capital après plusieurs périodes",
            texte: "Si le capital initial C₀ est placé à intérêts composés au taux constant i par période, alors :\n\nCₙ = C₀(1 + i)ⁿ.\n\nCette formule résulte de la relation Cₙ₊₁ = Cₙ(1 + i) : les capitaux forment une suite géométrique de raison 1 + i."
          },
          {
            type: "exemple",
            titre: "Deux années de placement",
            texte: "On place 100 000 Ar à 5 % par an pendant 2 ans.\n\nC₂ = 100 000 × 1,05² = 110 250 Ar.\n\nLes intérêts totaux sont 110 250 − 100 000 = 10 250 Ar. La deuxième année, les intérêts sont calculés sur 105 000 Ar."
          },
          {
            type: "definition",
            titre: "Valeur actuelle",
            texte: "Si une somme Cₙ doit être disponible dans n périodes, sa valeur actuelle C₀ au taux i est la somme qui, placée aujourd’hui à intérêts composés, permettrait d’obtenir Cₙ :\n\nC₀ = Cₙ/(1 + i)ⁿ.\n\nCette opération s’appelle l’actualisation."
          },
          {
            type: "exemple",
            titre: "Actualiser",
            texte: "Pour obtenir 121 000 Ar dans 2 ans au taux annuel de 10 %, il faut placer aujourd’hui :\n\nC₀ = 121 000/1,10² = 100 000 Ar."
          },
          {
            type: "methode",
            titre: "Trouver une durée",
            texte: "Pour chercher le plus petit nombre entier n de périodes tel que C₀(1 + i)ⁿ ≥ C, avec C > C₀ > 0 et i > 0 :\n\nn ≥ ln(C/C₀)/ln(1 + i).\n\nOn prend ensuite le plus petit entier qui satisfait l’inégalité et on vérifie si nécessaire."
          }
        ]
      },

      {
        id: "tle-maths-ch34-l3",
        titre: "Leçon 3 : Annuités constantes",
        blocs: [
          {
            type: "definition",
            titre: "Suite de versements",
            texte: "Une annuité est un versement effectué à intervalles réguliers. Nous étudions ici des versements constants A, réalisés en fin de période, au taux constant i > 0 par période.\n\nLe moment du versement est essentiel : un versement en début de période produit des intérêts pendant une période supplémentaire par rapport à un versement en fin de période."
          },
          {
            type: "schema",
            titre: "Trois versements en fin de période",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 150'><defs><marker id='fleche34' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#334155'/></marker></defs><line x1='35' y1='80' x2='395' y2='80' stroke='#334155' stroke-width='2' marker-end='url(#fleche34)'/><line x1='55' y1='72' x2='55' y2='88' stroke='#334155'/><line x1='155' y1='72' x2='155' y2='88' stroke='#334155'/><line x1='255' y1='72' x2='255' y2='88' stroke='#334155'/><line x1='355' y1='72' x2='355' y2='88' stroke='#334155'/><text x='51' y='108' font-size='13'>0</text><text x='151' y='108' font-size='13'>1</text><text x='251' y='108' font-size='13'>2</text><text x='351' y='108' font-size='13'>3</text><text x='145' y='58' font-size='14'>A</text><text x='245' y='58' font-size='14'>A</text><text x='345' y='58' font-size='14'>A</text><text x='115' y='136' font-size='12'>Versements aux dates 1, 2 et 3</text></svg>",
            legende: "À la date 3, le premier versement a produit deux périodes d’intérêts, le deuxième une période et le troisième aucune."
          },
          {
            type: "definition",
            titre: "Valeur acquise",
            texte: "Après n versements constants A en fin de période, la valeur acquise immédiatement après le dernier versement est :\n\nSₙ = A[(1 + i)ⁿ − 1]/i, pour i > 0.\n\nElle provient de la somme A(1 + i)ⁿ⁻¹ + … + A(1 + i) + A. Si i = 0, Sₙ = nA."
          },
          {
            type: "exemple",
            titre: "Épargner trois ans",
            texte: "On verse 10 000 Ar à la fin de chacune de 3 années, au taux annuel de 10 %.\n\nÀ la fin de la troisième année, juste après le dernier versement :\nS₃ = 10 000 × (1,10² + 1,10 + 1) = 33 100 Ar."
          },
          {
            type: "definition",
            titre: "Valeur actuelle des annuités",
            texte: "La valeur à la date 0 de n versements constants A effectués en fin de période est, pour i > 0 :\n\nV₀ = A[1 − (1 + i)⁻ⁿ]/i.\n\nPour un emprunt sans frais ni versement initial, V₀ représente le capital emprunté remboursé par ces n annuités. Si i = 0, V₀ = nA."
          },
          {
            type: "methode",
            titre: "Trouver une annuité de remboursement",
            texte: "Pour rembourser un capital emprunté V₀ par n versements égaux en fin de période au taux i > 0 :\n\nA = V₀i/[1 − (1 + i)⁻ⁿ].\n\nCette formule suppose que le taux et les versements correspondent à la même période, et qu’il n’y a pas de frais supplémentaires."
          }
        ]
      },

      {
        id: "tle-maths-ch34-l4",
        titre: "Leçon 4 : Escompte commercial et méthode",
        blocs: [
          {
            type: "definition",
            titre: "Escompte commercial simple",
            texte: "Un effet de commerce peut être payé avant son échéance. Dans le modèle de l’escompte commercial simple, la retenue est calculée sur la valeur nominale N :\n\ne = Ndt.\n\nIci d est le taux d’escompte par unité de temps et t la durée restante exprimée dans cette même unité. La valeur nette avant autres frais est V = N − e."
          },
          {
            type: "exemple",
            titre: "Un effet escompté",
            texte: "Un effet de valeur nominale 200 000 Ar est escompté 90 jours avant son échéance au taux annuel de 12 %, avec une année commerciale de 360 jours.\n\nOn prend t = 90/360 = 0,25 an. L’escompte est e = 200 000 × 0,12 × 0,25 = 6 000 Ar.\n\nLa valeur nette avant autres frais est 200 000 − 6 000 = 194 000 Ar."
          },
          {
            type: "remarque",
            titre: "Conventions et frais",
            texte: "Le nombre de jours retenu pour une année dépend de la convention indiquée : 360 ou 365, par exemple. Des commissions ou taxes peuvent aussi s’ajouter à l’escompte ; il faut les traiter séparément selon l’énoncé.\n\nL’escompte commercial simple ne se confond pas avec l’actualisation à intérêts composés."
          },
          {
            type: "methode",
            titre: "Résoudre un problème financier",
            texte: "1. Relever les montants, le taux, la durée et les dates de versement.\n2. Convertir le pourcentage en nombre décimal et harmoniser les périodes.\n3. Identifier le modèle : intérêts simples, composés, annuités ou escompte commercial.\n4. Choisir la formule correspondant aux dates et effectuer le calcul.\n5. Présenter le résultat avec son unité, en précisant l’arrondi et les frais éventuels."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Convertir les taux 4 %, 7,5 % et 0,5 % en nombres décimaux.",
        correction: "On divise chaque pourcentage par 100 : 4 % = 0,04 ; 7,5 % = 0,075 ; 0,5 % = 0,005."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un capital de 50 000 Ar est placé un an à 6 %. Calculer les intérêts et le capital final.",
        correction: "Les intérêts valent 50 000 × 0,06 = 3 000 Ar. Le capital final est 50 000 + 3 000 = 53 000 Ar."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Un capital de 100 000 Ar est placé à intérêts simples à 5 % par an pendant 3 ans. Calculer le capital final.",
        correction: "C₃ = 100 000(1 + 3 × 0,05) = 115 000 Ar."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Quel coefficient multiplie un capital après une période au taux de 8 % ?",
        correction: "Le taux décimal est 0,08. Le coefficient multiplicateur est 1 + 0,08 = 1,08."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Dans une année commerciale de 360 jours, exprimer 60 jours en années.",
        correction: "La durée est 60/360 = 1/6 d’année."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer le capital obtenu en plaçant 200 000 Ar pendant 2 ans à intérêts composés au taux annuel de 5 %.",
        correction: "C₂ = 200 000 × 1,05² = 200 000 × 1,1025 = 220 500 Ar."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Quelle somme faut-il placer aujourd’hui à 10 % par an, à intérêts composés, pour obtenir 121 000 Ar dans 2 ans ?",
        correction: "La valeur actuelle est C₀ = 121 000/1,10² = 121 000/1,21 = 100 000 Ar."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On verse 20 000 Ar en fin de chacune de 2 années à 5 % par an. Quelle est la valeur acquise juste après le second versement ?",
        correction: "Le premier versement produit une année d’intérêts et le second aucune à cette date. La valeur acquise est 20 000 × 1,05 + 20 000 = 41 000 Ar."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Calculer l’escompte commercial simple et la valeur nette avant autres frais d’un effet de 100 000 Ar, escompté 90 jours avant échéance à 8 % par an. Utiliser une année de 360 jours.",
        correction: "t = 90/360 = 0,25 an. L’escompte est e = 100 000 × 0,08 × 0,25 = 2 000 Ar. La valeur nette est 100 000 − 2 000 = 98 000 Ar."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un placement a un taux annuel effectif de 21 %. Quel taux par semestre, identique à chaque semestre et composé deux fois par an, lui est équivalent ?",
        correction: "Si j est le taux semestriel, (1 + j)² = 1,21. Donc 1 + j = √1,21 = 1,10, d’où j = 0,10, soit 10 % par semestre."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Deux versements de 11 000 Ar seront reçus en fin de première et de deuxième année. Calculer leur valeur actuelle au taux annuel de 10 %.",
        correction: "La valeur actuelle est 11 000/1,10 + 11 000/1,10² = 10 000 + environ 9 090,91 = environ 19 090,91 Ar."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On place 100 000 Ar à intérêts composés à 10 % par an. Quel est le plus petit nombre entier d’années nécessaire pour atteindre au moins 130 000 Ar ?",
        correction: "Après 2 ans, le capital vaut 100 000 × 1,10² = 121 000 Ar, ce qui est insuffisant. Après 3 ans, il vaut 100 000 × 1,10³ = 133 100 Ar. Le plus petit nombre entier d’années est donc 3."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "On emprunte 210 000 Ar à 10 % par an et on rembourse par deux versements égaux en fin d’année, sans frais. Calculer l’annuité, arrondie à l’ariary.",
        correction: "La valeur actuelle vérifie 210 000 = A[1 − 1,10⁻²]/0,10. Donc A = 210 000 × 0,10/[1 − 1/1,21] = 121 000 Ar. L’annuité est de 121 000 Ar."
      },
      {
        niveau: 3,
        points: 5,
        enonce: "Entraînement de synthèse. On place 100 000 Ar à 10 % par an à intérêts composés. En plus du placement initial, on verse 20 000 Ar à la fin de chacune des deux premières années. 1. Calculer la valeur du placement initial après 2 ans. 2. Calculer la valeur acquise des deux versements juste après le second. 3. Donner le capital total à cette date.",
        correction: "1. Le placement initial devient 100 000 × 1,10² = 121 000 Ar.\n2. Le premier versement produit une année d’intérêts ; le second vient d’être effectué. Leur valeur acquise est 20 000 × 1,10 + 20 000 = 42 000 Ar.\n3. Le capital total est 121 000 + 42 000 = 163 000 Ar."
      }
    ]
  }
]);
