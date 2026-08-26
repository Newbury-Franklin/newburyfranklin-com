import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#001124",
          800: "#001832",
          700: "#0b2440",
          600: "#16354f",
        },
        ink: "#03060a",
        charcoal: "#2b2b2b",
        stone: {
          DEFAULT: "#726863",
          light: "#aba29d",
        },
        sand: "#f8f4f4",
        cream: "#f1efe9",
        gold: {
          DEFAULT: "#b6864a",
          light: "#e4c99a",
          dark: "#8a6b3d",
        },
      },
      fontFamily: {
        serif: ["var(--font-beaufort)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "78rem",
      },
    },
  },
  plugins: [],
};
export default config;
