/**
 * Emblema académico original (escudo + libro abierto + laureles + cinta).
 * No reproduce ningún logo real: usa las iniciales y los colores del tema activo
 * (variables --uni-*), al estilo de los escudos de las universidades clásicas.
 */
type Props = {
  initials: string;
  year?: number;
  className?: string;
  id: string;
  /** "full": con laureles y cinta; "mark": solo el escudo (para tamaños pequeños). */
  variant?: "full" | "mark";
};

export function Crest({ initials, year, className, id, variant = "full" }: Props) {
  const fs = initials.length > 4 ? 15 : initials.length > 3 ? 18 : 22;
  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-label={`Emblema ${initials}`}>
      <defs>
        <linearGradient id={`${id}-shield`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-brand-500)" />
          <stop offset="1" stopColor="var(--color-brand-700)" />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-gold-300)" />
          <stop offset="0.55" stopColor="var(--color-gold-500)" />
          <stop offset="1" stopColor="var(--color-gold-600)" />
        </linearGradient>
      </defs>

      {variant === "full" && (
        <g fill="none" stroke={`url(#${id}-gold)`} strokeWidth="3" strokeLinecap="round">
          {/* Laureles */}
          <path d="M42 178 C 18 150, 14 108, 30 70" />
          <path d="M158 178 C 182 150, 186 108, 170 70" />
          {[0, 1, 2, 3, 4].map((i) => {
            const y = 160 - i * 20;
            const xL = 30 - Math.sin(i / 1.6) * 6 + i * 0.5;
            const xR = 200 - xL;
            return (
              <g key={i} fill={`url(#${id}-gold)`} stroke="none">
                <ellipse cx={xL - 6} cy={y} rx="9" ry="4" transform={`rotate(-40 ${xL - 6} ${y})`} />
                <ellipse cx={xL + 7} cy={y - 6} rx="9" ry="4" transform={`rotate(-110 ${xL + 7} ${y - 6})`} />
                <ellipse cx={xR + 6} cy={y} rx="9" ry="4" transform={`rotate(40 ${xR + 6} ${y})`} />
                <ellipse cx={xR - 7} cy={y - 6} rx="9" ry="4" transform={`rotate(110 ${xR - 7} ${y - 6})`} />
              </g>
            );
          })}
        </g>
      )}

      {/* Escudo */}
      <path d="M100 18 L162 34 V98 C162 140 136 168 100 184 C64 168 38 140 38 98 V34 Z" fill="var(--color-gold-500)" />
      <path d="M100 25 L155 39 V98 C155 135 132 160 100 175 C68 160 45 135 45 98 V39 Z" fill={`url(#${id}-shield)`} />
      {/* Cheurón */}
      <path d="M45 92 L100 70 L155 92 V104 L100 82 L45 104 Z" fill="var(--color-ink-900)" opacity="0.35" />
      {/* Libro abierto */}
      <g transform="translate(100 58)">
        <path d="M-30 -12 C -18 -18, -6 -16, 0 -10 C 6 -16, 18 -18, 30 -12 V 12 C 18 6, 6 8, 0 14 C -6 8, -18 6, -30 12 Z" fill="#ffffff" />
        <path d="M0 -10 V14" stroke="var(--color-brand-700)" strokeWidth="1.6" />
        {[-6, -1, 4].map((y) => (
          <g key={y} stroke="var(--color-brand-300)" strokeWidth="1.3">
            <path d={`M-24 ${y} C -16 ${y - 3}, -8 ${y - 3}, -4 ${y}`} fill="none" />
            <path d={`M4 ${y} C 8 ${y - 3}, 16 ${y - 3}, 24 ${y}`} fill="none" />
          </g>
        ))}
      </g>
      {/* Iniciales */}
      <text
        x="100"
        y="136"
        textAnchor="middle"
        fill="#ffffff"
        fontSize={fs}
        fontWeight="700"
        letterSpacing="2"
        fontFamily="var(--font-academic), Georgia, serif"
      >
        {initials}
      </text>
      <path d="M72 146 H128" stroke="var(--color-gold-400)" strokeWidth="1.5" />

      {variant === "full" && year && (
        <g>
          {/* Cinta */}
          <path d="M28 182 L52 176 L52 204 L28 210 L36 196 Z" fill="var(--color-gold-600)" />
          <path d="M172 182 L148 176 L148 204 L172 210 L164 196 Z" fill="var(--color-gold-600)" />
          <path d="M48 174 Q100 190 152 174 L152 202 Q100 218 48 202 Z" fill={`url(#${id}-gold)`} />
          <text
            x="100"
            y="200"
            textAnchor="middle"
            fill="var(--color-ink-950)"
            fontSize="12"
            fontWeight="700"
            letterSpacing="3"
            fontFamily="var(--font-academic), Georgia, serif"
          >
            {`EST. ${year}`}
          </text>
        </g>
      )}
    </svg>
  );
}
