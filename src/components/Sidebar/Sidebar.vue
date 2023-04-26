<script>
import { navLinks } from "../../constants/navLink";

export default {
	data() {
		return {
			navLinks: navLinks,
			toggle: true,
		};
	},
};
</script>

<template>
	<div
		class="sidebar w-[250px] shadow-xl shadow-sky-900 min-h-screen relative duration-300"
		:class="toggle ? 'w-[250px]' : 'w-[60px]'">
		<a
			href="#"
			class="logo text-center text-2xl p-3 block text-cyan-400 font-bold duration-700"
			v-if="toggle"
			>DASHBOARD</a
		>
		<a v-else href="#" class="h-[60px] w-[50px] block m-0 p-0"></a>
		<button
			@click="($event) => (this.toggle = !this.toggle)"
			class="flex justify-center items-center focus:ring-1 text-3xl absolute right-2 top-3 w-[35px] h-[36px] rounded-lg bg-cyan-500 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
			:class="toggle ? '' : 'w-[50px] left-1 h-[50px]'">
			<i class="bx bx-chevron-left" v-if="toggle"></i>
			<i class="bx bx-chevron-right" v-else></i>
		</button>
		<ul class="list p-1 duration-700">
			<li
				class="list_item p-4 my-3 text-lg duration-500 cursor-pointer bg-cyan-500 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
				:class="
					toggle
						? ' rounded-2xl'
						: 'w-[50px] h-[50px] rounded-lg flex items-center'
				"
				v-for="el in navLinks">
				<router-link :href="el.link" class="list_item--link flex items-center">
					<i :class="el.icon" class="text-xl"></i>
					<span class="ms-2" v-if="toggle">{{ el.title }}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style></style>
