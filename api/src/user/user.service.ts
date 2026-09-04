import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { AuthUser } from 'src/auth/interface/auth-user.interface';
import { users } from 'src/db/schema/user';
import { DATABASE, type Database } from 'src/drizzle.provider';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { hashPassword } from 'src/utils/hash-password.utils';

@Injectable()
export class UserService {
  constructor(
    @Inject(DATABASE)
    private readonly db: Database,
  ) {}

  // create user
  async createUser(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const existingUser = await this.db.query.users.findFirst({
      where: eq(users.email, createUserDto.email),
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const { plainPassword, ...userData } = createUserDto;
    const password = await hashPassword(plainPassword);

    const [user] = await this.db
      .insert(users)
      .values({ ...userData, password })
      .returning({
        id: users.id,
        email: users.email,
        name: users.name,
      });

    return user;
  }

  // find by ID
  async findUserByEmail(email: string): Promise<AuthUser> {
    const [user] = await this.db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
      })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user) {
      throw new NotFoundException(
        'No user found with the provided email address',
      );
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}
