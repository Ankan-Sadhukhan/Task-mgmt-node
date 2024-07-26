import { ITask } from '@modules/task/model';
import userModel from '@modules/task/schema';

export const delTaskById = async (taskId: string): Promise<ITask | null> => {
    try {
        const deletedTask = await userModel.findByIdAndDelete(taskId);
        return deletedTask;
    } catch (error) {
       // console.error('Error in deleteProductById service:', error);
        throw new Error('Error deleting task by ID');
    }
};