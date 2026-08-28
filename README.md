# Portfolio — Miorena Finaritra

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
├── App.jsx        # composant principal (le portfolio)
├── App.css         # (à vider — les styles du portfolio vivent dans portfolio.css)
├── portfolio.jsx    # renommer en App.jsx, ou l'inverse selon ta préférence
└── portfolio.css    # tous les styles du portfolio
```

Le fichier `portfolio.jsx` est organisé en trois blocs commentés :

1. **Données** (`PROFILE`, `SKILL_GROUPS`, `PROJECTS`, `EXPERIENCE`, `EDUCATION`, `LANGUAGES`) — le contenu texte du CV, à modifier ici pour tout mettre à jour
2. **`useTypewriter`** — petit hook pour l'effet de frappe du hero
3. **`useTheme`** — hook pour le thème clair/sombre (préférence système au chargement, bascule manuelle ensuite)

## Installation

```bash
npm install
npm install lucide-react
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (en général `http://localhost:5173`).

## Personnalisation

- **Contenu** : tout se modifie dans les constantes en haut de `portfolio.jsx` (`PROFILE`, `PROJECTS`, etc.)
- **Couleurs / thème** : les deux palettes (claire et sombre) sont définies en variables CSS en haut de `portfolio.css`, dans `.portfolio-app` et `.portfolio-app[data-theme="dark"]`
- **Polices** : IBM Plex Mono (titres, labels) et IBM Plex Sans (texte courant), à charger via Google Fonts dans `index.html`

## À faire éventuellement

- Persister le choix de thème (actuellement en mémoire uniquement, repart de la préférence système au rechargement)
- Ajouter un lien GitHub / réseaux une fois disponibles