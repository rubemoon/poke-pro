import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export const typeColors = {
  fire: "bg-red-500",
  grass: "bg-green-500",
  water: "bg-blue-500",
  electric: "bg-yellow-500",
  poison: "bg-purple-500",
  flying: "bg-orange-400",
};

export interface TypeProps {
  typeName: keyof typeof typeColors;
}