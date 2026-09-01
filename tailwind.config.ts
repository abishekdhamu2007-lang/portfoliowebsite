import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          glow: "rgba(79, 70, 229, 0.4)",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
          glow: "rgba(124, 58, 237, 0.4)",
        },
        accent: {
          DEFAULT: "#06B6D4",
          hover: "#0891B2",
          glow: "rgba(6, 182, 212, 0.4)",
        },
        dark: {
          900: "#0B1120",
          800: "#0F172A",
          700: "#1E293B",
          600: "#334155",
        },
        muted: "#94A3B8",
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          card: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.12)",
          border: "rgba(255, 255, 255, 0.12)",
          "border-hover": "rgba(255, 255, 255, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-fira-code)", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.15), rgba(124, 58, 237, 0.08), transparent 70%)",
        "mesh-gradient": "radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.25) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(6, 182, 212, 0.2) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(124, 58, 237, 0.2) 0px, transparent 50%)",
      },
      boxShadow: {
        "neon-primary": "0 0 25px -5px rgba(79, 70, 229, 0.5)",
        "neon-secondary": "0 0 25px -5px rgba(124, 58, 237, 0.5)",
        "neon-accent": "0 0 25px -5px rgba(6, 182, 212, 0.5)",
        "glass-inner": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
        "card-elevation": "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "aurora": "aurora 20s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
