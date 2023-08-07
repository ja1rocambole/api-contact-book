import { Router } from "express";
import { validatedBodyMiddleware } from "../middlewares/validatedBody.middlewares";
import { loginSchema } from "../schemas/login.schemas";
import { createLoginControllers } from "../controllers";

export const loginRouter: Router = Router();

loginRouter.post(
  "",
  validatedBodyMiddleware(loginSchema),
  createLoginControllers
);
