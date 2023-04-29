<script>
import User from "../../ui/User/User.vue";
import getUser from "../../service/funcs/getUser";

export default {
	name: "Header",
	data() {
		return {
			user: {},
		};
	},
	components: {
		User: User,
	},

	methods: {
		async getUserByToken() {
			let res = await getUser();
			this.user = res.data;
		},
	},

	mounted() {
		this.getUserByToken();
	},
};
</script>

<template>
	<header class="bg-[#E5E5E0] shadow-md border-b-yellow-400 border-b-2">
		<nav class="flex justify-between w-[100%] h-[60px] p-2 px-4">
			<div
				class="bg-white px-3 flex justify-center items-center border-2 border-slate-400 rounded-lg w-[300px]">
				<input
					type="text"
					class="w-[250px] text-lg outline-none rounded-md px-3 h-[25px] bg-none bg-white"
					placeholder="Search ..." />
				<i class="bx bx-search-alt-2 text-2xl cursor-pointer"></i>
			</div>
			<User name="this.user.first_name"></User>
		</nav>
	</header>
</template>

<style scoped></style>
