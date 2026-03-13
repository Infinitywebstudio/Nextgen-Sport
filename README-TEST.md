# 🧪 Guide de test rapide - Connexion API ELOO

## ✅ Configuration terminée

La Phase 2 (Connexion React → WordPress) est prête à être testée !

---

## 🚀 Lancer les tests

### 1. Vérifier WordPress

Assurez-vous que WordPress est démarré (Local by Flywheel).

Testez dans le navigateur :
```
http://eloo.local/wp-json/eloo/v1/status
```

### 2. Installer les dépendances (si pas encore fait)

```bash
cd eloo-frontend
npm install
```

### 3. Lancer le serveur React

```bash
npm run dev
```

### 4. Accéder à la page de test

Ouvrir dans le navigateur :
```
http://localhost:5173/dev/api-test
```

---

## 📋 Ce que vous devriez voir

La page de test affiche automatiquement :

✅ **Test 1 : Statut de l'API ELOO**
- Connexion WordPress réussie
- Message : "ELOO API is working!"
- Version et timestamp

✅ **Test 2 : Catégories de services**
- 11 catégories affichées
- Liste complète des catégories créées

Si les deux tests sont ✅ verts :
> 🎉 **Tous les tests sont passés avec succès !**
> La connexion React → WordPress API fonctionne parfaitement.

---

## 🔧 Services disponibles

### `wordpress.service.ts`
Service générique pour appeler l'API WordPress :
```typescript
import wordPressService from './services/wordpress.service';

// GET request
const response = await wordPressService.get('/endpoint');

// POST request
const response = await wordPressService.post('/endpoint', data);

// Avec authentification
const response = await wordPressService.get('/endpoint', true);
```

### `auth.service.ts`
Service d'authentification JWT :
```typescript
import authService from './services/auth.service';

// Login
await authService.login({ username, password });

// Vérifier si connecté
if (authService.isAuthenticated()) {
  const user = authService.getUser();
}

// Vérifier le rôle
if (authService.isClient()) {
  // Code pour client
}
```

---

## 🐛 Problèmes courants

### CORS Error
➜ Vérifier `.htaccess` dans WordPress

### Connection Refused
➜ Démarrer Local by Flywheel

### 404 sur endpoints
➜ WP Admin > Réglages > Permaliens > Enregistrer

---

## 📁 Fichiers importants

- `.env` - Configuration (créer depuis `.env.example`)
- `src/config/api.config.ts` - Tous les endpoints
- `src/services/wordpress.service.ts` - Service API
- `src/services/auth.service.ts` - Service Auth
- `src/components/ApiTest.tsx` - Page de test

---

**🎯 Prochaine étape** : Implémenter l'authentification JWT (Login/Register)
