import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/auth/set-public.endpoint.decorator';
import { HouseholdContextService } from '../household-context/household-context.service';
import { AuthenticatedRequest } from '../interfaces/authenticated-request.interface';

@Injectable()
export class ActiveHouseholdGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly householdContextService: HouseholdContextService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();

    request.activeHouseholdId =
      await this.householdContextService.getActiveHousehold(request.user.id);

    return true;
  }
}
