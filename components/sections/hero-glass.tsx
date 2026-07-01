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
import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Glassmorphism "trust" hero — recreated from the 21st.dev reference,
 * localized and re-themed to the brand palette.
 *
 * The ambient glow color is driven by the CSS var --hero-glow below.
 * - Indigo (default, coheres with the rest of the page):  245 62% 58%
 * - Warm amber (faithful to the reference screenshot):     38 92% 55%
 *   (and switch --hero-base to a deep green: 160 30% 8%)
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
          // Theme knobs — change these two lines to flip the mood
          ["--hero-glow" as string]: "245 62% 58%", // amber alt: 38 92% 55%
          ["--hero-base" as string]: "232 44% 4%", // green alt: 160 30% 7%
          background: "hsl(var(--hero-base))",
        } as React.CSSProperties
      }
    >
      {/* Ambient scenography: warm/indigo spotlight glow + silhouette floor */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--hero-glow) / 0.55), hsl(var(--hero-glow) / 0.12) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute left-[46%] top-[42%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--hero-glow) / 0.5), transparent 65%)",
          }}
        />
        {/* Soft central figure suggestion */}
        <div
          className="absolute bottom-0 left-1/2 h-[60%] w-[30%] -translate-x-1/2 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, hsl(var(--hero-base)) 20%, transparent 70%)",
          }}
        />
        {/* Bottom vignette → fades into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
        <div className="bg-grid mask-fade-b absolute inset-0 opacity-40" />
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
                  <Play className="h-3 w-3 translate-x-[1px] fill-white text-white" />
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

function StatsCard() {
  return (
    <div className="glass relative overflow-hidden rounded-[1.75rem] p-7 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
      <div className="mb-6 flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
          <Target className="h-6 w-6 text-[hsl(var(--brand-2))]" />
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
                "linear-gradient(90deg, hsl(var(--brand)), hsl(var(--brand-2)))",
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
