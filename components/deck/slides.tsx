"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ScanLine,
  CloudOff,
  FileSpreadsheet,
  Cloud,
  Layers,
  Zap,
  ShieldCheck,
  FileCheck2,
  Store,
  MessageCircle,
} from "lucide-react";
import { site } from "@/lib/site";
import {
  stats,
  businessTypes,
  differentiators,
  capabilities,
  techStack,
  security,
  plans,
  onboardingSteps,
} from "@/lib/deck-data";
import {
  SlideShell,
  Kicker,
  Reveal,
  RevealItem,
  SlideTitle,
} from "@/components/deck/slide-ui";
import { Logo } from "@/components/deck/logo";
import { FeatureCarousel, type ImageSet } from "@/components/ui/animated-feature-carousel";

const EASE = [0.22, 1, 0.36, 1] as const;

/* 1 — Portada */
export function TitleSlide() {
  return (
    <SlideShell>
      <Reveal className="flex flex-col items-center gap-8">
        <RevealItem>
          <Logo size="lg" />
        </RevealItem>
        <RevealItem>
          <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            El <span className="text-gradient">sistema operativo</span> de los
            empresarios colombianos
          </h1>
        </RevealItem>
        <RevealItem>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            En {site.company} no desarrollamos software. Creamos soluciones
            tecnológicas que ayudan a los empresarios a tomar el control de sus
            negocios y a crecer con confianza.
          </p>
        </RevealItem>
        <RevealItem>
          <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="glass rounded-full px-3 py-1">
              por {site.company}
            </span>
            <span className="glass rounded-full px-3 py-1">v{site.version}</span>
          </div>
        </RevealItem>
        <RevealItem>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/70">
            Usa las flechas <ArrowRight className="h-3.5 w-3.5" /> para avanzar
          </div>
        </RevealItem>
      </Reveal>
    </SlideShell>
  );
}

/* 2 — El problema */
export function ProblemSlide() {
  const pains = [
    { icon: FileSpreadsheet, t: "Cuadernos y Excel", d: "Ventas e inventario a mano. Errores, descuadres y cero visibilidad." },
    { icon: CloudOff, t: "Software caro e importado", d: "Sistemas costosos, complejos y pensados para otra realidad." },
    { icon: Layers, t: "Herramientas dispersas", d: "Una app para vender, otra para cobrar, otra para facturar. Nada conversa." },
  ];
  return (
    <SlideShell center={false}>
      <Kicker>El problema</Kicker>
      <SlideTitle className="mt-6 max-w-4xl text-left">
        La mayoría de las PYMEs operan{" "}
        <span className="text-gradient">a ciegas</span>
      </SlideTitle>
      <Reveal className="mt-12 grid gap-5 md:grid-cols-3">
        {pains.map((p) => (
          <RevealItem key={p.t}>
            <div className="card-glow h-full rounded-3xl p-7 text-left">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                <p.icon className="h-6 w-6 text-[hsl(var(--brand-2))]" />
              </div>
              <h3 className="font-heading text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {p.d}
              </p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </SlideShell>
  );
}

/* 3 — La solución */
export function SolutionSlide() {
  return (
    <SlideShell>
      <Reveal className="flex flex-col items-center gap-7">
        <RevealItem>
          <Kicker>La solución</Kicker>
        </RevealItem>
        <RevealItem>
          <SlideTitle className="max-w-4xl">
            Un solo sistema.{" "}
            <span className="text-gradient">Todo tu negocio.</span>
          </SlideTitle>
        </RevealItem>
        <RevealItem>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            Ksmart360 detecta el perfil de tu negocio y activa exactamente los
            módulos que necesitas. Sin instalaciones, sin configuración técnica,
            desde el navegador.
          </p>
        </RevealItem>
        <RevealItem>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {["100% en la nube", "Sin instalaciones", "Todo integrado", "Hecho para Colombia"].map(
              (t) => (
                <span
                  key={t}
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <Cloud className="h-4 w-4 text-[hsl(var(--brand))]" />
                  {t}
                </span>
              )
            )}
          </div>
        </RevealItem>
      </Reveal>
    </SlideShell>
  );
}

/* 4 — Números */
export function StatsSlide() {
  return (
    <SlideShell>
      <Kicker>En producción</Kicker>
      <Reveal className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <RevealItem key={s.label} className="text-center">
            <div className="font-heading text-5xl font-semibold tracking-tight md:text-7xl">
              <span className="text-gradient">{s.value}</span>
            </div>
            <div className="mt-3 text-sm text-muted-foreground md:text-base">
              {s.label}
            </div>
          </RevealItem>
        ))}
      </Reveal>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-14 text-center text-muted-foreground"
      >
        Un sistema probado, funcionando todos los días en negocios reales de
        Colombia.
      </motion.p>
    </SlideShell>
  );
}

/* 5 — Tipos de negocio */
export function BusinessTypesSlide() {
  return (
    <SlideShell center={false}>
      <Kicker>Se adapta a ti</Kicker>
      <SlideTitle className="mt-6 max-w-4xl text-left">
        Un sistema, <span className="text-gradient">cinco negocios</span>
      </SlideTitle>
      <p className="mt-4 max-w-2xl text-left text-lg text-muted-foreground">
        El sistema activa automáticamente los módulos según tu industria.
      </p>
      <Reveal className="mt-10 grid gap-5 sm:grid-cols-2">
        {businessTypes.map((b) => (
          <RevealItem key={b.name}>
            <div className="card-glow flex h-full items-start gap-5 rounded-3xl p-6 text-left">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/5 text-3xl">
                {b.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">{b.name}</h3>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-[hsl(var(--brand-2))]">
                  {b.subtitle}
                </p>
                <p className="mt-2 text-[15px] text-muted-foreground">
                  {b.headline}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </SlideShell>
  );
}

/* 6 — Módulos (componente animado requerido) */
const carouselImages: ImageSet = {
  alt: "Módulo de Ksmart360",
  step1img1:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  step1img2:
    "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=1200&auto=format&fit=crop",
  step2img1:
    "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
  step2img2:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  step3img:
    "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200&auto=format&fit=crop",
  step4img:
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
};

export function ModulesSlide() {
  return (
    <SlideShell center={false} className="justify-center pb-24">
      <div className="mb-4 flex flex-col items-center text-center">
        <Kicker>Los módulos</Kicker>
        <SlideTitle className="mt-4 text-3xl md:text-4xl">
          Cuatro pilares, <span className="text-gradient">un solo flujo</span>
        </SlideTitle>
      </div>
      <FeatureCarousel image={carouselImages} />
    </SlideShell>
  );
}

/* 7 — Diferenciadores */
export function DifferentiatorsSlide() {
  return (
    <SlideShell center={false}>
      <Kicker>Lo que nos diferencia</Kicker>
      <SlideTitle className="mt-6 text-left">
        Detalles que <span className="text-gradient">marcan la diferencia</span>
      </SlideTitle>
      <Reveal className="mt-10 grid gap-4 md:grid-cols-3">
        {differentiators.map((d) => (
          <RevealItem key={d.title}>
            <div className="card-glow h-full rounded-2xl p-6 text-left">
              <div className="text-3xl">{d.icon}</div>
              <h3 className="font-heading mt-4 text-lg font-semibold">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.desc}
              </p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </SlideShell>
  );
}

/* 8 — Capacidades */
export function CapabilitiesSlide() {
  return (
    <SlideShell center={false}>
      <Kicker>Todo lo que incluye</Kicker>
      <SlideTitle className="mt-6 text-left">
        Todo tu negocio,{" "}
        <span className="text-gradient">en un solo lugar</span>
      </SlideTitle>
      <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <RevealItem key={c.category}>
            <div className="card-glow h-full rounded-2xl p-6 text-left">
              <h3 className="font-heading text-base font-semibold text-[hsl(var(--brand))]">
                {c.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-2))]" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </SlideShell>
  );
}

/* 9 — Facturación DIAN */
export function DianSlide() {
  return (
    <SlideShell>
      <Reveal className="flex flex-col items-center gap-7">
        <RevealItem>
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/5">
            <FileCheck2 className="h-8 w-8 text-[hsl(var(--brand))]" />
          </div>
        </RevealItem>
        <RevealItem>
          <Kicker>Cumplimiento Colombia</Kicker>
        </RevealItem>
        <RevealItem>
          <SlideTitle className="max-w-4xl">
            Facturación electrónica{" "}
            <span className="text-gradient">DIAN, integrada</span>
          </SlideTitle>
        </RevealItem>
        <RevealItem>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            Emite facturas 100% legales ante la DIAN, con su código y su QR, sin
            salir del sistema y sin trámites enredados. Le vendes a empresas y al
            Estado con tranquilidad.
          </p>
        </RevealItem>
        <RevealItem>
          <div className="flex flex-wrap justify-center gap-3">
            {["Factura legal DIAN", "Con código y QR", "Sin trámites enredados", "Le vendes a quien sea"].map(
              (t) => (
                <span key={t} className="glass rounded-full px-4 py-2 text-sm">
                  {t}
                </span>
              )
            )}
          </div>
        </RevealItem>
      </Reveal>
    </SlideShell>
  );
}

/* 10 — Catálogo virtual */
export function CatalogSlide() {
  return (
    <SlideShell center={false}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="text-left">
          <Kicker>Vende también online</Kicker>
          <SlideTitle className="mt-6">
            Un <span className="text-gradient">catálogo virtual</span> que recibe
            pedidos por WhatsApp
          </SlideTitle>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Cada empresa tiene su tienda online con URL propia. El cliente arma
            el carrito y el pedido llega a tu WhatsApp y al sistema, con el stock
            siempre sincronizado.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              { icon: Store, t: "URL única por empresa" },
              { icon: MessageCircle, t: "Pedidos a WhatsApp" },
              { icon: Zap, t: "Stock sincronizado" },
            ].map((f) => (
              <span
                key={f.t}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              >
                <f.icon className="h-4 w-4 text-[hsl(var(--brand))]" />
                {f.t}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="card-glow rounded-3xl p-6"
        >
          <div className="flex items-center gap-2 border-b border-white/8 pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs text-muted-foreground">
              {site.url}/mi-tienda
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <div className="mb-3 aspect-square rounded-lg bg-gradient-to-br from-[hsl(var(--brand)/0.35)] to-[hsl(var(--brand-2)/0.25)]" />
                <div className="h-2 w-3/4 rounded bg-white/15" />
                <div className="mt-2 h-2.5 w-1/2 rounded bg-[hsl(var(--brand)/0.6)]" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[hsl(var(--brand)/0.15)] px-4 py-3">
            <span className="text-sm font-medium">Enviar pedido</span>
            <MessageCircle className="h-4 w-4 text-[hsl(var(--brand))]" />
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* 11 — Tecnología (en lenguaje llano) */
export function TechSlide() {
  return (
    <SlideShell center={false}>
      <Kicker>Tú tranquilo</Kicker>
      <SlideTitle className="mt-6 text-left">
        Tú te dedicas a vender.{" "}
        <span className="text-gradient">De la tecnología nos encargamos nosotros.</span>
      </SlideTitle>
      <Reveal className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((t) => (
          <RevealItem key={t.label}>
            <div className="card-glow flex items-start gap-4 rounded-2xl p-5 text-left">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-2xl">
                {t.icon}
              </span>
              <div>
                <div className="font-heading text-base font-semibold">{t.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
              </div>
            </div>
          </RevealItem>
        ))}
      </Reveal>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-8 text-left text-sm text-muted-foreground/70"
      >
        Por debajo, la misma tecnología de nivel mundial que usan las grandes
        empresas.
      </motion.p>
    </SlideShell>
  );
}

/* 12 — Seguridad */
export function SecuritySlide() {
  return (
    <SlideShell center={false}>
      <Kicker>Seguridad</Kicker>
      <SlideTitle className="mt-6 text-left">
        Tus datos, <span className="text-gradient">seguros y protegidos</span>
      </SlideTitle>
      <Reveal className="mt-10 grid gap-4 sm:grid-cols-2">
        {security.map((s) => (
          <RevealItem key={s.title}>
            <div className="card-glow flex items-start gap-4 rounded-2xl p-6 text-left">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-2xl">
                {s.icon}
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </SlideShell>
  );
}

/* 13 — Planes */
export function PlansSlide() {
  return (
    <SlideShell center={false}>
      <div className="flex flex-col items-center text-center">
        <Kicker>Planes</Kicker>
        <SlideTitle className="mt-5">
          Desde <span className="text-gradient">$29.900</span> al mes
        </SlideTitle>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Prueba gratis 14 días, sin tarjeta. Hasta −20% pagando anual.
        </p>
      </div>
      <Reveal className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {plans.map((p) => (
          <RevealItem key={p.name}>
            <div
              className={
                "relative flex h-full flex-col rounded-2xl p-6 text-left " +
                (p.highlight
                  ? "bg-[hsl(var(--brand))] text-white shadow-[0_20px_50px_-10px_hsl(var(--brand)/0.5)]"
                  : "card-glow")
              }
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-foreground">
                  Más elegido
                </span>
              )}
              <div className="text-2xl">{p.icon}</div>
              <h3 className="font-heading mt-3 text-base font-semibold">
                {p.name}
              </h3>
              <div className="font-heading mt-1 text-2xl font-bold">
                {p.price}
              </div>
              <div
                className={
                  "text-xs " + (p.highlight ? "text-white/70" : "text-muted-foreground")
                }
              >
                {p.period}
              </div>
              <div
                className={
                  "mt-4 rounded-lg px-2 py-1.5 text-center text-[11px] font-medium " +
                  (p.fe
                    ? p.highlight
                      ? "bg-white/20"
                      : "bg-orange-500/10 text-orange-400"
                    : p.highlight
                      ? "bg-white/10 text-white/60"
                      : "bg-white/5 text-muted-foreground")
                }
              >
                {p.fe ? `FE DIAN · ${p.fe}/mes` : "Sin FE DIAN"}
              </div>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </SlideShell>
  );
}

/* 14 — Cómo empezar */
export function StepsSlide() {
  return (
    <SlideShell center={false}>
      <Kicker>Cómo empezar</Kicker>
      <SlideTitle className="mt-6 text-left">
        Operando <span className="text-gradient">el mismo día</span>
      </SlideTitle>
      <Reveal className="mt-12 grid gap-6 md:grid-cols-3">
        {onboardingSteps.map((s) => (
          <RevealItem key={s.step}>
            <div className="text-left">
              <div className="font-heading text-5xl font-bold text-[hsl(var(--brand)/0.4)]">
                {s.step}
              </div>
              <h3 className="font-heading mt-3 text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </SlideShell>
  );
}

/* 15 — Cierre */
export function CloseSlide() {
  return (
    <SlideShell>
      <Reveal className="flex flex-col items-center gap-8">
        <RevealItem>
          <Logo size="lg" />
        </RevealItem>
        <RevealItem>
          <h2 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Tu negocio, en orden,{" "}
            <span className="text-gradient">desde el primer día</span>
          </h2>
        </RevealItem>
        <RevealItem>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background">
              <ShieldCheck className="h-5 w-5" />
              Prueba gratis 14 días
            </span>
            <span className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-medium">
              <ScanLine className="h-5 w-5 text-[hsl(var(--brand))]" />
              {site.url}
            </span>
          </div>
        </RevealItem>
        <RevealItem>
          <p className="text-sm text-muted-foreground">
            {site.product} · un producto de {site.company}
          </p>
        </RevealItem>
      </Reveal>
    </SlideShell>
  );
}
