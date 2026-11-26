enregistrerChapitres("1ere", "sp", [
  {
    id: "sp1-travail-puissance-force",
    titre: "Chapitre 4 : Travail et puissance d'une force",
    premium: false,
    guide: false,

    lecons: [
      {
        id: "sp1-ch4-travail",
        titre: "1. Travail d'une force constante",
        blocs: [
          {
            type: "introduction",
            titre: "Une force agit pendant un déplacement",
            texte: "En physique, le travail d'une force décrit un transfert d'énergie associé à l'action de cette force pendant un déplacement. Il dépend de la force et du déplacement de son point d'application."
          },
          {
            type: "definition",
            titre: "Travail d'une force constante",
            texte: "Si une force constante F⃗ agit sur un point dont le déplacement est AB⃗, son travail entre A et B est WAB(F⃗) = F⃗ · AB⃗ = F × AB × cos θ, où θ est l'angle entre la force et le déplacement. Le travail s'exprime en joules, de symbole J."
          },
          {
            type: "schema",
            titre: "Force inclinée et déplacement",
            svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 210' role='img' aria-label='Un point se déplace horizontalement de A vers B. Une force constante fait un angle aigu thêta avec le déplacement.'><rect width='440' height='210' fill='white'/><defs><marker id='sp1ch4bleu' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#1769aa'/></marker><marker id='sp1ch4rouge' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'><path d='M0 0 L8 4 L0 8 Z' fill='#c43b35'/></marker></defs><line x1='75' y1='150' x2='360' y2='150' stroke='#1769aa' stroke-width='3' marker-end='url(#sp1ch4bleu)'/><line x1='75' y1='150' x2='245' y2='52' stroke='#c43b35' stroke-width='3' marker-end='url(#sp1ch4rouge)'/><path d='M130 150 A55 55 0 0 0 123 122' fill='none' stroke='#555' stroke-width='2'/><circle cx='75' cy='150' r='4' fill='#333'/><circle cx='360' cy='150' r='4' fill='#333'/><text x='63' y='175' font-size='14'>A</text><text x='364' y='156' font-size='14'>B</text><text x='205' y='172' font-size='14' fill='#1769aa'>déplacement</text><text x='250' y='51' font-size='14' fill='#c43b35'>F⃗</text><text x='135' y='138' font-size='14'>θ</text></svg>",
            legende: "Seule la composante de la force dans la direction du déplacement intervient dans le travail. Ici, l'angle est aigu : le travail est positif."
          },
          {
            type: "tableau",
            titre: "Signe du travail",
            entetes: ["Angle θ", "Signe", "Interprétation"],
            lignes: [
              ["0° ≤ θ < 90°", "positif", "travail moteur"],
              ["θ = 90°", "nul", "force perpendiculaire au déplacement"],
              ["90° < θ ≤ 180°", "négatif", "travail résistant"]
            ]
          },
          {
            type: "exemple",
            titre: "Force dans le sens du déplacement",
            texte: "Une force constante de 20 N agit dans le sens d'un déplacement de 3 m. Son travail vaut W = 20 × 3 × cos 0° = 60 J."
          },
          {
            type: "exemple",
            titre: "Force opposée au déplacement",
            texte: "Une force constante de 5 N est opposée à un déplacement de 4 m. Son travail vaut W = 5 × 4 × cos 180° = −20 J."
          },
          {
            type: "remarque",
            titre: "Travail nul ne signifie pas force nulle",
            texte: "Une force perpendiculaire au déplacement peut être non nulle tout en effectuant un travail nul. Par exemple, sur un déplacement horizontal, le poids travaille zéro si sa direction reste verticale."
          },
          {
            type: "methode",
            titre: "Calculer le travail",
            texte: "1. Identifier la force et le déplacement de son point d'application. 2. Vérifier que la force est constante pour utiliser directement F⃗ · AB⃗. 3. Déterminer l'angle entre les deux vecteurs. 4. Calculer le travail en joules et interpréter son signe."
          }
        ]
      },
      {
        id: "sp1-ch4-poids-frottement",
        titre: "2. Travail du poids et des frottements",
        blocs: [
          {
            type: "regle",
            titre: "Travail du poids près de la Terre",
            texte: "Si le champ de pesanteur est uniforme et si les altitudes zA et zB sont mesurées vers le haut, le travail du poids entre A et B est WAB(P⃗) = mg(zA − zB). Il dépend des altitudes de départ et d'arrivée, pas du chemin suivi."
          },
          {
            type: "exemple",
            titre: "Montée et descente",
            texte: "Un objet de masse 2 kg monte de 3 m. Avec g = 10 N/kg, le travail de son poids est W = 2 × 10 × (−3) = −60 J. Pour une descente de 3 m, le travail serait +60 J."
          },
          {
            type: "regle",
            titre: "Travail d'un frottement constant",
            texte: "Si une force de frottement de norme constante f reste opposée au mouvement sur une distance L, son travail est W(f⃗) = −fL. Le travail est résistant."
          },
          {
            type: "exemple",
            titre: "Déplacement avec frottement",
            texte: "Un bloc glisse sur 5 m alors qu'une force de frottement de 4 N reste opposée à son mouvement. Le travail du frottement est W = −4 × 5 = −20 J."
          },
          {
            type: "remarque",
            titre: "Force variable",
            texte: "La formule F⃗ · AB⃗ s'applique directement à une force constante. Si la force varie, son travail doit être calculé en tenant compte de cette variation ; on ne peut pas toujours utiliser une seule valeur de F et l'angle initial."
          }
        ]
      },
      {
        id: "sp1-ch4-puissance",
        titre: "3. Puissance d'une force",
        blocs: [
          {
            type: "definition",
            titre: "Puissance moyenne",
            texte: "La puissance moyenne d'une force pendant une durée Δt est Pₘₒᵧ = W/Δt, où W est le travail de cette force pendant cette durée. Son unité est le watt, de symbole W : 1 W = 1 J/s."
          },
          {
            type: "remarque",
            titre: "Ne pas confondre les symboles",
            texte: "Le travail est souvent noté W et s'exprime en joules J. La puissance peut être notée P et s'exprime en watts W. Le symbole W peut donc désigner une grandeur dans une formule ou l'unité watt selon le contexte."
          },
          {
            type: "definition",
            titre: "Puissance instantanée",
            texte: "La puissance instantanée d'une force est P = F⃗ · v⃗, où v⃗ est la vitesse de son point d'application. Si θ est l'angle entre F⃗ et v⃗, alors P = Fv cos θ."
          },
          {
            type: "exemple",
            titre: "Puissance d'une traction",
            texte: "Une force horizontale de 50 N tire un objet se déplaçant horizontalement à 2 m/s dans le même sens. La puissance instantanée de cette force est P = 50 × 2 = 100 W."
          },
          {
            type: "exemple",
            titre: "Même travail, durées différentes",
            texte: "Si une force effectue un travail de 600 J en 3 s, sa puissance moyenne est 200 W. Si elle effectue le même travail en 6 s, sa puissance moyenne est 100 W."
          }
        ]
      },
      {
        id: "sp1-ch4-bilan",
        titre: "4. Travail total et énergie cinétique",
        blocs: [
          {
            type: "regle",
            titre: "Addition des travaux",
            texte: "Le travail de la résultante des forces est la somme des travaux des forces appliquées, pour un même déplacement du point étudié : Wtotal = W₁ + W₂ + … ."
          },
          {
            type: "regle",
            titre: "Théorème de l'énergie cinétique",
            texte: "Dans un référentiel galiléen, pour un point matériel de masse constante, la variation d'énergie cinétique entre A et B est égale à la somme des travaux des forces qui s'exercent sur lui : Ec(B) − Ec(A) = ΣWAB(F⃗). L'énergie cinétique vaut Ec = 1/2 mv²."
          },
          {
            type: "exemple",
            titre: "Retrouver une vitesse",
            texte: "Un point matériel de masse 2 kg part du repos. Les travaux des forces entre A et B totalisent 36 J. Alors 1/2 × 2 × vB² − 0 = 36, donc vB² = 36 et vB = 6 m/s."
          },
          {
            type: "remarque",
            titre: "Portée du théorème",
            texte: "Il faut inclure le travail de toutes les forces appliquées au point étudié. Pour un solide pouvant tourner ou se déformer, le bilan énergétique demande une étude plus complète."
          }
        ]
      }
    ],

    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: "Une force constante de 12 N agit dans le sens d'un déplacement rectiligne de 5 m. Calculer son travail.",
        correction: "L'angle entre la force et le déplacement est 0°. Le travail vaut W = 12 × 5 × cos 0° = 60 J."
      },
      {
        niveau: 1,
        points: 2,
        enonce: "Une force effectue un travail de 240 J en 4 s. Calculer sa puissance moyenne.",
        correction: "La puissance moyenne vaut Pₘₒᵧ = W/Δt = 240/4 = 60 W."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Une force constante de 10 N fait un angle de 60° avec un déplacement de 4 m. Calculer son travail. On donne cos 60° = 0,5.",
        correction: "W = F × AB × cos θ = 10 × 4 × 0,5 = 20 J. Le travail est positif : il est moteur."
      },
      {
        niveau: 2,
        points: 3,
        enonce: "Un objet de masse 3 kg descend verticalement de 2 m. Calculer le travail de son poids en prenant g = 10 N/kg.",
        correction: "Le poids agit dans le sens de la descente. Son travail vaut W = mg × 2 = 3 × 10 × 2 = 60 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Un bloc se déplace horizontalement sur 6 m. Une traction constante de 15 N agit dans le sens du déplacement et un frottement constant de 4 N s'y oppose. Le poids et la réaction normale sont verticaux. Calculer le travail de chaque force et le travail total.",
        correction: "Traction : W = 15 × 6 = 90 J. Frottement : W = −4 × 6 = −24 J. Le poids et la réaction normale sont perpendiculaires au déplacement : leurs travaux sont nuls. Le travail total est 90 − 24 = 66 J."
      },
      {
        niveau: 3,
        points: 4,
        enonce: "Une force constante de 80 N agit dans le même sens que la vitesse d'un point matériel, qui vaut 3 m/s à un instant donné. Calculer la puissance instantanée de cette force. Quel travail effectuerait-elle en 5 s si cette puissance restait constante ?",
        correction: "P = Fv = 80 × 3 = 240 W. Si la puissance reste constante pendant 5 s, W = PΔt = 240 × 5 = 1 200 J."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un point matériel de masse 2 kg part du repos et se déplace horizontalement sur 10 m dans un référentiel galiléen. Une force constante de 20 N agit dans le sens du déplacement et un frottement de 5 N s'y oppose. Le poids et la réaction normale ne travaillent pas. Calculer le travail total puis la vitesse finale.",
        correction: "Le travail de la force motrice est 20 × 10 = 200 J et celui du frottement est −5 × 10 = −50 J. Le travail total vaut 150 J. Par le théorème de l'énergie cinétique, 1/2 × 2 × v² − 0 = 150. Donc v = √150 = 5√6 m/s, soit environ 12,2 m/s."
      },
      {
        niveau: 4,
        points: 5,
        enonce: "Un objet de masse 4 kg est élevé verticalement à vitesse constante de 5 m en 10 s. On prend g = 10 N/kg et on néglige les actions de l'air. Calculer la force verticale exercée vers le haut, son travail et sa puissance moyenne. Donner aussi le travail du poids.",
        correction: "La vitesse est constante : dans le référentiel terrestre supposé galiléen, la résultante des forces est nulle. La force vers le haut vaut donc F = mg = 40 N. Son travail est W(F⃗) = 40 × 5 = 200 J. Sa puissance moyenne vaut 200/10 = 20 W. Le poids est opposé au déplacement : son travail vaut −200 J. La somme des travaux est nulle, conformément à la vitesse constante."
      }
    ]
  }
]);
