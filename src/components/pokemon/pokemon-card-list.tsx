"use client";

import { Loader } from "lucide-react";
import { useEffect } from "react";

import PokemonCard from "@/components/pokemon/pokemon-card";
import PokemonCardSkeleton from "@/components/skeleton/pokemon-card-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

import { PokemonPreview } from "@/lib/types";
import { usePokemons } from "@/queries/pokemon";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export default function PokemonCardList() {
  const [lastCardRef, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const {
    data,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = usePokemons();

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [entry, hasNextPage, fetchNextPage]);

  if (isLoading || !isSuccess)
    return (
      <Container>
        {isLoading &&
          Array.from({ length: 10 }, (_, index) => index + 1).map((id) => (
            <PokemonCardSkeleton key={id} />
          ))}
      </Container>
    );

  const pokemons = data.pages.reduce(
    (acc, page) => [...acc, ...page.data],
    [] as PokemonPreview[],
  );

  return (
    <Container>
      {pokemons.map((pokemon, index) => (
        <PokemonCard
          ref={pokemons.length === index + 1 ? lastCardRef : null}
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
      {isFetchingNextPage && (
        <div
          style={{ gridColumn: "1 / -1" }}
          className="mb-10 flex items-center justify-center"
        >
          <Loader className="size-8 shrink-0 animate-spin text-gray-700" />
        </div>
      )}
    </Container>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea className="h-screen max-h-screen w-full lg:h-auto">
      <section className="grid w-full grid-cols-2 place-content-start gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {children}
      </section>
    </ScrollArea>
  );
}
