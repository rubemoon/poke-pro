import { links } from "./data";

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
}


export type SectionName = (typeof links)[number]["name"];