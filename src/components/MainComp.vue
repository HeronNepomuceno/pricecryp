<script>
import CardComp from './CardComp.vue'
import PricesComp from './PricesComp.vue'
export default {
	components: { CardComp, PricesComp },
	data() {
		return {
			card_data: [
				{icon: 'card_bitcoin', name: 'Bitcoin', ticker: 'BTC'},
				{icon: 'card_ethereum',	name: 'Ethereum', ticker: 'ETH'},
				{icon: 'card_cosmos', name: 'Cosmos', ticker: 'ATOM'},
				{icon: 'card_terra', name: 'Terra', ticker: 'LUNA'}
			],
			number: 0
		}
	},
	methods: {
		cardSelect(card_number) {
			// This function change the background card when selected and save the card number in session storage
			this.number = parseInt(card_number)
			var all_cards = document.querySelectorAll(".js-card")
			for (let item of all_cards) {
				item.classList.remove('bg-stone-600')
			}
			all_cards[this.number].classList.add('bg-stone-600')
			sessionStorage.setItem('card_select', this.number)
		}
	},
	mounted() {
		// This function set the value of card selected, if not exist a value, set the selection in first card
		if(sessionStorage.getItem('card_select') != null) {
			let value = sessionStorage.getItem('card_select')
			this.cardSelect(parseInt(value))
		} else {
			this.cardSelect(0)
		}
	}
}
</script>

<template>
	<main class="w-full flex flex-col items-center justify-center mt-8 sm:mt-12">
		<h3 class="font-kdam mb-6 text-lg w-56 sm:text-xl sm:w-auto">1. Select a crypto clicking in card:</h3>
		<ul class="flex flex-col items-center justify-center sm:grid sm:grid-cols-2 sm:gap-4">
			<li @click="cardSelect(`${index}`)" v-for="(card, index) in card_data" :key="card">
				<CardComp :crypto_icon="card.icon" :crypto_name="card.name" :crypto_ticker="card.ticker"/>
			</li>
		</ul>
		<PricesComp :coin_number_select="number"/>
	</main>
</template>