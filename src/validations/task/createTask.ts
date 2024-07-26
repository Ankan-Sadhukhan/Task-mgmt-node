import { celebrate, Joi } from 'celebrate';

export const createTask = celebrate({
  body: Joi.object({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    dueDate: Joi.date().required().optional(),
    assignedUser: Joi.string().optional().allow(null),
    completed: Joi.boolean().optional()
  }),
});