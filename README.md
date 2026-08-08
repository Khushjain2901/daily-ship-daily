# ABTalks Redesign

## Product Concept
ABTalks runs a 60-day coding challenge for Indian college students. Every day you build something, push it to GitHub and share the learning on LinkedIn. The redesign is built around one idea: **BUILD → SHIP → PROVE → REPEAT**.

## Design Philosophy
Dark, technical, high-contrast. Space Grotesk for display, Inter for body, JetBrains Mono for labels. One acid-green accent, subtle borders, no gradients or stock imagery. Typography and spacing carry the hierarchy.

## UX Improvements
- Today's mission dominates the dashboard — no hunting for the next action.
- Streak is meaningful, not childish: week dots, longest streak, recovery language for missed days.
- Day page reads top-down: what to build → requirements → skills → proof.
- Inline URL validation with encouraging, non-corporate copy.

## Thoughtful Product Idea
**Proof Progress** — a day isn't done when the code works. Build / GitHub / LinkedIn is tracked as a 3-step chain so students never forget the public proof, which is the part that actually gets them seen.

## Routes
- `/` — landing
- `/dashboard` — student command center
- `/day/12` — a full challenge day

## Tech Stack
React 19, TypeScript, TanStack Router (file-based routing), Tailwind CSS v4, Lucide icons. Mock data only, no backend.

## Local Setup
```bash
bun install
bun run dev
```

## Project Structure
```
src/
  data/mock.ts        centralized mock data + validation
  components/         nav, ui-kit primitives
  routes/             index.tsx, dashboard.tsx, day.$day.tsx
  styles.css          design tokens
```

## Mobile-first Design
Designed at 390 × 844 first. No horizontal overflow, 13/14 minimum touch targets, bottom navigation on mobile, centered max-width container on desktop.

## Future Improvements
Track selection, day archive, streak freeze, shareable proof cards, real auth and persistence.
