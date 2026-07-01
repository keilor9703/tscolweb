"use client";

/**
 * "Una muestra de nuestras capacidades" — PORTABLE section.
 *
 * Drop-in section that renders the heading + the feature carousel.
 * Depends only on ./feature-carousel (the portable file) and Tailwind CSS.
 *
 * Colors adapt to your page: the heading inherits your text color, the eyebrow
 * and dot use indigo. Tweak the classes to match your brand if you like.
 */

import { motion } from "motion/react";
import { FeatureCarousel } from "./feature-carousel";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CapabilitiesSection() {
  return (
    <section id="capacidades" className="relative w-full px-4 py-20 md:py-28">
      {/* Heading */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Lo que hacemos
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.08 }}
          className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
        >
          Una muestra de nuestras capacidades
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.16 }}
          className="mt-5 max-w-2xl text-balance text-lg opacity-70"
        >
          Cada proyecto combina diseño, ingeniería y detalle obsesivo. Explora
          las disciplinas que llevamos a cada producto que construimos.
        </motion.p>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="mx-auto mt-14 max-w-7xl"
      >
        <FeatureCarousel />
      </motion.div>
    </section>
  );
}

export default CapabilitiesSection;
