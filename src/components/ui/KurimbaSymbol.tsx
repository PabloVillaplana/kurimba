import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Color del símbolo. Por defecto usa currentColor para heredar del contenedor. */
  color?: string;
  title?: string;
};

/** Símbolo de la marca (flor de tres pétalos) en SVG inline, tomado del logotipo oficial. */
export function KurimbaSymbol({ className, color = "currentColor", title }: Props) {
  const petal = "M60,28 C67.5,39 67.5,52 60,61 C52.5,52 52.5,39 60,28 Z";
  return (
    <svg
      viewBox="20 20 80 62"
      className={cn("h-8 w-auto", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      fill={color}
    >
      {title ? <title>{title}</title> : null}
      <path d={petal} />
      <path d={petal} transform="rotate(42 60 61)" />
      <path d={petal} transform="rotate(-42 60 61)" />
      <circle cx="60" cy="73" r="3.2" />
    </svg>
  );
}
