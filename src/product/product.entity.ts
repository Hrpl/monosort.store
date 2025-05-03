import { Provider } from './../provider/provider.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Provider, (provider) => provider.id)
  provider: Provider;

  @Column()
  name: string;

  @Column()
  count_in_storage: number;

  @Column()
  last_order: string;

  @Column()
  measure: string;
}