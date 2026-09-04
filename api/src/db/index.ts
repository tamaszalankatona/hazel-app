import { config } from 'dotenv';

import * as users from './schema/user';
import * as householdMembers from './schema/household-members';
import * as households from './schema/households';

config({ path: '.env' }); // or .env.local

export const schema = {
  ...users,
  ...householdMembers,
  ...households,
};
