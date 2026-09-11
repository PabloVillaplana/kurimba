# Kurimba · Sitio web

Sitio de una sola página para **Kurimba**, estudio de bienestar y sesiones holísticas en Costa Rica.

> *Un espacio para sanar, equilibrarte y conectar con vos.*

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Lucide Icons**
- Fuentes: Cormorant Garamond (títulos) y Jost (texto), cargadas con `next/font`

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abrí <http://localhost:3000>.

Otros comandos:

```bash
npm run build   # compila para producción y verifica tipos
npm run start   # sirve la versión compilada
npm run lint    # ESLint
npx tsc --noEmit  # solo verificación de TypeScript
```

## Dónde editar el contenido

Toda la información editable vive en **`src/config/site.ts`**:

| Qué                          | Dónde                       |
| ---------------------------- | --------------------------- |
| Número y mensaje de WhatsApp | `whatsapp`                  |
| Correo, Instagram, ubicación | `contact`                   |
| Horarios                     | `contact.hours`             |
| Sesiones, duración, precios  | `sessions`                  |
| Beneficios                   | `benefits`                  |
| Pasos de una sesión          | `steps`                     |
| Persona facilitadora         | `facilitator`               |
| Testimonios                  | `testimonials`              |
| Preguntas frecuentes         | `faqs`                      |
| Dominio público (SEO)        | `brand.url`                 |

Los valores marcados con `[PENDIENTE]` son placeholders que deben reemplazarse antes de publicar.

### Agregar una sesión

Añadí un objeto al arreglo `sessions`:

```ts
{
  id: "meditacion-guiada",
  name: "Meditación guiada",
  description: "…",
  duration: "45 minutos",
  price: "₡15 000",          // o null para "Consultá el precio"
  benefits: ["…", "…"],
  icon: "wind",              // hands | sparkles | leaf | wind | heart
  status: "available",       // o "coming-soon"
  imageHint: "Foto sugerida: …",
  image: { src: "/sesiones/meditacion.jpg", alt: "…" }, // opcional
}
```

### Fotografías

Mientras no haya fotos definitivas, cada espacio muestra un placeholder con la indicación del tipo de imagen recomendada. Para reemplazarlo:

1. Guardá la foto en `public/` (por ejemplo `public/sesiones/reiki.jpg`).
2. Pasá `image={{ src, alt }}` al componente `ImagePlaceholder` correspondiente, o completá el campo `image` de la sesión en la configuración.

## Formulario de contacto

El formulario valida en el cliente y envía a `src/app/api/contact/route.ts`, que vuelve a validar y por ahora registra el mensaje en la consola del servidor. Para recibir los mensajes por correo, conectá un proveedor (Resend, SendGrid, Nodemailer) en el punto marcado con `[PENDIENTE]` dentro de ese archivo.

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # fuentes, metadata, SEO y Open Graph
│   ├── page.tsx            # composición de secciones + JSON-LD
│   ├── globals.css         # tokens de diseño (paleta, tipografías, utilidades)
│   └── api/contact/route.ts
├── config/site.ts          # TODO el contenido editable
├── lib/
│   ├── whatsapp.ts         # construcción del enlace de WhatsApp
│   └── utils.ts
└── components/
    ├── ui/                 # Button, Logo, SectionHeading, Reveal, ImagePlaceholder…
    ├── layout/             # Navbar, Footer, WhatsAppFloat
    └── sections/           # Hero, Intro, Sessions, Benefits, HowItWorks, Reiki,
                            # About, Testimonials, FAQ, CTA, Contact
```

## Marca

Los logotipos originales están en `logos/` y copiados en `public/brand/`. La paleta del sitio parte de los colores del logo (terracota `#A9764B`, marrón `#3B3430`, gris cálido `#8A8178`) y suma verde salvia, verde profundo y neutros crema.
