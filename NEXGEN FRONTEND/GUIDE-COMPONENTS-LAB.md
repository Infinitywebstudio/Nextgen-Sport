# 🎨 Guide d'Utilisation - ELOO Components Lab

## 📋 Table des Matières
1. [Qu'est-ce que le Components Lab ?](#quest-ce-que-le-components-lab)
2. [Démarrage Rapide](#démarrage-rapide)
3. [Navigation dans le Lab](#navigation-dans-le-lab)
4. [Composants Disponibles](#composants-disponibles)
5. [Structure des Fichiers](#structure-des-fichiers)
6. [Comment Ajouter un Nouveau Composant](#comment-ajouter-un-nouveau-composant)
7. [Intégration dans l'App](#intégration-dans-lapp)

---

## Qu'est-ce que le Components Lab ?

**ELOO Components Lab** est un environnement de développement isolé pour créer, tester et documenter les composants réutilisables de l'application ELOO **avant** de les intégrer dans les pages principales.

### Avantages
- ✅ **Isolation complète** : Testez sans affecter le reste de l'app
- ✅ **Documentation visuelle** : Voyez le composant en action
- ✅ **Rapidité** : Itérez plus vite sans naviguer dans toute l'app
- ✅ **Réutilisabilité** : Un composant, plusieurs usages
- ✅ **Cohérence** : Design system unifié

---

## Démarrage Rapide

### 1. Démarrer le Serveur Dev

```bash
cd eloo-frontend
npm run dev
```

**Serveur disponible sur** : `http://localhost:5173`

### 2. Accéder au Lab

**URL principale** : `http://localhost:5173/dev/test-eloo`

Ou directement un composant spécifique :
- `http://localhost:5173/dev/test-eloo/button`
- `http://localhost:5173/dev/test-eloo/category-card`
- `http://localhost:5173/dev/test-eloo/service-card`

### 3. Navigation

Une fois sur le Lab, utilisez la **sidebar de gauche** pour naviguer entre les composants.

---

## Navigation dans le Lab

### Interface

```
┌────────────────────────────────────────────────────────┐
│  HEADER - ELOO Components Lab                          │
│  [Bootstrap 5] [React 19]                              │
├──────────────┬─────────────────────────────────────────┤
│              │                                          │
│  SIDEBAR     │  CONTENU PRINCIPAL                      │
│              │                                          │
│  📂 Composants│  - Description du composant            │
│  • Bienvenue │  - Exemples visuels                     │
│  • Button    │  - Code d'utilisation                   │
│  • Category  │  - Props disponibles                    │
│  • User      │  - Variations                           │
│  • Reviews   │                                          │
│  • Service   │                                          │
│  • Filter    │                                          │
│              │                                          │
│  ℹ️ Info     │                                          │
│              │                                          │
└──────────────┴─────────────────────────────────────────┘
```

### Sidebar - Menu de Navigation

La sidebar affiche tous les composants disponibles :

| Icône | Nom | Route |
|-------|-----|-------|
| 🏠 | Bienvenue | `/dev/test-eloo` |
| ⬜ | Button | `/dev/test-eloo/button` |
| 📁 | Category Card | `/dev/test-eloo/category-card` |
| 👤 | User Profile | `/dev/test-eloo/user-profile` |
| ⭐ | Reviews Carousel | `/dev/test-eloo/reviews-carousel` |
| 💼 | Service Card | `/dev/test-eloo/service-card` |
| 🔍 | Category Filter | `/dev/test-eloo/category-filter` |

**Composant actif** = fond bleu

---

## Composants Disponibles

### 1. **Category Card** 🎴

**Fichier** : `src/components/eloo/CategoryCard.tsx`
**Page de test** : `src/feature-module/pages/test-eloo/pages/category-card-page.tsx`

**Description** :
Carte de catégorie avec image circulaire et bouton "Découvrir".

**Utilisation basique** :
```tsx
import CategoryCard from '@/components/eloo/CategoryCard';

<CategoryCard
  title="Enfants"
  image="/path/to/image.jpg"
  imageAlt="Catégorie Enfants"
  buttonText="Découvrir"
/>
```

**Props disponibles** :
- `title` (string, requis) - Titre de la catégorie
- `image` (string, requis) - URL de l'image
- `imageAlt` (string, optionnel) - Texte alt pour accessibilité
- `buttonText` (string, optionnel) - Texte du bouton (défaut: "Découvrir")
- `onClick` (function, optionnel) - Fonction appelée au clic
- `href` (string, optionnel) - URL de redirection

**Exemple avec action** :
```tsx
<CategoryCard
  title="Enfants"
  image="/baby-sitting.jpg"
  onClick={() => console.log('Catégorie cliquée')}
/>
```

**Exemple avec lien** :
```tsx
<CategoryCard
  title="Enfants"
  image="/baby-sitting.jpg"
  href="/categories/enfants"
/>
```

---

### 2. **Button** 🔘

**Page de test** : `src/feature-module/pages/test-eloo/pages/button-page.tsx`

**Description** :
Boutons ELOO avec variantes de style et taille.

**Exemples visuels disponibles** :
- Bouton primaire (rouge ELOO)
- Bouton secondaire
- Bouton outline
- Bouton avec icône
- Bouton désactivé
- Différentes tailles (small, medium, large)

---

### 3. **Service Card** 💼

**Fichier** : `MODULATION/src/components/ServiceCard.tsx`
**Documentation** : `MODULATION/src/components/ServiceCard.README.md`

**Description** :
Carte de service affichant les informations d'un prestataire.

**Props** :
- Nom du prestataire
- Avatar
- Catégorie
- Prix
- Note
- Localisation
- Badge "Top Prestataire"

---

### 4. **Review Card** ⭐

**Fichier** : `MODULATION/src/components/ReviewCard.tsx`
**Documentation** : `MODULATION/src/components/ReviewCard.README.md`

**Description** :
Carte d'avis client avec note et commentaire.

---

### 5. **User Profile** 👤

**Page de test** : `src/feature-module/pages/test-eloo/pages/user-profile-page.tsx`

**Description** :
Composant de profil utilisateur avec avatar et informations.

---

### 6. **Reviews Carousel** 🎠

**Page de test** : `src/feature-module/pages/test-eloo/pages/reviews-carousel-page.tsx`

**Description** :
Carrousel d'avis clients avec React Slick.

---

### 7. **Category Filter** 🔍

**Description** :
Composant de filtrage par catégories.

---

## Structure des Fichiers

```
eloo-frontend/
│
├── src/
│   ├── components/
│   │   └── eloo/
│   │       ├── CategoryCard.tsx       ← Composant réutilisable
│   │       ├── Button.tsx
│   │       └── [autres composants...]
│   │
│   └── feature-module/
│       └── pages/
│           └── test-eloo/
│               ├── index.tsx          ← Wrapper principal
│               ├── layout.tsx         ← Layout avec sidebar
│               └── pages/
│                   ├── welcome.tsx            ← Page d'accueil
│                   ├── category-card-page.tsx ← Test CategoryCard
│                   ├── button-page.tsx        ← Test Button
│                   └── [autres tests...]
│
└── MODULATION/
    └── src/
        └── components/
            ├── CategoryCard.tsx
            ├── CategoryCard.README.md
            ├── ServiceCard.tsx
            ├── ServiceCard.README.md
            └── [autres composants...]
```

### Différence entre `components/eloo/` et `MODULATION/`

| Dossier | Usage | État |
|---------|-------|------|
| **components/eloo/** | Composants intégrés dans l'app | Production |
| **MODULATION/** | Composants en développement | Dev/Test |

**Workflow** :
1. Créer le composant dans `MODULATION/`
2. Tester dans le Components Lab
3. Quand validé → Copier dans `components/eloo/`
4. Intégrer dans les pages

---

## Comment Ajouter un Nouveau Composant

### Étape 1 : Créer le Composant

**Créer** : `MODULATION/src/components/MonComposant.tsx`

```tsx
interface MonComposantProps {
  title: string;
  description?: string;
}

const MonComposant = ({ title, description }: MonComposantProps) => {
  return (
    <div className="mon-composant">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
};

export default MonComposant;
```

### Étape 2 : Créer la Documentation

**Créer** : `MODULATION/src/components/MonComposant.README.md`

```markdown
# MonComposant

Description du composant...

## Props

| Prop | Type | Requis | Description |
|------|------|--------|-------------|
| title | string | Oui | Titre du composant |
| description | string | Non | Description optionnelle |

## Utilisation

\`\`\`tsx
<MonComposant title="Mon titre" />
\`\`\`
```

### Étape 3 : Créer la Page de Test

**Créer** : `src/feature-module/pages/test-eloo/pages/mon-composant-page.tsx`

```tsx
import MonComposant from '../../../../../MODULATION/src/components/MonComposant';

const MonComposantPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2>MonComposant</h2>
        <p className="text-muted">Description du composant</p>
      </div>

      {/* Exemple de base */}
      <div className="mb-5">
        <h4 className="mb-3">Exemple de base</h4>
        <MonComposant title="Mon Titre" />
      </div>

      {/* Avec description */}
      <div className="mb-5">
        <h4 className="mb-3">Avec description</h4>
        <MonComposant
          title="Mon Titre"
          description="Ceci est une description"
        />
      </div>

      {/* Documentation */}
      <div className="alert alert-info">
        <h6 className="mb-2">
          <i className="ti ti-info-circle me-1" />
          Utilisation
        </h6>
        <code>
          {'<MonComposant title="Mon Titre" />'}
        </code>

        <div className="mt-3">
          <strong>Props disponibles :</strong>
          <ul className="mb-0 mt-2">
            <li><code>title</code> (string, requis) - Titre</li>
            <li><code>description</code> (string, optionnel) - Description</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MonComposantPage;
```

### Étape 4 : Ajouter la Route

**Modifier** : `src/feature-module/router/all_routes.tsx`

```tsx
export const all_routes = {
  // ... autres routes

  // Ajouter votre route
  testElooMonComposant: "/dev/test-eloo/mon-composant",
};
```

**Modifier** : `src/feature-module/router/router.link.tsx`

Ajouter l'import :
```tsx
import MonComposantPage from '../pages/test-eloo/pages/mon-composant-page';
```

Ajouter la route :
```tsx
<Route path={routes.testElooMonComposant} element={<MonComposantPage />} />
```

### Étape 5 : Ajouter au Menu Sidebar

**Modifier** : `src/feature-module/pages/test-eloo/layout.tsx`

```tsx
const components = [
  // ... autres composants
  {
    id: 'mon-composant',
    name: 'Mon Composant',
    path: routes.testElooMonComposant
  },
];
```

### Étape 6 : Tester

1. Redémarrer le serveur dev
2. Aller sur `http://localhost:5173/dev/test-eloo`
3. Cliquer sur "Mon Composant" dans la sidebar
4. Vérifier que tout s'affiche correctement

---

## Intégration dans l'App

### Une fois le composant validé

#### 1. Copier dans `components/eloo/`

```bash
# Depuis le dossier eloo-frontend
cp MODULATION/src/components/MonComposant.tsx src/components/eloo/
```

#### 2. Utiliser dans une Page

```tsx
// Dans n'importe quelle page de l'app
import MonComposant from '@/components/eloo/MonComposant';

const MaPage = () => {
  return (
    <div>
      <h1>Ma Page</h1>
      <MonComposant title="Titre depuis ma page" />
    </div>
  );
};
```

#### 3. Ajouter les Styles (si nécessaire)

**Créer** : `src/style/scss/components/_mon-composant.scss`

```scss
.mon-composant {
  padding: 20px;
  border-radius: 8px;
  background: #fff;

  h3 {
    color: #FF6900;
  }
}
```

**Importer** dans `src/style/scss/main.scss` :

```scss
@use "components/mon-composant";
```

---

## Exemples Pratiques

### Exemple 1 : CategoryCard dans Home-3

**Fichier** : `src/feature-module/home-3/index.tsx`

```tsx
import CategoryCard from '@/components/eloo/CategoryCard';

const Home3 = () => {
  const categories = [
    { title: 'Enfants', image: '/baby-sitting.jpg' },
    { title: 'Maison', image: '/home.jpg' },
    { title: 'Jardin', image: '/garden.jpg' },
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <h2>Nos Catégories</h2>
        <div className="row">
          {categories.map((cat, index) => (
            <div key={index} className="col-lg-4">
              <CategoryCard
                title={cat.title}
                image={cat.image}
                href={`/categories/${cat.title.toLowerCase()}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Exemple 2 : ServiceCard avec Données WordPress

```tsx
import ServiceCard from '@/components/eloo/ServiceCard';
import { useEffect, useState } from 'react';

const ServicesPage = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch('http://eloo.local/wp-json/eloo/v1/providers')
      .then(res => res.json())
      .then(data => setProviders(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {providers.map(provider => (
          <div key={provider.id} className="col-lg-4">
            <ServiceCard
              name={provider.name}
              avatar={provider.avatar}
              category={provider.category}
              price={provider.price}
              rating={provider.rating}
              location={provider.location}
              isTop={provider.isTopPrestataire}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
```

---

## Tips & Best Practices

### 🎨 Design

1. **Respecter le Design System ELOO**
   - Couleur primaire : `#FF6900`
   - Utilisez Bootstrap 5 classes
   - Border radius : 8px
   - Espacements cohérents

2. **Responsive First**
   - Testez mobile et desktop
   - Utilisez Bootstrap grid
   - Media queries si nécessaire

3. **Accessibilité**
   - Attributs `alt` pour images
   - Labels pour inputs
   - Contraste suffisant

### 💻 Code

1. **TypeScript**
   - Toujours typer les props
   - Interfaces claires
   - Props optionnelles vs requises

2. **Props Validation**
   ```tsx
   interface Props {
     title: string;           // Requis
     description?: string;    // Optionnel
     onClick?: () => void;    // Optionnel
   }
   ```

3. **Documentation**
   - README.md pour chaque composant
   - Exemples d'utilisation
   - Props documentées

4. **Réutilisabilité**
   - Composant générique
   - Pas de logique métier
   - Configurable via props

### 🧪 Tests

1. **Tester dans le Lab**
   - Tous les cas d'usage
   - Avec/sans props optionnelles
   - États différents

2. **Valider avant intégration**
   - Design conforme
   - Responsive OK
   - Performance OK

---

## Ressources

### Documentation Externe

- **Bootstrap 5** : https://getbootstrap.com/docs/5.3/
- **React 19** : https://react.dev/
- **TypeScript** : https://www.typescriptlang.org/
- **React Router** : https://reactrouter.com/

### Documentation Interne

- **MODULATION README** : `MODULATION/src/components/[Composant].README.md`
- **Guide WordPress** : `WORDPRESS-REACT-CONNECTION.md`
- **Guide Setup** : `README.md`

---

## FAQ

### Comment accéder au Lab ?

**URL** : `http://localhost:5173/dev/test-eloo`

Assurez-vous que le serveur dev est démarré avec `npm run dev`.

### Où créer un nouveau composant ?

**Développement** : `MODULATION/src/components/`
**Production** : `src/components/eloo/`

Toujours commencer dans MODULATION, puis copier dans eloo/ quand validé.

### Comment ajouter un composant au menu ?

Modifier `src/feature-module/pages/test-eloo/layout.tsx` et ajouter dans le tableau `components`.

### Les composants sont-ils connectés à WordPress ?

**Non** dans le Lab. Le Lab utilise des **données de test statiques**.

Pour tester avec WordPress, intégrez le composant dans une vraie page (ex: `/gigs/service`).

### Comment styliser un composant ?

Trois options :
1. **CSS inline** (prototypage rapide)
2. **Bootstrap classes** (recommandé)
3. **SCSS custom** dans `src/style/scss/components/`

### Pourquoi deux dossiers de composants ?

- **MODULATION/** : Environnement de dev, expérimentation
- **components/eloo/** : Composants validés, utilisés en production

---

## Support

**Questions ?**
- Consultez les README.md des composants existants
- Regardez les exemples dans les pages de test
- Demandez à l'équipe dev

---

**Bon développement ! 🚀**

Version: 1.0
Dernière mise à jour: 14 janvier 2026
