import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Post,
  Query,
} from '@nestjs/common';
import { IProviderRepository, PROVIDER_REPOSITORY } from './provider.iservice';
import { ProviderModel } from './provider.model';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('provider')
export class ProviderController {
  constructor(
    @Inject(PROVIDER_REPOSITORY)
    private readonly providerService: IProviderRepository,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all providers' })
  async getAll(): Promise<ProviderModel[]> {
    return await this.providerService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new provider' })
  @ApiBody({ type: ProviderModel })
  async createProvider(@Body() request: ProviderModel): Promise<any> {
    return await this.providerService.create(request);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete provider' })
  @HttpCode(204)
  deleteProvider(@Query('id') id: number): undefined {
    this.providerService.remove(+id);
  }
}
