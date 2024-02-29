import { Pokemon } from "@/lib/types";
import { getPokemonColor } from "@/lib/utils";
import { Progress } from "../ui/progress";

interface PokemonStatsInformationProps {
  pokemon: {
    stats: Pokemon["stats"];
    color: Pokemon["color"];
  };
}

export default function PokemonStatsInformation({
  pokemon,
}: PokemonStatsInformationProps) {
  const stats = Object.entries(pokemon.stats);

  const labels = ["hp", "atk", "def", "s.atk", "s.def", "spd"];

  return (
    <section className="flex flex-col gap-2">
      {stats.map(([stat, value], index) => (
        <div key={stat} className="flex items-center justify-between gap-1">
          <p className="min-w-[50px] text-sm font-bold uppercase text-gray-700">
            {labels[index]}
          </p>
          <p className="min-w-[30px] text-xs font-medium text-gray-700">
            {value}
          </p>
          <Progress
            value={value / 2}
            indicatorColor={getPokemonColor(pokemon.color)}
          />
        </div>
      ))}
    </section>
  );
}
