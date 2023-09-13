import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CategoryDocument = Category & Document;

@Schema({
  collection: "categories",
  versionKey: false,
  timestamps: true,
  minimize: true,
  _id: true,
})
export class Category {
  @Prop({ type: Number, required: true })
  readonly category_id: string;
  @Prop({ type: String, required: true })
  readonly title: string;
  @Prop({ type: String, required: false })
  readonly img: string;
  @Prop({ type: String, required: true })
  readonly keyword: string;
  @Prop({ type: String, required: true })
  readonly meta_description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
