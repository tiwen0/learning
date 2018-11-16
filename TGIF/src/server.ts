import * as express from "express";
import { router as defaultRouter } from "./routes/default";
import { router as farmRouter } from "./routes/farm";
import { router as animalRouter } from "./routes/animal";
import * as cors from "cors";

export const server = express();

server.use(express.json());
server.use(cors());

server.use("/", defaultRouter);
server.use("/farms", farmRouter);
server.use("/animals", animalRouter);
