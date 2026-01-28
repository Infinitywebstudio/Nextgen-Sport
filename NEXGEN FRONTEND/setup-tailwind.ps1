# Script PowerShell pour configurer Tailwind dans eloo-frontend
# Usage: .\setup-tailwind.ps1

Write-Host "🚀 Configuration Tailwind CSS pour ELOO" -ForegroundColor Cyan
Write-Host ""

# Vérifier qu'on est dans le bon dossier
if (!(Test-Path "package.json")) {
    Write-Host "❌ Erreur: Ce script doit être exécuté depuis eloo-frontend/" -ForegroundColor Red
    exit 1
}

# Étape 1: Installer les dépendances
Write-Host "📦 Installation des dépendances Tailwind..." -ForegroundColor Yellow
npm install -D tailwindcss postcss autoprefixer

# Étape 2: Initialiser Tailwind
Write-Host "⚙️  Initialisation Tailwind..." -ForegroundColor Yellow
npx tailwindcss init -p

# Étape 3: Installer Shadcn UI dépendances
Write-Host "📦 Installation Shadcn UI..." -ForegroundColor Yellow
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge embla-carousel-react lucide-react

# Étape 4: Créer le fichier tailwind.css
Write-Host "📝 Création de tailwind.css..." -ForegroundColor Yellow
$tailwindCss = @"
@tailwind base;
@tailwind components;
@tailwind utilities;
"@
Set-Content -Path "src\tailwind.css" -Value $tailwindCss

# Étape 5: Créer tailwind.config.js avec préfixe
Write-Host "📝 Création tailwind.config.js..." -ForegroundColor Yellow
$tailwindConfig = @"
/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',  // Évite conflits avec Bootstrap
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Exclure les anciens composants DreamGigs
    "!./src/feature-module/**/*.{js,ts,jsx,tsx}"
  ],
  corePlugins: {
    preflight: false,  // CRITIQUE : Désactive reset CSS Tailwind
  },
  theme: {
    extend: {
      screens: {
        'sm2': '600px',
        'md2': '850px',
        'xxl': '1400px',
      },
      colors: {
        // Couleurs ELOO
        'eloo-primary': '#0d7fff',
        'eloo-success': '#10b981',
        'eloo-warning': '#f59e0b',
        'eloo-danger': '#ef4444',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      }
    }
  },
  plugins: [],
}
"@
Set-Content -Path "tailwind.config.js" -Value $tailwindConfig -Force

# Étape 6: Créer dossier pour composants ELOO
Write-Host "📁 Création dossier components/eloo..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path "src\components\eloo" -Force | Out-Null
New-Item -ItemType Directory -Path "src\components\ui" -Force | Out-Null

# Étape 7: Créer fichier SCSS custom ELOO
Write-Host "📝 Création eloo-custom.scss..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path "src\style\scss" -Force | Out-Null

$elooCustom = @"
// === VARIABLES ELOO ===
`$eloo-primary: #0d7fff;
`$eloo-success: #10b981;
`$eloo-warning: #f59e0b;
`$eloo-danger: #ef4444;

// Override Bootstrap variables
`$primary: `$eloo-primary;
`$success: `$eloo-success;
`$warning: `$eloo-warning;
`$danger: `$eloo-danger;

// === OVERRIDES BOOTSTRAP ===
.btn-primary {
  background-color: `$eloo-primary !important;
  border-color: `$eloo-primary !important;

  &:hover {
    background-color: darken(`$eloo-primary, 10%) !important;
    border-color: darken(`$eloo-primary, 10%) !important;
  }
}

.badge-success {
  background-color: `$eloo-success !important;
}

// === ZONES POUR COMPOSANTS REACT TAILWIND ===
#react-user-profile,
#react-reviews-carousel,
#react-service-card {
  // Les composants React/Tailwind s'injectent ici
}

// === COMPATIBILITÉ BOOTSTRAP + TAILWIND ===
.tw-container {
  max-width: 100% !important;
}
"@
Set-Content -Path "src\style\scss\eloo-custom.scss" -Value $elooCustom

# Étape 8: Mise à jour de main.tsx
Write-Host "📝 Mise à jour main.tsx..." -ForegroundColor Yellow
$mainTsx = Get-Content "src\main.tsx" -Raw
if ($mainTsx -notmatch "tailwind.css") {
    $mainTsx = $mainTsx -replace 'import "./index.scss";', "import `"./index.scss`";`nimport `"./tailwind.css`";  // Tailwind pour nouveaux composants"
    Set-Content -Path "src\main.tsx" -Value $mainTsx
    Write-Host "✅ main.tsx mis à jour" -ForegroundColor Green
} else {
    Write-Host "ℹ️  main.tsx déjà configuré" -ForegroundColor Blue
}

# Étape 9: Mise à jour de index.scss
Write-Host "📝 Mise à jour index.scss..." -ForegroundColor Yellow
$indexScss = Get-Content "src\index.scss" -Raw
if ($indexScss -notmatch "eloo-custom.scss") {
    Add-Content -Path "src\index.scss" -Value "`n// ELOO Custom Styles`n@import './style/scss/eloo-custom.scss';"
    Write-Host "✅ index.scss mis à jour" -ForegroundColor Green
} else {
    Write-Host "ℹ️  index.scss déjà configuré" -ForegroundColor Blue
}

Write-Host ""
Write-Host "✅ Configuration terminée !" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Prochaines étapes:" -ForegroundColor Cyan
Write-Host "  1. Copier vos composants depuis MODULATION vers src/components/eloo/" -ForegroundColor White
Write-Host "  2. Adapter les classes Tailwind (ajouter préfixe tw-)" -ForegroundColor White
Write-Host "  3. Lancer npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "📚 Documentation complète: STRATEGIE-INTEGRATION-COMPOSANTS.md" -ForegroundColor Cyan
