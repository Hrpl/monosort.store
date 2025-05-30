import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { Product } from './product/product.entity';
import { Provider } from './provider/provider.entity';
import { Supply } from './supply/supply.entity';
import { SupplyProduct } from './supply/supply.product.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '85.208.87.10',
  port: 5432,
  username: 'postgres',
  password: '2208',
  database: 'monosort_store',
  entities: [User, Product, Provider, Supply, SupplyProduct],
  logging: true,
  migrations: ['src/migrations/*.ts'],
});
