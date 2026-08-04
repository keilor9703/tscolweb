/**
 * Presentación Ksmart360 — configuración de marca.
 * Producto: Ksmart360 · Empresa: Tech Stack Colombia.
 */
export const site = {
  product: "Ksmart360",
  company: "Tech Stack Colombia",
  tagline: "La plataforma para gestionar todo tu negocio",
  version: "2.3.0",
  url: "ksmart360.com",
  api: "api.ksmart360.com",
} as const;

export type Site = typeof site;
