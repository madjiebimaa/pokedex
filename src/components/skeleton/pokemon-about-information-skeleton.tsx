import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonAboutInformationSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-6 w-[150px]" />
      </div>
      <div className="flex items-center gap-10">
        {Array.from({ length: 2 }, (_, index) => index + 1).map((id) => (
          <div key={id} className="flex items-center gap-3">
            <Skeleton className="size-6 shrink-0" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-5 w-[40px]" />
              <Skeleton className="h-6 w-[40px]" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-[50px]" />
        <div className="flex items-center gap-2">
          {Array.from({ length: 3 }, (_, index) => index + 1).map((id) => (
            <Skeleton key={id} className="size-14" />
          ))}
        </div>
      </div>
    </div>
  );
}
