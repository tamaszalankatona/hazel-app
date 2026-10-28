import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const configDirectory = dirname(fileURLToPath(import.meta.url));

config({
  path: resolve(configDirectory, '.env.local'),
  override: true,
});

if (process.env.APP_ENV !== 'local') {
  throw new Error(
    'Drizzle Kit is restricted to APP_ENV=local. Check api/.env.local.',
  );
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is missing from api/.env.local.');
}

const databaseHost = new URL(databaseUrl).hostname;

if (
  databaseHost !== 'aws-0-eu-west-1.pooler.supabase.com' &&
  databaseHost !== 'localhost' &&
  databaseHost !== '127.0.0.1'
) {
  throw new Error(
    `Unexpected database host for local Drizzle config: ${databaseHost}`,
  );
}

export default defineConfig({
  schema: './src/db/schema/users.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl,
  },
  strict: true,
  verbose: true,
});
