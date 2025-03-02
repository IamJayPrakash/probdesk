/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ensures dark mode toggling works
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4f46e5",
          dark: "#3b82f6",
        },
        secondary: {
          light: "#fbbf24",
          dark: "#f59e0b",
        },
        background: {
          light: "#ffffff",
          dark: "#1f2937",
        },
        text: {
          light: "#1f2937",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
