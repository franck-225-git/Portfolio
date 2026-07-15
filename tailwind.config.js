/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        // NB : ne pas nommer cette couleur "base" — `text-base` entrerait en
        // conflit avec l'utilitaire de taille de police de Tailwind.
        night: "#0a0d13",
        panel: "#0e131c",
        ink: "#e9edf4",
        bright: "#e8ebf1",
        body: "#a8b1c1",
        muted: "#8b95a7",
        faint: "#6f7a8d",
        dim: "#4f5b6e",
      },
      boxShadow: {
        card: "0 22px 44px -26px rgba(0, 0, 0, 0.6)",
        glow: "0 12px 30px -12px rgba(255, 255, 255, 0.3)",
        glowSm: "0 8px 22px -10px rgba(255, 255, 255, 0.28)",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        marqueeX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marqueeX 38s linear infinite",
      },
    },
  },
  plugins: [],
};
