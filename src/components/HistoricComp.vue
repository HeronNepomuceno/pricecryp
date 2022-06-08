<script>
export default {
	data() {
		return {
			historic: '',
			date: '',
			date_info: '',
			date_incomplet_error: false,
			coin_selected: '',
		}
	},
	methods: {
		validateDate() {
			if(this.date.length == 10) {
				this.formatDate(this.date)
			} else {
				this.date_incomplet_error = true
				setTimeout(() => {
					this.date_incomplet_error = false
				}, "3000")
			}
		},
		formatDate(noFormatDate) {
			let formatDate = noFormatDate
			formatDate = noFormatDate.split('-', 3)
			formatDate = `${formatDate[2]}-${formatDate[1]}-${formatDate[0]}`
			this.showCurrentPrice(formatDate)
		},
		showCurrentPrice(formatDate) {
			this.date = formatDate
			this.date_info = formatDate
			this.coin_selected = sessionStorage.getItem('coin_select')
			fetch(`https://api.coingecko.com/api/v3/coins/${this.coin_selected}/history?date=${this.date}&localization=false`)
				.then(response => response.json())
				.then(data => this.historic = data)

			console.log( typeof this.historic.market_data)
		}
	}
}
</script>

<template>
	<section class="flex justify-center items-center mt-6 mb-14 flex-col">
		<h3 class="font-kdam mb-6 text-lg sm:text-xl w-56 sm:w-auto">3. To view the history, you must specify the date and send:</h3>
		<input type="date" class="w-60 bg-stone-800 px-4 py-4 mt-4 font-cabin font-medium text-lg border-solid border-2 border-stone-200 rounded-xl sm:w-96" v-model="date">
		<label class="w-60 text-center text-red-500" v-if="date_incomplet_error">The date is incomplet, please fill in completely!</label>
		<div class="w-60 flex items-center justify-end mt-4 sm:w-96">
			<button class="bg-slate-200 text-stone-800 px-4 py-1 sm:px-6 rounded-full font-cabin font-medium text-lg sm:text-2xl" @click="validateDate">Send</button>
		</div>
		<div v-if="historic">
			<div class="w-60 flex items-center justify-center mt-4 flex-col sm:w-96" v-if="historic.market_data">
				<span>Coin selected: {{ coin_selected }}</span>
				<span>Date selected: {{ date_info }}</span>
				<h4 class="font-pacifico text-2xl font-medium bg-stone-200 text-stone-800 py-4 px-4 text-center rounded-xl border-solid border-2 border-lime-600 animate-pulse mt-4 sm:w-96">${{ historic.market_data.current_price.usd }}</h4>
			</div>
			<div class="font-pacifico font-medium bg-stone-200 text-stone-800 py-4 px-4 text-center rounded-xl border-solid border-2 border-red-500 animate-pulse mt-6 sm:w-96" v-else-if="historic.market_data == undefined">
				<label>This date is invalid for this crypto!</label>
			</div>
		</div>
	</section>
</template>