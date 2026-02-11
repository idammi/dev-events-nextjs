# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

DevEvent is a Next.js 16 App Router application that serves as a hub for developer events (hackathons, meetups, conferences). The project uses TypeScript, Tailwind CSS v4, and integrates PostHog for analytics. MongoDB (via Mongoose) is included as a dependency, indicating plans for backend data persistence (branch: `database-models`).

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint codebase
npm run lint
```

## Architecture & Key Patterns

### App Structure
- **Next.js App Router**: Uses the `app/` directory pattern with React Server Components by default
- **Client Components**: Interactive components (those using hooks, event handlers, or PostHog) are marked with `'use client'`
- **Path Aliases**: Import paths use `@/` prefix (e.g., `@/components/Navbar`, `@/lib/utils`) per `tsconfig.json`

### PostHog Analytics Integration
PostHog is initialized via `instrumentation-client.ts` using the Next.js 15.3+ instrumentation pattern. This is the **only** correct approach for this codebase:
- **Do NOT** use `PostHogProvider` or other initialization patterns
- **Do NOT** initialize PostHog in multiple locations
- Client-side initialization happens automatically via `instrumentation-client.ts`
- Reverse proxy is configured in `next.config.ts` to route PostHog requests through `/ingest/*`
- Environment variables: `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` in `.env`

To add new event tracking:
```typescript
'use client';
import posthog from 'posthog-js';

// In your event handler
posthog.capture('event_name', {
  property_name: value,
});
```

### Component Organization
- **Custom Components**: `/components/` directory contains reusable UI components
- **shadcn/ui**: Configured with "new-york" style in `components.json`. Uses Radix UI primitives with Tailwind
- **LightRays Component**: WebGL-powered background effect using the `ogl` library (both `.tsx` and `.jsx` versions exist)
- **Utility Functions**: `/lib/utils.ts` contains the `cn()` helper for conditional Tailwind classes (via `clsx` + `tailwind-merge`)

### Styling
- **Tailwind v4**: Uses PostCSS plugin (`@tailwindcss/postcss`)
- **CSS Variables**: Enabled in `components.json` for shadcn/ui theming
- **Fonts**: Google Fonts via `next/font` (Schibsted Grotesk and Martian Mono) in `app/layout.tsx`
- **Global Styles**: Defined in `app/globals.css`

### Data Management
- **Event Data**: Currently stored as a static array in `/lib/constants.tsx` with `EventItem` type
- **MongoDB**: Dependency present (Mongoose) but not yet integrated. Connection string exists in `.env`
- When implementing database models, follow Mongoose patterns and likely create a `/models` or `/lib/models` directory

## Environment Variables

Required variables in `.env`:
- `NEXT_PUBLIC_POSTHOG_KEY`: PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST`: PostHog host URL
- `MONGODB_URI`: MongoDB connection string (for future database integration)

## Git Workflow

The project uses feature branches merged into `main`:
- `main`: Production branch
- `implement-posthog`: Merged PostHog integration (PR #1)
- `database-models`: Current working branch for database implementation

## Important Notes

- **TypeScript**: Strict mode enabled in `tsconfig.json`
- **ESLint**: Uses Next.js flat config with `eslint.config.mjs`
- **JSX Transform**: Uses React 19's automatic JSX runtime (`jsx: "react-jsx"`)
- **WebGL Performance**: The LightRays component uses Intersection Observer for performance - it only renders when visible
- **shadcn/ui Components**: Can be added using the `shadcn` CLI (already configured in `components.json`)
