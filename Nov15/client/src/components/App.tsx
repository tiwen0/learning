import * as React from "react";
import { inject } from "mobx-react";
import DevTool from "mobx-react-devtools";
import { Farms } from "./Farms";
import { TheStore } from "../Store";
// import { Animals } from "./Animals";

@inject("store")
export class App extends React.Component<{ store?: TheStore }> {
  render() {
    return (
      <div className="main">
        <h1>Main</h1>
        <div className="areas">
          <Farms />
          {/* <Animals /> */}
        </div>
        <DevTool />
      </div>
    );
  }
}
