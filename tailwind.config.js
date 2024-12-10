/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        replyRegular: ["ReplyRegular", "sans-serif"],
        replyItalic: ["ReplyItalic", "sans-serif"],
        boogyBrutRegular: ["BoogyBrut", "sans-serif"],
      },
      colors: {
        //primarna
        customBlue: {
          light: "#d5e6ef",
          dark: "#0060af",
        },

        //sekundarne
        customRed: {
          light: "#ffcebd",
          dark: "#ff541e",
        },
        customRose: {
          light: "#ffbfd6",
          dark: "#ff69ad",
        },
        customGreen: {
          light: "#c1dece",
          dark: "#42ba86",
        },

        //tercijarna
        customBrown: {
          light: "#e9e4da",
          dark: "#c2b59b",
        },
      },
    },
  },
  plugins: [],
};
