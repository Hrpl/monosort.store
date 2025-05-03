import { LoginRequest } from './dto/user.login';
import { UserUpdateDTO } from './dto/user.update';
import { User } from './user.entity';
import { UserModel } from './user.model';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {
  create(user: UserModel): Promise<UserModel>;
  findOne(arg0: number): unknown;
  update(arg0: number, dto: UserUpdateDTO): unknown;
  remove(arg0: number): unknown;
  findAll(): Promise<User[]>;
  login(request: LoginRequest): Promise<boolean>;
}
