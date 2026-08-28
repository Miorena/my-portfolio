# Portfolio — Miorena Finaritra

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Portfolio personnel en React, construit à partir de mon CV. L'univers visuel s'inspire du quotidien d'un développeur backend/BD : terminal, prompt shell, requêtes SQL — plutôt qu'un template générique.

## Aperçu

- Hero façon fenêtre de terminal, avec une commande `$ whoami` qui s'affiche en machine à écrire
- Sections stylées comme des artefacts de développeur : commentaire de code (`/* profil.md */`), requête SQL (`SELECT * FROM competences;`), commande shell (`$ ls ~/projects`)
- Thème clair / sombre, avec bouton de bascule dans la nav et détection automatique de la préférence système au premier chargement
- Fond en trame de points, discret, façon papier technique
- Entièrement responsive (mobile, tablette, desktop)
- Anime le strict nécessaire, et respecte `prefers-reduced-motion`

## Stack

- **React** (Vite)
- **lucide-react** pour les icônes
- CSS pur (variables CSS pour les couleurs et le thème, pas de framework CSS)

## Structure du projet

```
src/
├── components/          # Composants découpés (.jsx)
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── data.js              # Données texte du CV (PROFILE, PROJECTS, etc.)
├── theme.css            # Import des polices, réinitialisations et variables de thème (clair/sombre)
├── App.css              # Styles globaux et mises en page des composants
└── App.jsx              # Composant principal (assemblage des composants et hooks de thème/effet)
```

Le fichier `portfolio.jsx` est organisé en trois blocs commentés :

1. **Données** (`data.js`) — les constantes `PROFILE`, `SKILL_GROUPS`, `PROJECTS`, `EXPERIENCE`, `EDUCATION`, `LANGUAGES` contiennent le contenu texte du CV, à modifier ici pour tout mettre à jour
2. **Composants** (`src/components/`) — chaque section de la page possède son propre composant JSX
3. **Hooks** (`App.jsx`) — contient `useTypewriter` (effet de frappe du hero) et `useTheme` (thème clair/sombre)

## Installation

```bash
npm install
npm install lucide-react
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (en général `http://localhost:5173`).

## Personnalisation

- **Contenu** : tout se modifie dans les constantes en haut de `portfolio.jsx` (`PROFILE`, `PROJECTS`, etc.)
- **Couleurs / thème** : les deux palettes (claire et sombre) sont définies en variables CSS en haut de `portfolio.css`, dans `.portfolio-app` et `.portfolio-app[data-theme="dark"]`. Les variables `--invert-bg` / `--invert-fg` / `--invert-accent` pilotent les blocs "mis en avant" (bouton principal du hero, carte de contact) — à ajuster ensemble si tu changes une des deux palettes, pour garder un bon contraste avec le fond de page.
- **Polices** : IBM Plex Mono (titres, labels) et IBM Plex Sans (texte courant), à charger via Google Fonts dans `index.html`
- **Responsive** : les grilles (`p-skill-grid`, `p-project-grid`) s'adaptent automatiquement en largeur (`auto-fit`) et ne débordent jamais, même sur très petit écran. Trois points de rupture ajustent la mise en page : `640px` (formation/langues passent en 1 colonne), `560px` (timeline expérience en 1 colonne) et `480px` (espacements resserrés pour téléphone, boutons du hero empilés)

## À faire éventuellement

- Persister le choix de thème (actuellement en mémoire uniquement, repart de la préférence système au rechargement)
- Ajouter un lien GitHub / réseaux une fois disponibles
