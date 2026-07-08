"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, ArrowRight } from "lucide-react";
import {
  painQuestions,
  failureStats,
  painToday,
  needCriteria,
} from "@/lib/deck-data";
import {
  SlideShell,
  Kicker,
  Reveal,
  RevealItem,
  SlideTitle,
  CountUp,
} from "@/components/deck/slide-ui";
import { Logo } from "@/components/deck/logo";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Warm/tension ambient (amber → red) used across the problem slides. */
function WarnAmbient() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="bg-grid absolute inset-0 opacity-[0.12]" />
      <div
        className="absolute left-1/4 top-1/4 h-[40rem] w-[40rem] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, hsl(28 90% 55% / 0.16), transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-[34rem] w-[34rem] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, hsl(0 84% 55% / 0.14), transparent 65%)" }}
      />
    </div>
  );
}

/* 1 — Gancho emocional */
export function HookSlide() {
  return (
    <SlideShell bare>
      <WarnAmbient />
      <div className="relative z-10 flex w-full max-w-6xl flex-1 flex-col items-center justify-center text-center">
        <Reveal className="flex flex-col items-center gap-7">
          <RevealItem>
            <Kicker>Para ti, que emprendes</Kicker>
          </RevealItem>
          <RevealItem>
            <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Tienes el sueño.
              <br />
              Tienes las ganas.
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="max-w-2xl text-balance text-xl text-muted-foreground md:text-2xl">
              Pero, para que tu negocio crezca…{" "}
              <span className="font-semibold text-amber-400">
                ¿tienes el control?
              </span>
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mt-2 max-w-xl text-balance text-sm text-muted-foreground/70">
              A los emprendedores de Cali que le meten el alma a su negocio todos
              los días.
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </SlideShell>
  );
}

/* 2 — El desorden (visual reconocible) */
const chaosCards = [
  { text: painQuestions[0], rot: -6, cls: "left-[3%] top-[8%]" },
  { text: painQuestions[1], rot: 5, cls: "right-[5%] top-[12%]" },
  { text: painQuestions[2], rot: -3, cls: "left-[8%] top-[42%]" },
  { text: painQuestions[3], rot: 7, cls: "right-[8%] top-[46%]" },
  { text: painQuestions[4], rot: -8, cls: "left-[16%] bottom-[10%]" },
  { text: painQuestions[5], rot: 4, cls: "right-[14%] bottom-[8%]" },
];

export function ChaosSlide() {
  return (
    <SlideShell bare center={false}>
      <WarnAmbient />
      {/* Scattered worry cards */}
      <div className="absolute inset-0 z-0">
        {chaosCards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: c.rot }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 + i * 0.12 }}
            className={`absolute ${c.cls} hidden max-w-[240px] md:block`}
          >
            <div className="glass rounded-2xl border-amber-500/20 px-5 py-4 shadow-xl">
              <span className="mb-1 block text-lg">🤔</span>
              <p className="text-sm font-medium text-foreground/90">{c.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center message */}
      <div className="relative z-10 mx-auto flex h-full max-w-2xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
          className="text-6xl md:text-7xl"
        >
          😵‍💫
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="font-heading mt-6 text-3xl font-semibold tracking-tight md:text-5xl"
        >
          ¿Te suena familiar?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Preguntas que tu negocio te hace todos los días… y no siempre puedes
          responder.
        </motion.p>
      </div>
    </SlideShell>
  );
}

/* 3 — Las cifras */
export function FailureStatsSlide() {
  return (
    <SlideShell bare center={false}>
      <WarnAmbient />
      <div className="relative z-10 flex w-full max-w-6xl flex-1 flex-col justify-center">
        <div className="flex items-center gap-2 text-amber-400">
          <TrendingDown className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            La realidad
          </span>
        </div>
        <SlideTitle className="mt-5 max-w-4xl text-left">
          El entusiasmo no basta. Los{" "}
          <span className="text-amber-400">números</span> deciden.
        </SlideTitle>

        <Reveal className="mt-12 grid gap-5 md:grid-cols-3">
          {failureStats.map((s) => (
            <RevealItem key={s.label}>
              <div className="card-glow h-full rounded-3xl p-7 text-left">
                <div className="font-heading text-5xl font-bold tracking-tight text-amber-400 md:text-6xl">
                  {s.isText ? (
                    <span>
                      {s.prefix}
                      {s.value}
                    </span>
                  ) : (
                    <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  )}
                </div>
                <p className="mt-3 text-[15px] font-medium leading-snug text-foreground/90">
                  {s.label}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground/60">
                  {s.source}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 text-lg text-muted-foreground"
        >
          La mayoría no cierra por falta de ventas.{" "}
          <span className="font-semibold text-foreground">
            Cierra por trabajar a ciegas.
          </span>
        </motion.p>
      </div>
    </SlideShell>
  );
}

/* 4 — Cómo trabajan hoy (el dolor concreto) */
export function PainTodaySlide() {
  return (
    <SlideShell bare center={false}>
      <WarnAmbient />
      <div className="relative z-10 flex w-full max-w-5xl flex-1 flex-col justify-center">
        <Kicker>Sin herramientas</Kicker>
        <SlideTitle className="mt-6 max-w-4xl text-left">
          Así opera hoy la mayoría
        </SlideTitle>
        <Reveal className="mt-10 grid gap-4 sm:grid-cols-2">
          {painToday.map((p) => (
            <RevealItem key={p.text}>
              <div className="flex items-center gap-4 rounded-2xl border border-amber-500/15 bg-amber-500/[0.04] p-5 text-left">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-2xl">
                  {p.icon}
                </span>
                <p className="text-[15px] text-foreground/90">{p.text}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </SlideShell>
  );
}

/* 5 — El riesgo tributario (DIAN) */
export function DianRiskSlide() {
  const risks = [
    "Multas y sanciones de la DIAN por no facturar",
    "No le puedes vender a empresas ni al Estado (te exigen factura)",
    "Te cierras puertas a créditos y a crecer formalmente",
    "Vives con la incertidumbre de estar haciendo las cosas mal",
  ];
  return (
    <SlideShell bare center={false}>
      <WarnAmbient />
      <div className="relative z-10 flex w-full max-w-5xl flex-1 flex-col justify-center">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10">
            <AlertTriangle className="h-6 w-6 text-red-400" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            El riesgo que muchos ignoran
          </span>
        </div>
        <SlideTitle className="mt-6 max-w-4xl text-left">
          Vender sin{" "}
          <span className="text-red-400">factura electrónica</span> te puede
          costar caro
        </SlideTitle>
        <Reveal className="mt-9 grid gap-3 sm:grid-cols-2">
          {risks.map((r) => (
            <RevealItem key={r}>
              <div className="flex items-start gap-3 rounded-xl border border-red-500/15 bg-red-500/[0.04] p-4 text-left">
                <span className="mt-0.5 text-red-400">⚠️</span>
                <p className="text-[15px] text-foreground/90">{r}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </SlideShell>
  );
}

/* 6 — El replanteo (puente) */
export function ReframeSlide() {
  return (
    <SlideShell>
      <Reveal className="flex flex-col items-center gap-6 text-center">
        <RevealItem>
          <p className="text-xl text-muted-foreground md:text-2xl">
            El problema no es que trabajes poco.
          </p>
        </RevealItem>
        <RevealItem>
          <h2 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
            Es que trabajas{" "}
            <span className="text-amber-400">a ciegas.</span>
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-4 max-w-2xl text-balance text-lg text-foreground/80 md:text-xl">
            Lo que no se mide, no se puede mejorar. La buena noticia:{" "}
            <span className="font-semibold text-[hsl(var(--brand))]">
              hoy la tecnología lo hace simple y está a tu alcance.
            </span>
          </p>
        </RevealItem>
      </Reveal>
    </SlideShell>
  );
}

/* 7 — Lo que necesitas (criterios de la solución) */
export function NeedSlide() {
  return (
    <SlideShell center={false}>
      <Kicker>La salida</Kicker>
      <SlideTitle className="mt-6 max-w-4xl text-left">
        Lo que tu negocio{" "}
        <span className="text-gradient">de verdad necesita</span>
      </SlideTitle>
      <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {needCriteria.map((c) => (
          <RevealItem key={c.title}>
            <div className="card-glow h-full rounded-2xl p-6 text-left">
              <div className="text-3xl">{c.icon}</div>
              <h3 className="font-heading mt-4 text-lg font-semibold">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-9 text-lg text-muted-foreground"
      >
        ¿Y si todo eso viviera en un solo lugar, hecho para ti?
      </motion.p>
    </SlideShell>
  );
}

/* 8 — La revelación */
export function RevealSolutionSlide() {
  return (
    <SlideShell>
      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-lg uppercase tracking-[0.25em] text-muted-foreground"
        >
          Esa herramienta existe
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.25 }}
        >
          <Logo size="lg" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
          className="max-w-2xl text-balance text-xl text-foreground/85 md:text-2xl"
        >
          El sistema que pone tu negocio en orden — y bajo control — desde el
          primer día.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-2 text-sm text-[hsl(var(--brand))]"
        >
          Veamos cómo <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>
    </SlideShell>
  );
}
