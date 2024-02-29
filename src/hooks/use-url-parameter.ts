"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function useUrlParameter(
  parameter: string,
  config: {
    default?: string;
    useDebounce?: boolean;
  } = { useDebounce: true },
): [string, (parameter: string) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlParameter = searchParams.get(parameter) || config.default || "";

  const setUrlParameter = useDebouncedCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      value ? params.set(parameter, value) : params.delete(parameter);
      router.replace(`${pathname}?${params.toString()}`);
    },
    config.useDebounce ? 300 : 0,
  );

  return [urlParameter, setUrlParameter];
}
