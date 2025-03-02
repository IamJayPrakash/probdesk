/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}", // if you use classes here as well
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
