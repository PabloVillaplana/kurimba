import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { brand } from "@/config/site";
import { JsonLd } from "./JsonLd";

export type Crumb = { label: string; href?: string };

/** Migas de pan visibles + datos estructurados BreadcrumbList. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Inicio", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Migas de pan" className="text-xs tracking-wide text-stone">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((item, i) => {
            const last = i === all.length - 1;
            return (
              <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
                {item.href && !last ? (
                  <Link href={item.href} className="transition-colors hover:text-terracotta-dark">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={last ? "page" : undefined} className="text-bark/80">
                    {item.label}
                  </span>
                )}
                {!last ? <ChevronRight className="size-3.5 text-clay" aria-hidden="true" /> : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.href ? { item: `${brand.url}${item.href}` } : {}),
          })),
        }}
      />
    </>
  );
}
