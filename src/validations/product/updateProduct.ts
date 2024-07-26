import { celebrate, Joi } from 'celebrate';

export const updateProduct = celebrate({
  body: Joi.object({
    name: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
  }),
});