"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { RevealGroup, RevealItem } from "@/components/cinematic/reveal";

const PROJECTS = [
  {
    title: "Aurora Finance",
    category: "Fintech · Dashboard",
    tags: ["Next.js", "Design System", "Data Viz"],
    from: "hsl(245 62% 40%)",
    to: "hsl(262 70% 30%)",
  },
  {
    title: "Nimbus Store",
    category: "E-commerce",
    tags: ["Headless", "Stripe", "SEO"],
    from: "hsl(190 80% 38%)",
    to: "hsl(220 70% 30%)",
  },
  {
    title: "Pulse Health",
    category: "SaaS · Salud",
    tags: ["React", "Accesibilidad", "Realtime"],
    from: "hsl(280 70% 40%)",
    to: "hsl(320 60% 30%)",
  },
  {
    title: "Orbit Studio",
    category: "Portafolio creativo",
    tags: ["Motion", "WebGL", "CMS"],
    from: "hsl(160 60% 36%)",
    to: "hsl(200 70% 28%)",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajo que habla por nosotros"
          description="Una selección de productos que diseñamos y desarrollamos de principio a fin."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <RevealItem key={p.title}>
              <ProjectCard {...p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  category,
  tags,
  from,
  to,
}: {
  title: string;
  category: string;
  tags: string[];
  from: string;
  to: string;
}) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/8"
    >
      {/* Preview */}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <div className="bg-grid absolute inset-0 opacity-30" />
        {/* Faux app window */}
        <motion.div
          variants={{
            rest: { scale: 1, y: 0 },
            hover: { scale: 1.04, y: -6 },
          }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="absolute inset-x-8 bottom-0 top-10 rounded-t-2xl border border-white/15 bg-black/25 backdrop-blur-sm"
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </div>
          <div className="grid grid-cols-3 gap-2 p-4">
            <div className="col-span-2 h-3 rounded bg-white/25" />
            <div className="h-3 rounded bg-white/15" />
            <div className="col-span-3 h-16 rounded-lg bg-white/10" />
            <div className="h-10 rounded-lg bg-white/15" />
            <div className="h-10 rounded-lg bg-white/10" />
            <div className="h-10 rounded-lg bg-white/15" />
          </div>
        </motion.div>

        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4 bg-[hsl(232_34%_7%)] p-6">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {category}
          </div>
          <h3 className="font-heading mt-1.5 text-2xl font-semibold tracking-tight">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap justify-end gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
