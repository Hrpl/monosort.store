import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IProviderRepository, PROVIDER_REPOSITORY } from './provider.iservice'
import { privateDecrypt } from 'crypto';
import { ProviderModel } from './provider.model';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('provider')
export class ProviderController {

  constructor(
    @Inject(PROVIDER_REPOSITORY) 
    private readonly providerService: IProviderRepository
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all providers' })
  async getAll(): Promise<ProviderModel[]> {
    return await this.providerService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new provider' })
  @ApiBody({type: ProviderModel})
  async createProvider(@Body() request: ProviderModel): Promise<any> {
    return await this.providerService.create(request);
  }
}
