import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { IUserRepository } from './user.iservice';
import { UserUpdateDTO } from './dto/user.update';
import { UserModel } from './user.model';
import { LoginRequest } from './dto/user.login';

@Injectable()
export class UserService implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async login(request: LoginRequest): Promise<boolean> {
    let result = await this.userRepository.findOne({
      where: {email: request.login, password: request.password}
    })

    return !!result;
  }

  async create(user: UserModel): Promise<UserModel> {
    return this.userRepository.save(user);
  }

  update(id: number, dto: UserUpdateDTO): unknown {
    return this.userRepository.update(id, dto);
  }

  remove(id: number): unknown {
    return this.userRepository.delete(id);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }
}
