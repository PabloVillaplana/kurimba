import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { KurimbaSymbol } from "./KurimbaSymbol";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/** Encabezado de sección con símbolo decorativo y texto introductorio. */
export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "dark",
  className,
}: Props) {
  const centered = align === "center";
  const light = tone === "light";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? <p className={cn("eyebrow mb-4", light && "text-gold")}>{eyebrow}</p> : null}
      <h2
        className={cn(
          "font-display text-4xl leading-[1.1] font-medium text-balance sm:text-5xl",
          light ? "text-cream" : "text-bark",
        )}
      >
        {title}
      </h2>
      <div
        className={cn("mt-5 flex items-center gap-3", centered && "justify-center")}
        aria-hidden="true"
      >
        <span className={cn("h-px w-10", light ? "bg-clay/40" : "bg-clay")} />
        <KurimbaSymbol className="h-5 text-terracotta" />
        <span className={cn("h-px w-10", light ? "bg-clay/40" : "bg-clay")} />
      </div>
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty sm:text-lg",
            light ? "text-clay" : "text-stone",
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
