import { Request } from '@nestjs/common';
import { AuthUser } from 'src/auth/interface/auth-user.interface';

export interface AuthenticatedRequest extends Request {
  user: AuthUser;
  activeHouseholdId: string;
}
