import { Request, Response } from 'express';
import {updateProductById} from '@services/product/update-product';


export const updateProductByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.id;
        const updateData = req.body;

        const updatedProduct = await updateProductById(productId, updateData);

        if (!updatedProduct) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }

        res.json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        //console.error('Error in updateProductByIdController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};