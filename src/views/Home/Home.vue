<script>
import { mainCards } from "../../constants/mainCard";

export default {
	data() {
		return {
			mainCards: mainCards,
		};
	},
	components: {},
};
</script>

<template>
	<div
		class="justify-evenly grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
		<div
			class="shadow-xl p-3 rounded-xl border-yellow-500 border-2 h-[180px]"
			v-for="el in mainCards">
			<div class="text-start">
				<i
					:class="el.icon"
					class="text-6xl mb-4"
					:style="'color:' + el.color"></i>
				<p class="text-[#6C6C6C]">{{ el.title }}</p>
				<h2 class="text-end text-3xl font-medium pt-3">{{ el.text }}</h2>
			</div>
		</div>
	</div>
</template>

<style></style>
