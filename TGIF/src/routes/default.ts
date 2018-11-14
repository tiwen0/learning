import * as express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
  res.status(404).end();
});

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   res
//     .send(`${id}`)
//     .status(200)
//     .end();
// });
