
import { IProduct } from '@modules/product/model';
import userModel from '@modules/product/schema';

export const updateProductById = async (
    productId: string,
    updateData: Partial<IProduct>
): Promise<IProduct | null> => {
    try {
        const updatedProduct = await userModel.findByIdAndUpdate(
            productId,
            updateData,
            { new: true }
        );
        return updatedProduct;
    } catch (error) {
        //console.error('Error in updateProductById service:', error);
        throw new Error('Error updating product by ID');
    }
};