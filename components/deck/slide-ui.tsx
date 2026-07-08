"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Full-screen slide wrapper with consistent padding, brand footer and grid. */
export function SlideShell({
  children,
  className,
  center = true,
  bare = false,
}: {
  children: ReactNode;
  className?: string;
  center?: boolean;
  bare?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden px-8 py-16 md:px-20 md:py-20",
        center && "items-center justify-center text-center",
        className
      )}
    >
      {!bare && <SlideAmbient />}
      <div className="relative z-10 flex w-full max-w-6xl flex-1 flex-col justify-center">
        {children}
      </div>
    </section>
  );
}

export function SlideAmbient() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="bg-grid absolute inset-0 opacity-[0.15]" />
      <div
        className="absolute -left-40 top-1/4 h-[38rem] w-[38rem] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, hsl(var(--brand) / 0.18), transparent 65%)" }}
      />
      <div
        className="absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, hsl(var(--brand-2) / 0.14), transparent 65%)" }}
      />
    </div>
  );
}

/** Eyebrow chip shown above slide titles. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="glass mx-auto inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand))]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand))]" />
      {children}
    </motion.span>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Staggered reveal container for slide content. */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

/** Big slide title with brand gradient support. */
export function SlideTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-heading text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
