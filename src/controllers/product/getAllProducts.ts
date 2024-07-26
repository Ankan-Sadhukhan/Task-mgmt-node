/* eslint-disable no-console */
import { Request, Response } from 'express';
import {getAllProducts} from '@services/product/get-all-products';

// Controller to get product by ID
export const getAllProductsC = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await getAllProducts();
        
        res.json(products);
    } catch (error) {
        //console.log('Error in getAllProductsController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};