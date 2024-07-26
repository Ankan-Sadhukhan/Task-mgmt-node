import { Types } from 'mongoose';
//import { Task } from './task.model';
// import { User } from './user.model';
// import { ITask } from './task.model';

import { ITask } from '@modules/task/model';
import taskModel from '@modules/task/schema';
import userModel from '@modules/users/schema';


export const assignTaskToUser = async (taskId: string, userId: string): Promise<ITask | null> => {
  if (!Types.ObjectId.isValid(taskId) || !Types.ObjectId.isValid(userId)) {
    throw new Error('Invalid Task ID or User ID');
  }

  const task = await taskModel.findById(taskId);
  const user = await userModel.findById(userId);

  if (!task || !user) {
    return null;
  }

  task.assignedUser = user._id;
  await task.save();

  return task;
};