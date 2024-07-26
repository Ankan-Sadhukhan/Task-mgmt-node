import { ICreateProductRequest, IProduct } from '@modules/product/model';
import productModel from '@modules/product/schema';
/**
 * Save new user into db
 * @param userDetails
 */
export const saveProduct = async (userDetails: ICreateProductRequest): Promise<IProduct> => {
  const newProduct: IProduct = new productModel({
    name: userDetails.name,
    description: userDetails.description,
    creater: userDetails.creater,
  });

  await newProduct.save();
  return newProduct;
};
