"use client";

import ClientOnly from "@/components/common/client-only";
import PokemonDetailsSkeleton from "@/components/skeleton/pokemon-details-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonPageSkeleton() {
  return (
    <ClientOnly>
      <div className="container flex max-h-screen min-h-screen flex-col gap-4 p-4">
        <div className="relative flex h-[70px] items-start">
          <Skeleton className="size-10 rounded-full" />
          <div className="absolute bottom-0 left-0 right-0 top-0 mx-auto flex w-fit flex-col items-center justify-center gap-1">
            <Skeleton className="h-8 w-[150px]" />
            <Skeleton className="h-6 w-[40px]" />
          </div>
        </div>
        <section className="flex h-screen max-h-screen flex-col gap-4 md:flex-row xl:mx-auto">
          <Skeleton className="h-full max-h-screen md:w-[400px] lg:w-[700px]" />
          <PokemonDetailsSkeleton />
        </section>
      </div>
    </ClientOnly>
  );
}
