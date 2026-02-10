# PostHog post-wizard report

The wizard has completed a deep integration of your DevEvent Next.js application. PostHog analytics has been set up using the recommended `instrumentation-client.ts` approach for Next.js 15.3+, with a reverse proxy configured for improved tracking reliability. Three custom events have been instrumented to track key user interactions: exploring events, clicking on event cards, and navigation behavior.

## Integration summary

The following files were created or modified:

| File | Change |
|------|--------|
| `.env` | Created with PostHog API key and host environment variables |
| `instrumentation-client.ts` | Created for client-side PostHog initialization |
| `next.config.ts` | Added reverse proxy rewrites for PostHog ingestion |
| `components/ExploreBtn.tsx` | Added event tracking for explore button clicks |
| `components/EventCard.tsx` | Added event tracking for event card clicks |
| `components/Navbar.tsx` | Added event tracking for navigation link clicks |

## Events instrumented

| Event Name | Description | File |
|------------|-------------|------|
| `explore_events_clicked` | User clicked the 'Explore Events' button on the homepage to navigate to the events section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details (includes event_title, event_slug, event_location, event_date properties) | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicked a navigation link in the navbar (includes link_name and location properties) | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/310102/dashboard/1266865) - Your main analytics dashboard

### Insights
- [Explore Events Button Clicks](https://us.posthog.com/project/310102/insights/Uom9qJhR) - Tracks explore button engagement over time
- [Event Card Clicks](https://us.posthog.com/project/310102/insights/NyI2q3UZ) - Tracks event card engagement over time
- [Navigation Link Clicks](https://us.posthog.com/project/310102/insights/fkcda3wq) - Tracks navigation usage
- [Explore to Event Click Funnel](https://us.posthog.com/project/310102/insights/ZHpeLm7Q) - Conversion funnel from exploring to clicking an event
- [Popular Events by Clicks](https://us.posthog.com/project/310102/insights/BwXjwBt1) - Shows which dev events are most popular

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
