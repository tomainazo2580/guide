// ===== GUIDE - Mathématiques 6ème (T6) =====
// Basé sur le programme officiel de Madagascar, complété par Guide.
// ===== GUIDE - Mathématiques 6ème (T6) =====
// Basé sur le programme officiel de Madagascar, complété par Guide.

enregistrerChapitres('6e', 'maths', [
  {
    id: 'm6-fractions',
    titre: 'Chapitre 1 : Les fractions',
    premium: false,
    guide: false,
    lecons: [
      {
        id: 'm6-fractions-notion',
        titre: 'Découvrir la fraction',
        blocs: [
          {
            type: 'definition',
            titre: 'Qu\'est-ce qu\'une fraction ?',
            texte: 'Quand on partage une unité en parts égales, chaque part est une fraction de l\'unité.\nExemple : si tu plies une bande de papier en 2 parts égales, chaque part représente 1/2 de la bande. Si tu la plies en 4, chaque part représente 1/4.'
          },
          {
            type: 'schema',
            titre: 'Le partage d\'une bande',
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="340" height="130" viewBox="0 0 340 130"><rect x="20" y="10" width="300" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="20" y="50" width="150" height="30" rx="4" fill="#e11d48" fill-opacity="0.3" stroke="currentColor"/><rect x="170" y="50" width="150" height="30" rx="4" fill="none" stroke="currentColor"/><text x="95" y="70" font-size="13" fill="currentColor" text-anchor="middle">1/2</text><text x="245" y="70" font-size="13" fill="currentColor" text-anchor="middle">1/2</text><rect x="20" y="90" width="75" height="30" rx="4" fill="#e11d48" fill-opacity="0.3" stroke="currentColor"/><rect x="95" y="90" width="75" height="30" fill="none" stroke="currentColor"/><rect x="170" y="90" width="75" height="30" fill="none" stroke="currentColor"/><rect x="245" y="90" width="75" height="30" fill="none" stroke="currentColor"/><text x="57" y="110" font-size="12" fill="currentColor" text-anchor="middle">1/4</text><text x="132" y="110" font-size="12" fill="currentColor" text-anchor="middle">1/4</text><text x="207" y="110" font-size="12" fill="currentColor" text-anchor="middle">1/4</text><text x="282" y="110" font-size="12" fill="currentColor" text-anchor="middle">1/4</text></svg>',
            legende: 'La même bande partagée en 2 parts (moitiés) puis en 4 parts (quarts).'
          },
          {
            type: 'definition',
            titre: 'Numérateur et dénominateur',
            texte: 'Dans la fraction 3/4 :\n• 4 est le dénominateur (en bas) : il dit en combien de parts égales on a coupé l\'unité.\n• 3 est le numérateur (en haut) : il dit combien de parts on prend.\nOn lit « trois quarts ».'
          },
          {
            type: 'exemple',
            titre: 'Exemple concret',
            texte: 'Tu coupes un gâteau en 4 parts égales et tu manges 1 part : tu as mangé 1/4 du gâteau.\nSi tu coupes le même gâteau en 4 et que tu manges 2 parts : tu as mangé 2/4 du gâteau.'
          },
          {
            type: 'tableau',
            titre: 'Mots difficiles',
            entetes: ['Mot', 'Sens'],
            lignes: [
              ['Unité', 'L\'objet entier que l\'on partage (la bande, le gâteau...).'],
              ['Fraction', 'Une ou plusieurs parts d\'une unité partagée en parts égales.'],
              ['Numérateur', 'Le nombre du haut : combien de parts on prend.'],
              ['Dénominateur', 'Le nombre du bas : en combien de parts on a coupé.']
            ]
          }
        ]
      },
      {
        id: 'm6-fractions-equivalentes',
        titre: 'Les fractions équivalentes',
        blocs: [
          {
            type: 'definition',
            titre: 'Fractions équivalentes',
            texte: 'Deux fractions sont équivalentes quand elles représentent la même quantité, même si leurs nombres sont différents.\nExemple : 1/2 = 2/4. Manger la moitié du gâteau ou 2 parts sur 4, c\'est la même chose !'
          },
          {
            type: 'regle',
            titre: 'La règle d\'or',
            texte: 'Pour obtenir une fraction équivalente, on multiplie (ou on divise) le numérateur ET le dénominateur par le même nombre (non nul).\nExemples :\n• 3/4 = (3×3)/(4×3) = 9/12\n• 15/20 = (15÷5)/(20÷5) = 3/4'
          },
          {
            type: 'methode',
            titre: 'Simplifier une fraction',
            texte: 'Simplifier, c\'est trouver une fraction équivalente avec des nombres plus petits.\nOn divise le numérateur et le dénominateur par un même nombre.\nExemple : simplifie 12/18.\n12 et 18 sont tous les deux divisibles par 6 : 12/18 = 2/3.\nQuand on ne peut plus simplifier, on dit que la fraction est irréductible.'
          },
          {
            type: 'remarque',
            titre: 'Fraction impropre et nombre fractionnaire',
            texte: 'Une fraction est impropre quand le numérateur est plus grand que le dénominateur : 7/4, 15/7...\nOn peut l\'écrire avec un nombre entier : 15/7 = 2 + 1/7, qu\'on note 2 1/7 (« deux un septième »).\nPour passer de 3 3/4 à une fraction : (4×3 + 3)/4 = 15/4.'
          },
          {
            type: 'exemple',
            titre: '✏️ À toi de jouer (avec solution)',
            texte: '1. Trouve une fraction équivalente à 2/3 avec le dénominateur 12.\n2. Simplifie 8/12.\n3. Écris 11/4 sous forme d\'un nombre fractionnaire.\n\n✅ Solutions :\n1. 12 = 3×4, donc on multiplie par 4 : 2/3 = 8/12.\n2. 8 et 12 sont divisibles par 4 : 8/12 = 2/3.\n3. 11 = 4×2 + 3, donc 11/4 = 2 3/4.'
          }
        ]
      },
      {
        id: 'm6-fractions-comparaison',
        titre: 'Comparer et ranger des fractions',
        blocs: [
          {
            type: 'regle',
            titre: 'Même dénominateur',
            texte: 'Si deux fractions ont le même dénominateur, la plus grande est celle qui a le plus grand numérateur.\nExemple : 5/4 > 3/4 > 1/4.'
          },
          {
            type: 'methode',
            titre: 'Dénominateurs différents',
            texte: 'On transforme les fractions pour avoir le même dénominateur, puis on compare.\nExemple : compare 1/2 et 2/3.\nLe dénominateur commun est 6 : 1/2 = 3/6 et 2/3 = 4/6.\nComme 3/6 < 4/6, on a 1/2 < 2/3.'
          },
          {
            type: 'schema',
            titre: 'La droite numérique',
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="340" height="80" viewBox="0 0 340 80"><line x1="20" y1="45" x2="320" y2="45" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor"><line x1="20" y1="38" x2="20" y2="52" stroke-width="2"/><line x1="95" y1="40" x2="95" y2="50"/><line x1="170" y1="40" x2="170" y2="50"/><line x1="245" y1="40" x2="245" y2="50"/><line x1="320" y1="38" x2="320" y2="52" stroke-width="2"/></g><circle cx="95" cy="45" r="5" fill="#e11d48"/><circle cx="245" cy="45" r="5" fill="#e11d48"/><g font-size="12" fill="currentColor" text-anchor="middle"><text x="20" y="68">0</text><text x="320" y="68">1</text><text x="95" y="30">1/4</text><text x="170" y="30">2/4</text><text x="245" y="30">3/4</text></g></svg>',
            legende: 'Sur la droite graduée, plus une fraction est à droite, plus elle est grande.'
          },
          {
            type: 'exemple',
            titre: '✏️ À toi de jouer (avec solution)',
            texte: 'Range dans l\'ordre croissant : 3/5 ; 1/5 ; 4/5.\nPuis compare 2/3 et 3/4.\n\n✅ Solutions :\n1. Ordre croissant : 1/5 < 3/5 < 4/5.\n2. Dénominateur commun 12 : 2/3 = 8/12 et 3/4 = 9/12. Donc 2/3 < 3/4.'
          }
        ]
      }
    ],
enregistrerChapitres('6e', 'maths', [
  {
    id: 'm6-fractions',
    titre: 'Chapitre 1 : Les fractions',
    premium: false,
    guide: false,
    lecons: [
      {
        id: 'm6-fractions-notion',
        titre: 'Découvrir la fraction',
        blocs: [
          {
            type: 'definition',
            titre: 'Qu\'est-ce qu\'une fraction ?',
            texte: 'Quand on partage une unité en parts égales, chaque part est une fraction de l\'unité.\nExemple : si tu plies une bande de papier en 2 parts égales, chaque part représente 1/2 de la bande. Si tu la plies en 4, chaque part représente 1/4.'
          },
          {
            type: 'schema',
            titre: 'Le partage d\'une bande',
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="340" height="130" viewBox="0 0 340 130"><rect x="20" y="10" width="300" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="330" y="30" font-size="12" fill="currentColor" text-anchor="end">1 unité</text><rect x="20" y="50" width="150" height="30" rx="4" fill="#e11d48" fill-opacity="0.3" stroke="currentColor"/><rect x="170" y="50" width="150" height="30" rx="4" fill="none" stroke="currentColor"/><text x="95" y="70" font-size="13" fill="currentColor" text-anchor="middle">1/2</text><text x="245" y="70" font-size="13" fill="currentColor" text-anchor="middle">1/2</text><rect x="20" y="90" width="75" height="30" rx="4" fill="#e11d48" fill-opacity="0.3" stroke="currentColor"/><rect x="95" y="90" width="75" height="30" fill="none" stroke="currentColor"/><rect x="170" y="90" width="75" height="30" fill="none" stroke="currentColor"/><rect x="245" y="90" width="75" height="30" fill="none" stroke="currentColor"/><text x="57" y="110" font-size="12" fill="currentColor" text-anchor="middle">1/4</text><text x="132" y="110" font-size="12" fill="currentColor" text-anchor="middle">1/4</text><text x="207" y="110" font-size="12" fill="currentColor" text-anchor="middle">1/4</text><text x="282" y="110" font-size="12" fill="currentColor" text-anchor="middle">1/4</text></svg>',
            legende: 'La même bande partagée en 2 parts (moitiés) puis en 4 parts (quarts).'
          },
          {
            type: 'definition',
            titre: 'Numérateur et dénominateur',
            texte: 'Dans la fraction 3/4 :\n• 4 est le dénominateur (en bas) : il dit en combien de parts égales on a coupé l\'unité.\n• 3 est le numérateur (en haut) : il dit combien de parts on prend.\nOn lit « trois quarts ».'
          },
          {
            type: 'exemple',
            titre: 'Exemple concret',
            texte: 'Tu coupes un gâteau en 4 parts égales et tu manges 1 part : tu as mangé 1/4 du gâteau.\nSi tu coupes le même gâteau en 4 et que tu manges 2 parts : tu as mangé 2/4 du gâteau.'
          },
          {
            type: 'tableau',
            titre: 'Mots difficiles',
            entetes: ['Mot', 'Sens'],
            lignes: [
              ['Unité', 'L\'objet entier que l\'on partage (la bande, le gâteau...).'],
              ['Fraction', 'Une ou plusieurs parts d\'une unité partagée en parts égales.'],
              ['Numérateur', 'Le nombre du haut : combien de parts on prend.'],
              ['Dénominateur', 'Le nombre du bas : en combien de parts on a coupé.']
            ]
          }
        ]
      },
      {
        id: 'm6-fractions-equivalentes',
        titre: 'Les fractions équivalentes',
        blocs: [
          {
            type: 'definition',
            titre: 'Fractions équivalentes',
            texte: 'Deux fractions sont équivalentes quand elles représentent la même quantité, même si leurs nombres sont différents.\nExemple : 1/2 = 2/4. Manger la moitié du gâteau ou 2 parts sur 4, c\'est la même chose !'
          },
          {
            type: 'regle',
            titre: 'La règle d\'or',
            texte: 'Pour obtenir une fraction équivalente, on multiplie (ou on divise) le numérateur ET le dénominateur par le même nombre (non nul).\nExemples :\n• 3/4 = (3×3)/(4×3) = 9/12\n• 15/20 = (15÷5)/(20÷5) = 3/4'
          },
          {
            type: 'methode',
            titre: 'Simplifier une fraction',
            texte: 'Simplifier, c\'est trouver une fraction équivalente avec des nombres plus petits.\nOn divise le numérateur et le dénominateur par un même nombre.\nExemple : simplifie 12/18.\n12 et 18 sont tous les deux divisibles par 6 : 12/18 = 2/3.\nQuand on ne peut plus simplifier, on dit que la fraction est irréductible.'
          },
          {
            type: 'remarque',
            titre: 'Fraction impropre et nombre fractionnaire',
            texte: 'Une fraction est impropre quand le numérateur est plus grand que le dénominateur : 7/4, 15/7...\nOn peut l\'écrire avec un nombre entier : 15/7 = 2 + 1/7, qu\'on note 2 1/7 (« deux un septième »).\nPour passer de 3 3/4 à une fraction : (4×3 + 3)/4 = 15/4.'
          },
          {
            type: 'exercice',
            titre: 'À toi de jouer',
            enonce: '1. Trouve une fraction équivalente à 2/3 avec le dénominateur 12.\n2. Simplifie 8/12.\n3. Écris 11/4 sous forme d\'un nombre fractionnaire.',
            solution: '1. 12 = 3×4, donc on multiplie par 4 : 2/3 = 8/12.\n2. 8 et 12 sont divisibles par 4 : 8/12 = 2/3.\n3. 11 = 4×2 + 3, donc 11/4 = 2 3/4.'
          }
        ]
      },
      {
        id: 'm6-fractions-comparaison',
        titre: 'Comparer et ranger des fractions',
        blocs: [
          {
            type: 'regle',
            titre: 'Même dénominateur',
            texte: 'Si deux fractions ont le même dénominateur, la plus grande est celle qui a le plus grand numérateur.\nExemple : 5/4 > 3/4 > 1/4.'
          },
          {
            type: 'methode',
            titre: 'Dénominateurs différents',
            texte: 'On transforme les fractions pour avoir le même dénominateur, puis on compare.\nExemple : compare 1/2 et 2/3.\nLe dénominateur commun est 6 : 1/2 = 3/6 et 2/3 = 4/6.\nComme 3/6 < 4/6, on a 1/2 < 2/3.'
          },
          {
            type: 'schema',
            titre: 'La droite numérique',
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="340" height="80" viewBox="0 0 340 80"><line x1="20" y1="45" x2="320" y2="45" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor"><line x1="20" y1="38" x2="20" y2="52" stroke-width="2"/><line x1="95" y1="40" x2="95" y2="50"/><line x1="170" y1="40" x2="170" y2="50"/><line x1="245" y1="40" x2="245" y2="50"/><line x1="320" y1="38" x2="320" y2="52" stroke-width="2"/></g><circle cx="95" cy="45" r="5" fill="#e11d48"/><circle cx="245" cy="45" r="5" fill="#e11d48"/><g font-size="12" fill="currentColor" text-anchor="middle"><text x="20" y="68">0</text><text x="320" y="68">1</text><text x="95" y="30">1/4</text><text x="170" y="30">2/4</text><text x="245" y="30">3/4</text></g></svg>',
            legende: 'Sur la droite graduée, plus une fraction est à droite, plus elle est grande.'
          },
          {
            type: 'exercice',
            titre: 'À toi de jouer',
            enonce: 'Range dans l\'ordre croissant : 3/5 ; 1/5 ; 4/5.\nPuis compare 2/3 et 3/4.',
            solution: '1. Ordre croissant : 1/5 < 3/5 < 4/5.\n2. Dénominateur commun 12 : 2/3 = 8/12 et 3/4 = 9/12. Donc 2/3 < 3/4.'
          }
        ]
      }
    ],
    exercices: [
      {
        niveau: 1,
        points: 2,
        enonce: 'Un gâteau est coupé en 8 parts égales. Koto mange 3 parts.\n1. Quelle fraction du gâteau a-t-il mangée ?\n2. Quelle fraction reste-t-il ?',
        correction: '1. Koto a mangé 3/8 du gâteau (3 parts sur 8).\n2. Il reste 8 - 3 = 5 parts, soit 5/8 du gâteau.'
      },
      {
        niveau: 1,
        points: 2,
        enonce: 'Dans la fraction 5/6 :\n1. Quel est le numérateur ?\n2. Quel est le dénominateur ?\n3. Comment lit-on cette fraction ?',
        correction: '1. Le numérateur est 5 (le nombre du haut).\n2. Le dénominateur est 6 (le nombre du bas).\n3. On lit « cinq sixièmes ».'
      },
      {
        niveau: 2,
        points: 3,
        enonce: '1. Trouve deux fractions équivalentes à 3/5.\n2. Simplifie 14/21 au maximum.\n3. Écris 9/4 sous forme d\'un nombre fractionnaire.',
        correction: '1. Par exemple : 3/5 = 6/10 (×2) et 3/5 = 9/15 (×3).\n2. 14 et 21 sont divisibles par 7 : 14/21 = 2/3. C\'est irréductible.\n3. 9 = 4×2 + 1, donc 9/4 = 2 1/4.'
      },
      {
        niveau: 2,
        points: 3,
        enonce: 'Range dans l\'ordre croissant : 7/12 ; 1/2 ; 2/3 ; 5/12.',
        correction: 'On met tout au dénominateur 12 :\n• 1/2 = 6/12\n• 2/3 = 8/12\nOn a donc : 5/12 < 6/12 < 7/12 < 8/12.\nOrdre croissant : 5/12 < 1/2 < 7/12 < 2/3.'
      },
      {
        niveau: 3,
        points: 4,
        enonce: 'Une bouteille contient 3/4 de litre de jus. On remplit des verres de 1/8 de litre chacun.\nCombien de verres entiers peut-on remplir ?',
        correction: 'On cherche combien de fois 1/8 est contenu dans 3/4.\nOn écrit 3/4 avec le dénominateur 8 : 3/4 = 6/8.\n6/8 contient exactement 6 fois 1/8.\nOn peut remplir 6 verres entiers.'
      },
      {
        niveau: 3,
        points: 4,
        enonce: 'Dans une classe de 36 élèves, 2/3 des élèves sont des filles.\n1. Combien y a-t-il de filles ?\n2. Combien y a-t-il de garçons ?\n3. Quelle fraction de la classe représentent les garçons ?',
        correction: '1. 36 × 2/3 = 24 filles.\n2. 36 - 24 = 12 garçons.\n3. 12/36 = 1/3 de la classe (on simplifie par 12).'
      },
      {
        niveau: 4,
        points: 5,
        enonce: 'Trois amis se partagent une somme d\'argent. Le premier reçoit 1/3 de la somme, le deuxième reçoit 1/4 de la somme.\n1. Quelle fraction de la somme les deux premiers ont-ils reçue ensemble ?\n2. Quelle fraction reste-t-il pour le troisième ?\n3. La somme totale est de 60 000 Ar. Calcule la part de chacun.',
        correction: '1. Dénominateur commun 12 : 1/3 = 4/12 et 1/4 = 3/12. Ensemble : 4/12 + 3/12 = 7/12.\n2. Il reste 12/12 - 7/12 = 5/12 pour le troisième.\n3. Premier : 60 000 × 1/3 = 20 000 Ar. Deuxième : 60 000 × 1/4 = 15 000 Ar. Troisième : 60 000 × 5/12 = 25 000 Ar. Vérification : 20 000 + 15 000 + 25 000 = 60 000 ✓'
      },
      {
        niveau: 4,
        points: 5,
        enonce: 'Un réservoir est rempli aux 5/6. On utilise 1/3 du réservoir entier pour arroser le jardin.\n1. Quelle fraction du réservoir reste-t-il ?\n2. Le réservoir contient 240 L quand il est plein. Combien de litres restent ?\n3. Peut-on encore remplir un bidon de 100 L ?',
        correction: '1. Dénominateur commun 6 : 5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2. Il reste la moitié du réservoir.\n2. 240 × 1/2 = 120 L.\n3. Oui : 120 L > 100 L, il reste assez d\'eau (il restera même 20 L).'
      }
    ]
  }
]);
