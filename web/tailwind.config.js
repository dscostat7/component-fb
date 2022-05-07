const tailwindcss = require("tailwindcss");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        avocado: {
          100: '#448203',
          300: '#568203'
        },
      },
      borderRadius: {
        md: '4px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}