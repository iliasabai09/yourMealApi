import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema({
  collection: 'locations',
  versionKey: false,
  timestamps: false,
  minimize: true,
})
export class Location {
  @Prop({ type: String, required: true })
  readonly location_id: string;
  @Prop({ type: String, required: true })
  readonly title: string;
  @Prop({ type: String, required: true })
  readonly region: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
