// create saveProductHandeler that will call productService saveProduct, ICreateProductRequest

import { Request, Response } from 'express';
import { taskService } from '@services/index';
import { ICreateTaskRequest } from '@modules/task/model';
import { logger } from '@config/logger/logger';

export const saveTaskHandler = async (req: Request, res: Response): Promise<void> => {
  
  try {
    logger.info("title");
    const userDetail = req.userDetails;
    const taskDetails: ICreateTaskRequest = {
    title: req.body.title,
    description: req.body.description,
    assignedUser: userDetail._id,
    dueDate: req.body.dueDate,
    completed: req.body.completed,

  } ;
  //logger.info("title");

    const newTask = await taskService.saveTask(taskDetails);
    //logger.info("title");

    res.status(201).json(newTask);
  } catch (error) {
    logger.info("title");
    res.status(500).json({ message: 'Internal server error' });
  }
};