import express from "express";
import { register, login } from "../controllers/user-controller.js";
import { validate } from "../../../shared/middlewares/validation-middleware.js";
import { userValidationSchema } from "../validations/user-validation.js";

export const userRoute = express.Router(); //modular routing
userRoute.post("/login", login);
userRoute.post("/register", validate(userValidationSchema), register);
