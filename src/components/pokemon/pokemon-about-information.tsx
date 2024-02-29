import { ArrowUpDown, LucideIcon, Weight } from "lucide-react";

import PokemonTypeBadge from "@/components/pokemon/pokemon-type-badge";

import { Pokemon } from "@/lib/types";

interface PokemonAboutInformationProps {
  pokemon: {
    flavorText: Pokemon["flavorText"];
    types: Pokemon["types"];
    height: Pokemon["height"];
    weight: Pokemon["weight"];
  };
}

export default function PokemonAboutInformation({
  pokemon,
}: PokemonAboutInformationProps) {
  const sizes: {
    name: string;
    value: number;
    unit: string;
    icon: LucideIcon;
  }[] = [
    { name: "Height", value: pokemon.height, unit: "m", icon: ArrowUpDown },
    { name: "Weight", value: pokemon.weight, unit: "kg", icon: Weight },
  ];

  return (
    <section className="flex flex-col gap-4">
      <p className="text-gray-700">{pokemon.flavorText}</p>
      <div className="flex items-center gap-10">
        {sizes.map(({ name, value, unit, icon: Icon }) => (
          <div key={name} className="flex items-center gap-3">
            <Icon className="size-6 shrink-0 text-gray-700" />
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-500">{name}</p>
              <p className="font-semibold text-gray-700">
                {value} {unit}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold text-gray-700">Types</h4>
        <div className="flex items-center gap-2">
          {pokemon.types.map((type) => (
            <PokemonTypeBadge key={type.id} type={type} />
          ))}
        </div>
      </div>
    </section>
  );
}
