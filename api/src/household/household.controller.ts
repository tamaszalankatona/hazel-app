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
  ApiNoContentResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthUser } from 'src/auth/interface/auth-user.interface';
import { CreateHouseholdDto } from './dto/create-household.dto';
import { HouseholdService } from './household.service';
import { UpdateActiveHouseholdDto } from './dto/update-active-household.dto';

@Controller('household')
export class HouseholdController {
  constructor(private readonly householdService: HouseholdService) {}

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
}
