export type PokemonPreview = Pick<Pokemon, "id" | "name" | "sprite" | "color">;

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  category: string;
  generation: string;
  types: PokemonType[];
  sprite: string;
  stats: PokemonStats;
  color: PokemonColor;
  flavorText: string;
};

export type PokemonType = {
  id: number;
  name: PokemonTypeName;
};

export type PokemonTypeName =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy";
// | "unknown"
// | "shadow"

export type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};

export type PokemonColor =
  | "black"
  | "blue"
  | "brown"
  | "gray"
  | "green"
  | "pink"
  | "purple"
  | "red"
  | "white"
  | "yellow";

export type GetPokemonResponse = {
  previous: number | null;
  next: number | null;
  data: PokemonPreview[];
};
