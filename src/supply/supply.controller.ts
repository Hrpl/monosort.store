import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ISuplyRepository, SUPPLY_REPOSITORY } from './supply.iservice';
import { Supply } from './supply.entity';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { SupplyModel } from './models/supply.model';
import { SupplyProduct } from './supply.product.entity';

@Controller('supply')
export class SupplyController {
  constructor(
    @Inject(SUPPLY_REPOSITORY)
    private readonly supplyService: ISuplyRepository,
  ) {}

  @Get('all')
  @ApiOperation({ summary: 'Get all supply' })
  async getSupplyAll(): Promise<Supply[]> {
    return await this.supplyService.findAll();
  }

  @Get()
  @ApiOperation({ summary: 'Get all supply product' })
  async getSupplyProductAll(@Query('id') id: number): Promise<SupplyProduct[]> {
    return await this.supplyService.findSupplyProducts(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new provider' })
  @ApiBody({ type: SupplyModel })
  async createProvider(@Body() request: SupplyModel): Promise<any> {
    return await this.supplyService.create(request);
  }
}
