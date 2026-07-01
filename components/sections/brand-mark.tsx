import { cn } from "@/lib/utils";

/** Abstract geometric brand mark. Swap for your real logo when ready. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block", className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="bm-g" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="hsl(245 62% 62%)" />
            <stop offset="55%" stopColor="hsl(262 83% 64%)" />
            <stop offset="100%" stopColor="hsl(190 92% 56%)" />
          </linearGradient>
        </defs>
        <rect
          x="1.25"
          y="1.25"
          width="37.5"
          height="37.5"
          rx="11"
          stroke="url(#bm-g)"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <path
          d="M12 28V12L28 28V12"
          stroke="url(#bm-g)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[11px] blur-md opacity-60"
        style={{
          background:
            "linear-gradient(135deg, hsl(245 62% 58% / 0.5), hsl(262 83% 60% / 0.4))",
        }}
      />
    </span>
  );
}
