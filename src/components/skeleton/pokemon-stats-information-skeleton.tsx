import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonStatInformationSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 6 }, (_, index) => index + 1).map((id) => (
        <div key={id} className="flex items-center justify-between gap-1">
          <Skeleton className="h-4 w-[50px]" />
          <Skeleton className="h-4 w-[50px]" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}
