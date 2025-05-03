import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';
import { Product } from './product/product.entity';
import { ProductsModule } from './product/product.module';
import { Provider } from './provider/provider.entity';
import { ProvidersModule } from './provider/provider.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0000',
      database: 'monosort_store',
      entities: [User, Product, Provider],
      autoLoadEntities: true,
      logging: true,
    }),
    UsersModule,
    ProductsModule,
    ProvidersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
