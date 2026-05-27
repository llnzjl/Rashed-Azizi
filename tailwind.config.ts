import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#fafafa",
        line: "#e8e8e8",
        accent: {
          blue: "#2563eb",
          cyan: "#0891b2",
          violet: "#6d28d9",
          soft: "#f5f5f5",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass:
          "0 28px 90px rgba(5, 8, 22, 0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        glow: "0 0 0 1px rgba(78,162,255,0.15), 0 30px 100px rgba(56,189,248,0.18)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "section-glow":
          "radial-gradient(circle at top left, rgba(78,162,255,0.22), transparent 35%), radial-gradient(circle at bottom right, rgba(139,92,246,0.16), transparent 28%)",
      },
      animation: {
        "float-soft": "floatSoft 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4.5s ease-in-out infinite",
        "scroll-dot": "scrollDot 2s ease-in-out infinite",
      },
      keyframes: {
        floatSoft: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.08)" },
        },
        scrollDot: {
          "0%": { transform: "translateY(0)", opacity: "0.1" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(20px)", opacity: "0.1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
