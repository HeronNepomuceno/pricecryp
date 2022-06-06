<script>
import CardComp from './CardComp.vue'
export default {
	components: { CardComp },
	methods: {
		cardSelect(card_number) {
			// This function change the background card when selected and save the card number in session storage
			var all_cards = document.querySelectorAll(".js-card")
			for (let item of all_cards) {
				item.classList.remove('bg-stone-600')
			}
			all_cards[card_number-1].classList.add('bg-stone-600')
			sessionStorage.setItem('card_select', card_number)
		}
	},

	mounted() {
		// This function set the value of card selected, if not exist a value, set the selection in first card
		if(sessionStorage.getItem('card_select') != null) {
			let value = sessionStorage.getItem('card_select')
			this.cardSelect(parseInt(value))
		} else {
			this.cardSelect(1)
		}
	}
}
</script>

<template>
	<section class="w-full flex flex-col items-center justify-center mt-8 sm:mt-12">
		<h3 class="font-kdam mb-6 text-xl">Select a crypto clicking in card:</h3>
		<div class="flex flex-col items-center justify-center sm:grid sm:grid-cols-2 sm:gap-4">
			<CardComp @click="cardSelect(1)" crypto_icon="card_bitcoin" crypto_name="Bitcoin" crypto_ticker="BTC"/>
			<CardComp @click="cardSelect(2)" crypto_icon="card_ethereum" crypto_name="Ethereum" crypto_ticker="ETH"/>
			<CardComp @click="cardSelect(3)" crypto_icon="card_cosmos" crypto_name="Cosmos" crypto_ticker="ATOM"/>	
			<CardComp @click="cardSelect(4)" crypto_icon="card_terra" crypto_name="Terra" crypto_ticker="LUNA"/>
		</div>
	</section>
</template>