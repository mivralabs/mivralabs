import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royal: { DEFAULT: "#2457F5", dark: "#1A41C4", soft: "#EAF0FF" },
        navy: { DEFAULT: "#0B1B3A", 700: "#14295A" },
        mist: "#F5F7FA",
        ink: "#1F2937",
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
      boxShadow: { card: "0 1px 2px rgba(11,27,58,.05), 0 8px 24px -12px rgba(11,27,58,.14)" },
    },
  },
  plugins: [],
};
export default config;
