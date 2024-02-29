import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseQueryOptions,
  UseQueryResult,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

import { getPokemon, getPokemons } from "@/lib/api";
import { GetPokemonResponse, Pokemon } from "@/lib/types";

export const usePokemons = (
  config?: Omit<
    UseInfiniteQueryOptions<
      GetPokemonResponse,
      Error,
      InfiniteData<GetPokemonResponse>,
      GetPokemonResponse,
      QueryKey,
      number | null
    >,
    "queryKey" | "queryFn" | "initialPageParam" | "getNextPageParam"
  >,
) => {
  return useInfiniteQuery({
    ...config,
    queryKey: ["/pokemons"],
    queryFn: async ({ pageParam }): Promise<GetPokemonResponse> =>
      getPokemons(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next || undefined,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

export const usePokemon = (
  name: string,
  config?: Omit<UseQueryOptions<Pokemon, Error>, "queryKey" | "queryFn">,
): UseQueryResult<Pokemon, Error> => {
  return useQuery<Pokemon, Error>({
    ...config,
    queryKey: ["/pokemons", name],
    queryFn: async (): Promise<Pokemon> => getPokemon(name),
  });
};
