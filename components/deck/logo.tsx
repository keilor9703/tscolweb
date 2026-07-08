import { cn } from "@/lib/utils";

/** Ksmart360 wordmark with a 360 ring mark. */
export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const text =
    size === "lg" ? "text-4xl md:text-6xl" : size === "sm" ? "text-lg" : "text-2xl";
  const mark = size === "lg" ? "h-12 w-12 md:h-16 md:w-16" : size === "sm" ? "h-7 w-7" : "h-9 w-9";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("relative inline-grid place-items-center", mark)}>
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <defs>
            <linearGradient id="ks-g" x1="0" y1="0" x2="48" y2="48">
              <stop offset="0%" stopColor="hsl(var(--brand))" />
              <stop offset="100%" stopColor="hsl(var(--brand-2))" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#ks-g)" opacity="0.16" />
          <rect
            x="2.75"
            y="2.75"
            width="42.5"
            height="42.5"
            rx="12.5"
            fill="none"
            stroke="url(#ks-g)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M18 14V34M18 24L30 14M18 24L30 34"
            stroke="url(#ks-g)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={cn("font-heading font-semibold tracking-tight", text)}>
        Ksmart
        <span className="text-[hsl(var(--brand))]">360</span>
      </span>
    </div>
  );
}
