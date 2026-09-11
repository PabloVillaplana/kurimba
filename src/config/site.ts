/**
 * ============================================================
 *  CONFIGURACIÓN EDITABLE DE KURIMBA
 * ============================================================
 *  Todo lo que cambia con frecuencia vive en este archivo:
 *  contacto, WhatsApp, redes, horarios, sesiones, precios,
 *  beneficios, testimonios, preguntas frecuentes y datos de
 *  la persona facilitadora.
 *
 *  Los valores entre corchetes, por ejemplo "[PENDIENTE]",
 *  son placeholders que deben reemplazarse antes de publicar.
 * ============================================================
 */

/* ------------------------------------------------------------
 * Marca
 * ---------------------------------------------------------- */
export const brand = {
  name: "Kurimba",
  tagline: "Equilibrio y bienestar",
  slogan: "Un espacio para sanar, equilibrarte y conectar con vos",
  description:
    "En Kurimba te ofrecemos sesiones y experiencias holísticas creadas para ayudarte a bajar el ritmo, liberar tensiones y reconectar con tu bienestar físico, mental y emocional.",
  /** URL pública del sitio. Se usa para SEO y para compartir en redes. */
  url: "https://kurimba.cr", // [PENDIENTE] cambiar por el dominio real
  locale: "es_CR",
} as const;

/* ------------------------------------------------------------
 * WhatsApp
 * ---------------------------------------------------------- */
export const whatsapp = {
  /** Número en formato internacional, solo dígitos (sin "+", espacios ni guiones). */
  number: "50670855850", // +506 7085-5850
  /** Mensaje precargado que verá la persona al abrir WhatsApp. */
  defaultMessage:
    "Hola, vi la página de Kurimba y me gustaría recibir información para agendar una sesión.",
  /** Mensaje cuando la persona hace clic desde una sesión específica. */
  sessionMessage: (sessionName: string) =>
    `Hola, vi la página de Kurimba y me gustaría agendar una sesión de ${sessionName}.`,
} as const;

/* ------------------------------------------------------------
 * Contacto y redes
 * ---------------------------------------------------------- */
export const contact = {
  email: "hola@kurimba.cr", // [PENDIENTE]
  instagram: {
    handle: "@kurimba.cr", // [PENDIENTE]
    url: "https://instagram.com/kurimba.cr", // [PENDIENTE]
  },
  location: {
    short: "San José, Costa Rica", // [PENDIENTE] ciudad / zona
    address: "[PENDIENTE] Dirección exacta o punto de referencia",
    mapsUrl: "https://maps.google.com/?q=San+Jose,+Costa+Rica", // [PENDIENTE]
  },
  hours: [
    { days: "Lunes a viernes", time: "9:00 a. m. – 6:00 p. m." }, // [PENDIENTE]
    { days: "Sábados", time: "9:00 a. m. – 1:00 p. m." }, // [PENDIENTE]
    { days: "Domingos", time: "Cerrado" },
  ],
} as const;

/* ------------------------------------------------------------
 * Navegación
 * ---------------------------------------------------------- */
export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Sesiones", href: "#sesiones" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
] as const;

/* ------------------------------------------------------------
 * Sesiones
 * ---------------------------------------------------------- */
export type SessionIcon = "hands" | "sparkles" | "leaf" | "wind" | "heart";

export type Session = {
  /** Identificador único, se usa como ancla y key. */
  id: string;
  name: string;
  description: string;
  duration: string;
  /** Texto libre. Usá null para mostrar "Consultá el precio". */
  price: string | null;
  benefits: string[];
  icon: SessionIcon;
  status: "available" | "coming-soon";
  /** Indicación de la foto que debe ir en la tarjeta. */
  imageHint: string;
  /** Opcional: ruta a una imagen real en /public. Si no existe, se muestra un placeholder. */
  image?: { src: string; alt: string };
};

export const sessions: Session[] = [
  {
    id: "reiki",
    name: "Reiki",
    description:
      "Una técnica de balance energético que busca desbloquear, armonizar y restaurar la energía del cuerpo. Se realiza con las manos, sin necesidad de tocar el cuerpo, y ofrece un espacio de calma y relajación.",
    duration: "60 minutos", // [PENDIENTE] confirmar
    price: null, // [PENDIENTE] ej. "₡25 000"
    benefits: ["Relajación profunda", "Liberación de tensiones", "Sensación de calma"],
    icon: "hands",
    status: "available",
    imageHint:
      "Foto sugerida: manos abiertas sobre una persona recostada, luz natural cálida, tonos neutros.",
  },
  {
    id: "sesion-holistica",
    name: "Sesión holística personalizada",
    description:
      "Una experiencia adaptada a lo que necesitás en este momento, combinando diferentes herramientas para acompañar tu bienestar físico, mental y emocional.",
    duration: "75 minutos", // [PENDIENTE] confirmar
    price: null, // [PENDIENTE]
    benefits: ["Adaptada a vos", "Herramientas combinadas", "Acompañamiento cercano"],
    icon: "sparkles",
    status: "available",
    imageHint:
      "Foto sugerida: detalle del espacio con plantas, velas o textiles naturales, ambiente sereno.",
  },
  {
    id: "proximamente",
    name: "Próximamente",
    description:
      "Estamos preparando nuevas experiencias para acompañar tu bienestar. Muy pronto vas a poder descubrirlas aquí.",
    duration: "Por definir",
    price: null,
    benefits: ["Nuevas experiencias", "Mismo espacio de calma"],
    icon: "leaf",
    status: "coming-soon",
    imageHint: "Foto sugerida: composición abstracta natural (hojas, piedras, agua) en tonos tierra.",
  },
];

/* ------------------------------------------------------------
 * Beneficios
 * ---------------------------------------------------------- */
export type BenefitIcon = "wind" | "feather" | "waves" | "pause" | "heart" | "compass";

export const benefits: { icon: BenefitIcon; title: string; text: string }[] = [
  {
    icon: "wind",
    title: "Promueve una sensación de calma",
    text: "Un espacio para respirar más despacio y aquietar la mente.",
  },
  {
    icon: "feather",
    title: "Ayuda a reducir tensiones",
    text: "Acompañamos al cuerpo a soltar lo que viene cargando.",
  },
  {
    icon: "waves",
    title: "Favorece la relajación",
    text: "Un momento para aflojar y descansar de verdad.",
  },
  {
    icon: "pause",
    title: "Brinda un espacio de pausa personal",
    text: "Tiempo solo para vos, sin prisa ni pendientes.",
  },
  {
    icon: "heart",
    title: "Acompaña el equilibrio emocional",
    text: "Un lugar seguro para sentir y ordenar lo que pasa adentro.",
  },
  {
    icon: "compass",
    title: "Facilita la conexión con uno mismo",
    text: "Volver a escucharte y reconocer lo que necesitás.",
  },
];

export const disclaimer =
  "Las sesiones holísticas son prácticas complementarias de bienestar y no sustituyen la atención médica o psicológica profesional.";

/* ------------------------------------------------------------
 * Cómo es una sesión
 * ---------------------------------------------------------- */
export const steps = [
  {
    title: "Conversamos",
    text: "Conocemos cómo te sentís y qué necesitás.",
  },
  {
    title: "Vivís la experiencia",
    text: "Te acompañamos en un ambiente seguro, tranquilo y respetuoso.",
  },
  {
    title: "Cerramos la sesión",
    text: "Compartimos recomendaciones para continuar cuidando tu bienestar.",
  },
] as const;

/* ------------------------------------------------------------
 * Persona facilitadora
 * ---------------------------------------------------------- */
export const facilitator = {
  name: "[Nombre de la persona facilitadora]", // [PENDIENTE]
  role: "Fundadora de Kurimba", // [PENDIENTE] ajustar
  /** No inventar certificaciones: completar con la formación real. */
  certifications: [
    "[Formación o certificación 1]",
    "[Formación o certificación 2]",
    "[Formación o certificación 3]",
  ],
  story:
    "[Texto temporal editable] Aquí va la historia personal: cómo llegó al mundo del bienestar, qué la motivó a formarse y qué descubrió en el camino.",
  motivation:
    "[Texto temporal editable] Aquí va la motivación para crear Kurimba: qué quiere ofrecerle a cada persona que llega y qué significa este espacio.",
  photoHint:
    "Foto sugerida: retrato de medio cuerpo, luz natural, fondo neutro o del estudio, expresión cálida.",
} as const;

/* ------------------------------------------------------------
 * Testimonios (TEMPORALES — reemplazar con testimonios reales)
 * ---------------------------------------------------------- */
export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  /** Mientras sea true, la tarjeta muestra la etiqueta "Ejemplo". */
  isPlaceholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Llegué con la cabeza a mil y salí con una calma que hacía mucho no sentía. Fue un espacio muy respetuoso.",
    name: "Nombre de ejemplo",
    detail: "Sesión de Reiki",
    isPlaceholder: true,
  },
  {
    quote:
      "Me gustó que primero conversamos sobre cómo me sentía. Sentí que la sesión realmente era para mí.",
    name: "Nombre de ejemplo",
    detail: "Sesión holística personalizada",
    isPlaceholder: true,
  },
  {
    quote:
      "Nunca había probado nada parecido y me explicaron todo con mucha claridad. Me sentí en confianza desde el inicio.",
    name: "Nombre de ejemplo",
    detail: "Primera experiencia",
    isPlaceholder: true,
  },
];

/* ------------------------------------------------------------
 * Preguntas frecuentes
 * ---------------------------------------------------------- */
export const faqs: { question: string; answer: string }[] = [
  {
    question: "¿Necesito tener experiencia con sesiones holísticas?",
    answer:
      "No. Muchas personas llegan a Kurimba sin haber probado nunca una sesión. Antes de empezar conversamos, te explicamos todo con calma y resolvemos cualquier duda que tengás.",
  },
  {
    question: "¿Cómo debo prepararme para mi cita?",
    answer:
      "No necesitás nada especial. Te recomendamos llegar con unos minutos de anticipación, evitar comidas muy pesadas justo antes y venir con la disposición de darte un momento para vos.",
  },
  {
    question: "¿Cuánto dura una sesión?",
    answer:
      "Depende de la experiencia que elijás. La mayoría de las sesiones dura entre 60 y 75 minutos, incluyendo el espacio de conversación al inicio y el cierre.",
  },
  {
    question: "¿Durante el Reiki se toca el cuerpo?",
    answer:
      "No es necesario. El Reiki se realiza con las manos a una corta distancia del cuerpo. Si en algún momento preferís que no haya ningún contacto, simplemente nos lo decís.",
  },
  {
    question: "¿Qué ropa debo utilizar?",
    answer:
      "Ropa cómoda y que te permita relajarte. No hace falta cambiarse: las sesiones se realizan con la ropa puesta.",
  },
  {
    question: "¿Puedo agendar por WhatsApp?",
    answer:
      "Sí. Es la forma más sencilla. Escribinos por WhatsApp, te contamos la disponibilidad y coordinamos el día y la hora que mejor te funcione.",
  },
  {
    question: "¿Dónde está ubicado Kurimba?",
    answer: `Estamos en ${contact.location.short}. Al agendar tu cita te compartimos la ubicación exacta y las indicaciones para llegar.`,
  },
  {
    question: "¿Estas sesiones sustituyen un tratamiento médico?",
    answer:
      "No. Las sesiones holísticas son prácticas complementarias de bienestar. No sustituyen la atención médica o psicológica profesional. Si estás en tratamiento, podés seguir con él y complementarlo con estos espacios de calma.",
  },
];
