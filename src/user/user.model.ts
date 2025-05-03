import { ApiProperty } from '@nestjs/swagger';

export class UserModel {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}