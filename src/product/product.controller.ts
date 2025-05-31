import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PRODUCT_REPOSITORY } from './product.iservice';
import { IProductRepository } from './product.iservice';
import { Product } from './product.entity';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { CreateProductDTO } from './dto/create.product';
import { ProductUpdateDTO } from './dto/product.update';
import { ShortProductDTO } from './dto/short.data.product';
import { ProductQueryDto } from './dto/product.query';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productService: IProductRepository,
  ) {}

  @Post('find')
  @ApiOperation({ summary: 'Get all product' })
  @ApiBody({ type: ProductQueryDto })
  async getAll(@Body() query: ProductQueryDto): Promise<Product[]> {
    return await this.productService.findAll(query);
  }

  @Get('any')
  @ApiOperation({ summary: 'Get all product' })
  async getAny(@Query('id') id: number): Promise<Product | null> {
    return await this.productService.findOne(id);
  }

  @Get('short_data')
  @ApiOperation({ summary: 'Get id and data' })
  async getShortData(): Promise<ShortProductDTO[] | null> {
    return await this.productService.shortData();
  }

  @Post()
  @ApiOperation({ summary: 'Create new provider' })
  @ApiBody({ type: CreateProductDTO })
  async createProduct(@Body() request: CreateProductDTO): Promise<any> {
    return await this.productService.create(request);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete product' })
  @HttpCode(204)
  deleteProduct(@Query('id') id: number): undefined {
    this.productService.remove(+id);
  }

  @Put()
  @ApiOperation({ summary: 'Update product' })
  @ApiBody({ type: ProductUpdateDTO })
  updateProduct(@Body() model: ProductUpdateDTO, @Query() id: number) {
    return this.productService.update(id, model);
  }
}
