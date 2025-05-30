import { ApiPropertyOptional } from '@nestjs/swagger';

export class ProductQueryDto {
  @ApiPropertyOptional({
    description: 'Product name filter',
    example: 'Кофе',
  })
  productName?: string;

  @ApiPropertyOptional({
    description: 'Sort field',
    enum: ['name', 'count', 'last_order'],
  })
  sortBy?: string = 'count';

  @ApiPropertyOptional({ description: 'Sort order', enum: ['ASC', 'DESC'] })
  sortOrder?: 'ASC' | 'DESC' = 'DESC';
}
