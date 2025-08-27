/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
  "./index.html",
  "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base dark background + subtle surface
        background: "#111113",
        surface: "#18181B",
        foreground: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      // gradient stop colors
      gradientColorStops: {
        "brand-start": "#3E8EFF",
        "brand-mid": "#FE6CBB",
        "brand-end": "#A06AFE",
      },
      boxShadow: {
        "glow": "0 0 0 1px rgba(255,255,255,0.06), 0 0 20px rgba(160,106,254,0.25)",
      },
    },
  },
  plugins: [],
};
