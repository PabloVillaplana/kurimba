import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, MessageCircle, Tag } from "lucide-react";
import { brand, routes, sessions, whatsapp } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { iconMap } from "@/components/ui/icons";
import { FAQ } from "@/components/sections/FAQ";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";
import { SessionCard } from "@/components/sections/SessionCard";

const published = sessions.filter((s) => s.status === "available" && s.page);

function getSession(slug: string) {
  return published.find((s) => s.id === slug);
}

export function generateStaticParams() {
  return published.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/sesiones/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const session = getSession(slug);
  if (!session?.page) return {};
  return {
    title: session.page.seoTitle,
    description: session.page.seoDescription,
    alternates: { canonical: routes.session(session.id) },
    openGraph: {
      title: `${session.page.seoTitle} · ${brand.name}`,
      description: session.page.seoDescription,
      url: routes.session(session.id),
    },
  };
}

export default async function SessionPage({ params }: PageProps<"/sesiones/[slug]">) {
  const { slug } = await params;
  const session = getSession(slug);
  if (!session?.page) notFound();

  const { page } = session;
  const Icon = iconMap[session.icon];
  const whatsappUrl = buildWhatsAppUrl(whatsapp.sessionMessage(session.name));
  const others = published.filter((s) => s.id !== session.id);

  return (
    <>
      <PageHeader
        eyebrow="Sesión"
        title={session.name}
        text={session.description}
        crumbs={[{ label: "Sesiones", href: routes.sessions }, { label: session.name }]}
      >
        <dl className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-bark/80">
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-terracotta" aria-hidden="true" />
            <dt className="sr-only">Duración</dt>
            <dd>{session.duration}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="size-4 text-terracotta" aria-hidden="true" />
            <dt className="sr-only">Precio</dt>
            <dd>{session.price ?? "Consultá el precio"}</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href={whatsappUrl} size="lg">
            <MessageCircle className="size-4" aria-hidden="true" />
            Quiero agendar
          </Button>
          <Button href={routes.sessions} variant="secondary" size="lg">
            Ver otras sesiones
          </Button>
        </div>
      </PageHeader>

      {/* Descripción principal */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-k grid items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div className="space-y-12">
            <Reveal>
              <p className="font-display text-2xl leading-snug text-bark italic sm:text-3xl">
                {page.intro}
              </p>
            </Reveal>
            {page.sections.map((block, i) => (
              <Reveal key={block.title} delay={i * 80}>
                <h2 className="font-display text-3xl font-medium text-bark">{block.title}</h2>
                <p className="mt-3 leading-relaxed text-stone">{block.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-8 lg:sticky lg:top-28">
            <Reveal>
              <div className="relative aspect-[4/5] w-full max-w-md">
                <ImagePlaceholder fill shape="blob" tone="sage" hint={session.imageHint} />
                <span className="absolute top-4 left-4 flex size-12 items-center justify-center rounded-full bg-cream text-terracotta shadow-soft">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-clay/60 bg-linen/70 p-7">
                <h2 className="font-display text-2xl font-medium text-bark">Beneficios principales</h2>
                <ul className="mt-4 space-y-2.5">
                  {session.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-bark/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-sage-deep" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-stone">
                  Práctica complementaria de bienestar. No sustituye la atención médica o
                  psicológica profesional.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="texture-grain bg-sand py-20 sm:py-28">
        <div className="container-k">
          <Reveal>
            <h2 className="font-display text-4xl font-medium text-balance text-bark sm:text-5xl">
              ¿Para quién es esta sesión?
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {page.forWhom.map((item, i) => (
              <Reveal key={item} as="li" delay={i * 80}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-clay/60 bg-cream px-6 py-5">
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-bark/85">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks />

      <FAQ
        items={page.faqs}
        title={`Preguntas sobre ${session.name}`}
        text="Si tenés otra duda, escribinos por WhatsApp y con gusto te respondemos."
        id="preguntas-sesion"
      />

      {others.length > 0 ? (
        <section className="bg-linen py-20 sm:py-28">
          <div className="container-k">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="font-display text-4xl font-medium text-bark">
                  Otras sesiones que podés explorar
                </h2>
                <Button href={routes.sessions} variant="ghost">
                  Ver todas
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s, i) => (
                <Reveal key={s.id} as="li" delay={i * 100} className="h-full">
                  <SessionCard session={s} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CTA />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: session.name,
          description: session.page.seoDescription,
          url: `${brand.url}${routes.session(session.id)}`,
          serviceType: session.name,
          areaServed: { "@type": "Country", name: "Costa Rica" },
          provider: { "@type": "HealthAndBeautyBusiness", name: brand.name, url: brand.url },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
    </>
  );
}
