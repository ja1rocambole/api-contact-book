import { clientSchema } from "./clients.schemas";

export const loginSchema = clientSchema.omit({
  id: true,
  createdAt: true,
  fullName: true,
  telphone: true,
});
