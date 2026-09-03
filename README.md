# Portfolio — Miorena Finaritra

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Portfolio personnel en React, construit à partir de mon CV. L'univers visuel s'inspire du quotidien d'un développeur backend/BD : terminal, prompt shell, requêtes SQL — plutôt qu'un template générique.

**En ligne :** [my-portfolio-navy-eight-86.vercel.app](https://my-portfolio-navy-eight-86.vercel.app/)

## Aperçu

- Hero façon fenêtre de terminal, avec une commande `$ whoami` qui s'affiche en machine à écrire, et une photo affichée dans une seconde mini-fenêtre du même style, à côté
- Sections stylées comme des artefacts de développeur : commentaire de code (`/* profil.md */`), requête SQL (`SELECT * FROM competences;`), commande shell (`$ ls ~/projets`)
- Chaque projet renvoie vers son dépôt GitHub
- Thème clair / sombre, avec bouton de bascule dans la nav, détection automatique de la préférence système au premier chargement, et choix mémorisé d'une visite à l'autre
- Menu burger sur petit écran
- Fond en trame de points, discret, façon papier technique
- Entièrement responsive (mobile, tablette, desktop)
- Anime le strict nécessaire (apparition en cascade du hero, curseur clignotant), et respecte `prefers-reduced-motion`

## Stack

- **React** (Vite)
- **lucide-react** pour les icônes
- CSS pur (variables CSS pour les couleurs et le thème, pas de framework CSS)

## Structure du projet

```
src/
├── assets/
│   └── miorena.jpg       # photo affichée dans le hero
├── components/            # un composant + un CSS par composant
│   ├── Nav.jsx / Nav.css
│   ├── Hero.jsx / Hero.css
│   ├── About.jsx / About.css
│   ├── Skills.jsx / Skills.css
│   ├── Projects.jsx / Projects.css
│   ├── Experience.jsx / Experience.css
│   └── Contact.jsx / Contact.css
├── data.js                # données texte du CV (PROFILE, PROJECTS, etc.)
├── theme.css              # polices, reset global, variables de thème (clair/sombre)
├── App.css                # utilitaires de mise en page partagés (.p-shell, .p-section...)
└── App.jsx                # assemble les composants, contient useTypewriter et useTheme
```

Le projet est organisé en trois blocs :

1. **Données** (`data.js`) — les constantes `PROFILE`, `SKILL_GROUPS`, `PROJECTS`, `EXPERIENCE`, `EDUCATION`, `LANGUAGES` contiennent le contenu texte du CV ; chaque composant importe directement ce dont il a besoin
2. **Composants** (`src/components/`) — chaque section de la page a son propre fichier `.jsx` + `.css`
3. **Hooks** (`App.jsx`) — `useTypewriter` (effet de frappe du hero) et `useTheme` (thème clair/sombre : lit d'abord un choix déjà enregistré dans `localStorage`, sinon la préférence système ; chaque bascule manuelle réécrit ce choix)

## Installation

```bash
npm install
npm install lucide-react
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (en général `http://localhost:5173`).

## Déploiement

Hébergé sur **Vercel**, connecté au dépôt GitHub — chaque `push` sur `master` redéploie automatiquement.

Deux points bloquants rencontrés en le mettant en place, à connaître si le build échoue un jour :
- `package.json` et `package-lock.json` ne doivent **jamais** être dans `.gitignore` — sans eux sur GitHub, Vercel n'a rien à installer (`vite: command not found`)
- Si le site demande une authentification à l'ouverture, c'est l'option **Deployment Protection** de Vercel (réglages du projet) — à désactiver pour un accès public

## Personnalisation

- **Contenu** : tout se modifie dans les constantes de `data.js` (`PROFILE`, `PROJECTS`, etc.)
- **Photo** : place une image carrée dans `src/assets/` et ajuste le nom importé dans `Hero.jsx` (`import photo from "../assets/miorena.jpg"`)
- **Couleurs / thème** : les deux palettes (claire et sombre) sont définies en variables CSS en haut de `theme.css`, dans `.portfolio-app` et `.portfolio-app[data-theme="dark"]`. Les variables `--invert-bg` / `--invert-fg` / `--invert-accent` pilotent les blocs "mis en avant" (bouton principal du hero, carte de contact) — à ajuster ensemble si tu changes une des deux palettes, pour garder un bon contraste avec le fond de page
- **Liens de couleur** : la règle globale dans `App.css` utilise `.portfolio-app :where(a)` plutôt que `.portfolio-app a` — `:where()` neutralise sa spécificité, pour qu'un composant puisse toujours redéfinir la couleur d'un lien avec une simple classe, sans conflit
- **Polices** : IBM Plex Mono (titres, labels) et IBM Plex Sans (texte courant), à charger via Google Fonts dans `index.html`
- **Responsive** : les grilles (`p-skill-grid`, `p-project-grid`) s'adaptent automatiquement en largeur (`auto-fit`) et ne débordent jamais, même sur très petit écran. Points de rupture : `640px` (formation/langues en 1 colonne, menu nav en burger), `560px` (timeline expérience en 1 colonne) et `480px` (espacements resserrés pour téléphone, boutons du hero empilés)
