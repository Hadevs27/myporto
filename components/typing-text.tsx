"use client";

import { useEffect, useMemo, useState } from "react";

type TypingTextProps = {
  phrases: string[];
  className?: string;
};

export function TypingText({ phrases, className }: TypingTextProps) {
  const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!safePhrases.length) {
      return;
    }

    const current = safePhrases[phraseIndex];
    const atEnd = charIndex === current.length;
    const atStart = charIndex === 0;
    const delay = deleting ? 36 : atEnd ? 1200 : 62;

    const timeout = window.setTimeout(() => {
      if (!deleting && atEnd) {
        setDeleting(true);
        return;
      }

      if (deleting && atStart) {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % safePhrases.length);
        return;
      }

      setCharIndex((index) => index + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, safePhrases]);

  const current = safePhrases[phraseIndex] ?? "";

  return (
    <span className={className}>
      {current.slice(0, charIndex)}
      <span className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-0.5 bg-matrix animate-typing-cursor" />
    </span>
  );
}
