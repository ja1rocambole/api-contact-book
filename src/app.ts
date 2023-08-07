import express, { Application } from "express";
import { clientRouter } from "./routers/clients.routers";
import { errorHandler } from "./errror";
import { loginRouter } from "./routers/login.routers";

export const app: Application = express();

app.use(express.json());

app.use("/clients", clientRouter);

app.use("/login", loginRouter);

app.use(errorHandler);
