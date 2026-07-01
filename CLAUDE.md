# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build
```

No test suite is configured.

## Architecture

React 18 SPA built with Vite. Routing via React Router v6. Animations via Framer Motion. Styling via Tailwind CSS. Icons via Lucide React.

**Entry point:** `src/main.jsx` → `src/App.jsx` wraps all routes in `Layout.jsx`.

**Routing:** Routes are defined in `src/App.jsx`. The `createPageUrl()` utility in `utils/index.js` simply prepends `/` to a page name — it's a thin wrapper, not a router abstraction.

**Directory layout:**
- `Pages/` — full-page route components (Home, About, Experience, Projects, Certifications, Contacts)
- `Components/home/` — section components used only on the Home page (HeroSection, ExperiencePreview, ProjectsPreview, SkillsPreview)
- `Components/ui/` — reusable primitives (card, badge, button) following a shadcn-style pattern
- `Entities/` — JSON schema definitions (currently only `Project.json` describing project data shape)
- `public/` — static assets served directly (images, `resume.pdf`)

**Data pattern:** Page-level data (experience entries, skills, education) is hardcoded as `const` arrays at the top of each Page component. There is no backend or data-fetching layer.

**Path alias:** `@` resolves to the project root (configured in `vite.config.js`).

**Tailwind dynamic classes:** Color variants like `bg-${color}-100` and `text-${color}-600` are built dynamically in `Experience.jsx` using values from the data array (`"green"`, `"blue"`). Tailwind must be able to statically detect these — add new color names to `tailwind.config.js` safelist if needed.
