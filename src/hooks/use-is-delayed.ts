"use client";

import { useEffect, useState } from "react";

export default function useIsDelayed(delay: number) {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDelayed(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return isDelayed;
}
