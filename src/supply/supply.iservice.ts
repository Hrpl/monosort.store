import { SupplyModel } from './models/supply.model';
import { Supply } from './supply.entity';
import { SupplyProduct } from './supply.product.entity';

export const SUPPLY_REPOSITORY = 'SUPPLY_REPOSITORY';

export interface ISuplyRepository {
  create(supply: SupplyModel): Promise<number>;
  findAll(): Promise<Supply[]>;
  findSupplyProducts(id: number): Promise<SupplyProduct[]>;
}
