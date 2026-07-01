"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionHeading } from "@/components/sections/section-heading";

const STEPS = [
  {
    n: "01",
    title: "Descubrimiento",
    desc: "Entendemos tu negocio, tus usuarios y tus objetivos. Definimos alcance, éxito y un plan claro.",
  },
  {
    n: "02",
    title: "Diseño",
    desc: "Prototipos de alta fidelidad y un design system a medida. Validamos la experiencia antes de escribir código.",
  },
  {
    n: "03",
    title: "Desarrollo",
    desc: "Ingeniería limpia y escalable con entregas semanales. Ves tu producto cobrar vida en tiempo real.",
  },
  {
    n: "04",
    title: "Lanzamiento & evolución",
    desc: "Despliegue, medición y optimización continua. Te acompañamos mucho más allá del día uno.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="proceso" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo llevamos tu idea a producción"
          description="Un método probado, transparente y sin sorpresas. Colaboración real en cada etapa."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* Track */}
          <div className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-px bg-white/10 md:left-1/2" />
          {/* Progress fill */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-px origin-top md:left-1/2"
          >
            <div
              className="h-full w-px"
              style={{
                background:
                  "linear-gradient(to bottom, hsl(var(--brand)), hsl(var(--brand-2)))",
              }}
            />
          </motion.div>

          <div className="space-y-10">
            {STEPS.map((step, i) => (
              <ProcessRow key={step.n} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const isLeft = index % 2 === 0;
  return (
    <div
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Node */}
      <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center md:absolute md:left-1/2 md:-translate-x-1/2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--brand)/0.2)] blur-md" />
        <span className="glass relative grid h-14 w-14 place-items-center rounded-full font-heading text-sm font-semibold text-[hsl(var(--brand-2))]">
          {step.n}
        </span>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`card-glow flex-1 rounded-3xl p-6 md:max-w-[calc(50%-3rem)] ${
          isLeft ? "md:mr-auto md:text-right" : "md:ml-auto"
        }`}
      >
        <h3 className="font-heading text-xl font-semibold tracking-tight md:text-2xl">
          {step.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          {step.desc}
        </p>
      </motion.div>
    </div>
  );
}
