"use client";

import { ReactNode } from "react";

type CyberWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function CyberWindow({ title, children, className = "" }: CyberWindowProps) {
  return (
    <div className={`cyber-panel overflow-hidden rounded-lg ${className}`}>
      <div className="flex items-center justify-between border-b border-matrix/20 bg-black/35 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-matrix shadow-neon" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyanex shadow-cyan" />
          <span className="h-2.5 w-2.5 rounded-full bg-violetx shadow-violet" />
        </div>
        <p className="terminal-title text-xs text-emerald-100/70">{title}</p>
      </div>
      {children}
    </div>
  );
}
