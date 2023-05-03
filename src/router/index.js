import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Students from "../views/Students/Students.vue";
import Payment from "../views/Payment/Payment.vue";
import ErrorPage from "../views/Error/ErrorPage.vue";
import Login from "../views/Login/Login.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: Dashboard,
			name: "Dashboard",
			redirect: "/home",
			children: [
				{
					path: "/home",
					component: Home,
					name: "Home",
				},
				{
					path: "/students",
					component: Students,
					name: "Student",
				},
				{
					path: "/payment",
					component: Payment,
					name: "Payment",
				},
			],
		},
		{
			path: "/login",
			component: Login,
			name: "Login",
		},
		{
			path: "/:pathMatch(.*)*",
			component: ErrorPage,
			name: "ErrorPage",
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.name !== "Login" && !localStorage.getItem("token"))
		next({ name: "Login" });
	else if (to.name == "Login" && localStorage.getItem("token"))
		next({ name: "Dashboard" });
	else next();
});

export default router;
