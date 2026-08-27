import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#030507",
        matrix: "#69ff87",
        cyanex: "#38e8ff",
        violetx: "#a86bff",
        terminal: "#07100d",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(105, 255, 135, 0.25), inset 0 0 18px rgba(56, 232, 255, 0.08)",
        cyan: "0 0 32px rgba(56, 232, 255, 0.24)",
        violet: "0 0 38px rgba(168, 107, 255, 0.22)",
      },
      backgroundImage: {
        "terminal-grid":
          "linear-gradient(rgba(105,255,135,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,232,255,.07) 1px, transparent 1px)",
        "scanline":
          "linear-gradient(180deg, transparent 0%, rgba(105,255,135,.06) 50%, transparent 100%)",
      },
      animation: {
        "grid-drift": "grid-drift 18s linear infinite",
        "scanline": "scanline 8s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "typing-cursor": "typing-cursor 1s steps(1) infinite",
      },
      keyframes: {
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "80px 80px" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: ".55" },
          "50%": { opacity: "1" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        "typing-cursor": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
