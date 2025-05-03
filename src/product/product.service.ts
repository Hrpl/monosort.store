import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { IProductRepository } from './product.iservice';
import { ProductUpdateDTO } from './dto/product.update';

@Injectable()
export class ProductService implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private prodcutRepository: Repository<Product>,
  ) {}
  
  update(arg0: number, dto: ProductUpdateDTO): unknown {
    throw new Error('Method not implemented.');
  }

  create(user: Product): Promise<Product> {
    throw new Error('Method not implemented.');
  }

  findOne(arg0: number): unknown {
    throw new Error('Method not implemented.');
  }

  remove(arg0: number): unknown {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}