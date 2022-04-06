const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
