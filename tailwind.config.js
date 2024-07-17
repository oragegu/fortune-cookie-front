/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
    "./src/*.{html,ts, scss}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      't2orange': '#F85E4A',
      't2black': '#1A171B'
    },
    extend: {},
  },
  plugins: [],
}

