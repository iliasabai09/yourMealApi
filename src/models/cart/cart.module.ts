import { Module } from '@nestjs/common';
import { CartService } from './services/cart.service';
import { CartController } from './cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartProducts, CartProductsSchema } from "./schemas/cart.schema";
import { Product, ProductSchema } from "../product/schemas/product.schema";

@Module({
  controllers: [CartController],
  imports: [
    MongooseModule.forFeature([{ name: CartProducts.name, schema: CartProductsSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  providers: [CartService],
})
export class CartModule {}
