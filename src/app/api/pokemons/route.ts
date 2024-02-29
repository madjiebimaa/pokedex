import { NextResponse } from "next/server";

import { getPokemon, getPokemonSpecies, getPokemons } from "@/lib/pokemon";
import { PokemonColor, PokemonPreview } from "@/lib/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page") || "1");

    const limit = 10;
    const offset = limit * (page - 1);

    const {
      previous: previousPrimitive,
      next: nextPrimitive,
      results: pokemonLinks,
    } = await getPokemons({
      limit,
      offset,
    });

    const pokemonPreviews: PokemonPreview[] = await Promise.all(
      pokemonLinks.map(async (pokemonLink) => {
        const [pokemon, species] = await Promise.all([
          getPokemon(pokemonLink.name),
          getPokemonSpecies(pokemonLink.name),
        ]);

        const pokemonPreview: PokemonPreview = {
          id: pokemon.id,
          name: pokemonLink.name,
          sprite: pokemon.sprites.other["official-artwork"].front_default,
          color: species.color.name as PokemonColor,
        };

        return pokemonPreview;
      }),
    );

    const previous = previousPrimitive && page - 1;
    const next = nextPrimitive && page + 1;

    return NextResponse.json({
      message: "Found the pokémons",
      data: pokemonPreviews,
      previous,
      next,
    });
  } catch (error) {
    console.error(request.url, error);
    return NextResponse.json(
      { message: "Error while getting pokémons" },
      { status: 500 },
    );
  }
}
