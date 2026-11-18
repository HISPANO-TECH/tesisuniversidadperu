"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Scroll inercial con Lenis, solo en dispositivos con mouse/trackpad y sin
 * "reducir movimiento". Se carga cuando el navegador está libre para no
 * competir con el primer render. En táctil se usa el scroll nativo (ya es fluido).
 */
export function SmoothScroll() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;

    let lenis: Lenis | undefined;
    let cancelled = false;

    const start = async () => {
      const { default: LenisCtor } = await import("lenis");
      if (cancelled) return;
      lenis = new LenisCtor({
        lerp: 0.11,
        wheelMultiplier: 1,
        smoothWheel: true,
        autoRaf: true,
        anchors: { offset: -96 },
      });
      window.__lenis = lenis;
    };

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 300));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const id = idle(() => void start());

    return () => {
      cancelled = true;
      cancelIdle(id);
      lenis?.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return null;
}
