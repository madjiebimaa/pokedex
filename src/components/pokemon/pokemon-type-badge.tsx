import Image from "next/image";

import { PokemonType } from "@/lib/types";
import { capitalizeFirstLetter } from "@/lib/utils";

interface PokemonTypeBadgeProps {
  type: PokemonType;
}

export default function PokemonTypeBadge({ type }: PokemonTypeBadgeProps) {
  return (
    <Image
      key={type.id}
      height={56}
      width={56}
      src={`/types/${capitalizeFirstLetter(type.name)}.png`}
      alt={`Picture of the ${capitalizeFirstLetter(type.name)} type`}
    />
  );
}
