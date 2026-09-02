import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as users from './schema/user';
import * as householdMembers from './schema/household-members';
import * as households from './schema/households';

config({ path: '.env' }); // or .env.local

const client = postgres(process.env.DATABASE_URL!);

export const db = drizzle(client, {
  schema: {
    ...users,
    ...householdMembers,
    ...households,
  },
});
