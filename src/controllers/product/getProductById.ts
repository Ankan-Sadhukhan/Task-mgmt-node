import { Request, Response } from 'express';
import {getproductDetailsById} from '@services/product/get-product-ny-id';

// Controller to get product by ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.id;
        const prod = await getproductDetailsById(productId);

        if (!prod) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }

        res.json(prod);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
