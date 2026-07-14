# PortfolioDaks — AGENTS.md

React 17 portfolio for DIGITAL Webcraft (Zaid Dakir). 

## Critical: Build tool

**`react-scripts 5.0.0` hangs on Node 20** (webpack compilation never finishes). The project was migrated to Vite:

- Entry: `index.html` (root) → `src/index.jsx`
- Config: `vite.config.js` (port 3000)
- All JSX-containing files were renamed from `.js` to `.jsx`
- `package.json` scripts still reference `react-scripts` — **do not use `npm start`**. Use:
  - Dev: `npx vite`
  - Build: `npx vite build`
  - Preview: `npx vite preview`

## Commands

| Purpose | Command |
|---------|---------|
| Dev server (port 3000) | `npx vite --port 3000` |
| Production build | `npx vite build` |
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
- No CI/CD workflows configured. Deployed on Render (portfoliodaks.onrender.com)
- Dependabot configured for weekly npm + Actions updates (skips major React updates)
