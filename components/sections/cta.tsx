"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { AmbientBackground } from "@/components/cinematic/ambient-background";
import { Reveal } from "@/components/cinematic/reveal";

export function CTA() {
  return (
    <section id="contacto" className="relative py-24 md:py-36">
      <div className="container">
        <div className="card-glow relative overflow-hidden rounded-[2.5rem] px-6 py-20 text-center md:px-16 md:py-28">
          <AmbientBackground variant="soft" />
          <div className="bg-grid mask-fade-b absolute inset-0 opacity-40" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
            <Reveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--brand-2))]">
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-2))]" />
                ¿Tienes un proyecto en mente?
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-heading mt-6 text-balance text-5xl font-semibold leading-[1.03] tracking-tight md:text-7xl">
                <span className="text-gradient-soft">Hagamos algo</span>{" "}
                <span className="text-gradient">extraordinario</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
                Cuéntanos tu idea y te respondemos en menos de 24 horas. Sin
                compromisos, solo buenas conversaciones.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background"
                >
                  Empezar un proyecto
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4.5 w-4.5 text-[hsl(var(--brand-2))]" />
                  {site.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
