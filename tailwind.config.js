/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },

      colors: {
        ink: "#070A0F",
        panel: "#0D121A",
        line: "#1B2430",
        neon: "#B7FF4A",
        cyan: "#5EE7F7",
      },

      boxShadow: {
        glow: "0 0 60px rgba(183,255,74,.12)",
      },
    },
  },

  plugins: [],
};