# NOVA — Página de muestra (estudio de desarrollo web)

Landing page cinematográfica de una sola página, pensada como **muestra de capacidades**
para enlazar desde tu web principal ("¿Quieres ver una muestra de lo que hacemos?") y para
**grabar reels / publicidad** navegándola en pantalla.

Construida con **Next.js 14 (App Router) · TypeScript · Tailwind CSS** (estructura shadcn) y
animaciones con **Motion**. Estética _dark cinematic_: fondos con luz ambiental animada,
glassmorphism, gradientes índigo/violeta y transiciones con easing de cine.

> **Marca placeholder:** el nombre **NOVA** y todos los textos de contacto son de ejemplo.
> Cámbialos en un único lugar: [`lib/site.ts`](./lib/site.ts).

---

## Secciones

1. **Hero** — titular con gradiente, mockup de dashboard flotante y badge Lighthouse.
2. **Stack** — marquee infinito de tecnologías.
3. **Lo que hacemos** — carrusel de capacidades (componente de [21st.dev](https://21st.dev)).
4. **Servicios** — bento grid con hover.
5. **Proceso** — timeline con línea de progreso animada al scroll.
6. **Métricas** — contadores animados.
7. **Proyectos** — tarjetas con mockups y parallax.
8. **Testimonios** — doble marquee.
9. **Contacto (CTA)** — llamada final + email.
10. **Footer**.

## Requisitos

- Node.js 18.18+ (recomendado 20/22)

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:3000
```

## Producción

```bash
npm run build
npm run start
```

Despliegue recomendado en **Vercel** (cero configuración para Next.js): importa el repo y listo.

## Personalización rápida

| Qué | Dónde |
| --- | --- |
| Nombre, tagline, email, redes, menú | `lib/site.ts` |
| Colores de marca (índigo/violeta/cian) | `app/globals.css` (variables `--brand*`) |
| Capacidades del carrusel (texto + imágenes) | `components/ui/feature-carousel.tsx` (`FEATURES`) |
| Servicios, proceso, proyectos, testimonios | `components/sections/*` |
| Logo | `components/sections/brand-mark.tsx` |

Las imágenes del carrusel usan Unsplash con **fallback de gradiente** automático: si una
imagen no carga, se muestra un degradado de marca en vez de una imagen rota (ideal para grabar).

## Tips para grabar el reel

- Usa una ventana ~1440px de ancho para que el layout luzca completo.
- Desplázate lento: las animaciones se disparan al entrar cada sección al viewport.
- El hero, el carrusel y la sección de proyectos son los momentos más "cinematográficos".

---

## Nota sobre la skill incluida

El directorio [`.claude/`](./.claude) contiene el paquete de skills **ui-ux-pro-max**
(inteligencia de diseño para asistentes de IA), instalado previamente en este repo. No forma
parte del runtime del sitio y no afecta el build ni el despliegue.
