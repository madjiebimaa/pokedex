import PokemonAboutInformationSkeleton from "@/components/skeleton/pokemon-about-information-skeleton";
import PokemonNavigationSkeleton from "@/components/skeleton/pokemon-navigation-skeleton";
import PokemonStatInformationSkeleton from "@/components/skeleton/pokemon-stats-information-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

import useDevices from "@/hooks/use-devices";

export default function PokemonDetailsSkeleton() {
  const { isSmallDevice } = useDevices();

  return (
    <div className="flex max-w-[400px] flex-1 flex-col gap-4">
      {isSmallDevice ? (
        <div className="flex flex-col gap-4">
          <PokemonNavigationSkeleton />
          <PokemonAboutInformationSkeleton />
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-7 w-[40px]" />
            <PokemonAboutInformationSkeleton />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-7 w-[40px]" />
            <PokemonStatInformationSkeleton />
          </div>
        </div>
      )}
    </div>
  );
}
