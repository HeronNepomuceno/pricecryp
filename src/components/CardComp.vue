<script>
export default {
  props: {
    crypto_icon: String,
    crypto_name: String,
    crypto_ticker: String
  }
}
</script>

<template>
  <div class="flex w-72 items-center justify-start bg-stone-800 h-20 rounded-r-lg border-solid border-l-4 border-lime-600 hover:scale-105 transition-transform mb-4 cursor-pointer js-card" tabindex="0">
    <svg class="w-12 h-12 mx-6">
      <use :xlink:href="(`/svg/icons/sprite.svg#${crypto_icon}`)"></use>
    </svg>
    <span class="font-cabin font-normal text-lg">{{ crypto_name }} ({{ crypto_ticker }})</span>
  </div>
</template>