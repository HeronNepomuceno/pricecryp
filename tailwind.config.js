module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/components/HeaderComp.vue",
    "./src/components/MainComp.vue",
    "./src/components/CardComp.vue",
    "./src/components/PricesComp.vue"
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