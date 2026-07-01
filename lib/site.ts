/**
 * Brand configuration — single source of truth.
 * Change these values to rebrand the whole site (name, tagline, contact, links).
 * The name "NOVA" is a placeholder — replace it with your company's real name.
 */
export const site = {
  name: "NOVA",
  fullName: "NOVA Studio",
  domain: "novastudio.dev",
  tagline: "Estudio de desarrollo web",
  // Short pitch used in hero / meta description
  description:
    "Diseñamos y construimos experiencias web de nivel mundial. Interfaces cinematográficas, rendimiento impecable y código que escala.",
  email: "hola@novastudio.dev",
  location: "Bogotá · Remoto en todo el mundo",
  socials: {
    x: "#",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Lo que hacemos", href: "#capacidades" },
    { label: "Proceso", href: "#proceso" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export type Site = typeof site;
