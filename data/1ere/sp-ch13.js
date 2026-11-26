enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-ch13",
    titre: "Chapitre 13 : Potentiel électrique et tension",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch13-potentiel",
        titre: "1. Potentiel et tension électriques",
        blocs: [
          {
            type: "introduction",
            titre: "Comparer deux points",
            texte: "Dans un circuit, une pile crée une différence d’état électrique entre ses bornes. Pour la décrire, on utilise la tension, qui est une différence de potentiels électriques."
          },
          {
            type: "definition",
            titre: "Potentiel électrique",
            texte: "Le potentiel électrique en un point A est noté VA. Il s’exprime en volts (V). Sa valeur dépend du choix d’une référence de potentiel : on peut, par exemple, choisir VB = 0 V en un point B."
          },
          {
            type: "definition",
            titre: "Tension entre deux points",
            texte: "La tension de A par rapport à B est UAB = VA − VB. Elle s’exprime en volts. Si l’on inverse l’ordre des points, UBA = −UAB."
          },
          {
            type: "schema",
            titre: "Convention pour une tension",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 150' role='img' aria-label='Deux points A et B. La tension UAB est représentée par une flèche orientée de B vers A.'><circle cx='140' cy='90' r='5' fill='#222'/><circle cx='460' cy='90' r='5' fill='#222'/><text x='140' y='125' text-anchor='middle' font-size='20'>A</text><text x='460' y='125' text-anchor='middle' font-size='20'>B</text><line x1='460' y1='60' x2='140' y2='60' stroke='#267' stroke-width='3'/><polygon points='140,60 153,53 153,67' fill='#267'/><text x='300' y='43' text-anchor='middle' font-size='19'>UAB = VA − VB</text></svg>",
            legende: "La flèche de UAB va de B vers A. Elle indique l’ordre choisi pour la tension, pas nécessairement le sens du courant."
          },
          {
            type: "exemple",
            titre: "Calculer et interpréter une tension",
            texte: "Si VA = 8 V et VB = 3 V, alors UAB = 8 − 3 = +5 V et UBA = −5 V. A est à un potentiel supérieur à celui de B."
          },
          {
            type: "regle",
            titre: "Additivité des tensions",
            texte: "Pour trois points A, B et C : UAC = UAB + UBC. En effet, VA − VC = (VA − VB) + (VB − VC)."
          },
          {
            type: "remarque",
            titre: "La référence peut changer",
            texte: "Si l’on ajoute la même valeur à tous les potentiels, les tensions ne changent pas. Ce sont les différences de potentiel qui interviennent dans les mesures de tension."
          }
        ]
      },

      {
        id: "sp1-ch13-mesure",
        titre: "2. Mesurer une tension",
        blocs: [
          {
            type: "methode",
            titre: "Utilisation du voltmètre",
            texte: "Pour mesurer UAB, on branche le voltmètre en dérivation entre A et B : sa borne V sur A et sa borne COM sur B. L’appareil affiche alors VA − VB. Une valeur négative indique que VA est inférieur à VB."
          },
          {
            type: "schema",
            titre: "Branchement d’un voltmètre",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 230' role='img' aria-label='Un dipôle est branché entre A et B. Un voltmètre est branché en dérivation entre ces points, avec sa borne V reliée à A et sa borne COM reliée à B.'><circle cx='100' cy='70' r='5' fill='#222'/><circle cx='500' cy='70' r='5' fill='#222'/><text x='100' y='50' text-anchor='middle' font-size='18'>A</text><text x='500' y='50' text-anchor='middle' font-size='18'>B</text><line x1='100' y1='70' x2='230' y2='70' stroke='#222' stroke-width='3'/><rect x='230' y='50' width='140' height='40' fill='white' stroke='#222' stroke-width='3'/><text x='300' y='77' text-anchor='middle' font-size='17'>dipôle</text><line x1='370' y1='70' x2='500' y2='70' stroke='#222' stroke-width='3'/><path d='M100 70 V170 H255 M345 170 H500 V70' fill='none' stroke='#222' stroke-width='3'/><circle cx='300' cy='170' r='45' fill='white' stroke='#222' stroke-width='3'/><text x='300' y='178' text-anchor='middle' font-size='22'>V</text><text x='235' y='155' text-anchor='middle' font-size='15'>V</text><text x='370' y='155' text-anchor='middle' font-size='15'>COM</text></svg>",
            legende: "Le voltmètre est relié aux deux bornes du dipôle, sans couper le circuit : il est en dérivation."
          },
          {
            type: "remarque",
            titre: "Sécurité",
            texte: "Les schémas servent à apprendre les branchements. Ne réalise pas de manipulation sur le secteur ni sur une source inconnue. Toute mesure pratique doit être encadrée et utiliser un matériel adapté."
          }
        ]
      },

      {
        id: "sp1-ch13-energie",
        titre: "3. Tension et énergie électrique",
        blocs: [
          {
            type: "definition",
            titre: "Énergie potentielle électrique",
            texte: "Une charge q placée au point A de potentiel VA possède une énergie potentielle électrique Ep(A) = qVA, pour la référence choisie. Ici q est en coulombs, V en volts et Ep en joules."
          },
          {
            type: "regle",
            titre: "Variation d’énergie et travail",
            texte: "Lorsque la charge q se déplace de A vers B dans un champ électrostatique : ΔEp = Ep(B) − Ep(A) = q(VB − VA) = −qUAB. Le travail de la force électrique est W(A → B) = qUAB = −ΔEp. Un volt équivaut à un joule par coulomb."
          },
          {
            type: "exemple",
            titre: "Déplacement d’une charge positive",
            texte: "Une charge q = +2,0 × 10⁻⁶ C se déplace de A vers B, avec UAB = 100 V. Le travail de la force électrique vaut W = qUAB = +2,0 × 10⁻⁴ J. Sa variation d’énergie potentielle vaut ΔEp = −2,0 × 10⁻⁴ J."
          },
          {
            type: "methode",
            titre: "Éviter les erreurs de signe",
            texte: "1. Identifier le point de départ A et le point d’arrivée B. 2. Calculer UAB = VA − VB. 3. Conserver le signe de q dans W = qUAB. 4. Déduire ΔEp = −W. Le résultat peut être positif, négatif ou nul."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre",
            texte: "Le travail de la force électrique ne représente pas forcément à lui seul la variation d’énergie cinétique : d’autres forces peuvent aussi travailler. Si seule la force électrique travaille, alors ΔEc = W."
          }
        ]
      },

      {
        id: "sp1-ch13-champ-uniforme",
        titre: "4. Champ uniforme et différence de potentiel",
        blocs: [
          {
            type: "definition",
            titre: "Champ uniforme",
            texte: "Un champ électrique est uniforme dans une région si son vecteur garde la même direction, le même sens et la même valeur en tout point de cette région. Entre deux grandes plaques parallèles chargées, le champ peut être considéré approximativement uniforme loin des bords."
          },
          {
            type: "regle",
            titre: "Sens du champ et calcul",
            texte: "Le champ électrostatique est orienté vers les potentiels décroissants. Dans un champ uniforme, si A et B sont alignés dans le sens du champ et séparés d’une distance d, alors UAB = VA − VB = E × d. Ainsi E = UAB/d, avec E en V·m⁻¹, d en m et UAB en V."
          },
          {
            type: "schema",
            titre: "Entre deux plaques parallèles",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 620 230' role='img' aria-label='Deux plaques parallèles : la plaque positive à gauche est à un potentiel plus élevé que la plaque négative à droite. Le champ uniforme est dirigé de gauche à droite.'><rect x='80' y='35' width='16' height='145' fill='#b44'/><rect x='524' y='35' width='16' height='145' fill='#267'/><text x='88' y='25' text-anchor='middle' font-size='17'>+</text><text x='532' y='25' text-anchor='middle' font-size='17'>−</text><line x1='130' y1='75' x2='490' y2='75' stroke='#333' stroke-width='2'/><polygon points='490,75 478,68 478,82' fill='#333'/><line x1='130' y1='125' x2='490' y2='125' stroke='#333' stroke-width='2'/><polygon points='490,125 478,118 478,132' fill='#333'/><text x='310' y='107' text-anchor='middle' font-size='17'>champ E</text><text x='150' y='165' text-anchor='middle' font-size='16'>potentiel plus élevé</text><text x='458' y='165' text-anchor='middle' font-size='16'>potentiel plus faible</text><line x1='96' y1='200' x2='524' y2='200' stroke='#555' stroke-width='2'/><text x='310' y='220' text-anchor='middle' font-size='16'>distance d entre les plaques</text></svg>",
            legende: "Loin des bords, le champ est approximativement uniforme et dirigé de la plaque positive vers la plaque négative."
          },
          {
            type: "exemple",
            titre: "Champ entre deux plaques",
            texte: "La tension entre deux plaques est de 600 V et leur distance est de 0,030 m. En supposant le champ uniforme : E = 600/0,030 = 20 000 V·m⁻¹. Il est dirigé de la plaque au potentiel le plus élevé vers l’autre."
          },
          {
            type: "remarque",
            titre: "Domaine de la formule",
            texte: "La relation U = Ed utilise ici la distance mesurée dans la direction du champ. Elle ne s’applique pas directement à une distance quelconque oblique."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Les potentiels de deux points sont VA = 12 V et VB = 5 V. Calcule UAB puis UBA.",
        correction: "UAB = VA − VB = 12 − 5 = +7 V. UBA = VB − VA = −7 V."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Pour mesurer UAB avec un voltmètre, sur quel point branche-t-on la borne V ? Sur quel point branche-t-on la borne COM ?",
        correction: "On branche la borne V sur A et la borne COM sur B. Le voltmètre est branché en dérivation entre ces deux points."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "On mesure UAB = 4 V et UBC = −7 V. Calcule UAC.",
        correction: "Par additivité : UAC = UAB + UBC = 4 − 7 = −3 V."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une charge q = +3,0 × 10⁻⁶ C se déplace de A vers B. La tension UAB vaut 200 V. Calcule le travail de la force électrique et la variation d’énergie potentielle électrique.",
        correction: "W(A → B) = qUAB = 3,0 × 10⁻⁶ × 200 = +6,0 × 10⁻⁴ J. La variation d’énergie potentielle vaut ΔEp = −W = −6,0 × 10⁻⁴ J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une charge q = −2,0 × 10⁻⁶ C se déplace de A vers B, où VA = 40 V et VB = 10 V. Calcule UAB, le travail de la force électrique et la variation d’énergie potentielle électrique.",
        correction: "UAB = 40 − 10 = 30 V. W = qUAB = −2,0 × 10⁻⁶ × 30 = −6,0 × 10⁻⁵ J. Donc ΔEp = −W = +6,0 × 10⁻⁵ J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Entre deux plaques parallèles distantes de 4,0 cm, on suppose le champ électrique uniforme. La plaque A est à 800 V et la plaque B à 0 V. Calcule la valeur du champ et indique son sens.",
        correction: "La distance est d = 0,040 m. La tension vaut UAB = 800 V. Donc E = UAB/d = 800/0,040 = 2,0 × 10⁴ V·m⁻¹. Le champ est dirigé de A vers B, du potentiel le plus élevé vers le plus faible."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Dans un champ électrostatique, une particule de charge q = +2,0 × 10⁻⁶ C et de masse m = 1,0 × 10⁻⁴ kg part de A sans vitesse initiale et atteint B. On donne VA = 500 V et VB = 100 V. Seule la force électrique travaille. Calcule son travail, puis la vitesse de la particule en B.",
        correction: "UAB = 500 − 100 = 400 V. Le travail électrique est W = qUAB = 2,0 × 10⁻⁶ × 400 = 8,0 × 10⁻⁴ J. La particule part sans vitesse et seule la force électrique travaille : ½mvB² = W. Ainsi vB = √(2W/m) = √(2 × 8,0 × 10⁻⁴ / 1,0 × 10⁻⁴) = √16 = 4,0 m·s⁻¹."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un champ électrique uniforme de valeur E = 3,0 × 10³ V·m⁻¹ est dirigé de A vers B. Les points A et B sont alignés dans la direction du champ et séparés de 5,0 cm. Une charge q = −4,0 × 10⁻⁶ C se déplace de A vers B. Calcule UAB, le travail de la force électrique et la variation d’énergie potentielle. Le travail de la force électrique favorise-t-il ce déplacement ?",
        correction: "d = 0,050 m, donc UAB = Ed = 3,0 × 10³ × 0,050 = 150 V. W = qUAB = −4,0 × 10⁻⁶ × 150 = −6,0 × 10⁻⁴ J. Ainsi ΔEp = +6,0 × 10⁻⁴ J. Le travail est négatif : la force électrique s’oppose au déplacement de A vers B."
      }
    ]
  }
]);
