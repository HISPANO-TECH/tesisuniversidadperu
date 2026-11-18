import { Clock, Lock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { GlowBackdrop } from "@/components/svg/Illustrations";

export function ContactSection({ university }: { university?: string }) {
  return (
    <section id="contacto" className="cv-auto relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      <GlowBackdrop dark />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal-left">
          <span data-eyebrow="" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-300 ring-1 ring-white/15">
            <span className="size-1.5 rounded-full bg-brand-300" /> Contáctanos
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Escríbenos ahora y estaremos en contacto <span className="font-serif italic text-brand-300">contigo</span>
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-ink-300 sm:text-lg">
            Nuestro equipo de asesores especialistas te acompaña paso a paso según tu avance, garantizando claridad metodológica y
            rigurosidad técnica. Desarrolla la confianza necesaria para sustentar con éxito tu investigación y alcanzar tus metas
            académicas con excelencia.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: MessageCircle, t: "Respuesta inmediata" },
              { icon: Lock, t: "100% confidencial" },
              { icon: Clock, t: "8:00 a.m. – 8:00 p.m." },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-center gap-2.5 rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10">
                <Icon className="size-4 text-brand-300" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-right rounded-[2rem] bg-white/[0.04] shadow-glow p-6 ring-1 ring-white/10 sm:p-8" style={{ "--reveal-delay": "150ms" } as React.CSSProperties}>
          <h3 className="mb-6 text-xl font-extrabold text-white">Solicita tu diagnóstico gratuito</h3>
          <ContactForm university={university} tone="dark" />
        </div>
      </div>
    </section>
  );
}
