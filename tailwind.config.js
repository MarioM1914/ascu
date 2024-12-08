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
    },
  },
  plugins: [],
};
