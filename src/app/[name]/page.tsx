"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import ClientOnly from "@/components/common/client-only";
import PokemonCardImage from "@/components/pokemon/pokemon-card-image";
import PokemonDetails from "@/components/pokemon/pokemon-details";
import PokemonPageSkeleton from "@/components/skeleton/pokemon-page-skeleton";
import { Button } from "@/components/ui/button";

import useIsDelayed from "@/hooks/use-is-delayed";
import { notoSansMono } from "@/lib/fonts";
import { capitalizeFirstLetter, cn, numberPadStartZero } from "@/lib/utils";
import { usePokemon } from "@/queries/pokemon";

export default function PokemonPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const router = useRouter();
  const isDelayed = useIsDelayed(1000);
  const { data: pokemon, isLoading, isSuccess } = usePokemon(name);

  if (isLoading || !isSuccess || !isDelayed) return <PokemonPageSkeleton />;

  const pokemonId = numberPadStartZero(pokemon.id);
  const pokemonName = capitalizeFirstLetter(pokemon.name);

  return (
    <main className="container flex max-h-screen min-h-screen flex-col gap-4 p-4">
      <section className="relative flex h-[70px] items-start">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="shrink-0 text-gray-700" />
        </Button>
        <div className="absolute bottom-0 left-0 right-0 top-0 mx-auto flex w-fit flex-col items-center justify-center gap-1">
          <h1
            className={cn(
              "text-2xl font-black text-gray-700",
              notoSansMono.className,
            )}
          >
            {pokemonName}
          </h1>
          <p className="font-medium text-gray-500">{pokemonId}</p>
        </div>
      </section>
      <section className="flex h-screen max-h-screen flex-col gap-4 md:flex-row xl:mx-auto">
        <PokemonCardImage
          className="h-full max-h-screen md:w-[400px] lg:w-[700px]"
          pokemon={{
            id: pokemon.id,
            name: pokemon.name,
            sprite: pokemon.sprite,
            color: pokemon.color,
          }}
        />
        <ClientOnly>
          <PokemonDetails pokemon={pokemon} />
        </ClientOnly>
      </section>
    </main>
  );
}
