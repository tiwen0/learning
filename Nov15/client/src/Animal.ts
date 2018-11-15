import { RestDomain, Link, Rest, Relationship } from "@licnz/rest";

export interface IAnimal {
  id: number;
  name: string;
  farmId: number;
}

export class AnimalRest extends RestDomain {
  private static make(links: Link[], rest: Rest): AnimalRest {
    return new AnimalRest(links, rest);
  }

  public static animal_: Relationship = {
    make: () => AnimalRest.make,
    name: "animals",
    optional: false,
    relationship: "animals",
    toMany: true
  };
}
