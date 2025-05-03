import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from 'src/user/user.controller';
import { UserService } from './user.service';
import { USER_REPOSITORY } from './user.iservice';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserService,
    },
  ],
  controllers: [UserController],
})
export class UsersModule {}
