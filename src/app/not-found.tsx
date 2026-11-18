import { LinkButton, WaButton } from "@/components/ui/Button";
import { GlowBackdrop, SummitIllustration } from "@/components/svg/Illustrations";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32">
      <GlowBackdrop />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-serif text-7xl font-bold italic text-brand-600">404</p>
          <h1 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">Esta página se perdió en la revisión de literatura</h1>
          <p className="mt-4 text-pretty text-lg text-ink-600">
            No encontramos lo que buscabas, pero tu tesis sí tiene camino. Vuelve al inicio o escríbenos y te orientamos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/">Volver al inicio</LinkButton>
            <WaButton variant="ghost">Hablar con un asesor</WaButton>
          </div>
        </div>
        <SummitIllustration className="w-full" id="nf" />
      </div>
    </section>
  );
}
