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

export interface Pokemon {
  name: string;
  url: string;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface Move {
  name: string;
  move: {
    name: string;
    url: string;
  };
}
export interface Form {
  name: string;
  url: string;
}

export interface Cry {
  latest: string;
  legacy: string;
}

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: Ability[];
  types: { type: { name: string; url: string } }[];
  forms: Form[];
  moves: Move[];
  cries: Cry;
}

export interface TypeRelation {
  name: string;
  url: string;
}

export interface DamageRelations {
  double_damage_from: TypeRelation[];
  double_damage_to: TypeRelation[];
  half_damage_from: TypeRelation[];
  half_damage_to: TypeRelation[];
  no_damage_from: TypeRelation[];
  no_damage_to: TypeRelation[];
}

export interface GameIndex {
  game_index: number;
  generation: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  id: number;
  name: string;
  damage_relations: DamageRelations;
  game_indices: GameIndex[];
  generation: {
    name: string;
    url: string;
  };
  move_damage_class: {
    name: string;
    url: string;
  };
  moves: Move[];
}

export interface AbilityData {
  id: number;
  name: string;
  effect_entries: {
    effect: string;
    short_effect: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  pokemon: {
    is_hidden: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}