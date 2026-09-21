import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080A",
        surface: {
          50: "#18181C",
          100: "#141417",
          200: "#0F0F12",
          DEFAULT: "#121215",
          border: "#24242A",
          muted: "#1E1E24",
        },
        motorsport: {
          red: {
            DEFAULT: "#EF233C",
            light: "#FF3B53",
            dark: "#C8102E",
            glow: "rgba(239, 35, 60, 0.25)",
          },
          amber: {
            DEFAULT: "#F59E0B",
            light: "#FBBF24",
          },
          steel: "#8A94A6",
          darksteel: "#3E4450",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-oxanium)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "carbon-pattern": "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)",
        "red-glow": "radial-gradient(ellipse at center, rgba(239, 35, 60, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "motorsport-card": "0 4px 20px -2px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.05)",
        "motorsport-glow": "0 0 25px -3px rgba(239, 35, 60, 0.35)",
        "tech-border": "inset 0 0 0 1px rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
