import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Req,
  Request,
} from '@nestjs/common';
import { HouseholdMembersService } from './household-members.service';
import { AuthUser } from 'src/auth/interface/auth-user.interface';
import { HouseholdMembersModel } from 'src/db/schema/household-members';
import {
  ApiBody,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { ChangeMemberRoleDto } from './dto/change-member-role.dto';
import { ActiveHouseholdId } from 'src/household/decorators/active-household-id.decorator';

@Controller('household/members')
export class HouseholdMembersController {
  constructor(
    private readonly householdMembersService: HouseholdMembersService,
  ) {}

  // list all members of the active household
  @Get('all')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'All the member of the household found',
  })
  @ApiConflictResponse({
    description: 'Currently there is no active household selected',
  })
  async listAllMembers(
    @Request() req: { user: AuthUser },
    @ActiveHouseholdId() householdId: string,
  ): Promise<HouseholdMembersModel[]> {
    return this.householdMembersService.listAllMembers(
      req.user.id,
      householdId,
    );
  }

  // delete a member of the active household by id

  @Delete(':memberId')
  @ApiOperation({
    summary: 'Remove a member from the active household',
    description:
      'Removes a household member by their membership ID from the authenticated user’s active household.',
  })
  @ApiParam({
    name: 'memberId',
    description: 'The ID of the household membership to remove',
    type: String,
    format: 'uuid',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Household member removed successfully.',
    schema: {
      example: {
        message: 'Household member removed successfully.',
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Household member not found.',
  })
  async deleteMemberFromHouseholdById(
    @Request() req: { user: AuthUser },
    @Param('memberId') memberId: string,
    @ActiveHouseholdId() householdId: string,
  ): Promise<{ message: string }> {
    return this.householdMembersService.deleteMemberFromHouseholdById(
      req.user.id,
      memberId,
      householdId,
    );
  }

  @Patch(':memberId/role')
  @ApiOperation({
    summary: 'Change a household member role',
  })
  @ApiParam({
    name: 'memberId',
    description: 'Household membership ID',
    type: String,
    format: 'uuid',
  })
  @ApiBody({
    type: ChangeMemberRoleDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Household member role updated successfully.',
    schema: {
      example: {
        message: 'Household member role updated successfully.',
      },
    },
  })
  async changeMemberRole(
    @Request() req: { user: AuthUser },
    @Param('memberId') memberId: string,
    @Body() dto: ChangeMemberRoleDto,
    @ActiveHouseholdId() householdId: string,
  ): Promise<{ message: string }> {
    return this.householdMembersService.changeMemberRole(
      req.user.id,
      memberId,
      dto.role,
      householdId,
    );
  }
}
