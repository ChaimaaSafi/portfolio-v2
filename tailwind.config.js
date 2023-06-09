const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          hero: "#1c1c1c",
          primary: "#1f2233",
          secondary: "#292d40",
        },
        yellow: {
          hero: "#FFE569",
          primary: "#F8C43A",
        },
        orange: {
          hero: "#FF8300",
        },
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
    },
  },

  plugins: [],
};
