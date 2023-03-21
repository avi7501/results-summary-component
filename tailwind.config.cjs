/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'lightLavender': 'hsl(241, 100%, 89%)',
      'violetBlue': 'hsla(256, 72%, 46%, 1)',
      'cobaltBlue': 'hsl(234, 85%, 45%)',
      'white': 'hsl(0, 0%, 100%)',
      'royalBlue': 'hsl(241, 81%, 54%)',
      'slateBlue': 'hsl(252, 100%, 67%)',

    },
    extend: {},
  },
  plugins: [],
}
