import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonCardSkeleton() {
  return (
    <Card className="h-[230px]">
      <CardContent className="flex h-full flex-1 flex-col justify-between gap-2 p-2">
        <div className="relative flex flex-1 items-center justify-center">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="mb-2 flex flex-col items-center justify-center gap-1">
          <Skeleton className="h-6 w-[100px]" />
          <Skeleton className="h-3 w-[50px]" />
        </div>
      </CardContent>
    </Card>
  );
}
