import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { wa } from "@/lib/site";
import { WhatsAppIcon } from "@/components/svg/Icons";

type Variant = "primary" | "whatsapp" | "ghost" | "light" | "dark";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/40 hover:shadow-xl hover:shadow-brand-600/50 hover:-translate-y-0.5",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgb(37_211_102/0.7)] hover:bg-[#1ebe5a] hover:-translate-y-0.5",
  ghost:
    "border border-ink-200 bg-white/95 text-ink-800 hover:border-brand-400 hover:text-brand-700",
  light: "bg-white text-ink-900 hover:bg-brand-50 hover:-translate-y-0.5 shadow-lg",
  dark: "bg-ink-900 text-white hover:bg-ink-800 hover:-translate-y-0.5",
};

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: "arrow" | "whatsapp" | "none";
};

export function WaButton({
  message,
  children,
  variant = "primary",
  className = "",
  icon = "whatsapp",
}: Props & { message?: string }) {
  return (
    <a
      href={wa(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon === "whatsapp" && <WhatsAppIcon className="size-5" />}
      <span>{children}</span>
      {icon === "arrow" && <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />}
    </a>
  );
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
  icon = "arrow",
}: Props & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {icon === "arrow" && <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}
