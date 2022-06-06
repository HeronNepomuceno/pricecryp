module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/components/HeaderComp.vue",
    "./src/components/CardsComp.vue",
    "./src/components/CardComp.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabin': ['Cabin', 'sans-serif'],
        'kdam': ['Kdam Thmor Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
};