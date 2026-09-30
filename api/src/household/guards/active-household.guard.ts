import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SKIP_ACTIVE_HOUSEHOLD } from '../decorators/skip-active-household.decorator';
import { HouseholdContextService } from '../household-context/household-context.service';
import { IS_PUBLIC_KEY } from 'src/auth/set-public.endpoint.decorator';
import { AuthenticatedRequest } from '../interfaces/authenticated-request.interface';

@Injectable()
export class ActiveHouseholdGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly householdContextService: HouseholdContextService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. Public routes don't need an active household
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // 2. Authenticated routes can explicitly skip household validation
    const skipActiveHousehold = this.reflector.getAllAndOverride<boolean>(
      SKIP_ACTIVE_HOUSEHOLD,
      [context.getHandler(), context.getClass()],
    );

    if (skipActiveHousehold) {
      return true;
    }

    // 3. Normal household-scoped route
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();

    request.activeHouseholdId =
      await this.householdContextService.getActiveHousehold(request.user.id);

    return true;
  }
}
