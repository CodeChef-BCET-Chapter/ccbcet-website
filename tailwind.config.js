const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./src/**/*.jsx", "./index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
      backgroundImage: {
        "header": "url('/img/header.png')",  
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
    fontSmoothing: ["hover", "focus"],
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};