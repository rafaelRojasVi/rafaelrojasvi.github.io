/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0c1018",
          raised: "#111827",
          overlay: "#151c2c",
        },
        ink: {
          DEFAULT: "#e8edf5",
          muted: "#94a3b8",
          faint: "#64748b",
        },
        accent: {
          DEFAULT: "#34d3c9",
          dim: "#0d9488",
          glow: "rgba(52, 211, 199, 0.35)",
        },
        line: "rgba(148, 163, 184, 0.12)",
      },
      fontFamily: {
        sans: [
          '"DM Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 0 0 1px rgba(148, 163, 184, 0.08), 0 24px 48px -24px rgba(0, 0, 0, 0.65)",
        glow: "0 0 40px -12px var(--tw-shadow-color)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
