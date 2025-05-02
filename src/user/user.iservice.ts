import { UserUpdateDTO } from './dto/user.update';
import { User } from './user.entity';

export interface IUserRepository {
  create(user: User): Promise<User>;
  findOne(arg0: number): unknown;
  update(arg0: number, dto: UserUpdateDTO): unknown;
  remove(arg0: number): unknown;
  findAll(): Promise<User[]>;
}
