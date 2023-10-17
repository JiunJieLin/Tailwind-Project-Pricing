// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f3cc9",
        "primary-dark": "#4232aa",
        secondary: "#ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
