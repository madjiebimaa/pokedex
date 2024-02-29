"use client";

import PokemonAboutInformation from "@/components/pokemon/pokemon-about-information";
import PokemonInformation from "@/components/pokemon/pokemon-information";
import PokemonNavigation from "@/components/pokemon/pokemon-navigation";
import PokemonStatsInformation from "@/components/pokemon/pokemon-stats-information";

import useDevices from "@/hooks/use-devices";
import { Pokemon } from "@/lib/types";

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const { isSmallDevice } = useDevices();

  return (
    <div className="flex max-w-[400px] flex-1 flex-col gap-4">
      {isSmallDevice ? (
        <div className="flex flex-col gap-4">
          <PokemonNavigation />
          <PokemonInformation pokemon={pokemon} />
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-gray-700">About</h2>
            <PokemonAboutInformation
              pokemon={{
                flavorText: pokemon.flavorText,
                height: pokemon.height,
                types: pokemon.types,
                weight: pokemon.weight,
              }}
            />
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-gray-700">Stats</h2>
            <PokemonStatsInformation
              pokemon={{ color: pokemon.color, stats: pokemon.stats }}
            />
          </section>
        </div>
      )}
    </div>
  );
}
