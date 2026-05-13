# Rashed Azizi Portfolio

A premium one-page developer portfolio built with Next.js, React, Tailwind CSS, TypeScript, and Framer Motion. The experience is designed to feel cinematic and polished, with layered gradients, glassmorphism panels, floating particles, animated section reveals, an active-section navbar, and reusable content-driven components.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Highlights

- Fullscreen hero with animated role cycling
- Sticky glass navigation with active section highlighting
- Smooth section reveal animations and hover interactions
- Custom cursor, loading intro, and scroll progress indicator
- Premium project cards for personal and team work
- Experience and education timelines
- Responsive contact section with client-side mailto flow
- Static export configuration for GitHub Pages

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    portfolio/
    ui/
  data/
    portfolio.ts
  hooks/
    use-active-section.ts
public/
  rashed-profile.jpg
  certificates/
```

## Customize Content

Most editable portfolio content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Update that file to swap copy, links, project details, stats, and timeline entries without touching the presentation components.

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
