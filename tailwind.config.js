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
        dim: "#4f5b6e",
        // Accent unique, réservé au sens : sens d'un flux, service en production.
        signal: "#d9a441",
      },

    },
  },
  plugins: [],
};
