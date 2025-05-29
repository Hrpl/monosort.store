import { ApiProperty } from '@nestjs/swagger';

export class SupplyProductModel {
  @ApiProperty()
  count: number;

  @ApiProperty()
  supplyId: number;

  @ApiProperty()
  productId: number;
}
