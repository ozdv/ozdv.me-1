/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#f9f9fc",
          200: "#eff0f6",
          300: "#dfe2ee",
          400: "#cfd4e5",
          500: "#bfc6dc",
          600: "#a1abc8",
          700: "#8490b1",
          800: "#6a7798",
          900: "#515e7e",
          950: "#394665",
          1000: "#21304d",
        },
        blue: {
          400: "#4eb6ef",
        },
      },
    },
  },
  plugins: [],
};
