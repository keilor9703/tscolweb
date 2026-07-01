"use client";

import { motion } from "motion/react";
import {
  Layers,
  Gauge,
  Boxes,
  ShoppingBag,
  Wand2,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { RevealGroup, RevealItem } from "@/components/cinematic/reveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    icon: Layers,
    title: "Sitios & aplicaciones web",
    desc: "Plataformas a medida, landings de alta conversión y dashboards complejos. Arquitectura moderna con Next.js y React.",
    span: "md:col-span-2",
    featured: true,
  },
  {
    icon: Gauge,
    title: "Rendimiento extremo",
    desc: "Optimización de Core Web Vitals, SSR/ISR y cargas instantáneas.",
    span: "",
  },
  {
    icon: Boxes,
    title: "Design systems",
    desc: "Componentes reutilizables, tokens y consistencia a escala.",
    span: "",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Tiendas rápidas con pagos, catálogos y analítica integrada.",
    span: "",
  },
  {
    icon: Wand2,
    title: "Motion & experiencia",
    desc: "Animaciones cinematográficas que elevan cada interacción.",
    span: "md:col-span-2",
    accent: true,
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Servicios"
          title="Desarrollo web, de punta a punta"
          description="Desde la primera línea de diseño hasta el despliegue en producción, cubrimos todo el ciclo de tu producto digital."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {SERVICES.map((s) => (
            <RevealItem key={s.title} className={cn(s.span)}>
              <ServiceCard {...s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  featured,
  accent,
}: {
  icon: typeof Layers;
  title: string;
  desc: string;
  featured?: boolean;
  accent?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "card-glow group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl p-7",
        featured && "min-h-[260px]"
      )}
    >
      {accent && (
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(var(--brand-2)/0.4), transparent 70%)",
          }}
        />
      )}
      {featured && (
        <div
          aria-hidden
          className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(var(--brand)/0.28), transparent 70%)",
          }}
        />
      )}

      <div className="relative">
        <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-[hsl(var(--brand)/0.5)]">
          <Icon className="h-6 w-6 text-[hsl(var(--brand-2))]" />
        </div>
        <h3 className="font-heading text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h3>
        <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          {desc}
        </p>
      </div>

      <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        Saber más
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.div>
  );
}
