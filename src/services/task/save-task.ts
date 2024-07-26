import { logger } from '@config/logger/logger';
import { ICreateTaskRequest, ITask } from '@modules/task/model';
import taskModel from '@modules/task/schema';
/**
 * Save new user into db
 * @param userDetails
 */
export const saveTask = async (userDetails: ICreateTaskRequest): Promise<ITask> => {
  const newTask: ITask = new taskModel({
    title: userDetails.title,
    description: userDetails.description,
    assignedUser: userDetails.assignedUser,
    dueDate: userDetails.dueDate,
    completed: userDetails.completed
  });

  //logger.info("hi");
  //logger.info(newTask);
  await newTask.save();
  //logger.info("hi 2");
  return newTask;
};
