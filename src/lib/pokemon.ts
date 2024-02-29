import {
  GetPokemonResponse,
  GetPokemonSpeciesResponse,
  GetPokemonsResponse,
} from "@/lib/responses";
import { httpClient } from "@/lib/utils";

const POKEMON_ENDPOINT = "https://pokeapi.co/api/v2";

export async function getPokemons(
  {
    limit,
    offset,
  }: {
    limit?: number;
    offset?: number;
  } = { limit: 10, offset: 0 },
): Promise<GetPokemonsResponse> {
  const response = await httpClient(
    `${POKEMON_ENDPOINT}/pokemon?limit=${limit}&offset=${offset}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return response.json();
}

export async function getPokemon(name: string): Promise<GetPokemonResponse> {
  const response = await httpClient(`${POKEMON_ENDPOINT}/pokemon/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function getPokemonSpecies(
  name: string,
): Promise<GetPokemonSpeciesResponse> {
  const response = await httpClient(
    `${POKEMON_ENDPOINT}/pokemon-species/${name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return response.json();
}
