"use client";

import { Button } from "@/components/ui/button";

import useUrlParameter from "@/hooks/use-url-parameter";
import { capitalizeFirstLetter, cn } from "@/lib/utils";

const links: string[] = ["about", "stats"];

export default function PokemonNavigation() {
  const [urlParameter, setUrlParameter] = useUrlParameter("information", {
    useDebounce: false,
    default: "about",
  });

  const urlParameterIndex = links.findIndex((link) => link === urlParameter);

  return (
    <nav className="flex items-center gap-4">
      {links.map((link, index) => (
        <Button
          key={link}
          variant="link"
          style={{ opacity: 1.0 - 0.2 * Math.abs(urlParameterIndex - index) }}
          className={cn(
            "p-0 text-xl font-bold text-gray-700",
            urlParameter === link && "underline",
          )}
          onClick={() => setUrlParameter(link)}
        >
          {capitalizeFirstLetter(link)}
        </Button>
      ))}
    </nav>
  );
}
