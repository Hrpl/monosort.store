import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductController } from 'src/product/product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [
    {
      provide: 'PRODUCT_REPOSITORY',
      useClass: ProductService,
    },
    ProductService,
  ],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductsModule {}
