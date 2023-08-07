import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { TClientRequest, TClientReturn } from "../interfaces";
import { clientSchemaReturn } from "../schemas";
import { hashSync } from "bcryptjs";

export const createClientServices = async (data: TClientRequest) => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  if (data.password) {
    data.password = hashSync(data.password, 10);
  }

  const client: Client = clientRepo.create(data);

  await clientRepo.save(client);

  const clientReturn: TClientReturn = clientSchemaReturn.parse(client);

  return clientReturn;
};
