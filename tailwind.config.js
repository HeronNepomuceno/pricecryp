module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/components/HeaderComp.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabin': ['Cabin', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
};