import type { University } from "./types";

export const utp: University = {
  slug: "tesis-utp",
  short: "UTP",
  name: "Universidad Tecnológica del Perú",
  theme: { primary: "#e31937", deep: "#1f2937", accent: "#d4af37", paper: "#f9fafb" },
  facts: { founded: 1997, city: "Lima", type: "Privada" },
  seo: {
    title: "Tesis UTP: Asesoría Experta para Aprobar tu Investigación",
    description:
      "¿Atascado con tu tesis UTP? Te ayudamos con metodología, normas APA, análisis estadístico y sustentación. Asesoría personalizada.",
  },
  message: "Necesito asesoría de tesis en UTP de tesis universidad Perú",
  hero: {
    title: "Tesis UTP: Asesoría Experta para Aprobar tu Investigación sin Estrés",
    paragraphs: [
      "¿Sientes que tu proyecto de investigación en la Universidad Tecnológica del Perú se ha convertido en un muro imposible de escalar? No estás solo. Miles de estudiantes enfrentan cada semestre la presión de entregar una tesis UTP impecable mientras equilibran prácticas preprofesionales, trabajos parciales y vida personal. La exigencia académica de la UTP es alta, y los criterios de evaluación de los asesores pueden parecer cambiantes o demasiado estrictos si no se domina la metodología desde el inicio.",
      "Entendemos que llegar a la etapa final de tu carrera debería ser un motivo de orgullo, no de ansiedad. No se trata solo de \"hacer la tesis\", se trata de construir una investigación sólida que demuestre tu competencia profesional.",
    ],
    cta: { label: "Solicitar Presupuesto Gratis" },
    image: { src: "/images/UTP.webp", alt: "Estudiante UTP trabajando en su tesis" },
    highlights: [
      { title: "Normas APA UTP", text: "Aplicamos el formato oficial exigido por tu facultad." },
      { title: "Turnitin Bajo", text: "Garantizamos menos del 20% de similitud." },
      { title: "Matriz de Consistencia", text: "Validamos cada variable con rigor metodológico." },
    ],
  },
  sections: [
    {
      kind: "features",
      eyebrow: "Desafíos",
      title: "Los desafíos específicos de investigar en la UTP",
      intro:
        "La Universidad Tecnológica del Perú se caracteriza por su enfoque práctico y tecnológico, lo cual se refleja en las expectativas para los trabajos de grado. A diferencia de otras casas de estudio, la tesis UTP suele requerir una aplicación directa de la teoría a casos reales o entornos empresariales/tecnológicos actuales. Esto presenta tres dificultades principales que detectamos frecuentemente en nuestros alumnos:",
      cols: 3,
      numbered: true,
      items: [
        { title: "Alineación Metodológica", text: "Muchos estudiantes proponen objetivos que no coinciden con su diseño metodológico. En la UTP, la coherencia entre el problema, los objetivos y las hipótesis es fiscalizada con rigor. Un error aquí invalida todo el instrumento de recolección de datos." },
        { title: "Gestión de Fuentes y Normas APA", text: "La biblioteca virtual de la UTP es vasta, pero saber seleccionar fuentes de alto impacto (Scopus, Web of Science) y citarlas correctamente bajo la última edición de APA es un arte que muchos dominan a medias. Los índices de similitud (plagio) son una barrera frecuente que detiene aprobaciones." },
        { title: "Análisis de Datos Complejo", text: "Dependiendo de tu carrera (Ingeniería de Sistemas, Psicología, Administración, Derecho), el tratamiento estadístico o cualitativo varía. El uso de software como SPSS, Atlas.ti o incluso Excel avanzado para la interpretación de resultados suele ser el punto donde más estudiantes se estancan, generando conclusiones débiles que no responden a los objetivos planteados." },
      ],
      after: [
        "Errores comunes en la matriz de consistencia, fallas en el planteamiento del problema o un manejo inadecuado de las normas APA suelen resultar en observaciones constantes que retrasan tu egreso. Si has llegado hasta aquí buscando una solución real para desbloquear tu avance académico, has encontrado al aliado estratégico que necesitas.",
        "No se trata solo de \"hacer la tesis\", se trata de construir una investigación sólida que demuestre tu competencia profesional y responda a los estándares exigentes de la Universidad Tecnológica del Perú.",
      ],
    },
    {
      kind: "features",
      eyebrow: "Nuestro método",
      title: "Cómo transformamos tu caos académico en una tesis aprobada",
      intro:
        "Nuestra asesoría especializada en tesis UTP no es un servicio de \"relleno\" ni de redacción fantasma; es un acompañamiento pedagógico y técnico diseñado para que tú seas el protagonista de tu éxito, pero con las herramientas correctas. Intervenimos en las etapas críticas para garantizar calidad y viabilidad:",
      image: { src: "/images/estudiantes-colaborando.jpg", alt: "Estudiantes UTP colaborando en su tesis" },
      items: [
        { title: "Orientación Metodológica Precisa", text: "Revisamos y estructuramos tu matriz de consistencia para asegurar que cada variable esté operativizada correctamente. Definimos juntos el enfoque (cuantitativo, cualitativo o mixto) que mejor se adapte a tu realidad y a las exigencias de tu facultad en la UTP." },
        { title: "Apoyo en Investigación y Estado del Arte", text: "Te guiamos en la búsqueda estratégica de antecedentes nacionales e internacionales recientes. Te enseñamos a sintetizar la información para construir un marco teórico robusto que sustente tu investigación, evitando el copia-pega y fomentando el pensamiento crítico." },
        { title: "Análisis Estadístico y Procesamiento de Datos", text: "Si tu estudio lo requiere, nos encargamos de la tabulación, procesamiento e interpretación de datos. Utilizamos las herramientas estadísticas adecuadas para probar tus hipótesis con rigor científico, presentando los resultados en gráficos y tablas claras y profesionales." },
        { title: "Dominio de Normas APA y Anti-plagio", text: "Realizamos una revisión exhaustiva de citaciones y referencias bibliográficas. Aplicamos filtros de originalidad previos para asegurar que tu tesis UTP cumpla con los porcentajes de similitud aceptables por el repositorio institucional, blindándote contra observaciones formales." },
        { title: "Preparación para la Sustentación", text: "Escribir bien no basta; debes defender bien. Te preparamos con simulacros de sustentación, diseñamos diapositivas de alto impacto y te entrenamos para responder las preguntas difíciles del jurado calificador con seguridad y solvencia técnica." },
      ],
      cta: { label: "¡Quiero empezar mi asesoría UTP!" },
    },
    {
      kind: "gallery",
      images: [
        { src: "/images/analisis-datos.jpg", alt: "Análisis de datos tesis UTP" },
        { src: "/images/metodologia.jpg", alt: "Metodología rigurosa UTP" },
      ],
    },
    {
      kind: "features",
      dark: true,
      eyebrow: "Por qué elegirnos",
      title: "Por qué elegir nuestra asesoría para tu tesis en la UTP",
      intro:
        "No somos una fábrica de textos genéricos. Entendemos la dinámica interna de la Universidad Tecnológica del Perú y los perfiles específicos de sus escuelas profesionales. Al trabajar con nosotros, obtienes beneficios claros que marcan la diferencia entre aplazar y aprobar:",
      cols: 2,
      items: [
        { title: "Ahorro de Tiempo Valioso", text: "Deja de dar vueltas en círculos. Nuestra experiencia acelera el proceso de correcciones, permitiéndote enfocarte en tus otras materias o en tu vida laboral." },
        { title: "Confianza y Tranquilidad Mental", text: "Elimina la ansiedad de las entregas. Saber que tu trabajo ha sido revisado por expertos te da la seguridad necesaria para presentar cada avance con la frente en alto." },
        { title: "Personalización Total", text: "Adaptamos el lenguaje, el tono y la profundidad técnica a tu carrera específica. No es lo mismo una tesis de Ingeniería Industrial que una de Ciencias de la Comunicación; nosotros hablamos tu idioma profesional." },
        { title: "Disponibilidad y Respuesta Rápida", text: "Sabemos que las fechas de entrega en la UTP son innegociables. Nuestro equipo está atento a tus dudas y avances, ofreciendo retroalimentación ágil para que nunca te quedes bloqueado antes de una entrega importante." },
      ],
    },
    {
      kind: "prose",
      eyebrow: "Da el paso",
      title: "Da el paso definitivo hacia tu título profesional",
      paragraphs: [
        "Tu título universitario es la llave que abrirá las puertas de tu futuro laboral. No permitas que una tesis UTP mal enfocada retrase tus planes de vida ni afecte tu autoestima profesional. Ya has invertido años de esfuerzo, dinero y dedicación; asegura esa inversión con el apoyo adecuado.",
        "Deja de luchar solo contra el reloj y los requisitos académicos. Convierte tu investigación en tu mejor carta de presentación profesional. Estamos listos para analizar tu caso específico y diseñar un plan de acción a tu medida.",
      ],
      illustration: "defense",
      cta: { label: "Asegurar mi Aprobación" },
    },
  ],
  conclusion: {
    text: "Lograr el grado académico es un hito que cambiará tu vida, y la tesis universidad UTP es la llave que abre esa puerta. No dejes que la frustración o la falta de tiempo posterguen tus sueños. Con la estrategia correcta, el asesoramiento adecuado y un enfoque claro en la metodología, lo que hoy parece una montaña, mañana será solo el hermoso paisaje de tu graduación.",
  },
  faq: {
    title: "Preguntas Frecuentes sobre la Asesoría Tesis UTP",
    ctaLabel: "Hablar con un Asesor por WhatsApp",
    items: [
      { q: "¿Cuánto tiempo toma desarrollar una tesis UTP con su ayuda?", a: "El tiempo depende de tu punto de partida y de la complejidad de tu tema. Sin embargo, con nuestra metodología organizada, podemos reducir significativamente los tiempos de corrección y reproceso, optimizando cada semana de trabajo." },
      { q: "¿Me ayudan si mi asesor de la UTP ya me ha hecho varias observaciones?", a: "Sí, este es uno de nuestros servicios más solicitados. Analizamos las observaciones de tu asesor, identificamos la raíz del problema (metodológico, formal o de fondo) y te guiamos para subsanarlas correctamente en la siguiente entrega." },
      { q: "¿Realizan el análisis estadístico para carreras de ingeniería o ciencias sociales?", a: "Absolutamente. Contamos con especialistas en estadística aplicada que dominan software como SPSS, Stata, R y Excel avanzado, asegurando que la interpretación de tus datos sea técnicamente irreprochable." },
      { q: "¿La asesoría incluye preparación para la sustentación oral?", a: "Sí. Una vez aprobado el escrito, trabajamos en tu discurso, diseño de diapositivas y técnicas de oratoria para que defiendas tu tesis UTP con autoridad y claridad ante el jurado." },
      { q: "¿Garantizan la aprobación de la tesis?", a: "Garantizamos la calidad metodológica, la originalidad y el cumplimiento de las normas académicas vigentes. La aprobación final depende de tu defensa oral y de la subjetividad del jurado, pero te preparamos para maximizar tus probabilidades de éxito al mínimo detalle." },
    ],
  },
};
