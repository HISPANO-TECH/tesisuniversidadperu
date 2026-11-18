# Tesis Universidad Perú — Next.js

Migración a código propio de https://tesisuniversidadperu.com (antes WordPress + Elementor), con rediseño.

**Stack:** Next.js 16 (App Router, Turbopack, Cache Components) · React 19 · Tailwind CSS 4 · pnpm · React Three Fiber (3D) · SVG animados con CSS.

## Comandos

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # todas las páginas se generan estáticas
pnpm start
pnpm lint
```

## Páginas (mismas URLs que el sitio original)

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio (hero 3D, universidades, 6 etapas, protocolo, testimonios, FAQ) |
| `/sobre-nosotros/` | Equipo, misión/visión, garantías |
| `/contacto/` | Formulario completo, datos y mapa |
| `/asesoria-tesis-ucv/`, `/asesoria-tesis-pucp/`, `/asesoria-tesis-upc/` | Landings por universidad |
| `/tesis-utp/`, `/tesis-san-marcos/`, `/tesis-usmp/`, `/tesis-usil/`, `/tesis-unsa/` | Landings por universidad |

`/entrada/` (plantilla de demostración en lorem ipsum que quedó publicada en WordPress) redirige a `/`.

## Dónde editar

- **Datos de contacto / WhatsApp / distritos / FAQ general:** `src/lib/site.ts`
- **Contenido de cada universidad:** `src/lib/universities/*.ts` (una plantilla común: `src/components/university/UniversityPage.tsx`)
- **Ilustraciones SVG animadas:** `src/components/svg/Illustrations.tsx`
- **Escena 3D del inicio:** `src/components/three/HeroScene.tsx` (si el navegador no tiene WebGL o pide reducir movimiento, se muestra la ilustración SVG)
- **Imágenes descargadas del sitio original:** `public/images/`

## Formularios

El sitio es estático: los formularios validan los datos y abren WhatsApp (51927580985) con el mensaje prellenado. Si se quiere envío por correo, añadir un Route Handler o Server Action con un proveedor (Resend, Brevo, etc.).
