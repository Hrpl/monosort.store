import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { IProductRepository } from './product.iservice';
import { ProductUpdateDTO } from './dto/product.update';
import { CreateProductDTO } from './dto/create.product';
import { ShortProductDTO } from './dto/short.data.product';
import { ProductQueryDto } from './dto/product.query';

@Injectable()
export class ProductService implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private prodcutRepository: Repository<Product>,
  ) {}

  async addQuantity(id: number, quantityToAdd: number): Promise<Product> {
    const product = await this.prodcutRepository.findOneBy({ id });

    if (!product) {
      throw new Error('Product not found');
    }

    if (
      product.count_in_storage === undefined ||
      product.count_in_storage === null
    ) {
      product.count_in_storage = 0; // Инициализируем, если поле пустое
    }
    product.count_in_storage += quantityToAdd;

    return this.prodcutRepository.save(product);
  }

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

  async findAll(query: ProductQueryDto): Promise<Product[]> {
    const queryBuilder = this.prodcutRepository.createQueryBuilder('product');

    if (query.search) {
      queryBuilder.andWhere('product.name LIKE :productName', {
        productName: `%${query.search}%`,
      });
    }

    const sortField = `product.${query.sortBy}`;

    queryBuilder.orderBy(sortField, query.sortOrder);

    const supplyProducts = await queryBuilder.getMany();

    return supplyProducts.map((sp) => ({
      id: sp.id,
      name: sp.name,
      count_in_storage: sp.count_in_storage,
      last_order: sp.last_order,
      measure: sp.measure,
      provider: sp.provider,
      supplyProduct: sp.supplyProduct,
    }));
  }
}
