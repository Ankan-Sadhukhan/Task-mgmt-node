import mongoose from 'mongoose';
import { ITask } from '@modules/task/model';
import userModel from '@modules/task/schema';
import { logger } from '@config/logger/logger';



export const getAllTasks = async (): Promise<ITask[]> => {
    try {
        //logger.info("hi");
        const tasks = await userModel.find();
        return tasks;
    } catch (error) {
     //logger.info('Error in getAllProductsController:', error);

        throw new Error('Error fetching all products');
    }
};