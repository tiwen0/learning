import { IAnimal, AnimalRest } from "./Animal";
import {
  RestDomain,
  Link,
  Rest,
  Relationship,
  CollectionRepresentation
} from "@licnz/rest";

// export interface IFarm {
//   id: number;
//   name: string;
//   date: Date;
//   animals: Array<IAnimal>;
// }

export class FarmRest extends RestDomain {
  public size: number;
  public long: number;
  public lat: number;

  // public animals: CollectionRepresentation<AnimalRest>;

  constructor(links: Link[], rest: Rest) {
    super(links, rest);
  }

  public static make(links: Link[], rest: Rest): FarmRest {
    return new FarmRest(links, rest);
  }

  // protected hydratedTransitively(): Promise<any> {
  //   return this.hydrateRelationships([AnimalRest.animal_], {
  //     transitivehydrate: true,
  //     alsoHydrateChildre: true
  //   });
  // }

  // public static getFarms = (
  //   farms: CollectionRepresentation<FarmRest>
  // ): Array<IFarm> => {
  //   return farms.items.map(
  //     farm =>
  //       ({
  //         id: farm.id,
  //         name: farm.name,
  //         date: farm.date,
  //         animals: []
  //       } as IFarm)
  //   );
  // };
}
