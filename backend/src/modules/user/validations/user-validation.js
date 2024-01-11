import Joi from "joi";

export const userValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(25).required(),
  name: Joi.string().required(),
});
