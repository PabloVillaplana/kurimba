import Link from "next/link";
import { brand } from "@/config/site";
import { cn } from "@/lib/utils";
import { KurimbaSymbol } from "./KurimbaSymbol";

type Props = {
  variant?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
};

/** Logotipo horizontal: símbolo + nombre en tipografía de marca. */
export function Logo({ variant = "dark", withTagline = false, className }: Props) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      aria-label={`${brand.name}, ir al inicio`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <KurimbaSymbol className="h-9 w-auto text-terracotta transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.45rem] font-semibold uppercase tracking-[0.28em]",
            isLight ? "text-cream" : "text-bark",
          )}
        >
          {brand.name}
        </span>
        {withTagline ? (
          <span
            className={cn(
              "mt-1.5 text-[0.6rem] font-light uppercase tracking-[0.3em]",
              isLight ? "text-clay" : "text-stone",
            )}
          >
            {brand.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
