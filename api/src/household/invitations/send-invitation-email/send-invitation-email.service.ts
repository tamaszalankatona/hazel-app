import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { EmailVariablesI } from './email-variables.interfaces';

@Injectable()
export class SendInvitationEmailService {
  // send email
  async sendEmailInvitation(emailVariables: EmailVariablesI): Promise<void> {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: emailVariables.emailTo,
      template: {
        id: 'household-invitation',
        variables: {
          householdName: emailVariables.householdName,
          invitationUrl: emailVariables.invitationUrl,
          inviterName: emailVariables.inviterName,
          role: emailVariables.role,
          year: emailVariables.year,
          expiresAt: emailVariables.expiresAt,
        },
      },
    });
  }
}
