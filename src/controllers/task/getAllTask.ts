import { Request, Response } from 'express';
import {taskService } from '@services/index';

// Controller to get product by ID
export const getAllTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await taskService.getAllTasks();
        
        res.json(products);
    } catch (error) {
        //console.log('Error in getAllProductsController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};