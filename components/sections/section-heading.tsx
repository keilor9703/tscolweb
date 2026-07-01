import { Reveal } from "@/components/cinematic/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      <Reveal>
        <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--brand-2))]">
          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-2))]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-heading mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl",
            align === "center" ? "max-w-3xl" : "max-w-2xl"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-balance text-lg text-muted-foreground",
              align === "center" ? "max-w-2xl" : "max-w-xl"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
