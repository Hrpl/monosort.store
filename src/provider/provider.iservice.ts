import { Provider } from './provider.entity';
import { ProviderModel } from './provider.model';

export const PROVIDER_REPOSITORY = 'PROVIDER_REPOSITORY';

export interface IProviderRepository {
  create(user: ProviderModel): Promise<ProviderModel>;
  findOne(arg0: number): unknown;
  remove(arg0: number): unknown;
  findAll(): Promise<Provider[]>;
}
