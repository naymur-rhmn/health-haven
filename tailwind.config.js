/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      archivo: ["Archivo", "sans-serif"],
      yeseva: ["Yeseva One", "serif"],
    },
    extend: {
      colors: {
        // primary: "#1F2B6C",
        // primary: "#008D96",
        // primary: "#308B8F",
        primary: "#4575BD",

        secondary: "#159EEC",
        black: "#212124",
        white: "#FCFEFE",
        tone: "#BFD2F8",
      },
    },
  },
  plugins: [],
};
