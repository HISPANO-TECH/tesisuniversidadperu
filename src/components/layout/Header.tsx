"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import { UNIVERSITY_NAV, wa } from "@/lib/site";
import { WhatsAppIcon } from "@/components/svg/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [uniOpen, setUniOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setUniOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-[0_10px_30px_-18px_rgb(13_20_34/0.35)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={close} aria-label="Tesis Universidad Perú - Inicio">
          <Image src="/images/logo-icon.webp" alt="Tesis Universidad Perú - Logo" width={48} height={48} loading="eager" className="size-12" />
          <span className="hidden leading-none sm:block">
            <span className="block text-lg font-extrabold tracking-tight text-ink-900">Tesis</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-ink-500">Universidad Perú</span>
          </span>
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          <NavLink href="/">Inicio</NavLink>
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700"
              aria-haspopup="true"
            >
              Universidades <ChevronDown className="size-4 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-3xl border border-ink-100 bg-white p-3 shadow-2xl shadow-ink-900/10">
                {UNIVERSITY_NAV.map((u) => (
                  <Link
                    key={u.href}
                    href={u.href}
                    className="group/item flex items-start gap-3 rounded-2xl p-3 transition hover:bg-brand-50"
                  >
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl text-[10px] font-extrabold text-white shadow-sm transition group-hover/item:scale-110" style={{ background: u.color }}>
                      {u.label.replace("Tesis ", "")}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink-900">{u.label}</span>
                      <span className="block text-xs leading-snug text-ink-500">{u.name}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <NavLink href="/sobre-nosotros/">Sobre Nosotros</NavLink>
          <NavLink href="/contacto/">Contacto</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 sm:inline-flex"
          >
            <GraduationCap className="size-4" /> Empezar Tesis
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-ink-200 bg-white text-ink-900 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-white transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-6" aria-label="Móvil">
          <MobileLink href="/" onClick={close}>Inicio</MobileLink>
          <button
            type="button"
            onClick={() => setUniOpen((v) => !v)}
            className="flex items-center justify-between rounded-2xl px-4 py-4 text-left text-lg font-bold text-ink-900 hover:bg-ink-50"
            aria-expanded={uniOpen}
          >
            Universidades <ChevronDown className={`size-5 transition ${uniOpen ? "rotate-180" : ""}`} />
          </button>
          {uniOpen && (
            <div className="grid grid-cols-2 gap-2 px-2 pb-2">
              {UNIVERSITY_NAV.map((u) => (
                <Link
                  key={u.href}
                  href={u.href}
                  onClick={close}
                  className="flex items-center gap-2 rounded-2xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm font-bold text-ink-800 hover:border-brand-300 hover:bg-brand-50"
                >
                  <span className="size-2.5 shrink-0 rounded-full" style={{ background: u.color }} />
                  {u.label}
                </Link>
              ))}
            </div>
          )}
          <MobileLink href="/sobre-nosotros/" onClick={close}>Sobre Nosotros</MobileLink>
          <MobileLink href="/contacto/" onClick={close}>Contacto</MobileLink>
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-bold text-white"
          >
            <WhatsAppIcon className="size-5" /> Empezar Tesis
          </a>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-full px-4 py-2 text-sm font-semibold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700">
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="rounded-2xl px-4 py-4 text-lg font-bold text-ink-900 hover:bg-ink-50">
      {children}
    </Link>
  );
}
