"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Deck({ slides }: { slides: React.ReactNode[] }) {
  const total = slides.length;
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [isFs, setIsFs] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => {
      setState(([i]) => {
        const next = Math.min(Math.max(i + delta, 0), total - 1);
        return [next, delta];
      });
    },
    [total]
  );

  const goTo = useCallback((target: number) => {
    setState(([i]) => [target, target > i ? 1 : -1]);
  }, []);

  const toggleFs = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "PageDown":
          e.preventDefault();
          go(1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          go(-1);
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(total - 1);
          break;
        case "f":
        case "F":
          toggleFs();
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, goTo, toggleFs, total]);

  useEffect(() => {
    const onFsChange = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-background text-foreground"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {/* Progress bar */}
      <div className="absolute inset-x-0 top-0 z-50 h-1 bg-white/5">
        <motion.div
          className="h-full bg-[hsl(var(--brand))]"
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: EASE }}
          className="absolute inset-0"
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        aria-label="Anterior"
        onClick={() => go(-1)}
        disabled={index === 0}
        className="group absolute left-3 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2.5 backdrop-blur transition hover:bg-white/10 disabled:pointer-events-none disabled:opacity-0 md:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Siguiente"
        onClick={() => go(1)}
        disabled={index === total - 1}
        className="group absolute right-3 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2.5 backdrop-blur transition hover:bg-white/10 disabled:pointer-events-none disabled:opacity-0 md:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Bottom bar: dots + counter */}
      <div className="absolute inset-x-0 bottom-4 z-50 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a diapositiva ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-6 bg-[hsl(var(--brand))]"
                  : "w-1.5 bg-white/25 hover:bg-white/50"
              )}
            />
          ))}
        </div>
        <span className="font-mono text-xs tabular-nums text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Fullscreen toggle */}
      <button
        aria-label="Pantalla completa"
        onClick={toggleFs}
        className="absolute right-4 top-4 z-50 rounded-full border border-white/10 bg-white/5 p-2 text-muted-foreground backdrop-blur transition hover:bg-white/10 hover:text-foreground"
      >
        {isFs ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
      </button>
    </div>
  );
}
