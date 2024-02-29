import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { PokemonColor } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function httpClient(input: RequestInfo | URL, init?: RequestInit) {
  const promise = new Promise<Response>(async (resolve, reject) => {
    try {
      const response = await fetch(input, init);
      response.ok ? resolve(response) : reject(response);
    } catch (error) {
      reject(error);
    }
  });

  return promise;
}

export function capitalizeFirstLetter(letters: string) {
  return letters.charAt(0).toUpperCase() + letters.slice(1);
}

export function numberPadStartZero(num: number, n: number = 4) {
  return String(num).padStart(n, "0");
}

export function getPokemonColor(color: PokemonColor) {
  switch (color) {
    case "black":
      return "rgba(0, 0, 0, 0.2)";
    case "blue":
      return "rgba(0, 0, 255, 0.2)";
    case "brown":
      return "rgba(165, 42, 42, 0.2)";
    case "gray":
      return "rgba(128, 128, 128, 0.2)";
    case "green":
      return "rgba(0, 128, 0, 0.2)";
    case "pink":
      return "rgba(255, 192, 203, 0.2)";
    case "purple":
      return "rgba(128, 0, 128, 0.2)";
    case "red":
      return "rgba(255, 0, 0, 0.2)";
    case "white":
      return "rgba(255, 255, 255, 0.2)";
    case "yellow":
      return "rgba(255, 255, 0, 0.2)";
  }
}
