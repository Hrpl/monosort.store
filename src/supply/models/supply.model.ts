import { ApiProperty } from '@nestjs/swagger';
import { SupplyProductModel } from './supply.product.mode';

export class SupplyModel {
  @ApiProperty()
  date: string;

  @ApiProperty({
    type: [SupplyProductModel],
  })
  supplyProduct: SupplyProductModel[];
}
