# 👨‍💻 Personal Website

A modern, high-performance personal website built with Astro, TypeScript, and TailwindCSS.
Designed with a modular, scalable architecture that emphasizes clarity, maintainability, and long-term evolution.

## 🌐 Live URL

[https://josepalacioscabb.dev](https://josepalacioscabb.dev/)

## 🚀 Tech Stack

- `Astro 5` Hybrid rendering & island architecture
- `TypeScript` Strict, expressive types across data & UI
- `TailwindCSS v4` Utility-first styling
- `Astro Islands` Scoped interactivity where needed
- `SVG Icon System` Centralized, typed, optimized
- `pnpm` Fast, deterministic package management
- `ESLint Flat Config + Prettier` Unified code formatting
- `Husky + lint-staged` Enforced commit quality
- `GitHub Actions + GitHub Pages` CI/CD pipeline

## 🗂️ Project Structure

```text
src/
├── assets/          # SVG icons
├── components/      # UI components, layouts, and page sections
├── config/          # Site settings and profile data
├── layouts/         # Page layouts
├── lib/             # Core utilities
├── pages/           # Astro routes
├── styles/          # Global styles (Tailwind)
├── types/           # Shared TypeScript interfaces
└── utils/           # Helper functions
```

## 🛠️ Development

Run the following commands at the project root to build, serve, and preview the site:


| Command | Action |
| --- | --- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |


## 📦 Deployment

This project is deployed via GitHub Pages using a GitHub Actions workflow included in `.github/workflows/deploy.yml`.
