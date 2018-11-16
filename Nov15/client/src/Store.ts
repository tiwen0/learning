import { FarmRest } from "./Farm";
import { AnimalRest } from "./Animal";
import {
  RestDomain,
  Relationship,
  CollectionRepresentation,
  Link,
  Rest
} from "@licnz/rest";

// Get detail information from server

// export class Store extends RestDomain {
//   farms: CollectionRepresentation<FarmRest>;

//   private async hydratedTransitively(): Promise<any> {
//     return await this.hydrateRelationships([this.farm_], {
//       transitivehydrate: true,
//       alsoHydrateChildre: true
//     });
//   }

//   public farm_: Relationship = {
//     make: () => FarmRest.make,
//     name: "farms",
//     optional: false,
//     relationship: "farms",
//     toMany: true
//   };
// }

export interface TransitiveHydrator {
  hydrateTransitively(): Promise<any>;
}

export class TheStore extends RestDomain implements TransitiveHydrator {
  farms: CollectionRepresentation<FarmRest>;
  animals: CollectionRepresentation<AnimalRest>;

  constructor(links: Link[], rest: Rest) {
    super(links, rest);
  }

  public printApi() {
    console.log(this.farms);
    console.log(this.animals);
  }

  hydrateTransitively(): Promise<any> {
    return this.hydrateRelationships([farm_, animal_], {
      transitiveHydrate: true,
      alsoHydrateChildren: true
    });
  }
}

const farm_: Relationship = {
  make: () => FarmRest.make,
  name: "farms",
  optional: false,
  relationship: "farms",
  toMany: true
};

const animal_: Relationship = {
  make: () => AnimalRest.make,
  name: "animals",
  optional: false,
  relationship: "animals",
  toMany: true
};
