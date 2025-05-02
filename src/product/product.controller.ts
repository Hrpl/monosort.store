import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  getAll(): string {
    return 'product1';
  }
}
