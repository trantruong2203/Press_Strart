/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "primary": "#4cdf20",
            "primary-hover": "#3bb516",
            "background-light": "#f6f8f6",
            "background-dark": "#152111",
            "surface-dark": "#1e2b1a",
            "surface-highlight": "#2d4625",
            "text-secondary": "#a0c695",
        },
        fontFamily: {
            "display": ["Manrope", "sans-serif"]
        },
        borderRadius: {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "2xl": "1rem",
          "full": "9999px"
        },
    },
  },
  plugins: [],
}
