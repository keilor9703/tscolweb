"use client";

import { cn } from "@/lib/utils";

/**
 * Cinematic ambient scenography: slow-drifting light "blobs" behind content.
 * Purely decorative and pointer-events-none so it never blocks interaction.
 */
export function AmbientBackground({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "soft";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Indigo blob */}
      <div
        className="absolute -top-1/4 left-[8%] h-[42rem] w-[42rem] rounded-full blur-[120px] animate-aurora-shift"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--brand) / 0.32), transparent 62%)",
        }}
      />
      {/* Violet blob */}
      <div
        className="absolute top-[20%] right-[2%] h-[38rem] w-[38rem] rounded-full blur-[130px] animate-aurora-shift-2"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--brand-2) / 0.28), transparent 60%)",
        }}
      />
      {variant === "hero" && (
        <>
          {/* Cyan accent, lower third */}
          <div
            className="absolute bottom-[-10%] left-[30%] h-[30rem] w-[30rem] rounded-full blur-[120px] animate-aurora-shift"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--brand-3) / 0.16), transparent 60%)",
              animationDelay: "-6s",
            }}
          />
          {/* Top spotlight cone */}
          <div
            className="absolute left-1/2 top-0 h-[46rem] w-[70rem] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[110px]"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--brand) / 0.18), transparent 55%)",
            }}
          />
        </>
      )}
    </div>
  );
}
