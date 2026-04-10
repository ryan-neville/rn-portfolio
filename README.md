# rn-portfolio

Personal portfolio website for Ryan Neville — built with Next.js, TypeScript, and Tailwind CSS.

## Overview

A single-page portfolio site featuring an animated hero section, an about section, and a full career experience timeline sourced from LinkedIn. Designed with a modern dark aesthetic using glassmorphism cards, gradient accents, and scroll-triggered animations powered by Framer Motion.

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
├── components/
│   ├── Navbar.tsx        # Sticky glass navbar with mobile menu
│   ├── Hero.tsx          # Full-height hero with profile picture and CTAs
│   ├── About.tsx         # Bio section with highlight cards
│   ├── Experience.tsx    # Vertical career timeline
│   └── Footer.tsx        # Footer with LinkedIn and GitHub links
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

### Install dependencies

```bash
npm install
```

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
