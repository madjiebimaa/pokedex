import { NextResponse } from "next/server";

import { getPokemon, getPokemonSpecies } from "@/lib/pokemon";
import { Pokemon, PokemonColor, PokemonTypeName } from "@/lib/types";
import { capitalizeFirstLetter } from "@/lib/utils";

export async function GET(
  request: Request,
  { params: { name } }: { params: { name: string } },
) {
  try {
    const [{ id, types, sprites, height, weight, stats }, species] =
      await Promise.all([getPokemon(name), getPokemonSpecies(name)]);

    const [
      { base_stat: hp },
      { base_stat: attack },
      { base_stat: defense },
      { base_stat: specialAttack },
      { base_stat: specialDefense },
      { base_stat: speed },
    ] = stats;

    const pokemon: Pokemon = {
      id,
      name,
      height,
      weight,
      category: species.genera.find(({ language: { name } }) => name === "en")!
        .genus,
      generation: species.generation.name.split("-").pop()!.toUpperCase(),
      types: types.map((type) => ({
        id: type.slot,
        name: type.type.name as PokemonTypeName,
      })),
      sprite: sprites.other["official-artwork"].front_default,
      stats: {
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        speed,
      },
      color: species.color.name as PokemonColor,
      flavorText: species.flavor_text_entries
        .find((flavorText) => flavorText.language.name === "en")!
        .flavor_text.replace(/\n|\f|\r/g, " "),
    };

    return NextResponse.json({
      message: `Found the ${capitalizeFirstLetter(name)} pokémon`,
      data: pokemon,
    });
  } catch (error) {
    console.error(request.url, error);
    return NextResponse.json(
      { message: `Error while getting ${capitalizeFirstLetter(name)} pokémon` },
      { status: 500 },
    );
  }
}
