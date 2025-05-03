import { Controller, Get, Inject } from '@nestjs/common';
import {PRODUCT_REPOSITORY} from './product.iservice'
import {IProductRepository} from './product.iservice';

@Controller('product')
export class ProductController {

  constructor(
      @Inject(PRODUCT_REPOSITORY) 
      private readonly productService: IProductRepository
    
    ) {}

  @Get()
  getAll(): string {
    return 'product1';
  }
}
