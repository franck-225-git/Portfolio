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
        soft: "0 20px 50px rgba(11, 27, 43, 0.14)",
      },
      colors: {
        sand: "#f4f6f9",
        dune: "#e6ebf2",
        ink: "#0b1b2b",
        muted: "#55667a",
        accent: "#b7791f",
        lagoon: "#1f4d6b",
        card: "#ffffff",
      },
    },
  },
  plugins: [],
};
