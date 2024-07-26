import { Request, Response } from 'express';
import {taskService} from '@services/index';

// Controller to get product by ID
export const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.id;
        const prod = await taskService.getTaskById(productId);

        if (!prod) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }

        res.json(prod);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
