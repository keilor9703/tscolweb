"use client";

import { useState } from "react";
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
  AlertTriangle,
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
  planPricing,
  billingPeriods,
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
    <SlideShell center={false}>
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* Izquierda: texto */}
        <Reveal className="flex flex-col items-start gap-7 text-left">
          <RevealItem>
            <Logo size="lg" />
          </RevealItem>
          <RevealItem>
            <h1 className="font-heading text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              El <span className="text-gradient">sistema operativo</span> de los
              empresarios colombianos
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="max-w-xl text-balance text-lg text-muted-foreground">
              En {site.company} no desarrollamos software. Creamos soluciones
              tecnológicas que ayudan a los empresarios a tomar el control de sus
              negocios y a crecer con confianza.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="glass rounded-full px-3 py-1">
                por {site.company}
              </span>
              <span className="glass rounded-full px-3 py-1">v{site.version}</span>
            </div>
          </RevealItem>
        </Reveal>

        {/* Derecha: QR grande para escanear */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_-20px_hsl(var(--brand)/0.5)]">
            <img
              src="/screens/qr.jpg"
              alt="Código QR para abrir Ksmart360"
              className="h-64 w-64 rounded-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
          <div className="mt-5 flex items-center gap-2 text-base font-semibold text-foreground">
            <ScanLine className="h-5 w-5 text-[hsl(var(--brand))]" />
            Escanéalo y prueba {site.product} gratis
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Apunta la cámara de tu celular · {site.url}
          </div>
        </motion.div>
      </div>
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

/* 9 — Facturación DIAN (problema → solución) */
export function DianSlide() {
  const riesgos = [
    "Multas y sanciones de la DIAN por no facturar",
    "No le puedes vender a empresas ni al Estado",
    "Te cierras puertas a créditos y a crecer",
  ];
  const soluciones = [
    "Facturas 100% legales, con su código y su QR",
    "Sin trámites enredados y sin salir del sistema",
    "Le vendes a empresas y al Estado con tranquilidad",
  ];
  return (
    <SlideShell center={false}>
      <div className="flex flex-col items-center text-center">
        <Kicker>Facturación electrónica DIAN</Kicker>
        <SlideTitle className="mt-5 max-w-4xl">
          La factura electrónica{" "}
          <span className="text-gradient">ya no es tu problema</span>
        </SlideTitle>
      </div>

      <Reveal className="mt-10 grid gap-5 md:grid-cols-2">
        {/* Sin Ksmart360 — el riesgo */}
        <RevealItem>
          <div className="h-full rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-7 text-left">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-red-500/30 bg-red-500/10">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-red-400">
                Vender sin factura te cuesta caro
              </h3>
            </div>
            <ul className="space-y-3">
              {riesgos.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 text-red-400">⚠️</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </RevealItem>

        {/* Con Ksmart360 — la solución */}
        <RevealItem>
          <div className="h-full rounded-3xl border border-[hsl(var(--brand)/0.3)] bg-[hsl(var(--brand)/0.06)] p-7 text-left">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-[hsl(var(--brand)/0.3)] bg-[hsl(var(--brand)/0.12)]">
                <FileCheck2 className="h-6 w-6 text-[hsl(var(--brand))]" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--brand))]">
                Con Ksmart360, resuelto
              </h3>
            </div>
            <ul className="space-y-3">
              {soluciones.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 text-[hsl(var(--brand))]">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </RevealItem>
      </Reveal>
    </SlideShell>
  );
}

/* 10 — Captar más clientes (catálogo, agendamiento, centro comercial) */
export function CatalogSlide() {
  const tools = [
    {
      icon: "🛍️",
      name: "Catálogo virtual",
      desc: "Tu tienda online con enlace propio. El cliente arma su pedido y te llega al WhatsApp y al sistema, con el inventario siempre al día.",
    },
    {
      icon: "📅",
      name: "Agendamiento de citas",
      desc: "Tus clientes ven tus servicios y reservan una cita por horario. La cita entra al sistema y tú planeas tu día, tu semana y tu operación.",
    },
    {
      icon: "🏬",
      name: "Centro comercial virtual",
      desc: "Todas las empresas de Ksmart360 en un mismo lugar. El cliente entra a cualquier tienda, mira productos y hace pedidos — incluso combinando varias.",
    },
  ];
  return (
    <SlideShell center={false}>
      <div className="flex flex-col items-center text-center">
        <Kicker>Más clientes</Kicker>
        <SlideTitle className="mt-5 max-w-4xl">
          Te ayudamos a captar{" "}
          <span className="text-gradient">más clientes</span>
        </SlideTitle>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Tres formas de que más gente te encuentre, te compre y vuelva.
        </p>
      </div>

      <Reveal className="mt-9 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Izquierda: las 3 herramientas */}
        <div className="space-y-3.5">
          {tools.map((t) => (
            <RevealItem key={t.name}>
              <div className="card-glow flex items-start gap-4 rounded-2xl p-5 text-left">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-2xl">
                  {t.icon}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>

        {/* Derecha: captura real del catálogo */}
        <RevealItem className="relative">
          <StoreShowcase />
        </RevealItem>
      </Reveal>
    </SlideShell>
  );
}

/**
 * Muestra capturas reales de la tienda virtual de Ksmart360.
 * Coloca las imágenes en /public/screens/  (ver public/screens/README.md).
 * Si un archivo no existe, se muestra un respaldo para que nunca se vea roto.
 */
function StoreShowcase() {
  const [mainErr, setMainErr] = useState(false);
  const [chipErr, setChipErr] = useState(false);
  return (
    <div className="relative">
      {/* Ventana del navegador */}
      <div className="card-glow overflow-hidden rounded-3xl">
        <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 truncate text-xs text-muted-foreground">
            {site.url}/mi-tienda
          </span>
        </div>

        <div className="max-h-[42vh] overflow-hidden">
          {mainErr ? (
            /* Respaldo: mock del catálogo */
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                    <div className="mb-3 aspect-square rounded-lg bg-gradient-to-br from-[hsl(var(--brand)/0.35)] to-[hsl(var(--brand-2)/0.25)]" />
                    <div className="h-2 w-3/4 rounded bg-white/15" />
                    <div className="mt-2 h-2.5 w-1/2 rounded bg-[hsl(var(--brand)/0.6)]" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <img
              src="/screens/catalogo.png"
              alt="Catálogo virtual de una tienda en Ksmart360"
              className="block w-full"
              onError={() => setMainErr(true)}
            />
          )}
        </div>
      </div>

      {/* Tarjeta flotante: pedido recibido (se oculta si no hay imagen) */}
      {!chipErr && (
        <img
          src="/screens/pedido.png"
          alt="Pedido recibido en Ksmart360"
          className="absolute -bottom-6 -left-8 w-40 rotate-[-4deg] rounded-xl border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] md:w-52"
          onError={() => setChipErr(true)}
        />
      )}
    </div>
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
const fmtCOP = (n: number) => "$" + Math.round(n).toLocaleString("es-CO");

export function PlansSlide() {
  const [periodKey, setPeriodKey] = useState("mensual");
  const period = billingPeriods.find((b) => b.key === periodKey) ?? billingPeriods[0];
  const disc = period.discount;

  return (
    <SlideShell center={false}>
      <div className="flex flex-col items-center text-center">
        <Kicker>Planes</Kicker>
        <SlideTitle className="mt-4">
          Desde <span className="text-gradient">$29.900</span> al mes
        </SlideTitle>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Prueba gratis 14 días, sin tarjeta. Paga mensual, o ahorra hasta −20%.
        </p>

        {/* Selector de periodo */}
        <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          {billingPeriods.map((b) => (
            <button
              key={b.key}
              onClick={() => setPeriodKey(b.key)}
              className={
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                (periodKey === b.key
                  ? "bg-[hsl(var(--brand))] text-white"
                  : "text-muted-foreground hover:text-foreground")
              }
            >
              {b.label}
              {b.badge && (
                <span
                  className={
                    "rounded-full px-1.5 py-0.5 text-[10px] font-semibold " +
                    (periodKey === b.key
                      ? "bg-white/20 text-white"
                      : "bg-emerald-500/15 text-emerald-400")
                  }
                >
                  {b.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <Reveal className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {planPricing.map((p) => {
          const perMonth = p.monthly * (1 - disc);
          const total = perMonth * period.months;
          const saved = p.monthly * disc * period.months;
          return (
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

                {p.free ? (
                  <>
                    <div className="font-heading mt-1 text-2xl font-bold">Gratis</div>
                    <div className={"text-xs " + (p.highlight ? "text-white/70" : "text-muted-foreground")}>
                      {p.period}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-heading mt-1 text-2xl font-bold">
                      {fmtCOP(perMonth)}
                      <span className={"ml-1 text-xs font-normal " + (p.highlight ? "text-white/70" : "text-muted-foreground")}>
                        /mes
                      </span>
                    </div>
                    {disc > 0 ? (
                      <div className="mt-1 text-[11px] leading-tight">
                        <span className={p.highlight ? "text-white/70" : "text-muted-foreground"}>
                          {period.totalLabel}: <span className="font-semibold">{fmtCOP(total)}</span>
                        </span>
                        <br />
                        <span className={p.highlight ? "text-white/90" : "text-emerald-400"}>
                          ahorras {fmtCOP(saved)}
                        </span>
                      </div>
                    ) : (
                      <div className={"mt-1 text-[11px] " + (p.highlight ? "text-white/60" : "text-muted-foreground")}>
                        pago cada mes
                      </div>
                    )}
                  </>
                )}

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
          );
        })}
      </Reveal>
    </SlideShell>
  );
}

/* 14 — Delega con confianza (roles / administración) */
export function RolesSlide() {
  const points = [
    {
      icon: "👥",
      title: "Roles por funciones",
      desc: "Crea perfiles a la medida: uno solo vende, otro maneja el inventario, otro la caja. Cada persona entra únicamente a lo que le corresponde.",
    },
    {
      icon: "📅",
      title: "Vigencia por fecha",
      desc: "¿Un empleado temporal? Le das acceso con fecha de vencimiento y el sistema lo desactiva solo cuando llega el día. Sin que tengas que acordarte.",
    },
    {
      icon: "🔐",
      title: "Tú siempre al mando",
      desc: "Cambias los permisos cuando quieras. Delegas con tranquilidad y tu información sensible queda protegida de miradas indiscretas.",
    },
  ];
  return (
    <SlideShell center={false}>
      <div className="flex flex-col items-center text-center">
        <Kicker>Módulo de administración</Kicker>
        <SlideTitle className="mt-5 max-w-4xl">
          Delega con <span className="text-gradient">confianza</span>
        </SlideTitle>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          No tienes que estar en todo. Tú decides qué puede ver y hacer cada
          persona de tu equipo.
        </p>
      </div>
      <Reveal className="mt-10 grid gap-4 md:grid-cols-3">
        {points.map((p) => (
          <RevealItem key={p.title}>
            <div className="card-glow h-full rounded-2xl p-6 text-left">
              <div className="text-3xl">{p.icon}</div>
              <h3 className="font-heading mt-4 text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
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
    <SlideShell center={false}>
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* Izquierda: mensaje y CTA */}
        <Reveal className="flex flex-col items-start gap-7 text-left">
          <RevealItem>
            <Logo size="lg" />
          </RevealItem>
          <RevealItem>
            <h2 className="font-heading text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Tu negocio, en orden,{" "}
              <span className="text-gradient">desde el primer día</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="max-w-md text-lg text-muted-foreground">
              Dejemos de trabajar a ciegas. Escanea el código, pruébalo gratis y
              da el primer paso hoy.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background">
                <ShieldCheck className="h-5 w-5" />
                Prueba gratis 14 días
              </span>
              <span className="text-sm text-muted-foreground">
                {site.product} · por {site.company}
              </span>
            </div>
          </RevealItem>
        </Reveal>

        {/* Derecha: QR grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_-20px_hsl(var(--brand)/0.5)]">
            <img
              src="/screens/qr.jpg"
              alt="Código QR para abrir Ksmart360"
              className="h-64 w-64 rounded-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
          <div className="mt-5 flex items-center gap-2 text-base font-semibold text-foreground">
            <ScanLine className="h-5 w-5 text-[hsl(var(--brand))]" />
            Escanéalo y empieza hoy
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Apunta la cámara de tu celular · {site.url}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
