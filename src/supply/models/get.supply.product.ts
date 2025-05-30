import { ApiProperty } from '@nestjs/swagger';

export class GetSupplyProduct {
  @ApiProperty()
  name: string;

  @ApiProperty()
  count: number;
}
