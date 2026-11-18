"use client";

import { ArrowUp } from "lucide-react";

/**
 * Barra de progreso de lectura + botón "volver arriba".
 * Ambos se animan con CSS scroll-driven animations (globals.css): cero JS por frame.
 */
export function ScrollUI() {
  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <button
        type="button"
        onClick={toTop}
        aria-label="Volver arriba"
        className="to-top group fixed bottom-24 right-6 z-40 grid size-12 place-items-center rounded-full bg-white text-ink-800 shadow-lift ring-1 ring-ink-100 transition-colors hover:bg-ink-900 hover:text-white"
      >
        <svg viewBox="0 0 44 44" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
          <circle cx="22" cy="22" r="20" fill="none" stroke="var(--color-ink-100)" strokeWidth="2.5" />
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="var(--color-brand-500)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="126"
            strokeDashoffset="126"
            className="to-top-ring"
          />
        </svg>
        <ArrowUp className="relative size-5 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </>
  );
}
