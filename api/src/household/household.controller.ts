import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthUser } from 'src/auth/interface/auth-user.interface';
import { CreateHouseholdDto } from './dto/create-household.dto';
import { HouseholdService } from './household.service';
import { UpdateActiveHouseholdDto } from './dto/update-active-household.dto';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { HouseholdInvitationsService } from './invitations/household-invitations/household-invitations.service';
import { AcceptInvitationDto } from './invitations/household-invitations/dto/accept-invitation.dto';

@Controller('household')
export class HouseholdController {
  constructor(
    private readonly householdService: HouseholdService,
    private readonly householdInvitationService: HouseholdInvitationsService,
  ) {}

  // create
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'Household created',
  })
  @ApiBadRequestResponse({
    description: 'Invalid household data',
  })
  @ApiUnauthorizedResponse({
    description: 'User is not authenticated',
  })
  @ApiConflictResponse({
    description:
      'Household could not be created because it conflicts with existing data',
  })
  @ApiBody({
    type: CreateHouseholdDto,
  })
  async createHousehold(
    @Request() req: { user: AuthUser },
    @Body() createHouseholdDto: CreateHouseholdDto,
  ) {
    console.log('controller uid: ', req.user);

    return this.householdService.createHousehold(
      req.user.id,
      createHouseholdDto,
    );
  }

  // update active household
  @Patch('active')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({
    description: 'Active household updated',
  })
  async updateActiveHousehold(
    @Request() req: { user: AuthUser },
    @Body() dto: UpdateActiveHouseholdDto,
  ) {
    await this.householdService.updateActiveHousehold(
      req.user.id,
      dto.householdId,
    );
  }

  // send invitation to currently active household
  @Post('invite')
  @ApiOperation({
    summary: 'Invite a member to the active household',
    description:
      'Sends an invitation email to the given address, inviting them to join the currently active household with the specified role.',
  })
  @ApiCreatedResponse({
    description: 'Invitation created and sent',
  })
  @ApiBadRequestResponse({
    description: 'No active household selected, or invalid input',
  })
  @ApiForbiddenResponse({
    description: 'User is not a member of the active household',
  })
  async sendInvitation(
    @Request() req: { user: AuthUser },
    @Body() createInvitationDto: CreateInvitationDto,
  ) {
    return this.householdInvitationService.createInvitation(
      createInvitationDto,
      req.user.id,
    );
  }

  // accept invitation
  @Post('accept-invitation')
  @ApiOperation({
    summary: 'Accept a household invitation',
    description:
      'Accepts a pending invitation using the token from the invite link, adding the authenticated user as a member of the household.',
  })
  @ApiNoContentResponse({ description: 'Invitation accepted' })
  @ApiBadRequestResponse({
    description: 'Invalid, expired, or already-accepted invitation',
  })
  @ApiForbiddenResponse({
    description: 'Invitation was sent to a different email address',
  })
  @ApiNoContentResponse({ description: 'Invitation accepted' })
  async acceptInvitation(
    @Request() req: { user: AuthUser },
    @Body() acceptInvitationDto: AcceptInvitationDto,
  ) {
    await this.householdInvitationService.acceptInvitation(
      acceptInvitationDto.token,
      req.user,
    );
  }
}
