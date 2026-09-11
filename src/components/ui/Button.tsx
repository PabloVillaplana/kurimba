import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta-dark text-cream shadow-soft hover:bg-terracotta-deeper hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "border border-bark/25 bg-transparent text-bark hover:border-bark hover:bg-bark hover:text-cream",
  ghost: "text-bark underline-offset-4 hover:text-terracotta-dark hover:underline",
  whatsapp:
    "bg-forest text-cream shadow-soft hover:bg-sage-deep hover:shadow-lift hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & { href: string };

type Props = ButtonAsButton | ButtonAsLink;

/** Botón reutilizable. Si recibe `href` se renderiza como enlace. */
export function Button({ variant = "primary", size = "md", className, children, ...rest }: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest;
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
