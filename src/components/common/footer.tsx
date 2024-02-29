import { Github, Linkedin, Mail } from "lucide-react";

import { notoSansMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="hidden items-center justify-center gap-8 lg:flex lg:flex-col">
      <section className="order-2 flex items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/madjiebimaa/"
          target="_blank"
          className="cursor-pointer"
        >
          <Github className="size-6 shrink-0 text-gray-700 transition-colors hover:text-green-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/madjiebimaa/"
          target="_blank"
          className="cursor-pointer"
        >
          <Linkedin className="size-6 shrink-0 text-gray-700 transition-colors hover:text-green-500" />
        </a>
        <a href="mailto:madjiebimaa@gmail.com" className="cursor-pointer">
          <Mail className="size-6 shrink-0 text-gray-700 transition-colors hover:text-green-500" />
        </a>
      </section>
      <p
        className={cn(
          "hidden text-center font-medium text-gray-700 lg:order-2 lg:block",
          notoSansMono.className,
        )}
      >
        © 2024 madjiebimaa dev
      </p>
    </footer>
  );
}
