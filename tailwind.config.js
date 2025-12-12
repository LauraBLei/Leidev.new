/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        leiDevBlue: "#335c6e",
        MatteBlack: "#282828",
        Onyx: "#353839",
        Beige: "#faf9f6",
      },
    },
  },
  plugins: [],
};
