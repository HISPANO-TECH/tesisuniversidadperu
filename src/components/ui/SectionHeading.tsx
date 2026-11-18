type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
  className = "",
  as: Tag = "h2",
}: Props) {
  const center = align === "center";
  const dark = tone === "dark";
  return (
    <div data-align={align} data-tone={tone} className={`reveal ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <span
          data-eyebrow=""
          className={`mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ${
            dark ? "bg-white/10 text-brand-300 ring-1 ring-white/15" : "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
          }`}
        >
          <span className={`size-1.5 rounded-full ${dark ? "bg-brand-300" : "bg-brand-500"}`} />
          {eyebrow}
        </span>
      )}
      <Tag
        className={`text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-5 text-pretty text-base leading-relaxed sm:text-lg ${dark ? "text-ink-200" : "text-ink-500"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
