const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        grayish: {
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
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
}