module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/components/HeaderComp.vue",
    "./src/components/MainComp.vue",
    "./src/components/CardComp.vue",
    "./src/components/PricesComp.vue",
    "./src/components/HistoricComp.vue",
    "./src/components/FooterComp.vue",
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