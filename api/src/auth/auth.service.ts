import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { type Database, DATABASE } from 'src/drizzle.provider';
import { LoginBodyDto } from './dto/login-body.dto';
import { UserService } from 'src/user/user.service';
import { AuthUser } from './interface/auth-user.interface';
import { comparePassword } from 'src/utils/hash-password.utils';
import { users } from 'src/db/schema/user';
import { eq } from 'drizzle-orm';
import { householdMembers } from 'src/db/schema/household-members';
import { AuthMeResponseDto } from './dto/auth-me-response.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(DATABASE)
    private readonly db: Database,

    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  //login
  async login(email: string): Promise<string> {
    const user = await this.userService.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });
  }

  // validate user
  async validateUser(loginBodyDto: LoginBodyDto): Promise<AuthUser> {
    const user = await this.db.query.users.findFirst({
      where: eq(users.email, loginBodyDto.email),
    });

    if (!user)
      throw new UnauthorizedException(
        'User with provided cretentials not found',
      );

    const isPasswordValid = await comparePassword(
      loginBodyDto.plainPassword,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException(
        'User with provided credentials not found',
      );
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  // get me
  async getMe(userId: string) {
    const user = await this.db.query.users.findFirst({
      where: eq(users.id, userId),
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const memberships = await this.db.query.householdMembers.findMany({
      where: eq(householdMembers.userId, user.id),
      with: {
        household: true,
      },
    });

    const activeHousehold =
      memberships.find(
        (membership) => membership.householdId === user.activeHouseholdId,
      )?.household ?? null;

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },

      memberships: memberships.map((membership) => ({
        id: membership.id,
        householdId: membership.householdId,
        role: membership.role,
        household: membership.household,
      })),

      activeHousehold,
    };
  }
}
