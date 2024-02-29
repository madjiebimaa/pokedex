import type { Metadata } from "next";

import QueryProvider from "@/components/provider/query-provider";

import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pokédex",
  description:
    "Your Pokémon journey starts here, where every click opens a portal to the vast and enchanting world of pocket monsters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-white text-black antialiased", inter.className)}
        suppressHydrationWarning
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
