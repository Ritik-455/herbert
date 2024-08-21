/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: "'Rubik',sans-serif",
      },
      colors: {
        grey: "#5f5f5f",
        dark_black: "#010101",
        orange: "#FF4C24",
        light_orange: "#FF9748",
        yellow: "#FFE36C",
      },
      fontSize: {
        "2lg": "44px",
        "3lg": "56px"
      },
      lineHeight: {
        "sm": "52px",
        "md": "56px",
        "lg": "66px",
      },
      backgroundImage: {
        "orange_gradient": "linear-gradient(241.09deg, rgba(255, 76, 36, 0.15) -34.32%, rgba(255, 227, 108, 0.15) 109.3%)"
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "24px",
        },
        center: true,
      },
    },
  },
  plugins: [],
}

