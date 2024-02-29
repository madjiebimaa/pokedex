"use client";

import { useRouter } from "next/navigation";
import React from "react";

import PokemonCardImage from "@/components/pokemon/pokemon-card-image";

import { notoSansMono } from "@/lib/fonts";
import { PokemonPreview } from "@/lib/types";
import { capitalizeFirstLetter, cn, numberPadStartZero } from "@/lib/utils";

interface PokemonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  pokemon: PokemonPreview;
}

const PokemonCard = React.forwardRef<HTMLDivElement, PokemonCardProps>(
  ({ pokemon, ...props }, ref) => {
    const router = useRouter();

    const pokemonId = numberPadStartZero(pokemon.id);
    const pokemonName = capitalizeFirstLetter(pokemon.name);

    return (
      <PokemonCardImage
        ref={ref}
        pokemon={pokemon}
        className="cursor-pointer transition-opacity duration-500 hover:opacity-80 hover:transition-opacity"
        onClick={() => router.push(`/${pokemon.name}`)}
        {...props}
      >
        <div className="mb-2 flex flex-col items-center justify-center gap-1">
          <p
            className={cn(
              "text-xl font-bold text-gray-700",
              notoSansMono.className,
            )}
          >
            {pokemonName}
          </p>
          <p className="text-sm font-medium text-gray-500">{pokemonId}</p>
        </div>
      </PokemonCardImage>
    );
  },
);
PokemonCard.displayName = "PokemonCard";

export default PokemonCard;
