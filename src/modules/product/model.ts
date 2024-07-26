import { Document, Types } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  creater: string;
}

export interface ICreateProductRequest {
  name: string;
  description: string;
  creater: string;
}

export interface IProductRequestObject {
  name: string;
  description: string;
  creater: string;
  _id: Types.ObjectId;
}
