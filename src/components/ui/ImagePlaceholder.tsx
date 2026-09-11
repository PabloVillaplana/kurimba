import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { KurimbaSymbol } from "./KurimbaSymbol";

type Props = {
  /** Indicación del tipo de fotografía que debe colocarse aquí. */
  hint: string;
  /** Si se define, se muestra la imagen real en lugar del placeholder. */
  image?: { src: string; alt: string };
  className?: string;
  /** Forma del contenedor. */
  shape?: "rounded" | "blob" | "blob-2";
  tone?: "sand" | "sage" | "linen";
  showSymbol?: boolean;
  sizes?: string;
  priority?: boolean;
  /** Si es true, ocupa todo el contenedor padre (que debe ser `relative` y tener tamaño). */
  fill?: boolean;
};

const shapes = {
  rounded: "rounded-[2rem]",
  blob: "rounded-blob",
  "blob-2": "rounded-blob-2",
};

const tones = {
  sand: "from-sand via-linen to-clay/70",
  sage: "from-sage-light via-linen to-sage/60",
  linen: "from-linen via-cream to-sand",
};

/**
 * Espacio visual elegante para fotografías pendientes.
 * Muestra una indicación clara del tipo de imagen que debe agregarse.
 */
export function ImagePlaceholder({
  hint,
  image,
  className,
  shape = "rounded",
  tone = "sand",
  showSymbol = true,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  fill = false,
}: Props) {
  return (
    <div
      className={cn(
        "isolate overflow-hidden bg-gradient-to-br shadow-soft",
        fill ? "absolute inset-0" : "relative",
        shapes[shape],
        tones[tone],
        className,
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="texture-grain absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          {showSymbol ? <KurimbaSymbol className="h-10 text-terracotta/50" /> : null}
          <div className="flex max-w-xs items-start gap-2 rounded-2xl border border-bark/10 bg-cream/70 px-4 py-3 text-left backdrop-blur-sm">
            <ImageIcon className="mt-0.5 size-4 shrink-0 text-stone" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-stone">{hint}</p>
          </div>
        </div>
      )}
    </div>
  );
}
