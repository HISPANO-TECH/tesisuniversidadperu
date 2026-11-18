/**
 * Tema por universidad: a partir de 4 colores base se regenera toda la paleta
 * del sitio (brand-50…900, ink-900/950, gold-*, papel). Como Tailwind 4 usa
 * variables CSS en sus utilidades, todas las clases `bg-brand-500`,
 * `text-ink-900`, etc. —y los SVG, que usan las mismas variables— se re-tiñen
 * sin tocar los componentes.
 */
export type UniTheme = {
  /** Color principal del logo (botones, acentos, íconos). */
  primary: string;
  /** Color institucional profundo (títulos, secciones oscuras). */
  deep: string;
  /** Acento secundario (filetes, medallas, números). */
  accent: string;
  /** Fondo "papel" para secciones alternas. */
  paper: string;
};

const mix = (color: string, pct: number, other: string) => `color-mix(in oklab, ${color} ${pct}%, ${other})`;

/** Variables del tema como objeto de estilo: re-tiñe solo un elemento y sus hijos. */
export function themeVars(t: UniTheme): React.CSSProperties {
  return Object.fromEntries(buildVars(t)) as React.CSSProperties;
}

function buildVars(t: UniTheme): [string, string][] {
  const p = "var(--uni-primary)";
  const d = "var(--uni-deep)";
  const a = "var(--uni-accent)";
  const vars: Record<string, string> = {
    "--uni-primary": t.primary,
    "--uni-deep": t.deep,
    "--uni-accent": t.accent,
    "--uni-paper": t.paper,

    "--color-brand-50": mix(p, 5, "white"),
    "--color-brand-100": mix(p, 11, "white"),
    "--color-brand-200": mix(p, 24, "white"),
    "--color-brand-300": mix(p, 48, "white"),
    "--color-brand-400": mix(p, 78, "white"),
    "--color-brand-500": p,
    "--color-brand-600": mix(p, 86, d),
    "--color-brand-700": mix(p, 62, d),
    "--color-brand-800": mix(p, 38, d),
    "--color-brand-900": mix(p, 18, d),

    "--color-gold-300": mix(a, 55, "white"),
    "--color-gold-400": mix(a, 82, "white"),
    "--color-gold-500": a,
    "--color-gold-600": mix(a, 78, "black"),

    "--color-ink-50": t.paper,
    "--color-ink-100": mix(t.paper, 88, d),
    "--color-ink-900": d,
    "--color-ink-950": mix(d, 72, "black"),
  };
  return Object.entries(vars);
}
