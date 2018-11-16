import * as express from "express";
import { MakeRepresentation } from "@licnz/rest";
import { Uri } from "@licnz/uri";

import * as data from "../farm.json";

export const router = express.Router();

const maker = new MakeRepresentation("http://localhost:3000");

router.get("/", (req, res) => {
  res.send(
    maker.makeFeedRepresentation(
      data.farms,
      "name",
      [
        {
          rel: "self",
          href: "/farms"
        },
        {
          rel: "up",
          href: "/"
        }
      ],
      new Uri("/farms/:id", "farm")
    )
  );
  //   res.status(200).end();
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const farm = data.farms.filter(farm => farm.id === id)[0];
  res.send(
    maker.makeLinkedRepresentation(farm, [
      { rel: "self", href: `/farms/${id}` },
      {
        rel: "up",
        href: "/farms"
      },
      {
        rel: "animals",
        href: `/farms/${id}/animals`
      }
    ])
  );
});

router.get("/:id/animals", (req, res) => {
  const id = Number(req.params.id);
  const farm = data.farms.filter(farm => farm.id === id)[0];
  res.send(
    maker.makeFeedRepresentation(
      farm.animals,
      "name",
      [{ rel: "self", href: `/farms/${id}/animals` }],
      new Uri("/animals/:id", "animal")
    )
  );
});

// router.get("/animals", (req, res) => {
//   const url = "http://localhost:3000/animals/1";
//   res.send({ animal: url }).end();
// });
