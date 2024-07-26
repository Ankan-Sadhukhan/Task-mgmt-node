import mongoose, { Schema } from 'mongoose';
import { IProduct } from './model';

const productSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    creater: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Export the model and return your IUser interface
export default mongoose.model<IProduct>('product', productSchema, 'products');
