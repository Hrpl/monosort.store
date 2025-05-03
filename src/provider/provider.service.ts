import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from './provider.entity';
import { Repository } from 'typeorm';
import { IProviderRepository } from './provider.iservice';
import { ProviderModel } from './provider.model';

@Injectable()
export class ProviderService implements IProviderRepository {
  constructor(
    @InjectRepository(Provider)
    private providerRepository: Repository<Provider>,
  ) {}

  async create(user: ProviderModel): Promise<ProviderModel> {
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
