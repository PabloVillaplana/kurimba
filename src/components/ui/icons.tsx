import {
  Compass,
  Feather,
  Hand,
  Heart,
  Leaf,
  PauseCircle,
  Sparkles,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { BenefitIcon, SessionIcon } from "@/config/site";

/** Mapa de nombres (usados en la configuración) a íconos de Lucide. */
export const iconMap: Record<SessionIcon | BenefitIcon, LucideIcon> = {
  hands: Hand,
  sparkles: Sparkles,
  leaf: Leaf,
  wind: Wind,
  heart: Heart,
  feather: Feather,
  waves: Waves,
  pause: PauseCircle,
  compass: Compass,
};

/** Ícono de Instagram (lucide-react ya no incluye íconos de marcas). */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
