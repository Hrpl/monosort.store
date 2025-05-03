import { Provider } from './provider.entity';

export interface IProviderRepository {
  create(user: Provider): Promise<Provider>;
  findOne(arg0: number): unknown;
  remove(arg0: number): unknown;
  findAll(): Promise<Provider[]>;
}
