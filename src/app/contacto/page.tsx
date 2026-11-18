import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE, wa } from "@/lib/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { GlowBackdrop } from "@/components/svg/Illustrations";
import { WhatsAppIcon } from "@/components/svg/Icons";

export const metadata: Metadata = {
  title: "Contacto | Tesis Universidad Perú - Asesoría Profesional",
  description:
    "En Tesis Universidad Perú. Te acompañamos desde el proyecto hasta la sustentación. Atención rápida y personalizada.",
  alternates: { canonical: "/contacto/" },
  openGraph: { url: "/contacto/" },
};

const CHANNELS = [
  { icon: MapPin, label: "Dirección", value: SITE.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}` },
  { icon: Phone, label: "Celular", value: SITE.phoneDisplay, href: SITE.phoneHref },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Clock, label: "Horario de atención", value: SITE.hours },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
        <GlowBackdrop />
        <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="enter inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
              Contacto
            </span>
            <h1 className="enter mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Asesoría para tu Tesis Universitaria en <span className="text-gradient">Perú</span>
            </h1>
            <p className="enter mt-6 text-pretty text-lg leading-relaxed text-ink-600">
              Contamos con expertos en investigación académica que te brindarán acompañamiento, orientación y asesoría personalizada
              durante todo el desarrollo de tu tesis, desde la elección del tema hasta la sustentación final. 🎓📚
            </p>

            <h2 className="enter mt-10 text-xl font-extrabold text-ink-900">Tesis Universidad Perú</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {CHANNELS.map(({ icon: Icon, label, value, href }, i) => {
                const body = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wider text-ink-400">{label}</span>
                      <span className="block break-words text-sm font-semibold text-ink-800">{value}</span>
                    </span>
                  </>
                );
                const cls = "group card-lift flex gap-3 rounded-3xl border border-ink-100 bg-white p-4 hover:border-brand-300";
                return (
                  <li key={label} className="enter" style={{ "--enter-delay": `${i * 70}ms` } as React.CSSProperties}>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
                        {body}
                      </a>
                    ) : (
                      <div className={cls}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="enter mt-6 flex items-center gap-4 rounded-3xl bg-[#25D366] p-5 text-white transition hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-10" />
              <span>
                <span className="block text-lg font-extrabold">Escríbenos por WhatsApp</span>
                <span className="block text-sm text-white/85">Respuesta inmediata • Asesor personalizado</span>
              </span>
            </a>
          </div>

          <div className="enter-zoom shadow-lift rounded-[2rem] border border-ink-100 bg-white p-6 sm:p-10" style={{ "--enter-delay": "120ms" } as React.CSSProperties}>
            <h2 className="text-2xl font-extrabold text-ink-900">Cuéntanos sobre tu tesis</h2>
            <p className="mt-2 text-sm text-ink-500">Un asesor especialista revisará tu caso y te responderá a la brevedad.</p>
            <div className="mt-8">
              <ContactForm variant="full" />
            </div>
          </div>
        </div>
      </section>

      <section className="cv-auto pb-20">
        <div className="container-x">
          <div className="reveal overflow-hidden rounded-[2rem] ring-1 ring-ink-100">
            <iframe
              title="Ubicación de Tesis Universidad Perú en Santiago de Surco"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
              className="h-[380px] w-full border-0 grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
