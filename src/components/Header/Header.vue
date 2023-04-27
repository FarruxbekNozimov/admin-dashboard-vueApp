<script>
import User from "../../ui/User/User.vue";

export default {
	name: "Header",
	props: {},
	components: {
		User: User,
	},
};
</script>

<template>
	<header class="bg-[#E5E5E0] shadow-md">
		<nav class="flex justify-between w-[100%] h-[60px] p-2 px-4">
			<div
				class="bg-white px-3 flex justify-center items-center border-2 border-slate-400 rounded-lg">
				<input
					type="text"
					class="text-lg outline-none rounded-md px-3 h-[25px] bg-none bg-white"
					placeholder="Search ..." />
				<i class="bx bx-search-alt-2 text-2xl cursor-pointer"></i>
			</div>
			<User>Gulchapchap Aliyev</User>
		</nav>
	</header>
</template>

<style scoped></style>
