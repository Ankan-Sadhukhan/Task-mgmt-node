import { Request, Response } from 'express';
import {taskService} from '@services/index';

export const deleteTaskByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const taskId = req.params.id;
        const deletedTask = await taskService.delTaskById(taskId);

        if (!deletedTask) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }

        res.json({ message: 'Task deleted successfully', product: deletedTask });
    } catch (error) {
        //console.error('Error in deleteProductByIdController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};