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
	<main class="flex">
		<aside class="h-[100vh] top-0 bg-[#F2EAE1]">
			<Sidebar />
		</aside>

		<section class="main max-w-full w-[100%] grow-2">
			<Header />
			<router-view class="p-5 h-[88vh]"> </router-view>
		</section>
	</main>
</template>

<style></style>
