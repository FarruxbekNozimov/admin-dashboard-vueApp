<script>
export default {
	name: "Header",
	props: {},
};
</script>

<template>
	<header class="bg-[#E5E5E0] shadow-md w-[100%] h-[57px] p-1">
		<nav class="flex justify-between">
			<div
				class="bg-white p-1 flex justify-center items-center border-2 border-slate-400 rounded-lg">
				<input
					type="text"
					class="text-xl outline-none rounded-md px-3 h-[30px] bg-none bg-white"
					placeholder="Search ..." />
				<i class="bx bx-search-alt-2 text-2xl cursor-pointer"></i>
			</div>
			<div class="flex w-[200px]">
				<h4 class="text-lg">Abdug'aniyev Gulchapchap</h4>
				
			</div>
		</nav>
	</header>
</template>

<style scoped></style>
