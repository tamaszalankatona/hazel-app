import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { schema } from './db';

export const DATABASE = Symbol('DATABASE');

export function createDatabase(connectionString: string) {
  const client = postgres(connectionString);

  return drizzle(client, {
    schema,
  });
}

export type Database = ReturnType<typeof createDatabase>;

export const databaseProvider = {
  provide: DATABASE,
  inject: [ConfigService],
  useFactory: (configService: ConfigService): Database => {
    const connectionString = configService.getOrThrow<string>('DATABASE_URL');

    return createDatabase(connectionString);
  },
};
