import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class SupplyProductModel {
  @ApiProperty()
  @Column()
  count: number;

  @ApiProperty()
  @Column()
  supplyId: number;

  @ApiProperty()
  @Column()
  productId: number;
}
