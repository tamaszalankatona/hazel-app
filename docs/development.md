# Development Guide

## Prerequisites

- Node.js 22.22.3
- pnpm 10.30.3
- Git

## Repository structure

- `frontend/` — Angular client-rendered SPA
- `api/` — NestJS API
- `docs/` — engineering documentation
- `.github/workflows/` — CI workflows

The frontend and API maintain independent package manifests and pnpm lockfiles.

## Local development

Run these commands in separate terminals from the repository root:

- `pnpm dev:frontend`
- `pnpm dev:api`

## Quality checks

Run before opening a pull request:

- `pnpm build`
- `pnpm test`
- `pnpm lint`
- `pnpm format:check`

All checks must pass before merging. A passing build alone does not prove a feature works correctly.

## Definition of Done

- Acceptance criteria are satisfied.
- Relevant automated tests pass.
- Build, test, lint, and formatting checks pass.
- Security, authorization, validation, and error handling are addressed where relevant.
- Documentation is updated when behavior or architecture changes.
- No secrets or generated build artifacts are committed.
- The pull request is reviewed and approved.

## Git workflow

- Keep `main` stable.
- Use one focused branch per independently reviewable issue.
- Submit changes through pull requests.
- Do not merge while required checks are failing.

## Frontend architecture

Hazel uses a client-rendered Angular SPA. Do not introduce SSR, prerendering, or hydration. Deploy static assets with SPA fallback routing. Frontend route guards are for UX; the API enforces authorization.

## Authentication and secrets

- Hazel owns authentication.
- Use server-managed sessions and HttpOnly cookies.
- Never persist session credentials in localStorage.
- Protect cookie-authenticated mutations against CSRF and validate trusted origins.
- Keep secrets in environment variables or a secret manager.
- Commit safe `.env.example` files, never real secrets.
