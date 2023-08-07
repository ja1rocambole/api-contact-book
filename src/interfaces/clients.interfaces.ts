import { z } from "zod";
import {
  clientSchema,
  clientSchemaRequest,
  clientSchemaReturn,
} from "../schemas";

export type TClient = z.infer<typeof clientSchema>;
export type TClientRequest = z.infer<typeof clientSchemaRequest>;
export type TClientReturn = z.infer<typeof clientSchemaReturn>;
