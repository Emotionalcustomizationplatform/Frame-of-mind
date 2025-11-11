/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        secondary: "#F5A623",
        background: "#F9FAFB"
      },
      backgroundImage: {
        "tree-hole": "url('/images/tree-bg.jpg')"
      }
    }
  },
  plugins: []
};