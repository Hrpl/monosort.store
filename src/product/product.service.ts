import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { IProductRepository } from './product.iservice';
import { ProductUpdateDTO } from './dto/product.update';
import { CreateProductDTO } from './dto/create.product';

@Injectable()
export class ProductService implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private prodcutRepository: Repository<Product>,
  ) {}

  update(id: number, dto: ProductUpdateDTO): unknown {
    return this.prodcutRepository.update(id, dto);
  }

  async create(product: CreateProductDTO): Promise<CreateProductDTO> {
    return this.prodcutRepository.save(product);
  }

  findOne(id: number): unknown {
    return this.prodcutRepository.findOneBy({ id });
  }

  remove(id: number): unknown {
    return this.prodcutRepository.delete(id);
  }

  findAll(): Promise<Product[]> {
    return this.prodcutRepository.find();
  }
}
