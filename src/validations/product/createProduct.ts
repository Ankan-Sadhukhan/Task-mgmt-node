// create celebrate with joi validation for craete product fields name, description, creater

import { celebrate, Joi } from 'celebrate';

export const createProduct = celebrate({
  body: Joi.object({
    name: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
  }),
});

// write json input for create product
// {
//   "name": "string",
//   "description": "string"
// }