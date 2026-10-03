/** @type {import('tailwindcss').Config} */

/** Token helper: CSS variable holding "r g b" channels so Tailwind opacity modifiers still work. */
const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: token("--c-surface"),
          raised: token("--c-surface-raised"),
          overlay: token("--c-surface-overlay"),
        },
        ink: {
          DEFAULT: token("--c-ink"),
          muted: token("--c-ink-muted"),
          faint: token("--c-ink-faint"),
        },
        accent: {
          DEFAULT: token("--c-accent"),
          dim: token("--c-accent-dim"),
          glow: "rgb(var(--c-accent) / 0.2)",
        },
        line: "rgb(var(--c-ink) / 0.16)",
      },
      fontFamily: {
        sans: ['"Archivo"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1320px",
        prose: "68ch",
      },
      boxShadow: {
        card: "none",
        glow: "none",
      },
      letterSpacing: {
        display: "-0.035em",
        meta: "0.08em",
      },
      backgroundImage: {
        "grid-faint": "none",
      },
    },
  },
  plugins: [],
};
