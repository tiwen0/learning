import { AnimalRest } from "./Animal";
import {
  RestDomain,
  Link,
  Rest,
  Relationship,
  CollectionRepresentation
} from "@licnz/rest";
import { TransitiveHydrator } from "./Store";

// export interface IFarm {
//   id: number;
//   name: string;
//   date: Date;
//   animals: Array<IAnimal>;
// }

export class FarmRest extends RestDomain implements TransitiveHydrator {
  public name: string;
  public date: Date;
  public animals: CollectionRepresentation<AnimalRest>;

  constructor(links: Link[], rest: Rest) {
    super(links, rest);
  }

  public static make(links: Link[], rest: Rest): FarmRest {
    return new FarmRest(links, rest);
  }

  hydrateTransitively(): Promise<any> {
    return this.hydrateRelationships([this.animal_], {
      transitiveHydrate: true,
      alsoHydrateChildren: true
    });
  }

  public animal_: Relationship = {
    make: () => AnimalRest.make,
    name: "animals",
    optional: false,
    relationship: "animals",
    toMany: true
  };
}
