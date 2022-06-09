<script>
export default {

}
</script>

<template>
	<footer class="w-full flex items-center justify-center flex-col border-solid border-t-2 border-lime-600 bg-stone-800 py-8 md:flex-row md:justify-around">
		<div class="w-72 font-cabin font-medium bg-stone-700 rounded p-4 flex items-start justify-center flex-col text-sm sm:w-96 sm:text-xl">
			<span class="mb-2">Credits:</span>
			<a class="hover:text-stone-50" href="https://www.coingecko.com/en/branding" target="_blank">Data from <strong>CoinGecko</strong></a>
			<a class="hover:text-stone-50" href="https://undraw.co/" target="_blank">Header pic from <strong>Undraw.co</strong></a>
			<a class="hover:text-stone-50" href="https://cryptologos.cc/" target="_blank">Crypto logos from <strong>Cryptologos.cc</strong></a>
		</div>
		<div class="flex flex-col items-center justify-center w-72 mt-4 sm:w-96">
			<h5 class="font-kdam text-center text-base text-stone-50 p-4 border-solid border-2 border-stone-50 w-72 sm:w-96 sm:text-xl md:w-80">© 2022 Heron Nepomuceno</h5>
			<div class="flex items-center justify-center mt-4 sm:w-96">
				<a class="w-10 h-10 bg-stone-200 rounded-full p-2 mr-4 flex items-center justify-center hover:scale-105 transition-transform sm:w-12 sm:h-12" href="https://www.linkedin.com/in/heron-nepomuceno-b3125b1b6/" target="_blank" aria-label="Acess My Linkedin">
					<svg class="w-8 h-8 fill-lime-600 sm:w-10 sm:h-10">
          	<use :xlink:href="('/svg/icons/sprite.svg#linkedin')"></use>
        	</svg>
				</a>
				<a class="w-10 h-10 bg-stone-200 rounded-full p-2 flex items-center justify-center hover:scale-105 transition-transform sm:w-12 sm:h-12" href="https://heron.pages.dev/" target="_blank" aria-label="Acess My Website">
					<svg class="w-8 h-8 fill-lime-600 sm:w-10 sm:h-10">
						<use :xlink:href="('/svg/icons/sprite.svg#cellphone-link')"></use>
					</svg>
				</a>
				<a class="w-10 h-10 bg-stone-200 rounded-full p-2 ml-4 flex items-center justify-center hover:scale-105 transition-transform sm:w-12 sm:h-12" href="https://github.com/HeronNepomuceno" target="_blank" aria-label="Acess My Github">
					<svg class="w-8 h-8 fill-lime-600 sm:w-10 sm:h-10">
						<use :xlink:href="('/svg/icons/sprite.svg#github')"></use>
					</svg>
				</a>
			</div>
		</div>
	</footer>
</template>