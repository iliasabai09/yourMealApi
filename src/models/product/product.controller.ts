import { Controller, Get, Param, Req } from "@nestjs/common";
import { Request } from 'express';
import { ProductService } from './services/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/getAll')
  getProducts(@Req() request: Request) {
    return this.productService.getProducts();
  }

  @Get('/getCategory/:id')
  getCategoryProducts(@Param('id') id: string) {
    return this.productService.getCategoryProducts(id);
  }
}
