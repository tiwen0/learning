import * as express from "express";
import { MakeRepresentation } from "@licnz/rest";

import * as data from "../animal.json";
import { Uri } from "@licnz/uri";

const maker = new MakeRepresentation("http://localhost:3000");

export const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    maker.makeFeedRepresentation(
      data.animals,
      "name",
      [{ rel: "self", href: "/animals" }],
      new Uri("/animals/:id", "animal")
    )
  );
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const animal = data.animals.filter(animal => animal.id === id)[0];
  res.send(
    maker.makeLinkedRepresentation(animal, [
      { rel: "self", href: `/animals/${id}` },
      { rel: "up", href: "/animals" },
      { rel: "farm", href: "/farms" }
    ])
  );
});
