import * as express from "express";
import { MakeRepresentation } from "@licnz/rest";

import * as data from "../farm.json";

const maker = new MakeRepresentation("http://localhost:3000");

export const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).end();
});

router.get("/:id", (req, res) => {
  res.send("animal").end();
});

router.get("/");
