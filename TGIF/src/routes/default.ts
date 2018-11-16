import * as express from "express";
import { MakeRepresentation } from "@licnz/rest";

export const router = express.Router();

const maker = new MakeRepresentation("http://localhost:3000");

router.get("/", (req, res) => {
  res.send(
    maker.makeLinkedRepresentation({}, [
      { rel: "self", href: "/" },
      { rel: "farms", href: "/farms" },
      { rel: "animals", href: "/animals" }
    ])
  );
});

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   res
//     .send(`${id}`)
//     .status(200)
//     .end();
// });
