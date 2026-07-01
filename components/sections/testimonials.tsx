import { Marquee } from "@/components/cinematic/marquee";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/cinematic/reveal";

const TESTIMONIALS = [
  {
    quote:
      "Transformaron nuestra plataforma en algo que da orgullo mostrar. La atención al detalle es de otro nivel.",
    name: "María Restrepo",
    role: "CEO, Aurora Finance",
  },
  {
    quote:
      "Rápidos, transparentes y obsesionados con la calidad. El sitio carga en menos de un segundo.",
    name: "Daniel Ortiz",
    role: "CTO, Nimbus",
  },
  {
    quote:
      "Las animaciones y la experiencia hicieron que nuestra conversión subiera un 40%. Increíble equipo.",
    name: "Laura Gómez",
    role: "Head of Growth, Pulse",
  },
  {
    quote:
      "Entendieron nuestra visión mejor que nosotros. Volveremos a trabajar con ellos sin dudarlo.",
    name: "Andrés Vélez",
    role: "Fundador, Orbit",
  },
  {
    quote:
      "El proceso fue impecable de inicio a fin. Entregas semanales y cero sorpresas.",
    name: "Camila Torres",
    role: "Product Lead, Nimbus",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonios"
          title="Clientes que confían en nosotros"
          description="No lo decimos nosotros: lo dicen los equipos con los que hemos construido."
        />
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 space-y-5">
          <Marquee duration="55s">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Marquee>
          <Marquee duration="65s" reverse>
            {[...TESTIMONIALS].reverse().map((t) => (
              <TestimonialCard key={t.name + "-r"} {...t} />
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <figure className="card-glow w-[340px] shrink-0 rounded-3xl p-6 md:w-[400px]">
      <div className="mb-4 flex gap-0.5 text-[hsl(var(--brand-2))]">
        {"★★★★★".split("").map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
      <blockquote className="text-[15px] leading-relaxed text-foreground/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          className="grid h-11 w-11 place-items-center rounded-full font-heading text-sm font-semibold text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-2)))",
          }}
        >
          {initials}
        </span>
        <span>
          <span className="block text-sm font-semibold">{name}</span>
          <span className="block text-xs text-muted-foreground">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
