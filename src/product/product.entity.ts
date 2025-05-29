import { SupplyProduct } from '../supply/supply.product.entity';
import { Provider } from './../provider/provider.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Provider, (provider) => provider.id)
  provider: Provider;

  @OneToMany(() => SupplyProduct, (supplyProduct) => supplyProduct.product)
  supplyProduct: SupplyProduct[];

  @Column()
  name: string;

  @Column()
  count_in_storage: number;

  @Column()
  last_order: string;

  @Column()
  measure: string;
}
