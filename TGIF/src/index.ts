import { server } from "./server";

const port = 3000;

server.listen(port, () => {
  console.log("Server is listening on port", port);
});