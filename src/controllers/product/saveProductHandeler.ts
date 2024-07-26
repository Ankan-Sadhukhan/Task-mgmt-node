// create saveProductHandeler that will call productService saveProduct, ICreateProductRequest

import { Request, Response } from 'express';
import { productService } from '@services/index';
import { ICreateProductRequest } from '@modules/product/model';

export const saveProductHandeler = async (req: Request, res: Response): Promise<void> => {
  const userDetails = req.userDetails;
    const productDetails: ICreateProductRequest = {
    name: req.body.name,
    description: req.body.description,
    creater: userDetails._id,
  } ;
  try {
    const newProduct = await productService.saveProduct(productDetails);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};