import { WaButton } from "@/components/ui/Button";
import { SummitIllustration } from "@/components/svg/Illustrations";

type Props = {
  title?: string;
  text: string;
  ctaLabel?: string;
  ctaMessage?: string;
};

/** Cierre de cada landing: "lo que hoy parece una montaña..." ilustrado con un SVG animado. */
export function ConclusionCta({
  title = "Conclusión: Tu futuro profesional empieza aquí",
  text,
  ctaLabel = "¡Estamos listos para empezar!",
  ctaMessage,
}: Props) {
  return (
    <section className="cv-auto py-20 sm:py-24">
      <div className="container-x">
        <div className="reveal-zoom shadow-lift relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-50 via-white to-gold-300/20 p-8 ring-1 ring-brand-100 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">{title}</h2>
            <p className="mt-5 text-pretty leading-relaxed text-ink-600 sm:text-lg">{text}</p>
            <WaButton variant="whatsapp" message={ctaMessage} className="mt-8">
              {ctaLabel}
            </WaButton>
          </div>
          <SummitIllustration className="w-full rounded-[28px] shadow-lift" />
        </div>
      </div>
    </section>
  );
}
