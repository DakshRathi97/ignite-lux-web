import { useMemo } from "react";

export function Sparks({ count = 30 }: { count?: number }) {
  const sparks = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        size: 1 + Math.random() * 2.5,
        hue: Math.random() > 0.5 ? "#F5B700" : "#FF6B35",
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="spark"
          style={{
            left: `${s.left}%`,
            bottom: "-10px",
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.hue,
            boxShadow: `0 0 10px 1px ${s.hue}`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}