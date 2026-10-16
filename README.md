# Hazel

Hazel is a household operating system for everyday family coordination and the connected digital home.

## Repository layout

- `frontend/` — Angular client-side rendered (CSR-only) single-page application.
- `api/` — NestJS HTTP API.
- `docs/` — architecture decision records and engineering documentation.
- `.github/workflows/` — continuous integration.

## Technical baseline

- Node.js version is pinned in `.nvmrc`.
- Frontend and API retain independent `pnpm-lock.yaml` files and package installations.
- PostgreSQL with Drizzle ORM is the persistence direction.
- Hazel owns authentication. Browser sessions use server-managed sessions delivered through HttpOnly cookies; never persist session credentials in `localStorage`.
- The Angular frontend is **CSR only**. No SSR, prerendering, or hydration. Deploy static assets with SPA fallback for Angular Router deep links.

## Development

See `docs/development.md` for setup and verification commands.

## Sources of truth

- Product and architecture decisions: [Hazel Notion hub](https://app.notion.com/p/3fb785d101de819e9416e57d62595a6c)
- Delivery tracking: Linear.
- Executable behavior and enforced checks: this repository and CI.

Do not mark a feature complete until acceptance criteria are met and required quality checks pass.