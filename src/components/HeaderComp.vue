<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="w-full flex justify-center items-center md:pl-4">
    <div class="flex justify-center items-center px-32px w-[calc(100%-64px)] mt-6 bg-stone-800 p-4 md:w-auto rounded ">
      <img class="w-20 mr-2 animate-pulse md:mr-4" src="/svg/images/bitcoin.svg" alt="Coin Logo">
      <div class="flex flex-col w-full items-start">
        <h1 class="font-kdam text-2xl mb-2 sm:text-4xl sm:mb-4">Pricecryp</h1>
        <h2 class="font-cabin font-medium text-sm sm:text-lg">Real time prices: BTC, DACXI, ETH, ATOM, LUNA.</h2>
      </div>
    </div>
  </div>
</template>