import { Request, Response } from 'express';
import {deleteProductById} from '@services/product/delete-product';

export const deleteProductByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.id;
        const deletedProduct = await deleteProductById(productId);

        if (!deletedProduct) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }

        res.json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
        //console.error('Error in deleteProductByIdController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};