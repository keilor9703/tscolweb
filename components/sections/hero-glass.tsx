"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  Star,
  Target,
  Crown,
  Hexagon,
  Triangle,
  Cpu,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Glassmorphism "trust" hero — WARM variant, faithful to the 21st.dev reference:
 * deep-green base, amber "doorway" glow, backlit standing figure, glass cards.
 *
 * All accent colors flow from the CSS vars set on <section>. To go back to the
 * indigo/cool variant, use:
 *   --hero-glow: 245 62% 58%; --hero-base: 232 44% 4%;
 *   --brand: 245 62% 60%; --brand-2: 262 83% 64%; --brand-3: 190 92% 56%;
 *
 * The figure is an inline SVG (no external image, always renders). To use a real
 * backlit photo instead, drop an <img> into the .hero-figure wrapper and remove
 * the <FigureSilhouette/>.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.15 + i * 0.1 },
  }),
};

export function HeroGlass() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden py-28"
      style={
        {
          // Warm theme knobs (amber on deep green)
          ["--hero-glow" as string]: "32 96% 55%",
          ["--hero-base" as string]: "158 34% 6%",
          ["--brand" as string]: "35 94% 56%",
          ["--brand-2" as string]: "22 92% 55%",
          ["--brand-3" as string]: "45 96% 62%",
          background:
            "radial-gradient(120% 90% at 50% 10%, hsl(158 30% 9%), hsl(var(--hero-base)) 60%)",
        } as React.CSSProperties
      }
    >
      {/* Ambient scenography */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Doorway light column behind the figure */}
        <div
          className="absolute left-1/2 top-[6%] h-[78%] w-[30rem] -translate-x-1/2 blur-[60px]"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 45%, hsl(var(--hero-glow) / 0.85), hsl(var(--hero-glow) / 0.25) 55%, transparent 75%)",
          }}
        />
        {/* Warm core bloom */}
        <div
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, hsl(38 100% 62% / 0.5), hsl(var(--hero-glow) / 0.15) 50%, transparent 72%)",
          }}
        />

        {/* Backlit standing figure */}
        <div className="hero-figure absolute bottom-0 left-1/2 hidden h-[68%] -translate-x-1/2 sm:block">
          <FigureSilhouette />
        </div>

        {/* Floor fade + bottom vignette into next section */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="bg-grid mask-fade-b absolute inset-0 opacity-25" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left — copy */}
          <div>
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/80"
            >
              Diseño premiado
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-heading mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Creamos{" "}
              <span className="text-gradient">experiencias digitales</span> que
              trascienden
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7 max-w-xl text-lg text-muted-foreground"
            >
              Diseñamos interfaces que combinan belleza y funcionalidad, creando
              experiencias fluidas que enamoran a los usuarios y hacen crecer los
              negocios.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#proyectos"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background transition-transform duration-300 hover:scale-[1.04]"
              >
                Ver portafolio
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#capacidades"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-base font-medium text-foreground backdrop-blur transition-colors duration-300 hover:bg-white/10"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--brand))]">
                  <Play className="h-3 w-3 translate-x-[1px] fill-black text-black" />
                </span>
                Ver showreel
              </a>
            </motion.div>
          </div>

          {/* Right — glass trust cards */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.35 }}
            className="flex flex-col gap-4"
          >
            <StatsCard />
            <TrustedCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Backlit standing figure: dark silhouette with a warm rim glow. */
function FigureSilhouette() {
  return (
    <svg
      viewBox="0 0 200 420"
      className="h-full w-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rim" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      {/* Warm rim (behind, blurred) */}
      <g filter="url(#rim)" opacity="0.9">
        <circle cx="100" cy="56" r="25" fill="hsl(38 100% 65%)" />
        <path
          d="M100,78 C84,78 74,90 74,107 L67,407 Q100,418 133,407 L126,107 C126,90 116,78 100,78 Z"
          fill="hsl(35 96% 60%)"
        />
      </g>
      {/* Dark body on top */}
      <circle cx="100" cy="57" r="22" fill="hsl(158 42% 3%)" />
      <path
        d="M100,80 C87,80 78,91 78,107 L72,405 Q100,415 128,405 L122,107 C122,91 113,80 100,80 Z"
        fill="hsl(158 42% 3%)"
      />
    </svg>
  );
}

function StatsCard() {
  return (
    <div className="glass relative overflow-hidden rounded-[1.75rem] p-7 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
      <div className="mb-6 flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
          <Target className="h-6 w-6 text-[hsl(var(--brand))]" />
        </div>
        <div>
          <div className="font-heading text-3xl font-semibold leading-none">
            150+
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Proyectos entregados
          </div>
        </div>
      </div>

      {/* Satisfaction bar */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Satisfacción del cliente</span>
          <span className="font-medium">98%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "98%" }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.8 }}
            className="h-full rounded-full"
            style={{
              background:
                "linear-gradient(90deg, hsl(var(--brand)), hsl(var(--brand-3)))",
            }}
          />
        </div>
      </div>

      {/* Mini stats */}
      <div className="grid grid-cols-3 gap-2 border-t border-white/8 pt-6 text-center">
        {[
          { v: "5+", k: "Años" },
          { v: "24/7", k: "Soporte" },
          { v: "100%", k: "Calidad" },
        ].map((s, i) => (
          <div
            key={s.k}
            className={i === 1 ? "border-x border-white/8" : undefined}
          >
            <div className="font-heading text-xl font-semibold">{s.v}</div>
            <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
              {s.k}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Activo
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-foreground/80">
          <Crown className="h-3.5 w-3.5 text-amber-400" />
          Premium
        </span>
      </div>
    </div>
  );
}

function TrustedCard() {
  const logos = [
    { name: "Chipset", icon: Cpu },
    { name: "Acme Corp", icon: Hexagon },
    { name: "Quantum", icon: Triangle },
  ];
  return (
    <div className="glass rounded-[1.75rem] p-6">
      <div className="mb-4 text-sm text-muted-foreground">
        Con la confianza de líderes del sector
      </div>
      <div className="flex items-center justify-between gap-4">
        {logos.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
          >
            <Icon className="h-5 w-5" />
            <span className="font-heading text-sm font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
