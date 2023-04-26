import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Employee from "../views/Employee/Employee.vue";
import ErrorPage from "../views/Error/ErrorPage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
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
		{
			path: "/:pathMatch(.*)*",
			component: ErrorPage,
			name: "ErrorPage",
		},

		// {
		// 	path: "/new-order",
		// 	component: Home,
		// 	name: "Home",
		// },
	],
});

export default router;
