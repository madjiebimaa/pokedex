import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonNavigationSkeleton() {
  return (
    <section className="flex items-center gap-4">
      {Array.from({ length: 2 }, (_, index) => index + 1).map((id) => (
        <Skeleton key={id} className="h-10 w-[60px]" />
      ))}
    </section>
  );
}
