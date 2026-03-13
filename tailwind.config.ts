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
        // ブランドカラー：ダークネイビー × ゴールド × オフホワイト
        navy: {
          50:  "#eef1f7",
          100: "#d5dcea",
          200: "#adb9d5",
          300: "#7e93bb",
          400: "#5670a1",
          500: "#3a5287",
          600: "#2c3f6e",
          700: "#1e2d55",
          800: "#111d3c",
          900: "#0a1128",
          950: "#050915",
        },
        gold: {
          50:  "#fdf8ec",
          100: "#f9edcc",
          200: "#f3d990",
          300: "#ecc454",
          400: "#e4ae2a",
          500: "#c9921a",
          600: "#a87114",
          700: "#865211",
          800: "#6b3f14",
          900: "#593515",
          950: "#321a07",
        },
        cream: "#faf8f5",
        cyan: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
        },
        purple: {
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #0a1128 0%, #1e2d55 50%, #2c3f6e 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #ecc454 0%, #c9921a 100%)",
        "gradient-tech":
          "linear-gradient(135deg, #050915 0%, #0a1128 40%, #150a2a 70%, #0d1a3d 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-slow": "pulseSlow 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
