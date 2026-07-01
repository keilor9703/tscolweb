import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Capabilities } from "@/components/sections/capabilities";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Logos />
        <Capabilities />
        <Services />
        <Process />
        <Stats />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
