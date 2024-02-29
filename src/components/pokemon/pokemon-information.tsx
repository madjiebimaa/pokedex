"use client";

import { useSearchParams } from "next/navigation";

import PokemonAboutInformation from "@/components/pokemon/pokemon-about-information";
import PokemonStatsInformation from "@/components/pokemon/pokemon-stats-information";

import { Pokemon } from "@/lib/types";

interface PokemonInformationProps {
  pokemon: Pokemon;
}

export default function PokemonInformation({
  pokemon,
}: PokemonInformationProps) {
  const searhParams = useSearchParams();

  const information = searhParams.get("information") || "";

  switch (information) {
    case "about":
      return (
        <PokemonAboutInformation
          pokemon={{
            flavorText: pokemon.flavorText,
            types: pokemon.types,
            height: pokemon.height,
            weight: pokemon.weight,
          }}
        />
      );
    case "stats":
      return <PokemonStatsInformation pokemon={{stats:pokemon.stats, color: pokemon.color}} />;
    default:
      return (
        <PokemonAboutInformation
          pokemon={{
            flavorText: pokemon.flavorText,
            types: pokemon.types,
            height: pokemon.height,
            weight: pokemon.weight,
          }}
        />
      );
  }
}
