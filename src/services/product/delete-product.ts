import { IProduct } from '@modules/product/model';
import userModel from '@modules/product/schema';

export const deleteProductById = async (productId: string): Promise<IProduct | null> => {
    try {
        const deletedProduct = await userModel.findByIdAndDelete(productId);
        return deletedProduct;
    } catch (error) {
       // console.error('Error in deleteProductById service:', error);
        throw new Error('Error deleting product by ID');
    }
};