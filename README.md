# LearnHub — Frontend (ICT930 Assignment 2)

A production-style frontend for an **Education / Training platform**: course discovery,
account creation and (in later iterations) enrolment tracking and progress visualisation.
Built with React + Vite for ICT930 Advanced Web Application Development.

## Current scope

This iteration delivers the public-facing shell of the product:

| Route        | Page       | Notes                                                          |
| ------------ | ---------- | ------------------------------------------------------------- |
| `/`          | Home       | Hero, value props, featured courses (async loaded)           |
| `/courses`   | Courses    | Searchable / filterable / sortable catalogue                 |
| `/about`     | About      | Product story, values, team                                  |
| `/login`     | Login      | Validated form, mock auth, redirect back to intended page    |
| `/register`  | Register   | Validated form with password confirmation, mock auth         |
| `*`          | Not Found  | 404 fallback                                                 |

## Technology stack

- **React 19** (functional components + hooks)
- **Vite** build tooling
- **React Router** for client-side routing
- **Tailwind CSS v4** (via `@tailwindcss/vite`) with design tokens for a consistent visual language
- **oxlint** + **Prettier** for code quality
- Google Fonts (Inter)

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
npm run lint     # oxlint
npm run format   # prettier --write
```

Requires Node 20+.

## Key features

- **Reusable component architecture** — layout (`Navbar`, `Footer`, `Layout`),
  UI primitives (`Button`, `Input`, `Card`, `Alert`, `Spinner`, `Container`) and
  feature components (`CourseCard`) are separated into their own folders.
- **State management** — local component state for forms and filters; shared auth
  state via React Context (`AuthProvider` + `useAuth`), persisted to `localStorage`.
- **Data handling** — courses are loaded asynchronously through the `useCourses`
  hook, which exposes explicit `loading` / `error` / `success` states rendered by
  the UI. Data source is a local `courses.json` mock.
- **User interaction** — client-side search, category/level filters and sorting on
  the Courses page; forms with inline validation and submit/loading states.
- **Responsive design** — mobile-first layouts, a collapsible mobile nav menu, and
  fluid grids from 1 → 3 columns.
- **Accessibility** — semantic landmarks, a skip link, labelled form controls with
  `aria-invalid` / `aria-describedby`, `aria-live` result counts, visible focus
  rings and AA-contrast colours.

## Project structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, Layout (app shell)
│   ├── ui/         # Reusable presentational primitives
│   └── courses/    # Feature components
├── context/        # AuthProvider + context object
├── hooks/          # useAuth, useCourses
├── lib/            # Framework-agnostic helpers (validation)
├── data/           # Mock JSON data
├── pages/          # Route-level views
├── App.jsx         # Route table
└── main.jsx        # App bootstrap (Router + AuthProvider)
```

## Design decisions

- **Tailwind + `@theme` tokens** instead of ad-hoc CSS: enforces one spacing/colour
  scale and keeps components self-documenting.
- **Context only for genuinely shared state (auth).** Filters and form state stay
  local to avoid unnecessary re-renders and keep components portable.
- **A `useCourses` hook that simulates a network request** so the loading and error
  UI is real and ready to swap for a live API (`fetch`) with no component changes.
- **Polymorphic `Button`** (`to` / `href` / `button`) to keep call sites consistent
  whether an action navigates or submits.
- **Validation extracted to `lib/validation.js`** — pure functions, easy to unit test
  and reuse between Login and Register.

## Notes on AI use

See the Reflection document for the required declaration of AI assistance.
