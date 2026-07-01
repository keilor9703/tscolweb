"use client";

import { motion } from "motion/react";

const bars = [42, 68, 55, 83, 70, 96, 61, 78];

/** A floating "browser window" showing an animated dashboard — pure CSS/SVG. */
export function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Glow behind the window */}
      <div
        aria-hidden
        className="absolute inset-x-10 -top-6 bottom-0 -z-10 rounded-[2rem] blur-3xl"
        style={{
          background:
            "linear-gradient(120deg, hsl(var(--brand) / 0.35), hsl(var(--brand-2) / 0.25))",
        }}
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="card-glow overflow-hidden rounded-[1.4rem] border border-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="mx-auto flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-3))]" />
            novastudio.dev/app
          </div>
        </div>

        {/* App body */}
        <div className="grid grid-cols-[64px_1fr] gap-0 bg-[hsl(232_40%_5%)] md:grid-cols-[200px_1fr]">
          {/* Sidebar */}
          <aside className="hidden flex-col gap-2 border-r border-white/8 p-4 md:flex">
            <div className="mb-3 h-8 w-24 rounded-lg bg-white/10" />
            {["Panel", "Proyectos", "Analítica", "Equipo", "Ajustes"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                    i === 2
                      ? "bg-[hsl(var(--brand)/0.18)] text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      i === 2 ? "bg-[hsl(var(--brand))]" : "bg-white/20"
                    }`}
                  />
                  {item}
                </div>
              )
            )}
          </aside>
          {/* Mobile mini-sidebar */}
          <aside className="flex flex-col items-center gap-3 border-r border-white/8 py-4 md:hidden">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-6 w-6 rounded-lg ${
                  i === 2 ? "bg-[hsl(var(--brand))]" : "bg-white/10"
                }`}
              />
            ))}
          </aside>

          {/* Main */}
          <div className="p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="h-3 w-28 rounded bg-white/15" />
                <div className="mt-2 h-2 w-40 rounded bg-white/8" />
              </div>
              <div className="h-7 w-20 rounded-lg bg-[hsl(var(--brand)/0.25)]" />
            </div>

            {/* Stat cards */}
            <div className="mb-4 grid grid-cols-3 gap-3">
              {[
                { k: "Visitas", v: "128k", c: "hsl(var(--brand))" },
                { k: "Conversión", v: "7.9%", c: "hsl(var(--brand-2))" },
                { k: "LCP", v: "0.8s", c: "hsl(var(--brand-3))" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-white/8 bg-white/[0.03] p-3"
                >
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.k}
                  </div>
                  <div
                    className="mt-1 text-lg font-semibold"
                    style={{ color: s.c }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-2.5 w-24 rounded bg-white/12" />
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand))]" />
                  <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand-2))]" />
                </div>
              </div>
              <div className="flex h-32 items-end justify-between gap-2 md:gap-3">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.4 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full rounded-t-md"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(to top, hsl(var(--brand)), hsl(var(--brand-2)))"
                          : "linear-gradient(to top, hsl(var(--brand-2) / 0.7), hsl(var(--brand-3) / 0.7))",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="glass absolute -right-2 top-24 hidden items-center gap-2 rounded-2xl px-4 py-3 md:flex"
      >
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[hsl(var(--brand)/0.25)] text-sm font-bold text-[hsl(var(--brand))]">
          A+
        </div>
        <div className="text-left">
          <div className="text-xs font-medium">Lighthouse</div>
          <div className="text-[10px] text-muted-foreground">100 / 100</div>
        </div>
      </motion.div>
    </div>
  );
}
