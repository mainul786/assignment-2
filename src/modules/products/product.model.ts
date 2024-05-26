import { Schema, model } from "mongoose";
import {
  TProductInvetory,
  TProductVariant,
  TProducts,
} from "./products.interface";

const productVariantSchema = new Schema<TProductVariant>({
  type: { type: String },
  value: { type: String },
});

const productInventorySchema = new Schema<TProductInvetory>({
  quantity: { type: Number },
  inStock: { type: Boolean },
});

const productScheme = new Schema<TProducts>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: [{ type: String }],
  variants: [productVariantSchema],
  inventory: productInventorySchema,
});

export const ProductModel = model<TProducts>("ProductModel", productScheme);
