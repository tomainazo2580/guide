enregistrerChapitres("2nde", "maths", [{
  id: "m2-thales-reciproque",
  titre: "Chapitre 16 : Théorème de Thalès et réciproque",
  premium: false,
  guide: false,
  lecons: [
    {
      id: "m2-ch16-rappels",
      titre: "1. Rappels sur les rapports",
      blocs: [
        {
          type: "introduction",
          titre: "Pourquoi utiliser Thalès ?",
          texte: "Le théorème de Thalès permet de relier des longueurs lorsque des droites sont parallèles. Il sert notamment à calculer une longueur inaccessible. Sa réciproque permet de démontrer que deux droites sont parallèles."
        },
        {
          type: "definition",
          titre: "Rapport de deux longueurs",
          texte: "Le rapport de deux longueurs exprimées dans la même unité est le quotient de leurs mesures. Par exemple, si AB = 6 cm et AC = 9 cm, alors AB/AC = 6/9 = 2/3. Ce rapport n'a pas d'unité."
        },
        {
          type: "rappel",
          titre: "Produit en croix",
          texte: "Pour des nombres b et d non nuls, a/b = c/d équivaut à a × d = b × c. Cette propriété permet de résoudre une égalité de rapports."
        },
        {
          type: "exemple",
          titre: "Calculer une longueur",
          texte: "Si 3/5 = x/10, alors 5x = 3 × 10 = 30. Donc x = 6."
        },
        {
          type: "remarque",
          titre: "Attention aux unités",
          texte: "Avant de former un rapport de longueurs, on exprime les longueurs dans la même unité. Par exemple, 1 m = 100 cm."
        }
      ]
    },
    {
      id: "m2-ch16-theoreme",
      titre: "2. Théorème de Thalès",
      blocs: [
        {
          type: "schema",
          titre: "Configuration dans un triangle",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 230' role='img' aria-label='Triangle ABC avec M sur AB, N sur AC et MN parallèle à BC'><rect width='360' height='230' fill='white'/><g stroke='#222' stroke-width='2' fill='none'><path d='M180 20 L40 205 L320 205 Z'/><path d='M110 112.5 L250 112.5'/></g><g fill='#222' font-size='17' font-family='sans-serif'><text x='175' y='16'>A</text><text x='24' y='219'>B</text><text x='324' y='219'>C</text><text x='89' y='110'>M</text><text x='254' y='110'>N</text></g></svg>",
          legende: "M appartient à [AB], N appartient à [AC] et (MN) est parallèle à (BC)."
        },
        {
          type: "regle",
          titre: "Énoncé du théorème",
          texte: "Soient A, B, C trois points non alignés. Si M appartient à la droite (AB), N appartient à la droite (AC), avec M ≠ A et N ≠ A, et si (MN) est parallèle à (BC), alors : AM/AB = AN/AC = MN/BC. Les longueurs utilisées sont positives."
        },
        {
          type: "remarque",
          titre: "Configuration « papillon »",
          texte: "Le théorème s'applique aussi lorsque A est entre M et B et entre N et C. Dans ce cas, les triangles AMN et ABC sont placés de part et d'autre de A. Les rapports AM/AB, AN/AC et MN/BC restent égaux."
        },
        {
          type: "schema",
          titre: "Configuration papillon",
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' role='img' aria-label='Configuration de Thalès en papillon, avec MN parallèle à BC'><rect width='360' height='240' fill='white'/><g stroke='#222' stroke-width='2' fill='none'><path d='M60 30 L180 120 L300 210'/><path d='M300 30 L180 120 L60 210'/><path d='M60 30 L300 30 M60 210 L300 210'/></g><g fill='#222' font-size='17' font-family='sans-serif'><text x='43' y='26'>M</text><text x='305' y='26'>N</text><text x='184' y='119'>A</text><text x='43' y='226'>C</text><text x='305' y='226'>B</text></g></svg>",
          legende: "A, M, B sont alignés ; A, N, C sont alignés ; (MN) et (BC) sont parallèles."
        },
        {
          type: "methode",
          titre: "Appliquer le théorème",
          texte: "1. Repérer les deux droites sécantes en A. 2. Vérifier les alignements et le parallélisme. 3. Écrire les rapports dans le même ordre : petit ou premier triangle sur grand ou second triangle. 4. Remplacer les longueurs connues. 5. Calculer et donner l'unité."
        },
        {
          type: "exemple",
          titre: "Dans un triangle",
          texte: "M est sur [AB], N est sur [AC] et (MN) est parallèle à (BC). On donne AB = 8 cm, AC = 10 cm, BC = 6 cm et AM = 4 cm. D'après Thalès : AM/AB = AN/AC = MN/BC. Ainsi 4/8 = AN/10 = MN/6. Donc AN = 10 × 4/8 = 5 cm et MN = 6 × 4/8 = 3 cm."
        },
        {
          type: "exemple",
          titre: "Dans une configuration papillon",
          texte: "A est entre M et B et entre N et C. Les droites (MN) et (BC) sont parallèles. Si AM = 3 cm, AB = 5 cm et AC = 7 cm, alors AM/AB = AN/AC. Donc 3/5 = AN/7, d'où AN = 21/5 = 4,2 cm."
        }
      ]
    },
    {
      id: "m2-ch16-reciproque",
      titre: "3. Réciproque du théorème de Thalès",
      blocs: [
        {
          type: "regle",
          titre: "Énoncé de la réciproque",
          texte: "Soient A, B et C trois points non alignés. Soient M sur (AB) et N sur (AC), avec M ≠ A et N ≠ A. Si les points A, M, B et les points A, N, C sont dans le même ordre et si AM/AB = AN/AC, alors (MN) est parallèle à (BC)."
        },
        {
          type: "remarque",
          titre: "Que signifie « dans le même ordre » ?",
          texte: "Par exemple, M peut être entre A et B tandis que N est entre A et C. On peut aussi avoir A entre M et B et A entre N et C : c'est la configuration papillon. En revanche, une égalité de rapports de longueurs ne suffit pas si les positions ne correspondent pas."
        },
        {
          type: "methode",
          titre: "Démontrer un parallélisme",
          texte: "1. Vérifier et préciser les alignements et l'ordre des points. 2. Calculer séparément AM/AB et AN/AC. 3. Vérifier que ces deux rapports sont égaux. 4. Conclure, d'après la réciproque du théorème de Thalès, que (MN) est parallèle à (BC)."
        },
        {
          type: "exemple",
          titre: "Exemple de démonstration",
          texte: "M appartient à [AB] et N à [AC]. On donne AM = 3 cm, AB = 7,5 cm, AN = 4 cm et AC = 10 cm. Les points A, M, B et A, N, C sont dans le même ordre. AM/AB = 3/7,5 = 2/5 et AN/AC = 4/10 = 2/5. Les rapports sont égaux. D'après la réciproque de Thalès, (MN) est parallèle à (BC)."
        },
        {
          type: "remarque",
          titre: "Si les rapports sont différents",
          texte: "Si les alignements sont vérifiés mais que AM/AB ≠ AN/AC, alors (MN) n'est pas parallèle à (BC). Sinon, le théorème de Thalès imposerait l'égalité des rapports. Ce raisonnement utilise la contraposée du théorème."
        }
      ]
    },
    {
      id: "m2-ch16-applications",
      titre: "4. Applications et erreurs à éviter",
      blocs: [
        {
          type: "methode",
          titre: "Retrouver une longueur manquante",
          texte: "Si M est sur [AB], alors AB = AM + MB. On peut donc calculer AB avant d'appliquer Thalès. De même, si N est sur [AC], alors AC = AN + NC."
        },
        {
          type: "exemple",
          titre: "Avec des longueurs partielles",
          texte: "M est sur [AB], N est sur [AC] et (MN) est parallèle à (BC). On donne AM = 4 cm, MB = 6 cm et AN = 3 cm. Alors AB = 4 + 6 = 10 cm. Par Thalès, AM/AB = AN/AC, donc 4/10 = 3/AC. Ainsi 4 × AC = 30 et AC = 7,5 cm. Enfin NC = AC − AN = 7,5 − 3 = 4,5 cm."
        },
        {
          type: "methode",
          titre: "Utiliser des ombres",
          texte: "Si les rayons du soleil sont considérés comme parallèles, qu'un objet vertical et un bâton vertical sont posés sur un sol horizontal et que les extrémités de leurs ombres sont formées par ces rayons, on obtient des triangles auxquels on peut appliquer Thalès. Les hauteurs et les longueurs des ombres sont alors proportionnelles."
        },
        {
          type: "exemple",
          titre: "Hauteur d'un arbre",
          texte: "Au même moment, un bâton vertical de 1,5 m projette une ombre de 2 m. Un arbre vertical projette une ombre de 8 m sur le même sol horizontal. En supposant les rayons du soleil parallèles, on a : hauteur de l'arbre/8 = 1,5/2. La hauteur de l'arbre est donc 8 × 1,5/2 = 6 m."
        },
        {
          type: "remarque",
          titre: "Erreurs fréquentes",
          texte: "Ne pas utiliser Thalès sans parallélisme établi. Ne pas mélanger les côtés correspondants : AM correspond à AB, AN à AC et MN à BC. Pour la réciproque, ne pas oublier l'ordre des points. Ne pas remplacer AB par MB : si M est entre A et B, AB = AM + MB."
        }
      ]
    }
  ],
  exercices: [
    {
      niveau: 1,
      points: 2,
      enonce: "Dans un triangle ABC, M est sur [AB], N est sur [AC] et (MN) est parallèle à (BC). Complète : AM/AB = AN/… = MN/… .",
      correction: "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC."
    },
    {
      niveau: 1,
      points: 2,
      enonce: "Résous l'égalité 2/5 = x/15.",
      correction: "Par produit en croix, 5x = 2 × 15 = 30. Donc x = 6."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans le triangle ABC, M est sur [AB], N est sur [AC] et (MN) est parallèle à (BC). On donne AM = 3 cm, AB = 9 cm et AC = 12 cm. Calcule AN.",
      correction: "D'après Thalès, AM/AB = AN/AC. Donc 3/9 = AN/12. Ainsi AN = 12 × 3/9 = 4 cm."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans le triangle ABC, M est sur [AB], N est sur [AC] et (MN) est parallèle à (BC). On donne AM = 5 cm, MB = 3 cm et BC = 12 cm. Calcule MN.",
      correction: "AB = AM + MB = 5 + 3 = 8 cm. D'après Thalès, MN/BC = AM/AB = 5/8. Donc MN = 12 × 5/8 = 7,5 cm."
    },
    {
      niveau: 2,
      points: 3,
      enonce: "Dans un triangle ABC, M est sur [AB] et N est sur [AC]. On donne AM = 4 cm, AB = 10 cm, AN = 6 cm et AC = 15 cm. Les droites (MN) et (BC) sont-elles parallèles ?",
      correction: "Les points A, M, B et A, N, C sont dans le même ordre. AM/AB = 4/10 = 2/5 et AN/AC = 6/15 = 2/5. Les rapports sont égaux. D'après la réciproque de Thalès, (MN) est parallèle à (BC)."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Dans le triangle ABC, M est sur [AB], N est sur [AC] et (MN) est parallèle à (BC). On donne AM = 6 cm, MB = 4 cm, AN = 7,2 cm et BC = 15 cm. Calcule AC, NC et MN.",
      correction: "AB = AM + MB = 6 + 4 = 10 cm. D'après Thalès, AM/AB = AN/AC = MN/BC = 6/10. Ainsi AC = 7,2 × 10/6 = 12 cm. Comme N est sur [AC], NC = AC − AN = 12 − 7,2 = 4,8 cm. Enfin MN = 15 × 6/10 = 9 cm."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "A, M, B sont alignés dans cet ordre et A, N, C sont alignés dans cet ordre. Les points A, B et C ne sont pas alignés. On donne AM = 4,5 cm, AB = 7,5 cm, AN = 3,6 cm et AC = 6,2 cm. Les droites (MN) et (BC) sont-elles parallèles ? Justifie.",
      correction: "AM/AB = 4,5/7,5 = 0,6. AN/AC = 3,6/6,2 = 18/31, qui n'est pas égal à 0,6. Si (MN) était parallèle à (BC), les rapports seraient égaux d'après Thalès. Donc, par contraposée, (MN) et (BC) ne sont pas parallèles."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "A est entre M et B et aussi entre N et C. Les droites (MN) et (BC) sont parallèles. On donne AM = 4 cm, AB = 6 cm, AC = 9 cm et MN = 5 cm. Calcule AN et BC.",
      correction: "Dans cette configuration papillon, Thalès donne AM/AB = AN/AC = MN/BC. Ainsi 4/6 = AN/9 = 5/BC. On obtient AN = 9 × 4/6 = 6 cm, puis BC = 5 × 6/4 = 7,5 cm."
    },
    {
      niveau: 3,
      points: 4,
      enonce: "Au même moment, un piquet vertical de 1,2 m projette une ombre de 1,6 m et un poteau vertical projette une ombre de 6 m. Le sol est horizontal et les rayons du soleil sont supposés parallèles. Calcule la hauteur du poteau.",
      correction: "Les hauteurs et les longueurs des ombres sont proportionnelles. Si h est la hauteur du poteau, alors h/6 = 1,2/1,6. Donc h = 6 × 1,2/1,6 = 4,5 m."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "Dans le triangle ABC, M est sur [AB] et N est sur [AC]. On donne AB = 15 cm, AC = 12 cm, BC = 10 cm, AM = 9 cm et AN = 7,2 cm. 1. Démontre que (MN) est parallèle à (BC). 2. Calcule MN. 3. Calcule MB et NC.",
      correction: "1. Les points A, M, B et A, N, C sont dans le même ordre. AM/AB = 9/15 = 3/5 et AN/AC = 7,2/12 = 3/5. D'après la réciproque de Thalès, (MN) est parallèle à (BC). 2. D'après le théorème de Thalès, MN/BC = AM/AB = 3/5. Donc MN = 10 × 3/5 = 6 cm. 3. MB = AB − AM = 15 − 9 = 6 cm et NC = AC − AN = 12 − 7,2 = 4,8 cm."
    },
    {
      niveau: 4,
      points: 5,
      enonce: "A, B et C ne sont pas alignés. M est sur la demi-droite [AB) au-delà de B, et N est sur la demi-droite [AC) au-delà de C. On donne AB = 6 cm, BM = 3 cm, AC = 8 cm et CN = 4 cm. De plus, BC = 5 cm. 1. Calcule AM et AN. 2. Démontre que (MN) est parallèle à (BC). 3. Calcule MN.",
      correction: "1. B est entre A et M, donc AM = AB + BM = 6 + 3 = 9 cm. De même, AN = AC + CN = 8 + 4 = 12 cm. 2. Les points A, B, M et A, C, N sont dans le même ordre. AM/AB = 9/6 = 3/2 et AN/AC = 12/8 = 3/2. D'après la réciproque de Thalès, (MN) est parallèle à (BC). 3. Par Thalès, MN/BC = AM/AB = 3/2. Donc MN = 5 × 3/2 = 7,5 cm."
    }
  ]
}]);
