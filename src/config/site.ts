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
  url: "https://kurimba.vercel.app", // [PENDIENTE] cambiar cuando exista dominio propio
  locale: "es_CR",
} as const;

/* ------------------------------------------------------------
 * SEO
 * ---------------------------------------------------------- */
export const seo = {
  /** Título de la portada (máx. ~60 caracteres). */
  homeTitle: "Kurimba · Reiki y sesiones holísticas en Costa Rica",
  /** Descripción de la portada (máx. ~155 caracteres). */
  homeDescription:
    "Sesiones de Reiki y experiencias holísticas en Costa Rica, en nuestro espacio o a domicilio, para bajar el ritmo, liberar tensiones y reconectar con vos.",
  /** Código de verificación de Google Search Console (meta tag). Dejar vacío si se verifica por DNS. */
  googleSiteVerification: "", // [PENDIENTE] ej. "AbC123..."
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
    /^sesi[oó]n\b/i.test(sessionName)
      ? `Hola, vi la página de Kurimba y me gustaría agendar una ${sessionName.charAt(0).toLowerCase()}${sessionName.slice(1)}.`
      : `Hola, vi la página de Kurimba y me gustaría agendar una sesión de ${sessionName}.`,
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
  /** Mismos horarios en formato para datos estructurados (schema.org). Mantener sincronizado. */
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    }, // [PENDIENTE]
    { days: ["Saturday"], opens: "09:00", closes: "13:00" }, // [PENDIENTE]
  ],
} as const;

/* ------------------------------------------------------------
 * Servicio a domicilio
 * ---------------------------------------------------------- */
export const homeService = {
  enabled: true,
  label: "Disponible a domicilio",
  title: "También llegamos a donde estés",
  text: "Si preferís vivir la experiencia en la comodidad de tu casa u oficina, ofrecemos sesiones a domicilio. Llevamos todo lo necesario para crear un ambiente tranquilo en tu propio espacio.",
  coverage: "Gran Área Metropolitana, Costa Rica", // [PENDIENTE] zonas de cobertura
  note: "Consultá disponibilidad y costo de traslado por WhatsApp.", // [PENDIENTE] ajustar
} as const;

/* ------------------------------------------------------------
 * Navegación
 * ---------------------------------------------------------- */
export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Sesiones", href: "/sesiones" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
] as const;

/** Rutas del sitio (se usan en el sitemap y en enlaces internos). */
export const routes = {
  home: "/",
  about: "/nosotros",
  sessions: "/sesiones",
  session: (slug: string) => `/sesiones/${slug}`,
  faq: "/preguntas-frecuentes",
  contact: "/contacto",
  privacy: "/aviso-de-privacidad",
  /** Redirige a WhatsApp con el mensaje precargado (ver src/app/agendar/route.ts). */
  book: "/agendar",
} as const;

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
  /** Si la sesión puede realizarse a domicilio. */
  homeService?: boolean;
  /** Indicación de la foto que debe ir en la tarjeta. */
  imageHint: string;
  /** Opcional: ruta a una imagen real en /public. Si no existe, se muestra un placeholder. */
  image?: { src: string; alt: string };
  /**
   * Contenido de la página dedicada (/sesiones/[id]).
   * Solo se genera página para sesiones con status "available".
   */
  page?: {
    /** Título para buscadores (máx. ~60 caracteres). */
    seoTitle: string;
    /** Descripción para buscadores (máx. ~155 caracteres). */
    seoDescription: string;
    intro: string;
    sections: { title: string; text: string }[];
    forWhom: string[];
    faqs: { question: string; answer: string }[];
  };
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
    homeService: true,
    imageHint:
      "Foto sugerida: manos abiertas sobre una persona recostada, luz natural cálida, tonos neutros.",
    page: {
      seoTitle: "Reiki en Costa Rica: sesiones de balance energético",
      seoDescription:
        "Sesiones de Reiki en Costa Rica, en nuestro espacio o a domicilio, para liberar tensiones, encontrar calma y recuperar tu equilibrio. Agendá por WhatsApp.",
      intro:
        "El Reiki es una técnica de liberación y balance energético. Trabajamos con la energía vital para desbloquear, armonizar y restaurar la energía de nuestro cuerpo. La sesión se realiza con las manos, sin tocar directamente el cuerpo, en un espacio pensado para bajar el ritmo y volver a conectar con tu bienestar.",
      sections: [
        {
          title: "Cómo es una sesión de Reiki",
          text: "Empezamos conversando unos minutos sobre cómo te sentís y qué necesitás. Luego te recostás cómodamente, con la ropa puesta, y la persona facilitadora coloca sus manos a una corta distancia de distintas zonas del cuerpo. Muchas personas sienten calor, hormigueo o una relajación profunda; otras simplemente descansan. Al cerrar, compartimos recomendaciones sencillas para seguir cuidando tu bienestar.",
        },
        {
          title: "Qué podés sentir",
          text: "Cada experiencia es distinta. Es común salir con una sensación de calma, con menos tensión en el cuerpo y con la mente más despejada. El Reiki es una práctica complementaria de bienestar: acompaña, no sustituye la atención médica o psicológica profesional.",
        },
        {
          title: "Cómo prepararte",
          text: "No necesitás nada especial. Llegá con ropa cómoda, evitá comidas muy pesadas justo antes y, si podés, reservá unos minutos después de la sesión para no salir con prisa.",
        },
      ],
      forWhom: [
        "Personas que viven con estrés o tensión acumulada",
        "Quienes buscan un espacio de pausa y descanso profundo",
        "Personas que nunca probaron una práctica holística y quieren empezar con calma",
        "Quienes desean complementar su proceso de bienestar con una experiencia de relajación",
      ],
      faqs: [
        {
          question: "¿El Reiki tiene alguna relación con una religión?",
          answer:
            "No. El Reiki es una práctica de bienestar que no requiere ninguna creencia particular. Solo necesitás la disposición de darte un momento de calma.",
        },
        {
          question: "¿Cuántas sesiones necesito?",
          answer:
            "Depende de vos. Muchas personas empiezan con una sesión para conocer la experiencia y luego deciden si quieren continuar. Con gusto te orientamos según lo que buscás.",
        },
        {
          question: "¿Puedo recibir la sesión de Reiki en mi casa?",
          answer:
            "Sí. Ofrecemos sesiones a domicilio. Solo necesitamos un espacio tranquilo donde podás recostarte; nosotros llevamos lo demás. Consultá la disponibilidad y el costo de traslado por WhatsApp.",
        },
        {
          question: "¿Puedo combinar el Reiki con otras terapias o tratamientos?",
          answer:
            "Sí. El Reiki es una práctica complementaria y no interfiere con tratamientos médicos o psicológicos. Si tenés dudas, consultá con tu profesional de salud.",
        },
      ],
    },
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
    homeService: true,
    imageHint:
      "Foto sugerida: detalle del espacio con plantas, velas o textiles naturales, ambiente sereno.",
    page: {
      seoTitle: "Sesión holística personalizada en Costa Rica",
      seoDescription:
        "Experiencia holística adaptada a lo que necesitás hoy, en nuestro espacio o a domicilio en Costa Rica, para tu equilibrio físico, mental y emocional.",
      intro:
        "No todas las personas necesitan lo mismo, ni el mismo día. La sesión holística personalizada parte de una conversación sobre cómo estás y qué buscás, y a partir de ahí combinamos diferentes herramientas de bienestar para acompañarte de la forma más cercana posible.",
      sections: [
        {
          title: "Cómo se construye tu sesión",
          text: "Al inicio conversamos con calma sobre tu momento actual: cómo dormís, qué te tiene tenso, qué te gustaría sentir al salir. Con esa información, la persona facilitadora propone una combinación de herramientas, por ejemplo balance energético, respiración consciente o un espacio de relajación guiada. Vos siempre podés decir qué te sentís cómodo de vivir y qué preferís dejar fuera.",
        },
        {
          title: "Qué podés sentir",
          text: "La intención es que salgás con más calma, menos tensión y una mayor claridad sobre lo que necesitás. Como toda práctica holística, es un acompañamiento complementario y no sustituye la atención médica o psicológica profesional.",
        },
        {
          title: "Después de la sesión",
          text: "Cerramos compartiendo recomendaciones sencillas y realistas para tu día a día, pensadas para que el bienestar no se quede solo en el estudio.",
        },
      ],
      forWhom: [
        "Personas que quieren una experiencia adaptada a su momento y no un protocolo fijo",
        "Quienes buscan un espacio para ordenar lo que sienten y bajar el ritmo",
        "Personas que ya probaron Reiki y quieren explorar otras herramientas de bienestar",
        "Quienes prefieren un acompañamiento cercano y conversado",
      ],
      faqs: [
        {
          question: "¿Qué herramientas se pueden incluir en la sesión?",
          answer:
            "Depende de lo que necesités ese día. Puede incluir balance energético, respiración consciente, relajación guiada o un espacio de conversación. Siempre lo definimos juntos al inicio.",
        },
        {
          question: "¿Es una sesión de terapia psicológica?",
          answer:
            "No. Es una experiencia complementaria de bienestar. Si estás en un proceso terapéutico, podés continuarlo y usar esta sesión como un espacio adicional de calma.",
        },
        {
          question: "¿Puedo pedir que no haya ningún contacto físico?",
          answer:
            "Sí. Todo lo que ocurre en la sesión se conversa antes y se respeta lo que vos decidás.",
        },
      ],
    },
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
 * Sobre Kurimba
 * ---------------------------------------------------------- */
export const about = {
  title: "Sobre Kurimba",
  intro:
    "Un espacio creado para que cualquier persona pueda detenerse, respirar y volver a sentirse en casa consigo misma.",
  paragraphs: [
    "Kurimba nace de una idea sencilla: en medio del ritmo de todos los días, necesitamos lugares donde bajar la velocidad. Un espacio tranquilo, cálido y sin prisa, donde el bienestar no sea un lujo sino un momento que te regalás.",
    "Ofrecemos sesiones y experiencias holísticas, como el Reiki y la sesión holística personalizada, pensadas para acompañarte a liberar tensiones, recuperar tu equilibrio y reconectar con vos. No hay protocolos complicados ni promesas exageradas: solo un acompañamiento cercano, respetuoso y a tu ritmo.",
    "Creemos en una espiritualidad sencilla y moderna, abierta a todas las personas, sin importar si es tu primera sesión o si ya conocés estas prácticas. Llegás como estás, y desde ahí empezamos.",
    "Y si preferís no moverte de tu espacio, también ofrecemos sesiones a domicilio: llevamos la experiencia a tu casa u oficina, con la misma calma y el mismo cuidado.",
  ],
  /** Valores que se muestran como pequeñas tarjetas. */
  values: [
    { title: "Cercanía", text: "Te escuchamos antes, durante y después de cada sesión." },
    { title: "Respeto", text: "Vos decidís qué querés vivir y qué preferís dejar fuera." },
    { title: "Calma", text: "Un ambiente pensado para que el cuerpo y la mente descansen." },
  ],
  imageHint:
    "Foto sugerida: el espacio de Kurimba con luz natural, plantas, textiles en tonos tierra y una camilla o cojines. Ambiente cálido y ordenado.",
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
    name: "Marcelo Villanueva",
    detail: "Sesión de Reiki",
    isPlaceholder: true,
  },
  {
    quote:
      "Me gustó que primero conversamos sobre cómo me sentía. Sentí que la sesión realmente era para mí.",
    name: "Juan Monge",
    detail: "Sesión holística personalizada",
    isPlaceholder: true,
  },
  {
    quote:
      "Nunca había probado nada parecido y me explicaron todo con mucha claridad. Me sentí en confianza desde el inicio.",
    name: "Ana Gonzalez",
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
    question: "¿Hacen sesiones a domicilio?",
    answer: `Sí. Podemos llegar a tu casa u oficina dentro de ${homeService.coverage}. Llevamos todo lo necesario para crear un ambiente tranquilo. ${homeService.note}`,
  },
  {
    question: "¿Dónde está ubicado Kurimba?",
    answer: `Estamos en ${contact.location.short}. Al agendar tu cita te compartimos la ubicación exacta y las indicaciones para llegar. Si preferís, también podemos ir a domicilio.`,
  },
  {
    question: "¿Estas sesiones sustituyen un tratamiento médico?",
    answer:
      "No. Las sesiones holísticas son prácticas complementarias de bienestar. No sustituyen la atención médica o psicológica profesional. Si estás en tratamiento, podés seguir con él y complementarlo con estos espacios de calma.",
  },
];
