import { z } from "zod";

export const clientSchema = z.object({
  id: z.number().positive().int(),
  fullName: z.string().max(255),
  email: z.string().max(45),
  password: z.string().min(6).max(120),
  telphone: z.string().max(16),
  createdAt: z.string(),
});

export const clientSchemaRequest = clientSchema.omit({
  id: true,
  createdAt: true,
});
export const clientSchemaReturn = clientSchema.omit({
  password: true,
});
