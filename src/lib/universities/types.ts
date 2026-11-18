import type { Faq } from "@/components/sections/FaqSection";
import type { Testimonial } from "@/components/sections/Testimonials";
import type { UniTheme } from "./theme";

export type Cta = { label: string; message?: string };
export type Img = { src: string; alt: string };
export type Item = { title: string; text: string; tag?: string };
export type Illustration = "matrix" | "defense" | "thesis" | "gauge" | "summit";

export type Section =
  | {
      kind: "features";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: Item[];
      cols?: 2 | 3 | 4;
      numbered?: boolean;
      dark?: boolean;
      image?: Img;
      after?: string[];
      cta?: Cta;
      ctaNote?: string;
    }
  | {
      kind: "prose";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
      image?: Img;
      illustration?: Illustration;
      bullets?: string[];
      callouts?: { label: string; text: string }[];
      cta?: Cta;
      reverse?: boolean;
      tinted?: boolean;
    }
  | {
      kind: "steps";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: Item[];
      cta?: Cta;
    }
  | {
      kind: "cta";
      title: string;
      text: string;
      cta: Cta;
      note?: string;
    }
  | {
      kind: "gallery";
      title?: string;
      images: Img[];
    };

export type University = {
  slug: string;
  short: string;
  name: string;
  /** Colores institucionales (tomados de la paleta que usaba cada página original). */
  theme: UniTheme;
  /** Datos de la ficha académica del encabezado. */
  facts: { founded: number; city: string; type: "Pública" | "Privada" };
  seo: { title: string; description: string };
  /** Mensaje de WhatsApp por defecto de la landing. */
  message: string;
  hero: {
    title: string;
    paragraphs: string[];
    cta: Cta;
    image: Img;
    highlights?: Item[];
  };
  sections: Section[];
  conclusion: { title?: string; text: string };
  testimonials?: { title: string; intro?: string; items: Testimonial[]; note?: string };
  faq: { title: string; intro?: string; items: Faq[]; ctaLabel?: string; ctaNote?: string };
};
