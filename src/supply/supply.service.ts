import { ISuplyRepository } from './supply.iservice';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supply } from './supply.entity';
import { SupplyProduct } from './supply.product.entity';
import { Repository } from 'typeorm';
import { SupplyModel } from './models/supply.model';
import { Product } from 'src/product/product.entity';
import { ProductService } from '../product/product.service';

@Injectable()
export class SupplyService implements ISuplyRepository {
  constructor(
    @InjectRepository(Supply)
    private supplyRepository: Repository<Supply>,
    @InjectRepository(SupplyProduct)
    private supplyProductRepository: Repository<SupplyProduct>,
    private readonly productService: ProductService,
  ) {}

  findSupplyProducts(idSupply: number): Promise<SupplyProduct[]> {
    return this.supplyProductRepository.findBy({
      supply: { id: idSupply },
    });
  }

  async create(supply: SupplyModel): Promise<number> {
    try {
      const newSupply = await this.supplyRepository.save({
        date: supply.date,
      });

      if (supply.supplyProduct && supply.supplyProduct.length > 0) {
        const supplyProducts: SupplyProduct[] = supply.supplyProduct.map(
          (product) => {
            const supplyProduct = new SupplyProduct();
            supplyProduct.count = product.count;
            supplyProduct.product = { id: product.productId } as Product; // Указываем только ID продукта
            supplyProduct.supply = newSupply; // Или supplyId: newSupply.id, если используете только ID
            return supplyProduct;
          },
        );
        await this.supplyProductRepository.save(supplyProducts);

        await Promise.all(
          supply.supplyProduct.map(async (product) => {
            await this.productService.addQuantity(
              product.productId,
              product.count,
            );
          }),
        );
      }

      return newSupply.id;
    } catch (error) {
      console.error('Error creating supply:', error);
      throw new Error('Failed to create supply');
    }
  }

  findAll(): Promise<Supply[]> {
    return this.supplyRepository.find();
  }
}
