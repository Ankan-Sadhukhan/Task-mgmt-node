/* eslint-disable no-console */
import mongoose from 'mongoose';
import { IProduct } from '@modules/product/model';
import userModel from '@modules/product/schema';



export const getAllProducts = async (): Promise<IProduct[]> => {
    try {
        const products = await userModel.find();
        return products;
    } catch (error) {
     console.log('Error in getAllProductsController:', error);

        throw new Error('Error fetching all products');
    }
};