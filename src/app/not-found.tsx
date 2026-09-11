import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { KurimbaSymbol } from "@/components/ui/KurimbaSymbol";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="texture-grain flex min-h-[70vh] items-center bg-linen pt-32 pb-20">
      <div className="container-k text-center">
        <KurimbaSymbol className="mx-auto h-10 text-terracotta" />
        <p className="eyebrow mt-6">Error 404</p>
        <h1 className="mt-4 font-display text-5xl font-medium text-bark sm:text-6xl">
          Esta página no existe
        </h1>
        <p className="mx-auto mt-5 max-w-md text-stone">
          Tal vez el enlace cambió o se escribió distinto. Volvé al inicio y seguí explorando con
          calma.
        </p>
        <div className="mt-9">
          <Button href="/" size="lg">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver al inicio
          </Button>
        </div>
      </div>
    </section>
  );
}
