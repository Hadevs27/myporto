"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-9 max-w-3xl text-center md:mb-12"
    >
      <p className="terminal-title text-xs text-cyanex md:text-sm">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-white text-glow md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-emerald-100/70 md:text-base">
        {description}
      </p>
    </motion.div>
  );
}
