import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <section id="introduccion" className="bg-cream py-24 sm:py-32">
      <div className="container-k">
        <Reveal>
          <SectionHeading
            eyebrow="Bienvenida"
            title="Un espacio creado para vos"
            text="En medio del ritmo de todos los días, muchas veces dejamos nuestro bienestar en segundo plano. Kurimba nace como un espacio para hacer una pausa, escucharte y reconectar con vos. A través de diferentes sesiones y experiencias holísticas, te acompañamos a encontrar mayor calma, equilibrio y bienestar."
          />
        </Reveal>

        <Reveal delay={150}>
          <ul className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              { word: "Pausar", text: "Detenerte un momento y respirar sin prisa." },
              { word: "Escucharte", text: "Reconocer cómo estás y qué necesitás hoy." },
              { word: "Reconectar", text: "Volver a vos con más calma y claridad." },
            ].map((item) => (
              <li
                key={item.word}
                className="rounded-3xl border border-clay/60 bg-linen/60 px-6 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="font-display text-3xl text-terracotta italic">{item.word}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
