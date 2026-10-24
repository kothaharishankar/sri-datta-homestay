import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: "#6B1423", deep: "#4A0D18" },
        gold: { DEFAULT: "#B08A3E", soft: "#D9C08A" },
        ivory: "#FAF5EA", sand: "#EFE5D0", ink: "#2A2523", earth: "#6B5443",
      },
      fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
