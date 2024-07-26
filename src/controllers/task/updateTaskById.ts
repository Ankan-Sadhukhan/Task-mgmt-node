import { Request, Response } from 'express';
import {taskService} from '@services/index';


export const updateTaskByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const taskId = req.params.id;
        const updateData = req.body;

        const updatedTask = await taskService.updateTaskById(taskId, updateData);

        if (!updatedTask) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }

        res.json({ message: 'Task updated successfully', Task: updatedTask });
    } catch (error) {
        //console.error('Error in updateProductByIdController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};