import type { University } from "./types";

const QUOTE_MSG =
  "Hola, quisiera solicitar una cotización para asesoría de tesis UPC. Me gustaría recibir información sobre el proceso, precios y tiempos de entrega. Gracias";

export const upc: University = {
  slug: "asesoria-tesis-upc",
  short: "UPC",
  name: "Universidad Peruana de Ciencias Aplicadas",
  theme: { primary: "#cc0000", deep: "#0c1c38", accent: "#d4af37", paper: "#fafafa" },
  facts: { founded: 1994, city: "Lima", type: "Privada" },
  seo: {
    title: "Tesis Universidad Perú | Termina tu Tesis en UPC",
    description:
      "¿Tienes dificultades con tu tesis de la UPC? Te brindamos asesoría en investigación, formato APA y estructura para avanzar tu tesis en la UPC",
  },
  message: "Hola quiero consultar con tu asesor en tesis universidad Perú",
  hero: {
    title: "Tesis Universidad UPC: El manual de supervivencia para alcanzar tu grado sin perder el juicio",
    paragraphs: [
      "¿Alguna vez has sentido que el Taller de Investigación de la UPC es como intentar descifrar un mapa en medio de una tormenta? No te culpes. La exigencia de la tesis universidad UPC es real y, seamos sinceros, a veces el manual de estilo parece escrito en otro idioma. Pero aquí estamos nosotros, listos para ser tu GPS en este viaje académico. Si has llegado buscando cómo dominar tu tesis UPC, has aterrizado en el lugar correcto.",
    ],
    cta: { label: "Solicitar Presupuesto UPC", message: QUOTE_MSG },
    image: { src: "/images/UPC.webp", alt: "Asesoría Tesis UPC" },
  },
  sections: [
    {
      kind: "prose",
      eyebrow: "El reto",
      title: "¿Por qué la tesis de la UPC se siente como un maratón cuesta arriba?",
      paragraphs: [
        "En la UPC, el nivel de rigurosidad no es un mito. Ya sea que estés en Negocios, Ingeniería o Comunicaciones, la estructura de la UPC tesis demanda una coherencia que no deja espacio para la improvisación. ¿Te ha pasado que tienes una idea brillante pero no logras que tu asesor le dé el visto bueno? Es frustrante, lo sabemos.",
        "Escribir una tesis es como construir un edificio: si los cimientos (tu matriz de consistencia) están débiles, todo el proyecto se vendrá abajo al primer sismo de correcciones. Nosotros entendemos que tu tiempo es oro, especialmente cuando intentas equilibrar las prácticas preprofesionales con las entregas semanales de investigación.",
      ],
      illustration: "matrix",
      cta: { label: "¡Superar mi Maratón Académico!", message: QUOTE_MSG },
    },
    {
      kind: "prose",
      eyebrow: "Manual de supervivencia",
      title: "Manual de Supervivencia UPC: El método metodológico para consolidar tu grado sin perder el juicio",
      paragraphs: [
        "Nuestra propuesta se basa en un acompañamiento técnico continuo. No reemplazamos tu rol de autor; nos convertimos en el soporte analítico que audita cada capítulo. A través de sesiones de seguimiento estructuradas y la aplicación de estrictos controles de originalidad bajo las normas internacionales de citación, aseguramos que la documentación final refleje el estándar de excelencia exigido por la facultad.",
      ],
      illustration: "thesis",
      reverse: true,
      tinted: true,
    },
    {
      kind: "features",
      eyebrow: "Soporte técnico",
      title: "Líneas de Soporte Técnico Especializado",
      cols: 3,
      items: [
        { title: "Asesoría Metodológica", text: "El motor de tu investigación. Nos encargamos de que tu enfoque (ya sea cualitativo o cuantitativo) sea tan preciso como un reloj suizo. Estructuramos el procesamiento analítico y la consistencia teórica de tus variables corporativas o tecnológicas." },
        { title: "Seguimiento Continuo", text: "Tu pase a la libertad. Monitoreamos de cerca tus entregas semanales para la plataforma virtual de la universidad, adelantándonos a las observaciones habituales de los docentes de la facultad y garantizando avances sólidos sin retrocesos." },
        { title: "Corrección de Documentación", text: "El hilo de Ariadna. Nos sumergimos en la sintaxis, el aparato crítico y el formato APA. Limpiamos la redacción, corregimos inconsistencias entre objetivos y conclusiones, y blindamos tu manuscrito contra las preguntas más complejas del jurado." },
      ],
      after: [
        "Desarrolla la confianza necesaria para tu sustentación. Nosotros no solo te damos pautas; nos subimos al barco contigo. Entendemos que cada carrera en la UPC tiene su propia identidad. Por eso, el soporte es personalizado. No usamos plantillas genéricas porque tu investigación es única, igual que tu futuro profesional.",
      ],
      cta: { label: "Solicitar Presupuesto UPC", message: "Hola, solicito asesoría y corrección para mi tesis UPC" },
    },
    {
      kind: "features",
      dark: true,
      eyebrow: "Pilares",
      title: "Los pilares de una tesis UPC exitosa",
      cols: 3,
      numbered: true,
      items: [
        { title: "Rigor Metodológico", text: "El motor de tu investigación. Nos encargamos de que tu enfoque (ya sea cualitativo o cuantitativo) sea tan preciso como un reloj suizo. ¿Te confunde el SPSS o el Atlas.ti? Tranquilo, nosotros hablamos ese idioma por ti." },
        { title: "Filtro de Turnitin", text: "Tu pase a la libertad. Tratamos tu UPC tesis con una delicadeza quirúrgica, asegurando originalidad bajo las normas APA y superando con maestría el reporte de plagio." },
        { title: "Coherencia Interna", text: "El hilo de Ariadna. Aseguramos que tus objetivos, problemas y conclusiones encajen perfectamente, blindando tu trabajo contra cualquier pregunta difícil del jurado." },
      ],
      cta: { label: "Fortalecer mis Pilares" },
      ctaNote: "Respuesta en menos de 5 minutos · Asesoría personalizada",
    },
    {
      kind: "prose",
      eyebrow: "Alianza estratégica",
      title: "Nuestra propuesta: Más que una asesoría, una alianza estratégica",
      paragraphs: [
        "Nosotros no solo te damos consejos; nos subimos al barco contigo. Entendemos que cada carrera en la UPC tiene su propia \"personalidad\". Por eso, nuestra asesoría para la tesis universidad UPC es personalizada. No usamos plantillas genéricas porque tu investigación es única, igual que tu futuro profesional.",
        "¿Te imaginas entrar al aula de sustentación sintiéndote el dueño de la verdad? Esa confianza nace de saber que tu UPC tesis ha sido revisada, pulida y blindada. Nosotros te damos las herramientas, el soporte y la tranquilidad que necesitas para que tu única preocupación sea elegir el traje para tu graduación.",
      ],
      illustration: "defense",
      cta: { label: "¡Iniciar mi Alianza Estratégica!" },
    },
  ],
  conclusion: {
    text: "Lograr el grado académico es un hito que cambiará tu vida, y la tesis universidad UPC es la llave que abre esa puerta. No dejes que la frustración o la falta de tiempo posterguen tus sueños. Con la estrategia correcta, el asesoramiento adecuado y un enfoque claro en la metodología, lo que hoy parece una montaña, mañana será solo el hermoso paisaje de tu graduación.",
  },
  testimonials: {
    title: "Dictámenes y Experiencias de Egresados UPC",
    intro:
      "El respaldo de nuestro servicio se refleja en la solidez de los proyectos validados frente a las comisiones evaluadoras de la universidad. Presentamos las perspectivas de profesionales que consolidaron su proceso de titulación.",
    items: [
      { quote: "El nivel de exigencia en la Facultad de Negocios requería una articulación teórica muy compleja para los modelos de mercado. Mediante las correcciones de documentación y el seguimiento estructurado, logramos levantar todas las observaciones metodológicas en tiempo récord.", name: "Lic. Mauricio Peralta S.", role: "Egresado de la Facultad de Negocios", badge: "Aprobación con honores" },
      { quote: "El mayor inconveniente con mi proyecto de Ingeniería era la consistencia estadística de los datos correlacionales. La asesoría metodológica estructuró el marco analítico de manera impecable, brindándome la seguridad necesaria para el planeamiento de las entregas finales.", name: "Ing. Andrea Colchado L.", role: "Graduada de la Facultad de Ingeniería", badge: "Dictamen favorable" },
      { quote: "Equilibrar el trabajo con la rigurosidad formal que exige la UPC en Comunicaciones parecía insostenible. El soporte continuo en la corrección de estilo y el control de la sintaxis académica permitieron que el documento fuera aprobado sin observaciones de fondo.", name: "Lic. Renato Farfán K.", role: "Graduado de la Facultad de Comunicaciones", badge: "Sustentación exitosa" },
    ],
    note: "Cada proceso de acompañamiento técnico se ejecuta bajo los lineamientos estipulados en el Reglamento de Grados y Títulos vigente de la UPC, garantizando el rigor y la calidad documental requerida por la institución.",
  },
  faq: {
    title: "Preguntas Frecuentes - Tesis UPC",
    ctaLabel: "¡Consultar por WhatsApp!",
    ctaNote: "Respuesta inmediata · Asesoría personalizada UPC",
    items: [
      { q: "¿Cómo manejan los plazos urgentes para las entregas de la UPC?", a: "Entendemos el ritmo de los Talleres de Investigación. Por eso, nos adaptamos a tu calendario académico para que nunca llegues tarde a una entrega en el aula virtual." },
      { q: "¿Me ayudan si ya tengo observaciones de mi asesor de la UPC?", a: "¡Claro que sí! Somos expertos en \"rescatar\" tesis. Analizamos las correcciones de tu asesor y ajustamos el documento para que cumpla con todas las expectativas de la facultad." },
      { q: "¿Ustedes realizan el análisis estadístico de la tesis UPC?", a: "Así es. Contamos con especialistas en procesamiento de datos y análisis estadístico que transformarán tus encuestas o bases de datos en resultados contundentes y gráficos profesionales." },
      { q: "¿La asesoría incluye simulacros de sustentación?", a: "Definitivamente. Te preparamos para el \"momento de la verdad\" con ensayos, preguntas tipo y feedback constante para que tu oratoria esté a la altura de tu investigación." },
      { q: "¿Qué pasa si mi tesis universidad UPC tiene un alto porcentaje en Turnitin?", a: "Realizamos una reestructuración y parafraseo profundo del texto, manteniendo el sentido original pero optimizando la redacción para superar con éxito el filtro de originalidad de la universidad." },
    ],
  },
};
