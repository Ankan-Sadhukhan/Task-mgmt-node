import { Router } from 'express';
import { userController } from '@controllers/index';
import { validateUserAccessToken } from '@middleware/index';

const userRouter = Router();

userRouter.get('/me', validateUserAccessToken, userController.getCurrentUser);

// userRouter.get('/users-by-phone', validateUserAccessToken, userController.getUsersByPhone);

export { userRouter };
