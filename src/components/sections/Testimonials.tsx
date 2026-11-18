import { BadgeCheck, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type Testimonial = { quote: string; name: string; role: string; badge?: string };

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: Testimonial[];
  note?: string;
};

function initials(name: string) {
  return name
    .replace(/^(Ing\.|Lic\.|Mag\.|Mg\.|Dr\.|Dra\.|Abog\.)\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function Testimonials({ eyebrow = "Casos de éxito", title, intro, items, note }: Props) {
  return (
    <section className="cv-auto relative overflow-hidden bg-white py-20 sm:py-24">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((t, i) => (
            <figure
              key={t.name + i}
              className="reveal card-lift relative break-inside-avoid rounded-3xl border border-ink-100 bg-gradient-to-b from-white to-ink-50 p-7 hover:border-brand-200"
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
            >
              <Quote aria-hidden="true" className="absolute right-6 top-6 size-10 text-brand-100" />
              <div className="flex gap-0.5 text-gold-500" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-pretty leading-relaxed text-ink-700">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-extrabold text-white">
                  {initials(t.name)}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-ink-900">{t.name}</span>
                  <span className="block text-xs leading-snug text-ink-500">{t.role}</span>
                </span>
              </figcaption>
              {t.badge && (
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                  <BadgeCheck className="size-3.5" /> {t.badge}
                </span>
              )}
            </figure>
          ))}
        </div>
        {note && <p className="reveal mx-auto mt-6 max-w-3xl text-center text-sm italic text-ink-400">{note}</p>}
      </div>
    </section>
  );
}
