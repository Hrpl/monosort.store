import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from './provider.entity';
import { ProviderController } from './provider.controller';
import { ProviderService } from './provider.service';
import { PROVIDER_REPOSITORY } from './provider.iservice'

@Module({
  imports: [TypeOrmModule.forFeature([Provider])],
  providers: [
    {
      provide: PROVIDER_REPOSITORY,
      useClass: ProviderService,
    },
  ],
  controllers: [ProviderController],
})
export class ProvidersModule {}
