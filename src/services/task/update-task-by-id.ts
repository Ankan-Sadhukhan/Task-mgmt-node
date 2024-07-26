
import { ITask } from '@modules/task/model';
import userModel from '@modules/task/schema';

export const updateTaskById = async (
    taskId: string,
    updateData: Partial<ITask>
): Promise<ITask | null> => {
    try {
        const updatedTask = await userModel.findByIdAndUpdate(
            taskId,
            updateData,
            { new: true }
        );
        return updatedTask;
    } catch (error) {
        //console.error('Error in updateProductById service:', error);
        throw new Error('Error updating task by ID');
    }
};