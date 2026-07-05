/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        display: ["Source Serif 4", "serif"],
      },
      boxShadow: {
        soft: "0 25px 60px -12px rgba(12, 27, 42, 0.18)",
        premium: "0 1px 0 rgba(12,27,42,0.05), 0 30px 70px -20px rgba(12,27,42,0.22)",
      },
      colors: {
        sand: "#f7f4ee",
        dune: "#ece6d8",
        ink: "#0c1b2a",
        muted: "#5c6672",
        accent: "#9c6b1a",
        accentLight: "#c69a4a",
        lagoon: "#1c4258",
        card: "#ffffff",
      },
    },
  },
  plugins: [],
};
