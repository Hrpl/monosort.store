import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Supply } from './supply.entity';
import { Product } from '../product/product.entity';

@Entity()
export class SupplyProduct {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  count: number;

  @ManyToOne(() => Supply, (supply) => supply.id)
  supply: Supply;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;
}
