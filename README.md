# Aurelia 2 Admin

Aurelia 2 admin panel starter with a calm, minimal UI, Tailwind v4 styling, and a fully featured route map you can grow into a real product.

## Features
- Aurelia 2 RC0 + Router, webpack, Tailwind v4
- Auth scaffold with localStorage session and login page
- Grouped sidebar navigation with scrollable menu and fixed footer
- Core admin pages: dashboard, analytics, system health, usage, reports
- Team and security pages: users, roles and permissions, API keys, audit log
- Operations pages: billing, feature flags, webhooks, integrations
- Workspace pages: profile, notifications, projects, content, notes, tables, forms
- Settings page with theme toggle scaffolding

## Routes
| Path | Page |
| --- | --- |
| `/` | Dashboard |
| `/analytics` | Analytics |
| `/system-health` | System Health |
| `/usage` | Usage |
| `/reports` | Reports |
| `/team-activity` | Team Activity |
| `/users` | Users |
| `/roles` | Roles and Permissions |
| `/api-keys` | API Keys |
| `/feature-flags` | Feature Flags |
| `/billing` | Billing |
| `/webhooks` | Webhooks |
| `/integrations` | Integrations |
| `/audit-log` | Audit Log |
| `/profile` | Profile |
| `/notifications` | Notifications |
| `/projects` | Projects |
| `/content` | Content |
| `/notes` | Notes |
| `/tables` | Tables |
| `/forms` | Forms |
| `/settings` | Settings |
| `/support` | Support |
| `/login` | Login |

## Default login
- Email: `admin@example.com`
- Password: `password`

## Getting started
Requirements: latest Node and npm.

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```

Lint and tests:

```bash
npm run lint
npm test
```

Note: tests are scaffolded only. `npm test` passes with no tests.

## Use as a drop-in admin panel
This repo is a full Aurelia 2 app. If you want it inside an existing app:
- Copy `src/app.html`, `src/app.css`, and `src/app.ts` into your app and adapt them to your shell.
- Copy `src/routes/` for the page templates and view-models.
- Merge the route map in `src/app.ts` with your existing routes.
- Replace `src/services/auth-service.ts` with your auth provider.

## Project structure
- `src/app.ts` defines the route map and sidebar items
- `src/app.html` contains the shell layout and navigation markup
- `src/app.css` holds theme tokens, component styles, and layout utilities
- `src/routes/` contains individual page templates and view-models

## Tailwind v4 setup
This project uses Tailwind v4 with PostCSS and the new import syntax:
- `src/app.css` contains `@import "tailwindcss";` and `@config "../tailwind.config.js";`
- `webpack.config.js` uses `@tailwindcss/postcss`

## Environment
Optional `.env` files are supported via `dotenv-webpack`:
- `.env`
- `.env.development`

## Auth
The auth service lives in `src/services/auth-service.ts`. Replace the hardcoded credentials and localStorage usage with your own auth provider.

## Data integration
Every page uses placeholder arrays inside each view-model (for example `src/routes/roles.ts`). Swap these for API calls:
- Create a service in `src/services/` that fetches data from your backend.
- Inject the service into a route and load data in `attached()` or `binding()`.
- Map your API models into the view templates as needed.

## Navigation and permissions
Navigation groups live in `src/app.ts` (`navGroups`). To gate routes by role or plan:
- Filter `navGroups` based on your auth/permissions model.
- Add guards at the router level if you need hard route enforcement.

## Theming
Global theme tokens live at the top of `src/app.css`:
- `--surface`, `--surface-muted`, `--border`, `--accent`, and type scales
- Fonts are loaded from Google Fonts; swap them or host your own.

## Adding a page
1. Create a view-model and template in `src/routes/`.
2. Add the route and nav item in `src/app.ts`.
3. Add any page-specific classes in `src/app.css` if needed.

## Development notes
- The sidebar is scrollable to keep all routes accessible.
- Component routes are imported statically to avoid router errors in Aurelia RC0.
