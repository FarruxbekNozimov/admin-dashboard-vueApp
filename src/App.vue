<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Header from "./components/Header/Header.vue";
import Home from "./views/Home/Home.vue";
export default {
	data() {
		return {};
	},
	components: {
		Sidebar,
		Header,
		Home,
	},
};
</script>

<template>
	<!-- <Header :toggle="toggleMenu" /> -->
	<!-- <Header /> -->
	<main class="flex">
		<aside class="top-0 bg-zinc-800">
			<Sidebar />
		</aside>

		<section class="main max-w-full w-[100%] grow-2">
			<router-view class="bg-cyan-200"> </router-view>
		</section>
	</main>
</template>

<style></style>
