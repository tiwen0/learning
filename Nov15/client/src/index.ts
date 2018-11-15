// Entry point
import { ApiRoot } from "./ApiRoot";
import { Rest, LinkedRepresentation } from "@licnz/rest";
import { HttpNodeFetch } from "@licnz/http";

const apiUrl = "http://localhost:3000/";
const rest = new Rest(new HttpNodeFetch(), apiUrl);
const links = LinkedRepresentation.makeLinksFrom(apiUrl);
const apiRoot = new ApiRoot(links, rest);
apiRoot.printApi();
