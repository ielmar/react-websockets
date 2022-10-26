/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ecc94b',
        background: '#fbfbfe',
        danger: '#ef5959',
        success: '#1dd15a',
        blue: '#3861fb',
        gray: '#c0c0c2',
        dark: '#4b4b4d',
      },
    },
  },
  plugins: [],
}
