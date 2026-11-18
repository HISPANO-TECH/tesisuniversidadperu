"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ThesisIllustration } from "@/components/svg/Illustrations";

const Scene = dynamic(() => import("./HeroScene"), { ssr: false, loading: () => null });

type NavigatorExtra = Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };

/** ¿Vale la pena cargar ~900 KB de Three.js en este dispositivo? */
function canUse3D(): boolean {
  const mq = (q: string) => window.matchMedia(q).matches;
  if (mq("(prefers-reduced-motion: reduce)")) return false;
  if (!mq("(min-width: 1024px)") || !mq("(pointer: fine)")) return false; // móvil/tablet → SVG
  const nav = navigator as NavigatorExtra;
  if (nav.connection?.saveData) return false;
  if ((nav.hardwareConcurrency ?? 8) < 4) return false;
  if ((nav.deviceMemory ?? 8) < 4) return false;
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Escena 3D del hero con carga progresiva:
 *  - Primero se ve la ilustración SVG (ligera, sin saltos de diseño).
 *  - En escritorio capaz, cuando el navegador queda libre, se descarga la escena 3D.
 *  - La escena deja de renderizar cuando sale de pantalla o la pestaña está oculta.
 */
export function HeroScene3D({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!canUse3D()) return;
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const id = idle(() => setEnabled(true), { timeout: 2500 });
    return () => cancelIdle(id);
  }, []);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "80px" });
    io.observe(ref.current);
    const onVis = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [enabled]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Sombra suave en CSS (reemplaza ContactShadows, que re-renderiza cada frame) */}
      <div aria-hidden="true" className="absolute inset-x-[18%] bottom-[6%] h-10 rounded-[50%] bg-[radial-gradient(closest-side,rgb(13_20_34/0.28),transparent)]" />

      <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}>
        <ThesisIllustration className="h-full w-full" id="hero-fallback" />
      </div>

      {enabled && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}>
          <Scene active={visible} onReady={() => setReady(true)} />
        </div>
      )}
    </div>
  );
}
