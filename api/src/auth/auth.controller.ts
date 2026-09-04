import {
  Controller,
  Post,
  Body,
  Res,
  HttpCode,
  HttpStatus,
  Request,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBody,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginBodyDto } from './dto/login-body.dto';
import type { Response } from 'express';
import { AuthUser } from './interface/auth-user.interface';
import { AuthResponseDto } from './dto/auth-response.dto';
import { UserResponseDto } from '../user/dto/user-response.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { SetPublic } from './set-public.endpoint.decorator';
import { AuthMeResponseDto } from './dto/auth-me-response.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  // sign up route
  @SetPublic()
  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    description: 'Sign up successful',
    type: UserResponseDto,
  })
  @ApiConflictResponse({
    description:
      'Request body does not meet requirements (e.g. invalid email format, password too short)',
  })
  @ApiBody({ type: CreateUserDto })
  async signup(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return await this.userService.createUser(createUserDto);
  }

  // login route
  @SetPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Sign in successful',
    type: AuthResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Request body does not meet requirements',
  })
  @ApiBody({ type: LoginBodyDto })
  async login(
    @Body() loginBodyDto: LoginBodyDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResponseDto> {
    const user: AuthUser = await this.authService.validateUser(loginBodyDto);

    const token: Record<string, string> = await this.authService.login(
      user.email,
    );

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: false, //localhost only
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      sameSite: 'strict',
    });

    return { message: 'Sign in successfull' };
  }

  // me
  @Get('me')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Returns the authenticated user and household context',
    type: AuthMeResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'User is not authenticated',
  })
  async getMe(@Request() req: { user: AuthUser }): Promise<AuthMeResponseDto> {
    return this.authService.getMe(req.user);
  }

  // logout
  @SetPublic()
  @Post('logout')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    description: 'Logout successful',
  })
  async logout(
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ success: string }> {
    res.clearCookie('access_token', {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    });

    return {
      success: 'true',
    };
  }
}
