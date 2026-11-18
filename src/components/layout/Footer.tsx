import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE, UNIVERSITY_NAV, wa } from "@/lib/site";
import { WhatsAppIcon } from "@/components/svg/Icons";

export function Footer() {
  return (
    <footer className="cv-auto relative overflow-hidden bg-ink-950 text-ink-300">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(40rem_16rem_at_50%_0%,color-mix(in_oklab,var(--color-brand-500)_18%,transparent),transparent_70%)]" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-2xl bg-white p-1.5">
              <Image src="/images/logo-icon.webp" alt="Tesis Universidad Perú" width={48} height={48} />
            </span>
            <span className="leading-none">
              <span className="block text-xl font-extrabold text-white">Tesis</span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-brand-300">Universidad Perú</span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Asesoría de tesis y acompañamiento metodológico especializado para pregrado y posgrado en las principales universidades del Perú. 100% online.
          </p>
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="size-5" /> Escríbenos por WhatsApp
          </a>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Universidades</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {UNIVERSITY_NAV.map((u) => (
              <li key={u.href}>
                <Link href={u.href} className="transition hover:text-brand-300">
                  {u.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Navegación</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><Link href="/" className="transition hover:text-brand-300">Inicio</Link></li>
            <li><Link href="/sobre-nosotros/" className="transition hover:text-brand-300">Sobre Nosotros</Link></li>
            <li><Link href="/contacto/" className="transition hover:text-brand-300">Contacto</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contacto</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-400" />
              <span><span className="block font-semibold text-white">Ubicación</span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-brand-400" />
              <span>
                <span className="block font-semibold text-white">Atención</span>
                <a href={SITE.phoneHref} className="hover:text-brand-300">{SITE.phoneDisplay}</a>
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-brand-400" />
              <span>{SITE.hours}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-brand-400" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-brand-300">{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-400 sm:flex-row">
          <p>Copyright © {SITE.copyrightYear} tesisuniversidadperu. Todos los derechos reservados.</p>
          <p>Asesoría metodológica · APA 7 · Turnitin · Sustentación</p>
        </div>
      </div>
    </footer>
  );
}
