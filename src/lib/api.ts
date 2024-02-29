import { GetPokemonResponse, Pokemon } from "@/lib/types";
import { httpClient } from "@/lib/utils";

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

export async function getPokemons(
  page: number = 1,
): Promise<GetPokemonResponse> {
  const response = await httpClient(`${ENDPOINT}/pokemons?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { previous, next, data } = await response.json();
  return { previous, next, data };
}

export async function getPokemon(name: string): Promise<Pokemon> {
  const response = await httpClient(`${ENDPOINT}/pokemons/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await response.json();
  return data;
}
