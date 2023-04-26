<script>
import { navLinks } from "../../constants/navLinks";

export default {
	data() {
		return {
			navlinks: navLinks,
		};
	},
};
</script>

<template>
	<div class="sidebar">
		<a href="#">ADMIN DASHBOARD</a>
		<ul class="list">
			<li class="list__item" v-for="el in navlinks">
				<a :href="el.link" class="list__item--link">
					<i :class="el.icon"></i> <span>{{ el.title }}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
