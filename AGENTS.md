# PortfolioDaks — AGENTS.md

React 17 portfolio for DIGITAL Webcraft (Zaid Dakir). 

## Critical: Build tool

Le projet utilise **Vite 8** (React 17). `react-scripts 5.0.0` reste présent pour les
tests (`npm test`) mais ne doit **pas** servir au build : il bloque sur Node 20+.

- Entrée : `index.html` (racine) → `src/index.jsx` ; config : `vite.config.js` (port 3000)
- Les scripts `dev` / `start` / `build` / `preview` de `package.json` utilisent tous `vite`
- Commandes : `npm ci`, `npm run build`, `npm run preview` (port 3000)
- Variables client : préfixe `REACT_APP_`, injectées par `define` dans `vite.config.js`
- SEO : le `<head>` de `index.html` contient les métadonnées statiques (canonical, OG,
  Twitter) et un bloc de secours no-JS dans `#root`. `src/shared/seo/seoConfig.js`
  doit rester **strictement aligné** sur le title et la description de ce `<head>`.

## Commands

| Purpose | Command |
|---------|---------|
| Dev server (port 3000) | `npm run dev` |
| Production build | `npm run build` |
| Preview du build | `npm run preview` |
| Test | `npm test` (uses react-scripts test) |
| Dep audit | `npm run deps:audit` |

## Env vars

Prefix `REACT_APP_` (CRA convention). Not yet migrated to `VITE_`. Key vars in `.env`:

- `REACT_APP_WHATSAPP_PHONE`
- `REACT_APP_SCHEDULER_URL`

See `.env.example` for full list (EmailJS, Analytics, API keys).

## Architecture

- Pages: `src/pages/<PageName>/` (Home, About, Projects, Skills, Contact)
- Layout: `src/layouts/` (Navbar, Footer)
- Shared: `src/shared/` — config, effects (Particle, Preloader), SEO (Helmet), UI (theme, BackToTop, WhatsAppPopup)
- Routing: React Router v6 in `src/App.jsx`
- Styling: React-Bootstrap + CSS Modules + `data-theme` attribute (dark/light)
- Theme init: `src/shared/ui/theme.js` — `initTheme()` called in `src/index.jsx`
- Assets (images, PDF): `src/Assets/`

## Dependencies

- React 17 (not 18), react-router-dom 6, react-bootstrap 5
- `react-pdf` + `pdfjs-dist` override (2.15.349) in `package.json`
- No TypeScript, no Prettier, no ESLint config file (config in `package.json`)

## Testing

- Jest + React Testing Library (via react-scripts test)
- `src/App.test.js` — default smoke test only
- `src/setupTests.js` imports `@testing-library/jest-dom`

## Notes

- `src/components/Projects/Projects.js` is empty (0 bytes) — unused
- `src/data/` directory exists but is empty
- No CI/CD workflows configured. Déployé sur Vercel (https://www.digitwebcraft.com/), branche de production `master`, build `npm run build` → `dist`, previews par branche.
- Dependabot configured for weekly npm + Actions updates (skips major React updates)
