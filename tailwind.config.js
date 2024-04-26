/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      grotesk: ['Hanken Grotesk', 'sans-serif'],
      "parabolica-bold": ['parabolica-bold'],
      "parabolica-medium": ['parabolica-medium'],
    },


    extend: {
      backgroundColor: {
        "primary-background": '#001B2C',
        "sky-blue": '#45CDFF',
        "dark-blue": '#0912FF',
        "light-cyan": '#8FE1FF',
      },
      colors: {
        "sky-blue": '#45CDFF',
        "secondary": '#555555',
        "primary": '#001B2C',
      },
    },
  },
  plugins: [],
}