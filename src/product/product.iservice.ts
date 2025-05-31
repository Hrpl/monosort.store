import { ProductQueryDto } from './dto/product.query';
import { CreateProductDTO } from './dto/create.product';
import { ProductUpdateDTO } from './dto/product.update';
import { ShortProductDTO } from './dto/short.data.product';
import { Product } from './product.entity';

export const PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY';

export interface IProductRepository {
  create(product: CreateProductDTO): Promise<CreateProductDTO>;
  findOne(arg0: number): Promise<Product | null>;
  remove(arg0: number): unknown;
  findAll(query: ProductQueryDto): Promise<Product[]>;
  update(arg0: number, dto: ProductUpdateDTO): unknown;
  shortData(): Promise<ShortProductDTO[]>;
  addQuantity(id: number, quantityToAdd: number): Promise<Product>;
  discardProduct(id: number, quantity: number): Promise<unknown>;
}
