import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { randomBytes } from 'crypto';
import { and, eq } from 'drizzle-orm';
import { AuthUser } from 'src/auth/interface/auth-user.interface';
import { householdInvitations } from 'src/db/schema/households';
import { DATABASE, type Database } from 'src/drizzle.provider';
import { CreateInvitationDto } from 'src/household/dto/create-invitation.dto';
import { HouseholdContextService } from 'src/household/household-context/household-context.service';
import { HouseholdMembersService } from 'src/household/members/household-members/household-members.service';
import { hashToken } from 'src/utils/hash-household-invitation';
import { SendInvitationEmailService } from '../send-invitation-email/send-invitation-email.service';
import { AuthService } from 'src/auth/auth.service';
import {
  INVITATION_URL,
  INVITE_TTL_MS,
} from 'src/constants/household-invitation.constants';
import { inviteExpirationInHours } from 'src/utils/convert-inv-expiration.utils';
import { EmailVariablesI } from '../send-invitation-email/email-variables.interfaces';

@Injectable()
export class HouseholdInvitationsService {
  constructor(
    @Inject(DATABASE)
    private readonly db: Database,

    private readonly householdContextService: HouseholdContextService,
    private readonly householdMembersService: HouseholdMembersService,
    private readonly sendInvitationEmailService: SendInvitationEmailService,
    private readonly authService: AuthService,
  ) {}

  // send invitation code
  async createInvitation(
    createInvitationDto: CreateInvitationDto,
    userId: string,
  ): Promise<string> {
    const activeHouseholdName =
      await this.householdContextService.getActiveHouseholdName(userId);
    const { name: userName } = (await this.authService.getMe(userId)).user;

    const token = randomBytes(32).toString('base64url');
    const email = createInvitationDto.email.trim().toLowerCase();

    const emailVariables: EmailVariablesI = {
      emailTo: email,
      householdName: activeHouseholdName,
      invitationUrl: INVITATION_URL,
      inviterName: userName,
      role: createInvitationDto.role,
      year: new Date().getFullYear().toString(),
      expiresAt: inviteExpirationInHours(),
    };

    // get the current active household to send invitation to
    const activeHouseholdId =
      await this.householdContextService.getActiveHousehold(userId);

    this.db.transaction(async (tx) => {
      await tx.delete(householdInvitations).where(
        and(
          eq(householdInvitations.householdId, await activeHouseholdId),
          eq(householdInvitations.email, email),
          //isNull(householdInvitations.acceptedAt),
        ),
      );
      await tx.insert(householdInvitations).values({
        householdId: await activeHouseholdId,
        email,
        tokenHash: await hashToken(token),
        role: createInvitationDto.role ?? 'ADULT',
        invitedBy: userId,
        expiresAt: new Date(Date.now() + INVITE_TTL_MS),
      });
    });

    await this.sendInvitationEmailService.sendEmailInvitation(emailVariables);
    return token;
  }

  // accept invitation code
  async acceptInvitation(token: string, user: AuthUser) {
    const [inv] = await this.db
      .select()
      .from(householdInvitations)
      .where(eq(householdInvitations.tokenHash, await hashToken(token)))
      .limit(1);

    if (!inv || inv.acceptedAt || inv.expiresAt < new Date()) {
      throw new BadRequestException('Invalid or expired invitation');
    }
    if (user.email.toLowerCase() !== inv.email) {
      throw new ForbiddenException(
        'This invitation was sent to a different email',
      );
    }

    const [updated] = await this.db
      .update(householdInvitations)
      .set({ acceptedAt: new Date() })
      .where(
        and(
          eq(householdInvitations.id, inv.id),
          //isNull(householdInvitations.acceptedAt),
        ),
      )
      .returning({ id: householdInvitations.id });

    if (!updated)
      throw new BadRequestException('Invalid or expired invitation');

    await this.householdMembersService.addMember(
      inv.householdId,
      user.id,
      inv.role,
    ); // your existing membership logic
  }
}
