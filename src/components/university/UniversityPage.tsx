import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  FileCheck2,
  Lightbulb,
  Mic,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { Illustration, Section, University } from "@/lib/universities/types";
import { themeVars } from "@/lib/universities/theme";
import { WaButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  DefenseIllustration,
  GlowBackdrop,
  MatrixIllustration,
  SimilarityGauge,
  SummitIllustration,
  ThesisIllustration,
} from "@/components/svg/Illustrations";
import { Crest } from "@/components/svg/Crest";
import { ContactSection } from "@/components/sections/ContactSection";
import { ConclusionCta } from "@/components/sections/ConclusionCta";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";

const ICONS = [Compass, ShieldCheck, BarChart3, Mic, BookOpen, Scale, Users, Clock, Sparkles, FileCheck2];
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;
const enterDelay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as React.CSSProperties;

/** "Capítulo II · Desafíos": cada sección se presenta como un capítulo de tesis. */
const chapter = (n: number, label?: string) => `Capítulo ${ROMAN[n] ?? n + 1}${label ? ` · ${label}` : ""}`;

function Art({ kind, id }: { kind: Illustration; id: string }) {
  switch (kind) {
    case "matrix":
      return <MatrixIllustration className="w-full" />;
    case "defense":
      return <DefenseIllustration className="w-full" id={id} />;
    case "gauge":
      return (
        <div className="mx-auto max-w-xs rounded-3xl bg-white p-6 shadow-lift ring-1 ring-ink-100">
          <SimilarityGauge className="w-full" id={id} />
        </div>
      );
    case "summit":
      return <SummitIllustration className="w-full" id={id} />;
    default:
      return <ThesisIllustration className="w-full" id={id} />;
  }
}

export function UniversityPage({ u }: { u: University }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://tesisuniversidadperu.com/" },
      { "@type": "ListItem", position: 2, name: `Tesis ${u.short}`, item: `https://tesisuniversidadperu.com/${u.slug}/` },
    ],
  };

  const facts = [
    { label: "Fundación", value: String(u.facts.founded) },
    { label: "Sede", value: u.facts.city },
    { label: "Gestión", value: u.facts.type },
    { label: "Normativa", value: "APA 7 · Vancouver" },
  ];

  // Numeración de capítulos solo para secciones con título propio
  let chapterNo = 0;
  const numbered = u.sections.map((s) => (s.kind === "cta" || (s.kind === "gallery" && !s.title) ? -1 : chapterNo++));

  return (
    // La paleta institucional se aplica como variables CSS en este contenedor (no en :root):
    // así no "se filtra" a otras páginas que Next mantiene montadas en segundo plano.
    <div className="academic" style={themeVars(u.theme)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ---------------- HERO EDITORIAL ---------------- */}
      <section className="bg-paper relative overflow-hidden pt-20">
        {/* Banda institucional (masthead) */}
        <div className="relative bg-ink-900 text-white">
          <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
            <div className="flex items-center gap-3">
              <Crest initials={u.short} id={`mast-${u.slug}`} variant="mark" className="h-9 w-auto" />
              <span className="font-academic text-sm font-semibold tracking-[0.18em] uppercase">Programa de Asesoría · Tesis {u.short}</span>
            </div>
            <span className="font-academic text-xs tracking-[0.2em] text-white/70 uppercase">
              Est. {u.facts.founded} · {u.facts.city} · Universidad {u.facts.type}
            </span>
          </div>
          <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
        </div>

        <div className="container-x relative pb-16 pt-10 sm:pt-12">
          <nav aria-label="Ruta" className="enter mb-8 flex items-center gap-1 text-xs font-semibold text-ink-500">
            <Link href="/" className="hover:text-brand-600">Inicio</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-ink-900">Tesis {u.short}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-16">
            <div>
              <p className="enter font-academic text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">{u.name}</p>
              <h1 className="enter mt-4 text-balance text-4xl leading-[1.08] text-ink-900 sm:text-5xl lg:text-[3.4rem]" style={enterDelay(80)}>
                {u.hero.title}
              </h1>
              <div className="enter mt-6 flex items-center gap-3 text-gold-500" style={enterDelay(120)} aria-hidden="true">
                <span className="rule-double w-16" />
                <span className="size-1.5 rotate-45 bg-current" />
                <span className="rule-double w-16" />
              </div>
              {u.hero.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`enter mt-6 text-pretty text-[1.05rem] leading-relaxed text-ink-700 ${i === 0 ? "dropcap" : ""}`}
                  style={enterDelay(160 + i * 60)}
                >
                  {p}
                </p>
              ))}
              <div className="enter mt-9 flex flex-col gap-3 sm:flex-row" style={enterDelay(260)}>
                <WaButton message={u.hero.cta.message ?? u.message}>{u.hero.cta.label}</WaButton>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-ink-900/15 bg-white px-6 py-3.5 text-sm font-bold text-ink-900 transition hover:border-brand-500 hover:text-brand-600"
                >
                  Diagnóstico gratuito
                </a>
              </div>
            </div>

            {/* Imagen enmarcada (doble marco clásico) + emblema */}
            <figure className="enter-zoom relative" style={enterDelay(200)} data-anim="">
              <div className="relative border border-gold-500/60 p-2.5 sm:p-3">
                <div className="relative overflow-hidden shadow-lift">
                  <Image
                    src={u.hero.image.src}
                    alt={u.hero.image.alt}
                    width={1280}
                    height={720}
                    preload
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="aspect-[4/3.4] w-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
                </div>
              </div>
              <figcaption className="mt-3 text-center font-academic text-sm italic text-ink-500">
                {u.name} — {u.facts.city}, Perú
              </figcaption>
              <div className="absolute -left-6 -top-8 w-28 animate-float drop-shadow-xl sm:-left-10 sm:w-36">
                <Crest initials={u.short} year={u.facts.founded} id={`hero-${u.slug}`} className="w-full" />
              </div>
              <div className="absolute bottom-12 -right-4 hidden w-40 animate-float-slow sm:-right-8 rounded-2xl bg-white p-3 shadow-lift ring-1 ring-ink-100 sm:block">
                <SimilarityGauge value={12} className="w-full" id={`hero-g-${u.slug}`} />
              </div>
            </figure>
          </div>

          {/* Ficha académica */}
          <dl className="reveal-stagger mt-16 grid grid-cols-2 border-y border-ink-900/15 sm:grid-cols-4">
            {facts.map((f, i) => (
              <div key={f.label} className={`px-4 py-5 text-center ${i > 0 ? "sm:border-l sm:border-ink-900/15" : ""} ${i % 2 ? "border-l border-ink-900/15 sm:border-l" : ""}`}>
                <dt className="font-academic text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-500">{f.label}</dt>
                <dd className="mt-1 font-academic text-2xl font-semibold text-ink-900">{f.value}</dd>
              </div>
            ))}
          </dl>

          {u.hero.highlights && (
            <div className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-3">
              {u.hero.highlights.map((h, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div key={h.title} className="card-lift flex gap-4 border-t-[3px] border-t-brand-500 bg-white p-5 ring-1 ring-ink-900/10">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-academic text-lg font-semibold text-ink-900">{h.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink-500">{h.text}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <ContactSection university={u.short} />

      {u.sections.map((s, i) => (
        <SectionRenderer key={i} s={s} index={i} chapterIndex={numbered[i]} u={u} />
      ))}

      <ConclusionCta title={u.conclusion.title} text={u.conclusion.text} ctaMessage={u.message} />

      {u.testimonials && (
        <Testimonials
          eyebrow="Testimonios"
          title={u.testimonials.title}
          intro={u.testimonials.intro}
          items={u.testimonials.items}
          note={u.testimonials.note}
        />
      )}

      <FaqSection
        title={u.faq.title}
        intro={u.faq.intro}
        faqs={u.faq.items}
        ctaLabel={u.faq.ctaLabel}
        ctaMessage={u.message}
        ctaNote={u.faq.ctaNote}
      />
    </div>
  );
}

/** Emblema gigante como marca de agua en las secciones oscuras. */
function Watermark({ u, id }: { u: University; id: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 hidden w-[30rem] -translate-y-1/2 opacity-[0.06] lg:block">
      <Crest initials={u.short} year={u.facts.founded} id={id} className="w-full" />
    </div>
  );
}

function SectionRenderer({ s, index, chapterIndex, u }: { s: Section; index: number; chapterIndex: number; u: University }) {
  const id = `${u.slug}-s${index}`;
  const label = (e?: string) => (chapterIndex >= 0 ? chapter(chapterIndex, e) : e);

  if (s.kind === "features") {
    const cols = s.cols ?? 2;
    const grid = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";
    const dark = !!s.dark;
    return (
      <section className={`cv-auto relative overflow-hidden py-20 sm:py-24 ${dark ? "bg-ink-950" : index % 2 ? "bg-paper" : "bg-white"}`}>
        {dark && <GlowBackdrop dark />}
        {dark && <Watermark u={u} id={`${id}-wm`} />}
        <div className="container-x relative">
          <SectionHeading eyebrow={label(s.eyebrow)} title={s.title} intro={s.intro} tone={dark ? "dark" : "light"} />
          <div className={`mt-14 ${s.image ? "grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]" : ""}`}>
            {s.image && (
              <div className="reveal-left border border-gold-500/50 p-2 lg:sticky lg:top-28">
                <div className="overflow-hidden shadow-lift">
                  <Image src={s.image.src} alt={s.image.alt} width={1200} height={800} sizes="(min-width: 1024px) 520px, 100vw" className="scroll-zoom aspect-[4/3] w-full object-cover" />
                </div>
              </div>
            )}
            <div className={`grid gap-5 ${s.image ? "" : grid}`}>
              {s.items.map((it, i) => {
                const Icon = ICONS[(i + index) % ICONS.length];
                return (
                  <article
                    key={it.title}
                    className={`reveal card-lift group relative overflow-hidden p-7 ${
                      dark
                        ? "border-t-2 border-t-gold-500 bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.07]"
                        : "border-t-[3px] border-t-brand-500 bg-white ring-1 ring-ink-900/10"
                    }`}
                    style={delay((i % 4) * 80)}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`grid size-12 shrink-0 place-items-center rounded-full transition group-hover:scale-110 ${
                          dark ? "text-gold-400 ring-1 ring-gold-500/50" : "bg-brand-50 text-brand-600 ring-1 ring-brand-200"
                        }`}
                      >
                        {s.numbered ? (
                          <span className="font-academic text-base font-semibold">{ROMAN[i]}</span>
                        ) : (
                          <Icon className="size-5" />
                        )}
                      </span>
                      <div>
                        {it.tag && (
                          <span className={`font-academic text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-gold-400" : "text-brand-600"}`}>
                            {it.tag}
                          </span>
                        )}
                        <h3 className={`text-xl ${dark ? "text-white" : "text-ink-900"}`}>{it.title}</h3>
                        <p className={`mt-2 text-pretty text-sm leading-relaxed ${dark ? "text-white/70" : "text-ink-500"}`}>{it.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          {s.after?.map((p, i) => (
            <p key={i} className={`reveal mx-auto mt-8 max-w-3xl text-pretty text-center font-academic text-lg italic leading-relaxed ${dark ? "text-white/75" : "text-ink-600"}`}>
              {p}
            </p>
          ))}
          {s.cta && (
            <div className="reveal mt-10 flex flex-col items-center gap-3">
              <WaButton variant={dark ? "light" : "primary"} icon="arrow" message={s.cta.message ?? u.message}>
                {s.cta.label}
              </WaButton>
              {s.ctaNote && <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">{s.ctaNote}</p>}
            </div>
          )}
        </div>
      </section>
    );
  }

  if (s.kind === "prose") {
    const visual = s.image ? (
      <div className="border border-gold-500/50 p-2">
        <div className="overflow-hidden shadow-lift">
          <Image src={s.image.src} alt={s.image.alt} width={1200} height={800} sizes="(min-width: 1024px) 560px, 100vw" className="scroll-zoom aspect-[4/3] w-full object-cover" />
        </div>
      </div>
    ) : (
      <Art kind={s.illustration ?? "thesis"} id={id} />
    );
    return (
      <section className={`cv-auto py-20 sm:py-24 ${s.tinted ? "bg-paper" : "bg-white"}`}>
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={s.reverse ? "lg:order-2" : ""}>
            <SectionHeading align="left" eyebrow={label(s.eyebrow)} title={s.title} />
            {s.paragraphs.map((p, i) => (
              <p key={i} className={`reveal mt-5 text-pretty leading-relaxed text-ink-700 ${i === 0 ? "dropcap" : ""}`} style={delay(i * 50)}>
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b, i) => (
                  <li key={i} className="reveal flex gap-3 border-l-[3px] border-l-brand-500 bg-white p-4 text-sm font-medium leading-relaxed text-ink-700 ring-1 ring-ink-900/10" style={delay(i * 70)}>
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" /> {b}
                  </li>
                ))}
              </ul>
            )}
            {s.callouts?.map((c, i) => (
              <aside key={i} className="reveal mt-6 flex gap-4 border border-gold-500/50 bg-gold-300/10 p-5">
                <Lightbulb className="mt-0.5 size-6 shrink-0 text-gold-600" />
                <p className="text-pretty text-sm leading-relaxed text-ink-700">
                  <strong className="font-academic text-base text-ink-900">{c.label} </strong>
                  {c.text}
                </p>
              </aside>
            ))}
            {s.cta && (
              <WaButton className="reveal mt-8" icon="arrow" message={s.cta.message ?? u.message}>
                {s.cta.label}
              </WaButton>
            )}
          </div>
          <div className={s.reverse ? "reveal-left lg:order-1" : "reveal-right"} style={delay(150)}>
            {visual}
          </div>
        </div>
      </section>
    );
  }

  if (s.kind === "steps") {
    return (
      <section className="cv-auto relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <GlowBackdrop dark />
        <Watermark u={u} id={`${id}-wm`} />
        <div className="container-x relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" tone="dark" eyebrow={label(s.eyebrow ?? "Metodología")} title={s.title} intro={s.intro} />
            <div className="reveal mt-8 hidden rounded-3xl bg-white/[0.03] p-4 ring-1 ring-white/10 lg:block">
              <DefenseIllustration className="w-full" id={id} />
            </div>
          </div>
          <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-gradient-to-b before:from-gold-400 before:via-gold-600/60 before:to-transparent">
            {s.items.map((it, i) => (
              <li key={it.title} className="reveal-right relative flex gap-5" style={delay(i * 90)}>
                <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-ink-950 font-academic text-base font-semibold text-gold-400 ring-1 ring-gold-500/60">
                  {ROMAN[i]}
                </span>
                <div className="card-lift flex-1 border-t-2 border-t-gold-500/70 bg-white/[0.04] p-6 ring-1 ring-white/10 hover:bg-white/[0.07]">
                  <h3 className="text-xl text-white">{it.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-white/70">{it.text}</p>
                </div>
              </li>
            ))}
            {s.cta && (
              <li className="reveal pl-[4.25rem]">
                <WaButton variant="light" icon="arrow" message={s.cta.message ?? u.message}>
                  {s.cta.label}
                </WaButton>
              </li>
            )}
          </ol>
        </div>
      </section>
    );
  }

  if (s.kind === "cta") {
    return (
      <section className="py-12">
        <div className="container-x">
          <div className="reveal-zoom relative overflow-hidden bg-ink-900 p-8 text-center shadow-lift sm:p-12">
            <div aria-hidden="true" className="absolute inset-2 border border-gold-500/40" />
            <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-50" />
            <div className="relative mx-auto max-w-2xl">
              <Crest initials={u.short} id={`${id}-c`} variant="mark" className="mx-auto mb-5 h-14 w-auto" />
              <h2 className="text-balance text-3xl text-white sm:text-4xl">{s.title}</h2>
              <p className="mt-3 text-pretty font-academic text-lg italic text-white/80">{s.text}</p>
              <WaButton variant="light" className="mt-7" message={s.cta.message ?? u.message}>
                {s.cta.label}
              </WaButton>
              {s.note && <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold-300">{s.note}</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // gallery
  return (
    <section className="cv-auto py-12">
      <div className="container-x">
        {s.title && <SectionHeading eyebrow={label()} title={s.title} className="mb-10" />}
        <div className="grid gap-6 sm:grid-cols-2">
          {s.images.map((img, i) => (
            <figure key={img.src} className="reveal-zoom group" style={delay(i * 100)}>
              <div className="card-lift border border-gold-500/50 bg-white p-2">
                <div className="overflow-hidden">
                  <div className="scroll-zoom">
                    <Image src={img.src} alt={img.alt} width={1200} height={700} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>
              <figcaption className="mt-3 text-center font-academic text-sm italic text-ink-500">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
