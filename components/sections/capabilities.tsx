import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { Reveal } from "@/components/cinematic/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export function Capabilities() {
  return (
    <section id="capacidades" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Una muestra de nuestras capacidades"
          description="Cada proyecto combina diseño, ingeniería y detalle obsesivo. Explora las disciplinas que llevamos a cada producto que construimos."
        />
      </div>

      <Reveal delay={0.1} y={40}>
        <div className="container mt-14">
          <FeatureCarousel />
        </div>
      </Reveal>
    </section>
  );
}
