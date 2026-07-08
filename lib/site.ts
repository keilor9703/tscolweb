/**
 * Presentación Ksmart360 — configuración de marca.
 * Producto: Ksmart360 · Empresa: Tech Stack Colombia.
 */
export const site = {
  product: "Ksmart360",
  company: "Tech Stack Colombia",
  tagline: "El ERP en la nube para las PYMEs de Colombia",
  version: "2.3.0",
  url: "appjeylor.com",
  api: "api.appjeylor.com",
} as const;

export type Site = typeof site;
