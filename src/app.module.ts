import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';
import { Product } from './product/product.entity';
import { ProductsModule } from './product/product.module';
import { Provider } from './provider/provider.entity';
import { ProvidersModule } from './provider/provider.module';
//import { UserService } from './user/user.service';
//import { ProviderService } from './provider/provider.service';
//import { PRODUCT_REPOSITORY } from './product/product.iservice'
//import { ProductService } from './product/product.service';
//import { UserController } from './user/user.controller';
import { Supply } from './supply/supply.entity';
import { SupplyProduct } from './supply/supply.product.entity';
import { SuppliesModule } from './supply/supply.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '85.208.87.10',
      port: 5432,
      username: 'postgres',
      password: '2208',
      database: 'monosort_store',
      entities: [User, Product, Provider, Supply, SupplyProduct],
      autoLoadEntities: true,
      logging: true,
    }),
    UsersModule,
    ProductsModule,
    ProvidersModule,
    SuppliesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
