import { Router } from "express";
import { validatedBodyMiddleware } from "../middlewares";
import { clientSchema, clientSchemaRequest } from "../schemas";
import { createClientsControllers } from "../controllers/clients.controllers";

export const clientRouter: Router = Router();

clientRouter.post(
  "",
  validatedBodyMiddleware(clientSchemaRequest),
  createClientsControllers
);
