import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { IProductRepository } from './product.iservice';
import { ProductUpdateDTO } from './dto/product.update';
import { CreateProductDTO } from './dto/create.product';
import { ShortProductDTO } from './dto/short.data.product';

@Injectable()
export class ProductService implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private prodcutRepository: Repository<Product>,
  ) {}

  async shortData(): Promise<ShortProductDTO[]> {
    const products = await this.prodcutRepository.find({
      select: ['id', 'name'],
    });

    return products.map(
      (product) => new ShortProductDTO(product.id, product.name),
    );
  }

  update(id: number, dto: ProductUpdateDTO): unknown {
    return this.prodcutRepository.update(id, dto);
  }

  async create(product: CreateProductDTO): Promise<CreateProductDTO> {
    return this.prodcutRepository.save(product);
  }

  findOne(id: number): Promise<Product | null> {
    return this.prodcutRepository.findOneBy({ id });
  }

  remove(id: number): unknown {
    return this.prodcutRepository.delete(id);
  }

  findAll(): Promise<Product[]> {
    return this.prodcutRepository.find();
  }
}
