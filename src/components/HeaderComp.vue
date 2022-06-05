<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="w-full flex justify-center items-center">
    <div class="flex justify-center items-center px-32px w-[calc(100%-64px)] mt-6 bg-slate-800 p-4 rounded-2xl md:w-1/2">
      <img class="w-20 mr-2 animate-pulse sm:w-28 md:w-36 md:m-6" src="svg/images/coin.svg" alt="Coin Logo">
      <div class="flex flex-col w-full items-start">
        <h1 class="font-pacifico text-2xl mb-2 sm:text-4xl sm:mb-4 md:text-5xl md:mb-8">Pricecryp</h1>
        <h2 class="font-cabin text-sm sm:text-lg md:text-xl">BTC, DACXI, ETH, ATOM, LUNA price in real time!</h2>
      </div>
    </div>
  </div>
</template>