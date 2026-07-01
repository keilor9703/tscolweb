import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

/** Infinite horizontal marquee. Duplicates children for a seamless loop. */
export function Marquee({
  children,
  className,
  duration = "40s",
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  duration?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("mask-fade-x w-full overflow-hidden", className)}>
      <div
        className="flex w-max items-center gap-6 animate-marquee"
        style={{
          ["--marquee-duration" as string]: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center gap-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
