# 🚀 Guide de Démarrage Rapide - PortfolioDaks

## ✅ Configuration Terminée !

Votre projet **PortfolioDaks** a été cloné et configuré avec succès dans VS Code.

## 🎯 Comment Lancer le Portfolio

### Option 1: Utiliser les Tâches VS Code
1. Appuyez sur `Cmd+Shift+P` (macOS) pour ouvrir la palette de commandes
2. Tapez "Tasks: Run Task"
3. Sélectionnez "Démarrer Portfolio - Mode Développement"

### Option 2: Terminal Intégré
1. Ouvrez le terminal intégré (`Cmd+`` ` ou Terminal > New Terminal)
2. Exécutez : `npm start`

### Option 3: Via la Barre de Commandes
- Le serveur de développement sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet
```
PortfolioDaks/
├── src/
│   ├── components/         # Composants React réutilisables
│   │   ├── Home/          # Page d'accueil
│   │   ├── About/         # Page "À propos"
│   │   ├── Projects/      # Portfolio de projets
│   │   └── Resume/        # CV/Resume
│   ├── Assets/            # Images, CV PDF, ressources
│   ├── App.js            # Composant principal
│   └── index.js          # Point d'entrée
├── public/               # Fichiers statiques
└── package.json         # Dépendances et scripts
```

## 🛠 Commandes Disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Lance le serveur de développement |
| `npm run build` | Construit l'app pour la production |
| `npm test` | Lance la suite de tests |
| `npm run eject` | ⚠️ Opération irréversible |

## 🎨 Personnalisation

### Mettre à jour vos informations personnelles :
1. **Informations générales** : `src/components/Home/Home.js`
2. **À propos** : `src/components/About/About.js`
3. **Projets** : `src/components/Projects/Projects.js`
4. **CV** : Remplacez le fichier PDF dans `src/Assets/`

### Changer les couleurs et styles :
- **CSS principal** : `src/style.css`
- **App.css** : `src/App.css`

## 🚀 Déploiement

Le site est déployé sur **Vercel** (projet `portfolio-daks`) :

- Branche de production : `master` → https://www.digitwebcraft.com/
- Build : `npm run build` (Vite), dossier de sortie `dist`
- Les autres branches génèrent des *Preview Deployments*
- Variables d'environnement (`REACT_APP_*`) : Vercel → Settings → Environment Variables
- Test en local : `npm ci && npm run build && npm run preview`

## 📞 Support

- **Repository GitHub** : [PortfolioDaks](https://github.com/Dakster-z/PortfolioDaks)
- **Issues** : [Signaler un Bug](https://github.com/Dakster-z/PortfolioDaks/issues)

---

**✨ Votre portfolio est prêt à être personnalisé et lancé !**
