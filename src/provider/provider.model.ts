import { ApiProperty } from '@nestjs/swagger';

export class ProviderModel {
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  contact: string;
}