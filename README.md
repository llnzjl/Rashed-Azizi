# Rashed Azizi Portfolio

A responsive developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Published on GitHub Pages at https://llnzjl.github.io/Rashed-Azizi/.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. The development cache uses `.next-dev/` so a production build can run without overwriting the active preview.

## Production and GitHub Pages

```bash
npm run check
npm run build
npm run check:export
npm start
```

The production preview is at http://127.0.0.1:3001/Rashed-Azizi/. Set `PORT` to choose another port. `npm start` serves the static export; it does not require a Next.js server.

The build exports to `out/`, with `basePath`, asset URLs, metadata, and internal links configured for `/Rashed-Azizi/`. The existing GitHub Actions workflow deploys `out/` when changes are pushed to `master`.

`check:export` verifies the nine portfolio routes, branded titles, canonical URLs, local resource paths, and the three live project links. No API keys, database, or server-side API routes are needed.

## Content and components

- `src/data/portfolio.ts`: original profile, contacts, projects, education, certificate records, notes, and goals.
- `src/data/showcase.ts`: project details and links, navigation sections, and the extended journey.
- `src/components/site/`: shared navigation, sections, project previews, certificate viewer, theme and motion controls.
- `src/app/globals.css`: dark/light design tokens, responsive layouts, typography, and decorative motion.
- `public/projects/*-live.webp`: screenshots captured from the actual Baraka.uz, DayFlow, and KAA public sites. Earlier project visuals remain available.
- `public/rashed-profile.webp`: optimized version of the original portrait; the original image is preserved.
- `public/fonts/`: locally served Geist, Inter, and JetBrains Mono Latin fonts with their SIL Open Font Licenses.

All original routes remain: Home, About, Projects, Education, Experience, Blog, Impossible List, CV, and Contact.

## Interactions and accessibility

- A dark default with a persistent light/dark toggle; storage failures do not prevent changing the theme.
- Desktop section tracking and keyboard-accessible mobile navigation.
- Project category filters and native modal dialogs for project details and certificate previews.
- Native dialogs trap keyboard focus, support Escape, and return focus to their trigger.
- Certificate filters, an expandable journey, goal-status filters, copy email, and a printable CV.
- Magnetic CTAs, portrait parallax, scroll progress, gentle project movement, and subtle golden autumn leaves.
- Reduced-motion preferences disable or simplify motion. Decorative effects do not intercept clicks.
- Blog entries remain the original short learning notes. Goal statuses reflect visible project evidence, not visitor-editable completion claims.

## Review checklist

Check desktop and phone layouts, both color themes, project and goal filters, certificate preview and verification links, dialog keyboard behavior, mobile navigation from internal pages, email copying, reduced motion, and printed CV output. Verify the production preview under the repository subpath before deployment.
