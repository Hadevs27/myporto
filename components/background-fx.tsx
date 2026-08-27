"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: index * 0.35,
  size: 2 + (index % 4),
}));

export function BackgroundFx() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-terminal-grid bg-[length:42px_42px] opacity-45 animate-grid-drift" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(105,255,135,0.16),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(56,232,255,0.16),transparent_30%),radial-gradient(circle_at_60%_72%,rgba(168,107,255,0.13),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-scanline opacity-50 animate-scanline" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(transparent_50%,rgba(105,255,135,0.9)_51%)] [background-size:100%_4px]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyanex shadow-cyan"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [-18, 18, -18], opacity: [0.22, 0.9, 0.22] }}
          transition={{
            duration: 5 + (particle.id % 5),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
