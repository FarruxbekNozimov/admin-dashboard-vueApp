import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Employee from "../views/Employee/Employee.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home,
			name: "Home",
		},
		{
			path: "/add-employee",
			component: Employee,
			name: "Employee",
		},

		// {
		// 	path: "/new-order",
		// 	component: Home,
		// 	name: "Home",
		// },
	],
});

export default router;
