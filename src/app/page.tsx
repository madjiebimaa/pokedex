import Footer from "@/components/common/footer";
import PokemonCardList from "@/components/pokemon/pokemon-card-list";

import { notoSansMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <main className="flex max-h-screen min-h-screen flex-col gap-4 p-4 lg:flex-row">
      <section className="flex items-center justify-between gap-4 lg:max-w-[220px] lg:flex-col">
        <section className="flex flex-col gap-4">
          <h1
            className={cn(
              "text-3xl font-black text-gray-700",
              notoSansMono.className,
            )}
          >
            Pokédex
          </h1>
          <p className="max-w-[500px] text-gray-500">
            Your Pokémon journey starts here, where every click opens a portal
            to the vast and enchanting world of pocket monsters.
          </p>
        </section>
        <Footer />
      </section>
      <PokemonCardList />
    </main>
  );
}
