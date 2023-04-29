<script>
export default {
	name: "User",
	props: {
		name: String,
	},
};
</script>

<template>
	<div class="flex w-[240px] items-center gap-5">
		<h4 class="text-md text-yellow-900 font-semibold">
			{{ this.name }}
		</h4>
		<img
			src="https://picsum.photos/id/133/50/50"
			class="object-cover rounded-full"
			alt="" />
	</div>
</template>
<style scoped></style>
