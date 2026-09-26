import { Module } from '@nestjs/common';
import { HouseholdService } from './household.service';
import { HouseholdContextService } from './household-context/household-context.service';
import { HouseholdMembersService } from './members/household-members/household-members.service';
import { HouseholdInvitationsService } from './invitations/household-invitations/household-invitations.service';
import { SendInvitationEmailService } from './invitations/send-invitation-email/send-invitation-email.service';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [
    HouseholdService,
    HouseholdContextService,
    HouseholdMembersService,
    HouseholdInvitationsService,
    SendInvitationEmailService,
    AuthService,
    UserService,
  ],
})
export class HouseholdModule {}
