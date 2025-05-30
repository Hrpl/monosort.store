import { ApiProperty } from '@nestjs/swagger';
import { SupplyProductModel } from './supply.product.mode';
import { Column } from 'typeorm';

export class SupplyModel {
  @ApiProperty()
  @Column()
  date: string;

  @ApiProperty({
    type: [SupplyProductModel],
  })
  @Column()
  supplyProduct: SupplyProductModel[];
}
