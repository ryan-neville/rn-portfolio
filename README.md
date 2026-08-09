# rn-portfolio

Personal portfolio website for Ryan Neville — built with Next.js, TypeScript, and Tailwind CSS.

## Overview

A portfolio site featuring an animated hero section, an about section, a full career experience timeline sourced from LinkedIn, and a projects section. Designed with a modern dark aesthetic using glassmorphism cards, gradient accents, and scroll-triggered animations powered by Framer Motion.

## Projects

Side projects are pulled in as git submodules under [`projects/`](projects/) and served directly by this site — no separate deployment required.

| Project | Route | Source |
|---|---|---|
| Japanese Kana Flashcards | `/projects/japanese-flashcards` | [ryan-neville/japanese-flashcard-app](https://github.com/ryan-neville/japanese-flashcard-app) |
| Vowel Movement | `/projects/vowel-movement` | [ryan-neville/vowel-movement](https://github.com/ryan-neville/vowel-movement) |

Selecting a project card in the **Projects** section opens its route in a new tab.

### How a submodule app is mounted

The submodule's UI is imported into a route in this app's App Router — only the app component is used, never the submodule's own root layout:

```
app/projects/japanese-flashcards/page.tsx
  └── imports @/projects/japanese-flashcard-app/app/page

app/projects/vowel-movement/page.tsx
  └── imports @/projects/vowel-movement/app/page
```

This means the mounted app inherits this site's Next.js version, React version, fonts, and build toolchain. Three things keep that working:

- `tailwind.config.ts` includes a submodule's source in its `content` globs so the submodule's utility classes are generated. Only needed for submodules that style with Tailwind — vowel-movement uses CSS Modules, so it has no glob.
- `tsconfig.json` excludes `projects` from type-checking, so the submodule's own dependency versions don't have to match this project's.
- `tsconfig.json` `paths` re-points the `@/` prefixes a submodule uses for its *own* files (`@/components/*`, `@/lib/*`, `@/hooks/*`, `@/data/*`) at that submodule, falling back from this project's own directories. Next feeds the same entries to webpack, so bundling and type-checking agree. Submodules that import relatively — as the flashcard app does — need none of this.

Global stylesheets are the one thing that does not compose cleanly. The flashcard app's are skipped entirely (its Tailwind 4 layers would fight this project's Tailwind 3). Vowel-movement's `app/globals.css` *is* imported, because its CSS Modules read design tokens declared there and render unstyled without it; it is plain CSS with no Tailwind layers, and it only loads on its own route. Because it restyles `body`, that route links back to the site with a plain `<a>` rather than `next/link` — the App Router does not reliably drop a route's stylesheet on a soft navigation.

### Adding another project submodule

```bash
git submodule add <repo-url> projects/<name>
```

Then add a route under `app/projects/<name>/`, an entry to the `projects` array in [`components/Projects.tsx`](components/Projects.tsx), and whichever of the wiring above the submodule needs — a Tailwind content glob, `@/` path mappings, a stylesheet import.

## Tech Stack

- **[Next.js 14](https://nextjs.org/)** — React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety throughout
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — Scroll animations and transitions
- **[Lucide React](https://lucide.dev/)** — Icon library

## Project Structure

```
rn-portfolio/
├── app/
│   ├── globals.css       # Global styles, Tailwind layers, custom utilities
│   ├── layout.tsx        # Root layout with metadata and Inter font
│   └── page.tsx          # Page composition
│   └── projects/
│       ├── japanese-flashcards/
│       │   └── page.tsx  # Mounts the flashcard submodule app
│       └── vowel-movement/
│           └── page.tsx  # Mounts the vowel-movement submodule app
├── components/
│   ├── Navbar.tsx        # Sticky glass navbar with mobile menu
│   ├── Hero.tsx          # Full-height hero with profile picture and CTAs
│   ├── About.tsx         # Bio section with highlight cards
│   ├── Experience.tsx    # Vertical career timeline
│   ├── Projects.tsx      # Project cards, each opening in a new tab
│   └── Footer.tsx        # Footer with LinkedIn and GitHub links
├── projects/
│   ├── japanese-flashcard-app/  # git submodule
│   └── vowel-movement/          # git submodule
├── public/
│   └── profile.jpg       # Profile picture
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Clone with submodules

Project submodules must be present or the build will fail to resolve their routes:

```bash
git clone --recurse-submodules https://github.com/ryan-neville/rn-portfolio.git
```

Already cloned without them:

```bash
git submodule update --init --recursive
```

### Install dependencies

```bash
npm install
```

Submodules do **not** need their own `npm install` — their UI is compiled by this project's toolchain.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/). Connect the repository and Vercel will handle the rest automatically.

Vercel checks out git submodules automatically as long as the submodule repositories are public and referenced over HTTPS (as `.gitmodules` does here). If a submodule is ever made private, its checkout will need credentials configured on the Vercel project.
