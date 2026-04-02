/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        terra:  { 50:'#fdf4f0', 100:'#fae4d8', 200:'#f4c4a8', 300:'#ec9970', 400:'#e07040', 500:'#c85a2a', 600:'#a34520', 700:'#7d3318', 800:'#5e2612', 900:'#3d180b' },
        sage:   { 50:'#f3f7f2', 100:'#e0eedd', 200:'#bcd9b6', 300:'#8fbf85', 400:'#62a057', 500:'#427d38', 600:'#33612b', 700:'#264a20', 800:'#1a3316', 900:'#0f1f0d' },
        cream:  '#fdf8f3',
        warm:   '#f5ede3',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
