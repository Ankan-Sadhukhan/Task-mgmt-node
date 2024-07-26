import { Router } from 'express';
import { taskController } from '@controllers/index';
import { taskValidations } from '@validations/task/index';

import { validateUserAccessToken } from '@middleware/index';

const taskRouter = Router();

taskRouter.post('/', validateUserAccessToken, taskValidations.createTask, taskController.saveTaskHandler);

taskRouter.get('/:id', validateUserAccessToken, taskController.getById);

taskRouter.get('/', validateUserAccessToken, taskController.getAllTask);

taskRouter.delete('/:id', validateUserAccessToken, taskController.deleteTaskByIdController);

taskRouter.put('/:id', validateUserAccessToken, taskController.updateTaskByIdController);

taskRouter.post('/:id/assign', validateUserAccessToken, taskController.assignTaskToUser);



export { taskRouter };
