import { site } from "@/lib/site";
import { BrandMark } from "@/components/sections/brand-mark";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-14">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <BrandMark className="h-8 w-8" />
              <span className="font-heading text-lg font-semibold tracking-tight">
                {site.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {site.tagline}. {site.location}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              title="Navegación"
              links={site.nav.map((n) => ({ label: n.label, href: n.href }))}
            />
            <FooterCol
              title="Redes"
              links={[
                { label: "LinkedIn", href: site.socials.linkedin },
                { label: "X / Twitter", href: site.socials.x },
                { label: "GitHub", href: site.socials.github },
                { label: "Instagram", href: site.socials.instagram },
              ]}
            />
            <FooterCol
              title="Contacto"
              links={[
                { label: site.email, href: `mailto:${site.email}` },
                { label: "Empezar proyecto", href: "#contacto" },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName}. Todos los derechos
            reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Hecho con
            <span className="text-[hsl(var(--brand-2))]">♦</span>
            diseño cinematográfico
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
