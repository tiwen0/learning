import { FarmRest } from "./Farm";
import {
  RestDomain,
  Relationship,
  CollectionRepresentation
} from "@licnz/rest";

// Get detail information from server

export class ApiRoot extends RestDomain {
  farms: CollectionRepresentation<FarmRest>;

  public async printApi(): Promise<void> {
    const links = await this.hydratedTransitively();
    // const farms = FarmRest.getFarms(links.farms);
    // farms.map(farm => console.log(farm));
    const farms = links.farms;
  }

  private async hydratedTransitively(): Promise<any> {
    return await this.hydrateRelationships([this.farm_], {
      transitivehydrate: true,
      alsoHydrateChildre: true
    });
  }

  public farm_: Relationship = {
    make: () => FarmRest.make,
    name: "farms",
    optional: false,
    relationship: "farms",
    toMany: true
  };
}
