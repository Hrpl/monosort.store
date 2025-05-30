import { ISuplyRepository } from './supply.iservice';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supply } from './supply.entity';
import { SupplyProduct } from './supply.product.entity';
import { Repository } from 'typeorm';
import { SupplyModel } from './models/supply.model';

@Injectable()
export class SupplyService implements ISuplyRepository {
  constructor(
    @InjectRepository(Supply)
    private supplyRepository: Repository<Supply>,
    @InjectRepository(SupplyProduct)
    private supplyProductRepository: Repository<SupplyProduct>,
  ) {}

  findSupplyProducts(id: number): Promise<SupplyProduct[]> {
    return this.supplyProductRepository.findBy({ id });
  }

  async create(supply: SupplyModel): Promise<number> {
    try {
      const newSupply = await this.supplyRepository.save({
        date: supply.date,
      });

      if (supply.supplyProduct && supply.supplyProduct.length > 0) {
        const supplyProducts = supply.supplyProduct.map((product) => ({
          ...product,
          productId: { id: product.productId },
          supplyId: newSupply.id,
        }));
        await this.supplyProductRepository.save(supplyProducts);
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
