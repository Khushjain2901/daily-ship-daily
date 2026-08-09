# ABTalks — Product Design Prompt

Build a complete, polished, mobile-first redesign of ABTalks, a 60-day coding challenge platform for Indian college students.

## You are

A product designer and frontend engineer building the actual application, not just describing a concept. Use your own design judgment when details are unspecified. Build the real UI, interactions, mock data, and routes in one pass.

## Product concept

ABTalks runs a 60-day coding challenge. Every day the student builds a focused project, pushes it to GitHub, and shares the learning on LinkedIn. The core loop is **BUILD → SHIP → PROVE → REPEAT**.

A day is not done when the code works. The app tracks three proof steps as a chain: Build, GitHub, LinkedIn. This public-proof workflow is the product's differentiator — it forces students to ship visibly, which is what gets them noticed.

## Design philosophy

- Dark, technical, high-contrast
- One acid-green accent
- No gradients, no stock imagery, no purple/indigo AI defaults
- Subtle borders, typography-driven hierarchy
- Space Grotesk for display, Inter for body, JetBrains Mono for labels
- Mobile-first at 390 × 844, then scale up to desktop
- 13/14 px minimum touch targets, no horizontal overflow
- Bottom navigation on mobile, centered max-width container on desktop

## Routes

- `/` — Landing page: explain the loop, show social proof, drive to the dashboard
- `/dashboard` — Student command center: today's mission, streak, progress, proof chain, achievements, stats
- `/day/12` — A full challenge day: what to build, requirements, skills, stack, proof submission

## Required screens

### 1. Landing (`/`)
- Punchy headline around the build/ship/prove loop
- 3-step visual explanation
- Social proof or mock testimonials
- Primary CTA to start / dashboard
- Mobile: stacked sections, large tappable CTA
- Desktop: centered hero + horizontal steps

### 2. Dashboard (`/dashboard`)
- Today's mission dominates above the fold
- Progress bar, streak badge, week dots
- Recovery language if a day was missed
- Proof chain: Build / GitHub / LinkedIn with inline URL validation
- Achievements section
- Key stats
- Mobile: single-column card stack; bottom nav
- Desktop: max-width container, multi-column layout

### 3. Day page (`/day/12`)
- Day number, title, difficulty, time estimate
- Objective and description
- Requirements list
- Skills and stack chips
- Proof submission chain
- Encouraging, non-corporate copy
- Mobile: top-down reading order
- Desktop: two-column if needed, but keep mission as the hero

## UX requirements

- The next action is always visible
- Streak is meaningful, not childish: week dots, longest streak, recovery language
- Inline URL validation with friendly error copy
- Clear state for done / in-progress / not-started
- Touch targets ≥ 44 × 44 CSS px
- No horizontal overflow on mobile
- Lazy-load images where applicable
- Accessible labels and focus states

## Data

Use centralized mock data with TypeScript types. Include:
- `Student` profile
- `ChallengeDay` shape
- Proof state (`build`, `github`, `linkedin`)
- Achievements and stats
- Validation helper for URLs (GitHub / LinkedIn host checks)

## Tech stack

- React 19
- TypeScript
- TanStack Router (file-based routing)
- TanStack Start
- Tailwind CSS v4
- Lucide icons
- Mock data only; no backend

## Deliverables

- Working routes and layouts
- Reusable UI kit components (card, chip, section, progress, badge, check-dot)
- Mobile-first responsive CSS
- README with product concept, routes, and local setup
- ROUTE_MAP.md listing all routes

## Evaluation criteria

1. Mobile screenshot at 390px looks like a real startup product
2. No horizontal overflow, no console errors
3. Clear information hierarchy
4. Original visual direction (not generic AI template)
5. Daily-challenge psychology and public-proof workflow are front and center
6. Desktop layout is a clean expansion, not a broken mobile view

## Instructions

Build the first version. Then stop, review the mobile screenshot, and improve spacing, type hierarchy, and copy before considering the task complete. Iterate on the visual result until it feels professional and intentional.
