"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type Fields = { nombre: string; correo: string; telefono: string; mensaje: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "success" | "error";

const initial: Fields = { nombre: "", correo: "", telefono: "", mensaje: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.nombre.trim().length < 2) errors.nombre = "Contanos tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.correo.trim())) {
    errors.correo = "Ingresá un correo válido.";
  }
  if (values.telefono && !/^[\d\s()+-]{8,20}$/.test(values.telefono.trim())) {
    errors.telefono = "Ingresá un número válido.";
  }
  if (values.mensaje.trim().length < 10) {
    errors.mensaje = "Contanos un poco más (mínimo 10 caracteres).";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: keyof Fields) => (value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  };

  const blur = (field: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ nombre: true, correo: true, telefono: true, mensaje: true });
    if (Object.keys(nextErrors).length > 0) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("sending");
    try {
      const honeypot = (form.elements.namedItem("sitio") as HTMLInputElement | null)?.value ?? "";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, sitio: honeypot }),
      });
      if (!res.ok) throw new Error("Respuesta no válida");
      setStatus("success");
      setValues(initial);
      setTouched({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-sage/60 bg-sage-light/60 p-10 text-center"
      >
        <CheckCircle2 className="size-12 text-forest" aria-hidden="true" />
        <h3 className="mt-5 font-display text-3xl font-medium text-bark">¡Gracias por escribirnos!</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-stone">
          Recibimos tu mensaje. Te respondemos lo antes posible. Si preferís, también podés
          escribirnos directo por WhatsApp.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href={WHATSAPP_URL} variant="whatsapp">
            Ir a WhatsApp
          </Button>
          <Button variant="secondary" onClick={() => setStatus("idle")}>
            Enviar otro mensaje
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[2rem] border border-clay/60 bg-linen/60 p-6 shadow-soft sm:p-9"
    >
      <h2 className="mb-6 font-display text-3xl font-medium text-bark">Dejanos un mensaje</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="nombre"
          label="Nombre"
          value={values.nombre}
          error={touched.nombre ? errors.nombre : undefined}
          onChange={update("nombre")}
          onBlur={blur("nombre")}
          autoComplete="name"
          required
        />
        <Field
          id="correo"
          label="Correo electrónico"
          type="email"
          value={values.correo}
          error={touched.correo ? errors.correo : undefined}
          onChange={update("correo")}
          onBlur={blur("correo")}
          autoComplete="email"
          required
        />
        <Field
          id="telefono"
          label="Teléfono (opcional)"
          type="tel"
          value={values.telefono}
          error={touched.telefono ? errors.telefono : undefined}
          onChange={update("telefono")}
          onBlur={blur("telefono")}
          autoComplete="tel"
          className="sm:col-span-2"
        />
        <Field
          id="mensaje"
          label="¿En qué te podemos acompañar?"
          value={values.mensaje}
          error={touched.mensaje ? errors.mensaje : undefined}
          onChange={update("mensaje")}
          onBlur={blur("mensaje")}
          textarea
          required
          className="sm:col-span-2"
        />
      </div>

      {/* Honeypot anti-spam: oculto para personas, visible para bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="sitio">No completar</label>
        <input id="sitio" name="sitio" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-xl bg-terracotta/10 px-4 py-3 text-sm text-terracotta-dark"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          No pudimos enviar tu mensaje. Intentá de nuevo o escribinos por WhatsApp.
        </p>
      ) : null}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </Button>
        <p className="text-xs text-stone">Respondemos en horario de atención.</p>
      </div>
    </form>
  );
}

/* ---------- Campo reutilizable ---------- */

type FieldProps = {
  id: keyof Fields;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  type?: "text" | "email" | "tel";
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
  className?: string;
};

function Field({
  id,
  label,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  textarea,
  required,
  autoComplete,
  className,
}: FieldProps) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: id,
    value,
    required,
    autoComplete,
    onBlur,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: cn(
      "w-full rounded-2xl border bg-cream px-4 py-3 text-sm text-bark placeholder:text-stone/60 transition-colors duration-300 focus:border-terracotta focus:outline-none",
      error ? "border-terracotta" : "border-clay hover:border-stone/60",
    ),
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-xs tracking-[0.18em] text-stone uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea
          {...shared}
          rows={5}
          onChange={(e) => onChange(e.target.value)}
          className={cn(shared.className, "resize-y")}
        />
      ) : (
        <input {...shared} type={type} onChange={(e) => onChange(e.target.value)} />
      )}
      {error ? (
        <p id={errorId} className="mt-1.5 flex items-center gap-1.5 text-xs text-terracotta-dark">
          <AlertCircle className="size-3.5" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
