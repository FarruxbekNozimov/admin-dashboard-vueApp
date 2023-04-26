<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";

export default {
	data() {
		return {};
	},
	components: {
		Sidebar,
	},
};
</script>

<template>
	<main>
		<aside><Sidebar /></aside>
		<section class="main"></section>
	</main>
</template>

<style scoped></style>
