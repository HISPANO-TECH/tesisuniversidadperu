import Image from "next/image";
import type { Metadata } from "next";
import { Compass, Eye, FlaskConical, Landmark, Mic, ScanSearch, ShieldCheck, Target } from "lucide-react";
import { GENERAL_FAQ } from "@/lib/site";
import { WaButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowBackdrop, ThesisIllustration } from "@/components/svg/Illustrations";
import { ContactSection } from "@/components/sections/ContactSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Asesoría de Tesis Universidad Perú | Sobre Nosotros",
  description:
    "¿Necesitas asesoría de tesis universitaria en Perú? Especialistas en UNMSM, PUCP, UCV, UPC y más. ¡Consulta gratis!",
  alternates: { canonical: "/sobre-nosotros/" },
  openGraph: { url: "/sobre-nosotros/", images: [{ url: "/images/sobrenosotros.webp" }] },
};

const PILLARS = [
  { icon: Compass, n: "01", t: "Rigor Académico" },
  { icon: FlaskConical, n: "02", t: "Metodología Especializada" },
  { icon: ShieldCheck, n: "03", t: "Ética y Confidencialidad" },
];

const GUARANTEES = [
  { icon: Landmark, meta: "01 Institucional", title: "Alineamiento Estricto por Universidad", text: "Adaptamos cada fase de la investigación a las líneas de corte, esquemas específicos y reglamentos internos de tu casa de estudios, ya sea una institución nacional o privada." },
  { icon: FlaskConical, meta: "02 Metodología", title: "Sustento Estadístico y Analítico", text: "Procesamiento avanzado de datos cuantitativos y cualitativos mediante software especializado. Diseñamos matrices de consistencia sólidas que automatizan la coherencia de tu estudio." },
  { icon: ScanSearch, meta: "03 Originalidad", title: "Filtro de Similitud Riguroso", text: "Análisis preventivo de coincidencia textual utilizando los mismos estándares de los repositorios universitarios, asegurando una redacción original, fluida y con correcta citación formal." },
  { icon: Mic, meta: "04 Defensa", title: "Preparación para la Sustentación", text: "Capacitación estructurada en técnicas de exposición, manejo de preguntas complejas del jurado y dominio metodológico para que defiendas tu tesis con seguridad absoluta." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
        <GlowBackdrop />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div className="enter relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink-100">
              <Image
                src="/images/sobrenosotros.webp"
                alt="Equipo de asesores expertos en metodología de investigación"
                width={1533}
                height={846}
                preload
                sizes="(min-width: 1024px) 600px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <ul className="reveal-stagger mt-5 grid grid-cols-3 gap-3">
              {PILLARS.map(({ icon: Icon, n, t }) => (
                <li key={n} className="card-lift rounded-2xl border border-ink-100 bg-white p-4 text-center">
                  <Icon className="mx-auto size-6 text-brand-600" />
                  <span className="mt-2 block text-[10px] font-extrabold tracking-widest text-gold-600">{n}</span>
                  <span className="block text-xs font-bold leading-tight text-ink-800 sm:text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <span className="enter inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
              Sobre Nosotros
            </span>
            <h1 className="enter mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Acompañamiento Científico y <span className="font-serif italic text-brand-700">Docencia Universitaria</span>
            </h1>
            <p className="enter mt-6 text-pretty text-lg leading-relaxed text-ink-600">
              Somos un equipo multidisciplinario de investigadores, estadísticos y docentes de prestigio, unidos por el compromiso con el
              rigor científico y el éxito de los estudiantes universitarios del Perú.
            </p>
            <p className="enter mt-4 text-pretty leading-relaxed text-ink-500">
              Nuestra labor no se limita a la revisión; formamos un puente entre la complejidad metodológica y la claridad expositiva. Nos
              dedicamos a transformar ideas en proyectos de investigación que no solo cumplen con los estándares académicos más exigentes,
              sino que también reflejan la excelencia y el pensamiento crítico de cada tesista.
            </p>
            <WaButton className="enter mt-8">Conversa con un metodólogo</WaButton>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* MISIÓN Y VISIÓN */}
      <section className="cv-auto py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Propósito" title="Misión y Visión Académica" />
          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_0.8fr_1fr]">
            <article className="reveal-left card-lift rounded-[2rem] border border-ink-100 bg-white p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-white"><Target className="size-6" /></span>
              <h3 className="mt-5 text-xl font-extrabold text-ink-900">Nuestra Misión</h3>
              <p className="mt-3 text-pretty leading-relaxed text-ink-600">
                Garantizar la excelencia y el rigor metodológico en la investigación científica de los estudiantes universitarios del Perú,
                brindando un acompañamiento especializado, ético y personalizado que transforme sus propuestas en aportes significativos de
                alto valor académico.
              </p>
            </article>
            <div className="reveal-zoom hidden lg:block">
              <ThesisIllustration className="w-full" id="about-ill" />
            </div>
            <article className="reveal-right card-lift rounded-[2rem] bg-ink-900 p-8 text-white" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
              <span className="grid size-12 place-items-center rounded-2xl bg-gold-500 text-ink-950"><Eye className="size-6" /></span>
              <h3 className="mt-5 text-xl font-extrabold">Nuestra Visión</h3>
              <p className="mt-3 text-pretty leading-relaxed text-ink-200">
                Consolidarnos como la consultora de investigación de referencia en el país, reconocida por su integridad, solidez científica
                y por elevar los estándares de titulación universitaria, impulsando la producción de conocimiento con alcance internacional.
              </p>
            </article>
          </div>
          <blockquote className="reveal mx-auto mt-14 max-w-3xl text-center font-serif text-2xl italic leading-snug text-ink-800 sm:text-3xl">
            “<span className="text-gradient font-bold">Veritas et Scientia</span>: Formando los pilares de la investigación científica en el Perú.”
          </blockquote>
        </div>
      </section>

      {/* GARANTÍAS */}
      <section className="cv-auto relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <GlowBackdrop dark />
        <div className="container-x relative">
          <SectionHeading
            tone="dark"
            eyebrow="Garantías"
            title="Garantías de un Proceso de Alto Nivel"
            intro="Desarrollamos una metodología rigurosa adaptada a las exigencias específicas de cada institución del país, asegurando que tu proyecto supere los criterios del jurado evaluador."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GUARANTEES.map(({ icon: Icon, meta, title, text }, i) => (
              <article key={title} className="reveal card-lift rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 hover:bg-white/[0.07]" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
                <Icon className="size-8 text-brand-300" />
                <span className="mt-5 block text-[11px] font-bold uppercase tracking-[0.16em] text-gold-400">{meta}</span>
                <h3 className="mt-2 text-lg font-extrabold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        title="Testimonios de Egresados Titulados"
        intro="Experiencias reales de profesionales que lograron la aprobación de sus proyectos de grado e investigación científica en las principales escuelas de posgrado y facultades del país."
        items={[
          { quote: "Gracias a la asesoría metodológica logré levantar las observaciones del comité de ética de la Universidad Nacional Mayor de San Marcos (UNMSM). El desarrollo del marco teórico y el procesamiento de datos cuantitativos en SPSS fueron impecables. Un servicio de consultoría académica de primer nivel en el Perú.", name: "Ing. Carlos Mendoza", role: "Tesis de Posgrado — UNMSM" },
          { quote: "El acompañamiento en la redacción científica y la aplicación estricta de las normas APA 7 fueron determinantes para mi titulación en la Pontificia Universidad Católica del Perú (PUCP). Su riguroso filtro de similitud me dio la tranquilidad necesaria antes de enviar el proyecto al repositorio institucional.", name: "Mg. Elena Rostworowski", role: "Maestría en Educación — PUCP" },
          { quote: "Recomiendo totalmente su consultoría para ingeniería y ciencias de la salud. Me estructuraron una matriz de consistencia sólida y el análisis estadístico inferencial que exigía la Universidad César Vallejo (UCV). Superé la sustentación final ante el jurado evaluador sin contratiempos.", name: "Dra. Aníbal Vázquez", role: "Tesis Doctoral — UCV" },
        ]}
        note="Servicios de asesoría de tesis en Lima, Trujillo, Arequipa y todo el Perú. Especialistas en proyectos de investigación científica, planes de tesis, tesinas y artículos indexados para universidades públicas y privadas peruanas."
      />

      <FaqSection
        title="Preguntas frecuentes"
        intro="Todo lo que necesitas saber antes de contratar un asesor de tesis en Lima, Perú. Si no encuentras tu respuesta, escríbenos por WhatsApp."
        faqs={GENERAL_FAQ}
      />
    </>
  );
}
