import { SetMetadata } from '@nestjs/common';

export const SKIP_ACTIVE_HOUSEHOLD = 'skipActiveHousehold';

export const SkipActiveHousehold = () =>
  SetMetadata(SKIP_ACTIVE_HOUSEHOLD, true);
