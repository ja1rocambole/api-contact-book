import { Request, Response } from "express";
import { TLoginRequest } from "../interfaces/login.interfaces";
import { createLoginServices } from "../services/login.services";

export const createLoginControllers = async (req: Request, res: Response) => {
  const loginReq: TLoginRequest = req.body;

  console.log("\n");
  console.log(loginReq);
  console.log("\n");

  const token = await createLoginServices(loginReq);

  return res.status(200).json({ token });
};
