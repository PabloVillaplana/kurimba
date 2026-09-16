import Image from "next/image";
import { cn } from "@/lib/utils";
import { KurimbaSymbol } from "./KurimbaSymbol";

export type ArtVariant = "waves" | "rings" | "petals";

type Props = {
  variant?: ArtVariant;
  tone?: "sage" | "sand" | "linen";
  shape?: "rounded" | "blob" | "blob-2" | "none";
  /** Muestra el símbolo de Kurimba al centro. */
  symbol?: boolean;
  /** Ocupa todo el contenedor padre (que debe ser `relative` y tener tamaño). */
  fill?: boolean;
  /** Si se define, muestra una fotografía real en lugar de la composición. */
  image?: { src: string; alt: string };
  sizes?: string;
  priority?: boolean;
  className?: string;
};

const shapes = {
  rounded: "rounded-[2rem]",
  blob: "rounded-blob",
  "blob-2": "rounded-blob-2",
  none: "",
};

const tones = {
  sage: "from-sage-light via-linen to-sage/50 text-sage-deep",
  sand: "from-sand via-linen to-clay/70 text-terracotta",
  linen: "from-linen via-cream to-sand text-terracotta",
};

const petal = "M200,120 C230,165 230,215 200,250 C170,215 170,165 200,120 Z";

function Pattern({ variant }: { variant: ArtVariant }) {
  if (variant === "rings") {
    return (
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {[44, 78, 114, 152, 192, 234, 280].map((r, i) => (
          <circle key={r} cx="200" cy="250" r={r} opacity={0.55 - i * 0.07} />
        ))}
        <circle cx="200" cy="250" r="300" opacity="0.06" strokeWidth="40" />
      </g>
    );
  }
  if (variant === "petals") {
    return (
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d={petal} transform={`rotate(${i * 30} 200 250)`} opacity={0.45} />
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={`o${i}`}
            d={petal}
            transform={`rotate(${i * 30 + 15} 200 250) scale(1.55) translate(-71 -88.7)`}
            opacity={0.18}
          />
        ))}
        <circle cx="200" cy="250" r="8" fill="currentColor" opacity="0.5" stroke="none" />
      </g>
    );
  }
  // waves
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      {Array.from({ length: 11 }, (_, i) => {
        const y = 60 + i * 42;
        const a = 22 + (i % 3) * 8;
        return (
          <path
            key={i}
            d={`M-40 ${y} C 80 ${y - a}, 160 ${y + a}, 240 ${y} S 400 ${y - a}, 460 ${y + a / 2}`}
            opacity={0.5 - Math.abs(5 - i) * 0.06}
          />
        );
      })}
    </g>
  );
}

/**
 * Composición gráfica decorativa con la identidad de Kurimba.
 * Sustituye a las fotografías mientras no existan imágenes definitivas.
 */
export function Artwork({
  variant = "waves",
  tone = "sage",
  shape = "rounded",
  symbol = true,
  fill = false,
  image,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  className,
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "isolate overflow-hidden bg-gradient-to-br shadow-soft",
        fill ? "absolute inset-0" : "relative",
        shapes[shape],
        tones[tone],
        className,
      )}
    >
      {image ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <>
          <svg
            viewBox="0 0 400 500"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 size-full"
          >
            <Pattern variant={variant} />
          </svg>
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(250 247 242 / 0.85) 0%, rgb(250 247 242 / 0) 55%)",
            }}
          />
          {symbol ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <KurimbaSymbol className="h-[22%] max-h-28 text-terracotta drop-shadow-sm animate-float" />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
