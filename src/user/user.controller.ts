import { Controller, Get, Post, Inject, Body, HttpCode,} from '@nestjs/common';
import { IUserRepository } from './user.iservice';
import { UserModel } from './user.model';
import {USER_REPOSITORY} from './user.iservice'
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { LoginRequest } from './dto/user.login';
import { BlobOptions } from 'buffer';

@Controller('user')
export class UserController {

  constructor(
    @Inject(USER_REPOSITORY) 
    private readonly userService: IUserRepository
  ) {}

  @Get()
  getAll(): string {
    return 'user1';
  }

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  @ApiBody({type: UserModel})
  async createUser(@Body() user : UserModel): Promise<UserModel>  {
    return this.userService.create(user);
  }

  @Post('login')
  @ApiBody({ type: LoginRequest })
  @ApiOperation({ summary: ' Login user ' })
  @HttpCode(200)
  async loginUser(@Body() login: LoginRequest): Promise<object> {
    const result = await this.userService.login(login);
    return { login: result };
  }
}
