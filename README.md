# rn-portfolio

Personal portfolio website for Ryan Neville — built with Next.js, TypeScript, and Tailwind CSS.

## Overview

A portfolio site featuring an animated hero section, an about section, a full career experience timeline sourced from LinkedIn, and a projects section. Designed with a modern dark aesthetic using glassmorphism cards, gradient accents, and scroll-triggered animations powered by Framer Motion.

## Projects

Side projects are pulled in as git submodules under [`projects/`](projects/) and served directly by this site — no separate deployment required.

| Project | Route | Source |
|---|---|---|
| Japanese Kana Flashcards | `/projects/japanese-flashcards` | [ryan-neville/japanese-flashcard-app](https://github.com/ryan-neville/japanese-flashcard-app) |

Selecting a project card in the **Projects** section opens its route in a new tab.

### How a submodule app is mounted

The submodule's UI is imported into a route in this app's App Router — only the app component is used, not the submodule's own root layout or global stylesheet:

```
app/projects/japanese-flashcards/page.tsx
  └── imports @/projects/japanese-flashcard-app/app/page
```

This means the mounted app inherits this site's Next.js version, React version, fonts, and Tailwind build. Two things keep that working:

- `tailwind.config.ts` includes `./projects/japanese-flashcard-app/app/**/*` in its `content` globs so the submodule's utility classes are generated.
- `tsconfig.json` excludes `projects` from type-checking, so the submodule's own dependency versions don't have to match this project's.

### Adding another project submodule

```bash
git submodule add <repo-url> projects/<name>
```

Then add a route under `app/projects/<name>/`, a Tailwind content glob, and an entry to the `projects` array in [`components/Projects.tsx`](components/Projects.tsx).

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
│       └── japanese-flashcards/
│           └── page.tsx  # Mounts the flashcard submodule app
├── components/
│   ├── Navbar.tsx        # Sticky glass navbar with mobile menu
│   ├── Hero.tsx          # Full-height hero with profile picture and CTAs
│   ├── About.tsx         # Bio section with highlight cards
│   ├── Experience.tsx    # Vertical career timeline
│   ├── Projects.tsx      # Project cards, each opening in a new tab
│   └── Footer.tsx        # Footer with LinkedIn and GitHub links
├── projects/
│   └── japanese-flashcard-app/  # git submodule
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
