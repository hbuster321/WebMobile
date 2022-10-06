export type NamedAPIResource = {
  name: string;
  url: string;
};

export type APIResourceList = {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
};

export type Pokedex = {
  id: number;
  name: string;
  pokemon_entries: [
    { entry_number: number; pokemon_species: NamedAPIResource }
  ];
  names: PokedexName[];
};

export type PokedexName = {
  name: string;
  language: NamedAPIResource;
};

/* Pokemon Species */

export type PokemonSpecies = {
  base_happiness: number;
  capture_rate: number;
  flavor_text_entries: PokemonSpeciesFlavorText[];
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: PokemonSpeciesName[];
};

export type PokemonSpeciesFlavorText = {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
};

export type PokemonSpeciesName = {
  name: string;
  language: NamedAPIResource;
};

/* Pokemon */

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: PokemonAbilities;
  stats: PokemonStats;
  types: PokemonType[];
};

export type PokemonAbilities = {
  slot: number;
  is_hidden: boolean;
  ability: NamedAPIResource;
};

export type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

export type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

/* Ability */

export type Ability = {
  id: number;
  name: string;
};

/* Stat */

export type Stat = {
  id: number;
  name: string;
  is_battle_only: boolean;
};

/* Type */

export type Type = {
  id: number;
  name: string;
  damage_relations: TypeDamageRelations;
};

export type TypeDamageRelations = {
  double_damage_from: NamedAPIResource[];
  double_damage_to: NamedAPIResource[];
  half_damage_from: NamedAPIResource[];
  half_damage_to: NamedAPIResource[];
  no_damage_from: NamedAPIResource[];
  no_damage_to: NamedAPIResource[];
};
