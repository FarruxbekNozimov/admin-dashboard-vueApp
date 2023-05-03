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
		class="sidebar w-[270px] bg-gray-300 border-r-yellow-400 border-r-2 h-[100vh] relative duration-300"
		:class="toggle ? 'w-[270px]' : 'w-[80px]'">
		<a
			href="#"
			class="border-l-5 border-yellow-600 text-center text-2xl p-3 block text-black font-bold duration-700"
			v-if="toggle"
			>DASHBOARD</a
		>
		<a v-else href="#" class="h-[60px] w-[50px] block m-0 p-0"></a>
		<button
			@click="($event) => (this.toggle = !this.toggle)"
			class="flex justify-center items-center focus:ring-1 text-3xl absolute right-2 top-3 w-[35px] h-[36px] rounded-lg bg-yellow-400 hover:bg-yellow-400 hover:shadow-lg hover:shadow-cyan-500/50"
			:class="toggle ? '' : 'w-[50px] left-4 h-[50px]'">
			<i class="bx bx-chevron-left" v-if="toggle"></i>
			<i class="bx bx-chevron-right" v-else></i>
		</button>
		<div class="text-center mt-[10px] hidden md:block" v-if="toggle">
			<img
				src="../../assets/avatar.jpg"
				alt=""
				class="bg-slate-600 w-[100px] h-[100px] rounded-full mx-auto object-cover hover:object-scale-down duration-700" />
			<h3 class="text-xl mt-4 font-bold">Toshmat G'ishmatov</h3>
			<span class="text-[#FEAF00] text-lg">Admin</span>
		</div>

		<div
			class="list duration-700 pt-5"
			:class="toggle ? 'p-7 pb-0' : 'p-4 w-[50px] left-4 h-[50px]'">
			<router-link
				v-for="el in navLinks"
				:to="el.link"
				class="list_item p-2 my-1 text-lg duration-500 cursor-pointer bg-yellow-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50 active:bg-yellow-400 flex items-center"
				:class="
					toggle
						? 'rounded-lg ps-10'
						: 'w-[50px] h-[50px] rounded-lg flex items-center ps-4'
				">
				<i :class="el.icon" class="text-xl"></i>
				<span class="ms-2 hidden md:block" v-if="toggle">{{ el.title }}</span>
			</router-link>
			<span
				v-on:click="() => localStorage.removeItem('token')"
				class="mt-10 text-lg duration-700 cursor-pointer text-center flex justify-center items-center text-red-700 font-bold hover:bg-red-600 hover:text-white"
				:class="
					toggle
						? 'rounded-lg w-[50%] mx-auto'
						: 'w-[50px] h-[50px] rounded-lg text-start bg-red-700 text-white'
				">
				<span class="me-2" v-if="toggle">Logout</span>
				<i class="text-2xl bx bx-log-in-circle"></i>
			</span>
		</div>
	</div>
</template>

<style scoped>
.router-link-active {
	background-color: blue;
	color: #fff;
}
</style>
