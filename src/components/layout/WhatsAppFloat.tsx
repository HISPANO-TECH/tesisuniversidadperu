import { wa } from "@/lib/site";
import { WhatsAppIcon } from "@/components/svg/Icons";

export function WhatsAppFloat() {
  return (
    <a
      href={wa()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-ink-800 shadow-xl ring-1 ring-ink-100 transition group-hover:translate-x-0 sm:block sm:translate-x-2 sm:opacity-0 sm:group-hover:opacity-100">
        ¿Hablamos de tu tesis?
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgb(37_211_102/0.7)] transition group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsAppIcon className="relative size-7" />
      </span>
    </a>
  );
}
