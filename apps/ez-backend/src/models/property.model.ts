import { Schema, model } from 'mongoose';

export enum PropertyType {
  Apartment = 'apartment',
  Villa = 'villa',
  Twinhouse = 'twinhouse'
}

export interface PropertyDocument extends Document {
  title: string;
  location: string;
  description: string;
  spaceArea: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  image: string[];
  propertyType: PropertyType;
  createdAt: Date;
  updatedAt: Date;
}

const propertySchema = new Schema<PropertyDocument>({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  spaceArea: { type: Number, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  image: { type: [String], default: [] },
  propertyType: { type: String, enum: Object.values(PropertyType), required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Property = model<PropertyDocument>('Property', propertySchema);