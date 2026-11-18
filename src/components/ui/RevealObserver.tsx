"use client";

import { useEffect } from "react";

const REVEAL = ".reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-stagger";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const FINAL: Keyframe = { opacity: 1, transform: "none" };

/** Lleva el elemento desde su estado oculto (definido en CSS) a visible. */
function playReveal(el: Element, reduce: boolean) {
  const duration = reduce ? 1 : 950;
  const targets = el.classList.contains("reveal-stagger") ? Array.from(el.children) : [el];
  const baseDelay = parseFloat(getComputedStyle(el).getPropertyValue("--reveal-delay")) || 0;

  targets.forEach((t, i) => {
    const cs = getComputedStyle(t);
    t.animate([{ opacity: cs.opacity, transform: cs.transform }, FINAL], {
      duration,
      delay: reduce ? 0 : baseDelay + (targets.length > 1 ? Math.min(i, 7) * 70 : 0),
      easing: EASE,
      fill: "both",
    });
  });
}

/**
 * Animaciones de aparición y pausa de animaciones fuera de pantalla.
 *
 * IMPORTANTE: no modifica clases ni atributos del HTML. Este componente se
 * hidrata antes que el contenido de la página; si cambiara `className` o
 * añadiera `data-*`, React detectaría un "hydration mismatch". Por eso usa la
 * Web Animations API (`element.animate()` y `getAnimations()`), que no toca el DOM.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealed = new WeakSet<Element>();

    // 1. Aparición: una sola vez por elemento.
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting || revealed.has(e.target)) continue;
          revealed.add(e.target);
          reveal.unobserve(e.target);
          playReveal(e.target, reduce);
        }
      },
      // Se dispara apenas el elemento asoma por abajo: sin huecos en blanco al hacer scroll rápido.
      { rootMargin: "0px 0px -4% 0px", threshold: 0 },
    );

    // 2. Ilustraciones SVG ([data-anim]): sus animaciones en bucle solo corren mientras se ven.
    const anim = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          for (const a of e.target.getAnimations({ subtree: true })) {
            if (!(a instanceof CSSAnimation)) continue; // no tocar las apariciones (WAAPI)
            if (e.isIntersecting) a.play();
            else a.pause();
          }
        }
      },
      { rootMargin: "120px 0px" },
    );

    const scan = (root: ParentNode) => {
      root.querySelectorAll(REVEAL).forEach((el) => {
        if (!revealed.has(el)) reveal.observe(el);
      });
      root.querySelectorAll("[data-anim]").forEach((el) => anim.observe(el));
    };
    scan(document);

    // Contenido que aparece después (menús, acordeones, 3D cargado en diferido)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.matches(REVEAL) && !revealed.has(n)) reveal.observe(n);
          if (n.matches("[data-anim]")) anim.observe(n);
          scan(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      reveal.disconnect();
      anim.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
