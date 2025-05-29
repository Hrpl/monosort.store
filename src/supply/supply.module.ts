import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supply } from './supply.entity';
import { SupplyProduct } from './supply.product.entity';
//import { ProviderService } from './provider.service';
import { SUPPLY_REPOSITORY } from './supply.iservice';
import { SupplyService } from './supply.service';
import { SupplyController } from './supply.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Supply]),
    TypeOrmModule.forFeature([SupplyProduct]),
  ],
  providers: [
    {
      provide: SUPPLY_REPOSITORY,
      useClass: SupplyService,
    },
  ],
  controllers: [SupplyController],
})
export class SuppliesModule {}
