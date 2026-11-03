# CardioCare website

Marketing site for CardioCare, an AI-powered home cardiac rehabilitation platform.
Built with React 19, Vite, Tailwind CSS, React Router, and Framer Motion.

## Pages

| Route         | Purpose                                                            |
| ------------- | ------------------------------------------------------------------ |
| `/`           | Overview: hero, problem, platform, clinician quotes, progress      |
| `/platform`   | How the kit and app work, features, technical specs, prototypes   |
| `/impact`     | The access problem, barriers, global availability, social impact  |
| `/validation` | Clinician testimonials, what was validated, partner clinics        |
| `/about`      | Mission, founders, roadmap, recognition                            |
| `/contact`    | Contact form (`?interest=demo|clinical|partnership|investment`)    |

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (production build to `dist/`), `npm run preview`
(serve the build locally), `npm run lint`.

## Project layout

```
src/
  data/        Site copy and content: nav, stats, testimonials, roadmap, team
  components/
    layout/    Navbar, Footer, Layout (route shell), ScrollToTop
    ui/        Primitives: Button, Container, Section, Eyebrow, Reveal, Seo
    mocks/     Small product UI vignettes used as illustrations
    ...        Shared blocks: PageHero, CtaBand, StatGrid, Testimonials, Roadmap
  pages/       One component per route
  lib/         Helpers (class joining, contact submission)
```

Copy lives in `src/data`, so most wording changes do not touch components.

## Design system

- Type: the system font stack (SF Pro on Apple devices), with self-hosted Inter
  as the fallback elsewhere. Scale classes (`.h-hero`, `.h-section`, `.h-tile`,
  `.lede`, `.copy`) are in `src/index.css`.
- Colours in `tailwind.config.js`: near-black `ink` text with secondary greys,
  `surface` light grey for alternating sections and tiles, and `blue` for
  buttons and links. Dark sections use plain black.
- Layout: centered headings, flat rounded tiles (`rounded-tile`), no borders,
  shadows, or scroll animations.

## Contact form

Set `VITE_CONTACT_ENDPOINT` (see `.env.example`) to POST submissions as JSON to
a form service or your own API. Without it, the form opens the visitor's email
client with the message pre-filled.

## Deployment

The site is a single-page app. `vercel.json` rewrites every path to
`index.html` so deep links work on Vercel. Analytics come from
`@vercel/analytics`.
