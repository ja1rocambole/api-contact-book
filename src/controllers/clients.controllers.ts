import { Request, Response } from "express";
import { TClientRequest, TClientReturn } from "../interfaces";
import { createClientServices } from "../services/client.services";

export const createClientsControllers = async (req: Request, res: Response) => {
  const client: TClientRequest = req.body;

  const clientReturn: TClientReturn = await createClientServices(client);

  return res.status(201).json(clientReturn);
};
