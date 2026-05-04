# rafaelrojasvi.github.io

Personal portfolio for **Rafael Rojas** — static site built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), deployable to [GitHub Pages](https://pages.github.com/).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:4321`).

## Build

```bash
npm run build
```

Static output is written to `dist/`.

## Preview production build

```bash
npm run preview
```

## Deploy (GitHub Pages)

- **Site URL:** `https://rafaelrojasvi.github.io` (configured in `astro.config.mjs` as `site`).
- Enable **GitHub Pages** in the repository settings and use **GitHub Actions** as the source.
- Pushes to `main` run `.github/workflows/deploy.yml`, which builds and publishes the `dist` folder.

For a user/organization Pages site (`username.github.io`), the site is served from the repository root — no `base` path is required.

## Project structure

- `src/pages/` — routes (`/`, `/projects`, case studies, `/experience`, `/about`)
- `src/layouts/` — `BaseLayout.astro` (metadata, shell)
- `src/components/` — UI pieces (navbar, cards, timeline, diagram)
- `src/data/` — `profile.ts` and `projects.ts` (editable content)
- `src/styles/global.css` — global styles and Tailwind layers

Contact email, GitHub, and LinkedIn live in `src/data/profile.ts` (`profile.contact`).
