"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { DISTRICTS, wa } from "@/lib/site";

type Props = {
  /** "compact": formulario de las landings; "full": página de contacto (nombre + apellidos). */
  variant?: "compact" | "full";
  /** Universidad de la landing, se añade al mensaje. */
  university?: string;
  tone?: "light" | "dark";
};

type Errors = Partial<Record<"nombre" | "email" | "telefono", string>>;

const field =
  "w-full rounded-2xl border px-4 py-3.5 text-sm outline-none transition placeholder:text-ink-400 focus:ring-4";

export function ContactForm({ variant = "compact", university, tone = "light" }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const dark = tone === "dark";
  const input = `${field} ${
    dark
      ? "border-white/15 bg-white/5 text-white focus:border-brand-400 focus:ring-brand-400/20"
      : "border-ink-200 bg-white text-ink-900 focus:border-brand-500 focus:ring-brand-500/15"
  }`;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const nombre = [get("nombre"), get("apellidos")].filter(Boolean).join(" ");
    const email = get("email");
    const telefono = get("telefono");

    const next: Errors = {};
    if (nombre.length < 3) next.nombre = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Ingresa un correo válido.";
    if (telefono.replace(/\D/g, "").length < 7) next.telefono = "Ingresa un teléfono válido.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const lines = [
      `Hola, quiero información sobre asesoría de tesis${university ? ` ${university}` : ""}.`,
      `• Nombre: ${nombre}`,
      `• Correo: ${email}`,
      `• Teléfono: ${telefono}`,
      get("distrito") && `• Distrito: ${get("distrito")}`,
      get("mensaje") && `• Mensaje: ${get("mensaje")}`,
    ].filter(Boolean);

    window.open(wa(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  }

  if (sent) {
    return (
      <div className={`flex flex-col items-center gap-4 rounded-3xl p-8 text-center ${dark ? "bg-white/5" : "bg-brand-50"}`} role="status">
        <CheckCircle2 className="size-14 text-brand-500" />
        <p className={`text-lg font-bold ${dark ? "text-white" : "text-ink-900"}`}>¡Gracias! Abrimos WhatsApp con tu consulta.</p>
        <p className={`text-sm ${dark ? "text-ink-300" : "text-ink-500"}`}>
          Envía el mensaje y un asesor especialista te responderá a la brevedad.
        </p>
        <button type="button" onClick={() => setSent(false)} className="text-sm font-bold text-brand-600 underline underline-offset-4">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field error={errors.nombre} className={variant === "full" ? "" : "sm:col-span-2"}>
        <input name="nombre" type="text" autoComplete="given-name" placeholder={variant === "full" ? "Nombre" : "Nombre y Apellido"} className={input} aria-label="Nombre" aria-invalid={!!errors.nombre} />
      </Field>
      {variant === "full" && (
        <Field>
          <input name="apellidos" type="text" autoComplete="family-name" placeholder="Apellidos" className={input} aria-label="Apellidos" />
        </Field>
      )}
      <Field error={errors.email}>
        <input name="email" type="email" autoComplete="email" placeholder="Correo electrónico" className={input} aria-label="Correo electrónico" aria-invalid={!!errors.email} />
      </Field>
      <Field error={errors.telefono}>
        <input name="telefono" type="tel" autoComplete="tel" placeholder="Teléfono" className={input} aria-label="Teléfono" aria-invalid={!!errors.telefono} />
      </Field>
      <Field className="sm:col-span-2">
        <select name="distrito" defaultValue="" className={`${input} appearance-none`} aria-label="Distrito">
          <option value="" disabled>
            Distrito
          </option>
          {DISTRICTS.map((d) => (
            <option key={d} value={d} className="text-ink-900">
              {d}
            </option>
          ))}
        </select>
      </Field>
      <Field className="sm:col-span-2">
        <textarea
          name="mensaje"
          rows={4}
          placeholder={variant === "full" ? "¿Cómo te podemos ayudar o cuéntanos tus dudas o consultas?" : "Mensaje"}
          className={`${input} resize-none`}
          aria-label="Mensaje"
        />
      </Field>
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-4 font-bold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 sm:col-span-2"
      >
        Enviar consulta <Send className="size-4 transition group-hover:translate-x-1" />
      </button>
      <p className={`text-xs sm:col-span-2 ${dark ? "text-ink-400" : "text-ink-400"}`}>
        Al enviar se abrirá WhatsApp con tus datos. Tu información es 100% confidencial.
      </p>
    </form>
  );
}

function Field({ children, error, className = "" }: { children: React.ReactNode; error?: string; className?: string }) {
  return (
    <div className={className}>
      {children}
      {error && <p className="mt-1.5 pl-2 text-xs font-semibold text-red-500">{error}</p>}
    </div>
  );
}
