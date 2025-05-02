import { Controller, Get } from '@nestjs/common';

@Controller('provider')
export class ProviderController {
  @Get()
  getAll(): string {
    return 'provider1';
  }
}
