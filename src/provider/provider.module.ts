import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from './provider.entity';
import { ProviderController } from './provider.controller';
import { ProviderService } from './provider.service';

@Module({
  imports: [TypeOrmModule.forFeature([Provider])],
  providers: [ProviderService],
  controllers: [ProviderController],
})
export class ProvidersModule {}
