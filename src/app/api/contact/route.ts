import { NextResponse } from "next/server";

/**
 * Endpoint del formulario de contacto.
 *
 * Valida los datos y, por ahora, los registra en la consola del servidor.
 * [PENDIENTE] Conectar con un proveedor de correo (Resend, SendGrid, Nodemailer)
 * o guardar en una base de datos. El punto de integración está marcado abajo.
 */

type Payload = {
  nombre?: string;
  correo?: string;
  telefono?: string;
  mensaje?: string;
  sitio?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud no válida." }, { status: 400 });
  }

  // Honeypot: si un bot lo completó, respondemos OK sin hacer nada.
  if (body.sitio) {
    return NextResponse.json({ ok: true });
  }

  const nombre = body.nombre?.trim() ?? "";
  const correo = body.correo?.trim() ?? "";
  const telefono = body.telefono?.trim() ?? "";
  const mensaje = body.mensaje?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (nombre.length < 2) errors.nombre = "Contanos tu nombre.";
  if (!EMAIL_RE.test(correo)) errors.correo = "Ingresá un correo válido.";
  if (mensaje.length < 10) errors.mensaje = "Contanos un poco más.";
  if (mensaje.length > 2000) errors.mensaje = "El mensaje es demasiado largo.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // [PENDIENTE] Integración de envío de correo. Ejemplo con Resend:
  // await resend.emails.send({ from: "...", to: contact.email, subject: `Mensaje de ${nombre}`, text: mensaje });
  console.info("[Kurimba] Nuevo mensaje de contacto", { nombre, correo, telefono, mensaje });

  return NextResponse.json({ ok: true });
}
