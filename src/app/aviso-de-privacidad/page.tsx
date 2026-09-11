import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { brand, contact, routes } from "@/config/site";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Aviso de privacidad",
  description: `Cómo ${brand.name} utiliza y protege los datos que compartís al escribirnos o agendar una sesión de bienestar.`,
  path: routes.privacy,
});

/**
 * Texto base editable. [PENDIENTE] Revisar con asesoría legal si se requiere
 * y ajustar a la Ley 8968 de Protección de la Persona frente al Tratamiento
 * de sus Datos Personales (Costa Rica).
 */
const sections = [
  {
    title: "Qué datos recopilamos",
    text: "Cuando nos escribís por WhatsApp, Instagram, correo o el formulario del sitio, podemos recibir tu nombre, número de teléfono, correo electrónico y el contenido de tu mensaje.",
  },
  {
    title: "Para qué los usamos",
    text: "Usamos tus datos únicamente para responder tu consulta, coordinar tu cita y, si lo autorizás, enviarte recordatorios o información sobre nuevas sesiones.",
  },
  {
    title: "Con quién los compartimos",
    text: "No vendemos ni compartimos tus datos con terceros. Solo utilizamos herramientas necesarias para operar el sitio y la comunicación (por ejemplo, el servicio de alojamiento web y WhatsApp), que tratan los datos según sus propias políticas.",
  },
  {
    title: "Cuánto tiempo los conservamos",
    text: "Conservamos tus datos mientras exista una relación de comunicación activa o hasta que nos pidás eliminarlos.",
  },
  {
    title: "Tus derechos",
    text: `Podés solicitar el acceso, la corrección o la eliminación de tus datos en cualquier momento escribiéndonos a ${contact.email}.`,
  },
  {
    title: "Cookies",
    text: "Este sitio no utiliza cookies de seguimiento publicitario. Puede usar cookies técnicas mínimas necesarias para su funcionamiento.",
  },
];

export default function PrivacyPage() {
  const updated = "10 de setiembre de 2026"; // [PENDIENTE] actualizar cuando cambie el texto

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Aviso de privacidad"
        text={`En ${brand.name} cuidamos tu información con el mismo respeto con el que cuidamos tu bienestar. Última actualización: ${updated}.`}
        crumbs={[{ label: "Aviso de privacidad" }]}
      />
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-k max-w-3xl space-y-10">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="font-display text-3xl font-medium text-bark">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-stone">{s.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
