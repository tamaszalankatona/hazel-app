import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.gurad';
import { HouseholdController } from './household/household.controller';
import { HouseholdModule } from './household/household.module';
import { HouseholdService } from './household/household.service';
import { HouseholdContextService } from './household/household-context/household-context.service';
import { HouseholdInvitationsService } from './household/invitations/household-invitations/household-invitations.service';
import { HouseholdMembersService } from './household/members/household-members/household-members.service';
import { SendInvitationEmailService } from './household/invitations/send-invitation-email/send-invitation-email.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    DatabaseModule,
    HouseholdModule,
  ],
  controllers: [AppController, UserController, HouseholdController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    HouseholdService,
    HouseholdContextService,
    HouseholdInvitationsService,
    HouseholdMembersService,
    SendInvitationEmailService,
    AuthService,
  ],
})
export class AppModule {}
