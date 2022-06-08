<script>
export default {
  props: { coin_number_select: Number },
  data() {
    return {
      url_slice: '',
      coin: ''
    }
  },
  mounted() {
    if(this.coin_number_select == 0) {
      this.url_slice = 'bitcoin'
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.url_slice}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then(response => response.json())
        .then(data => this.coin = data)
      sessionStorage.setItem('coin_select', this.url_slice)
    }
  },
  watch: {
    coin_number_select() {
      switch (this.coin_number_select) {
        case 0:
          this.url_slice = 'bitcoin'
          break;
        case 1:
          this.url_slice = 'dacxi'
          break;
        case 2:
          this.url_slice = 'ethereum'
          break;
        case 3:
          this.url_slice = 'cosmos'
          break;
        case 4:
          this.url_slice = 'terra-luna'
          break;
      }
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.url_slice}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then(response => response.json())
        .then(data => this.coin = data)
      sessionStorage.setItem('coin_select', this.url_slice)
    }
  },
  methods: {
    realodCurrentPrice() {
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.url_slice}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then(response => response.json())
        .then(data => this.coin = data)
      
      document.querySelector('.js-reload').classList.add('animate-spin')
      document.querySelector('.js-current-price').classList.add('bg-lime-300')
      setTimeout(() => {
        document.querySelector('.js-reload').classList.remove('animate-spin');
        document.querySelector('.js-current-price').classList.remove('bg-lime-300')
      }, "1000")
    }
  }
}
</script>

<template>
  <section class="flex justify-center items-center mt-6 flex-col">
    <h3 class="font-kdam mb-6 text-lg sm:text-xl w-56 sm:w-auto">2. The crypto selected must be show below:</h3>
    <div class="mt-8 mb-8 flex items-center justify-center flex-col sm:w-full">
      <h4 class="font-pacifico text-2xl font-medium bg-stone-200 text-stone-800 py-4 w-56 text-center rounded-t-xl	 border-solid border-2 border-lime-600 transition-all sm:w-full js-current-price" v-if="coin">${{ coin[0].current_price }}</h4>
      <button @click="realodCurrentPrice" class="w-full flex items-center justify-center bg-lime-600 py-2 rounded-b-xl transition-opacity hover:opacity-90">
        <svg class="w-8 h-8 fill-stone-200 js-reload">
          <use :xlink:href="('/svg/icons/sprite.svg#reload')"></use>
        </svg>
      </button>
    </div>
  </section>
</template>