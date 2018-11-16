import * as React from "react";
import { observer, inject } from "mobx-react";

import { TheStore } from "../Store";

export const Farms = inject("store")(
  observer(function(props: { store?: TheStore }) {
    return (
      <div className="farms">
        <h2>Farms</h2>
        {props.store.farms.items.map((farm, i) => (
          <div className="farm" key={i}>
            <div>Farm {i + 1}</div>
            <ul>
              <li>name: {farm.name}</li>
              <li>date: {farm.date}</li>
              <li>Animal count: {farm.animals.items.length}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  })
);
