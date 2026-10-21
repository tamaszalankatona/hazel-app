# Hazel

Hazel is a connected digital home and household organizer.

## Requirements

- Node.js 22.22.3
- pnpm 10.30.3

## Development

Install dependencies:

    pnpm install

Run the API:

    pnpm --filter api start:dev

Run the frontend:

    pnpm --filter frontend start

## Quality checks

    pnpm format:check
    pnpm lint
    pnpm typecheck
    pnpm test
    pnpm build

Database setup and migrations will be configured in a later task.
