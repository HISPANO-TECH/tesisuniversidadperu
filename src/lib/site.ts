export const SITE = {
  name: "Tesis Universidad Perú",
  url: "https://tesisuniversidadperu.com",
  whatsapp: "51927580985",
  phoneDisplay: "+51 992 005 096",
  phoneHref: "tel:+51992005096",
  email: "informes@asesorestesisperu.com",
  address: "Alameda Lorenzo de Vidaurre 216, Los Próceres - Santiago de Surco - Lima",
  hours: "8:00 a.m. – 8:00 p.m.",
  copyrightYear: 2026,
  defaultMessage:
    "Hola, quiero contactarme para recibir información sobre asesoría en tesis universitaria en Perú.",
} as const;

/** Construye un enlace de WhatsApp con mensaje prellenado. */
export function wa(message: string = SITE.defaultMessage): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** `color`: color institucional (igual al `theme.primary` de cada universidad). */
export type NavUniversity = { href: string; label: string; name: string; color: string };

export const UNIVERSITY_NAV: NavUniversity[] = [
  { href: "/asesoria-tesis-ucv/", label: "Tesis UCV", name: "Universidad César Vallejo", color: "#c2212a" },
  { href: "/asesoria-tesis-pucp/", label: "Tesis PUCP", name: "Pontificia Universidad Católica del Perú", color: "#002d72" },
  { href: "/asesoria-tesis-upc/", label: "Tesis UPC", name: "Universidad Peruana de Ciencias Aplicadas", color: "#cc0000" },
  { href: "/tesis-utp/", label: "Tesis UTP", name: "Universidad Tecnológica del Perú", color: "#e31937" },
  { href: "/tesis-san-marcos/", label: "Tesis UNMSM", name: "Universidad Nacional Mayor de San Marcos", color: "#c41e3a" },
  { href: "/tesis-usmp/", label: "Tesis USMP", name: "Universidad de San Martín de Porres", color: "#8b1e2d" },
  { href: "/tesis-usil/", label: "Tesis USIL", name: "Universidad San Ignacio de Loyola", color: "#07256d" },
  { href: "/tesis-unsa/", label: "Tesis UNSA", name: "Universidad Nacional de San Agustín de Arequipa", color: "#800020" },
];

export const DISTRICTS = [
  "Ate", "Barranco", "Breña", "Carabayllo", "Chaclacayo", "Chorrillos", "Cieneguilla", "Comas",
  "El Agustino", "Independencia", "Jesús María", "La Molina", "La Victoria", "Lince", "Lurigancho",
  "Lurín", "Magdalena del Mar", "Miraflores", "Pachacámac", "Pucusana", "Punta Hermosa", "Punta Negra",
  "Puente Piedra", "Rímac", "San Bartolo", "San Borja", "San Juan de Miraflores", "San Isidro",
  "San Luis", "San Martín de Porres", "San Miguel", "Santa Anita", "Santiago de Surco", "Surquillo",
  "Villa El Salvador", "Villa María del Triunfo", "Fuera de Lima / Provincia",
];

export const GENERAL_FAQ = [
  {
    q: "¿Atienden todas las universidades del Perú?",
    a: "Sí. Contamos con especialistas para UCV, PUCP, UPC, UNMSM, UTP, USMP y más universidades peruanas. Cada asesor de tesis conoce el reglamento específico de la institución y adapta el trabajo a sus exigencias particulares, ya sea para pregrado, maestría o doctorado.",
  },
  {
    q: "¿Garantizan un porcentaje bajo en Turnitin?",
    a: "Garantizamos un índice de similitud menor al 20% con reporte Turnitin oficial. Aplicamos parafraseo experto y citación correcta en formato APA 7ma edición para asegurar la originalidad de tu trabajo de investigación.",
  },
  {
    q: "¿Cuánto tiempo toma el desarrollo de una tesis completa?",
    a: "El plan de tesis toma aproximadamente 15 días hábiles. El desarrollo completo de la tesis universitaria entre 45 y 60 días, alineados al cronograma de tu universidad peruana. Si tienes urgencia para tu sustentación, también manejamos plazos especiales.",
  },
  {
    q: "¿El servicio es confidencial?",
    a: "Absolutamente. Tu información, datos y proyecto de tesis están protegidos bajo estrictos contratos de confidencialidad y ética profesional. Nunca compartimos tu trabajo de investigación con terceros.",
  },
  {
    q: "¿Me preparan para la sustentación final?",
    a: "Sí. No solo te entregamos el documento de tesis. Te preparamos con simulacros de preguntas del jurado, diseño de diapositivas profesionales y técnicas de oratoria para que llegues con total confianza a tu sustentación universitaria en Perú.",
  },
];
