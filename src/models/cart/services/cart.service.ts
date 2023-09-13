import { Injectable, Logger } from '@nestjs/common';
import { CartProducts, CartProductsDocument } from '../schemas/cart.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../../product/schemas/product.schema';
import {
  IAddToCartPayload,
  IChangeCartQtyPayload,
} from '../interfaces/cart.interface';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(CartProducts.name)
    private readonly cartModel: Model<CartProductsDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  private readonly logger: Logger = new Logger();

  async getUserCart(hash_id: string) {
    try {
      const userCart = await this.cartModel.findById(hash_id).exec();
      if (!userCart) throw new Error('User cart data not found');
      const options = {
        total_price: 0,
        total_qty: 0,
        products: userCart.get('products'),
      };
      options.products.forEach((product) => {
        options.total_price += product.price * product.qty;
        options.total_qty += product.qty;
      });
      return options;
    } catch (e) {
      this.logger.log(e);
    }
  }

  addToCart(body: IAddToCartPayload) {
    if (body.hash_id) {
      return this.mergeUserCart(body);
    } else {
      return this.setNewCart(body);
    }
  }

  async setNewCart(body: IAddToCartPayload) {
    try {
      const product = await this.productModel.findById(body._id).exec();
      if (!product) throw new Error('Product not found');
      const newProduct = new this.cartModel({
        products: [{ ...product, qty: 1 }],
      });
      return (await newProduct.save())._id;
    } catch (e) {
      this.logger.debug(e);
    }
  }

  async mergeUserCart(body: IAddToCartPayload) {
    try {
      const product = await this.productModel.findById(body._id).exec();
      if (!product) throw new Error('Product not found');
      const userCart = await this.cartModel.findById(body.hash_id).exec();
      if (!userCart) throw new Error('User cart data not found');
      const userProducts = userCart.get('products');
      const isExist = userProducts.find(
        (pr) => String(pr._id) === String(product.get('_id')),
      );
      isExist
        ? isExist.qty++
        : userProducts.push({ ...product.toJSON(), qty: 1 });
      return userCart.save();
    } catch (e) {
      this.logger.debug(e);
    }
  }

  async changeQty(body: IChangeCartQtyPayload) {
    try {
      const cart = await this.cartModel.findById(body.hash_id).exec();
      if (!cart) throw new Error('Cart data not found');
      cart
        .get('products')
        .find((product) => String(product._id) === String(body._id)).qty =
        body.qty;
      return cart.save();
    } catch (e) {
      this.logger.error(e);
    }
  }
}
