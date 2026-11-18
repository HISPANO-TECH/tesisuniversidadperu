import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  FileText,
  Mic,
  PenLine,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  BookOpenCheck,
} from "lucide-react";
import { GENERAL_FAQ, UNIVERSITY_NAV, wa } from "@/lib/site";
import { UNIVERSITIES } from "@/lib/universities";
import { themeVars } from "@/lib/universities/theme";
import { Crest } from "@/components/svg/Crest";
import { WaButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroScene3D } from "@/components/three/HeroScene3D";
import { GlowBackdrop, MatrixIllustration, SimilarityGauge } from "@/components/svg/Illustrations";
import { ContactSection } from "@/components/sections/ContactSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Asesoría de Tesis Universidad Perú | 100% Online",
  description:
    "¿Necesitas asesoría de tesis universitaria en Perú? Especialistas en UNMSM, PUCP, UCV, UPC y más. ¡Consulta gratis!",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Asesoría de Tesis Universidad Perú | 100% Online",
    description: "¿Necesitas asesoría de tesis universitaria en Perú? Especialistas en UNMSM, PUCP, UCV, UPC y más. ¡Consulta gratis!",
    url: "/",
  },
};

const STATS = [
  { value: "+800", label: "Tesis Sustentadas" },
  { value: "0%", label: "Plagio / Turnitin" },
  { value: "Riguroso", label: "Filtro Científico" },
  { value: "100%", label: "Privacidad Garantizada" },
];

const UNIVERSITY_CARDS = [
  { badge: "Protocolo de Similitud Coherente", text: "Asesoría integral adaptada a las exigencias de la Universidad César Vallejo. Control estricto de Turnitin <20%, estructuración rigurosa de la matriz de consistencia y preparación metodológica avanzada para la sustentación." },
  { badge: "Estándar de Alto Rigor Académico", text: "Acompañamiento bajo los exigentes lineamientos de la Pontificia Universidad Católica del Perú. Consistencia epistemológica y argumentación teórica blindada para la incorporación exitosa al repositorio institucional." },
  { badge: "Rúbrica de Taller Complejo", text: "Orientación para superar los talleres de investigación de la Universidad Peruana de Ciencias Aplicadas. Desarrollo analítico con soporte en software cuantitativo." },
  { badge: "Estructuración Modular Eficiente", text: "Asesoría enfocada en los esquemas metodológicos de la Universidad Tecnológica del Perú. Alineación sistemática con las plataformas de evaluación y rúbricas de titulación." },
  { badge: "Validación Científica / Decana", text: "Enfoque epistemológico y metodológico idóneo para la Universidad Nacional Mayor de San Marcos. Normalización precisa bajo formatos internacionales para su indexación en el SISBIB." },
  { badge: "Alineación Operativa y Formal", text: "Estructuración metodológica para la Universidad de San Martín de Porres. Formateo normativo riguroso de acuerdo con los manuales internos vigentes de cada facultad académica." },
  { badge: "Perspectiva Estratégica Global", text: "Desarrollo de proyectos de tesis para la Universidad San Ignacio de Loyola. Rigor técnico y selección de literatura científica indexada de alto impacto internacional." },
  { badge: "Sello e Identidad Regional", text: "Soporte metodológico especializado para la Universidad Nacional de San Agustín de Arequipa. Levantamiento de dictámenes y optimización fina frente al reglamento antiplagio." },
];

const STAGES = [
  { icon: ClipboardList, n: "01", tag: "Etapa inicial", title: "Plan de Tesis", text: "Título, problema, objetivos, hipótesis y matriz de consistencia. Aprobación del asesor en 15 días hábiles." },
  { icon: BarChart3, n: "02", tag: "Investigación", title: "Metodología", text: "Diseño cuantitativo, cualitativo o mixto. Manejo de SPSS, Atlas.ti y análisis estadístico avanzado." },
  { icon: ShieldCheck, n: "03", tag: "Originalidad", title: "Control Turnitin", text: "Reducción de similitud, parafraseo experto y citas bajo APA 7ma edición. Garantizamos menos del 20%." },
  { icon: PenLine, n: "04", tag: "Desarrollo", title: "Redacción Académica", text: "Marco teórico, antecedentes, resultados y discusión. Coherencia argumentativa y normas Vancouver si aplica." },
  { icon: Mic, n: "05", tag: "Defensa", title: "Preparación Sustentación", text: "Simulacros de preguntas del jurado, diapositivas profesionales y técnicas de oratoria académica." },
  { icon: RefreshCcw, n: "06", tag: "Rescate", title: "Levantamiento Observaciones", text: "¿Rechazaron tu tesis? Corregimos observaciones del asesor o jurado con precisión y rapidez." },
];

const PROTOCOL = [
  { icon: Stethoscope, title: "Consulta Diagnóstica", text: "Evaluamos rigurosamente el estado situacional de tu manuscrito o idea de investigación. Trazamos un plan de acción personalizado alineado a las líneas de investigación prioritarias exigidas por tu facultad." },
  { icon: UserCheck, title: "Consultor Certificado", text: "Te vinculamos con un especialista en tu rama científica y universidad de origen. Un experto con dominio absoluto del manual de citación vigente (Normas APA 7ma Edición o Vancouver) y esquemas institucionales." },
  { icon: FileText, title: "Desarrollo Epistemológico", text: "Redacción y revisión modular de cada sección del documento (desde la matriz de consistencia hasta la discusión). Cada avance incluye control técnico y un reporte de originalidad de Turnitin." },
  { icon: BookOpenCheck, title: "Validación de Defensa", text: "Simulacros intensivos frente a jurados internos de alto nivel. Garantizamos un índice de similitud bajo el 20%, el dominio analítico de la data de campo y la solvencia teórica requerida para asegurar tu título profesional o grado académico." },
];

const TESTIMONIALS = [
  { quote: "El nivel técnico del equipo superó mis expectativas. Mi proyecto de titulación requería un análisis estadístico avanzado con SPSS y un procesamiento cuantitativo muy estricto. No solo estructuraron la matriz de consistencia con total claridad, sino que el filtro final garantizó un 0% de plagio en Turnitin. La simulación de preguntas del jurado fue clave para obtener la máxima calificación en mi facultad.", name: "Ing. Carlos Mendoza", role: "Tesis de Pregrado Aprobada • Universidad Nacional Mayor de San Marcos (UNMSM)" },
  { quote: "Estaba estancada en el taller de investigación debido a las constantes observaciones formales. Gracias a su asesoría especializada logré adaptar todo el marco teórico y los antecedentes bajo la estricta normativa APA 7ma edición. Excelente servicio, total transparencia y confidencialidad en cada entrega modular.", name: "Lic. Milagros Ramos", role: "Tesis de Licenciatura • Pontificia Universidad Católica del Perú (PUCP)" },
  { quote: "Mi asesor de la universidad rechazó mis avances por problemas metodológicos en el diseño mixto. El equipo multidisciplinario realizó un levantamiento de observaciones rápido y preciso, estructurando el enfoque cualitativo a la perfección.", name: "Mag. Alejandro Silva", role: "Tesis de Posgrado • Universidad de San Martín de Porres (USMP)" },
  { quote: "La rigurosidad técnica que exigen para el desarrollo y la redacción académica es sobresaliente. Me acompañaron paso a paso desde el Plan de Tesis inicial hasta los simulacros finales de oratoria académica. Logré mi titulación profesional con la tranquilidad de dominar por completo cada hipótesis y resultado de mi investigación ante el jurado evaluador.", name: "Ing. Diana Chang", role: "Título Profesional Asegurado • Universidad Peruana de Ciencias Aplicadas (UPC)" },
  { quote: "Excelente servicio de asesoría para mi tesis de maestría en la PUCP. Cumplieron con los plazos y el porcentaje de Turnitin fue solo del 12%. Totalmente recomendados.", name: "María Fernanda López", role: "Maestría · PUCP · 2026", badge: "Turnitin 12%" },
  { quote: "Me prepararon perfectamente para la sustentación. Las diapositivas y el simulacro del jurado fueron clave para aprobar mi tesis de pregrado en la UNMSM.", name: "Carlos Mendoza", role: "Pregrado · UNMSM · 2026" },
  { quote: "Muy buena asesoría para el plan de tesis. El asesor conocía perfectamente el reglamento de la UPC. El resultado fue excelente.", name: "Ana Lucía Vega", role: "Pregrado · UPC · 2026" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24">
        <GlowBackdrop />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="enter inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-500" />
              </span>
              Asesoría 100% online · Todo el Perú
            </span>
            <h1 className="enter mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl" style={{ "--enter-delay": "80ms" } as React.CSSProperties}>
              Asesoría de Tesis y Acompañamiento <span className="text-gradient">Metodológico</span>{" "}
              <span className="font-serif font-semibold italic">Especializado</span>
            </h1>
            <p className="enter mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-600 sm:text-lg" style={{ "--enter-delay": "160ms" } as React.CSSProperties}>
              Estructuramos y validamos proyectos de investigación académica bajo los más altos estándares epistemológicos. Nuestro
              equipo domina la aplicación rigurosa de la normativa APA 7, metodologías científicas y análisis estadísticos avanzados
              (SPSS y R) adaptados a las exigencias de titulación de cada universidad del país.
            </p>
            <div className="enter mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--enter-delay": "240ms" } as React.CSSProperties}>
              <WaButton message="Hola quiero consultar con tu asesor en tesis universidad Perú">Iniciar Consultoría Académica</WaButton>
              <WaButton
                variant="ghost"
                icon="arrow"
                message="Hola, quiero información sobre la metodología de trabajo para tesis universitaria en Perú."
              >
                Líneas de Investigación
              </WaButton>
            </div>

            <dl className="enter mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ "--enter-delay": "320ms" } as React.CSSProperties}>
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                  <dt className="text-xs font-semibold text-ink-500">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-extrabold text-ink-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroScene3D className="enter-zoom aspect-square w-full max-w-xl justify-self-center lg:aspect-[4/4.2]" />
        </div>
      </section>

      {/* ---------------- MARQUEE UNIVERSIDADES ---------------- */}
      <div className="border-y border-ink-100 bg-ink-50/70 py-5" aria-label="Universidades que atendemos">
        <div data-anim="" className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-4 pr-4">
            {[...UNIVERSITY_NAV, ...UNIVERSITY_NAV].map((u, i) => (
              <Link
                key={i}
                href={u.href}
                className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink-700 ring-1 ring-ink-100 transition hover:text-brand-700 hover:ring-brand-300"
                tabIndex={i >= UNIVERSITY_NAV.length ? -1 : undefined}
                aria-hidden={i >= UNIVERSITY_NAV.length ? true : undefined}
              >
                <span className="size-1.5 rounded-full bg-brand-500" /> {u.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- SHOWCASE ---------------- */}
      <section className="cv-auto py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left relative" data-anim="">
            <div className="overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink-100">
              <Image
                src="/images/inicio1.webp"
                alt="Consultoría metodológica de tesis y proyectos de grado universitarios en Perú"
                width={1280}
                height={715}
                sizes="(min-width: 1024px) 600px, 100vw"
                className="scroll-zoom aspect-[4/3] w-full object-cover"
                              />
            </div>
            <div className="absolute -bottom-8 -right-2 w-48 animate-float rounded-3xl bg-white p-4 shadow-2xl ring-1 ring-ink-100 sm:-right-6 sm:w-56">
              <SimilarityGauge value={12} className="w-full" />
              <p className="text-center text-xs font-bold text-ink-500">Reporte Turnitin oficial</p>
            </div>
            <div className="absolute -left-3 -top-5 flex animate-float-slow items-center gap-3 rounded-2xl bg-ink-900 px-4 py-3 text-white shadow-xl sm:-left-6">
              <ShieldCheck className="size-6 text-brand-300" />
              <span className="text-sm font-bold leading-tight">Tesis<br />aprobada</span>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Lo que hacemos"
              title="Lo que hacemos por tu investigación"
              intro="Un equipo multidisciplinario que cubre todas las etapas de tu tesis universitaria: planificación, metodología, análisis estadístico, control Turnitin, redacción académica y preparación para sustentación."
            />
            <p className="reveal mt-4 text-pretty leading-relaxed text-ink-500">
              Brindamos asesoría especializada para estudiantes de universidades del Perú como UNMSM, UNI, PUCP, USMP, UCV, UPN y más.
            </p>
            <div className="reveal-zoom mt-8 rounded-3xl border border-ink-100 bg-ink-50 p-4 shadow-soft">
              <MatrixIllustration className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- UNIVERSIDADES ---------------- */}
      <section id="universidades" className="cv-auto relative bg-ink-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Universidades"
            title="Asesoría para tu universidad"
            intro="Estructuramos metodologías de investigación personalizadas que responden con exactitud al marco normativo, los criterios epistemológicos y las rúbricas de evaluación de las principales escuelas de pregrado y posgrado del país."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {UNIVERSITY_NAV.map((u, i) => {
              const uni = UNIVERSITIES.find((x) => `/${x.slug}/` === u.href)!;
              return (
                <Link
                  key={u.href}
                  href={u.href}
                  // Cada tarjeta se tiñe con los colores institucionales de su universidad
                  style={{ ...themeVars(uni.theme), "--reveal-delay": `${(i % 4) * 70}ms` } as React.CSSProperties}
                  className="reveal card-lift group relative flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white hover:border-brand-300"
                >
                  <div className="relative flex items-center gap-3 overflow-hidden bg-ink-900 px-5 py-4">
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900 to-brand-600 opacity-90" />
                    <Crest initials={uni.short} id={`home-${uni.slug}`} variant="mark" className="relative h-11 w-auto transition duration-500 group-hover:scale-110" />
                    <span className="relative leading-tight">
                      <span className="block font-academic text-lg font-semibold text-white">{u.label}</span>
                      <span className="block font-academic text-[11px] uppercase tracking-[0.2em] text-gold-300">
                        Est. {uni.facts.founded} · {uni.facts.city}
                      </span>
                    </span>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-600">{UNIVERSITY_CARDS[i].badge}</span>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{UNIVERSITY_CARDS[i].text}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                      Examinar Programa <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- 6 ETAPAS ---------------- */}
      <section className="cv-auto py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Proceso de investigación"
            title="Lo que hacemos por tu tesis universitaria"
            intro="Un flujo de trabajo estructurado en 6 etapas para que apruebes tu investigación en universidades peruanas: UNMSM, UNI, PUCP, UNAC, USMP y más."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STAGES.map(({ icon: Icon, n, tag, title, text }, i) => (
              <article
                key={n}
                className="reveal card-lift group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 hover:border-brand-200"
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
              >
                <span aria-hidden="true" className="absolute -right-2 -top-6 font-serif text-8xl font-bold italic text-ink-50 transition group-hover:text-brand-50">
                  {n}
                </span>
                <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-lg shadow-brand-500/30 transition group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="size-6" />
                </span>
                <h3 className="relative mt-5 text-lg font-extrabold text-ink-900">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
                <span className="relative mt-5 inline-block rounded-full bg-ink-50 px-3 py-1 text-xs font-bold text-ink-600">{tag}</span>
              </article>
            ))}
          </div>
          <p className="reveal mt-10 text-center font-semibold text-ink-700">
            ¿En qué etapa de tu tesis te encuentras?{" "}
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-700 underline decoration-2 underline-offset-4 hover:text-brand-600">
              Hablemos ahora →
            </a>
          </p>
        </div>
      </section>

      {/* ---------------- PROTOCOLO (timeline) ---------------- */}
      <section className="cv-auto relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <GlowBackdrop dark />
        <div className="container-x relative">
          <SectionHeading
            tone="dark"
            eyebrow="Protocolo sistemático"
            title="Estructura del Servicio de Asesoría Metodológica"
            intro="Un protocolo sistemático diseñado para garantizar la consistencia teórica, el rigor estadístico y la aprobación formal de tesis de pregrado y posgrado frente a las comisiones evaluadoras más exigentes del país."
          />
          <ol className="relative mt-16 grid gap-6 lg:grid-cols-4">
            {/* Línea animada que conecta los pasos (escritorio) */}
            <svg data-anim="" aria-hidden="true" className="absolute left-0 top-7 hidden h-4 w-full lg:block" viewBox="0 0 1000 16" preserveAspectRatio="none">
              <path d="M60 8 H940" stroke="#2c3548" strokeWidth="2" />
              <path d="M60 8 H940" stroke="#1fd3e8" strokeWidth="2" className="dash-flow" />
            </svg>
            {PROTOCOL.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="reveal-zoom relative" style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}>
                <div className="relative mx-auto grid size-14 place-items-center rounded-2xl bg-ink-900 text-brand-300 ring-1 ring-brand-500/40 lg:mx-0">
                  <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-gold-500 text-[11px] font-extrabold text-ink-950">{i + 1}</span>
                  <Icon className="size-6" />
                </div>
                <div className="mt-6 rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition hover:bg-white/[0.07]">
                  <h3 className="text-lg font-extrabold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="reveal mt-12 flex justify-center">
            <WaButton variant="light" icon="arrow">Establecer Plan de Acción Técnico</WaButton>
          </div>
        </div>
      </section>

      <Testimonials
        title="Testimonios de Investigaciones Sustentadas"
        intro="La experiencia de graduados de escuelas de pregrado y posgrado que validaron sus proyectos de grado bajo nuestro ecosistema de consultoría técnica y rigor metodológico."
        items={TESTIMONIALS}
        note="Más de 120 tesis aprobadas en universidades de Lima y todo el Perú."
      />

      <ContactSection />

      <FaqSection
        title="Preguntas frecuentes"
        intro="Todo lo que necesitas saber antes de contratar un asesor de tesis en Lima, Perú. Si no encuentras tu respuesta, escríbenos por WhatsApp."
        faqs={GENERAL_FAQ}
      />
    </>
  );
}
