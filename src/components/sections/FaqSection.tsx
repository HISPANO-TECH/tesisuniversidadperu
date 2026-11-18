import Image from "next/image";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaButton } from "@/components/ui/Button";

export type Faq = { q: string; a: string; image?: string; imageAlt?: string };

type Props = {
  title: string;
  intro?: string;
  faqs: Faq[];
  ctaLabel?: string;
  ctaMessage?: string;
  ctaNote?: string;
};

/** Acordeón nativo con <details>: accesible y sin JavaScript. Incluye JSON-LD FAQPage. */
export function FaqSection({ title, intro, faqs, ctaLabel = "Resolver mis dudas por WhatsApp", ctaMessage, ctaNote = "Respuesta inmediata • Asesor personalizado" }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="preguntas" className="cv-auto bg-ink-50 py-20 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-x">
        <SectionHeading eyebrow="Preguntas frecuentes" title={title} intro={intro} />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="reveal group rounded-3xl border border-ink-100 bg-white shadow-soft transition-shadow"
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              open={i === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left font-bold text-ink-900 sm:p-6">
                <span className="text-pretty">{f.q}</span>
                <span className="faq-icon grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-300">
                  <Plus className="size-5" />
                </span>
              </summary>
              <div className="px-5 pb-6 sm:px-6">
                {f.image && (
                  <Image
                    src={f.image}
                    alt={f.imageAlt ?? f.q}
                    width={960}
                    height={536}
                    className="mb-4 aspect-[16/9] w-full rounded-2xl object-cover"
                    sizes="(min-width: 768px) 720px, 100vw"
                  />
                )}
                <p className="text-pretty leading-relaxed text-ink-600">{f.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="reveal-zoom shadow-lift mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 rounded-3xl bg-ink-900 p-8 text-center">
          <p className="text-lg font-bold text-white">¿Tienes otra duda sobre tu tesis universitaria?</p>
          <WaButton variant="whatsapp" message={ctaMessage}>{ctaLabel}</WaButton>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">{ctaNote}</p>
        </div>
      </div>
    </section>
  );
}
