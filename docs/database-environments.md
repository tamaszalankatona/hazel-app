# Hazel Database Environments

## Environments

- **Local development:** The API runs on your computer and uses the `hazel-dev` Supabase project database.
- **Production:** The deployed API uses the separate `hazel-prod` Supabase project database.
- **CI testing:** Automated database integration tests use a disposable test database or local Supabase services. Ordinary pull requests must not require hosted database credentials.

## Configuration and secrets

- Keep local credentials in `api/.env.local`.
- Keep `api/.env.prod` out of Git; use the deployment platform's secret manager for production credentials.
- Keep `api/.env.example` free of real credentials.
- Never commit database URLs, passwords, or Supabase secret keys.
- Never use production credentials in local development or CI.

## Schema and migrations

Drizzle Kit is the single source of truth for application database schemas and migrations. Supabase CLI may manage local Supabase services and project configuration, but must not independently manage the same application tables through a second migration system.

## Safe migration workflow

1. Update the Drizzle schema.
2. Generate a version-controlled migration using Drizzle Kit.
3. Apply and test the migration against a clean, disposable database.
4. Apply the reviewed migration to `hazel-dev`.
5. Verify the schema and application behavior in development.
6. Promote the same reviewed migration to `hazel-prod` through a deliberate release step.
7. Verify production migration status and application health.

## Production safety

- Verify the target database before every migration.
- Never reset, drop, or experiment against `hazel-prod`.
- Never copy production user data into development or test environments.
- Review destructive changes and plan safe rollout and recovery before production deployment.
- Do not run migrations automatically against production as part of ordinary pull-request CI.
