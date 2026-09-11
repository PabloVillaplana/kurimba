"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/config/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cierra el menú con Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-bark/5 bg-cream/90 shadow-soft backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="container-k flex h-20 items-center justify-between" aria-label="Principal">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-300 hover:text-terracotta",
                  pathname === link.href ? "text-terracotta" : "text-bark/80",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={WHATSAPP_URL} size="md">
            Agendá tu cita
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex size-11 items-center justify-center rounded-full text-bark transition-colors hover:bg-sand lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={cn(
          "lg:hidden",
          "grid transition-[grid-template-rows,opacity] duration-400 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <ul className="container-k flex flex-col gap-1 pt-2 pb-8">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                className={cn(
                  "transition-all duration-500",
                  open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
                )}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 font-display text-2xl transition-colors hover:bg-sand hover:text-terracotta",
                    pathname === link.href ? "text-terracotta" : "text-bark",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 px-4">
              <Button
                href={WHATSAPP_URL}
                size="lg"
                className="w-full"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
              >
                Agendá tu cita
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
