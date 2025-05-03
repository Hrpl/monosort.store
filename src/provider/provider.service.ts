import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from './provider.entity';
import { Repository } from 'typeorm';
import { IProviderRepository } from './provider.iservice';

@Injectable()
export class ProviderService implements IProviderRepository {
  constructor(
    @InjectRepository(Provider)
    private providerRepository: Repository<Provider>,
  ) {}

  create(user: Provider): Promise<Provider> {
    return this.providerRepository.save(user);
  }

  findOne(id: number): unknown {
    return this.providerRepository.findOneBy({ id });
  }

  remove(id: number): unknown {
    return this.providerRepository.delete(id);
  }

  findAll(): Promise<Provider[]> {
    return this.providerRepository.find();
  }
}
