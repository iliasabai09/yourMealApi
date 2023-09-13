import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { CartService } from './services/cart.service';
import { Request } from 'express';
import { IAddToCartPayload, IChangeCartQtyPayload } from "./interfaces/cart.interface";

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/addToCart')
  addProductToCart(@Body() body: IAddToCartPayload) {
    return this.cartService.addToCart(body);
  }

  @Get('/getUserCart/:id')
  getUserCart(@Param('id') hash_id: string) {
    return this.cartService.getUserCart(hash_id);
  }

  @Post('/changeQty')
  changeQty(@Body() body: IChangeCartQtyPayload) {
    return this.cartService.changeQty(body)
  }
}
