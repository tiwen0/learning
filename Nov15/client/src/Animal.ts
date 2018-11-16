import { RestDomain, Link, Rest, Relationship } from "@licnz/rest";

export class AnimalRest extends RestDomain {
  public name: string;

  constructor(links: Link[], rest: Rest) {
    super(links, rest);
  }

  public static make(links: Link[], rest: Rest): AnimalRest {
    return new AnimalRest(links, rest);
  }
}
