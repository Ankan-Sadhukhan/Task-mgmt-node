import { Request, Response, NextFunction } from 'express';
//import * as TaskService from './task.service';
import {taskService} from '@services/index';

import { IUser } from '@modules/users/model';
import { ITask } from '@modules/task/model';

export const assignTaskToUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.body;
    const taskId = req.params.id;

    const updatedTask: ITask | null = await taskService.assignTaskToUser(taskId, userId);
    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).send('Task or User not found');
    }
  } catch (error) {
    next(error);
  }
};
