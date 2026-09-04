import { PickType } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class LoginBodyDto extends PickType(CreateUserDto, [
  'email',
  'plainPassword',
]) {}
