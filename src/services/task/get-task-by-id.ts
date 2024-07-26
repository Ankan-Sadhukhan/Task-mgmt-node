import mongoose from 'mongoose';
import userModel from '@modules/task/schema';
import { ITask } from '@modules/task/model';

export const getTaskById = async (id: string): Promise<ITask | null> => {
  const condition = {
    _id: mongoose.Types.ObjectId(id),
  };

  const productDetails = await userModel.findOne(condition);
  return productDetails;
};
