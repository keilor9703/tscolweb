# Ksmart360 — Presentación (deck de slides)

Presentación web a pantalla completa para exponer **Ksmart360** —la plataforma
SaaS de gestión multi-tenant para PYMEs colombianas de **Tech Stack Colombia**—
ante un grupo de emprendedores. Se abre en el navegador y se navega como un deck
de diapositivas.

Construida con **Next.js 14 · TypeScript · Tailwind CSS** (estructura shadcn),
animaciones con **framer-motion**. El contenido proviene del código y el
marketing reales del producto (repos `ksmart` y `techstack-web`).

## Cómo presentar

```bash
npm install
npm run build && npm run start   # http://localhost:3000
```

Ábrela en el navegador, pulsa el botón de **pantalla completa** (esquina superior
derecha) y navega:

| Acción | Teclas |
| --- | --- |
| Siguiente | → · ↓ · Espacio · PageDown |
| Anterior | ← · ↑ · PageUp |
| Primera / última | Home · End |
| Pantalla completa | F |

También funciona con clic en las flechas laterales, los puntos inferiores y
swipe en pantallas táctiles.

## Diapositivas (15)

1. Portada · 2. El problema · 3. La solución · 4. Números (en producción) ·
5. Tipos de negocio · 6. **Los módulos** (carrusel animado) · 7. Diferenciadores ·
8. Capacidades · 9. Facturación DIAN · 10. Catálogo virtual · 11. Tecnología ·
12. Seguridad · 13. Planes · 14. Cómo empezar · 15. Cierre.

## Personalización

- **Contenido de las diapositivas:** `lib/deck-data.ts` (stats, planes, módulos,
  diferenciadores, stack, seguridad…).
- **Marca / textos base:** `lib/site.ts`.
- **Orden de las diapositivas:** `app/page.tsx`.
- **Componentes de cada slide:** `components/deck/slides.tsx`.
- **Color de acento:** `app/globals.css` (variables `--brand*`, azul Tech Stack).
- **Carrusel de módulos:** `components/ui/animated-feature-carousel.tsx`
  (componente de la plantilla 21st.dev; edita `steps` y las imágenes).

> **Nota:** las imágenes del carrusel de módulos se cargan desde Unsplash, por lo
> que esa diapositiva requiere conexión a internet. Si vas a presentar sin red
> confiable, avísame y cambio esas imágenes por mockups locales que siempre
> renderizan.
