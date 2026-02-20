import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Product from "../views/ProductView.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/about", component: About },
	// Product view handles rendering details for a given product id
	{ path: "/product/:id", component: Product, props: true },
	// 404 fallback could be added here if desired
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
