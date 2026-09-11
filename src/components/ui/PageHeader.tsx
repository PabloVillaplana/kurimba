import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { KurimbaSymbol } from "./KurimbaSymbol";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
};

/** Cabecera de las páginas interiores, con H1 y migas de pan. */
export function PageHeader({ eyebrow, title, text, crumbs, children }: Props) {
  return (
    <section className="texture-grain relative overflow-hidden bg-linen pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-blob bg-sage-light/70 blur-3xl"
      />
      <div className="container-k relative">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 max-w-3xl">
          {eyebrow ? (
            <p className="eyebrow mb-4 flex items-center gap-3">
              <KurimbaSymbol className="h-4" />
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-5xl leading-[1.05] font-medium text-balance text-bark sm:text-6xl">
            {title}
          </h1>
          {text ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-stone">{text}</p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
