import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { KurimbaSymbol } from "@/components/ui/KurimbaSymbol";

export function Hero() {
  return (
    <section
      id="inicio"
      className="texture-grain relative overflow-hidden bg-linen pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Formas orgánicas de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 size-[28rem] rounded-blob bg-sage-light/80 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 size-[32rem] rounded-blob-2 bg-sand blur-3xl animate-float"
      />

      <div className="container-k relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <p className="eyebrow mb-6 flex items-center gap-3">
              <KurimbaSymbol className="h-4" />
              Bienestar holístico · Costa Rica
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h1 className="font-display text-5xl leading-[1.05] font-medium text-balance text-bark sm:text-6xl lg:text-7xl">
              Un espacio para sanar, equilibrarte y{" "}
              <span className="text-terracotta italic">conectar con vos</span>
            </h1>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-stone sm:text-xl">
              Sesiones y experiencias holísticas para acompañarte a liberar tensiones, recuperar tu
              equilibrio y reconectar con tu bienestar.
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#sesiones" size="lg">
                Conocé nuestras sesiones
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={WHATSAPP_URL} variant="secondary" size="lg">
                <MessageCircle className="size-4" aria-hidden="true" />
                Agendá por WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div
          className="animate-fade-up relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ animationDelay: "250ms" }}
        >
          <div className="relative aspect-[4/5] w-full">
            <ImagePlaceholder
              shape="blob"
              tone="sage"
              priority
              fill
              hint="Foto principal sugerida: espacio de bienestar cálido y luminoso, con luz natural, plantas, textiles en tonos tierra y una camilla o cojines. Sin personas o con una persona en actitud serena."
            />
            {/* Detalle dorado */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 size-28 rounded-blob-2 border border-gold/60 sm:size-36"
            />
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 size-20 rounded-full bg-terracotta/15 blur-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
