"use client";

import Image from "next/image";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import { PokemonPreview } from "@/lib/types";
import { capitalizeFirstLetter, cn, getPokemonColor } from "@/lib/utils";

interface PokemonCardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  pokemon: PokemonPreview;
}

const PokemonCardImage = React.forwardRef<
  HTMLDivElement,
  PokemonCardImageProps
>(({ pokemon, className, children, ...props }, ref) => {
  const pokemonName = capitalizeFirstLetter(pokemon.name);
  const pokemonColor = getPokemonColor(pokemon.color);

  return (
    <Card
      ref={ref}
      style={{
        backgroundColor: pokemonColor,
      }}
      className={cn("h-[230px] rounded-xl", className)}
      {...props}
    >
      <CardContent className="flex h-full flex-1 flex-col justify-between gap-2 p-2">
        <div className="relative mx-auto flex w-10/12 flex-1 items-center justify-center">
          <Image
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={pokemon.sprite}
            alt={`Picture of the ${pokemonName} pokémon`}
            className="object-contain"
          />
        </div>
        {children}
      </CardContent>
    </Card>
  );
});
PokemonCardImage.displayName = "PokemonCardImage";

export default PokemonCardImage;
