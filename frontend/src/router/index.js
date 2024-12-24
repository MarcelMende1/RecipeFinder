import { createRouter, createWebHistory } from "vue-router";

// import vue components that act as views
import HomeView from "@/views/HomeView.vue";
import RecipesView from "@/views/RecipesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/recipes',
            name: 'recipes',
            component: RecipesView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        },
    ],
});


export default router;
