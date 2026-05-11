# Vivek — Portfolio

A Minecraft-themed developer portfolio built with React 19, Vite 7, and Tailwind CSS.

**Live:** [vivekkumar9919.github.io](https://vivekkumar9919.github.io) &nbsp;|&nbsp; **GitHub:** [@vivekkumar9919](https://github.com/vivekkumar9919)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React + custom pixel SVGs |
| Fonts | Press Start 2P, Inter (via Fontsource) |
| Contact | Formspree |
| Hosting | GitHub Pages / Netlify / Vercel |

---

## Features

- Minecraft-inspired pixel-art design system (inventory slots, pixel buttons, chunky borders)
- Dark/light theme with `prefers-color-scheme` system preference detection and `localStorage` persistence
- Scroll-spy active navigation using `IntersectionObserver`
- Live GitHub API integration with 30-minute `localStorage` cache and stale-fallback on error
- Curated repository whitelist (`PINNED_REPOS` in `constants.js`)
- Formspree-powered contact form with client-side validation and accessible error messages
- React `ErrorBoundary` per section — no full-page crashes
- Code-split sections via `React.lazy` + `Suspense`
- Responsive from 375 px mobile to ultrawide
- Accessible: ARIA landmarks, live regions, `role="alert"` errors, `aria-live` loading screen, skip link, reduced-motion support
- Pixel-art 404 page
- Build-time code splitting: vendor + motion chunks

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env.local` file in the project root:

```
# Required for the contact form to actually send messages.
# Sign up at https://formspree.io, create a form, and paste its endpoint here.
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Optional: set to "true" only in Docker/WSL/VM environments where file watching needs polling.
VITE_USE_POLLING=false
```

---

## Customisation

### Personal details

Edit `src/utils/constants.js`:

```js
const GITHUB_USERNAME = 'your-github-username';

export const SOCIAL_LINKS = {
  github:   'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  email:    'you@example.com',
};
```

### Featured projects

Add or edit entries in `FEATURED_PROJECTS` inside `constants.js`. Each project takes:

```js
{
  id: 'unique-id',
  name: 'Project Name',
  description: 'What it does and why it matters.',
  features: ['Feature 1', 'Feature 2'],
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
  live: 'https://your-app.com',  // or null
}
```

### Pinned GitHub repos

Set `PINNED_REPOS` in `constants.js` to an array of repo names to control which repos appear in the grid. Pinned repos are shown first; remaining slots are filled by star count.

```js
export const PINNED_REPOS = ['repo-name-1', 'repo-name-2'];
```

### Skills

Edit `SKILL_CATEGORIES` in `constants.js`. Each category has a `name`, `icon` (key from `iconMap`), `color` (Tailwind token), and `skills` array.

### Photo

Drop your headshot at `public/avatar.webp`. The Hero component automatically uses it; if the file is missing it falls back to the pixel-art avatar. WebP is recommended for best performance.

### Resume

Place your resume PDF at `public/resume.pdf`. Links across the navbar, hero, and footer will resolve to it automatically.

### Open Graph image

Create a 1200×630 image and save it as `public/og-image.png` for rich social sharing previews.

---

## Architecture

```
src/
├── components/
│   ├── icons/          # Pixel SVG icon library
│   ├── sections/       # Page sections (Hero, Projects, Skills, About, Contact)
│   └── ui/             # Shared UI (Navbar, Footer, LoadingScreen, ErrorBoundary)
├── hooks/
│   ├── useTheme.js         # Dark/light theme
│   ├── useGitHub.js        # GitHub API + cache
│   └── useActiveSection.js # IntersectionObserver scroll spy
├── utils/
│   └── constants.js    # All content + config data
├── App.jsx             # Root: loading gate, ErrorBoundary, lazy sections
├── index.css           # Tailwind layers + component styles
└── main.jsx            # React DOM mount
```

---

## Deployment

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to the gh-pages branch
```

Add `base: '/repo-name/'` to `vite.config.js` if deploying to a sub-path.

### Netlify / Vercel

Connect the repository and set the build command to `npm run build` with the publish directory as `dist`. Both platforms serve the `public/404.html` file for unknown routes automatically.

---

## Linting

```bash
npm run lint
```

ESLint 9 flat config with `react-hooks` and `react-refresh` plugins.
