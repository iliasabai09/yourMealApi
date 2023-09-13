import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartProductsDocument = CartProducts & Document;

@Schema({
  collection: 'userCartProducts',
  versionKey: false,
  timestamps: true,
  minimize: true,
  _id: true,
  autoIndex: true,
})
export class CartProducts {
  @Prop({
    type: [
      {
        title: String,
        img: String,
        weight: String,
        price: String,
        qty: Number,
      },
    ],
    required: true,
  })
  readonly products: any[];
}

export const CartProductsSchema = SchemaFactory.createForClass(CartProducts);
