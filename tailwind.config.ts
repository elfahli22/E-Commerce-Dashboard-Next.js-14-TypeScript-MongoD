import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0F0F14",
          secondary: "#1C1C24",
          card: "#16161E",
          elevated: "#1E1E28",
        },
        brand: {
          purple: "#4F46E5",
          "purple-light": "#6366F1",
          gold: "#F59E0B",
          "gold-light": "#FCD34D",
          cyan: "#06B6D4",
          emerald: "#10B981",
          rose: "#F43F5E",
        },
        text: {
          primary: "#F1F1F3",
          secondary: "#8B8B9A",
          muted: "#4A4A5A",
        },
        border: {
          subtle: "#2A2A36",
          default: "#333344",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "card-gradient": "linear-gradient(135deg, #1E1E28 0%, #16161E 100%)",
        "purple-gradient": "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
        "gold-gradient": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
        "emerald-gradient": "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        "rose-gradient": "linear-gradient(135deg, #F43F5E 0%, #DC2626 100%)",
        "cyan-gradient": "linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(79, 70, 229, 0.15)",
        "glow-gold": "0 0 30px rgba(245, 158, 11, 0.15)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "slide-in": "slideIn 0.3s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
