import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  provider_id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  count_in_storage: number;
  @ApiProperty()
  last_order: string;
  @ApiProperty()
  measure: string;
}
