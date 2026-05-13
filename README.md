# Rashed Azizi Portfolio

A premium multi-page student portfolio built with Next.js, React, Tailwind CSS, TypeScript, and Framer Motion. The site now uses dedicated routes for `Home`, `About`, `Projects`, `Experience`, `Education`, and `Contact`, all tied together by one cinematic design system.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Highlights

- Routed multi-page portfolio architecture
- Shared glassmorphism design system with layered gradients
- Responsive header, footer, and animated page transitions
- Home page with editorial hero, profile feature card, and route previews
- Dedicated pages for background, work, timeline, education, and contact
- Static export configuration for GitHub Pages

## Project Structure

```text
src/
  app/
    about/
    contact/
    education/
    experience/
    projects/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    portfolio/
    site/
    ui/
  data/
    portfolio.ts
  lib/
    metadata.ts
public/
  rashed-profile.jpg
  certificates/
```

## Customize Content

Most editable portfolio content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Update that file to swap copy, links, project details, metrics, and timeline entries without touching the presentation layer.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The project is configured for static export, so production output is generated in `out/`.

## GitHub Pages

Deployment is configured for the `Rashed-Azizi` repository path. If you rename the repository, update the repo name in [`next.config.mjs`](next.config.mjs).
