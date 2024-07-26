import mongoose from 'mongoose';
import userModel from '@modules/product/schema';
import { IProduct } from '@modules/product/model';

export const getproductDetailsById = async (id: string): Promise<IProduct | null> => {
  const condition = {
    _id: mongoose.Types.ObjectId(id),
  };

  const productDetails = await userModel.findOne(condition);
  return productDetails;
};
