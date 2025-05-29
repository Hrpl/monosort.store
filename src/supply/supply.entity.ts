import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SupplyProduct } from './supply.product.entity';

@Entity()
export class Supply {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  date: string;

  @OneToMany(() => SupplyProduct, (supplyProduct) => supplyProduct.supply)
  supplyProduct: SupplyProduct[];
}
