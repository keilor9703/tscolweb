"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { AmbientBackground } from "@/components/cinematic/ambient-background";
import { HeroMockup } from "@/components/sections/hero-mockup";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE, delay: 0.15 + i * 0.12 },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <AmbientBackground />
      <div className="bg-grid mask-fade-b absolute inset-0 opacity-70" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.a
          href="#capacidades"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="glass group mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--brand))] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--brand))]" />
          </span>
          Disponibles para nuevos proyectos
          <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-2))]" />
        </motion.a>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-heading max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient-soft">Construimos la web</span>
          <br />
          <span className="text-gradient">que deja huella</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
        >
          {site.description}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background transition-transform duration-300 hover:scale-[1.04]"
          >
            Empezar un proyecto
            <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#capacidades"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-base font-medium text-foreground backdrop-blur transition-colors duration-300 hover:bg-white/10"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--brand))]">
              <Play className="h-3 w-3 translate-x-[1px] fill-white text-white" />
            </span>
            Ver lo que hacemos
          </a>
        </motion.div>
      </div>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="container relative z-10 mt-16 md:mt-20"
      >
        <HeroMockup />
      </motion.div>
    </section>
  );
}
