module.exports = {
  purge: ["./src/**/*.jsx", "./index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#DC2626",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },  
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
    fontSmoothing: ['hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}