/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        pdark: ['Pdark', 'sans-serif'],
        pressStart: ['PressStart2P', 'sans-serif'],
      },
      screens: {
        '500px': { max: '500px' },
      },
    },
  },
  plugins: [],
}
