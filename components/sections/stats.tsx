import { Counter } from "@/components/cinematic/counter";
import { RevealGroup, RevealItem } from "@/components/cinematic/reveal";

const STATS = [
  { to: 120, suffix: "+", label: "Proyectos entregados" },
  { to: 98, suffix: "%", label: "Clientes que repiten" },
  { to: 0.8, suffix: "s", label: "Carga promedio", decimals: 1 },
  { to: 12, suffix: "años", label: "De experiencia", gap: true },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="card-glow relative overflow-hidden rounded-[2rem] px-6 py-12 md:px-12">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, hsl(var(--brand)/0.18), transparent 60%)",
            }}
          />
          <RevealGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <div className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">
                  <span className="text-gradient">
                    <Counter
                      to={s.to}
                      suffix={s.gap ? " " + s.suffix : s.suffix}
                      decimals={s.decimals ?? 0}
                    />
                  </span>
                </div>
                <div className="mt-3 text-sm text-muted-foreground md:text-base">
                  {s.label}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
