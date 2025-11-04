/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D9A441",
        ink: "#0A1628",
        surface: "#F7F4ED"
      }
    }
  },
  plugins: []
};
