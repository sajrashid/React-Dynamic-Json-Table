module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['monospace', 'SFMono-Regular'],
      'Title': ['Baloo Paaji 2'],
      'body': ['Oxygen-Regular'],
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
