import { GetSupplyProduct } from './models/get.supply.product';
import { SupplyModel } from './models/supply.model';
import { Supply } from './supply.entity';

export const SUPPLY_REPOSITORY = 'SUPPLY_REPOSITORY';

export interface ISuplyRepository {
  create(supply: SupplyModel): Promise<number>;
  findAll(): Promise<Supply[]>;
  findSupplyProducts(idSupply: number): Promise<GetSupplyProduct[]>;
}
