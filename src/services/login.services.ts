import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { TLoginRequest } from "../interfaces/login.interfaces";
import { AppError } from "../errror";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createLoginServices = async (data: TLoginRequest) => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findClient = await clientRepo.findOne({ where: { email: data.email } });

  if (!findClient) {
    throw new AppError("Invalid credentials", 401);
  }

  const matchPassword: boolean = await compare(
    data.password,
    findClient.password
  );

  if (!matchPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign({}, String(process.env.SECRET_KEY), {
    expiresIn: process.env.EXPIRES,
    subject: String(findClient.id),
  });

  return token;
};
