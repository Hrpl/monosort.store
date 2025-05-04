import { CreateProductDTO } from './dto/create.product';
import { ProductUpdateDTO } from './dto/product.update';
import { Product } from './product.entity';

export const PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY';

export interface IProductRepository {
  create(product: CreateProductDTO): Promise<CreateProductDTO>;
  findOne(arg0: number): unknown;
  remove(arg0: number): unknown;
  findAll(): Promise<Product[]>;
  update(arg0: number, dto: ProductUpdateDTO): unknown;
}
