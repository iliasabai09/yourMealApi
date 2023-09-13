import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({
  collection: 'products',
  versionKey: false,
  timestamps: false,
  minimize: true,
  _id: true,
  autoIndex: true,
})
export class Product {
  @Prop({ type: String, required: true })
  readonly title: string;
  @Prop({ type: String, required: true })
  readonly img: string;
  @Prop({ type: String, required: true })
  readonly description: string;
  @Prop({ type: [String], required: true })
  readonly compound: string;
  @Prop({ type: String, required: true })
  readonly weight: string;
  @Prop({ type: String, required: true })
  readonly calories: string;
  @Prop({ type: Number, required: true })
  readonly price: number;
  @Prop({ type: Boolean, required: true })
  readonly available: boolean;
  @Prop({ type: Number, required: true })
  readonly category_id: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
