// Entry point
import { TheStore } from "./Store";
import { Rest, LinkedRepresentation } from "@licnz/rest";
import { HttpNodeFetch } from "@licnz/http";
import { Provider } from "mobx-react";
import { App } from "./components/App";
import { render } from "react-dom";
import * as React from "react";

const apiUrl = "http://localhost:3000/";
const rest = new Rest(new HttpNodeFetch(), apiUrl);
const links = LinkedRepresentation.makeLinksFrom(apiUrl);
const theStore = new TheStore(links, rest);
theStore.hydrateTransitively().then(() => {
  mountAppComponent(theStore);
});

function mountAppComponent(theStore: TheStore): void {
  render(
    <Provider store={theStore}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}
