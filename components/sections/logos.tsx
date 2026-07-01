import { Marquee } from "@/components/cinematic/marquee";
import { Reveal } from "@/components/cinematic/reveal";

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Framer Motion",
  "Vercel",
  "GraphQL",
  "Figma",
  "AWS",
  "Stripe",
];

export function Logos() {
  return (
    <section className="relative border-y border-white/5 py-14">
      <div className="container">
        <Reveal>
          <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            El stack con el que construimos
          </p>
        </Reveal>
      </div>
      <Marquee duration="38s">
        {STACK.map((tech) => (
          <span
            key={tech}
            className="flex select-none items-center whitespace-nowrap rounded-full border border-white/8 bg-white/[0.02] px-6 py-2.5 font-heading text-lg font-medium text-muted-foreground/80 transition-colors hover:text-foreground"
          >
            {tech}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
