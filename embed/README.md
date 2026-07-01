# Insertar la sección "Una muestra de nuestras capacidades" en otro sitio

Este paquete te permite copiar **solo esa sección** (encabezado + carrusel de
capacidades) a tu página web principal.

Contenido de esta carpeta:

- [`feature-carousel.tsx`](./feature-carousel.tsx) — el carrusel, **autocontenido** (sin imports locales).
- [`capabilities-section.tsx`](./capabilities-section.tsx) — la sección completa (título + texto + carrusel).

---

## Requisitos del sitio destino

- **React 18+** (Next.js, Vite, CRA, Remix, Astro con islas React, etc.)
- **Tailwind CSS** (el componente usa clases de Tailwind, incluidas utilidades arbitrarias como `blur-[2px]`)

> ¿Tu sitio **no** usa React o **no** usa Tailwind? Mira la sección "Si tu sitio no es React/Tailwind" al final.

## Dependencias a instalar

```bash
npm i motion @hugeicons/react @hugeicons/core-free-icons
```

(Si usas pnpm/yarn: `pnpm add ...` / `yarn add ...`.)

## Pasos

1. Copia los **dos archivos** de esta carpeta a tu proyecto, por ejemplo:
   - `components/feature-carousel.tsx`
   - `components/capabilities-section.tsx`
   (Deja los dos juntos: `capabilities-section.tsx` importa `./feature-carousel`.)

2. Renderiza la sección donde quieras que aparezca:

   ```tsx
   import { CapabilitiesSection } from "@/components/capabilities-section";

   export default function Page() {
     return (
       <main>
         {/* ...tu contenido... */}
         <CapabilitiesSection />
         {/* ...más contenido... */}
       </main>
     );
   }
   ```

3. **Next.js App Router:** ambos archivos ya llevan `"use client"`, así que
   funcionan tal cual. **Next.js Pages Router / Vite / CRA:** no necesitas la
   directiva, pero dejarla no rompe nada.

Eso es todo. El carrusel gira solo cada 3 s, se pausa al pasar el mouse y avanza
al hacer clic en cada chip.

## Personalización

- **Contenido** (disciplinas, textos e imágenes): edita el array `FEATURES`
  al inicio de `feature-carousel.tsx`.
- **Color de marca:** cambia las constantes `ACCENT` (panel índigo) y `PANEL_BG`
  (panel oscuro) en `feature-carousel.tsx`.
- **Imágenes:** usa las URLs que quieras. Hay un **fallback de gradiente**: si una
  imagen no carga, se muestra un degradado en vez de una imagen rota.
- **Título / subtítulo:** están en `capabilities-section.tsx`. El `<h2>` hereda el
  color de texto de tu página (funciona en fondos claros u oscuros).

### Next.js + `next/image` (opcional)

El componente usa `<img>` normal para ser portable. Si prefieres `next/image` y
usas dominios remotos, añade el host a `next.config`:

```js
images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] }
```

## Notas de tema

El widget dibuja sus **propias** superficies (panel índigo a la izquierda, panel
oscuro a la derecha), por lo que se ve bien tanto en páginas claras como oscuras
sin configurar tokens. Si tu proyecto usa **shadcn/ui** y prefieres tokens, puedes
reemplazar los colores fijos por `bg-background`, `text-foreground`,
`border-border`, `bg-secondary/30`, etc.

## Si tu sitio no es React/Tailwind

- **Sin Tailwind pero con React:** hay que traducir las clases de Tailwind a CSS
  plano (o incluir Tailwind). Es más trabajo; pídele a tu asistente que lo haga.
- **WordPress / HTML plano / otro framework (Vue, Angular, Svelte):** la vía más
  simple es incrustar la sección como un widget React montado en un contenedor, o
  reimplementar el componente en tu framework. Indícaselo a tu asistente con acceso
  al repo.

---

## Prompt listo para pegar en la otra conversación

> Copia y pega esto en la conversación que tiene acceso al repo de tu página principal,
> y adjunta (o copia) los archivos `feature-carousel.tsx` y `capabilities-section.tsx`.

```text
Quiero insertar una sección llamada "Una muestra de nuestras capacidades" en la
página principal de este repo. Te paso dos archivos React + Tailwind autocontenidos:
feature-carousel.tsx y capabilities-section.tsx.

Por favor:
1. Detecta el stack del repo (framework, si usa React, Tailwind, TypeScript, shadcn,
   App Router vs Pages Router) y dime qué encontraste antes de tocar nada.
2. Instala las dependencias necesarias: motion, @hugeicons/react,
   @hugeicons/core-free-icons.
3. Coloca los dos archivos en la carpeta de componentes del proyecto (juntos, porque
   capabilities-section.tsx importa ./feature-carousel) y ajusta las rutas/alias de
   import a las convenciones del repo.
4. Renderiza <CapabilitiesSection /> en la página principal, en la posición que tenga
   más sentido (dime dónde lo pusiste).
5. Si el repo usa shadcn/ui, opcionalmente cambia los colores fijos (ACCENT, PANEL_BG
   y las clases de color) por los tokens del tema (bg-background, text-foreground,
   border-border, bg-secondary/30).
6. Si el repo NO usa Tailwind o NO usa React, dime la mejor estrategia de integración
   antes de proceder (traducir a CSS, montar como widget React, o reimplementar).
7. Verifica que compila/levanta (build o dev server) y muéstrame una captura o
   confirmación de que la sección se ve bien. No hagas commit ni PR sin mi visto bueno.

Notas: los archivos ya traen "use client" (ok para Next App Router). Las imágenes usan
Unsplash con fallback de gradiente. El contenido se edita en el array FEATURES.
```
