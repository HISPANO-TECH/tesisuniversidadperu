/**
 * Ilustraciones SVG originales y animadas con CSS (sin JavaScript).
 * Las clases de animación (draw, grow-y, pop, bob, ...) viven en globals.css.
 */

type P = { className?: string; id?: string };

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;
const len = (n: number, s = 0) => ({ "--len": n, "--d": `${s}s` }) as React.CSSProperties;

/* ------------------------------------------------------------------ */
/* 1. Documento de tesis con gráficos, sello Turnitin y birrete        */
/* ------------------------------------------------------------------ */
export function ThesisIllustration({ className, id = "ti" }: P) {
  return (
    <svg data-anim="" viewBox="0 0 520 440" className={className} role="img" aria-label="Ilustración de una tesis con análisis estadístico y control de similitud">
      <defs>
        <linearGradient id={`${id}-paper`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f1f7fa" />
        </linearGradient>
        <linearGradient id={`${id}-cyan`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-brand-400)" />
          <stop offset="1" stopColor="var(--color-brand-700)" />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-gold-300)" />
          <stop offset="1" stopColor="var(--color-gold-600)" />
        </linearGradient>
        <filter id={`${id}-sh`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="var(--color-ink-900)" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Órbita punteada */}
      <ellipse cx="260" cy="230" rx="236" ry="180" fill="none" stroke="var(--color-brand-200)" strokeWidth="1.5" className="dash-flow" />

      {/* Hoja trasera */}
      <g className="bob" style={d(0.6)}>
        <rect x="150" y="70" width="230" height="300" rx="16" fill="var(--color-brand-100)" transform="rotate(-7 265 220)" />
      </g>

      {/* Documento principal */}
      <g filter={`url(#${id}-sh)`}>
        <rect x="140" y="56" width="240" height="320" rx="18" fill={`url(#${id}-paper)`} stroke="#d6dce7" />
        <rect x="140" y="56" width="240" height="54" rx="18" fill={`url(#${id}-cyan)`} />
        <rect x="140" y="92" width="240" height="18" fill={`url(#${id}-cyan)`} />
        <text x="164" y="90" fill="#fff" fontSize="15" fontWeight="800" fontFamily="var(--font-montserrat), sans-serif">TESIS</text>
        <rect x="232" y="80" width="120" height="7" rx="3.5" fill="#ffffff" opacity="0.5" />

        {/* Líneas que se "escriben" */}
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="164" y={132 + i * 18} width={i === 3 ? 120 : 190} height="7" rx="3.5" fill="#c7d0dd" className="typing-line" style={d(i * 0.35)} />
        ))}

        {/* Gráfico de barras */}
        <rect x="164" y="214" width="190" height="104" rx="10" fill="#f6f8fb" stroke="#eceff5" />
        {[46, 70, 58, 86, 74].map((h, i) => (
          <rect key={i} x={180 + i * 34} y={306 - h} width="20" height={h} rx="5" fill={i === 3 ? `url(#${id}-gold)` : `url(#${id}-cyan)`} className="grow-y" style={d(0.4 + i * 0.15)} />
        ))}
        <path d="M184 270 L218 246 L252 258 L286 222 L320 236" fill="none" stroke="var(--color-ink-900)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="draw" style={len(200, 1.2)} />
        {[[184, 270], [218, 246], [252, 258], [286, 222], [320, 236]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#fff" stroke="var(--color-ink-900)" strokeWidth="2" className="pop" style={d(1.6 + i * 0.12)} />
        ))}

        <rect x="164" y="334" width="150" height="7" rx="3.5" fill="#d6dce7" />
        <rect x="164" y="350" width="96" height="7" rx="3.5" fill="#d6dce7" />
      </g>

      {/* Insignia Turnitin */}
      <g className="bob" style={d(1)}>
        <g filter={`url(#${id}-sh)`}>
          <rect x="356" y="128" width="142" height="86" rx="18" fill="var(--color-ink-900)" />
        </g>
        <circle cx="392" cy="171" r="22" fill="none" stroke="var(--color-ink-700)" strokeWidth="7" />
        <circle cx="392" cy="171" r="22" fill="none" stroke="var(--color-brand-400)" strokeWidth="7" strokeLinecap="round" transform="rotate(-90 392 171)" className="draw-to" style={{ "--len": 138, "--to": 138 * 0.88, "--d": "0.8s" } as React.CSSProperties} />
        <text x="392" y="176" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily="var(--font-montserrat), sans-serif">&lt;20%</text>
        <text x="424" y="164" fill="#7a879d" fontSize="10" fontWeight="700" fontFamily="var(--font-montserrat), sans-serif">TURNITIN</text>
        <text x="424" y="184" fill="#ffffff" fontSize="14" fontWeight="800" fontFamily="var(--font-montserrat), sans-serif">Original</text>
      </g>

      {/* Check APA 7 */}
      <g className="bob" style={d(2)}>
        <g filter={`url(#${id}-sh)`}>
          <rect x="22" y="250" width="138" height="60" rx="16" fill="#ffffff" stroke="#eceff5" />
        </g>
        <circle cx="52" cy="280" r="16" fill="var(--color-brand-50)" />
        <path d="M44 280 l6 6 l11 -12" fill="none" stroke="var(--color-brand-600)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="draw" style={len(30, 1.4)} />
        <text x="76" y="276" fill="var(--color-ink-900)" fontSize="13" fontWeight="800" fontFamily="var(--font-montserrat), sans-serif">APA 7</text>
        <text x="76" y="293" fill="#7a879d" fontSize="10" fontWeight="600" fontFamily="var(--font-montserrat), sans-serif">Normalizado</text>
      </g>

      {/* Birrete */}
      <g className="bob" style={d(0)}>
        <g transform="translate(40 70)">
          <ellipse cx="62" cy="66" rx="34" ry="9" fill="var(--color-ink-900)" opacity="0.12" />
          <path d="M34 34 v18 c0 8 56 8 56 0 v-18" fill="var(--color-ink-800)" />
          <path d="M62 8 L120 32 L62 56 L4 32 Z" fill="var(--color-ink-900)" />
          <path d="M62 8 L120 32 L62 56 L4 32 Z" fill="none" stroke="var(--color-ink-700)" strokeWidth="1.5" />
          <circle cx="62" cy="32" r="4" fill={`url(#${id}-gold)`} />
          <path d="M62 32 Q96 40 100 64" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="3" strokeLinecap="round" />
          <rect x="95" y="62" width="10" height="16" rx="3" fill={`url(#${id}-gold)`} />
        </g>
      </g>

      {/* Destellos */}
      {[[470, 70, 0], [90, 380, 0.8], [440, 380, 1.6]].map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="10" fill="var(--color-brand-400)" opacity="0.4" className="pulse-ring" style={d(s)} />
          <circle r="4" fill="var(--color-brand-500)" />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Medidor de similitud (gauge)                                     */
/* ------------------------------------------------------------------ */
export function SimilarityGauge({ className, value = 12, id = "sg" }: P & { value?: number }) {
  const arc = 251; // longitud aproximada del semicírculo r=80
  const pct = Math.min(value, 100) / 100;
  return (
    <svg data-anim="" viewBox="0 0 220 140" className={className} role="img" aria-label={`Índice de similitud ${value}%`}>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-brand-400)" />
          <stop offset="0.6" stopColor="var(--color-gold-400)" />
          <stop offset="1" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path d="M30 120 A80 80 0 0 1 190 120" fill="none" stroke="#eceff5" strokeWidth="16" strokeLinecap="round" />
      <path d="M30 120 A80 80 0 0 1 190 120" fill="none" stroke={`url(#${id}-g)`} strokeWidth="16" strokeLinecap="round" opacity="0.25" />
      <path
        d="M30 120 A80 80 0 0 1 190 120"
        fill="none"
        stroke="var(--color-brand-500)"
        strokeWidth="16"
        strokeLinecap="round"
        className="draw-to"
        style={{ "--len": arc, "--to": arc * (1 - pct), "--d": "0.3s" } as React.CSSProperties}
      />
      {/* Límite del 20% */}
      <line x1="47" y1="73" x2="38" y2="66" stroke="var(--color-ink-900)" strokeWidth="3" strokeLinecap="round" />
      <text x="110" y="108" textAnchor="middle" fontSize="34" fontWeight="800" fill="var(--color-ink-900)" fontFamily="var(--font-montserrat), sans-serif">
        {value}%
      </text>
      <text x="110" y="128" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7a879d" letterSpacing="2" fontFamily="var(--font-montserrat), sans-serif">
        SIMILITUD
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 3. De la montaña al paisaje de tu graduación                        */
/* ------------------------------------------------------------------ */
export function SummitIllustration({ className, id = "si" }: P) {
  return (
    <svg data-anim="" viewBox="0 0 480 320" className={className} role="img" aria-label="Camino desde la montaña de la tesis hasta la graduación">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-brand-900)" />
          <stop offset="1" stopColor="var(--color-ink-900)" />
        </linearGradient>
        <linearGradient id={`${id}-m1`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-brand-400)" />
          <stop offset="1" stopColor="var(--color-brand-700)" />
        </linearGradient>
        <linearGradient id={`${id}-m2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-brand-800)" />
          <stop offset="1" stopColor="var(--color-ink-900)" />
        </linearGradient>
        <radialGradient id={`${id}-sun`}>
          <stop offset="0" stopColor="var(--color-gold-300)" />
          <stop offset="1" stopColor="var(--color-gold-500)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="320" rx="28" fill={`url(#${id}-sky)`} />
      <circle cx="370" cy="78" r="70" fill={`url(#${id}-sun)`} className="pulse-ring" style={d(0)} opacity="0.5" />
      <circle cx="370" cy="78" r="26" fill="var(--color-gold-400)" />
      {/* estrellas */}
      {[[60, 40], [120, 70], [210, 30], [280, 60], [440, 140], [30, 120]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.8" fill="#fff" className="pop" style={d(0.2 * i)} />
      ))}
      <path d="M0 260 L110 140 L170 200 L250 96 L340 210 L400 160 L480 240 L480 320 L0 320 Z" fill={`url(#${id}-m2)`} />
      <path d="M0 290 L90 200 L160 250 L250 150 L330 250 L420 200 L480 260 L480 320 L0 320 Z" fill={`url(#${id}-m1)`} opacity="0.9" />
      <path d="M250 96 L232 120 L244 116 L252 128 L262 114 L270 120 Z" fill="#ffffff" opacity="0.9" />
      {/* Sendero */}
      <path
        d="M40 310 C 120 290, 90 250, 160 245 S 230 230, 220 190 S 260 140, 250 104"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 9"
        className="dash-flow"
      />
      <path
        d="M40 310 C 120 290, 90 250, 160 245 S 230 230, 220 190 S 260 140, 250 104"
        fill="none"
        stroke="var(--color-gold-300)"
        strokeWidth="3"
        strokeLinecap="round"
        className="draw"
        style={len(360, 0.4)}
      />
      {/* Hitos */}
      {[
        [92, 282, "Plan"],
        [160, 245, "Método"],
        [222, 196, "Datos"],
      ].map(([x, y, t], i) => (
        <g key={i} className="pop" style={d(0.8 + i * 0.4)}>
          <circle cx={x as number} cy={y as number} r="7" fill="var(--color-ink-900)" stroke="var(--color-gold-300)" strokeWidth="3" />
          <text x={(x as number) + 12} y={(y as number) + 4} fill="#fff" fontSize="11" fontWeight="700" fontFamily="var(--font-montserrat), sans-serif">
            {t}
          </text>
        </g>
      ))}
      {/* Bandera con birrete en la cima */}
      <g className="pop" style={d(2.2)}>
        <line x1="250" y1="104" x2="250" y2="56" stroke="#fff" strokeWidth="3" />
        <path d="M250 56 L290 66 L250 78 Z" fill="var(--color-gold-400)" className="bob" style={d(0)} />
        <path d="M250 44 L272 52 L250 60 L228 52 Z" fill="#fff" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Matriz de consistencia                                           */
/* ------------------------------------------------------------------ */
export function MatrixIllustration({ className }: P) {
  const cols = ["Problema", "Objetivos", "Hipótesis", "Variables"];
  return (
    <svg data-anim="" viewBox="0 0 420 260" className={className} role="img" aria-label="Matriz de consistencia alineada">
      <rect x="4" y="4" width="412" height="252" rx="22" fill="#ffffff" stroke="#d6dce7" />
      {cols.map((c, i) => (
        <g key={c}>
          <rect x={20 + i * 98} y="20" width="88" height="34" rx="10" fill={i % 2 ? "var(--color-ink-900)" : "var(--color-brand-500)"} />
          <text x={64 + i * 98} y="42" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff" fontFamily="var(--font-montserrat), sans-serif">
            {c}
          </text>
          {[0, 1, 2, 3].map((r) => (
            <rect
              key={r}
              x={20 + i * 98}
              y={66 + r * 44}
              width="88"
              height="34"
              rx="9"
              fill={(r + i) % 3 === 0 ? "var(--color-brand-50)" : "#f6f8fb"}
              stroke={(r + i) % 3 === 0 ? "var(--color-brand-300)" : "#eceff5"}
              className="pop"
              style={d(0.15 * (r * 4 + i))}
            />
          ))}
        </g>
      ))}
      {/* Conectores de coherencia */}
      {[0, 1, 2].map((r) => (
        <path
          key={r}
          d={`M108 ${83 + r * 44} H118 M206 ${83 + r * 44} H216 M304 ${83 + r * 44} H314`}
          stroke="var(--color-brand-600)"
          strokeWidth="3"
          strokeLinecap="round"
          className="draw"
          style={len(40, 1.4 + r * 0.3)}
        />
      ))}
      <g className="pop" style={d(2.6)}>
        <circle cx="388" cy="228" r="20" fill="var(--color-gold-500)" />
        <path d="M379 228 l6 6 l12 -13" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Sustentación ante el jurado                                      */
/* ------------------------------------------------------------------ */
export function DefenseIllustration({ className, id = "di" }: P) {
  return (
    <svg data-anim="" viewBox="0 0 440 300" className={className} role="img" aria-label="Simulacro de sustentación ante el jurado">
      <defs>
        <linearGradient id={`${id}-s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-brand-400)" />
          <stop offset="1" stopColor="var(--color-brand-700)" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="436" height="296" rx="26" fill="#f6f8fb" />
      {/* Pantalla */}
      <rect x="40" y="30" width="230" height="140" rx="14" fill="var(--color-ink-900)" />
      <rect x="54" y="44" width="80" height="8" rx="4" fill="var(--color-brand-400)" />
      {[60, 92, 74, 110].map((h, i) => (
        <rect key={i} x={60 + i * 44} y={156 - h * 0.85} width="26" height={h * 0.85} rx="5" fill={`url(#${id}-s)`} className="grow-y" style={d(0.3 + i * 0.2)} />
      ))}
      <rect x="150" y="170" width="10" height="40" fill="#aab4c6" />
      <rect x="118" y="208" width="74" height="8" rx="4" fill="#aab4c6" />
      {/* Expositor */}
      <g className="bob" style={d(0.4)}>
        <circle cx="320" cy="96" r="22" fill="#e9c9a8" />
        <path d="M298 92 a22 22 0 0 1 44 -4 c-6 -12 -36 -14 -44 4z" fill="var(--color-ink-800)" />
        <path d="M286 200 c0 -50 14 -78 34 -78 s34 28 34 78z" fill="var(--color-ink-900)" />
        <path d="M320 122 l-8 30 l8 10 l8 -10z" fill="var(--color-gold-500)" />
        <path d="M300 140 L262 120" stroke="var(--color-ink-900)" strokeWidth="12" strokeLinecap="round" />
      </g>
      {/* Jurado */}
      <rect x="20" y="236" width="400" height="44" rx="14" fill="#ffffff" stroke="#e5e9f0" />
      {[80, 200, 320].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="230" r="15" fill={["#c99b78", "#e9c9a8", "#b9876a"][i]} />
          <path d={`M${x - 20} 262 a20 18 0 0 1 40 0z`} fill="var(--color-ink-700)" />
          <g className="pop" style={d(1.2 + i * 0.5)}>
            <rect x={x + 10} y="190" width="44" height="24" rx="10" fill="#ffffff" stroke="var(--color-brand-300)" />
            <text x={x + 32} y="207" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--color-brand-600)" fontFamily="var(--font-montserrat), sans-serif">
              {["?", "✓", "★"][i]}
            </text>
          </g>
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Fondo decorativo: blobs + grid                                   */
/* ------------------------------------------------------------------ */
/**
 * Halos de color con degradados radiales (sin `filter: blur`, que es caro de
 * repintar). Visualmente equivalente y prácticamente gratis para la GPU.
 */
export function GlowBackdrop({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const glow = dark
    ? "radial-gradient(38rem 26rem at 8% 0%, color-mix(in oklab, var(--color-brand-500) 24%, transparent), transparent 70%), radial-gradient(30rem 24rem at 100% 40%, color-mix(in oklab, var(--color-gold-500) 14%, transparent), transparent 70%), radial-gradient(34rem 22rem at 40% 100%, color-mix(in oklab, var(--color-brand-700) 30%, transparent), transparent 70%)"
    : "radial-gradient(38rem 26rem at 5% 0%, color-mix(in oklab, var(--color-brand-200) 60%, transparent), transparent 70%), radial-gradient(30rem 24rem at 100% 35%, color-mix(in oklab, var(--color-gold-300) 30%, transparent), transparent 70%), radial-gradient(34rem 22rem at 40% 100%, color-mix(in oklab, var(--color-brand-100) 70%, transparent), transparent 70%)";
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} style={{ backgroundImage: glow }}>
      <div className={`absolute inset-0 ${dark ? "bg-grid-dark" : "bg-grid"} [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]`} />
    </div>
  );
}
